# Collected Materials — Assessment and EPAs

## Working synthesis
This folder assembles the four inputs the course's assessment spine is built from, and they divide cleanly by function. **ten Cate supplies the object and the form** — what unit is assessed (a bounded professional activity), what the output looks like (a supervision level, not a grade), what evidence licenses a summative decision (multiple observers, multiple observations, four evidence types), and what the oral component must contain (what-if questions about unencountered situations). **Govaerts and the Maastricht group supply the failure modes and the controls** — assessors carry 29% to over 50% of rating variance regardless of expertise, reason from narrative while treating scores as confirmation, anchor on first impressions and elaborate rather than revise, and reach identical outcomes from incompatible premises; the remedies are structural, not instrumental. **CMU supplies the operational machinery** — how oral verification, specification grading, resubmission and participation actually run inside a semester at scale. **The measurement and evaluation literature supplies the precision ceiling** — clustered, single-digit evidence and a roughly 80% human agreement ceiling on complex judgements, which together mean the honest output is coarse.

The design that follows from all four is a small number of bounded activities, each documented to a seven-part template, each assessed on an expanded ordinal supervision scale with mandatory narrative substantiation, each verified by an entrustment-based discussion discharged as a rubric item at ordinary office hours, with summative decisions made by two assessors writing independently before deliberating, and with no fine-grained score reported at any point. **Do not rely on multiple-choice examination to certify judgement** — but equally, do not claim more precision for the replacement than the evidence supports.

## Source-by-source Cliff Notes

### ten Cate, EPA framework
- EPAs are "the units of professional practice that constitute what clinicians do as daily work" — bounded activities with a beginning and an end, entrusted only to trained personnel.
- **"Professionals can possess competencies; they can never possess EPAs."** The unit describes work, not persons; anything phrased as a trait or an objective is mis-specified.
- **Seven-part description template**, one to two pages: title (no adjectives, not an educational objective); specification and limitations; link to the competency framework; required knowledge, skills, attitude and experience; sources of information; targeted supervision level; optional expiry date.
- **Five supervision levels** with expanded sub-levels — 2a/2b, 3a/3b/3c, 4a/4b — where the sub-levels are what make one semester's progression visible. Undergraduate targeting guidance is **level 3**.
- Scales phrased in supervisors' own idiom, per Weller et al.'s nine points from "I'm not comfortable leaving the operating room" to "the trainee can work as a consultant", **"proved to increase the reliability of assessment"** when mapped onto the mini-CEX scale.
- **Summative entrustment requires multiple observers in agreement and multiple observations**, across direct observation, longitudinal observation, case-based discussion and product evaluation.
- **Entrustment-based discussion**: a short post-activity conversation that "should probe the student's deep understanding of what was done, but should include 'what-if' questions".
- **Three professionalism characteristics**, behaviourally defined: integrity, reliability, humility.
- **Sizing**: 20-40 activities for a complete programme; in a reported cohort of 101 physician-assistant graduates over 2.5 years, learners completed 6.6 on average.
- Full note: [ten-cate-epa-framework.md](research/08-assessment-epas/ten-cate-epa-framework.md)

### Govaerts and the Maastricht narrative assessment literature
- **Idiosyncratic rater effects account for 29% to over 50%** of performance-rating variance, and idiosyncrasy is **unrelated to rater expertise**.
- Standardising instruments and training raters has had **"mixed success at best"**; assessors carry implicit performance theories that a rubric does not displace.
- **"Most raters started to develop person schemas the moment they began to observe trainee performance."**
- Assessors "**mainly relied on narrative feedback**"; grades "were merely used to confirm impressions based on narratives."
- Assessors "**were inclined to stick to their initial judgments even when confronted with seemingly disconfirming evidence**"; final judgements were more elaborate but "not substantially different."
- **Same outcome, different construct**: identical pass/fail decisions rested on divergent assessment beliefs, performance theories and inferences, with performance theories that "tended to deviate from the formal assessment criteria."
- **Remedies are structural**: group decision-making on high-stakes judgements, multiple assessors, thorough substantiation, training on self-awareness rather than calibration, and evidence with contextual captions.
- Full note: [govaerts-narrative-assessment-literature.md](research/08-assessment-epas/govaerts-narrative-assessment-literature.md)

