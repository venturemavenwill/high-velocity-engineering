/**
 * End-to-end smoke test. Spawns the server and speaks real MCP over stdio,
 * so it exercises the transport and tool registration, not just the functions.
 *
 *   node smoke.js
 */
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const client = new Client({ name: "hve-iq-smoke", version: "0.1.0" });
await client.connect(new StdioClientTransport({ command: process.execPath, args: [join(HERE, "index.js")] }));

const call = async (name, args = {}) => JSON.parse((await client.callTool({ name, arguments: args })).content[0].text);
let failures = 0;
const check = (label, cond, detail = "") => {
  if (cond) console.log(`  PASS  ${label}${detail && "  — " + detail}`);
  else { console.log(`  FAIL  ${label}${detail && "  — " + detail}`); failures++; }
};

const listedTools = (await client.listTools()).tools;
const tools = listedTools.map((t) => t.name).sort();
console.log("\ntools:", tools.join(", "), "\n");
check("nine tools registered", tools.length === 9, `${tools.length}`);
check("hve_get advertises body controls", ["section", "start_line", "line_count"].every((key) => listedTools.find((t) => t.name === "hve_get")?.inputSchema?.properties?.[key]));

const ns = await call("hve_namespaces");
check("eight namespaces", ns.namespaces.length === 8, ns.namespaces.map((n) => n.namespace).join(", "));
check("platform decays in months", ns.namespaces.find((n) => n.namespace === "platform")?.decay === "months");
check("pedagogy forbids effect sizes", /No effect size/.test(ns.namespaces.find((n) => n.namespace === "pedagogy")?.licenses ?? ""));

const perishable = await call("hve_search", { platform_bearing: true, limit: 1 });
check("platform-bearing pages found", perishable.total === 214, `${perishable.total} (expect 214)`);
const bodySearch = await call("hve_search", { query: "exchangeable model is often wrong about time" });
check("search finds body-only text", bodySearch.results.some((result) => result.id === "wiki/seminars/S049" && result.snippet?.includes("exchangeable model")));

const s049 = await call("hve_get", { id: "wiki/seminars/S049" });
check("S049 resolves", s049.title?.includes("Clustering"), s049.title);
check("S049 depends on S028", s049.depends_on.includes("wiki/seminars/S028"), s049.depends_on.join(", "));
check("S049 re-tests S022 and S043", s049.re_tests.length === 2, s049.re_tests.join(", "));
check("S049 paired with WP-049", s049.pair.includes("wiki/whitepapers/WP-049"));
check("hve_get returns document body", s049.content?.startsWith("# S049 · Clustering") && s049.content_total_lines > 100, `${s049.content_total_lines} lines`);
const s049Assessment = await call("hve_get", { id: "wiki/seminars/S049", section: "Assessment", line_count: 20 });
check("hve_get returns a named section", s049Assessment.content?.startsWith("## Assessment") && !s049Assessment.content.includes("## Perishable content"));

const WORKSHOP = ["S051", "S048", "S053", "S046", "S047", "S064", "S074", "S036", "S050"].map((d) => `wiki/seminars/${d}`);
const workshop = await call("hve_dependency_closure", { ids: WORKSHOP });
check("workshop closure is 57", workshop.closure_size === 57, `${workshop.closure_size}, ${workshop.implied_count} implied`);
check("no unknown seed ids", workshop.unknown_ids.length === 0);
check("novice assumes nothing", workshop.must_declare_count === 0 && workshop.may_assume_silently.length === 0);

const strict = await call("hve_dependency_closure", { ids: WORKSHOP, entry_state: "professional-strict" });
const declared = await call("hve_dependency_closure", { ids: WORKSHOP, entry_state: "professional-declared" });
check("entry state prunes the closure", declared.closure_size < strict.closure_size && strict.closure_size <= 57,
  `novice 57 -> strict ${strict.closure_size} -> declared ${declared.closure_size}`);
check("declared owes the reader a list", declared.must_declare_count > 0, `${declared.must_declare_count} to declare`);
check("nothing declarable is also delivered", declared.implied.every((n) => n.satisfiable_from === "this-programme-only"));
check("S049 is programme-only", (await call("hve_get", { id: "wiki/seminars/S049" })).satisfiable_from === "this-programme-only");

const withRetests = await call("hve_dependency_closure", { ids: ["wiki/seminars/S049"], include_re_tests: true });
const without = await call("hve_dependency_closure", { ids: ["wiki/seminars/S049"] });
check("re-tests widen the closure", withRetests.closure_size > without.closure_size, `${without.closure_size} -> ${withRetests.closure_size}`);

const missing = await call("hve_get", { id: "wiki/seminars/S999" });
check("unknown id fails gracefully", Boolean(missing.error));

