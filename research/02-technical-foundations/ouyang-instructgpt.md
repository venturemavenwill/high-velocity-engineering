# Cliff Notes — InstructGPT

## Citation and access
- **Authors:** Long Ouyang, Jeff Wu, Xu Jiang, Diogo Almeida, Carroll L. Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, and colleagues at OpenAI
- **Title:** Training language models to follow instructions with human feedback
- **Venue and year:** arXiv:2203.02155, submitted 4 March 2022; subsequently published at NeurIPS 2022
- **Source consulted:** https://arxiv.org/abs/2203.02155
- **Access status:** Open access on arXiv under the arXiv non-exclusive distribution licence
- **Subjects:** Computation and Language (cs.CL); Artificial Intelligence (cs.AI); Machine Learning (cs.LG)

## What this source is
This is the paper that established reinforcement learning from human feedback as the standard post-training method for making language models usable as assistants. It is also the paper that first demonstrated, with a striking parameter-count comparison, that alignment can substitute for scale on the dimension users actually care about.

## The argument in full
The paper opens with a claim that was contrarian in 2022 and is now conventional wisdom: making language models bigger does not inherently make them better at following a user's intent. The authors give concrete examples of the gap, noting that large language models can generate outputs that are untruthful, toxic, or simply not helpful to the user. They then name the condition precisely: these models are not aligned with their users. The reframing matters because it separates capability from alignment. A model can possess the knowledge required to answer well and still fail to answer well, because nothing in the pretraining objective asked it to be helpful.

The proposed remedy is fine-tuning with human feedback, structured as a three-stage pipeline. The first stage is data collection and supervised fine-tuning. Starting with a set of labeler-written prompts and prompts submitted through the OpenAI API, the authors collect a dataset of labeler demonstrations of the desired model behaviour and use it to fine-tune GPT-3 using supervised learning. The prompt distribution is worth noting: it is drawn partly from real API traffic, which means the training distribution reflects what people actually asked for rather than what researchers imagined they would ask for.

The second stage addresses the limitation of demonstrations. Writing an ideal answer is expensive and often ambiguous, whereas judging which of two answers is better is cheap and more reliable. The authors therefore collect a dataset of rankings of model outputs. These comparisons train a reward model that predicts which output a human would prefer, converting scattered human judgement into a differentiable objective.

The third stage optimises against that reward model using reinforcement learning from human feedback, producing the models the authors call InstructGPT. The reward model acts as a learned proxy for human preference, allowing far more optimisation steps than direct human labelling could support.

The headline result is a parameter comparison that reframed the field's priorities. In human evaluations on the authors' prompt distribution, outputs from the 1.3 billion parameter InstructGPT model are preferred to outputs from the 175 billion parameter GPT-3, despite having 100 times fewer parameters. A hundredfold reduction in size, with better human preference outcomes, is a direct demonstration that the alignment gap was larger than the capability gap for these tasks.

The authors also report the profile of secondary effects, and they report it honestly. InstructGPT models show improvements in truthfulness and reductions in toxic output generation, while having minimal performance regressions on public NLP datasets. That last clause anticipates the obvious objection, the so-called alignment tax, and reports it as small rather than absent. The paper closes with an explicit limitation: even though InstructGPT still makes simple mistakes, the results show that fine-tuning with human feedback is a promising direction for aligning language models with human intent. The framing is a direction, not a solution.

## Structure of the original
- Introduction — the misalignment between scale and user intent
- Related work — alignment, human feedback, instruction following
- Methods and experimental details — the three-step pipeline (supervised fine-tuning, reward modelling, reinforcement learning via PPO), dataset construction, labeler selection and agreement, and model sizes
- Results — human preference evaluations, truthfulness and toxicity measures, public NLP dataset regressions, and generalisation to held-out labelers and to non-English instructions
- Discussion — implications for alignment research, whose values are being aligned to, limitations and open problems
- Appendices — labeling instructions, labeler demographics, prompt distribution details

## Key claims, findings, and specifics
- Making language models bigger does not inherently make them better at following user intent.
- Named failure modes of unaligned models: untruthful, toxic, or simply not helpful.
- Training data comes from both labeler-written prompts and prompts submitted through the OpenAI API.
- Stage one: supervised fine-tuning of GPT-3 on labeler demonstrations of desired behaviour.
- Stage two: a dataset of rankings of model outputs, used to train a reward model.
- Stage three: further fine-tuning of the supervised model using reinforcement learning from human feedback.
- Headline result: outputs from the 1.3 billion parameter InstructGPT model are preferred to outputs from the 175 billion parameter GPT-3, a 100-fold parameter difference.
- InstructGPT improves truthfulness and reduces toxic output generation.
- Performance regressions on public NLP datasets are minimal.
- The authors state that InstructGPT still makes simple mistakes.

