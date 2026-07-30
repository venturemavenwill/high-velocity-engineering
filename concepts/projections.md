# Projections

> The three-year BSc programme in [wiki/](/wiki/Home.md) is **not the knowledge**. It is one read model over the knowledge — the first one built, and the one that happens to be finished.
>
> This page states what a projection is, what it may and may not do, and what has to exist before other projections can be built cheaply.

## The split

Borrowed from the **Semantic Interoperability Layer** (a separate repository, `concepts/ledger.md`), where it is load-bearing:

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
| **[`workshop-2day`](/projections/workshop-2day/README.md)** *(built)* | 2 days · one team · no assessment | Whether anything survives the loss of spacing. **It largely does not — and the projection says so on its first morning.** |
| **[`self-study`](/projections/self-study/README.md)** *(one day built)* | Solo · no cohort · no instructor · no assessment | Whether the claims survive the loss of **the room**. **Six of eight phase mechanisms survive, two do not** — error disclosure needs a status asymmetry to break, and a genuine adversary cannot be simulated. Both are reported rather than substituted at equal advertised strength. |
| `cert-prep` | GH-300 / AB-100 aligned | Whether `platform` claims stand alone once `method` and `measurement` are stripped out. |
| `engagement-playbook` | Reference, non-linear | Whether `fde-craft` claims are usable outside a teaching sequence. |
| `onboarding-30day` | New FDE hire | Whether the complexity-class ladder compresses, or only stretches. |
| `assessment-kit` | The entrustment machinery alone | Whether `assessment` separates cleanly from `curriculum`. |
| `platform-brief` | Dated, disposable | Whether the perishable layer can be shipped separately and thrown away on schedule. |
| `config-audit-lab` | One day · one pinned corpus · no substrate | Whether the **five classes of conclusion** survive without three years of staging — and whether an audit discipline can be taught in a format short enough that nobody has time to acquire the thing being audited. |

**`workshop-2day` was built second, by hand, deliberately.** It was chosen because it should partly fail: spacing, interleaving and expanding-interval retrieval are the pedagogy namespace's best-warranted content and a two-day format destroys all three. It abstains explicitly on retention, entrustment, complexity class 3+, and consequence.

Its [derivation record](/projections/workshop-2day/DERIVATION.md) is the more valuable artefact. Building it by hand established that **the claim/projection split holds** — and found four fields the schema needs that exist nowhere, plus one defect that must be fixed before extraction runs.

## Current state, stated plainly

**Extraction has happened, and this section originally said it had not.** The paragraphs below record what was predicted here and what actually occurred, because the gap between them is the useful part.

> **What this section said when it was written.** *"The claims are not extracted. They are embedded in prose across 325 files, and the graph indexes documents and their relationships, not claims. I flagged that limit when the graph was built and it is now the binding constraint."* It went on to say that what was missing was **stable claim IDs and an append-only place to put them**.

Three claim layers now exist, all extracted mechanically from structure the substrate already had, and none of them authored by the extractor:

| Layer | Rows | Granularity | Covers |
|---|---|---|---|
| Platform claims | **581** | atomic — one durable/perishable pair | 89 of 90 days |
| Predictions | **512** | atomic — one falsifiable claim + named instrument | all namespaces, 90 papers |
| Evidence ledger | **360** | **class-level, not atomic** | 90 papers × 4 classes |

The prediction that extraction was blocked on *stable claim IDs and somewhere to put them* was wrong in an instructive way. **No new place was needed.** The IDs are derived (`S016.p1`, `WP-001.pred1`, `WP-001.e1`) and the store is `graph/`, which is regenerable and holds no facts of its own. What actually unblocked extraction was noticing that the wiki had already written the claims down in tables and numbered lists — the thing this section correctly identified two paragraphs later.

**The diagnosis about reading versus querying held.** [workshop-2day](/projections/workshop-2day/README.md) was built by reading, and the first mechanical query against the extracted structure falsified two of its own claims about itself. That is the cost of reading-not-querying, arriving exactly as predicted.

What remains true:

- **The wiki is unusually claim-shaped.** Phase 4 of every seminar day is eight numbered points. Every whitepaper's §9 is falsifiable predictions with named instruments. Every rule carries its provenance. This is prose written by someone who wanted it extracted.
- **974 `grounded_in` edges** connect wiki assertions to research notes, and 75% of them now name a source rather than a folder. **That count rose from 778 when every seminar day and every whitepaper gained a student-facing takeaway section**, each of which cites the notes its page already rested on — which is evidence that the wiki's citation surface was thinner than its argument, and is now closer to it.
- **208 pages carry a `platform_anchor`**, a claim-level annotation that happens to sit in a header.

**What is still missing** is a judged split of the evidence-status prose, where four claims can share one sentence. That would be the first extraction here carrying authoring judgement, and therefore the first able to drift silently between rebuilds.

## The order of work

1. ~~**Version control.**~~ **Done.** An append-only ledger in a directory with no version control is not append-only.
2. ~~**Namespace fields on the graph**~~ **Done.** Every node carries `primary_namespace`, `namespaces`, `decay`, `verify_cadence` and `platform_bearing`.
3. ~~**A second projection**, built to test the split.~~ **Done — [workshop-2day](/projections/workshop-2day/README.md).** Built by hand, deliberately ahead of extraction, so the schema would be specified by a real projection's needs rather than guessed.
4. **Split `retrieves_from` into `depends_on` and `re_tests`.** **This now blocks extraction.** One edge type is carrying two relations — a dependency that constrains ordering in every projection, and a re-test that constrains ordering only where there is spacing. All 309 edges are affected. See [DERIVATION.md](/projections/workshop-2day/DERIVATION.md).
5. **Claim extraction**, namespace by namespace, starting with `platform` — highest volume, fastest decay, most mechanical, least costly to get wrong.
6. **Findings**, once a cohort exists, against the §9 predictions.

Step 3 has been taken and the split holds: a second projection was derived, it obeys all five rules, and it abstains rather than padding. **Step 4 is now the binding constraint** — running extraction before it would bake the conflation in permanently.

## Related

- [Namespaces](/concepts/namespaces.md) — the eight, and their warrant standards
- [AGENTS.md](/AGENTS.md) — the working contract
- [wiki/Home.md](/wiki/Home.md) — the projection that exists
