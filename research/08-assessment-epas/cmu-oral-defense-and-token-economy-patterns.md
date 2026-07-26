# Cliff Notes — CMU Oral Defence and Token Economy Patterns

## Citation and access
- **Authors:** Christian Kaestner (course owner and maintainer); Bogdan Vasilescu and Christian Kaestner (Fall 2026 instructors)
- **Title:** Machine Learning in Production / AI Engineering — course policies, grading and assessment mechanics (17-645 / 17-445 / 17-745)
- **Venue and year:** Carnegie Mellon University, School of Computer Science; offered regularly since 2019; policy text read from the Fall 2026 offering
- **Source consulted:** `https://mlip-cmu.github.io/f2026/` and `https://mlip-cmu.github.io/`; all course materials mirrored at `https://github.com/mlip-cmu`
- **Access status:** open; materials released under Creative Commons. The companion book is open access from MIT Press at `https://mlip-cmu.github.io/book/`.
- **Design rationale paper:** Kaestner and Kang, "Teaching Software Engineering for AI-Enabled Systems", arXiv:2001.06691

## What this source is
This note extracts the assessment machinery from a running CMU course and treats it as a design specification rather than as a syllabus. The course is the fullest publicly documented example of a project-based computing course that has removed the final exam, made oral verification structural, permitted AI tools almost without restriction, and built an explicit economy of late and resubmission credits to make iteration tractable at scale. Every mechanism below is quoted from the published policy text, because the value here is in the specifics — the numbers, the thresholds and the exact wording — not in the general idea.

## The argument in full
The course begins from a claim about what most courses fail to assess. Its own positioning states: "Plenty of courses teach you to beat a benchmark in a notebook, and plenty more teach you to pitch a demo, hackathon style. But a demo has no real customer, no real deployment, and no real stakes: Nobody depends on it, nothing breaks when it fails, nobody needs to maintain it. This CMU course is about the hard part that comes next." The assessment design follows from that claim. If the object of assessment is a system under real conditions rather than an artefact under inspection, then the evidence has to come from the system's behaviour and from the student's ability to account for it — not from an examination. The course accordingly has **no final exam**, and its grading is 35% individual assignments, 30% group project, 25% midterms and participation, 10% labs.

The project supplies the real-stakes condition. Teams build a movie recommendation service **serving one million active users**, running live for several weeks, and it is "graded on how it holds up under real load and changing environment conditions." Teams are **3-6 students, assigned by the instructor** rather than self-selected, each with a TA mentor and a **30-minute meeting with that mentor in the week after every milestone**. Four milestones run through the semester — modelling and first deployment, infrastructure quality, monitoring and continuous delivery, then fairness, security and feedback loops — followed by a final presentation in the registrar's exam slot. Individual assignments run alongside and cover ML product and LLM features, requirements and risk, MCP and agent security, and explainability. The research variant, 17-745, replaces two homeworks with a mandatory research project.

**Specification grading** is the mechanism that makes this volume of work gradeable. The policy is blunt: "All parts will be graded pass/fail for the points indicated, no partial credit." The justification offered to students is about agency rather than about efficiency — clear specifications "allow you to intentionally decide to skip parts of assignments with clear upfront consequences." A student can read the specification, decide a component is not worth the marginal points, and skip it knowingly. Grade boundaries are published and applied without rounding: A+ at 99%, A at 96%, A- at 94%, B+ at 91%, B at 86%, B- at 82%, C at 75%, D at 60%. The precision is deliberate; with pass/fail components and no partial credit, the boundary has to be unambiguous.

**Oral verification** is the load-bearing assessment mechanism and it appears in two distinct forms. For assignments: "Some parts of the grading rubric will require you to verbally explain your solution to a member of the course staff or verbally answer their questions -- usually in person during any office hours within one or two weeks of submitting the assignment." Note the logistics — it happens at ordinary office hours, within a bounded window, and it is a rubric item rather than a separate event. For labs the mechanism is different and more thorough: "You receive a grade by showing your work to the TA during that week's lab session… showing source code, demoing executions, and verbally answering a few questions to demonstrate your understanding. The TA may ask a few questions to probe your understanding." Labs run one to two hours and are explicitly low stakes; students may keep working during the session. Most striking is the collaboration rule attached to them: collaboration is permitted **including outright copying**, because "you will have to present and explain your solution to the TA on your own." Once the assessment is oral, the artefact stops being the evidence, and policing its provenance stops being necessary.

