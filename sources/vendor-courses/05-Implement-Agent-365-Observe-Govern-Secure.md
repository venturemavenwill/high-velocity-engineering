# Implement Agent 365 to Observe, Govern, and Secure AI Apps, Copilot & Agents
> LevelUp course 2261257 · Phase: 2 – Project Ready · Duration: ~12 hours · Badge: Frontier Transformation Engineer

## At a glance
- Microsoft Agent 365 is presented as the enterprise control plane for agents, built around three simultaneous pillars: Observe, Govern, and Secure.
- The course frames agents as a workforce-scale shift: **82%** of leaders expect to use agents in the next **12–18 months**, while **80%** cite sensitive-data leakage as the top concern, **88%** worry about indirect prompt injection, and **55%** lack confidence about AI regulation.
- Microsoft’s strategy is to extend existing admin, identity, data-governance, and threat-protection infrastructure to agents rather than invent a disconnected management model.
- The Microsoft 365 admin center becomes the operational home for agent inventory, requests, activation, publishing, policy templates, ownerless-agent handling, analytics, and the Agent Map.
- Microsoft Entra Agent ID gives agents durable identities, blueprints, sponsors, owners, Conditional Access coverage, Identity Protection risk scoring, lifecycle workflows, and access-package governance.
- Microsoft Purview extends DLP, Information Protection, DSPM, Compliance Manager, Communication Compliance, Insider Risk Management, Audit, eDiscovery, Data Lifecycle Management, and Data Security Investigations to AI scenarios.
- Microsoft Defender XDR extends posture management, runtime protection, incident correlation, hunting, attack-path analysis, and tool-call blocking to AI agents and Copilot Studio workloads.
- Global Secure Access and Defender for Cloud Apps are used to expose shadow AI, discover unsanctioned AI usage, and add prompt-injection protection at the network edge.
- Security Dashboard for AI is the executive and committee-level rollup across Entra, Defender, Purview, and Security Copilot; Security Copilot and the Security Store add investigation speed and an agent ecosystem.
- Foundry Control Plane is a separate, developer-oriented control plane for building, tracing, evaluating, red-teaming, securing, and operating AI fleets at scale.

## Module map
| Order | Module / lesson | One-line purpose |
|---|---|---|
| 1 | Microsoft Agent 365 as the Control Plane | Establishes why agents need a control plane and introduces Observe, Govern, and Secure. |
| 1.1 | Agent 365 — unified control plane for agent security | Explains the business drivers, new attack surface, and Agent 365 value proposition. |
| 1.2 | Agent 365 licensing (Microsoft 365 E7) | Maps Agent 365 to Microsoft 365 E7 / add-on licensing. |
| 1.3 | Mapping Agent 365 controls to the Zero Trust for AI Framework | Connects Observe/Govern/Secure to verify explicitly, least privilege, and assume breach. |
| 1.4 | Microsoft security infrastructure extended to AI agents | Shows how Admin Center, Entra, Purview, and Defender become the foundation for agent control. |
| 2 | Observe - real-time control for agents | Covers discovery, inventory, telemetry, analytics, and relationship mapping. |
| 2.1 | Discover and inventory agents across your organization | Explains the registry, agent requests, templates, identities, and activation flow. |
| 2.2 | Track agent performance, behavior and risk signals | Introduces observability architecture, OTEL-based telemetry, lifecycle visibility, and session semantics. |
| 2.3 | Visualize agent relationships and ecosystem fit | Uses the Agent Map to show clusters, platforms, publishers, and cross-agent relationships. |
| 3 | Govern - guardrails for agents and users | Focuses on onboarding governance, sponsors, access packages, lifecycle workflows, audit, and compliance. |
| 3.1 | Onboard agents with IT oversight and security policy | Applies approval flows, templates, least-privilege controls, and automated lifecycle rules. |
| 3.2 | Governing agent identities and ownerless agents in Agent 365 | Automates sponsor and owner transitions with Lifecycle Workflows. |
| 3.3 | Audit, logging and compliance with Microsoft Purview | Uses Compliance Manager, audit logging, and AI regulatory mappings to prove trust and readiness. |
| 4 | Secure - comprehensive agent protection | Extends identity, data, and threat protection to agents. |
| 4.1 | Extend Conditional Access and identity controls to agents | Uses Agent ID, risky-agent signals, CSAs, and network controls to protect access. |
| 4.2 | Protect agent interactions with Microsoft Purview | Covers oversharing, DLP, Insider Risk, AI observability, and Data Security Investigations. |
| 4.3 | Defend agents against threats, vulnerabilities and attacks | Uses Defender for AI posture, runtime detections, incident investigation, and advanced hunting. |
| 5 | Agent data access & sharing risks | Explains how agents actually gain, keep, and reuse access to organizational content. |
| 5.1 | How agents access and share content | Details collaboration-space access, direct sharing, Dataverse access, warnings, and trust controls. |
| 5.2 | Shadow AI Discovery in Global Secure Access | Finds unsanctioned AI tools by routing traffic through Microsoft’s SASE layer. |
| 5.3 | Prompt Injection Protection | Adds edge-layer inspection for prompts and responses without code changes. |
| 5.4 | MCP and tooling server access | Governs Microsoft and custom MCP servers with centralized control, tracing, and policy enforcement. |
| 6 | Security Dashboard for AI | Gives leadership a unified AI-risk dashboard across identity, security, and data platforms. |
| 7 | Security Copilot & Microsoft Security Store | Shows how Security Copilot, security agents, and the Security Store accelerate investigation and deployment. |
| 7.1 | Security Copilot for agentic AI | Explains the standalone and embedded Copilot experiences and SCU-based consumption model. |
| 7.2 | Extending SOC capabilities with Security Copilot agents | Shows adaptive agents such as phishing triage and Conditional Access optimization. |
| 7.3 | Discovering and deploying agents via the Security Store | Covers Microsoft-built, custom-built, and partner-built security agents and integrations. |
| 7.4 | Responsible AI principles across your agent strategy | Emphasizes iterative risk reduction, transparency, privacy, accuracy, and prompt-attack defense. |
| 8 | Foundry Control Plane - AI lifecycle governance | Presents the developer-side control plane for secure AI build-and-run operations. |
| 8.1 | Governing the AI lifecycle with Foundry Control Plane | Defines the split between Agent 365 for IT/security and Foundry for developers. |
| 8.2 | Continuous monitoring and agent evaluation | Uses evaluators, synthetic test data, CI/CD checks, tracing, and observability. |
| 8.3 | Probing agent vulnerabilities with AI Red Teaming | Uses PyRIT-based red teaming to probe model- and app-level risks. |
| 8.4 | Tracing agent actions for visibility and accountability | Visualizes multi-agent workflows for debugging and performance diagnosis. |
| 8.5 | Enforcing safe AI outputs with Azure AI Content Safety | Applies multimodal filtering, prompt shielding, protected-material checks, and content guardrails. |
| 9 | Post-training Skills Assessment | Validates the learner’s understanding of the course and marks completion. |
| — | Course Completion Survey | Collects course feedback after the learning content. |
| — | Frontier Engineer Assessment | Final completion assessment listed in the course outline. |

### 1. Microsoft Agent 365 as the Control Plane
**What it covers** — This module establishes the business case for an agent control plane and explains why agent adoption changes the security conversation. It positions Agent 365 as Microsoft’s answer to agent discovery, governance, interoperability, and protection. It also ties Agent 365 to Microsoft 365 E7 licensing, Zero Trust for AI, and the broader Microsoft security stack.

**Key concepts**
- Microsoft Agent 365
- Observe / Govern / Secure pillars
- Agent sprawl
- Resource access
- Data oversharing and leaks
- Shadow AI
- Indirect prompt injection
- Regulatory compliance
- MCP servers
- Agent-to-agent protocol
- Memory poisoning / context poisoning
- Interoperability
- Agent registry
- Microsoft IQ platform
- Work IQ
- Foundry IQ
- Fabric IQ
- Microsoft 365 E7 / Frontier Worker Suite
- Microsoft 365 E5
- Entra Suite
- Microsoft 365 Copilot
- Copilot Studio
- Agent Builder
- Zero Trust Workshop
- Zero Trust for AI / ZT4AI
- Verify explicitly
- Use least privilege access
- Assume breach
- Conditional Access
- Identity Protection
- Defender for Cloud Apps
- Global Secure Access
- Entra Internet Access / Private Access
- Microsoft 365 admin center
- Microsoft Entra
- Microsoft Purview
- Microsoft Defender XDR
- Runtime protection
- Security posture management
- Attack path analysis
- OOTB threat detections
- Threat hunting

