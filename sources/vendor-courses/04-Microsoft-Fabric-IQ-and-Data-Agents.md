# Microsoft Fabric IQ & Data Agents
> LevelUp course 2430362 · Phase 2 – Project Ready · ~8 hours · Frontier Transformation Engineer badge

## At a glance
- The course positions **Fabric IQ** as the semantic layer that turns raw data in **OneLake** into business context, and **Fabric Data Agents** as the conversational layer that reasons over that context.
- Microsoft’s “**Frontier Transformation**” framing depends on five drivers working together: business strategy, organization and culture, AI strategy and experience, governance and security, and technology and data strategy.
- **Ontology** is the centerpiece of Fabric IQ: a shared, machine-understandable vocabulary of the business made of entity types, properties, relationships, rules, bindings, graph structure, and query surface.
- The course repeatedly stresses the shift from **schema** to **meaning**: a schema describes storage structure, while an ontology describes business meaning and supports reasoning.
- **Fabric Data Agents** can chat over Lakehouse, Warehouse, KQL, semantic models, ontologies, mirrored data, and unstructured sources via **Azure AI Search**.
- High-quality agents are built iteratively with **agent instructions**, **data source instructions**, **example queries**, and SDK-based evaluation against **ground truth** datasets.
- Fabric Data Agents extend outward into **Microsoft Foundry**, **Copilot Studio**, **Microsoft 365 Copilot**, **Power BI**, **VS Code**, and other AI systems through **MCP**.
- Enterprise readiness depends on lifecycle practices: **Git integration**, **deployment pipelines**, **ALM**, environment-agnostic configuration, publishing discipline, and permission-aware sharing.

## Module map
| Order | Type | Module / lesson | One-line purpose |
| --- | --- | --- | --- |
| 1 | Module | Turn data into contextual insights with Fabric IQ | Introduces Frontier Transformation, the Microsoft IQ stack, and Fabric IQ as contextual intelligence over OneLake. |
| 1.1 | Lesson | Journey to the Frontier Firm + The Microsoft IQ Platform: Intelligence built on trust | Frames Fabric IQ inside Microsoft’s AI transformation model, business outcomes, and IQ stack. |
| 1.2 | Lesson | Fabric IQ: The foundation of contextual intelligence | Explains Fabric IQ components and why context, not just storage, matters for AI over business data. |
| 1.3 | Lesson | Build the enterprise unified semantic layer with Ontology + Core Concepts of Ontology | Defines ontology, its benefits, and the core constructs used to model business meaning. |
| 1.4 | Lesson | Create Ontology from Semantic Models and OneLake | Shows the two ontology creation paths and the main design steps for each. |
| 1.5 | Lesson | Modeling options in Fabric: Choose the right tools | Compares ontology, semantic models, Fabric Graph, and Digital Twins. |
| 2 | Module | Build your own conversational systems with Fabric Data Agents | Covers what Fabric Data Agents are, how to configure them, evaluate them, and combine them with Fabric IQ. |
| 2.1 | Lesson | Enable conversational data access with Fabric Data Agents | Introduces the virtual analyst pattern, the runtime flow, and the Python SDK. |
| 2.2 | Lesson | Configure a Fabric Data Agent | Explains prerequisites, instructions, authentication, example queries, and iterative tuning. |
| 2.3 | Lesson | Evaluate a Fabric Data Agent | Demonstrates SDK-based evaluation, trust scoring, and diagnostics. |
| 2.4 | Lesson | Fabric Data Agents and Fabric IQ: Better Together | Shows how a Data Agent can consume ontology as a semantic graph source. |
| 2.5 | Lesson | Use Mirrored databases as the data sources for Fabric Data Agents | Extends agents to mirrored and shortcut-based data with “zero ETL” style access. |
| 3 | Module | Chat with your data | Shows how Data Agents are consumed from Foundry, Copilot Studio, Microsoft 365 Copilot, MCP, Python, and Power BI. |
| 3.1 | Lesson | Enhance data-driven decision-making with Fabric Data Agents and Microsoft Foundry | Positions Foundry as the app/operations layer and shows how Fabric knowledge is added to multi-agent systems. |
| 3.2 | Lesson | Enrich Microsoft Copilot Studio agents with Fabric data intelligence | Connects published Fabric Data Agents into Copilot Studio agents and orchestration flows. |
| 3.3 | Lesson | Fabric Data Agent integration with Microsoft 365 Copilot | Publishes Fabric Data Agents into the Microsoft 365 Copilot agent store and explains response handling. |
| 3.4 | Lesson | Fabric Data Agents as MCP Server and MCP Client | Shows Data Agents both exposing tools through MCP and consuming external tools/UDFs. |
| 3.5 | Lesson | Fabric Data Agent: Python SDK + Power BI Chat | Covers Python client consumption, step inspection, and the Power BI Copilot experience. |
| 4 | Module | Fabric data agent lifecycle management for scalable solutions | Focuses on source control, CI/CD, ALM, publishing, sharing, and permissions. |
| 4.1 | Lesson | Source Control, CI/CD, and ALM for Fabric Data Agents | Connects Fabric workspaces to Git and uses deployment pipelines for dev/test/prod promotion. |
| 4.2 | Lesson | Fabric Data Agent sharing and permission management | Explains published read-only versions, sharing models, and minimum data-source permissions. |
| 5 | Assessment | Post-training Skills Assessment | Validates skills from the self-paced learning. |
| 6 | Survey | Course Completion Survey | Collects feedback on the learning experience. |
| 7 | Assessment | Frontier Engineer Assessment | Marks overall completion. |

### 1. Turn data into contextual insights with Fabric IQ
**What it covers** — This module anchors Fabric IQ inside Microsoft’s broader AI transformation story before drilling into the semantic foundations that make contextual intelligence possible. It explains why OneLake alone is not enough for AI, why meaning matters more than raw structure, and how ontology, graph, semantic models, and digital twins fit together. It also demonstrates the two main ontology creation paths and ends with tool-selection guidance.

