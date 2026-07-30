# Course Catalogue

> All 36 courses across 9 quarters. Four courses per quarter at five quarter-units each: 20 units per quarter, 180 across the programme, equivalent to 120 semester credits. Strand codes are defined in [Home](/wiki/Home.md).

**Every course carries a platform anchor** — the named Microsoft AI Platform service it is taught against — and every course paragraph states what the student actually builds on it. The anchors are taken verbatim from the [Microsoft AI Platform Map](/wiki/program/11-Microsoft-AI-Platform-Map.md), which is authoritative where this page and that one differ. A course with no anchor does not exist in this programme.

## Strand codes

`CF` Computing Foundations · `SY` Systems · `MS` Mathematics and Statistical Inference · `IS` Intelligent Systems · `ME` Measurement and Evaluation · `SG` Security, Safety and Governance · `PE` Professional Formation and Engagement Craft

---

## Year 1 — Foundations and Fluency

### Q1 · Machines, Programs and Proof — [quarter page](/wiki/quarters/Q1.md)

| Code | Title | Strand | Prereq | Platform anchor |
|---|---|---|---|---|
| CF101 | Program Construction and Reasoning | CF | — | GitHub Copilot agent mode; custom instructions as executable specification |
| MS101 | Discrete Structures and Proof | MS | — | Copilot as a proof-checking adversary; Learn MCP for definition grounding |
| SY101 | How Computers Compute | SY | — | Azure MCP Server read-only resource inspection; the machine you are billed for |
| PE101 | Evidence, Inquiry and the Engineering Self | PE | — | Learn MCP Server as the citation discipline; the jagged frontier as first content |

**CF101** Composition, abstraction, recursion, invariants, and reasoning about program behaviour before running it. Testing as hypothesis rather than as ritual. Taught against GitHub Copilot in agent mode: the student builds working programs from prompts and then writes the repository custom instructions file that makes the agent produce conforming work without correction, which is the first executable specification of the programme.
**MS101** Logic, sets, relations, functions, induction, combinatorics, graphs. Proof as communication. Copilot is used as an adversary rather than an author — the student writes a proof and instructs the agent to find the gap — and the artefact is a proof portfolio paired with the record of which gaps the agent found and which it invented.
**SY101** Representation, the memory hierarchy, instruction execution, and why abstractions leak. Built bottom-up to a working simulated machine. The student then drives the Azure MCP Server in read-only mode from agent mode to inventory the real machine the substrate is billed for, and writes the account of what the abstraction hid.
**PE101** How to read a paper, how to tell a claim from a finding, calibration of confidence, the formation of engineering self-efficacy, and the programme's own design rationale taught explicitly. The Learn MCP Server is the citation discipline made operable: it searches Microsoft's official documentation and fetches whole articles, and the student builds a claim audit that separates what a source states from what the agent supplied from recall.

### Q2 · Structure and Scale — [quarter page](/wiki/quarters/Q2.md)

| Code | Title | Strand | Prereq | Platform anchor |
|---|---|---|---|---|
| CF102 | Data Structures and Representation | CF | CF101, MS101 | Copilot-generated implementations measured against a cost model the student states first |
| MS102 | Linear Algebra for Computing | MS | MS101 | Foundry embedding models; similarity as a geometric object you can call |
| SY102 | Operating Systems and Resource Management | SY | SY101 | Azure compute and memory limits as the concrete instance of contention |
| PE102 | Technical Communication and Contextual Inquiry | PE | PE101 | Instructions files as writing for a reader who will act; substrate user interviews |

