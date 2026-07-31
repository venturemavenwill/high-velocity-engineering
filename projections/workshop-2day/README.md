# workshop-2day

> A two-day workshop for a working engineering team, derived from the same claims as the [BSc programme](/archive/bsc-programme/Home.md).
>
> **Status:** built by hand from the wiki, not from extracted claims. See [DERIVATION.md](/projections/workshop-2day/DERIVATION.md) for what that cost and what it revealed.

## What this projection is for

A team already shipping AI systems on the Microsoft AI Platform, who have an evaluation harness they do not trust, a cost line they cannot explain, and a release decision nobody wants to own.

Two days. One team. No assessment. Everyone has GitHub Copilot in agent mode and access to a disposable Azure subscription.

## What it cannot deliver, stated first

Per [projection rule 5](/concepts/projections.md), abstention is a valid output. This projection abstains on four things, and says so to the room on the first morning rather than implying otherwise.

**Retention.** Spacing, interleaving and expanding-interval retrieval are the `pedagogy` namespace's best-warranted content and a two-day format destroys all three. **The BSc delivers these claims across three years and 90 retrieval events; this delivers them once.** Participants will retain what they use in the following weeks and very little else. Section 9 below is the only mitigation and it is weak.

**Entrustment.** A judgement of readiness requires multiple occasions, two independent assessors, narrative substantiation and no carry-forward between occasions. None of that is available in two days, and **a workshop that issued a certificate would be making a claim the `assessment` namespace explicitly forbids.** No certificate is issued.

**Complexity class 3 and above.** From class 3 the student chooses the method *and* the success criterion; at class 4 the problem arrives ambiguous and they formulate it. Both require holding an unresolved problem for hours. This projection runs at class 2 throughout — the problem and the criterion are supplied.

**Consequence.** The BSc's substrate is a live service with real external users, and every class-5 and class-6 claim depends on decisions that cost something. A workshop has no consequence, so **every claim about judgement under consequence is delivered as information rather than as capability.** The distinction is stated in each session.

## Entry state

**Written by hand after the first closure was computed, then corrected by a second mechanical query.** Both corrections are recorded in the [addendum](/projections/workshop-2day/DERIVATION.md); the superseded position is kept below because it is evidence about how projections mislead themselves.

Once [`satisfiable_from`](/concepts/entry-state.md) existed, the closure could be recomputed against a real audience rather than against the BSc's "knows nothing":

| Entry state | Days this projection must cover |
|---|---|
| `novice` — the BSc's own | **57** |
| `professional-strict` — assume only what a five-year engineer reliably holds | **56** |
| `professional-declared` — also assume what they hold informally, and say so | **23** |

Declaring assumptions is worth 33 days. It is not worth 57, and the gap is the point.

### The eight this workshop declares

Commonly held by practising engineers, but informally — so some of your room will not have them. Naming them is the price of assuming them.

[S007](/archive/bsc-programme/seminars/S007.md) seams · [S011](/archive/bsc-programme/seminars/S011.md) what a representation makes cheap · [S016](/archive/bsc-programme/seminars/S016.md) memory hierarchy · [S017](/archive/bsc-programme/seminars/S017.md) scheduling · [S039](/archive/bsc-programme/seminars/S039.md) requirements as negotiated constraint · [S062](/archive/bsc-programme/seminars/S062.md) batching and throughput · [S068](/archive/bsc-programme/seminars/S068.md) detectability · [S073](/archive/bsc-programme/seminars/S073.md) tools and the trust boundary

**Nothing is assumed silently.** Neither of the two days marked `ordinary-professional-experience` in the register lies in this closure.

### The fourteen it must deliver and does not

[S004](/archive/bsc-programme/seminars/S004.md) · [S013](/archive/bsc-programme/seminars/S013.md) · [S018](/archive/bsc-programme/seminars/S018.md) · [S019](/archive/bsc-programme/seminars/S019.md) · [S020](/archive/bsc-programme/seminars/S020.md) ⊘ · [S026](/archive/bsc-programme/seminars/S026.md) · [S027](/archive/bsc-programme/seminars/S027.md) · [S028](/archive/bsc-programme/seminars/S028.md) · [S029](/archive/bsc-programme/seminars/S029.md) · [S037](/archive/bsc-programme/seminars/S037.md) · [S049](/archive/bsc-programme/seminars/S049.md) · [S052](/archive/bsc-programme/seminars/S052.md) · [S061](/archive/bsc-programme/seminars/S061.md) · [S063](/archive/bsc-programme/seminars/S063.md)