**Detailed notes**
- **Why the control plane exists** — The instructor repeatedly frames agents as “the next evolution” after generative AI chat interfaces. The organizational problem is not merely building an agent, but knowing: can IT discover it, can IT manage it, what data does it touch, where are results being shared, and can the organization prove what happened during an audit or forensic investigation.
- **Risk backdrop and course statistics** — The slide deck anchors the problem with four headline figures: **82%** of leaders expect agent use within **12–18 months**; **80%** say sensitive-data leakage is their main concern; **88%** of organizations are concerned about indirect prompt injection; **55%** of leaders lack understanding of AI regulation and want guidance. The module treats these numbers as justification for building governance first rather than after the fact.
- **Threat expansion when agents enter the picture** — Traditional AI risks already include prompt injection, model theft, harmful third-party LLM apps, malicious plugins, and insider risk. Agents add **intent breaking**, **misbehavior**, **malfunction**, compromised tools, malicious MCP routers/servers, long-lived memory/context poisoning, and risky app-to-agent / agent-to-agent interactions. Because agents automate action, the blast radius is faster than for human users.
- **Same controls as users, plus more** — The course emphasizes that agents touch search, MCP, email, web, databases, APIs, apps, humans, LLMs, and other agents. That means user-style controls are necessary but incomplete; agents need identity, access, telemetry, relationship mapping, and continuous runtime protection.
- **Agent 365 positioning** — Microsoft announced Agent 365 as the control plane for agents, first in public preview and then heading to general availability on **1 May**. The control-plane outcomes are: registry/inventory, access control, identity, visualization, interoperability, and security. A major course theme is that Microsoft tried to ship governance surfaces early instead of waiting for “version two.”
- **IQ layer context** — Agent 365 sits alongside the Microsoft IQ platform. **Work IQ** represents understanding of documents, chats, recordings, and email in Microsoft 365; **Foundry IQ** serves the Azure/Foundry developer platform; **Fabric IQ** surfaces enterprise data in Fabric. The point is that Microsoft is standardizing agent access to enterprise context, not just model access.
- **Licensing model** — Agent 365 is part of **Microsoft 365 E7**, branded the **Frontier Worker Suite**. The course describes E7 as effectively “E5 + Entra Suite + Microsoft 365 Copilot + Agent 365,” available with or without Teams. Agent 365 can also be purchased as an add-on at **$15 US**. The transcript explicitly says the cited prices reflect **1 July 2026** pricing because an increase is coming.
- **Why Entra Suite matters in E7** — The Entra Suite contribution is identity governance at enterprise scale. The Microsoft 365 Copilot component includes the full paid Copilot experience plus Copilot Studio, agent-creation capabilities, and Work IQ. Agent 365 then layers Observe/Govern/Secure capabilities on top.
- **Zero Trust mapping** — The course maps Agent 365 directly to Zero Trust for AI: **Observe = verify explicitly**, **Govern = use least privilege access**, **Secure = assume breach**. “Verify explicitly” means validating identities and applications and ensuring intended and unwanted activities are detectable. “Least privilege” means the AI only gets the data and actions required. “Assume breach” means each prompt may be malicious, each response may leak data, and each AI component may have vulnerabilities.
- **Zero Trust Workshop details** — The Microsoft Zero Trust Workshop is presented as a free GitHub-based solution that operationalizes Zero Trust. The AI pillar was described as newly added. The overall workshop is said to contain **700 security controls**, **116 logical groups**, and **33 functional swim lanes**, plus assessment tooling that inventories the tenant and can take over **24 hours** in very large environments.
- **Security infrastructure extension model** — Rather than inventing a separate agent platform, Microsoft extends familiar portals and personas: **Microsoft 365 admin center** for inventory and publishing, **Entra** for identity, **Purview** for data governance and compliance, and **Defender** for posture and threat protection. The module argues this reuse is the safest way to bring agents into the enterprise.
- **Defender XDR for agents** — Defender XDR contributes runtime protection, posture management, attack-path analysis, out-of-the-box detections, custom detections, agent inventory, incident investigation, and threat hunting. The point is not only to stop agents from doing bad things, but also to protect agents themselves from compromise.

**Exam / assessment pointers**
- Know the three Agent 365 pillars and that they operate **simultaneously**, not sequentially.
- Remember the headline figures: **82%**, **80%**, **88%**, **55%**.
- Know that **E7 = Frontier Worker Suite** and that Agent 365 can also be bought as a **$15 US** add-on.
- Be able to map **Observe / Govern / Secure** to **Verify explicitly / Use least privilege / Assume breach**.
- Remember that the Zero Trust Workshop is described as having **700 controls**, **116 groups**, and **33 swim lanes**.
- Be able to explain why Microsoft extends Admin Center + Entra + Purview + Defender instead of building a completely separate security stack for agents.

### 2. Observe - real-time control for agents
**What it covers** — This module explains how organizations discover agents, register them, understand who owns them, measure their use, and inspect their behavior. It covers the Microsoft 365 admin center registry, the Entra Agent ID model, the observability pipeline, and the Agent Map. It also distinguishes operational/admin visibility from developer tracing and telemetry.

**Key concepts**
- Agent Registry
- Agent Map
- Hero metrics
- Active users
- Total sessions
- Exception rate
- Agent Runtime
- Requests / activation / deployment / publishing / pinning / blocking
- AI admin role
- Agent templates
- Agent identity
- Agent identity blueprint
- Agent identity blueprint principal
- Agent user
- Owner vs sponsor
- Agent instance
- Agent card manifest
- Collections
- Global collection
- Quarantine collection
- Access policies
- Discovery policies
- Microsoft Graph API for registry access
- Conditional Access for agents
- Risky agents
- Offline detections
- Unfamiliar resource access
- Sign-in spike
- Failed access attempt
- Signed in by a risky user
- Confirm compromise / confirm safe
- Threat intelligence cloud
- OpenID Connect
- OAuth 2.0
- Application-only access
- Delegated user access / OBO flow
- OTEL / OpenTelemetry
- Observability SDK
- Telemetry export
- Cross-platform support
- Lifecycle coverage
- Conversational session details
- Outlook thread grouping
- Word/PowerPoint comment grouping
- Teams 30-minute inactivity rule

**Detailed notes**
- **Observe outcomes** — The module defines Observe as the ability to register and track agents in one place, visualize usage and behavior, measure effectiveness, and provide role-based reporting for both security leaders and business leaders.
- **Hero metrics** — The registry analytics emphasize four metrics: **Active users** = unique users who interacted with at least one agent in the last 30 days; **Total sessions** = completed agent invocations in the last 30 days; **Exception rate** = percentage of sessions completed without errors; **Agent Runtime** = total agent-assisted time over the last 30 days.
- **Registry in Microsoft 365 admin center** — The registry is the central operational view for first-party Microsoft agents, agents built with Microsoft AI platforms, manually registered agents, and partner agents. Admins can view inventory, risks, ownerless agents, exceptions, publishers, platforms, top actions, pending requests, and trending adoption.
- **Agent creation / request flow** — For template-based creation, the user selects **Request** on the template details page. An admin approves the request in the admin center, activates the template, assigns licenses and policies, and then the creator configures icon, name, and description. The course notes a naming rule: the configurable name should have **no spaces or special characters**.
- **Agent lifecycle verbs** — The admin center differentiates **publish**, **activate**, **deploy**, **pin**, **block**, **remove**, **delete**, and **approve updates**. Publish makes the agent available; activation allows users/groups to install it; deployment pre-installs it for users; pinning forces visibility; blocking stops use. Deletion is described as a **soft delete** with associated resources retained for **30 days**.
- **Registry details flyout** — For each agent, admins can inspect: owner, last update time, platform, availability, channels, data and tools, knowledge sources, MCP servers, Graph connectors, activity counts, prevented sensitive interactions, Entra identity, and specific Graph permissions with privilege level indicators such as high.
- **Risk and ownerless handling** — Risky-agent views surface high-severity alerts. The course demo shows risks such as **abnormal sign-in frequency** and **accessed by a risky user**. Ownerless-agent handling is treated as essential; admins can manually reassign an owner or create a rule such as “reassign ownerless agents to manager.”
- **Agent Map** — The Agent Map is not a separate dataset; it is a spatial visualization of the registry for scale. It clusters agents by platform and other dimensions and supports up to **800 agents**. It helps reveal how agents relate to each other, what platforms dominate, and how activity or exceptions are distributed.
- **Stakeholder lens** — The map and registry support multiple personas: IT administrator, security worker, agent developer, business decision maker, and information worker. This is important because “observe” is not only a security telemetry exercise; it also supports adoption, productivity, and business-value tracking.
- **Entra Agent ID model** — Agent ID is the core identity layer. An **agent identity** is the primary token-based account with object ID and app ID having the same value; no password or credential exists on the identity itself. The **agent identity blueprint** is the reusable template/parent. The **blueprint principal** records the blueprint in a tenant. The optional **agent user** is a user-shaped object used only when a system requires a user object.
- **Why a distinct identity type exists** — The course stresses that agents are not just service principals renamed. Their behavior is autonomous, dynamic, often short-lived, and tool-using. Microsoft therefore introduced a separate identity pattern rather than relying on traditional long-lived application/service-principal assumptions.
- **Blueprint behavior** — A blueprint can back many agent instances. Disabling the blueprint can disable the entire fleet created from it, giving “class-level” control. Shared configuration includes publisher, app roles, and other inherited settings; individual instances still keep unique identities.
- **Agent users** — Agent users are only for systems that require user objects. They can have user-like properties such as manager, UPN, and photo, can join groups, and can be scoped by administrative units; however, they still do **not** have passwords, passkeys, MFA, or interactive sign-in.
- **Application-only vs delegated access** — Delegated/on-behalf-of access uses the signed-in user’s token and therefore inherits the user’s data reach. Application-only access uses the agent’s own identity and permissions. The transcript explicitly notes that delegated/OBO becomes generally available with Agent 365 GA, while application-only access remains in preview.
- **Collections and discovery** — Built-in collections include **Global** and **Quarantine**. Custom collections can segment discovery and collaboration by department or scenario. An agent with identity can discover other agents; an agent without identity can be discovered but cannot do its own discovery. **Access policies** and **discovery policies** govern what agents can reach and which agents are visible to them.
- **Identity Protection for agents** — Risk detections for agents are described as **offline** rather than real-time sign-in detections. The four named risk contributors are **unfamiliar resource access**, **sign-in spike**, **failed access attempt**, and **signed in by a risky user**; an admin can also mark an agent **confirm compromised**. These signals can feed Conditional Access.
- **Observability architecture** — Agent 365 observability uses **OpenTelemetry (OTEL)** and an **Observability SDK** to capture invocation, tool execution, and inference telemetry across Microsoft and third-party runtimes. That telemetry is exported to enterprise monitoring surfaces including Microsoft 365 admin center, Defender, and Purview.
- **Lifecycle coverage** — The observability story spans **development**, **deployment**, **operation**, and **governance**. Builders need traces and debugging; operators need health, risk, and usage views; compliance teams need auditability and evidence.
- **Session semantics** — The course is very specific: Outlook sessions are grouped by **email thread**; Word/PowerPoint sessions by **comment**; Teams sessions are **time-based** and end after **30 minutes of inactivity**.