**Key concepts**
- **Frontier Transformation**
- **The five drivers of AI value**
- **Business strategy**
- **Organization and culture**
- **AI strategy and experience**
- **Governance and security**
- **Technology and data strategy**
- **Becoming Frontier**
- **Enrich employee experiences**
- **Reinvent customer engagement**
- **Reshape business processes**
- **Bend the curve on innovation**
- **Data & AI Foundations – Critical Success Factors based on Customer Learnings**
- **Leverage ALL YOUR DATA with Speed, reduce complexity & cost**
- **AI in the FLOW OF WORK**
- **Enable AI Agents to deeply UNDERSTAND data**
- **FUTURE-PROOF tech decisions with open standards, flexibility and extensibility**
- **Microsoft IQ Stack**
- **Work IQ**
- **Business Data**
- **Foundry IQ**
- **Knowledge retrieval**
- **Agents**
- **OneLake**
- **Unified data foundation**
- **Fabric IQ**
- **Ontology**
- **Graph in Microsoft Fabric**
- **Fabric Data Agents**
- **Operations Agent**
- **Power BI Semantic Model**
- **Digital Twins**
- **Microsoft Fabric plan**
- **EPM / CPM**
- **Scenario modeling**
- **What-if analysis**
- **Entity type**
- **Entity instance**
- **Properties**
- **Relationships**
- **Rules**
- **Constraints**
- **Rules/Actions**
- **Data bindings**
- **Ontology Graph Query**
- **Fabric Activator**
- **Semantic foundation**
- **Enterprise-grade AI grounding**
- **Decision-ready AI actions**
- **Governance and trust**
- **Cross domain reasoning**
- **Generate Ontology**
- **Build directly from OneLake**
- **Eventhouse**
- **KQL database**
- **Entity-centric reports**
- **Knowledge graph**
- **Lakehouse**
- **delta format**
- **Entity type key**
- **Semantic models**
- **Fabric Graph**
- **Digital Twin Builder**
- **Star schemas**
- **Snowflake schemas**
- **DAX**
- **Nodes and edges**

**Detailed notes**
- **Lesson 1.1 – Journey to the Frontier Firm + The Microsoft IQ Platform: Intelligence built on trust**
  - The opening message is that Fabric IQ and Fabric Data Agents should not be treated as isolated features; they support what Microsoft calls **frontier transformation**.
  - The destination is AI becoming more than a productivity add-on: it should reshape how the organization operates and competes.
  - The five drivers are presented as interdependent. If one is weak, the whole transformation is weak.
    - **Business strategy** ties AI investments to measurable outcomes and ROI.
    - **Organization and culture** determines trust, adoption, skills, operating model, and willingness to use AI.
    - **AI strategy and experience** builds repeatable process and “muscle memory,” not one-off pilots.
    - **Governance and security** provides the guardrails layer.
    - **Technology and data strategy** is the module’s home territory: data and infrastructure that run AI securely, reliably, and at scale.
  - “Becoming Frontier” is described through four business outcomes: **Enrich employee experiences**, **Reinvent customer engagement**, **Reshape business processes**, and **Bend the curve on innovation**.
  - The Data & AI foundation has four critical success factors:
    - leverage **ALL YOUR DATA** with speed while reducing complexity and cost;
    - put AI in the **FLOW OF WORK**;
    - let agents deeply **UNDERSTAND** data;
    - **FUTURE-PROOF** decisions with open standards and extensibility.
  - The **Microsoft IQ Stack** is explained as three intelligence layers feeding agents:
    - **Work IQ**: behavioral/collaborative context from Microsoft 365 Copilot;
    - **Fabric IQ**: business data context over OneLake through ontology;
    - **Foundry IQ**: knowledge retrieval and synthesis over documents, models, and unstructured sources.
  - The architectural punchline is that **agents** can draw on all three layers together.

- **Lesson 1.2 – Fabric IQ: The foundation of contextual intelligence**
  - Fabric is described as a **data software as a service solution** with **OneLake** as central storage and separate compute engines such as Spark and Warehouse.
  - A core idea is **decoupled storage and compute**: OneLake stores; workloads process.
  - The instructor explicitly says Fabric should not be seen as a direct competitor to a single database product; it is a centralized data platform that can interoperate with other systems.
  - Fabric IQ is introduced as a workload for unifying data across OneLake, but the practical meaning is stronger: it organizes data according to the language of the business and exposes it with consistent semantic meaning.
  - The course traces an evolution from generative AI to prompt engineering to grounding to RAG to **context engineering**. Fabric IQ is framed as the layer that supplies that context.
  - Example reasoning: an airline stores rows and columns such as flight numbers, gate IDs, timestamps, seat codes, and airport codes, but humans think in flights, routes, delays, passengers, weather, and crews. Fabric IQ bridges that gap.
  - The course quotes the Microsoft Fabric blog idea that future market leaders will be those that turn data into understanding, then understanding into action, then action into sustained advantage.
  - Fabric IQ was said to be announced at **Ignite 2025**.
  - Components highlighted:
    - **Ontology** as business vocabulary;
    - **Graph** for connected data and traversal;
    - **Data Agents** as conversational AI;
    - **Operations Agent** for autonomous monitoring/reasoning/action;
    - **Power BI semantic model** as KPI/BI semantic foundation;
    - **Digital Twins** for digital representations of physical assets or monitored devices.
  - **Graph in Microsoft Fabric** is described as ontology-powered, visually structured, capable of analyzing **billions of relationships**, multi-hop exploration, and risk/performance discovery.
  - **Power BI Semantic Model** is positioned as the base layer that can jumpstart ontology because it already captures trusted shared meaning.
  - The module also introduces **Microsoft Fabric plan** as built-in **EPM / CPM** capability: planning, budgeting, scenario modeling, and what-if analysis can move closer to the governed data estate instead of remaining siloed in separate planning tools.
  - Workspace basics shown in demo:
    - Fabric runs in the browser at `app.fabric.microsoft.com`.
    - A **workspace** is the container for Fabric items.
    - A workspace runs on **Fabric capacity**; the demo used **F8** in **West US**.
    - Location, governance, permissions, and compliance all matter before building cross-workspace or AI-driven solutions.

- **Lesson 1.3 – Build the enterprise unified semantic layer with Ontology + Core Concepts of Ontology**
  - Ontology is defined as a **shared, machine-understandable vocabulary of your business**.
  - It is a **business context layer** containing:
    - concepts defined once and reused everywhere;
    - data bindings to actual sources in OneLake;
    - a graph representation for richer navigation, lineage, and reasoning;
    - a query surface over concepts rather than just tables.
  - The six benefits emphasized are:
    - **Semantic foundation**;
    - **Reuse your semantic investments**;
    - **Enterprise-grade AI grounding**;
    - **Decision-ready AI actions**;
    - **Governance and trust**;
    - **Cross domain reasoning**.
  - The module repeatedly contrasts **ontology** with **schema**:
    - schema describes structure;
    - ontology describes meaning.
  - The course says this distinction matters because a schema tells an agent that `Customer ID` exists in `Orders`; ontology tells the agent that a customer places orders, orders contain lines, lines reference products, and products belong to categories.
  - Core ontology constructs:
    - **Entity type** = reusable logical model of a real-world concept, standardizing name, identifiers, properties, constraints, and rules/actions.
    - **Entity instance** = concrete occurrence populated from bindings.
    - **Property** = named fact with declared data type.
    - **Relationship** = directional semantic link between entity types or instances.
    - **Rules** = event-driven alerts or reflexes, with **Fabric Activator** called out for real-time monitoring/response.
    - **Bindings** = connections to source data in OneLake.
    - **Ontology Graph Query** = business-level querying over entities, properties, relationships, time, and constraints.
  - Important mindset shift: the instructor insists that entity types are **not tables**. Example relationships can be business-natural phrases such as “customer buys stuff from me” or “store contains products.”
  - Shortcut and mirroring relevance is introduced even here: ontology bindings can point to mirrored or shortcut-based data in OneLake, including data referenced virtually.
  - The graph is not only visual; it is queryable.

