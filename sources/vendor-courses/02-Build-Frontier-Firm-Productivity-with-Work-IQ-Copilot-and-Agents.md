# Build Frontier Firm Productivity with Work IQ, Copilot, and Agents
> LevelUp course ID: 2437897 | Phase: 2 - Project Ready | Duration: ~15 hours | Badge: Frontier Transformation Engineer (FTE)

## At a glance

- This course teaches how Microsoft 365 Copilot, Work IQ, and Copilot Studio agents combine to move an organization from a "productivity plateau" to a Frontier Firm, using a running case study of ZAVA Global Retail throughout every module.
- Work IQ is positioned as the foundational layer of AI infrastructure (Data, Context, Skills and Tools, plus Activity) that every Copilot experience and agent draws on; without it, agents are "smart but blind."
- M365 Copilot itself is explained through five pillars: Work IQ, Agentic Work, Multi-model, Agent Platform, and Security & Management — the course dedicates deep coverage to each.
- Licensing is covered in detail: Copilot Chat vs the paid M365 Copilot license, new Business bundles (GA December 1, 2025), and the brand-new E7 Frontier Suite that bundles E5 + Entra Suite + M365 Copilot + Agent 365.
- Agent 365 and cost/complexity controls (the P3 pre-purchase plan, credit packs, pay-as-you-go) are introduced as the answer to "agent sprawl" — unsanctioned, ungoverned proliferation of agents.
- Compliance and control are treated as a first-class requirement, not an afterthought: certifications (ISO 27000 family, ISO 42001), the Copilot Control System, oversharing remediation, and data residency options are all covered.
- The Five-Step Journey (Enable, Define Core Unit of Work, Prioritize/Scope, Validate, Assess & Scale) is presented as the repeatable methodology an FTE uses to drive Copilot from pilot to durable business impact.
- Three ways to extend Copilot are taught in depth: declarative agents and custom engine agents in Microsoft 365 Copilot, and full agent-building in Copilot Studio (generative orchestration, tools, multi-agent orchestration, Computer Use, MCP).
- Governance rounds out the course: Activity Map/Rationale for auditability, Entra Agent ID for agent identity, admin controls for connectors/MCP, and analytics/cost dashboards for measuring and controlling scale.
- Throughout, the instructor stresses that agent building is a spectrum (no-code Agent Builder → low-code Copilot Studio → pro-code Agents Toolkit/SDK, all sitting on Microsoft Foundry), and that choosing the right point on that spectrum is itself an exam-relevant skill.

## Module map

| # | Module Title | Purpose (one-line) |
|---|---|---|
| 1 | Build Agentic Productivity Platform with Microsoft 365 Copilot and Work IQ | Introduces the Frontier Firm vision, ZAVA case study, and the five pillars of M365 Copilot anchored on Work IQ |
| 2 | Copilot Pricing, Licensing and Business SKUs | Explains Copilot Chat vs paid licensing, new Business bundles, and how to size/purchase Copilot for an org |
| 3 | Control agent costs and complexity with Agent 365 and E7 | Introduces Agent 365 and the E7 Frontier Suite as the answer to agent sprawl and cost/complexity control |
| 4 | Copilot compliance and Control System | Covers certifications, the Copilot Control System, oversharing remediation, and data residency |
| 5 | From Enablement to Impact: The Five-Step Journey to Copilot Success | Gives the repeatable adoption methodology from enabling Copilot Chat through scaling agentic initiatives |
| 6 | Extend M365 Copilot with agents | Teaches declarative vs custom engine agents and the build spectrum for extending Copilot |
| 7 | Build your own agents using Copilot Studio | Deep dive on Copilot Studio: generative orchestration, tools, voice, multi-agent orchestration, evaluation |
| 8 | Build extensible agents with Copilot Studio tools and integrations | Covers connectors, MCP, agent flows, Computer Use, Foundry and Fabric integration, VS Code extension |
| 9 | Agent governance and control in Copilot Studio | Covers analytics, admin controls, runtime protection, Entra Agent ID, and cost management tooling |
| 10 | Post-training Skills Assessment | Knowledge-check assessment; no instructional content to summarize |

---

## 1. Build Agentic Productivity Platform with Microsoft 365 Copilot and Work IQ

**What it covers**
This opening module frames the entire course around the concept of the "Frontier Firm" and introduces ZAVA Global Retail as the case study that recurs throughout the course. It explains why organizations plateau in productivity after initial digital transformation, and it introduces Work IQ and the five pillars of Microsoft 365 Copilot (Work IQ, Agentic Work, Multi-model, Agent Platform, Security & Management) as the architecture that breaks through that plateau.

**Key concepts**
- Frontier Firm — an organization that has moved beyond simple AI tool adoption to embedding agents and Work IQ as core infrastructure for how work gets done.
- ZAVA Global Retail — the fictional case-study company used throughout the course.
- Productivity plateau — the stagnation period (2023-2025 for ZAVA) after earlier waves of growth/digitization.
- Microsoft Work Labs (November research) — source of the framing quotes used to justify the course's premise.
- Work IQ — Microsoft's four-layer model: Data, Context, Skills and Tools, plus Activity.
- Data layer — the raw organizational data Copilot and agents draw from (files, emails, chats, etc.).
- Context layer — signals about the user, their role, relationships, and current work state.
- Skills and Tools layer — the actions/capabilities agents can invoke (connectors, plugins, APIs).
- Activity — the layer capturing what is actually happening/being done across the organization, feeding back into Context.
- Five pillars of M365 Copilot: Work IQ, Agentic Work, Multi-model, Agent Platform, Security & Management.
- Agentic Work — the shift from Copilot as a chat assistant to Copilot orchestrating/executing multi-step agentic tasks.
- Multi-model — Copilot's ability to call multiple foundation model providers, not just one.
- Agent Platform — the built-in and extensible agent capabilities inside M365 Copilot.
- Security & Management — the governance/control layer wrapping all of the above.
- REST — protocol used for human-to-agent interaction.
- A2A (Agent-to-Agent) — protocol (created by Google) enabling agent-to-agent communication.
- MCP (Model Context Protocol) — protocol (created by Anthropic) enabling agent-to-tool communication.
- Cowork — a Frontier-preview-only agentic experience built with Anthropic; excluded from the EU Data Boundary and not GA.
- Agent 365 — referenced here as having gone GA on May 1st (fully detailed in Module 3).

**Detailed notes**
- The module opens by describing ZAVA Global Retail's history: founded 2003, grew from a West Coast retailer to a national chain by 2014, then expanded internationally into the UK, Germany, France, and the Netherlands. By 2022 ZAVA had become a fully omnichannel operation with 420 stores and 12 regional distribution centers, e-commerce running in 6 countries, roughly 18,000 employees, and about $9.5 billion in annual revenue, headquartered in Seattle.
- Despite this growth trajectory, ZAVA hit a "productivity plateau" between 2023 and 2025: growth in headcount and systems outpaced growth in actual output/efficiency. Key ZAVA people introduced: CIO Jonas Richter (sponsoring the AI transformation), store operations manager Rahul Mehta, IT applications lead Liam Chen, and engineer Jordan Lee. These personas recur across later modules to narrate specific scenarios (e.g., Rahul dealing with store-level workflow pain points, Liam evaluating architecture/build choices, Jordan doing hands-on implementation).
- The course leans on a November Microsoft Work Labs research report with three core framing statements used repeatedly: "the invisible must become visible," "AI must be infrastructure," and "the frontier is a continuum of practice." These are used to argue that (a) hidden/tacit work patterns must be surfaced through data and context, (b) AI capability must be built into the fabric of daily tools rather than bolted on, and (c) becoming a Frontier Firm is not a single finish line but an ongoing maturity journey.
- Two headline statistics anchor the module's business case: 46% of leaders surveyed who have moved to production say they are automating workflows (a proof point that agentic automation is now mainstream rather than experimental), and IDC projects 1.3 billion agents will be in production by 2028 — a scale argument for why governance and cost control (covered later in Modules 3, 4, and 9) matter from day one.
- Work IQ is explained as the layer that makes agents "aware" rather than "blind." The four described components are Data (what exists), Context (what it means for this person/situation), Skills and Tools (what can be done about it), and Activity (what is actually being done, which then feeds back to enrich Context over time — a continuous feedback loop rather than a static pipeline).
- Three protocols are introduced to describe how the pieces of this ecosystem talk to each other: REST for human-to-agent interactions (a user talking to Copilot/an agent), A2A (Agent-to-Agent, created by Google) for agent-to-agent communication (agents calling other agents), and MCP (Model Context Protocol, created by Anthropic) for agent-to-tool communication (an agent invoking an external tool/data source). The instructor is explicit about attributing A2A to Google and MCP to Anthropic — an important exam distinction since both are open protocols adopted by Microsoft rather than invented by Microsoft.
- The five pillars of M365 Copilot are each given a short definition: Work IQ (the knowledge/context foundation), Agentic Work (Copilot doing multi-step, autonomous-leaning work rather than just answering questions), Multi-model (support for multiple LLM providers, described further as OpenAI and Anthropic Claude models available in Copilot Chat since GA in March, plus 11,000+ models available through Microsoft Foundry for Copilot Studio-built agents), Agent Platform (the mechanisms — built-in agents and extensibility — for agents to operate inside Microsoft 365), and Security & Management (the wrapper of compliance, control, and governance that makes enterprise-scale agent deployment safe).
- Cowork is called out specifically as a new, Anthropic-co-built agentic experience that is currently Frontier-preview only (i.e., not generally available) and explicitly excluded from the EU Data Boundary — students are warned not to assume Cowork has the same availability/compliance profile as GA Copilot features.
- Agent 365 is mentioned as having reached general availability on May 1st, setting up its full treatment in Module 3 as the governance/cost-control layer for agent sprawl.

