# HVE IQ — v0

MCP read server over the FDE/HVE knowledge graph.

**Read path only.** No LLM, no network, no writes. Any agent can consume it — Copilot in an IDE or CLI, a Foundry agent, Copilot Studio, Claude, Cursor, or this repository's own future research loop.

## Why a server and not an agent

The knowledge has to be usable *in any way, by agents serving different purposes*. **An agent has one consumer; a server has all of them.** MCP now spans every Copilot surface — IDE, CLI, the Copilot app, cloud agent and code review — and is equally consumable from Foundry Agent Service and Agent Framework.

## Run

```bash
npm install
npm start          # stdio
npm run smoke      # end-to-end test over real MCP
```

Set `HVE_REPO_ROOT` if running outside the repo. The server reads `graph/graph.json`; if it looks stale, run `pwsh ./scripts/build-graph.ps1`.

## Use it from VS Code

Already configured in [.vscode/mcp.json](/.vscode/mcp.json). Open Copilot Chat in agent mode and ask:

> *"Using hve-iq, what would a two-day workshop on judge bias and criterion construction also have to cover?"*

## Tools

| Tool | What it answers |
|---|---|
| `hve_namespaces` | The eight namespaces, what each licenses, how fast each decays. **Call this first** — claims may not be compared across namespaces raw. |
| `hve_search` | Find documents by title, heading, or body text, with context snippets for body matches. `platform_bearing: true` returns everything that decays in months. |
| `hve_get` | Read a document body and its typed neighbours. Use `section`, `start_line`, and `line_count` to traverse long documents without flooding context. |
| `hve_dependency_closure` | **The differentiator.** Given what you intend to teach, what must you also cover? |
| `hve_teaching_moves` | **How does this day open?** Phase 1's eliciting items and phase 3's contrasting cases. Call it before `hve_get` whenever you intend to teach. |
| `hve_platform_exposure` | A vendor shipped a breaking change. What does it cost you? |
| `hve_predictions` | What does this design say would prove it wrong, and with what instrument? |
| `hve_evidence` | What does this claim rest on — and what breaks if a source is retracted? |
| `hve_sources` | **Did anyone actually read it?** |

### The closure tool is the point

Everything else is retrieval that any RAG system could do. This is not:

```
seed:      9 seminar days (a two-day workshop's claims)

novice                  57 days to cover     — the BSc's entry state
professional-strict     56 days              — assume only what is reliably held
professional-declared   23 days + 8 declared — assume what is held informally, and say so
```

It follows `depends_on` and deliberately **excludes** `re_tests`. A dependency constrains ordering in *every* format; a re-test only constrains it where there is spacing. Those were one edge type until they were split by hand across all 90 days — see [DERIVATION.md](/projections/workshop-2day/DERIVATION.md).

**Traversal stops at whatever the audience already holds.** If they hold a claim, how they came to hold it is not your projection's problem — so its prerequisites are never walked. Seeds are always expanded, because you are teaching those by choice rather than by prerequisite.

The `entry_state` values come from [concepts/entry-state.md](/concepts/entry-state.md), which classifies all 90 days against a fixed reference professional. **Read its limitations before quoting a number.** It is `method` namespace, carries no external warrant, and has never been tested against a real audience — and `must_declare` is not optional output. Those are the claims your audience holds informally and may not hold precisely.

### The exposure tool is the decay answer

The platform layer decays in **months**, which makes "what did this vendor change cost us?" the most frequently asked operational question about this material. `hve_platform_exposure` answers it from **489 durable/perishable pairs** the seminar days had already written:

```
product: "Foundry"  ->  302 claims across 47 days

S016  teaches            Data moves between levels in fixed-size blocks
      instance at risk   The 1,024-token minimum and the 128-token hit increment
```

The pairing is the point. **A vendor change should cost you an instance, not a claim** — that is the rule the [Durable and Perishable Register](/wiki/program/09-Durable-and-Perishable-Register.md) exists to enforce, and seeing both halves together tells you whether you are swapping an example or rewriting a day.

Nothing here is authored by the extractor; it reads tables the days already carry. **One day is invisible to it** — S090, which has no perishable content of substance. The tool declares that in every answer rather than returning a confidently incomplete list.

S001–S015 used to be invisible too. Closing that found something worth knowing: **five of those days already had conforming tables and were hidden by a section heading**, not by a missing format. Thirty claims were one string literal away from being indexed.

### What is claim-atomic, and what is not

All three claim layers are extracted mechanically from structure the substrate already had. **No LLM pass touches them, so none of them can drift.** They differ in granularity, and the difference matters:

| Layer | Rows | Granularity | Covers |
|---|---|---|---|
| Platform claims | **618** | atomic — one durable/perishable pair per row | `platform`, 89 of 90 days |
| Predictions | **512** | atomic — one falsifiable claim + named instrument | **all namespaces**, 90 papers |
| Evidence ledger | **360** | **class-level, not atomic** | all namespaces, 90 papers × 4 classes |
| Teaching moves | **680** | atomic — one eliciting item or one contrasting case | all 90 days; 34 contribute no cases |

