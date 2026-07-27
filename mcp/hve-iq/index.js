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
const SOURCES = graph.sources ?? [];

// Days whose perishable content this index cannot see. Only S090 remains: it
// genuinely has none. Surfaced by the exposure tool rather than left as a silent
// gap in a decay answer.
const CLAIM_DAYS = new Set(CLAIMS.map((c) => c.day));
const BLIND = NODES.filter((n) => n.kind === "seminar" && !CLAIM_DAYS.has(n.id)).map((n) => n.id).sort();

const byId = new Map(NODES.map((n) => [n.id, n]));

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
      "Find documents by text, filtered by namespace, kind, or perishability. Use platform_bearing=true to find everything that decays in months.",
    inputSchema: {
      query: z.string().optional().describe("matched against title, headings and platform anchor"),
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
      const hay = [n.title, n.id, n.platform_anchor, ...(n.headings ?? [])].join(" ").toLowerCase();
      return hay.includes(q);
    });
    return ok({
      total: hits.length,
      returned: Math.min(hits.length, limit),
      results: hits.slice(0, limit).map((n) => ({
        id: n.id, path: n.path, kind: n.kind, title: n.title,
        namespace: n.namespace ?? n.primary_namespace, decay: n.decay,
        platform_anchor: n.platform_anchor
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
      "Full metadata for a node plus its typed neighbours: what it depends on, what re-tests it, what grounds it in research, and its paired whitepaper or seminar.",
    inputSchema: { id: z.string().describe("e.g. wiki/seminars/S049") }
  },
  async ({ id }) => {
    const n = byId.get(id);
    if (!n) return ok({ error: `no such node: ${id}`, hint: "ids are paths without .md, e.g. wiki/seminars/S049" });
    return ok({
      ...n,
      depends_on: out("depends_on", id),
      re_tests: out("re_tests", id),
      depended_on_by: inc("depends_on", id),
      re_tested_by: inc("re_tests", id),
      grounded_in: out("grounded_in", id),
      pair: [...out("has_whitepaper", id), ...out("documents", id)],
      part_of: out("part_of", id)
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
  const authorised = (req) => {
    if (!API_KEY) return true;
    const h = req.headers.authorization ?? "";
    return h === `Bearer ${API_KEY}` || req.headers["x-api-key"] === API_KEY;
  };

  const send = (res, code, body) => {
    res.writeHead(code, { "content-type": "application/json" });
    res.end(JSON.stringify(body));
  };

  createServer(async (req, res) => {
    // Container Apps probes this; it must never require auth.
    if (req.url === "/health") {
      return send(res, 200, { status: "ok", nodes: NODES.length, claims: CLAIMS.length, readonly: true });
    }
    if (req.url !== "/mcp") return send(res, 404, { error: "not found. MCP is at /mcp" });
    if (!authorised(req)) return send(res, 401, { error: "unauthorised" });

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