- **Lesson 1.4 – Create Ontology from Semantic Models and OneLake**
  - Two creation paths are taught:
    - **Generate from Semantic Model**;
    - **Build directly from OneLake**.
  - **Generate from Semantic Model** flow:
    1. Generate Ontology.
    2. Verify Entity types.
    3. Verify Properties.
    4. Verify Bindings.
    5. Verify and configure Relationship types.
  - Why this helps: the semantic model already has tables and relationships, so ontology creation can start from an existing trusted reporting layer.
  - Demo scenario: an operations semantic model captured **flights**, **airlines**, **bookings**, and **routes** from OneLake and was already used for Power BI reporting.
  - Ontology then extended that base with:
    - **real-time streams**;
    - **geospatial data**;
    - **rules**;
    - **actions**;
    - **unstructured data**.
  - Entity-centric reports are automatically associated from Power BI, and the example extended the **flights** entity with runway condition, wind, turnaround events, weather data, maintenance events, IoT telemetry, and route-reassignment logic.
  - The key phrase pulled from the demo is **knowledge graph**.
  - **Build directly from OneLake** flow:
    1. Create an Ontology item.
    2. Create Entity types.
    3. Create Data Bindings.
    4. Select Entity type keys.
    5. Create Relationship types and bind them to source data.
  - Demo details:
    - A workspace contained a **Lakehouse** with **delta format** tables and an **Eventhouse** with a **KQL database**.
    - The ontology item was created from **New item** and clearly marked **preview**.
    - The example built a **store** entity type, bound it to `dimstore`, mapped source columns to property names, then chose **store ID** as the entity key.
    - A **products** entity type was built similarly from a products table with **product ID** as key.
    - Relationships were named in natural business language such as **contains**, **receives from**, **flies to**, or **flies from**.

- **Lesson 1.5 – Modeling options in Fabric: Choose the right tools**
  - The comparison is framed as “what should I use when?”
  - **Ontology** is for semantic foundations that encode entities, relationships, policies, and actions in the way the business thinks.
  - **Semantic models** are for tables, relationships, aggregations, summaries, measures, and dashboards.
  - **Fabric Graph** is the graph-oriented query layer for traversing nodes, edges, dependencies, and arbitrary relationships at scale.
  - **Digital Twins** are digital mirrors of physical devices/assets used for state, behavior, simulation, and what-if analysis.
  - The module uses examples such as flights, runways, crews, airports, and seats to show ontology-style business modeling.
  - It contrasts this with semantic-model-style **star schemas**, **snowflake schemas**, and **DAX** measures optimized for BI consumption.
  - The matrix also distinguishes primary consumers and best-fit scenarios:
    - ontology for business users, data users, AI teams, and AI agents;
    - semantic models for reporting/dashboarding;
    - graph for lineage and dependency analysis;
    - digital twins for operations, engineering, and industrial monitoring.

**Exam / assessment pointers**
- Know the difference between **schema/structure** and **ontology/meaning**.
- Be able to explain why ontology makes Fabric IQ different from “just putting a search box on top of your data warehouse.”
- Memorize the six ontology benefits and the major ontology building blocks.
- Distinguish **Generate from Semantic Model** from **Build directly from OneLake** and know the step sequence for each.
- Remember that ontology relationships are **semantic/business** and source-independent, while relational relationships are **physical/structural** and key-based.
- Be ready to compare **Ontology**, **Semantic Models**, **Fabric Graph**, and **Digital Twins** by purpose and best-fit scenario.
- Recall that Fabric workspaces run on **Fabric capacity** and the demo explicitly referenced **F8**.

### 2. Build your own conversational systems with Fabric Data Agents
**What it covers** — This module moves from semantic context to conversational access. It defines what Fabric Data Agents do, how they translate natural language into governed query execution, how creators improve quality with instructions and example queries, how developers evaluate agents through the SDK, and how ontology plus mirrored data broaden the agent’s data foundation.

**Key concepts**
- **Fabric Data Agent**
- **Virtual analyst**
- **OneLake**
- **M365 Copilot**
- **remote MCP Server in VS Code**
- **Azure AI Search**
- **Fabric IQ Workload through Ontology**
- **Data Agent SDK**
- **PySpark notebook**
- **fabric-data-agent-sdk**
- **0.0.2a0**
- **Enforcement mechanisms**
- **Tool invocation**
- **Query generation**
- **Query execution**
- **Response synthesis**
- **Row-level security (RLS)**
- **Sensitivity labels**
- **Governance policies**
- **DAX**
- **SQL**
- **Custom tool**
- **F2**
- **P1**
- **Fabric enabled**
- **Fabric data agent tenant settings**
- **Cross-geo processing for AI**
- **Microsoft Entra ID**
- **Agent instructions**
- **Data source instructions**
- **Description**
- **Example queries**
- **evaluate_few_shots**
- **Ground truth dataset**
- **evaluate_data_agent**
- **get_evaluation_summary**
- **get_evaluation_details**
- **Trust score**
- **Diagnostics button**
- **Ontology source**
- **GraphQL query**
- **Mirrored databases**
- **zero ETL**
- **Shortcuts**
- **Mirroring**
- **Cosmos**
- **PostgreSQL**
- **Snowflake**
- **Near real time**

**Detailed notes**
- **Lesson 2.1 – Enable conversational data access with Fabric Data Agents**
  - A Fabric Data Agent is presented as a **virtual analyst** for enterprise data in OneLake.
  - The simplest build flow demonstrated was:
    1. Create a **Data agent** item from **New item**.
    2. Name it (example: **TestDA**).
    3. Add a data source.
    4. Choose Lakehouse tables.
    5. Ask natural-language questions in the built-in chat UI.
  - Example questions shown:
    - “how many products exist in my `dimproducts` table”;
    - “which of the products is the best selling product?”
  - The Data Agent translated those questions into SQL-like query logic, including an **inner join** when it had to combine tables.
  - The under-the-hood flow is described as a governed pipeline rather than a flat feature list:
    - **Enforcement mechanisms** fire first.
    - Then the system does **tool invocation** and **query generation**.
    - Then it runs the query and produces a natural-language response.
  - The enforcement step explicitly checks who is asking, what data is allowed, and what governance constraints apply.
  - Tool/query selection can involve:
    - **DAX** against semantic models;
    - **SQL** against warehouse or lakehouse;
    - custom functions or tools.
  - The response is then framed according to semantic context and instructions.
  - The lesson also introduces the **Data Agent SDK** as the step from prototype to production. The portal is for building; the SDK is what makes the agent operationally scalable.
  - The SDK can create, configure, connect, query, and evaluate agents from notebooks or other Python environments.
  - The course specifically highlights `pip install fabric-data-agent-sdk` with preview version **0.0.2a0**.

