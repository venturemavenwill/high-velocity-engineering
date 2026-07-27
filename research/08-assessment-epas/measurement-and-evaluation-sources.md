# Cliff Notes — Measurement and Evaluation Sources Applied to Assessment

> Synthesis note, not a single-source note. It reads the measurement and evaluation literature gathered in [research/03-measurement-evaluation/collected-materials.md](/research/03-measurement-evaluation/collected-materials.md) as a set of constraints on the course's own assessment design. Every claim below traces to a note in that folder; nothing new is asserted here.

## Citation and access
This note draws on eight sources, all read and verified in folder 03. Access status is carried forward.
- **Miller, "Adding Error Bars to Evals: A Statistical Approach to Language Model Evaluations"** — full text read; the statistical backbone of this note.
- **Olle ten Cate, "A primer on entrustable professional activities"**, *Korean Journal of Medical Education* 2018; 30(1):1-10 — open access, full text read.
- **Oudkerk Pool, Govaerts, Jaarsma and Driessen, "From aggregation to interpretation"**, *Advances in Health Sciences Education* 2018; 23(2):275-287 — open access, full text read.
- **Govaerts, Van de Wiel, Schuwirth, Van der Vleuten and Muijtjens, "Workplace-based assessment: raters' performance theories and constructs"**, *Advances in Health Sciences Education* 2013; 18(3):375-396 — open access.
- **Husain, "Your AI Product Needs Evals"** — full article read on the open web.
- **Shankar et al., EvalGen** — abstract and listing metadata verified.
- **Zheng et al., "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena"** — abstract and listing metadata verified.
- **Angelopoulos et al., "Prediction-Powered Inference"** — abstract and listing metadata verified.
- **Singh et al., "The Leaderboard Illusion"** — abstract and listing metadata verified.
- **Not consulted:** Huyen, *AI Engineering*. Nothing in this note rests on it.

## What this source is
A bridge between two literatures that are usually kept apart. Folder 03 collects work on how to evaluate machine learning systems; folder 08 collects work on how to assess human professional competence. This note argues that they are the same problem under two names, and that the machine-evaluation literature contains statistical discipline the education literature usually lacks, while the education literature contains an honesty about rater subjectivity that the machine-evaluation literature is only now discovering. Each corrects the other.

## The argument in full
The starting observation is structural. An entrustment decision is an inference from a small number of noisy observations to a claim about future behaviour under conditions not yet observed. That is precisely the shape of a model evaluation: a finite sample of prompts, a noisy judge, and a claim about deployment. The disciplines that keep the first kind of inference honest should therefore apply to the second, and where the course teaches evaluation as content it should apply the same discipline to itself. A course that teaches students to demand error bars on a benchmark while grading them from a single unrepeated observation is teaching one thing and modelling another.

Miller's work supplies the statistical spine. His five recommendations — compute standard errors from the central limit theorem; cluster standard errors when questions are not independent; reduce variance by resampling or by using next-token probabilities; compare paired systems at the question level rather than by comparing aggregate scores; and run a power analysis before choosing a sample size — translate to assessment almost without modification. The clustering point is the one most often missed in both settings. Miller reports real clustering ratios, DROP at 3.05 and MGSM at 1.88, meaning the effective sample is a fraction of the nominal one when items share structure. The assessment analogue is immediate: three observations of the same student on the same activity with the same assessor in the same week are not three independent observations, and treating them as such overstates confidence in exactly the way Miller documents. His power calculation, around 969 questions behind the guidance that new evaluations should have at least a thousand, is a useful humility check. If a thousand items are needed to distinguish two models reliably, no course should claim precision from four milestones. The correct response is not to collect a thousand observations but to stop making fine-grained claims — which is the argument for an ordinal supervision scale with a handful of levels rather than a percentage.

Husain supplies the workflow shape, and it maps directly onto the assessment calendar. His three levels — unit-test-style assertions, human and model review of traces, then A/B testing — increase in cost and decrease in iteration speed, and the discipline is to use the cheapest level that can answer the question. The assessment analogue is a graduated evidence ladder: automated or specification-based pass/fail checks first, assessor review of the student's actual work traces second, and full oral entrustment discussion last, reserved for decisions that warrant it. His diagnosis of the plateau is also worth carrying across. The symptoms he names — whack-a-mole prompt fixes, no visibility beyond vibe checks, and prompt sprawl — have exact counterparts in a course: rubric patches applied after each complaint, no visibility into what assessors actually did beyond a felt sense that grading went fine, and rubric proliferation until nobody can state what the course assesses. His central claim, that evaluation is a workflow rather than a benchmark, is the same claim ten Cate makes about entrustment being a process of accumulated observation rather than an event.

