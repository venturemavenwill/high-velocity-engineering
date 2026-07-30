# AGENTS.md

> Navigation and working contract for AI agents operating in this repository.
> Read this before touching anything. Then load [graph/graph.json](/graph/graph.json).

## What this repository is

A body of knowledge about **forward-deployed engineering and hypervelocity engineering, and how to teach it** — together with the research it was derived from and the vendor study notes that started it.

It is **339 markdown files, one graph builder and one MCP server.** The knowledge layers are markdown and nothing else — the artefact is the argument. The two pieces of code are both **derived tooling**: [scripts/build-graph.ps1](/scripts/build-graph.ps1) regenerates the index from the files, and [mcp/hve-iq](/mcp/hve-iq/README.md) serves it read-only. **Neither holds a fact of its own, and neither ever writes to the substrate.**

**Only the knowledge lives here.** The research agent that proposes upgrades to it runs from a separate private repository, opens pull requests, and is gated by [scripts/verify.ps1](/scripts/verify.ps1) exactly as a human contributor is. The work is [CC BY 4.0](/LICENSE.md) — the summaries in `sources/` and `research/` are original prose and licensed; the training material and books they summarise are not this repository's to license, and are not reproduced.

**The three-year BSc programme in `wiki/` is a seed, not the product.** It is one *projection* over the knowledge — the first built and the one that happens to be finished. Other projections (a two-day workshop, certification prep, an engagement playbook, a thirty-day onboarding path) are read models over the same claims and are equally legitimate. An agent asked for a format that is not the BSc is not being asked to invent something; it is being asked to project. See [concepts/projections.md](/concepts/projections.md) for what a projection may and may not do.

**The knowledge is eight namespaces, not one.** Each has its own warrant standard, its own decay rate and its own specialization frontier, and **claims may not be compared across them raw**. A Learn page and a learning-science finding are both "evidence" and neither licenses what the other licenses. See [concepts/namespaces.md](/concepts/namespaces.md). Every node in the graph carries `primary_namespace`, `namespaces`, `decay` and `platform_bearing`.

The single number worth holding: **214 of 222 wiki pages are platform-bearing, but only 23 have `platform` as their primary namespace.** The durable/perishable split is claim-level inside pages, not page-level.

**That second number moved twice on 2026-07-30, in opposite directions, and both movements were caused by adding text and citing nothing new.** It went 34 → 39 when one platform-namespace source was added and four pages took a citation to it — [S006](/wiki/seminars/S006.md), [S074](/wiki/seminars/S074.md), [WP-074](/wiki/whitepapers/WP-074.md) and [10-Substrate-and-Infrastructure](/wiki/program/10-Substrate-and-Infrastructure.md). It then went 39 → 23 when every seminar day and every whitepaper gained a student-facing section that cites **the notes the page was already resting on**. Pages that had been platform-primary on a thin margin simply started saying what else they stood on.

**Read the number as what it is: a measure of citation density, not of content.** A page does not become less vendor-dependent because it cited a learning-science note; it becomes more honestly described. `platform_bearing` — which is driven by the day's declared anchor rather than by its citation mix — did not move at all, and is the number to use when the question is *what decays in months*. **Nothing was rewritten to cause either movement and nothing should be rewritten to undo them.**

**A dependency is relative to an assumed entry state**, and the wiki natively encodes only one — the BSc's, which is *knows nothing*. [concepts/entry-state.md](/concepts/entry-state.md) classifies all 90 days as `ordinary-professional-experience` (2), `either` (47) or `this-programme-only` (41) against a fixed reference professional, so other projections can compute their own closure. That register is **`method` namespace, has no external warrant, and has never been tested against a real audience** — read its limitations before quoting any number derived from it. It lives in `concepts/` and not in the seminar files on purpose: it is cross-projection, and the seminar files are one projection's substrate.

## The three layers, and the rule that binds them

```
sources/     raw material        →  research/    verified notes      →  wiki/       the programme
11 files                            92 files                            222 files
```

Every external factual claim in `wiki/` traces to a Cliff Note in `research/`, and every Cliff Note records what was verified, from where, and what the source does not say. This is not decoration — it is enforced by the `## Evidence status` section that closes all 90 whitepapers, which separates:

1. **Verified in this repository** — cites a `research/` note.
2. **Cited from general knowledge, not verified here** — direction and mechanism only.
3. **Design reasoning with no external warrant** — the design's own argument.
4. **Grounded in vendor documentation, with its version and its silence recorded** — what the docs say, at what version, and what they omit that a reader would need.

