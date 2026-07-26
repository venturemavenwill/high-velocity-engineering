# EPA Research Notes

Date: 2026-07-25 (design register; revised against verified sources)

> Working design document, not a source note. It applies the constraints established in the source notes of this folder to the course's own candidate entrustable professional activities. Source-grounded claims cite the note they come from; everything else is a local design decision and is marked as such.

## Purpose
This folder holds the assessment architecture research for the course's EPA-based evaluation model. This file is the register: the candidate activity set, the criteria each candidate must satisfy, the open questions, and the design rules that the source evidence supports.

## Constraints inherited from the sources
Before evaluating any candidate, the constraints are fixed. Each is verified in the note cited.

- **Granularity.** An activity is a bounded piece of work with a beginning and an end that a supervisor could delegate whole. Programme-level sizing guidance is 20-40 activities for an entire degree; in a reported physician-assistant cohort of 101 graduates over 2.5 years, learners completed 6.6 activities on average. Source: [ten-cate-epa-framework.md](research/08-assessment-epas/ten-cate-epa-framework.md). **Implication: a single course supports two or three entrusted activities, not twelve.**
- **The unit describes work, not persons.** "Professionals can possess competencies; they can never possess EPAs." Any candidate phrased as a trait, a skill or a learning objective is mis-specified. Source: same.
- **Title discipline.** No adjectives, and not phrased as an educational objective. Quality standards belong in the specification and the supervision level. Source: same.
- **Output form.** The assessment output is a supervision level, not a grade, and the expanded sub-levels (2a/2b, 3a/3b/3c, 4a/4b) are where within-course progression is visible. Undergraduate targeting guidance is level 3. Source: same.
- **Summative evidence standard.** Multiple observers in agreement, multiple observations, across four evidence types: direct observation, longitudinal observation, case-based discussion, product evaluation. Source: same.
- **Oral component.** The entrustment-based discussion must include what-if questions about situations not encountered, because entrustment explicitly accepts unpredictable future conditions. Source: same.
- **Rater noise.** Idiosyncratic rater effects account for 29% to over 50% of rating variance and are unrelated to rater expertise; standardising instruments and training raters has had "mixed success at best". Source: [govaerts-narrative-assessment-literature.md](research/08-assessment-epas/govaerts-narrative-assessment-literature.md).
- **Narrative primacy and anchoring.** Assessors reason from narrative and use scores only to confirm; they form person schemas the moment observation begins and stick to initial judgements against disconfirming evidence. Source: same.
- **Construct divergence.** Assessors reaching the same pass/fail outcome frequently reason from incompatible premises, so agreement statistics on outcomes do not establish that the same thing is being assessed. Source: same.
- **Precision ceiling.** Roughly 80% agreement is the level humans reach with each other on complex judgements. Evidence in a course is clustered and single-digit in volume. Source: [measurement-and-evaluation-sources.md](research/08-assessment-epas/measurement-and-evaluation-sources.md). **Implication: coarse ordinal output only.**
- **Operational feasibility.** Oral verification scales when it is a rubric item discharged at ordinary office hours within a bounded window, and when lab credit is earned in-session by demonstration and questioning. Source: [cmu-oral-defense-and-token-economy-patterns.md](research/08-assessment-epas/cmu-oral-defense-and-token-economy-patterns.md).
- **Tool policy follows the evidence.** Where the grade is earned by explaining the work, artefact provenance stops mattering and AI tools need no restriction outside live conversation. Source: same.

## EPA set under consideration
Twelve candidates. The count is deliberately larger than the course can carry; the purpose of the register is to select down to two or three entrusted activities, with the remainder either merged, demoted to assessed-but-not-entrusted components, or dropped.

1. Convert ambiguity into a scoped, testable increment
2. Ship a working increment within a time-box
3. Verify AI-generated output before it reaches a user
4. Decide when not to use AI and justify it
5. Design, run, and interpret a ship/no-ship evaluation
6. Diagnose and recover from a production incident
7. Give and receive critique that changes an artefact
8. Recognise limits and escalate appropriately
9. Instrument a system for detectability
10. Hand over a running system with documentation
11. Communicate technical risk to a non-technical stakeholder
12. Threat-model an agentic system and demonstrate an exploit

### Screening notes against the inherited constraints
These are local judgements, not source claims.

