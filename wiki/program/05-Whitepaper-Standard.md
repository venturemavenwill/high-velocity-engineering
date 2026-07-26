# Whitepaper Standard

> Every seminar day carries a whitepaper. This page defines what a whitepaper must contain, what standard of argument it must meet, and what evidentiary discipline it must observe. A whitepaper that does not make a falsifiable claim has not met the standard.

## Purpose

The whitepaper is not documentation of the seminar day. It is a **defence** of it. Its job is to make the instructional design of a single day arguable: to state what problem the day must solve, what mechanism the design relies on, what the design predicts, what would falsify the prediction, and what the strongest objection to it is.

The audience is a sceptical reader with expertise in either learning science or software engineering, and no obligation to be persuaded.

## Required structure

```markdown
# WP-0NN — <Seminar day title>

**Seminar day:** [S0NN](wiki/seminars/S0NN.md) · **Module:** [M0N](wiki/modules/M0N.md) · **Quarter:** [QN](wiki/quarters/QN.md)
**Strands:** <codes> · **Complexity class:** <1–6>
**Platform anchor:** <named Microsoft service> · **MCP servers:** <named>

## Abstract
## 1. The instructional problem this day must solve
## 2. Entry state and prior knowledge assumptions
## 3. Theoretical basis for the design
### 3.1 Load profile and element interactivity
### 3.2 Desirable difficulties selected, and those deliberately not
### 3.3 Engagement and motivational mechanism
## 4. Phase-by-phase design and its warrant
## 5. Predicted failure modes and countermeasures
## 6. Retention architecture
## 7. Assessment and evidence generated
## 8. Objections and rebuttals
## 9. Falsifiable predictions and instrumentation
## Evidence status
```

## What each section must do

**Abstract.** 120–200 words. States the day's target competence, the single mechanism the design leans on hardest, and the principal risk. No throat-clearing.

**§1 The instructional problem.** Not the topic — the *problem*. What specifically is hard about this material for this learner at this point? Which of the known difficulty sources is operating: high element interactivity, a counterintuitive result, a distinction invisible without contrast, a skill that fails to transfer, a metacognitive illusion, an affective barrier? A day whose problem statement reduces to "students need to know X" has not done this section.

**§2 Entry state.** Explicit and checkable: what schemas the student is assumed to hold, which prior seminar days established them, and what the design does if the assumption is wrong. Stating this per day is what makes a mis-sequenced prerequisite a detectable error rather than a silent one.

**§3 Theoretical basis.**
- **3.1 Load profile.** Which elements interact and must be held simultaneously; where load is therefore high; what representational decisions reduce it. Names the point at which expertise reversal would begin to apply.
- **3.2 Desirable difficulties.** Which difficulties are introduced deliberately, and — equally required — which were available and rejected, with the reason. The programme's reconciliation rule is that difficulty belongs in retrieval and selection and not in representation and attention; a whitepaper that violates the rule must argue for the violation.
- **3.3 Engagement mechanism.** How autonomy, competence and relatedness are supported on this specific day, and what triggers situational interest. Generic appeals to relevance do not satisfy this section.

**§4 Phase-by-phase design.** All eight phases, each with its content for this day and the warrant for that content. Departures from the [Seminar Day Design Pattern](wiki/program/04-Seminar-Day-Design-Pattern.md) are named and justified here. The pretest items, the contrasting cases and the learning task are given concretely, not described in the abstract.

**§5 Predicted failure modes.** What will go wrong. At minimum: the failure mode if students arrive with more prior knowledge than assumed; the failure mode if they arrive with less; the failure mode if the phase 3 generation succeeds too easily; and the affective failure mode. Each with a countermeasure that is actually available to the instructor in the room.

**§6 Retention architecture.** Which prior days this day retrieves from and why those; which future days will retrieve this day's material and at what gaps; which constituent skills are scheduled for blocked rather than interleaved practice and why. This section is what makes the programme-wide spacing schedule real rather than aspirational.