**If you add a claim, you must place it in one of those four classes.** There is no fifth.

## Standing prohibitions

These are absolute and are checked by the validation commands below.

- **No effect size is asserted anywhere in this wiki for an unverified source.** Direction and mechanism only. This applies to vendor material exactly as to research literature.
- **Never assert** any of: the "36% retrieval improvement" claim; "agents launch in weeks rather than months"; any five-stage maturity model; any analyst projection; any Foundry evaluator's agreement with human judgement (none is published); any Purview or Defender detection or false-positive rate (none is published). These appear in the repository **only** in the prohibition lists on [11-Microsoft-AI-Platform-Map.md](/wiki/program/11-Microsoft-AI-Platform-Map.md) and [09-Durable-and-Perishable-Register.md](/wiki/program/09-Durable-and-Perishable-Register.md).
- **Links are root-absolute**, always: `[S049](/wiki/seminars/S049.md)`. The leading slash is load-bearing — GitHub and VS Code both resolve it from the repository root, while a **bare relative path is resolved from the linking file's own directory**. Never `./`, never a bare `wiki/...`, never a full URL to this repo.

  > This convention previously read *workspace-relative*, written as `wiki/seminars/S049.md`. That is wrong everywhere it renders: from `wiki/Home.md` such a link resolves to `wiki/wiki/seminars/S049.md`. **10,166 of 10,203 internal links were dead on GitHub** and the validation command below did not catch it, because it resolved every link from the repository root rather than from the file containing it. Both were fixed on 2026-07-27; the old command is kept in the git history rather than here.

## The graph

[graph/graph.json](/graph/graph.json) is the fastest way to answer a structural question without reading 323 files. Regenerate it after any structural change:

```powershell
pwsh ./scripts/build-graph.ps1
```

It is derived entirely from the files and holds no facts of its own, so it is always safe to rebuild and must never be hand-edited. Schema: [graph/README.md](/graph/README.md).

**Use it to answer questions like:**

| Question | Approach |
|---|---|
| Which days teach Azure AI Search? | filter nodes on `platform_anchor` |
| What breaks if Foundry changes? | `graph/claims.jsonl` — **618 durable/perishable pairs across 89 days**, or `hve_platform_exposure` |
| What would prove this design wrong? | `graph/predictions.jsonl` — **512 predictions, each with a named instrument**, all unmeasured |
| How does a day *open*, before it explains? | `graph/teaching-moves.jsonl` — **680 moves across all 90 days**, or `hve_teaching_moves` |
| What breaks if a source is retracted? | `graph/evidence.jsonl` — **360 rows**, 90 papers × 4 evidence classes, or `hve_evidence` |
| Did anyone actually read the source? | `graph/sources.jsonl` — **58 sources; 13 were never read**, or `hve_sources` |
| What decays in months? | filter on `platform_bearing` — **214 pages**, then read their perishability registers |
| What survives any projection? | filter on `primary_namespace` = `measurement` or `pedagogy` |
| What does S049 depend on? | follow `depends_on` edges out of `wiki/seminars/S049` |
| Which later days retrieve S013? | follow `retrieves_from` edges *into* `wiki/seminars/S013` |
| What can an experienced audience be assumed to hold? | filter on `satisfiable_from` — only **2 days** may be assumed silently |
| What evidence backs WP-053? | follow `grounded_in` edges out of it |
| Which whitepaper documents S070? | follow `documents` / `has_whitepaper` |
| What is in module M10? | filter nodes on `module`, or follow `part_of` |
| Which days are assessed? | filter on `assessment_bearing` — there are 11 |

## Conventions you must preserve

The wiki's structure is load-bearing and heavily cross-referenced. Do not "tidy" it.

**Seminar days** (`wiki/seminars/S001.md`–`S090.md`) carry a header block, eight phases with fixed minute budgets — 25 · 20 · 45 · 50 · 90 · 40 · 30 · 20 — each with a bolded `**Warrant.**`, then Between-day protocol, Assessment, Perishable content, Related pages. Assessment-bearing days (marked ⊘) use a different phase layout and are listed in [08-Seminar-Day-Index.md](/wiki/program/08-Seminar-Day-Index.md).

**Whitepapers** (`wiki/whitepapers/WP-001.md`–`WP-090.md`) follow [05-Whitepaper-Standard.md](/wiki/program/05-Whitepaper-Standard.md) exactly: Abstract, §1–§9, then `## Evidence status`. §8 requires at least two objections, each stated at its strongest, with **at least one explicitly conceded** and the declined fix named. §9 requires falsifiable predictions each with a named `*Instrument:*`.

