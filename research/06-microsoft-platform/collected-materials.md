# Collected Materials — Microsoft Platform Mapping

## Working synthesis
This is the repository's **perishable workstream**. Every external source in it is vendor documentation that will be rewritten, renamed or superseded, and two of the pages read for these notes were already labelled classic or superseded at the moment of reading. That fact is not a weakness of the folder; it is its defining constraint, and the folder's job is to extract from perishable material the things that are not perishable, and to make explicit which is which.

Read across the six sources, a coherent architecture emerges that nobody wrote down in one place. It has four layers and they are not interchangeable. **Capacity** sits at the bottom: reserved throughput, quota that is not capacity, and hourly billing that punishes elastic scaling. **Traffic** sits above it: a gateway that meters tokens, caches semantically, load-balances across backends, breaks circuits and emits per-consumer metrics. **Retrieval** sits above that: document-level access control enforced against indexed permission metadata at query time, with the enforcement mechanism chosen from four incompatible options. **Governance** wraps all three from two directions at once — data posture asking what sensitive information is flowing, and workload posture asking what AI systems exist at all. Agent building and agent evaluation then run vertically through the whole stack, because a build-path choice constrains distribution, and an evaluation split strategy determines what every quality number means.

The single most important durable idea in the folder is that **each of these layers fails in a way the layer above cannot detect**. A provisioned deployment that has quota but no capacity looks like a deployment failure. A gateway without token quotas produces a noisy-neighbour outage that looks like a model problem. A retrieval index whose permission metadata is stale returns authorised-looking results that are not. A governance assessment sampling the top hundred sites weekly reports a posture that is four days old and covers a fraction of the estate. None of these is visible from the application, and all of them are the engineer's responsibility. This is the argument for teaching the whole stack rather than the application layer, and it is the argument the folder exists to support.

The second durable idea is that **defaults are opinions and thresholds are policy**. The evaluation framework adds a tool-accuracy evaluator automatically when tool definitions appear. The conversation split defaults to last-turn, which measures something quite different from what most teams think they are measuring. Foundry's basic setup lacks network isolation. A pass threshold of three on a one-to-five scale is a decision nobody made. In every case the platform has chosen for you, reasonably, and in every case the engineer who cannot state what was chosen and why does not understand their own system. This generalises well beyond the vendor and is assessable orally, which makes it valuable to the course.

The third is that **the platform decomposes failure modes more finely than practitioners usually do**. Tool failure splits into selection, input accuracy, execution success and output utilisation — and two of those four produce systems that report success and are wrong. Access control splits into four approaches with genuinely different trust models, one of which the documentation itself calls a workaround. Governance splits into data posture and workload posture because a permissions fix and an inventory gap are not the same problem. Giving students this vocabulary is a real contribution, because a bug that can be named can be found.

Against these, the folder contains claims that must not be taught. The internal course document asserts a 36% retrieval improvement with no benchmark, metric or interval; asserts that agents launch "in weeks rather than months"; and presents a five-stage maturity model with no causal evidence. The evaluation documentation publishes no agreement-with-human data for any of its LLM-as-judge evaluators. The governance documentation publishes no detection or false-positive rates. Collectively the folder is strong on architecture and empty on evidence, which is exactly the shape a course should teach students to notice.

## Source-by-source Cliff Notes

### Provisioned throughput for Foundry models
Full note: [provisioned-throughput-for-foundry-models.md](research/06-microsoft-platform/provisioned-throughput-for-foundry-models.md)
- A provisioned deployment "holds a fixed amount of processing capacity exclusively for your deployment's use, whether or not requests are being made."
- Four deployment categories with different guarantees: standard, priority processing, provisioned, batch.
- **Quota is not capacity.** Quota is "a policy limit enforced by Azure, and it has no associated cost"; capacity is what is actually available to deploy. "Having PTU quota doesn't guarantee that capacity is available."
- Capacity "changes throughout the day based on customer demand", and releasing it offers "no guarantee the same capacity is available" later.
- Sizing takes three inputs: request shape, output-to-input ratio, and cache rate, since "cached tokens don't consume PTU capacity."
- Three residency variants: global, data-zone and regional provisioned managed.
- **Spillover** redirects non-200 responses to a standard deployment, controllable per request by the `x-ms-spillover-deployment` header.
- Billing is hourly from creation to deletion "regardless of the number of tokens consumed", and the documentation explicitly warns against scaling provisioned deployments with traffic.
- **"Reservations don't guarantee capacity. First create deployments to confirm that capacity is available, then purchase the reservation."**