- **Lesson 2.2 – Configure a Fabric Data Agent**
  - The course says Data Agent building is **iterative**.
  - Capacity and setup prerequisites called out:
    - paid **F2** or higher capacity, or **Power BI Premium per capacity P1 or higher**;
    - Fabric must be enabled on the capacity;
    - Fabric data agent tenant settings must be enabled;
    - **Cross-geo processing for AI** must be considered;
    - you need at least one supported source such as Lakehouse, Warehouse, semantic model, KQL database, or ontology.
  - The demo created a workspace on Fabric capacity, a Lakehouse with sample data, and explained how lakehouse querying differs from more traditional relational thinking.
  - Authentication model:
    - access runs under the user’s **Microsoft Entra ID** identity;
    - workspace/data permissions still control what can be queried;
    - to add a Power BI semantic model, the user needs **Read** permission on the model;
    - **service principals and API tokens aren’t required for the in-product chat experience**.
  - **Agent instructions** are essentially the system prompt. They tell the agent:
    - how to behave;
    - how to respond;
    - which source to use for which type of question;
    - what to preserve verbatim.
  - The example instructions routed sales questions to one model, ratings to a KQL database, support tickets to another source, and explicitly told the model not to rename the game title provided by the user.
  - **Data source descriptions** act like source identity; **data source instructions** act like source-specific operating rules.
  - **Example queries** teach the agent what high-quality natural-language/question-to-query mappings look like.
  - The module stresses validation: do not drop in sloppy examples and hope the LLM generalizes correctly.
  - The **evaluate_few_shots** function can validate natural-language/SQL pairs for clarity, correctness, and schema alignment.
  - Once the agent is ready, **Publish** creates the endpoint; publishing also unlocks later consumption patterns such as **MCP server** use.

- **Lesson 2.3 – Evaluate a Fabric Data Agent**
  - Evaluation is framed as the answer to “how do you know your agent is right before 500 or 1,000 users depend on it?”
  - Required ingredients:
    - install the SDK;
    - load a **ground truth dataset** of sample questions plus expected answers;
    - run evaluations;
    - inspect summary and detailed results.
  - Functions called out:
    - **evaluate_data_agent** for execution and metrics capture;
    - **get_evaluation_summary** for overall performance;
    - **get_evaluation_details** for per-question breakdown and actual responses.
  - Result classes are **true**, **false**, and **unclear**.
  - The module explains **unclear** carefully: it may reflect ambiguity or formatting mismatch rather than an actually wrong answer.
  - A **trust score** is the main readiness signal.
  - The **Diagnostics button** exports a full snapshot of:
    - data source settings;
    - applied instructions;
    - example queries;
    - underlying execution steps.
  - The SDK also allows customization of the evaluation prompt itself when the built-in evaluator is not nuanced enough for the domain.

- **Lesson 2.4 – Fabric Data Agents and Fabric IQ: Better Together**
  - The course explicitly shifts back from data modeling alone to **business context**.
  - Fabric Data Agents can now use **IQ workload artifacts through Ontology**.
  - Integration flow:
    1. Create a Fabric Data Agent with an **Ontology** source.
    2. Provide agent instructions.
    3. Query with natural language.
  - When ontology is used, the agent reasons over the predefined semantic graph rather than inferring everything from disconnected tables.
  - The demo notes that unlike other source types, the ontology path can expose all entities without selecting each one manually.
  - A sample query about markets with the highest demand signals was said to run through a **GraphQL query**.
  - The benefit is less setup inside the Data Agent because meaning was already modeled in ontology.

- **Lesson 2.5 – Use Mirrored databases as the data sources for Fabric Data Agents**
  - This lesson extends the data source conversation beyond native Fabric tables.
  - It frames the capability as **Unify data in OneLake with zero ETL**.
  - Two patterns are contrasted:
    - **Mirroring** = replicate data into Fabric in **near real time**.
    - **Shortcuts** = reference data virtually in OneLake without fully bringing it in.
  - Shortcuts are described as virtual tables over external storage; some information may be cached, but the source data remains where it lives.
  - Mirroring examples mentioned in narration included **Cosmos**, **PostgreSQL**, and **Snowflake**, with additional mirrored-source tiles shown in the Fabric UI.
  - The practical message: once mirrored, Fabric Data Agents can treat that data much like local Fabric data and users can chat over it.

**Exam / assessment pointers**
- Remember the first enforcement step: Fabric Data Agents apply permissions and governance before answering.
- Know that a Data Agent can reason over plain tables **or** an ontology-backed semantic graph.
- Memorize the configuration trio: **agent instructions**, **data source instructions**, **example queries**.
- Be able to name the evaluation functions and what each one returns.
- Distinguish **mirroring** from **shortcuts**.
- Know the capacity prerequisites: **F2** or higher, or **P1** or higher with Fabric enabled.
- Remember that in-product chat uses the user’s **Microsoft Entra ID** context and does not require service principals or API tokens.

### 3. Chat with your data
**What it covers** — This module turns Fabric Data Agents into reusable building blocks across the Microsoft AI stack. It explains how Foundry uses Fabric knowledge, how Copilot Studio and Microsoft 365 Copilot consume published agents, how MCP opens interop and tool use, and how Python plus Power BI provide developer and analyst consumption paths.

**Key concepts**
- **Microsoft Foundry**
- **Azure AI Foundry**
- **Foundry Agent Service**
- **IDE experience**
- **GitHub**
- **Visual Studio Code**
- **Copilot Studio**
- **Models**
- **Agent Service**
- **IQ**
- **Tools**
- **Machine learning**
- **1,400 MCP-enabled connectors**
- **Microsoft Fabric** as knowledge source
- **Fabric connection**
- **Project**
- **Project client**
- **Thread**
- **Run**
- **Bring your own AI Search index**
- **Persistent memory**
- **Declarative agents**
- **Hosted agents**
- **LangChain**
- **Semantic Kernel**
- **Microsoft 365 Copilot agent builder**
- **Topics**
- **Triggers**
- **Other agents**
- **Microsoft Graph**
- **description_for_model**
- **Agent Store in Microsoft 365 Copilot**
- **MCP Server**
- **MCP Client**
- **Model Context Protocol**
- **HTTPS endpoint**
- **VS Code**
- **MCP JSON file**
- **GPT-5**
- **User-defined functions (UDF)**
- **pricing promotions UDF**
- **email service UDF**
- **Power BI Copilot**
- **Copilot Search**

