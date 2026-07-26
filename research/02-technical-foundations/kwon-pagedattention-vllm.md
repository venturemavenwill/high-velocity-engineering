# Cliff Notes — PagedAttention and vLLM

## Citation and access
- **Authors:** Woosuk Kwon, Zhuohan Li, Siyuan Zhuang, Ying Sheng, Lianmin Zheng, Cody Hao Yu, Joseph E. Gonzalez, Hao Zhang, Ion Stoica
- **Title:** Efficient Memory Management for Large Language Model Serving with PagedAttention
- **Venue and year:** SOSP 2023 (ACM Symposium on Operating Systems Principles); arXiv:2309.06180
- **Source consulted:** https://arxiv.org/abs/2309.06180
- **Access status:** Open access on arXiv under CC BY 4.0
- **Implementation:** https://github.com/vllm-project/vllm

## What this source is
This is a systems paper, published at an operating systems conference rather than a machine learning one, and that placement is the point. It argues that the dominant constraint on large language model serving throughput is not model quality or arithmetic capability but memory management of the key-value cache, and it imports a classical operating systems technique to fix it.

## The argument in full
The paper begins from an economic observation about serving. High throughput serving of large language models requires batching sufficiently many requests at a time, because processing requests one at a time leaves the accelerator badly underutilised. Batch size is therefore the primary throughput lever available to a serving system.

The obstacle is the key-value cache. In each request, the KV cache holds the attention keys and values computed for every token generated so far, so that subsequent decode steps do not recompute them. The authors observe that this cache is huge and that it grows and shrinks dynamically as generation proceeds. Its size is not known in advance, because the number of output tokens is not known in advance. This makes the KV cache fundamentally unlike a static tensor allocation.

Existing systems handled this by allocating a contiguous block of memory per request, sized for the maximum possible sequence length. The authors identify the consequences precisely: when the KV cache is managed inefficiently, memory is wasted significantly by fragmentation and redundant duplication. Fragmentation arises because reserved-but-unused space inside each request's block cannot be given to another request. Duplication arises because requests that share a prefix, such as a common system prompt or the branches of a beam search, each keep their own private copy of identical key-value data. Both forms of waste reduce the number of requests that fit in memory, which reduces the achievable batch size, which directly limits throughput.

The proposed solution is PagedAttention, described as an attention algorithm inspired by the classical virtual memory and paging techniques in operating systems. Instead of one contiguous allocation per sequence, the KV cache is divided into fixed-size blocks that need not be contiguous in physical memory, with a block table mapping logical positions in a sequence to physical blocks. The attention kernel is modified to gather from these non-contiguous blocks. This is a direct transplant of the page-table idea, and the analogy is exact enough to be pedagogically valuable: internal fragmentation is bounded by one block, external fragmentation is eliminated, and sharing becomes a matter of mapping two logical sequences onto the same physical block.

On top of PagedAttention the authors build vLLM, a serving system that they state achieves two things: near-zero waste in KV cache memory, and flexible sharing of KV cache within and across requests to further reduce memory usage. The within-request sharing case covers parallel sampling and beam search, where multiple candidate continuations share a common prefix. The across-request case covers shared system prompts.

The evaluation reports that vLLM improves the throughput of popular large language models by two to four times, at the same level of latency, compared with the state-of-the-art systems FasterTransformer and Orca. The comparison is stated at matched latency, which is the honest way to report a serving improvement, because throughput can otherwise be bought by degrading response time. The authors further report that the improvement is more pronounced with longer sequences, larger models, and more complex decoding algorithms. That conditional statement is the most useful part of the result for practitioners: the technique pays off most exactly where modern workloads are heading.

## Structure of the original
- Introduction — the cost of LLM serving and the memory bottleneck
- Background — transformer decoding, autoregressive generation, and existing batching approaches
- Memory Challenges in LLM Serving — quantification of internal fragmentation, external fragmentation, and reservation waste in existing systems
- Method: PagedAttention — non-contiguous block-based KV cache and the modified attention kernel
- Method: the vLLM system — KV cache manager, block tables, scheduling and preemption, distributed execution
- Decoding scenarios — parallel sampling, beam search, shared prefix, mixed workloads
- Implementation
- Evaluation — throughput comparisons against FasterTransformer and Orca; ablations on block size and sharing
- Related work and conclusion

