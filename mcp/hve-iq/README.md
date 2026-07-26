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

Already configured in [.vscode/mcp.json](.vscode/mcp.json). Open Copilot Chat in agent mode and ask:

> *"Using hve-iq, what would a two-day workshop on judge bias and criterion construction also have to cover?"*

## Tools

| Tool | What it answers |
|---|---|
| `hve_namespaces` | The eight namespaces, what each licenses, how fast each decays. **Call this first** — claims may not be compared across namespaces raw. |
| `hve_search` | Find documents by text, namespace, kind, or perishability. `platform_bearing: true` returns everything that decays in months. |
| `hve_get` | One document with its typed neighbours — depends on, re-tested by, grounded in, paired whitepaper. |
| `hve_dependency_closure` | **The differentiator.** Given what you intend to teach, what must you also cover? |
| `hve_platform_exposure` | A vendor shipped a breaking change. What does it cost you? |

### The closure tool is the point

Everything else is retrieval that any RAG system could do. This is not:

```
seed:      9 seminar days (a two-day workshop's claims)

novice                  57 days to cover     — the BSc's entry state
professional-strict     56 days              — assume only what is reliably held
professional-declared   23 days + 8 declared — assume what is held informally, and say so
```

It follows `depends_on` and deliberately **excludes** `re_tests`. A dependency constrains ordering in *every* format; a re-test only constrains it where there is spacing. Those were one edge type until they were split by hand across all 90 days — see [DERIVATION.md](projections/workshop-2day/DERIVATION.md).

**Traversal stops at whatever the audience already holds.** If they hold a claim, how they came to hold it is not your projection's problem — so its prerequisites are never walked. Seeds are always expanded, because you are teaching those by choice rather than by prerequisite.

The `entry_state` values come from [concepts/entry-state.md](concepts/entry-state.md), which classifies all 90 days against a fixed reference professional. **Read its limitations before quoting a number.** It is `method` namespace, carries no external warrant, and has never been tested against a real audience — and `must_declare` is not optional output. Those are the claims your audience holds informally and may not hold precisely.

### The exposure tool is the decay answer

The platform layer decays in **months**, which makes "what did this vendor change cost us?" the most frequently asked operational question about this material. `hve_platform_exposure` answers it from **489 durable/perishable pairs** the seminar days had already written:

```
product: "Foundry"  ->  302 claims across 47 days

S016  teaches            Data moves between levels in fixed-size blocks
      instance at risk   The 1,024-token minimum and the 128-token hit increment
```

The pairing is the point. **A vendor change should cost you an instance, not a claim** — that is the rule the [Durable and Perishable Register](wiki/program/09-Durable-and-Perishable-Register.md) exists to enforce, and seeing both halves together tells you whether you are swapping an example or rewriting a day.

Nothing here is authored by the extractor; it reads tables the days already carry. **Sixteen days are invisible to it** — S001–S015 use a prose register that predates the table format, and S090 has no perishable content. The tool declares that in every answer rather than returning a confidently incomplete list.

## What v0 does not do

- **Claim-level only for `platform`.** The other seven namespaces are still document-level, because only the perishability tables were already claim-shaped in the substrate.
- **No semantic search.** Substring matching. Adequate at 332 nodes; add embeddings when it stops being.
- **No writes.** By design, permanently. The graph is derived and the substrate is truth; a future research loop proposes **pull requests**, never commits.
- **No auth.** stdio only. Remote deployment needs Entra or OAuth first.

## Next

Claim extraction, starting with the `platform` namespace — highest volume, fastest decay, most mechanical. Until then every tool here answers at document granularity, which is coarser than the questions people actually ask.
