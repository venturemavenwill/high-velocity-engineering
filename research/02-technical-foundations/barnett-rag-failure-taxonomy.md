# Cliff Notes — Seven Failure Points When Engineering a Retrieval Augmented Generation System

## Citation and access
- **Authors:** Scott Barnett, Stefanus Kurniawan, Srikanth Thudumu, Zach Brannelly, Mohamed Abdelrazek (Deakin University)
- **Title:** Seven Failure Points When Engineering a Retrieval Augmented Generation System
- **Venue and year:** arXiv:2401.05856, submitted 11 January 2024; presented at CAIN 2024, the International Conference on AI Engineering
- **Source consulted:** https://arxiv.org/abs/2401.05856
- **Access status:** Open access on arXiv under CC BY 4.0
- **Type:** Experience report
- **Subjects:** Software Engineering (cs.SE)

## What this source is
This is a software engineering experience report rather than a research paper, and its framing is deliberate. The authors treat retrieval-augmented generation as a system to be engineered and operated, and they report what actually broke when they built three such systems in different domains. Its contribution is a shared diagnostic vocabulary and two hard-won operational lessons.

## The argument in full
The paper starts from why retrieval-augmented generation is attractive. The authors identify three motivations for grounding a language model in retrieved documents: to reduce hallucination, to link sources and references to generated responses so that answers can be audited, and to remove the need for annotating documents with metadata, since retrieval works over the documents as they are. That third motivation is the one most often overlooked and is a large part of why RAG is adopted in practice, because it lets an organisation use its existing document estate without a curation project first.

The authors then state the corresponding liability. A retrieval-augmented system inherits the limitations of both of its components. It inherits the failure modes of information retrieval systems, including vocabulary mismatch, ranking failures and incomplete recall, and it inherits the failure modes of large language models, including hallucination, instruction-following failures and sensitivity to context construction. The compound system therefore has a larger failure surface than either component alone, which is precisely why a taxonomy is needed: without one, every failure looks like the same undifferentiated problem of the answer being wrong.

The evidence base is three case studies in separate domains: research, education, and biomedical. The choice of three dissimilar domains is what allows the authors to claim the failure points recur rather than being artefacts of one deployment. From these they distil seven failure points, which is the paper's headline contribution and the reason it is widely cited. The value of the taxonomy is diagnostic rather than theoretical. When a system produces a bad answer, the operator's first question should be which stage failed, and the seven points give a checklist that turns a vague complaint into a locatable defect.

The authors then present two takeaways that they explicitly identify as key, and these are more consequential than the taxonomy itself. The first is that validation of a retrieval-augmented generation system is only feasible during operation. This is a strong claim with direct methodological consequences. It says that the space of queries, documents and interactions cannot be adequately anticipated before deployment, so pre-release testing systematically under-represents the failure distribution. Evaluation must therefore be a production capability with logging, sampling, and human review, not a pre-launch gate.

The second takeaway follows from the first: the robustness of a retrieval-augmented generation system evolves rather than being designed in at the start. Robustness is an accumulated property, built by observing real failures and responding to them, not a property that can be specified into the initial architecture. For a course teaching engineering discipline, this is a corrective to the instinct to design the perfect pipeline before shipping anything.

The paper closes by presenting research directions for the software engineering community, positioning retrieval-augmented generation as an area needing engineering practice, tooling and empirical study rather than only model improvement.

## Structure of the original
- Introduction — why retrieval augmentation is adopted and what makes it hard to engineer
- Background — the indexing pipeline and the query pipeline as the two halves of a RAG system
- Case studies — three systems in the research, education and biomedical domains, with context and scale for each
- The seven failure points — each described with where it arises and how it was observed
- Lessons learned — including the two key takeaways on operational validation and evolving robustness
- Research directions for the software engineering community
- Conclusion

## Key claims, findings, and specifics
- Three stated motivations for RAG: reduce hallucination, link sources and references to responses, remove the need for metadata annotation.
- RAG inherits the limitations of both information retrieval systems and large language models.
- Seven failure points are identified.
- The evidence comes from three case studies in separate domains: research, education, and biomedical.
- First key takeaway: validation of a RAG system is only feasible during operation.
- Second key takeaway: the robustness of a RAG system evolves rather than being designed in at the start.
- The paper concludes with research directions aimed at the software engineering community.

