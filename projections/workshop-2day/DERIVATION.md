# DERIVATION — what building this projection by hand revealed

> **Question.** Can a second projection be derived from the current wiki, and what does doing it by hand reveal about the claim schema that extraction will need?
>
> **Answer.** Yes, and it took about the effort expected — but four fields the projection needed do not exist anywhere in the repository, and one existing edge type is carrying two different meanings that a projection cannot separate.

Recorded in the style of SIL's E-findings: what was asked, what was done, what was found, what is resolved, what is next.

## What was done

Built [workshop-2day](/projections/workshop-2day/README.md) from the wiki by reading, not querying — selecting ten claims, deciding what the format could and could not carry, and sequencing eight sessions. No claims were extracted first; that was the point.

## What worked better than expected

**The wiki is unusually claim-shaped.** Phase 4 of every seminar day is eight numbered points, and the great majority are one claim each, already stated in a single sentence, already carrying their own hedges. Selecting ten claims from ninety days took far less time than expected, because someone had already done the hard part of separating the claim from the argument for it.

**Warrant was never in doubt.** The four-part `Evidence status` meant that for every claim I could say immediately what backed it and what that licensed. Claim 6 (*defaults are opinions*) is vendor-documentation-with-its-silence; claim 4 (*aggregate hides class*) is verified-in-repo; claim 9 (*the request is not the problem*) is `fde-craft`, weakly warranted, and the projection says so. **Not one selection required going back to a source.**

**Namespace decay drove format decisions correctly.** Knowing claim 7 is `platform` (months) and claim 4 is `measurement` (permanent) told me which sessions need re-verification before every delivery and which do not. That fell straight out of the graph.

## What was missing

Four fields the projection needed and the repository does not carry.

**1. Delivery requirements.** For each claim: what does *installing* it require, as opposed to *stating* it? Spacing? A real running system? A second person? Genuine consequence? This is the single most important field for projection and it exists nowhere. I derived it for ten claims by reading whole seminar days and inferring from how the day was staged — which is exactly the re-derivation that does not scale.

**2. Portability — capability, information, or rehearsal.** The fidelity table in the workshop had to be invented. The wiki knows a claim's evidence class but not what survives a format change. Two claims with identical warrant can have completely different portability: claim 2 (*characterise your judge*) installs in ninety minutes; claim 10 (*say what it does not license*) does not install in ninety minutes under any staging.

**3. Delivery floor.** The minimum time at which a claim still installs rather than merely being stated. The wiki records phase minutes, but those are budgets for the BSc's staging, not properties of the claim.

**4. An abstention vocabulary.** Projection rule 5 says abstention is a valid output, and the rule is right, but there was no vocabulary for *why* a projection cannot deliver something. I ended up with four ad-hoc categories — retention, entrustment, complexity class, consequence. They should be a closed set, agreed once.

## The defect worth fixing before extraction

**`retrieves_from` is carrying two different relations, and a projection cannot separate them.**

S049 retrieves from S022, S028 and S043. Read them:

- **S028 → S049 is a dependency.** S028 taught intervals and explicitly deferred clustering to S049. Without it, S049 is unintelligible. Any projection containing S049's claim must contain S028's first.
- **S022 → S049 is a re-test.** Expectation over randomisation is retrieved at S049 because twenty-one days have passed and the schedule says so. It is pedagogically load-bearing and **carries no ordering constraint at all** in a format without spacing.

One arrow, two meanings. In the BSc that is harmless, because the schedule and the dependency order happen to agree. **In any other projection it is fatal**: a two-day workshop must honour every dependency and can safely ignore every re-test, and the graph as it stands cannot tell it which is which. All 309 `retrieves_from` edges are affected.

I worked around it by reading each day and deciding by hand. That is precisely what a claims layer is supposed to make unnecessary, and it is the one thing that would be baked in permanently if extraction ran today.

## Resolved

**The claim/projection split holds.** A second projection was derived from the same knowledge, it obeys all five projection rules, and it abstains explicitly on four things rather than padding. The thesis in [concepts/projections.md](/concepts/projections.md) is no longer an assertion.

**The pedagogy namespace's prediction was correct.** The format destroys spacing, interleaving and expanding-interval retrieval, and the projection says so on its first morning instead of pretending. That is the failure the projection was expected to produce, and producing it honestly is the result.

**The claim schema is now specified rather than guessed:**

```
claim:
  id                stable, namespaced
  namespace         one of the eight
  statement         one sentence — the thing itself, not the argument for it
  warrant           evidence class + source node          ← exists
  decay             from namespace                        ← exists
  depends_on[]      claims required to understand this    ← MISSING (conflated in retrieves_from)
  re_tested_by[]    schedule, projection-specific         ← exists, mislabelled
  installs_with[]   spacing | real-system | second-person | consequence | none   ← MISSING
  portability       capability | information | rehearsal-only                    ← MISSING
  delivery_floor    minutes at lowest fidelity that still installs               ← MISSING
```

## Next

1. **Split `retrieves_from` into `depends_on` and `re_tests`** in the graph builder, before any extraction. This is the blocking item. It cannot be inferred mechanically from the current text and will need a pass over the 90 seminar days — the header line says *Retrieves from*, and the distinction lives in the prose of phase 2.
2. **Add the three missing claim fields** to the extraction schema.
3. **Close the abstention vocabulary** to a fixed set.
4. Only then extract `platform` claims.

## Honest limits of this finding

**One projection, built by its own designer, is a weak test.** I chose which ten claims to carry, and I chose ones I already knew were portable. A projection built by someone else, or one required to carry a claim set chosen in advance, would be a real test and would probably find more missing fields.