**Specifications** list their checked elements and close with **"Nothing else is assessed."** — except for S001–S040, which predate the rule and are deliberately left unamended so the defect that produced the rule stays legible. That is a decision, not an oversight; see [03-Assessment-Architecture.md](/wiki/program/03-Assessment-Architecture.md).

## The self-correction record — do not flatten it

This design corrects itself in public, and the record of it is the repository's most valuable and most fragile feature. Nine instrumentation rules on [04-Seminar-Day-Design-Pattern.md](/wiki/program/04-Seminar-Day-Design-Pattern.md), each with its provenance. A [compliance register](/wiki/program/05-Whitepaper-Standard.md) recording where the design broke its own rules, with `Fixed` / `Recorded` / `Discharged` status. Pattern-level observations elevated to rules at three instances. Rules amended when they failed, including rule 5, which was found **unsatisfiable at design time** and amended twice.

**When you change something, add to this record rather than erasing what it replaced.** Amendments are annotated at the point of change; superseded positions stay visible. A reader who cannot see the defect cannot evaluate the correction.

## Validation

**One command gates everything.** Run it before you commit; CI runs it on every pull request.

```powershell
pwsh ./scripts/verify.ps1
```

It checks that the graph rebuilds, that every link is root-absolute and resolves, that no prohibited claim or effect size appears in the wiki, that every whitepaper carries all four evidence classes, that every prediction names an instrument, that every day declares an entry state and has its whitepaper, and that the MCP smoke suite passes. **Invariants, not snapshots** — counts that legitimately grow are reported, never asserted, because a gate that fails on intended change is a gate someone disables. Snapshot regressions live in `mcp/hve-iq/smoke.js`.

The individual checks, if you need to run one in isolation:

```powershell
# every internal link resolves, AND is written root-absolute.
# Resolving from the repo root is only valid because every link starts with '/'.
# A bare relative link would resolve from its own file's directory instead, so the
# second check is what actually prevents the wiki/wiki/... defect from returning.
Get-ChildItem -Recurse -File -Filter *.md |
  Where-Object { $_.FullName -notmatch 'node_modules' } | ForEach-Object {
    $src = $_.Name; $t = Get-Content $_.FullName -Raw
    [regex]::Matches($t,'\]\((?!https?://|#|mailto:)([^)\s]+?)(?:#[^)]*)?\)') | ForEach-Object {
      $l = $_.Groups[1].Value
      if ($l -notmatch '^/')                        { "NOT ROOT-ABSOLUTE: $l <- $src" }
      elseif (-not (Test-Path ($l.TrimStart('/')))) { "BROKEN: $l <- $src" } } }
```

Expected: **3 hits only**, all `BROKEN`, all placeholders inside a fenced code block in `05-Whitepaper-Standard.md`. Any `NOT ROOT-ABSOLUTE` hit is a real defect.

```powershell
pwsh ./scripts/build-graph.ps1   # expect 339 nodes, ~8130 edges, 618 claims, 512 predictions, 360 evidence rows, 680 teaching moves, 58 sources
```

```bash
cd mcp/hve-iq && npm install && npm run smoke   # 40 checks, all must pass
```

## Known open issues, honestly recorded

- **~~No version control.~~ Corrected 2026-07-30: there is a `.git` here, with a remote.** This entry previously read *"there is no `.git` here. Structural changes are irreversible"* and that was false at the time it was read — `git log` returns commits and `origin/main` exists. The instruction it produced was over-cautious rather than dangerous, but it is exactly the class of stale working-contract claim this file tells everyone else not to make. **Keep [graph/move-manifest.json](/graph/move-manifest.json) current anyway**; a rename that the manifest misses is still invisible to every consumer of the graph, whatever git remembers.
- **Two rule elevations are unratified** at programme close, recorded in WP-090 §7.
- **WP-090 §8 concedes the instrumentation is probably unexecutable**, and predicts fewer than one in ten of the wiki's own §9 predictions will ever be measured.
- **The platform layer is the most perishable content in the repository.** Two of the seven vendor sources were already labelled classic or superseded when read. [11-Microsoft-AI-Platform-Map.md](/wiki/program/11-Microsoft-AI-Platform-Map.md) requires verification before every offering, not once a term. **One of the seven is a repository read at a pinned commit** — see [13-Agent-Configuration-Standard.md](/wiki/program/13-Agent-Configuration-Standard.md) — and it is cited only with that commit, package version, host and model attached. Pinning does not slow the decay; it makes the decay visible.