**Detailed notes**
- **Lesson 3.1 – Enhance data-driven decision-making with Fabric Data Agents and Microsoft Foundry**
  - **Microsoft Foundry** is described as the platform where AI apps and agents are built, orchestrated, deployed, and governed at enterprise scale; it was previously known as **Azure AI Foundry**.
  - The course’s shorthand is:
    - **Fabric** = where data lives and gets intelligent;
    - **Foundry** = where agents and AI applications are built and operated.
  - Foundry architecture layers described:
    - **IDE experience**: GitHub, Visual Studio Code, Copilot Studio;
    - **core workloads**: Models, Agent Service, IQ, Tools, Machine learning;
    - **connections / MCP tools**: action layer across business systems;
    - **control plane**: security, governance, lifecycle, monitoring, usage, cost, policy.
  - The instructor stresses that **Agent Service** and **IQ** sit side by side intentionally so orchestration and business context work together.
  - The **Foundry Agent Service** principles highlighted are:
    - open by design;
    - connected intelligence everywhere;
    - enterprise-grade trust and reach;
    - one-click publishing to Microsoft 365.
  - Agent types:
    - **Declarative agents** are lightweight specialists defined mostly through prompt/persona/tool access.
    - **Hosted agents** are orchestrators coordinating other specialist agents.
  - The course treats a Fabric Data Agent as effectively a specialist/declarative agent from a role perspective.
  - Fabric integration into Foundry is presented as simple:
    - add **Microsoft Fabric** as a knowledge source;
    - create a Fabric connection inside the same tenant;
    - provide instructions for when the Foundry agent should use the Fabric tool.
  - Security is a key selling point:
    - **RLS** and **CLS** are respected;
    - the user’s permissions flow through;
    - the Foundry agent does not become a superuser.
  - The lesson also shows **Bring your own AI Search index** to Fabric Data Agents.
  - Programmatic steps for adding Fabric into a Foundry agent:
    1. Create a **project client** with connection string.
    2. Create an agent with the **Microsoft Fabric tool** enabled.
    3. Create a **thread**.
    4. Create a **run** and inspect output.
  - The multi-agent retail example combined workflows, policy/notification, video processing, and store operations. The workflow showed how agents, IQ, memory, and notifications can operate together.

- **Lesson 3.2 – Enrich Microsoft Copilot Studio agents with Fabric data intelligence**
  - The course shows a progression:
    - **M365 Copilot agent builder** for natural-language, lighter-weight construction;
    - **Copilot Studio** for richer orchestration and control;
    - **Foundry** for deeper pro-dev scenarios.
  - In Copilot Studio, Fabric Data Agents become external capabilities an agent can call; they do not “move into” Foundry or Copilot Studio as native copies.
  - The Fabric Data Agent is effectively treated as a tool/connected agent resource.
  - Copilot Studio adds key capabilities beyond builder mode, especially **topics** and orchestration.
  - The Bitcoin example showed a topic flow that asked follow-up questions, stored variables, called an external HTTP request, and returned the answer in user-friendly form.
  - Prerequisites for using a Fabric Data Agent in Copilot Studio:
    1. **Data Agent readiness**.
    2. Publish the Fabric Data Agent with a rich description.
    3. Keep both agents in the **same tenant**.
    4. Sign in to Fabric and Copilot Studio with the **same account**.
    5. Have Read access to the Data Agent, permission to create/modify Copilot Studio agents, and access to underlying data sources.
  - The module states plainly: this is **agent calling an agent**, though architecturally it is often exposed as a tool.

- **Lesson 3.3 – Fabric Data Agent integration with Microsoft 365 Copilot**
  - Microsoft 365 Copilot is framed as the everyday AI assistant inside Word, Excel, PowerPoint, and other Microsoft 365 apps.
  - It combines:
    - real-time responses;
    - internet and work content;
    - Microsoft Graph personalization;
    - large language models.
  - Publishing flow:
    - publish the Fabric Data Agent;
    - optionally **publish to the Agent Store in Microsoft 365 Copilot**;
    - wait briefly for the store listing to appear;
    - users add the agent and use it in their normal M365 workflow.
  - The example agent was **Customer Insights Agent**.
  - The demo used it to:
    - list the most engaged customers;
    - create a chart of top engaged customers;
    - find customers with declining engagement over time;
    - switch to Excel and request a chart of top revenue-generating customers.
  - The course stresses that M365 Copilot has its own orchestrator. The Data Agent does its work, then Copilot shapes the final response in chat context.
  - To influence that behavior, the creator can provide specific publish-time instructions, and the Data Agent description becomes **description_for_model** in Microsoft 365 Copilot.
  - **RLS** and **CLS** are said to remain respected.

- **Lesson 3.4 – Fabric Data Agents as MCP Server and MCP Client**
  - The lesson treats **Model Context Protocol** as the important AI-era standard introduced after the generative AI shift.
  - MCP is described as a consistent, open way for AI systems to discover and call external tools and data sources, with the course emphasizing “context” in the name.
  - As an **MCP Server**, a published Fabric Data Agent provides:
    - a managed server experience;
    - secure **HTTPS endpoint**;
    - **Entra ID** authentication;
    - availability and scaling managed by Microsoft;
    - first-class access to enterprise knowledge in secure, auditable form.
  - The VS Code example used an **MCP JSON file** that defined endpoint, authentication, and config details.
  - The developer selected **GPT-5** as orchestrator and then used the Data Agent inside VS Code to:
    - find the top 5 customers by total purchase value;
    - generate a Markdown report with a bar chart by loyalty tier;
    - export declining customers to a file;
    - generate a Python script for personalized loyalty-reward emails and run a dry run.
  - As an **MCP Client**, the Fabric Data Agent can connect to other tools.
  - Demonstrated extensions:
    - **pricing promotions UDF** to calculate discounts by loyalty tier and purchase amount;
    - **email service UDF** to notify marketing about promotion details.
  - The lesson’s core message is that the Data Agent can evolve from observation to recommendation to action.

- **Lesson 3.5 – Fabric Data Agent: Python SDK + Power BI Chat**
  - Python client SDK consumption is presented as a developer path for:
    - building custom interfaces;
    - embedding insights into existing workflows;
    - automating reports;
    - running natural-language data queries.
  - Basic flow:
    1. Set up environment.
    2. Install dependencies.
    3. Configure and authenticate the client.
    4. Create the Data Agent client.
    5. Ask questions.
  - The lesson also covers inspection of execution steps, including checking tool calls and errors during a run.
  - **Power BI Copilot** is another native consumer:
    - in the new **full-screen Copilot in Power BI** experience, users can scan semantic models, reports, and Fabric Data Agents they can access;
    - **Copilot Search** can discover a Data Agent;
    - after adding it, the user interacts with it directly.
  - The interaction flow described is simple: rephrase the question, send the query, let the Data Agent do its work, then present the response.
  - As elsewhere, **RLS** and **CLS** remain in force.

