# Collected Materials — Course Structure

## Working synthesis
This folder holds two kinds of material and the distinction matters. **The external inputs** — ABET's computing criteria, CS2023, and the CMU exemplar — establish what a curriculum's shape must be and demonstrate that a workable shape exists. **The internal documents** — the benchmark, the gap analysis and the research brief — convert those constraints into a design. The through-line is a single finding: ABET declines to prescribe courses, so architecture is free, but every required outcome is a behavioural verb, so the architecture must contain occasions where behaviour occurs and is observed. A reading package cannot do that regardless of how good the reading is.

The design that follows is **six interlocking strands** — foundations, measurement and evaluation, architecture and operations, adversary and safety, professional formation, and FDE and engagement craft — organised around a **project spine** that generates evidence and an **assessment spine** that certifies judgement from it, with a **durable-versus-perishable split** that lets platform detail be replaced without disturbing the structure. Measurement is the spine rather than a support topic, in both halves: as content the students learn, and as the discipline the course's own assessment runs under.

## Source-by-source Cliff Notes

### ABET CAC criteria and CS2023, read structurally
- **"The curriculum requirements specify topics, but do not prescribe specific courses."** Architecture is free; the credit envelope is not.
- **Credit envelopes:** at least 30 semester credit hours of computing at baccalaureate level; computer science requires 40 plus 15 of mathematics and statistics, with discrete mathematics, probability and statistics at a rigour at least equal to introductory calculus.
- **Five baccalaureate student outcomes, all behavioural verbs**, plus a sixth for computer science. Three of the six are non-technical: communication, professional responsibility and ethical judgement, and teamwork.
- **The one firm sequencing constraint:** "a major project that requires integration and application of knowledge and skills acquired in earlier course work."
- **Proposed Criterion 5 item 4**, first applied in the 2026-27 cycle: "A comprehensive project or experience appropriate to the discipline which: 1) builds on technical knowledge and skills acquired in prior advanced course work, and 2) enables the application of appropriate professional dispositions."
- **Proposed definition:** "Professional dispositions are behaviors desired in the workplace." Behaviours, therefore observable, therefore requiring observation occasions.
- **ABET separates assessment from evaluation** — collecting and preparing data versus interpreting it. Conflating them weakens a self-study.
- **CS2023 vision statement:** "Computer Science is a professional discipline where skills and professional dispositions are just as important as the underlying knowledge", with the concession that the field "has not yet widely accepted" this.
- **CS2023's guidelines-versus-practices distinction:** guidelines list what should be covered, practices describe how and why. Treated as a separate publication stream.
- Full note: [abet-cac-and-cs2023.md](/research/01-course-structure/abet-cac-and-cs2023.md)

### CMU 17-645, read structurally
- **The substrate is the load-bearing choice:** a movie recommendation service serving one million active users, live for several weeks, "graded on how it holds up under real load and changing environment conditions."
- **Lectures sequence against the system lifecycle, not a topic taxonomy.** Requirements and failure planning precede modelling; responsibility content occupies the final third and carries its own milestone.
- **Weekly technology-specific labs** interlock with lectures within days — Flask, Kafka, git, model testing, Docker, CI, agents and MCP, Prometheus and Grafana, DVC, explainability tools — credited in-session by demonstration and questioning.
- **Weighting:** 35% individual, 30% group project, 25% midterms and participation, 10% labs. **No final exam.** Grade boundaries published to the point with no rounding.
- **No formal prerequisites and no software engineering background required**; intake heterogeneity handled by an anonymous ungraded ten-question diagnostic returning targeted readings.
- **Costs stated openly:** twelve hours per week and $20-100 per month in AI subscriptions, "roughly comparable to the cost of traditional textbooks."
- **Teams of 3-6, instructor-assigned**, TA mentor each, thirty-minute mentor meeting in the week after every milestone, peer rating on "team citizenship".
- **Target roles named**, including **Forward Deployed Engineer**. Twelve units, running since 2019, all materials Creative Commons.
- Full note: [cmu-17-645-ml-in-production-ai-engineering.md](/research/01-course-structure/cmu-17-645-ml-in-production-ai-engineering.md)

### 09 Curriculum Design Benchmark and Sources — internal
- The existing package is a strong enablement track; the gap between that and a curriculum is **structural, not volumetric**.
- Three exemplars pick three different spines — CMU's live system, Stanford CS336's implementation volume, Berkeley's optional-assignment lecture series — and **only the live-system spine produces evidence of the kind ABET's outcomes require**.
- Rigour can sit at the exit through evidence rather than at the entrance through prerequisites.
- The output is a **design requirement, not a critique**: an assessment spine, a project spine, and a documented separation of what is covered from how and why.
- Full note: [09-curriculum-design-benchmark-and-sources.md](/research/01-course-structure/09-curriculum-design-benchmark-and-sources.md)

