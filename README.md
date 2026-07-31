# High Velocity Engineering

> A knowledge system about forward-deployed and hypervelocity engineering — and about **how to teach them**.
>
> **Agents: read [AGENTS.md](/AGENTS.md) first, then load [graph/graph.json](/graph/graph.json).**

Most curricula are a syllabus: a list of topics in an order someone defended once, in a format chosen before the content existed. This is the other thing.

It is a body of **claims**, each carrying the evidence that warrants it, the namespace that governs what it may be compared against, and the rate at which it goes stale. Teaching formats are **projected** from that body rather than being the body itself. The three-year BSc in [wiki/](/archive/bsc-programme/Home.md) is the first projection and the only finished one — **it is a seed, not the product.** A two-day workshop, a certification path, a thirty-day onboarding plan and an engagement playbook are equally legitimate read models over the same claims.

341 markdown files, one graph builder, one MCP server. **Every fact lives in the markdown**; the two pieces of code are derived tooling that never writes to the substrate.

```mermaid
flowchart TD
  S["sources/ · 11<br/>raw vendor and design material"] --> R
  R["research/ · 93<br/>Cliff Notes — what was verified,<br/>from where, and what the source omits"] --> W
  R --> P
  W["wiki/ · 223<br/>the BSc · 90 seminar days + 90 whitepapers"]
  P["projections/<br/>other read models"]
  C["concepts/ · 3<br/>namespaces · projections · entry state"] -.governs.-> W
  C -.governs.-> P
  W --> G
  P --> G
  C --> G
  G["graph/ · 343 nodes · 8,264 edges<br/>646 platform claims · 527 predictions · 360 evidence rows · 683 teaching moves · 58 sources<br/>derived · regenerable · never hand-edited"] --> M["mcp/hve-iq<br/>read-only MCP server"] --> A["any agent"]
```

## Start here

| If you want to | Go to |
|---|---|
| Read the programme | [wiki/Home.md](/archive/bsc-programme/Home.md) |
| Check what backs a claim | [research/](/research/99-source-register/source-register.md) |
| Build your own format from this | [concepts/projections.md](/concepts/projections.md) |
| Query it from an agent | [mcp/hve-iq/](/mcp/hve-iq/README.md) |
| Understand the rules the design set itself | [AGENTS.md](/AGENTS.md) |
| See where the vendor study notes went | [sources/README.md](/sources/README.md) |

## The citation chain

**sources → research → wiki.** Every external factual claim in the wiki traces to a Cliff Note; every Cliff Note records what was verified, from where, and **what the source does not say**. This is enforced, not aspirational: all 90 whitepapers close with an `## Evidence status` section sorting every claim into exactly one of four classes.

1. **Verified in this repository** — cites a `research/` note.
2. **Cited from general knowledge, not verified here** — direction and mechanism only.
3. **Design reasoning with no external warrant** — the design's own argument, marked as such.
4. **Grounded in vendor documentation, with its version and its silence recorded.**

There is no fifth class. A claim that fits none of them does not go in.

**No effect size is asserted anywhere for an unverified source** — including vendor material. A short list of widely repeated figures is [explicitly prohibited](/archive/bsc-programme/program/09-Durable-and-Perishable-Register.md) because no published source substantiates them; they appear in this repository only on the prohibition lists themselves.

## Eight namespaces, not one

Claims may not be compared across namespaces raw. A Learn page and a learning-science finding are both "evidence" and neither licenses what the other licenses.

| Namespace | Licenses | Decays in | Pages |
|---|---|---|---|
| `platform` | Vendor docs at a stated version, plus what they do **not** report | **months** | 22 |
| `ai-systems` | Mechanism verified; magnitudes do not transfer | 1–3 years | 65 |
| `measurement` | Identity under a stated model and interval, with dependency structure | permanent | 38 |
| `pedagogy` | **Direction and mechanism only. No effect size, ever.** | decades | 14 |
| `assessment` | Ordinal judgement with narrative substantiation; no percentages | decades | 24 |
| `fde-craft` | Practice pattern, weak formal warrant | slow | 47 |
| `curriculum` | Design reasoning and accreditation mapping | years | 4 |
| `method` | Design reasoning, no external warrant | on amendment | 9 |

