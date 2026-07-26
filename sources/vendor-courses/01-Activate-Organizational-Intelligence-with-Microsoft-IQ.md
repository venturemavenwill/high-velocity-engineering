# Activate Organizational Intelligence with Microsoft IQ

> LevelUp course ID: 2435386 | Phase: 2 — Project Ready | Duration: ~1 hour | Badge relevance: Frontier Transformation Engineer (FTE) partner badge

---

## At a glance

- Microsoft IQ is a **unified intelligence layer** that bridges the gap between fragmented enterprise data and AI agents, enabling agents to reason with the same depth of context as long-tenured employees.
- The platform comprises three integrated layers — **Work IQ** (how people work), **Fabric IQ** (how the business operates), and **Foundry IQ** (how agents unlock knowledge) — plus a control plane called **Agent 365**.
- Without IQ, agents behave like a "brilliant intern on their first day": they can search but cannot reason, contextualise, or respect permissions reliably; with IQ they behave like a "10-year veteran who knows the business."
- The course anchors every concept in a concrete retail scenario (Sunrise Farms contamination crisis) and a developer walkthrough of an airline airport operations ontology, making it easy to map theory to practice.
- **Agent 365**, available from 1 May (current year), provides IT with a single control plane to observe, govern, and secure all agents — Microsoft-built, partner-built, and third-party alike.
- **Microsoft Agent Factory** bundles Copilot Studio, Foundry, GitHub Copilot, and Fabric into a single pre-paid plan to accelerate the build-and-scale journey.
- The course is explicitly partner-facing: it teaches FTEs to identify customer scenarios, map them to the right IQ layer, validate governance with Agent 365, and deliver a 30–60-day IQ-powered proof of concept.
- Key external data points cited: IDC predicts **1.3 billion AI agents** in use by 2028; Capgemini reports **82 % of organisations** intend to integrate agents within 3 years; Gartner states **40 % of enterprise applications** will include task-specific AI agents in the current year.
- Foundry IQ's agentic RAG engine delivers **36 % better response performance** out of the box compared to bespoke per-agent RAG pipelines.
- The overarching message for FTEs: IQ-powered solutions can be branded, packaged, and industry-tuned by partners, making IQ a foundation for scalable, governed, high-value IP.

---

## Module map

| # | Module / Lesson | Purpose |
|---|----------------|---------|
| 1 | Activate organizational intelligence with Microsoft IQ | Core instructional module covering the full Microsoft IQ platform (Work IQ, Fabric IQ, Foundry IQ, Agent 365) |
| 2 | Post-training Skills Assessment | Knowledge-check assessment to validate learning from the self-paced content |
| 3 | Course Completion Survey | Learner feedback collection |
| 4 | Frontier Engineer Assessment | Summative assessment to mark overall FTE badge completion |

---

## 1. Activate Organizational Intelligence with Microsoft IQ

### 1.1 The Microsoft IQ Platform: Unified Intelligence Layer for Enterprise AI

**What it covers**
This opening section frames the business problem — an exploding AI agent landscape that demands rich, trusted enterprise context — and introduces Microsoft IQ as the unified intelligence layer that solves it. It explains why agents without IQ fail and why agents with IQ succeed, then positions the three integrated layers (Work IQ, Fabric IQ, Foundry IQ) as the answer.

**Key concepts**

- **Microsoft IQ** — A shared intelligence layer that creates a unified understanding of an organisation's flow of work, data, and knowledge. It transforms fragmented enterprise data into rich, live business context that both employees and AI agents can use to make trusted, well-grounded decisions.
- **Unified intelligence layer** — An architectural abstraction that sits above raw data sources and provides consistent, contextualised intelligence to any agent or Copilot experience consuming it.
- **Work IQ** — The intelligence layer that understands how work happens inside an organisation; synthesises signals from people, content, and workflows (emails, documents, meetings, chats); described as "how your employees work."
- **Fabric IQ** — The intelligence layer that understands the business itself; adds business meaning to the Microsoft Fabric data foundation through shared semantics, entities, relationships, and business logic; described as "how your business operates."
- **Foundry IQ** — The connective intelligence layer that brings Work IQ and Fabric IQ together; enables organisations to create knowledge bases spanning structured business data, unstructured documents, policies, and external sources for agentic reasoning; described as "how your agents unlock knowledge."
- **Agentic AI** — Autonomous or semi-autonomous AI agents that take actions on behalf of users or organisations.
- **Intelligence gap** — The structural divide between structured enterprise data (databases, systems of record) and unstructured everyday work data (documents, emails, chats) that prevents agents from reasoning holistically.
- **Structured data** — Databases, systems of record, well-defined fields that power critical business processes.
- **Unstructured data** — Documents, emails, chats, plans, designs, and institutional knowledge created daily by employees or agents.
- **RAG (Retrieval-Augmented Generation)** — A pattern where an agent retrieves relevant grounded facts before generating an answer, reducing hallucination.
- **Bespoke RAG** — Custom-built, per-agent RAG pipelines; described as fragile and slow to deliver — the problem that Foundry IQ solves.
- **Hallucination** — The tendency of a large language model to generate plausible-sounding but factually incorrect outputs when it lacks grounded context.
- **Permission-trimmed** — A design principle ensuring that the system only surfaces information the requesting user already has access to.
- **Label-aware** — Awareness of Microsoft Purview sensitivity labels applied to documents, so that agents and Copilot respect data classification.
- **On-behalf-of solution** — An architectural pattern (used by both Work IQ and Copilot) where the system acts with the permissions of the authenticated user, never elevating access.
- **Rich connected context** — One of the three essentials for high-performance agents; the ability for an agent to understand what data it is dealing with and the role it plays in the organisation.
- **Low-friction development and orchestration** — The second essential; reducing the engineering effort required to wire agents to data and run them in production.
- **Governance, observability, and trust** — The third essential; ensuring agent decisions are auditable, compliant, and trustworthy.

**Detailed notes**

**The scale of the agent opportunity**
Three analyst predictions anchor the business case:
- **IDC**: ~1.3 billion AI agents in use by 2028 (approximately 2 years from course recording).
- **Capgemini**: 82 % of organisations intend to integrate AI agents within the first 3 years.
- **Gartner**: ~40 % of enterprise applications will be integrated with task-specific AI agents in the current year.

For partners, the course identifies three engagement phases: **design**, **deployment**, and **governance** (governing industry agents at large scale).

**Why agents fail without IQ**
The course uses the metaphor of "a brilliant intern on their first day" to describe an agent without IQ:
- Searches all data indiscriminately — no context on what matters.
- Does not know who the user is or how they work.
- Cannot distinguish a KPI from a typo.
- Does not know company policies or rules.
- Guesses instead of reasons — high hallucination risk.
- No awareness of permissions or compliance.
- Requires bespoke RAG, fragile pipelines, and longer delivery.

**Why agents succeed with IQ**
The contrasting metaphor is "a 10-year veteran who knows the business":
- Understands business context and priorities.
- Knows the user's role, team, and work patterns.
- Reasons over semantic data models.
- Retrieves policies and cites sources accurately.
- Grounds answers in facts — reduced hallucination.
- Respects permissions, labels, and compliance.
- Produces reusable, governed, attachable intellectual property.

**What every employee (and therefore every agent) needs to know**
Three categories of knowledge that employees accumulate organically over time:
1. Teams, roles, and workflows.
2. State and actions of the business.
3. Curated knowledge.