**Five of the fourteen are the measurement spine** — [S026](/archive/bsc-programme/seminars/S026.md) construct and instrument, [S027](/archive/bsc-programme/seminars/S027.md) error structure, [S028](/archive/bsc-programme/seminars/S028.md) sampling and intervals, [S029](/archive/bsc-programme/seminars/S029.md) instrument design, [S049](/archive/bsc-programme/seminars/S049.md) clustering and power. That is not an incidental gap. **It is the workshop's own subject matter appearing as its largest undelivered dependency**, which is what happens when a two-day format tries to teach the *conclusions* of measurement without the measurement.

**A team missing the measurement spine should be offered a longer format, not this one.** That recommendation survives; only its basis has changed, from taste to arithmetic.

> **Superseded, kept deliberately.** This section previously named **three** at-risk prerequisites — S026, S028 and S036 — chosen by reading the material and asking which felt thin. The mechanical answer is fourteen, and S036 was not among them because it is a seed the workshop already teaches. **A hand-built projection under-counted its own gap by a factor of four, twice, in the same section.** Recorded under [instrumentation rule 9](/archive/bsc-programme/program/04-Seminar-Day-Design-Pattern.md).

## What it does deliver

Ten claims, chosen because they are durable, immediately applicable, and each one is something the team is probably getting wrong today.

| # | Claim | Namespace | Source |
|---|---|---|---|
| 1 | *Similar* is a construction, not a property of text | `ai-systems` | [S051](/archive/bsc-programme/seminars/S051.md) |
| 2 | A judge has a systematic error component that more judging does not average out | `measurement` | [S048](/archive/bsc-programme/seminars/S048.md) |
| 3 | Agreement is not accuracy | `measurement` | [S048](/archive/bsc-programme/seminars/S048.md) |
| 4 | An aggregate metric hides class-specific catastrophe | `measurement` | [S053](/archive/bsc-programme/seminars/S053.md) |
| 5 | A criterion is constructed by named people, and drifts | `measurement` | [S046](/archive/bsc-programme/seminars/S046.md), [S047](/archive/bsc-programme/seminars/S047.md) |
| 6 | Defaults are opinions; thresholds are policy | `platform` | [12-Copilot-Practice-Standard](/archive/bsc-programme/program/12-Copilot-Practice-Standard.md) |
| 7 | Quota is not capacity | `platform` | [S064](/archive/bsc-programme/seminars/S064.md) |
| 8 | Tool failure has four shapes, two of which report success | `ai-systems` | [S074](/archive/bsc-programme/seminars/S074.md) |
| 9 | The request is somebody's conclusion, not their problem | `fde-craft` | [S036](/archive/bsc-programme/seminars/S036.md) |
| 10 | Saying what a measurement does not license, to someone who wants more | `fde-craft` | [S050](/archive/bsc-programme/seminars/S050.md) |

**No `method` claims are delivered.** The instrumentation rules, the compliance register and the self-correction record are the design's own discipline and are not portable to a two-day format.

**The agent configuration material is abstained on, deliberately, and this is the clearest abstention in the projection.** The [Agent Configuration Standard](/archive/bsc-programme/program/13-Agent-Configuration-Standard.md) rests on the **five classes of conclusion** — configured control, executable check, observed result, outcome evidence, unsupported inference — and in the BSc that ladder is introduced in year one and retrieved for three years before anyone is asked to apply it to a real control system. **A team cannot audit a corpus it met that morning.** Two days supplies enough exposure for participants to leave believing they have audited something, which is worse than not covering it: the failure mode of this material is *false confidence in one's own scepticism*, and a compressed delivery produces exactly that. Per rule 5, the correct output is to name the missing claims rather than to pad. They are delivered in [`config-audit-lab`](/concepts/projections.md) or not at all.

**One sentence from it does survive and is said once, in S8**, because it costs no session time and the audience is about to need it: *the existence of a control is not evidence that the control works, and that applies to the controls you are about to go home and build.*

