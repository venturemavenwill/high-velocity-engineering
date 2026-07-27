---
name: hve-iq
description: Query the FDE/HVE knowledge system — a body of claims about forward-deployed and hypervelocity engineering and how to teach them, each carrying an evidence class, a namespace and a decay rate. USE WHEN designing or scoping any teaching format (course, workshop, onboarding path, certification prep, engagement playbook); deciding what a format must also cover; checking what a vendor change breaks; asking what warrants a claim or whether anyone actually read the source; or asking what would prove a design wrong. DO NOT USE FOR general engineering questions, or as an authority on empirical fact — this system records what it does NOT know as carefully as what it does.
---

# HVE IQ

A read-only MCP server over a knowledge graph: 333 documents, 581 platform claims, 512 falsifiable predictions, 360 evidence rows, 53 registered sources.

**The point of this system is not retrieval. It is warrant.** Every claim states what backs it, what that licenses, and when it expires. Answers that ignore those fields are worse than no answer, because they sound the same as answers that respect them.

## Always call `hve_namespaces` first

There are eight namespaces and **claims may not be compared across them raw.** A vendor documentation page and a learning-science finding are both "evidence" and neither licenses what the other licenses. The tool returns what each namespace permits.

The two that catch people out:

- **`pedagogy` licenses direction and mechanism only. No effect size, ever.** Not "improves retention by 30%" — *"spacing improves retention; magnitude not established here."*
- **`platform` decays in months.** Anything naming a model, endpoint, quota or portal path is perishable and must be stated with an as-of date, or not stated.

## Which tool answers which question

| Question | Tool |
|---|---|
| What may I compare, and what expires? | `hve_namespaces` |
| Find pages by text, namespace, kind, perishability | `hve_search` |
| One document and its typed neighbours | `hve_get` |
| **I intend to teach X — what must I also cover?** | `hve_dependency_closure` |
| **A vendor shipped a breaking change — what does it cost?** | `hve_platform_exposure` |
| What would prove this design wrong? | `hve_predictions` |
| What backs this claim? What breaks if a source is retracted? | `hve_evidence` |
| **Did anyone actually read the source?** | `hve_sources` |

The bolded three are the ones no ordinary search can answer.

## Rules that are not optional

**1. `must_declare` must reach the reader.** `hve_dependency_closure` with an `entry_state` returns three lists. `implied` is what you must deliver; `must_declare` is what your audience *probably* holds but may not. Dropping the second silently is the failure this tool exists to prevent — it is how the two-day workshop under-counted its own gap by a factor of four, twice.

**2. Predictions are UNMEASURED.** All 512. No cohort has ever run. Cite them as commitments the design made, never as findings.

**3. Check whether the source was read.** 23 of 53 registered sources were never read in full — mostly copyrighted books, recorded openly. `hve_sources({ read: "unread" })` lists them. Two of them, Edmondson and Keith & Frese, sit under 29 and 25 whitepapers respectively. A claim above an unread source is direction-and-mechanism at best.

**4. Exposure counts are floors.** 24% of citations still point at a folder-level index rather than a named source. A source showing few dependants may be carrying more. The tools say so; repeat it rather than presenting a floor as a total.

**5. Abstention is a valid output.** If the claims do not license an answer, say what is missing and stop. Do not fill the gap with general knowledge and let it inherit this system's credibility.

## The BSc is a projection, not the truth

`wiki/` holds a three-year programme — the first format projected from these claims, and the only finished one. It is a **seed, not the product.** A workshop, a certification path, a thirty-day onboarding plan are equally legitimate read models over the same claims. When asked for a format that is not the BSc, you are being asked to project, not to invent.

**Dependencies are relative to an assumed entry state**, and the wiki natively encodes only one: *knows nothing*. Pass `entry_state` to the closure tool for any audience with delivery experience — but read [the register's limitations](/concepts/entry-state.md) before quoting a number from it. It is untested against a real audience and possibly circular, and says so.

## Worked example

> *"Design a two-day workshop on judge bias and criterion construction."*

1. `hve_namespaces` — establish what each layer licenses.
2. `hve_search({ query: "judge bias" })` — find the days.
3. `hve_dependency_closure({ ids: [...], entry_state: "professional-declared" })` — closure falls from 57 days to 23, with 8 to declare.
4. Report all three lists. **Say that five of the fourteen undelivered days are the measurement spine** — a workshop about judge bias whose largest gap is measurement itself.
5. `hve_platform_exposure` for anything naming a product, and give it an as-of date.

## Endpoints

- Local (stdio): `node mcp/hve-iq/index.js`
- Remote (Streamable HTTP): `/mcp` on the deployed Container App, `/health` for status

Details, tool arguments and known gaps: [mcp/hve-iq/README.md](/mcp/hve-iq/README.md).