**The two oceans of data and the intelligence gap**
All enterprise knowledge lives in two worlds:
- **Structured side**: databases, systems of record, well-defined fields.
- **Unstructured side**: documents, emails, chats, plans, designs, daily institutional knowledge.

Large language models can access pieces; connectors can bridge specific gaps; but without a unifying intelligence layer, agents operate with "partial vision" — they can retrieve, summarise, and answer in isolation but cannot truly reason. The intelligence gap is the space between these two oceans.

**The three layers of Microsoft IQ**

| Layer | Core metaphor | What it enables |
|-------|--------------|-----------------|
| Work IQ | Memory of your people | How employees work — M365 signals, files, emails, meetings, chats |
| Fabric IQ | Nervous system of your data | How the business operates — semantics, entities, rules, actions |
| Foundry IQ | Encyclopedia of your organisation's knowledge | How agents unlock knowledge — connective layer bringing Work IQ and Fabric IQ together |

The course explicitly states: "Microsoft IQ is a shared intelligence layer that creates a unified understanding of our organisation's flow of work, the data, and the knowledge."

**Partner positioning**
Partners can brand, package, and industry-tune IQ-powered solutions. The platform is described as an opportunity to deliver reusable, governed, attachable IP rather than one-off bespoke implementations.

**Exam / assessment pointers**
- Know the three IDC/Capgemini/Gartner statistics precisely.
- Distinguish the "brilliant intern" (no IQ) from the "10-year veteran" (with IQ) and be able to list at least 3 differentiators for each.
- Know the three essentials for high-performance agents (rich connected context; low-friction development and orchestration; governance, observability, and trust).
- Know which layer handles which dimension: Work IQ = people/collaboration, Fabric IQ = business/data, Foundry IQ = knowledge/agents.
- Understand that Microsoft IQ is an on-behalf-of, permission-trimmed, label-aware system — it never elevates user access.

---

### 1.2 Microsoft IQ in Action — The Sunrise Farms Scenario

**What it covers**
This section delivers a concrete, role-based walkthrough of how Work IQ, Fabric IQ, and Foundry IQ work together in a retail supply-chain crisis. It demonstrates the value of unified intelligence through a semi-autonomous agent that collaborates with a human team in Microsoft Teams, grounded in live business data, policy context, and operational state.

**Key concepts**

- **Sunrise Farms** — Fictional retail and consumer goods company used as the scenario protagonist; experiencing a frozen berry contamination crisis.
- **Semi-autonomous agent** — An agent that takes proactive actions (e.g., logging scope, updating controls) but pauses for human approval before executing higher-risk actions.
- **Human-in-the-loop** — The design pattern where the agent recommends actions and presents options but requires explicit human approval before acting.
- **Work IQ context (roles and handoffs)** — The agent uses Work IQ to automatically tag the right person (Jordan Lee, category owner) because it understands roles, handoffs, and decision responsibility.
- **Fabric IQ (live business state)** — The agent is grounded in live operational data including product SKUs, production lots, inventory locations, shipment status, and Power BI models.
- **Foundry IQ (policy context)** — The agent consults policy documents to confirm whether specific actions (e.g., resuming certain shipments) are permitted under corporate policy.
- **Option A / Option B** — The two courses of action the agent presents after team discussion; each option is grounded in specific citations ranging from policy (Foundry IQ) to Power BI models and business entities (Fabric IQ).
- **Monitoring rule** — A proactive guardrail the agent proposes: if the supplier expands the quality-issue scope, automatically place an inbound hold on newly affected lots.
- **Grounded citations** — References to specific policy documents, Power BI models, or business entities that back up each recommendation, making trade-offs explicit and transparent.

**Detailed notes**

**Scenario setup**
A breaking news alert reports contamination in a frozen berry production lot. Speed matters, but accuracy matters more. Four roles are involved:
- **Jordan Lee** (Buyer) — needs a consolidated situational view, coordinates the cross-functional response.
- **Riley Brooks** (Financial Planning) — estimates financial exposure, evaluates mitigation actions.
- **Alex Moreno** (Store Manager) — needs execution-ready direction for store staff.
- **Sam Nguyen** (Allocation Analyst) — manages supply/inventory rebalancing and shipment status.

Each role sees only part of the picture. The coordination challenge is that the buyer is deciding, finance is managing risk, the store needs action steps, and allocation is moving inventory — all simultaneously.

**How the agent enters the workflow**
While Jordan was occupied, the agent proactively posted a notification in Jordan's Teams chat, pulling her into a dedicated thread for frozen category operations. The agent tagged Jordan automatically because **Work IQ** understands her role as category owner and knows the relevant decision responsibility and handoffs.

**What the agent had already done by the time Jordan joined**
- Reviewed the latest supplier verification (confirmed only one lot in the mid-west was affected).
- Logged the verified supplier scope.
- Updated inbound controls so that unaffected inventory could be released — with human approval pending.

**Live business-state grounding (Fabric IQ)**
Maps and graphs in the agent's thread reflect the live business state, including:
- Which inventory is paused, where, and why.
- Which shipments are in flight.
- The cascading effects of the current pause (blocking unaffected frozen berry lots into non-impacted regions).

**Policy grounding (Foundry IQ)**
The agent consults Foundry IQ policy context to confirm that resuming certain shipments would be permitted under policy — and cites the source explicitly.

**The two options presented**
- **Option A** — Keep the broad pause in place longer than strictly necessary (overly cautious).
- **Option B** — Narrow containment to the affected lot and region; immediately release unaffected shipments (recommended by the agent as within policy and operationally efficient).
Each option includes specific citations, projected impact visualisation, and explicit trade-off articulation.

**Human approval flow**
Actions require Jordan's approval directly in Teams before the agent executes. Once approved, the agent:
1. Restates its plan.
2. Confirms execution back to the team.
3. Proposes a monitoring rule (auto-hold on newly affected lots if supplier scope expands).
4. Drafts a decision recap for Jordan's review.

**Key architectural insight demonstrated**
The scenario shows three IQ layers operating simultaneously:
- **Work IQ** — knows Jordan's role, routes the notification to the right person.
- **Fabric IQ** — provides live SKU, lot, inventory, and shipment data; Power BI models.
- **Foundry IQ** — provides policy documents cited in each option.

This is described as "collaboration between machine intelligence and human judgment, with each improving the other."

**Exam / assessment pointers**
- Be able to describe which IQ layer contributed what to the Sunrise Farms scenario.
- Understand why the agent tagged Jordan (Work IQ role context), not just any available person.
- Know that the agent paused for human approval before executing — this illustrates the human-in-the-loop governance pattern.
- Understand the difference between Option A (broad pause) and Option B (targeted release) and why the agent recommended Option B (within policy, avoids unnecessary operational drag).

---

### 1.3 Work IQ — AI-Powered Intelligence Layer for Microsoft 365

**What it covers**
This section explains the architecture and capabilities of Work IQ: how it connects to Microsoft 365 signals, builds persistent memory of how users work, and delivers insight-driven action recommendations to Copilot and agents. It covers extensibility into external systems and LOB data, and shows example prompts.

**Key concepts**