**§7 Assessment and evidence.** What observable evidence the day generates, which entrustment activity it feeds, which ABET or CS2023 outcome it contributes to, and — importantly — what it does *not* license anyone to conclude.

**§8 Objections and rebuttals.** At least two genuine objections, stated at their strongest, with rebuttals that concede what should be conceded. An objection the whitepaper can dismiss easily is not worth including. At least one objection must be one the design does not fully answer.

**§9 Falsifiable predictions.** At least two predictions of the form *if this design works, we will observe X; if we observe Y instead, the design is wrong in this specific way*. Each with the instrument that would measure it — delayed retrieval performance, calibration gap, transfer-task performance, incident-log behaviour, oral defence quality. Predictions must be capable of failing.

**Evidence status.** Mandatory closing section, in three parts, following repository convention:
1. **Verified in this repository** — with the specific note cited, and the depth of verification recorded there carried forward honestly.
2. **Canonical literature cited from general knowledge, not verified here** — direction and mechanism only.
3. **Design reasoning with no external warrant.**

## Evidentiary discipline

### Vendor documentation is a fourth evidence class

Every whitepaper's `## Evidence status` carries a fourth labelled part where the day has a platform anchor: **Grounded in vendor documentation, with its version and its silence recorded.**

The class exists because vendor material fails differently from research literature. It is authoritative about its own behaviour, it is superseded without notice, and it is **systematically silent in one direction**: every source consulted for [research/06-microsoft-platform/](research/06-microsoft-platform/collected-materials.md) states a latency or a sampling bound, and none states an accuracy. A whitepaper citing vendor documentation must therefore record three things — what the documentation says, what version or date it says it at, and **what it does not report that a reader would need**.

The standing prohibitions on the [Microsoft AI Platform Map](wiki/program/11-Microsoft-AI-Platform-Map.md) bind here without exception. In particular, **no evaluator's agreement with human judgement may be asserted, because none is published**, and every judged score produced by the platform is described as uncalibrated until it is.

These rules are inherited from the [source register](research/99-source-register/source-register.md) and are not optional.

- **No effect size, count, benchmark or numeric finding may be asserted for an unverified source.** Direction and mechanism only. If a magnitude matters to the argument, either verify it or restructure the argument.
- **A claim carries forward the verification depth of its source note.** Where a note records a synthesis of a copyrighted work rather than a full-text reading, whitepapers citing it must not present it as a full reading.
- **Perishable platform detail may illustrate but never grounds a design claim.** See the [Durable and Perishable Register](wiki/program/09-Durable-and-Perishable-Register.md).
- **Predictions about this programme's own outcomes have no external warrant** and must always appear in part three of the evidence status.

### The scope rule

**Every taught claim that could be read as unbounded must carry its scope statement.** Four registers are covered.

- **Enumerations.** Where a day presents a finite list — cost terms, question types, claim forms, model properties, failure classes, requirements, promise forms — phase 4 must state what the list omits and why.
- **Normative claims.** Where a day asserts a professional duty, phase 4 must state the conditions under which the duty does not apply, or name where those conditions are taken up.
- **Criteria.** Where a day supplies a criterion used in assessment, phase 4 must state the reading under which it is being applied, at the strength the design can actually defend.
- **Deferrals.** Where a whitepaper defers a risk, a repair or an unresolved question to a later day, it must name the instrument by which that day will show the deferral was discharged — and must check that the named day can carry it. A deferral to a day with no means of verification is a claim without a scope statement in temporal form.
  - **Cross-course deferrals** are held to a stricter form. Where a seminar day defers material to a concurrent course the seminar strand does not control, the day must carry an artefact element requiring the student to state which course material they applied. Without one the deferral is unverifiable in principle, since the seminar strand has no visibility into whether the content was delivered, landed, or exists. Added after [WP-041](wiki/whitepapers/WP-041.md) §8 found the day's most common leak class deferred to a concurrent course with no join, and identified it as the second unverified deferral in two quarters.

