# AGENTS.md

> Navigation and working contract for AI agents operating in this repository.
> Read this before touching anything. Then load [graph/graph.json](graph/graph.json).

## What this repository is

A body of knowledge about **forward-deployed engineering and hypervelocity engineering, and how to teach it** — together with the research it was derived from and the vendor study notes that started it.

It is **332 markdown files, one graph builder and one MCP server.** The knowledge layers are markdown and nothing else — the artefact is the argument. The two pieces of code are both **derived tooling**: [scripts/build-graph.ps1](scripts/build-graph.ps1) regenerates the index from the files, and [mcp/hve-iq](mcp/hve-iq/README.md) serves it read-only. **Neither holds a fact of its own, and neither ever writes to the substrate.**

**The three-year BSc programme in `wiki/` is a seed, not the product.** It is one *projection* over the knowledge — the first built and the one that happens to be finished. Other projections (a two-day workshop, certification prep, an engagement playbook, a thirty-day onboarding path) are read models over the same claims and are equally legitimate. An agent asked for a format that is not the BSc is not being asked to invent something; it is being asked to project. See [concepts/projections.md](concepts/projections.md) for what a projection may and may not do.

**The knowledge is eight namespaces, not one.** Each has its own warrant standard, its own decay rate and its own specialization frontier, and **claims may not be compared across them raw**. A Learn page and a learning-science finding are both "evidence" and neither licenses what the other licenses. See [concepts/namespaces.md](concepts/namespaces.md). Every node in the graph carries `primary_namespace`, `namespaces`, `decay` and `platform_bearing`.

The single number worth holding: **212 of 221 wiki pages are platform-bearing, but only 40 have `platform` as their primary namespace.** The durable/perishable split is claim-level inside pages, not page-level.

**A dependency is relative to an assumed entry state**, and the wiki natively encodes only one — the BSc's, which is *knows nothing*. [concepts/entry-state.md](concepts/entry-state.md) classifies all 90 days as `ordinary-professional-experience` (2), `either` (47) or `this-programme-only` (41) against a fixed reference professional, so other projections can compute their own closure. That register is **`method` namespace, has no external warrant, and has never been tested against a real audience** — read its limitations before quoting any number derived from it. It lives in `concepts/` and not in the seminar files on purpose: it is cross-projection, and the seminar files are one projection's substrate.

## The three layers, and the rule that binds them

```
sources/     raw material        →  research/    verified notes      →  wiki/       the programme
11 files                            90 files                            221 files
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
- **Never assert** any of: the "36% retrieval improvement" claim; "agents launch in weeks rather than months"; any five-stage maturity model; any analyst projection; any Foundry evaluator's agreement with human judgement (none is published); any Purview or Defender detection or false-positive rate (none is published). These appear in the repository **only** in the prohibition lists on [11-Microsoft-AI-Platform-Map.md](wiki/program/11-Microsoft-AI-Platform-Map.md) and [09-Durable-and-Perishable-Register.md](wiki/program/09-Durable-and-Perishable-Register.md).
- **Links are workspace-relative**, always: `[S049](wiki/seminars/S049.md)`, never `./` and never absolute.

## The graph

[graph/graph.json](graph/graph.json) is the fastest way to answer a structural question without reading 323 files. Regenerate it after any structural change:

```powershell
pwsh ./scripts/build-graph.ps1
```

It is derived entirely from the files and holds no facts of its own, so it is always safe to rebuild and must never be hand-edited. Schema: [graph/README.md](graph/README.md).

**Use it to answer questions like:**

| Question | Approach |
|---|---|
| Which days teach Azure AI Search? | filter nodes on `platform_anchor` |
| What decays in months? | filter on `platform_bearing` — **212 pages**, then read their perishability registers |
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

**Seminar days** (`wiki/seminars/S001.md`–`S090.md`) carry a header block, eight phases with fixed minute budgets — 25 · 20 · 45 · 50 · 90 · 40 · 30 · 20 — each with a bolded `**Warrant.**`, then Between-day protocol, Assessment, Perishable content, Related pages. Assessment-bearing days (marked ⊘) use a different phase layout and are listed in [08-Seminar-Day-Index.md](wiki/program/08-Seminar-Day-Index.md).

**Whitepapers** (`wiki/whitepapers/WP-001.md`–`WP-090.md`) follow [05-Whitepaper-Standard.md](wiki/program/05-Whitepaper-Standard.md) exactly: Abstract, §1–§9, then `## Evidence status`. §8 requires at least two objections, each stated at its strongest, with **at least one explicitly conceded** and the declined fix named. §9 requires falsifiable predictions each with a named `*Instrument:*`.

**Specifications** list their checked elements and close with **"Nothing else is assessed."** — except for S001–S040, which predate the rule and are deliberately left unamended so the defect that produced the rule stays legible. That is a decision, not an oversight; see [03-Assessment-Architecture.md](wiki/program/03-Assessment-Architecture.md).

## The self-correction record — do not flatten it

This design corrects itself in public, and the record of it is the repository's most valuable and most fragile feature. Nine instrumentation rules on [04-Seminar-Day-Design-Pattern.md](wiki/program/04-Seminar-Day-Design-Pattern.md), each with its provenance. A [compliance register](wiki/program/05-Whitepaper-Standard.md) recording where the design broke its own rules, with `Fixed` / `Recorded` / `Discharged` status. Pattern-level observations elevated to rules at three instances. Rules amended when they failed, including rule 5, which was found **unsatisfiable at design time** and amended twice.

**When you change something, add to this record rather than erasing what it replaced.** Amendments are annotated at the point of change; superseded positions stay visible. A reader who cannot see the defect cannot evaluate the correction.

## Validation

```powershell
# every internal link resolves
Get-ChildItem -Recurse -Filter *.md | ForEach-Object { $t=Get-Content $_.FullName -Raw
  [regex]::Matches($t,'\]\(([^)\s#]+\.md)(?:#[^)]*)?\)') | ForEach-Object {
    $q=$_.Groups[1].Value -replace '/','\'
    if(-not (Test-Path $q)){ "BROKEN: $($_.Groups[1].Value) <- $($_.Name)" } } }
```

Expected: **3 hits only**, all placeholders inside a fenced code block in `05-Whitepaper-Standard.md`.

```powershell
pwsh ./scripts/build-graph.ps1   # expect 332 nodes, ~7020 edges
```

```bash
cd mcp/hve-iq && npm install && npm run smoke   # 18 checks, all must pass
```

## Known open issues, honestly recorded

- **No version control.** There is no `.git` here. Structural changes are irreversible; keep [graph/move-manifest.json](graph/move-manifest.json) current if you move files.
- **Two rule elevations are unratified** at programme close, recorded in WP-090 §7.
- **WP-090 §8 concedes the instrumentation is probably unexecutable**, and predicts fewer than one in ten of the wiki's own §9 predictions will ever be measured.
- **The platform layer is the most perishable content in the repository.** Two of the six vendor sources were already labelled classic or superseded when read. [11-Microsoft-AI-Platform-Map.md](wiki/program/11-Microsoft-AI-Platform-Map.md) requires verification before every offering, not once a term.