Shankar's criteria-drift finding is the sharpest warning for rubric design. Users need criteria in order to grade outputs, but grading outputs is how criteria come to be defined; some criteria are output-dependent and cannot be specified in advance. Every instructor who has written a rubric before seeing the submissions and then discovered it does not fit has encountered this. The finding does not license writing rubrics after the fact — it licenses treating early rubric revision as expected and building a documented revision point into the term rather than pretending the specification was complete on day one. Shankar's second finding is the reason judge validation matters: LLM-generated evaluators inherit the problems of the LLMs they evaluate, so validators must themselves be validated against human grades. Substitute "teaching assistant" for "LLM-generated evaluator" and the requirement is the same, and it is the requirement Govaerts operationalises as calibration on shared examples.

Zheng's LLM-as-judge work supplies the bias taxonomy, and its four named biases have direct human analogues that assessors should be briefed on. Position bias, where order of presentation affects judgement, corresponds to assessors marking a batch in sequence. Verbosity bias, where longer answers score higher, corresponds to rewarding volume over quality and is a well-known failure in project marking. Self-enhancement bias, where a judge prefers outputs resembling its own, corresponds to an assessor rewarding their own preferred approach — which is precisely the implicit performance theory Govaerts documents. Limited reasoning ability, where a judge cannot evaluate work beyond its own competence, corresponds to a TA assessing work in an area they do not know well. Zheng's headline result is the useful calibration point: LLM judges reach over 80% agreement with humans, which is the same level humans reach with each other. Human agreement is the ceiling, not the standard, and any assessment scheme claiming better than roughly four-in-five agreement between independent assessors on a complex judgement should be treated with suspicion.

Angelopoulos supplies the resource-allocation principle. Prediction-powered inference produces provably valid confidence intervals from a small labelled set combined with a large machine-predicted set, with no assumptions on the predicting model, and better predictions yield tighter intervals. The assessment analogue is the design that CMU arrives at empirically: a large volume of cheap, automatable specification checks, plus a small number of expensive, high-quality assessor judgements, with the expensive judgements anchoring the cheap ones. The principle is that the cheap signal is not a substitute for the expensive one, it is a variance-reduction device that only works because the expensive one exists. A course that automates all its checking has not made assessment cheaper; it has removed the anchor.

Thakur's BEIR work supplies the generalisation warning: it is a benchmark built specifically to measure out-of-distribution performance across eighteen datasets and ten systems, on the premise that in-distribution performance is not informative about deployment. The assessment analogue is that performance on the assignments a student has practised says little about performance on work they have not seen, which is exactly ten Cate's justification for requiring what-if questions in the entrustment-based discussion. BEIR's other finding, that BM25 remains a robust baseline against much more sophisticated methods, is a useful methodological reminder in its own right: check that the elaborate instrument beats the simple one before adopting it.

Singh's audit of Chatbot Arena is the governance warning, and it is the one that applies most uncomfortably to a course. It is not a contamination paper; it documents structural asymmetries in who gets to test privately and how evaluation data is allocated — twenty-seven private Meta variants before Llama-4, Google and OpenAI receiving an estimated 19.2% and 20.4% of arena data against 29.7% shared among eighty-three open-weight models, and additional data worth up to a 112% relative gain. The lesson is that a measurement system's fairness depends on access to the measurement process, not only on the metric. In a course, the students who attend office hours, who know how to ask for the oral verification early, and who understand the token economy get more of the assessment resource than those who do not. That asymmetry is invisible in the grade distribution and has to be managed deliberately.

Finally, the two education sources close the loop by supplying what the machine-evaluation literature cannot. Ten Cate establishes that the output of the assessment is a supervision level rather than a score, and that summative entrustment requires multiple observers, multiple observations and multiple evidence types. Govaerts establishes the base rate this all operates against: rater idiosyncrasy accounts for 29% to over 50% of rating variance and is unrelated to rater expertise, assessors rely on narrative and use grades only to confirm impressions already formed from prose, and assessors reaching the same pass-fail outcome frequently reason from incompatible premises. Read together with Miller, the conclusion is unavoidable and worth stating plainly in the course documentation: the measurement is coarse, the noise is large and partly irreducible, and therefore the reported output should be coarse too. An ordinal supervision level with a written substantiation is an honest instrument. A percentage to two decimal places is not.