**CF102** Sequences, trees, hashing, graphs, amortised reasoning, and the cost model that makes choices between them non-arbitrary. The student states the cost model first, then has Copilot generate the implementations, then measures — so that the agent's output is evidence against a prediction rather than a starting point.
**MS102** Vectors, matrices, spaces, projection, decomposition, and geometric intuition for similarity — the mathematical substrate of everything in `IS`. A deployed Foundry embedding model turns that geometry into something callable: an embedding is a vector of floating-point numbers whose distance correlates with semantic similarity, and the student builds a similarity tool and finds the pairs where the distance and the meaning disagree.
**SY102** Processes, scheduling, virtual memory, files, and the resource contention that later reappears as inference economics. Contention is met on real Azure compute and memory limits rather than on a diagram, and the student builds a workload that provokes one.
**PE102** Writing for a reader who will act on it; interviewing to discover rather than to confirm. First contact with the substrate's real users. The instructions file is the same skill in a second register — writing for a reader who will act, where the reader is an agent and non-conformance is visible immediately — and the student ships one alongside the interview record.

### Q3 · Algorithms and Uncertainty — [quarter page](/wiki/quarters/Q3.md)

| Code | Title | Strand | Prereq | Platform anchor |
|---|---|---|---|---|
| CF103 | Algorithms, Complexity and Intractability | CF | CF102, MS101 | Copilot's failure on genuinely hard problems; the frontier, located empirically |
| MS103 | Probability and Statistical Inference | MS | MS102 | Foundry evaluation score distributions as the first real sampling problem |
| SY103 | Data Modelling and Database Systems | SY | CF102 | Azure AI Search index schema as a data model with an access-control column |
| ME101 | Measurement, Error and Evidence | ME | MS103 co-req | Foundry evaluators; **no agreement-with-human data is published for any of them** |

**CF103** Design paradigms, asymptotic analysis, reductions, hardness, and knowing when to stop looking for an exact algorithm. This is where the jagged frontier stops being a reading and becomes a measurement: the student builds a set of problems on which Copilot is confidently and demonstrably wrong, and the set is the course's contribution to the programme's running frontier map.
**MS103** Probability, estimation, sampling distributions, intervals, hypothesis testing, and what an interval does and does not license. The first real sampling problem is supplied by the platform rather than by a textbook — a Foundry evaluation emits a distribution of scores across repetitions, which exist to detect non-deterministic behaviour, and the student builds the interval that distribution actually supports.
**SY103** Relational modelling, normalisation, transactions, indexing, and the query planner as an optimisation system. An Azure AI Search index schema is introduced here as a data model that carries an access-control column: permission metadata is captured during indexing and enforced at query time, and the student builds the schema and states what a stale row in it would do.
**ME101** The measurement spine begins. Construct validity, error decomposition, instrument design, and why a number without an interval is not a result. Foundry's built-in evaluators are the first instruments the student characterises rather than uses, and the course's central observation is that **no agreement-with-human data is published for any of them** — so every judged score the platform emits is uncalibrated, and the student is required to say so in writing.

---

## Year 2 — Systems, Learning, Measurement

### Q4 · Concurrency and Correctness — [quarter page](/wiki/quarters/Q4.md)

| Code | Title | Strand | Prereq | Platform anchor |
|---|---|---|---|---|
| CF201 | Programming Languages and Type Systems | CF | CF103 | Tool schemas as types; MCP tool definitions as an interface contract |
| SY201 | Concurrency and Distributed Systems | SY | SY102, CF103 | API Management load balancing, circuit breaking, partial failure |
| MS201 | Optimisation and Numerical Methods | MS | MS102, MS103 | Foundry fine-tuning; optimisation failure that looks like a modelling error |
| PE201 | Requirements, Domain Modelling and Negotiation I | PE | PE102 | Substrate stakeholder work; quota negotiation as a real constraint |