That inversion is what makes the **AI-tool policy** possible. The course states: "we are open to using AI tools for completing work. We actually strongly recommend it for many tasks." There are no restrictions on ChatGPT, Claude, Claude Code, Copilot or Cursor, and StackOverflow reuse requires no acknowledgment. Two things carry the weight instead. The first is a responsibility clause: "you will be solely responsible for the correctness of the solution." The second is a warning that connects tool use to the oral mechanism: "Using code generation tools without understanding the generated code will likely create challenges when answering TA questions." There are exactly **two prohibitions**: exams and designated offline paper quizzes, and "live conversations with course staff, whether over Zoom or in person" — where "using any form of AI to generate answers in these settings is considered cheating." Using other students' work remains prohibited. The course also tells students to budget **$20-100 per month** for AI subscriptions, "roughly comparable to the cost of traditional textbooks", which is an honest treatment of a cost most courses leave implicit.

The **token economy** is the scheduling machinery that makes iteration possible without unbounded negotiation. Students receive **8 individual tokens** and teams receive **8 team tokens**, and the two pools are strictly separate — individual tokens cannot rescue a team milestone or vice versa. Individual tokens buy four things. One token extends an individual deadline by one day, against a default penalty of 15% per started day late. **Three tokens buy a resubmission, with 90% of the improvement credited** — the published worked example is a submission scoring 80 that would score 100 on resubmission, yielding 80 + (100 − 80) × 0.9 = 98. One token allows a missed lab to be completed or redone late via office hours. One token waives the penalty for missing a team-formation or peer-assessment survey. Unspent tokens convert into participation credit. Team tokens work the same way at milestone granularity: one per day of extension on any milestone except the final presentation, three to resubmit a milestone, with the same 10% tax on improvement.

What distinguishes this from an ordinary late policy is that the course names its own loophole rather than closing it. The policy states outright that a student "can blow the original deadline (no submission necessary, receiving 0 points initially) and then resubmit the homework arbitrarily late for three tokens and a 10% penalty." Resubmissions are accepted until the final presentation and are filed in Canvas as a new attempt. Naming the loophole converts a gameable rule into a declared option: the course has decided that a student who takes this path and produces good work late has demonstrated what the course wanted to measure, and it says so instead of pretending otherwise.

**Participation** is opt-in, which is an unusual and useful design. A student who opts in has midterms weighted 15% and participation 10%; a student who opts out has midterms weighted 25% and participation ungraded. The bands are published: full credit for attending most lectures, with four waived "no questions asked"; 80% for two thirds; 60% for over half; 30% for one quarter; zero below that. The course justifies the emphasis by design — there is "at least one breakout session in every single lecture" — and treats inauthentic participation as an integrity violation. **Peer rating** covers "team citizenship (i.e., being active and cooperative members)", following a procedure adapted from a Barbara Oakley article, and students can preview the form to see the grade adjustments it produces before submitting it.

Two further details indicate the level of care in the design. Prerequisites are informal — basic ML exposure and basic programming, with no software engineering background required — but the course provides an **anonymous, ungraded ten-question prerequisite knowledge check** via Google Form that returns targeted readings. And it publishes an expected workload of **12 hours per week**: roughly three in class, one to two in labs, and about seven on assignments. Auditing is not allowed, though visitors may sit in.

## Structure of the original
- Course positioning and target roles
- Prerequisites and the self-check knowledge quiz
- Schedule: twelve units across lectures, labs, individual assignments and project milestones
- Grading: weights, specification grading, grade boundaries
- Assignments and labs: submission, oral verification, collaboration rules
- Project: team formation, mentoring, milestones, peer rating
- Tokens: individual and team pools, uses, penalties, resubmission arithmetic
- Participation: opt-in structure and credit bands
- Academic integrity and the AI-tools policy
- Time management, auditing and research-in-course notice