**The fourth layer exists because the first three were all answers.** Every one of them returns something finished, and an agent handed only finished things consolidates — not from carelessness, but because consolidating is the only move the data supports. A tutor built on this server did exactly that: it opened a session by delivering eight settled claims to someone who had committed to nothing. `teaching-moves.jsonl` indexes the question each day asks *before* it explains, which is the half of the design that was written down in prose and never made queryable. See [dialogues.md](/mcp/hve-iq/dialogues.md).

The evidence ledger indexes *which class a set of claims was placed in* and *what that class cites* — not the individual claims, because inside each class they are prose: "transfer-appropriate processing, contrasting cases, the generation effect, retrieval practice at expanding intervals…" is one sentence carrying four claims.

**Splitting that needs authoring judgement, and it is deliberately not done here.** A judged split would be the first thing in this repository that could drift silently between rebuilds, and it would need its own warrant discipline. It is a separate decision, not an afterthought.

What the class level already buys you is the question that actually gets asked: *this source was retracted — what depends on it, and at what strength?* `hve_evidence` answers that by inverting the `cites` index.

**Prediction density is flat**: 5.0 to 6.0 per paper in every namespace. The whitepaper standard's §9 requirement produces uniform commitment regardless of subject, which is a mild but real piece of evidence that the standard is doing work. `method` shows zero only because no whitepaper has `method` as its primary namespace — not because it avoids falsification.

### Warrant strength, which is sharper than citation identity

[research/99-source-register](/research/99-source-register/source-register.md) records, per external source, its identifier, whether it could be accessed, and **whether anyone actually read it**. That column is the strongest warrant signal in the repository and nothing could query it before:

| Read state | Sources |
|---|---|
| `full` | 13 |
| `abstract` | 17 |
| **`unread`** — synthesis only, or not consulted | **23** |

Run `hve_sources({ read: "unread" })` first. The two most load-bearing unread sources are **Edmondson on psychological safety, under 29 whitepapers**, and **Keith and Frese on error management training, under 25**. Most of the rest are copyrighted books the register marks as such — this is a documented constraint the design worked within, not an oversight, and the claims above them are class 2, licensing direction and mechanism only.

**Exposure counts are a floor, and the tool says so in every answer.** 25% of citations still point at a folder-level `collected-materials` index rather than a named source, so a source showing few dependants may still be carrying more. That figure was 74% before the citations were resolved by hand; every one of the 90 whitepapers now cites at least one named source, where only 46 did.

## The write path, and where it attaches

HVE IQ's write path is an agent that researches, judges, and maintains the knowledge. **It lives in a separate private repository — only the knowledge is public.** What exists here is the seam it plugs into, which is the part worth getting right first:

```
agent proposes  ──►  pull request  ──►  deterministic gate  ──►  human merge
 (private repo)                     scripts/verify.ps1
```

[scripts/verify.ps1](/scripts/verify.ps1) runs today and [.github/workflows/verify.yml](/.github/workflows/verify.yml) fires on **any** pull request, whoever opened it. So the agent is gated by exactly the same checks a human is, and needs nothing added here.

Four rules it inherits, none negotiable:

1. **It opens a pull request. It never pushes to `main`.** The loop is unattended, so a human merge is the only place a mistake reliably stops.
2. **It never writes to `graph/`.** That is derived from the markdown and holds no facts of its own. CI fails the PR if the committed graph is stale.
3. **It may not upgrade an evidence class.** Direction and mechanism only for anything not verified here, and no effect size for any source the register marks unread.
4. **Its PR body states the evidence class of every claim**, so a reviewer checks the class before the content.

**The gate is deliberately not an LLM.** A verifier sharing a model family with the proposer is not a verifier, it is an echo. It is also cheap enough to run on every push, which is what makes it worth having at all.

## What v0 does not do

- **The evidence ledger is class-level, not claim-atomic.** Splitting prose claim bundles needs authoring judgement; see above for why that is deferred rather than forgotten.
- **No semantic search.** Substring matching. Adequate at 332 nodes; add embeddings when it stops being.
- **No writes.** By design, permanently. The graph is derived and the substrate is truth; a future research loop proposes **pull requests**, never commits.
- **No auth.** stdio only. Remote deployment needs Entra or OAuth first.

## Next

A judged split of the evidence-status prose into atomic claims — the first extraction here that would carry authoring judgement, and so the first needing a drift discipline of its own. Ahead of it sit three findings the citation resolution exposed and did not fix, all recorded in [the source register](/research/99-source-register/source-register.md): class-1 paragraphs resting on never-read sources, a contradiction between the register and the notes about effect sizes, and claims cited to folders that hold no such source.
