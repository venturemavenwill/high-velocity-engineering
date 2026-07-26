# Collected Materials — Measurement and Evaluation

## Working synthesis
Evaluation should be the spine of the course, not a side topic. Every feature should ship with an evaluation artifact first.

## Source-by-source Cliff Notes

### Husain, Your AI Product Needs Evals
- Three levels: unit tests as assertions, human and model review of traces, then A/B testing — increasing in cost and decreasing in iteration speed.
- Evaluation is a workflow, not a benchmark; the plateau symptoms are whack-a-mole prompt fixes, no visibility beyond vibe checks, and prompt sprawl.

### Huyen, AI Engineering
- Organizing practitioner text: AI engineering as a distinct discipline because the model is acquired rather than built, with adaptation ordered by cost and reversibility.
- **Synthesis only — the book was not consulted.** The note is a placeholder with a verification plan, not a summary. Do not teach from it unverified.

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
- **Not consulted:** Huyen. Synthesis only, flagged in the file.
