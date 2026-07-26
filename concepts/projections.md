# Projections

> The three-year BSc programme in [wiki/](wiki/Home.md) is **not the knowledge**. It is one read model over the knowledge — the first one built, and the one that happens to be finished.
>
> This page states what a projection is, what it may and may not do, and what has to exist before other projections can be built cheaply.

## The split

Borrowed from the [Semantic Interoperability Layer](../../Semantic%20Interoperability%20Layer/concepts/ledger.md), where it is load-bearing:

```
claims          the ledger. truth. append-only, namespaced, each carrying its own warrant.
   ↓
projections     read models. rebuildable from claims alone. never the source of anything.
```

The BSc programme is a projection with a particular shape: 90 seminar days of 320 minutes, eight phases each, a three-year live substrate, ten entrustment occasions. **Every one of those is a delivery decision, not a knowledge fact.** The knowledge underneath — that a criterion is constructed rather than found, that quota is not capacity, that agreement is not accuracy, that an instrument administered after its answer has been taught measures recall — is indifferent to whether it arrives over three years or three days.

## What a projection may and may not do

Five rules. Each has a counterpart already enforced somewhere in the wiki.

**1. A projection is rebuildable from claims alone.** If a projection carries a fact that no claim carries, that fact is unsourced and the projection has invented it. *(This is the `## Evidence status` discipline, generalised.)*

**2. A projection may select, sequence and stage. It may not upgrade warrant.** Teaching something first, at length, or with great conviction does not make it better evidenced. *(This is instrumentation rule 7 — a claim the design finds obvious must be staged like any other.)*

**3. A projection carries each claim's evidence class and decay with it.** A `pedagogy` claim arrives with direction and mechanism and no magnitude, in every format. A `platform` claim arrives with its version and its silence. *(This is specification rule 2 — a qualification travels in the same field as the quantity it qualifies.)*

**4. A projection may not assert what its claims do not license.** *(S050, and the entire measurement strand.)*

**5. Abstention is a valid projection output.** If the claims cannot support the requested format, the correct answer is to say which claims are missing — not to pad. *(SIL invariant 6: abstention ≠ error. HVE's S024: the duty to say so.)*

## Projections worth building

The BSc exists. These are the ones the same claims should support, and the reason each is a genuine test rather than a repackaging.

| Projection | Shape | What it would test |
|---|---|---|
| **`bsc-programme`** *(built)* | 3 years · 90 days · 10 entrustment occasions | Whether the claims support a certifiable judgement of readiness. |
| **[`workshop-2day`](projections/workshop-2day/README.md)** *(built)* | 2 days · one team · no assessment | Whether anything survives the loss of spacing. **It largely does not — and the projection says so on its first morning.** |
| `cert-prep` | GH-300 / AB-100 aligned | Whether `platform` claims stand alone once `method` and `measurement` are stripped out. |
| `engagement-playbook` | Reference, non-linear | Whether `fde-craft` claims are usable outside a teaching sequence. |
| `onboarding-30day` | New FDE hire | Whether the complexity-class ladder compresses, or only stretches. |
| `assessment-kit` | The entrustment machinery alone | Whether `assessment` separates cleanly from `curriculum`. |
| `platform-brief` | Dated, disposable | Whether the perishable layer can be shipped separately and thrown away on schedule. |

**`workshop-2day` was built second, by hand, deliberately.** It was chosen because it should partly fail: spacing, interleaving and expanding-interval retrieval are the pedagogy namespace's best-warranted content and a two-day format destroys all three. It abstains explicitly on retention, entrustment, complexity class 3+, and consequence.

Its [derivation record](projections/workshop-2day/DERIVATION.md) is the more valuable artefact. Building it by hand established that **the claim/projection split holds** — and found four fields the schema needs that exist nowhere, plus one defect that must be fixed before extraction runs.

## Current state, stated plainly

**The claims are not extracted.** They are embedded in prose across 325 files, and the [graph](graph/README.md) indexes documents and their relationships, not claims. I flagged that limit when the graph was built and it is now the binding constraint.

The practical consequence, now measured rather than predicted: **building [workshop-2day](projections/workshop-2day/README.md) required reading, not querying.** That was workable for one projection. It does not scale to seven, and every projection built this way re-derives the same claims independently and will disagree with the others in small ways nobody notices.

What exists that makes extraction tractable:

- **The wiki is already unusually claim-shaped.** Phase 4 of every seminar day is eight numbered points. Every whitepaper's §9 is a list of falsifiable predictions each with a named instrument. Every rule carries its provenance. Every scope statement names safe and unsafe conditions. This is prose written by someone who wanted it extracted.
- **598 `grounded_in` edges** already connect wiki assertions to research notes.
- **The four-part `Evidence status`** already assigns warrant class to whole sections.
- **208 pages carry a `platform_anchor`**, which is a claim-level annotation that happens to sit in a header.

What is missing is stable claim IDs and an append-only place to put them.

## The order of work

1. ~~**Version control.**~~ **Done.** An append-only ledger in a directory with no version control is not append-only.
2. ~~**Namespace fields on the graph**~~ **Done.** Every node carries `primary_namespace`, `namespaces`, `decay`, `verify_cadence` and `platform_bearing`.
3. ~~**A second projection**, built to test the split.~~ **Done — [workshop-2day](projections/workshop-2day/README.md).** Built by hand, deliberately ahead of extraction, so the schema would be specified by a real projection's needs rather than guessed.
4. **Split `retrieves_from` into `depends_on` and `re_tests`.** **This now blocks extraction.** One edge type is carrying two relations — a dependency that constrains ordering in every projection, and a re-test that constrains ordering only where there is spacing. All 309 edges are affected. See [DERIVATION.md](projections/workshop-2day/DERIVATION.md).
5. **Claim extraction**, namespace by namespace, starting with `platform` — highest volume, fastest decay, most mechanical, least costly to get wrong.
6. **Findings**, once a cohort exists, against the §9 predictions.

Step 3 has been taken and the split holds: a second projection was derived, it obeys all five rules, and it abstains rather than padding. **Step 4 is now the binding constraint** — running extraction before it would bake the conflation in permanently.

## Related

- [Namespaces](concepts/namespaces.md) — the eight, and their warrant standards
- [AGENTS.md](AGENTS.md) — the working contract
- [wiki/Home.md](wiki/Home.md) — the projection that exists
