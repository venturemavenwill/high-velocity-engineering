# AB-100: Agentic AI Business Solutions Architect — Certification Prep

> LevelUp course 2426785 · Certifications phase · ~10 h · Required for Frontier Transformation Engineer badge (one of three required certifications)

## At a glance

- AB-100 validates the ability to **plan, design, and deploy agentic AI business solutions** across the Microsoft stack — Copilot Studio, Microsoft Foundry (formerly Azure AI Foundry), Microsoft 365 Copilot, Power Platform, and Dynamics 365 — and is positioned as an **advanced ("three-star")** certification requiring real architecture judgement, not just tool knowledge.
- The exam is organized around three weighted skill areas: **Plan** an AI-powered business solution (25-30%), **Design** an AI-powered business solution (25-30%), and **Deploy** an AI-powered business solution (40-45%) — Deploy is the heaviest area and includes testing, governance, ALM, and responsible AI.
- Core architectural judgement calls recur throughout the course: **build vs. buy vs. extend**, **Copilot Studio vs. Microsoft Foundry vs. pro-code**, **single-agent vs. multi-agent**, **SLM vs. LLM**, and **task agent vs. autonomous agent vs. prompt/response agent** — expect scenario questions that test these decision trees repeatedly.
- Grounding data quality is a recurring theme: the five dimensions of **accuracy, relevance, timeliness, cleanliness, and availability** apply to every knowledge source an agent consumes, and RAG/hybrid search/chunking patterns are the default grounding architecture.
- ROI and TCO analysis is treated as a first-class architect skill: a specific benefit formula, five ROI categories, and five TCO cost domains are used to justify (or reject) an agent investment before build begins.
- Governance and ALM are modeled as **lifecycle disciplines** — agents move through environment tiers (dev/test/prod) with promotion gates, data moves through a lettered lifecycle (bronze/red to gold) with its own gates, and everything is wrapped in RACI ownership and the six Responsible AI principles.
- Security follows Zero Trust patterns: managed identities, least privilege, separation of duties, RBAC, and defense against prompt manipulation/prompt injection are explicit exam topics.
- Monitoring and continuous improvement span five areas: operational health, performance, quality, usage insights, and risk/compliance/security — architects are expected to design feedback loops, not just ship agents.
- The course includes hands-on walkthroughs in both **Microsoft Foundry** (agent creation, model catalog, code interpreter, RAG grounding, guardrails/content filters) and **Copilot Studio** (topics, system topics, knowledge sources, analytics) that map directly to exam scenario questions.
- Day 5 is a dedicated exam-prep session covering logistics (100 minutes + 30-minute check-in, Pearson VUE, 700/1000 passing score, no negative marking), question formats, and a full module-by-module review of quiz answers.

## Session map

| Day | Title | Purpose |
|-----|-------|---------|
| 1 | Foundations of Agentic AI Architecture and Business Strategy | Establish the AI architect role, Microsoft's AI technology stack, agent use cases, grounding data principles, AI adoption strategy (CAF), and the core single-agent/multi-agent and platform-selection decision frameworks. |
| 2 | Designing, Building, and Deploying AI Agents for Business Solutions | Build the business case (ROI/TCO), choose build vs. buy vs. extend, distinguish agent types (task/autonomous/prompt-response), and walk through hands-on demos building agents in Microsoft Foundry and Copilot Studio. |
| 3 | Extending, Orchestrating, and Optimizing Enterprise AI Solutions | Cover custom model scenarios, advanced agent behaviors (deep reasoning, voice), Copilot Studio extensibility layers and MCP, orchestration across M365/Dynamics 365/Power Platform, and monitoring/tuning agents in production. |
| 4 | Testing, Governance, ALM, and Responsible AI for Enterprise Solutions | Define testing metrics and validation thresholds, design ALM processes for data/agents/connectors/custom models, and apply security, governance, and the six Responsible AI principles. |
| 5 | Getting Ready for the Certification: AB-100 | Explain exam logistics, skill weightings, question formats, and conduct a full revision pass with sample questions across all prior modules. |

---

## Day 1. Foundations of Agentic AI Architecture and Business Strategy

**What it covers** — Day 1 introduces the role of the Agentic AI Business Solutions Architect: someone who bridges business strategy and technical implementation to identify where agents add value, choose the right Microsoft technology, and ensure solutions are grounded, responsible, and adopted safely. It covers Microsoft's AI technology stack (Cognitive Services, Azure Machine Learning, Azure OpenAI Service, Microsoft/Azure AI Foundry), the Cloud Adoption Framework (CAF) as applied to AI agent adoption, the five dimensions of grounding data quality, and the foundational decision frameworks for single vs. multi-agent design and platform selection (SaaS/Copilot Studio/Foundry/containers).

**Key concepts**
- **Agentic AI Business Solutions Architect** — role responsible for translating business problems into agent-based solutions, selecting the right Microsoft platform, and ensuring responsible, grounded, governed deployment.
- **Responsible AI (six principles)** — fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability. Applied to every architecture decision in the course.
- **Cloud Adoption Framework (CAF)** — Microsoft's structured methodology (strategy, plan, ready, adopt/govern, secure, manage) adapted in this course into an **agent adoption model**: strategy → plan → ready → govern → secure → manage.
- **Azure Cognitive Services** — prebuilt AI APIs (vision, language, speech, decision) for adding AI capability without training models.
- **Azure Machine Learning (Azure ML)** — platform for building, training, and deploying custom ML models with full MLOps tooling.
- **Azure OpenAI Service** — enterprise access to OpenAI's foundation models (GPT family, embeddings) with Azure security/compliance wrapper.
- **Microsoft/Azure AI Foundry** — unified platform for building, customizing, orchestrating, and deploying AI agents and models; includes the model catalog, agent service, and tooling (code interpreter, file search, custom tools).
- **Copilot Studio** — low-code/no-code platform for building conversational and autonomous agents using topics, generative answers, and prebuilt connectors.
- **Agent use case categories** — task automation, data analytics/insight generation, decision support/decision making.
- **Grounding data** — the business data an agent retrieves and reasons over to answer accurately; without it, a model can only respond from static/pretrained knowledge.
- **Five dimensions of grounding data quality** — accuracy, relevance, timeliness, cleanliness, availability.
- **Azure Data Estate** — the organizing pattern for enterprise data (structured/unstructured, on-prem/cloud) that must be inventoried and prepared before it can ground agents.
- **Single-agent design** — one agent handles an end-to-end scenario; simpler to govern, appropriate for narrow, well-defined tasks.
- **Multi-agent design** — multiple specialized agents collaborate, each with a narrow scope; needed when a scenario spans domains, requires different skills/knowledge, or benefits from separation of concerns/security boundaries.
- **Orchestration patterns** — sequential, concurrent, group chat, handoff, magentic (dynamic/plan-driven orchestration where an orchestrator agent plans and delegates steps dynamically rather than following a fixed sequence).
- **Generative AI orchestration vs. classic orchestration** — generative orchestration lets the model dynamically decide which topic/action to invoke based on natural language understanding; classic orchestration follows fixed, deterministic trigger phrases/rules.
- **SaaS vs. Copilot Studio vs. Foundry vs. containers decision tree** — a platform-selection framework based on control needs, technical skill available, data sensitivity, and customization depth.
- **Prebuilt Microsoft 365 Copilot agents** — ready-made agents (e.g., for Sales, Service, Finance) that can be used or extended rather than built from scratch.
- **Knowledge source types** — files, websites/public data, Dataverse tables, enterprise connectors (SharePoint, databases), each with different grounding fidelity and refresh characteristics.
- **Solution constraints (Copilot Studio vs. Foundry)** — governance, extensibility, control-plane, and skill-set constraints that determine which platform a given requirement must use.
- **Custom AI model triggers** — conditions under which a business scenario justifies training/fine-tuning a custom model rather than using a foundation model as-is (e.g., highly specialized domain language, strict latency/cost envelopes, proprietary data patterns).

**Detailed notes**

*The architect's role.* The course frames the Agentic AI Business Solutions Architect as the person who must reconcile three pressures simultaneously: business value (does this justify investment?), technical feasibility (can the platform actually do this?), and responsible/governed deployment (is it safe, compliant, and fair?). The architect does not need to write all the code but must be able to make and defend platform and design decisions.

*Microsoft's AI technology stack.* Four building blocks are introduced and contrasted:
1. **Cognitive Services** — consume prebuilt AI capabilities (e.g., form recognition, speech-to-text, sentiment analysis) via API calls; no training required; fastest time-to-value for narrow, well-understood tasks.
2. **Azure Machine Learning** — for teams that need to build, train, and manage custom models end-to-end (data prep, training pipelines, deployment, monitoring); highest control, highest skill requirement.
3. **Azure OpenAI Service** — access to large foundation models (GPT family) with enterprise security, data residency, and compliance; the default choice for generative, conversational, and reasoning-heavy scenarios.
4. **Microsoft/Azure AI Foundry** — the unifying environment that brings together model catalog selection, agent orchestration, grounding, evaluation, and deployment; the recommended home for building custom or advanced agents that need pro-code extensibility.

*Responsible AI.* The six principles (fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability) are introduced here and referenced throughout every subsequent day — they recur as the lens for every governance and design decision, and Day 4 revisits them in depth for the exam.

*Agent use cases.* Three categories are used repeatedly across the course to classify a business ask:
- **Task automation** — repetitive, rules-based work (data entry, routing, scheduling) where an agent executes a defined sequence of actions.
- **Data analytics / insight generation** — agents that summarize, analyze, and surface insights from large or scattered data (e.g., summarizing support tickets, generating reports).
- **Decision making / decision support** — agents that recommend or take actions based on reasoning over grounded data (e.g., approving a routine expense, recommending next-best-action).

*Grounding data and its five dimensions.* Grounding is the mechanism by which an agent's responses are tied to real business data rather than the model's generic training. The five quality dimensions taught are:
- **Accuracy** — is the data correct and free of errors?
- **Relevance** — does the data actually pertain to the questions the agent will be asked?
- **Timeliness** — is the data current enough for the decisions being made?
- **Cleanliness** — is the data structured, deduplicated, and free of noise?
- **Availability** — can the agent actually reach the data at inference time (connectivity, permissions, uptime)?
Architects are expected to audit a business's **Azure Data Estate** against these five dimensions before committing to a grounding strategy, since poor grounding data quality is called out as the most common cause of agent failure/adoption risk.