- **Candidates 4 and 8 are mis-specified as activities.** "Decide when not to use AI and justify it" and "Recognise limits and escalate appropriately" describe dispositions rather than bounded work with a beginning and an end. Note that ten Cate's three named professionalism characteristics — integrity, reliability and humility, the last defined as "the ability to observe own limitations and willingness ask for help when needed" — cover exactly this ground, and are assessed *within* activities rather than as activities. **Recommendation: fold 4 and 8 into the dispositions assessed across all activities.**
- **Candidates 1 and 2 are natural partners and may be one activity.** Scoping an ambiguous request and delivering against that scope within a time-box share a beginning and an end. Splitting them creates an artificial boundary at the point where scoping ends, which is precisely the point that is hardest to locate in real work. **Recommendation: merge, or keep separate only if the course can genuinely observe the scoping artefact independently of the delivery.**
- **Candidates 3 and 5 both concern verification but at different scales.** Candidate 3 is per-output and continuous; candidate 5 is a bounded decision with a clear deliverable. Candidate 5 satisfies the granularity test cleanly and candidate 3 does not. **Recommendation: retain 5 as an activity; treat 3 as a required practice observed within it.**
- **Candidate 6 requires an incident to occur.** Diagnosis and recovery cannot be scheduled, and a simulated incident produces simulated entrustment evidence — a caution recorded explicitly in the ten Cate note. The CMU precedent is instructive: a live system serving one million users under changing conditions generates real failures without staging them. **Open question: can this course produce a substrate with genuine failure modes?**
- **Candidate 7 has no clear end.** "Give and receive critique that changes an artefact" is a practice, and the completion condition — that the artefact changed — is outside the student's control. **Recommendation: demote to an observed practice with evidence recorded longitudinally.**
- **Candidates 9, 10, 11 and 12 all satisfy the granularity test.** Each is bounded, each has a recognisable end, and each produces a product that can be evaluated. Candidates 10 and 11 are the strongest on the "could a supervisor delegate this whole thing" criterion.
- **Candidate 12 carries a scope constraint that must be written into its specification.** Demonstrating an exploit requires an explicit authorised target and a stated boundary, following ten Cate's specification-and-limitations discipline. Without it the activity is under-specified in a way that matters more than usual.

**Provisional selection for entrustment: candidates 5, 10 and 11** — a bounded evaluation decision, a handover, and a stakeholder risk communication. Together they recruit different competencies, produce different evidence types, and are all observable within a semester. This is a design proposal, not a settled decision.

## Research questions
Open, in priority order.

- Is each candidate observable in student work, or only inferable from it? Observability is the entry criterion; anything that must be inferred belongs in the dispositions layer instead.
- Is each candidate independently assessable, or does its evidence collapse into an adjacent candidate's?
- What evidence artefact proves each candidate, and does the course generate that artefact naturally or would it have to be manufactured?
- What supervision level is the realistic target at course completion? Undergraduate guidance is level 3; the open question is whether the course targets 3b or 3c on the expanded scale.
- Which candidates should be merged, demoted to observed practices, or dropped, to reach a set of two or three?
- Can the course produce a substrate with genuine consequences, or does the entrustment framing overclaim without one?
- How many independent assessor-occasion pairs can the staffing actually support per student? This number, not the desired design, determines whether summative entrustment is defensible or whether the course must describe its decisions as ad-hoc.
- What is the accommodation path for oral assessment? Neither the CMU policy nor the EPA literature addresses this, and it cannot be left until it is needed.

## Assessment design rules
Each rule is followed by the constraint that licenses it.