## Structure of the argument
- The structural identity between entrustment inference and model evaluation
- Statistical discipline imported from Miller: standard errors, clustering, pairing, power
- Workflow shape imported from Husain: the graduated evidence ladder and the plateau symptoms
- Criteria and validator design from Shankar: criteria drift and validating the validators
- Judge bias taxonomy from Zheng, with human analogues, and the 80% agreement ceiling
- Resource allocation from Angelopoulos: cheap signal anchored by expensive judgement
- Generalisation warning from Thakur, and the simple-baseline check
- Governance warning from Singh: access asymmetry inside the measurement process
- The education sources' correction: coarse output, multiple observers, narrative as primary evidence

## Key claims and specifics
- **Clustering ratios** DROP 3.05 and MGSM 1.88 — nominal sample size overstates effective sample size when items share structure. Repeated observations of one student on one activity by one assessor are clustered.
- **≈969 questions** underlies the guidance that new evaluations should have at least 1,000 items. A course has single-digit observations and should scale its claims accordingly.
- **Husain's three levels** — assertions, trace review, A/B testing — increase in cost and decrease in iteration speed.
- **Husain's plateau symptoms** — whack-a-mole fixes, no visibility beyond vibe checks, prompt sprawl — have direct rubric analogues.
- **Criteria drift** — criteria are needed to grade outputs, but grading outputs is how criteria get defined; some are output-dependent.
- **Validators must themselves be validated** against human grades.
- **Four judge biases** — position, verbosity, self-enhancement, limited reasoning — each with human assessor analogues.
- **Over 80% LLM-human agreement, the same level humans reach with each other.** Human agreement is a ceiling, not a target to exceed.
- **Prediction-powered inference** yields valid intervals from a small labelled set plus a large predicted set, with no assumptions on the predictor; better predictions tighten intervals.
- **BEIR:** eighteen datasets, ten systems, zero-shot by design; BM25 remains a robust baseline.
- **Leaderboard Illusion:** 27 private Meta variants pre-Llama-4; estimated 19.2% and 20.4% of arena data to Google and OpenAI against 29.7% shared by 83 open-weight models; extra data worth up to 112% relative gain.
- **Rater idiosyncrasy 29% to over 50% of variance**, unrelated to expertise.
- **Summative entrustment requires multiple observers, multiple observations, multiple evidence types**; output is a supervision level, not a grade.

## Method and evidence base
This is a synthesis, and it generates no evidence of its own. Its constituent claims carry the verification status recorded in folder 03: full text read for Miller, ten Cate and the 2018 Oudkerk Pool study, plus Husain's article; abstract and listing metadata only for Shankar, Zheng, Angelopoulos, Thakur, Singh and the 2013 Govaerts study. Huyen was not consulted and nothing here depends on it. The mappings between machine evaluation and human assessment are arguments made in this note, not findings in the sources — no source cited here claims that clustering in benchmark items and clustering in student observations are the same phenomenon, and that analogy should be presented as reasoning, not as evidence.

## Vocabulary carried across
- **Clustered observations** — nominally independent data points that share structure and therefore carry less information than their count suggests.
- **Power analysis** — determining in advance how much evidence is needed to support the distinction being claimed.
- **Evidence ladder** — a graduated sequence of checks ordered by cost and iteration speed.
- **Criteria drift** — the dependence of assessment criteria on the outputs being assessed.
- **Validating the validator** — checking the assessor or judge against a trusted reference before trusting its output.
- **Judge bias taxonomy** — position, verbosity, self-enhancement, limited reasoning.
- **Access asymmetry** — inequality in who can use the measurement process, distinct from inequality in the metric.

## What to remember
- Entrustment inference and model evaluation are the same inferential shape, and the same statistical discipline applies to both.
- Observations of one student on one activity by one assessor are clustered. Confidence should be discounted accordingly.
- If a thousand items are needed to separate two models, four milestones cannot separate two grade bands. Report coarse levels, not fine scores.
- Use the cheapest instrument that answers the question, and reserve oral entrustment discussion for decisions that warrant it.
- Expect rubrics to need revision once real work arrives, and schedule the revision instead of denying the need.
- Validate assessors against shared examples before trusting their judgements, exactly as one would validate an LLM judge.
- The four judge biases apply to human assessors; brief them explicitly.
- Roughly 80% agreement is the human ceiling on complex judgements. Claims above it are suspect.
- Cheap automated checks are variance reduction, not substitution. They only work when anchored by expensive judgement.
- Practised-task performance does not predict unpractised-task performance, which is why what-if questioning is load-bearing.
- Fairness of a measurement system depends on access to the process, not only on the metric.

