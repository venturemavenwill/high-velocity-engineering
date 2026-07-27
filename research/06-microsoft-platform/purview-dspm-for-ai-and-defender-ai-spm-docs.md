# Cliff Notes — Purview DSPM for AI and Defender AI Security Posture Management

## Citation and access
- **Titles:** "Learn about Data Security Posture Management for AI (classic)" and "Overview — AI security posture management".
- **Publisher:** Microsoft, Microsoft Learn (Microsoft Purview and Microsoft Defender for Cloud documentation).
- **Sources consulted:**
  - `https://learn.microsoft.com/en-us/purview/dspm-for-ai` — **fetched and read in full.**
  - `https://learn.microsoft.com/azure/defender-for-cloud/ai-security-posture` — **read through search-returned excerpts, not fetched in full.**
  - Supporting excerpts read from `https://learn.microsoft.com/azure/security/fundamentals/ai-security-best-practices`, `https://learn.microsoft.com/azure/defender-for-cloud/defender-for-cloud-introduction`, `https://learn.microsoft.com/security/security-for-ai/discover` and `/protect`.
- **Access status:** open documentation. **Highly perishable.** The Purview page fetched is explicitly labelled **classic** and states it "is now replaced with a new version"; Defender's agent-level capabilities are moving to a separate licence from **1 July 2026**.

## What this source is
Two complementary product surfaces that together define what "AI governance" means as an engineering discipline rather than a policy document. **Purview DSPM for AI** governs the *data* side: what sensitive information flows into and out of AI tools, who is oversharing what, and which interactions must be captured for compliance. **Defender AI security posture management** governs the *workload* side: which AI applications exist in the estate at all, what they are built from, how they are misconfigured, and what an attacker could chain together. Read together they answer two different questions — "what is our data doing in AI systems" and "what AI systems do we even have" — and the fact that these require separate products is itself the lesson.

## The argument in full
Purview's framing is a refusal of a false choice: DSPM for AI exists "so you can safely adopt AI without having to choose between productivity and protection." It offers four capability groups — insights and analytics into AI activity; ready-to-use policies to protect data and prevent data loss in AI prompts; data risk assessments to identify, remediate and monitor potential oversharing; and compliance controls for data handling and storage. The scope is deliberately broad: it covers "Copilots, agents, and other AI apps that use third-party large language modules", with a maintained list of supported third-party sites including those used for Gemini and ChatGPT. That breadth is the interesting part. Governing only your own AI systems governs the smaller half of the problem, because employees paste sensitive data into somebody else's.

The oversharing argument is the page's strongest reasoning and the one most worth teaching. Its statement is precise: "Because of the power and speed AI can proactively surface content that might be obsolete, over-permissioned, or lacking governance controls, generative AI amplifies the problem of oversharing data." Oversharing is not new. Organisations have had over-permissioned SharePoint sites for two decades, and the reason it caused little damage is that nobody read them. A retrieval system reads all of them, instantly, on behalf of anyone who asks. The latent misconfiguration becomes an active leak the day a Copilot is switched on. This is a genuinely important idea and it generalises: **deploying a capable retrieval system converts every dormant permissions error in an organisation into a live one.**

The response is a **data risk assessment**, which runs "automatically weekly for the top 100 SharePoint sites based on usage", with custom assessments available and a Fabric equivalent covering the top 100 workspaces. The assessment surfaces total items found, sensitive data detected and the number of links sharing data with anyone, and its detail view is organised into **Identify, Protect and Monitor** tabs — a structure worth borrowing regardless of tooling, because it separates discovery from remediation from ongoing observation. Remediation options are concrete: restrict access by label using a DLP policy that prevents Copilot and agents from summarising labelled data; restrict all items using SharePoint Restricted Content Discovery to exempt whole sites; create auto-labelling policies for unlabelled sensitive files; and create retention policies to delete content untouched for three years. Item-level scanning adds four actions on individual overshared items — **Resolve**, **Apply sensitivity label**, **Notify** the site owner, and **Remove sharing link** — and the documentation flags the last as "an action to be used sparingly because it could prevent people from accessing the item legitimately." That caution is the whole governance dilemma in one sentence: the safest action is also the most disruptive, and someone has to decide.