> **The Pages column was wrong before 2026-07-30 and is now regenerated from `graph/nodes.jsonl` rather than maintained by hand.** It read 40 / 4 / 79 / 39 / 22 / 16 / 12 / 9, which summed correctly to 221 and matched no measurement. A hand-maintained count that sums correctly is the hardest kind of stale number to notice, which is the argument for deriving it.

The number worth holding: **214 of 222 wiki pages are platform-bearing, but only 23 have `platform` as their primary namespace.** The durable/perishable split runs *inside* pages, at claim level — which is why [11-Microsoft-AI-Platform-Map.md](/archive/bsc-programme/program/11-Microsoft-AI-Platform-Map.md) demands verification before every offering rather than once a term.

**The two numbers answer different questions and only the first one is stable.** `platform_bearing` follows the day's declared anchor; `primary_namespace` follows what the page cites, and it moved from 34 to 39 to 23 in a single day as citations were added — without one word of vendor content being added or removed. Use the first to ask *what decays in months*. Use the second only to ask *what is this page actually standing on*.

Full definitions: [concepts/namespaces.md](/concepts/namespaces.md).

## Projections

A projection may select, sequence, compress and re-voice. It may **not** upgrade an evidence class, assert what the claims do not license, or quietly drop the decay clock. **Abstention is a valid output** — a projection that cannot honestly cover something says so.

- [wiki/](/archive/bsc-programme/Home.md) — the BSc. 9 quarters, 18 modules, 90 seminar days, 90 whitepapers, 11 assessed days.
- [projections/workshop-2day/](/projections/workshop-2day/README.md) — ten claims, four explicit abstentions, and a [derivation log](/projections/workshop-2day/DERIVATION.md) recording every place the format broke.

### What a projection owes its audience

Dependencies are not absolute. They are relative to an **entry state**, and the wiki natively encodes only one — the BSc's, which is *knows nothing*. [concepts/entry-state.md](/concepts/entry-state.md) classifies all 90 days against a fixed reference professional so other projections can compute their own:

| Value | Days | The projection must |
|---|---|---|
| `ordinary-professional-experience` | **2** | assume silently |
| `either` | **47** | **declare** as an assumption |
| `this-programme-only` | **41** | deliver, or drop what depends on it |

Two days of ninety can be assumed silently. The consequence for the workshop: its closure falls from **57 days to 23** once it declares its assumptions — and five of the fourteen it must still deliver are the measurement spine, which is the workshop's own subject. That finding came from a mechanical query, not from taste, and it overturned a hand-written estimate that had said three.

The register is `method` namespace, has no external warrant, and **has never been tested against a real audience.** Its limitations are stated on the page, including the possibility that it is circular.

## HVE IQ

A read-only MCP server over the graph, so any agent can consume this — Copilot in an IDE or CLI, a Foundry agent, Copilot Studio, Claude, Cursor. An agent has one consumer; a server has all of them.

```bash
cd mcp/hve-iq && npm install && npm run smoke
```

Registered in [.vscode/mcp.json](/.vscode/mcp.json), so in Copilot agent mode you can ask:

> *"Using hve-iq, what would a two-day workshop on judge bias and criterion construction also have to cover, for an audience of experienced engineers?"*

Eight tools. Four answer structural questions; four are the claim and warrant layer — `hve_platform_exposure` (what a vendor change broke), `hve_predictions` (what would prove this wrong), `hve_evidence` (what a claim rests on) and `hve_sources` (**whether anyone actually read it**). Details and known gaps: [mcp/hve-iq/README.md](/mcp/hve-iq/README.md).
## It corrects itself in public

The most valuable and most fragile thing here. Superseded positions stay visible; amendments are annotated where they happened.