### The AI gateway in Azure API Management
Full note: [apim-ai-gateway-docs.md](research/06-microsoft-platform/apim-ai-gateway-docs.md)
- "The AI gateway… extends API Management's existing API gateway; it's not a separate offering."
- Five stated challenges: authentication and authorisation; load balancing across endpoints; monitoring and logging; token usage and quotas across applications; developer self-service.
- Tokens are the scarce resource. The noisy-neighbour argument is explicit: "you need to make sure that one app doesn't use the whole TPM quota and block other apps."
- Token limit policy keys on subscription, IP or arbitrary expression, and enables prompt-token precalculation at the gateway.
- Semantic caching compares "vector proximity of the prompt to prior requests" and requires an external RediSearch-compatible cache.
- Load balancing supports round-robin, weighted, priority-based and session-aware; priorities are recommended specifically to keep PTU instances fully used.
- Circuit breaker "features dynamic trip duration, applying values from the `Retry-After` header provided by the backend."
- Scaling caveat stated plainly: scaling the gateway without scaling and co-locating backends does not help.
- Governs remote **MCP servers** and **A2A agent APIs**, not only model endpoints.

### Document-level access control in Azure AI Search
Full note: [azure-ai-search-and-acl-patterns.md](research/06-microsoft-platform/azure-ai-search-and-acl-patterns.md)
- Four approaches: security filters (generally available), POSIX-like ACLs and RBAC scopes, Purview sensitivity labels, and SharePoint ACLs — the last three all preview.
- The documentation calls security trimming a **"workaround"**, contrasting simple string comparison with Entra-authenticated permission filters.
- Native enforcement is a **two-stage check**: service-level RBAC for the client application, then per-document permissions from the caller's token via the `x-ms-query-source-authorization` header.
- Documentation recommends group access over individual user access "for ease of management."
- **ADLS Gen2 preserves document-level RBAC scopes; blobs are container-level only.**
- SharePoint sync is asymmetric: unique-permission changes refresh per indexer run, but inherited changes require explicit resync or reset.
- **"SharePoint Information Management policies that gate user access aren't evaluated, ingested, or honored at query time."**
- Purview labels require a **system-assigned** managed identity; user-assigned identities are unsupported, and autocomplete and suggest APIs are unavailable on Purview-enabled indexes.
- Enforcement is against indexed metadata, not live source permissions, so a timing lag is inherent and acknowledged in the preview terms.
- **The chunking trap:** with a chunking skillset, permission metadata must move to index projections, or chunk-level references go unfiltered.

