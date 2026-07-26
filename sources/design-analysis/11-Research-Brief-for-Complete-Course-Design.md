# Research Brief — Missing Information for a University-Grade AI Systems / FDE Course

> **Purpose:** collect the missing evidence needed to turn the current Microsoft FTE/HVE study notes into a defensible, accreditable university course for a 3-year computer-engineering degree.
>
> **Primary design constraint:** the course must move beyond platform enablement and certify durable engineering judgement, evaluation literacy, teamwork, communication, and professional formation.

---

## 0. What this brief is for

This brief exists to answer one question: **what must we still learn before we can confidently design a full course, not just a vendor-aligned module?**

The research should fill five missing layers:

1. **Course structure**: what the sequence of content should be, and how it should progress from foundations to deployment to professional formation.
2. **Assessment architecture**: what evidence should be collected for each EPA, how it should be judged, and what level of entrustment is acceptable.
3. **Technical body of knowledge**: the vendor-neutral theory beneath the Microsoft platform surface.
4. **Professional formation**: the research-backed way to develop judgement, calibration, resilience, and collaboration.
5. **Accreditation and academic legitimacy**: what CS2023, ABET, and exemplar universities require.

The output of the research should be a **course blueprint** that can survive scrutiny from faculty, industry, and accreditation reviewers.

---

## 1. Design principles for the research

The research itself must be structured, not ad hoc.

### 1.1 Evidence hierarchy

Use this order of authority:

1. **Primary research**: papers, standards, and official university syllabi.
2. **Official platform documentation**: Microsoft Learn, product docs, standards bodies.
3. **Practitioner canon**: high-signal essays, job descriptions, course syllabi, and field reports.
4. **Secondary summaries**: only when the primary source cannot be directly retrieved.

### 1.2 Verification rule

No count, benchmark, effect size, or course requirement should be treated as real unless it is one of the following:

1. Directly verified from a source.
2. Anchored in a tracked artifact with a line reference.
3. Explicitly marked as unverified and therefore provisional.

### 1.3 Design rule for the course

The course should be designed as:

1. **A durable technical core**.
2. **A measurement spine**.
3. **An operating and adversarial systems layer**.
4. **An engagement-craft layer**.
5. **A professional-formation layer**.

That is the structure to validate through research.

---

## 2. Main course structure to research

The current evidence suggests the course should likely be organized into six strands. The research brief should confirm, reject, or refine this structure.

### Strand A — Foundations of AI systems

Research questions:

1. Which foundational concepts are required before students can responsibly use managed AI platforms?
2. What minimum theory is necessary for production-grade AI systems engineering?
3. Which topics must be taught from first principles rather than through platform abstractions?

Topics to research:

1. Transformer architecture, tokenization, attention, context limits.
2. Pretraining, post-training, RLHF, DPO, SFT, RFT, RLVR.
3. Inference economics: prefill/decode, batching, KV cache, latency/cost tradeoffs.
4. Retrieval foundations: BM25, hybrid search, dense retrieval, reranking, ANN indexes.
5. Vector and semantic search tradeoffs.
6. Model selection, model routing, compression, distillation, quantization.

Deliverable needed from research:

1. A list of the minimal non-negotiable theories.
2. A list of topics that are useful but optional.
3. A list of topics that are product-specific and should be kept in lab notes.

### Strand B — Measurement and evaluation

Research questions:

1. What does a correct evaluation pipeline for AI systems look like?
2. How should students learn to separate retrieval failure, generation failure, and orchestration failure?
3. What statistics are required to defend a product or a model change?

Topics to research:

1. Error analysis workflows.
2. Judge validation and criteria drift.
3. Inter-rater agreement.
4. Confidence intervals, statistical power, paired tests, bootstrap.
5. Online experimentation and guardrail metrics.
6. Retrieval and agent benchmarks.
7. Construct validity and contamination.

Deliverable needed from research:

1. A recommended evaluation curriculum sequence.
2. A template for evaluation artifacts students should produce.
3. A recommended set of benchmark exercises and rubrics.

### Strand C — Building and operating AI systems

Research questions:

1. What architecture patterns are required for real deployments?
2. What should students learn about gateways, orchestration, observability, and resilience?
3. What is the minimal systems knowledge required to deploy safely and debug effectively?

Topics to research:

1. Agent loops and orchestration.
2. Tool calling, MCP, A2A, OpenAPI integration.
3. Durable workflows and long-running execution.
4. Structured outputs and constrained decoding.
5. Observability and tracing.
6. Gateway patterns, caching, quotas, circuit breakers.
7. Deployment, release, canary, rollback, migration.

