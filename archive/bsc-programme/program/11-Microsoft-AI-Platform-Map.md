# Microsoft AI Platform Map

> Every course in this programme is tied to at least one named service in the Microsoft AI Platform, and every seminar day is executed against one. This page is the canonical mapping. It is also the most perishable page in the wiki, and it says so in its own terms.

## Why this page exists

A programme can teach the shape of a problem without ever putting a student in front of the thing that solves it. This one did, for its first draft, and the result was a design that could be read with approval and not followed.

The correction is not decoration. **A student cannot learn that quota is not capacity by being told; they learn it by asking for a provisioned deployment and being refused one.** They cannot learn that a retrieval index enforces permissions against indexed metadata rather than live source permissions until they have watched a stale ACL return an authorised-looking result they were not entitled to. Every durable idea in this programme has a place on this platform where it becomes concrete, and the mapping below is where.

## The four layers

The mapping is organised by the four-layer synthesis in [research/06-microsoft-platform/](/research/06-microsoft-platform/collected-materials.md), which is that repository folder's own construction and is not vendor doctrine. It is used here as an organising device because **each layer fails in a way the layer above cannot detect**, which is the programme's argument for teaching the whole stack rather than the application layer.

| Layer | Question it answers | Primary services |
|---|---|---|
| **Capacity** | What can actually run, and what does it cost | Foundry model deployments, provisioned throughput, quota |
| **Traffic** | Who gets to use it, at what rate, and what happens under contention | Azure API Management AI gateway |
| **Retrieval** | What may be returned, to whom | Azure AI Search, document-level access control |
| **Governance** | What exists, what is flowing through it, and who authorised that | Purview DSPM for AI, Defender AI posture management |

Agent building and agent evaluation run vertically through all four, because a build-path choice constrains distribution and an evaluation split strategy determines what every quality number means.

## The toolchain every student uses

Three things, on every day, from the first week.

**GitHub Copilot in agent mode.** The programme's primary instrument. Students do not learn a platform by memorising its portal; they learn it by asking an agent to operate it and then checking what it did. See the [Copilot Practice Standard](/archive/bsc-programme/program/12-Copilot-Practice-Standard.md) for the discipline this requires.

**MCP servers, as the connection between the agent and the platform.** Three are standing:

- **Microsoft Learn MCP Server** — grounding. Used from Q1 for documentation lookup, and it is the mechanism by which the programme's own no-unverified-claims rule becomes operable for a student rather than aspirational.
- **Azure MCP Server** — resource operations. Used from Q4 onward.
- **Foundry MCP Server** — model, agent and evaluation operations. Used from Q5 onward, and it is the specific mechanism behind this programme's claim that a student can architect a solution from prompts.

**A repository that configures the agent.** Custom instructions and prompt files are not conveniences here; they are **specifications in executable form**, and the programme already assesses specifications. A student who can write a specification and cannot write an instructions file that produces conforming work has not understood what a specification is for. This equivalence is taught explicitly at S006 and is load-bearing from there on.

That equivalence now has a published worked example at scale, and it carries its own standard: see the [Agent Configuration Standard](/archive/bsc-programme/program/13-Agent-Configuration-Standard.md), grounded in [research/06-microsoft-platform/hve-core-repository.md](/research/06-microsoft-platform/hve-core-repository.md). **The corpus is used for two things and they pull in opposite directions.** It is the demonstration that agent behaviour can be authored, versioned, packaged and conformance-checked like any other engineering artefact — and it is the demonstration that **a complete control system can exist with no committed evidence that it works**, because at the revision this programme read, its graders had no result corpus while its prose used the vocabulary of proven benefit. Both readings are taught, the second one harder than the first, and the corpus is cited only against a pinned commit, package version, host and model.

## Course-to-service mapping

Every course names at least one service. Where a course's service is introduced before its layer is taught, the course uses it as an instance and defers the mechanism, per the cross-course deferral rule.

### Year 1