*Cloud Adoption Framework applied to agents.* CAF's standard phases are mapped onto an agent-specific adoption model:
- **Strategy** — define business justification, motivations, and outcomes for agent adoption.
- **Plan** — inventory agent opportunities, prioritize by value/feasibility, build a roadmap.
- **Ready** — prepare the Azure/Data landing zone, environments, and skills.
- **Govern** — establish policies, RACI, compliance, and Responsible AI guardrails (this maps forward into Day 4's ALM/governance content).
- **Secure** — apply Zero Trust, identity, and access controls (expanded in Day 4's security module).
- **Manage** — operate, monitor, and continuously improve deployed agents (expanded in Day 3's monitoring content).

*Platform selection: SaaS vs. Copilot Studio vs. Foundry vs. containers.* The decision tree taught weighs:
- **SaaS/prebuilt agents (e.g., M365 Copilot agents)** — fastest to deploy, least customizable, best when an out-of-the-box scenario already fits (e.g., a prebuilt Sales or Service agent).
- **Copilot Studio** — low-code, ideal when business users/makers need to build conversational or lightly autonomous agents with topics, generative answers, and connectors, without needing deep pro-code extensibility or custom model training.
- **Microsoft/Azure AI Foundry** — needed when the scenario requires custom model selection/fine-tuning, complex multi-agent orchestration, pro-code tooling (code interpreter, custom functions), or tighter control over the agent runtime.
- **Containers/custom infrastructure** — reserved for scenarios with extreme customization, data residency, or infrastructure control requirements beyond what managed platforms offer.
The overriding decision criteria are: **required customization depth, available technical skill, data sensitivity/governance requirements, and time-to-value**.

*Single-agent vs. multi-agent design.* A single agent is preferred when the scenario is narrow and cohesive — it's simpler to build, test, govern, and monitor. Multi-agent design becomes appropriate when: the scenario spans multiple domains of knowledge/skill; different steps require different security/data boundaries; the workload benefits from specialization (one agent per function); or the orchestration itself needs dynamic planning across agents. The five orchestration patterns given for coordinating multiple agents are:
- **Sequential** — agents run in a fixed order, each consuming the prior agent's output.
- **Concurrent** — multiple agents run in parallel on the same input, and results are aggregated.
- **Group chat** — agents (and possibly a human) participate in a shared conversation, contributing based on their specialty.
- **Handoff** — one agent transfers control of the conversation/task to another agent when it recognizes the request is outside its scope.
- **Magentic** — a dynamic, plan-driven orchestrator that decides at runtime which agents to invoke and in what order, based on the goal rather than a fixed script (used for open-ended, complex problems).

*Generative AI orchestration vs. classic orchestration.* Classic orchestration (seen in traditional bots) relies on deterministic trigger phrases and rule-based routing. Generative AI orchestration lets the underlying LLM interpret user intent and dynamically select the right topic, action, or agent — this is the default orchestration mode in modern Copilot Studio agents and is what makes agents feel conversational rather than menu-driven.

*Knowledge sources.* Files (uploaded documents), websites (public or crawled content), Dataverse tables, and enterprise connectors (SharePoint, SQL, etc.) are the taught knowledge source types; each has different considerations for refresh cadence, access control, and grounding fidelity.

*When to extend M365 Copilot vs. build a custom agent.* If a scenario is already addressed by an existing Microsoft 365 Copilot capability or a prebuilt agent, extending it (via plugins, declarative agents, or connectors) is preferred over building new — it reduces cost and governance surface area. A custom agent is justified when the scenario needs bespoke logic, data sources, or behaviors not covered by extension points.

*When to build custom AI models.* Building/fine-tuning a custom model is reserved for cases where foundation models underperform on a specialized domain vocabulary or task, where strict latency/cost budgets rule out large foundation models (favoring an SLM), or where proprietary data patterns must be embedded into model weights rather than retrieved at inference time via RAG.

**Exam pointers**
- Know the six Responsible AI principles by name: fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability — expect a "which principle does this scenario violate/support" question.
- Be able to distinguish Cognitive Services (prebuilt API), Azure ML (custom model build/train), Azure OpenAI Service (foundation model access), and AI Foundry (unified agent/model platform) — scenario questions will describe a need and ask which service fits.
- Memorize the five grounding data dimensions: accuracy, relevance, timeliness, cleanliness, availability — a scenario describing stale or duplicated data is testing "timeliness" or "cleanliness" specifically.
- The CAF-based agent adoption model order is strategy → plan → ready → govern → secure → manage — expect ordering questions.
- Know the criteria for single- vs. multi-agent design (domain span, security boundaries, specialization) and be able to name all five orchestration patterns (sequential, concurrent, group chat, handoff, magentic) with their defining trait.
- Understand the platform decision tree (SaaS/prebuilt → Copilot Studio → Foundry → containers) driven by customization depth, skills, data sensitivity, and time-to-value — a very common scenario-question format is "given this business requirement, which platform should the architect recommend?"
- Generative AI orchestration = dynamic, model-driven intent routing; classic orchestration = fixed trigger-phrase routing — questions may ask which orchestration style a described bot uses.

---

## Day 2. Designing, Building, and Deploying AI Agents for Business Solutions

**What it covers** — Day 2 builds the business case for an agent (ROI/TCO analysis), formalizes the build vs. buy vs. extend decision, defines the three agent archetypes (task, autonomous, prompt/response), and covers data processing/grounding architecture (RAG, hybrid search, chunking) plus the NLU/orchestration decision framework. Two full hands-on demos are walked through: building an expense agent in Microsoft Foundry, and building a similar agent in Copilot Studio.

**Key concepts**
- **ROI (Return on Investment)** — the financial justification for an agent investment, calculated from benefit vs. cost.
- **TCO (Total Cost of Ownership)** — the full cost envelope of building, running, and maintaining an agent solution.
- **Five ROI categories** — productivity, cost savings, revenue impact, risk reduction, strategic value.
- **ROI benefit formula** — Annual benefit = (minutes saved / 60) × runs per year × labor rate + error cost avoided + backlog effects.
- **Net benefit** — Annual benefit − Annual TCO.
- **ROI %** — Net benefit / Annual TCO × 100.
- **Payback period (months)** — Initial cost / net monthly benefit.
- **Sensitivity bands** — a range (low/base/high) applied to ROI assumptions to stress-test the business case against optimistic vs. conservative estimates.
- **Build vs. buy vs. extend** — the three-way decision on whether to build a custom agent, buy/use a prebuilt SaaS solution, or extend an existing Copilot/agent.
- **Five TCO cost domains** — infrastructure, development, data preparation, expertise (skills/staffing), operations (ongoing run cost).
- **Model routing** — directing a request to the most appropriate model based on rules.
- **Static routing** — fixed rule always sends a given request type to a given model.
- **Weighted routing** — traffic is split across models by percentage (e.g., for A/B testing).
- **Fallback routing** — a secondary model is used if the primary is unavailable or fails.
- **Version-based routing** — requests are routed by model version for controlled rollout.
- **SLM (Small Language Model) vs. LLM (Large Language Model)** — SLMs are cheaper/faster/lower-latency and suit narrow, well-defined tasks; LLMs handle broader reasoning and complex generative tasks at higher cost/latency.
- **Task agent** — an agent built around a defined goal, skills, actions, knowledge, context, and safety constraints, focused on completing a specific task reliably.
- **Autonomous agent** — an agent with a goal, trigger, instructions, knowledge, and actions, designed to operate independently once triggered, without step-by-step human guidance.
- **Prompt & response agent** — an agent architecture centered on system topics, generative answers, and condition nodes; primarily conversational/Q&A in nature.
- **System topic** — a built-in Copilot Studio topic (e.g., greeting, escalate, end of conversation) that handles standard conversational flows.
- **Fallback topic/design** — the topic invoked when no other topic matches user intent; critical for graceful degradation.
- **Generative answers** — a Copilot Studio feature that generates responses grounded in configured knowledge sources using generative AI rather than static topic authoring.
- **Condition node** — a logic branch within a topic or flow that routes conversation based on a condition (e.g., variable value).
- **Agent flow** — a Copilot Studio automation construct with triggers and actions, similar to a Power Automate flow but scoped to agent behaviors.
- **Prompt actions** — reusable prompt-based operations of specific types: transform, summarize, extract, generate, classify.
- **RAG (Retrieval-Augmented Generation)** — architecture pattern where relevant documents/chunks are retrieved from a knowledge store and injected into the model prompt to ground its response.
- **Hybrid search** — combines keyword (lexical) search and vector (semantic) search for better retrieval relevance.
- **Chunking** — splitting large documents into smaller passages so they can be embedded and retrieved efficiently and relevantly.
- **Azure AI Search** — the managed search/indexing service used to implement hybrid search and vector retrieval for RAG.
- **Standard NLU** — Copilot Studio's built-in natural language understanding for matching user utterances to topics.
- **Azure CLU (Conversational Language Understanding)** — a more advanced/customizable NLU service that can be integrated for higher-precision intent recognition.
- **Generative AI orchestration (Copilot Studio)** — lets the agent dynamically choose among topics/actions using the LLM rather than fixed trigger phrases (recap from Day 1, applied concretely here).
- **Code interpreter (Foundry tool)** — a Foundry agent tool that allows the agent to execute code (e.g., Python) for calculations, data manipulation, and file generation.
- **Model catalog** — the Foundry gallery of foundation and open models available for agent/model deployment (e.g., GPT-4.1, text-embedding-3-small).
- **File search / RAG grounding (Foundry)** — a Foundry capability to upload files and have the agent retrieve/ground answers against them.
- **Agent versioning and publishing (Foundry/Copilot Studio)** — the process of creating a version of an agent's configuration and publishing it to make it live/callable.

**Detailed notes**

*Building the business case: ROI and TCO.* Day 2 opens by insisting an architect must justify an agent investment financially before designing it. Five ROI categories are used to catalogue where value comes from:
1. **Productivity** — time saved by employees/customers.
2. **Cost savings** — reduced direct spend (e.g., lower support headcount need).
3. **Revenue impact** — new or protected revenue (e.g., faster deal cycles, better upsell).
4. **Risk reduction** — fewer errors, compliance failures, or missed SLAs.
5. **Strategic value** — harder-to-quantify benefits like competitive positioning or capability building.

The **ROI analysis construction methodology** taught is:
- Establish a **baseline** (current state cost/time/error rate without the agent).
- Apply the **benefit formula**: Annual benefit = (minutes saved / 60) × runs per year × labor rate + error cost avoided + backlog effects.
- Compute **Net benefit** = Annual benefit − Annual TCO.
- Compute **ROI %** = Net benefit / Annual TCO × 100.
- Compute **Payback period (months)** = Initial cost / net monthly benefit.
- Apply **sensitivity bands** (low/base/high estimates) so stakeholders see a realistic range rather than a single optimistic number.

*Build vs. buy vs. extend.* This decision is formalized around **five TCO cost domains**:
1. **Infrastructure** — compute, storage, and platform costs.
2. **Development** — engineering effort to build/customize.
3. **Data preparation** — cost of cleaning, structuring, and grounding data.
4. **Expertise** — cost of the skills/staffing needed (pro-code vs. low-code).
5. **Operations** — ongoing run costs (monitoring, support, model calls).

"Buy" (use an existing SaaS/prebuilt agent) minimizes development and expertise cost but may not fit the exact requirement. "Build" (custom, typically in Foundry) maximizes fit but carries the highest development/expertise/operations cost. "Extend" (add to an existing Copilot/agent, e.g., via Copilot Studio topics or M365 Copilot plugins) is a middle path — lower cost than build, more fit than buy.

*Model routing.* When multiple models are viable, routing rules decide which one serves a given request:
- **Static rules** — a fixed mapping (e.g., always use model X for intent Y).
- **Weighted rules** — traffic split by percentage across models (useful for gradual rollout/A-B testing).
- **Fallback rules** — route to a backup model if the primary fails, times out, or is unavailable.
- **Version-based rules** — route by explicit model version to support controlled upgrades.
The course stresses routing to an **SLM** when the task is narrow, latency-sensitive, or cost-sensitive, and reserving an **LLM** for complex reasoning/generation tasks.

*Three agent architectures.* Day 2 formalizes the three archetypes referenced across the course:
- **Task agents** — built from goal, skills, actions, knowledge, context, and safety; optimized to complete a specific, bounded task reliably and predictably (e.g., "file an expense report").
- **Autonomous agents** — built from goal, trigger, instructions, knowledge, and actions; designed to run independently once triggered by an event, without turn-by-turn human interaction (e.g., monitor a queue and auto-triage tickets).
- **Prompt & response agents** — built from system topics, generative answers, and condition nodes; primarily conversational, question-answering agents grounded in knowledge sources rather than executing multi-step actions.

*Foundry tools mapping.* Foundry agents can be equipped with tools such as **code interpreter** (execute code for computation/data manipulation), **file search** (RAG grounding against uploaded files), and custom/function tools (calling external APIs or business logic) — architects map required agent capabilities to the specific Foundry tool needed.

*Copilot Studio topics and fallback design.* Topics are the core building block of conversational agents in Copilot Studio: each topic has trigger phrases (or is invoked via generative orchestration), a conversation flow, and can call actions/flows. **System topics** (greeting, escalate, end of conversation, etc.) ship built-in. The **fallback topic** catches unmatched input and should be designed deliberately (e.g., offering to search knowledge, escalate to a human, or ask a clarifying question) rather than left as a generic "I didn't understand" dead end.

*Data processing and grounding (RAG).* The architecture pattern taught for grounding an agent in enterprise data is:
1. **Chunk** documents into smaller passages.
2. **Embed** chunks into vectors and index them (e.g., in **Azure AI Search**).
3. At query time, run **hybrid search** (lexical + vector) to retrieve the most relevant chunks.
4. Inject retrieved chunks into the model prompt as context (the "augmented generation" step of RAG) so the response is grounded in real data rather than the model's static training.

*NLU/orchestration decision framework.* Three options are compared for how an agent understands user intent:
- **Standard NLU** — Copilot Studio's built-in matching; fastest to set up, adequate for well-defined trigger phrases.
- **Azure CLU** — a more sophisticated, trainable NLU service; chosen when intent recognition needs higher precision/recall or must handle more varied phrasing.
- **Generative AI orchestration** — lets the LLM itself decide intent/routing dynamically; chosen when the agent must handle open-ended, conversational requests without exhaustively authored trigger phrases.

*Agent flows and prompt actions.* Agent flows are Copilot Studio's automation layer (trigger + actions), analogous to Power Automate but scoped for agent behaviors. **Prompt actions** are reusable, typed prompt operations: **transform** (reshape content), **summarize** (condense), **extract** (pull structured data out of unstructured text), **generate** (produce new content), and **classify** (categorize input).

*Demo 1 — Microsoft Foundry expense agent.* The instructor walks through: creating a new Foundry **project**; creating an **agent** (the "expense agent"); selecting models — **GPT-4.1** for the primary chat/reasoning model and **text-embedding-3-small** for embeddings; attaching the **code interpreter** tool for calculations; uploading files and enabling **file search/RAG grounding** so the agent can answer questions against uploaded expense policy documents; creating a **version** of the agent configuration; and **publishing** it to make it callable. The demo emphasizes that model choice (chat model + embedding model) and tool attachment are the two central configuration decisions in Foundry agent building.

*Demo 2 — Copilot Studio expense agent.* The instructor uses the **describe-to-create** experience (natural-language agent creation) to scaffold a new agent; sets **instructions** (the agent's persona/behavior guidance); configures **knowledge** (and explicitly disables public web search to keep answers grounded only in provided sources); builds **topics** — a default greeting topic plus a custom topic ("ask about expense contact") demonstrating how to author a specific conversational path; reviews **system topics** that ship automatically; configures **settings** including **authentication** and **channels** (where the agent will be published/consumed); uploads a **knowledge file** (expense policy document); and tests the agent conversationally to confirm it grounds its answer in the uploaded file rather than inventing an answer.

**Exam pointers**
- Memorize the ROI benefit formula components and the derived metrics (Net benefit, ROI %, Payback period) — expect a calculation-style or "what does this formula represent" question.
- Know the five ROI categories (productivity, cost savings, revenue impact, risk reduction, strategic value) and the five TCO cost domains (infrastructure, development, data preparation, expertise, operations) — these are distinct lists, don't conflate them.
- Build vs. buy vs. extend: buy = lowest dev/expertise cost but least fit; build = highest fit but highest cost; extend = middle ground — expect a scenario question asking which path fits a given cost/fit tradeoff.
- Be able to distinguish task agents (goal/skills/actions/knowledge/context/safety) from autonomous agents (goal/trigger/instructions/knowledge/actions) from prompt/response agents (system topics/generative answers/condition nodes) — this is a heavily tested comparison.
- Know when to route to an SLM (narrow, latency/cost-sensitive tasks) vs. an LLM (complex reasoning/generation).
- RAG pipeline order: chunk → embed/index (Azure AI Search) → hybrid search retrieval → augment prompt with retrieved context → generate grounded response.
- NLU decision: Standard NLU (fast, simple trigger phrases) vs. Azure CLU (higher precision, more varied phrasing, trainable) vs. Generative AI orchestration (open-ended, dynamic routing).
- Remember the specific models used in the Foundry demo: **GPT-4.1** (chat/reasoning) and **text-embedding-3-small** (embeddings) — and that **code interpreter** and **file search** are the two tools attached.
- In the Copilot Studio demo, note that disabling public web search was a deliberate grounding-control decision to keep the agent's answers scoped to uploaded knowledge only.

---

## Day 3. Extending, Orchestrating, and Optimizing Enterprise AI Solutions

**What it covers** — Day 3 moves from building a single agent to extending and orchestrating agents across the enterprise: when custom models are justified, the Copilot Studio extensibility layers and Model Context Protocol (MCP), advanced agent behaviors (deep reasoning, voice), integration architectures for Dynamics 365 F&O, Microsoft 365, Copilot for Sales/Service, and Power Platform, and finally how to monitor and tune agents once live.

**Key concepts**
- **Custom model triggers (Foundry)** — conditions justifying training/fine-tuning: specialized domain vocabulary, strict cost/latency envelopes, proprietary data patterns not addressable via RAG alone.
- **Model catalog (Foundry)** — searchable gallery of foundation and open-source models with leaderboard comparisons across quality, safety, cost, and throughput.
- **Fine-tuning pipeline** — the process of adapting a base model on custom data (data prep → training job → evaluation → deployment).
- **Deployment topologies** — patterns for hosting a custom/fine-tuned model (e.g., managed online endpoint, batch, serverless).
- **Operational competencies (custom models)** — the ongoing skills/practices needed to run a custom model in production (monitoring, retraining, drift detection).
- **Agent governance lifecycle** — design → build → test → deploy → monitor → improve; the standard lifecycle applied to designing agents in M365 Copilot.
- **Copilot Studio 4-layer extensibility model** — instruction layer, capability layer, integration layer, pro-code layer.
- **Instruction layer** — extending an agent purely through natural-language instructions/persona tuning.
- **Capability layer** — adding topics, knowledge sources, and generative answers.
- **Integration layer** — connecting to external systems via connectors, plugins, and actions.
- **Pro-code layer** — extending via custom code, APIs, and the Agents SDK/Foundry tooling for maximum flexibility.
- **Model Context Protocol (MCP)** — an open protocol allowing agents to discover and call external tools/context providers in a standardized way.
- **MCP integration patterns (3)** — context-driven reasoning (agent pulls context from an MCP server to inform reasoning), workflow-integrated (MCP tools are called as steps within a workflow), multi-agent collaboration via MCP (agents share tools/context through MCP as a common interface).
- **Deep reasoning (agent behavior)** — a mode where the agent performs extended, multi-step reasoning before answering, used for complex problems at the cost of latency.
- **Standard reasoning** — the default, faster single-pass response mode.
- **Voice mode** — agent behavior enabling spoken interaction (speech-to-text/text-to-speech integration).
- **Dynamics 365 Finance & Operations (F&O) AI orchestration architecture** — the pattern by which F&O surfaces agent capability (chat, plugins) inside its business application context.
- **Microsoft 365 agents design framework (5 steps)** — frame → map → guardrails → prototype → operationalize.
- **Frame** — define the business problem and desired outcome clearly.
- **Map** — map the problem to data, systems, and users involved.
- **Guardrails** — define the responsible AI, security, and governance constraints upfront.
- **Prototype** — build a fast, low-fidelity version to validate the concept.
- **Operationalize** — harden, govern, and scale the prototype into production.
- **Pre-flight checklist (M365 agents)** — a validation checklist before launching an M365 agent (covers readiness across data, security, UX, and governance dimensions).
- **Copilot for Sales** — prebuilt Copilot experience surfacing CRM/sales data and actions inside Outlook/Teams.
- **Copilot for Service** — prebuilt Copilot experience for customer service scenarios (case summarization, knowledge search, response drafting).
- **KPIs for Copilot for Sales/Service** — metrics used to measure adoption/impact of these prebuilt agents (e.g., time saved, case deflection, adoption rate).
- **Power Platform AI features** — AI Hub, Copilot in Power Apps, Copilot in Power Automate, Copilot in Power Pages, AI Builder.
- **AI Hub** — a central place within Power Platform to discover, manage, and govern AI capabilities/models used across apps.
- **AI Builder** — low-code AI model building tool (prebuilt and custom models) usable inside Power Apps/Automate.
- **F&O agent chat interoperability via plugins** — mechanism allowing F&O's embedded chat to invoke external agent capabilities through a plugin architecture.
- **AI agent monitoring (5 key areas)** — operational health, performance, quality, usage insights, risk/compliance/security.
- **Operational health** — is the agent up, responsive, and error-free at the infrastructure level?
- **Performance** — latency, throughput, and efficiency metrics.
- **Quality** — accuracy, relevance, and satisfaction of agent responses.
- **Usage insights** — adoption, engagement, and usage pattern analytics.
- **Risk/compliance/security** — monitoring for policy violations, security incidents, and compliance drift.
- **Backlog/feedback analysis categorization** — a taxonomy for triaging user feedback and issues (e.g., bug, enhancement, training gap, data gap) to feed continuous improvement.
- **AI diagnostic tuning workflow** — the loop of identifying an issue, diagnosing root cause (prompt, data, model, or orchestration), applying a fix, and re-validating.
- **Performance monitoring metrics** — specific measurable indicators (e.g., response latency, task completion rate, escalation rate) tracked over time to detect degradation or improvement.

**Detailed notes**

*Custom models in Foundry.* The course reiterates when a custom/fine-tuned model is worth the investment: when the domain vocabulary is specialized enough that foundation models underperform, when cost/latency requirements are strict enough that a smaller fine-tuned model beats a general-purpose LLM, or when proprietary patterns in the data need to be baked into model weights rather than retrieved via RAG at inference time. The **model catalog** is the starting point for model selection — the demo shows a leaderboard comparing candidate models across **quality, safety, cost, and throughput**, letting the architect make a data-driven model choice rather than an assumption-driven one. Once a model is selected, the **fine-tuning pipeline** (data preparation, training job, evaluation, deployment) is used to adapt it, and the resulting model is hosted via one of several **deployment topologies** depending on traffic pattern and latency needs. Running a custom model in production requires ongoing **operational competencies**: monitoring for drift, periodic retraining, and cost management — this is explicitly called out as a heavier ongoing burden than using a managed foundation model.

*Designing agents in M365 Copilot — governance lifecycle.* Agents built for or extending Microsoft 365 Copilot follow a **design → build → test → deploy → monitor → improve** lifecycle. This lifecycle is the throughline that connects Day 3's design content to Day 4's testing/ALM content — architects are told to plan for the full lifecycle up front, not just the build phase.

*Copilot Studio extensibility — the 4-layer model.* Extending a Copilot Studio agent is described as a stack of four increasingly powerful (and increasingly skill-intensive) layers:
1. **Instruction layer** — simplest extension: refine natural-language instructions/persona.
2. **Capability layer** — add topics, additional knowledge sources, generative answers configuration.
3. **Integration layer** — connect to external systems: connectors, Power Automate flows, plugins, actions calling APIs.
4. **Pro-code layer** — full custom code extensibility (custom connectors, Agents SDK, calling into Foundry-hosted custom logic) for scenarios the low-code layers can't reach.
Architects are expected to recommend the *lowest* layer that satisfies a requirement, escalating to pro-code only when necessary.

*Model Context Protocol (MCP) in Copilot Studio.* MCP is introduced as the standardized way for an agent to discover and invoke external tools/context providers, decoupling the agent from bespoke integration code. Three integration patterns are taught:
- **Context-driven reasoning** — the agent queries an MCP server to pull in relevant context that informs its reasoning before responding.
- **Workflow-integrated** — MCP tools are invoked as explicit steps inside a larger workflow/topic.
- **Multi-agent collaboration via MCP** — multiple agents share a common set of MCP-exposed tools/context, allowing them to collaborate without bespoke point-to-point integration.
The demo walks through Copilot Studio's MCP tools documentation to show how an MCP server is registered and its tools surfaced to the agent as callable actions.

*Advanced agent behaviors.* Two behavior dimensions are introduced:
- **Reasoning depth** — **standard** (fast, single-pass) vs. **deep reasoning** (extended, multi-step reasoning for complex problems, trading latency for correctness). Architects choose deep reasoning only where task complexity justifies the added latency/cost.
- **Voice mode** — enables the agent to interact via speech, layering speech-to-text and text-to-speech onto the same underlying agent logic.

*Dynamics 365 F&O AI orchestration architecture.* F&O surfaces agent/Copilot capability inside its own application surface via an embedded chat experience, with **plugins** enabling that chat to call out to external agent capabilities — this "F&O agent chat interoperability via plugins" pattern lets F&O extend beyond its native AI features without a full custom build.

*Microsoft 365 agents design framework — 5 steps.* This is the structured design methodology taught for any M365-embedded agent:
1. **Frame** — clearly articulate the business problem and desired outcome (avoid building a solution looking for a problem).
2. **Map** — map the problem onto concrete data sources, systems, and user personas involved.
3. **Guardrails** — define responsible AI, security, and governance constraints before building (not retrofitted after).
4. **Prototype** — build a fast, low-fidelity version to validate feasibility and value with real users.
5. **Operationalize** — harden the validated prototype for production: scale, govern, monitor.
A **pre-flight checklist** is used before launch to validate readiness across data, security, UX, and governance dimensions — treated as a gate before go-live.

*Copilot for Sales and Copilot for Service.* Both are presented as prebuilt, extensible Copilot experiences:
- **Copilot for Sales** surfaces CRM/sales data and suggested actions directly inside Outlook and Teams, reducing context switching for sellers.
- **Copilot for Service** supports customer service agents with case summarization, knowledge search, and response drafting.
Both are measured with KPIs such as time saved per interaction, case/ticket deflection rate, and adoption/usage rate — architects are expected to define these KPIs as part of the business case (tying back to Day 2's ROI framework).

*Power Platform AI features.* The course surveys how AI is embedded across Power Platform:
- **AI Hub** — a central governance and discovery point for AI capabilities/models used across the platform.
- **Copilot in Power Apps** — natural-language app building/assistance.
- **Copilot in Power Automate** — natural-language flow building/assistance.
- **Copilot in Power Pages** — natural-language website building/assistance.
- **AI Builder** — low-code model building (prebuilt models like form processing, and custom model training) consumable from Power Apps/Automate.
Architects should recognize these as extension points that may satisfy a requirement without needing a bespoke Foundry/Copilot Studio build.

*Monitoring and tuning agents in production.* Five monitoring areas are defined for ongoing agent operations: **operational health** (uptime/errors), **performance** (latency/throughput), **quality** (accuracy/relevance/satisfaction), **usage insights** (adoption/engagement), and **risk/compliance/security** (policy and security posture). Feedback and backlog items are triaged using a categorization scheme (e.g., bug vs. enhancement vs. training gap vs. data gap) so issues get routed to the right remediation path. The **AI diagnostic tuning workflow** taught is: identify the issue → diagnose root cause (is it the prompt, the grounding data, the model itself, or the orchestration logic?) → apply the targeted fix → re-validate against the original metric. Performance monitoring metrics such as response latency, task completion rate, and escalation rate are tracked over time as the primary signals of whether an agent is improving, stable, or degrading (drifting).

**Exam pointers**
- Know the triggers for building a custom model vs. using RAG with a foundation model — specialized vocabulary, cost/latency constraints, proprietary data patterns baked into weights.
- Model catalog comparisons are made across four axes: **quality, safety, cost, throughput** — a scenario may ask which axis is most relevant to a stated constraint (e.g., "must respond in under 200ms" → throughput/cost, not quality alone).
- The M365 Copilot agent governance lifecycle is: **design → build → test → deploy → monitor → improve** — memorize the order.
- Copilot Studio's 4 extensibility layers in order of increasing power/complexity: **instruction → capability → integration → pro-code** — always recommend the lowest sufficient layer.
- MCP's three integration patterns: **context-driven reasoning, workflow-integrated, multi-agent collaboration** — be able to match a scenario description to the correct pattern name.
- Deep reasoning trades latency for better handling of complex, multi-step problems; standard reasoning is the default fast path — pick based on task complexity, not by default.
- The M365 agents design framework order is: **frame → map → guardrails → prototype → operationalize** — note that guardrails come *before* prototyping, not after.
- Copilot for Sales lives in Outlook/Teams surfacing CRM data; Copilot for Service focuses on case summarization/knowledge search/response drafting — don't swap these.
- Power Platform AI surface: **AI Hub** (governance/discovery), **AI Builder** (low-code model building), plus Copilot embedded in Power Apps/Automate/Pages.
- The five agent monitoring areas are **operational health, performance, quality, usage insights, risk/compliance/security** — this list is distinct from (but complementary to) the five grounding data dimensions from Day 1; don't confuse them on the exam.

---

## Day 4. Testing, Governance, ALM, and Responsible AI for Enterprise Solutions

**What it covers** — Day 4 is the heaviest governance/compliance day: it defines how to test agents and custom models (metrics, thresholds, prompt validation), how to run Application Lifecycle Management (ALM) for AI data, Copilot Studio agents/connectors/actions, Foundry agents, and custom models, and closes with security, governance, and a full review of the six Responsible AI principles. This maps most directly onto the "Deploy an AI-powered business solution" exam domain (40-45% weight).

**Key concepts**
- **Quantitative testing metrics** — numeric measures (latency, accuracy, error rate) used to evaluate agent behavior objectively.
- **Qualitative testing metrics** — subjective/human-judged measures (tone, helpfulness, satisfaction) used alongside quantitative ones.
- **Behavioral testing** — testing how an agent behaves across edge cases, adversarial inputs, and multi-turn conversations.
- **Observability metrics** — telemetry/traceability signals (logs, traces) that let an architect see *why* an agent produced a given output.
- **Agent testing lifecycle** — the repeatable process of defining test cases, executing them, scoring against thresholds, and iterating.
- **Custom AI model validation criteria** — explicit example thresholds used in the course: **latency < 2 seconds, accuracy ≥ 90%, hallucination rate ≤ 3%, satisfaction ≥ 4.5/5**.
- **Hallucination rate** — the percentage of responses containing fabricated or unsupported content.
- **Copilot prompt validation best practices** — guidance for testing/tuning prompts before release (clarity, grounding, edge-case coverage, iteration).
- **Prompt validation lifecycle** — draft prompt → test against representative inputs → measure against criteria → refine → re-test.
- **End-to-end multi-app test scenario** — a test design spanning multiple connected apps (e.g., a Dynamics 365 process touching several modules) to validate an agent across a realistic business journey, not just in isolation.
- **Copilot-assisted test case generation** — using Copilot itself to help author test cases, described via a maturity ladder.
- **Test case generation maturity ladder (levels 1-6)** — a progression from manual test authoring (level 1) to fully AI-assisted, continuously updated test suites (level 6).
- **ALM (Application Lifecycle Management)** — the disciplined process of managing an application/agent/data asset from creation through retirement, including environment promotion and governance gates.
- **7-phase AI data lifecycle (A-G)** — a lettered lifecycle for data used to ground/train agents, moving from raw ingestion through validated, production-ready ("gold") data, with promotion gates between phases.
- **Red dataset / gold dataset pattern** — "red" data is unvalidated/raw; "gold" data has passed quality gates and is safe for production grounding/training; the terms mark a maturity checkpoint in the data lifecycle.
- **Promotion gate** — a formal checkpoint that data, an agent, or a model must pass before moving to the next environment/lifecycle phase.
- **RACI chart** — Responsible, Accountable, Consulted, Informed — an ownership model applied to data, agents, and governance decisions.
- **Data residency** — the requirement that data (and its processing) remain within specified geographic/legal boundaries.
- **Environment tiers (dev/test/prod)** — the standard three-environment promotion path for Copilot Studio agents, connectors, actions, and Foundry agents.
- **Control plane (Foundry)** — the management layer governing how Foundry agents/models are deployed, versioned, and promoted.
- **Custom AI model ALM — four pillars** — consistency, compliance, repeatability, operational readiness.
- **Consistency** — the model behaves the same way given the same input, across time and environments.
- **Compliance** — the model and its lifecycle meet regulatory/policy requirements.
- **Repeatability** — the training/deployment process can be reliably reproduced.
- **Operational readiness** — the model has the monitoring, support, and rollback processes needed to run in production.
- **Managed identity** — an Azure AD identity automatically managed for a resource, removing the need to store credentials in code/config.
- **Least privilege** — granting only the minimum access rights needed to perform a function.
- **Separation of duties** — dividing critical tasks among different people/roles so no single individual has unchecked control.
- **Zero Trust** — a security model that assumes no implicit trust and continuously verifies identity, device, and access for every request.
- **RBAC (Role-Based Access Control)** — assigning permissions based on role rather than individual identity.
- **Model hardening** — security measures applied to reduce a model's attack surface (input validation, output filtering, rate limiting).
- **AI vulnerabilities** — categories of risk specific to AI systems (e.g., data poisoning, model extraction, adversarial inputs).
- **Prompt manipulation / prompt injection** — an attack where malicious input tries to override an agent's instructions or extract sensitive data/behavior.
- **Prompt manipulation mitigation** — techniques (input sanitization, instruction hierarchy, content filters) to reduce prompt injection risk.
- **Guardrails / content filters** — configurable controls (e.g., in Foundry) that block or flag content by category and severity.
- **Block lists** — explicit lists of disallowed terms/phrases enforced by content filters.
- **Risk severity controls** — configurable thresholds (low/medium/high) determining how aggressively a content filter blocks content.
- **Responsible AI principles (six, revisited)** — fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability.
- **Access controls on grounding data** — permissions and data-loss-prevention style controls ensuring an agent only surfaces data the requesting user is authorized to see.

**Detailed notes**

*Testing AI agents.* The course frames agent testing across four lenses: **quantitative metrics** (objective numbers like latency, accuracy, error rate), **qualitative metrics** (human-judged tone, helpfulness, satisfaction), **behavioral testing** (how the agent handles edge cases, adversarial prompts, multi-turn drift), and **observability** (logs/traces that explain *why* a given output occurred, essential for root-cause diagnosis). The **agent testing lifecycle** ties these together: define test cases across all four lenses → execute → score against thresholds → iterate/re-test.

*Custom AI model validation criteria.* The course gives concrete example thresholds an architect might set for a production model: **latency under 2 seconds**, **accuracy at or above 90%**, **hallucination rate at or below 3%**, and **user satisfaction at or above 4.5 out of 5**. These are presented as illustrative defaults — the exam expects understanding of the *categories* (latency, accuracy, hallucination, satisfaction) and that thresholds must be explicitly defined and validated before production release, more than memorizing the exact numbers, though the specific example numbers above are worth remembering.

*Copilot prompt validation.* Best practices taught: write clear, unambiguous prompts; ensure prompts explicitly reference and prioritize grounding data over model general knowledge; test against a representative and adversarial set of inputs; and iterate. The **prompt validation lifecycle** is: draft → test against representative inputs → measure against defined criteria → refine → re-test — a smaller-scope cousin of the agent testing lifecycle applied specifically to prompt engineering.

*End-to-end multi-app test scenario design.* Because real Dynamics 365 business processes often span multiple apps/modules (e.g., a sales order flowing into finance and operations), test design must validate the agent across the *entire* journey, not just a single app in isolation — otherwise integration-level failures (hand-off errors, data mismatches) go undetected until production.

*Copilot-assisted test case generation — maturity ladder.* A six-level maturity progression is described for how much AI assistance is used in generating test cases, moving from fully manual test authoring at level 1 toward fully AI-assisted, continuously self-updating test suites at level 6. Architects are encouraged to assess and deliberately advance an organization's position on this ladder rather than staying at ad hoc manual testing.

*ALM process design — AI data.* Data used to ground or train agents follows a **7-phase lifecycle labeled A through G**, with **promotion gates** between phases that require the data to meet quality/compliance criteria before advancing. The **red/gold dataset pattern** marks this maturity journey simply: **red** = raw/unvalidated data, **gold** = validated, production-ready data cleared for grounding or training use. Ownership of each phase and gate is assigned via a **RACI chart** (Responsible, Accountable, Consulted, Informed), and **data residency** requirements (keeping data within required geographic/legal boundaries) must be respected throughout the lifecycle.

*ALM process design — Copilot Studio agents, connectors, and actions.* These follow the standard **dev/test/prod environment tiers**: an agent (and its connectors/actions) is built and iterated in dev, validated in test, and only promoted to prod after passing defined criteria — mirroring conventional application ALM but applied to conversational agent assets.

*ALM process design — Microsoft Foundry agents.* Foundry agents are managed through a **control plane** that governs versioning and deployment, with the same **environment tiers** and **promotion gates** ensuring an agent version is validated before it reaches production traffic.

*ALM process design — custom AI models.* Custom model ALM is organized around **four pillars**:
1. **Consistency** — same input yields same/expected output across time/environment.
2. **Compliance** — meets regulatory and internal policy requirements throughout its lifecycle.
3. **Repeatability** — the training and deployment pipeline can be re-run reliably to reproduce or update the model.
4. **Operational readiness** — monitoring, alerting, support, and rollback plans exist before go-live.

*Security for agents.* The course applies standard enterprise security patterns to agents: **managed identities** (avoid storing credentials), **least privilege** (grant only necessary access), and **separation of duties** (no single person/role has unchecked end-to-end control over a sensitive process). 

*Governance for agents.* Ownership must be explicit — every agent should have a named owner and a **RACI** assignment covering its full lifecycle, not just its initial build.

*Model security.* A **Zero Trust** posture (verify explicitly, assume breach, least privilege access) underpins model security, implemented via **RBAC** and **model hardening** measures (input validation, output filtering, rate limiting) to reduce the model's attack surface.

*AI vulnerabilities and prompt manipulation mitigation.* The course names categories of AI-specific vulnerability (e.g., data poisoning of training/grounding data, model extraction attempts, adversarial inputs) with **prompt manipulation/prompt injection** singled out as a headline risk: an attacker crafts input designed to override the agent's instructions or exfiltrate sensitive information/behavior. Mitigations include input sanitization, enforcing an instruction hierarchy (system instructions outrank user input), and content filtering.

*Responsible AI principles — full review.* The six principles (fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability) are revisited with governance-specific framing: fairness and inclusiveness govern how the agent treats different user groups; reliability and safety govern robustness and failure handling; privacy and security govern data protection; transparency governs disclosure (users should know they're interacting with AI and understand its limitations); accountability governs human ownership of outcomes.

*Access controls on grounding data.* An agent must only surface data the *requesting user* is authorized to see — grounding architecture has to respect existing permission boundaries (e.g., a document library's access control list) rather than flattening all knowledge into a single ungated index, or the agent itself becomes a data-leakage vector.

*Demo — Copilot Studio analytics tab.* The instructor walks through the built-in analytics tab, showing session volume, topic performance, and engagement metrics that feed into the "quality" and "usage insights" monitoring areas from Day 3.

*Demo — Microsoft Foundry guardrails and content filters.* Shown in both the new and legacy portal UI: configuring **content filters** by category and **risk severity** (low/medium/high thresholds), and defining **block lists** of disallowed terms/phrases — demonstrating how an architect operationalizes the AI vulnerability mitigations and Responsible AI principles discussed earlier in the day.

**Exam pointers**
- Know the four testing lenses: **quantitative, qualitative, behavioral, observability** — and that the testing lifecycle is define → execute → score → iterate.
- Memorize the example custom model validation thresholds: **latency < 2s, accuracy ≥ 90%, hallucination ≤ 3%, satisfaction ≥ 4.5/5** — likely tested as "which of these is NOT one of the stated example criteria" or similar recognition questions.
- The AI data lifecycle runs through **7 phases labeled A-G** with **promotion gates**, and uses the **red (raw/unvalidated) → gold (validated/production-ready)** naming convention — do not confuse "gold" here with any unrelated Microsoft "Gold" certification/partner tier terminology.
- Custom model ALM's four pillars: **consistency, compliance, repeatability, operational readiness** — a distinct list from the testing metrics; expect a matching/list-recall question.
- Copilot Studio agents/connectors/actions and Foundry agents both use **dev/test/prod environment tiers** with promotion gates — Foundry additionally routes through a **control plane**.
- Security triad for agents: **managed identity, least privilege, separation of duties** — plus **Zero Trust** and **RBAC** for model security specifically.
- Prompt manipulation/prompt injection is the headline AI-specific security risk — know the mitigations (input sanitization, instruction hierarchy, content filtering).
- Content filter configuration in Foundry involves **category + risk severity (low/medium/high)** plus **block lists** — this maps to a hands-on demo and could appear as a "how would you configure Foundry to prevent X" scenario question.
- The six Responsible AI principles reappear here with governance framing — expect at least one question per exam attempt referencing this list, sometimes phrased as "which principle is being addressed by [a specific governance control]."
- Access controls on grounding data must respect the *requesting user's* existing permissions — a common trap answer is assuming all grounding data is equally accessible to all users once indexed.

---

## Day 5. Getting Ready for the Certification: AB-100

**What it covers** — Day 5 is the dedicated exam-prep session: it walks through the official Microsoft Learn AB-100 certification page, explains certification levels and renewal policy, breaks down the exam skill weightings, covers exam logistics and question formats end-to-end (including a full sandbox exam walkthrough), and then conducts a comprehensive module-by-module revision restating dozens of quiz questions and their correct answers across all four prior days.

**Key concepts**
- **Certification levels** — fundamental, intermediate/associate, advanced/expert; AB-100 sits at the **advanced ("three-star")** level.
- **12-month renewal policy** — the certification must be renewed annually (via a free online renewal assessment, per standard Microsoft Certifications practice referenced in the course).
- **Prerequisite certifications** — foundational certifications recommended/expected before attempting AB-100 (e.g., prior AI/Copilot fundamentals-level credentials).
- **Exam skill weightings** — Plan an AI-powered business solution (25-30%), Design an AI-powered business solution (25-30%), Deploy an AI-powered business solution (40-45%).
- **Exam duration** — 100 minutes of exam time plus a 30-minute check-in/setup window.
- **Pearson VUE** — the exam delivery/proctoring vendor used for scheduling and taking the exam.
- **Personal Microsoft account (MSA) guidance** — advice to register for the exam using a personal MSA rather than a work/organizational account to avoid access issues.
- **Question types** — multiple choice, multi-select, build-list/reorder, active screen, hot area, exhibits, yes/no, case studies.
- **No negative marking** — incorrect answers are not penalized beyond not scoring, so guessing is always better than leaving a question blank.
- **Passing score** — 700 out of 1000.
- **Case study questions** — a scenario-based question cluster referencing a shared business scenario/exhibit set.
- **Sandbox/practice exam** — a simulated exam environment used to rehearse the real exam interface and pacing.

**Detailed notes**

*Microsoft Learn AB-100 page walkthrough.* The instructor walks through the official certification page on Microsoft Learn, showing where to find the exam skills outline (the authoritative, periodically updated list of what's tested), study resources, and scheduling links. Learners are advised to always check the live skills outline close to their exam date since weightings and topics can be refreshed.

*Certification levels and renewal.* AB-100 is positioned at the **advanced/expert "three-star"** tier of Microsoft's certification system (above fundamentals and intermediate/associate levels), reflecting that it tests judgement and architecture-level decision-making rather than tool operation alone. Like other Microsoft role-based certifications, it is subject to a **12-month renewal cycle**, typically satisfied via a free online renewal assessment before expiry rather than a full re-sit.

*Prerequisites.* The course recommends holding foundational-level Microsoft AI/Copilot certifications before attempting AB-100, since the exam assumes familiarity with basic platform concepts (Copilot Studio, Foundry, Power Platform basics) and focuses its own testing on architecture and business-judgement questions layered on top of that base knowledge.

*Exam skill weightings.* The exam is divided into three domains:
- **Plan an AI-powered business solution — 25-30%** (covers material from Day 1 and the ROI/TCO portions of Day 2: business case, use case identification, platform selection).
- **Design an AI-powered business solution — 25-30%** (covers agent architecture choices, orchestration patterns, extensibility, and integration content from Days 1-3).
- **Deploy an AI-powered business solution — 40-45%** (the largest single domain — covers testing, ALM, governance, security, and Responsible AI content from Day 4, plus monitoring/tuning from Day 3).
The heavy weighting toward "Deploy" is called out explicitly as a reason to over-invest study time in Day 4's testing/governance/ALM/security content and Day 3's monitoring content, rather than assuming the exam is evenly split across the three domains.

*Exam logistics.* The exam runs **100 minutes**, with an additional **30-minute check-in** window for identity verification and environment setup (webcam/room scan for remote proctoring). Registration is through **Pearson VUE**; learners are advised to register using a **personal Microsoft account (MSA)** rather than a work/organizational account to avoid conflicts with organizational identity policies that can complicate scheduling or result verification. 

*Question formats.* The exam uses a mix of formats: **multiple choice** (single correct answer), **multi-select** (choose all that apply), **build list/reorder** (arrange steps or items in correct sequence — directly tests the various "order matters" lists taught across the course, e.g., the CAF agent adoption model, the M365 agents design framework, the ALM data lifecycle phases), **active screen** (interact with a simulated UI element to select an answer), **hot area** (click/select a region of an image or diagram), **exhibits** (a reference diagram/table provided alongside the question), **yes/no** (binary judgement statements, sometimes presented as a set), and **case studies** (a shared scenario with multiple related questions, sometimes requiring the learner to review scenario information before answers are revealed). **There is no negative marking** — an unanswered question scores zero just like a wrong answer, so learners are told explicitly to attempt every question rather than skip.

*Passing score.* A candidate needs **700 out of 1000** to pass.

*Sandbox exam walkthrough.* The instructor demonstrates the actual exam-taking interface via a practice/sandbox exam: how to navigate between questions, flag questions for review, use the provided exhibit/reference panel, and submit. This is presented primarily to reduce first-time exam-interface anxiety rather than to teach new content.

*Module-by-module revision.* The remainder of Day 5 is a comprehensive quiz-style review walking back through all 11 modules covered in Days 1-4, restating dozens of questions and confirming correct answers — effectively a second pass reinforcing every concept already captured in the Day 1-4 sections above (agent types, orchestration patterns, ROI/TCO formulas, grounding data dimensions, extensibility layers, MCP patterns, ALM phases, Responsible AI principles, security controls, and monitoring areas). No materially new concepts are introduced in this revision pass beyond restatement and reinforcement of earlier content; sample questions from this pass are reproduced in the Exam Strategy section below.

**Exam pointers**
- Remember the three domain weightings precisely: **Plan 25-30%, Design 25-30%, Deploy 40-45%** — Deploy is nearly half the exam, so testing/governance/ALM/security/Responsible AI content (Day 4) deserves proportionally more review time.
- Exam timing: **100 minutes + 30-minute check-in**. Passing score: **700/1000**. No negative marking — always answer every question.
- Register via **Pearson VUE**, preferably with a **personal MSA**, to avoid organizational-account friction.
- Know all eight question formats by name: multiple choice, multi-select, build-list/reorder, active screen, hot area, exhibits, yes/no, case studies — "build-list/reorder" questions are the most likely format for testing the many ordered lists taught across the course (CAF agent adoption model, M365 agents design framework, ALM data lifecycle A-G, agent testing lifecycle, prompt validation lifecycle).
- AB-100 is an **advanced/expert-level ("three-star")** certification with a **12-month renewal** requirement.

---

## Architecture decision guide

| Decision | Choose this when... | Reference |
|---|---|---|
| **SaaS/prebuilt agent (e.g., M365 Copilot agent, Copilot for Sales/Service)** | An out-of-the-box capability already matches the business need; fastest time-to-value; least customization. | Day 1, Day 3 |
| **Copilot Studio** | Business users/makers need a conversational or lightly autonomous agent using topics, generative answers, and connectors; low-code skills available; moderate customization. | Day 1, Day 2 |
| **Microsoft/Azure AI Foundry** | The scenario needs custom/fine-tuned models, pro-code tooling (code interpreter, custom functions), complex multi-agent orchestration, or tighter runtime control. | Day 1, Day 2, Day 3 |
| **Containers/custom infrastructure** | Extreme customization, data residency, or infrastructure control needs exceed managed platform capability. | Day 1 |
| **Build (custom agent)** | Requirement is not met by any existing SaaS/extension option and justifies the higher development/expertise/operations cost. | Day 2 |
| **Buy (use existing SaaS/prebuilt agent)** | Requirement is generic enough that a prebuilt agent fits with minimal customization; minimizes dev/expertise cost. | Day 2 |
| **Extend (existing Copilot/agent)** | Requirement is close to but not fully covered by an existing agent; middle-cost, middle-fit option. | Day 2, Day 3 (4-layer extensibility model) |
| **Single agent** | Scenario is narrow, cohesive, and doesn't need domain-specialized skills or separate security boundaries. | Day 1 |
| **Multi-agent** | Scenario spans multiple domains, needs specialization, requires separate security/data boundaries, or benefits from dynamic planning. | Day 1 |
| **Sequential orchestration** | Steps must happen in a fixed order, each depending on the prior output. | Day 1 |
| **Concurrent orchestration** | Multiple independent analyses are needed on the same input, aggregated afterward. | Day 1 |
| **Group chat orchestration** | Multiple agents (and possibly a human) need to jointly discuss/contribute to a shared conversation. | Day 1 |
| **Handoff orchestration** | An agent needs to detect out-of-scope requests and transfer to a more appropriate agent. | Day 1 |
| **Magentic orchestration** | The problem is open-ended/complex and needs dynamic, plan-driven delegation rather than a fixed script. | Day 1 |
| **Task agent** | A specific, bounded task must be completed reliably (goal/skills/actions/knowledge/context/safety). | Day 2 |
| **Autonomous agent** | The agent should run independently once triggered by an event, without turn-by-turn guidance (goal/trigger/instructions/knowledge/actions). | Day 2 |
| **Prompt & response agent** | The need is primarily conversational Q&A grounded in knowledge (system topics/generative answers/condition nodes). | Day 2 |
| **Standard NLU** | Trigger phrases are well-defined and simple; fastest setup. | Day 2 |
| **Azure CLU** | Higher-precision, more varied intent recognition is required and can be trained. | Day 2 |
| **Generative AI orchestration** | Requests are open-ended/conversational and shouldn't require exhaustive trigger-phrase authoring. | Day 1, Day 2 |
| **RAG / hybrid search grounding** | The agent needs to answer from enterprise documents/data without retraining a model; default grounding architecture. | Day 2 |
| **Custom/fine-tuned model** | Domain vocabulary is highly specialized, strict cost/latency budgets rule out large foundation models, or proprietary patterns must be embedded in weights. | Day 1, Day 3 |
| **SLM routing** | Task is narrow, latency-sensitive, or cost-sensitive. | Day 2 |
| **LLM routing** | Task requires broad reasoning or complex generation. | Day 2 |
| **Deep reasoning behavior** | Task complexity justifies extra latency for better multi-step reasoning. | Day 3 |
| **Standard reasoning behavior** | Default fast, single-pass responses are sufficient. | Day 3 |
| **Instruction-layer extension** | A simple persona/behavior tweak solves the requirement. | Day 3 |
| **Capability-layer extension** | New topics/knowledge/generative answers are needed. | Day 3 |
| **Integration-layer extension** | External systems must be connected via connectors/flows/actions. | Day 3 |
| **Pro-code-layer extension** | Requirement exceeds low-code capability; custom code/APIs/Agents SDK needed. | Day 3 |
| **MCP context-driven reasoning** | The agent needs external context pulled in to inform reasoning. | Day 3 |
| **MCP workflow-integrated** | External tools must be invoked as explicit workflow steps. | Day 3 |
| **MCP multi-agent collaboration** | Multiple agents need a shared, standardized tool/context interface. | Day 3 |

---

## Governance, ALM and Responsible AI reference

**Responsible AI — six principles** (established Day 1, applied throughout): fairness; reliability and safety; privacy and security; inclusiveness; transparency; accountability.

**CAF-based agent adoption model** (Day 1): strategy → plan → ready → govern → secure → manage.

**Microsoft 365 agents design framework** (Day 3): frame → map → guardrails → prototype → operationalize, validated by a pre-flight checklist before launch.

**Agent governance lifecycle** (Day 3): design → build → test → deploy → monitor → improve.

**Testing framework** (Day 4): quantitative, qualitative, behavioral, and observability metrics, run through a define → execute → score → iterate testing lifecycle. Example custom-model validation thresholds: latency < 2s, accuracy ≥ 90%, hallucination ≤ 3%, satisfaction ≥ 4.5/5.

**Prompt validation lifecycle** (Day 4): draft → test against representative inputs → measure against criteria → refine → re-test.

**AI data lifecycle** (Day 4): 7 phases labeled A through G, gated by promotion gates, following the red (raw/unvalidated) → gold (validated/production-ready) maturity pattern, owned via a RACI chart, respecting data residency requirements throughout.

**ALM for Copilot Studio agents/connectors/actions and Foundry agents** (Day 4): standard dev/test/prod environment tiers with promotion gates between them; Foundry additionally routes through a control plane for versioning/deployment governance.

**Custom AI model ALM — four pillars** (Day 4): consistency, compliance, repeatability, operational readiness.

**Security controls** (Day 4): managed identity, least privilege, separation of duties (agent-level); Zero Trust and RBAC plus model hardening (model-level); mitigation of AI-specific vulnerabilities including data poisoning, model extraction, and especially prompt manipulation/prompt injection via input sanitization, instruction hierarchy, and content filtering.

**Guardrails/content filters** (Day 4): configured by category and risk severity (low/medium/high), supplemented by explicit block lists, demonstrated in both the new and legacy Foundry portal UI.

**Access controls on grounding data** (Day 4): an agent must only surface data the requesting user is independently authorized to see — grounding must respect existing permission boundaries (e.g., document ACLs), not flatten them.

**Monitoring** (Day 3): five areas — operational health, performance, quality, usage insights, risk/compliance/security — feeding a backlog/feedback categorization scheme and an AI diagnostic tuning workflow (identify → diagnose root cause → apply fix → re-validate).

---

## Key terminology

| Term | Definition | Where it appears |
|---|---|---|
| Agentic AI Business Solutions Architect | Role bridging business strategy and technical implementation for agent-based solutions. | Day 1 |
| Responsible AI | Microsoft's six-principle framework (fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability) governing AI design. | Day 1, 4 |
| Cloud Adoption Framework (CAF) | Microsoft's structured cloud/AI adoption methodology (strategy, plan, ready, govern, secure, manage). | Day 1 |
| Azure Cognitive Services | Prebuilt AI APIs for vision, language, speech, and decision tasks. | Day 1 |
| Azure Machine Learning (Azure ML) | Platform for building, training, and deploying custom ML models with full MLOps. | Day 1 |
| Azure OpenAI Service | Enterprise access to OpenAI foundation models with Azure security/compliance. | Day 1 |
| Microsoft/Azure AI Foundry | Unified platform for building, customizing, orchestrating, and deploying agents/models. | Day 1, 2, 3 |
| Copilot Studio | Low-code/no-code platform for building conversational/autonomous agents. | Day 1, 2, 3 |
| Grounding data | Business data an agent retrieves/reasons over for accurate, current answers. | Day 1 |
| Five grounding data dimensions | Accuracy, relevance, timeliness, cleanliness, availability. | Day 1 |
| Azure Data Estate | The organizing pattern for an enterprise's structured/unstructured data assets. | Day 1 |
| Single-agent design | One agent handling an end-to-end scenario. | Day 1 |
| Multi-agent design | Multiple specialized agents collaborating on a scenario. | Day 1 |
| Sequential orchestration | Agents run in fixed order, each consuming prior output. | Day 1 |
| Concurrent orchestration | Multiple agents run in parallel, results aggregated. | Day 1 |
| Group chat orchestration | Agents (and possibly humans) share one conversation. | Day 1 |
| Handoff orchestration | One agent transfers control to another when out of scope. | Day 1 |
| Magentic orchestration | Dynamic, plan-driven orchestrator delegating at runtime. | Day 1 |
| Generative AI orchestration | LLM dynamically selects topic/action based on intent. | Day 1, 2 |
| Classic orchestration | Fixed, deterministic trigger-phrase routing. | Day 1 |
| Knowledge sources | Files, websites, Dataverse tables, enterprise connectors used for grounding. | Day 1, 2 |
| Custom AI model triggers | Conditions justifying training/fine-tuning a custom model. | Day 1, 3 |
| ROI (Return on Investment) | Financial justification metric for an agent investment. | Day 2 |
| TCO (Total Cost of Ownership) | Full cost envelope of building/running/maintaining a solution. | Day 2 |
| Five ROI categories | Productivity, cost savings, revenue impact, risk reduction, strategic value. | Day 2 |
| ROI benefit formula | Annual benefit = (minutes saved/60) × runs/year × labor rate + error cost avoided + backlog effects. | Day 2 |
| Net benefit | Annual benefit minus Annual TCO. | Day 2 |
| Payback period | Initial cost divided by net monthly benefit. | Day 2 |
| Sensitivity bands | Low/base/high ranges applied to ROI assumptions. | Day 2 |
| Five TCO cost domains | Infrastructure, development, data preparation, expertise, operations. | Day 2 |
| Build vs. buy vs. extend | Three-way decision on custom build, prebuilt purchase, or extension. | Day 2 |
| Model routing | Directing a request to the most appropriate model via rules. | Day 2 |
| Static routing | Fixed rule always routes a request type to a given model. | Day 2 |
| Weighted routing | Traffic split by percentage across models. | Day 2 |
| Fallback routing | Secondary model used if primary fails/unavailable. | Day 2 |
| Version-based routing | Requests routed by explicit model version. | Day 2 |
| SLM (Small Language Model) | Cheaper, faster model suited to narrow tasks. | Day 2 |
| LLM (Large Language Model) | Model for broad reasoning/complex generation, higher cost/latency. | Day 2 |
| Task agent | Agent built from goal, skills, actions, knowledge, context, safety. | Day 2 |
| Autonomous agent | Agent built from goal, trigger, instructions, knowledge, actions. | Day 2 |
| Prompt & response agent | Agent built from system topics, generative answers, condition nodes. | Day 2 |
| System topic | Built-in Copilot Studio topic for standard conversation flows. | Day 2 |
| Fallback topic | Topic invoked when no other topic matches user intent. | Day 2 |
| Generative answers | Copilot Studio feature generating grounded responses via generative AI. | Day 2 |
| Condition node | Logic branch routing conversation by a condition. | Day 2 |
| Agent flow | Copilot Studio automation construct with triggers/actions. | Day 2 |
| Prompt actions | Reusable prompt operations: transform, summarize, extract, generate, classify. | Day 2 |
| RAG (Retrieval-Augmented Generation) | Grounding pattern retrieving relevant data and injecting it into the prompt. | Day 2 |
| Hybrid search | Combined keyword and vector search for retrieval relevance. | Day 2 |
| Chunking | Splitting documents into smaller passages for embedding/retrieval. | Day 2 |
| Azure AI Search | Managed search/index service implementing hybrid/vector search. | Day 2 |
| Standard NLU | Copilot Studio's built-in natural language understanding. | Day 2 |
| Azure CLU (Conversational Language Understanding) | Advanced, trainable NLU service for higher-precision intent recognition. | Day 2 |
| Code interpreter | Foundry agent tool for executing code (calculations, data manipulation). | Day 2 |
| Model catalog | Foundry gallery of foundation/open models with leaderboard comparisons. | Day 2, 3 |
| File search | Foundry RAG grounding capability against uploaded files. | Day 2 |
| Agent versioning | Creating a distinct configuration version of an agent before publishing. | Day 2, 4 |
| Fine-tuning pipeline | Data prep, training job, evaluation, and deployment process for custom models. | Day 3 |
| Deployment topologies | Hosting patterns for custom/fine-tuned models. | Day 3 |
| Operational competencies | Ongoing skills/practices for running a custom model in production. | Day 3 |
| Agent governance lifecycle | Design, build, test, deploy, monitor, improve. | Day 3 |
| Copilot Studio 4-layer extensibility model | Instruction, capability, integration, pro-code layers. | Day 3 |
| Model Context Protocol (MCP) | Open protocol for agents to discover/call external tools/context providers. | Day 3 |
| MCP integration patterns | Context-driven reasoning, workflow-integrated, multi-agent collaboration. | Day 3 |
| Deep reasoning | Extended, multi-step reasoning mode trading latency for accuracy. | Day 3 |
| Standard reasoning | Default fast, single-pass reasoning mode. | Day 3 |
| Voice mode | Agent behavior enabling spoken interaction. | Day 3 |
| Dynamics 365 F&O AI orchestration | Pattern for surfacing agent capability inside F&O's application context. | Day 3 |
| Microsoft 365 agents design framework | Frame, map, guardrails, prototype, operationalize. | Day 3 |
| Pre-flight checklist | Readiness validation across data, security, UX, governance before launch. | Day 3 |
| Copilot for Sales | Prebuilt Copilot surfacing CRM/sales data/actions in Outlook/Teams. | Day 3 |
| Copilot for Service | Prebuilt Copilot for case summarization, knowledge search, response drafting. | Day 3 |
| AI Hub | Central Power Platform discovery/governance point for AI capabilities. | Day 3 |
| AI Builder | Low-code AI model building tool for Power Apps/Automate. | Day 3 |
| Five agent monitoring areas | Operational health, performance, quality, usage insights, risk/compliance/security. | Day 3 |
| AI diagnostic tuning workflow | Identify issue, diagnose root cause, apply fix, re-validate. | Day 3 |
| Quantitative testing metrics | Numeric measures like latency, accuracy, error rate. | Day 4 |
| Qualitative testing metrics | Subjective/human-judged measures like tone and satisfaction. | Day 4 |
| Behavioral testing | Testing agent behavior across edge cases and adversarial inputs. | Day 4 |
| Observability metrics | Telemetry/traces explaining why an agent produced a given output. | Day 4 |
| Hallucination rate | Percentage of responses containing fabricated/unsupported content. | Day 4 |
| Prompt validation lifecycle | Draft, test, measure, refine, re-test for prompts. | Day 4 |
| Test case generation maturity ladder | Six-level progression from manual to fully AI-assisted test authoring. | Day 4 |
| ALM (Application Lifecycle Management) | Disciplined process managing an asset from creation to retirement. | Day 4 |
| AI data lifecycle (A-G) | Seven-phase, gated data lifecycle from raw to production-ready. | Day 4 |
| Red/gold dataset pattern | Raw/unvalidated (red) vs. validated/production-ready (gold) data maturity markers. | Day 4 |
| Promotion gate | Formal checkpoint before advancing to the next environment/lifecycle phase. | Day 3, 4 |
| RACI chart | Responsible, Accountable, Consulted, Informed ownership model. | Day 4 |
| Data residency | Requirement that data remain within specified geographic/legal boundaries. | Day 4 |
| Environment tiers | Standard dev/test/prod promotion path for agents/connectors/actions. | Day 4 |
| Control plane | Foundry's management layer for deployment/versioning/promotion. | Day 3, 4 |
| Custom AI model ALM four pillars | Consistency, compliance, repeatability, operational readiness. | Day 4 |
| Managed identity | Automatically managed Azure AD identity removing stored credentials. | Day 4 |
| Least privilege | Granting only minimum access rights needed. | Day 4 |
| Separation of duties | Dividing critical tasks among roles to prevent unchecked control. | Day 4 |
| Zero Trust | Security model verifying identity/device/access continuously, no implicit trust. | Day 4 |
| RBAC | Role-Based Access Control assigning permissions by role. | Day 4 |
| Model hardening | Security measures reducing a model's attack surface. | Day 4 |
| Prompt manipulation / prompt injection | Attack overriding agent instructions or exfiltrating data via crafted input. | Day 4 |
| Guardrails / content filters | Configurable controls blocking/flagging content by category and severity. | Day 4 |
| Block lists | Explicit disallowed term/phrase lists enforced by content filters. | Day 4 |
| Risk severity controls | Configurable low/medium/high thresholds for content filtering aggressiveness. | Day 4 |
| Access controls on grounding data | Ensuring an agent only surfaces data the requesting user is authorized to see. | Day 4 |
| Certification levels | Fundamental, intermediate/associate, advanced/expert tiers. | Day 5 |
| 12-month renewal policy | Annual renewal requirement for Microsoft certifications. | Day 5 |
| Exam skill weightings | Plan 25-30%, Design 25-30%, Deploy 40-45%. | Day 5 |
| Pearson VUE | Exam delivery/proctoring vendor. | Day 5 |
| Passing score | 700 out of 1000. | Day 5 |
| Case study questions | Scenario-based question cluster with shared exhibits. | Day 5 |

---

## Exam strategy

**Where to focus study time.** Given the domain weightings (Plan 25-30%, Design 25-30%, Deploy 40-45%), the course explicitly recommends weighting revision toward Day 4 (testing, ALM, governance, security, Responsible AI) and Day 3's monitoring/tuning content, since together these map most heavily onto "Deploy." Days 1-2 (Plan/Design foundations) remain essential but represent a smaller combined share of the exam.

**Before scheduling:** review the live Microsoft Learn AB-100 skills outline (content can be refreshed independently of any training course), confirm prerequisite fundamentals-level knowledge, and register through Pearson VUE using a personal Microsoft account to avoid organizational-account access friction.

**Exam-day logistics:** budget for the full 100-minute exam plus the 30-minute check-in window; expect identity verification and, if remote, a room/webcam scan. Passing requires 700/1000. There is no negative marking, so every question should be answered — flag uncertain questions for review rather than leaving them blank, and use the review pass at the end if time remains.

**Question-format strategy:**
- For **build-list/reorder** questions, mentally rehearse the course's several named ordered sequences before the exam: CAF agent adoption model (strategy → plan → ready → govern → secure → manage), M365 agents design framework (frame → map → guardrails → prototype → operationalize), agent governance lifecycle (design → build → test → deploy → monitor → improve), AI data lifecycle (phases A through G), agent testing lifecycle (define → execute → score → iterate), and prompt validation lifecycle (draft → test → measure → refine → re-test).
- For **case study** questions, read the entire shared scenario/exhibit before answering any of its questions, since later questions often depend on details established earlier in the scenario.
- For **exhibit/hot area/active screen** questions, expect to interact with a screenshot-like rendering of Copilot Studio or Foundry — the demos from Days 2-4 (agent creation, topics, knowledge configuration, model catalog, guardrails/content filters, analytics tab) are the most likely visual references.
- For **scenario-based multiple choice/multi-select** questions, apply the decision frameworks systematically: platform selection (SaaS → Copilot Studio → Foundry → containers), build/buy/extend, single- vs. multi-agent, agent archetype (task/autonomous/prompt-response), and NLU choice (Standard NLU/Azure CLU/generative orchestration) — most scenario questions map cleanly onto one of these five frameworks.

**Representative sample questions raised during the Day 5 revision pass** (with correct answers as confirmed in the course):

1. *Which Responsible AI principle is most directly addressed when an agent discloses to users that they are interacting with an AI system and explains its limitations?* — **Transparency.**
2. *An organization wants an agent that can independently monitor a support queue and triage tickets without a human initiating each interaction. Which agent type is this?* — **Autonomous agent.**
3. *A business process spans multiple specialized domains and requires separate security boundaries between steps. What agent design should the architect recommend?* — **Multi-agent design**, using an appropriate orchestration pattern (e.g., handoff or sequential depending on the flow).
4. *An architect needs an orchestrator that dynamically plans and delegates steps at runtime for an open-ended, complex problem rather than following a fixed script. Which orchestration pattern is this?* — **Magentic orchestration.**
5. *Which grounding data quality dimension is being violated if support documents are two years out of date?* — **Timeliness.**
6. *A team wants the fastest way to add a capability that a prebuilt Microsoft 365 Copilot agent already provides. What should they do?* — **Extend/use the existing prebuilt agent rather than building custom.**
7. *What is the correct order of the CAF-based agent adoption model?* — **Strategy → Plan → Ready → Govern → Secure → Manage.**
8. *A scenario requires narrow, low-latency, low-cost inference for a well-defined task. Should the architect route to an SLM or an LLM?* — **SLM.**
9. *Which three cost domains, among others, make up the TCO analysis for build vs. buy vs. extend decisions?* — **Infrastructure, development, data preparation** (plus expertise and operations, for the full five).
10. *What formula computes annual benefit in the ROI methodology taught?* — **(Minutes saved / 60) × runs per year × labor rate + error cost avoided + backlog effects.**
11. *Which Copilot Studio extensibility layer should be used first when only a persona/behavior adjustment is needed?* — **The instruction layer** (lowest-effort, first-choice layer).
12. *Which MCP integration pattern best fits a scenario where multiple agents must share a common, standardized set of external tools?* — **Multi-agent collaboration via MCP.**
13. *An architect must choose between standard and deep reasoning for a highly complex, multi-step analytical task. Which should be selected, and what is the tradeoff?* — **Deep reasoning; it trades additional latency for improved handling of complex, multi-step reasoning.**
14. *What is the correct order of the Microsoft 365 agents design framework?* — **Frame → Map → Guardrails → Prototype → Operationalize.**
15. *In the AI data lifecycle, what do the terms "red" and "gold" datasets represent?* — **Red = raw/unvalidated data; gold = validated, production-ready data that has passed quality gates.**
16. *What are the four pillars of custom AI model ALM?* — **Consistency, compliance, repeatability, operational readiness.**
17. *Which security principle ensures no single person has unchecked end-to-end control over a sensitive agent process?* — **Separation of duties.**
18. *What is the primary security risk mitigated by enforcing an instruction hierarchy and input sanitization on an agent?* — **Prompt manipulation / prompt injection.**
19. *Which of the example custom model validation thresholds discussed corresponds to "hallucination rate"?* — **≤ 3%.**
20. *What is the passing score for the AB-100 exam, and is there negative marking?* — **700 out of 1000; no negative marking, so all questions should be attempted.**

*(These reproduce the substance and correct answers of the sample questions revisited across Day 5's module-by-module review; see the Self-test section below for a broader independent question bank covering the same material in additional formats.)*

---

## Self-test questions

1. Name the six Responsible AI principles.
2. What are the five dimensions of grounding data quality?
3. Put the CAF-based agent adoption model steps in correct order: govern, strategy, secure, plan, manage, ready.
4. A scenario requires an agent that spans multiple knowledge domains and needs separate security boundaries between steps. Should the architect design a single agent or a multi-agent solution?
5. Name all five orchestration patterns for multi-agent solutions.
6. Which orchestration pattern uses a dynamic, plan-driven orchestrator that delegates at runtime rather than following a fixed sequence?
7. What is the difference between generative AI orchestration and classic orchestration?
8. List the four platform tiers in the platform-selection decision tree (from least to most customizable/complex).
9. When should an architect recommend extending an existing M365 Copilot agent rather than building a custom one?
10. Under what conditions is training/fine-tuning a custom AI model justified rather than relying on a foundation model with RAG?
11. Write out the ROI annual benefit formula taught in the course.
12. What is the formula for Net benefit, and for ROI %?
13. What is the formula for payback period (in months)?
14. Name the five ROI categories.
15. Name the five TCO cost domains.
16. Compare build, buy, and extend in terms of relative cost and fit.
17. Describe the four model routing rule types (static, weighted, fallback, version-based).
18. When should a request be routed to an SLM instead of an LLM?
19. Describe the components of a task agent.
20. Describe the components of an autonomous agent.
21. Describe the components of a prompt & response agent.
22. What is a system topic, and what is a fallback topic used for?
23. Describe the RAG pipeline from document ingestion to grounded response.
24. What is hybrid search, and why is it preferred over pure keyword or pure vector search alone?
25. Compare Standard NLU, Azure CLU, and generative AI orchestration as intent-recognition options.
26. In the Foundry demo, which chat model and which embedding model were used to build the expense agent?
27. Which two Foundry tools were attached to the expense agent in the demo, and what does each do?
28. In the Copilot Studio demo, why was public web search explicitly disabled?
29. When is a custom/fine-tuned model justified over using the Foundry model catalog's existing foundation models as-is?
30. What four axes does the Foundry model catalog leaderboard compare candidate models across?
31. List the Copilot Studio 4-layer extensibility model in order, and give an example of when each layer would be used.
32. Name the three Model Context Protocol (MCP) integration patterns taught.
33. What is the difference between standard reasoning and deep reasoning as an agent behavior?
34. List the five steps of the Microsoft 365 agents design framework in order.
35. What is a pre-flight checklist used for?
36. What are the five key areas of AI agent monitoring in production?
37. Describe the AI diagnostic tuning workflow.
38. List the four lenses of agent testing (quantitative, qualitative, behavioral, observability) with one example metric each.
39. State the four example custom model validation thresholds given in the course (latency, accuracy, hallucination, satisfaction).
40. Describe the AI data lifecycle: how many phases, what are they labeled, and what do "red" and "gold" mean?
41. What are the four pillars of custom AI model ALM?
42. Name three agent/model security controls covered in Day 4 (at the agent level and at the model level).
43. What is prompt manipulation/prompt injection, and what mitigations were discussed?
44. How are Foundry content filters configured (what two axes, plus what additional control)?
45. What is the AB-100 exam's domain weighting across Plan, Design, and Deploy, and why does this matter for study planning?
46. What is the AB-100 exam duration (including check-in), passing score, and negative marking policy?

### Answer key

1. Fairness; reliability and safety; privacy and security; inclusiveness; transparency; accountability.
2. Accuracy, relevance, timeliness, cleanliness, availability.
3. Strategy → Plan → Ready → Govern → Secure → Manage.
4. Multi-agent design (separate specialized agents with distinct security boundaries, coordinated via an appropriate orchestration pattern).
5. Sequential, concurrent, group chat, handoff, magentic.
6. Magentic orchestration.
7. Generative AI orchestration lets the LLM dynamically decide which topic/action/agent to invoke based on interpreted intent; classic orchestration relies on fixed, deterministic trigger phrases/rules.
8. SaaS/prebuilt agents → Copilot Studio → Microsoft/Azure AI Foundry → containers/custom infrastructure.
9. When the existing prebuilt/M365 Copilot agent already covers the scenario (or nearly does, via extension points like plugins/connectors), since this minimizes cost and governance surface area versus building new.
10. When foundation models underperform on specialized domain vocabulary, when strict cost/latency budgets require a smaller model than a general foundation model, or when proprietary data patterns must be embedded in model weights rather than retrieved via RAG.
11. Annual benefit = (minutes saved / 60) × runs per year × labor rate + error cost avoided + backlog effects.
12. Net benefit = Annual benefit − Annual TCO; ROI % = Net benefit / Annual TCO × 100.
13. Payback period (months) = Initial cost / net monthly benefit.
14. Productivity, cost savings, revenue impact, risk reduction, strategic value.
15. Infrastructure, development, data preparation, expertise, operations.
16. Buy = lowest development/expertise cost, lowest fit; Build = highest development/expertise/operations cost, highest fit; Extend = middle cost, middle fit.
17. Static (fixed rule always routes to one model), weighted (traffic split by percentage across models), fallback (secondary model used if primary fails/unavailable), version-based (routed by explicit model version for controlled rollout).
18. When the task is narrow, well-defined, and latency- or cost-sensitive.
19. Goal, skills, actions, knowledge, context, safety.
20. Goal, trigger, instructions, knowledge, actions.
21. System topics, generative answers, condition nodes.
22. A system topic is a built-in Copilot Studio topic handling standard conversational flows (e.g., greeting, escalate, end of conversation); a fallback topic is invoked when no other topic matches user intent and should be deliberately designed (e.g., offer knowledge search, escalate, or clarify) rather than a dead-end response.
23. Chunk documents into passages → embed chunks into vectors and index them (e.g., in Azure AI Search) → at query time run hybrid search to retrieve relevant chunks → inject retrieved chunks into the prompt as context → generate a grounded response.
24. Hybrid search combines lexical (keyword) and vector (semantic) search, improving retrieval relevance over either method alone, since keyword search catches exact terms while vector search catches semantic/conceptual similarity.
25. Standard NLU: fast, simple built-in trigger-phrase matching. Azure CLU: more sophisticated, trainable NLU for higher precision/recall with varied phrasing. Generative AI orchestration: LLM dynamically determines intent/routing for open-ended, conversational requests without exhaustive trigger authoring.
26. GPT-4.1 (chat/reasoning model) and text-embedding-3-small (embedding model).
27. Code interpreter (executes code for calculations/data manipulation) and file search (RAG grounding against uploaded files).
28. To keep the agent's answers scoped and grounded strictly in the provided/uploaded knowledge sources rather than pulling in ungrounded or inconsistent information from the open web.
29. When domain vocabulary is specialized enough that foundation models underperform, when cost/latency requirements are strict enough that a smaller fine-tuned model beats a general-purpose LLM, or when proprietary data patterns need to be embedded in model weights rather than retrieved via RAG.
30. Quality, safety, cost, throughput.
31. Instruction layer (persona/behavior tuning only) → Capability layer (add topics/knowledge/generative answers) → Integration layer (connect external systems via connectors/flows/actions) → Pro-code layer (custom code/APIs/Agents SDK for requirements beyond low-code reach). Architects should recommend the lowest layer that satisfies the requirement.
32. Context-driven reasoning, workflow-integrated, multi-agent collaboration via MCP.
33. Standard reasoning is the default, fast, single-pass response mode; deep reasoning performs extended, multi-step reasoning before answering, trading latency for better handling of complex problems.
34. Frame → Map → Guardrails → Prototype → Operationalize.
35. To validate readiness across data, security, UX, and governance dimensions before launching an M365 agent — treated as a go/no-go gate before go-live.
36. Operational health, performance, quality, usage insights, risk/compliance/security.
37. Identify the issue → diagnose root cause (prompt, grounding data, model, or orchestration logic) → apply the targeted fix → re-validate against the original metric.
38. Quantitative (e.g., latency, accuracy, error rate), qualitative (e.g., tone, helpfulness, satisfaction), behavioral (e.g., handling of edge cases/adversarial inputs/multi-turn drift), observability (e.g., logs/traces explaining why an output occurred).
39. Latency < 2 seconds; accuracy ≥ 90%; hallucination rate ≤ 3%; satisfaction ≥ 4.5/5.
40. Seven phases, labeled A through G, gated by promotion gates between phases; "red" denotes raw/unvalidated data and "gold" denotes validated, production-ready data that has passed quality gates.
41. Consistency, compliance, repeatability, operational readiness.
42. Agent-level: managed identity, least privilege, separation of duties. Model-level: Zero Trust, RBAC, model hardening (any three of these six are acceptable).
43. Prompt manipulation/prompt injection is an attack where crafted input attempts to override an agent's instructions or exfiltrate sensitive data/behavior; mitigations include input sanitization, enforcing an instruction hierarchy (system instructions outrank user input), and content filtering.
44. Configured by category and risk severity (low/medium/high thresholds), supplemented by explicit block lists of disallowed terms/phrases.
45. Plan 25-30%, Design 25-30%, Deploy 40-45% — since Deploy is the largest single domain, Day 4's testing/governance/ALM/security/Responsible AI content and Day 3's monitoring content deserve proportionally more study time than Days 1-2's foundational content alone.
46. 100 minutes of exam time plus a 30-minute check-in window; passing score is 700 out of 1000; there is no negative marking, so every question should be attempted.