const allClaims = await call("hve_platform_exposure", { limit: 1 });
check("618 platform claims indexed", allClaims.total_claims_indexed === 618, `${allClaims.total_claims_indexed}`);
check("only S090 remains a blind spot", allClaims.blind_spot_days.length === 1 && allClaims.blind_spot_days[0] === "wiki/seminars/S090",
  `${allClaims.blind_spot_days.length} day(s)`);

const foundry = await call("hve_platform_exposure", { product: "Foundry" });
check("Foundry exposure found", foundry.matched > 0 && foundry.days_affected > 0, `${foundry.matched} claims across ${foundry.days_affected} days`);
check("each hit pairs instance with durable claim",
  foundry.by_day.every((d) => d.claims.every((c) => c.teaches && c.instance_at_risk)));

const scoped = await call("hve_platform_exposure", { days: ["wiki/seminars/S016"] });
check("day scoping works", scoped.days_affected === 1 && scoped.blind_spot_days.length === 0, `${scoped.matched} claims in S016`);

const blindScope = await call("hve_platform_exposure", { days: ["wiki/seminars/S090"] });
check("scoping a blind day warns instead of returning nothing", blindScope.matched === 0 && blindScope.blind_spot_days.length === 1);

const early = await call("hve_platform_exposure", { days: ["wiki/seminars/S001"] });
check("the converted early days are now visible", early.matched > 0 && early.blind_spot_days.length === 0, `${early.matched} claims in S001`);

const preds = await call("hve_predictions", { limit: 1 });
check("512 predictions indexed", preds.total_indexed === 512, `${preds.total_indexed}`);
check("predictions are flagged unmeasured", /UNMEASURED/.test(preds.note));
const calib = await call("hve_predictions", { query: "calibration", limit: 100 });
check("predictions are searchable", calib.matched > 0, `${calib.matched} mention calibration`);
check("every prediction carries an instrument", calib.results.every((p) => p.instrument));

const ev = await call("hve_evidence", { limit: 1 });
check("360 evidence rows indexed", ev.total_indexed === 360, `${ev.total_indexed} (90 papers x 4 classes)`);
const wp049 = await call("hve_evidence", { whitepaper: "WP-049" });
check("a paper has all four classes", wp049.matched === 4, `${wp049.matched}`);
const risky = await call("hve_evidence", { evidence_class: "general-knowledge", limit: 1 });
check("general-knowledge class is queryable", risky.matched === 90, `${risky.matched} papers assert from general knowledge`);
check("class 2 licenses direction only", /No effect size/.test(risky.results[0].licenses));
const dell = await call("hve_evidence", { source: "dellacqua" });
check("reverse source lookup works", dell.matched > 0, `${dell.matched} evidence rows would be affected`);

const moves = await call("hve_teaching_moves", { limit: 1 });
check("680 teaching moves indexed", moves.total_moves_indexed === 680, `${moves.total_moves_indexed}`);
check("every day has an opening", moves.days_matched === 90, `${moves.days_matched} days`);
check("moves are flagged as openings, not scripts", /not scripts/.test(moves.note));
const elicit = await call("hve_teaching_moves", { day: "S049", kind: "elicit", limit: 100 });
check("a day's eliciting items are retrievable", elicit.total > 0 && elicit.results.every((m) => m.phase === 1),
  `${elicit.total} items in S049`);
const contrast = await call("hve_teaching_moves", { day: "S072", kind: "contrast", limit: 100 });
check("contrasting cases carry their label", contrast.total > 0 && contrast.results.every((m) => m.label),
  `${contrast.total} cases, first ${contrast.results[0]?.label}`);
check("the extractor declares its own gap", /Absence here is not absence/.test(contrast.incomplete));
const noDay = await call("hve_teaching_moves", { day: "S999" });
check("unknown day fails gracefully", Boolean(noDay.error));

const src = await call("hve_sources", { limit: 1 });
check("58 sources registered", src.total_sources === 58, `${src.total_sources}`);
check("read state is tallied", src.all_by_read.unread === 13 && src.all_by_read.full === 28,
  `unread ${src.all_by_read.unread}, abstract ${src.all_by_read.abstract}, full ${src.all_by_read.full}`);
const unread = await call("hve_sources", { read: "unread", limit: 100 });
check("unread sources are findable", unread.matched === 13, `${unread.matched}`);
check("exposure is declared a floor", /FLOOR/.test(unread.note));
check("unread sources carry their access reason", unread.results.every((s) => s.access));
const prof = await call("hve_sources", { whitepaper: "WP-049" });
check("a paper's warrant profile resolves", prof.evidence_rows === 4 && typeof prof.read_profile === "object",
  `${prof.attributable_sources} attributable sources`);

await client.close();
console.log(failures ? `\n${failures} FAILED\n` : "\nall passed\n");
process.exit(failures ? 1 : 0);