**CF201** Semantics, type systems as lightweight proof, effects, and language design as a decision about which errors become impossible. An MCP tool definition is a type declaration whose consumer is a model rather than a compiler, and the student builds an MCP server whose schema makes a category of wrong call unexpressible — then finds the wrong call the schema still permits.
**SY201** Threads, synchronisation, consistency models, partial failure, consensus, and the fact that distributed correctness is a specification problem. Azure API Management supplies the concrete instance: backend pools, load balancing and circuit-breaking policies in front of multiple model deployments, where partial failure is a policy decision the student configures and then provokes.
**MS201** Gradient methods, convexity, conditioning, numerical stability, and the failure modes that look like modelling errors and are not. Foundry's fine-tuning path is where this becomes expensive rather than theoretical: the platform offers supervised, direct-preference and reinforcement techniques, and the student runs one, reads the loss curve, and distinguishes an optimisation failure from a data failure.
**PE201** Contextual inquiry, domain-driven modelling, ubiquitous language, and principled negotiation. See [research/05-fde-craft/](/research/05-fde-craft/collected-materials.md). The negotiation has a real counterparty and a real constraint: quota limits the maximum that may be deployed and is explicitly not a guarantee that capacity exists, so the student negotiates for something the platform may refuse to supply and writes the position they will hold if it does.

### Q5 · Learning Machines — [quarter page](/wiki/quarters/Q5.md)

| Code | Title | Strand | Prereq | Platform anchor |
|---|---|---|---|---|
| IS201 | Machine Learning Foundations | IS | MS201, MS103 | Foundry model catalogue, deployment, and the fine-tuning path |
| ME201 | Evaluation Design and Statistical Defensibility | ME | ME101, MS103 | Foundry cloud evaluation; **"how you split determines what you're evaluating"** |
| SY202 | Networks and Service Architecture | SY | SY201 | API Management AI gateway; token limit policy; semantic caching |
| SG201 | Threat Modelling and Secure Design | SG | SY201 | Defender AI posture management; the four IaC checks as a minimum baseline |

**IS201** Supervised learning, generalisation, regularisation, model selection, and the bias-variance account of why validation exists. The Foundry model catalogue is where model selection acquires a price and a deployment decision: the student deploys from the catalogue, evaluates, and states what the fine-tuning path would buy before being permitted to take it.
**ME201** Evaluation as workflow rather than benchmark. Power, clustering, interval construction on realistic data, and evaluation governance. Anchored on [research/03-measurement-evaluation/](/research/03-measurement-evaluation/collected-materials.md). Run against Foundry cloud evaluation, whose own documentation states the course's central point plainly — **how you split a conversation determines what you are evaluating** — with last-turn the default, and the student builds the same evaluation under two split strategies and reports the two different numbers.
**SY202** Protocols, service boundaries, latency budgets, caching, and load management. The Azure API Management AI gateway makes tokens the scarce resource rather than requests: the student builds the gateway, sets a token-limit policy per consumer, and adds semantic caching, which requires an external RediSearch-compatible cache and therefore has an architecture rather than a switch.
**SG201** Trust boundaries, adversary models, authentication and authorisation, and threat modelling as a design activity rather than a review gate. The threat model is built against the cohort's own deployed stack, and is then checked against the posture recommendations Defender emits for it — the point being the gap between the two, since a recommendation engine has no model of what the student is trying to protect.

### Q6 · Language and Retrieval — [quarter page](/wiki/quarters/Q6.md)

| Code | Title | Strand | Prereq | Platform anchor |
|---|---|---|---|---|
| IS202 | Deep Learning and Transformer Architecture | IS | IS201 | Foundry model catalogue across families; deployment as an architectural choice |
| IS203 | Information Retrieval and Vector Search | IS | IS201, CF103 | Azure AI Search: vector, hybrid, semantic ranking, the chunking trap |
| ME202 | Human and Model Judgement | ME | ME201 | Foundry LLM-as-judge evaluators as instruments to be characterised |
| PE202 | Teams, Safety and Error Management | PE | PE201 | Copilot as a team member with a jagged frontier; error management on agent output |

