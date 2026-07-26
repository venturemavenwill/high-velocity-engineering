# Cliff Notes — DiskANN

## Citation and access
- **Authors:** Suhas Jayaram Subramanya, Devvrit, Rohan Kadekodi, Ravishankar Krishnaswamy, Harsha Vardhan Simhadri
- **Title:** DiskANN: Fast Accurate Billion-point Nearest Neighbor Search on a Single Node
- **Venue and year:** NeurIPS 2019, November 2019
- **Source consulted:** https://www.microsoft.com/en-us/research/publication/diskann-fast-accurate-billion-point-nearest-neighbor-search-on-a-single-node/ (abstract), with the paper PDF at https://suhasjs.github.io/files/diskann_neurips19.pdf
- **Access status:** Open access. Abstract and PDF are publicly available via Microsoft Research; implementation released at https://github.com/Microsoft/DiskANN (August 2020).
- **Affiliation:** Microsoft Research India, part of the project on approximate nearest neighbour search for large-scale semantic search.

## What this source is
DiskANN is a systems paper that overturns an assumption. Prevailing wisdom held that an approximate nearest neighbour index must live in main memory to deliver high recall at low latency. DiskANN demonstrates a solid-state-drive-based index that meets high recall, low latency and high density simultaneously, and in doing so changes the cost structure of billion-scale vector search.

## The argument in full
The paper opens with an economic critique of the state of the art. Current state-of-the-art approximate nearest neighbour search algorithms generate indices that must be stored in main memory for fast high-recall search. The authors identify the consequence directly: this makes them expensive and limits the size of the dataset. At billion-point scale, an in-memory graph index requires a cluster, and the cost of that cluster is dominated by RAM rather than by compute.

Against this the authors present DiskANN, a graph-based indexing and search system that can index, store and search a billion-point database on a single workstation with just 64 gigabytes of RAM and an inexpensive solid-state drive. The specificity of that configuration is the argument. Sixty-four gigabytes is a workstation, not a datacentre allocation, and an inexpensive SSD is a commodity component. The paper is claiming an order-of-magnitude change in the hardware required for a given corpus size.

The authors then state their claim in terms of three desiderata, and explicitly frame the result as contrary to current wisdom. They demonstrate that the SSD-based indices built by DiskANN can meet all three desiderata for large-scale approximate nearest neighbour search: high recall, low query latency, and high density, where density means points indexed per node. The third criterion is the one usually left implicit, and it is the one that determines cost. A method that achieves high recall and low latency but indexes few points per machine is not competitive at scale, because the machine count dominates the bill.

The empirical results are reported on the billion-point SIFT1B bigann dataset. On a 16-core machine, DiskANN serves more than 5000 queries per second with under 3 milliseconds mean latency and 95 percent or better 1-recall@1. The comparison is what makes this striking. The authors report that state-of-the-art billion-point approximate nearest neighbour algorithms with a similar memory footprint, naming FAISS and IVFOADC+G+P, plateau at around 50 percent 1-recall@1. This is not a marginal improvement on a shared frontier; at equal memory budget, the alternatives cannot reach the recall regime DiskANN operates in.

The authors also state the result in its dual form, which is the form a capacity planner cares about. In the high recall regime, DiskANN can index and serve five to ten times more points per node than state-of-the-art graph-based methods such as HNSW and NSG. Read this way, the contribution is a five-to-tenfold reduction in the number of machines needed to serve a given corpus at a given quality, which is a direct and large operating-cost reduction.

Underpinning the disk system is a separate algorithmic contribution the authors call out explicitly: as part of the overall DiskANN system they introduce Vamana, a new graph-based approximate nearest neighbour index that they describe as more versatile than existing graph indices even for in-memory indices. Vamana's design goal is to produce a graph with a small diameter, so that a search requires few hops. Hop count is the quantity that matters on disk, because each hop is potentially a random read from the SSD, and random reads have latency measured in tens of microseconds rather than nanoseconds. The strategy that makes an SSD index viable is therefore to change the graph so that fewer reads are needed, complemented by holding compressed vector representations in memory for navigation while keeping full-precision vectors and adjacency data on disk.

## Structure of the original
- Introduction — the memory cost of in-memory ANN indices and the three desiderata
- Related work — graph-based indices including HNSW and NSG, and quantisation-based billion-scale systems including FAISS and IVFOADC+G+P
- The Vamana graph index — construction, pruning with a relaxation parameter, and the small-diameter design goal
- Comparison of Vamana with existing graph indices in memory
- DiskANN — SSD-resident index layout, in-memory compressed navigation, disk-resident full-precision data, and the beam-search query procedure
- Evaluation — SIFT1B and other billion-scale datasets, recall, latency, throughput and density comparisons
- Conclusion