## Shape

Eight sessions of 90 minutes across two days. Each compresses the [eight-phase pattern](/archive/bsc-programme/program/04-Seminar-Day-Design-Pattern.md) to four moves — **predict · execute · consolidate · clinic** — which is the largest compression the pattern survives. Phases 2 (cumulative retrieval), 7 (peer articulation) and 8 (calibration) are cut; the reasons are in DERIVATION.md.

### Day 1 — What your evaluation is actually telling you

**S1 · Similar to what** *(claim 1)*
Twelve documents from the team's own corpus, grouped by hand. Then four embeddings' groupings, which disagree with each other and with the room. No right answer. Executed against real deployed embedding models. Ends with the probe-pair method: pairs differing in exactly one respect.

**S2 · The judge is biased** *(claims 2, 3)*
Twenty of their own outputs, scored by a judge, re-presented reordered, scored again. The scores move. Then: what does more judging do to a systematic offset? Nothing. Ends on the sentence the room keeps — *two judges agreeing is evidence they share a bias as readily as evidence they are right.*

**S3 · The aggregate is lying to you** *(claim 4)*
Four ablations of a real system, aggregate results supplied first. The room commits to the obvious conclusion. Then the per-class breakdown arrives and one conclusion would have shipped. **The two-part reveal is the session's whole mechanism and must not be collapsed.**

**S4 · Where your criterion came from** *(claims 5, 6)*
The team's own evaluator configuration. Who chose the threshold? Who chose the split? The split defaults to last turn, which measures something other than what most teams believe. The evaluators' agreement with human judgement is published nowhere, so **every judged score in the stack is uncalibrated** — and the team says so out loud, in their own words, about their own dashboard.

### Day 2 — Shipping, and what you owe the reader

**S5 · Quota is not capacity** *(claim 7)*
Quota is a policy limit with no associated cost; capacity is what is actually available. Having quota does not guarantee capacity. Executed against a real subscription: request, observe, read the bill. Ends on the five things owed to a reader of any number.

**S6 · Four shapes of tool failure** *(claim 8)*
Selection, input, execution, output utilisation. Two of the four produce systems that report success and are wrong. Run against the team's own agent, with the platform's tool-usage evaluators.

**S7 · The request is not the problem** *(claim 9)*
A real request from a real stakeholder, implemented literally by an agent in fifteen minutes — fast, clean, confident, and answering the wrong question. **Copilot's competence is the teaching instrument here, not an aside.**

**S8 · What it does not license** *(claim 10)*
Each participant states one finding from the two days to four parties in turn: the engineer who built the thing, the owner with a date, the person who will use it, and someone who will quote one sentence. The third want is legitimate and cannot be satisfied. Both failure modes are named in advance — overclaiming, and hedging into unusability — and **the second is the one this audience will commit.**

## After the workshop

The only mitigation for the retention problem, and it is admittedly thin.

- **Week 1** — each participant runs the S2 judge characterisation on one production judge and posts the systematic component they found.
- **Week 3** — each posts one aggregate metric they have stopped trusting, with the class it was hiding.
- **Week 6** — a 90-minute follow-up: what changed, what did not, and one thing from the workshop that turned out to be wrong here.

The week-6 session is the only occasion in this projection where the team's own evidence can contradict the claims. **It is the most valuable ninety minutes in the projection and the first thing that will be cancelled.**

## Fidelity

| Delivered as | Claims |
|---|---|
| **Capability** — practised, with feedback, on their own system | 1, 2, 4, 6, 7, 8 |
| **Information** — argued and demonstrated, not practised | 3, 5, 9 |
| **Rehearsal only** — performed once, under constructed pressure | 10 |

Claim 10 is the weakest transfer in the projection. In the BSc it has a precursor at S050 and a rehearsal at S083 with real stakes, both preceded by two years of measurement discipline. Here it is ninety minutes at the end of day two, and the honest description is *exposure*.

## Related

- [concepts/projections.md](/concepts/projections.md) — the rules this projection obeys
- [DERIVATION.md](/projections/workshop-2day/DERIVATION.md) — what building this by hand revealed
- [wiki/Home.md](/archive/bsc-programme/Home.md) — the projection that has been finished