| Course | Platform anchor |
|---|---|
| CF101 Program Construction and Reasoning | GitHub Copilot agent mode; custom instructions as executable specification |
| MS101 Discrete Structures and Proof | Copilot as a proof-checking adversary; Learn MCP for definition grounding |
| SY101 How Computers Compute | Azure MCP Server read-only resource inspection; the machine you are billed for |
| PE101 Evidence, Inquiry and the Engineering Self | Learn MCP Server as the citation discipline; the jagged frontier as first content |
| CF102 Data Structures and Representation | Copilot-generated implementations measured against a cost model the student states first |
| MS102 Linear Algebra for Computing | Foundry embedding models; similarity as a geometric object you can call |
| SY102 Operating Systems and Resource Management | Azure compute and memory limits as the concrete instance of contention |
| PE102 Technical Communication and Contextual Inquiry | Instructions files as writing for a reader who will act; substrate user interviews |
| CF103 Algorithms, Complexity and Intractability | Copilot's failure on genuinely hard problems; the frontier, located empirically |
| MS103 Probability and Statistical Inference | Foundry evaluation score distributions as the first real sampling problem |
| SY103 Data Modelling and Database Systems | Azure AI Search index schema as a data model with an access-control column |
| ME101 Measurement, Error and Evidence | Foundry evaluators; **no agreement-with-human data is published for any of them** |

### Year 2

| Course | Platform anchor |
|---|---|
| CF201 Programming Languages and Type Systems | Tool schemas as types; MCP tool definitions as an interface contract |
| SY201 Concurrency and Distributed Systems | API Management load balancing, circuit breaking, partial failure |
| MS201 Optimisation and Numerical Methods | Foundry fine-tuning; optimisation failure that looks like a modelling error |
| PE201 Requirements, Domain Modelling and Negotiation I | Substrate stakeholder work; quota negotiation as a real constraint |
| IS201 Machine Learning Foundations | Foundry model catalogue, deployment, and the fine-tuning path |
| ME201 Evaluation Design and Statistical Defensibility | Foundry cloud evaluation; **"how you split determines what you're evaluating"** |
| SY202 Networks and Service Architecture | API Management AI gateway; token limit policy; semantic caching |
| SG201 Threat Modelling and Secure Design | Defender AI posture management; the four IaC checks as a minimum baseline |
| IS202 Deep Learning and Transformer Architecture | Foundry model catalogue across families; deployment as an architectural choice |
| IS203 Information Retrieval and Vector Search | Azure AI Search: vector, hybrid, semantic ranking, the chunking trap |
| ME202 Human and Model Judgement | Foundry LLM-as-judge evaluators as instruments to be characterised |
| PE202 Teams, Safety and Error Management | Copilot as a team member with a jagged frontier; error management on agent output |

### Year 3

| Course | Platform anchor |
|---|---|
| IS301 Inference Economics and Serving Systems | Provisioned throughput; **quota is not capacity**; spillover; hourly billing |
| SY301 Production Platform Engineering | API Management AI gateway end to end; Bicep; Azure MCP Server operations |
| ME301 Evaluation in the Release Workflow | Foundry cloud evaluation in CI; trace evaluation; pre-existing response scoring |
| SG301 Data Governance and Access Control | AI Search document-level ACLs; Purview DSPM for AI; the two-stage check |
| IS302 Agentic Systems, Tools and Orchestration | Microsoft Agent Framework; Foundry Agent Service; MCP; Copilot Studio |
| SG302 Adversarial ML and Agent Security | Prompt injection against a real agent; wallet attacks; agent identity |
| ME302 Monitoring, Drift and Incident Forensics | Foundry observability and tracing; Defender AI alerts |
| PE301 Change, Stakeholders and Risk Communication | Real substrate stakeholders; a real cost line; a real refusal |

## Day-to-service mapping

The full mapping is carried on each seminar day's own page in the header block, which names the **Platform anchor** and the **MCP servers in use**. A day with neither does not exist in this programme.

Quarter-level anchors:

- **Q1** GitHub Copilot agent mode · Learn MCP Server
- **Q2** Foundry embeddings · Azure MCP Server (read)
- **Q3** Azure AI Search · Foundry evaluators
- **Q4** API Management · Azure MCP Server (write) · Bicep
- **Q5** Foundry models, deployment, evaluation · Defender AI posture
- **Q6** Foundry model catalogue · Azure AI Search vector and hybrid retrieval
- **Q7** Provisioned throughput · AI gateway · Foundry cloud evaluation in CI
- **Q8** Agent Framework · Foundry Agent Service · MCP · Purview · Defender
- **Q9** The whole stack, handed over

