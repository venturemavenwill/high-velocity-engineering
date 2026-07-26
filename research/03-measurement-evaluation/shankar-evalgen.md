# Cliff Notes — EvalGen

## Citation and access
- **Authors:** Shreya Shankar, J.D. Zamfirescu-Pereira, Björn Hartmann, Aditya G. Parameswaran, Ian Arawjo
- **Title:** Who Validates the Validators? Aligning LLM-Assisted Evaluation of LLM Outputs with Human Preferences
- **Venue and year:** arXiv preprint 2404.12272, submitted 18 April 2024 (v1); primary category cs.HC, cross-listed cs.AI; 16 pages, 4 figures, 2 tables; licensed CC BY 4.0
- **Source consulted:** https://arxiv.org/abs/2404.12272
- **Access status:** open access (arXiv listing and abstract fetched; full PDF is openly available under CC BY 4.0)

## What this source is
A human-computer interaction paper that treats LLM-based evaluation itself as an object requiring validation. The authors observe that as human evaluation becomes too expensive and code-based evaluation too brittle, teams increasingly use LLMs to grade LLM outputs — but "LLM-generated evaluators simply inherit all the problems of the LLMs they evaluate, requiring further human validation." The paper's response is a mixed-initiative interface, EvalGen, that helps a person co-author evaluation criteria and their implementations, plus a qualitative study of what happens when practitioners actually use it. Its most consequential contribution is not the tool but a named phenomenon: criteria drift.

## The argument in full
The paper begins from a practical bind. Evaluating LLM outputs at scale requires automation, and the two available forms of automation are inadequate in different ways. Code-based assertions are cheap and deterministic but can only check surface properties. Human evaluation captures what actually matters but does not scale. The industry's answer has been to use an LLM as the grader, either through a grading prompt or by having the LLM write evaluation code. The authors' central observation is that this move quietly relocates the trust problem rather than solving it: the evaluator is now itself an LLM artifact with all the same failure modes, and nobody has validated it. Hence the title's question — who validates the validators?

Their proposal is mixed-initiative rather than fully automated. EvalGen does two things. First, it assists in generating candidate evaluation criteria from the user's task description and prompt. Second, for each criterion, it generates candidate implementations — either Python functions or LLM grader prompts, depending on what the criterion needs. The system does not assume any of these candidates is correct. Instead, while candidates are being generated, EvalGen asks the human to grade a subset of LLM outputs directly. Those human grades are then used as the selection signal: implementations whose verdicts align better with the user's own grades are preferred. The alignment step is what converts an unvalidated generated evaluator into one with an evidentiary basis.

The empirical contribution is a qualitative study of practitioners using the interface. Support for the approach was broadly positive, but the study's more interesting result is what it revealed about the nature of evaluation criteria themselves. The authors name the central finding **criteria drift**: "users need criteria to grade outputs, but grading outputs helps users define criteria." This is a genuine circularity, not a workflow inefficiency. A person cannot fully specify what counts as a good output before seeing outputs, because seeing outputs is how they discover which dimensions of quality actually vary and matter for their task. Any system or process that assumes a fixed rubric authored up front is therefore modeling the wrong thing.

The second finding sharpens this into a claim with methodological teeth. Some criteria, the authors report, appear to be **dependent on the specific LLM outputs observed** rather than being independently definable in advance. This "raises serious questions for approaches that assume the independence of evaluation from observation of model outputs." That is a direct challenge to the standard assumption underpinning held-out test sets and pre-registered rubrics: that the measuring instrument can be specified without reference to the thing being measured. If a meaningful subset of quality criteria only becomes articulable after looking at the outputs, then evaluation design is inescapably iterative, and any claim of clean separation between rubric-authoring and grading is partly fictional.

The paper's contributions are therefore threefold: the EvalGen interface and its implementation details, a comparison of their alignment algorithm against a baseline approach, and a set of design implications for future LLM evaluation assistants. The design implications matter more than the specific tool. The recommendation is that evaluation tooling should be built to expect the rubric to change — supporting revision, re-grading, and version history — rather than treating rubric revision as an exceptional event.

## Structure of the original
- Introduction: the trust-relocation problem in LLM-assisted evaluation
- Related work: LLM-as-a-judge, human-in-the-loop evaluation, mixed-initiative interfaces
- The EvalGen interface: criteria generation, implementation generation (Python functions and LLM grader prompts), human grading of a subset of outputs
- Alignment algorithm: selecting implementations by agreement with user grades; comparison against a baseline
- Qualitative user study with practitioners
- Findings: criteria drift; output-dependent criteria
- Implications for the design of future LLM evaluation assistants
- Limitations and conclusion

## Key claims, findings, and specifics
- LLM-generated evaluators inherit the failure modes of the LLMs they evaluate, and therefore require human validation of their own.
- EvalGen generates two kinds of candidate implementations for each criterion: Python functions and LLM grader prompts.
- Human grades on a subset of outputs are used as the selection signal for choosing among candidate implementations — the alignment mechanism.
- **Criteria drift** is named and defined: users need criteria to grade outputs, but grading outputs helps users define criteria.
- Some evaluation criteria are dependent on the particular outputs observed, not independently specifiable a priori.
- This output-dependence "raises serious questions for approaches that assume the independence of evaluation from observation of model outputs."
- The qualitative study found overall support for EvalGen while underscoring the subjectivity and iterative nature of the alignment process.
- Three stated contributions: the interface and implementation, an algorithm comparison against a baseline, and design implications for future evaluation assistants.