**IS202** Representation learning, attention, transformer architecture, training dynamics, alignment and preference optimisation, and documented planning limitations. Sources in [research/02-technical-foundations/](/research/02-technical-foundations/collected-materials.md). The Foundry model catalogue spans several families, so deployment stops being a formality and becomes an architectural choice the student must defend: the artefact is the same task served by two families with the differences in behaviour characterised rather than asserted.
**IS203** Lexical ranking baselines, dense retrieval, approximate nearest neighbour structures, quantisation, and the empirical case for zero-shot generalisation testing. Built on Azure AI Search across vector, hybrid and semantic ranking, and the student ships an index and then walks into the chunking trap deliberately — because a chunked document that leaves its permission metadata behind is the failure the next quarter's governance course exists to prevent.
**ME202** Judge bias and its mitigations, criteria discovery and drift, rater variance, narrative substantiation, and validating the validator. Foundry's judge evaluators are the instruments under characterisation, and the course's hardest fact is one the vendor's documentation supplies by omission: no agreement-with-human data is published for any of them, so the student must build the agreement study themselves or state that the score is uncalibrated.
**PE202** Psychological safety, error management training, productive failure, and the empirical evidence on AI-assisted productivity and the jagged frontier. Copilot is treated here as a team member whose competence is uneven in ways not predictable from task difficulty, and the student runs an error clinic on the agent's output rather than on their own — including the case where review passed something that was wrong.

---

## Year 3 — Production, Adversary, Entrustment

### Q7 · Serving and Economics — [quarter page](/wiki/quarters/Q7.md)

| Code | Title | Strand | Prereq | Platform anchor |
|---|---|---|---|---|
| IS301 | Inference Economics and Serving Systems | IS | IS202, SY202 | Provisioned throughput; **quota is not capacity**; spillover; hourly billing |
| SY301 | Production Platform Engineering | SY | SY202, SY201 | API Management AI gateway end to end; Bicep; Azure MCP Server operations |
| ME301 | Evaluation in the Release Workflow | ME | ME202 | Foundry cloud evaluation in CI; trace evaluation; pre-existing response scoring |
| SG301 | Data Governance and Access Control | SG | SG201, SY103 | AI Search document-level ACLs; Purview DSPM for AI; the two-stage check |

**IS301** Memory management for serving, batching, throughput and latency trade-offs, capacity as an economic commitment, and quota as distinct from capacity. Taught on Foundry provisioned throughput, where every one of those is a fact rather than a metaphor: billing is hourly from creation to deletion regardless of tokens consumed, quota limits what may be deployed and is not a capacity guarantee, available capacity moves through the day, and spillover redirects a request only once the platform has already returned a non-200. The student sizes a deployment, is refused it, and writes the argument that follows.
**SY301** Gateways, quota enforcement, load balancing, circuit breaking, caching, observability, and infrastructure as code. Built end to end on the API Management AI gateway, declared in Bicep authored in agent mode, and operated through the Azure MCP Server — so the student's infrastructure is a prompt record and a reviewed artefact at the same time, which is the point at which this programme's specification discipline and its toolchain become the same thing.
**ME301** Regression evaluation as a release gate, offline-online divergence, monitoring design, and evaluation of pre-existing traces. Foundry cloud evaluation runs in the substrate's CI, and the platform's ability to score pre-existing responses without re-running the agent is what makes the gate affordable — the student builds the gate, then finds the release it would have passed and should not have.
**SG301** Document-level authorisation enforced at retrieval, permission metadata staleness, sensitivity classification, and posture management for data and workloads. Built on Azure AI Search document-level access control, where enforcement is a two-stage check — service-level access for the calling application, then per-document permissions validated against the caller's own Entra token — and where the generally available option is simple string matching while the properly authenticated options are preview. The student implements one, breaks it with a stale permission, and states which stage failed.

### Q8 · Agency and Adversary — [quarter page](/wiki/quarters/Q8.md)