**Exam / assessment pointers**
- Memorize the four hero metrics and how each is defined.
- Know the difference between **publish**, **activate**, **deploy**, **pin**, **block**, and **delete**.
- Be able to distinguish **agent identity**, **blueprint**, **blueprint principal**, and **agent user**.
- Remember that risky-agent detections are described as **offline** and include unfamiliar resource access, sign-in spike, failed access attempt, and risky-user use.
- Know the two built-in collections: **Global** and **Quarantine**.
- Remember the session-grouping rules for Outlook, Word/PowerPoint, and Teams.

### 3. Govern - guardrails for agents and users
**What it covers** — This module moves from visibility to control. It shows how to onboard agents through an IT-controlled flow, assign owners and sponsors, automate lifecycle changes, grant time-bound access with access packages, and prove compliance with Purview auditing and Compliance Manager. It treats governance as the prerequisite for scale, audit readiness, and safe AI velocity.

**Key concepts**
- IT-controlled onboarding flow
- Policy templates
- Guardrails
- Agent owner
- Agent sponsor
- Manager role
- Ownerless agents
- Lifecycle Workflows
- Mover workflow
- Leaver workflow
- My Account portal
- My Access portal
- Access packages
- Entitlement Management
- Access reviews
- Time-bound access
- Sponsor transitions
- Delegated human accountability
- Unified audit log
- Microsoft Purview Audit
- Microsoft Compliance Manager
- AI baseline
- EU AI Act
- NIST AI Risk Management Framework
- AI-powered regulatory templates
- Regulation-to-control mapping
- Controls-to-actions mapping
- Defender for Storage malware scanning
- Communication Compliance
- Data Lifecycle Management
- Records Management
- eDiscovery
- Information Protection
- Sensitive Information Types (SITs)
- Sensitivity labels
- Purview DSPM
- Data Security Posture Management
- Insider Risk Management
- Data Security Investigations

**Detailed notes**
- **Governance as velocity enabler** — The instructor explicitly says governance is how you achieve velocity. If guardrails are built in from the start, organizations avoid later production stoppages and emergency remediation caused by oversharing, access mistakes, or missing auditability.
- **Onboarding with oversight** — The agent request flow shown earlier becomes the main governance mechanism: an admin reviews pending requests, inspects data/tools/security, applies a **template**, accepts any needed permissions, and then publishes or activates. Governance is therefore built into the approval path, not added later.
- **What templates carry** — Templates can hold Conditional Access policies, access-package choices, identity-protection settings, network visibility settings, Purview controls, and other baseline requirements. The course treats templates as the practical packaging of “governed by default.”
- **Automation is mandatory at scale** — Several times the module contrasts manual governance for 5 or 10 agents with impossibility at 5,000 or 10,000 agents. That is the reason Lifecycle Workflows, rules, and access packages are so prominent.
- **Owners, sponsors, managers** — The module draws a hard distinction: **owner** = technical administrator/configuration authority; **sponsor** = business accountability and justification; **manager** = hierarchical approver/requester who can help with access packages. The course repeatedly warns that no agent should be ownerless or sponsorless.
- **Self-service portals** — In the **My Account portal**, sponsors/owners can enable or disable agent identities, inspect permissions, view lifecycle status, and perform operational oversight. In the **My Access portal**, they can request and manage access packages on behalf of agent identities.
- **Access packages for least privilege** — The governance model uses Entitlement Management access packages to grant security-group membership, Graph API permissions, and related resources to agent identities. The package can specify who may request it, whether approval is required, notification behavior, and how long access lasts.
- **Time-bounded lifecycle** — The course demonstrates access packages with a **7-day** duration and explains the general pattern: create agent identity, assign sponsor, request access, approve access, review the assignment, expire access, and optionally delete the identity. This is the least-privilege and “no standing access forever” story for agents.
- **Access reviews** — Access reviews are highlighted as the governance step that keeps least privilege true over time. An agent or sponsor may have to justify continued access, or a reviewer may have to re-approve it periodically.
- **Lifecycle Workflows for sponsor continuity** — Sponsor transitions are automated using **Mover** or **Leaver** workflows with tasks such as **Email manager about sponsorship changes** and **Email co-sponsors about sponsor changes**. The intended outcome is “no orphaned agent identities” and continuous human accountability.
- **Role breakdown** — Owners can configure identities, credentials, owners/sponsors, and can disable/re-enable/delete/restore agent identities. Sponsors can extend or remove agents and handle business justifications, but not reconfigure the agent itself. Managers can request access packages for agent users/identities but do not reconfigure or delete the agent.
- **Audit destination** — Agent actions are logged in the generic **Microsoft 365 unified audit log**. The course explicitly shows filtering by **Agent 365** workload and emphasizes that this is the traceability record for what the agent did and who invoked it.
- **Why Purview matters to governance** — Good governance still starts with data governance. The module states that AI does not create bad permissions; it exposes them. Old data, broadly shared sites, and unlabeled documents are recurring risks because agents and Copilot will happily use them if permissions allow.
- **Ethical and compliance use cases** — The course shows a procurement example in which a prompt asks an agent to draft a persuasive email that also offers an exclusive gift to fast-track approval. This is used to show how **Communication Compliance** and other Purview tools can flag unethical or policy-violating interactions.
- **Compliance Manager for AI** — Compliance Manager is presented as a hidden gem that already maps roughly **400** regulations and can now support AI readiness. The built-in **AI baseline** is derived from the **EU AI Act** and **NIST AI RMF**. It can show completed Microsoft actions, customer actions, points, and remediation tasks.
- **AI-powered regulatory templates** — A notable governance feature is the ability to upload a regulatory **PDF**, have generative AI extract controls, map those controls to Microsoft settings/actions, and generate an assessment draft. Uploaded files are malware-scanned by **Microsoft Defender for Storage**.
- **Purview capability stack** — The governance module summarizes Purview as the source of Information Protection, DLP, Insider Risk Management, Audit, eDiscovery, Data Lifecycle Management, Communication Compliance, Records Management, and DSPM. The practical message: the same Purview puzzle pieces used for users now apply to agents.
- **SITs and labels** — Sensitive Information Types (SITs) are the foundation for identifying regulated data (credit cards, country-specific IDs, etc.), optionally with machine-learning-based classifiers. Labels can be applied manually or automatically to documents, emails, sites, and other containers.

**Exam / assessment pointers**
- Know the governance distinction between **owner**, **sponsor**, and **manager**.
- Remember that **Lifecycle Workflows** use sponsor-change notification tasks to prevent orphaned agents.
- Be able to explain why **access packages** are better for ongoing least privilege than static blueprint permissions.
- Remember that audit data lands in the **unified audit log** and that the course filters on **Agent 365** workload.
- Know that the **AI baseline** in Compliance Manager is derived from the **EU AI Act** and **NIST AI Risk Management Framework**.
- Understand that regulatory PDFs can be ingested and mapped into actionable controls, with uploaded files scanned by **Defender for Storage**.

### 4. Secure - comprehensive agent protection
**What it covers** — This module explains how Microsoft extends identity, data, and threat protection to agents. It combines Entra Conditional Access and risky-agent logic, Purview data controls and investigations, and Defender AI posture/runtime security. The emphasis is that agents are both a new protected workload and a new threat path.

**Key concepts**
- Conditional Access for agents
- Agent risk
- High / medium / low / no risk
- Custom security attributes (CSAs)
- Identity Protection for agents
- Unfamiliar resource access
- Sign-in spike
- Failed access attempt
- Risky-user sign-in to agent
- Block high-risk agents
- Global Secure Access
- AI observability in Purview DSPM
- Oversharing
- Information Protection
- DLP
- Insider Risk Management
- Communication Compliance
- Activity Explorer
- Audit
- Data Security Investigations (DSI)
- Identify / Investigate / Mitigate
- Vector search
- Sensitivity labels
- Inherited most-sensitive label behavior
- AI Security Posture Management
- Attack path analysis
- Copilot Studio AI Agent inventory
- Power Platform threat protection integration
- AIAgentsInfo table
- Advanced Hunting
- Community queries
- Runtime tool blocking
- Jailbreak attempts
- Sensitive data exposure
- Real-time protection
- Incident / alert correlation