## Key claims, findings, and specifics
- Throughput serving requires batching many requests together; batch size is the throughput lever.
- The KV cache for each request is large and grows and shrinks dynamically over the life of the request.
- Inefficient KV cache management wastes memory through fragmentation and redundant duplication, which limits batch size.
- PagedAttention is explicitly inspired by classical virtual memory and paging in operating systems.
- vLLM achieves near-zero waste in KV cache memory.
- vLLM supports flexible sharing of KV cache within and across requests.
- Reported improvement: two to four times the throughput of FasterTransformer and Orca at the same level of latency.
- The improvement is more pronounced with longer sequences, larger models, and more complex decoding algorithms.
- The source code is publicly released at github.com/vllm-project/vllm.

## Method and evidence base
The paper is evaluated by building a working system and benchmarking it against named production-grade baselines under matched latency constraints. This is systems-paper methodology rather than benchmark-leaderboard methodology: the claim is about a serving system's operating characteristics under load, and it is substantiated by throughput-versus-latency curves rather than by a single accuracy score. The release of the implementation is part of the evidence, because it allowed independent reproduction, and vLLM subsequently became a widely deployed open-source inference server.

## Vocabulary the source introduces
- **KV cache** — the stored attention keys and values for tokens already processed in a request, retained so decode steps do not recompute them.
- **PagedAttention** — an attention algorithm that reads keys and values from fixed-size, non-contiguous memory blocks rather than a single contiguous buffer.
- **Block table** — the mapping from a sequence's logical token positions to the physical KV cache blocks that hold them, analogous to an OS page table.
- **Internal fragmentation** — memory reserved inside an allocated block but never used, for example when a request finishes well before its maximum length.
- **External fragmentation** — unusable gaps between allocations caused by variable-sized contiguous blocks.
- **Copy-on-write sharing** — allowing several sequences to map the same physical block until one of them diverges, at which point the block is copied.

## What to remember
- Serving bottlenecks in LLM systems are usually memory bottlenecks, not compute bottlenecks.
- The KV cache is dynamic in size, which is precisely why naive contiguous allocation fails.
- Fragmentation and duplication are the two named waste mechanisms; both cap batch size, and batch size caps throughput.
- The two-to-four-times figure is stated at matched latency against FasterTransformer and Orca, and is not an unconditional claim.
- Gains grow with longer sequences, larger models, and more complex decoding, which is why the technique matters more over time.
- Operating systems ideas transfer directly into AI infrastructure; this is the cleanest available example.

## Why it matters for the course
This is the paper that converts LLM serving from a vendor-configuration topic into an engineering topic. It gives students a concrete, mechanistic reason why throughput and latency behave the way they do, and it demonstrates that classical computer science, specifically operating systems, is directly load-bearing in AI systems work. For a forward-deployed engineer who must size a deployment, explain a capacity constraint to a customer, or diagnose why throughput collapsed when prompts got longer, this is the underlying model. It also pairs directly with the provisioned-throughput material in the Microsoft platform strand, where the same physics appears as quota, utilisation and token-per-minute planning.

## How to teach it
- Lecture: draw the contiguous-allocation failure mode and the paged alternative side by side, and let students name the fragmentation types themselves before you label them.
- Lecture: explicitly bridge to the operating systems course students have already taken; the transfer is the lesson.
- Lab: compute KV cache size by hand for a given model, sequence length and batch size, then show how much memory reservation-based allocation wastes for a workload with variable output lengths.
- Lab: run a local vLLM instance and measure throughput as prompt length and batch size vary, so the conditional nature of the speedup is observed rather than asserted.
- Assessment: given a workload profile, ask students to predict whether paged KV management will help a lot or a little, and to justify the prediction from sequence length, sharing structure and decoding strategy.

## Limits and cautions
- This is a serving efficiency paper. It says nothing about model quality, evaluation, safety or alignment, and should not be cited for those.
- The baselines are 2023-era systems; the specific two-to-four-times figure is a comparison against FasterTransformer and Orca at that time, not a permanent property.
- Paging introduces its own overheads, including kernel complexity and block-table lookups; the paper reports net wins but the technique is not free.
- Later work in the field, including flash attention variants, speculative decoding, prefix caching services and disaggregated prefill and decode, extends and partly supersedes this design.

## Verification status
Verified against the arXiv abstract page: the framing that throughput requires batching, the description of the KV cache as large and dynamically growing and shrinking, the identification of fragmentation and redundant duplication as the waste mechanisms, the virtual-memory-and-paging inspiration, the two stated properties of vLLM (near-zero KV cache waste and flexible sharing within and across requests), the two-to-four-times throughput improvement at the same latency against FasterTransformer and Orca, the statement that gains are more pronounced with longer sequences, larger models and more complex decoding, the SOSP 2023 venue, the CC BY 4.0 licence, and the GitHub release. The section outline and the internal mechanism details, including block tables and copy-on-write sharing, are reconstructed from the paper's known structure and were not re-read line by line in this pass.