## What must not be taught as fact

Carried forward from [research/06-microsoft-platform/](/research/06-microsoft-platform/collected-materials.md) and binding on every page in this wiki:

- **The 36% retrieval improvement claim.** No benchmark, metric definition, baseline or interval accompanies it anywhere. It is not citable.
- **"Agents launch in weeks rather than months."** Not a finding.
- **The five-stage maturity model.** No causal evidence.
- **Any analyst projection.**
- **Any Foundry evaluator's agreement with human judgement.** None is published. Until it is, **every judged score in this stack is uncalibrated**, and students are taught to say so.
- **Any detection or false-positive rate for Purview or Defender.** None is published.

The programme's rule that no effect size is asserted for an unverified source applies to vendor material exactly as it applies to research literature. **The asymmetry students are taught to notice is that every source in this folder states a latency or a sampling bound and none states an accuracy** — a property consistent enough across seven independent sources to be a feature of vendor material as a genre.

**One source is the instructive exception and it is not an exception to the rule.** The configuration corpus behind the [Agent Configuration Standard](/archive/bsc-programme/program/13-Agent-Configuration-Standard.md) declares its own limits in its own documentation: that its behavioural graders test output shape rather than correctness, that some of its gates are advisory, and that the behaviour of everything it ships depends on a host it does not control. It is still silent on accuracy, because no outcome is measured anywhere in it. **What differs is only whether the reader has to find the gap unaided**, and a source that names its own limits is the better teaching object precisely because its candour cannot be mistaken for evidence.

## Perishability

**This is the most perishable page in the wiki, and the entire platform layer of every seminar day is perishable with it.** Two of the six sources behind the mapping were already labelled classic or superseded at the moment they were read, and one capability set moves to a different licence in 2026.

The programme's response is structural rather than hopeful:

1. **Every seminar day separates its durable claim from its platform instance,** in the day's own perishability register. The durable claim is assessed. The platform instance is the vehicle.
2. **Verification before every offering**, not once a term. The [Durable and Perishable Register](/archive/bsc-programme/program/09-Durable-and-Perishable-Register.md) carries the check.
3. **Where a service is renamed or replaced, the day is re-anchored and the durable claim is unchanged.** If a re-anchoring requires the durable claim to change, that is a finding about the claim and is recorded.
4. **Preview status is taught, not hidden.** Students learn that the generally available access-control approach is the one the documentation itself calls a workaround, and that choosing correctness sometimes means accepting preview terms.

## Open questions

- **How much of this can a course lab actually run?** Provisioned throughput, Purview assessments and Fabric configuration have licensing and tenant-administration prerequisites a university may not hold. Where a capability cannot be run, the day states that it is demonstrated rather than operated, and the specification does not assess it.
- **Does teaching one vendor's stack in depth produce transferable understanding or product familiarity?** The durable extractions are the hedge. Whether the hedge works is untested, and it is the largest open risk in this redesign.
- **What happens to a graduate whose entire practical formation is on one platform?** The programme's answer is that the four layers, their invisible-upward failure modes, and the discipline of characterising your own tools are platform-independent — but that answer is asserted, not demonstrated, and it is recorded here as asserted.

## Related pages

- [Copilot Practice Standard](/archive/bsc-programme/program/12-Copilot-Practice-Standard.md)
- [Agent Configuration Standard](/archive/bsc-programme/program/13-Agent-Configuration-Standard.md)
- [Course Catalogue](/archive/bsc-programme/program/06-Course-Catalogue.md)
- [Durable and Perishable Register](/archive/bsc-programme/program/09-Durable-and-Perishable-Register.md)
- [Substrate and Infrastructure](/archive/bsc-programme/program/10-Substrate-and-Infrastructure.md)
- [research/06-microsoft-platform/](/research/06-microsoft-platform/collected-materials.md)