- **Use the expanded supervision sub-levels, not the bare five-point scale**, and target level 3b or 3c at course completion. *Licensed by: undergraduate targeting guidance and the sub-level structure in the ten Cate note; the bare scale is too coarse to show one semester's progression.*
- **Phrase the scale anchors in the assessors' own idiom** — what a supervising engineer would say about how much they need to check — following the Weller precedent, where entrustability phrasing mapped onto an existing scale "proved to increase the reliability of assessment". *Licensed by: the ten Cate note.*
- **Require narrative justification with every rating.** A level with no substantiation is not usable evidence. *Licensed by: the finding that assessors reason from narrative and use scores only to confirm, and the recommendation that judgements be thoroughly substantiated.*
- **Aggregate multiple observations across contexts, and count assessor-occasion pairs rather than raw observations.** *Licensed by: the multiple-observer summative standard, and the clustering argument in the measurement note.*
- **Use oral defence as the verification gate, structured as an entrustment-based discussion with mandatory what-if questions**, discharged as a rubric item at office hours within a bounded window rather than as a set-piece event. *Licensed by: the ten Cate definition for the content, the CMU pattern for the logistics.*
- **Make summative decisions with at least two assessors who write independent substantiations before deliberating.** Independent first, discussion second. *Licensed by: the construct-divergence finding — deliberating first collapses the divergence the panel exists to surface.*
- **Interrupt anchoring explicitly:** record a preliminary judgement, then review remaining evidence looking specifically for disconfirmation, then record whether the judgement changed. *Licensed by: the immediate person-schema formation and initial-judgement persistence findings.*
- **Assess integrity, reliability and humility explicitly using the source's behavioural definitions**, as the dispositions layer that absorbs candidates 4 and 7 and 8. *Licensed by: the three professionalism characteristics in the ten Cate note; aligns with ABET's proposed professional-dispositions definition recorded in folder 07.*
- **Calibrate assessors on a shared worked example each term, targeting beliefs, performance theories and inferences by name** rather than instrument calibration. *Licensed by: the "mixed success at best" finding on rater training and the alternative the authors recommend.*
- **Report coarse ordinal levels, never fine-grained scores**, and publish the reliability position including the 29-50% variance figure. *Licensed by: the measurement note's power and clustering argument, and the Govaerts base rate.*
- **Permit AI tools without restriction on produced work; prohibit them only in live conversation with staff.** *Licensed by: the CMU policy and the principle that oral evidence makes provenance irrelevant.*
- **Set an expiry convention if entrustment carries across terms.** *Licensed by: the optional expiry-date element in the EPA description template.*

## Per-activity documentation requirement
Every activity that survives selection must be written to the seven-part template from the ten Cate note, on one to two pages: title (no adjectives, not an objective); specification and limitations; link to the ABET student outcomes and CS2023 competency framing; required knowledge, skills, attitude and experience; sources of information supporting the entrustment decision; targeted supervision level; and optional expiry. The link section doubles as the accreditation artefact — an activity-by-outcome matrix marking each cell necessary or merely useful, as recorded in [research/07-accreditation-exemplars/ten-cate-epa-framework.md](research/07-accreditation-exemplars/ten-cate-epa-framework.md).

## High-signal sources
- **ten Cate, "A primer on entrustable professional activities"** — the description template, supervision scale, evidence standard and entrustment-based discussion. Full text read. Notes: [design manual](research/08-assessment-epas/ten-cate-epa-framework.md), [full reading](research/03-measurement-evaluation/ten-cate-epas.md), [accreditation reading](research/07-accreditation-exemplars/ten-cate-epa-framework.md).
- **Oudkerk Pool, Govaerts et al. (2018) and Govaerts et al. (2013)** — rater variance, narrative primacy, anchoring, construct divergence, and the structural remedies. Notes: [assessor-design manual](research/08-assessment-epas/govaerts-narrative-assessment-literature.md), [full reading](research/03-measurement-evaluation/govaerts-narrative-assessment.md).
- **CMU 17-645 course policies** — oral verification logistics, specification grading, token economy, opt-in participation, AI policy. Note: [cmu-oral-defense-and-token-economy-patterns.md](research/08-assessment-epas/cmu-oral-defense-and-token-economy-patterns.md).
- **The measurement and evaluation synthesis** — clustering, power, the agreement ceiling, and the argument for coarse reporting. Note: [measurement-and-evaluation-sources.md](research/08-assessment-epas/measurement-and-evaluation-sources.md).
- **ABET proposed professional-dispositions definition and comprehensive-project requirement**, and the **CS2023 vision statement** on dispositions — the external warrant for the dispositions layer. Notes in [research/07-accreditation-exemplars/](research/07-accreditation-exemplars/collected-materials.md).

## Open items and known gaps
- **The twelve-candidate set has not yet been reduced.** The screening notes above propose a reduction to three plus a dispositions layer; this has not been ratified.
- **No activity has yet been written to the seven-part template.** Until at least one exists in full, the design is untested.
- **The substrate question is unresolved.** Candidates 6 and 9 in particular depend on a system with real failure modes, and the course does not yet have one.
- **Assessor capacity is unquantified.** The number of independent assessor-occasion pairs available per student determines whether any decision here can be called summative.
- **Accommodation for oral assessment is undesigned**, and is not addressed by any source in this folder.
- **The dispositions layer needs observable indicators.** Integrity, reliability and humility are defined behaviourally in the source but not operationalised; that work is local and outstanding.
- **The screening judgements in this file are local reasoning, not source claims**, and should be reviewed by someone other than their author before the activity set is fixed.