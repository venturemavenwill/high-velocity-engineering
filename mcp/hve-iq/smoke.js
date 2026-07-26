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

const tools = (await client.listTools()).tools.map((t) => t.name).sort();
console.log("\ntools:", tools.join(", "), "\n");
check("five tools registered", tools.length === 5, `${tools.length}`);

const ns = await call("hve_namespaces");
check("eight namespaces", ns.namespaces.length === 8, ns.namespaces.map((n) => n.namespace).join(", "));
check("platform decays in months", ns.namespaces.find((n) => n.namespace === "platform")?.decay === "months");
check("pedagogy forbids effect sizes", /No effect size/.test(ns.namespaces.find((n) => n.namespace === "pedagogy")?.licenses ?? ""));

const perishable = await call("hve_search", { platform_bearing: true, limit: 1 });
check("platform-bearing pages found", perishable.total === 212, `${perishable.total} (expect 212)`);

const s049 = await call("hve_get", { id: "wiki/seminars/S049" });
check("S049 resolves", s049.title?.includes("Clustering"), s049.title);
check("S049 depends on S028", s049.depends_on.includes("wiki/seminars/S028"), s049.depends_on.join(", "));
check("S049 re-tests S022 and S043", s049.re_tests.length === 2, s049.re_tests.join(", "));
check("S049 paired with WP-049", s049.pair.includes("wiki/whitepapers/WP-049"));

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
check("489 platform claims indexed", allClaims.total_claims_indexed === 489, `${allClaims.total_claims_indexed}`);
check("blind spots are declared", allClaims.blind_spot_days.length === 16 && allClaims.blind_spot_days.includes("wiki/seminars/S001"),
  `${allClaims.blind_spot_days.length} days (S001-S015 prose + S090)`);

const foundry = await call("hve_platform_exposure", { product: "Foundry" });
check("Foundry exposure found", foundry.matched > 0 && foundry.days_affected > 0, `${foundry.matched} claims across ${foundry.days_affected} days`);
check("each hit pairs instance with durable claim",
  foundry.by_day.every((d) => d.claims.every((c) => c.teaches && c.instance_at_risk)));

const scoped = await call("hve_platform_exposure", { days: ["wiki/seminars/S016"] });
check("day scoping works", scoped.days_affected === 1 && scoped.blind_spot_days.length === 0, `${scoped.matched} claims in S016`);

const blindScope = await call("hve_platform_exposure", { days: ["wiki/seminars/S011"] });
check("scoping a blind day warns instead of returning nothing", blindScope.matched === 0 && blindScope.blind_spot_days.length === 1);

await client.close();
console.log(failures ? `\n${failures} FAILED\n` : "\nall passed\n");
process.exit(failures ? 1 : 0);