| Code | Title | Strand | Prereq | Platform anchor |
|---|---|---|---|---|
| IS302 | Agentic Systems, Tools and Orchestration | IS | IS301 | Microsoft Agent Framework; Foundry Agent Service; MCP; Copilot Studio |
| SG302 | Adversarial ML and Agent Security | SG | SG301, IS302 co-req | Prompt injection against a real agent; wallet attacks; agent identity |
| ME302 | Monitoring, Drift and Incident Forensics | ME | ME301 | Foundry observability and tracing; Defender AI alerts |
| PE301 | Change, Stakeholders and Risk Communication | PE | PE202, PE201 | Real substrate stakeholders; a real cost line; a real refusal |

**IS302** Tool invocation, orchestration patterns, protocol-mediated interoperability, multi-agent control flow, and the decomposition of tool failure into selection, input, execution and output utilisation. The student builds a multi-agent system on the Microsoft Agent Framework, whose built-in orchestrations are sequential, concurrent, handoff, group chat and Magentic, connects it to tools over MCP, and then argues the case Microsoft's own reference architecture makes against them — that multiple agents add coordination complexity and latency a single agent would not have incurred.
**SG302** Prompt injection, tool abuse, data poisoning, model extraction, resource-exhaustion attacks, and the construction of a safety case. Prompt injection is named as a first-order risk in Foundry's own security guidance, and here it is run rather than described: the student attacks the cohort's deployed agent, and the safety case they then write has to survive the attack they just performed.
**ME302** Drift detection, alerting design, detectability as a system property, incident forensics, and blameless post-incident analysis. Foundry's observability surface — evaluation, tracing and monitoring together, with continuous evaluation and the agent monitoring dashboard currently in preview — is the instrumentation under study, and the student builds the trace that would have made a real substrate incident visible before a user reported it.
**PE301** Change management, stakeholder analysis, communicating risk to non-technical decision-makers, and negotiating scope under organisational constraint. The stakeholders are the substrate's, the cost line is the substrate's monthly ceiling, and the refusal is real — the student asks for something the budget or the platform will not give, and communicates the consequence to the person who has to accept it.

### Q9 · Deployment and Entrustment — [quarter page](/wiki/quarters/Q9.md)

| Code | Title | Strand | Prereq | Platform anchor |
|---|---|---|---|---|
| CAP390 | Forward Deployment Capstone | all | Q8 complete | The whole stack, handed over |
| ME390 | Ship / No-Ship Decision Practicum | ME | ME302 | The whole stack, handed over |
| PE390 | Handover and Professional Entrustment | PE | PE301 | The whole stack, handed over |
| SG390 | Safety Case and Responsible Disclosure | SG | SG302 | The whole stack, handed over |

**CAP390** A deployment engagement with a real external stakeholder, from contextual inquiry through delivery. The comprehensive experience required by the proposed accreditation criteria. No new service is introduced: the student architects the solution from prompts across the capacity, traffic, retrieval and governance layers already taught, and the capstone artefact carries the prompt record, the intervention record and the frontier statement that every build in this programme carries.
**ME390** Repeated bounded ship/no-ship decisions on the live substrate under time and information constraints, each defended orally. The primary entrustment occasion. Every decision is taken against a real evaluation result from the substrate's own Foundry evaluation gate and a real cost position against the monthly ceiling, and the student's uncalibrated-judge concession from ME101 has to appear in the defence or the defence is incomplete.
**PE390** Handover as an engineered artefact: what transfers, to whom, with what warranty, and what the receiving organisation must be able to do without you. The handover includes the repository's instructions and prompt files, because a receiving organisation that inherits a system without inheriting the specifications that produce conforming changes to it has inherited less than it thinks.
**SG390** Constructing and defending a safety case; disclosure ethics; residual risk statement. The safety case is made for a system running on a named platform whose posture tooling publishes no detection rate and whose judge evaluators publish no agreement figure, so the residual-risk statement has to be honest about instruments the vendor has not characterised.

