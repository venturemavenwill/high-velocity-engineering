# Reading List — Microsoft Platform Mapping

All external sources in this folder are open Microsoft Learn documentation, retrieved through the Microsoft Learn documentation tools. Every entry is **perishable**; two are already superseded. Sources are grouped by the question each one answers.

## What does capacity actually cost, and what does buying it guarantee?
- **Provisioned throughput for Foundry models** — `https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/provisioned-throughput`. Open documentation, **fetched and read in full.** Answers: the four deployment categories, why quota is not capacity, how to size a deployment from request shape and cache rate, the three residency variants, spillover, and why reservations do not guarantee anything. Note: [provisioned-throughput-for-foundry-models.md](/research/06-microsoft-platform/provisioned-throughput-for-foundry-models.md).
- Referenced but not fetched: the model capacities REST API for programmatic capacity checks, and the quota request form at `https://aka.ms/oai/stuquotarequest`.

## How do you stop one application consuming everyone's tokens?
- **GenAI gateway capabilities in Azure API Management** — `https://learn.microsoft.com/en-us/azure/api-management/genai-gateway-capabilities`. Open documentation, **fetched and read in full.** Answers: the five governance challenges, token limit and quota policies, semantic caching, load balancing and circuit breaking, per-consumer token metrics, and the extension of all of it to MCP servers and A2A agent APIs. Note: [apim-ai-gateway-docs.md](/research/06-microsoft-platform/apim-ai-gateway-docs.md).
- Referenced companion pages, not fetched: the individual policy reference pages for `llm-token-limit`, `llm-semantic-cache-store`, `llm-semantic-cache-lookup`, `llm-emit-token-metric` and `llm-content-safety`; the API Center catalogue documentation; and the Foundry AI gateway preview.

## How does a retrieval system enforce who is allowed to see what?
- **Document-level access control in Azure AI Search** — `https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview`. Open documentation, **fetched and read in full.** Answers: the four enforcement approaches and how to choose between them, the two-stage authorisation check, the ADLS Gen2 versus blob asymmetry, SharePoint ACL synchronisation behaviour, Purview label constraints, and the chunking and index-projection trap. Note: [azure-ai-search-and-acl-patterns.md](/research/06-microsoft-platform/azure-ai-search-and-acl-patterns.md).
- Most functionality described sits behind the **2026-05-01-preview REST API**, whose terms acknowledge a timing lag between source permission changes and query-time enforcement.

## What is our data doing in AI systems, and what AI systems do we have?
- **Learn about Data Security Posture Management for AI (classic)** — `https://learn.microsoft.com/en-us/purview/dspm-for-ai`. Open documentation, **fetched and read in full.** Answers: the oversharing amplification argument, the weekly data risk assessment and its Identify/Protect/Monitor structure, one-click policies, item-level remediation actions, and the scanning limits and latencies that bound what any of it actually covers. **Superseded** — the page states it is replaced by a new version at `data-security-posture-management-learn-about`, which has **not** been read.
- **Overview — AI security posture management (Defender for Cloud)** — `https://learn.microsoft.com/azure/defender-for-cloud/ai-security-posture`. Open documentation, **read through search excerpts, not fetched in full.** Answers: the AI bill of materials, continuous multicloud discovery, the four infrastructure-as-code security checks, attack path analysis, and the named AI-native attack classes. Note the licensing transition to Microsoft Agent 365 from 1 July 2026.
- Supporting pages read as excerpts: `https://learn.microsoft.com/azure/security/fundamentals/ai-security-best-practices`; `https://learn.microsoft.com/azure/defender-for-cloud/defender-for-cloud-introduction`; `https://learn.microsoft.com/security/security-for-ai/discover`; `https://learn.microsoft.com/security/security-for-ai/protect`.
- Combined note: [purview-dspm-for-ai-and-defender-ai-spm-docs.md](/research/06-microsoft-platform/purview-dspm-for-ai-and-defender-ai-spm-docs.md).

## How do you measure whether an agent is any good?
- **Evaluation (Microsoft Agent Framework)** — `https://learn.microsoft.com/agent-framework/agents/evaluation`. Open documentation, **read through search excerpts.** Answers: the three core types, the local-versus-cloud evaluator tiering, the three conversation split strategies and why the choice determines what a score means, expected outputs and tool calls, evaluation of stored traces, repetitions, and multi-agent workflow evaluation.
- **Agent evaluators (Microsoft Foundry)** — `https://learn.microsoft.com/azure/foundry/concepts/evaluation-evaluators/agent-evaluators`. Open documentation, **read through search excerpts.** Answers: required inputs and parameters per evaluator, data mapping syntax, and the pass/fail-with-reason output format including thresholds and scores.
- **Built-in evaluators reference** — `https://learn.microsoft.com/azure/foundry/concepts/built-in-evaluators`. Open documentation, **read through search excerpts.** Answers: the full catalogue of agent, tool, quality and safety evaluators with stated purposes.
- **Run evaluations from the Microsoft Foundry portal** — `https://learn.microsoft.com/azure/foundry/how-to/evaluate-generative-ai-app`. Open documentation, **read through search excerpts.** Answers: evaluation scopes and which evaluators are available at each.
- Also encountered: `https://learn.microsoft.com/azure/foundry-classic/how-to/develop/agent-evaluate-sdk`, a **classic** variant retained only for its worked tool-call-accuracy output example.
- Combined note: [agent-framework-and-evaluations-docs.md](/research/06-microsoft-platform/agent-framework-and-evaluations-docs.md).
- **Gap:** none of these pages publishes agreement rates with human judgement, calibration data, or any rationale for default thresholds.

