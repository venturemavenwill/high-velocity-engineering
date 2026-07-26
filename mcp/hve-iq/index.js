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

server.registerTool(
  "hve_dependency_closure",
  {
    title: "Compute what a projection must also cover",
    description:
      "Given claims or days you intend to teach, return everything they transitively DEPEND ON. Use this before building a workshop, a course, an onboarding path or a brief: it tells you what you must either deliver or explicitly assume. A dependency constrains ordering in every format; a re-test only constrains it where there is spacing, so re-tests are deliberately excluded.",
    inputSchema: {
      ids: z.array(z.string()).min(1).describe("e.g. ['wiki/seminars/S048','wiki/seminars/S051']"),
      include_re_tests: z.boolean().optional().describe("default false; true also follows the spacing schedule")
    }
  },
  async ({ ids, include_re_tests = false }) => {
    const types = include_re_tests ? ["depends_on", "re_tests"] : ["depends_on"];
    const seen = new Set(ids);
    const queue = [...ids];
    const unknown = ids.filter((i) => !byId.has(i));
    while (queue.length) {
      const cur = queue.shift();
      for (const t of types) for (const nxt of out(t, cur)) {
        if (!seen.has(nxt)) { seen.add(nxt); queue.push(nxt); }
      }
    }
    const implied = [...seen].filter((i) => !ids.includes(i)).sort();
    return ok({
      seed: ids,
      unknown_ids: unknown,
      closure_size: seen.size,
      implied_count: implied.length,
      implied: implied.map((i) => ({ id: i, title: byId.get(i)?.title })),
      note:
        "A depends_on edge is relative to an assumed entry state, and the one encoded here is the BSc's: knows nothing. A projection to experienced practitioners will already satisfy much of this closure — but it must SAY which, rather than leave it implicit."
    });
  }
);

await server.connect(new StdioServerTransport());
