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

await server.connect(new StdioServerTransport());