Deliverable needed from research:

1. A set of lab-worthy system builds.
2. A clear definition of which Microsoft tools are core and which are optional.
3. A minimal production architecture diagram for student projects.

### Strand D — Adversary and society

Research questions:

1. What threats are unique to agentic systems?
2. What safety and governance topics are required for responsible production use?
3. What societal and ethical dimensions must be treated as engineering concerns?

Topics to research:

1. Prompt injection and tool poisoning.
2. Data exfiltration and the lethal trifecta.
3. Red-teaming methods and standards.
4. Fairness, accountability, transparency, and documentation artifacts.
5. Human-AI interaction, automation bias, appropriate reliance.
6. Environmental and labour impacts.

Deliverable needed from research:

1. A set of adversarial scenarios students should be able to demonstrate.
2. A set of governance controls students should be able to explain and apply.
3. A recommended ethics assignment format that is not just a reflective essay.

### Strand E — Engagement craft and FDE practice

Research questions:

1. What makes FDE work distinct from classic software engineering, consulting, or solutions architecture?
2. Which engagement-craft skills are essential but absent from engineering curricula?
3. How should the course teach discovery, stakeholder work, and product generalization decisions?

Topics to research:

1. Discovery interviews and contextual inquiry.
2. Stakeholder mapping and organizational politics.
3. Data-access negotiation.
4. Domain-language acquisition.
5. Handover and change management.
6. Demo craft and workshop facilitation.
7. Productization vs custom solution tension.

Deliverable needed from research:

1. A course module outline for FDE craft.
2. A list of field readings and case studies.
3. A list of assessable engagement behaviors.

### Strand F — Professional formation and calibration

Research questions:

1. What evidence supports mindset, resilience, and professional formation interventions?
2. What evidence does not support generic growth-mindset training?
3. What methods actually develop students’ judgement under uncertainty?

Topics to research:

1. Error management training.
2. Productive failure.
3. Psychological safety.
4. Self-efficacy.
5. Deliberate practice and its limits.
6. Cognitive apprenticeship.
7. Entrustable professional activities.
8. AI-augmented learning and calibration.

Deliverable needed from research:

1. A recommendation for whether to include a dedicated mindset module at all.
2. A better evidence-based alternative if not.
3. A recommendation for how to assess formation without self-report alone.

---

## 3. Assessment architecture to research

The current assessment architecture is the most important part of the redesign. It should be researched as a coherent system, not as isolated rubrics.

### 3.1 The EPA set

Research should determine whether the current EPA set is correct, needs merging, or needs expansion.

| EPA | Title |
|---|---|
| 1 | Convert an ambiguous customer situation into a scoped, testable build increment |
| 2 | Ship a working increment to a real user within a fixed time-box |
| 3 | Verify AI-generated output before it reaches a user (appropriate reliance) |
| 4 | Decide when not to use AI, and justify it against evidence |
| 5 | Design, run, and correctly interpret an evaluation that decides a ship/no-ship |
| 6 | Diagnose and recover from a production incident |
| 7 | Give and receive design critique that changes an artefact |
| 8 | Recognise the limit of own competence and escalate appropriately |
| 9 | Instrument a system so that its failures are detectable |
| 10 | Hand over a running system with sufficient documentation for another engineer |
| 11 | Communicate technical risk to a non-technical stakeholder |
| 12 | Threat-model an agentic system and demonstrate an exploit against your own build |

### 3.2 Questions the research must answer about the EPA set

For each EPA, the research must answer:

1. Is the EPA truly observable in student work?
2. Is the EPA measurable with a reliable rubric?
3. Is the EPA independently executable, or does it collapse into another EPA?
4. What evidence artifact proves the EPA was achieved?
5. What is the minimum supervision level expected at graduation?
6. What mistake patterns should cause a fail or remediation?

### 3.3 Research needed for each EPA

#### EPA 1 — scoped increment from ambiguity

Research questions:

1. What methods exist for teaching scoping under uncertainty?
2. What evidence shows a student can turn ambiguity into testable work?
3. What rubric distinguishes real scoping from superficial decomposition?

#### EPA 2 — ship a working increment on time

Research questions:

1. What counts as a real increment in a student course?
2. What minimum project scale is meaningful but still assessable?
3. How should timeliness be measured without rewarding reckless shortcuts?

#### EPA 3 — verify AI-generated output

Research questions:

1. What does appropriate reliance look like in code, retrieval, analysis, and documentation?
2. What behaviours show a student can detect AI errors before release?
3. What is a good artifact for proving verification discipline?