- **Work IQ** — The AI-powered intelligence layer for Microsoft 365 that helps AI understand how employees work through three capabilities: decision-ready data, persistent memory, and insights-driven action.
- **Decision-ready data** — Work IQ securely connects to work signals across Microsoft 365 (files, emails, meetings, messages, SharePoint content, LOB data), all permission-trimmed and label-aware.
- **Persistent memory** — Over time, Work IQ learns user preferences, collaborators, and work patterns so experiences become increasingly personalised.
- **Insights-driven action** — Work IQ blends signals and memory to uncover insights, recommend next steps, and determine which agent is best suited for a given task.
- **Microsoft 365 signals** — Emails, documents, meetings, Teams messages, SharePoint content, and calendar data produced through everyday M365 usage.
- **LOB data (line-of-business data)** — Data from external business systems such as Dynamics 365, Power BI, Salesforce, ServiceNow, connected to Work IQ via external connectors.
- **Skills and tools** — Specialised instructions that customise Copilot and agents to deliver tailored experiences optimised for specific tasks; the third data dimension in Work IQ alongside data and context.
- **Copilot Studio** — Microsoft's low-code platform for building custom agents; one of the extensibility surfaces for Work IQ.
- **Microsoft Foundry** — Developer platform for building AI agents; another extensibility surface for Work IQ.
- **GitHub** — Code platform; a third extensibility surface where custom generative AI solutions can leverage Work IQ.
- **External connectors** — Integrations with third-party systems (e.g., Salesforce, ServiceNow) that feed signals into Work IQ.

**Detailed notes**

