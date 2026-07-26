# workshop-2day

> A two-day workshop for a working engineering team, derived from the same claims as the [BSc programme](wiki/Home.md).
>
> **Status:** built by hand from the wiki, not from extracted claims. See [DERIVATION.md](projections/workshop-2day/DERIVATION.md) for what that cost and what it revealed.

## What this projection is for

A team already shipping AI systems on the Microsoft AI Platform, who have an evaluation harness they do not trust, a cost line they cannot explain, and a release decision nobody wants to own.

Two days. One team. No assessment. Everyone has GitHub Copilot in agent mode and access to a disposable Azure subscription.

## What it cannot deliver, stated first

Per [projection rule 5](concepts/projections.md), abstention is a valid output. This projection abstains on four things, and says so to the room on the first morning rather than implying otherwise.

**Retention.** Spacing, interleaving and expanding-interval retrieval are the `pedagogy` namespace's best-warranted content and a two-day format destroys all three. **The BSc delivers these claims across three years and 90 retrieval events; this delivers them once.** Participants will retain what they use in the following weeks and very little else. Section 9 below is the only mitigation and it is weak.

**Entrustment.** A judgement of readiness requires multiple occasions, two independent assessors, narrative substantiation and no carry-forward between occasions. None of that is available in two days, and **a workshop that issued a certificate would be making a claim the `assessment` namespace explicitly forbids.** No certificate is issued.

**Complexity class 3 and above.** From class 3 the student chooses the method *and* the success criterion; at class 4 the problem arrives ambiguous and they formulate it. Both require holding an unresolved problem for hours. This projection runs at class 2 throughout — the problem and the criterion are supplied.

**Consequence.** The BSc's substrate is a live service with real external users, and every class-5 and class-6 claim depends on decisions that cost something. A workshop has no consequence, so **every claim about judgement under consequence is delivered as information rather than as capability.** The distinction is stated in each session.

## What it does deliver

Ten claims, chosen because they are durable, immediately applicable, and each one is something the team is probably getting wrong today.

| # | Claim | Namespace | Source |
|---|---|---|---|
| 1 | *Similar* is a construction, not a property of text | `ai-systems` | [S051](wiki/seminars/S051.md) |
| 2 | A judge has a systematic error component that more judging does not average out | `measurement` | [S048](wiki/seminars/S048.md) |
| 3 | Agreement is not accuracy | `measurement` | [S048](wiki/seminars/S048.md) |
| 4 | An aggregate metric hides class-specific catastrophe | `measurement` | [S053](wiki/seminars/S053.md) |
| 5 | A criterion is constructed by named people, and drifts | `measurement` | [S046](wiki/seminars/S046.md), [S047](wiki/seminars/S047.md) |
| 6 | Defaults are opinions; thresholds are policy | `platform` | [12-Copilot-Practice-Standard](wiki/program/12-Copilot-Practice-Standard.md) |
| 7 | Quota is not capacity | `platform` | [S064](wiki/seminars/S064.md) |
| 8 | Tool failure has four shapes, two of which report success | `ai-systems` | [S074](wiki/seminars/S074.md) |
| 9 | The request is somebody's conclusion, not their problem | `fde-craft` | [S036](wiki/seminars/S036.md) |
| 10 | Saying what a measurement does not license, to someone who wants more | `fde-craft` | [S050](wiki/seminars/S050.md) |

**No `method` claims are delivered.** The instrumentation rules, the compliance register and the self-correction record are the design's own discipline and are not portable to a two-day format.

## Shape

Eight sessions of 90 minutes across two days. Each compresses the [eight-phase pattern](wiki/program/04-Seminar-Day-Design-Pattern.md) to four moves — **predict · execute · consolidate · clinic** — which is the largest compression the pattern survives. Phases 2 (cumulative retrieval), 7 (peer articulation) and 8 (calibration) are cut; the reasons are in DERIVATION.md.

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

- [concepts/projections.md](concepts/projections.md) — the rules this projection obeys
- [DERIVATION.md](projections/workshop-2day/DERIVATION.md) — what building this by hand revealed
- [wiki/Home.md](wiki/Home.md) — the projection that has been finished