**The workshop has never been run.** Every claim in it about what a working team will retain, commit or resist is a prediction with no instrument attached. The week-6 follow-up is the only occasion that would settle any of it, and the projection itself predicts that session will be the first thing cancelled.

---

# Addendum — the split fired immediately

**Recorded the same day the `depends_on` / `re_tests` split was made.** The split's whole purpose was to let a projection compute its own prerequisite structure. The first time that was possible, it contradicted this projection.

## What was measured

309 retrieval edges resolved to **216 `depends_on` and 93 `re_tests`** — a 70/30 split toward dependency. The "spaced-retrieval schedule" framing had implied the reverse.

The transitive `depends_on` closure of the workshop's nine seed days is **57 of the 90 seminar days**. Forty-eight implied prerequisites, for a two-day format.

## What it means

**workshop-2day is not dependency-closed, and it never said so.** It states four things it cannot deliver; it does not state what it assumes the audience already holds. On the numbers above that assumption is enormous, and it was invisible until the edge types were separated.

Two readings, and the second is right.

**Reading one — the classification is too generous.** 216 of 309 is a lot, despite nine agents being told to prefer `re_tests` when torn. Rejected: the per-edge reasons are specific and checkable, and several reports show the tie-break being applied against the classifier's own instinct.

**Reading two — "dependency" was measured relative to the wrong entry state.** S051 depends on S011 because S051's Bridge asks *"what does S011 tell you it must therefore make expensive?"* That is a dependency on S011's **claim**, not on having met it *in this programme*. A working engineer with five years of experience already holds a great many of these claims from practice. A first-year student holds none.

**So a dependency edge is not absolute. It is relative to an assumed entry state, and the graph currently encodes exactly one — the BSc's, which is "knows nothing".**

## The field this adds to the schema

The derivation above named four missing fields. This adds a fifth, and it is the one that makes the other four usable:

```
  satisfiable_from   this-programme-only | ordinary-professional-experience | either
```

Without it, every projection to a non-novice audience computes a closure that is correct for the BSc and useless for itself.

The wiki already holds the raw material: **every whitepaper's §2 is "Entry state and prior knowledge assumptions"**, stated per day. It has never been stated per *projection*, which is the gap.

## What changed as a result

[README.md](/projections/workshop-2day/README.md) now carries an **Entry state** section declaring what the workshop assumes, and naming the prerequisites it assumes from experience rather than delivering. That declaration is a claim about the audience and it is untested — which is the correct status for it, and better than the previous status, which was silence.

## What this says about the method

The split was made because building one projection by hand suggested a defect. Within an hour of the split landing, a mechanical query using it falsified a claim the same projection had made about itself. **That is the loop working**, and it is the first time in this repository that a structural change to the graph has produced a correction to content rather than the reverse.

---

# Addendum two — the field arrives, and falsifies the section the first addendum wrote

**Recorded the day [`satisfiable_from`](/concepts/entry-state.md) was populated.** Addendum one named the missing field. This is what happened when it existed.

## What was measured

Ninety days classified against a fixed reference professional — five years' delivery experience, no formal training in measurement, statistics or ML. **Two days of ninety can be assumed silently.** Forty-seven are held informally and must be declared; forty-one are unavailable from ordinary practice.

Recomputing this workshop's closure with traversal stopping at whatever the audience already holds:

| Entry state | Days to cover |
|---|---|
| `novice` | 57 |
| `professional-strict` | 56 |
| `professional-declared` | **23** |

## The first finding: declaring is worth 33 days, and strictness is worth one

`professional-strict` — assume only what an engineer *reliably* holds — moves the number from 57 to **56**. One day. The register's honesty about what practice actually teaches makes strict pruning almost worthless.

Nearly all of the benefit sits in `either`, the value that obliges a projection to **say the assumption out loud**. That is a better outcome than it looks: the cheap path and the honest path are the same path, and a projection that wants the 33 days has to pay for them in declarations.

## The second finding: the workshop under-counted its own gap, again

Addendum one had this projection declare its entry state by hand. It named **three** at-risk prerequisites. The mechanical answer is **fourteen**, and one of the three named — S036 — was not among them, because it is a seed the workshop already teaches.

**A hand-built projection under-counted its own gap by roughly a factor of four, twice, in the same section**, after having just been corrected once for exactly this. The section now carries both numbers and the reason the first was wrong.

## The third finding, which is the uncomfortable one

Five of the fourteen undelivered dependencies are **the measurement spine**: [S026](/archive/bsc-programme/seminars/S026.md), [S027](/archive/bsc-programme/seminars/S027.md), [S028](/archive/bsc-programme/seminars/S028.md), [S029](/archive/bsc-programme/seminars/S029.md), [S049](/archive/bsc-programme/seminars/S049.md).

This is a workshop about judge bias and criterion construction. Its largest undelivered dependency is **measurement itself**. It was attempting to teach the conclusions of a discipline while assuming the discipline, and no amount of audience seniority fixes that — all five are classified `this-programme-only` precisely because ordinary practice teaches proxy-as-truth.

**The correct response is not to compress them into the two days.** It is what the README now says: a team without the spine should be offered a longer format.

## What this costs the register

The register is `method` namespace with no external warrant, and it has a specific credibility problem recorded in [concepts/entry-state.md](/concepts/entry-state.md): **nine agents reading this programme's own pages concluded that ordinary practice does not teach what this programme teaches.** That is either corroboration or circularity and the repository cannot currently distinguish them.

So the 23 is not a fact about workshops. It is the arithmetic consequence of a set of untested judgements, and it inherits their status exactly. What it is *not* is silence, which is what stood here before.