## Method and evidence base
The paper combines a systems contribution with a qualitative study. The systems side is the EvalGen implementation and an algorithmic comparison: the authors evaluate their alignment approach against a baseline method for selecting evaluation implementations. The empirical side is a qualitative user study with practitioners who used the interface on their own or representative tasks, with findings derived from observation and interview rather than from a controlled quantitative comparison. The paper is 16 pages with 4 figures and 2 tables, consistent with an HCI venue's expectations rather than a large-scale benchmark study. This means the criteria-drift finding is established interpretively — it is a well-grounded qualitative claim about what practitioners do and report, not a measured effect size. That is appropriate for the claim being made, but it should be represented honestly: the paper demonstrates that criteria drift occurs and matters, not how often or how much.

## Vocabulary the source introduces
- **Criteria drift** — the circular dependency in which users need evaluation criteria in order to grade outputs, while the act of grading outputs is what allows them to define the criteria.
- **Validating the validators** — the practice of checking that an automatically generated evaluator actually agrees with human judgment before trusting its verdicts.
- **Mixed-initiative evaluation** — a workflow in which the system proposes criteria and implementations while the human supplies grades and corrections, with neither party fully in control.
- **Output-dependent criteria** — quality dimensions that only become articulable after observing model outputs, and therefore cannot be pre-registered.
- **Evaluation implementation** — the concrete realization of a criterion, either as a Python assertion function or as an LLM grader prompt.

## What to remember
- Using an LLM to grade an LLM does not solve the trust problem; it moves it. The grader needs its own validation against human judgment.
- Criteria drift is a structural feature of evaluation design, not a symptom of a disorganized team. Expect the rubric to change as you look at outputs.
- Alignment is the mechanism: choose among candidate evaluator implementations by which one best reproduces the human's own grades on a labeled subset.
- Some criteria genuinely cannot be specified before seeing outputs. This undercuts any workflow that assumes rubric-authoring and grading are cleanly separable phases.
- Evaluation tooling should be designed for revision — versioned rubrics, cheap re-grading — rather than treating rubric change as an exception.

## Why it matters for the course
This paper supplies the theoretical justification for teaching evaluation as an iterative craft rather than a rubric-writing exercise. A course that asks students to author a rubric in week two and then apply it unchanged for the rest of the term is teaching a workflow the literature says does not survive contact with real outputs. EvalGen also gives the course a precise vocabulary — criteria drift, output-dependence, validating the validators — that lets students name what is happening when their evaluation plan stops matching what they care about. For forward-deployed engineering specifically, criteria drift is the everyday condition: a client's stated acceptance criteria almost never survive the first review of real system outputs, and the engineer's job is to run that discovery loop deliberately rather than be surprised by it. Paired with Husain, which says build the review tool, this paper says expect the rubric that tool encodes to keep moving.

## How to teach it
- **Lecture point:** present criteria drift as a circularity diagram and ask students to identify the analogous circularity in requirements engineering. The parallel to iterative requirements elicitation is exact and makes the point land.
- **Lecture point:** the trust-relocation argument. Draw the chain from human evaluation to LLM judge and ask where the validation step was silently dropped.
- **Lab exercise:** students write an evaluation rubric for a task *before* seeing any model outputs, seal it, then hand-grade 30 outputs. Afterwards they rewrite the rubric and diff the two versions. The diff is the deliverable and the lesson.
- **Lab exercise:** implement the alignment mechanism in miniature — generate three candidate grader prompts for one criterion, hand-label 25 outputs, and select the grader with the highest agreement. Report which candidate won and why.
- **Assessment idea:** require a versioned rubric history in the project repository, with a short written rationale for each revision citing the specific outputs that triggered it. Grade on whether the rationale is evidence-driven rather than post-hoc.
- **Assessment idea:** ask students to classify their own criteria as independently specifiable versus output-dependent, and defend the classification. This forces engagement with the paper's sharpest claim.

## Limits and cautions
- The evidence for criteria drift is qualitative. The paper establishes that the phenomenon is real and consequential; it does not quantify its prevalence or magnitude.
- The user study is small by construction, as HCI studies of novel interfaces usually are. Do not present its findings as generalizable measurements.
- EvalGen addresses criteria alignment, not statistical validity. It does not tell you whether your sample is large enough or your confidence interval defensible — pair it with Miller and Angelopoulos.
- Accepting output-dependence has a cost the paper does not fully resolve: if criteria are revised after seeing outputs, the same outputs cannot cleanly serve as a held-out evaluation set. The course should teach an explicit discipline for freezing a rubric and holding out fresh data before any high-stakes claim.
- The tool is a research prototype from April 2024. Teach the alignment pattern and the drift concept, not the specific interface.

## Verification status
- **Verified against the original:** full author list; exact title; arXiv identifier, submission date, version status, subject categories, page and figure and table counts, and CC BY 4.0 license; the trust-relocation framing and its quoted phrasing; the mixed-initiative design; the two implementation types (Python functions and LLM grader prompts); the human-grading-as-selection-signal mechanism; the definition and exact phrasing of criteria drift; the output-dependence finding and its quoted implication for independence assumptions; the qualitative nature of the study; the three stated contributions including the baseline comparison.
- **Provisional or not verified:** the section outline above is reconstructed from the abstract and stated contributions and reflects the paper's logical structure rather than its verbatim section headings. Study participant count, task domains, and the identity of the baseline algorithm were not confirmed and are deliberately omitted rather than guessed. No effect sizes or agreement statistics are reported here because none were verified.