**Architecture overview**
Work IQ layers on top of underlying AI models (OpenAI's ChatGPT, Anthropic Claude, or other models) that handle generic generative AI. Work IQ adds the contextual layer:

| Component | What it includes |
|-----------|-----------------|
| Data | Microsoft 365 signals, Dynamics 365, Power BI, other LOB data |
| Context | Memory, activity, business understanding |
| Skills and tools | Specialised instructions for task-specific customisation |

The resulting intelligence is surfaced through:
- Microsoft 365 Copilot applications
- Dynamics 365
- Agents (custom and pre-built)
- Copilot Studio, Microsoft Foundry, GitHub (for custom-built extensibility)

**Permission model**
Work IQ operates as an on-behalf-of solution. Users only see data they already have access to — exactly as Copilot works. This is stated explicitly in the course: "permission-trimmed and label-aware, so the system only uses information that you already have access to as a user."

**Three capability pillars in detail**

1. **Decision-ready data**: Connects securely to all M365 signals — files, emails, meetings, messages, SharePoint content, and LOB data. Everything is permission-trimmed and label-aware. No user sees data outside their permissions.

2. **Persistent memory**: Work IQ learns over time — who the user typically partners with, which documents they rely on, and how they like to communicate. This makes every subsequent interaction more personalised and relevant.

3. **Insights-driven action**: Combines signals and memory to:
   - Uncover insights.
   - Recommend next steps.
   - Determine which agent is best suited for a given task.
   This enables Copilot and agents to "move beyond generic responses and deliver help that's context-aware."

**Connectivity model**
- **Productivity tools feeding Work IQ**: Microsoft 365 (Word, Excel, PowerPoint, Teams, Outlook, OneDrive, SharePoint).
- **External connectors**: Salesforce, ServiceNow, and other third-party sources.
- **Intelligent experiences consuming Work IQ**: Microsoft 365 Copilot, Copilot Studio, GitHub.

**Example prompts demonstrated**
The instructor highlights example prompts designed to showcase Work IQ's contextual abilities:
- In **Copilot Chat**: "Recall what was discussed in a meeting I had with [person] over the past [N] days about [topic]." — demonstrates Work IQ's understanding of meeting content and participant relationships.
- In **Copilot Chat**: Consolidating assigned tasks across projects.
- Additional example prompts shown in Word, Outlook, and the Researcher agent (detailed in slides distributed to participants).

**Exam / assessment pointers**
- Know the three Work IQ pillars: decision-ready data, persistent memory, insights-driven action.
- Know that Work IQ is an on-behalf-of, permission-trimmed solution — it does not elevate user access.
- Know the three types of inputs to Work IQ: data (M365 + LOB), context (memory/activity/business understanding), skills and tools.
- Know the extensibility surfaces: Copilot Studio, Microsoft Foundry, GitHub.
- Work IQ powers Microsoft 365 Copilot to be "fast, accurate, and trusted" — this phrase is used explicitly in the course.

---

### 1.4 Fabric IQ — Unify Data Available Across OneLake

**What it covers**
This section explains Fabric IQ as the business-intelligence and operational-intelligence layer built on Microsoft Fabric and OneLake. It introduces the concept of an ontology as the core semantic foundation, walks through the Fabric IQ architecture (ontology → graph → data agents → operations agents → Power BI semantic models), and delivers a detailed demo of building an airline airport operations ontology step by step.

**Key concepts**

- **Fabric IQ** — The intelligence layer that understands how the business operates; sits on top of the Microsoft Fabric unified data foundation; adds business meaning through shared semantics so agents understand metrics, entities, relationships, and business logic rather than raw data.
- **Microsoft Fabric** — A unified data platform that consolidates data across clouds, systems, and formats into a single trusted data foundation for the enterprise.
- **OneLake** — The unified data lake within Microsoft Fabric; the storage substrate that Fabric IQ builds upon; supports structured, unstructured, real-time, and graph data.
- **Ontology** — A semantic model of the business expressed as entities (customers, shipments, assets, routes, runways, etc.), their relationships, rules, and actions — the core foundational item in Fabric IQ. Unlike a schema, it models the business as it actually operates.
- **Entity** — A named business concept in an ontology (e.g., Customer, Shipment, Flight, Runway, Gate, Booking).
- **Business entity** — A real-world business object or concept that the ontology represents; entities are linked through business relationships, not merely data keys.
- **Graph** — A Fabric IQ item that sits on top of the ontology, enabling exploration and reasoning over entity relationships in real time, including cascading-effect analysis.
- **Data agents** — Fabric IQ items that use the semantic foundation (ontology) to answer questions and power AI experiences with consistent, trusted context — without each team redefining logic.
- **Operations agents** — Fabric IQ items that continuously monitor live business data metrics, flag issues, and recommend or automate actions.
- **Power BI semantic models** — Existing BI models that can be plugged directly into the Fabric IQ foundation, ensuring analytics, AI, and operational decisions stay aligned to the same definitions.
- **Eventhouse** — A Fabric real-time analytics store; used in the demo to add real-time runway condition data (friction, contamination, visual range) to the ontology.
- **Fabric Maps** — A geospatial visualisation capability within Fabric; used in the demo to show fleet-level airspace activity and idle-aircraft heat maps.
- **Digital twin builder** — One of the Fabric IQ workload items (listed in the architecture diagram alongside ontology, graph, data agents, operations agents, and Power BI semantic models).
- **Unified business understanding** — Fabric IQ capability: consistent meaning across data, models, rules, and actions.
- **Always-on insight to action** — Fabric IQ capability: continuous understanding and acting on live, context-rich data.
- **Agents with business context** — Fabric IQ capability: powering AI agents in Foundry and Fabric with business semantics.
- **Industry accelerator opportunities** — Fabric IQ can be verticalised for supply chain, retail, manufacturing, and financial services.

**Detailed notes**

**Fabric IQ's position in the Microsoft Fabric stack**
Microsoft Fabric is the platform with Copilot, OneLake, and governance at its core. On top of that sit:
- Data Factory
- Analytics
- Databases
- Power BI
- Real-time intelligence

Fabric IQ lives within this stack and is made up of a small set of purpose-built workload items:
1. **Ontology** — defines core business entities.
2. **Graph** — explores and reasons over entity relationships.
3. **Data agents** — answer questions using the semantic foundation.
4. **Operations agents** — continuously monitor live metrics, flag issues, automate actions.
5. **Power BI semantic models** — plug into the same foundation for aligned analytics.
6. **Digital twin builder** — listed in the architecture (additional workload item).

**From semantic model to ontology: the key upgrade path**
Existing Power BI semantic models can be upgraded to a full ontology in "one click." The upgrade moves a BI model from the analytics world into the operational world, adding:
- Real-time data (Eventhouse time-series).
- Geospatial insights (Fabric Maps).
- Graph relationships.
- Rules and triggered actions.

**Ontology vs. schema: the critical distinction**
Instead of forcing organisations to work with tables and schemas, Fabric IQ lets them model their business as it actually operates using concepts the organisation understands. A route can include multiple airports; an airport connects to multiple runways. Business relationships, not just data keys, link entities.

**Rules and actions in the ontology**
Ontology definitions can include:
- **Rules**: logic that triggers actions when specific conditions are met (e.g., alert passengers and dispatch sweepers when runway contamination is high).
- **Actions**: steps triggered by rule conditions (e.g., hold inventory when a threshold is breached, reassign routes when wind speed exceeds limits).

**Demo walkthrough — Airline airport operations ontology**

*Persona*: Lead Fabric Developer supporting an operations team making smarter decisions across multiple airports.

*Step 1 — Start from a Power BI semantic model*
Open the existing airline semantic model in Power BI, which already contains relevant business data.

*Step 2 — Generate ontology with one click*
Use the "Generate Ontology" action. Fabric IQ automatically:
- Creates entities: Flights, Airlines, Bookings, Routes, and related items.
- Uses existing tables and columns as the basis for entities.
- Links entities through business relationships (e.g., Route → Airport → Runway), not just data keys.

*Step 3 — Expand to operational data*
Add Eventhouse data for runway conditions:
- Friction, contamination, visual range of runway surface — real-time preview available immediately.
- Similarly add: turnaround events, weather data, maintenance events.
- Link reports to provide a canonical monitoring view.

*Step 4 — Result: a rich operational ontology*
The finished ontology provides live context about:
- Flight status, airlines, bookings, runway conditions, gates.
- Safety and compliance reports.
- Geospatial visualisation (Fabric Maps): fleet-level airspace view, idle-aircraft heat map.

*Step 5 — Use the ontology*
- Flight entity-centric preview shows BI data + real-time weather + geospatial insights simultaneously.
- Fabric Maps identifies delays: JFK (New York) is flagged as impacted by idle aircraft.
- Navigate to Runway entity → see real-time friction, visibility, wet snow contamination.

*Step 6 — Add rules and actions*
- Add rule: trigger alert when runway contamination is high → proactive passenger delay notification + dispatch sweepers.
- Monitor wind speed → auto-reassign routes.

*Step 7 — Explore graph analytics*
- Filter to JFK in the out-of-the-box graph view.
- Identify runway R25 as the source of poor conditions.
- See cascading effects: affected terminals, ground service tasks, status of each task.
- Take immediate action on specific tasks from the graph view.

**Summary of what Fabric Ontology achieves (from the demo)**
"This airline can achieve a unified and comprehensive view of operations spanning flights, crew assignments, customer management, harnessing the full richness of operational data, tabular BI data, real-time, geospatial, relationships, rules, and actions, effectively creating a robust ontology graph powering the whole operations."

**Exam / assessment pointers**
- Know the six Fabric IQ workload items: ontology, graph, data agents, operations agents, Power BI semantic models, digital twin builder.
- Know that an existing Power BI semantic model can be converted to a full ontology in one click.
- Know the distinction between ontology (business-meaning model with rules/actions) and a schema (tables/data keys).
- Know what Eventhouse provides (real-time data), what Fabric Maps provides (geospatial/fleet view), and how they plug into the ontology.
- Be able to explain the step-by-step airline demo at a high level for a customer pitch.
- Know the four Fabric IQ capabilities: unified business understanding, always-on insight to action, agents with business context, industry accelerator opportunities.
- Industry verticals mentioned: supply chain, retail, manufacturing, financial services.

---

### 1.5 Foundry IQ — Build Agents Powered with Knowledge from Everywhere

**What it covers**
This section explains Foundry IQ as the context-engineering platform that unites Work IQ and Fabric IQ into reusable, governed knowledge bases consumable by agents. It covers the agentic RAG engine architecture, the four properties of enterprise-grade knowledge bases, the developer walkthrough for creating a knowledge base in Microsoft Foundry, and the security/governance model.

**Key concepts**

- **Foundry IQ** — The connective intelligence layer; "the context engineering platform for Microsoft IQ." Built on Azure AI Foundry and Azure AI Search. Glues together Work IQ and Fabric IQ to make their intelligence available via standardised interfaces for agentic reasoning.
- **Knowledge base** — A topic-centric object in Foundry IQ that federates data from multiple sources and exposes it to agents via a single API. Described as "a top-like object that encompasses the Agentic Retrieval Engine and knowledge sources selected for a particular topic."
- **Agentic RAG engine** — Foundry IQ's retrieval engine that plans, handles source routing, searches, responds, and iterates to ensure agents get the best answer without wasting tokens. Described as being "built on leading RAG techniques across the stack."
- **36 % better response performance** — The out-of-the-box improvement in response quality delivered by Foundry IQ's agentic RAG engine compared to bespoke per-agent RAG pipelines.
- **Automated data connectivity** — Foundry IQ capability: seamlessly connect to knowledge sources from Work IQ, Fabric IQ, and other sources; build a connection once and reuse across multiple agents.
- **Context without blind spots** — Foundry IQ capability: the agentic RAG engine selects sources, searches, responds, and iterates automatically.
- **Respect user access permissions** — Foundry IQ capability: agents only access content aligned with user permissions; unified governance enforced automatically.
- **Topic-centric** — Knowledge bases are organised around business topics (e.g., "employee policies," "product documentation"), not file types or folder structures.
- **Federated** — A single knowledge base can span sources across the entire Microsoft Cloud: SharePoint, OneLake, Azure AI Search, web, MCP servers, and third-party sources.
- **Reusable** — One knowledge base can serve many agents and apps; built once, used everywhere; multiple agents share the same knowledge base instead of each building its own.
- **Governed** — Knowledge bases are built on Microsoft Entra ID for user permissions, and Purview sensitivity labels are respected in retrieval; agents never return documents users should not see.
- **MCP (Model Context Protocol)** — A standardised protocol for connecting to third-party knowledge sources or creating custom MCP servers from a Foundry knowledge base.
- **MCP server** — A server endpoint that exposes knowledge-base content via the MCP protocol; can be created directly from a Foundry knowledge base.
- **Query planning and decomposition** — Part of the agentic RAG engine stack; breaks complex queries into sub-queries across sources.
- **Source selection** — Part of the agentic RAG engine stack; determines which knowledge sources to route each query to.
- **Search models and search modes** — Part of the agentic RAG engine stack; includes multiple retrieval strategies.
- **Two levels of ranking and answer synthesis** — Part of the agentic RAG engine stack; re-ranks retrieved chunks and synthesises a final grounded answer.
- **Retrieval reasoning effort** — A configurable parameter when creating a knowledge base in Foundry (options: low, medium, etc.); controls depth of agentic retrieval.
- **Output mode** — A configurable parameter on a Foundry knowledge base; controls the format of agent responses.
- **Retrieval instructions** — Optional instructions attached to a knowledge base to guide retrieval behaviour.
- **Enriched metadata** — Data transformations applied by Foundry IQ to knowledge sources during indexing to improve retrieval quality.
- **Multimodal embeddings** — Vector representations that capture meaning across text, images, and other modalities; created during knowledge-source ingestion in Foundry IQ.
- **Enterprise context** — The combination of Work IQ, Fabric IQ, agent memory, enriched metadata, and embeddings that Foundry IQ provides to agents.

**Detailed notes**

**The problem Foundry IQ solves**
"Every agent team rebuilds data connections, chunking logic, embeddings, routing, and permissions from scratch. It's like every new employee has to rebuild the company's filing system before they can do their job." Foundry IQ introduces reusable knowledge bases to eliminate this duplication.

**Knowledge base federation model**
A knowledge base sits at the centre and federates data from:
- SharePoint documents
- Microsoft 365 signals
- OneLake (Fabric)
- Azure AI Search indexes
- The web
- Third-party search sources via MCP protocol
- Blob storage and data lakes

**The four enterprise-grade knowledge base properties**

| Property | Description |
|----------|-------------|
| Topic-centric | Organised around business topics (e.g., "employee policies"), not file structures |
| Federated | Spans sources across the entire Microsoft Cloud in a single knowledge base |
| Reusable | Build once; five agents can share the same knowledge base |
| Governed | Entra ID permissions + Purview sensitivity labels respected in every retrieval |

**Agentic RAG engine architecture**
The engine operates using several large language models (LLMs) and small language models (SLMs) across the stack, providing:
1. Query planning and decomposition.
2. Source selection.
3. Search models and search modes.
4. Two levels of ranking.
5. Answer synthesis.

The engine selects sources, searches, responds, and iterates automatically — this is what delivers the **36 % better response performance** versus bespoke RAG.

**User and document-level access control**
Foundry IQ handles permissions at both the user level and the document level. "All the work that you have done in setting up security everywhere in your Microsoft environment and outside of it, Foundry IQ will respect it." A user will never receive data they should not have access to.

**Why Foundry IQ reduces hallucinations**
"Agents will retrieve facts from governed sources instead of guessing." Because retrieval is permission-enforced and citation-backed, the agent cannot fabricate information it cannot legitimately access.

**Demo walkthrough — Creating a knowledge base in Foundry**

*Step 1 — Create knowledge base*
In Microsoft Foundry, click "Create knowledge base." Provide:
- A name (e.g., "repairs").
- The model to use.
- Retrieval reasoning effort (e.g., medium or low).
- Output mode.
- Optional retrieval instructions.

*Step 2 — Add knowledge sources*
Connect data sources:
- SharePoint
- OneLake
- MCP servers
- Blob storage and other locations

Multiple sources can be added to a single knowledge base simultaneously.

*Step 3 — Optionally create an MCP server*
From within the knowledge base, create a new MCP server endpoint. Set the server URL. The knowledge base is now consumable via MCP protocol by any compatible agent.

*Step 4 — Build an agent on the knowledge base*
Example: a technician support agent pointing at a knowledge base aggregating documentation from multiple sources.

Test the agent with a complex, stream-of-consciousness question:
> "Equipment not working. CTL11 light is red. Maybe a power supply problem. Label on the equipment says P4324. The cord has another label, UL817. Okay to replace the part?"

The agent passes the query to the knowledge base → the knowledge base determines which sources to consult → returns a comprehensive grounded answer.

**The three-layer metaphor revisited**
- Work IQ = memory of your people.
- Fabric IQ = nervous system of your data.
- Foundry IQ = encyclopedia of your organisation's knowledge.

**Partner value: turning knowledge into scalable industry assets**
Foundry IQ enables partners to build reusable, topic-centric knowledge bases that can be packaged as industry IP and attached to multiple customer agents, dramatically reducing per-engagement development cost.

**Exam / assessment pointers**
- Know the three Foundry IQ capabilities: automated data connectivity, context without blind spots, respect user access permissions.
- Know the four knowledge-base properties: topic-centric, federated, reusable, governed.
- Know the **36 % better response performance** statistic and what it is compared against (bespoke per-agent RAG).
- Know the governance stack: Entra ID (user permissions) + Purview sensitivity labels (document classification).
- Know the knowledge sources Foundry IQ can connect to: SharePoint, OneLake, Azure AI Search, web, MCP servers, blob storage, M365 signals.
- Be able to describe at a high level the steps to create a knowledge base in Foundry.
- Know that Foundry IQ is built on **Azure AI Foundry** and **Azure AI Search**.

---

### 1.6 Agent 365 — Microsoft's IT Admin Control Plane for AI Agents

**What it covers**
This section introduces Agent 365, the IT-admin control plane for observing, governing, and securing all AI agents in an organisation — including Microsoft-built, partner-built, and third-party agents. It also covers the Microsoft IQ business benefits, the Microsoft Agent Factory programme, and recommended next steps for partners.

**Key concepts**

- **Agent 365** — Microsoft's IT admin control plane for AI agents; available from **1 May** of the current year. Provides observe, govern, and secure capabilities across the full agent ecosystem.
- **Observe** — Agent 365 capability: monitor and manage agents in real time; view a registry of all agents (own, Microsoft, third-party); deploy or block agents for users; access map view and registry view.
- **Govern** — Agent 365 capability: establish guardrails for agents and people; onboard agents with IT oversight; govern agent access to resources and data; make agents audit-ready; monitor what an agent does; inspect agent permissions (application-level and delegated control).
- **Secure** — Agent 365 capability: secure agent identities; control access to resources; prevent data oversharing and leaks; defend against threats and vulnerabilities using enterprise-grade security (Microsoft Purview integration); view sensitive-activity trend data (e.g., last 30 days).
- **Oversharing risk** — A specific risk surface highlighted in Agent 365's security view; visible in procurement-agent example with trend data over 30 days.
- **Microsoft 365 Admin Center** — Underlying infrastructure component leveraged by Agent 365.
- **Microsoft Entra** — Identity and access management; underlying infrastructure component leveraged by Agent 365.
- **Defender products** — Threat protection; underlying infrastructure component leveraged by Agent 365.
- **Microsoft Purview** — Data governance and compliance; underlying infrastructure component leveraged by Agent 365 for data-security view.
- **Third-party agent support** — Agent 365 can monitor and manage agents from third-party vendors: Workday, SAP, Adobe, as well as agents built on Anthropic and OpenAI models.
- **Microsoft Agent Factory** — A Microsoft programme that bundles AI and IQ layers to help organisations build agents with confidence using a single pre-paid plan.
- **Single pre-paid plan** — The Agent Factory billing model: covers Copilot Studio, Microsoft Foundry, GitHub Copilot, and Microsoft Fabric under one plan.
- **Forward Deployed Engineering (FDE)** — Microsoft's hands-on deployment support available to eligible organisations through the Agent Factory programme.
- **Role-based training** — Tailored, expert-led upskilling for every role in the organisation; available through Agent Factory.
- **Microsoft IQ platform (full view)** — Microsoft 365 Copilot as the user experience layer; agents built in Copilot Studio, GitHub Copilot, Microsoft Foundry, and Fabric; all built on Microsoft Azure; with Agent 365 as the side-running monitoring, management, and security layer.

**Detailed notes**

**Why Agent 365 is needed**
The explosive growth of agents creates new organisational challenges across four dimensions:
1. **Visibility**: Can IT track and monitor all agents? Do we know what agents are doing?
2. **Guardrails**: Do we have proper guardrails for agents and the people who interact with them?
3. **Security**: Are agents protected? Do they have the right access? Can they leak sensitive data?
4. (Implicit) **Lifecycle governance**: governing agents from creation through decommission.

**The three pillars**

*Observe*
- Real-time monitoring and management.
- Registry view showing all agents: own organisation, Microsoft-built, third-party.
- Map view for visual topology.
- Ability to deploy or block agents from users.

*Govern*
- Establish guardrails for agents AND for people who interact with them.
- Onboard agents with IT oversight.
- Govern agent access to resources and data.
- Make agents audit-ready and monitor activity.
- Inspect agent permissions: application-level and delegated-control rights.

*Secure*
- Secure agent identities.
- Control access to resources.
- Prevent data oversharing and leaks.
- Defend against threats and vulnerabilities with enterprise-grade security.
- Example in demo: procurement agent showing sensitive-activity trend over 30 days; risk of oversharing flagged; Microsoft Purview recommended as the mitigation tool.

**Underlying infrastructure**
Agent 365 combines existing Microsoft security and management infrastructure:
- Microsoft 365 Admin Center
- Microsoft Entra
- Defender products
- Microsoft Purview

These are combined into a single agent-management view — no new infrastructure required, just a new control plane.

**Third-party agent ecosystem support**
Agent 365 supports agents beyond the Microsoft ecosystem:
- Agents built on **Anthropic** or **OpenAI** models.
- Agents created by third-party solution vendors: **Workday, SAP, Adobe**, and others.
This makes Agent 365 a universal control plane regardless of where agents are built.

**Microsoft IQ business benefits (from the Agent 365 section)**

| Benefit | Description |
|---------|-------------|
| Accelerate time-to-market | Launch agents in weeks, not months, eliminating need for custom integration from scratch |
| Reduce development and operational costs | Minimise complexity, speed deployment, lower ongoing maintenance |
| Increase agent performance | Provide agents with deep awareness of personal and organisational context, enterprise semantics, and knowledge for richer reasoning and automation |

**The complete Microsoft IQ platform architecture**
- **User experience layer**: Microsoft 365 Copilot.
- **Agent development layer**: Copilot Studio, GitHub Copilot, Microsoft Foundry, Fabric.
- **Infrastructure**: Microsoft Azure.
- **Control plane**: Agent 365 — monitors, manages, and secures everything.
- **Intelligence layers**: Work IQ + Fabric IQ + Foundry IQ providing context to all agents and Copilot experiences.

**Microsoft Agent Factory**
A programme that bridges the gap from ideas to outcomes, faster. Three components:
1. **Scale AI with one plan** — Single pre-paid plan covering Copilot Studio, Foundry, GitHub Copilot, and Fabric; eliminates the need to choose between development platforms or manage multiple contracts; agents can be deployed anywhere using Microsoft Copilot with no upfront licensing/provisioning; pay only for usage.
2. **Access deep expertise** — Rapidly co-build agentic solutions with Microsoft Forward Deployed Engineers (FDEs).
3. **Upskill for the agentic era** — Customised, expert-led training for every role in the organisation to grow AI adoption and confidence.

**Recommended partner next steps**
The instructor provides a concrete partner playbook:
1. Identify the **top 2–3 customer scenarios**.
2. **Map** those scenarios to Work IQ, Fabric IQ, or Foundry IQ.
3. **Validate governance** of those agents with Agent 365.
4. Deliver a **30–60-day IQ-powered proof of concept**.

**Exam / assessment pointers**
- Know that Agent 365 is available from **1 May** of the current year.
- Know the three Agent 365 pillars: Observe, Govern, Secure — and the specific capabilities under each.
- Know the four underlying infrastructure components leveraged: M365 Admin Center, Entra, Defender, Purview.
- Know the third-party vendors mentioned: Workday, SAP, Adobe; model providers: Anthropic, OpenAI.
- Know the three Microsoft IQ business benefits: accelerate time-to-market, reduce development and operational costs, increase agent performance.
- Know the Agent Factory three components: single pre-paid plan, deep expertise (FDEs), upskilling.
- Know the partner playbook: identify top 2–3 scenarios → map to IQ layer → validate with Agent 365 → deliver 30–60-day PoC.
- Know the complete Microsoft IQ platform architecture layers.

---

## Key terminology

| Term | Definition | Where it appears |
|------|-----------|-----------------|
| Agentic AI | Autonomous or semi-autonomous AI agents that take actions on behalf of users or organisations | Platform overview |
| Agentic RAG engine | Foundry IQ's retrieval engine that plans, routes, searches, responds, and iterates to produce grounded answers; 36 % better performance than bespoke RAG | Foundry IQ |
| Agent 365 | Microsoft's IT admin control plane for observing, governing, and securing all AI agents; available from 1 May | Agent 365 |
| Always-on insight to action | Fabric IQ capability: continuous understanding and action on live, context-rich data | Fabric IQ |
| Automated data connectivity | Foundry IQ capability: seamless connection to Work IQ, Fabric IQ, and other knowledge sources, reusable across agents | Foundry IQ |
| Bespoke RAG | Custom-built, per-agent retrieval-augmented generation pipeline; fragile, costly, and not reusable | Platform overview, Foundry IQ |
| Context without blind spots | Foundry IQ capability: agentic RAG engine automatically selects sources, searches, and iterates for completeness | Foundry IQ |
| Data agents | Fabric IQ items that use the ontology to answer questions and power AI experiences with consistent, trusted context | Fabric IQ |
| Decision-ready data | Work IQ capability: secure connection to M365 signals and LOB data, permission-trimmed and label-aware | Work IQ |
| Digital twin builder | A Fabric IQ workload item (alongside ontology, graph, data agents, operations agents, Power BI semantic models) | Fabric IQ |
| Entity | A named business concept in the Fabric IQ ontology (e.g., Customer, Shipment, Flight, Runway) | Fabric IQ |
| Eventhouse | A Fabric real-time analytics store used to add time-series operational data (e.g., runway friction) to the ontology | Fabric IQ |
| External connectors | Integrations connecting third-party systems (Salesforce, ServiceNow) to Work IQ | Work IQ |
| Fabric IQ | Intelligence layer understanding how the business operates; built on Microsoft Fabric and OneLake; adds semantics, entities, rules, and actions | Fabric IQ |
| Fabric Maps | Geospatial visualisation capability in Fabric; shows fleet-level airspace and ground-operations views | Fabric IQ |
| Federated knowledge base | A Foundry IQ knowledge base that spans multiple source systems (SharePoint, OneLake, Azure AI Search, web, MCP) in a single topic-centric object | Foundry IQ |
| Forward Deployed Engineering (FDE) | Microsoft hands-on co-build support available through the Agent Factory programme | Agent 365 |
| Foundry IQ | The context engineering platform that glues Work IQ and Fabric IQ together; built on Azure AI Foundry and Azure AI Search; enables reusable knowledge bases and agentic retrieval | Foundry IQ |
| Governed knowledge base | A Foundry IQ knowledge base that enforces Entra ID user permissions and respects Purview sensitivity labels in every retrieval | Foundry IQ |
| Graph (Fabric IQ item) | Fabric IQ workload item that enables exploration and reasoning over ontology entity relationships in real time | Fabric IQ |
| Hallucination | LLM tendency to generate plausible-sounding but factually incorrect outputs in the absence of grounded context | Platform overview, Foundry IQ |
| Human-in-the-loop | Design pattern where agents recommend and act but pause for explicit human approval before higher-risk execution | IQ in action |
| Insights-driven action | Work IQ capability: blending signals and memory to uncover insights, recommend next steps, and determine the best agent for a task | Work IQ |
| Intelligence gap | The structural divide between structured and unstructured enterprise data that prevents agents from reasoning holistically | Platform overview |
| Label-aware | System design that respects Microsoft Purview sensitivity labels applied to documents during retrieval | Work IQ, Foundry IQ |
| LOB data (line-of-business data) | Data from external business systems (Dynamics 365, Power BI, Salesforce, ServiceNow) connected to Work IQ | Work IQ |
| MCP (Model Context Protocol) | Standardised protocol for connecting agents to third-party knowledge sources; also used to expose Foundry knowledge bases as MCP server endpoints | Foundry IQ |
| Microsoft Agent Factory | Microsoft programme: single pre-paid plan (Copilot Studio, Foundry, GitHub Copilot, Fabric) + FDE co-build support + role-based training | Agent 365 |
| Microsoft Fabric | Unified data platform consolidating data across clouds, systems, and formats into a single trusted foundation for the enterprise | Fabric IQ |
| Microsoft Foundry | Developer platform for building AI agents; also the hosting environment for Foundry IQ knowledge bases | Foundry IQ |
| Microsoft IQ | Shared intelligence layer comprising Work IQ, Fabric IQ, and Foundry IQ; transforms fragmented enterprise data into rich, live business context | Platform overview |
| Monitoring rule | A proactive guardrail that an agent can propose and a human can approve; triggers automated actions when conditions change | IQ in action |
| Multimodal embeddings | Vector representations capturing meaning across text, images, and other modalities; created during knowledge-source ingestion in Foundry IQ | Foundry IQ |
| On-behalf-of solution | Architectural pattern where Work IQ and Copilot act with the permissions of the authenticated user, never elevating access | Work IQ |
| OneLake | The unified data lake within Microsoft Fabric; stores structured, unstructured, real-time, and graph data | Fabric IQ |
| Ontology | Fabric IQ's semantic business model expressed as entities, relationships, rules, and actions; upgradeable from existing Power BI semantic models in one click | Fabric IQ |
| Operations agents | Fabric IQ items that continuously monitor live business data, flag issues, and recommend or automate actions | Fabric IQ |
| Oversharing risk | A specific security risk where agents expose sensitive data beyond what users should see; visible in Agent 365's security view | Agent 365 |
| Permission-trimmed | System design that restricts data surfaced by Work IQ/Foundry IQ to information the requesting user already has access to | Work IQ, Foundry IQ |
| Persistent memory | Work IQ capability: learning user preferences, collaborators, and work patterns over time for increasingly personalised experiences | Work IQ |
| Power BI semantic models | Existing BI models that plug into the Fabric IQ foundation; ensures analytics and AI decisions align to the same definitions | Fabric IQ |
| Reusable knowledge base | A Foundry IQ knowledge base that any number of agents and applications can share via a single API; eliminates per-agent data-connection rebuilding | Foundry IQ |
| Retrieval reasoning effort | Configurable parameter when creating a Foundry knowledge base; controls depth of agentic retrieval (low, medium, etc.) | Foundry IQ |
| Rich connected context | First essential for high-performance agents: access to data and signals, understanding of the agent's role in the organisation | Platform overview |
| Semi-autonomous agent | An agent that takes proactive steps but pauses for human approval before executing higher-risk actions | IQ in action |
| Skills and tools | Work IQ component: specialised instructions that customise Copilot and agents for task-specific tailored experiences | Work IQ |
| Sunrise Farms | Fictional retail/consumer goods company used as the primary scenario walkthrough for Microsoft IQ | IQ in action |
| Topic-centric knowledge base | A Foundry IQ knowledge base organised around a business topic (e.g., employee policies) rather than file types or folder structures | Foundry IQ |
| Unified business understanding | Fabric IQ capability: consistent meaning across data, models, rules, and actions | Fabric IQ |
| Work IQ | Intelligence layer understanding how employees work; synthesises M365 signals; enables decision-ready data, persistent memory, and insights-driven action | Work IQ |

---

## Common pitfalls and gotchas

- **Agents without IQ produce generic outputs**: The instructor strongly emphasises that even the most advanced LLM agents will "only produce generic outputs that fall short of what your teams actually need" without unified organisational context. Do not conflate a capable LLM with a capable enterprise agent.

- **The intelligence gap is not a connector problem**: Connectors can bridge specific gaps, but without a unifying intelligence layer, agents will still "operate with partial vision." IQ is not just another connector — it is a semantic unification layer.

- **Work IQ is strictly on-behalf-of**: Users never see data they are not already entitled to. This is not optional — it is architectural. Do not present Work IQ as a way to surface previously inaccessible data.

- **Fabric IQ is not a single feature**: The instructor explicitly states, "Fabric IQ is not a single feature. It's a workload made up of a small set of purpose-built items that work together." Treating it as a toggle or a single product is a mischaracterisation.

- **Ontology ≠ schema**: An ontology models the business as it actually operates (customers, routes, shipments, relationships, rules, actions); a schema models data as tables and keys. Fabric IQ moves organisations from schema-thinking to ontology-thinking.

- **Foundry IQ vs. bespoke RAG**: Bespoke per-agent RAG pipelines are explicitly characterised as "fragile" and requiring every agent team to rebuild data connections, chunking logic, embeddings, routing, and permissions from scratch. Foundry IQ eliminates this by making knowledge bases reusable.

- **36 % performance gain requires no custom work**: The 36 % better response performance is an out-of-the-box characteristic of Foundry IQ's agentic RAG engine — not something achieved through tuning.

- **Agent 365 respects all permissions across all agents including third-party**: Agent 365 is not only for Microsoft-built agents. It manages and secures agents from Anthropic, OpenAI, Workday, SAP, and Adobe. Partners should not assume governance coverage only applies to Copilot Studio or Foundry agents.

- **Agent 365 availability**: The course states Agent 365 started "from May 1st this year." It is already available — not a preview or future capability.

- **Human approval is required for consequential actions**: The Sunrise Farms demo emphasises that the agent paused for Jordan's approval before executing Option A or Option B. Agents do not act unilaterally on high-risk actions; human approval is a design principle, not a limitation.

- **Power BI semantic models are upgradeable in one click**: Partners may underestimate this. Existing BI investments can be elevated to full operational ontologies without rebuilding from scratch.

- **Foundry IQ's Purview integration means agent answers are label-bound**: "If a solution shouldn't see a document, the agent will not return it either." Purview sensitivity labels flow through retrieval — this is the mechanism that prevents leakage of classified information.

---

## Self-test questions

**Questions**

1. According to IDC, how many AI agents are predicted to be in use by 2028?

2. What percentage of organisations does Capgemini report intend to integrate AI agents within the first 3 years?

3. What is the Gartner statistic cited in the course about enterprise application integration with AI agents in the current year?

4. The course describes an agent without IQ as equivalent to what familiar workplace archetype, and what are at least four characteristics that define this archetype?

5. The course describes an agent with IQ as equivalent to what familiar workplace archetype, and what are at least four characteristics that define this archetype?

6. What are the three essentials for high-performance agents described in the course?

7. What are the three integrated intelligence layers that make up Microsoft IQ, and what is each layer's one-line description?

8. Microsoft IQ operates as an on-behalf-of solution. What does this mean for data access?

9. In the Sunrise Farms scenario, why did the agent automatically tag Jordan Lee in the Teams thread rather than a generic channel?

10. What two actions had the agent already taken by the time Jordan Lee joined the Teams thread?

11. In the Sunrise Farms demo, what distinguishes Option A from Option B, and which option did the agent recommend?

12. What are the three capability pillars of Work IQ, and what does each one do?

13. Name the six workload items that make up Fabric IQ.

14. What is an ontology in the context of Fabric IQ, and how does it differ from a database schema?

15. In the airline demo, what real-time data source was used to add runway conditions to the ontology, and what specific data fields were included?

16. What is Foundry IQ's out-of-the-box improvement in response performance compared to bespoke RAG pipelines, and what causes this improvement?

17. What are the four properties of an enterprise-grade Foundry IQ knowledge base?

18. What governance stack does Foundry IQ use to enforce document and user access control?

19. What external knowledge sources can a Foundry IQ knowledge base federate, and what protocol enables connection to third-party sources?

20. When was Agent 365 made available, and what are its three operational pillars?

21. What four existing Microsoft infrastructure products does Agent 365 combine into its control plane?

22. Name three third-party software vendors and two model providers whose agents can be managed by Agent 365.

23. What are the three components of the Microsoft Agent Factory programme?

24. What is the recommended four-step partner playbook at the end of the course for selling IQ-powered solutions to customers?

25. Which IQ layer is described as "the encyclopedia of your organisation's knowledge," and what metaphors describe Work IQ and Fabric IQ in the same passage?

---

### Answer key

1. **1.3 billion AI agents** by 2028.

2. **82 %** of organisations intend to integrate AI agents within the first 3 years.

3. **40 %** of enterprise applications will be integrated with task-specific AI agents in the current year.

4. "**A brilliant intern on their first day.**" Characteristics: searches all data with no context on what matters; does not know who you are or how you work; cannot distinguish a KPI from a typo; does not know company policies or rules; guesses instead of reasons (hallucination risk); no awareness of permissions or compliance; requires bespoke RAG and fragile pipelines.

5. "**A 10-year veteran who knows the business.**" Characteristics: understands business context and priorities; knows the user's role, team, and work patterns; reasons over semantic data models; retrieves policies and cites sources accurately; grounds answers in facts (reduces hallucination); respects permissions, labels, and compliance; produces reusable, governed, attachable intellectual property.

6. (1) Rich connected context; (2) low-friction development and orchestration; (3) governance, observability, and trust.

7. **Work IQ** — "How your employees work" (synthesises M365 signals, people, workflows). **Fabric IQ** — "How your business operates" (business entities, semantics, live data). **Foundry IQ** — "How your agents unlock knowledge" (connective layer, reusable knowledge bases).

8. Work IQ acts with the permissions of the authenticated user; users only see data they already have access to. The system never elevates access.

9. Work IQ understands roles, handoffs, and decision responsibility. It knew Jordan Lee owned the frozen category and therefore routed the notification to her automatically.

10. (1) Logged the verified supplier scope (confirming only one lot in the mid-west was affected). (2) Updated inbound controls so that unaffected inventory could be released — pending human approval.

11. **Option A**: keep the broad pause in place longer than strictly necessary. **Option B**: narrow containment to the affected lot and region; immediately release unaffected shipments. The agent **recommended Option B** because it stays within policy and avoids unnecessary operational drag.

12. (1) **Decision-ready data** — securely connects to M365 signals and LOB data, permission-trimmed and label-aware. (2) **Persistent memory** — learns user preferences, collaborators, and work patterns over time for personalised experiences. (3) **Insights-driven action** — blends signals and memory to recommend next steps and determine the best agent for a task.

13. (1) Ontology; (2) Graph; (3) Data agents; (4) Operations agents; (5) Power BI semantic models; (6) Digital twin builder.

14. An **ontology** is a semantic model of the business expressed as named entities (e.g., Customer, Shipment, Flight, Runway), their relationships, rules, and triggered actions. Unlike a database **schema**, which models data as tables and keys, an ontology models the business as it actually operates using concepts the organisation understands — linking entities through business relationships.

15. **Eventhouse** (Fabric's real-time analytics store). Data fields: **friction**, **contamination**, and **visual range** of the runway surface.

16. **36 % better response performance** out of the box. The improvement comes from the **agentic RAG engine**, which uses LLMs and SLMs across the stack for query planning and decomposition, source selection, search models, two levels of ranking, and answer synthesis — eliminating the need for bespoke, per-agent RAG wiring.

17. (1) **Topic-centric** — organised around business topics, not file types; (2) **Federated** — spans sources across the entire Microsoft Cloud; (3) **Reusable** — built once, used by many agents; (4) **Governed** — Entra ID permissions and Purview sensitivity labels enforced in every retrieval.

18. **Microsoft Entra ID** (user-level permissions) and **Microsoft Purview sensitivity labels** (document-level classification). Both flow through retrieval — agents never return content a user should not access.

19. Sources: SharePoint documents, Microsoft 365 signals, OneLake (Fabric), Azure AI Search indexes, the web, blob storage, data lakes, and third-party sources. Third-party connection protocol: **MCP (Model Context Protocol)**. Knowledge bases can also be exposed as MCP server endpoints.

20. Available from **1 May** of the current year. Three pillars: **Observe** (monitor and manage agents in real time); **Govern** (establish guardrails, audit readiness, lifecycle governance); **Secure** (identity protection, access control, data-leak prevention, threat defence).

21. **Microsoft 365 Admin Center**, **Microsoft Entra**, **Defender products**, and **Microsoft Purview**.

22. Third-party software vendors: **Workday**, **SAP**, **Adobe**. Model providers: **Anthropic**, **OpenAI**.

23. (1) **Scale AI with one plan** — single pre-paid plan covering Copilot Studio, Foundry, GitHub Copilot, and Fabric; pay-per-use agent deployment via Microsoft Copilot. (2) **Access deep expertise** — co-build with Microsoft Forward Deployed Engineers (FDEs). (3) **Upskill for the agentic era** — customised, expert-led role-based training for every role.

24. (1) Identify the top 2–3 customer scenarios. (2) Map those scenarios to Work IQ, Fabric IQ, or Foundry IQ. (3) Validate governance with Agent 365. (4) Deliver a **30–60-day IQ-powered proof of concept**.

25. **Foundry IQ** = "the encyclopedia of your organisation's knowledge." **Work IQ** = "the memory of your people." **Fabric IQ** = "the nervous system of your data."
