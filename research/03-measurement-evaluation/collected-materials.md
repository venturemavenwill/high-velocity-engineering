# Collected Materials — Measurement and Evaluation

## Working synthesis
Evaluation should be the spine of the course, not a side topic. Every feature should ship with an evaluation artifact first.

## Source-by-source Cliff Notes

### Husain, Your AI Product Needs Evals
- Three levels: unit tests as assertions, human and model review of traces, then A/B testing — increasing in cost and decreasing in iteration speed.
- Evaluation is a workflow, not a benchmark; the plateau symptoms are whack-a-mole prompt fixes, no visibility beyond vibe checks, and prompt sprawl.

### Huyen, AI Engineering
- Organising practitioner text on building applications from foundation models. Evaluation gets two of the ten chapters: methods and their limitations, then criteria, model selection, public benchmarks and pipeline construction.
- Verified specifics: evaluation-driven development, meaning criteria defined before the application is built; the exact-versus-subjective split of evaluation methods; an AI judge is a system of model plus prompt, so scores do not transfer between judges; public benchmarks filter out bad models but do not identify the best model for an application; and the requirement that the evaluation pipeline be more stable than the application it evaluates.
- **The previous entry here was written from an explicitly flagged placeholder note produced without the book.** The book was read on 2026-07-30 — both evaluation chapters in full — and four of the placeholder's claims are contradicted. See *Corrections and open items* below; do not reuse the old framing, which was that AI engineering is a distinct discipline and that adaptation techniques are ordered by cost and reversibility.

### Shankar et al., EvalGen
- Criteria drift: users need criteria to grade outputs, but grading outputs is how criteria get defined. Some criteria are output-dependent.
- LLM-generated evaluators inherit the problems of the LLMs they evaluate, so the validators must themselves be validated against human grades.

### Zheng et al., MT-Bench and Chatbot Arena
- LLM judges show four measurable biases — position, verbosity, self-enhancement, limited reasoning — each with a proposed mitigation.
- Over 80% agreement with humans, the same level humans reach with each other; judges approximate preference and complement rather than replace traditional benchmarks.

### Angelopoulos et al., Prediction-Powered Inference
- Provably valid confidence intervals from a small labelled set plus a large machine-predicted set, with no assumptions on the predicting model.
- Better predictions yield tighter intervals; this is the principled way to combine expensive human labels with cheap model labels.

### Miller, Adding Error Bars to Evals
- Five recommendations: CLT standard errors, clustered standard errors, variance reduction by resampling or next-token probabilities, paired question-level comparison, and power analysis.
- Real clustering ratios (DROP 3.05, MGSM 1.88) and the ≈969-question power calculation behind the "new evals should have at least 1,000 questions" guidance.

### Thakur et al., BEIR
- Eighteen datasets, ten retrieval systems, zero-shot: a benchmark built specifically to measure out-of-distribution generalization.
- BM25 is a robust baseline; re-ranking and late-interaction win on average at high cost; dense and sparse models are cheaper but often underperform.

### Singh et al., The Leaderboard Illusion
- **Not a contamination paper** — an audit of Chatbot Arena's private-testing and data-allocation asymmetries. The previous note in this folder had this wrong and has been corrected.
- 27 private Meta variants before Llama-4; Google and OpenAI received an estimated 19.2% and 20.4% of arena data against 29.7% shared by 83 open-weight models; additional data worth up to 112% relative gain.

### ten Cate, EPA framework
- EPAs describe work and are independent of persons: professionals can possess competencies but can never possess EPAs.
- Assessment output is a supervision level (1–5), not a grade; summative entrustment requires multiple observers, multiple observations, and multiple evidence types.

### Govaerts et al., narrative assessment literature
- Assessors relied on narrative feedback to form judgments and used grades and qualifications only to confirm impressions already drawn from the prose.
- Rater idiosyncrasy accounts for 29% to over 50% of rating variance and is unrelated to rater expertise; assessors reaching the same pass–fail outcome often reason from incompatible premises.

## Corrections and open items

**The Huyen placeholder asserted four things the book does not support.** All four made the book tidier than it is, and three of them were imported from the other notes in this folder rather than from the book.

- **That AI engineering is a distinct discipline rather than a subset of software engineering or machine learning.** The book argues close to the opposite: AI engineering evolved out of ML engineering, the roles overlap significantly, and the difference is one of emphasis along three named axes, of which evaluation is the third.
- **That adaptation techniques are ordered by cost and reversibility, with retrieval sitting between prompting and finetuning.** The book's taxonomy is binary and splits on a single criterion, whether a technique updates model weights. Reversibility is not one of its criteria, and retrieval does not update weights, so it falls on the prompt-based side rather than between the two. What survives is the direction: exhaust prompting before moving to more resource-intensive techniques.
- **That model-based judges may be used only after validation against human labels.** This is the most consequential correction. The book states the contrary permission — a judge that is not as good as a human may still be good enough to guide development — and its guardrails are different in kind: know the judge's model and prompt, fix the sampling temperature, never compare scores across judges, and evaluate the evaluation pipeline itself. The human-validation precondition belongs to Zheng and Shankar and was attributed to Huyen in error.
- **That evaluation is continuous.** What is continuous is *running* the evaluation. The evaluation itself must be stable, or a change in results cannot be attributed to the application rather than to the judge. A team taught the collapsed version would rewrite its judge prompts as freely as its application prompts, which is the failure the book describes.

**Open items.**
- Almost every figure the book reports is second-hand. Where the originating source is also in this folder — Zheng, Thakur, Shankar — cite the folder note rather than the book.
- The book's illustrative mapping from factual-consistency scores to automation rates is marked illustrative in the source and must stay marked; it is not a measurement.
- The book's tool and vendor material was current as of September 2024 by its own labelling and must be re-verified before any offering.

## Material retained here
- Error taxonomy workflow
- Criteria discovery and judge validation sequence
- Statistical defense notes: standard errors, clustering, pairing, and power
- Benchmark-literacy and evaluation-governance notes
- Entrustment scales, EPA description template, and narrative-rubric notes
- Cliff Notes summaries of any copyrighted evaluation sources that inform the workflow

## Public-source notes to keep
- Short paper abstracts and URLs
- Any benchmark examples that can be safely summarized without reproducing proprietary content

## Verification state of the notes
- **Full text read:** Miller, ten Cate (2018 primer), Oudkerk Pool and Govaerts (2018).
- **Abstract and listing metadata verified:** Shankar, Zheng, Angelopoulos, Thakur, Singh, Govaerts et al. (2013, plus introduction).
- **Full article read on the open web:** Husain.
- **Read in part from the book itself:** Huyen — both evaluation chapters in full and roughly a third of the book closely, on 2026-07-30 from a locally held PDF. This line previously read "**Not consulted:** Huyen. Synthesis only, flagged in the file." Nothing in the folder rests on the chapters that were not read.
