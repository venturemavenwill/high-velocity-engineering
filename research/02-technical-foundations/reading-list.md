# Reading List — Technical Foundations

## Core references

### Model architecture and inference economics
- Vaswani et al., *Attention Is All You Need*. NIPS 2017. arXiv:1706.03762. Open access.
- Pope et al., *Efficiently Scaling Transformer Inference*. arXiv:2211.05102. CC BY 4.0.
- Kwon et al., *Efficient Memory Management for Large Language Model Serving with PagedAttention*. SOSP 2023. arXiv:2309.06180. CC BY 4.0.

### Retrieval theory and evaluation
- Robertson and Zaragoza, *The Probabilistic Relevance Framework: BM25 and Beyond*. Foundations and Trends in Information Retrieval, vol. 3, no. 4, 2009, pp. 333-389. Paywalled; synthesis only.
- Thakur et al., *BEIR: A Heterogenous Benchmark for Zero-shot Evaluation of Information Retrieval Models*. NeurIPS 2021 Datasets and Benchmarks. arXiv:2104.08663. CC BY-SA 4.0.

### Vector index internals
- Malkov and Yashunin, *Efficient and robust approximate nearest neighbor search using Hierarchical Navigable Small World graphs*. arXiv:1603.09320. Open access.
- Jegou, Douze and Schmid, *Product Quantization for Nearest Neighbor Search*. IEEE TPAMI 33(1), 2011. Paywalled; HAL deposit was access-blocked during research.
- Subramanya et al., *DiskANN: Fast Accurate Billion-point Nearest Neighbor Search on a Single Node*. NeurIPS 2019. Open access via Microsoft Research.

### Post-training and model behaviour
- Ouyang et al., *Training language models to follow instructions with human feedback*. arXiv:2203.02155. Open access.
- Rafailov et al., *Direct Preference Optimization: Your Language Model is Secretly a Reward Model*. NeurIPS 2023. arXiv:2305.18290. CC BY 4.0.

### Orchestration, agents and system failure
- Kambhampati et al., *LLMs Can't Plan, But Can Help Planning in LLM-Modulo Frameworks*. ICML 2024, PMLR 235. arXiv:2402.01817. CC BY 4.0. Position paper.
- Barnett et al., *Seven Failure Points When Engineering a Retrieval Augmented Generation System*. arXiv:2401.05856. CC BY 4.0. Experience report.

### The production system around the model
- Crowe, Hapke, Caveness and Zhu, *Machine Learning Production Systems*. O'Reilly Media, first edition October 2024. ISBN 978-1-098-15601-5. Copyrighted; a locally held EPUB was read in full on 2026-07-30. The only survey in this folder of the lifecycle surrounding a model rather than a mechanism inside one: data validation, feature engineering, lineage, serving, monitoring, drift and privacy. Two cautions travel with it. The title page carries an unremoved production-template line reading "Second Edition"; the copyright page says first edition and is authoritative. And three of the four authors work at Google, so the default toolchain throughout is TensorFlow Extended and Vertex.

## Suggested teaching order
1. Vaswani, for the shape of the computation.
2. Pope, then Kwon, for why that shape costs what it costs to serve.
3. Robertson and Zaragoza, then Thakur, for retrieval scoring and the evidence that it does not transfer.
4. Malkov and Yashunin, then Jegou, then Subramanya, for how a vector index actually spends memory, latency and money.
5. Ouyang, then Rafailov, for why two models of similar size behave differently.
6. Barnett, then Kambhampati, for how compound systems fail and what architecture contains the failure.

## What this folder should answer
- What theory is non-negotiable
- What belongs in labs versus lecture
- How to separate durable theory from Microsoft-specific configuration
- Which claims are verified against the original and which remain provisional