## Key concepts and specifics
- **Grading weights:** 35% individual assignments, 30% group project, 25% midterms and participation, 10% labs. **No final exam.** Two midterms, the second non-comprehensive.
- **Grade boundaries, no rounding:** A+ ≥99%, A ≥96%, A- ≥94%, B+ ≥91%, B ≥86%, B- ≥82%, C ≥75%, D ≥60%.
- **Specification grading:** pass/fail per component, no partial credit, specifications published in advance.
- **Oral verification, assignments:** a rubric item, discharged at office hours within one or two weeks of submission.
- **Oral verification, labs:** grade earned in-session by showing source, demoing execution and answering probing questions; collaboration including copying permitted because the explanation must be one's own.
- **Tokens:** 8 individual + 8 team, strictly separate. 1 = one day's extension (default penalty 15% per started day). 3 = resubmission crediting 90% of improvement. 1 = late lab completion. 1 = survey-penalty waiver. Leftovers convert to participation credit.
- **Resubmission arithmetic, published worked example:** 80 → 100 becomes 80 + (100 − 80) × 0.9 = 98.
- **Declared loophole:** skip the deadline entirely for zero, then resubmit arbitrarily late for three tokens and a 10% penalty, up to the final presentation.
- **Participation:** opt-in; opting in shifts 10 percentage points from midterms to participation. Bands at most / two thirds / over half / one quarter of lectures give 100 / 80 / 60 / 30 percent, with four absences waived without question.
- **Project:** one million active users, live for several weeks, teams of 3-6 assigned by the instructor, TA mentor, 30-minute post-milestone meeting, four milestones plus final presentation.
- **Peer rating** on team citizenship, adapted from Barbara Oakley, with a preview of resulting grade adjustments.
- **AI policy:** recommended and unrestricted for coursework; prohibited only in exams/paper quizzes and in live conversations with staff; sole responsibility for correctness; $20-100 per month expected cost.
- **Workload:** 12 hours per week stated explicitly. Prerequisite self-check is anonymous, ungraded, ten questions.

## Method and evidence base
This is course policy documentation from an offering that has run since 2019, not a study of assessment. Its evidential weight comes from longevity and from the fact that the mechanisms have survived repeated iteration under a named maintainer who has published his design rationale separately in arXiv:2001.06691. No effectiveness data is published — there are no grade distributions, no comparison against a prior exam-based version, and no measurement of whether oral verification detects understanding that written work misses. The design should be treated as well-tested practice, which is a real form of evidence, but not as evaluated intervention.

## Vocabulary the source introduces
- **Specification grading** — pass/fail assessment of published components with no partial credit, enabling deliberate scoping decisions by students.
- **Token** — a fungible unit of scheduling flexibility, spendable on extension, resubmission or penalty waiver, drawn from a fixed per-student or per-team budget.
- **Individual versus team token pools** — strictly separated budgets that prevent one person's flexibility from being consumed by team needs and vice versa.
- **Oral verification** — a rubric item discharged by explaining one's submitted work to staff, distinct from a set-piece defence.
- **Team citizenship** — the peer-rated construct covering active and cooperative membership.
- **Opt-in participation** — letting students choose whether participation is graded, with the weight shifting to midterms if they decline.

## What to remember
- Once assessment is oral, artefact provenance stops mattering. CMU permits copying in labs for exactly this reason, and it is the cleanest available answer to AI-assisted submission.
- Oral verification does not need to be a set-piece event. Making it a rubric item discharged at ordinary office hours within a bounded window is what makes it scale.
- Specification grading is justified to students as agency, not as instructor convenience — knowing the exact consequence of skipping a component is what makes skipping it a legitimate choice.
- A token economy converts every deadline negotiation into a transaction with a published price, which is what actually saves instructor time.
- Naming the loophole is better than closing it. The declared skip-and-resubmit path is coherent with what the course claims to measure.
- Separate individual and team token pools, or team pressure will consume individual flexibility.
- Crediting 90% of improvement on resubmission preserves an incentive to submit well the first time while still rewarding revision.
- Opt-in participation respects students for whom attendance is genuinely difficult without abandoning the pedagogical case for it.
- Stating the expected weekly hours and the expected AI subscription cost are cheap honesty measures that most courses omit.

## Why it matters for the course
This is the implementation pattern that makes the rest of the assessment design in this repository viable. The EPA literature supplies the theory of entrustment and the multi-observer evidence standard; the narrative-assessment literature supplies the warning about rater subjectivity and the case for substantiation; CMU supplies the operational answer to how any of it is done inside a semester with a fixed staff. In particular it resolves the AI-tool problem structurally rather than through policy enforcement: if the grade is earned by explaining the work, the course does not need to detect how the work was produced. Read alongside CS336, the pair demonstrates that both a permissive and a restrictive AI policy can be principled, and that the deciding factor is whether the assessment collects its evidence orally or from the artefact.