### CMU oral defence and token economy patterns
- **Oral verification in two forms**: a rubric item on assignments discharged "in person during any office hours within one or two weeks of submitting", and lab credit earned in-session by "showing source code, demoing executions, and verbally answering a few questions."
- **Collaboration including copying is permitted on labs**, because "you will have to present and explain your solution to the TA on your own." Oral assessment makes artefact provenance irrelevant.
- **Specification grading**: "All parts will be graded pass/fail for the points indicated, no partial credit", justified as letting students "intentionally decide to skip parts of assignments with clear upfront consequences." Grade boundaries published to the point, no rounding.
- **Token economy**: 8 individual and 8 team tokens, strictly separate. 1 = a day's extension against a 15%-per-day default penalty; **3 = resubmission crediting 90% of improvement** (worked example 80 → 100 gives 98); 1 = late lab; 1 = survey-penalty waiver; leftovers become participation credit.
- **The loophole is named, not closed**: a student may take zero on the deadline and resubmit arbitrarily late for three tokens and a 10% penalty, up to the final presentation.
- **AI policy**: recommended and unrestricted for coursework; prohibited only in exams and in live conversations with staff; "you will be solely responsible for the correctness of the solution"; $20-100 per month expected cost, compared to textbooks.
- **Opt-in participation** shifts 10 percentage points between midterms and participation; **peer rating** on "team citizenship"; teams of 3-6 instructor-assigned with a TA mentor and a 30-minute post-milestone meeting.
- **Grading**: 35% individual, 30% project, 25% midterms and participation, 10% labs, **no final exam**. Project serves **one million active users** live for several weeks.
- Full note: [cmu-oral-defense-and-token-economy-patterns.md](research/08-assessment-epas/cmu-oral-defense-and-token-economy-patterns.md)

### Measurement and evaluation sources applied to assessment
- Entrustment inference and model evaluation have the same shape: finite noisy observations supporting a claim about unobserved future conditions.
- **Clustering**: observed ratios of DROP 3.05 and MGSM 1.88 show nominal sample size overstating effective sample size. Repeated observations of one student on one activity by one assessor are clustered.
- **Power**: the ≈969-question calculation behind "new evals should have at least 1,000 questions". A course has single-digit evidence and should therefore make coarse claims.
- **Graduated evidence ladder** from Husain's three levels — assertions, trace review, A/B testing — ordered by cost and iteration speed.
- **Criteria drift**: criteria are needed to grade outputs, but grading outputs is how criteria get defined. Schedule rubric revision rather than denying the need.
- **Validate the validators** against human grades — the same requirement whether the validator is an LLM or a teaching assistant.
- **Four judge biases** with human analogues: position, verbosity, self-enhancement, limited reasoning. **Over 80% agreement is the human-human ceiling**, not a target to exceed.
- **Access asymmetry** as an equity constraint, by analogy with the Leaderboard Illusion audit: who books oral verification and uses tokens is invisible in the grade distribution.
- Full note: [measurement-and-evaluation-sources.md](research/08-assessment-epas/measurement-and-evaluation-sources.md)

### The course's own design register
- Twelve candidate activities under consideration, deliberately more than the course can carry.
- Screening against the granularity test suggests candidates 4, 7 and 8 are dispositions rather than activities and should fold into the integrity / reliability / humility layer; candidates 1 and 2 may be one activity; candidate 3 is a practice observed within candidate 5.
- **Provisional selection: candidates 5, 10 and 11** — a bounded evaluation decision, a system handover, and a stakeholder risk communication.
- Full note: [epa-research-notes.md](research/08-assessment-epas/epa-research-notes.md)