## Key claims, findings, and specifics
- Indexes, stores and searches a billion-point database on a single workstation with 64 gigabytes of RAM and an inexpensive SSD.
- Meets all three desiderata simultaneously: high recall, low query latency, and high density (points indexed per node).
- On SIFT1B bigann with 16 cores: more than 5000 queries per second, under 3 milliseconds mean latency, 95 percent or better 1-recall@1.
- FAISS and IVFOADC+G+P at similar memory footprint plateau at around 50 percent 1-recall@1.
- In the high recall regime, indexes and serves five to ten times more points per node than HNSW and NSG.
- Introduces Vamana, a graph-based index the authors describe as more versatile than existing graph indices even for in-memory use.
- Implementation publicly released by Microsoft in August 2020.

## Method and evidence base
The paper is evaluated as a built system measured against named competing systems on a standard billion-scale benchmark, holding hardware and memory footprint comparable so that the comparison is meaningful. Reporting recall, latency, throughput and density together is the methodological strength: each of the four can be traded against the others, so a claim stated on only one axis is uninformative. The public release of the implementation, and DiskANN's subsequent use inside Microsoft's own products and its availability in Azure services, constitute a second, operational form of evidence.

## Vocabulary the source introduces
- **1-recall@1** — the fraction of queries for which the single returned nearest neighbour is the true nearest neighbour; a strict recall measure.
- **Density (points per node)** — how many indexed vectors a single machine can serve, the metric that governs total cost at scale.
- **Vamana** — the graph index introduced in this work, built to have a small diameter so that searches require few hops.
- **Graph diameter and hop count** — the number of traversal steps a search requires, which on an SSD-resident index maps directly to random-read count.
- **Beam search over a disk-resident graph** — exploring several candidate nodes per round so that disk reads can be issued in batches rather than strictly serially.
- **SIFT1B / bigann** — the standard billion-point benchmark dataset used for evaluation.

## What to remember
- Index design is dictated by the storage tier; changing the tier changes the algorithm, not just the configuration.
- On disk, the cost metric is random reads, so minimising hop count matters more than minimising distance computations.
- The hybrid pattern is the transferable idea: compressed representations in memory for navigation, full-precision data on disk for accuracy.
- Density (points per node) is the metric that determines cost, and it is the one usually omitted from vendor claims.
- The headline comparison is at equal memory footprint, which is what makes the 50 percent versus 95 percent recall contrast meaningful.
- Five to ten times more points per node against HNSW and NSG is a direct machine-count reduction.

## Why it matters for the course
This paper is the clearest bridge in the technical strand between retrieval theory and infrastructure economics, and it is the natural handoff into the Microsoft platform strand because DiskANN is Microsoft Research work that shipped into Microsoft products. It teaches students that an architecture decision, in this case which storage tier holds the index, propagates into cost, latency and achievable corpus size, and that these are the terms in which a customer conversation actually happens. It also completes the retrieval sequence in this folder: BM25 for lexical scoring, HNSW for in-memory graph traversal, product quantization for compression, and DiskANN for what changes when the corpus exceeds memory.

## How to teach it
- Lecture: put the latency of a RAM access, an SSD random read and a disk seek side by side, then let students derive for themselves why hop count becomes the binding constraint.
- Lecture: work the cost arithmetic of serving one billion vectors in memory versus on SSD, so the five-to-tenfold density claim becomes a budget rather than a statistic.
- Lab: benchmark an in-memory index against a disk-based index on the same corpus and have students plot recall, latency and memory together.
- Lab: have students compute the machine count and monthly cost implied by each design for a stated corpus and query rate.
- Assessment: give a customer scenario with a corpus size, a latency target and a budget ceiling, and require a defended index and storage-tier recommendation.

## Limits and cautions
- The results are from 2019 on SIFT1B image descriptors; modern text embedding workloads differ in dimensionality and distribution and should be measured rather than assumed.
- The comparison baselines, FAISS and IVFOADC+G+P as configured then, and HNSW and NSG, have all advanced since publication.
- SSD-resident indexes are sensitive to hardware characteristics; results depend on the drive's random-read performance and queue depth behaviour.
- Index construction at billion scale is itself expensive, and build cost is a separate operational concern from query cost.
- Update and deletion workloads are not the focus of this paper; later work in the DiskANN line addresses streaming updates.
- This is a high-performance engineering result, and students need a simplified conceptual version before the implementation details are useful.

## Verification status
Verified against the Microsoft Research publication page: authorship, the NeurIPS 2019 venue and November 2019 date, the single-workstation claim with 64 gigabytes of RAM and an inexpensive SSD, the three desiderata including density defined as points indexed per node, the SIFT1B bigann results of more than 5000 queries per second at under 3 milliseconds mean latency and 95 percent or better 1-recall@1 on a 16-core machine, the statement that FAISS and IVFOADC+G+P at similar memory footprint plateau at around 50 percent 1-recall@1, the five-to-ten-times-more-points-per-node claim against HNSW and NSG in the high recall regime, the introduction of Vamana and its description as more versatile than existing graph indices even for in-memory indices, and the August 2020 code release on GitHub. Not verified in this pass: the section outline, the small-diameter rationale, the in-memory-compressed plus on-disk-full-precision layout, and the beam-search description are reconstructed from the system's established design rather than read from the paper's full text.