In all four cases the whitepaper's §3.2 must record the bounding as a deliberate selection rather than leaving it implicit.

**The strong form.** [WP-031](wiki/whitepapers/WP-031.md) §8 observed that a scope statement naming an omission can function as a licence to disregard it — the day discharges the rule and remains unable to handle student work that falls outside the named list. [WP-032](wiki/whitepapers/WP-032.md) §3.2 proposed a stronger form in response, and it is adopted here: **where a simplification is taught, state the conditions under which it is safe and the conditions under which it is not.** "This treats visibility as a black box, which is safe for reasoning about specifications and unsafe for writing lock-free code, which this day does not do" is a scope statement a student can act on. "This omits memory-model guarantees" is one they cannot. The strong form is required wherever the simplification could plausibly be carried into work the day does not supervise.

**Provenance.** The rule was introduced for enumerations after [WP-023](wiki/whitepapers/WP-023.md) §8 identified six instances across three modules in which this design presented a tractable enumeration as complete: [WP-012](wiki/whitepapers/WP-012.md) (three cost terms), [WP-014](wiki/whitepapers/WP-014.md) (five question types), [WP-016](wiki/whitepapers/WP-016.md) (two hierarchy properties), [WP-022](wiki/whitepapers/WP-022.md) (four guarantee forms), [WP-023](wiki/whitepapers/WP-023.md) (three reduction requirements), plus the general finding first stated in WP-016. It was widened to normative claims and criteria after [WP-024](wiki/whitepapers/WP-024.md) §8 found the same failure in a duty statement and [WP-025](wiki/whitepapers/WP-025.md) §8 found it in an assessment criterion — three registers on three consecutive days, which established that the original rule was drawn too narrowly. It was widened again to deferrals after [WP-029](wiki/whitepapers/WP-029.md) §8 found that [WP-026](wiki/whitepapers/WP-026.md), [WP-027](wiki/whitepapers/WP-027.md) and [WP-028](wiki/whitepapers/WP-028.md) had each deferred the same affective risk to a day that lacked any means of verifying its resolution, and that none had checked whether that day could bear the claim.

The pattern is instructive and is recorded rather than quietly repaired. A programme whose central discipline is stating the boundary of what you can claim had, in its own materials, systematically omitted the boundaries of its own claims. **The days listed above are not retrospectively amended**; each widening applies from the following seminar day, and the earlier whitepapers retain their concessions so that the failure remains legible.

## The compliance register

**Where a whitepaper finds that a day violates a rule this design holds, the finding is entered here with its status and the reason for the fix-or-record decision.**

The register exists because [WP-045](wiki/whitepapers/WP-045.md) §8 observed that the design had begun fixing some of its own rule violations and recording others with no stated criterion, so that its compliance state was reconstructible only by reading every whitepaper. That is the third pattern-level finding about how rules propagate through this design, after [WP-042](wiki/whitepapers/WP-042.md) §8 and [WP-044](wiki/whitepapers/WP-044.md) §8, and it is the first to suggest a mechanism rather than a habit.

**The criterion, stated for the first time.** An outright contradiction or a violation of a written rule is **fixed**, with the correction annotated at the point of change. A finding that requires a design judgement — where the rule is satisfiable in more than one way and the whitepaper is arguing for one — is **recorded** and left standing, so that the argument survives and can be disagreed with.