**Exam / assessment pointers**
- Know the course’s Fabric-vs-Foundry split: Fabric is the data/intelligence foundation; Foundry is the application/operations layer.
- Remember the difference between **declarative agents** and **hosted agents**.
- Be able to list the Foundry programmatic integration steps: project client, Fabric tool, thread, run.
- For Copilot Studio, remember the prerequisites: ready/published agent, same tenant, same account, correct permissions.
- For Microsoft 365 Copilot, remember that the Data Agent description becomes **description_for_model**.
- Be ready to explain both sides of MCP: Data Agent as **MCP Server** and as **MCP Client**.
- Know the Power BI pattern: discover via **Copilot Search**, add the Data Agent, then query it within the Power BI Copilot experience.

### 4. Fabric data agent lifecycle management for scalable solutions
**What it covers** — This module shifts from capability to operational discipline. It treats Fabric Data Agents as software assets that need source control, versioning, dev/test/prod promotion, environment-aware configuration, and explicit sharing/permission management so that published agents stay governable and supportable at scale.

**Key concepts**
- **Source Control**
- **CI/CD**
- **ALM**
- **Git integration**
- **Azure DevOps**
- **GitHub**
- **Workspace**
- **Folder structure in Git mirrors the workspace structure**
- **data_agent.json**
- **publish_info.json**
- **drafts**
- **published**
- **Deployment pipelines**
- **dev / test / production**
- **Service principals**
- **Same tenant**
- **Environment-agnostic configuration patterns**
- **Personal access token**
- **Fine-grained token**
- **Connect and Sync**
- **Read-only version**
- **Sharing permission models**
- **Power BI semantic model Build**
- **Lakehouse Read**
- **Warehouse Read / SELECT**
- **KQL Reader role**
- **Ontology Read plus underlying source Read**

**Detailed notes**
- **Lesson 4.1 – Source Control, CI/CD, and ALM for Fabric Data Agents**
  - The module’s main argument is that Data Agents should be treated as development artifacts, not one-off objects built directly in production and manually tweaked forever.
  - Fabric supports this through:
    - **Git integration**;
    - **deployment pipelines**;
    - workspace-based promotion across lifecycle stages.
  - Git integration benefits listed on-screen:
    - full backup and version control of workspace items;
    - folder structure in Git mirrors workspace structure;
    - Data Agent configuration is stored in structured files in dedicated folders;
    - diff/history/revert support for Fabric items including Data Agents;
    - branch-based collaboration.
  - Deployment pipeline flow shown:
    1. develop or update in **development** workspace;
    2. promote to **test** for validation;
    3. promote to **production** for end users.
  - Limitations and considerations:
    - only workspaces connected to Git can use Git-based ALM features;
    - **service principals are supported in the Fabric Data Agent only as part of ALM scenarios**;
    - source and target workspaces must be in the **same tenant**;
    - large numbers of frequent commits can affect repository size/performance.
  - Best practices:
    - use a dedicated development branch;
    - merge to main after review;
    - keep related resources in the same workspace for easier promotion;
    - test in a test workspace before promoting to production;
    - use descriptive commit messages;
    - do not directly edit the **published** folder;
    - use **environment-agnostic configuration patterns**.
  - The environment-agnostic warning is strong: if workspace IDs and similar values are hard-coded, promotion breaks the whole point of ALM.
  - GitHub connection steps demonstrated:
    - choose **Git integration** in workspace settings;
    - select provider (**Azure DevOps** or **GitHub**);
    - for GitHub, create a **fine-grained token**;
    - supply repository URL, branch, and folder;
    - use **Connect and Sync**;
    - review synced changes and merge via pull request.
  - The synced repo mirrored the Fabric workspace with folders for Lakehouse, notebook, semantic model, warehouse, and related assets.

- **Lesson 4.2 – Fabric Data Agent sharing and permission management**
  - Publishing creates a **read-only version** of the Data Agent that can be shared.
  - The course emphasizes versioning discipline, descriptions, and documentation so teams know what was published and why.
  - Sharing guidance:
    - creators control access to the Data Agent;
    - sharing supports different permission models;
    - users still need sufficient underlying source permissions.
  - Minimum permissions by source type:
    - **Power BI semantic model**: **Build** (includes Read).
    - **Lakehouse**: **Read** on the lakehouse item.
    - **Warehouse**: **Read** / **SELECT** on relevant tables.
    - **KQL database**: **Reader** role on the database.
    - **Ontology**: **Read** on the ontology item **and** Read on the bound semantic model, lakehouse, or KQL database.
    - **Other supported sources**: query/read-level access.
  - Critical principle: sharing a Data Agent does **not** grant the recipient the sharer’s data permissions. If the recipient lacks minimum source permission, the query fails.

**Exam / assessment pointers**
- Know why Fabric Data Agents should go through **dev / test / production** rather than ad hoc production editing.
- Be able to state the Git integration benefits and the deployment pipeline promotion flow.
- Remember the limitation that deployment pipeline source and target workspaces must be in the **same tenant**.
- Memorize the best-practice warning: do **not** edit the **published** folder directly.
- Understand **environment-agnostic configuration patterns** and why hard-coded workspace IDs break ALM.
- Know the minimum permission required for each source type, especially the stronger requirements for **Power BI semantic models** and **ontology**.