**Exam / assessment pointers**
- Know the exact ZAVA numbers: 18,000 employees, $9.5B revenue, 420 stores, 12 distribution centers, e-commerce in 6 countries, founded 2003.
- Be able to name all four Work IQ layers (Data, Context, Skills and Tools, Activity) and describe Activity as the feedback loop back into Context.
- Be able to name all five M365 Copilot pillars in order: Work IQ, Agentic Work, Multi-model, Agent Platform, Security & Management.
- Know which company created which protocol: A2A = Google, MCP = Anthropic, REST = pre-existing human-to-agent standard (not attributed to either).
- Remember Cowork is Frontier-preview-only, built with Anthropic, and excluded from the EU Data Boundary — a likely "true/false" trap.
- Remember the two headline stats: 46% (leaders automating workflows in production) and 1.3 billion (IDC's 2028 agent-in-production forecast).
- Agent 365 GA date: May 1st.

---

## 2. Copilot Pricing, Licensing and Business SKUs

**What it covers**
This module explains the commercial side of Copilot: the difference between free/pay-as-you-go Copilot Chat and the paid M365 Copilot license, the new Business-tier bundles that reached general availability December 1, 2025, and how organizations of different sizes should think about licensing.

**Key concepts**
- Microsoft 365 Copilot Chat — the free, pay-as-you-go conversational entry point to Copilot.
- Microsoft 365 Copilot (full license) — the $30/user/month (list price) paid license unlocking the full agentic/Work IQ experience.
- Microsoft 365 Copilot Business — a lower-cost tier for organizations of ≤300 seats, priced at $21/user/month.
- New Business bundles (GA December 1, 2025): M365 Business Basic + Copilot Business, M365 Business Standard+ (with Copilot), M365 Business Premium+ (with Copilot).
- List pricing for the bundles: Basic+Copilot Business $27/user/month; Standard+ $33.50/user/month; Premium+ $43/user/month.
- Seat cap — the ≤300 seat eligibility limit for the Business SKU family.

**Detailed notes**
- The module starts from the free tier: Microsoft 365 Copilot Chat is available at no additional license cost (pay-as-you-go) and is positioned as the "enablement" starting point referenced later in Module 5's Five-Step Journey (Step 1: Enable). This is the layer every employee can use immediately without a full Copilot license.
- The paid, full-featured Microsoft 365 Copilot license carries a list price of $30 per user per month and unlocks the complete Work IQ-powered, agentic experience (grounding in Microsoft Graph data, agent building, deeper integration) beyond what Copilot Chat offers.
- For smaller organizations (300 seats or fewer), Microsoft offers Microsoft 365 Copilot Business at $21/user/month — a lower price point specifically scoped to small/mid-size business eligibility rather than enterprise-wide deployment.
- The course highlights a set of new bundled SKUs reaching general availability on December 1, 2025, that combine core Microsoft 365 Business plans with Copilot Business capability at a blended price: M365 Business Basic + Copilot Business at $27/user/month, M365 Business Standard+ (i.e., Standard plus Copilot) at $33.50/user/month, and M365 Business Premium+ (Premium plus Copilot) at $43/user/month. These bundles are framed as simplifying procurement for smaller customers who would otherwise need to buy Microsoft 365 and Copilot as two separate line items.
- The instructor frames this pricing module as directly supporting the licensing/SKU decisions an FTE must make when scoping a Copilot rollout for a customer or their own org — i.e., matching organization size and existing M365 plan to the right bundle or a la carte licenses.

**Exam / assessment pointers**
- Memorize the exact prices: Copilot Chat = free/pay-as-you-go; full M365 Copilot = $30/user/month; M365 Copilot Business = $21/user/month (≤300 seats); Basic+Copilot Business = $27; Standard+ = $33.50; Premium+ = $43.
- Know the eligibility distinction: Copilot Business SKU family applies only to organizations with 300 seats or fewer.
- Know the GA date for the new bundles: December 1, 2025.
- Be ready to distinguish "Copilot Chat" (free entry point) from "Microsoft 365 Copilot" (full paid license) — a common conceptual trap.

---

## 3. Control agent costs and complexity with Agent 365 and E7

**What it covers**
This module tackles the operational risk of scaling agents: "agent sprawl," where unsanctioned or ungoverned agents proliferate across an organization. It introduces Agent 365 as the platform answer and the new Microsoft 365 E7 Frontier Suite as the licensing answer, bundling everything needed to run agents safely and cost-effectively at enterprise scale.

**Key concepts**
- Agent sprawl — uncontrolled proliferation of agents (sanctioned and unsanctioned) across an organization, raising cost, security, and governance risk.
- Agent 365 — Microsoft's platform for managing, securing, and governing the full lifecycle of agents; GA May 1st; $15/user/month standalone; included in E7.
- Microsoft 365 E7 Frontier Suite — first new enterprise licensing tier since E5 (which launched in 2015).
- E7 composition — E5 + Microsoft Entra Suite + Microsoft 365 Copilot + Agent 365, bundled together.
- E7 pricing — approximately $99/user/month with Teams included; approximately $90/user/month without Teams; prices effective July 1st.
- Bundle savings — approximately 15% savings versus purchasing the equivalent components separately.

**Detailed notes**
- The module opens with statistics illustrating why agent cost/complexity control is urgent: 29% of employees admit to using unsanctioned AI agents; 73% say data privacy/security is the biggest AI-related risk facing their organization; only 21% report having a mature governance model for autonomous agents in place; and only 26% strongly agree that their organization actively monitors AI agent usage. Together these numbers make the case that most organizations are exposed to agent sprawl risk today, not hypothetically.
- Agent 365 is introduced as the direct response: a platform to register, manage, secure, and govern agents across their lifecycle, analogous to how identity/device management platforms govern users and endpoints. It reached general availability on May 1st. As a standalone purchase it is priced at $15/user/month, but it is also bundled at no extra incremental cost inside the new E7 suite.
- The E7 Frontier Suite is called out as the first brand-new Microsoft 365 enterprise tier since E5 launched back in 2015 — a significant licensing milestone the course wants students to recognize by name. E7 bundles four things together: the existing E5 suite, the Microsoft Entra Suite (identity/security), Microsoft 365 Copilot (full license), and Agent 365.
- Pricing for E7: approximately $99/user/month when Teams is included, and approximately $90/user/month for organizations that already have Teams licensed elsewhere and don't need it bundled again. These prices take effect July 1st. The course frames buying E7 as delivering roughly a 15% savings compared to purchasing E5, Entra Suite, M365 Copilot, and Agent 365 as separate line items at their individual list prices.
- The pedagogical point tying this module together: cost and complexity control for agents is not just a technical governance problem (covered later in Module 9) but also a licensing/procurement decision — E7 is positioned as the "easy button" bundle for organizations that want Copilot + Agent 365 + Entra Suite without piecing it together manually.

**Exam / assessment pointers**
- Know Agent 365's GA date (May 1st) and both its standalone price ($15/user/month) and its inclusion in E7 at no extra cost.
- Know that E7 is the first new enterprise tier since E5 (2015) — a factual/trivia-style exam point.
- Memorize E7 composition: E5 + Entra Suite + M365 Copilot + Agent 365.
- Memorize E7 pricing: ~$99/user/month with Teams, ~$90/user/month without Teams, effective July 1st, ~15% bundle savings.
- Be able to explain agent sprawl and cite at least two of the four stats (29% unsanctioned agent use; 73% privacy/security concern; 21% mature governance; 26% actively monitor).

---

## 4. Copilot compliance and Control System

**What it covers**
This module covers the compliance certifications behind Copilot, the Copilot Control System as the umbrella governance framework, the oversharing problem and how to remediate it, and data residency options for regulated or geographically-constrained customers.

**Key concepts**
- Copilot Control System — Microsoft's umbrella framework of admin tools and controls for governing Copilot deployment (search/retrieval controls, oversharing remediation, reporting, agent management).
- Certifications covered: ISO 27000 family, ISO 42001 (AI management systems standard), GDPR, CCPA, HIPAA, FedRAMP, German C5. ISO 9001 explicitly called out as "not applicable" to Copilot's certification scope.
- Certification currency — the certification list is stated as current as of February 4, 2026.
- EU AI Act and NIST AI RMF — referenced as external governance/regulatory frameworks relevant to agent oversight.
- Oversharing — the risk that Copilot surfaces content a user technically already had permission to see but that was never properly access-controlled or was over-permissioned.
- Data Boundary / data residency — options controlling where Copilot processes and stores customer data.
- Three residency tiers: (1) local data storage only, (2) EU Data Boundary storage and processing, (3) local storage plus in-country processing.
- Local residency availability — offered in 27 countries.

**Detailed notes**
- The module begins with the certifications backing Copilot for enterprise trust: the ISO 27000 family (information security management), the newer ISO 42001 standard specifically for AI management systems, plus regulatory/compliance frameworks GDPR, CCPA, HIPAA, FedRAMP, and the German C5 standard. Notably, ISO 9001 (general quality management) is explicitly flagged as not applicable to Copilot's compliance scope — a deliberate distinction the instructor draws to prevent confusion with the more commonly recognized ISO 9001 certification. The certification list presented is stated to be accurate as of February 4, 2026, implying it should be treated as a snapshot rather than a permanently fixed list.
- Broader regulatory context is given via the EU AI Act and the NIST AI Risk Management Framework (AI RMF), both referenced as external frameworks organizations should align their own agent governance practices to, beyond whatever Microsoft certifies directly.
- The Copilot Control System is presented as the practical, hands-on toolset admins use day-to-day: it encompasses search and retrieval controls (what Copilot is allowed to ground answers in), oversharing remediation tools, usage reporting/analytics, and agent management capabilities — essentially the operational face of all the certifications and policies described elsewhere.
- Oversharing gets significant attention because it's described as the top concern raised by leaders: 80% of leaders cite data leakage as their main AI-related concern, 37% cite risky user detection as a top priority, and 82% cite identifying data exposure risk as a top mitigation strategy. The instructor stresses an important nuance: Copilot does not create oversharing — it reveals pre-existing oversharing (permission and labeling problems that existed in SharePoint/OneDrive/Teams long before Copilot arrived). This reframing is emphasized as a key talking point for customer conversations: the fix is proper access governance and information protection labeling, not blaming or disabling Copilot.
- Data residency and the Data Boundary are explained with three concrete tiers a customer can choose from: (1) local data storage only, where data at rest stays in-country/in-region but processing may occur elsewhere; (2) EU Data Boundary storage and processing, where both storage and processing of EU customer data stay within the EU boundary (this is the tier explicitly said to exclude Cowork, per Module 1); and (3) local storage plus in-country processing, the strictest tier keeping both storage and compute within the customer's own country. Local residency of this kind is stated to be available in 27 countries.
- Overall the module's throughline is: certifications establish trust externally, the Copilot Control System gives admins the levers internally, oversharing remediation is the most urgent practical risk to manage, and data residency options let regulated customers (public sector, EU entities, healthcare, etc.) choose the right storage/processing posture.

**Exam / assessment pointers**
- Be able to list the certifications: ISO 27000 family, ISO 42001, GDPR, CCPA, HIPAA, FedRAMP, German C5 — and know that ISO 9001 is explicitly NOT applicable.
- Remember the certification snapshot date: February 4, 2026.
- Know the key oversharing message: Copilot does not cause oversharing, it exposes existing oversharing — expect a scenario-based question testing this distinction.
- Memorize the oversharing stats: 80% (data leakage top concern), 37% (risky user detection top priority), 82% (data exposure risk identification top strategy).
- Know the three data residency tiers and that EU Data Boundary explicitly excludes Cowork.
- Know local residency is available in 27 countries.
- Recognize EU AI Act and NIST AI RMF as external frameworks referenced (not Microsoft certifications themselves).

---

## 5. From Enablement to Impact: The Five-Step Journey to Copilot Success

**What it covers**
This module lays out the instructor's core adoption methodology: a repeatable five-step journey that takes an organization from simply turning Copilot on to measurably scaling agentic initiatives for business impact. Each step is explained with its purpose, decision criteria, and how ZAVA applies it.

**Key concepts**
- Step 1: Enable — turning on Copilot Chat and preparing the workforce (training, communication, baseline adoption).
- Step 2: Define Core Unit of Work (CUoW) — identifying the discrete workflows and work patterns worth targeting with agents.
- Step 3: Prioritize and Scope — selecting which agentic initiatives to pursue and choosing a build path.
- Four build paths (Step 3): out-of-box agents, ready-to-configure agents, custom build, Agent Factory.
- Step 4: Validate — proving the concept via a Proof of Concept (POC, disposable/throwaway) or a Pilot (built on a production-track path).
- Step 5: Assess and Scale — measuring usage frequency and intensity, using Copilot analytics and Viva Pulse/Glint to decide whether/how to scale.
- Core Unit of Work (CUoW) — the smallest meaningful, repeatable chunk of work targeted for agentic transformation.
- Workflows vs. patterns — a distinction made when defining the Core Unit of Work (structured, repeatable workflows vs. more loosely repeated behavioral patterns).
- POC vs. Pilot — a POC is explicitly disposable/throwaway proof work; a Pilot is built with production intent from the start.

**Detailed notes**
- Step 1, Enable, is about establishing the baseline: rolling out Microsoft 365 Copilot Chat broadly, training the workforce, and building comfort/familiarity before attempting more ambitious agentic work. This directly ties back to Module 2's framing of Copilot Chat as the free, low-friction starting point.
- Step 2, Define Core Unit of Work, asks the organization to identify the actual repeatable unit of labor worth targeting — not "make ZAVA more productive" in the abstract, but a specific, bounded workflow or pattern (e.g., a specific store-ops reporting task, a specific customer service escalation pattern) that can be measured before and after automation. The module draws a distinction between workflows (formally defined, structured, step-based) and patterns (informally repeated behaviors that aren't yet documented as a workflow) — both are valid CUoW candidates, but they require different discovery approaches.
- Step 3, Prioritize and Scope, is where the organization decides which candidate CUoWs to pursue and how to build the solution. Four build paths are presented on a spectrum of effort and control: out-of-box agents (use what Microsoft/ISV already ships, no build required), ready-to-configure agents (light configuration of an existing agent template), custom build (using Copilot Studio or the Agents Toolkit/SDK to build bespoke agents — detailed in Modules 6-8), and Agent Factory (a more industrialized, repeatable production process for building many agents at scale, implying dedicated tooling/process rather than one-off builds). Scoping decisions at this step directly feed the architecture decisions covered in Module 6 (declarative vs custom engine).
- Step 4, Validate, distinguishes two validation vehicles: a Proof of Concept (POC), which is explicitly described as disposable/throwaway — built quickly to test feasibility/value with no expectation it becomes the production artifact — versus a Pilot, which is built on a production-track path from the outset, meaning the code/configuration produced during the pilot is intended to graduate directly into production rather than being rebuilt. The instructor stresses this distinction as a common area of confusion: teams sometimes treat a POC as if it were a pilot (and get frustrated when it can't simply be "promoted"), or over-invest pilot-grade rigor into what should have been a quick disposable POC.
- Step 5, Assess and Scale, is about deciding whether and how to expand a validated initiative. Two dimensions of usage are called out: frequency (how often the CUoW/agent is used) and intensity (how deeply/heavily it's used per interaction). Copilot analytics (native usage reporting) is the primary quantitative tool for this, supplemented by Viva Pulse and Viva Glint for qualitative/sentiment signals from employees about whether the change is actually landing well. Only once usage and sentiment data support it does the organization move to scale the initiative more broadly.
- The five steps are explicitly presented as a loop/journey rather than a strictly linear one-time process — successful CUoWs identified via Assess and Scale can feed back into new candidates at Step 2 as the organization matures, reinforcing the "frontier is a continuum of practice" framing from Module 1.

**Exam / assessment pointers**
- Memorize the five steps in order: Enable, Define Core Unit of Work, Prioritize/Scope, Validate, Assess and Scale.
- Know the four build paths under Step 3: out-of-box, ready-to-configure, custom build, Agent Factory.
- Be able to explain the POC vs Pilot distinction precisely: POC = disposable/throwaway; Pilot = production-track from the start. Expect a scenario question asking which one a described situation actually is.
- Know that Step 5 uses usage frequency and intensity plus Copilot analytics and Viva Pulse/Glint as its measurement toolkit.
- Understand workflows vs patterns as two types of Core Unit of Work candidates.

---

## 6. Extend M365 Copilot with agents

**What it covers**
This module introduces the two fundamental ways to extend Microsoft 365 Copilot with custom agents — declarative agents and custom engine agents — along with the full build spectrum (Agent Builder, Copilot Studio, Agents Toolkit/SDK, Microsoft Foundry) and the common anatomy every agent shares.

**Key concepts**
- Declarative agent — an agent that uses Copilot's own orchestrator and models; inherits Microsoft 365's existing security, compliance, and grounding automatically.
- Custom engine agent — an agent that brings its own orchestrator and/or models, giving full control but making the builder fully responsible for security/compliance/behavior.
- Agent Builder — the no-code entry point for building declarative agents.
- Copilot Studio — the low-code environment for building more sophisticated agents (both declarative-style and, with more work, custom engine style); the primary focus of Modules 7-9.
- Agents Toolkit / Agents SDK — the pro-code path for developers building custom engine agents (e.g., in VS Code, Node.js).
- Microsoft Foundry — the underlying model/AI platform beneath all of these build paths, providing access to a broad model catalog.
- Agent anatomy — the six common building blocks: Orchestrator, Knowledge, Skills, Autonomy, Foundation models, Connections.
- API plugins — a mechanism for connecting declarative agents to external APIs.
- Connectors — a mechanism for grounding agents in external data sources.

**Detailed notes**
- The module's central architectural decision is declarative vs custom engine. A declarative agent is essentially a configuration layered on top of Microsoft 365 Copilot's existing orchestrator and model stack: you declare instructions, knowledge sources, and capabilities, and Copilot's own runtime handles orchestration, security, and compliance inheritance automatically. This makes declarative agents fast to build and inherently compliant with the org's existing Microsoft 365 security/compliance posture (the certifications and Control System from Module 4 apply automatically).
- A custom engine agent, by contrast, brings its own orchestrator and/or its own choice of foundation models — the builder has full control over reasoning logic, model selection, and behavior, but also inherits full responsibility for ensuring that agent meets the organization's security, compliance, and data handling requirements, since it is not automatically wrapped by Copilot's built-in guardrails the way a declarative agent is.
- The build spectrum is presented as four rungs of increasing power and complexity: Agent Builder (a no-code tool, fastest to use, most constrained), Copilot Studio (low-code, the course's main focus for Modules 7-9, supports both simple declarative-style agents and more complex generative-orchestration agents), Agents Toolkit/Agents SDK (a pro-code path, used by professional developers, e.g., in VS Code with Node.js, to build fully custom engine agents with maximum flexibility), and underneath all of these, Microsoft Foundry, which supplies the actual foundation models (including the 11,000+ models referenced in Module 1) that any of these build paths can call.
- Every agent, regardless of where it sits on the build spectrum, is described as sharing a common anatomy of six parts: Orchestrator (decides what to do and in what order), Knowledge (the grounding data/sources the agent can reference), Skills (the actions/capabilities it can perform), Autonomy (how independently it can act — from fully human-triggered to event-triggered/autonomous), Foundation models (the underlying LLM(s) powering reasoning/generation), and Connections (the external systems/APIs/connectors it is wired into).
- The module also introduces two specific extension mechanisms for declarative agents: API plugins, which let a declarative agent call out to external APIs to fetch data or take action, and connectors, which ground an agent in external data sources (e.g., line-of-business systems, SharePoint, third-party services) so its answers/actions are informed by that data.
- A demo-style walkthrough is referenced in which a declarative agent is built and configured (adding instructions, a knowledge source, and an API plugin) to illustrate the no-code/low-code experience in practice, setting up the more detailed Copilot Studio content in Module 7.

**Exam / assessment pointers**
- Be able to state the core tradeoff crisply: declarative agents inherit M365 security/compliance automatically (less control, faster, safer by default); custom engine agents give full control over orchestrator/models but the builder owns compliance responsibility.
- Know the four rungs of the build spectrum in order of code-intensity: Agent Builder (no-code) → Copilot Studio (low-code) → Agents Toolkit/SDK (pro-code) → Microsoft Foundry (underlying models for all of them).
- Memorize the six-part agent anatomy: Orchestrator, Knowledge, Skills, Autonomy, Foundation models, Connections.
- Know that API plugins connect declarative agents to external APIs, while connectors ground agents in external data sources — a likely "which mechanism does X" question.
- Expect scenario questions asking you to pick declarative vs custom engine given a described requirement (e.g., "needs full model control and will manage its own compliance" = custom engine; "needs to move fast and stay within existing M365 compliance" = declarative).

---

## 7. Build your own agents using Copilot Studio

**What it covers**
This module is a deep dive into Copilot Studio itself: how generative orchestration works, the tools an agent can use, multichannel and voice capabilities, multi-agent orchestration, event-driven autonomy, agent evaluation, and the Copilot Studio Kit of supporting utilities.

**Key concepts**
- Generative orchestration — the agent dynamically chooses which tools, knowledge sources, topics, or child agents to use at runtime, rather than following a hand-built, fixed conversation path.
- Classic/topic-based orchestration — the older approach of manually building fixed topic paths (contrasted with generative orchestration).
- Deep reasoning — a capability for handling complex, multi-step decisions that require more than single-turn tool selection.
- Tools — the umbrella term for everything an agent can call: connectors, MCP servers, REST APIs, agent flows, web search, prompts-as-tools, code interpreter, and Computer Use.
- Computer Use — a tool allowing an agent to operate a computer/UI directly; GA since May 13; costs approximately 5 Copilot credits per step; excluded from sovereign clouds; requires generative orchestration to be enabled.
- Voice agents — agents that can operate over voice channels, supporting SSML (Speech Synthesis Markup Language), DTMF (dual-tone multi-frequency, i.e., phone keypad input), and barge-in (letting a caller interrupt the agent while it's speaking).
- Multi-agent orchestration — a parent agent coordinating one or more child agents to complete a task.
- Event triggers — a mechanism for making an agent autonomous, i.e., acting when a defined event occurs rather than only when directly prompted by a user.
- Agent evaluation — an 8-step methodology for testing/validating agent quality, described by the instructor as the single most important capability to master.
- Copilot Studio Kit — a supplementary toolkit including utilities like the Agent Value Dashboard, Compliance Hub, and Prompt Advisor.

**Detailed notes**
- Generative orchestration is presented as the defining shift in how Copilot Studio agents work today versus the classic model. In the classic/topic-based approach, a builder manually constructs conversation paths ("topics") the agent follows in fixed sequences. With generative orchestration, the agent's underlying model dynamically decides, at runtime, which tool, knowledge source, topic, or even which child agent is the right one to use for a given user request — removing the need to anticipate and hand-build every possible path. This is described as fundamentally more flexible for unpredictable, open-ended work, though it requires more careful tool/knowledge design and evaluation (hence the emphasis on agent evaluation later in the module) since behavior is less deterministic than classic topics.
- Deep reasoning is introduced as a related but distinct capability for handling complex, multi-step decision-making that goes beyond simple single-step tool selection — used when an agent needs to work through a chain of sub-decisions before arriving at an action or answer.
- Tools are enumerated as the full menu an agent can be equipped with: connectors (pre-built integrations to external systems), MCP servers (Model Context Protocol servers exposing external tools/data, detailed further in Module 8), REST APIs (direct API calls), agent flows (deterministic workflow automation, detailed in Module 8), web search (grounding in live web results), prompts-as-tools (reusable prompt templates callable as a discrete tool), code interpreter (for running code, e.g., data analysis/calculations), and Computer Use.
- Computer Use is given specific operational detail: it became generally available on May 13, it consumes approximately 5 Copilot credits per step it takes (an important cost-control data point tying back to Modules 3/9), it is excluded from sovereign cloud environments, and it requires generative orchestration to be enabled on the agent before it can be used — a dependency the instructor flags explicitly as something students might overlook when troubleshooting why Computer Use isn't available on an agent.
- Voice agent capability is described with three specific technical features: SSML for controlling how synthesized speech sounds (pacing, emphasis, pronunciation), DTMF support so callers can respond using phone keypad tones (useful for menu-driven IVR-style flows), and barge-in, which allows a caller to interrupt the agent mid-sentence rather than having to wait for it to finish speaking — all aimed at making voice agents feel natural in real telephony scenarios.
- Multi-agent orchestration lets a "parent" agent delegate parts of a task to one or more "child" agents, each potentially specialized for a sub-domain, with the parent coordinating the overall conversation/task and stitching together the child agents' outputs.
- Event triggers are described as the mechanism that gives an agent autonomy — instead of only responding when a user directly messages it, an agent can be configured to spring into action when a defined event occurs (e.g., a new record appearing in a system, a scheduled time, a status change), enabling proactive rather than purely reactive agent behavior.
- Agent evaluation is called out by the instructor as the single most important capability in the whole module — an 8-step method for systematically testing and validating that an agent behaves correctly, safely, and effectively before and after it is put into production, especially important given the less-deterministic nature of generative orchestration. (The specific 8 steps themselves are referenced as a methodology but the module emphasizes the criticality of the discipline overall — i.e., every agent build should go through this evaluation process, not skip straight to publishing.)
- The Copilot Studio Kit is introduced as a bundle of supporting tools for managing agents at scale, including (at minimum) an Agent Value Dashboard (measuring business value/ROI of agents), a Compliance Hub (centralizing compliance checks/status across agents), and a Prompt Advisor (helping refine/optimize agent prompts) — positioning the Kit as an operational add-on layer on top of core Copilot Studio.

**Exam / assessment pointers**
- Be able to contrast generative orchestration (dynamic, runtime tool/topic/agent selection) with classic topic-based orchestration (fixed, hand-built paths) — a near-certain exam distinction.
- Memorize the Computer Use facts: GA May 13, ~5 credits/step, excluded from sovereign clouds, requires generative orchestration enabled — expect a "why isn't Computer Use available" troubleshooting-style question testing the generative orchestration dependency specifically.
- Know the three voice agent features: SSML, DTMF, barge-in.
- Understand multi-agent orchestration as parent/child agent delegation, distinct from a single agent simply calling a tool.
- Know that event triggers are what create agent autonomy (vs. purely reactive user-triggered behavior).
- Remember the instructor's emphasis: agent evaluation (8-step method) is presented as the single most important capability in this module — expect this framing to appear directly in a knowledge check.
- Be able to name at least the Agent Value Dashboard, Compliance Hub, and Prompt Advisor as parts of the Copilot Studio Kit.

---

## 8. Build extensible agents with Copilot Studio tools and integrations

**What it covers**
This module goes deeper into the specific tools and integrations available to Copilot Studio agents: custom connectors, MCP in detail (including publishing agents as MCP endpoints), agent flows/workflows, multi-stage approvals, Computer Use setup and guardrails, prompts and Foundry models, code interpreter, search tools, Foundry/Fabric integration, and the Copilot Studio VS Code extension.

**Key concepts**
- Custom connectors — connectors built by wrapping Power Automate/Power Apps connector definitions, used when no pre-built connector exists for a target system.
- MCP (Model Context Protocol) — an open protocol created by Anthropic, based on a host/client/server model, for connecting agents to external tools and data.
- Agents-as-MCP — the capability (private preview) to publish any Copilot Studio agent itself as an MCP endpoint that other agents/hosts can call.
- Work IQ MCP server — a specific MCP server exposing Work IQ data/capabilities to agents.
- Agent flows / workflows — deterministic, step-based automation (contrasted with generative orchestration, which is used for unpredictable/open-ended work).
- Multi-stage approvals — a workflow pattern combining manual approval stages, an AI-driven approval stage, and conditional logic.
- Request for Information (RFI) action — a workflow action for requesting additional information mid-process.
- Computer Use setup — a 4-step process: add the tool, configure the prompt, test it, view run history.
- Computer Use guardrails — machine management, access control, credential handling via Key Vault, and human supervision.
- Prompts as tools — reusable prompt templates that can be invoked as a discrete tool by an agent.
- Foundry models for Prompts — the ability to select from Microsoft Foundry's model catalog specifically when building a prompt-as-tool.
- Code Interpreter — a tool for executing code (e.g., calculations, data manipulation) within an agent's workflow.
- Create search query / Custom search topic — tools for building more controlled search behavior into an agent.
- Copilot Studio + Foundry integration — bringing your own model, your own knowledge source, or your own agent from Foundry into Copilot Studio.
- Fabric Data Agents — described as a "virtual analyst"; built on OneLake and Fabric IQ (via an Ontology layer).
- Copilot Studio VS Code extension — enables a clone/edit-YAML/deploy development workflow for agents directly from Visual Studio Code.

**Detailed notes**
- Custom connectors are explained as the fallback mechanism when no first-party or pre-built connector exists for the system an agent needs to reach: a builder wraps a Power Automate or Power Apps custom connector definition so it becomes usable inside a Copilot Studio agent's tool list, extending reach to essentially any system with an accessible API.
- MCP is revisited in much greater depth here than in Module 1: it's an open protocol, created by Anthropic, structured around a host/client/server model — the "host" being the environment running the agent, the "client" being the MCP-aware component that talks to servers, and the "server" being the external system exposing tools/data via the MCP standard. A significant capability highlighted is Agents-as-MCP (currently private preview): any agent built in Copilot Studio can itself be published as an MCP server/endpoint, meaning other agents or MCP-aware hosts can call it as a tool — turning agent composition into a two-way street (agents can consume MCP servers and also become one). The Work IQ MCP server is called out specifically as an example MCP server exposing Work IQ's data/context capabilities to any MCP-compatible agent.
- Agent flows (also called workflows) are contrasted directly with the generative orchestration model from Module 7: agent flows are deterministic and step-based, ideal for well-understood, repeatable business processes where the sequence of steps is known in advance, whereas generative orchestration is reserved for unpredictable, open-ended work where the right path can't be hard-coded. A concrete workflow pattern demonstrated is multi-stage approvals, combining a manual human approval stage, an AI-driven approval/evaluation stage, and conditional branching logic — plus a specific action called Request for Information (RFI), used mid-workflow to pause and request additional information from a participant before continuing.
- Computer Use is given a practical, step-by-step treatment here (building on the conceptual introduction in Module 7): setup involves four steps — (1) add the Computer Use tool to the agent, (2) configure the prompt/instructions describing what the agent should do on-screen, (3) test the configured behavior, and (4) view run history to review what actions were actually taken. Guardrails specifically called out for Computer Use include machine management (controlling which machines/environments the agent can operate), access control (restricting what the agent's Computer Use session can reach), credential handling via Azure Key Vault (so secrets aren't hard-coded into the agent), and human supervision (ensuring a person can monitor/intervene in Computer Use sessions rather than leaving them fully unattended).
- Prompts as tools lets a builder package a reusable prompt template as a discrete, callable tool within an agent, and a related capability, Foundry models for Prompts, lets that prompt-as-tool select which model (from Foundry's broad catalog) should execute it, rather than being locked to a single default model.
- Code Interpreter is described as a tool letting the agent execute code — useful for calculations, data transformations, or other logic that's easier to solve programmatically than via pure language reasoning.
- Two further search-related tools are introduced: Create search query (letting an agent construct a more precise/controlled search query rather than relying purely on generative interpretation) and Custom search topic (a configurable search-scoped topic), both aimed at giving builders finer control over search behavior than default generative search grounding.
- The Copilot Studio + Foundry integration is explained as a "bring your own" model: builders can bring their own model (choosing from Foundry's catalog rather than Copilot Studio defaults), bring their own knowledge source (grounding via Foundry-managed knowledge), or even bring their own agent built in Foundry into a Copilot Studio experience — blurring the line between the two platforms and letting advanced builders mix and match capabilities from both.
- Fabric Data Agents are introduced as a "virtual analyst" capability — an agent that can answer analytical questions grounded directly in an organization's Fabric data estate. It's built on OneLake (Fabric's unified data lake) and leverages Fabric IQ via an Ontology layer, meaning the agent understands not just raw data but the semantic relationships (the ontology) describing what that data means, enabling more accurate, business-context-aware analytical answers.
- Finally, the Copilot Studio VS Code extension is introduced as a professional developer workflow: a builder can clone an agent's definition, edit its underlying YAML configuration directly in Visual Studio Code (rather than only through the Copilot Studio web UI), and then deploy the changes back — enabling source-control-friendly, code-first iteration on agents for teams that prefer a pro-code development loop.

**Exam / assessment pointers**
- Remember MCP is an Anthropic-created open protocol using a host/client/server model — same attribution as Module 1, reinforced here.
- Know Agents-as-MCP is currently in private preview — a status likely to be tested (don't say GA).
- Be able to distinguish agent flows/workflows (deterministic) from generative orchestration (dynamic) — this recurs from Module 7 and is a strong exam theme across both modules.
- Memorize the Computer Use 4-step setup sequence: add tool → configure prompt → test → view run history.
- Memorize the four Computer Use guardrail categories: machine management, access control, credentials via Key Vault, human supervision.
- Know the RFI (Request for Information) action name specifically as a multi-stage approval workflow feature.
- Understand the three "bring your own" Foundry integration options: model, knowledge, or agent.
- Know Fabric Data Agents are called a "virtual analyst," built on OneLake, using Fabric IQ via an Ontology layer.
- Know the VS Code extension workflow: clone → edit YAML → deploy.

---

## 9. Agent governance and control in Copilot Studio

**What it covers**
This final content module closes the loop on governance: how to observe and audit agent behavior (Activity Map, Rationale, analytics), how to control what agents can connect to (admin controls for connectors/MCP), how runtime protection and identity work (prompt injection protection, Entra Agent ID), and how to manage and forecast agent costs (credit models, the Estimator tool, savings calculator).

**Key concepts**
- Activity Map — a visualization of what an agent has actually done/is doing.
- Rationale — auto-generated explanations of why an agent took a given action, supporting auditability.
- Analytics page / Topic analytics — built-in reporting on agent usage and per-topic performance within Copilot Studio.
- Advanced Connector Policies — admin-level policy controls governing which connectors agents are allowed to use.
- Environment / environment group blocking — the ability to block certain connectors or MCP servers at the environment or environment-group level.
- Agent runtime protection — includes prompt injection protection and advanced monitoring.
- Prompt injection protection — safeguards against malicious inputs attempting to hijack an agent's instructions.
- Advanced monitoring via Microsoft Defender — extending Defender's security monitoring to agent runtime behavior.
- Audit logs — records of agent actions for compliance/security review.
- Microsoft Information Protection (MIP) labels — sensitivity labels that flow through to and are respected by agents.
- Microsoft Entra Agent ID — a distinct identity assigned to each agent; auto-creation has been the default since March 18.
- Cost controls — three payment models: Copilot Credit Packs, Pay-as-you-go, and the Pre-purchase plan ("P3").
- Copilot Credit Packs — 25,000 credits for $200/month, applied tenant-wide.
- Pay-as-you-go — $0.01 per credit, with no upfront commitment.
- Pre-purchase plan (P3) — offers the best per-credit rate, intended for organizations with high, predictable committed usage.
- Copilot Studio Estimator — a tool (aka.ms/CopilotStudioEstimator) for forecasting agent costs before deployment.
- Built-in savings calculator — a tool for estimating ROI/savings from agent deployment.

**Detailed notes**
- Governance and observability tools open the module: the Activity Map gives a visual map of what an agent has done across its operation, and Rationale provides auto-generated, human-readable explanations for why the agent took specific actions — together these give admins and builders the ability to audit agent behavior after the fact rather than treating the agent as a black box. The Analytics page (and its more granular Topic analytics view) rounds this out with quantitative usage reporting, letting teams see how heavily specific topics/capabilities within an agent are actually being used — directly supporting the Assess and Scale step from Module 5's Five-Step Journey.
- Admin-level connector and MCP governance is covered via Advanced Connector Policies, which let administrators define policy rules about which connectors are permitted for agent use across the tenant, and environment / environment group blocking, which allows connectors or MCP servers to be explicitly blocked at the environment or environment-group level — giving admins a layered way to restrict agent reach (tenant-wide policy plus environment-specific overrides) rather than relying on a single blunt on/off switch.
- Agent runtime protection is described as covering both prompt injection protection (defending against malicious or manipulative inputs designed to override an agent's original instructions or exfiltrate data) and advanced monitoring, delivered via integration with Microsoft Defender, extending Microsoft's existing security monitoring stack to cover agent runtime behavior specifically. Audit logs capture agent actions for later compliance and security review, closing the loop between real-time protection and after-the-fact accountability.
- Microsoft Information Protection (MIP) sensitivity labels are explicitly called out as flowing through to agents — meaning if a document or data source is labeled (e.g., Confidential), that label's protections are respected by agents interacting with that content, rather than being stripped away when data passes through an agent's processing.
- Microsoft Entra Agent ID gives every agent its own distinct identity within Microsoft Entra, similar to how human users and service principals have identities — this enables per-agent access control, auditing, and lifecycle management. The module notes that automatic creation of an Entra Agent ID for new agents has been the default behavior since March 18, meaning admins no longer need to manually provision an identity for each new agent — it happens automatically.
- Cost management is explained through three distinct payment models. Copilot Credit Packs provide 25,000 credits for $200 per month, applied tenant-wide (a shared pool rather than per-user allocation) — suited to moderate, predictable consumption. Pay-as-you-go charges $0.01 per credit with no upfront commitment, suited to unpredictable or low-volume usage where a commitment isn't justified. The Pre-purchase plan, referred to by the shorthand "P3," offers the best per-credit rate of the three options but requires the organization to commit to high volumes of usage up front — making it the most cost-efficient choice only for organizations that are confident in sustained, heavy agent usage.
- To help organizations choose between these models and size their purchase correctly, the Copilot Studio Estimator (available at aka.ms/CopilotStudioEstimator) lets teams forecast expected credit consumption before committing to a specific plan. A built-in savings calculator is also referenced, letting organizations model the expected ROI/savings from deploying agents (e.g., time saved multiplied across employees) — connecting the cost-control theme of this module back to the business-case framing that opened the whole course in Module 1.

**Exam / assessment pointers**
- Distinguish Activity Map (what happened) from Rationale (why it happened) — likely a matching-style question.
- Know that MIP sensitivity labels flow through to and are respected by agents — a compliance-adjacent fact tying back to Module 4.
- Know Entra Agent ID auto-creation has been the default since March 18 — a specific date likely tested.
- Memorize the three cost/payment models and their exact terms: Credit Packs (25,000 credits / $200 per month, tenant-wide), Pay-as-you-go ($0.01/credit, no commitment), Pre-purchase plan/P3 (best rate, requires high committed usage).
- Know the Estimator tool's URL shorthand: aka.ms/CopilotStudioEstimator.
- Be able to distinguish Advanced Connector Policies (tenant-wide policy) from environment/environment group blocking (scoped blocking) as two different governance levers.
- Understand agent runtime protection has two named components: prompt injection protection and advanced monitoring (via Microsoft Defender).

---

## Key terminology

| Term | Definition | Where it appears |
|---|---|---|
| A2A (Agent-to-Agent) | Protocol created by Google enabling agent-to-agent communication | Module 1 |
| Activity | Work IQ layer capturing what is actually happening, feeding back into Context | Module 1 |
| Activity Map | Visualization of what an agent has done | Module 9 |
| Advanced Connector Policies | Tenant-level admin policy controlling which connectors agents may use | Module 9 |
| Agent 365 | Microsoft's platform for managing/securing/governing agents; GA May 1st, $15/user/month, included in E7 | Modules 1, 3 |
| Agent Builder | No-code entry point for building declarative agents | Module 6 |
| Agent evaluation | 8-step methodology for testing/validating agent quality; called the most important capability in Module 7 | Module 7 |
| Agent Factory | Industrialized, repeatable build path for producing many agents at scale | Module 5 |
| Agent flows / workflows | Deterministic, step-based automation, contrasted with generative orchestration | Modules 7, 8 |
| Agent sprawl | Uncontrolled proliferation of sanctioned/unsanctioned agents across an org | Module 3 |
| Agent Value Dashboard | Copilot Studio Kit tool measuring business value/ROI of agents | Module 7 |
| Agents Toolkit / SDK | Pro-code path for building custom engine agents | Module 6 |
| Agents-as-MCP | Capability (private preview) to publish a Copilot Studio agent as an MCP endpoint | Module 8 |
| Agent runtime protection | Prompt injection protection plus advanced monitoring for agents at runtime | Module 9 |
| Audit logs | Records of agent actions for compliance/security review | Module 9 |
| Barge-in | Voice agent feature letting a caller interrupt the agent mid-speech | Module 7 |
| Code Interpreter | Tool letting an agent execute code | Module 8 |
| Computer Use | Tool letting an agent operate a computer/UI; GA May 13; ~5 credits/step; excludes sovereign clouds; requires generative orchestration | Modules 7, 8 |
| Compliance Hub | Copilot Studio Kit tool centralizing compliance status across agents | Module 7 |
| Connectors | Pre-built integrations grounding agents in external data sources | Modules 1, 6, 8 |
| Context | Work IQ layer describing signals about user/role/situation | Module 1 |
| Core Unit of Work (CUoW) | The discrete, measurable workflow/pattern targeted for agentic transformation | Module 5 |
| Cowork | Frontier-preview-only agentic experience built with Anthropic; excluded from EU Data Boundary | Module 1 |
| Create search query | Tool letting an agent build a controlled/precise search query | Module 8 |
| Custom connectors | Connectors built by wrapping Power Automate/Power Apps connector definitions | Module 8 |
| Custom engine agent | Agent bringing its own orchestrator/models; full control, full compliance responsibility | Module 6 |
| Custom search topic | Configurable, search-scoped topic in an agent | Module 8 |
| Data | Work IQ layer: the raw organizational data agents draw from | Module 1 |
| Data Boundary | Boundary controlling where customer data is stored/processed (e.g., EU Data Boundary) | Modules 1, 4 |
| Deep reasoning | Capability for handling complex, multi-step agent decisions | Module 7 |
| Declarative agent | Agent using Copilot's own orchestrator/models; inherits M365 security/compliance | Module 6 |
| DTMF | Dual-tone multi-frequency; phone keypad input support for voice agents | Module 7 |
| E7 Frontier Suite | New enterprise tier (first since E5/2015) bundling E5 + Entra Suite + M365 Copilot + Agent 365 | Module 3 |
| Entra Agent ID | Distinct identity assigned to each agent; auto-creation default since March 18 | Module 9 |
| Fabric Data Agents | "Virtual analyst" agents built on OneLake and Fabric IQ via an Ontology layer | Module 8 |
| Foundry models for Prompts | Ability to pick a Foundry catalog model for a specific prompt-as-tool | Module 8 |
| Generative orchestration | Agent dynamically selects tools/knowledge/topics/agents at runtime | Module 7 |
| Microsoft Foundry | Underlying model/AI platform (11,000+ models) beneath all agent build paths | Modules 1, 6, 8 |
| Microsoft Information Protection (MIP) labels | Sensitivity labels that flow through to and are respected by agents | Module 9 |
| Multi-agent orchestration | A parent agent coordinating one or more child agents | Module 7 |
| Multi-model | M365 Copilot pillar: support for multiple foundation model providers | Module 1 |
| MCP (Model Context Protocol) | Open protocol created by Anthropic for agent-to-tool communication, host/client/server model | Modules 1, 8 |
| Oversharing | Risk that Copilot surfaces pre-existing, improperly access-controlled content | Module 4 |
| P3 (Pre-purchase plan) | Cost model offering the best per-credit rate for high committed usage | Module 9 |
| Pay-as-you-go (Copilot credits) | $0.01 per credit, no upfront commitment | Module 9 |
| POC (Proof of Concept) | Disposable/throwaway validation build | Module 5 |
| Pilot | Production-track validation build intended to graduate to production | Module 5 |
| Prompts as tools | Reusable prompt templates callable as a discrete agent tool | Module 8 |
| Rationale | Auto-generated explanation of why an agent took an action | Module 9 |
| REST | Protocol for human-to-agent interaction | Module 1 |
| RFI (Request for Information) | Workflow action requesting additional information mid-process | Module 8 |
| Skills and Tools | Work IQ layer: the actions/capabilities agents can invoke | Module 1 |
| SSML | Speech Synthesis Markup Language, controlling synthesized speech for voice agents | Module 7 |
| Tools | Umbrella term for connectors, MCP servers, REST APIs, agent flows, web search, prompts-as-tools, code interpreter, Computer Use | Module 7 |
| Topic analytics | Granular analytics on per-topic agent performance | Module 9 |
| Work IQ | Four-layer foundation (Data, Context, Skills and Tools, Activity) underlying Copilot/agents | Modules 1, 8 |
| Work IQ MCP server | Specific MCP server exposing Work IQ data/capabilities to agents | Module 8 |
| ZAVA Global Retail | Fictional case-study company used throughout the course | Module 1 (recurring) |

## Hands-on labs

The source narration walks through several demo-style, hands-on sequences illustrating the concepts taught. These are summarized as labs below.

**Lab: Building a declarative agent with Agent Builder / Copilot Studio (Module 6)**
- Objective: Show how quickly a declarative agent can be created and configured using instructions, a knowledge source, and an API plugin.
- Tools used: Agent Builder / Copilot Studio.
- Steps: (1) Create a new agent and provide natural-language instructions describing its purpose. (2) Attach a knowledge source for grounding. (3) Add an API plugin to extend the agent's reach to an external system. (4) Test the agent's responses against the configured knowledge/plugin.

**Lab: Configuring generative orchestration and tools (Module 7)**
- Objective: Demonstrate how enabling generative orchestration changes agent behavior from fixed topic paths to dynamic tool/topic selection.
- Tools used: Copilot Studio.
- Steps: (1) Enable generative orchestration on an agent. (2) Add a mix of tools (connector, MCP server, agent flow, prompt-as-tool). (3) Observe the agent dynamically selecting the right tool for varied user requests rather than following a single fixed path.

**Lab: Setting up a voice agent (Module 7)**
- Objective: Configure an agent for a voice channel with natural conversational behavior.
- Tools used: Copilot Studio voice channel configuration.
- Steps: (1) Enable the voice channel on the agent. (2) Configure SSML for speech behavior. (3) Configure DTMF handling for keypad input. (4) Enable barge-in so callers can interrupt the agent mid-response.

**Lab: Multi-agent orchestration setup (Module 7)**
- Objective: Show a parent agent delegating to child agents.
- Tools used: Copilot Studio.
- Steps: (1) Build or identify one or more child agents each scoped to a sub-domain. (2) Configure a parent agent to reference the child agents. (3) Test a request that requires the parent to route work to the appropriate child agent and combine results.

**Lab: Adding an MCP server and publishing Agents-as-MCP (Module 8)**
- Objective: Connect an agent to an external MCP server and separately publish an existing agent as an MCP endpoint.
- Tools used: Copilot Studio, MCP tooling (private preview for Agents-as-MCP).
- Steps: (1) Add an MCP server (e.g., the Work IQ MCP server) as a tool on an agent. (2) Test tool invocation via the MCP connection. (3) Separately, enable the Agents-as-MCP preview capability on a built agent so it can be called as an MCP server by another host/agent.

**Lab: Building a multi-stage approval agent flow (Module 8)**
- Objective: Build a deterministic workflow combining manual and AI-driven approval stages with conditional logic.
- Tools used: Copilot Studio agent flows.
- Steps: (1) Create a new agent flow. (2) Add a manual approval stage. (3) Add an AI-driven approval/evaluation stage. (4) Add conditional branching logic. (5) Insert a Request for Information (RFI) action to pause and collect additional data mid-flow.

**Lab: Configuring and testing Computer Use (Module 8)**
- Objective: Set up a Computer Use tool on an agent and validate its behavior with appropriate guardrails.
- Tools used: Copilot Studio, Azure Key Vault (for credentials).
- Steps: (1) Add the Computer Use tool to the agent. (2) Configure the prompt describing the on-screen task. (3) Configure guardrails: restrict machine access, set access control, store credentials in Key Vault, and ensure human supervision is available. (4) Test the configured task. (5) Review run history to confirm expected actions were taken.

**Lab: Bringing your own model/knowledge/agent via Foundry integration (Module 8)**
- Objective: Demonstrate the "bring your own" pattern connecting Copilot Studio to Microsoft Foundry.
- Tools used: Copilot Studio, Microsoft Foundry.
- Steps: (1) Select a Foundry-hosted model to power an agent or a specific prompt-as-tool. (2) Connect a Foundry-managed knowledge source for grounding. (3) Optionally reference an agent built directly in Foundry inside a Copilot Studio experience.

**Lab: Using the Copilot Studio VS Code extension (Module 8)**
- Objective: Show the pro-code development loop for editing an agent's YAML definition outside the web UI.
- Tools used: Visual Studio Code with the Copilot Studio extension.
- Steps: (1) Clone an existing agent's definition into VS Code. (2) Edit the underlying YAML configuration directly. (3) Deploy the updated configuration back to Copilot Studio.

**Lab: Reviewing governance and cost tools (Module 9)**
- Objective: Walk through the Activity Map, Rationale, analytics, and cost-forecasting tools for a deployed agent.
- Tools used: Copilot Studio admin/analytics views, Copilot Studio Estimator (aka.ms/CopilotStudioEstimator), built-in savings calculator.
- Steps: (1) Open the Activity Map for an agent to review what it has done. (2) Review Rationale entries explaining specific actions. (3) Check the Analytics/Topic analytics pages for usage volume. (4) Use the Copilot Studio Estimator to forecast credit consumption for a planned rollout. (5) Use the built-in savings calculator to estimate ROI.

## Common pitfalls and gotchas

- Do not confuse Copilot Chat (free, pay-as-you-go entry point) with the full Microsoft 365 Copilot license ($30/user/month) — they are different products with different capabilities.
- Cowork is Frontier-preview only, not GA, and is explicitly excluded from the EU Data Boundary — do not assume it has the same availability or residency profile as other Copilot features.
- MCP was created by Anthropic and A2A was created by Google — Microsoft adopted both as open protocols rather than inventing them; don't misattribute either.
- ISO 9001 is explicitly NOT part of Copilot's compliance certification scope — a deliberate distinction from the more commonly recognized general-purpose ISO 9001 certification.
- Copilot does not create oversharing risk — it reveals pre-existing, improperly access-controlled content. The fix is proper permissions/labeling, not disabling or blaming Copilot.
- Don't treat a POC (explicitly disposable/throwaway) as if it were a Pilot (production-track from the start) — trying to "promote" a POC directly to production, or over-engineering a POC with pilot-level rigor, are both common missteps the instructor calls out.
- Declarative agents automatically inherit Microsoft 365 security/compliance; custom engine agents do NOT — builders of custom engine agents are fully responsible for their own compliance posture. Don't assume custom engine agents get the same automatic guardrails.
- Computer Use requires generative orchestration to be enabled on the agent first — a common reason Computer Use appears unavailable when troubleshooting.
- Computer Use is excluded from sovereign clouds and costs roughly 5 Copilot credits per step — factor this into cost planning, not just feasibility planning.
- Agent flows (deterministic) and generative orchestration (dynamic) solve different problems — use agent flows for well-understood repeatable processes and generative orchestration for unpredictable, open-ended work; picking the wrong one leads to either rigid failure on edge cases or unpredictable behavior on processes that should have been deterministic.
- Agents-as-MCP is currently private preview, not GA — don't assume general availability when scoping a solution around it.
- E7 is the first new enterprise tier since E5 launched in 2015 — a notable milestone fact, easy to get wrong if you assume there have been other new tiers since.
- The Copilot Business SKU family (including the new bundles) is capped at organizations with 300 seats or fewer — it is not a universal small-discount option for any size org.
- Entra Agent ID auto-creation only became the default since March 18 — don't assume every historical agent automatically has one if it predates that change.
- MIP sensitivity labels flow through to and are respected by agents — don't assume labeled/protected content loses its protection just because an agent is processing it.
- The Pre-purchase plan (P3) offers the best rate but only pays off with high committed usage — recommending it to a low-usage customer would be a poor cost-fit choice; use the Estimator tool to validate before committing.

## Self-test questions

1. What is the LevelUp course ID for this course, and what phase does it belong to?
2. Name the four layers of Work IQ.
3. Which layer of Work IQ acts as a feedback loop back into Context?
4. List the five pillars of Microsoft 365 Copilot in order.
5. Which company created the A2A protocol, and which created MCP?
6. What is Cowork, and what two facts limit its availability?
7. What are ZAVA Global Retail's employee count, revenue, store count, and distribution center count?
8. What two headline statistics does Module 1 use to justify the urgency of agentic transformation?
9. What is the list price of the full Microsoft 365 Copilot license?
10. What is the price of Microsoft 365 Copilot Business, and what seat-count restriction applies?
11. Name the three new Business bundles that reached GA on December 1, 2025, and their prices.
12. What is Agent 365, when did it reach GA, and what is its standalone monthly price?
13. What four components make up the E7 Frontier Suite?
14. What are the approximate E7 prices with and without Teams, and when do they take effect?
15. Approximately how much does E7 save versus buying its components separately?
16. Name at least four agent-sprawl statistics cited in Module 3.
17. List the compliance certifications named in Module 4, and note which certification is explicitly NOT applicable.
18. As of what date is the certification list in Module 4 stated to be current?
19. What key message does the instructor emphasize about Copilot and oversharing?
20. Give the three oversharing statistics cited in Module 4.
21. Name the three data residency tiers described in Module 4, and how many countries offer local residency.
22. List the five steps of the Five-Step Journey to Copilot Success in order.
23. What are the four build paths under Step 3 (Prioritize and Scope)?
24. Explain the difference between a POC and a Pilot.
25. What two usage dimensions are assessed in Step 5, and what two Viva tools support qualitative measurement?
26. What is the core difference between a declarative agent and a custom engine agent?
27. List the four rungs of the agent build spectrum from no-code to the underlying model layer.
28. Name the six components of the common "agent anatomy."
29. What is the difference between API plugins and connectors as extension mechanisms for declarative agents?
30. What is generative orchestration, and how does it differ from classic topic-based orchestration?
31. Give four facts about Computer Use (GA date, cost, exclusion, and a required prerequisite).
32. Name the three voice agent features covered in Module 7.
33. What does multi-agent orchestration mean, and what roles do "parent" and "child" agents play?
34. What is the significance of event triggers for an agent?
35. According to the instructor, what is the single most important capability covered in Module 7?
36. What does MCP stand for, who created it, and what model does it use (host/client/server)?
37. What is Agents-as-MCP, and what is its current release status?
38. What is the difference between agent flows/workflows and generative orchestration?
39. List the four Computer Use setup steps and the four Computer Use guardrail categories.
40. What are Fabric Data Agents built on, and what are they described as?
41. What does the Copilot Studio VS Code extension workflow involve?
42. What is the difference between the Activity Map and Rationale in Module 9?
43. What is Microsoft Entra Agent ID, and since what date has auto-creation been the default?
44. Name the three Copilot cost/payment models and their key terms.
45. What tool helps forecast Copilot Studio agent costs before deployment, and what is its URL shorthand?

### Answer key
1. Course ID 2437897; Phase 2 - Project Ready.
2. Data, Context, Skills and Tools, Activity.
3. Activity — it feeds back into and enriches Context.
4. Work IQ, Agentic Work, Multi-model, Agent Platform, Security & Management.
5. A2A was created by Google; MCP was created by Anthropic.
6. Cowork is a Frontier-preview-only agentic experience built with Anthropic; it is not GA and is excluded from the EU Data Boundary.
7. ~18,000 employees; ~$9.5B revenue; 420 stores; 12 distribution centers.
8. 46% of leaders in production are automating workflows; IDC projects 1.3 billion agents in production by 2028.
9. $30/user/month (list price).
10. $21/user/month; restricted to organizations with 300 seats or fewer.
11. M365 Business Basic + Copilot Business ($27/user/month); Standard+ ($33.50/user/month); Premium+ ($43/user/month).
12. Agent 365 is Microsoft's platform for managing/securing/governing agents; GA May 1st; $15/user/month standalone.
13. E5 + Microsoft Entra Suite + Microsoft 365 Copilot + Agent 365.
14. ~$99/user/month with Teams; ~$90/user/month without Teams; effective July 1st.
15. Approximately 15%.
16. 29% use unsanctioned AI agents; 73% say data privacy/security is the biggest AI risk; 21% have a mature governance model for autonomous agents; 26% strongly agree they actively monitor AI agent usage.
17. ISO 27000 family, ISO 42001, GDPR, CCPA, HIPAA, FedRAMP, German C5; ISO 9001 is explicitly not applicable.
18. February 4, 2026.
19. Copilot does not create oversharing risk; it reveals pre-existing oversharing that already existed due to improper permissions/labeling.
20. 80% cite data leakage as main concern; 37% cite risky user detection as top priority; 82% cite data exposure risk identification as top strategy.
21. (1) Local data storage only, (2) EU Data Boundary storage and processing, (3) local storage plus in-country processing; available in 27 countries.
22. Enable; Define Core Unit of Work; Prioritize and Scope; Validate; Assess and Scale.
23. Out-of-box agents, ready-to-configure agents, custom build, Agent Factory.
24. A POC is disposable/throwaway, built to test feasibility with no expectation of becoming production; a Pilot is built on a production-track path from the start, intended to graduate into production.
25. Usage frequency and intensity; Viva Pulse and Viva Glint.
26. A declarative agent uses Copilot's own orchestrator/models and automatically inherits M365 security/compliance; a custom engine agent brings its own orchestrator/models, giving full control but full compliance responsibility to the builder.
27. Agent Builder (no-code) → Copilot Studio (low-code) → Agents Toolkit/SDK (pro-code) → Microsoft Foundry (underlying models).
28. Orchestrator, Knowledge, Skills, Autonomy, Foundation models, Connections.
29. API plugins let a declarative agent call external APIs; connectors ground an agent in external data sources.
30. Generative orchestration lets the agent dynamically choose tools/knowledge/topics/agents at runtime; classic topic-based orchestration relies on manually hand-built, fixed conversation paths.
31. GA since May 13; costs ~5 Copilot credits per step; excluded from sovereign clouds; requires generative orchestration to be enabled.
32. SSML, DTMF, barge-in.
33. A parent agent coordinates and delegates work to one or more specialized child agents, combining their outputs.
34. Event triggers give an agent autonomy, allowing it to act when a defined event occurs rather than only when a user directly prompts it.
35. Agent evaluation (the 8-step method).
36. Model Context Protocol; created by Anthropic; uses a host/client/server model.
37. The capability to publish a Copilot Studio agent as an MCP endpoint callable by others; currently in private preview.
38. Agent flows/workflows are deterministic and step-based for well-understood processes; generative orchestration is dynamic, used for unpredictable/open-ended work.
39. Setup: add the tool, configure the prompt, test, view run history. Guardrails: machine management, access control, credentials via Key Vault, human supervision.
40. Built on OneLake and Fabric IQ via an Ontology layer; described as a "virtual analyst."
41. Clone the agent's definition into VS Code, edit its YAML configuration directly, then deploy the changes back to Copilot Studio.
42. The Activity Map shows what an agent has done; Rationale explains why it took specific actions.
43. Entra Agent ID is a distinct identity assigned to each agent; auto-creation has been the default since March 18.
44. Copilot Credit Packs (25,000 credits/$200 per month, tenant-wide); Pay-as-you-go ($0.01/credit, no commitment); Pre-purchase plan/P3 (best rate, requires high committed usage).
45. The Copilot Studio Estimator, at aka.ms/CopilotStudioEstimator.