| Finding | Rule | Status | Reason |
|---|---|---|---|
| [WP-041](wiki/whitepapers/WP-041.md) §8 — [S041](wiki/seminars/S041.md) leak-audit clause required findings rather than evidence | Assessment rule 1 | **Fixed** | Operative sentence contradicted its own justification |
| [WP-041](wiki/whitepapers/WP-041.md) §8 — feature-leakage class deferred to IS201 with no join | Cross-course deferral | **Recorded** | Superseded by the S044 fix, which established the artefact-element form |
| [WP-042](wiki/whitepapers/WP-042.md) §8 — [S042](wiki/seminars/S042.md) search log required and withheld from phase 7 | Assessment rule 3 | **Recorded** | Whether a phase should receive a third document is a design judgement |
| [WP-042](wiki/whitepapers/WP-042.md) §8 — scope boundary drawn at project-versus-research, leaving the long-lived case outside both | Scope rule | **Recorded** | Requires a third scope case whose correct home is S066 |
| [WP-044](wiki/whitepapers/WP-044.md) §8 — [S044](wiki/seminars/S044.md) deferred infrastructure security to SG201 with no artefact element | Cross-course deferral | **Fixed** | Outright violation of a rule written three days earlier |
| [WP-045](wiki/whitepapers/WP-045.md) §8 — [S045](wiki/seminars/S045.md) verification specified against a sealed self-report when a better artefact exists | Instrumentation rule 4 | **Recorded** | Re-specifying a verification another whitepaper named is a judgement, not a correction |
| [WP-049](wiki/whitepapers/WP-049.md) §8 — [S049](wiki/seminars/S049.md) restricts its design-effect expression to exchangeable clustering, and no artefact element prevents a student applying it outside that model | Scope rule, strong form | **Recorded** | The rule as written binds the whitepaper and not the day; whether it should bind both is the open question below |
| [WP-042](wiki/whitepapers/WP-042.md) §8 — scope boundary drawn at project-versus-research, leaving the long-lived case outside both | Scope rule | **Discharged** | [S066](wiki/seminars/S066.md) point 5 supplies the third case — single-deliverable versus long-lived — and divides the long-lived case further into owned and imposed |
| [WP-055](wiki/whitepapers/WP-055.md) §8 — [S055](wiki/seminars/S055.md) binds its strong-form scope statement to the assessed artefact, at the cost of one exclusion route and one fail condition | Scope rule, strong form | **Recorded** | A counter-instance rather than a second instance: evidence that the declined widening is cheaper than the register assumed |
| [WP-059](wiki/whitepapers/WP-059.md) §8 — [S059](wiki/seminars/S059.md)'s human-versus-mechanical-judgement boundary was stated in the whitepaper and not checkable in the student artefact; repaired at this day and left standing at [S049](wiki/seminars/S049.md) | Scope rule, strong form | **Recorded** | WP-059 argues that repairing where noticed while leaving S049 standing is the propagation failure rule 5 exists to prevent, one level up |
| [WP-060](wiki/whitepapers/WP-060.md) §8 — [S060](wiki/seminars/S060.md) forms an entrustment level from an artefact recording a prospective decision, so the artefact carries no evidence about the judgement being assessed | Rater discipline rule 7 | **Recorded** | Compliance produces a weak judgement for an entire class of occasion — S060, S070, S085 and all of EA-1. The remedy is a design judgement |
| [WP-064](wiki/whitepapers/WP-064.md) §8 — [S064](wiki/seminars/S064.md) restricts its break-even to non-tradeable, non-pre-emptible, within-period-flat pricing, and no artefact element requires the student to say so | Scope rule, strong form | **Recorded** | Reached independently of WP-059; the two together settle the open question below |
| [WP-066](wiki/whitepapers/WP-066.md) §8 — the programme teaches that release gates go unvalidated and does not validate the substrate's own | Instrumentation rule 4 | **Recorded** | The annual-refresh fix interacts with the substrate's operating schedule; the commitment belongs on the Substrate page |
| [WP-069](wiki/whitepapers/WP-069.md) §8 — M14 recruits PE with no concurrent Q7 course, making the cross-course deferral rule inapplicable rather than violated | Cross-course deferral | **Recorded** | Repair requires a Course Catalogue change. Second instance of PE-scheduling misalignment after [WP-088](wiki/whitepapers/WP-088.md) §8 |
| [WP-071](wiki/whitepapers/WP-071.md) §8 — [S071](wiki/seminars/S071.md) phase 7 measured with a peer a judgement an available external observer was positioned to make, and did not carry [S068](wiki/seminars/S068.md)'s remedy across | Instrumentation rules 1 and 5 | **Fixed** | Violation of two written rules with the remedy already in the repertoire; no design judgement was in contest |
| [WP-072](wiki/whitepapers/WP-072.md) §8 — [S072](wiki/seminars/S072.md) phase 3 generalised from a single task record and did not carry [S017](wiki/seminars/S017.md)'s second-workload remedy across | Instrumentation rule 5 | **Fixed** | Violation of a written rule with the remedy already in the repertoire and cited in the same day's phase 2 |
| [WP-078](wiki/whitepapers/WP-078.md) §7 — [WP-054](wiki/whitepapers/WP-054.md) §3.2 deferred safety-specific alignment to [S078](wiki/seminars/S078.md), a day whose subject is where an authorisation check runs over a corpus | Deferral rule | **Recorded** | Re-homing another whitepaper's deferral is a design judgement; the correct home is SG302 and [S087](wiki/seminars/S087.md) |
| [WP-089](wiki/whitepapers/WP-089.md) §8 — [S069](wiki/seminars/S069.md)'s named-person owner requirement is unscoped and contradicts the [S089](wiki/seminars/S089.md) handover form | Specification rule 1 | **Fixed** | Contradiction between two specifications in the same programme; S069 now carries the slot-and-occupant scoping, annotated at the point of change |

