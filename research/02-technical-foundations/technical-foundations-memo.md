# Technical Foundations Memo

Date: 2026-07-25

## Summary
The current notes stop at the platform surface. A university-grade course needs the theory below the API layer: transformers, tokenization, inference economics, retrieval, ANN indexes, post-training, test-time compute, and resilience patterns.

## End-to-end summary
This memo is the design brief for the technical foundations strand. It argues that the course cannot stop at platform demos or surface-level API knowledge; students need the underlying theory that explains why the systems behave the way they do. That means attention, tokenization, inference economics, retrieval, approximate nearest neighbors, post-training, orchestration, and resilience all need to be taught as engineering topics with failure modes, not just as buzzwords. The course should use this memo as the list of durable concepts that must survive product churn.

## Non-negotiable topics
- Transformer architecture and attention
- Tokenization and context limits
- Prefill vs decode economics
- KV cache and batching
- BM25, hybrid retrieval, and reciprocal rank fusion
- ANN internals such as HNSW, IVF-PQ, and DiskANN
- Evaluation metrics for retrieval and ranking
- Post-training methods such as SFT, RLHF, DPO, and related variants
- Generate-test-critique orchestration
- Failure analysis for RAG and agent systems
- Resilience patterns for nondeterministic dependencies

## Main gaps in the current notes
- No hand-calculation exercises for latency, token cost, or cache size
- No classical information retrieval lab sequence
- No explicit failure-mode narrative for each topic
- No durable distinction between theory and Microsoft-specific implementation

## What to remember
- Theory must sit below the API layer.
- Students need calculations, not only descriptions.
- Retrieval and generation should be taught with failure modes.
- Durable concepts should outlast product details.

## Why it matters for the course
This memo defines the minimum technical depth needed for the course to feel like engineering rather than platform orientation.

## Limits
It is a scope memo, so the detailed source notes still do the substantive teaching.

## High-signal sources
- Attention Is All You Need
- PagedAttention / vLLM
- Efficiently Scaling Transformer Inference
- BM25 and BEIR
- DiskANN
- Adding Error Bars to Evals
- LLMs Can't Plan, But Can Help Planning
- Release It! and SRE