## Cross-source observations
- **CMU's oral verification and ten Cate's entrustment-based discussion are the same mechanism reached from opposite directions** — one from a practical need to verify understanding under a permissive AI policy, one from a theory of what makes delegating responsibility defensible. Citing both makes the oral component convergent practice rather than local preference.
- **Govaerts is the counterweight to everything else here.** Every other source argues *for* judgement-based assessment; Govaerts documents what it actually does, including anchoring and construct divergence beneath outcome agreement. A design that cites only its enthusiasts is weaker than one that names its own failure modes.
- **Three sources independently converge on coarse output.** ten Cate makes the output an ordinal supervision level; Govaerts shows a third to a half of rating variance is the rater; the measurement literature shows single-digit clustered evidence cannot support fine discrimination. Reporting percentages would contradict all three.
- **The AI-tool question dissolves rather than resolves.** Once the grade is earned by explaining the work, provenance stops mattering, which is why CMU can permit copying on labs. This is a structural answer, not a policy answer, and it is the strongest available.
- **Two sources treat cost transparency as part of assessment design** — CMU publishes both the expected 12 hours per week and the expected $20-100 monthly AI subscription cost. Assessment honesty extends to what participation costs.
- **The dispositions layer has external warrant.** ten Cate's integrity, reliability and humility line up with ABET's proposed definition — "professional dispositions are behaviors desired in the workplace" — and with the CS2023 vision statement's argument that dispositions matter as much as knowledge. See [research/07-accreditation-exemplars/collected-materials.md](research/07-accreditation-exemplars/collected-materials.md).

## Corrections and open items
- **"5-level supervision scale" was too coarse in the earlier draft of the design rules.** The source provides expanded sub-levels, and one semester's progression is largely invisible without them. The register now specifies the expanded scale with a target of level 3b or 3c.
- **Twelve candidate activities is far too many for one course.** Source sizing guidance is 20-40 for an entire programme, with a reported per-learner completion average of 6.6 across 2.5 years. The reduction to two or three is proposed but not ratified.
- **The 29-50% variance figure is second-hand.** It is reported by the 2013 Govaerts paper from prior quantitative literature, not generated by it. Attribute accordingly.
- **The mapping from machine-evaluation statistics to human assessment is local reasoning, not a source claim.** No cited source asserts that benchmark item clustering and clustered student observations are the same phenomenon. Present it as an argument.
- **Several measurement sources are verified at abstract level only** — Shankar, Zheng, Angelopoulos, Thakur, Singh, and the 2013 Govaerts paper. Re-verify any figure before it reaches student-facing material. Huyen was not consulted at all.
- **The most-cited Govaerts works on programmatic assessment validity are paywalled and unread.** This folder rests on two open-access substitutions and is not a literature survey.
- **CMU policy text is offering-specific** and drifts between semesters. Cite the offering, not the course.
- **No published effectiveness data exists for any mechanism in this folder.** CMU's longevity since 2019 and the EPA framework's cross-professional adoption are evidence of workability, not of superiority over what they replaced.
- **Accommodation for oral assessment is undesigned** and is addressed by none of these sources. It is the largest outstanding equity gap in the design.
- **Assessor capacity is unquantified.** Until the number of independent assessor-occasion pairs per student is known, no decision in this design can honestly be called summative rather than ad-hoc.

## Material retained here
- The four-way division of function — object and form, failure modes and controls, operational machinery, precision ceiling — and the design that follows from it.
- Verified per-source specifics with quoted definitions, scale structures, evidence standards, token arithmetic and variance figures.
- The candidate activity set, its screening against the granularity test, and the provisional selection.
- Cross-source observations, particularly the convergence on coarse output and the structural dissolution of the AI-tool question.
- Corrections and open items, including everything deliberately not asserted and every gap the sources do not close.

## Public-source notes to keep
- Open-access assessment literature: ten Cate's primer via Europe PMC (PMCID PMC5840559); Oudkerk Pool and Govaerts 2018 (PMCID PMC5882626); Govaerts et al. 2013 (PMCID PMC3728456).
- CMU 17-645 course and offering pages, with all materials Creative Commons at github.com/mlip-cmu and the companion book open access from MIT Press; design rationale in arXiv:2001.06691.
- The evaluation sources carried through folder 03, with their individual verification levels recorded there.
- Rubric and oral-prompt material that can be reused: the seven-part EPA description template, the expanded supervision sub-levels, the Weller entrustability phrasing as a model for writing scale anchors in assessors' own idiom, and the entrustment-based discussion's what-if requirement.