### Purview DSPM for AI and Defender AI security posture management
Full note: [purview-dspm-for-ai-and-defender-ai-spm-docs.md](research/06-microsoft-platform/purview-dspm-for-ai-and-defender-ai-spm-docs.md)
- **The oversharing argument:** "Because of the power and speed AI can proactively surface content that might be obsolete, over-permissioned, or lacking governance controls, generative AI amplifies the problem of oversharing data."
- Default data risk assessment runs weekly over the top 100 SharePoint sites by usage; a Fabric equivalent covers the top 100 workspaces after one-time setup.
- Assessment detail is structured as **Identify, Protect, Monitor**.
- Item-level remediation offers Resolve, Apply sensitivity label, Notify owner, and Remove sharing link — the last flagged as disruptive "to be used sparingly."
- Hard limits: 200,000 items per location, accuracy caveat above 100,000 files, no OneDrive item-level scanning, maximum 10 SharePoint sites for item-level scanning.
- Latencies: 24 hours for policy data, 4-day first-assessment delay, 48-hour custom result settle, 30-day expiry.
- Without an explicit policy, Copilot in Fabric and Security Copilot audit the event **but not the prompts and responses**.
- Defender's **AI bill of materials** covers "application components, data, and AI artifacts from code to cloud", discovered continuously across Azure OpenAI, Foundry, Machine Learning, Amazon Bedrock and Google Vertex AI.
- Four IaC checks form a minimum baseline: private endpoints, restricted endpoints, managed identity, identity-based authentication.
- Named AI-native attacks include **wallet attacks**, prompt injection, model theft and data poisoning.
- **Both sources are mid-transition:** the Purview page is the classic version, and agent-level Defender capabilities move to a Microsoft Agent 365 licence from 1 July 2026.

### Agent Framework evaluation and Foundry agent evaluators
Full note: [agent-framework-and-evaluations-docs.md](research/06-microsoft-platform/agent-framework-and-evaluations-docs.md)
- Three core types: `EvalItem`, `Evaluator`, `EvalResults`.
- Two evaluator tiers, mixable in one run: `LocalEvaluator` for inner-loop and CI, `FoundryEvals` for cloud LLM-as-judge.
- **"How you split determines what you're evaluating."** Three strategies: last turn (default), full, per-turn, plus custom splitters.
- Defaults are relevance, coherence and task adherence, with tool call accuracy added automatically when tool definitions are present.
- Tool usage decomposes into five evaluators: call accuracy, selection, input accuracy, output utilisation, call success.
- `task_navigation_efficiency` takes `actions` and `expected_actions` and requires no model — the one deterministic agent-behaviour check.
- Output is pass/fail with a `reason`, plus a numeric `score` for one-to-five-scale evaluators against a `threshold`.
- Pre-existing responses from logs can be evaluated without re-running the agent; repetitions exist "to detect non-deterministic behavior".
- **No agreement-with-human data is published for any evaluator.**

### Microsoft Foundry and Copilot Studio build paths
Full note: [microsoft-foundry-and-copilot-studio-docs.md](research/06-microsoft-platform/microsoft-foundry-and-copilot-studio-docs.md)
- Three build paths by service model: Foundry (PaaS), Copilot Studio (SaaS), GPUs and containers (IaaS). Selection criteria: **technical capabilities, timeline, control requirements.**
- Declarative agents use the host orchestrator and cannot act proactively; custom engine agents own orchestration and model choice and can be triggered without user input.
- Orchestrator ownership is the fundamental fork; it determines model choice, extensibility and lifecycle tooling together.
- **Distribution is constrained by build choice:** only Teams SDK, Microsoft 365 Agents SDK and Foundry agents can be published to the commercial store via the Agents Toolkit.
- Copilot Studio is "designed for small-scale deployments, such as department-level solutions", with stated limits on API-call control, pro-dev tooling, Adaptive Cards schema 1.6 and feature latency.
- Foundry's **basic setup lacks network isolation**; the standard setup adds public or private networking control.
- **"These options aren't mutually exclusive"** — components compose across platforms through MCP.

### sources/vendor-courses/03-Accelerate-Agentic-AI.md — internal course document
Full note: [03-accelerate-agentic-ai.md](research/06-microsoft-platform/03-accelerate-agentic-ai.md)
- **Internal, not citable.** The underlying LevelUp course is not publicly accessible.
- Its problem statement is durable: proofs of concept are easy; production deployment and sustained ROI are the industry struggle.
- Four essentials of high-performance agents: rich connected context; unified data and signal access; low-friction development and orchestration; governance, observability and trust.
- **Five orchestration patterns — sequential, concurrent, group chat, handoff, Magentic** — the most transferable content in the document.
- **Agent identity** as a first-class security principal, and an **agent registry** as the inventory answer.
- **Must not be taught as fact:** the 36% retrieval improvement claim, the "weeks rather than months" claim, the five-stage maturity model, and all analyst projections.

