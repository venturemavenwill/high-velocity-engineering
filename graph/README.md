# graph/

Machine-readable index of every markdown file in this repository. Generated, never hand-edited.

```powershell
pwsh ./scripts/build-graph.ps1
```

The graph is derived entirely from the files and holds no facts of its own. If it disagrees with the markdown, the markdown is right and the graph is stale.

## Files

| File | Use it when |
|---|---|
| `graph.json` | You want the whole graph in one read. Nodes and edges combined. |
| `nodes.jsonl` | You want to stream or filter documents without loading everything. |
| `edges.jsonl` | You want to traverse relationships. |
| `stats.json` | You want counts, or to check the graph is current. |
| `move-manifest.json` | You need to know where a file moved during the 2026-07-26 reorganization. |

## Node schema

One object per markdown file. `id` is the path without the `.md` extension.

```json
{
  "id": "wiki/seminars/S049",
  "path": "wiki/seminars/S049.md",
  "kind": "seminar",
  "layer": "wiki",
  "title": "S049 · Clustering, Power and the Interval You Owe the Reader",
  "headings": ["What this day is for", "Phase 1 · Pretest and prediction (25 min)", "..."],
  "words": 3751,
  "lines": 224,
  "module": "M10",
  "quarter": "Q5",
  "complexity_class": 4,
  "strands": ["ME", "MS"],
  "platform_anchor": "Foundry evaluation run comparison and its t-test output; ...",
  "mcp_servers": ["Foundry MCP Server", "Learn MCP Server"],
  "retrieves_from_raw": "S022, S028, S043",
  "assessment_bearing": false
}
```

`kind` is one of: `seminar` · `whitepaper` · `module` · `quarter` · `program-page` · `wiki-home` · `research-note` · `research-index` · `research-memo` · `research-reading-list` · `source-register` · `vendor-course` · `design-analysis` · `readme`.

`layer` is one of: `wiki` · `research` · `sources` · `root`.

## Namespace fields

Per [concepts/namespaces.md](concepts/namespaces.md). These are what make the graph usable for anything other than the BSc projection.

| Field | On | Meaning |
|---|---|---|
| `namespace` | research notes | Definitional, from the folder. |
| `namespaces` | wiki pages | **Derived** — a count of `grounded_in` targets per namespace. A page that claims to be about measurement while citing only vendor docs is reported as a platform page. |
| `primary_namespace` | wiki pages | The largest share of the mix. |
| `decay` | all namespaced nodes | `months` · `1-3 years` · `years` · `decades` · `permanent` · `on amendment`. |
| `verify_cadence` | all namespaced nodes | When this must be re-checked. |
| `platform_bearing` | wiki pages | Carries at least one claim that decays in months. **212 of 221 pages.** |
| `evidence_classes` | whitepapers | Which of the four `Evidence status` parts are present. All 90 carry all four. |

A seminar day cites almost nothing directly — by design, its evidence lives in the paired whitepaper's `Evidence status`. Seminars therefore **inherit** their whitepaper's namespace mix. Programme pages that ground nothing external fall to `method`, which is correct: they are the design's own discipline and have no external warrant by construction.

Fields after `lines` appear only where the document carries them. All 90 seminars and 90 whitepapers carry `platform_anchor` and `mcp_servers`; only seminars carry `complexity_class`.

## Edge schema

```json
{ "from": "wiki/seminars/S049", "to": "wiki/seminars/S028", "type": "retrieves_from" }
```

| Type | Meaning | Count |
|---|---|---|
| `links_to` | Any resolvable internal markdown link. The raw hyperlink structure. | 5062 |
| `grounded_in` | A wiki page cites a research note. **The evidence chain.** | 598 |
| `part_of` | Seminar or whitepaper → module and quarter; research note → its folder index. | 443 |
| `retrieves_from` | The spaced-retrieval schedule: this day deliberately re-tests that day. **The pedagogical spine.** | 309 |
| `has_whitepaper` | Seminar → its whitepaper. | 90 |
| `documents` | Whitepaper → its seminar. The inverse. | 90 |
| `summarises` | A research note → the source document it was written from. | 2 |

Edges are closed: any edge whose target is not a node in this repository is dropped, so traversal never dead-ends.

`retrieves_from` is the one worth understanding. It is not a citation — it is a claim that the later day re-tests the earlier one after a deliberate interval. Following it backwards from any day shows what that day assumes; following it forwards shows where a change would propagate.

## Worked queries

**Which seminar days teach Azure AI Search?**

```powershell
Get-Content graph/nodes.jsonl | ForEach-Object { $_ | ConvertFrom-Json } |
  Where-Object { $_.kind -eq 'seminar' -and $_.platform_anchor -match 'AI Search' } |
  Select-Object id, title
```

**What would break if S013 changed?**

```powershell
Get-Content graph/edges.jsonl | ForEach-Object { $_ | ConvertFrom-Json } |
  Where-Object { $_.type -eq 'retrieves_from' -and $_.to -eq 'wiki/seminars/S013' } |
  Select-Object -ExpandProperty from
```

**Which research notes carry the most weight in the wiki?**

```powershell
Get-Content graph/edges.jsonl | ForEach-Object { $_ | ConvertFrom-Json } |
  Where-Object { $_.type -eq 'grounded_in' } |
  Group-Object to | Sort-Object Count -Descending | Select-Object -First 10 Name, Count
```

## Limits

- **Extraction is regex-based**, so a page that departs from the header conventions loses its structured fields. It still appears as a node with `id`, `path`, `kind`, `layer`, `title` and `headings`.
- **`links_to` is not weighted.** A link in a Related-pages list and a link that carries an argument are indistinguishable here.
- **There are no concept nodes.** The graph indexes documents and their relationships, not ideas. Questions like *where is construct validity argued* still require reading — start from `headings`.
- **`summarises` is sparse** because most research notes cite external URLs rather than the `sources/` documents.
