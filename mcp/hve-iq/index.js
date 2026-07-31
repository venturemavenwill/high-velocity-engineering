#!/usr/bin/env node
/**
 * HVE IQ — MCP read server over the FDE/HVE knowledge graph.
 *
 * Read path only. No LLM, no network, no writes. It answers structural questions
 * about the knowledge so that any agent — Copilot in an IDE or CLI, a Foundry
 * agent, Copilot Studio, or the repository's own research loop — can consume the
 * same thing.
 *
 * The graph is DERIVED. This server never writes to it, and never writes to the
 * substrate. If the graph disagrees with the markdown, the markdown is right and
 * the graph is stale: run `pwsh ./scripts/build-graph.ps1`.
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = process.env.HVE_REPO_ROOT ?? join(HERE, "..", "..");

const graph = JSON.parse(readFileSync(join(REPO, "graph", "graph.json"), "utf8"));
const NODES = graph.nodes;
const EDGES = graph.edges;
const CLAIMS = graph.claims ?? [];
const PREDICTIONS = graph.predictions ?? [];
const EVIDENCE = graph.evidence ?? [];
const MOVES = graph.teaching_moves ?? [];
const SOURCES = graph.sources ?? [];

// Days whose perishable content this index cannot see. Only S090 remains: it
// genuinely has none. Surfaced by the exposure tool rather than left as a silent
// gap in a decay answer.
const CLAIM_DAYS = new Set(CLAIMS.map((c) => c.day));
const BLIND = NODES.filter((n) => n.kind === "seminar" && !CLAIM_DAYS.has(n.id)).map((n) => n.id).sort();

const byId = new Map(NODES.map((n) => [n.id, n]));
const documentCache = new Map();
const getMarkdown = (node) => {
  if (!documentCache.has(node.id)) documentCache.set(node.id, readFileSync(join(REPO, node.path), "utf8"));
  return documentCache.get(node.id);
};

const readDocument = (node, section, startLine, lineCount) => {
  const markdown = getMarkdown(node);
  const allLines = markdown.split(/\r?\n/);
  let lines = allLines;
  let baseLine = 1;

  if (section) {
    const wanted = section.trim().toLowerCase();
    const sectionStart = allLines.findIndex((line) => {
      const match = line.match(/^##\s+(.+?)\s*$/);
      return match?.[1].trim().toLowerCase() === wanted;
    });
    if (sectionStart < 0) {
      return { error: `no such section: ${section}`, available_sections: node.headings ?? [] };
    }
    let sectionEnd = allLines.findIndex((line, index) => index > sectionStart && /^##\s+/.test(line));
    if (sectionEnd < 0) sectionEnd = allLines.length;
    lines = allLines.slice(sectionStart, sectionEnd);
    baseLine = sectionStart + 1;
  }

  const offset = Math.min(startLine - 1, lines.length);
  const selected = lines.slice(offset, offset + lineCount);
  return {
    content: selected.join("\n"),
    content_start_line: baseLine + offset,
    content_end_line: baseLine + offset + Math.max(selected.length - 1, 0),
    content_total_lines: lines.length,
    content_truncated: offset + selected.length < lines.length
  };
};

/** adjacency, built once: type -> from -> [to] */
const OUT = new Map();
const IN = new Map();
for (const e of EDGES) {
  if (!OUT.has(e.type)) OUT.set(e.type, new Map());
  if (!IN.has(e.type)) IN.set(e.type, new Map());
  const o = OUT.get(e.type), i = IN.get(e.type);
  if (!o.has(e.from)) o.set(e.from, []);
  if (!i.has(e.to)) i.set(e.to, []);
  o.get(e.from).push(e.to);
  i.get(e.to).push(e.from);
}
const out = (type, id) => OUT.get(type)?.get(id) ?? [];
const inc = (type, id) => IN.get(type)?.get(id) ?? [];

/**
 * Warrant standards per namespace. concepts/namespaces.md is AUTHORITATIVE —
 * this map must be updated alongside it. Decay and cadence are not duplicated
 * here; they are read from the graph nodes, which derive them.
 */