**Detailed notes**
- **Security framing** — The module starts with the assertion that agents behave partly like applications and partly like users. They authenticate like software but interact with information and systems in user-like ways. That is why user controls help, but are not sufficient on their own.
- **Identity and access controls** — Entra extends **Conditional Access** and **Identity Protection** to agents. A crucial distinction versus human users is that the action path for risky agents is effectively **block**; the course does not present a rich step-up flow such as MFA or limited-mode access for agents.
- **Risk statistics and goal** — A headline claim is that **73%** of organizations identify data privacy and security as the biggest AI risk they face. The secure objective is therefore to combine visibility, access control, and protection against both compromise and misuse.
- **Risk signals feeding control** — The same risky-agent signals introduced earlier are reused here operationally: unfamiliar resource access, sign-in spike, failed access attempt, and use by a risky user. When the risk threshold is met, a Conditional Access policy can block the agent from accessing a SharePoint site or other resource it would otherwise be allowed to use.
- **Custom security attributes (CSAs)** — CSAs are key-value pairs attached to identities and then targeted by policy. The demo uses a CSA like **approval status = HR approved** on an HR self-service agent, then creates a Conditional Access policy to allow only approved agents. The module treats CSAs as the main fine-grained policy hook beyond raw risk score.
- **Network and internet-edge protection** — The “safeguard agents with network controls” message points to **Global Secure Access** as the way to observe or restrict traffic to internet and SaaS resources used by agents.
- **Purview for agent interactions** — The module then pivots to Purview, stressing three recurring goals: address oversharing, prevent data loss/insider risk, and govern AI use against regulations and policy. This is where agent activity becomes visible as data activity rather than just identity activity.
- **Oversharing definition and causes** — Oversharing is defined as a user having access to information beyond what they need, so Copilot or an on-behalf-of agent can also access it. Causes listed in the course include accidentally saving files into broadly shared locations, sharing content with the wrong people, and missing access protections on files.
- **Purview controls over AI processing** — If files are correctly labeled or governed, Copilot and agents can be prevented from processing them. DLP can block inline; Information Protection can preserve labels; and Purview policies can inspect prompts, responses, and related actions for compliance and ethical issues.
- **DSPM top priorities** — The module highlights outcome-based workflows, posture reporting, **extended data risk assessments**, **AI observability**, the **Data Security Triage Agent**, and the **Data Security Posture Agent** as major Purview capabilities for AI.
- **Sensitive data inheritance behavior** — If multiple labeled source documents are used to generate a new document, the output inherits the **most restrictive** sensitivity label among the inputs. If the sources were unlabeled, the generated output may not be protected even if it now contains sensitive content.
- **Summary leakage risk** — Sensitivity labels protect source documents, but the course repeatedly warns that **summaries themselves can surface sensitive data**. Summarization is described as one of the most common AI use cases, making this a practical exam point.
- **Insider-risk sequence thinking** — Insider Risk Management becomes powerful when a sequence is observed over time: data collection, access violations, exfiltration attempts, unethical content creation, copied content, obfuscation, relabeling, or other suspicious actions. The course emphasizes that single events can look benign; sequences reveal the real pattern.
- **Communication Compliance scenario** — The procurement/gift prompt is reused here to show how a policy such as gifts-and-entertainment compliance can detect an unethical request. The user or agent interaction can be surfaced in Communication Compliance and then pivoted into Activity Explorer or Audit.
- **Activity Explorer and AI observability** — AI observability in DSPM is positioned as the answer to “what are my AI apps and agents actually doing with that data?” Activity Explorer can show AI activities, sensitive information types, DLP matches, website visits, users involved, and the exact risky interaction timeline.
- **Extended data risk assessments** — DSPM can run targeted assessments such as finance-data or merger assessments. The course’s examples include measuring overshared items, unlabeled items, sensitive-information-type coverage, and items shared with anyone, the whole organization, specific people, or external users.
- **Anonymous links warning** — Anonymous SharePoint sharing links are called out as especially dangerous because whoever has the link has access; the recommendation is to disable anonymous links and remediate them when discovered.
- **Data Security Investigations (DSI)** — DSI is presented as a new AI-assisted incident workflow with three phases: **Identify** incident-relevant data across Microsoft 365; **Investigate** sensitive/security risks in that data using vector search and AI analysis; **Mitigate** through collaboration and response planning. It can be launched from Insider Risk Management or Defender XDR incidents.
- **Vector search importance** — DSI’s vector search is valuable because it finds semantically related content even if exact keywords are absent. The course gives a clinical-trials style example: related documents, messages, or prompts may be found even if they do not literally contain the expected key terms.
- **Purview APIs for custom AI apps** — Developers can integrate Purview via SDK/API so their own AI applications detect sensitivity labels, enforce existing policies, and emit the right signals into Audit, Insider Risk, DLP, and other Purview services.
- **Defender AI posture and runtime defense** — Defender extends into AI Security Posture Management across Azure OpenAI Service, Microsoft Foundry, Azure ML, Amazon Bedrock, and Google Vertex AI. It adds inventory, attack-path analysis, posture recommendations, and runtime detections.
- **Copilot Studio AI Agents integration** — The course gives a two-step enablement flow: in Defender, go to **System → Settings → Cloud Apps → Copilot Studio AI Agents** and turn it on; in Power Platform, go to **Security → Threat Protection** and enable **Microsoft Defender – Copilot Studio AI Agents**.
- **What Defender detects** — Suspicious content includes jailbreaks, secrets, malicious URLs, and manipulative encodings. Suspicious behavior includes abnormal user/agent behavior, application behavior, tool behavior, and access parameters enhanced by Microsoft Threat Intelligence.
- **Incident investigation model** — Defender groups related alerts into incidents so analysts do not have to manually correlate many separate detections. From an incident, analysts can inspect users, agents, attack stories, and alert timelines, confirm compromise, and pivot into hunting.
- **Advanced Hunting for agents** — The module explicitly mentions the **AIAgentsInfo** table and community queries such as **MCP tools with maker credentials**. Hunting is shown as the way to summarize agent metadata, activity, and risky tool relationships at scale.

**Exam / assessment pointers**
- Know that Conditional Access for agents mainly results in **blocking** when risk thresholds are met.
- Remember **CSAs** as the attribute-based policy mechanism for agents.
- Be able to define **oversharing** and list its common causes.
- Remember the three DSI phases: **Identify, Investigate, Mitigate**.
- Know that output documents inherit the **most restrictive** label from labeled sources, but summaries can still expose sensitive content.
- Know the two setup steps to enable Copilot Studio AI Agent inventory in Defender and Power Platform.

### 5. Agent data access & sharing risks
**What it covers** — This module focuses on how agents actually receive, retain, and reuse access to content in Microsoft 365 and related tools. It covers end-user sharing patterns, shadow AI discovery, prompt injection protection at the SASE layer, and governance of MCP/tooling servers. The module is especially practical and user-behavior oriented.

**Key concepts**
- Teams store agent addition
- Collaboration-space access
- Group chats
- Email threads
- Shared documents
- Business databases
- Microsoft Dataverse
- Assistant agent / on-behalf-of agent
- Autonomous app
- Autonomous user / agent user
- Persistent access
- Old or forgotten content
- Cross-data leakage across roles/departments
- User warnings
- AI-generated content disclosure
- Microsoft 365 compliance boundary
- Shadow AI
- Defender for Cloud Apps
- Manual log upload
- Continuous log collector
- Defender for Endpoint signal to Cloud Apps
- Global Secure Access
- Internet Access traffic forwarding profile
- GSA client
- Secure web gateway
- Prompt injection protection
- AI gateway
- MCP servers
- Work IQ MCP servers
- Outlook MCP server
- Teams MCP server
- SharePoint MCP server
- Word MCP server
- Admin Center MCP server
- Copilot Search MCP server
- Dataverse MCP server
- Central control / scoped access / observability / policy enforcement
- Tool call trace logs
- Rate limits
- Payload checks
- Security scans