## Cross-source observations
- **The four layers fail invisibly upward.** Capacity, traffic, retrieval and governance each produce failures that present at the application layer as something else. This is the folder's central argument for teaching the full stack.
- **Two documents independently reach the same governance split.** Purview and Defender divide data posture from workload posture; the internal course document divides Foundry Control Plane from Agent 365 along developer-estate versus admin-estate lines. Two different sources arriving at the same two-sided shape is weak but real evidence that the shape is structural rather than organisational.
- **Tokens are the unit of everything.** They are the capacity unit for provisioned throughput, the quota unit at the gateway, the cost unit in billing, and the attack surface in a wallet attack. A course that teaches token accounting once, early, gets return in four separate places.
- **Preview status correlates with the more principled design.** The generally available access-control approach is the one the documentation calls a workaround; the properly authenticated ones are preview. Students should learn that the mature option is not always the correct one, and that choosing correctness sometimes means accepting preview terms.
- **Every source states a latency or a sampling bound, and none states an accuracy.** Assessment cadence, sync lag, policy propagation and result expiry are all documented precisely. Detection rates, false-positive rates and judge agreement are documented nowhere. The asymmetry is consistent enough across six independent sources to be a property of vendor documentation as a genre.
- **The gateway and the evaluation framework encode the same ladder.** Cheap fast checks at the edge, expensive slow judgement behind them. Local evaluators and semantic caching are the same idea applied to different problems.
- **Composability is asserted everywhere and constrained quietly.** MCP makes platforms interoperable, but commercial-store publishing depends on the build path chosen at the start. The interoperability claim is true at the protocol layer and false at the distribution layer.

## Corrections and open items
- **Three of the six external notes were written from search-returned excerpts rather than full page fetches** — the evaluation, build-path and Defender material. Their structure sections are reconstructions and must be re-verified before any of it is taught.
- **Two sources are already superseded at the time of writing.** The Purview DSPM page consulted is the classic version, and one Foundry evaluation page is a classic variant. Neither replacement was read.
- **The 36% retrieval claim remains unverified and probably unverifiable.** No benchmark, metric definition, baseline system or interval accompanies it anywhere.
- **No agreement-with-human data exists for any Foundry evaluator.** Until that is published or independently measured, every judged score in this stack should be treated as uncalibrated.
- **Licensing content is deliberately excluded from teaching material** and recorded only so its presence in the sources is known.
- **The four-layer architecture is this folder's own synthesis**, not a claim any source makes. It should be presented as an organising device, not as vendor doctrine.
- **Open question:** what refresh cadence does this folder need? A term is probably too long. The working assumption is verification before every offering, with the durable extractions stable and the citations re-checked.
- **Open question:** how much of this can a course lab actually run? Provisioned throughput, Purview assessments and Fabric configuration all have licensing or tenant-administration prerequisites a university may not hold.
- **Open question:** whether teaching a single vendor's stack in depth produces transferable understanding or product familiarity. The durable extractions are the hedge; whether the hedge works is untested.

## Material retained here
- The Microsoft platform memo (out of scope for rewriting by convention).
- The four-layer synthesis above, which exists nowhere in the sources.
- The list of claims that must not be taught as fact.
- The record of which notes were written from full fetches and which from excerpts.
- Version-risk and supersession warnings for each source.
- The open questions on refresh cadence, lab feasibility and transferability.

## Public-source notes to keep
All external sources in this folder are open Microsoft Learn documentation, retrieved via the Learn documentation tools. Full URLs are recorded in [reading-list.md](research/06-microsoft-platform/reading-list.md) and in each individual note's citation section. Two of the pages consulted are explicitly labelled classic or superseded, and their replacements have not yet been read. The internal course document `sources/vendor-courses/03-Accelerate-Agentic-AI.md` is **not a public source** and must not be cited externally; anything taught from it must first be re-grounded in public documentation.