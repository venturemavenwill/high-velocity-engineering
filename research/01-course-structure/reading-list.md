# Reading List — Course Structure

Grouped by the question each source answers. Access status is recorded so that nothing is cited beyond what was actually read.

## What shape must the curriculum take, and what is it free to choose?
- **ABET, Criteria for Accrediting Computing Programs, 2025-2026.** Computing Accreditation Commission. `https://www.abet.org/accreditation/accreditation-criteria/criteria-for-accrediting-computing-programs-2025-2026/`; PDF at `https://www.abet.org/2025-2026_cac_criteria/`. **Open, read directly.** The definitions section, Criterion 3's behavioural outcomes, Criterion 5's explicit refusal to prescribe courses, the credit envelopes in the programme criteria, and section V's proposed comprehensive-project clause and professional-dispositions definition. **The 2024-2025 URL returns 404; use this cycle.** Structural reading at [abet-cac-and-cs2023.md](/research/01-course-structure/abet-cac-and-cs2023.md); full source reading at [research/07-accreditation-exemplars/abet-cac-criteria-and-student-outcomes.md](/research/07-accreditation-exemplars/abet-cac-criteria-and-student-outcomes.md).
- **CS2023: ACM/IEEE-CS/AAAI Computer Science Curricula.** DOI 10.1145/3664191. `https://csed.acm.org/`, with the knowledge-areas, vision-statement and final-report pages. **Open; site pages read directly. Three sectioned PDFs — the introduction to the competency framework, the executive summary, and characteristics of graduates — could not be extracted.** The vision statement's argument on dispositions and the guidelines-versus-practices distinction are the load-bearing parts. Full source reading at [research/07-accreditation-exemplars/cs2023-competency-and-disposition-materials.md](/research/07-accreditation-exemplars/cs2023-competency-and-disposition-materials.md).

## What does a working spine look like in practice?
- **CMU 17-645 / 17-445 / 17-745, Machine Learning in Production.** `https://mlip-cmu.github.io/` and `https://mlip-cmu.github.io/f2026/`. **Open, read directly; all materials Creative Commons at `https://github.com/mlip-cmu`.** The primary structural exemplar: live substrate, lifecycle sequencing, weekly labs, milestone rhythm, entry diagnostic, cost transparency. Structural reading at [cmu-17-645-ml-in-production-ai-engineering.md](/research/01-course-structure/cmu-17-645-ml-in-production-ai-engineering.md).
- **Kaestner et al., "Teaching Software Engineering for AI-Enabled Systems"**, arXiv:2001.06691. **Listing metadata verified.** The published design rationale. Read before adapting the mechanics, so they are copied with their reasoning.
- **Kaestner, *Machine Learning in Production*.** MIT Press, **open access** at `https://mlip-cmu.github.io/book/`; print at `https://mitpress.mit.edu/9780262049726/`. The course's companion text; the chapter mapping in the schedule shows which content supports which milestone.

## What are the alternative spines, and what do they cost?
- **Stanford CS336, Language Modeling from Scratch**, Spring 2025. `http://cs336.stanford.edu/spring2025/`. **Open, read directly.** The implementation-volume spine, with five assignments, leaderboards, and a restrictive AI policy including discouraged autocomplete. The strongest contrast case. Note at [research/07-accreditation-exemplars/stanford-cs336-language-modeling-materials.md](/research/07-accreditation-exemplars/stanford-cs336-language-modeling-materials.md).
- **Berkeley, Large Language Model Agents MOOC**, Fall 2024. `https://llmagents-learning.org/f24` (Spring 2025 at `/sp25`). **Open, read directly.** Twelve guest lectures, completion-graded quizzes, optional assignments, and a five-tier certificate structure. Useful as the boundary case showing what a course looks like with no assessment spine at all. Note at [research/07-accreditation-exemplars/berkeley-advanced-llm-agent-course-materials.md](/research/07-accreditation-exemplars/berkeley-advanced-llm-agent-course-materials.md).

## What must the assessment architecture prove, and how?
- **Olle ten Cate, "A primer on entrustable professional activities"**, *Korean Journal of Medical Education* 2018; 30(1):1-10. DOI 10.3946/kjme.2018.76. PMCID PMC5840559. **Open access, full text read.** The unit of assessment, the supervision scale, the evidence standard.
- **Oudkerk Pool, Govaerts, Jaarsma and Driessen, "From aggregation to interpretation"**, *Advances in Health Sciences Education* 2018; 23(2):275-287. PMCID PMC5882626. **Open access, full text read.** What assessors actually do, and why the controls must be structural.
- **Miller, "Adding Error Bars to Evals"**. **Full text read.** Why the course's own assessment output must be coarse.
- Applied synthesis at [research/08-assessment-epas/collected-materials.md](/research/08-assessment-epas/collected-materials.md); design register at [research/08-assessment-epas/epa-research-notes.md](/research/08-assessment-epas/epa-research-notes.md).

## Internal design documents in this folder
These are the repository's own working artefacts, not external sources. They record judgements, not findings.
- [09-curriculum-design-benchmark-and-sources.md](/research/01-course-structure/09-curriculum-design-benchmark-and-sources.md) — the benchmark: why the gap is structural rather than volumetric.
- [10-gap-analysis-and-course-architecture.md](/research/01-course-structure/10-gap-analysis-and-course-architecture.md) — the architecture: six strands, the assessment spine, the durable-perishable split, and the open questions.
- [11-research-brief-for-complete-course-design.md](/research/01-course-structure/11-research-brief-for-complete-course-design.md) — the plan: nine workstreams, the evidence standard, and current status.
- `course-structure-memo.md` — planning memo, outside the Cliff Notes scope.

## Retrieved but unavailable
- **CS2023 sectioned PDFs** — `1.4-Introduction-to-Competency-Framework.pdf`, `1.1-Executive-Summary.pdf`, `2.2-Characteristics-of-Graduates.pdf`. Extraction failed on repeated attempts. The competency formula, the named disposition list, core-hours figures and the exact knowledge-area count are therefore **not verified and asserted nowhere**.
- **ABET Criteria for Accrediting Computing Programs, 2024-2025** — URL returns 404.
- **The Barbara Oakley peer-rating procedure** that CMU adapts — referenced without a full citation and not located.

## Adjacent reading, not core
- **ckaestne/seaibib**, `https://github.com/ckaestne/seaibib` — annotated bibliography on software engineering for AI-enabled systems. Useful for extending the foundations strand, not for structure.
- **CS2023 curricular practice articles** — the "how and why" stream distinguished from the guidelines. Worth tracking as they publish.

## What this folder should answer
- **What the course spine is.** Answered: a project spine generating evidence from a live substrate, with an entrustment-based assessment spine certifying judgement from it, organised into six interlocking strands. **The substrate itself is not yet secured, which makes this answer provisional.**
- **Which standards and exemplars justify it.** Answered: ABET's behavioural outcomes and proposed comprehensive-project clause require observation occasions; CS2023 supplies the disciplinary argument for dispositions; CMU demonstrates that the structure runs.
- **Which parts are durable and which are perishable.** Answered in principle — durable content changes on a decade scale, perishable on a quarterly one, and perishable content may illustrate but never be the thing assessed. **No refresh cadence has been defined for the perishable material.**
- **What the assessment architecture must prove.** Answered: that a student can perform the named activities at a stated supervision level, on evidence from multiple observers across multiple observation types, with narrative substantiation. **Unproven in practice, because assessor capacity is unquantified.**
- **Still open:** week-level mapping of strands, the course's position relative to the integrative project and credit envelope, observable indicators for the dispositions layer, and accommodation for oral assessment.