#### EPA 4 — decide when not to use AI

Research questions:

1. What are the situations where AI should be deliberately avoided?
2. How can students justify a no-AI decision using evidence rather than preference?
3. How should the course distinguish justified restraint from lack of skill?

#### EPA 5 — design, run, and interpret evaluation

Research questions:

1. What counts as a strong evaluation artifact?
2. What statistical and experimental knowledge is essential here?
3. How should students be judged on interpretation, not just execution?

#### EPA 6 — diagnose and recover from production incidents

Research questions:

1. What production-style failure scenarios are feasible in a course?
2. How do we assess incident analysis, root-cause reasoning, and recovery?
3. How should students communicate incident status under pressure?

#### EPA 7 — give and receive design critique

Research questions:

1. What makes critique actionable rather than performative?
2. How can the course capture whether critique actually changed the artefact?
3. What rubric distinguishes shallow feedback from meaningful feedback?

#### EPA 8 — recognise limits and escalate

Research questions:

1. What observed behaviours show healthy escalation?
2. How do we distinguish confidence from overconfidence?
3. How can the course normalize asking for help while still requiring ownership?

#### EPA 9 — instrument detectability

Research questions:

1. What observability artifacts are realistic at undergraduate level?
2. What signals should every project expose?
3. What is the simplest useful tracing/logging requirement?

#### EPA 10 — handover and documentation

Research questions:

1. What documentation is sufficient for real handover?
2. How should a student prove the system can be taken over by someone else?
3. What should a handover rubric contain?

#### EPA 11 — communicate technical risk

Research questions:

1. What form of oral or written communication best tests this EPA?
2. What is the right audience: faculty, technical peers, or non-technical stakeholders?
3. How do we assess clarity, honesty, and prioritization of risk?

#### EPA 12 — threat model and exploit

Research questions:

1. What agentic threat models should every student know?
2. What exploit demonstration is feasible and ethical in the course context?
3. How should safe red-teaming be supervised and scored?

### 3.4 Entrustment research questions

For the assessment architecture overall, the research must answer:

1. What supervision scale should be used?
2. How many observations are enough before a structural entrustment decision?
3. What should count as ad hoc entrustment versus graduation-level entrustment?
4. Should the final decision be made by a committee, an instructor, or both?
5. What narrative evidence must accompany numeric ratings?

---

## 4. Research workstreams

The work should be split into six parallel workstreams.

### Workstream 1 — Course structure and curriculum standards

Goal: determine the course spine and what must be taught in what order.

Must answer:

1. What do CS2023, CE curricula, and ABET require?
2. What are the minimum durable core topics?
3. Which topics belong in labs, not lectures?
4. Which topics are product-specific and should be versioned separately?

Primary outputs:

1. Strand map.
2. Topic hierarchy.
3. Prerequisite graph.

### Workstream 2 — Technical body of knowledge

Goal: collect the vendor-neutral foundations students need.

Must answer:

1. What is the canonical literature for each foundational topic?
2. Which topics need one lecture, a lab, or a full module?
3. What current research should be taught as a cautionary example?

Primary outputs:

1. Annotated reading list.
2. Topic-by-topic gap table.
3. Recommended lab ideas.

### Workstream 3 — Measurement and evaluation

Goal: define how students learn to measure model and system quality.

Must answer:

1. What should a student be able to measure by hand?
2. What tools are appropriate to use, and what should be implemented from scratch?
3. What counts as enough evaluation rigor for a university course?

Primary outputs:

1. Evaluation-method blueprint.
2. Rubric templates.
3. Benchmark and statistics reading list.

### Workstream 4 — Professional formation and mindset

Goal: identify what kind of formation is evidence-based and assessable.

Must answer:

1. Is a growth-mindset module justified or not?
2. What interventions actually improve judgement and transfer?
3. How should the course build psychological safety, calibration, and self-efficacy?

Primary outputs:

1. Formation-strand recommendation.
2. Assessment artifacts for professional behaviours.
3. Evidence table distinguishing well-supported vs contested claims.

### Workstream 5 — FDE / engagement craft

Goal: identify the missing craft skills that make FDE work distinct.

Must answer:

1. What is the actual labour of the role?
2. What skills are absent from normal engineering education?
3. What readings and cases best teach the work?

Primary outputs:

1. Engagement-craft module outline.
2. Case-study list.
3. Assessable behaviours and rubrics.

### Workstream 6 — Microsoft platform mapping

Goal: determine which Microsoft technologies are core to the course and which are optional.

Must answer:

