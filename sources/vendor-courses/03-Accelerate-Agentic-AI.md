# Accelerate Agentic AI

> **LevelUp course ID:** 2307124 | **Phase:** 2 - Project Ready | **Duration:** ~15 hours | **Badge relevance:** Frontier Transformation Engineer (FTE) partner badge — demonstrates capability to architect, build, extend, govern, and secure production-grade agentic AI solutions on the Microsoft platform.

---

## At a glance

- Agentic AI is moving from POC to enterprise-scale production: by 2028 ~1.3 billion AI agents will be deployed (IDC); 82% of organizations plan agent integration within 1–3 years (Capgemini); 40% of enterprise apps will embed task-specific agents by 2026 (Gartner).
- High-performance agents require four essentials: rich connected context, unified access to data and signals, low-friction development and orchestration, and ecosystem-wide governance/observability/trust.
- The Microsoft IQ platform (Work IQ, Fabric IQ, Foundry IQ) is the intelligence layer shared across all Microsoft AI surfaces; it enables agents to be launched in weeks rather than months and delivers 36% better retrieval accuracy than traditional RAG systems.
- Agents for Microsoft 365 Copilot can be built as declarative agents (using Copilot's own orchestrator) or custom engine agents (bring-your-own orchestrator); Copilot Studio covers the low-code spectrum while Microsoft Foundry covers pro-code.
- Microsoft Foundry is the unified AI app and agent factory: it unifies model selection (11,000+ models), the Foundry Agent Service (prompt, workflow, and hosted agent types), RAG via Foundry IQ, fine-tuning with LoRA, and a full Control Plane.
- The Model Context Protocol (MCP) and Agent-to-Agent (A2A) protocol are the open communication standards that allow agents to connect to external tools, data sources, and other agents interoperably.
- Microsoft Agent Framework converges Semantic Kernel (single-agent) and AutoGen (multi-agent) into one open-source, cloud-agnostic orchestration runtime supporting five patterns: sequential, concurrent, group chat, handoff, and Magentic.
- Foundry Control Plane provides fleet-wide governance across four pillars — security, compliance, fleet management, and observability — including AI Content Safety, Entra Agent ID, Microsoft Purview integration, and token-rate enforcement.
- Agent 365 is the IT-admin control plane for Microsoft 365, providing an agent registry, onboarding governance, and security policy enforcement across all agents regardless of origin (Microsoft or third-party).
- Microsoft 365 E7 ("The Frontier Suite") combines E5 security/compliance, Microsoft 365 Copilot, and Agent 365 into the single licensed bundle designed for Frontier Firms operating human-led, agent-operated enterprises.

---

## Module map

| # | Module / Lesson | One-line purpose |
|---|---|---|
| 1 | The intelligent foundation for high-performance agents | Establishes why agents need rich context, unified data, low-friction orchestration, and governance; introduces the Microsoft IQ platform and frontier maturity model. |
| 2 | Choose the right path to build agents | Decision framework for selecting between persona-based Copilots, M365 Copilot, Copilot Studio, and Microsoft Foundry; intro to declarative vs. custom-engine agents; Copilot Studio demo. |
| 3 | Build agentic apps with Microsoft Foundry | Deep dive into Foundry as the AI app & agent factory: model catalog, Foundry Agent Service (prompt/workflow/hosted agents), RAG with Foundry IQ, and fine-tuning with LoRA. |
| 4 | Extend intelligent agents with tools, APIs and protocols | Tools taxonomy in Foundry (built-in and custom); private tool catalog via Azure API Center; MCP; A2A protocol; OpenAPI 3.0 integration; authentication scenarios; voice agents. |
| 5 | Build agents that unlock knowledge with Foundry IQ and Fabric IQ | Agentic retrieval architecture; Azure AI Search knowledge bases; answer synthesis; Fabric IQ ontologies; Fabric Data Agents; integrating Fabric IQ with Foundry IQ. |
| 6 | Build multi-agent apps with Microsoft Agent Framework | Open-source agent orchestration framework (Semantic Kernel + AutoGen convergence); five orchestration patterns; executors/edges/workflows core concepts; human-in-the-loop. |
| 7 | Govern AI agents with Foundry Control Plane | Post-deployment governance: guardrails, compliance, MCP AI gateway, token limits, evaluations, Content Safety, Entra Agent ID, Purview, and Defender integration. |
| 8 | Bring agent observability, security and governance with Agent 365 | IT-admin control plane for M365: agent registry, onboarding workflow, policy templates, defense-in-depth lifecycle model, M365 E7 Frontier Suite positioning. |
| 9 | Post-training Skills Assessment | Knowledge check to validate course learning. |
| 10 | Course Completion Survey | Feedback collection. |
| 11 | Frontier Engineer Assessment | Badge completion assessment. |

---

## 1. The intelligent foundation for high-performance agents

**What it covers** — Establishes the business context for agentic AI adoption, introduces the four essentials of high-performance agents, describes the five Microsoft-defined drivers of AI value, maps organizations across a five-stage technology and data maturity model, and presents the Microsoft IQ platform (Work IQ, Fabric IQ, Foundry IQ) alongside Agent 365 and the Microsoft Agent Factory program.

**Key concepts**
- **Agentic AI** — AI systems that act autonomously on behalf of users by invoking tools, connecting to external systems, and driving outcomes rather than just answering or summarizing.
- **High-performance agent essentials** — Four requirements: (1) rich connected context, (2) unified access to data and signals, (3) low-friction development and orchestration, (4) governance/observability/trust.
- **Frontier organization** — An enterprise that has implemented all five drivers of AI value effectively, extracting measurably more ROI from its AI investments than traditional organizations.
- **Five drivers of AI value** — Business strategy (alignment with outcomes), AI adoption (vision, operating model, culture, skills), AI strategy and experience (expertise and repeatable processes), AI governance and security (controls, compliance, responsible AI), Technology and data (scalable infrastructure and data readiness).
- **Technology and Data Journey (5 stages)** — Emerging data foundation → Foundational build-out → Production-capable platform → Enterprise-wide infrastructure → Continuous optimization.
- **Microsoft IQ platform** — The shared intelligence layer comprising Work IQ, Fabric IQ, and Foundry IQ; functions as the central component powering all Microsoft AI surfaces within a single security boundary.
- **Work IQ** — The intelligence layer within Microsoft 365 that personalizes Copilot using M365 signals, LOB data, persistent memory (explicit + implicit), and real-time inference; three layers: Data, Context, Skills & Tools.
- **Fabric IQ** — A unified semantic layer on top of OneLake that provides consistent meaning across data, models, rules, and actions; powers always-on insight-to-action for AI agents.
- **Foundry IQ** — The developer-facing intelligence layer inside Azure AI Foundry that provides automated data connectivity, context-without-blind-spots via an agentic RAG engine, and permission-aware access; delivers 36% better responses than traditional RAG.
- **Agent 365** — The IT-admin control plane (part of M365) for all AI agents; three capabilities: Observe (monitor and manage in real time), Govern (lifecycle governance), Secure (protect agent identities and data).
- **Microsoft Agentic System of Work** — Microsoft's integrated vision: Copilots to get work done + Agents to run the business + Agent 365 to keep everything safe, built on top of Microsoft IQ.
- **Microsoft Agent Factory** — A program within the Accelerate AI Innovation initiative that lets organizations build agents using Copilot Studio or Microsoft Foundry with a single prepaid plan; provides forward-deployed engineers, specialized partners, and expert-led training.
- **Multimodal agentic workflows** — The trend away from single-model POCs toward automated, adaptive-reasoning workflows with predictive observability and end-to-end platform security.
- **GenAI Ops** — The operational discipline (monitoring, deployment, and management) for production generative AI systems; analogous to MLOps.

**Detailed notes**

*Industry context and scale*
The shift from AI assistants (summarize/write) to AI agents (act/invoke/drive) happened over roughly the last two years. Three key statistics quoted in the course:
- IDC survey: ~1.3 billion AI agents deployed across enterprises by 2028.
- Capgemini survey: 82% of organizations intend to integrate agents within 1–3 years.
- Gartner: 40% of enterprise apps will embed task-specific agents by 2026.

The challenge is not demonstrating AI in POCs (relatively easy) but deploying agents into production and extracting sustainable ROI — this is the industry-wide struggle the course addresses.

*The four essentials for high-performance agents*
1. **Rich connected context** — Agents need access to meaningful and relevant business data; silos must be broken.
2. **Unified data and signals** — Agents must orchestrate across the enterprise using information from across the organization.
3. **Low-friction development and orchestration** — Environments must make it easy to build, deploy, and manage agents.
4. **Governance, observability, trust** — The full compliance boundary must be ensured because agents operate inside enterprise environments.

*The five drivers of AI value (Microsoft definition)*
These differentiate a traditional organization from a Frontier organization:
1. Business strategy — AI investment aligned to strategic outcomes and measurable impact.
2. AI adoption — Vision, operating model, skills, resources, and culture for AI.
3. AI strategy and experience — Expertise and repeatable processes to create sustainable value.
4. AI governance and security — Controls and processes for secure, compliant, responsible AI.
5. Technology and data — Infrastructure needed to run AI at scale securely and reliably.

*Technology and Data Journey — five stages*
| Stage | Description |
|---|---|
| 1. Emerging data foundation | Data siloed or limited in quality; no AI-specific infrastructure beyond experiments; just assessing needs. |
| 2. Foundational build-out | Efforts underway for data readiness; setting up cloud/hybrid/on-prem resources, data lakes, sandbox environments for pilots. |
| 3. Production-capable platform | Robust scalable platform in place; data pipelines feed production AI models; GenAI Ops tools and monitoring in place. |
| 4. Enterprise-wide infrastructure | Unified data platform serving multiple teams; Agentic AI embedded in business processes; handles large-scale real-time workloads. |
| 5. Continuous optimization | Architecture continuously improved; new AI adopted readily; data treated as strategic asset fueling ongoing innovation. |

Four key enablers to reach Stage 5: Data Readiness and Quality, Scalable AI Infrastructure, Buy/Extend/Build capability, Optimization & Resiliency.

*Microsoft IQ Platform structure*
The IQ platform sits inside a security perimeter and unifies:
- **M365 Copilot** — Core end-user interface.
- **Copilot Studio** — Tool for extending and building Copilots and agents (low-code).
- **GitHub Copilot** — Developer tool for building agents.
- **Microsoft Fabric** — Single unified data repository.
- **Microsoft Foundry** — Agent factory for building AI apps and agents.
- **Agent 365** — Governance and observability layer (part of M365).
All built on Microsoft Azure.

The IQ platform has three layers:
- **Work IQ** — Delivers AI grounded in personal and organizational M365 data.
- **Foundry IQ** — Developer platform for building and managing AI models and agents.
- **Fabric IQ** — Brings AI to data and analytic workloads across organizational data.

*Work IQ in depth*
Work IQ is AI-powered intelligence specifically within M365. It enables Copilot and agents to understand roles, workflows, and daily context of individual users. Three core components:
- **Rich work context** — Securely connects to M365 signals (files, emails, meetings, messages, SharePoint, LOB data).
- **Persistent memory** — Over time learns user preferences, collaborators, patterns; explicit memory (user instructions) + implicit memory (chats, style).
- **Real-time inference** — Blends signals and memory to recommend next steps and select which agent is best suited for a task.

Work IQ layers: Data (combines M365 signals + LOB data in real time), Context (learned/acquired insights stored for personalization), Skills and Tools (tailor Copilot for specific tasks, select right tool for given request).

*Benefits of the Microsoft IQ intelligence layer*
- Launch agents in weeks, not months — eliminates need for custom integration from scratch.
- Reduce development and operational costs — minimized complexity, lower ongoing maintenance.
- Increase agent performance — deep awareness of personal and organizational context, enterprise semantics, knowledge assets for richer reasoning.

*Agent context-decision-action model*
Agents require three components: Context (intelligence/information) → Decisions (interpret and analyze) → Actions (accomplish the task). All three are powered by the intelligence layer (Work IQ + Fabric IQ + Foundry IQ).

**Exam / assessment pointers**
- Know all four high-performance agent essentials verbatim.
- Know all five drivers of AI value and their categories (Business Strategy, AI Adoption, AI Strategy and Experience, AI Governance and Security, Technology and Data).
- Be able to sequence the five Technology and Data Journey stages with their distinguishing characteristics.
- Understand that Work IQ is specifically for M365, Foundry IQ is for the developer platform, and Fabric IQ is for data/analytics.
- Remember that the IQ platform accelerates time-to-market by eliminating repeated custom integration for each new agent.
- Know the three Agent 365 capabilities: Observe, Govern, Secure.
- Microsoft Agent Factory = Copilot Studio or Foundry + single prepaid plan + forward-deployed engineers + expert-led training.

---

## 2. Choose the right path to build agents

**What it covers** — Provides a decision framework for selecting the appropriate agent-building approach based on organizational requirements; contrasts buy vs. build; introduces the four main paths (persona-based Copilots, M365 Copilot, Copilot Studio, Microsoft Foundry); explains declarative vs. custom engine agents; walks through Copilot Studio capabilities, tools, and a demo creating agents from a template and from scratch with Work IQ integration.

**Key concepts**
- **Buy vs. Build** — Starting question for every AI agent project; trade-off between out-of-box value and customization depth.
- **Persona-based Copilots** — Insights and actions for specific roles integrating with existing systems; per-user licensing; line-of-business-owner personas; highest out-of-box value, least customization.
- **M365 Copilot** — Knowledge worker insights and actions on M365 data and plugins; per-user licensing; does not require custom development.
- **Copilot Studio agents** — Custom agents using natural language and generative orchestrator; pay-as-you-go or capacity pack; ideal for power users; medium customization.
- **Microsoft Foundry agents** — Full control, choice of models, customizable with custom code; billed on Azure service consumption; developer-targeted; maximum customization, lowest out-of-box value.
- **Declarative agents** — Utilize instructions, knowledge, and actions along with Copilot's built-in orchestrator and models; built in Agent Builder, Visual Studio Code, or Copilot Studio.
- **Custom engine agents** — Bring-your-own orchestrator and models; fully tailored; can use Azure Bot Service, Copilot Studio custom agents, Agent SDK, Teams AI library, or Direct line.
- **Microsoft 365 Agents SDK** — Pro-dev toolkit for building M365 agents with advanced extensibility.
- **Agent Builder** — Natural language interface inside M365 Copilot for building agents without code.
- **Microsoft Graph** — Automatically connects data, people, and workflows across M365; enables agents to integrate LOB apps, developer tools, business data, analytics, multi-agent systems; provides agent store for discovering/deploying prebuilt first- and third-party agents.
- **Copilot Studio** — Browser-based low-code development environment for building full agent experiences; four core capabilities: Intelligent Control, Custom Functionality, Multimodal Experiences, Secure Scalability.
- **Bring Your Own Model (BYOM)** — Transform Copilot Studio agents with Foundry Models for improved efficiency, quality, and timelines.
- **Copilot Studio tools** — Capabilities that enable agents to take action; connectors include SharePoint, Azure AI Search, Dataverse, Azure SQL, ServiceNow, Salesforce, Dynamics 365, Snowflake, Databricks, Confluence, Oracle Database, Zendesk, and thousands more.
- **Agent Flow** — Automation workflow that can be attached as a tool to an agent in Copilot Studio.
- **Solutions** — Packaging mechanism in Copilot Studio for organizing agents by project or schema.

**Detailed notes**

*Decision framework — four paths*
| Path | Use case | Licensing | Target user |
|---|---|---|---|
| Persona-based Copilots | Insights/actions for specific roles integrating with existing systems | Per-user | Line-of-business owners |
| M365 Copilot | Knowledge-worker tasks on M365 data and plugins | Per-user | Knowledge workers |
| Copilot Studio | Custom agents with natural language + generative orchestrator | Pay-as-you-go or capacity pack | Power users / makers |
| Microsoft Foundry | Full control, choice of models, custom code | Azure service consumption | Developers |

All four paths integrate with Microsoft Fabric and Microsoft Purview equally, so data access capability is the same regardless of path chosen.

*Agents for M365 Copilot — two approaches*
- **Declarative approach** — Agent Builder (inside M365 Copilot), Visual Studio Code, Copilot Studio. Uses Copilot's inbuilt orchestrator and models. Best for most scenarios.
- **Custom engine approach** — Azure Bot Service, Copilot Studio custom agents, Agent SDK, Teams AI library, Direct line. Needed when custom orchestration or custom models are required.

Both approaches apply organizational knowledge and automate business processes as specialized AI assistants tailored for specific domains.

*Microsoft Graph — six capabilities for Copilot/agents*
1. Leverages productivity data for personalized Copilot experiences.
2. Connects to LOB apps, developer tools, business data and analytics.
3. Provides an agent store to discover, deploy, and manage prebuilt first-party and third-party agents.
4. Build agents for Copilot (add specialized knowledge and skills).
5. Build multi-agent systems.
6. Bring your own models, knowledge, and other agents through Microsoft Foundry integration.

*Copilot Studio — three tiers of complexity*
1. **Natural language / no-code** — Business users; build agents via conversation prompts in Copilot; Agent Builder handles this.
2. **Low-code (Copilot Studio)** — Beginner developers; drag-and-drop; upload files, add capabilities, provide instructions with few clicks.
3. **Pro-code** — Advanced developers; M365 Agents SDK, Visual Studio Code, Azure AI Services.

*Copilot Studio demo walkthrough*

Demo 1 — Template-based agent (Weather Agent):
- Navigate to Copilot Studio in browser.
- Go to Agents → select Weather template.
- Pre-populated: name (Weather), instructions (go-to assistant for weather forecasts, remain friendly and polite, do not answer unrelated questions), connected to MSN Weather connector.
- Activate the subscription connection, confirm and create.
- Add optional knowledge sources (public websites, SharePoint).
- Test: ask "What does the weather look like for today in SFO?" — agent processes intent; simpler direct city names work better than acronyms.
- Observation: agent struggles with ambiguous intent; straightforward questions answered reliably; iterative optimization needed.

Demo 2 — Blank agent from scratch (AI Trainer):
- Create → Blank Agent → name: "AI Trainer".
- Set description: agent to teach users how to create agents with Copilot Studio.
- Select model: Claude Sonnet 4.6 (or GPT-5 as shown in dropdown; any Foundry model can be selected).
- Edit instructions manually — define purpose, general guidelines (professional/helpful tone, base on official documentation only), skills (search + reference, summarize responses).
- Enable knowledge sources: Public Websites → add `https://learn.microsoft.com/microsoft-copilot-studio`.
- Add tools: Agent Flow, prompt, MCP server, connectors (Office 365, Teams, Excel, etc.).
- Create test session: ask "I want to learn how to use Studio" — agent searches knowledge base, retrieves references, synthesizes step-by-step guidance.
- Show Rationale feature: reveals the reasoning chain the agent used to answer.

*Work IQ as the intelligence backbone of M365 Copilot agents*
Work IQ is always-on within M365; developers do not need to configure it separately. It uses Microsoft's unique access to enterprise productivity and business data/signals to create differentiated M365 Copilot experiences. When building Copilot Studio agents, Work IQ provides the real-time personal context that makes responses personalized rather than generic.

**Exam / assessment pointers**
- Know that Foundry = maximum customization, minimum out-of-box value; persona-based Copilots = maximum out-of-box value, minimum customization.
- Declarative agents use Copilot's built-in orchestrator; custom engine agents require a custom orchestrator.
- All four paths equally integrate with Fabric and Purview.
- Copilot Studio requires an organizational/work account; 30-day free trial available.
- Agent Builder is the natural-language interface inside M365 Copilot for no-code agent creation.
- Microsoft Graph provides the data/connectivity backbone for all M365-based agents.

---

## 3. Build agentic apps with Microsoft Foundry - The AI app & agent factory

**What it covers** — Presents Microsoft Foundry as a unified AI app and agent factory; explains the model catalog (11,000+ models, two categories); details the Foundry Agent Service and its three agent types (prompt, workflow, hosted); explains the RAG pattern and Foundry IQ's RAG pipeline; describes fine-tuning with LoRA; includes a hands-on demo of creating a Python prompt agent.

**Key concepts**
- **Microsoft Foundry** — Unified interoperable AI platform (the "AI app and agent factory") that unifies model selection, agent service, IQ layer, tools, custom models (ML), control plane, and cloud/edge deployment in a single portal with end-to-end secure governance.
- **Foundry Models** — Catalog of 11,000+ models (last stated figure was close to 15,000) spanning OpenAI, Anthropic (Claude), Mistral, Groq, Cohere, Meta (Llama), Hugging Face, NVIDIA, Databricks, and Microsoft; includes foundational, open, reasoning, multimodal, and industry-specific models.
- **Two model categories in Foundry** — Models sold directly by Azure (Microsoft); Models from partners and community.
- **Model router** — Foundry capability that automatically identifies the best model for a given query based on the query content.
- **Model benchmarks / leaderboard** — Tools inside Foundry Models for discovering, evaluating, comparing, and deploying models; also includes AI solution templates, A/B experimentation, automated evaluations, performance monitoring, and model inference APIs.
- **Foundry Agent Service** — Managed service for designing, developing, and deploying intelligent agents; supports any framework or protocol; provides 1,400+ MCP-enabled connectors; enterprise-grade security; one-click publishing to M365.
- **Prompt agents** — Defined entirely through configuration (instructions, model selection, tools); agent service handles orchestration and hosting automatically; ideal for rapid prototyping and internal tools.
- **Workflow agents** — Orchestrate sequences of multiple agents using declarative YAML definitions; support branching logic, human-in-the-loop, sequential and group-chat patterns; best for multi-step orchestration and approval workflows. (Preview at time of course.)
- **Hosted agents** — Code-based agents built with framework of choice deployed as containers on Agent Service; custom orchestration logic; Foundry manages runtime scaling and infrastructure. (Preview at time of course.)
- **Hosting adapter** — Framework abstraction layer that exposes supported agent frameworks as HTTP services for local testing and hosted deployments.
- **Import/export external agents** — Foundry Agent Service supports importing agents via Assistant API, Response API, Activity Protocol, A2A, Agent Protocols, or MCP servers; same mechanisms for exposing agents externally.
- **RAG (Retrieval Augmented Generation)** — Pattern where the application queries an index before calling the LLM; augmented prompt includes retrieved content for grounded responses.
- **Index** — Specialized data structure (e.g., Azure AI Search) organizing content for efficient retrieval; recommended index store for RAG scenarios.
- **Foundry IQ RAG pipeline** — Ingestion → Extraction → Chunking → Embedding → Indexing → Query; sources include OneLake, Blob Storage, ADL, SQL DB, Cosmos DB; extracts from PDFs, Office docs, image files, nested images, JSON, CSV, Markdown.
- **Fine-tuning** — Customizing a pre-trained LLM with additional training on a specific task or new dataset for enhanced performance, new skills, or improved accuracy.
- **LoRA (Low-Rank Approximation)** — Technique used by Azure OpenAI Service for fine-tuning; approximates the original high-rank weight matrix with a lower-rank version; fine-tunes only a smaller subset of "important" parameters; reduces fine-tuning complexity while maintaining performance.
- **Why fine-tune — three reasons** — Improve Quality (domain/task-specific optimization), Reduce Cost (reduced token consumption, efficient resource utilization), Reduce Latency (smaller models, faster responses, shorter prompts).
- **Optimization cycle** — Select base model → prompt engineering → declarative agent → Foundry Agent Service deployment → monitor → if insufficient: add RAG layer / tools / agents → if still insufficient: fine-tune or swap base model → repeat.
- **Azure AI Projects Python module** — SDK used in the demo to create agents programmatically; uses `DefaultAzureCredential` and project endpoint.

**Detailed notes**

*What Foundry solves — the AI practitioner's problem*
Every AI app and agent builder must answer: Which model(s) will the agent use? How will it orchestrate? What knowledge sources and tools? How to implement observability and control? Fine-tuning needed? Where to deploy (cloud, local, edge)? Foundry answers all these questions from a single unified portal.

*Foundry Models catalog*
- 11,000+ models (number was close to 15,000 at time of recording).
- Model availability is geography-specific; not all models available in all regions.
- Not all models support fine-tuning in all geographies.
- Foundry Models includes model benchmarks, a model leaderboard, inbuilt AI solution templates, A/B experimentation, automated evaluations, and performance monitoring.
- Model router: routes queries automatically to the most appropriate model based on query content.

*Foundry Agent Service — agent types*
| Type | Definition mechanism | Orchestration | Status |
|---|---|---|---|
| Prompt agents | Configuration only (instructions, model, tools) | Handled automatically by service | GA |
| Workflow agents | Declarative YAML; visual in Foundry portal | Branching logic, human-in-the-loop, sequential/group-chat | Preview |
| Hosted agents | Custom code containers | Custom orchestration; Foundry manages scaling | Preview |

*Foundry Agent Service — interoperability*
Agents can import from and expose to: Assistant API, Response API, Activity Protocol, Agent-to-Agent (A2A) Communication, Agent Protocols, MCP servers. This enables creation of interoperable systems where agents from different platforms communicate.

*Python Prompt Agent demo steps*
1. Create a Foundry project in the Azure portal; obtain the project Endpoint and project Key.
2. Create a Python script; set `project_endpoint` variable from the Foundry portal.
3. Install `azure-ai-projects` Python package.
4. Log into Azure with `az login` (DefaultAzureCredential used).
5. In the script: specify model deployment (e.g., `gpt-4o`), instructions, agent name.
6. Run script → agent created in Foundry project.
7. Verify in Foundry portal: agent appears in the Agents section.
8. Run a second script to create a thread and send messages; agent executes, returns response with citations.

*RAG pattern and optimization cycle*
When a base model's performance is insufficient:
1. Start with prompt engineering optimizations.
2. Add a RAG layer (Foundry IQ or Azure AI Search index).
3. Add external tools or agents.
4. If still insufficient: re-evaluate base model selection or proceed to fine-tuning.
5. No single approach is universally correct; the combination is scenario-dependent.

How RAG works:
1. User asks a question.
2. Application queries the index (before calling the LLM) to find relevant content.
3. Application combines user question + retrieved content + grounding data into the prompt.
4. LLM receives the augmented prompt and generates a grounded response.
5. Response is based on retrieved knowledge rather than model training alone.

Foundry IQ RAG pipeline steps: Ingest (OneLake, Blob, ADL, SQL DB, Cosmos DB) → Extract (PDFs, Office docs, images, nested images, JSON, CSV, Markdown) → Chunk (split text, fixed-size chunking) → Embed (OpenAI or other embedding models) → Index (document index) → Query (retrieve most relevant content).

*Fine-tuning with LoRA*
- Fine-tuning adds domain-specific or task-specific knowledge to a pre-trained model.
- Azure OpenAI Service implements LoRA: approximates original high-rank weight matrix with a lower-rank version; only fine-tunes a subset of "important" parameters.
- Reduces fine-tuning complexity while maintaining performance.
- Use cases: domain-specific optimization, task-specific optimization, improving quality, reducing token consumption, reducing latency.

**Exam / assessment pointers**
- Know the three agent types (prompt, workflow, hosted) and when each is appropriate.
- Know that workflow and hosted agents were in preview at time of course.
- Know that Foundry Models has 11,000+ models (noted as "close to 15,000" in video); geography-specific availability applies.
- LoRA = Low-Rank Approximation; used by Azure OpenAI Service for fine-tuning.
- RAG reduces inaccuracies by grounding responses in indexed enterprise knowledge.
- The optimization cycle order: prompt engineering → RAG/tools → base model swap or fine-tuning.
- Foundry Agent Service supports one-click publishing to M365.
- Foundry connects to 1,400+ MCP-enabled connectors.
- Foundry integrates with VS Code, Copilot Studio, GitHub, Microsoft Defender, Purview, Entra, and Agent 365.

---

## 4. Extend intelligent agents with tools, APIs and protocols

**What it covers** — Covers the full tools ecosystem in Microsoft Foundry: built-in tools, custom tools via APIs, private tool catalogs via Azure API Center, MCP (Model Context Protocol), A2A (Agent-to-Agent) protocol, OpenAPI 3.0 tool integration, authentication scenarios for MCP, and voice agents.

**Key concepts**
- **Foundry Tools** — Section within Foundry's Build area that provides prebuilt and custom AI skills; organized into toolboxes; browsable by provider, category (newest, recently updated, featured), and searchable by name.
- **Tool (definition)** — A capability that an agent can invoke during a conversation to perform a specific task; enables the agent to act on business context.
- **Built-in tools** — Preconfigured capabilities provided by Foundry Agent Service; no external hosting or custom code required; included in agent definition at creation or update time.
- **Custom tools** — OpenAPI tools, MCP servers, and A2A agent connections; represent custom APIs and external systems.
- **Private tool catalog** — Organization-scoped catalog for tools; only users within the organization can discover and configure; uses Azure API Center to register org-scoped tools.
- **Azure API Center** — Azure service used to register MCP servers for a private tool catalog; developers need Foundry project access and Foundry Tools configuration permissions.
- **MCP (Model Context Protocol)** — Open standard protocol that defines how an application provides tools and contextual data to large language models; designed specifically for generative AI; preferred over pre-generative-AI connector approaches when an MCP server is available.
- **MCP server** — Server that exposes tools and contextual data to LLMs via the MCP protocol; can be public (e.g., Microsoft Learn MCP server requires no auth) or private (requires authentication).
- **MCP client** — The LLM that communicates with the MCP server; asks the server what tools are available and invokes them.
- **A2A (Agent-to-Agent) protocol** — Open communication standard enabling interoperability, complex workflows, and secure opaque agent-to-agent communication across different platforms; works alongside MCP.
- **OpenAPI 3.0 tool** — Connects Foundry Agent Service to external APIs using OpenAPI 3.0 specifications; supports anonymous, API key, and managed identity authentication; improves function-calling capabilities through standardized, automated API integrations; pre-generative-AI approach but widely understood.
- **Authentication scenarios — two types**
  - Shared authentication: every user of the agent uses the same identity; options include key-based, Entra Agent Identity, Entra Foundry Project Managed Identity; individual user context does not persist.
  - Individual authentication: OAuth Identity Passthrough; preserves per-user identity; user-specific data access enforced.
- **Supported authentication methods** — Key-based authentication, Microsoft Entra Agent Identity, Microsoft Entra Foundry Project Managed Identity, OAuth Identity Passthrough.
- **Voice Agent** — New capability that enables real-time voice input and output through the same Foundry Agent Service infrastructure; same logic and tools as text-based agents, different interface layer.
- **Connect to a specific agent version** — Pin an agent to a specific version to enable controlled deployments.
- **Connect to an agent on a different Foundry resource** — Useful for different regional feature availability, separating dev/staging from production, or different workload resources.
- **Toolboxes** — Bundles of related tools within Foundry Tools; currently in preview at time of course.
- **Context (why MCP matters)** — The evolution: prompting → knowledge access → RAG → context (MCP); MCP ensures the model connects to tools that give it contextually accurate responses; this is why MCP was purpose-built for generative AI.

**Detailed notes**

*Foundry Tools navigation*
In Foundry Portal: Build → Tools → browse catalog with filters (newest, recently updated, featured, provider, custom tools section). Custom tools section includes: Agent-to-Agent, Model Context Protocol, OpenAPI tool. Toolboxes (preview) allow bundling tools.

*Built-in tools*
Preconfigured by Foundry Agent Service; no external hosting or custom code needed. Included in agent's tool list at creation or update time. Examples include web search, code execution, file reading capabilities built directly into the service.

*Private tool catalog — setup steps*
1. Create the Azure API Center resource and register MCP servers.
2. Create and manage the tool catalog within API Center.
3. Assign access so developers can view the registered MCP servers.
4. Confirm developers can access the Foundry project and configure tools in Foundry Tools.
5. Configure and use tools in agents.

*MCP architecture*
- MCP server defines its context (e.g., "I provide information about customers, orders, products — these are the only questions I can answer").
- MCP client (LLM) asks the server: "What tools do you expose?"
- Server responds with available tools (e.g., "send query" for SQL Server).
- LLM invokes the tool with a specific request (e.g., count customers in customer table).
- Server returns the result.
- LLM formats and returns response to user.
- If the question is outside the server's context, the server cannot answer.

*Why MCP over pre-generative connectors*
MCP was created specifically for LLMs; it ensures contextually accurate model responses. When an MCP server exists for a target system, use MCP rather than older connector approaches. The protocol is the same regardless of MCP server; context is what matters.

*Authentication scenarios for MCP*

Shared authentication (same identity for all agent users):
- Key-based authentication.
- Microsoft Entra – Agent Identity.
- Microsoft Entra – Foundry Project Managed Identity.

Individual authentication (per-user identity):
- OAuth Identity Passthrough — user's own identity passes through to the MCP server; enables user-specific data access control.

*A2A protocol*
Three key properties:
- **Interoperability** — Agents from different platforms and frameworks communicate.
- **Complex workflows** — Enables multi-agent workflows that span organizational boundaries.
- **Secure and opaque** — Agent-to-agent communication is protected and internal implementation details are hidden.

A2A complements MCP: MCP handles tool/data access; A2A handles agent-to-agent coordination.

*OpenAPI 3.0 tool integration*
- Connects Foundry Agent Service to external APIs via OpenAPI 3.0 specification.
- Supports anonymous, API key, and managed identity authentication.
- Improves agent function-calling capabilities with standardized automated API integrations.
- Pre-generative-AI approach; still valid when MCP server does not exist for the target API.

*Voice Agent*
- Uses real-time voice input and output.
- Built on the same Foundry Agent Service infrastructure.
- Same agent logic, tools, and knowledge sources — only the interface layer is different.
- Noted as a new capability in the course.

**Exam / assessment pointers**
- MCP = Model Context Protocol; purpose-built for generative AI; preferred over pre-gen connectors when an MCP server exists.
- A2A = interoperability + complex workflows + secure and opaque.
- Four supported authentication methods: key-based, Entra Agent Identity, Entra Foundry Project Managed Identity, OAuth Identity Passthrough.
- Shared authentication = same identity for all users; OAuth Identity Passthrough = per-user identity.
- Azure API Center is used to build a private tool catalog.
- OpenAPI 3.0 tools improve function-calling with standardized automated integrations.
- Voice agents use the same Foundry Agent Service infrastructure as text agents.
- Private tool catalog: only org users can discover and configure the tools.

---

## 5. Build agents that unlock knowledge with Foundry IQ and Fabric IQ

**What it covers** — Describes how Fabric IQ uses semantic models (ontologies) to give AI agents an understanding of how the business operates; explains how Foundry IQ provides automated data connectivity and agentic RAG; covers Azure AI Search knowledge bases, agentic retrieval, answer synthesis; walks through Fabric Data Agents and their integration with Fabric IQ through ontologies.

**Key concepts**
- **Fabric IQ** — A unified semantic business layer on top of Microsoft Fabric's OneLake that provides consistent meaning across data, models, rules, and actions; connects real-time intelligence streams so agents reason on live data the moment it is available.
- **Ontology** — A description of relationships between data entities using natural language rather than just key-based joins; defines the context of how entities relate (e.g., "products are sold in stores," "customers order products"). Developed in response to limitations of 1970s normalization (Edgar Codd) for generative AI use cases.
- **Semantic model** — A shared business vocabulary that sits on top of data; resolves terminology inconsistencies (e.g., "revenue" means different things to finance vs. sales; "customer" differs between CRM and data warehouse). Fabric IQ uses semantic models to ensure agents query the definition of "revenue" the business has agreed on, not raw underlying data.
- **Unified business understanding** — Fabric IQ property; ensures agents use the same agreed business definitions across all queries.
- **Always-on insight to action** — Fabric IQ property; connects real-time intelligence streams; agents reason on data the minute it arrives/streams through.
- **Agents with business context** — Fabric IQ property; agents built on Azure AI Foundry tap into Fabric IQ as their knowledge/data layer; can query live semantic models, lakehouses, and operational data.
- **Fabric Data Agent** — A "virtual analyst" that allows users to interact with and gain insights from enterprise data in OneLake; can be consumed in M365 Copilot and as a remote MCP Server in VS Code; supports unstructured data via Azure AI Search; supports Fabric IQ workloads through ontology.
- **Building a Data Agent is iterative** — Build → learn → iterate → build → evaluate → monitor → iterate.
- **Foundry IQ** — Provides automated data connectivity to diverse sources, context without blind spots via agentic RAG engine, and permission-aware access; delivers 36% better responses than traditional RAG.
- **Agentic RAG engine (Foundry IQ)** — Plans, selects sources, searches across sources, responds, and iterates to ensure the agent gets the best answer without wasting tokens.
- **Azure AI Search** — Recommended index store for RAG scenarios; used to build knowledge bases for agents; supports agentic retrieval (multi-query pipeline for complex agent-to-agent workflows).
- **Knowledge source** — Standalone objects in the agentic retrieval pipeline; created via Azure portal, REST API, or Azure SDK preview package; can set `alwaysQuery` or configure through steering instructions during query planning.
- **Knowledge base** — Aggregation of knowledge sources assigned together; each knowledge base exposes an MCP endpoint for consumption by MCP-compatible agents.
- **Agentic retrieval** — A multi-query pipeline designed for complex agent-to-agent workflows; the retrieve action invokes parallel query processing from a knowledge base.
- **Retrieve action** — Invokes parallel query processing from a knowledge base; callable via Search Service REST APIs or Azure SDK; also exposed as an MCP endpoint.
- **Answer synthesis** — Enabling the LLM within a knowledge base to answer queries in natural language from document fragments; activated by one configuration field; produces coherent, grounded, citation-backed responses rather than raw document chunks; enables traceable responses back to source documents.
- **Citation-backed responses** — A key output of answer synthesis; every statement is traceable to a source document; critical for evaluation and ensuring correctness.
- **Knowledge base as intelligent assistant** — With answer synthesis, the knowledge base feels like an intelligent assistant rather than a search engine.
- **Fabric IQ advantages** — Layered on top of unified data foundation; millions of Power BI models to jumpstart ontology; native real-time platform for live business context; M365 and Foundry integration; visual no-code modeling tools; licensing accelerates adoption, not cost.

**Detailed notes**

*Fabric IQ — the business context problem*
Most organizations have a terminology inconsistency problem. "Revenue" means different things to finance, sales, and operations. "Customer" is defined differently in the CRM vs. data warehouse. AI models are very smart but do not inherently understand your specific business definitions. Fabric IQ solves this by placing semantic models (shared business vocabulary) on top of the underlying data so agents query agreed definitions, not raw data.

From an executive framing: "The difference between AI that gives you an answer and AI that gives you the right answer that your CFO would sign off on."

*Fabric IQ vs. traditional data architecture*
Traditional: Tables connected by keys (product_id = order_id) — Edgar Codd normalization from the 1970s.
Fabric IQ / Ontologies: Tables connected by natural language descriptions of their contextual relationship (e.g., "Products are manufactured by manufacturers"; "Customers order products"; "Products are sold in stores"). These natural language connections form the ontology. The ontology becomes the basis of Fabric IQ.

*Fabric Data Agents*
- Virtual analyst that reasons over OneLake data.
- Can be consumed in M365 Copilot.
- Can be exposed as a remote MCP Server in VS Code.
- Now supports unstructured data through Azure AI Search.
- Now supports Fabric IQ Workload through Ontology — agents can be built on top of ontologies rather than raw tables.

Steps to integrate Fabric IQ Ontology with Fabric Data Agent:
1. Create Fabric Data Agent with ontology source.
2. Provide agent instructions.
3. Query agent with natural language.

Building a Fabric Data Agent is an iterative process (build → learn → iterate → evaluate → monitor → iterate).

*Azure AI Search knowledge bases for agents*
Process:
1. Create a knowledge source (connected to a source like SharePoint, OneLake, Blob, etc.).
2. Assign knowledge source(s) to a knowledge base.
3. Configure `alwaysQuery` or query planning steering instructions.
4. Query via retrieve action (REST API or Azure SDK) or via MCP endpoint.

Without answer synthesis: agentic retrieval returns document fragments; consuming application must interpret them in context.
With answer synthesis enabled: knowledge base LLM reads fragments and generates coherent, grounded, natural language responses with citations automatically.

The retrieve action is a parallel query processing pipeline that searches across all assigned knowledge sources simultaneously.

*Foundry IQ agentic RAG engine mechanics*
1. Receives a query.
2. Plans which knowledge sources to query.
3. Selects sources.
4. Searches across sources in parallel.
5. Collects responses.
6. Iterates if needed to refine.
7. Returns the best-quality response without wasting tokens.
Built on leading RAG techniques across the stack; delivers 36% better response quality than traditional RAG systems.

*Fabric IQ advantages (expanded)*
- Layered on top of the unified Fabric data foundation (Data Factory, Analytics Database, Real-Time Intelligence, Power BI).
- Millions of existing Power BI models jumpstart ontology creation.
- Native real-time platform for live business context.
- M365 and Azure AI Foundry integration.
- Visual no-code modeling tools for business agility.
- Licensing model based on adoption rate, not cost (flexible).

**Exam / assessment pointers**
- Ontology = natural-language description of entity relationships (not just key-based joins).
- Fabric IQ answers the question "how does our business operate?" for AI agents.
- Answer synthesis = one configuration field enables citation-backed natural language responses from a knowledge base.
- Agentic retrieval = multi-query pipeline for complex agent-to-agent workflows.
- Each knowledge base exposes an MCP endpoint.
- Fabric Data Agents can be consumed in M365 Copilot or as remote MCP Server in VS Code.
- Foundry IQ delivers 36% better response quality than traditional RAG.
- Knowledge sources are created as standalone objects, then assigned to knowledge bases.

---

## 6. Build multi-agent apps with Microsoft Agent Framework

**What it covers** — Introduces the Microsoft Agent Framework as the open-source engine for orchestrating production-grade multi-agent systems; explains its origin as a convergence of Semantic Kernel (single-agent) and AutoGen (multi-agent); covers five orchestration patterns; describes core concepts of executors, edges, and workflows; highlights human-in-the-loop, memory types, and enterprise-ready foundations.

**Key concepts**
- **Microsoft Agent Framework** — Open-source engine for agentic AI apps; the conductor that turns individual agents into coordinated enterprise-ready multi-agent systems; built for production with observability, reliability, security, and scalability baked in.
- **Open source significance** — Microsoft's deliberate strategic signal against building a closed proprietary platform; enables teams to inspect, extend, contribute, and run anywhere; grows through community contributions (lesson learned from LangChain/LangGraph community).
- **Semantic Kernel** — Full SDK designed to build AI agents with ease; excellent for single agents; can be extended to multi-agents with AutoGen integrations.
- **AutoGen** — Powerful multi-agent research framework with pre-built conversation orchestration patterns for handling complex agent systems; Microsoft Research origin.
- **Convergence** — Microsoft Agent Framework merges Semantic Kernel and AutoGen into one framework; lower complexity levels use Semantic Kernel, higher complexity uses AutoGen patterns.
- **Local-First, Cloud-Agnostic** — Developers run agents locally on laptop, test against preferred SDK (Azure OpenAI, OpenAI SDK, Foundry SDK), then move same code seamlessly to Foundry Agent Service or any cloud container without rewrites.
- **Sequential orchestration pattern** — Chains AI agents in predefined linear order; each agent processes output from previous agent; creates a pipeline of specialized transformations; solves step-by-step processing problems.
- **Concurrent orchestration pattern** — Multiple agents run simultaneously on the same task; each has different specializations; results merged at the end.
- **Group chat orchestration pattern** — Multiple agents communicate in a shared channel, similar to a team discussion.
- **Handoff orchestration pattern** — An agent transfers control to another agent when a specific condition is met or scope is exceeded.
- **Magentic orchestration pattern** — Designed for open-ended and complex problems without a predetermined approach; a manager agent communicates directly with specialized agents to gather information, builds and refines a task ledger; most flexible, highest autonomy.
- **Executor** — Fundamental building block that processes messages in a workflow.
- **Edge** — Defines how messages flow between executors, with optional conditions.
- **Workflow** — Ties everything together and manages execution; the orchestrator that coordinates executor execution, message routing, and event streaming.
- **Tools and extensibility** — Functions, APIs, and MCP servers can all be turned into tools; out-of-the-box integrations to common enterprise systems, databases, and SaaS APIs; agents declaratively defined in YAML; tools that require human approval can be specified.
- **Human-in-the-loop** — Capability to require human approval for specific tool invocations within the workflow; maintains accountability; important because "if something goes wrong, you can't blame the agent."
- **Session scope memory (short-term)** — Remembers context within the current conversation session only.
- **Persistent memory (long-term)** — Remembers days or weeks of conversation history.
- **Enterprise-ready foundations** — Logging, tracing, error handling, retry logic, observability, reliability, security, scalability built in (not bolted on).
- **Agentic vs. workflow orchestration** — Agent orchestration uses LLM reasoning and decision-making; workflow orchestration uses process pipeline logic. Static/linear processes → workflow side; adaptive reasoning/feedback loops → agent orchestration side.
- **Unified SDK / simple agent primitives** — Create, tool, and threads are the three core primitives for building agents with the Microsoft Agent Framework SDK.
- **Open standards support** — Framework built on A2A, MCP, OpenAPI; cloud-agnostic runtime.

**Detailed notes**

*Why one agent is not enough*
Enterprise tasks are too complex and varied for a single agent. Multi-agent systems allow specialization: one agent extracts, another analyzes, another synthesizes, another presents. Each agent does what it does best; the framework orchestrates them.

*The Semantic Kernel + AutoGen convergence*
Microsoft Agent Framework offers graded complexity:
- For developers wanting powerful single-agent solutions with an excellent SDK → Semantic Kernel.
- For teams needing robust multi-agent coordination with pre-built patterns for complex systems in low-code environments → AutoGen patterns.
- Both are now available in a single framework.

*Orchestration patterns in detail*

| Pattern | Description | Best for |
|---|---|---|
| Sequential | Linear chain; each agent processes output of previous | Step-by-step transformations, stage-dependent processing |
| Concurrent | Multiple agents run simultaneously on same task; results merged | Parallel specialization; speedup for independent subtasks |
| Group chat | Multiple agents share a channel; team-discussion model | Collaborative consensus, multiple perspectives |
| Handoff | Agent transfers control to another when condition is met | Scope-limited agents, escalation paths |
| Magentic | Manager agent builds and refines task ledger using specialized agents; open-ended | Complex problems without predetermined plan |

*Core structural concepts*
- **Executor** — The atomic unit; processes messages in a workflow.
- **Edge** — Connection between executors; defines message flow with optional conditions (conditional routing).
- **Workflow** — The complete orchestrator; coordinates executor execution, routes messages, manages event streaming.

*Local-first development model*
1. Develop and test agent locally on a laptop.
2. Test against preferred SDK (Azure OpenAI SDK, OpenAI SDK, or Foundry SDK).
3. Move same code to Foundry Agent Service (coming soon at time of course) or any cloud container.
4. No rewrites required.

*Human-in-the-loop*
Developers can declaratively define in YAML which tools require human approval. This preserves accountability — when an agent wants to take an action requiring human judgment, it pauses and waits for approval. Critical for maintaining responsibility in enterprise-grade deployments.

*Memory types*
- Short-term (session scope): context persists for the duration of a single conversation session.
- Long-term (persistent): context retained across sessions; agent remembers days or weeks of history.

*Pipeline for Research bridge*
The Microsoft Agent Framework is explicitly positioned as a bridge between research innovation (AutoGen patterns from Microsoft Research) and enterprise-ready production. This means teams can prototype experimental orchestration patterns locally, then scale them confidently in production.

**Exam / assessment pointers**
- Semantic Kernel = single-agent SDK; AutoGen = multi-agent research framework; Microsoft Agent Framework = both converged.
- Local-First, Cloud-Agnostic: write locally, deploy to Foundry or any cloud without rewrites.
- Magentic pattern = open-ended + complex + manager agent + task ledger.
- Sequential pattern = predefined linear order + step-by-step processing.
- Three core primitives: Create, Tool, Threads.
- Framework is open source (inspect, extend, contribute, run anywhere).
- Enterprise-ready foundations (logging, tracing, error handling, retry) are built in, not bolted on.
- Distinguish: agent orchestration (adaptive reasoning, LLM decision-making) vs. workflow orchestration (static pipeline/process logic).

---

## 7. Govern AI agents with Foundry Control Plane

**What it covers** — Covers post-deployment governance of AI agents using the Microsoft Foundry Control Plane: four pillars (security, compliance, fleet management, observability); governing MCP tools with an AI gateway; managing agents and token limits; compliance policy navigation; evaluations across the development lifecycle; Azure AI Content Safety; Microsoft Entra Agent ID; Microsoft Purview; and Microsoft Defender for Cloud.

**Key concepts**
- **Foundry Control Plane** — Central governance and observability platform for the AI lifecycle within Microsoft Foundry; four pillars: security, compliance, fleet management, observability.
- **Security pillar** — Identity and access-related features for agent protection.
- **Compliance pillar** — Guardrails, policies, and controls to ensure agents operate within defined boundaries.
- **Fleet management pillar** — Agent discovery, inventory, and action capabilities at scale (thousands of agents).
- **Observability pillar** — Traces, evaluations, and metrics; understanding agent health, cost, and behavior.
- **When to use Foundry Control Plane** — When managing multiple AI agents across different projects/teams; needing centralized compliance and policy enforcement; integrating Defender or Purview for AI governance; operating agents from multiple platforms; tracking costs and token usage.
- **AI gateway** — An intermediary that sits between clients and model deployments; used to route MCP traffic and enforce advanced policy; supports governing tools, agents, and models.
- **Governing MCP tools via AI gateway** — Control how agents access external tools by routing MCP traffic through an AI gateway in Foundry; applies rate limits, access policies, and logging.
- **Assets pane** — In Foundry Control Plane; provides a unified, searchable table of all AI assets across projects within a subscription.
- **Token limits enforcement** — Foundry Control Plane enforces tokens-per-minute (TPM) rate limits and total token quotas for model deployments at the project scope; AI gateway sits between clients and model deployments when advanced policy enforcement is needed.
- **Compliance navigation (Foundry Control Plane)** — Four tabs under Operate > Compliance: Policies (review/check guardrail policies, create/edit rules), Assets (inspect model deployments, view policy violations, jump to remediation), Guardrails (compare guardrail configurations across deployments, spot coverage gaps), Security posture (review Defender for Cloud recommendations, manage Microsoft Purview enablement).
- **Evaluations** — Agent evaluators that measure quality and surface issues; run across three lifecycle stages: local development (test data), CI/CD (batch evaluation on check-in/deploy), production (real user inputs + traces for debugging).
- **Evaluation metrics (quality and safety evaluators)** — Agent-specific evaluators determine if agents understand intent, call the right tools, provide correct answers; includes prebuilt single-metric evaluators and custom multi-metric evaluators.
- **Synthetic datasets** — LLM-generated test data for scenarios where real test data is scarce; particularly valuable for prompts testing inappropriate/unsafe behaviors (latest prompt injection attack techniques).
- **Azure AI Content Safety** — Content moderation platform integrated with Foundry Control Plane; uses AI to keep agents safe and grounded; available also as standalone Azure service.
- **Multimodal filtering** — Content Safety capability; scans text, images, and multimedia to identify, block, and monitor harmful content.
- **Customized systems (Content Safety)** — Create blocklists and custom categories to block entire topics, not just specific words.
- **Prompt shielding** — Content Safety capability; identifies and mitigates prompts that could expose the system to prompt injection attacks.
- **Protected materials detection** — Content Safety capability; avoids outputting known or owned text content.
- **Content Safety flow** — User prompt → application adds system message/grounding data → modified prompt sent to Content Safety Service → Content Safety scans/filters → filtered prompt sent to model → model response → Content Safety evaluates response → verified/filtered response returned to user.
- **Microsoft Entra Agent ID** — A unique identity assigned to an agent within Microsoft Entra; analogous to user identity or service principal; enables the same protections and controls as users (RBAC, conditional access, audit).
- **Agent ID creation** — In Microsoft Entra application creation, select "Agent ID" as the application type to associate an identity with a specific agent.
- **Entra roles for Foundry** — Owner (hub level, enterprise standards, assign contributor roles), Contributor/Azure AI Developer (manage hub, audit compute/connections, create shared resources), Team Lead/Lead Developer (create projects, shared resources like compute connections at hub level), Team Member/Developer (build/deploy AI models, create assets like compute and connections).
- **Microsoft Purview** — Comprehensive solution to discover, protect, and govern data wherever it flows; integrated with Foundry for data governance.
- **Risk when AI interactions are not secured** — Sensitive information can unintentionally be exposed when users include confidential data in prompts to LLMs or interact with Foundry-based AI applications, resulting in potential data loss.
- **Microsoft Defender for Cloud** — When enabled for Foundry, collects telemetry, analyzes it, and surfaces security posture risks and recommendations.
- **LoRA (reminder)** — Used for fine-tuning; introduced in Module 3 but tested in Module 7's assessment.

**Detailed notes**

*Four pillars of Foundry Control Plane*

| Pillar | What it provides |
|---|---|
| Security | Identity and access features; enterprise identity, runtime defense, sensitive data protection |
| Compliance | Guardrail definitions, policy management, controls enforcement; keep agents safe, grounded, on task |
| Fleet management | Agent discovery, inventory, action; see and govern entire agent fleet across clouds, frameworks, teams |
| Observability | Traces, evaluations, metrics; understand agent health, cost, behavior in real time |

*Scale context: why Foundry Control Plane is necessary*
When an organization has 2–3 agents, individual management is feasible. For a "decent-sized enterprise," thousands of agents are deployed. Individual management becomes impossible; a fleet-management platform is required. This is Foundry Control Plane's core value proposition.

*Governing MCP tools via AI gateway*
The AI gateway sits between agents and the MCP tools they call. It can:
- Enforce rate limits on tool invocations.
- Log all tool calls for audit.
- Apply access policies determining which agents can use which tools.
- Route to appropriate tool versions.

*Token limits (TPM)*
Foundry Control Plane enforces tokens-per-minute (TPM) rate limits and total token quotas at the project scope. When the AI gateway is configured, it sits between clients and model deployments and enforces these limits as an advanced policy layer.

*Compliance tab navigation*
| Tab | Navigation path | Outcome |
|---|---|---|
| Policies | Operate > Compliance > Policies | Review guardrail policies, check compliance, create or edit enforcement rules |
| Assets | Operate > Compliance > Assets | Inspect individual model deployments, view policy violations, jump to remediation |
| Guardrails | Operate > Compliance > Guardrails | Compare guardrail configurations across deployments, spot coverage gaps |
| Security posture | Operate > Compliance > Security posture | Review Defender for Cloud recommendations, manage Microsoft Purview enablement |

*Evaluations across the development lifecycle*
- **Local development**: Run agent evaluators with test data; catch issues before CI/CD.
- **CI/CD**: Batch evaluation runs on check-in and deployment; automated quality gate.
- **Production**: Run evaluators on real user inputs; use traces to debug issues in live environment.

Evaluation workflow:
1. Create or collect test data (prompts + expected completions); can use synthetic LLM-generated datasets.
2. Select metrics: prebuilt single-metric evaluators or custom multi-metric evaluators.
3. Integrate Foundry models if needed.
4. Run evaluations.
5. Evaluate responses; humans can verify performance.
6. Agent-specific evaluators check: intent understanding, correct tool calling, answer accuracy.

*Azure AI Content Safety — flow and capabilities*
Capabilities: multimodal filtering (text, images, multimedia), customized blocklists and categories (topics, not just words), prompt shielding (injection attack mitigation), protected materials detection (copyright protection).

Real-time flow:
1. User prompt received by application.
2. System message + grounding data added to form modified prompt.
3. Modified prompt sent to Content Safety Service.
4. Content Safety scans for harmful content; flags/rejects or filters.
5. Filtered prompt sent to LLM.
6. LLM generates response.
7. Response evaluated by Content Safety.
8. Filtered/verified response returned to user.

Content Safety can be connected to Microsoft Purview and Defender to bring telemetry into the security ecosystem.

*Microsoft Entra Agent ID*
- Every time an agent is created in Foundry (or Copilot Studio, Security Copilot, Agent 365), an Agent ID can be associated.
- Agent ID is not limited to Microsoft-built agents: third-party agents can be registered via Agent ID Open APIs and SDKs.
- Provides: protection, network security, governance, authorization, authentication.
- Enables: RBAC for agents (just like Azure RBAC for services), complete audit trails of what an agent did and what resources it accessed.
- Scale benefit: scaling agent adoption without scaling unmanaged risk.

*Foundry role-based access control*
| Role | Scope | Permissions |
|---|---|---|
| Owner | Azure AI Hub resource | Enterprise standards, assign contributor roles |
| Contributor / Azure AI Developer | Azure AI Hub resource | Manage hub, audit compute/connections, create shared resources |
| Team Lead / Lead Developer | Azure AI Hub resource | Create projects, shared compute connections at hub level |
| Team Member / Developer | AI Developer project | Build/deploy AI models, create assets (compute, connections) |

*Microsoft Purview integration*
Purview provides comprehensive data discovery, protection, and governance. When sensitive information is included in LLM prompts, it creates potential data loss risk. Purview integrated with Foundry enforces data classification and governance policies to prevent data exposure through AI interactions.

**Exam / assessment pointers**
- Four Foundry Control Plane pillars: security, compliance, fleet management, observability.
- Token limits are enforced at project scope as TPM (tokens-per-minute).
- AI gateway sits between clients and model deployments for advanced policy enforcement.
- Content Safety capabilities: multimodal filtering, customized systems, prompt shielding, protected materials detection.
- Content Safety is both integrated with Foundry AND available as a standalone Azure service.
- Entra Agent ID = unique first-class identity for agents; same protections as users.
- Third-party agents can also be registered with Entra Agent ID via Open APIs/SDKs.
- Compliance navigation: Policies → Assets → Guardrails → Security posture (all under Operate > Compliance).
- Evaluations run at three stages: local development, CI/CD, production.
- Synthetic datasets are valuable for testing prompt injection and other edge cases where real data is scarce.

---

## 8. Bring agent observability, security and governance with Agent 365

**What it covers** — Covers Microsoft Agent 365 as the IT-admin control plane for all agents within the M365 ecosystem; details the agent registry, onboarding governance with policy templates, observe/govern/secure capabilities; explains the M365 Admin Center integration (Entra, Purview, Defender); contrasts and combines Foundry Control Plane and Agent 365 in a four-step defense-in-depth lifecycle; introduces Microsoft 365 E7 as the Frontier Suite.

**Key concepts**
- **Agent 365** — Microsoft's IT-admin control plane for AI agents within M365; provides centralized visibility, governance, and security across the entire agent fleet regardless of where agents are built (Copilot Studio, Foundry, third-party).
- **Five core capabilities of Agent 365** — Registry (complete agent inventory), Access control (least-privilege enforcement), Visualization (monitoring agent behavior and relationships), Interoperability (connecting agents to enterprise tools and data), Security (protecting agents from threats and data exposure).
- **Observe (Agent 365)** — Register and track all agents in one place; complete view of agents from Microsoft AI platforms, ecosystem partners, and self-registered agents.
- **Govern (Agent 365)** — Bring agents under control from day one; onboard and approve through one IT-controlled flow; apply policy templates so every agent starts governed and compliant.
- **Secure (Agent 365)** — Control agent access and start secure; protect agent identities; prevent breaches by extending conditional access and identity protection from users to agents.
- **Agent Registry** — The system of records for all agents in the M365 tenant; IT admin's single place to see what exists, act on governance gaps, maintain control; supports: Agent Inventory & Types, Programmatic Access to Agent Registry, Risks & Alerts, Ownerless Agent Management.
- **Ownerless agent management** — Identifying and managing agents that no longer have an assigned owner.
- **Policy templates** — Existing tenant-wide security policies created by security teams across Defender, Entra, or Purview; applied to agents at onboarding; new instances of that agent type automatically inherit the policies.
- **Agent blueprints** — Templates that combine policy templates with agent definitions; any new instance of the agent type automatically has all security policies enforced by default.
- **IT-led onboarding workflow** — IT receives full list of all onboarding requests; validates platform, agent functions, scope, permissions, knowledge sources, and standard security policies; vetted agents become available to employees.
- **Agent 365 Overview page** — Dashboard in M365 Admin Center; shows: total agents in inventory, explore all agents, active users count, publisher analytics, agents used only by creator vs. published by organization, external partners, agent platforms, active users over time.
- **Agent Registry page features** — Agents registered count, pending requests count, filters by publisher/availability/owner/usage; snapshot of agent health and actionable insights for last 30 days; highlights critical actions for administrators; surfaces governance signals; enables quick navigation to all agent pages.
- **Microsoft 365 Admin Center** — Centralized hub for managing users, apps, settings, and agents; extended to include agent management.
- **Microsoft Entra (in M365 context)** — Protects agent identities; secures access to any app or resource from anywhere; Entra Agent ID used here.
- **Microsoft Purview (in M365 context)** — Manages, protects, and governs data that agents use and create across the organization.
- **Microsoft Defender (in M365 context)** — Extends comprehensive security posture and advanced threat protection to agents; threat protection and SecOps simplification.
- **Foundry Control Plane vs. Agent 365** — Foundry Control Plane: primarily development-to-deployment phase; helps developers build, evaluate, and operate agent fleets responsibly. Agent 365: primarily runtime and IT-admin control; manages how agents are deployed, permissions in M365 enterprise environment. Together: integrated defense-in-depth model covering the entire agent lifecycle from code to runtime.
- **Defense-in-depth lifecycle (4 steps)** — Start Secure (IT/security define policies) → Developer Experience (inherit policies + add engineering controls, guardrails, evaluations) → Approval and Onboarding (IT admins enforce policies/access boundaries) → Ongoing Enterprise Protection (continuous monitoring and enforcement).
- **Microsoft 365 E7 ("The Frontier Suite")** — Combines M365 E5 + Entra Suite + M365 Copilot + Agent 365; a productivity suite for human-led, agent-operated enterprises; single governed platform delivering E5 security/compliance + integrated AI stack.
- **Frontier Firm** — An organization that leads in the production use of AI (not just pilots); empowers everyone to innovate; human-led, agent-operated enterprise.
- **Three AI creates new attack surfaces** — Prompts and responses that can be manipulated, data pipelines fueling models/agents, plugins/integrations that expand attack paths, autonomous agents acting at machine speed.
- **M365 E7 three stages** — (1) AI in the workflow (infused into tools people use daily), (2) Empowering innovation (makers in every person, low-code and pro-code environments), (3) Govern, manage, and secure (observability at every layer).
- **Secure identities (E7)** — Protect access to resources for users and agents.
- **Protect your data (E7)** — Mitigate data security risks.
- **Defend against threats (E7)** — Simplify SecOps and enable proactive defense.

**Detailed notes**

*Agent 365 — the IT-admin view*
Agent 365 is specifically designed for IT and security administrators who need to manage agents across the organization, not the developers who built them. It works regardless of where agents were built: Copilot Studio, Foundry, or any third-party platform — as long as they operate within the M365 boundary.

*Five core capabilities of Agent 365*
1. **Registry** — Complete agent inventory; know what agents exist.
2. **Access control** — Least-privilege access enforcement; control what agents can do.
3. **Visualization** — Monitor agent behavior and relationships; understand how agents interact.
4. **Interoperability** — Connect agents to enterprise tools and data; control what agents can access.
5. **Security** — Protect agents from threats and data exposure risks.

*Agent Registry — bring-your-own-agent concept*
The registry accepts:
- Agents built on Microsoft AI platforms (Copilot Studio, Foundry, M365 Copilot).
- Agents built on other AI platforms and integrated via Agent 365 SDK.
- Agents registered via APIs (self-registered).

Once an agent is in the registry, it becomes a "managed agent" under Agent 365 IT control. The registry is the system of records — what the IT admin relies on as the authoritative list of all agents in the digital estate.

*Onboarding workflow*
1. IT receives list of all onboarding requests.
2. IT validates: platform, agent functions, scope, permissions, knowledge sources, standard security policies.
3. Only vetted agents become available to employees.
4. Policy templates from Defender, Entra, Purview are connected to agent blueprints.
5. New instances of an agent type automatically inherit all security policies from day one.

*M365 Admin Center integration*
| Service | Role in agent management |
|---|---|
| M365 Admin Center | Centralized hub; manage users, apps, settings, and agents |
| Microsoft Entra | Protect agent identities; secure access to any app or resource |
| Microsoft Purview | Manage, protect, and govern data that agents use and create |
| Microsoft Defender | Comprehensive security posture and advanced threat protection |

The Agent 365 Overview page within M365 Admin Center provides:
- Total agents in inventory and pending requests.
- Active user analytics.
- Publisher analytics (who built which agents).
- Agents published by organization vs. used only by creator.
- External partner agent counts.
- Agent platform breakdowns.
- Active user trends over time.
- Governance signals and alerts.

*Foundry Control Plane vs. Agent 365 — complementary roles*

| Dimension | Foundry Control Plane | Agent 365 |
|---|---|---|
| Primary audience | Developers and AI engineers | IT admins and security teams |
| Primary phase | Development through deployment | Runtime and post-deployment |
| Primary focus | Build, evaluate, operate agent fleets responsibly | Deploy, govern, manage permissions in M365 |
| Governance | Engineering controls, guardrails, evaluations | Policy templates, access control, compliance enforcement |
| Identity integration | Entra for Foundry resources | Entra Agent ID for runtime identity |

Together they form an integrated defense-in-depth model that spans the full agent lifecycle from code to runtime.

*Defense-in-depth lifecycle — four steps*
1. **Start Secure** — IT and security teams define enterprise policies: identity access, data protection, threat protection. Every deployed agent begins with the right policy foundations.
2. **Developer Experience** — Developers inherit those enterprise policies; add engineering controls (guardrails, evaluations); catch issues early in testing and evaluation phases.
3. **Approval and Onboarding** — When agent is ready to access real enterprise resources, IT admins enforce policies, access boundaries, and approval so the agent is authorized to act within tenant rules.
4. **Ongoing Enterprise Protection** — Continuous monitoring, policy enforcement, and threat protection after deployment.

*Microsoft 365 E7 — the Frontier Suite*
E7 composition: M365 E5 + Entra Suite + M365 Copilot + Agent 365.

Three stages of unlocking intelligence and trust:
1. **AI in the workflow** — AI infused into tools people use every day (seamless, not chat-window-pasted).
2. **Empowering innovation** — Maker in every person; low-code and pro-code environments; creation right in the flow of work; not limited to a single team, role, or function.
3. **Govern, manage, and secure** — Observability at every layer; know what agents do, who accesses them, what workflows they use, what results they produce.

*AI-specific attack surfaces (new with agents)*
- Prompts and responses that can be manipulated (prompt injection).
- Data pipelines fueling models and agents (data poisoning).
- Plugins and integrations that expand attack paths.
- Autonomous agents acting at machine speed (attack automation).
Traditional security approaches are insufficient alone in an AI/agent-driven world.

*Frontier Firm analogy*
"When you onboard an employee, you do two things: give them context (knowledge, data, how work gets done) and give them controls (policies, guardrails, accountability). Agents are no different." — M365 E7 provides both for AI agents.

**Exam / assessment pointers**
- Agent 365 = IT-admin control plane for M365; works regardless of where agent was built.
- Five core capabilities: Registry, Access control, Visualization, Interoperability, Security.
- Observe/Govern/Secure is Agent 365's operational triad.
- Foundry Control Plane = development to deployment; Agent 365 = IT admin, runtime, M365 scope.
- Defense-in-depth: four steps are Start Secure → Developer Experience → Approval/Onboarding → Ongoing Enterprise Protection.
- M365 E7 = E5 + Entra Suite + M365 Copilot + Agent 365.
- Policy templates from Defender, Entra, Purview can be automatically applied to agents at onboarding.
- New attack surfaces introduced by AI: manipulable prompts/responses, data pipelines, expanded plugin attack paths, machine-speed autonomous actions.
- M365 E7 three stages: AI in the workflow, Empowering innovation, Govern/manage/secure.

---

## Key terminology

| Term | Definition | Where it appears |
|---|---|---|
| A2A (Agent-to-Agent) protocol | Open communication standard enabling interoperability, complex workflows, and secure opaque agent-to-agent communication | Module 4, 6, 7 |
| Agent 365 | Microsoft IT-admin control plane for AI agents within M365; provides Observe, Govern, Secure capabilities | Modules 1, 7, 8 |
| Agent Blueprint | Combination of policy template + agent definition; new instances inherit security policies automatically | Module 8 |
| Agent Factory (Microsoft) | Program combining Copilot Studio or Foundry with single prepaid plan, forward-deployed engineers, and expert-led training | Module 1 |
| Agent ID (Entra) | Unique first-class identity assigned to an AI agent in Microsoft Entra; same protections as users | Modules 7, 8 |
| Agent Registry | System of records for all agents in M365 tenant; centralized inventory for IT admins | Module 8 |
| Agentic AI | AI systems that act autonomously on behalf of users: invoke tools, connect to external systems, drive outcomes | Module 1 |
| Agentic RAG engine | Foundry IQ's multi-source retrieval engine; plans, selects, searches, responds, iterates; delivers 36% better responses than traditional RAG | Modules 1, 5 |
| Agentic retrieval | Multi-query pipeline designed for complex agent-to-agent workflows; parallel query processing across knowledge sources | Module 5 |
| Answer synthesis | Feature enabling a knowledge base LLM to convert document fragments into coherent, citation-backed natural language responses | Module 5 |
| AutoGen | Microsoft Research multi-agent research framework; pre-built orchestration patterns for complex agent systems | Module 6 |
| Azure AI Content Safety | Content moderation platform; multimodal filtering, prompt shielding, protected materials detection, customized blocklists | Module 7 |
| Azure AI Search | Recommended index store for RAG; used for knowledge bases in agentic retrieval workflows | Modules 3, 5 |
| Azure API Center | Azure service used to register MCP servers for a private tool catalog | Module 4 |
| Buy vs. Build | Decision framework for AI agent projects; trade-off between out-of-box value and customization depth | Module 2 |
| Concurrent orchestration | Multiple agents run simultaneously on the same task; results merged | Module 6 |
| Content Safety flow | User prompt → system message/grounding added → Content Safety scan → filtered to model → model response → Content Safety scan → filtered response to user | Module 7 |
| Custom engine agents | Agents using a bring-your-own orchestrator and models; built via Azure Bot Service, Agent SDK, Teams AI library, or Direct line | Module 2 |
| Declarative agents | Agents using Copilot's built-in orchestrator and models; defined via instructions, knowledge, actions | Module 2 |
| Defense-in-depth lifecycle | Four-step model: Start Secure → Developer Experience → Approval/Onboarding → Ongoing Enterprise Protection | Module 8 |
| Executor | Fundamental building block of a workflow in Microsoft Agent Framework; processes messages | Module 6 |
| Fabric Data Agent | Virtual analyst reasoning over OneLake data; consumable in M365 Copilot or as remote MCP Server in VS Code | Module 5 |
| Fabric IQ | Unified semantic business layer on top of OneLake providing consistent meaning across data, models, rules, and actions; enables live data reasoning | Modules 1, 5 |
- Fine-tuning | Customizing a pre-trained LLM with additional training; uses LoRA in Azure OpenAI Service | Module 3 |
| Foundry Agent Service | Managed service within Microsoft Foundry for designing, developing, deploying agents; supports prompt, workflow, hosted agent types | Module 3, 4 |
| Foundry Control Plane | Governance and observability platform within Foundry; four pillars: security, compliance, fleet management, observability | Module 7 |
| Foundry IQ | Developer-facing intelligence layer in Foundry; automated data connectivity, agentic RAG, permission-aware access | Modules 1, 3, 5 |
| Foundry Models | Catalog of 11,000+ models (OpenAI, Anthropic, Mistral, Meta, and more) with benchmarking, leaderboard, A/B experimentation | Module 3 |
| Frontier Firm | Organization leading in production AI use; human-led, agent-operated enterprise | Modules 1, 8 |
| Frontier organization | Enterprise that has implemented all five drivers of AI value effectively | Module 1 |
| GenAI Ops | Operational discipline for production generative AI: deployment, monitoring, management; analogous to MLOps | Module 1 |
| Group chat orchestration | Multiple agents communicate in a shared channel (team discussion model) | Module 6 |
| Handoff orchestration | Agent transfers control to another when a condition is met or scope exceeded | Module 6 |
| Hosted agents | Code-based agents deployed as containers on Foundry Agent Service; custom orchestration; Foundry manages runtime/scaling | Module 3 |
| Hosting adapter | Framework abstraction layer exposing supported agent frameworks as HTTP services for local testing and hosted deployments | Module 3 |
| Human-in-the-loop | Workflow capability requiring human approval for specific tool invocations; preserves accountability | Module 6 |
| Index | Specialized data structure (e.g., Azure AI Search) organizing content for efficient RAG retrieval | Modules 3, 5 |
| Knowledge base | Aggregation of knowledge sources; exposes MCP endpoint for consumption by MCP-compatible agents | Module 5 |
| Knowledge source | Standalone object in agentic retrieval pipeline; created via Azure portal, REST API, or Azure SDK; assigned to knowledge bases | Module 5 |
| Local-First, Cloud-Agnostic | Development model: build locally against preferred SDK, deploy to Foundry or any cloud without rewrites | Module 6 |
| LoRA (Low-Rank Approximation) | Fine-tuning technique in Azure OpenAI Service; approximates high-rank weight matrix with lower-rank version; trains only important parameters | Module 3 |
| Magentic orchestration | Open-ended pattern; manager agent builds and refines task ledger using specialized agents; no predetermined plan | Module 6 |
| M365 E7 (Frontier Suite) | Microsoft 365 E5 + Entra Suite + M365 Copilot + Agent 365; single governed platform for Frontier Firms | Module 8 |
| MCP (Model Context Protocol) | Open standard defining how an application provides tools and contextual data to LLMs; purpose-built for generative AI | Modules 4, 5 |
| MCP client | The LLM that communicates with MCP servers; asks what tools are available and invokes them | Module 4 |
| MCP server | Server that exposes tools and contextual data to LLMs via MCP protocol; can be public or private | Modules 4, 5 |
| Microsoft Agent Framework | Open-source engine for agentic AI apps; convergence of Semantic Kernel and AutoGen; local-first, cloud-agnostic | Module 6 |
| Microsoft Foundry | Unified AI app and agent factory; unifies model selection, agent service, IQ layer, tools, control plane, and deployment | Modules 1, 3, 4 |
| Microsoft Graph | Backbone connecting data, people, and workflows across M365; enables agents to access LOB data, agent store, multi-agent systems | Module 2 |
| Microsoft IQ platform | Intelligence layer shared across Microsoft AI surfaces; comprises Work IQ, Fabric IQ, Foundry IQ | Module 1 |
| Model router | Foundry capability that automatically selects the best model for a given query | Module 3 |
| OAuth Identity Passthrough | Authentication method for MCP tools that preserves individual user identity throughout the request chain | Module 4 |
| Ontology | Natural-language description of relationships between data entities; forms the basis of Fabric IQ | Module 5 |
| Policy template | Tenant-wide security policies (from Defender, Entra, Purview) that can be applied to agents at onboarding | Module 8 |
| Private tool catalog | Organization-scoped catalog of tools using Azure API Center; only org users can discover and configure | Module 4 |
| Prompt agents | Declaratively defined agents in Foundry; agent service handles all orchestration and hosting automatically | Module 3 |
| Prompt shielding | Content Safety capability that identifies and mitigates prompt injection attack attempts | Module 7 |
| Protected materials detection | Content Safety capability that prevents outputting known or owned text content | Module 7 |
| RAG (Retrieval Augmented Generation) | Pattern: query index before LLM; augment prompt with retrieved content; generate grounded response | Modules 3, 5 |
| Semantic Kernel | Full SDK for building single AI agents with ease; extendable to multi-agent with AutoGen | Module 6 |
| Semantic model | Shared business vocabulary on top of data; resolves terminology inconsistencies across departments | Module 5 |
| Sequential orchestration | Linear chain of agents; each processes the output of the previous; pipeline of specialized transformations | Module 6 |
| Technology and Data Journey | Five-stage maturity model: Emerging data foundation → Foundational build-out → Production-capable platform → Enterprise-wide infrastructure → Continuous optimization | Module 1 |
| Token limits (TPM) | Tokens-per-minute rate limits enforced at project scope in Foundry Control Plane; AI gateway adds advanced policy layer | Module 7 |
| Toolboxes | Bundles of related tools in Foundry Tools (preview at course time) | Module 4 |
| Voice Agent | Foundry Agent Service capability for real-time voice input/output; same agent logic and tools, different interface layer | Module 4 |
| Work IQ | Intelligence layer within M365; personalizes Copilot using M365 signals, LOB data, persistent memory, real-time inference | Modules 1, 2 |
| Workflow (Agent Framework) | Ties executors together; orchestrates executor execution, message routing, event streaming | Module 6 |
| Workflow agents | Declarative-YAML-defined multi-agent orchestrations in Foundry; support branching logic and human-in-the-loop (preview) | Module 3 |

---

## Hands-on labs

### Lab 1: Copilot Studio — Weather agent from template (Module 2)

**Objective:** Create and test an agent from a prebuilt template in Microsoft Copilot Studio.

**Tools:** Microsoft Copilot Studio (browser), organizational/work account (or 30-day free trial), MSN Weather connector.

**Steps:**
1. Navigate to Microsoft Copilot Studio in your browser.
2. Go to Agents section.
3. Browse available templates; select the Weather template.
4. Review pre-populated fields: name (Weather), instructions (friendly, weather-only, do not answer unrelated questions), connected to MSN Weather connector.
5. Activate the MSN Weather subscription connection.
6. Optionally add knowledge sources (public websites, SharePoint).
7. Click Create.
8. In the test pane, create a new test session.
9. Test queries: "What is the weather in London today?" (note: full city names work better than acronyms like "SFO").
10. Review agent responses; observe where intent recognition fails.
11. Note that iterative optimization is needed for edge cases.

**Observation:** The agent handles direct queries well but struggles with ambiguous intent (e.g., city acronyms). Temperature unit conversions may not be processed reliably without prompt improvement.

---

### Lab 2: Copilot Studio — Blank agent from scratch with knowledge source (Module 2)

**Objective:** Build an agent from scratch with a public website knowledge source and test its reasoning.

**Tools:** Microsoft Copilot Studio.

**Steps:**
1. Agents → Create → Blank Agent.
2. Enter name: "AI Trainer" (or similar).
3. Optionally link to a Teams team (can skip).
4. Click Create blank agent.
5. Set Description: "Agent that teaches users how to create agents with Copilot Studio."
6. Select model: Claude Sonnet 4.6 (or any available Foundry model).
7. Edit Instructions:
   - Purpose: Help users by answering questions using official Microsoft Studio documentation.
   - Guidelines: Professional and helpful tone; base answers on official documentation only.
   - Skills: Search and reference official docs; summarize responses clearly without repetition.
8. Under Knowledge Sources: add Public Website → enter `https://learn.microsoft.com/microsoft-copilot-studio`.
9. Click Add.
10. Explore other tool categories (Agent Flow, MCP server, connectors like Office 365, Teams, Excel).
11. Create a new test session.
12. Ask: "I want to learn how to use Studio."
13. Review the agent's response; check "Show Rationale" to see the reasoning chain.
14. Observe that the agent searches the knowledge base, retrieves references, and synthesizes step-by-step guidance.

---

### Lab 3: Foundry Agent Service — Python prompt agent (Module 3)

**Objective:** Create a prompt agent programmatically using the Azure AI Projects Python SDK.

**Tools:** Microsoft Foundry portal, Visual Studio Code (or terminal), Python, `azure-ai-projects` package, Azure CLI (`az login`).

**Steps:**
1. In Microsoft Foundry portal, create a Foundry project (or use an existing one).
2. Copy the project Endpoint from the project's overview page.
3. Note the available model deployments (e.g., GPT-4o).
4. In VS Code, create a Python file (e.g., `create_agent.py`).
5. Set `project_endpoint` variable to the copied endpoint.
6. Use `DefaultAzureCredential` for authentication.
7. Define: agent name, model deployment name (e.g., `gpt-4o`), instructions.
8. Install the SDK: `pip install azure-ai-projects` (if not installed).
9. Authenticate: `az login` in terminal.
10. Run the script: `python create_agent.py`.
11. Verify: navigate to Foundry portal → Agents → confirm the new agent appears.
12. Create a second script to start a thread, send a message, and receive a response.
13. Run the conversation script; review the agent's output with citations.

**Key takeaway:** Agents can be created declaratively via code using `DefaultAzureCredential` and the Foundry SDK; model names must match deployed models in the project.

---

## Common pitfalls and gotchas

1. **Model availability is geography-specific** — Not all 11,000+ Foundry Models are available in all Azure regions, and fine-tuning support also varies by region. Always check availability for your target deployment region before committing to a model choice.

2. **Workflow agents and hosted agents are in preview** — At time of course production, both workflow agents and hosted agents in the Foundry Agent Service were preview features. APIs and behaviors may change before GA.

3. **MCP server authentication required for most servers** — Public MCP servers (e.g., Microsoft Learn) require no authentication, but most enterprise MCP servers require either shared (key/Entra identity) or per-user (OAuth passthrough) authentication. Skipping auth configuration will cause agent connection failures.

4. **Shared authentication does not preserve user identity** — With key-based, Entra Agent Identity, or Entra Foundry Project Managed Identity authentication, the individual user's identity does not persist. If data access must be user-scoped, use OAuth Identity Passthrough instead.

5. **Prefer MCP over pre-generative connectors** — When both a legacy connector and an MCP server exist for a target system, use the MCP server. MCP was purpose-built for generative AI context; older connectors may provide less contextually accurate responses.

6. **RAG does not replace prompt engineering** — The optimization cycle should start with prompt engineering before implementing RAG. Adding a RAG layer on top of poorly engineered prompts will not solve the root problem.

7. **Fine-tuning is not always necessary** — Fine-tuning is often the last resort (or one of several combined techniques). Many performance issues can be resolved by better prompt engineering, adding a knowledge base, or selecting a more appropriate base model.

8. **Foundry Control Plane vs. Agent 365 are not interchangeable** — Foundry Control Plane targets developer-phase governance (build through deployment); Agent 365 targets IT-admin runtime governance in M365. They are complementary and cover different phases of the agent lifecycle.

9. **Agent 365 only governs agents within the M365 boundary** — Agents deployed entirely outside M365 are not governed by Agent 365; they require Foundry Control Plane governance only.

10. **Ontologies in Fabric IQ require deliberate design** — Simply having relationships (foreign keys) between tables is insufficient for Fabric IQ. Ontologies must describe the natural-language contextual meaning of those relationships (e.g., "products are sold by stores") — not just the key columns.

11. **Answer synthesis requires explicit enablement** — Without enabling the answer synthesis configuration field, agentic retrieval returns raw document fragments rather than coherent answers. The consuming application must handle fragment assembly itself if synthesis is disabled.

12. **City acronyms in natural language agents** — Copilot Studio agents (and agents in general) can struggle with ambiguous intent. In the course demo, "SFO" was not reliably interpreted; "San Francisco" succeeded. Always validate natural language edge cases during testing.

13. **Agent ID is created at agent creation time, not retroactively** — In Microsoft Entra, the Agent ID application type must be selected when creating the application entry. Retroactive assignment requires re-registration.

14. **Token quotas are enforced at project scope** — TPM limits apply to the project, not to individual agents within it. This means high-volume agents can exhaust quotas and affect other agents in the same project. Proper quota management and segmentation across projects is essential.

15. **Content Safety is not infallible** — Content Safety must be configured for each desired hazard category; it does not automatically detect all harmful content types. Custom blocklists and tuned thresholds are necessary for domain-specific safety requirements.

---

## Self-test questions

**Module 1 — Intelligent Foundation**

1. According to IDC, how many AI agents are expected to be deployed across enterprises by 2028?
2. What are the four essentials for high-performance agents?
3. Name the five stages of the Technology and Data Journey maturity model in order.
4. Name the five drivers of AI value as defined by Microsoft.
5. What are the three layers of the Microsoft IQ platform and what does each one address?
6. What three components make up the Work IQ layer, and what does each do?
7. What benefit does the Microsoft IQ intelligence layer provide that reduces development time?
8. What is the Microsoft Agentic System of Work, and what are its three components?
9. What is the Microsoft Agent Factory program, and what does it include?

**Module 2 — Right Path to Build Agents**

10. Arrange the four agent-building paths from highest out-of-box value to lowest: Copilot Studio, Persona-based Copilots, M365 Copilot, Microsoft Foundry.
11. What is the key difference between a declarative agent and a custom engine agent?
12. What are the three complexity tiers in Copilot Studio (from no-code to pro-code)?
13. What six capabilities does Microsoft Graph provide for Copilot and agent development?
14. In the Copilot Studio demo, what was the knowledge source added to the "AI Trainer" agent?

**Module 3 — Microsoft Foundry**

15. What are the three types of agents in the Foundry Agent Service, and what distinguishes each?
16. What does LoRA stand for, and how does it reduce fine-tuning complexity?
17. Describe the Foundry IQ RAG pipeline from ingestion to query in correct order.
18. What are the three reasons to fine-tune a model, and what does each address?
19. What is the model router in Foundry Models?

**Module 4 — Tools, APIs and Protocols**

20. What is MCP, and why is it preferred over pre-generative-AI connectors when both exist for a target system?
21. What are the four supported authentication methods for MCP tools in Foundry?
22. What is the difference between shared authentication and individual authentication for MCP tools?
23. What are the three key properties of the A2A protocol?
24. What Azure service is used to create a private tool catalog, and who can access it?
25. What are the three custom tool types available in the Foundry Tools custom tools section?

**Module 5 — Knowledge with Foundry IQ and Fabric IQ**

26. What is an ontology in the context of Fabric IQ, and how does it differ from a traditional database join?
27. What does answer synthesis enable in an Azure AI Search knowledge base?
28. What percentage improvement in response quality does Foundry IQ's agentic RAG engine deliver compared to traditional RAG?
29. How can a Fabric Data Agent be consumed outside of M365 Copilot?
30. What is the difference between a knowledge source and a knowledge base in agentic retrieval?

**Module 6 — Multi-Agent Framework**

31. Which two open-source frameworks were converged into the Microsoft Agent Framework, and what is each one's specialty?
32. Name and describe all five orchestration patterns supported by the Microsoft Agent Framework.
33. What are the three core structural concepts of the Microsoft Agent Framework, and what does each do?
34. What does "Local-First, Cloud-Agnostic" mean in the context of the Microsoft Agent Framework?
35. How does agentic orchestration differ from workflow orchestration?

**Module 7 — Foundry Control Plane**

36. What are the four pillars of the Foundry Control Plane?
37. What is the role of the AI gateway in Foundry Control Plane, and where does it sit?
38. Name the four tabs under Operate > Compliance in Foundry Control Plane and what each tab does.
39. What are the four capabilities of Azure AI Content Safety?
40. What is the Microsoft Entra Agent ID, and what does it enable for AI agents?

**Module 8 — Agent 365**

41. What is the key difference between Foundry Control Plane and Agent 365 in terms of their primary governance scope?
42. Name the five core capabilities of Agent 365.
43. Describe the four-step defense-in-depth lifecycle model.
44. What is the composition of Microsoft 365 E7?
45. What new attack surfaces does AI introduce that traditional security approaches did not have to address?

---

### Answer key

1. **~1.3 billion** AI agents (IDC survey).
2. (1) Rich connected context, (2) unified access to data and signals, (3) low-friction development and orchestration, (4) governance/observability/trust.
3. Emerging data foundation → Foundational build-out → Production-capable platform → Enterprise-wide infrastructure → Continuous optimization.
4. Business strategy, AI adoption, AI strategy and experience, AI governance and security, Technology and data.
5. Work IQ (AI grounded in personal/organizational M365 data), Foundry IQ (developer platform for building/managing AI models and agents), Fabric IQ (AI for data and analytic workloads across organizational data).
6. Data (combines M365 signals + LOB data for real-time understanding), Context (persistent memory of user preferences, collaborators, patterns — explicit + implicit), Skills and Tools (specialized instructions to tailor Copilot for specific tasks and select the right tool).
7. Agents can be launched in **weeks, not months**, because the intelligence layer eliminates the need for custom integration from scratch for each new agent.
8. Copilots (get work done) + Agents (run the business) + Agent 365 (keep everything safe, observable, governed), all built on top of Microsoft IQ.
9. A program within the Accelerate AI Innovation initiative; includes: single prepaid plan for Copilot Studio or Foundry, forward-deployed engineers and specialized partners, expert-led AI training for every role.
10. Highest to lowest out-of-box value: Persona-based Copilots → M365 Copilot → Copilot Studio → Microsoft Foundry.
11. Declarative agents use Copilot's built-in orchestrator and models. Custom engine agents bring-your-own orchestrator and models for full tailoring.
12. No-code (natural language/Agent Builder), low-code (Copilot Studio drag-and-drop), pro-code (M365 Agents SDK, Visual Studio Code, Azure AI Services).
13. Leverages productivity data for personalized experiences; connects to LOB apps/developer tools/business data; provides agent store; enables building agents for Copilot; enables multi-agent systems; enables BYOM/knowledge via Foundry integration.
14. Public website: `https://learn.microsoft.com/microsoft-copilot-studio`.
15. Prompt agents (config-only, service handles orchestration/hosting; GA); Workflow agents (declarative YAML, multi-agent sequences, branching, human-in-loop; preview); Hosted agents (code-based containers, custom orchestration, Foundry manages runtime; preview).
16. **Low-Rank Approximation**. It approximates the original high-rank weight matrix with a lower-rank version, fine-tuning only a smaller subset of "important" parameters — reducing complexity while maintaining performance.
17. Ingest (OneLake, Blob, ADL, SQL DB, Cosmos DB) → Extract (PDFs, Office docs, images, JSON, CSV, Markdown) → Chunk → Embed → Index → Query.
18. Improve Quality (domain/task-specific optimization), Reduce Cost (reduced token consumption, efficient resource utilization), Reduce Latency (smaller models, faster responses, shorter prompts).
19. The model router automatically identifies the best model for a given query based on query content; eliminates the need to manually select a model for every request.
20. **Model Context Protocol** — an open standard for providing tools and contextual data to LLMs; purpose-built for generative AI, unlike pre-gen connectors. MCP ensures contextually accurate model responses aligned with the model's context window.
21. Key-based authentication, Microsoft Entra Agent Identity, Microsoft Entra Foundry Project Managed Identity, OAuth Identity Passthrough.
22. Shared authentication: all agent users share the same identity (key, Entra Agent Identity, or Foundry Managed Identity); user context does not persist. Individual authentication (OAuth Passthrough): each user's own identity passes through, enabling user-scoped access control.
23. Interoperability, complex workflows, secure and opaque.
24. **Azure API Center**. Only users within the organization can discover and configure the tools.
25. Agent-to-Agent (A2A), Model Context Protocol (MCP), OpenAPI tool.
26. An ontology uses natural language to describe the contextual meaning of relationships between data entities (e.g., "products are sold in stores"). A traditional database join only connects tables by matching key columns (product_id = order_id) without describing the business meaning of the connection.
27. Answer synthesis enables the knowledge base LLM to read document fragments and generate a coherent, grounded, natural-language response with citations, rather than returning raw document chunks.
28. **36% better** response quality than traditional RAG systems.
29. As a remote MCP Server in VS Code.
30. A knowledge source is a standalone object connected to a single data source (e.g., SharePoint, OneLake). A knowledge base aggregates multiple knowledge sources; it exposes a MCP endpoint and is the level at which the retrieve action is invoked.
31. **Semantic Kernel** (full SDK for powerful single-agent solutions) + **AutoGen** (robust multi-agent research framework with pre-built orchestration patterns for complex systems).
32. Sequential (linear chain, each agent processes previous agent's output); Concurrent (multiple agents run simultaneously, results merged); Group chat (multiple agents share a communication channel); Handoff (agent transfers control to another when a condition is met); Magentic (manager agent builds/refines task ledger using specialized agents for open-ended problems).
33. Executor (fundamental processing unit for messages in a workflow); Edge (defines how messages flow between executors with optional conditions); Workflow (orchestrator that coordinates executor execution, message routing, event streaming).
34. Developers write and test agent code locally against their preferred SDK; the same code can be moved to Foundry Agent Service or any cloud container without rewrites.
35. Agentic orchestration: LLM-based reasoning and decision-making; adaptive, responds to feedback; suitable for open-ended, dynamic tasks. Workflow orchestration: process pipeline logic; static, predefined sequence of steps; suitable for predictable, repeatable processes.
36. Security, compliance, fleet management, observability.
37. The AI gateway sits between clients and model deployments; it enforces advanced policy (rate limits, access control, logging) when routing MCP traffic and model requests; it enables TPM rate-limit enforcement and tool access governance.
38. Policies (review/check guardrail policies, create/edit rules); Assets (inspect model deployments, view policy violations, jump to remediation); Guardrails (compare guardrail configurations across deployments, spot coverage gaps); Security posture (review Defender for Cloud recommendations, manage Purview enablement).
39. Multimodal filtering (scan text, images, multimedia for harmful content), customized systems (blocklists and custom categories for entire topics), prompt shielding (identify/mitigate prompt injection attacks), protected materials detection (prevent outputting known/owned text).
40. Microsoft Entra Agent ID is a unique first-class identity assigned to an AI agent, analogous to a user identity. It enables: RBAC for agents (control what they can access), conditional access, audit trails of agent actions, identity protection — the same controls used for human users applied to AI agents.
41. Foundry Control Plane primarily governs agents during development through deployment (developer-facing). Agent 365 primarily governs agents at runtime in the M365 environment (IT-admin-facing).
42. Registry (complete agent inventory), access control (least-privilege enforcement), visualization (monitoring behavior and relationships), interoperability (connecting to enterprise tools and data), security (protecting from threats and data exposure).
43. Step 1 — Start Secure: IT/security teams define enterprise policies (identity, data, threat protection); Step 2 — Developer Experience: developers inherit policies and add engineering controls (guardrails, evaluations); Step 3 — Approval and Onboarding: IT admins enforce policies, access boundaries, and approval for agents accessing real resources; Step 4 — Ongoing Enterprise Protection: continuous monitoring, enforcement, and threat protection post-deployment.
44. M365 E5 + Entra Suite + M365 Copilot + Agent 365.
45. Prompts and responses that can be manipulated (prompt injection); data pipelines fueling models/agents (data poisoning); plugins and integrations expanding attack paths; autonomous agents acting at machine speed (attack automation at scale).
