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

### The closure tool is the point

Everything else is retrieval that any RAG system could do. This is not:

```
seed:     9 seminar days (a two-day workshop's claims)
closure:  57 days
implied:  48 prerequisites
```

It follows `depends_on` and deliberately **excludes** `re_tests`. A dependency constrains ordering in *every* format; a re-test only constrains it where there is spacing. Those were one edge type until they were split by hand across all 90 days — see [DERIVATION.md](projections/workshop-2day/DERIVATION.md).

**A dependency is relative to an assumed entry state**, and the one encoded here is the BSc's: *knows nothing*. A projection to experienced practitioners will already satisfy much of any closure — but it must **say which**, rather than leave it implicit. That is what this tool exists to force.

## What v0 does not do

- **No claim-level granularity.** Document-level only; claims are still embedded in prose. Tools 1–4 get sharper once extraction lands.
- **No semantic search.** Substring matching. Adequate at 329 nodes; add embeddings when it stops being.
- **No writes.** By design, permanently. The graph is derived and the substrate is truth; a future research loop proposes **pull requests**, never commits.
- **No auth.** stdio only. Remote deployment needs Entra or OAuth first.

## Next

`satisfiable_from` on dependency edges — whether a prerequisite can be met from ordinary professional experience or only here. Without it, every projection to a non-novice audience computes a closure that is correct for the BSc and useless for itself.