The operational limits are stated plainly and are more instructive than they look: a maximum of **200,000 items per location**, with file counts possibly inaccurate above **100,000 files per location**; OneDrive not supported for item-level scanning; and a maximum of **10 SharePoint sites** for item-level scanning. Timing is similarly bounded — at least **24 hours** for new policies to produce data, at least **48 hours** for custom assessment results, a **4-day delay** before the first default assessment displays, and a **30-day expiry** on custom assessment results. A tool that scans a sample of the estate on a weekly cadence with multi-day latency gives you a posture estimate, not a real-time control. Students should be taught to read those numbers as the resolution of the instrument.

The recommendations list doubles as a map of the AI-governance problem space, and each entry names a distinct risk: protecting against oversharing; applying sensitivity labels; preventing Copilot and agents from processing labelled items; detecting risky interactions to calculate user risk through insider risk management; governing ChatGPT Enterprise interactions; mapping to AI regulations via Compliance Manager templates; capturing prompts and responses for Copilot in Fabric and Security Copilot; detecting sensitive information shared with AI over the network via SASE or SSE integration; capturing prompts and responses from Entra-registered AI apps, the ChatGPT Enterprise Connector and applications built on Microsoft Foundry; and capturing prompts and responses for AI apps using Azure AI subscriptions. One detail deserves emphasis because it is a trap: without an explicit policy, "auditing events are captured for Copilot in Fabric and Security Copilot, but not the prompts and responses." Knowing that an interaction happened is not the same as knowing what was said, and the default gives you only the former.

**Activity explorer** is where the telemetry lands, and its field list is a good specification for what AI observability should capture: activity type and user, date and time, AI app category and app, app accessed in, sensitive information types, files referenced, and sensitive files referenced. Event types include **AI interaction**, **Sensitive info types** and **AI website visit**, with prompts and responses included in AI interaction events "when you have the right permissions" — a permissions gate on reading prompt content that is itself a governance control worth noticing. Workloads are grouped into **Copilot experiences and agents**, **Enterprise AI apps** and **Other AI apps**, a taxonomy that maps neatly onto first-party, sanctioned-third-party and shadow AI.

Defender for Cloud approaches the same territory from the infrastructure side, and its core artefact is the **generative AI Bill of Materials (AI BOM)** — "application components, data, and AI artifacts from code to cloud." The reduction of risk is described in four moves: discovering the AI BOM; strengthening posture with built-in recommendations; using **attack path analysis** to identify and remediate risks; and highlighting externally reachable AI endpoints so teams can enforce strong authentication and least-privilege identities. Discovery is automatic and continuous across **Azure OpenAI Service, Azure AI Foundry, Azure Machine Learning, Amazon Bedrock and Google Vertex AI** — multicloud by design, which matters because AI estates are rarely single-vendor. It also discovers vulnerabilities in generative AI library dependencies "such as TensorFlow, PyTorch, and Langchain" by scanning source code for infrastructure-as-code misconfigurations and container images for known vulnerabilities.

The four named IaC AI security checks are worth memorising because they are a minimal secure-baseline checklist for any hosted model endpoint: **use Azure AI Service Private Endpoints; restrict Azure AI Service Endpoints; use Managed Identity for Azure AI Service Accounts; use identity-based authentication for Azure AI Service Accounts.** Three of the four are about eliminating keys and network exposure — the same two ideas that dominate the gateway and search material. **Attack path analysis** addresses what the documentation calls "toxic combinations": individually acceptable configurations that compose into a breach, with the specific concern that "data might be exposed during the grounding of AI models to specific data and the fine-tuning of a pretrained model on a specific dataset." Grounding and fine-tuning are the two moments a model touches proprietary data, and they are therefore the two moments the data can leak by construction rather than by attack.