## Method and evidence base
The primary evidence is human preference evaluation on the authors' own prompt distribution, supplemented by automated measures for truthfulness and toxicity and by standard public NLP benchmarks used as a regression check. The methodological strength is that the evaluation criterion matches the objective: the paper claims to improve helpfulness to users and measures it by asking humans which output they prefer. The methodological weakness is intrinsic to that same choice: the result is defined relative to a specific labeler pool, a specific set of labeling instructions, and a specific prompt distribution, all of which the paper documents but none of which are universal.

## Vocabulary the source introduces
- **Alignment** — the property of a model behaving in accordance with user intent, distinct from raw capability.
- **Supervised fine-tuning (SFT)** — training on human-written demonstrations of desired responses.
- **Reward model** — a model trained on human comparisons that scores candidate outputs by predicted human preference.
- **Reinforcement learning from human feedback (RLHF)** — optimising a policy model against a learned reward model derived from human comparisons.
- **Preference comparison data** — rankings of alternative outputs, cheaper and more reliable to collect than demonstrations.
- **Alignment tax** — the performance cost on other tasks incurred by alignment training, reported here as minimal.

## What to remember
- Instruction following is a post-training property, not something that emerges from pretraining scale alone.
- A 1.3 billion parameter aligned model beat a 175 billion parameter unaligned model on human preference; alignment can substitute for scale.
- Comparisons are easier for humans to give than demonstrations, which is why reward modelling exists.
- The three stages are distinct and each can fail independently; students should be able to name all three.
- The alignment tax was measured and reported as small, not ignored.
- Whose preferences are encoded is a design decision with consequences, and the paper is explicit about this.

## Why it matters for the course
This paper is the anchor for explaining why two models with similar base capabilities behave very differently in practice, which is one of the most common sources of confusion when a customer compares vendors. It gives students the vocabulary to reason about model selection as a question about post-training rather than about parameter counts, and it introduces the idea, central to the whole course, that human judgement can be operationalised into a measurable objective. That idea recurs directly in the measurement strand, where LLM-as-judge and evaluation-criteria design are the same problem in a different setting.

## How to teach it
- Lecture: separate capability from alignment explicitly, using the 1.3 billion versus 175 billion result as the anchor example.
- Lecture: walk the three stages and ask students what could go wrong at each, before presenting known failure modes such as reward hacking and sycophancy.
- Lab: have students write labeling instructions for a narrow task, collect pairwise preferences from classmates, and measure inter-annotator agreement; the difficulty of specifying quality is the lesson.
- Lab: compare a base model and an instruction-tuned model on the same prompts to make the behavioural difference tangible.
- Assessment: give students a vendor claim based on parameter count and require a critique explaining why post-training method may matter more.

## Limits and cautions
- The result is defined relative to OpenAI's labeler pool, labeling instructions and prompt distribution; it is not a claim about universal preference.
- Human preference is not the same as correctness, and optimising for preference can produce confident, agreeable, wrong answers.
- The paper is from 2022 and the field has moved on to DPO and other direct preference methods, constitutional and AI-feedback approaches, and reasoning-focused post-training.
- The authors themselves note the models still make simple mistakes; this is not a solved problem.
- The full pipeline is expensive and largely inaccessible to students at scale, so teaching must focus on mechanism and judgement rather than reproduction.

## Verification status
Verified against the arXiv abstract page: authorship, submission date, licence, subject classifications, the claim that bigger does not inherently mean better at following intent, the three named failure modes, the use of both labeler-written and API-submitted prompts, the supervised fine-tuning of GPT-3 on demonstrations, the collection of output rankings and their use for further fine-tuning via reinforcement learning from human feedback, the naming of the resulting models as InstructGPT, the 1.3 billion versus 175 billion preference result with the 100-times-fewer-parameters framing, the improvements in truthfulness and reductions in toxicity, the minimal regressions on public NLP datasets, and the acknowledgement that InstructGPT still makes simple mistakes. The section outline, the identification of PPO as the reinforcement learning algorithm, and the generalisation-to-held-out-labelers detail are reconstructed from the paper's known structure and were not re-read from the full text in this pass. The NeurIPS 2022 publication is recorded from general knowledge and is not stated on the arXiv abstract page.