## Which build path should a team choose, and what does the choice cost later?
- **Technology plan for AI agents (Cloud Adoption Framework)** — `https://learn.microsoft.com/azure/cloud-adoption-framework/ai-agents/technology-solutions-plan-strategy`. Open documentation, **read through search excerpts.** Answers: the three build paths by service model, the selection criteria of capability, timeline and control, Foundry's agent types, and the basic-versus-standard setup distinction including the network isolation warning.
- **Choose the right tool to build your declarative agent** — `https://learn.microsoft.com/microsoft-365/copilot/extensibility/declarative-agent-tool-comparison`. Open documentation, **read through search excerpts.** Answers: the per-tool pros and cons, including Copilot Studio's department-scale positioning and its stated limits.
- **Custom engine agents for Microsoft 365 overview** — `https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-custom-engine-agent`. Open documentation, **read through search excerpts.** Answers: the four-way tooling comparison across orchestrator ownership, model choice, language support, channels and publishing, plus the commercial-store publishing constraint.
- **Agents for Microsoft 365 Copilot** — `https://learn.microsoft.com/microsoft-365/copilot/extensibility/agents-overview`. Open documentation, **read through search excerpts.** Answers: the declarative-versus-custom-engine comparison and the six published triggers for choosing a custom engine.
- **Compare the serverless agents runtime with other Microsoft agent options** — `https://learn.microsoft.com/azure/azure-functions/compare-serverless-agents-runtime`. Open documentation, **read through search excerpts.** Answers: five hosting options by authoring model and cost, and the explicit statement that the options compose through MCP rather than competing.
- Combined note: [microsoft-foundry-and-copilot-studio-docs.md](/research/06-microsoft-platform/microsoft-foundry-and-copilot-studio-docs.md).

## Internal documents
- [sources/vendor-courses/03-Accelerate-Agentic-AI.md](/sources/vendor-courses/03-Accelerate-Agentic-AI.md) — the repository's synthesis of an internal Microsoft LevelUp course (ID 2307124). **Not publicly accessible and not citable externally.** Read for the four essentials, the three Foundry agent types, the five orchestration patterns, agent identity and the agent registry. Its quantitative claims must not be repeated. Note: [03-accelerate-agentic-ai.md](/research/06-microsoft-platform/03-accelerate-agentic-ai.md).
- [microsoft-platform-memo.md](/research/06-microsoft-platform/microsoft-platform-memo.md) — retained, out of scope for rewriting by convention.
- [collected-materials.md](/research/06-microsoft-platform/collected-materials.md) — the folder's four-layer synthesis, cross-source observations, and the list of claims that must not be taught.

## Retrieved but unavailable
- **The replacement Purview DSPM page** (`data-security-posture-management-learn-about`) — named in the classic page but not fetched. Should be read before this folder is used for teaching.
- **The three CS2023 sectioned PDFs** relevant to platform-adjacent curriculum questions — extraction failed repeatedly; recorded in [research/01-course-structure/reading-list.md](/research/01-course-structure/reading-list.md).
- **The underlying LevelUp course 2307124** — internal only; no public URL exists.

## Adjacent reading, not core
- Azure Well-Architected Framework guidance for AI workloads, for the reliability and cost pillars behind the capacity material.
- Microsoft Cloud Security Benchmark v2 artificial intelligence security controls, referenced from the AI security best practices page.
- The Model Context Protocol and A2A protocol specifications themselves, which are vendor-independent and more durable than any page listed above.
- OWASP guidance for large language model applications, for an external and non-vendor view of the same threat classes.

## What this folder should answer
- **What is durable platform knowledge?** — **Answered.** The four-layer architecture, the quota-versus-capacity distinction, the noisy-neighbour and token-accounting arguments, the four access-control trust models, the oversharing amplification argument, the tool-failure decomposition, the conversation split problem, and orchestrator ownership as the build-path fork. All are recorded in [collected-materials.md](/research/06-microsoft-platform/collected-materials.md).
- **What is too perishable for lecture time?** — **Answered.** Product and service names, portal navigation, licensing bundles, preview boundaries, specific policy syntax, and evaluator catalogues. Two consulted pages were already superseded, which settles the question empirically.
- **Which gaps block production deployment?** — **Answered.** Capacity availability distinct from quota; token quota enforcement across tenants; permission metadata staleness at query time; governance scan coverage and latency; uncalibrated judged evaluation; and distribution constrained by an early build-path choice.
- **What refresh cadence does this folder need?** — **Open.** Working assumption is re-verification before every offering. Not yet tested.
- **How much of this can a university lab actually run?** — **Open.** Provisioned throughput, Purview assessments and Fabric configuration all carry licensing or tenant-administration prerequisites that may be unavailable.
- **Does teaching one vendor's stack in depth transfer?** — **Open.** The durable extractions are the hedge; whether the hedge works has not been evaluated.
- **What replaces the superseded sources?** — **Open.** The new Purview DSPM page and the non-classic Foundry evaluation pages have not been read.