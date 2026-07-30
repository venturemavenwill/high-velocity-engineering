# Reading List — Measurement and Evaluation

## Core references
- Husain, *Your AI Product Needs Evals* — hamel.dev, 29 March 2024. Open access.
- Huyen, *AI Engineering: Building Applications with Foundation Models* — O'Reilly. The copyright line reads 2025 and the edition is dated December 2024; ISBN 978-1-098-16630-4. **Copyrighted; a locally held PDF was read on 2026-07-30. Both evaluation chapters were read in full and roughly a third of the book closely; the remainder was not opened.** This entry previously read "Copyrighted; not consulted. Note is synthesis only." The placeholder note it replaced asserted four things the book does not support, which are recorded in [collected-materials.md](/research/03-measurement-evaluation/collected-materials.md).
- Shankar et al., *Who Validates the Validators? Aligning LLM-Assisted Evaluation of LLM Outputs with Human Preferences* (EvalGen) — arXiv:2404.12272, 2024.
- Zheng et al., *Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena* — arXiv:2306.05685; NeurIPS 2023 Datasets and Benchmarks Track.
- Angelopoulos et al., *Prediction-Powered Inference* — arXiv:2301.09633; *Science*, 2023.
- Miller, *Adding Error Bars to Evals: A Statistical Approach to Language Model Evaluations* — arXiv:2411.00640, Anthropic, 2024.
- Thakur et al., *BEIR: A Heterogeneous Benchmark for Zero-shot Evaluation of Information Retrieval Models* — arXiv:2104.08663; NeurIPS 2021 Datasets and Benchmarks Track.
- Singh et al., *The Leaderboard Illusion* — arXiv:2504.20879, 2025. An audit of Chatbot Arena governance, not a contamination paper.
- ten Cate, *A primer on entrustable professional activities* — *Korean Journal of Medical Education* 30(1):1–10, 2018. Open access. Companion: *Nuts and bolts of EPAs*, *J Grad Med Educ* 5(1):157–158, 2013 (paywalled).
- Oudkerk Pool, Govaerts et al., *From aggregation to interpretation: how assessors judge complex data in a competency-based portfolio* — *Adv Health Sci Educ* 23(2):275–287, 2018. Open access. Supporting: Govaerts et al., *Workplace-based assessment: raters' performance theories and constructs* — *Adv Health Sci Educ* 18(3):375–396, 2013. Open access.

## Suggested reading order
1. Husain, then Huyen — the practitioner workflow and the systems framing.
2. Shankar, then Zheng — how criteria get defined and how judges get validated.
3. Miller, then Angelopoulos — uncertainty on the numbers, then inference from partial labels.
4. Thakur, then Singh — what a benchmark measures, then what a leaderboard fails to measure.
5. ten Cate, then Govaerts — the assessment architecture, then the evidence on what assessors actually do inside it.

## What this folder should answer
- How students should build an evaluation workflow
- How judge validation should work
- What statistics are required to defend a ship/no-ship decision
- How to read a benchmark and a leaderboard critically, including the governance around them
- How the course itself should assess ambiguous professional work