const WARRANT = {
  platform:    "What the documentation says, at a stated version, together with what it does not report that a reader would need. States bounds; never accuracies.",
  "ai-systems":"Mechanism, verified. Magnitudes are properties of a particular model after a particular training run and do not transfer.",
  measurement: "An identity under a stated model, or an interval with its dependency structure argued. Exactly as good as the model.",
  pedagogy:    "Direction and mechanism only. No effect size, ever.",
  assessment:  "An ordinal judgement with mandatory narrative substantiation. No percentages, no carry-forward.",
  "fde-craft": "A transferable practice pattern with weak formal warrant, honestly labelled as such.",
  curriculum:  "Design reasoning, plus accreditation mapping where a standard exists.",
  method:      "Design reasoning with no external warrant. The instrumentation rules, the compliance register, the pattern observations."
};

const ok = (data) => ({ content: [{ type: "text", text: JSON.stringify(data, null, 2) }] });

// Built per connection. stdio needs one; HTTP needs a fresh one per request,
// because a transport binds to exactly one server. The graph above is loaded
// once at module scope and shared — only the thin server wrapper is rebuilt.
function buildServer() {
const server = new McpServer({ name: "hve-iq", version: "0.1.0" });

// ---------------------------------------------------------------- namespaces

server.registerTool(
  "hve_namespaces",
  {
    title: "List the eight knowledge namespaces",
    description:
      "The knowledge is eight namespaces, not one. Each has its own warrant standard and decay rate, and CLAIMS MAY NOT BE COMPARED ACROSS THEM RAW. Call this first to learn what a claim from a given namespace does and does not license.",
    inputSchema: {}
  },
  async () => {
    const seen = new Map();
    for (const n of NODES) {
      const ns = n.namespace ?? n.primary_namespace;
      if (!ns) continue;
      if (!seen.has(ns)) seen.set(ns, { namespace: ns, licenses: WARRANT[ns], decay: n.decay, verify_cadence: n.verify_cadence, pages: 0 });
      seen.get(ns).pages++;
    }
    return ok({
      rule: "No claim crosses a namespace boundary without decoding. A platform claim is not evidence for a pedagogy conclusion, and a pedagogy claim never carries a magnitude anywhere.",
      namespaces: [...seen.values()].sort((a, b) => b.pages - a.pages)
    });
  }
);

// ---------------------------------------------------------------- search

server.registerTool(
  "hve_search",
  {
    title: "Search the knowledge",
    description:
      "Find documents by text across titles, headings, and Markdown bodies, filtered by namespace, kind, or perishability. Body matches include a short context snippet. Use platform_bearing=true to find everything that decays in months.",
    inputSchema: {
      query: z.string().optional().describe("matched against title, headings, platform anchor, and Markdown body"),
      namespace: z.string().optional().describe("one of the eight; see hve_namespaces"),
      kind: z.string().optional().describe("seminar | whitepaper | module | quarter | program-page | research-note | ..."),
      platform_bearing: z.boolean().optional().describe("true = carries at least one claim that decays in months"),
      limit: z.number().int().min(1).max(100).optional()
    }
  },
  async ({ query, namespace, kind, platform_bearing, limit = 20 }) => {
    const q = query?.toLowerCase();
    const hits = NODES.filter((n) => {
      if (kind && n.kind !== kind) return false;
      if (namespace && (n.namespace ?? n.primary_namespace) !== namespace) return false;
      if (platform_bearing !== undefined && Boolean(n.platform_bearing) !== platform_bearing) return false;
      if (!q) return true;
      const hay = [n.title, n.id, n.platform_anchor, ...(n.headings ?? []), getMarkdown(n)].join(" ").toLowerCase();
      return hay.includes(q);
    });
    return ok({
      total: hits.length,
      returned: Math.min(hits.length, limit),
      results: hits.slice(0, limit).map((n) => ({
        id: n.id, path: n.path, kind: n.kind, title: n.title,
        namespace: n.namespace ?? n.primary_namespace, decay: n.decay,
        platform_anchor: n.platform_anchor,
        ...(q ? (() => {
          const markdown = getMarkdown(n).replace(/\s+/g, " ");
          const match = markdown.toLowerCase().indexOf(q);
          if (match < 0) return {};
          const start = Math.max(0, match - 100);
          const end = Math.min(markdown.length, match + q.length + 100);
          return { snippet: `${start > 0 ? "…" : ""}${markdown.slice(start, end)}${end < markdown.length ? "…" : ""}` };
        })() : {})
      }))
    });
  }
);

// ---------------------------------------------------------------- get

server.registerTool(
  "hve_get",
  {
    title: "Get one document with its relationships",
    description:
      "Read a document body plus its full metadata and typed neighbours. Returns up to line_count lines; use section or start_line to retrieve a focused section or continue through a long document.",
    inputSchema: {
      id: z.string().describe("e.g. wiki/seminars/S049"),
      section: z.string().optional().describe("exact H2 heading, without ##; returns only that section"),
      start_line: z.number().int().min(1).optional().describe("1-based line within the document or selected section"),
      line_count: z.number().int().min(1).max(500).optional().describe("lines to return; default 200, maximum 500")
    }
  },
  async ({ id, section, start_line = 1, line_count = 200 }) => {
    const n = byId.get(id);
    if (!n) return ok({ error: `no such node: ${id}`, hint: "ids are paths without .md, e.g. wiki/seminars/S049" });
    const document = readDocument(n, section, start_line, line_count);
    if (document.error) return ok({ id, ...document });
    return ok({
      ...n,
      ...document,
      depends_on: out("depends_on", id),
      re_tests: out("re_tests", id),
      depended_on_by: inc("depends_on", id),
      re_tested_by: inc("re_tests", id),
      // retrieves_from is the engagement programme's primary backward reference —
      // a session names the two or three it reaches back to. It was in the graph
      // from the beginning and was never surfaced here, which made every session
      // in that programme look like it had no antecedents at all.
      retrieves_from: out("retrieves_from", id),
      retrieved_by: inc("retrieves_from", id),
      grounded_in: out("grounded_in", id),
      pair: [...out("has_whitepaper", id), ...out("documents", id)],
      part_of: out("part_of", id)
    });
  }
);

// ---------------------------------------------------------------- teaching moves

// Every other tool here returns something finished: a claim, a prediction, an
// evidence class, a document. An agent handed only finished things consolidates,
// because that is the only move the data supports — and a tutor that opens by
// consolidating has lectured. These are the day's OWN opening moves: what it asks
// before it explains, and the cases it puts side by side.
server.registerTool(
  "hve_teaching_moves",
  {
    title: "How a day opens, before it explains",
    description:
      "The eliciting machinery of a seminar day: phase 1's pretest and prediction items, and phase 3's contrasting cases. Call this BEFORE hve_get when you intend to teach rather than to look something up — hve_get returns the day's conclusions, and delivering those first is the lecture this system is designed to avoid. Returns openings to adapt, never a script to read aloud.",
    inputSchema: {
      day: z.string().optional().describe("S049 or wiki/seminars/S049"),
      kind: z.string().optional().describe("elicit = what the day asks before explaining; contrast = the cases it sets side by side"),
      query: z.string().optional().describe("matched against the move text and the day title"),
      limit: z.number().int().min(1).max(100).optional()
    }
  },
  async ({ day, kind, query, limit = 20 }) => {
    const wanted = day ? (day.includes("/") ? day : `wiki/seminars/${day.toUpperCase()}`) : null;
    const q = query?.toLowerCase();
    const hits = MOVES.filter((m) => {
      if (wanted && m.day !== wanted) return false;
      if (kind && m.kind !== kind) return false;
      if (!q) return true;
      return `${m.text} ${m.label ?? ""} ${m.day_title}`.toLowerCase().includes(q);
    });
    if (wanted && !byId.has(wanted)) {
      return ok({ error: `no such day: ${day}`, hint: "days are S001 to S090" });
    }
    const days = [...new Set(hits.map((m) => m.day))];
    return ok({
      total: hits.length,
      returned: Math.min(hits.length, limit),
      days_matched: days.length,
      total_moves_indexed: MOVES.length,
      note:
        "These are openings, not scripts. Adapt them to the person in front of you and to what they have already told you — reading one aloud reproduces a room this learner is not in. An explanation that arrives before a commitment has nothing to attach to, which is what these exist to prevent.",
      incomplete:
        "Extraction is mechanical and partial: a day whose phase 3 runs as prose rather than as labelled cases contributes no contrast moves. Absence here is not absence in the day — read the day if the opening matters.",
      results: hits.slice(0, limit).map((m) => ({
        id: m.id, day: m.day, day_title: m.day_title, kind: m.kind, phase: m.phase,
        seq: m.seq, label: m.label, text: m.text,
        module: m.module, quarter: m.quarter, complexity_class: m.complexity_class
      }))
    });
  }
);

// ---------------------------------------------------------------- closure

// What each entry state lets a projection assume rather than deliver.
// Source: concepts/entry-state.md, which also carries the limitations.
const ASSUMABLE = {
  novice: new Set(),
  "professional-strict": new Set(["ordinary-professional-experience"]),
  "professional-declared": new Set(["ordinary-professional-experience", "either"])
};

server.registerTool(
  "hve_dependency_closure",
  {
    title: "Compute what a projection must also cover",
    description:
      "Given claims or days you intend to teach, return everything they transitively DEPEND ON, and split it into what you must DELIVER, what you must DECLARE as an assumption, and what you may ASSUME silently. Use this before building a workshop, a course, an onboarding path or a brief. A dependency constrains ordering in every format; a re-test only constrains it where there is spacing, so re-tests are excluded by default.",
    inputSchema: {
      ids: z.array(z.string()).min(1).describe("e.g. ['wiki/seminars/S048','wiki/seminars/S051']"),
      include_re_tests: z.boolean().optional().describe("default false; true also follows the spacing schedule"),
      entry_state: z
        .enum(["novice", "professional-strict", "professional-declared"])
        .optional()
        .describe(
          "who the audience is. novice (default) assumes nothing and is the BSc's own entry state. professional-strict assumes only what a five-year engineer reliably holds. professional-declared also assumes what they commonly hold informally, and returns it as must_declare — you owe the reader that list."
        )
    }
  },
  async ({ ids, include_re_tests = false, entry_state = "novice" }) => {
    const types = include_re_tests ? ["depends_on", "re_tests"] : ["depends_on"];
    const assumable = ASSUMABLE[entry_state];
    const unknown = ids.filter((i) => !byId.has(i));
    const seedSet = new Set(ids);

    // Traversal STOPS at an assumed node: if the audience already holds the claim,
    // how they came to hold it is not this projection's problem. Seeds are always
    // expanded — you are teaching them by choice, not by prerequisite.
    const deliver = new Set(ids);
    const assumed = new Set();
    const queue = [...ids];
    while (queue.length) {
      const cur = queue.shift();
      for (const t of types) for (const nxt of out(t, cur)) {
        if (deliver.has(nxt) || assumed.has(nxt)) continue;
        if (!seedSet.has(nxt) && assumable.has(byId.get(nxt)?.satisfiable_from)) { assumed.add(nxt); continue; }
        deliver.add(nxt);
        queue.push(nxt);
      }
    }

    const label = (i) => ({ id: i, title: byId.get(i)?.title, satisfiable_from: byId.get(i)?.satisfiable_from });
    const implied = [...deliver].filter((i) => !seedSet.has(i)).sort();
    const mustDeclare = [...assumed].filter((i) => byId.get(i)?.satisfiable_from === "either").sort();
    const silent = [...assumed].filter((i) => byId.get(i)?.satisfiable_from === "ordinary-professional-experience").sort();

    return ok({
      seed: ids,
      unknown_ids: unknown,
      entry_state,
      closure_size: deliver.size,
      implied_count: implied.length,
      implied: implied.map(label),
      must_declare_count: mustDeclare.length,
      must_declare: mustDeclare.map(label),
      may_assume_silently: silent.map(label),
      note:
        entry_state === "novice"
          ? "Nothing assumed. This is the BSc's own entry state. Re-run with entry_state='professional-declared' if your audience has delivery experience — but you will then owe the reader the must_declare list."
          : "must_declare is not optional. Those claims are commonly held informally and rarely in the precise form the dependents need, so some of your audience will not have them. Entry-state judgements are method-namespace, untested against a real audience: see concepts/entry-state.md."
    });
  }
);

// ---------------------------------------------------------------- decay

server.registerTool(
  "hve_platform_exposure",
  {
    title: "Find what a platform change breaks",
    description:
      "The platform layer decays in months. Given a product, service or API that has changed — or a set of days you are about to deliver — return every perishable platform instance affected, paired with the durable claim it was teaching. Use it before an offering, or when a vendor ships a breaking change. The durable claim almost never changes; the instance does, and swapping the instance is usually the whole fix.",
    inputSchema: {
      product: z.string().optional().describe("e.g. 'Foundry', 'Azure AI Search', 'Agent Framework', 'embeddings', 'prompt caching'"),
      days: z.array(z.string()).optional().describe("restrict to these day ids, e.g. a projection's day list"),
      limit: z.number().int().positive().max(200).optional()
    }
  },
  async ({ product, days, limit = 40 }) => {
    const q = product?.toLowerCase();
    const dayFilter = days?.length ? new Set(days) : null;
    const hits = CLAIMS.filter((c) => {
      if (dayFilter && !dayFilter.has(c.day)) return false;
      if (!q) return true;
      return `${c.platform_anchor ?? ""} ${c.perishable} ${c.durable}`.toLowerCase().includes(q);
    });

    const byDay = new Map();
    for (const c of hits) {
      if (!byDay.has(c.day)) byDay.set(c.day, []);
      byDay.get(c.day).push({ id: c.id, teaches: c.durable, instance_at_risk: c.perishable });
    }

    // A decay answer that silently omits days is worse than no answer.
    const blind = dayFilter ? BLIND.filter((d) => dayFilter.has(d)) : BLIND;

    return ok({
      product: product ?? "(all)",
      total_claims_indexed: CLAIMS.length,
      matched: hits.length,
      days_affected: byDay.size,
      by_day: [...byDay.entries()]
        .sort()
        .slice(0, limit)
        .map(([day, claims]) => ({ day, title: byId.get(day)?.title, platform_anchor: byId.get(day)?.platform_anchor, claims })),
      truncated: byDay.size > limit,
      blind_spot_days: blind,
      note:
        "Perishable content may be used as an instance of durable content but may NEVER be the thing assessed, so a change here should cost you an instance, not a claim. " +
        (blind.length
          ? `${blind.length} day(s) carry perishable content this index cannot see, and must be checked by hand.`
          : "No blind spots in this result.")
    });
  }
);

// ---------------------------------------------------------------- predictions

server.registerTool(
  "hve_predictions",
  {
    title: "Find the falsifiable predictions and their instruments",
    description:
      "Every whitepaper's section 9 states falsifiable predictions, each with a named instrument. This is the repository's own claim layer: the things it says would prove it wrong. Use it to find what a day predicts, what would falsify a design decision, or what instrument a claim depends on. NONE of these have been measured — no cohort has run — so treat every one as an open commitment, not a result.",
    inputSchema: {
      query: z.string().optional().describe("matches the prediction text or its instrument"),
      namespace: z.string().optional(),
      days: z.array(z.string()).optional().describe("restrict to these day ids"),
      limit: z.number().int().positive().max(100).optional()
    }
  },
  async ({ query, namespace, days, limit = 20 }) => {
    const q = query?.toLowerCase();
    const dayFilter = days?.length ? new Set(days) : null;
    const hits = PREDICTIONS.filter((p) => {
      if (namespace && p.namespace !== namespace) return false;
      if (dayFilter && !dayFilter.has(p.day)) return false;
      if (!q) return true;
      return `${p.claim} ${p.instrument ?? ""}`.toLowerCase().includes(q);
    });
    return ok({
      total_indexed: PREDICTIONS.length,
      matched: hits.length,
      results: hits.slice(0, limit).map((p) => ({
        id: p.id, day: p.day, namespace: p.namespace, claim: p.claim, instrument: p.instrument
      })),
      truncated: hits.length > limit,
      note:
        "Status of every prediction here is UNMEASURED, because the programme has never been delivered. WP-090 section 8 concedes the instrumentation is probably unexecutable and predicts fewer than one in ten will ever be measured. Cite these as commitments the design made, never as findings."
    });
  }
);

// ---------------------------------------------------------------- evidence

server.registerTool(
  "hve_evidence",
  {
    title: "Ask what a claim rests on, or what a source is holding up",
    description:
      "Every whitepaper sorts its claims into exactly four evidence classes. Ask what one paper rests on, or invert it: give a research source and find every paper that would be affected if it turned out to be wrong or was retracted. Class 2 (general knowledge, not verified here) is the highest-risk class and licenses direction and mechanism only — never an effect size.",
    inputSchema: {
      whitepaper: z.string().optional().describe("e.g. 'WP-049' or a full node id"),
      source: z.string().optional().describe("a research note, e.g. 'dellacqua' or 'research/04-professional-formation'"),
      evidence_class: z.union([z.number().int().min(1).max(4), z.enum(["verified-here", "general-knowledge", "design-reasoning", "vendor-docs"])]).optional(),
      limit: z.number().int().positive().max(100).optional()
    }
  },
  async ({ whitepaper, source, evidence_class, limit = 25 }) => {
    const wp = whitepaper?.toLowerCase();
    const src = source?.toLowerCase();
    const hits = EVIDENCE.filter((e) => {
      if (wp && !e.whitepaper.toLowerCase().includes(wp)) return false;
      if (typeof evidence_class === "number" && e.class !== evidence_class) return false;
      if (typeof evidence_class === "string" && e.class_name !== evidence_class) return false;
      if (src && !e.cites.some((c) => c.toLowerCase().includes(src))) return false;
      return true;
    });
    const byClass = {};
    for (const e of hits) byClass[e.class_name] = (byClass[e.class_name] ?? 0) + 1;
    return ok({
      total_indexed: EVIDENCE.length,
      matched: hits.length,
      by_class: byClass,
      results: hits.slice(0, limit).map((e) => ({
        id: e.id, whitepaper: e.whitepaper, day: e.day, class: e.class, class_name: e.class_name,
        licenses: e.licenses, cites: e.cites
      })),
      truncated: hits.length > limit,
      note:
        "This indexes the CLASS a claim was placed in and what that class cites, not the individual claims — those are prose inside each class, and splitting them needs authoring judgement this index deliberately does not apply. If you need a specific claim, read the whitepaper's Evidence status section."
    });
  }
);

// ---------------------------------------------------------------- sources

// Reverse index: which evidence rows cite a given research note.
const CITED_BY = new Map();
for (const e of EVIDENCE) {
  for (const c of e.cites ?? []) {
    if (!CITED_BY.has(c)) CITED_BY.set(c, []);
    CITED_BY.get(c).push(e);
  }
}
// Exposure computed here is a FLOOR, not a total: most citations in the evidence
// prose point at a folder-level collected-materials index rather than a named
// note, and those cannot be attributed to a single source.
const AGG_SHARE = (() => {
  const all = EVIDENCE.flatMap((e) => e.cites ?? []);
  const agg = all.filter((c) => c.endsWith("collected-materials")).length;
  return all.length ? Math.round((100 * agg) / all.length) : 0;
})();

server.registerTool(
  "hve_sources",
  {
    title: "Ask how strong the warrant under a claim actually is",
    description:
      "The source register records, per external source, whether anyone actually read it — in full, abstract only, or not at all. Use this to find claims resting on sources nobody opened, to check what a whitepaper's evidence is really worth, or to see what a retraction would touch. `read: 'unread'` is the one to run first.",
    inputSchema: {
      read: z.enum(["full", "abstract", "unread", "unknown"]).optional().describe("filter by whether the source was actually read"),
      query: z.string().optional().describe("matches source title, identifier or access note"),
      whitepaper: z.string().optional().describe("instead return the read-state profile of what this paper rests on, e.g. 'WP-049'"),
      limit: z.number().int().positive().max(100).optional()
    }
  },
  async ({ read, query, whitepaper, limit = 25 }) => {
    if (whitepaper) {
      const wp = whitepaper.toLowerCase();
      const rows = EVIDENCE.filter((e) => e.whitepaper.toLowerCase().includes(wp));
      const cited = new Set(rows.flatMap((e) => e.cites ?? []));
      const named = SOURCES.filter((s) => s.note && cited.has(s.note));
      const profile = {};
      for (const s of named) profile[s.read] = (profile[s.read] ?? 0) + 1;
      return ok({
        whitepaper, evidence_rows: rows.length,
        attributable_sources: named.length,
        read_profile: profile,
        unread: named.filter((s) => s.read === "unread").map((s) => ({ source: s.source, access: s.access, note: s.note })),
        note:
          `Covers only citations naming a source note. ${AGG_SHARE}% of citations in this repository point at a folder-level index instead, so the real exposure is higher than this. An 'unread' source is one the register marks synthesis-only or not consulted — the claim above it is direction-and-mechanism at best.`
      });
    }

    const q = query?.toLowerCase();
    const hits = SOURCES.filter((s) => {
      if (read && s.read !== read) return false;
      if (!q) return true;
      return `${s.source} ${s.identifier} ${s.access}`.toLowerCase().includes(q);
    });
    const byRead = {};
    for (const s of SOURCES) byRead[s.read] = (byRead[s.read] ?? 0) + 1;

    return ok({
      total_sources: SOURCES.length,
      all_by_read: byRead,
      matched: hits.length,
      results: hits.slice(0, limit).map((s) => {
        const rows = s.note ? CITED_BY.get(s.note) ?? [] : [];
        return {
          source: s.source, identifier: s.identifier, access: s.access,
          read: s.read, read_as_recorded: s.read_raw, note: s.note,
          relied_on_by: [...new Set(rows.map((e) => e.whitepaper))].sort()
        };
      }),
      truncated: hits.length > limit,
      note:
        `relied_on_by is a FLOOR. ${AGG_SHARE}% of citations point at a folder-level collected-materials index rather than a named source, and those cannot be attributed here — so anything with an empty list may still be load-bearing. ${SOURCES.filter((s) => !s.note).length} register rows have no matching note, mostly aggregate rows and organisational authors.`
    });
  }
);

return server;
}