The threat model on the Defender side names attacks the rest of the platform documentation does not: "prompt injections, wallet attacks, model theft, and data poisoning, while increasing susceptibility to known risks such as data breaches and denial of service." A **wallet attack** — driving cost rather than downtime — is a genuinely AI-native failure mode that follows directly from usage-based billing, and it links this material straight back to the token-quota mechanisms in the gateway. Detection is described as being powered by Azure AI Content Safety prompt shields, Microsoft threat intelligence signals and contextual activity monitoring.

Two structural facts should be carried forward. First, the **classic-versus-new split** in Purview: the page fetched is explicitly superseded, and "these improvements won't be added to this classic version." Second, the **licensing migration** on the Defender side: "Effective July 1, 2026, AI agent discovery and security posture for Microsoft Foundry agents and third-party cloud agents require a Microsoft Agent 365 license", with Defender CSPM continuing to discover Foundry accounts and projects but not agent-level capabilities. Both are reminders that governance tooling is a moving target and that any course content built on it must be treated as perishable.

## Structure of the originals
**Purview DSPM for AI (classic):**
- Classic-version notice and pointer to the replacement
- What DSPM for AI is, and the four capability groups
- How to use it — prerequisites, one-click policies, recommendations
- Reports, Policies, Apps and agents, Activity explorer
- Data risk assessments — Microsoft 365 tab and Fabric tab
- Custom assessments, item-level scanning, remediation actions, export, and limits

**Defender AI security posture management:**
- What Defender CSPM covers across Azure, AWS and GCP including Vertex AI
- The four risk-reduction moves, including the AI BOM
- Discover generative AI apps — services covered and dependency scanning
- Discover AI agents (preview) and the Agent 365 licensing transition
- Reduce risks — recommendations, IaC misconfiguration checks, attack path analysis

## Key concepts and practices
- **Purview's four capability groups:** insights and analytics; ready-to-use prompt data-loss policies; data risk assessments for oversharing; compliance controls.
- **The oversharing argument:** generative AI "amplifies the problem of oversharing data" by surfacing content that is "obsolete, over-permissioned, or lacking governance controls."
- **Default data risk assessment runs weekly over the top 100 SharePoint sites**, and, once configured, the **top 100 Fabric workspaces**.
- **Assessment detail is organised as Identify, Protect, Monitor.**
- **Remediation options:** restrict access by label via DLP; SharePoint Restricted Content Discovery to exempt sites; auto-labelling for unlabelled sensitive files; retention policies deleting content unaccessed for three years.
- **Item-level actions:** Resolve, Apply sensitivity label, Notify owner, Remove sharing link — the last flagged as disruptive and to be used sparingly.
- **Stated limits:** 200,000 items per location; counts possibly inaccurate above 100,000 files per location; OneDrive unsupported for item-level scanning; maximum 10 SharePoint sites for item-level scanning.
- **Stated latencies:** 24 hours for policy data; 48 hours for custom assessment results; 4-day delay on first default assessment; 30-day expiry on custom results.
- **Without an explicit policy, Copilot in Fabric and Security Copilot audit the event but not the prompts and responses.**
- **Activity explorer captures** activity type and user, timestamp, AI app category and app, app accessed in, sensitive information types, files referenced and sensitive files referenced; prompts and responses are permission-gated.
- **Workload taxonomy:** Copilot experiences and agents; Enterprise AI apps; Other AI apps.
- **Defender's AI BOM** covers "application components, data, and AI artifacts from code to cloud."
- **Automatic continuous discovery across five services:** Azure OpenAI Service, Azure AI Foundry, Azure Machine Learning, Amazon Bedrock, Google Vertex AI.
- **Dependency scanning** names TensorFlow, PyTorch and Langchain; covers IaC misconfigurations and container image vulnerabilities.
- **Four IaC AI security checks:** private endpoints; restricted endpoints; managed identity; identity-based authentication.
- **Attack path analysis** targets "toxic combinations", with grounding and fine-tuning named as the data-exposure moments.
- **Named AI-native attacks:** prompt injection, wallet attacks, model theft, data poisoning, plus data breach and denial of service.
- **From 1 July 2026, agent-level discovery and posture require a Microsoft Agent 365 licence.**