## Why it matters for the course
This note is what prevents the course's assessment design from being merely well-intentioned. The EPA framework tells the course what to assess, CMU tells it how to run the mechanics, and Govaerts tells it what assessors will get wrong — but only the measurement literature tells it how much confidence its evidence can actually support, and the answer is: less than a conventional grading scheme implies. That conclusion is what justifies the ordinal supervision scale, the multi-observer requirement, the graduated evidence ladder, and the refusal to report fine-grained scores. It also gives the course a rare pedagogical property: the assessment system is an instance of the subject matter. Students learning to evaluate AI systems are being evaluated by a system built on the same principles, and that parallel can be made explicit and taught.

## How to teach it
- **Design:** report an ordinal supervision level with written substantiation rather than a percentage. Justify the coarseness explicitly by reference to the evidence available.
- **Design:** build a graduated evidence ladder — specification checks, then assessor review of work traces, then oral entrustment discussion — and use the cheapest rung that answers the question.
- **Design:** treat observations as clustered. Count independent assessor-occasion pairs, not raw observation counts, when deciding whether a summative decision is supported.
- **Calibration:** validate assessors against a shared worked example each term before they assess, and brief them on the four judge biases with their human analogues.
- **Rubrics:** schedule one documented rubric revision point after the first real submissions, framed as expected criteria drift rather than as a correction.
- **Equity:** audit access to the assessment process itself — who books oral verification, who uses tokens, who attends office hours — and treat asymmetry as a design defect rather than as student behaviour.
- **Teaching:** use the course's own assessment design as a worked example when teaching evaluation. The clustering, power and judge-bias content lands harder when the students are the sample.
- **Honesty:** publish the reliability position, including the 29-50% rater-variance figure and the ~80% agreement ceiling, in the course documentation.

## Limits and cautions
- The central move in this note — mapping machine-evaluation statistics onto human assessment — is an argument constructed here, not a claim made by any cited source. It should be presented as reasoning.
- Several constituent sources are verified at abstract level only. Specific figures quoted from them should be re-verified before appearing in student-facing material.
- Miller's recommendations assume samples large enough for asymptotic reasoning. A course has single-digit observations, and the honest use of his work is as an argument for coarser claims, not as a procedure to run.
- The judge-bias analogy between LLM and human assessors is intuitive but untested; Zheng's biases were measured on models.
- Statistical framing can become a rhetorical shield. The point of importing this discipline is to reduce claims, not to dress existing claims in more confident language.
- Huyen was not consulted, so the practitioner synthesis of AI engineering practice is absent from this note.

## Verification status
The verification state of every constituent source is carried forward unchanged from [research/03-measurement-evaluation/collected-materials.md](/research/03-measurement-evaluation/collected-materials.md): full text read for Miller, ten Cate's 2018 primer, and Oudkerk Pool and Govaerts 2018; full article read on the open web for Husain; abstract and listing metadata verified for Shankar, Zheng, Angelopoulos, Thakur, Singh and Govaerts et al. 2013; and Huyen not consulted. Every figure quoted above — the DROP and MGSM clustering ratios, the ~969-question power calculation, Husain's three levels and plateau symptoms, Shankar's criteria drift and validator-validation findings, Zheng's four biases and the 80% agreement figure, the prediction-powered inference guarantee, BEIR's eighteen datasets and ten systems and the BM25 baseline result, the Leaderboard Illusion's private-variant count and data-share percentages and the 112% relative gain, the 29-50% rater-variance range, and ten Cate's multiple-observer summative standard — appears in the corresponding folder-03 note at that note's stated verification level. Not verified, and explicitly flagged as this note's own reasoning rather than source content: the mapping of benchmark item clustering onto clustered student observations; the mapping of Zheng's judge biases onto human assessors; the mapping of prediction-powered inference onto cheap-check-plus-expensive-judgement assessment design; and the reading of the Leaderboard Illusion's access asymmetries as an equity constraint on course assessment.