**What the register does not do.** It does not track findings that identify a gap rather than a violation — an unmade improvement, a missing phase, an unbuilt instrument. Those remain in the whitepapers, which is where the argument for them lives. The register is for cases where the design failed against something it had already committed to.

**The open question, now closed.** The WP-049 entry was the first finding to concern the scope rule's *binding surface* rather than its content: the rule requires a whitepaper to state where a simplification is safe and unsafe, and says nothing about whether the day's artefact must make that boundary checkable. A day can therefore satisfy the rule completely while assessing work that ignores it. The question was left open on the stated ground that one instance is not evidence the gap is load-bearing, and that the widening would be more expensive than the four that preceded it.

**Both halves of that reasoning have since failed.** [WP-059](wiki/whitepapers/WP-059.md) §8 and [WP-064](wiki/whitepapers/WP-064.md) §8 reached the second and third instances independently, so the gap is load-bearing. And [WP-055](wiki/whitepapers/WP-055.md) §8 is a counter-instance: S055 bound its strong-form scope statement to its assessed artefact at a cost of one exclusion route and one fail condition, which is cheaper than any of the four prior widenings. **The scope rule is therefore widened once more: where a whitepaper's scope statement identifies an unsafe condition, the day must carry an artefact element under which a student applying the simplification outside its safe range would fail.** The widening applies from [S090](wiki/seminars/S090.md)'s review forward; earlier days are not retrospectively amended, and their register rows stand so the failure remains legible.

## Style

- Plain professional prose. No emojis. No bullet-point argument where a paragraph is required — §1, §3 and §8 are argued in prose.
- Concede rather than hedge. "This is the weakest part of the design" is preferable to "further work may be warranted."
- Cite by linking to the repository note, not by restating the source.
- Length is whatever the argument requires. A day whose design is a straightforward instance of the pattern warrants a shorter paper than one that departs from it.

## Related pages

- [Seminar Day Design Pattern](wiki/program/04-Seminar-Day-Design-Pattern.md)
- [Learning Science Foundations](wiki/program/02-Learning-Science-Foundations.md)
- [Seminar Day Index](wiki/program/08-Seminar-Day-Index.md)