## Method and evidence base
First-party product documentation, definitional rather than empirical. It describes capabilities and states operational limits, which is unusually useful, but it provides no detection rates, no false-positive rates, no measurements of how much oversharing exists in a typical estate, and no evaluation of the controls' effectiveness. The Purview page fetched is superseded by a newer version that was not read, so some described behaviour may already be historical. The Defender material was read through search excerpts rather than a full page fetch, so its structure is reconstructed rather than fully verified.

## Vocabulary the sources introduce
- **Data Security Posture Management (DSPM) for AI** — centralised visibility and control over how AI tools interact with organisational data.
- **AI security posture management (AI-SPM)** — discovery, assessment and hardening of the AI workloads themselves.
- **AI Bill of Materials (AI BOM)** — the inventory of application components, data and AI artefacts from code to cloud.
- **Data risk assessment** — a scan for oversharing, structured as Identify, Protect, Monitor.
- **Oversharing** — content that is over-permissioned, obsolete or ungoverned, latent until a retrieval system surfaces it.
- **Attack path analysis** — detection of toxic combinations of individually tolerable weaknesses.
- **Toxic combination** — a chain of acceptable configurations that composes into a breach.
- **Restricted Content Discovery** — exempting SharePoint sites from Copilot retrieval wholesale.
- **Wallet attack** — an attack that drives cost rather than downtime.
- **Prompt shields** — content-safety detection for injection and jailbreak attempts.
- **Shadow AI** — unsanctioned third-party AI use, the "Other AI apps" category.

## What to remember
- Governance splits into two questions with two toolsets: what our data is doing in AI systems, and what AI systems we have at all.
- Deploying capable retrieval converts every dormant permissions error into a live leak. Oversharing was survivable only because nobody was reading.
- Governing your own systems governs the smaller half; employees use third-party tools, and those need coverage too.
- Assessment tooling samples the estate on a weekly cadence with multi-day latency. It gives posture estimates, not real-time control.
- The safest remediation is usually the most disruptive. Someone has to own that trade-off.
- Auditing that an interaction happened is not auditing what was said. Prompt and response capture usually needs explicit configuration.
- Grounding and fine-tuning are the two moments a model touches proprietary data, and therefore the two moments it can leak by construction.
- The minimum secure baseline for a hosted endpoint is private endpoints, restricted endpoints, managed identity and identity-based authentication.
- Attack path analysis exists because individually acceptable configurations compose into breaches.
- Usage-based billing creates a cost-based attack surface — the wallet attack — that classical security models do not cover.

## Why it matters for the course
This material converts governance from a compliance topic into an engineering one, which is exactly the move the course needs. Three ideas here are durable and transfer beyond the products. The first is the oversharing amplification argument, which is the clearest available explanation of why AI deployment is a security event rather than a feature launch. The second is the split between data posture and workload posture, which tells students that a complete answer requires inventory as well as policy. The third is the resolution-of-the-instrument point: every governance tool has a scan scope, a cadence and a latency, and an engineer who cannot state those three numbers does not know what their controls actually cover. It also completes an arc with the rest of this strand — [azure-ai-search-and-acl-patterns.md](/research/06-microsoft-platform/azure-ai-search-and-acl-patterns.md) shows how permissions are enforced at retrieval, this note shows how the permission estate is assessed and remediated, and [apim-ai-gateway-docs.md](/research/06-microsoft-platform/apim-ai-gateway-docs.md) shows where the traffic controls sit.