**Detailed notes**
- **How users expose content to agents** — Once an agent is added, it can join Teams channels and group chats, participate in email threads, access shared documents, interact with business databases, and process/store/generate new content. The important caveat is that the agent inherits whatever content is shared with it.
- **Persistence is the practical difference** — A human may read a document or message and move on; the course emphasizes that an agent keeps access until that access is removed. This does not mean the agent “remembers” everything in a human sense, but it can continue to retrieve and reuse what it still has permission to reach.
- **User training matters** — Alongside data governance, the course strongly recommends end-user training because users need to understand warnings, the permanence of agent access, and the risks of sharing sensitive information with AI. Fear about job replacement is explicitly cited as an adoption issue that must be handled empathetically.
- **Three access patterns** — The module distinguishes: **assistant/on-behalf-of agent**, which uses the user’s credential and can only access what the user can access; **autonomous app**, which uses admin-consented permissions and can independently call APIs/resources; and **autonomous user**, where an **agent user** is used for systems that require a user object.
- **Where access shows up** — Collaboration-space access includes all prior channel messages, files, transcripts, group-chat content, and shared artifacts. Direct sharing includes CC’ing the agent into an email thread or granting file/folder access, both of which create durable access. Dataverse extends this model into Power Platform-style business data.
- **Named risks** — The module explicitly lists: exposing content to unintended audiences, surfacing old or forgotten content, persistent access to shared files, cross-data leakage across roles/departments, and absence of human judgment on sensitive content.
- **Built-in protections and trust controls** — Permission boundaries prevent access to content that was never shared; audit logs record actions; admins can revoke access; DLP and compliance policies still apply; first-time or sharing-point warnings appear; and agents are clearly labeled as AI in the user experience.
- **Important nuance about summaries** — The built-in protections list says sensitivity labels protect files but **not summaries**. This is one of the biggest practical traps in the whole course: the protected source may be well-controlled while the generated summary becomes the new leakage point.
- **Microsoft 365 boundary statement** — The course stresses that Microsoft 365 Copilot keeps data within the Microsoft 365 compliance boundary. It also notes a nuance: depending on which underlying LLM engine is selected, processing may happen in Microsoft infrastructure or, for some supported engines, be sent to the third-party provider’s infrastructure.
- **Shadow AI rationale** — Shadow AI is the AI-era version of shadow IT: unsanctioned tools bought or used directly by employees. Risks include data leakage, compliance violations, and uncontrolled agent/tool activity, including use of malicious or unapproved MCP servers.
- **How shadow AI discovery works** — Discovery relies on traffic analysis, cataloging apps, surfacing usage insights, monitoring exposure, and then taking action. The course highlights two main tool paths: **Defender for Cloud Apps** for SaaS discovery from logs/endpoints, and **Global Secure Access** for broader, always-on internet visibility.
- **Defender for Cloud Apps ingestion modes** — The course explicitly names three discovery paths: manual firewall/proxy log upload; continuous log collection from firewall/proxy; and signal from **Defender for Endpoint**, which is preferred because it sees traffic pre-TLS encryption on the device.
- **Global Secure Access deployment steps** — The module lays out a four-step sequence: enable the **Internet Access traffic forwarding profile**; assign it to users/groups; install the **GSA client** (or route branch-office traffic via tunnels); and then access shadow AI discovery using the generative-AI apps/tools filters.
- **Why Internet Access profile matters** — Once internet traffic is routed through Global Secure Access, organizations gain a secure web gateway in the cloud and can block individual sites or categories. This is how they move from visibility to enforcement.
- **Prompt injection protection at the edge** — With Global Secure Access in place, an AI gateway can inspect prompts going out and responses coming back, even if the external generative AI app itself has weak protections. The course specifically says this requires **no code changes** in the target application.
- **MCP server governance** — For developer and operational agent scenarios, Microsoft provides managed MCP servers via Work IQ (Outlook, Teams, SharePoint, Word, Admin Center, Copilot Search, Dataverse, and more). These are governed centrally through Microsoft 365.
- **MCP governance surfaces** — The course groups MCP protections into **central control**, **scoped access**, **observability**, and **policy enforcement**. Admins can require consent, block a server globally, scope use to a subset of users, view activated tools, and inspect tool-call tracing.
- **Observability for MCP tools** — Defender advanced hunting can expose tool call trace logs, parameters, execution outcomes, anomalies, and unauthorized usage. The key concept is that MCP access should never be “invisible plumbing”; it is part of the governed attack surface.
- **Developer journey note** — The transcript briefly mentions command-line steps like **A365 develop**, **A365 setup**, and **A365 create an instance** to show a programmatic developer journey from local development to deployment/publishing.

**Exam / assessment pointers**
- Know the three access patterns: **on-behalf-of**, **autonomous app**, and **autonomous user/agent user**.
- Be able to explain why **persistent access** and **old data** are major agent risks.
- Remember the four Global Secure Access shadow-AI setup steps.
- Know that Global Secure Access adds prompt-injection inspection with **no code changes** to the external AI app.
- Remember the main Microsoft-managed MCP examples: Outlook, Teams, SharePoint, Word, Admin Center, Copilot Search, Dataverse.
- Be able to state that MCP governance includes scoped permissions, tracing, rate limits, payload checks, and security scans.

### 6. Security Dashboard for AI
**What it covers** — This module introduces the executive and committee-level risk rollup for AI. It explains why AI governance needs a single dashboard across identity, threat, and data controls, and how Security Dashboard for AI aggregates signals from Entra, Defender, Purview, and Security Copilot. It is positioned as the place for prioritization and escalation rather than deep operations.

**Key concepts**
- Security Dashboard for AI
- ai.security.microsoft.com
- Unified AI risk visibility
- Governance committees
- Evolving AI regulations
- Inventory
- Misconfigurations
- Attack paths
- Security recommendations
- Data anomalies
- Entra signals
- Defender signals
- Purview signals
- Security Copilot prompts
- Unsanctioned apps
- Active agents by platform
- Data security risks
- Cloud security risks
- Identity and access risks
- Recommendation assignment
- Practitioner portal pivot

**Detailed notes**
- **Why a separate dashboard exists** — The course argues that AI governance committees, CISOs, CIOs, and similar leaders need a single place to see overall risk. They should not have to manually stitch together Entra, Defender, and Purview views to understand exposure.
- **Dashboard purpose** — The dashboard is for **unified visibility**, **prioritization of critical risks**, and **driving mitigations**. It is not the place where every fix is made; instead, it helps users pivot into the underlying practitioner portals.
- **Signals and scope** — The dashboard pulls identity-management and Conditional Access signals from **Entra**, threat/posture/app signals from **Defender**, classification/DLP/Insider Risk signals from **Purview**, and conversational/prompt-based exploration from **Security Copilot**.
- **What leaders see** — The course shows inventory counts, misconfigurations, attack paths, sensitive interactions, and recommendations. It also supports natural-language exploration such as asking for the top unsanctioned apps.
- **Example output** — A Copilot-style query in the dashboard can return top unsanctioned, unmanaged apps such as **Perplexity**, **DeepSeek**, **ChatGPT**, and **Google Gemini**, along with transaction/usage context.
- **Recommendation workflow** — Recommendations can be assigned to operational owners. Examples shown include enabling Conditional Access for agents, enabling Identity Protection, turning on Purview Audit and DLP, and enabling Defender for AI services, App Governance, or Copilot Studio AI agents.
- **AI inventory dimension** — Beyond simple counts, the dashboard is intended to show AI models, MCP services, AI apps, active agents by platform, and a cross-workload summary of data security risk, cloud security risk, and identity/access risk.
- **Operational meaning** — The module’s implicit message is that dashboards alone are insufficient; they only become useful when Entra, Purview, Defender, and Security Copilot are already producing the right underlying signals.

**Exam / assessment pointers**
- Remember the portal URL: **ai.security.microsoft.com**.
- Know the dashboard’s four main signal sources: **Entra, Defender, Purview, Security Copilot**.
- Be able to explain that the dashboard is for **visibility and prioritization**, while remediation usually happens in the underlying admin/security tools.
- Recognize examples of recommendations surfaced there: Conditional Access, Identity Protection, Purview controls, Defender AI services, App Governance, and Copilot Studio AI-agent enablement.

### 7. Security Copilot & Microsoft Security Store
**What it covers** — This module explains how Microsoft Security Copilot fits into the agent story, both as a conversational assistant and as the platform behind many security-focused agents. It covers embedded and standalone Copilot experiences, Security Copilot agents, the Security Store, and the responsible-AI expectations that should shape any agent strategy. It is the bridge between AI operations and the SOC/IT operating model.

**Key concepts**
- Security Copilot
- Standalone experience
- Embedded experience
- Promptbooks
- Plugins
- Skills
- Security compute units (SCUs)
- Workspace
- Azure subscription / resource group / capacity
- Threat intelligence plugin
- Natural language to KQL
- KeyQL
- Defender XDR embedded experience
- Sentinel embedded experience
- Entra embedded experience
- Intune embedded experience
- Purview embedded experience
- Security Copilot agents
- Conditional Access Optimization Agent
- Phishing Triage Agent
- DLP alert triage agent
- Insider Risk / IRM alert triage agent
- Vulnerability remediation agent
- Threat intelligence briefing agent
- Continuous learning from feedback
- Adaptive automation
- Microsoft Security Store
- Security standards
- Security agents
- Security integrations
- Microsoft-built agents
- Custom-built agents
- Partner-built agents
- NL-to-agent
- YAML manifest upload
- Agent Builder
- Responsible AI practices
- Accuracy
- Privacy
- Transparency
- Prompt-attack defense
- Iterative risk mitigation