### 10 Gap Analysis and Course Architecture — internal
- **The gap is the inability to certify judgement.** Three subsidiary gaps follow: no substrate, no assessment design, no durable-perishable separation.
- The **six-strand architecture**, with the last two strands kept structurally separate because they would otherwise disappear into the technical arc — and they are exactly what the three non-technical outcomes require.
- **Strands interlock at milestones.** A strand only ever exercised alone has been mis-designed.
- **Assessment spine:** two or three entrusted activities, ordinal supervision sub-levels targeting 3b or 3c, mandatory narrative substantiation, multiple observers and observation types, entrustment-based discussion with what-if questions, independent judgements before deliberation, and a dispositions layer of integrity, reliability and humility.
- **Perishable content may illustrate durable content but may never be the thing assessed.**
- Full note: [10-gap-analysis-and-course-architecture.md](/research/01-course-structure/10-gap-analysis-and-course-architecture.md)

### 11 Research Brief for Complete Course Design — internal
- Nine workstreams mapped onto the folder structure, each with the questions it must answer and its current status.
- The **evidence standard precedes the workstreams**: an evidence hierarchy, a verification rule requiring every count and finding to be traced or flagged, a copyright rule, and a commitment to record negative retrieval results.
- **Measurement as spine has two halves** — the content students learn, and the discipline the course's own assessment runs under. Neither works alone.
- The durable-perishable split is a **research management rule** as well as a content rule: WS6 needs a standing refresh cadence that does not yet exist.
- Full note: [11-research-brief-for-complete-course-design.md](/research/01-course-structure/11-research-brief-for-complete-course-design.md)

## Cross-source observations
- **ABET's freedom and ABET's constraint point the same way.** Declining to prescribe courses while requiring behavioural outcomes means the standard is indifferent to syllabus order and unforgiving about evidence. That combination is what licenses the entire architecture proposed here.
- **CMU independently satisfies the proposed disposition clause without citing it.** Peer rating on team citizenship, in-session lab demonstration, and thirty-minute post-milestone mentor meetings are all disposition observation occasions. This is convergence, not compliance, which makes it stronger evidence that the requirement is workable.
- **Two sources treat cost transparency as structural.** CMU publishes both the weekly hour expectation and the monthly subscription cost. ABET does not require this, but a curriculum claiming professional formation that hides its participation costs is inconsistent with its own content.
- **The exemplar comparison is more useful than the exemplar.** Stanford's restrictive AI policy and Berkeley's optional assignments are not failures; they are different answers to different problems. Reading all three shows which structural decisions are forced by the outcome claim and which are genuinely free.
- **The three-way split in CS2023's final report** — what to cover, what a graduate should be, how to teach it — is the same split this folder's internal documents arrive at independently as content, outcomes and architecture.

## Corrections and open items
- **"Six interlocking strands" is an internal judgement with no external warrant.** It is defensible against the outcome set but it is not the only defensible division, and it should never be cited as though a standard requires it.
- **ABET criteria are programme-level.** A single course contributes to them and cannot satisfy them alone. Earlier framing in this folder blurred this.
- **The proposed ABET changes were in the comment period as consulted** and may differ in final form. Verify before quoting in anything binding.
- **CS2023's competency formula, named disposition list, core-hours figures and exact knowledge-area count are not verified** and are asserted nowhere. Three sectioned PDFs failed extraction on repeated attempts, and the knowledge-areas page count is ambiguous because Systems Fundamentals links differently from the other entries.
- **The ABET 2024-2025 criteria URL returns 404.** Only the 2025-2026 cycle was consulted.
- **CMU course content is offering-specific and drifts between semesters.** Cite the offering, not the course.
- **No exemplar publishes effectiveness data.** Longevity and openness establish workability, not superiority over the alternatives.
- **Blocking open questions:** whether the course can produce a substrate with genuine consequences; how many independent assessor-occasion pairs the staffing supports; and which two or three activities are actually entrusted.
- **Non-blocking but unaddressed:** week-level strand mapping, credit and sequence positioning, observable indicators for the dispositions layer, a refresh cadence for the platform material, and accommodation for oral assessment.

## Material retained here
- The structural reading of ABET and CS2023: what is constrained, what is free, and what the 2026-27 changes add.
- The structural reading of CMU 17-645: substrate, lifecycle sequencing, lecture-lab interlock, weighting, entry design and cost transparency.
- The benchmark's finding that the gap is structural, and the three-exemplar comparison that supports it.
- The six-strand architecture, the assessment spine, and the durable-perishable rule.
- The workstream plan, the evidence standard, and the current open-question set.

## Public-source notes to keep
- ABET 2025-2026 computing criteria, `https://www.abet.org/accreditation/accreditation-criteria/criteria-for-accrediting-computing-programs-2025-2026/`, open and read directly.
- CS2023 at `https://csed.acm.org/`, DOI 10.1145/3664191, endorsed by ACM 18 January 2024, IEEE-CS 22 January 2024 and AAAI 22 February 2024; site pages read, three sectioned PDFs unextractable.
- CMU 17-645 at `https://mlip-cmu.github.io/` and the Fall 2026 offering page; all materials Creative Commons at `https://github.com/mlip-cmu`; companion book open access from MIT Press at `https://mlip-cmu.github.io/book/`; design rationale at arXiv:2001.06691; annotated bibliography at `https://github.com/ckaestne/seaibib`.
- Contrast exemplars: Stanford CS336 at `http://cs336.stanford.edu/spring2025/` and the Berkeley LLM Agents MOOC at `https://llmagents-learning.org/f24`.