- **Nine instrumentation rules**, each recorded with the failure that produced it ([04-Seminar-Day-Design-Pattern.md](/archive/bsc-programme/program/04-Seminar-Day-Design-Pattern.md)).
- **Rule 5 was found unsatisfiable at design time** and amended twice rather than quietly dropped.
- A **compliance register** recording where the design broke its own rules, with `Fixed` / `Recorded` / `Discharged` status ([05-Whitepaper-Standard.md](/archive/bsc-programme/program/05-Whitepaper-Standard.md)).
- Specifications close with **"Nothing else is assessed."** — except S001–S040, which predate the rule and are **deliberately left unamended** so the defect that produced it stays legible ([03-Assessment-Architecture.md](/archive/bsc-programme/program/03-Assessment-Architecture.md)).
- Every whitepaper's §8 states at least two objections at their strongest, **concedes at least one**, and names the fix it declined.
- The workshop projection has now been corrected twice by mechanical queries against its own claims, both corrections kept in view ([DERIVATION.md](/projections/workshop-2day/DERIVATION.md)).

A reader who cannot see the defect cannot evaluate the correction. **When you change something here, add to the record rather than erasing what it replaced.**

## Validate

**One command gates everything**, and CI runs it on every pull request:

```powershell
pwsh ./scripts/verify.ps1
```

Graph rebuilds, links root-absolute and resolving, no prohibited claim or effect size, all four evidence classes on every whitepaper, every prediction with an instrument, every day with an entry state, and the MCP smoke suite. Invariants, not snapshots — a gate that fails on intended change is a gate someone disables.

## Licence and scope

The work here is **[CC BY 4.0](/LICENSE.md)** — share and adapt with attribution, including commercially.

`sources/vendor-courses/` and `research/` are **summaries written in this repository's own words**; no source text is reproduced, so the summaries are original work and licensed with everything else. What is not licensed is what was never this repository's to license: the Microsoft partner training and the copyrighted books and papers those summaries are *about*.

**Citability is a separate question.** At least one summarised course is not publicly accessible, so a reader cannot check the summary against it. That limits *verification*, not reuse — which is why the material sits in evidence class 4 rather than class 1. See [LICENSE.md](/LICENSE.md).

**The write path is not here.** An agent that researches and proposes upgrades to this knowledge runs from a separate private repository; it opens pull requests and is gated by the same `verify.ps1` a human is. Only the knowledge is public.

## Open issues, honestly recorded

- **The platform layer is the most perishable content here.** Two of the six vendor sources were already classic or superseded when read; the [study-note package](/sources/README.md) they came from reflects July 2026 and needs checking before it is quoted.
- **The entry-state register is untested** against a real audience and plausibly circular. It is a usable default, not a finding.
- **The evidence ledger is class-level, not claim-atomic.** Where a whitepaper places four claims in one sentence, the index sees the sentence. Splitting them needs authoring judgement, which would be the first thing here able to drift silently — deferred deliberately, not forgotten.
- **13 of 58 external sources were never read** — synthesis-only or not consulted. *Was 19 of 53; ten works were obtained and read in full on 2026-07-30, and five new sources were registered.* **The reach of what remains is the problem, not the count.** Edmondson's 1999 paper is still unread and 29 whitepapers rest on it — its two principal contributions, the team-efficacy discriminant and the mediation of performance by learning behaviour, are **restated by neither of the works that were read**, so both now stand on an abstract and [the folder synthesis has withdrawn them](/research/04-professional-formation/collected-materials.md). Frazier et al. is unread under 8. Keith & Frese was read in full and its 25 whitepapers moved from unread to verified in the same pass.
- **52 of 90 class-1 paragraphs cite a never-read source.** Permitted by the standard — class 1 means a note exists, not that the source was read — but only if the depth of verification is carried forward honestly, and several do not. Recorded, not fixed.
- **This repository and its own notes disagree about effect sizes.** The source register marks five formation sources as synthesis-only; those notes carry magnitudes. No whitepaper propagates them, so the prohibition holds, but the contradiction is unresolved.
- **Two rule elevations are unratified** at programme close ([WP-090](/archive/bsc-programme/whitepapers/WP-090.md) §7).
- **WP-090 §8 concedes the instrumentation is probably unexecutable**, and predicts fewer than one in ten of the wiki's own §9 predictions will ever be measured.