## Key terminology
| Term | Definition | Where it appears |
| --- | --- | --- |
| Agent instructions | System-prompt-style directions that tell a Fabric Data Agent how to behave, respond, and route questions. | Module 2 |
| Agent Service | Foundry runtime used to build, orchestrate, and run agents. | Module 3 |
| ALM | Application Lifecycle Management for moving and governing agents across development stages. | Module 4 |
| Azure AI Search | Search capability used for unstructured data and bring-your-own index scenarios. | Modules 2-3 |
| Bindings / Data bindings | Links between ontology concepts and actual data sources in OneLake. | Module 1 |
| CLS | Column-level security; limits which columns a user can see through agent experiences. | Module 3 |
| Connect and Sync | Fabric Git integration action that synchronizes workspace items to the chosen repository. | Module 4 |
| Cross domain reasoning | Ontology’s ability to traverse business relationships across connected entities and domains. | Module 1 |
| Data Agent SDK | Python SDK used to create, configure, invoke, and evaluate Fabric Data Agents. | Module 2 |
| Data source instructions | Instructions applied when a Data Agent routes a question to a specific source. | Module 2 |
| Declarative agents | Lightweight specialist agents largely defined by prompt, persona, and tools. | Module 3 |
| Deployment pipelines | Fabric mechanism for promoting items between lifecycle workspaces. | Module 4 |
| description_for_model | The Microsoft 365 Copilot field influenced by the Fabric Data Agent’s published description. | Module 3 |
| Digital Twins | Digital mirrors of physical assets/devices used for state, behavior, and operational simulation. | Module 1 |
| Entity instance | Concrete occurrence of an entity type populated from bindings. | Module 1 |
| Entity type | Reusable logical model of a real-world business concept. | Module 1 |
| Environment-agnostic configuration patterns | Patterns that externalize environment-specific values so the same definition can move across dev/test/prod. | Module 4 |
| evaluate_data_agent | SDK function that runs a Fabric Data Agent against a ground truth dataset and stores metrics. | Module 2 |
| evaluate_few_shots | SDK function used to validate example natural-language/query pairs. | Module 2 |
| Eventhouse | Fabric item used for event/KQL scenarios; used in ontology examples. | Module 1 |
| Fabric Activator | Capability used with ontology rules for real-time monitoring and response. | Module 1 |
| Fabric Data Agent | Conversational “virtual analyst” that reasons over Fabric data sources and returns governed answers. | Modules 2-4 |
| Fabric Graph | Graph-oriented layer for traversing connected data, nodes, edges, and dependencies. | Module 1 |
| Fabric IQ | Semantic intelligence layer over OneLake that adds business context. | Modules 1-2 |
| Foundry Agent Service | Foundry capability for multi-agent runtime, orchestration, memory, and deployment. | Module 3 |
| Foundry IQ | Knowledge retrieval/synthesis layer in the Microsoft IQ stack and Foundry platform. | Modules 1, 3 |
| Git integration | Fabric workspace connection to GitHub or Azure DevOps for version control. | Module 4 |
| GraphQL query | Query style shown when a Data Agent consumed ontology through its graph model. | Module 2 |
| Ground truth dataset | Known questions and expected answers used to evaluate a Data Agent. | Module 2 |
| Hosted agents | Agents that coordinate other agents and subtasks rather than doing the specialist work themselves. | Module 3 |
| Knowledge graph | Contextual graph of business entities, relationships, and supporting data used to power richer reasoning. | Module 1 |
| KQL database | Supported analytical/event source type used in Fabric and Data Agent demos. | Modules 1-2 |
| MCP | Model Context Protocol, the open standard for AI tool/data discovery and invocation. | Module 3 |
| Mirroring | Replicating external data into Fabric in near real time. | Module 2 |
| OneLake | Unified storage layer in Fabric used as the foundation for data and context. | Modules 1-4 |
| Ontology | Shared, machine-understandable vocabulary describing business concepts, relationships, rules, and meaning. | Modules 1-2 |
| Ontology Graph Query | Query capability over ontology concepts, relationships, properties, and constraints. | Module 1 |
| Operations Agent | Agent concept focused on autonomous monitoring, reasoning, and action over operational signals. | Module 1 |
| Personal access token | Token used in the GitHub integration demo for connecting Fabric workspaces to repositories. | Module 4 |
| Power BI semantic model | Trusted semantic layer for BI, measures, and ontology bootstrapping. | Modules 1-4 |
| RAG | Earlier grounding pattern mentioned in the course before the emphasis shifted toward context engineering. | Modules 1-2 |
| RLS | Row-level security; limits which rows a user can see through agent experiences. | Modules 2-3 |
| Rules | Ontology logic used for event-driven alerting, monitoring, and action. | Module 1 |
| Semantic model | BI-oriented table/relationship/measure model used for reporting and as an ontology starting point. | Module 1 |
| Shortcuts | Virtualized OneLake references to external data without fully bringing data in. | Modules 1-2 |
| Trust score | Evaluation signal showing how reliably a Data Agent answers ground-truth questions. | Module 2 |
| UDF | User-defined function that extends Data Agents with custom business logic or actions. | Module 3 |
| Unified data foundation | The course’s phrase for the governed data base that enables AI, analytics, and agents. | Modules 1-2 |
| Work IQ | Microsoft 365 context layer in the Microsoft IQ stack. | Module 1 |

## Hands-on labs
- **Create an ontology from a semantic model**
  - **Objective:** Turn an existing semantic model into a richer business-context layer.
  - **Tools:** Power BI semantic model, Ontology item, Eventhouse/KQL, reports.
  - **Sequence of steps:** Generate Ontology → verify entity types → verify properties → verify bindings → verify/configure relationships → enrich entities with real-time and operational data.
- **Build an ontology directly from OneLake**
  - **Objective:** Manually model business entities when no semantic model is being used as the starting point.
  - **Tools:** Lakehouse, Ontology item, delta tables, Eventhouse.
  - **Sequence of steps:** Create ontology item → add entity types → bind source columns to properties → choose entity keys → create named relationships.
- **Create a basic Fabric Data Agent**
  - **Objective:** Enable natural-language access over OneLake data.
  - **Tools:** Fabric workspace, Data agent item, Lakehouse tables.
  - **Sequence of steps:** New item → Data agent → add data sources → select tables → ask sample questions → inspect generated query logic.
- **Configure a Fabric Data Agent for higher accuracy**
  - **Objective:** Improve behavior, routing, and answer quality.
  - **Tools:** Agent instructions, data source descriptions, data source instructions, example queries.
  - **Sequence of steps:** Add system-prompt-style instructions → describe each source → add source-specific operating guidance → add example question/query pairs → validate examples.
- **Evaluate a Fabric Data Agent with SDK**
  - **Objective:** Measure production readiness before broad rollout.
  - **Tools:** `fabric-data-agent-sdk`, ground truth dataset, evaluation functions.
  - **Sequence of steps:** Install SDK → load known questions/answers → run `evaluate_data_agent` → inspect summary/details → use diagnostics export if needed.
- **Use ontology as a Data Agent source**
  - **Objective:** Let the agent reason over semantic graph context instead of only disconnected tables.
  - **Tools:** Ontology, Fabric Data Agent.
  - **Sequence of steps:** Add ontology as data source → load entities → provide instructions → ask a natural-language question → inspect graph-based reasoning.
- **Consume a Data Agent outside Fabric**
  - **Objective:** Bring the same grounded reasoning into developer and business tools.
  - **Tools:** Microsoft Foundry, Copilot Studio, Microsoft 365 Copilot, VS Code via MCP, Python SDK, Power BI Copilot.
  - **Sequence of steps:** Publish agent → create connection/integration in target tool → add instructions or knowledge bindings → run questions in the target experience.