**On Q9's anchor.** The [Microsoft AI Platform Map](/wiki/program/11-Microsoft-AI-Platform-Map.md) defines course-level anchors for thirty-two of the thirty-six courses and gives Q9 only the quarter-level anchor reproduced above. That is recorded here rather than filled in, because inventing four course anchors for the quarter whose subject is that nothing new is introduced would misrepresent the design. If Q9 later needs course-level anchors, they are added to the map first and copied here second.

---

## Credit accounting

| Strand | Courses | Quarter units | Semester equivalent |
|---|---|---|---|
| CF Computing Foundations | 5 | 25 | 16.7 |
| SY Systems | 7 | 35 | 23.3 |
| MS Mathematics and Statistical Inference | 5 | 25 | 16.7 |
| IS Intelligent Systems | 6 | 30 | 20.0 |
| ME Measurement and Evaluation | 6 | 30 | 20.0 |
| SG Security, Safety and Governance | 4 | 20 | 13.3 |
| PE Professional Formation and Engagement Craft | 6 | 30 | 20.0 |
| Capstone (counted in `all`) | 1 | 15 | 10.0 |
| **Total** | **36** | **180** | **120** |

*The capstone's units are drawn from the strands it integrates; the strand rows above exclude it to avoid double counting. Accreditation-relevant totals are reconciled in [Outcomes and Accreditation Map](/wiki/program/01-Outcomes-and-Accreditation-Map.md).*

## Design notes

- **Measurement runs from Q3 to Q9 without a gap.** This is the deliberate consequence of treating evaluation as the spine rather than as a topic. See [research/01-course-structure/10-gap-analysis-and-course-architecture.md](/research/01-course-structure/10-gap-analysis-and-course-architecture.md).
- **Professional formation appears in seven of nine quarters.** Strands 5 and 6 of the source architecture cannot be folded into the technical arc without disappearing, and structural separation is what makes them assessable.
- **Security enters at Q5, not Q9.** Threat modelling is a design activity; teaching it after the system exists teaches it as review.
- **No course is named after a product.** ~~Platform material appears inside SY301, SG301 and IS302 as instances of durable problems.~~ **Amended when the platform anchors were added.** Platform material now appears in every course, because a course that never puts the student in front of the thing that solves the problem can be read with approval and not followed. The first clause is unchanged and is the one doing the work: a course is named after the durable problem, the anchor names the service the problem is met on, and the [Durable and Perishable Register](/wiki/program/09-Durable-and-Perishable-Register.md) is what keeps the second from being assessed as though it were the first. The original sentence is struck through rather than deleted so that the narrowing of this refusal remains legible.
- **Every course states what the student builds.** This is a consequence of the same correction and is the operative test of it. A course paragraph that names a service and does not say what is produced on it has described a demonstration, and the [Copilot Practice Standard](/wiki/program/12-Copilot-Practice-Standard.md) does not accept one.
- **Every course but one takes a named share of the agent configuration material.** The per-course allocation is carried on the [Agent Configuration Standard](/wiki/program/13-Agent-Configuration-Standard.md) rather than duplicated here, and each share is chosen to be the part that course is already competent to assess — conformance in CF101, denominators in MS103, inter-rater work in ME202, a declarative control's dependency set in SG201. **MS102 takes none, and the table records the omission rather than inventing a share**, because an allocation that covers every course by construction is not an allocation.

## Related pages

- [Microsoft AI Platform Map](/wiki/program/11-Microsoft-AI-Platform-Map.md)
- [Copilot Practice Standard](/wiki/program/12-Copilot-Practice-Standard.md)
- [Agent Configuration Standard](/wiki/program/13-Agent-Configuration-Standard.md)
- [FDE Delivery Standard](/wiki/program/14-FDE-Delivery-Standard.md)
- [Module Map](/wiki/program/07-Module-Map.md)
- [Seminar Day Index](/wiki/program/08-Seminar-Day-Index.md)
- [Outcomes and Accreditation Map](/wiki/program/01-Outcomes-and-Accreditation-Map.md)
