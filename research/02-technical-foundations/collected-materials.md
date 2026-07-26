# Collected Materials — Technical Foundations

## Working synthesis
The technical core should teach the system beneath the API:

- transformer structure and tokenization
- inference economics and KV cache behavior
- classical retrieval and hybrid search
- ANN internals and tradeoffs
- post-training methods and model behavior
- orchestration patterns and resilience

## Source-by-source Cliff Notes

Each entry below is a pointer. The full source-representative note lives in the
corresponding file in this folder, written against the original in a common
twelve-section template.

### Vaswani et al., Attention Is All You Need (NIPS 2017, arXiv:1706.03762)
- Introduces self-attention as the replacement for recurrence and convolution in sequence transduction.
- Verified specifics: 28.4 BLEU on WMT 2014 English-to-German, more than 2 BLEU over the previous best including ensembles; 41.8 BLEU single-model state of the art on English-to-French after 3.5 days on eight GPUs; generalisation demonstrated on English constituency parsing.
- The course takeaway is not the architecture diagram; it is that removing sequential dependency changes the computational shape and therefore the economics of language models.

### Kwon et al., PagedAttention and vLLM (SOSP 2023, arXiv:2309.06180, CC BY 4.0)
- The serving problem is memory management of the KV cache, not model quality.
- Verified specifics: fragmentation and redundant duplication identified as the waste; virtual memory and paging borrowed from operating systems; near-zero KV cache waste; flexible sharing within and across requests; 2 to 4 times throughput improvement at the same latency against FasterTransformer and Orca, with larger gains for longer sequences, larger models and more complex decoding.

### Pope et al., Efficiently Scaling Transformer Inference (arXiv:2211.05102, CC BY 4.0)
- Inference cost is governed by partitioning, memory bandwidth and the prefill versus decode split.
- Verified specifics: analytical partitioning model for TPU v4; new Pareto frontier on latency and model FLOPS utilisation for models above 500 billion parameters; multiquery attention supports up to 32 times larger context lengths; 29 milliseconds per token low-batch generation latency with int8 weights; 76 percent model FLOPS utilisation on large-batch input processing; measured on PaLM 540B at 2048-token context.

### Robertson and Zaragoza, The Probabilistic Relevance Framework: BM25 and Beyond (Foundations and Trends in Information Retrieval, 2009)
- Classical lexical retrieval still matters for rare terms, exact codes and named entities.
- Paywalled; the note is an original synthesis with no source text reproduced. Covers the probability ranking principle, the binary independence model, eliteness, the k1 saturation parameter, the b length-normalisation parameter, BM25F for structured documents, and relevance feedback.

### Thakur et al., BEIR (NeurIPS 2021 Datasets and Benchmarks Track, arXiv:2104.08663, CC BY-SA 4.0)
- Verified specifics: 18 publicly available datasets, 10 evaluated retrieval systems spanning lexical, sparse, dense, late-interaction and re-ranking architectures.
- BM25 is a robust baseline. Re-ranking and late-interaction models give the best average zero-shot performance but at high computational cost. Dense and sparse models are more efficient but often underperform.

### Malkov and Yashunin, HNSW (arXiv:1603.09320)
- Verified specifics: fully graph-based with no additional coarse-stage search structure; multi-layer proximity graphs over nested subsets; maximum layer drawn with an exponentially decaying probability distribution; links separated by characteristic distance scales; logarithmic complexity scaling; a neighbour-selection heuristic that helps most at high recall and on highly clustered data; similarity to skip lists enables balanced distributed implementation.

### Jegou, Douze and Schmid, Product Quantization for Nearest Neighbor Search (IEEE TPAMI, 2011)
- Compression is part of retrieval engineering, and the effective codebook is the Cartesian product of small per-sub-space codebooks.
- Full text could not be retrieved; the INRIA HAL document endpoint returned an automated bot-challenge. The note asserts mechanism and design rationale only, with no experimental figures.

### Subramanya et al., DiskANN (NeurIPS 2019, Microsoft Research)
- Verified specifics: indexes and searches a billion-point database on a single workstation with 64 GB RAM and an inexpensive SSD; meets high recall, low latency and high density simultaneously; on SIFT1B with 16 cores, over 5000 queries per second at under 3 ms mean latency with 95 percent or better 1-recall@1, where FAISS and IVFOADC+G+P at similar memory footprint plateau near 50 percent; 5 to 10 times more points per node than HNSW and NSG in the high recall regime; introduces the Vamana graph index; released at github.com/Microsoft/DiskANN in August 2020.

### Ouyang et al., InstructGPT (arXiv:2203.02155)
- Verified specifics: three-stage pipeline of supervised fine-tuning on labeler demonstrations, reward modelling from output rankings, and reinforcement learning from human feedback; outputs from the 1.3 billion parameter InstructGPT are preferred to the 175 billion parameter GPT-3, a 100-fold parameter difference; improvements in truthfulness, reductions in toxicity, minimal regressions on public NLP datasets; the authors note the model still makes simple mistakes.

### Rafailov et al., Direct Preference Optimization (NeurIPS 2023, arXiv:2305.18290, CC BY 4.0)
- Verified specifics: RLHF characterised as complex and often unstable; DPO reparameterises the reward so the optimal policy is available in closed form, reducing the problem to a simple classification loss; eliminates sampling during fine-tuning and significant hyperparameter tuning; exceeds PPO-based RLHF at controlling sentiment; matches or improves summarisation and single-turn dialogue quality while being substantially simpler.

### Kambhampati et al., LLMs Can't Plan, But Can Help Planning in LLM-Modulo Frameworks (ICML 2024, PMLR 235, arXiv:2402.01817, CC BY 4.0)
- Position paper. Verified specifics: rejects both the over-optimistic and over-pessimistic camps; argues auto-regressive models cannot by themselves plan or self-verify, since self-verification is itself reasoning; proposes viewing models as universal approximate knowledge sources; LLM-Modulo pairs the model with external model-based verifiers in a tighter bi-directional interaction regime; the verifier's domain models can themselves be acquired with model assistance.

### Barnett et al., Seven Failure Points When Engineering a RAG System (arXiv:2401.05856, CC BY 4.0, cs.SE)
- Experience report drawn from three case studies in the research, education and biomedical domains.
- Verified specifics: three motivations for RAG (reduce hallucination, link sources to responses, avoid metadata annotation); RAG inherits the limitations of both IR systems and language models; seven failure points; two key takeaways, that validation is only feasible during operation and that robustness evolves rather than being designed in at the start.

## Corrections and open items
- The seven failure point names in the Barnett note are reconstructed rather than quoted and are flagged as provisional in that file; confirm against the PDF before using them as assessed content.
- Product quantization and the BM25 monograph are the two sources in this folder whose full text could not be retrieved. Both notes are original synthesis and assert no experimental figures.

## Material retained here
- The technical foundations memo
- The source list in the memo
- The section of the gap analysis that separates durable theory from platform detail
- Cliff Notes summaries of copyrighted books or papers, when full text cannot be stored

## Public-source notes to keep
- Open-access paper abstracts and links, with arXiv identifiers and licences recorded
- Microsoft Learn pages for any platform examples that ground the theory