**Detailed notes**
- **What Security Copilot is** — Security Copilot is described as a generative-AI-powered assistant specialized for Microsoft security tooling, threat intelligence, investigation, and response. It is not framed as “generic chat plus a plugin,” but as an orchestrated security engine with embedded domain understanding.
- **Two main experiences** — The course distinguishes a **standalone experience** at **securitycopilot.microsoft.com** from **embedded experiences** inside Defender, Sentinel, Entra, Intune, Purview, and related tools. In embedded mode, the assistant can summarize incidents, generate KQL, explain device/user/app status, and help create or remediate policies.
- **What it helps with** — Rapid investigation and response, scaled visibility, faster troubleshooting, and advanced skills for non-experts. The module explicitly says Copilot can upgrade lower-tier analysts by helping them perform complex tasks such as code/script analysis, hunting-query generation, and summary/report drafting.
- **Secure compute units (SCUs)** — Consumption is measured in SCUs. The instructor cites **$4 per SCU per hour**, with overage at **$6 per SCU per hour**. He also notes a tenant entitlement heuristic in which organizations with Microsoft 365 E5/E7 can receive SCUs based on license count, illustrated with a **1,000-user** example yielding **400 SCUs per month**.
- **Operational cost lesson** — A strong practical point is that SCUs can be consumed quickly and need real budgeting/limits. The course explicitly warns that Security Copilot is powerful but can be expensive for SMB-scale environments.
- **Security Copilot flow** — User prompt → Security Copilot orchestration → context-building plan → plugin/data access → response composition → formatted output. This mental model matters because later agent workflows are built on the same orchestration idea.
- **Workspace setup** — The standalone onboarding flow includes choosing a workspace name, geographic storage location, Azure subscription/resource group, capacity, and role-based access. The course demo uses **1 SCU** and stresses that cost begins as soon as capacity is created.
- **Promptbooks and plugins** — Promptbooks are multi-prompt workflows for repeated scenarios such as Sentinel incident investigation or suspicious-script analysis. Plugins/skills include threat-intelligence access and natural-language-to-KQL capabilities.
- **Embedded examples** — In Purview, Copilot summarizes alerts; in Intune, it helps create a removable-storage-blocking policy; in Defender, it summarizes or explains incidents; in Sentinel, it helps with hunting and investigation; in Entra, it helps investigate risky users; and in Purview, it helps with data-loss and insider-risk investigation.
- **Security Copilot agents** — The course positions these as more adaptive than classic static automation. They continuously learn from feedback, adapt to organizational workflows, and operate inside Microsoft’s Zero Trust framework.
- **Named security agents** — The module names several: **Conditional Access Optimization Agent**, **Phishing Triage Agent**, **DLP alert triage agent**, **IRM alert triage agent**, **Vulnerability Remediation Agent**, and **Threat Intelligence Briefing Agent**. Each is intended to reduce repetitive work and help teams focus on the highest-value tasks.
- **Why agents beat brittle automation** — Traditional SOAR/automation can save time but becomes expensive to maintain as conditions change. Security Copilot agents are positioned as more resilient because feedback can teach them what to ignore or prioritize in the future.
- **Conditional Access Optimization Agent** — This agent is singled out as the poster child: it runs regularly, checks Conditional Access gaps, looks for improperly covered users/groups, and helps ensure break-glass accounts are correctly excluded.
- **Break-glass account reminder** — The course reiterates that every Entra tenant should have one or preferably two break-glass administrator accounts, with phishing-resistant MFA such as hardware keys.
- **Security Store** — The Security Store is described as now generally available and as a curated security-oriented marketplace experience for **security standards**, **security agents**, and **security integrations**. It supports Microsoft, custom, and partner solutions and is meant to simplify both discovery and purchasing/deployment.
- **Store filtering dimensions** — In the agent catalog, users can filter by product family (Security Copilot, Defender, Entra, Intune, Purview, Sentinel), certifications such as **SOC 2**, **ISO 27001**, **GDPR**, **PCI DSS**, and **FedRAMP**, pricing model, publisher, and rating.
- **How custom agents are built** — The course lists four components for a custom Security Copilot agent: **tools/skills**, **triggers**, **orchestrator**, and **instructions**. Build paths include natural-language-to-agent, YAML upload, Agent Builder, and MCP-based integration.
- **Responsible AI in security/agent strategy** — The module ends by reinforcing that AI strategy must manage risk, improve accuracy, protect privacy, reinforce transparency, and defend against prompt attacks. It warns against treating responsible AI as a last-minute checkbox.

**Exam / assessment pointers**
- Remember the split between **standalone** and **embedded** Security Copilot experiences.
- Know what **SCUs** are and the cited **$4/hour** cost with **$6/hour** overage.
- Be able to name exemplar Security Copilot agents, especially the **Conditional Access Optimization Agent** and **Phishing Triage Agent**.
- Know the three Security Store catalog areas: **security standards, security agents, security integrations**.
- Remember the four custom-agent building blocks: tools/skills, triggers, orchestrator, instructions.
- Be ready to explain why responsible AI is iterative and must be designed in early.

### 8. Foundry Control Plane - AI lifecycle governance
**What it covers** — This module introduces the second control plane in the course: the developer-oriented Foundry Control Plane. It explains how builders define, test, deploy, evaluate, trace, red-team, secure, and operate fleets of agents. The emphasis is that Agent 365 governs operational enterprise use, while Foundry governs the pro-code build-and-run lifecycle.

**Key concepts**
- Foundry Control Plane
- Microsoft Foundry
- AI Hub (previous name)
- Dual control surfaces
- Define / build / approve / operate
- Guardrails and controls
- End-to-end observability
- Fleet-wide operations
- Token usage
- Inference latency
- Intent resolution
- Coherence
- Evaluations
- Synthetic test data
- Local development evaluation
- CI/CD evaluation
- Production evaluation
- Azure Monitor integration
- Model router
- Quality evaluators
- Safety evaluators
- Private endpoints
- Managed virtual network
- Credential-less support
- TLS 1.2
- Customer-managed keys
- Azure Key Vault
- HSM
- Logic Apps connectors
- PyRIT / Python Risk Identification Tool
- Attack success rate (ASR)
- Direct adversarial probing
- Tracing agent
- Workflow visualization
- Azure AI Content Safety
- Multimodal filtering
- Prompt shielding
- Protected materials detection
- Ungrounded attributes
- Task adherence
- Agent-specific controls
- Indirect prompt injection checks

**Detailed notes**
- **Why a second control plane exists** — The course is explicit that Agent 365 is primarily for IT/security operations, while Foundry Control Plane is for pro-code developers. Developers need tracing, evaluators, model controls, and CI/CD-facing observability that would not make sense as the main view for admin personas.
- **Role separation** — Dev teams build and test agents, ensure guardrails are applied, evaluate model safety, and monitor runtime behavior/cost/performance. IT teams onboard and govern running agents, prevent sprawl, and apply collaboration-tool policies. Security teams protect identities, enforce least privilege, prevent oversharing, defend against threats, and meet regulatory obligations.
- **Lifecycle model** — Developers **define**, **build**, **approve**, and **operate** agents inside Foundry; those agents are then deployed into Agent 365 for enterprise use. The same agents remain observable from the developer side for performance, quality, cost, and troubleshooting.
- **Developer telemetry** — Foundry surfaces metrics such as total token usage, inference latency, intent resolution, coherence, scheduled evaluations, request volume, tool calls, run counts, and error rates. These are explicitly presented as developer-meaningful rather than admin-meaningful metrics.
- **Guardrails at multiple intervention points** — Unlike simple chatbot interactions with only prompt/input and response/output checks, agents introduce more checkpoints. The module says controls can be applied at prompt entry, tool call, tool response, data access/response points, and final output, allowing much more granular safety enforcement.
- **Model governance** — Foundry allows enterprises to constrain which models developers may use and to apply model-routing logic so the most appropriate model handles a task based on quality/cost characteristics.
- **Operational alerts in Foundry** — Example alerts include user access blocked because of critical error, high response latency, out-of-compliance agents, jailbreak attempts, and policy violations. These are treated as first-class fleet-management signals.
- **Continuous evaluation** — The control plane runs evaluators during **local development**, in **CI/CD**, and in **production**. Production evaluation can sample real workloads periodically to check drift, task adherence, tool use, and output quality over time.
- **Synthetic and real test data** — Test data should resemble real-world interactions, including edge cases. Foundry can generate synthetic data or use supplied datasets. The evaluation client library supports adversarial and non-adversarial prompting.
- **Evaluation dimensions** — The module lists groundedness, coherence, fluency, relevance, similarity, NLP metrics, jailbreak detection, hate/unfairness, sexual content, violence, self-harm, protected-material output, intent resolution, task adherence, tool-call appropriateness, and code vulnerabilities.
- **Data and network protection** — Foundry supports private endpoints, managed VNets, and credential-less access patterns for Azure Storage, Key Vault, and Container Registry. It also supports TLS 1.2, customer-managed keys, and HSM-backed key storage through Key Vault Premium.
- **Fleet operations** — Foundry is intended for very large agent populations, with aggregate views such as prevented behaviors, compliance counts, success rate, alert trends, run volumes, and per-agent status.
- **Simplified integration** — The newer Foundry experience reduces setup burden versus the older AI Hub era. The module also notes built-in support for numerous **Logic Apps connectors**, making it easier to reach enterprise data and SaaS systems.
- **AI Red Teaming with PyRIT** — PyRIT (the **Python Risk Identification Tool**) is Microsoft’s open-source automation framework for red teaming generative AI systems. It supports repeated, scalable probing of either base models or applications/agents and yields measurements such as **attack success rate (ASR)**.
- **Why red teaming is uniquely necessary for AI** — The instructor makes a conceptual point: classic software engineering tried to separate the control plane from the data plane, but AI mixes them. Because prompts contain both instruction and data, prompt-injection defense is probabilistic rather than a simple deterministic filter like SQL sanitization.
- **Planning red-team work** — Before testing: decide who will test, what to test, how to test, and how to record data. During testing: remain on active standby. After each round: report data and distinguish “identification of issues” from “measurement of issue frequency/severity.”
- **Tracing and debugging** — A tracing view can show multi-agent workflows end to end: one agent invokes another, retrieves knowledge, uses tools/memory, calls specific LLMs, and then forwards output to another agent. This is the “Foundry difference” for debugging bottlenecks and orchestration mistakes.
- **Azure AI Content Safety** — Foundry includes the same broad safety system used for Copilot-style experiences: multimodal filtering, custom blocklists/categories, prompt shielding, protected-material detection, ungrounded-attribute checks, and task-adherence controls.
- **Content Safety categories** — The course explicitly lists violent content (weapons, extremism, stalking), sexual content (nudity, pornography, abuse, child exploitation), hate/unfairness (race, nationality, gender identity, religion, disability, appearance, etc.), self-harm, copyrighted/protected materials, fabricated or unsupported claims, direct and indirect prompt attacks, spotlighting, and agent-specific task-adherence checks.