1. Which Microsoft platform capabilities are missing from the current notes?
2. Which of those are core to production deployment?
3. Which are only current product details and should be moved to lab appendices?

Primary outputs:

1. Microsoft platform gap matrix.
2. Product-to-principle mapping.
3. Versioned lab-manual list.

---

## 5. Research questions by source type

The brief should not just ask for topics; it should ask for the right source types.

### 5.1 Standards and accreditation

Collect:

1. CS2023 knowledge areas, competencies, and dispositions.
2. ABET EAC and CAC outcomes.
3. CE curriculum and SE curriculum requirements.
4. Any proposed changes that affect dispositions, AI, or software engineering.

### 5.2 University exemplars

Collect:

1. Syllabi.
2. Grading breakdowns.
3. Reading lists.
4. AI-use policies.
5. Project descriptions.
6. Oral-defense or viva mechanisms.

Particularly important comparators:

1. CMU Machine Learning in Production / AI Engineering.
2. Stanford CS336.
3. Berkeley LLM agents course.
4. Any similar AI systems / AI engineering / LLMOps course.

### 5.3 Practitioner canon

Collect:

1. Palantir FDE writings.
2. Microsoft ISE / code-with playbook.
3. OpenAI, Anthropic, Sierra, Decagon job descriptions.
4. Relevant engineering blogs and field essays.

### 5.4 Academic literature

Collect:

1. AI engineering and ML-in-production textbooks.
2. Retrieval and IR literature.
3. Eval and measurement literature.
4. Safety, security, and human-AI interaction literature.
5. Professional formation and learning science literature.

---

## 6. Research outputs required

By the end of research, we should have the following artifacts.

### 6.1 Course architecture artifact

Must include:

1. Strand map.
2. Module sequence.
3. Topic prerequisites.
4. Durability classification: durable / semi-durable / perishable.

### 6.2 Assessment architecture artifact

Must include:

1. EPA definitions.
2. Rubric criteria for each EPA.
3. Evidence artifacts students must submit.
4. Entrustment scale and committee process.

### 6.3 Reading list artifact

Must include:

1. Core required readings.
2. Optional enrichment readings.
3. Source type labels.
4. Verification status.

### 6.4 Platform mapping artifact

Must include:

1. Microsoft platform capability map.
2. Gaps relative to production AI practice.
3. Features that are too perishable for lecture use.

### 6.5 Policy artifact

Must include:

1. AI-use policy for students.
2. Oral-defense policy.
3. Collaboration and teamwork policy.
4. Handover and supervision policy.

---

## 7. What the research should probably decide

The research should not just collect facts. It should help decide these open issues:

1. Whether the course should be framed as **AI systems engineering**, **AI engineering**, **FDE practice**, or a hybrid.
2. Whether the course needs a dedicated **professional formation** strand or whether those outcomes should be embedded into every project.
3. Whether the current EPA set should be reduced from 12 to a smaller number.
4. Whether oral defense should be mandatory for all terminal assessments.
5. Whether students should be allowed unrestricted AI use on artifacts but prohibited from using AI in live assessment interactions.
6. Whether the technical core should require one layer-below-the-platform implementation labs.

---

## 8. Deliverable format for the research team

Each workstream should return a memo with the same structure:

1. **Summary finding** — what we now know.
2. **What is still missing** — what was not resolved.
3. **Evidence table** — source, claim, confidence, and whether it is primary or secondary.
4. **Design implications** — what this means for course structure or assessment.
5. **Open questions** — what still needs a follow-up pass.

Every memo must explicitly distinguish:

1. **Verified**.
2. **Likely but not fully verified**.
3. **Contested**.
4. **Product-specific and likely to age out quickly**.

---

## 9. Suggested immediate next research order

If the team needs a sequence, use this one:

1. **ABET + CS2023 + university exemplars** to lock the legitimate course shape.
2. **Evaluation science** to define what it means to pass.
3. **AI systems foundations** to determine the technical core.
4. **FDE craft canon** to determine the distinctive engagement layer.
5. **Professional formation literature** to decide whether and how to include mindset.
6. **Microsoft platform delta mapping** to separate durable platform truths from current product detail.

---

## 10. Final design target

The target deliverable from this research is not a reading list. It is a course that can credibly claim all of the following:

1. It teaches the durable foundations of AI systems engineering.
2. It teaches students how to measure whether those systems work.
3. It teaches students how to deploy and defend those systems in production.
4. It teaches the human and organizational work of forward deployment.
5. It can defend its assessment design to faculty and accreditation reviewers.

If the research cannot support those five claims, the course is still a vendor course, not a degree-level course.