## The seven failure points
The seven points, as commonly cited from this paper, are missing content, missed top-ranked documents, not in context after consolidation, not extracted, wrong format, incorrect specificity, and incomplete answers. They map onto the pipeline in order: the first concerns the corpus, the next two concern retrieval and context assembly, and the last four concern generation. Treat this list as reconstructed rather than quoted, because the seven names were not re-read from the paper's full text during this research pass; confirm the exact wording against the PDF before using them as assessed course content.

## Method and evidence base
The method is multi-case experience reporting, a recognised software engineering research approach in which practitioners systematically document what occurred across several real projects and extract recurring patterns. Its strength is external validity of a particular kind: these are failures that actually happened in deployed systems rather than failures constructed for a study. Its weakness is that it offers no controlled comparison and no frequency data, so the taxonomy tells you what can go wrong but not how often, nor which interventions reliably help. The three-domain spread is the main defence against domain-specific artefacts.

## Vocabulary the source introduces
- **Failure point** — a specific, locatable stage at which a retrieval-augmented system produces a wrong or unusable answer.
- **Indexing pipeline** — the offline path: ingest, chunk, embed and store documents.
- **Query pipeline** — the online path: retrieve, rerank, assemble context, generate, and post-process.
- **Operational validation** — the position that a RAG system can only be genuinely validated while running against real traffic.
- **Evolving robustness** — the position that reliability is accumulated through observed failures rather than designed up front.

## What to remember
- RAG failures are stage-specific; diagnose the stage before changing the model.
- The three motivations are reduce hallucination, provide citable sources, and avoid metadata annotation work.
- A RAG system inherits both retrieval failures and generation failures, so its failure surface is compound.
- Validation is only feasible during operation, which makes production observability a requirement rather than an enhancement.
- Robustness evolves; plan for iteration rather than for a correct initial design.
- The evidence is three domains, research, education and biomedical, which is what supports the claim of recurrence.

## Why it matters for the course
This paper teaches the course's central diagnostic habit for retrieval-augmented systems, and it does so with the authority of reported practice rather than opinion. Most students, and many practitioners, respond to a bad answer by changing the model or the prompt, which is the least likely place the defect lives. Giving students a stage-wise checklist converts an unstructured complaint into an engineering investigation. The two key takeaways also underwrite two design commitments the course makes elsewhere: that evaluation infrastructure must exist in production, which links to the measurement strand, and that a system's reliability is an operational achievement, which links to the observability and governance material in the platform strand.

## How to teach it
- Lecture: walk the indexing and query pipelines and attach each failure point to its stage, so the taxonomy is spatial rather than a list to memorise.
- Lab: give students a deliberately broken RAG system with a seeded defect at a known stage and require a written diagnosis identifying the stage before any fix is permitted.
- Lab: have students instrument a pipeline so that each stage emits enough signal to distinguish these failures, then re-run the diagnostic exercise using only the logs.
- Assessment: require every student RAG project to include a failure log with each observed defect classified by stage and a stated response.
- Assessment: ask students to argue for or against the claim that validation is only feasible during operation, citing their own project evidence.

## Limits and cautions
- This is an experience report, so it should be paired with retrieval theory and formal measurement methods rather than used alone.
- The taxonomy has no frequency or severity data; it says what can fail, not what usually fails or what matters most.
- The three case studies are specific systems in specific domains and are not a representative sample.
- The paper predates widespread agentic retrieval, query planning and multi-hop patterns, which introduce failure modes not covered here.
- The claim that validation is only feasible during operation should be taught as a strong position to be examined, not an axiom, since it has real consequences for release governance in regulated settings.

## Verification status
Verified against the arXiv abstract page: authorship, submission date, CC BY 4.0 licence, the cs.SE subject classification, the three stated motivations for RAG, the statement that RAG inherits the limitations of both information retrieval systems and large language models, the count of seven failure points, the three case study domains of research, education and biomedical, both key takeaways in their stated form, and the closing research directions for the software engineering community. Not verified in this pass: the specific names and wording of the seven failure points, and the section outline, both of which are reconstructed from the paper's widely reported content and are flagged as provisional above. The CAIN 2024 presentation is recorded from general knowledge and is not stated on the arXiv abstract page.