// ---------------------------------------------------------------- transports

// stdio when run locally, Streamable HTTP when a PORT is present. Copilot Studio
// and every other remote client speak Streamable HTTP only — SSE was dropped from
// the MCP spec, and stdio cannot cross a network at all.
const PORT = process.env.PORT;

if (!PORT) {
  await buildServer().connect(new StdioServerTransport());
} else {
  const { createServer } = await import("node:http");
  const { StreamableHTTPServerTransport } = await import("@modelcontextprotocol/sdk/server/streamableHttp.js");

  // Optional shared secret. Absent means open, which is correct for a private
  // network and wrong for public ingress — set HVE_API_KEY when exposed.
  const API_KEY = process.env.HVE_API_KEY;
  const { timingSafeEqual } = await import("node:crypto");

  // Constant time, so a near-miss cannot be distinguished from a far-miss by
  // how long the comparison took.
  const matches = (given) => {
    if (typeof given !== "string" || !API_KEY) return false;
    const a = Buffer.from(given, "utf8");
    const b = Buffer.from(API_KEY, "utf8");
    return a.length === b.length && timingSafeEqual(a, b);
  };

  // Clients disagree about how a shared secret travels. Copilot Studio sends
  // whatever you typed as the raw header value; other clients prepend the Bearer
  // scheme themselves. Accepting all three costs nothing and saves every new
  // integration from debugging a 401 that is really a formatting difference.
  const authorised = (req) => {
    if (!API_KEY) return true;
    const auth = String(req.headers.authorization ?? "");
    return matches(auth.replace(/^Bearer\s+/i, "")) || matches(req.headers["x-api-key"]);
  };

  const send = (res, code, body, headers = {}) => {
    res.writeHead(code, { "content-type": "application/json", ...headers });
    res.end(JSON.stringify(body));
  };

  // RFC 6750: a bearer-protected resource must say so when it refuses. A bare
  // 401 tells the client nothing about which scheme to use, and MCP clients that
  // see one commonly fall back to OAuth discovery — probing
  // /.well-known/oauth-authorization-server, finding nothing, and reporting
  // "failed to discover authorization server metadata" rather than "supply a
  // token". Naming the scheme here is what stops that.
  //
  // Deliberately no resource_metadata parameter: that would advertise an OAuth
  // authorization server, and this server has none. It takes a shared secret.
  const unauthorised = (res) =>
    send(res, 401, { error: "unauthorised", hint: "supply the API key as a bearer token, or in an x-api-key header" },
         { "www-authenticate": 'Bearer realm="hve-iq", error="invalid_token"' });

  createServer(async (req, res) => {
    // Container Apps probes this; it must never require auth.
    if (req.url === "/health") {
      return send(res, 200, { status: "ok", nodes: NODES.length, claims: CLAIMS.length, readonly: true });
    }
    if (req.url !== "/mcp") return send(res, 404, { error: "not found. MCP is at /mcp" });
    if (!authorised(req)) return unauthorised(res);

    let body;
    if (req.method === "POST") {
      const chunks = [];
      for await (const c of req) chunks.push(c);
      const raw = Buffer.concat(chunks).toString("utf8");
      try { body = raw ? JSON.parse(raw) : undefined; }
      catch { return send(res, 400, { error: "malformed JSON" }); }
    }

    // Stateless: no session id, a fresh server and transport per request. Lets
    // Container Apps scale to zero and add replicas without sticky routing.
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
    res.on("close", () => transport.close());
    await buildServer().connect(transport);
    await transport.handleRequest(req, res, body);
  }).listen(Number(PORT), () => {
    console.log(`hve-iq listening on ${PORT} — MCP at /mcp, health at /health`);
  });
}