- **Connect a Fabric workspace to Git and pipeline it**
  - **Objective:** Put Data Agents into a repeatable SDLC/ALM process.
  - **Tools:** Git integration, GitHub or Azure DevOps, deployment pipelines.
  - **Sequence of steps:** Open workspace settings → configure provider, branch, folder, and credentials → Connect and Sync → review changes → use dev/test/prod promotion.

## Common pitfalls and gotchas
- Treating an **entity type** like a table instead of a logical business concept.
- Confusing ontology relationships with relational joins; ontology relationships carry meaning, not just matched keys.
- Assuming a Data Agent can overcome weak data foundations; the course repeatedly says the visible agent is only as good as the data/model beneath it.
- Skipping **agent instructions**, **data source instructions**, or **example queries** and expecting consistently accurate answers.
- Using poor example queries without validation.
- Forgetting that **unclear** evaluation results may be formatting/ambiguity issues rather than strictly wrong answers.
- Sharing a Data Agent and assuming recipients inherit the creator’s source-data permissions.
- Hard-coding workspace IDs or environment-specific values, which breaks promotion across environments.
- Editing the **published** folder directly in Git.
- Mixing tenants when the scenario requires the same tenant, especially for Copilot Studio and deployment pipelines.
- Forgetting publish state: several downstream capabilities only appear after the Data Agent is **published**.
- Treating shortcuts like full copies of data; they are virtual references.
- Forgetting that M365 Copilot may reshape Data Agent output through its own orchestrator unless you guide it with description/instructions.
- Underestimating the planning effort for ontology design; the demos look simple, but the course explicitly says good ontology design requires thought.

## Self-test questions
1. What are the five drivers of AI value presented in the course?
2. In the course framing, what is the difference between **Work IQ**, **Fabric IQ**, and **Foundry IQ**?
3. Why does the course say Fabric IQ is about **context engineering** rather than only storage or retrieval?
4. What is an **ontology** in Microsoft Fabric IQ?
5. Name the six ontology benefits called out in the module.
6. Why is an ontology not the same thing as a schema?
7. What is an **entity type**, and what does it standardize?
8. What role do **rules** play inside ontology, and which Fabric capability is linked to them?
9. What are the two main ways to create an ontology?
10. What are the manual build steps when creating ontology directly from OneLake?
11. When should you choose **semantic models** instead of ontology?
12. What does a Fabric Data Agent do at a high level?
13. What is checked first in the Data Agent request flow before query generation begins?
14. Which three configuration levers most directly improve Data Agent quality?
15. What are the main prerequisites/capacity requirements mentioned for using Data Agents?
16. What is the purpose of **example queries**?
17. What does `evaluate_data_agent` do, and what kind of dataset does it need?
18. What is the meaning of an **unclear** evaluation result?
19. What changes when a Data Agent uses **ontology** as a data source?
20. What is the difference between **mirroring** and **shortcuts**?
21. How does the course distinguish **Microsoft Foundry** from **Fabric**?
22. What is the difference between **declarative agents** and **hosted agents**?
23. What are the four programmatic steps shown for adding Fabric Data Agent capability in Foundry?
24. What prerequisites must be met before using a Fabric Data Agent in **Copilot Studio**?
25. In Microsoft 365 Copilot, what does the published Data Agent description become?
26. What does it mean for a Fabric Data Agent to act as an **MCP Server**?
27. What does it mean for a Fabric Data Agent to act as an **MCP Client**?
28. What is the basic Python client consumption flow for a Data Agent?
29. Why does the course emphasize **Git integration**, **deployment pipelines**, and **ALM** for Data Agents?
30. What minimum permission is required to query a **Power BI semantic model** through a Data Agent?
31. What minimum permission is required for an **ontology** data source?
32. Why are **environment-agnostic configuration patterns** important?

**Answer key**
1. Business strategy; organization and culture; AI strategy and experience; governance and security; technology and data strategy.
2. Work IQ covers work/activity context, Fabric IQ covers structured business-data context over OneLake, and Foundry IQ covers broader knowledge retrieval/synthesis.
3. Because the problem is not only storing or finding data; AI needs business meaning, relationships, and context to reason correctly.
4. A shared, machine-understandable vocabulary of the business that models concepts, properties, relationships, rules, and bindings.
5. Semantic foundation; reuse your semantic investments; enterprise-grade AI grounding; decision-ready AI actions; governance and trust; cross domain reasoning.
6. A schema describes structure; ontology describes meaning.
7. A reusable logical model of a real-world concept; it standardizes name, identifiers, properties, constraints, and rules/actions.
8. They automate/manage event-driven alerts and actions; the linked capability is Fabric Activator.
9. Generate from Semantic Model, or build directly from OneLake.
10. Create ontology item; create entity types; create data bindings; select entity keys; create relationship types and bind them.
11. When the goal is BI-style aggregations, measures, star/snowflake modeling, and dashboard/report consumption.
12. It acts as a virtual analyst that translates natural-language questions into governed queries over Fabric data sources and returns synthesized answers.
13. Enforcement mechanisms: permissions, allowed data, and governance/security constraints.
14. Agent instructions, data source instructions/descriptions, and example queries.
15. Paid F2 or higher, or P1 or higher with Fabric enabled; tenant settings enabled; supported data sources in place.
16. They provide high-quality reference logic so the agent can form better queries and responses.
17. It runs the agent against a ground truth dataset of known questions and expected answers and stores evaluation metrics/results.
18. The framework could not cleanly decide true/false, often because of ambiguity or formatting mismatch.
19. The agent can reason over ontology’s semantic graph and predefined entity relationships rather than inferring everything from raw tables.
20. Mirroring replicates data into Fabric in near real time; shortcuts reference external data virtually in OneLake.
21. Fabric is the data/intelligence foundation; Foundry is the application, orchestration, and operations layer for agents.
22. Declarative agents are specialist prompt/tool-driven agents; hosted agents orchestrate multiple agents and subtasks.
23. Create project client; create agent with Microsoft Fabric tool enabled; create thread; create run and inspect output.
24. The Data Agent must work, be published, be in the same tenant, use the same account context, and the user must have the required permissions plus underlying data access.
25. `description_for_model`.
26. It exposes the published Data Agent through a managed MCP endpoint so external AI tools can securely call it.
27. It consumes other tools/functions, such as UDFs or external services, to enhance answers and take actions.
28. Set up environment; install dependencies; configure/authenticate client; create Data Agent client; ask questions; optionally inspect steps/errors.
29. Because enterprise-scale agents need version control, repeatable promotion, safer testing, and governance across dev/test/prod.
30. **Build** (which includes Read).
31. **Read** on the ontology item plus Read on the bound underlying semantic model, lakehouse, or KQL database.
32. They let the same definitions move across environments without manual editing of workspace-specific values.