**Exam / assessment pointers**
- Know why the course says Microsoft now has **two control planes**: Agent 365 and Foundry Control Plane.
- Remember that Foundry supports evaluations in **local development, CI/CD, and production**.
- Know what **PyRIT** stands for and that it is used for scalable AI red teaming.
- Be able to explain why prompt injection is harder than traditional injection attacks: AI mixes control and data and behaves non-deterministically.
- Remember private endpoints / managed VNet / customer-managed key as the key infrastructure-protection trio described here.
- Know the main Azure AI Content Safety guardrails and that the system is **multimodal**.

### 9. Post-training Skills Assessment
**What it covers** — The course outline lists a post-training skills assessment immediately after the eight content modules. Its purpose is to validate the learner’s skills gained from the self-paced material and mark completion. No separate technical teaching content is provided in the source beyond that completion role.

**Key concepts**
- Post-training Skills Assessment
- Course completion validation
- Skills gathered from the self-paced learning

**Detailed notes**
- The assessment is the formal checkpoint after the eight modules.
- According to the course outline, it exists to validate the skills gained in the course and mark the learner’s completion.
- In practical study terms, it should be treated as a cumulative check across Agent 365 control-plane concepts, observability, governance, security, data sharing risk, Security Dashboard for AI, Security Copilot, and Foundry Control Plane.

**Exam / assessment pointers**
- Expect the assessment to test cross-module distinctions rather than isolated feature names alone.
- Be ready to compare Agent 365 vs Foundry Control Plane, Entra vs Purview vs Defender responsibilities, and observe/govern/secure mappings.
- Review exact metrics, roles, risk signals, and named products because the course repeatedly returns to those anchors.

## Key terminology
| Term | Definition | Where it appears |
|---|---|---|
| Access package | Time-bound entitlement bundle used to grant agents approved access to resources, APIs, or groups. | Modules 3, 4 |
| Agent 365 | Microsoft’s control plane for observing, governing, and securing agents across the enterprise. | Modules 1-7 |
| Agent card manifest | Metadata object that represents the agent’s published description/capabilities in the registry. | Module 2 |
| Agent identity | Primary token-based identity used by an AI agent to authenticate. | Modules 2-4 |
| Agent identity blueprint | Reusable parent/template from which multiple agent identities can be created. | Modules 2-3 |
| Agent identity blueprint principal | Tenant object that records the presence of a blueprint in Entra. | Module 2 |
| Agent Map | Visual map view of the registry showing clusters, relationships, and metrics. | Module 2 |
| Agent user | Optional user-shaped identity object used when a downstream system requires a user object. | Modules 2, 5 |
| AI baseline | Compliance Manager’s AI-focused assessment baseline derived from EU AI Act and NIST AI RMF. | Module 3 |
| AI observability | Purview DSPM capability that shows what AI apps and agents are doing with data. | Modules 4, 5 |
| AIAgentsInfo | Defender advanced-hunting table used to inspect AI-agent details and activity. | Module 4 |
| ASR | Attack success rate; a red-teaming metric used in Foundry/PyRIT workflows. | Module 8 |
| Conditional Access | Entra policy engine used to block or control agent access based on risk or attributes. | Modules 1, 4 |
| CSA (custom security attribute) | Key-value attribute used to target Conditional Access or related controls for agents. | Module 4 |
| DLP | Data Loss Prevention; Purview capability for stopping inappropriate sharing of sensitive data. | Modules 3-5 |
| DSPM | Data Security Posture Management; Purview solution for AI/data risk posture and observability. | Modules 3-6 |
| DSI | Data Security Investigations; AI-assisted identify/investigate/mitigate workflow for incident-related data. | Module 4 |
| E7 / Frontier Worker Suite | Licensing bundle that combines E5, Entra Suite, Copilot, and Agent 365 capabilities. | Module 1 |
| Entra Agent ID | Entra-based identity system for AI agents. | Modules 2-4 |
| Foundry Control Plane | Developer-side control plane for evaluating, tracing, governing, and operating AI fleets. | Module 8 |
| Global Secure Access | Microsoft’s SASE platform used for traffic control, shadow-AI discovery, and prompt protection. | Modules 1, 5 |
| Hero metrics | Admin-center metrics for agent adoption and operational impact. | Module 2 |
| Identity Protection | Entra risk-detection capability extended to agents. | Modules 1, 2, 4 |
| Lifecycle Workflows | Entra Identity Governance workflows used for automated sponsor/owner lifecycle handling. | Module 3 |
| MCP server | Model Context Protocol server exposing tools/data/actions to agents. | Modules 1, 5 |
| OBO / delegated user access | On-behalf-of flow where the agent uses the signed-in user’s delegated access. | Module 2 |
| OTEL / OpenTelemetry | Telemetry framework used for agent observability. | Module 2 |
| Ownerless agent | Agent without an assigned technical owner; treated as a governance problem. | Modules 2, 3 |
| Prompt shielding | Content Safety / protection feature for detecting and mitigating prompt injection attempts. | Module 8 |
| Purview Audit | Audit capability that logs AI app and agent activities for traceability. | Modules 3, 4 |
| PyRIT | Python Risk Identification Tool used for automated AI red teaming. | Module 8 |
| SCU | Security compute unit used to meter Security Copilot consumption. | Module 7 |
| Security Copilot | Microsoft’s generative security assistant and platform for security-focused agents. | Modules 6, 7 |
| Security Dashboard for AI | Executive dashboard aggregating AI risk signals across Entra, Defender, Purview, and Copilot. | Module 6 |
| Security Store | Microsoft marketplace experience for security standards, agents, and integrations. | Module 7 |
| Sensitivity label | Information Protection label used to classify and protect data or containers. | Modules 3-5 |
| SIT | Sensitive Information Type used by Purview to detect regulated or sensitive data patterns. | Module 3 |
| Sponsor | Business-side accountable human for an agent’s lifecycle and access justification. | Modules 2-3 |
| Unified audit log | Central Microsoft 365 audit destination that records Agent 365 actions. | Module 3 |
| Work IQ | Microsoft 365 context layer and tool ecosystem that exposes enterprise data and actions to agents. | Modules 1, 5 |
| Zero Trust for AI | Applying verify explicitly, least privilege, and assume breach to AI systems and agents. | Module 1 |

## Hands-on labs
| Lab / exercise | Objective | Tools | Sequence of steps |
|---|---|---|---|
| Observe agents in the Microsoft 365 admin center | Review agent inventory, usage, risk, and requests. | Microsoft 365 admin center / Agent 365 | Open Agents overview → inspect counts/trends → open All agents → review data/tools/security tabs → inspect risks and ownerless agents. |
| Publish a pending agent with a template | Apply governance during onboarding. | Microsoft 365 admin center | Open pending request → inspect data/tools/security → choose publish/activate → select user/group scope → apply template and policies → accept permissions → publish. |
| Explore Agent ID in Entra | Understand blueprint, identity, owners/sponsors, and sign-ins. | Entra admin center | Open Agent ID → inspect blueprints → open an agent identity → review owners/sponsors/permissions/audit/sign-in logs → observe registry deprecation messaging. |
| Create a custom collection | Segment discovery and governance boundaries. | Entra Agent ID collections | Create custom collection → add target agents → review available collection roles and intended access model. |
| Create sponsor-notification workflows | Prevent orphaned agents after org changes. | Entra ID Governance / Lifecycle Workflows | Open Lifecycle Workflows → create/edit mover/leaver workflow → add email-manager and/or email-co-sponsor tasks → review and create. |
| Build an access package for agents | Grant least-privilege, time-bound access to agents. | Entitlement Management / My Access | Create access package → choose catalog → add API permissions/groups/resources → define who can request and who approves → set lifecycle duration → create and assign/request. |
| Review AI baseline compliance posture | See AI regulatory readiness and remediation tasks. | Purview Compliance Manager / DSPM | Open Purview → Compliance Manager → AI baseline assessment → review Microsoft vs customer actions, points, and improvement actions. |
| Investigate risky AI behavior in Purview | Correlate DLP, Communication Compliance, Insider Risk, and Audit evidence. | Purview DSPM / Activity Explorer / Audit / Communication Compliance | Open high-risk agent → inspect activity timeline → drill into DLP blocks and unethical prompts → review audit entries and compliance matches. |
| Enable Defender inventory for Copilot Studio AI agents | Surface AI agents in Defender. | Defender portal + Power Platform | In Defender enable Copilot Studio AI Agents → in Power Platform enable Microsoft Defender – Copilot Studio AI Agents → validate inventory/hunting data. |
| Hunt agent activity in Defender | Investigate incidents and risky tool usage. | Defender XDR / Advanced Hunting | Open incident → inspect user + agent → confirm compromise if needed → pivot to Advanced Hunting → query AIAgentsInfo and community queries. |
| Discover shadow AI with Global Secure Access | Find unsanctioned AI apps through internet traffic. | Global Secure Access | Enable Internet Access traffic forwarding → assign users/groups → install GSA client → use AI-app filters and risk views. |
| Review MCP tools in Agent 365 | Understand central tool governance. | Microsoft 365 admin center → Tools | Open Tools → inspect Microsoft MCP servers → review status, URL, version, and allow/block/scoping controls if licensed. |
| Stand up Security Copilot | Experience standalone Security Copilot setup and cost model. | securitycopilot.microsoft.com / Azure | Create workspace → choose region/subscription/resource group → assign SCU capacity and limits → explore agents, Promptbooks, plugins. |
| Browse the Security Store | Discover security standards, agents, and integrations. | Microsoft Security Store | Open catalog → filter by solution family/certification/publisher → inspect details, pricing/trial model, and deployment path. |
| Evaluate and red-team an agent in Foundry | Test quality, safety, and adversarial resilience. | Microsoft Foundry / Evaluations / PyRIT | Create/open agent → attach data → set guardrails → run evaluations locally or in CI/CD → launch red-teaming scans → review groundedness/ASR/policy results. |
| Trace a multi-agent workflow | Debug orchestration and performance bottlenecks. | Foundry Control Plane tracing | Open workflow trace → follow agent-to-agent/tool/model sequence → inspect bottlenecks, low-quality steps, and handoff issues. |