## How to teach it
- **Assessment:** make oral verification a rubric line on every substantial assignment, discharged at office hours within a stated window, not a separate examination event.
- **Assessment:** grade labs in-session by demonstration and questioning, and permit unrestricted collaboration on them, stating explicitly that the explanation must be the student's own.
- **Assessment:** adopt specification grading with published pass/fail components and no partial credit, and explain to students that this exists so they can scope deliberately.
- **Logistics:** publish grade boundaries to the percentage point and state that no rounding occurs.
- **Logistics:** run a token economy with separate individual and team pools, publish the price of every transaction including the resubmission arithmetic with a worked example, and name any loophole the design creates.
- **Logistics:** make participation opt-in with the weight shifting to another instrument, and publish the credit bands.
- **Project:** assign teams rather than letting them self-select, attach a mentor, and hold a short structured meeting after every milestone.
- **Project:** peer-rate team citizenship with a form students can preview before submitting.
- **Policy:** permit AI tools broadly, prohibit them only in live conversation and closed assessment, and state that responsibility for correctness is undiluted.
- **Honesty:** publish expected weekly hours and expected tool subscription costs.
- **Onboarding:** offer an anonymous, ungraded prerequisite self-check that returns targeted readings rather than a gate.

## Limits and cautions
- The staffing profile is a research university's. Oral verification at office hours, in-session lab grading, TA mentors per team and post-milestone meetings all assume TA capacity that many programmes do not have. The mechanisms must be scaled down honestly rather than adopted whole.
- No effectiveness evidence is published. Longevity is not measurement.
- The token economy adds real bookkeeping. Someone must track sixteen token balances per team-and-student and apply the resubmission arithmetic correctly.
- Late resubmission until the final presentation creates a marking bulge at the end of term that has to be absorbed.
- Oral verification is vulnerable to assessor inconsistency in exactly the way the narrative-assessment literature documents, and CMU's published policy does not describe calibration among TAs.
- Oral assessment raises equity questions for non-native speakers and students with anxiety or speech-related disabilities that the published policy does not address; any adoption needs an accommodation path designed alongside it.
- The one-million-user project depends on infrastructure and a data source that is specific to this course, and the "real stakes" framing weakens considerably without a comparable substrate.
- Policy text is offering-specific and drifts between semesters; cite the offering, not the course.

## Verification status
Verified directly against the published Fall 2026 course pages: the course positioning quotation about demos and real stakes; the grading weights and the absence of a final exam; the two-midterm structure with a non-comprehensive second midterm; all eight grade boundaries and the no-rounding rule; the specification-grading policy including the no-partial-credit and deliberate-skipping language; both forms of oral verification with their full quoted text, the one-to-two-week office-hours window, and the lab collaboration rule permitting copying; the full token economy including both pool sizes, their strict separation, all four individual token uses, the 15% per-started-day default penalty, the three-token resubmission with 90% improvement credit and its published worked example, the team-token equivalents and the 10% milestone tax, the leftover-tokens-to-participation rule, and the explicitly named skip-and-resubmit loophole with resubmission open until the final presentation via Canvas new attempts; the opt-in participation structure with both weighting configurations, all credit bands, the four-waived-absences rule, the breakout-session justification and the inauthentic-participation integrity clause; the peer-rating construct, its Barbara Oakley provenance and the previewable form; the project specification including one million active users, several weeks live, 3-6 instructor-assigned teams, TA mentors and 30-minute post-milestone meetings; the four milestones and four individual assignments and the 17-745 research-project substitution; the complete AI-tools policy including the recommendation, the named permitted tools, the sole-responsibility clause, the TA-questions warning, both prohibitions with the cheating characterisation, and the $20-100 monthly cost estimate with its textbook comparison; the 12-hours-per-week workload breakdown; the no-auditing rule; and the anonymous ten-question prerequisite self-check. Not verified: any outcome or effectiveness data, TA calibration practice, accommodation policy for oral assessment, or grade distributions — none is published.