## How to teach it
- **Lecture:** teach the oversharing amplification argument first, with no product attached. It is the most important idea in this strand.
- **Lecture:** distinguish data posture from workload posture, and ask which one a permissions fix addresses.
- **Lab:** have students enumerate their own project's AI BOM by hand — every component, dependency, data source and endpoint — before showing them a tool that does it. The manual pass is where the surprise happens.
- **Lab:** apply the four IaC checks to a deployed endpoint and demonstrate what each one closes.
- **Lab:** design an attack path across two individually acceptable configurations and have another team find it.
- **Assessment:** require every deployed feature to state its scan scope, assessment cadence and detection latency, and to say what falls outside all three.
- **Assessment:** present the "remove sharing link" dilemma and ask for a decision with a justification and a rollback plan. The reasoning about disruption is the assessable part.
- **Assessment:** ask what is logged, who can read prompts and responses, and under what authority.
- **Framing:** perishable in the extreme. One source is already superseded and the other is mid-licence-migration. Assess the reasoning only.

## Limits and cautions
- **The Purview page consulted is the classic version and is explicitly superseded.** Some described behaviour may already be historical.
- **The Defender material was read through search excerpts, not a full page fetch.** Its structure here is reconstructed and should be re-verified before teaching.
- Agent-level discovery and posture move to a **Microsoft Agent 365 licence from 1 July 2026**, which changes what is available under which plan.
- No effectiveness data of any kind: no detection rates, no false-positive rates, no coverage measurements.
- Coverage is bounded in ways that are easy to miss — top-100 sampling, item-level scanning limited to 10 SharePoint sites, OneDrive excluded.
- Substantial licensing and administrative prerequisites, including Entra app registrations and tenant-administrator consent, which a course lab may not be able to satisfy.
- Capturing prompts and responses is itself a privacy decision with legal implications the documentation does not analyse.
- Single-vendor. The concepts transfer; the mechanisms and portal paths do not.

## Verification status
Verified by fetching and reading the Purview DSPM for AI (classic) page in full: the classic-version notice and its statement that improvements will not be backported; the productivity-versus-protection framing and all four capability groups; the third-party AI site coverage; the one-click policy model and the 24-hour data-collection wait; the weekly default assessment over the top 100 SharePoint sites and, after configuration, the top 100 Fabric workspaces; the 4-day first-display delay, the 48-hour custom-result wait and the 30-day expiry; the Identify, Protect and Monitor tab structure; all four Microsoft 365 remediation options and all four item-level actions, including the quoted caution on removing sharing links; the full recommendations list including the statement that Copilot in Fabric and Security Copilot audit events but not prompts and responses without a policy; the Activity explorer field list, event types, permission gate on prompt content, and the three-way workload taxonomy; the quoted oversharing-amplification sentence; the supported Fabric item types; and all stated Microsoft 365 limits including 200,000 items per location, the 100,000-file accuracy caveat, the OneDrive exclusion and the 10-site item-level cap. Verified from Defender for Cloud documentation excerpts returned by search: the four risk-reduction moves and the AI BOM definition; multicloud coverage across Azure, AWS and GCP including Vertex AI; the five automatically discovered services; dependency scanning naming TensorFlow, PyTorch and Langchain; all four IaC AI security checks; attack path analysis and the grounding-and-fine-tuning exposure statement; the named attack list including prompt injection, wallet attacks, model theft and data poisoning; the prompt-shields, threat-intelligence and contextual-monitoring detection basis; and the 1 July 2026 Agent 365 licensing transition. **Not verified:** the content of the new non-classic Purview DSPM page, which was not read; the full structure of the Defender AI security posture page, which was not fetched; and any effectiveness, detection-rate or prevalence figure, none of which appears in either source. The characterisation of scan scope, cadence and latency as "the resolution of the instrument", and the framing of dormant permissions errors becoming live on retrieval deployment, are **this note's own analysis, not claims from the sources.**