## Common pitfalls and gotchas
- Treating AI oversharing as a Copilot problem instead of a permissions-and-data-governance problem.
- Allowing agents to remain **ownerless** or without a business **sponsor**.
- Forgetting that agent deletion is soft-delete oriented and that access/instances may persist for a period.
- Granting broad blueprint permissions and never converting them into time-bound, reviewable access packages.
- Assuming users will understand agent warnings without explicit training.
- Leaving old, stale, or forgotten content accessible, which makes AI outputs look current even when the source is obsolete.
- Ignoring anonymous sharing links in SharePoint/OneDrive.
- Forgetting that sensitivity labels protect source files but that summaries can still expose sensitive data.
- Expecting Conditional Access for agents to behave like user Conditional Access with MFA step-up; the course mostly presents **block** as the action.
- Confusing the preview-era dual-registry experience in Entra with the long-term direction of a single operational registry in the Microsoft 365 admin center.
- Assuming manual review scales; the course repeatedly shows automation as mandatory once agent counts grow.
- Treating Security Copilot or AI agents as a substitute for human oversight instead of an amplifier for human operators.
- Using external AI or unsanctioned AI tools without a shadow-AI discovery and enforcement story.
- Treating prompt injection like classic deterministic input sanitization instead of a probabilistic, continuously tested safety problem.
- Forgetting to enable the underlying signal sources (Purview, Defender, Entra, GSA, Power Platform integration), then expecting dashboards to be meaningful.

## Self-test questions
1. What three pillars define Microsoft Agent 365, and how does the course say they should be applied?
2. Which four statistics are used in the opening module to justify enterprise concern about agents?
3. Why does the course argue that agents need the same controls as users “and more”?
4. What are the core capabilities Agent 365 is meant to provide at a high level?
5. What licensing combination is described as Microsoft 365 E7 / the Frontier Worker Suite?
6. How does the course map Observe, Govern, and Secure to Zero Trust for AI principles?
7. Which Microsoft portals/products form the main security-management foundation extended to agents?
8. What are the four hero metrics highlighted for agent adoption and impact?
9. In the admin-center lifecycle, what is the difference between publish, activate, deploy, pin, and block?
10. What is an agent identity blueprint, and what happens if it is disabled?
11. Why does Microsoft introduce a separate agent identity concept instead of treating agents as ordinary service principals?
12. What is the role of an agent user, and what important limits still apply to it?
13. What are the built-in collections mentioned for agent organization, and what are they for?
14. What four offline risky-agent detections are named in the Entra Identity Protection discussion?
15. How are Outlook, Word/PowerPoint, and Teams sessions grouped in the observability model?
16. What is the difference between an agent owner and an agent sponsor?
17. Why are access packages preferred over static long-lived permissions for agent governance?
18. Which Lifecycle Workflow tasks are shown for handling sponsor transitions?
19. Where do Agent 365 audit records land, and why is that important?
20. What is the AI baseline in Compliance Manager derived from?
21. What is oversharing, and what three common causes are given?
22. When labeled source documents are used to generate a new document, what label behavior does the course describe?
23. What are the three phases of Microsoft Purview Data Security Investigations?
24. What two setup areas must be enabled to surface Copilot Studio AI agents in Defender?
25. What kinds of suspicious content and suspicious behavior can Defender inspect for AI-agent runtime protection?
26. What are the three agent access patterns described in the data-sharing-risk module?
27. What are the four rollout steps for shadow AI discovery in Global Secure Access?
28. What does prompt-injection protection via Global Secure Access add, and why is it operationally attractive?
29. What broad categories of MCP governance are emphasized in the course?
30. Why does the Security Dashboard for AI exist if Entra, Defender, and Purview already exist?
31. What are SCUs, and what pricing numbers are cited for Security Copilot consumption?
32. Name at least three Security Copilot agents called out by the course.
33. What are the four building blocks of a custom Security Copilot agent?
34. Why does the course say there are effectively two control planes, and who is each one for?
35. At what three lifecycle stages can Foundry evaluators be run?
36. What does PyRIT stand for, and why does the course consider AI red teaming especially necessary?
37. What kinds of things can Azure AI Content Safety filter or detect according to the module?
38. Why is old or forgotten data a recurring risk theme throughout the course?
39. What repeated governance lesson does the course make about scale?
40. What is the purpose of the Post-training Skills Assessment according to the outline?

## Answer key
1. **Observe, Govern, Secure**; the course says they happen together, not as a sequential maturity ladder.
2. **82%** expect agent use in 12–18 months; **80%** cite sensitive-data leakage as the main concern; **88%** are concerned about indirect prompt injection; **55%** lack understanding of AI regulation.
3. Because agents touch many tools, data sources, apps, users, LLMs, and other agents, can act autonomously, and can do damage faster than humans if misconfigured or compromised.
4. Registry/inventory, identity and access control, visualization, interoperability, governance, and security/monitoring.
5. Microsoft 365 **E5 + Entra Suite + Microsoft 365 Copilot + Agent 365**.
6. **Observe = verify explicitly; Govern = use least privilege access; Secure = assume breach.**
7. **Microsoft 365 admin center, Microsoft Entra, Microsoft Purview, and Microsoft Defender / Defender XDR**.
8. **Active users, Total sessions, Exception rate, Agent Runtime**.
9. Publish makes the agent available; activate allows eligible users/groups to install it; deploy pre-installs it; pin forces prominent visibility; block stops use.
10. It is the reusable parent/template for agent identities; disabling it can disable all agent instances created from that blueprint.
11. Because agent behavior is autonomous, tool-using, dynamic, and sometimes short-lived, so Microsoft treats it as a different identity pattern.
12. It is an optional user-shaped object for systems that require a user object; it still has no password, no passkey, no MFA, and no interactive sign-in.
13. **Global** and **Quarantine**; they organize discovery and governance boundaries for agents.
14. **Unfamiliar resource access, sign-in spike, failed access attempt, and use by a risky user**.
15. Outlook = by **email thread**; Word/PowerPoint = by **comment**; Teams = **time-based**, ending after **30 minutes** of inactivity.
16. Owner = technical/admin configuration responsibility; sponsor = business accountability and justification.
17. Because access packages can be approved, reviewed, time-limited, and expired, which better supports least privilege and lifecycle governance.
18. **Email manager about sponsorship changes** and **Email co-sponsors about sponsor changes**.
19. In the **Microsoft 365 unified audit log**; it provides traceability for audit, investigation, and proof of what agents did.
20. The **EU AI Act** and the **NIST AI Risk Management Framework**.
21. Oversharing is when a user has access to more information than needed, so Copilot/agents can also reach it; causes include broad storage locations, incorrect sharing to people who should not have access, and files without access protections.
22. The output inherits the **most restrictive** sensitivity label among the labeled sources.
23. **Identify, Investigate, Mitigate**.
24. Enable **Copilot Studio AI Agents** in the **Defender portal** and enable **Microsoft Defender – Copilot Studio AI Agents** in the **Power Platform portal**.
25. Suspicious content such as jailbreaks, secrets/sensitive data, malicious URLs, and manipulative encodings; suspicious behavior such as abnormal user/agent behavior, application behavior, tool behavior, and access parameters.
26. **On-behalf-of/assistant agent, autonomous app, autonomous user (agent user pattern).**
27. Enable Internet Access traffic forwarding, assign users/groups, install the GSA client (or equivalent branch routing), then access the shadow-AI discovery views/filters.
28. It adds edge-layer inspection of prompts going out and responses coming back, with **no code changes** required in the external AI app.
29. **Central control, scoped access, observability, and policy enforcement**.
30. Because leaders need one live, unified view for AI risk prioritization rather than manually stitching together multiple practitioner portals.
31. SCUs are **Security compute units**; the cited pricing is **$4 per SCU per hour** with **$6 per SCU per hour** overage.
32. Examples: **Conditional Access Optimization Agent, Phishing Triage Agent, DLP alert triage agent, IRM alert triage agent, Vulnerability Remediation Agent, Threat Intelligence Briefing Agent**.
33. **Tools/skills, triggers, orchestrator, instructions**.
34. **Agent 365** is the IT/security/enterprise operations control plane; **Foundry Control Plane** is the developer/pro-code build-and-run control plane.
35. **Local development, CI/CD, and production**.
36. **Python Risk Identification Tool**; AI red teaming is especially necessary because prompts mix data and control, and prompt-injection behavior is non-deterministic rather than easily filterable like classic software injection flaws.
37. Harmful or unsafe multimodal content, prompt-injection attempts, protected materials, ungrounded attributes, and agent/task-adherence issues across categories like violence, sexual content, hate/unfairness, and self-harm.
38. Because AI will happily use stale but accessible content, making obsolete information newly influential in summaries, drafts, and answers.
39. Manual governance does not scale; templates, workflows, access packages, telemetry, and policy automation become mandatory as agent counts rise.
40. To validate the learner’s skills gained from the self-paced course and mark completion.
