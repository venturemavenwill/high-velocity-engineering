# Source Register

Date: 2026-07-28

Use this file to track which sources were used, what they supported, and whether they are durable theory or perishable product detail.

Every source below has a Cliff Notes file under `research/`. Entries record the identifier that makes the source re-findable — arXiv ID, DOI, PMCID, ISBN or URL — together with the access status and whether the full text was read.

## Internal documents, not external sources
- `README.md`
- `sources/vendor-courses/03-Accelerate-Agentic-AI.md` — synthesis of internal Microsoft LevelUp course ID 2307124. **Not publicly accessible; not citable externally.**
- **An internal Microsoft forward-deployed delivery standard** — reachable at the time of reading, but carrying an internal confidentiality marking, published from an individual's personal space rather than an official Microsoft channel, and attributed to internal documents and meetings. **Not citable externally, and not published Microsoft guidance.** It is recorded only as a **public paraphrase**: no link, no exact label, no individual's name, no internal document title or meeting date. Only durable structure — ordering, roles, artefact chain — is carried into teaching, restated in this repository's own words. Note: [microsoft-fde-delivery-practice.md](/research/05-fde-craft/microsoft-fde-delivery-practice.md); binding page: [14-FDE-Delivery-Standard.md](/archive/bsc-programme/program/14-FDE-Delivery-Standard.md).
- **An internal Microsoft accelerated-delivery practice corpus** — approximately ninety documents covering a delivery model, a design-thinking method, a workshop delivery system, a customer discovery question bank, a value-conversation framework, a project security-hygiene standard, a responsible-AI assessment regime and two maturity instruments. **Access-controlled; portions carried confidentiality markings and portions were encrypted at rest at source. Not publicly reachable and not citable externally.** Read in full on 2026-07-30. Recorded only as a **public paraphrase**: no link, no rendered title, no organisational identifier, no individual, no customer. Note: [microsoft-accelerated-delivery-practice.md](/research/05-fde-craft/microsoft-accelerated-delivery-practice.md).
- **An internal Microsoft chained agent pipeline for threat modelling** — fourteen agent definitions plus entry, usage and skill documents, held in an identity-gated repository. **Not publicly reachable and not citable externally.** Read in full on 2026-07-30. Recorded only as a **public paraphrase**: no prompt text, no suite codename, no link. Note: [microsoft-agentic-threat-modelling.md](/research/05-fde-craft/microsoft-agentic-threat-modelling.md).
- **What was deliberately excluded from both notes, recorded so a later reader knows the omission was a decision rather than an absence:** a roster of named individuals holding a security role; a named customer case study; internal tenant, environment and application identifiers; internal escalation routing, mailboxes and ticket queues; platform-specific injection detail and worked exploit examples; and every figure asserted without a source — of which the delivery corpus contains roughly thirty and the agent pipeline roughly fifteen. **Both notes state the existence and subject of each figure and reproduce none of them.**
- **The standing rule these entries set.** Where source material is Microsoft-internal — or is reachable but marked confidential, hosted outside an official channel, gated behind corporate sign-in, or attributed to internal documents and meetings — **this repository paraphrases it, attributes it to Microsoft in general terms, and neither links it nor quotes it by label.** Genuinely published Microsoft material on an official domain is treated as ordinary open source and cited normally. Where two provenance signals conflict, the more restrictive one governs.
- `sources/vendor-courses/06-Hypervelocity-Engineering-Framework.md`
- `research/01-course-structure/09-curriculum-design-benchmark-and-sources.md`
- `research/01-course-structure/10-gap-analysis-and-course-architecture.md`
- `research/01-course-structure/11-research-brief-for-complete-course-design.md`
- `research/08-assessment-epas/epa-research-notes.md`

## Memo sources collected from the department simulation
Retained but out of scope for source verification: course structure, technical foundations, measurement and evaluation, professional formation, FDE craft, Microsoft platform, and accreditation and exemplar memos.

## Technical foundations
| Source | Identifier | Access | Read |
|---|---|---|---|
| Vaswani et al., "Attention Is All You Need" | arXiv:1706.03762 | open, abstract page | abstract and structure |
| Kwon et al., "Efficient Memory Management for LLM Serving with PagedAttention" (vLLM) | arXiv:2309.06180 | open | abstract and structure |
| Pope et al., "Efficiently Scaling Transformer Inference" | arXiv:2211.05102 | open | abstract and structure |
| Robertson and Zaragoza, "The Probabilistic Relevance Framework: BM25 and Beyond" | *FnTIR* 3(4), 2009; DOI 10.1561/1500000019 | **publisher site blocked** | synthesis only |
| Subramanya et al., "DiskANN" | NeurIPS 2019; Microsoft Research publication page | open | abstract and structure |
| Ouyang et al., "Training language models to follow instructions with human feedback" (InstructGPT) | arXiv:2203.02155 | open | abstract and structure |
| Rafailov et al., "Direct Preference Optimization" | arXiv:2305.18290 | open | abstract and structure |
| Kambhampati et al., on LLM planning limits | arXiv (see note) | open | abstract and structure |
| Barnett et al., "Seven Failure Points When Engineering a RAG System" | arXiv:2401.05856 | open | abstract and structure |
| Thakur et al., "BEIR" | arXiv:2104.08663 | open | abstract and structure |
| Malkov and Yashunin, "HNSW" | arXiv:1603.09320 | open | abstract and structure |
| Crowe, Hapke, Caveness and Zhu, *Machine Learning Production Systems* | O'Reilly, first edition October 2024; ISBN 978-1-098-15601-5 | copyrighted; local EPUB | **full text**, seventeen chapters closely |
| Jégou, Douze and Schmid, "Product Quantization for Nearest Neighbor Search" | *IEEE TPAMI* 2011 | **INRIA HAL document endpoint blocked** | synthesis only |

## Measurement and evaluation
| Source | Identifier | Access | Read |
|---|---|---|---|
| Husain, "Your AI Product Needs Evals" | `https://hamel.dev/blog/posts/evals/` | open | full |
| Huyen, *AI Engineering* | O'Reilly, 2025; ISBN 978-1-098-16630-4 | copyrighted; local PDF | **evaluation chapters read in full**; roughly a third of the book read closely |
| Shankar et al., "EvalGen" / "Who Validates the Validators?" | arXiv:2404.12272 | open | abstract and structure |
| Zheng et al., "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena" | arXiv:2306.05685 | open | abstract and structure |
| Angelopoulos et al., "Prediction-Powered Inference" | arXiv:2301.09633 | open | abstract and structure |
| Miller, "Adding Error Bars to Evals" | arXiv:2411.00640 | open | abstract and structure |
| Singh et al., "The Leaderboard Illusion" | arXiv:2504.20879 | open | abstract and structure |

## Professional formation
| Source | Identifier | Access | Read |
|---|---|---|---|
| Edmondson, *The Fearless Organization* | Wiley, 2019 | copyrighted; local PDF | **full text** |
| Bandura (ed.), *Self-efficacy in Changing Societies* | Cambridge University Press, 1995 | copyrighted; local PDF | **full text** |
| Kapur, *Productive Failure* | book; edition metadata absent from local EPUB | copyrighted; local EPUB | **full text** |
| Bandura, self-efficacy | *Psychological Review* 84(2), 1977 | copyrighted | synthesis only |
| Keith and Frese, error management training meta-analysis | *Journal of Applied Psychology* 93(1), 2008 | copyrighted; local PDF | **full text** |
| Sinha and Kapur, productive failure articles | *Cognition and Instruction* / *Instructional Science* | copyrighted | synthesis only |
| Macnamara et al., deliberate practice meta-analysis | *Psychological Science* 25(8), 2014 | copyrighted | synthesis only |
| Edmondson, psychological safety | *ASQ* 44(2), 1999 | copyrighted | synthesis only |
| Frazier et al., psychological safety meta-analysis | *Personnel Psychology* 70(1), 2017 | copyrighted | synthesis only |
| METR, AI-assisted developer productivity study | METR publication | open | full |
| Dell'Acqua et al., "Navigating the Jagged Technological Frontier" | HBS Working Paper 24-013 | open | full |

## Assessment, EPAs and narrative judgement
| Source | Identifier | Access | Read |
|---|---|---|---|
| ten Cate, "A primer on entrustable professional activities" | *KJME* 30(1):1–10, 2018; DOI 10.3946/kjme.2018.76; **PMCID PMC5840559** | open, CC BY-NC | **full text, via Europe PMC** |
| Oudkerk Pool, Govaerts, Jaarsma and Driessen, "From aggregation to interpretation" | *AHSE* 23(2):275–287, 2018; **PMCID PMC5882626** | open, CC BY 4.0 | **full text, via Europe PMC** |
| Govaerts et al., "Workplace-based assessment: raters' performance theories and constructs" | *AHSE* 18(3):375–396, 2013; **PMCID PMC3728456** | open, CC BY | full text |
| Six further Govaerts / Maastricht works | various | **paywalled** | **not read** |

## Forward-deployed engineering craft
| Source | Identifier | Access | Read |
|---|---|---|---|
| Beyer and Holtzblatt, *Contextual Design: Design for Life*, second edition | Morgan Kaufmann, 2017; EPUB ISBN 978-0-12-801351-4 | copyrighted; local EPUB | full |
| Evans, *Domain-Driven Design* | Addison-Wesley, 2003; edition unverified from local EPUB | copyrighted; local EPUB | **full text** |
| Fisher, Ury and Patton, *Getting to Yes*, third edition | Penguin Books, 2011; EPUB ISBN 978-1-101-53954-5 | copyrighted; local EPUB | full |
| Fitzpatrick, *The Mom Test* | edition metadata absent from local EPUB | copyrighted; local EPUB | full available text |
| Hiatt, *ADKAR* | Prosci Inc., 2006; LCCN 2006903241, verified from the book's own copyright page | copyrighted; local EPUB | **full text** |
| Kotter, *Leading Change* | HBS Press; the local copy is the later edition carrying the author's new preface | copyrighted; local EPUB | **full text** |
| Portigal, *Interviewing Users* | Rosenfeld Media, 2013; ISBN-13 978-1-933820-11-8 | copyrighted; local EPUB | full |
| Microsoft ISE Engineering Fundamentals Playbook | `https://microsoft.github.io/code-with-engineering-playbook/`; repo `microsoft/code-with-engineering-playbook` | open | **all 243 pages read in full**, enumerated from the site's own sitemap; page footer dates range 2021–2025, so cite by page and date, never by site |
| "A Day in the Life of a Palantir Forward Deployed Software Engineer" | Palantir Blog, 2 November 2020 | open — **requires `?gi=` query token to fetch** | full |
| Palantir careers, engineering roles | `https://www.palantir.com/careers/` | open | full |
| Palantir "Dev versus Delta" (Medium) | Palantir Blog, 8 April 2019 | previously blocked by a sign-in redirect; local text copy | **full text** |

## Accreditation, curricular standards and course exemplars
| Source | Identifier | Access | Read |
|---|---|---|---|
| ABET, Criteria for Accrediting Computing Programs, 2025–2026 | `https://www.abet.org/accreditation/accreditation-criteria/criteria-for-accrediting-computing-programs-2025-2026/`; PDF `https://www.abet.org/2025-2026_cac_criteria/` | open | full |
| ABET 2024–2025 criteria | — | **URL 404** | **not read** |
| ACM/IEEE-CS/AAAI, CS2023 | `https://csed.acm.org/`; **DOI 10.1145/3664191** | open HTML | HTML pages only |
| CS2023 sectioned PDFs (three) | csed.acm.org PDF assets | **extraction failed, confirmed 3×** | **not read** |
| CMU 17-645 / 17-445 / 17-745, Machine Learning in Production | `https://mlip-cmu.github.io/`, `https://mlip-cmu.github.io/f2026/`; materials CC at `https://github.com/mlip-cmu` | open, Creative Commons | full |
| Kaestner and Kang, "Teaching Software Engineering for AI-Enabled Systems" | arXiv:2001.06691 | open | abstract |
| Kaestner, *Machine Learning in Production* | MIT Press, open access, `https://mlip-cmu.github.io/book/`; print ISBN 9780262049726 | open access | not read in full |
| Stanford CS336, Language Modeling from Scratch, Spring 2025 | `http://cs336.stanford.edu/spring2025/` | open | full |
| Berkeley, Large Language Model Agents MOOC, Fall 2024 | `https://llmagents-learning.org/f24` | open | full |
| Oakley, peer-rating article referenced by CMU | — | **not located** | **not read** |
| `github.com/ckaestne/seaibib` | open | adjacent | not read |

## Microsoft platform — perishable workstream
All open Microsoft Learn documentation, retrieved via the Learn documentation tools.

| Source | URL | Read |
|---|---|---|
| Provisioned throughput for Foundry models | `https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/provisioned-throughput` | **fetched and read in full** |
| GenAI gateway capabilities in Azure API Management | `https://learn.microsoft.com/en-us/azure/api-management/genai-gateway-capabilities` | **fetched and read in full** |
| Document-level access control in Azure AI Search | `https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview` | **fetched and read in full** |
| Data Security Posture Management for AI **(classic)** | `https://learn.microsoft.com/en-us/purview/dspm-for-ai` | **fetched and read in full — page is superseded** |
| DSPM replacement page | `data-security-posture-management-learn-about` | **not read** |
| AI security posture management, Defender for Cloud | `https://learn.microsoft.com/azure/defender-for-cloud/ai-security-posture` | search excerpts only |
| Azure AI security best practices | `https://learn.microsoft.com/azure/security/fundamentals/ai-security-best-practices` | search excerpts only |
| What is Microsoft Defender for Cloud? | `https://learn.microsoft.com/azure/defender-for-cloud/defender-for-cloud-introduction` | search excerpts only |
| Security for AI — discover and protect | `https://learn.microsoft.com/security/security-for-ai/discover`, `/protect` | search excerpts only |

### Foundry agent build and runtime — read 2026-07-31
Note: [foundry-agent-build-and-runtime.md](/research/06-microsoft-platform/foundry-agent-build-and-runtime.md). Roughly thirty Learn pages were touched across eleven searches; the rows below record the four read in full and the excerpt-only sources grouped by subject. **Several consulted pages are `foundry-classic` variants of superseded surfaces, and one documents a model its own first paragraph calls deprecated — recorded rather than smoothed away.**

| Source | URL | Read |
|---|---|---|
| Set up tracing in Microsoft Foundry | `https://learn.microsoft.com/azure/foundry/observability/how-to/trace-agent-setup` | **fetched and read in full** |
| Agent tracing overview | `https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept` | **fetched and read in full** |
| `agent.yaml` schema reference | `https://learn.microsoft.com/azure/foundry/agents/concepts/agent-yaml-reference` | **fetched and read in full — page documents a model it declares deprecated** |
| Microsoft Foundry authoring skill, v1.2.1, MIT, authored by Microsoft | no URL verified; read from a local installation | **read in full — a workflow router, not a platform source; no claim rests on it** |
| Agent Service overview; hosted agents concept; agents networking deep dive | `https://learn.microsoft.com/azure/foundry/agents/overview`, `/concepts/hosted-agents`, `/concepts/agents-networking-deep-dive` | search excerpts only |
| Agent development with the Azure Developer CLI; deploy to a Foundry endpoint | `https://learn.microsoft.com/azure/foundry/agents/concepts/cli-agent-development`; `https://learn.microsoft.com/azure/developer/azure-developer-cli/azure-ai-ml-endpoints` | search excerpts only — **contradicts the `agent.yaml` reference; both render** |
| Tool catalogue; Toolbox; OpenAPI tools; AI Search tool | `https://learn.microsoft.com/azure/foundry/agents/concepts/tool-catalog`, `/concepts/toolbox-overview`, `/how-to/tools/openapi`, `/how-to/tools/ai-search` | search excerpts only |
| Knowledge sources and knowledge bases; Foundry IQ; Work IQ | `https://learn.microsoft.com/azure/search/agentic-knowledge-source-how-to-search-index`, `/agentic-retrieval-how-to-create-knowledge-base`; `https://learn.microsoft.com/azure/architecture/ai-ml/guide/rag/rag-information-retrieval` | search excerpts only |
| Manage hosted agent sessions; standard agent setup; Agent Service FAQ | `https://learn.microsoft.com/azure/foundry/agents/how-to/manage-hosted-sessions`, `/concepts/standard-agent-setup`, `/faq` | search excerpts only |
| Threads, runs and messages **(classic)** | `https://learn.microsoft.com/azure/foundry-classic/agents/concepts/threads-runs-messages` | search excerpts only — **agents (classic) deprecated, retiring 31 March 2027** |
| Cosmos DB integration with Foundry Agent Service | `https://learn.microsoft.com/azure/cosmos-db/gen-ai/azure-agent-service` | search excerpts only |
| Client-side tracing; tracing for agent frameworks; register external agents | `https://learn.microsoft.com/azure/foundry/observability/how-to/trace-agent-client-side`, `/trace-agent-framework`; `https://learn.microsoft.com/azure/foundry/agents/how-to/register-external-agent` | search excerpts only — **all preview** |
| Trace and observe AI agents **(classic)** | `https://learn.microsoft.com/azure/foundry-classic/how-to/develop/trace-agents-sdk` | search excerpts only — **classic variant** |
| Agent Monitoring Dashboard; cloud evaluation; evaluate your AI agents; observability in generative AI | `https://learn.microsoft.com/azure/foundry/observability/how-to/how-to-monitor-agents-dashboard`, `/evaluate-agent`; `https://learn.microsoft.com/azure/foundry/how-to/develop/cloud-evaluation`; `https://learn.microsoft.com/azure/foundry/concepts/observability` | search excerpts only |
| Continuously evaluate your AI agents **(classic)** | `https://learn.microsoft.com/azure/foundry-classic/how-to/continuous-evaluation-agents` | search excerpts only — **classic variant, superseded** |
| Built-in evaluators reference; rubric evaluators; human evaluation | `https://learn.microsoft.com/azure/foundry/concepts/built-in-evaluators`, `/evaluation-evaluators/rubric-evaluators`; `https://learn.microsoft.com/azure/foundry/observability/how-to/human-evaluation` | search excerpts only — **no evaluator-versus-human agreement figure found anywhere; absence confirmed by dedicated search** |
| Deployment types for Foundry Models; Foundry Models overview; Foundry architecture | `https://learn.microsoft.com/azure/foundry/foundry-models/concepts/deployment-types`; `https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview`, `/architecture` | search excerpts only |
| Fine-tuning considerations; customise a model with fine-tuning; DPO; RFT | `https://learn.microsoft.com/azure/foundry/openai/concepts/fine-tuning-considerations`; `https://learn.microsoft.com/azure/foundry/openai/how-to/fine-tuning`, `/fine-tuning-direct-preference-optimization`, `/reinforcement-fine-tuning` | search excerpts only — **dataset-size guidance is published in quantity and carries no source whatsoever** |
| Build a workflow in Foundry; connected agents **(classic)**; Agent Framework workflows; multi-agent patterns | `https://learn.microsoft.com/azure/foundry/agents/concepts/workflow`; `https://learn.microsoft.com/azure/foundry-classic/agents/how-to/connected-agents`; `https://learn.microsoft.com/agent-framework/journey/workflows`; `https://learn.microsoft.com/microsoft-copilot-studio/guidance/multi-agent-patterns` | search excerpts only — **workflows preview; connected agents classic** |
| Guardrails and controls overview; content filters **(classic)**; default safety policies | `https://learn.microsoft.com/azure/foundry/guardrails/guardrails-overview`; `https://learn.microsoft.com/azure/foundry-classic/openai/how-to/content-filters`; `https://learn.microsoft.com/azure/foundry/openai/concepts/default-safety-policies` | search excerpts only — **agent guardrails preview** |
| Publish your agent as an Agent Application; migrate from agent applications; agent development lifecycle | `https://learn.microsoft.com/azure/foundry/agents/how-to/agent-applications`, `/migrate-agent-applications`, `/concepts/development-lifecycle` | search excerpts only — **the publishing model is labelled legacy and has a migration guide beside it** |
| Debug a hosted agent; monitor hosted agent logs; Foundry MCP available tools | `https://learn.microsoft.com/azure/foundry/agents/how-to/debug-hosted-agent`, `/monitor-hosted-agent-logs`; `https://learn.microsoft.com/azure/foundry/mcp/available-tools` | search excerpts only |
| Transparency Note for Foundry Agent Service | `https://learn.microsoft.com/azure/foundry/responsible-ai/agents/transparency-note` | search excerpts only |
| Microsoft Q&A — default guardrail RAI policies | `https://learn.microsoft.com/answers/a/12769622` | search excerpt only — **community answer with a Microsoft respondent, not published guidance; recorded as such and never cited as documentation** |

### Agent 365, Entra Agent ID and the agent control plane

Note: [agent-365-and-agent-identity.md](/research/06-microsoft-platform/agent-365-and-agent-identity.md). Read 2026-07-31. **General availability 1 May 2026 — the newest source in this register, and the most perishable.** Large parts of the surface are public preview or Frontier preview; a dated migration falls on 1 July 2026; three capabilities carry a June 2026 delivery date and were not re-verified.

| Source | URL | Read |
|---|---|---|
| Overview of Microsoft Agent 365 | `https://learn.microsoft.com/microsoft-agent-365/overview` | **fetched and read in full** |
| Agent management in Microsoft 365 admin center | `https://learn.microsoft.com/microsoft-365/admin/manage/agent-365-overview` | **fetched and read in full** |
| Manage agent registry in Microsoft 365 admin center | `https://learn.microsoft.com/microsoft-365/admin/manage/agent-registry` | **fetched and read in full** |
| Registry sync in the Microsoft 365 agent registry **(preview)** | `https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry` | **fetched and read in full** |
| What are agent identities | `https://learn.microsoft.com/entra/agent-id/what-are-agent-identities` | **fetched and read in full** |
| Microsoft Entra Agent ID key concepts | `https://learn.microsoft.com/entra/agent-id/key-concepts` | **fetched and read in full** |
| Administrative relationships in Microsoft Entra Agent ID | `https://learn.microsoft.com/entra/agent-id/agent-owners-sponsors-managers` | **fetched and read in full** |
| Microsoft Purview data security and compliance for Agent 365 | `https://learn.microsoft.com/purview/ai-agent-365` | **fetched and read in full** |
| Protect AI agents in real time using Microsoft Defender | `https://learn.microsoft.com/defender-cloud-apps/real-time-agent-protection-during-runtime` | **fetched and read in full** |
| Detect and investigate threats to AI agents using Microsoft Defender **(preview)** | `https://learn.microsoft.com/defender-xdr/security-for-ai/ai-agent-detection-protection` | **fetched and read in full** |
| Secure AI agents at scale using Microsoft Agent 365 | `https://learn.microsoft.com/security/security-for-ai/agent-365-security` | **fetched and read in full** |
| Microsoft Agent 365 integration with Foundry | `https://learn.microsoft.com/azure/foundry/agents/concepts/agent-365-integration` | **fetched and read in full** |
| Detect and investigate threats to AI agents — the path the Agent 365 overview publishes | `https://learn.microsoft.com/defender-cloud-apps/ai-agent-detection-protection` | **retrieval failed; content reached at the `defender-xdr` path instead** |
| Agent identities, service principals, and applications | `https://learn.microsoft.com/entra/agent-id/agent-service-principals` | search excerpts only |
| Agent identities · Agent identity blueprints · Plan your agent identity architecture | `https://learn.microsoft.com/entra/agent-id/agent-identities`, `/agent-blueprint`, `/how-to-plan-agent-identity-architecture` | search excerpts only |
| Microsoft Entra Agent ID logs · Agent Registry convergence · Access packages for agent identities | `https://learn.microsoft.com/entra/agent-id/sign-in-audit-logs-agents`, `/agent-registry-convergence`, `/agent-access-packages` | search excerpts only |
| Governing agent identities · Entra ID Governance overview · Zero Trust for AI | `https://learn.microsoft.com/entra/id-governance/agent-id-governance-overview`, `/identity-governance-overview`, `https://learn.microsoft.com/entra/fundamentals/zero-trust-ai` | search excerpts only |
| Shadow AI · Local agents, in Microsoft 365 admin center **(Frontier preview)** | `https://learn.microsoft.com/microsoft-365/admin/manage/agent-shadow-ai`, `/agent-local` | search excerpts only |
| AI agent discovery · Shadow AI discovery, in Global Secure Access **(preview)** | `https://learn.microsoft.com/entra/global-secure-access/concept-ai-agent-discovery`, `/concept-shadow-ai-discovery` | search excerpts only |
| Agent roles and permissions · Agent settings · Agent details · Manage tools for agents | `https://learn.microsoft.com/microsoft-365/admin/manage/agent-roles-perms`, `/agent-settings`, `/agent-details`, `/manage-tools-for-agent` | search excerpts only |
| Connect existing agents to Agent 365 · Agent 365 SDK and CLI · Get started with Agent 365 development | `https://learn.microsoft.com/microsoft-agent-365/connect-existing-agents`, `/developer/`, `/developer/get-started` | search excerpts only |
| Defender security for AI · Transition agent security to Agent 365 | `https://learn.microsoft.com/defender-xdr/security-for-ai/defender-security-for-ai`, `/transition-agent-security-to-agent-365` | search excerpts only |
| Responsible AI FAQ · Exchange Online integration · Intune and Agent 365 · FastTrack · service description | `https://learn.microsoft.com/microsoft-agent-365/admin/responsible-ai-faq`, `/admin/exchange-online-integration`, `/leadership/intune-agent-365`, `https://learn.microsoft.com/microsoft-365/fasttrack/microsoft-agent-365`, `https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365` | search excerpts only |
| Govern and secure AI agents (CAF) · Secure agents (Center of Excellence) | `https://learn.microsoft.com/azure/cloud-adoption-framework/ai-agents/governance-security-across-organization`, `https://learn.microsoft.com/agents/center-of-excellence/secure-agents` | search excerpts only |
| "Microsoft Agent 365, now generally available, expands capabilities and integrations" — Microsoft Security blog, 1 May 2026 | `https://www.microsoft.com/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/` | general web fetch; **arrived heavily fragmented, both capability tables reduced to headers.** Used only for chronology, pricing and the GA-versus-preview split |
| Agent 365 licensing FAQ · plan comparison PDFs · terms of service | `https://www.microsoft.com/licensing/faqs/122` and linked assets | **not read** |
| `AgentsInfo` Advanced Hunting schema · Graph beta resources for `agentIdentity`, `agentIdentityBlueprint`, `agentIdentityBlueprintPrincipal`, `agentUser` | Microsoft Learn and Graph reference | **not read** |
| Work IQ MCP overview — the coverage boundary for Defender real-time protection | `https://learn.microsoft.com/microsoft-agent-365/tooling-servers-overview` | **not read for this note**; read for [microsoft-iq-intelligence-layer.md](/research/06-microsoft-platform/microsoft-iq-intelligence-layer.md), which records it as published twice with divergent content |
| Windows 365 for Agents **(preview, United States only)** | `https://learn.microsoft.com/windows-365/agents/introduction-windows-365-for-agents` | **not read** |

**Silences recorded against this source, and they are the reason the note exists.** No detection rate or false-positive rate is published for any Defender agent detection, any Purview classification, or any shadow-agent detection — **which confirms rather than weakens this repository's standing prohibition on asserting one.** No measure of registry coverage or completeness exists. No latency is published between agent creation and registry appearance, and external registry sync is manual with no cadence at all. No evidence is published that any of this reduces incidents. No SLA, availability target or uptime figure was found. No quota, rate limit or per-tenant agent ceiling was located. And **nothing anywhere characterises what proportion of a real agent estate falls outside all three discovery routes** — preview registry sync for four named platforms, an SDK requiring a code change, and named-application detection on Intune-managed Windows. No third-party or independent evaluation was sought or located.
| Evaluation (Microsoft Agent Framework) | `https://learn.microsoft.com/agent-framework/agents/evaluation` | search excerpts only |
| Agent evaluators (Foundry) | `https://learn.microsoft.com/azure/foundry/concepts/evaluation-evaluators/agent-evaluators` | search excerpts only |
| Built-in evaluators reference | `https://learn.microsoft.com/azure/foundry/concepts/built-in-evaluators` | search excerpts only |
| Run evaluations from the Foundry portal | `https://learn.microsoft.com/azure/foundry/how-to/evaluate-generative-ai-app` | search excerpts only |
| Evaluate your AI agents **(classic)** | `https://learn.microsoft.com/azure/foundry-classic/how-to/develop/agent-evaluate-sdk` | search excerpts only — superseded |
| Technology plan for AI agents (CAF) | `https://learn.microsoft.com/azure/cloud-adoption-framework/ai-agents/technology-solutions-plan-strategy` | search excerpts only |
| Choose the right tool to build your declarative agent | `https://learn.microsoft.com/microsoft-365/copilot/extensibility/declarative-agent-tool-comparison` | search excerpts only |
| Custom engine agents for Microsoft 365 overview | `https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-custom-engine-agent` | search excerpts only |
| Agents for Microsoft 365 Copilot | `https://learn.microsoft.com/microsoft-365/copilot/extensibility/agents-overview` | search excerpts only |
| Microsoft Learn MCP Server overview | `https://learn.microsoft.com/training/support/mcp` | **fetched and read in full**, 2026-07-31 |
| Microsoft Learn MCP Server developer reference | `https://learn.microsoft.com/training/support/mcp-developer-reference` | **fetched and read in full**, 2026-07-31 |
| Best practices for using the Microsoft Learn MCP Server | `https://learn.microsoft.com/training/support/mcp-best-practices` | **fetched and read in full**, 2026-07-31 — closing section truncated at source |
| Microsoft Learn MCP Server frequently asked questions | `https://learn.microsoft.com/training/support/mcp-faq` | **fetched and read in full**, 2026-07-31 |
| Microsoft Learn MCP Server release notes | `https://learn.microsoft.com/training/support/mcp-release-notes` | **fetched and read in full**, 2026-07-31 — seven entries, 2025-06-12 to 2026-03-23 |
| Get started with the Microsoft Learn MCP Server (VS Code) | `https://learn.microsoft.com/training/support/mcp-get-started` | **fetched and read in full**, 2026-07-31 |
| Get started with Microsoft Learn MCP Server in Microsoft Foundry | `https://learn.microsoft.com/training/support/mcp-get-started-foundry` | **fetched and read in full**, 2026-07-31 |
| Microsoft Learn Terms of Use | `https://learn.microsoft.com/legal/termsofuse` | **not read** — a stated condition of using the MCP server |

### Microsoft IQ — Work IQ, Fabric IQ, Foundry IQ
Grouped separately because these span five documentation sets that do not share an editor, and because the group's **membership is itself inconsistent across its own pages** — the hub page and the Fabric IQ page name four capabilities, the Foundry IQ page and both Copilot Studio pages name three. **Web IQ is named in the group and has no Microsoft Learn documentation at all.** All rows read 2026-07-31. Note: [microsoft-iq-intelligence-layer.md](/research/06-microsoft-platform/microsoft-iq-intelligence-layer.md).

| Source | URL | Read |
|---|---|---|
| Microsoft IQ documentation — the hub page | `https://learn.microsoft.com/microsoft-iq` | **fetched and read in full**, 2026-07-31 |
| Work IQ overview | `https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/` | **fetched and read in full**, 2026-07-31 |
| Work IQ API overview | `https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview` | **fetched and read in full**, 2026-07-31 |
| Work IQ MCP overview (preview) — Agent 365 copy | `https://learn.microsoft.com/microsoft-agent-365/tooling-servers-overview` | **fetched and read in full**, 2026-07-31 — **its layer bullets contradict its own opening sentence and the Copilot Studio copy of the same article** |
| Microsoft Work IQ CLI | `https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/workiq-overview` | general web fetch, 2026-07-31 — **fetched to test a cross-reference; the URL resolves to the CLI page, not to a Work IQ overview.** Page metadata `ms.date` 2026-05-12, `updated_at` 2026-06-25; records Work IQ general availability on **16 June 2026** |
| Connect agents to Microsoft 365 with Work IQ (preview) | `https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq` | **fetched**, 2026-07-31 — concept, prerequisites and mechanism read in full; **the per-language SDK sample zones were not read** |
| What is Fabric IQ? | `https://learn.microsoft.com/fabric/iq/overview` | **fetched and read in full**, 2026-07-31 |
| What is ontology (preview)? | `https://learn.microsoft.com/fabric/iq/ontology/overview` | **fetched and read in full**, 2026-07-31 |
| What is Foundry IQ? | `https://learn.microsoft.com/azure/foundry/agents/concepts/what-is-foundry-iq` | **fetched and read in full**, 2026-07-31 |
| Foundry IQ frequently asked questions | `https://learn.microsoft.com/azure/foundry/agents/concepts/foundry-iq-faq` | **fetched and read in full**, 2026-07-31 |
| Agentic retrieval in Azure AI Search | `https://learn.microsoft.com/azure/search/agentic-retrieval-overview` | **fetched and read in full**, 2026-07-31 |
| Microsoft IQ overview for agents (preview) — Copilot Studio | `https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/use-microsoft-iq` | **fetched and read in full**, 2026-07-31 |
| Microsoft IQ sources for agents (preview) — Copilot Studio | `https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/microsoft-iq-sources` | **fetched and read in full**, 2026-07-31 |
| "Foundry IQ: boost response relevance by 36% with agentic retrieval" — Microsoft Foundry Blog, ten named Microsoft authors, 18 November 2025, page marked updated 2 December 2025, version 4.0 | `https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/foundry-iq-boost-response-relevance-by-36-with-agentic-retrieval/4470720` | general web fetch, 2026-07-31 — **tables read in full; charts were not retrievable and were not read.** **Engineering blog, not product documentation** |
| "Up to 40% better relevance for complex queries with new agentic retrieval engine" — the post the 36% blog defers its scoring methodology to | `https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/up-to-40-better-relevance-for-complex-queries-with-new-agentic-retrieval-engine/4413832` | **not read** — so the answer-relevance scoring method is unverified |
| Microsoft Work IQ APIs Terms of Use | `https://learn.microsoft.com/legal/work-iq-apis/terms-of-use` | **not read** — a stated condition of using the Work IQ APIs |
| Work IQ A2A, REST and remote-MCP sub-pages; ontology tutorials and how-to pages; the agentic-retrieval migration guide carrying the authoritative GA breakdown | under `work-iq/`, `fabric/iq/ontology/`, `azure/search/agentic-retrieval-how-to-migrate` | **not read** |
| `microsoft/work-iq-mcp` and `microsoft/work-iq-samples` repositories | `https://github.com/microsoft/work-iq-mcp`, `https://github.com/microsoft/work-iq-samples` | **not read** |
| Web IQ | — | **no Microsoft Learn documentation exists.** Reachable only through `aka.ms/WebIQLearn` and `aka.ms/WebIQNew`, the latter a blog. **Not read; nothing to read** |

### Host, client and background sources for the Learn MCP Server
Grouped separately because the section note above does not describe them: these document the **host** that decides whether the server is ever called, or the **background** to the corpus behind it, rather than the Learn MCP Server product. Of the six rows, four were retrieved by general web fetch rather than by the Learn documentation tools; the Visual Studio row is Learn documentation read at excerpt depth; and one row is an engineering blog rather than product documentation. Note: [learn-mcp-server-docs.md](/research/06-microsoft-platform/learn-mcp-server-docs.md).

| Source | URL | Read |
|---|---|---|
| `MicrosoftDocs/mcp` repository README — docs, CLI, agent skills and plugin manifests; CC BY 4.0 and MIT | `https://github.com/MicrosoftDocs/mcp` | general web fetch, 2026-07-31 — **navigation-heavy extraction, tables partly flattened**; the hosted server's implementation does not appear to be published in it |
| Add and manage MCP servers in VS Code | `https://code.visualstudio.com/docs/copilot/customization/mcp-servers` | general web fetch, 2026-07-31; page footer dated 7/29/2026 — **collapsed FAQ bodies did not expand and were not read** |
| Use tools in chat (VS Code) | `https://code.visualstudio.com/docs/chat/chat-tools` | general web fetch, 2026-07-31; footer 7/29/2026 — **collapsed FAQ bodies not read**, including the "more than 128 tools per request" answer |
| Use custom instructions in VS Code | `https://code.visualstudio.com/docs/copilot/customization/custom-instructions` | general web fetch, 2026-07-31; footer 7/29/2026 — **collapsed worked examples not read** |
| Use MCP servers in Visual Studio | `https://learn.microsoft.com/visualstudio/ide/mcp-servers` | search excerpts only |
| "How we built *Ask Learn*, the RAG-based knowledge service" — Microsoft engineering blog, 22 April 2024 | `https://devblogs.microsoft.com/engineering-at-microsoft/how-we-built-ask-learn-the-rag-based-knowledge-service/` | general web fetch, 2026-07-31 — **background on the corpus, not on the MCP server, which it predates by over a year** |

### Foundry Control Plane, governance and operations
Grouped separately because these document how Foundry is **governed, permissioned, quota'd, monitored and paid for** rather than what can be built with it — the complement to the build-path comparison pages listed above. All open Microsoft Learn documentation, retrieved 2026-07-31 via the Learn documentation tools, except the two rows marked otherwise. Note: [foundry-control-plane-and-governance.md](/research/06-microsoft-platform/foundry-control-plane-and-governance.md). **Seven pages were fetched in full; the remainder were read at search-excerpt depth and their page structure is reconstructed, not confirmed.**

| Source | URL | Read |
|---|---|---|
| What is Microsoft Foundry Control Plane? | `https://learn.microsoft.com/azure/foundry/control-plane/overview` | **fetched and read in full**, 2026-07-31 |
| Authentication and authorization in Microsoft Foundry | `https://learn.microsoft.com/azure/foundry/concepts/authentication-authorization-foundry` | **fetched and read in full**, 2026-07-31 |
| Microsoft Foundry architecture | `https://learn.microsoft.com/azure/foundry/concepts/architecture` | **fetched and read in full**, 2026-07-31 |
| Role-based access control for Microsoft Foundry | `https://learn.microsoft.com/azure/foundry/concepts/rbac-foundry` | **fetched and read in full**, 2026-07-31 — records that the five Foundry roles were renamed from Azure AI \* mid-publication |
| Microsoft Foundry Models lifecycle and support policy | `https://learn.microsoft.com/azure/foundry/openai/concepts/model-retirements` | **fetched and read in full**, 2026-07-31 |
| Tracing and data handling | `https://learn.microsoft.com/azure/foundry/observability/concepts/trace-data` | **fetched and read in full**, 2026-07-31 |
| Manage agents at scale in Microsoft Foundry Control Plane | `https://learn.microsoft.com/azure/foundry/control-plane/how-to-manage-agents` | **fetched and read in full**, 2026-07-31 |
| Manage and increase quotas for resources with Microsoft Foundry | `https://learn.microsoft.com/azure/foundry/how-to/quota` | search excerpts only |
| Azure OpenAI in Microsoft Foundry Models quotas and limits | `https://learn.microsoft.com/azure/foundry/openai/quotas-limits` | search excerpts only |
| Microsoft Foundry Models quotas and limits | `https://learn.microsoft.com/azure/foundry/foundry-models/quotas-limits` | search excerpts only |
| Manage Azure OpenAI in Microsoft Foundry Models quota | `https://learn.microsoft.com/azure/foundry/openai/how-to/quota` | search excerpts only |
| Plan and manage costs for Microsoft Foundry | `https://learn.microsoft.com/azure/foundry/concepts/manage-costs` | search excerpts only |
| Model versions in Microsoft Foundry Models | `https://learn.microsoft.com/azure/foundry/foundry-models/concepts/model-versions` | search excerpts only |
| Manage compliance and security in Microsoft Foundry | `https://learn.microsoft.com/azure/foundry/control-plane/how-to-manage-compliance-security` | search excerpts only |
| Quickstart: Create a guardrail policy | `https://learn.microsoft.com/azure/foundry/control-plane/quickstart-create-guardrail-policy` | search excerpts only |
| Built-in policies for model deployment in Microsoft Foundry portal | `https://learn.microsoft.com/azure/foundry/how-to/model-deployment-policy` | search excerpts only |
| Create custom policies for Microsoft Foundry | `https://learn.microsoft.com/azure/foundry/how-to/custom-policy-definition` | search excerpts only |
| Monitor agents with the Agent Monitoring Dashboard | `https://learn.microsoft.com/azure/foundry/observability/how-to/how-to-monitor-agents-dashboard` | search excerpts only |
| Agent tracing overview | `https://learn.microsoft.com/azure/foundry/observability/concepts/trace-agent-concept` | search excerpts only |
| Monitor agent health and performance across your fleet | `https://learn.microsoft.com/azure/foundry/control-plane/monitoring-across-fleet` | search excerpts only |
| Register and manage custom agents | `https://learn.microsoft.com/azure/foundry/control-plane/register-custom-agent` | search excerpts only |
| How to configure network isolation for Microsoft Foundry | `https://learn.microsoft.com/azure/foundry/how-to/configure-private-link` | search excerpts only |
| Set up your environment (agent setup comparison) | `https://learn.microsoft.com/azure/foundry/agents/environment-setup` | search excerpts only |
| Set up private networking for Foundry Agent Service (templates) | `https://learn.microsoft.com/azure/foundry/agents/how-to/virtual-networks` | search excerpts only |
| Networking options for Foundry Agent Service | `https://learn.microsoft.com/azure/foundry/agents/concepts/networking-options` | search excerpts only |
| Agent identity concepts in Microsoft Foundry | `https://learn.microsoft.com/azure/foundry/agents/concepts/agent-identity` | search excerpts only |
| Microsoft Entra Agent ID — key concepts, blueprints, service principals, creation | `https://learn.microsoft.com/entra/agent-id/` (four pages) | search excerpts only |
| Microsoft Foundry rollout across my organization | `https://learn.microsoft.com/azure/foundry/concepts/planning` | search excerpts only |
| Microsoft Foundry portal general availability overview | `https://learn.microsoft.com/azure/foundry/concepts/general-availability` | search excerpts only |
| What is Microsoft Foundry? | `https://learn.microsoft.com/azure/foundry/what-is-foundry` | search excerpts only |
| Baseline Microsoft Foundry chat reference architecture in an Azure landing zone | `https://learn.microsoft.com/azure/architecture/ai-ml/architecture/baseline-microsoft-foundry-landing-zone` | search excerpts only |
| Azure control plane and data plane (ARM) | `https://learn.microsoft.com/azure/azure-resource-manager/management/control-plane-and-data-plane` | search excerpts only |
| Model Retirement Schedule; Models API reference; region-support matrix; guardrails overview; `microsoft-foundry/foundry-samples` | various, linked from the pages above | **not read** — named in the note so the gap is visible |
| **Community Q&A thread on Foundry quota-increase latency** | `https://learn.microsoft.com/answers/a/12356112` | search excerpts only — **community content, not documentation. Cited only as evidence that the question is asked, and given no evidential weight about response times.** |
| **`microsoft-foundry` agent skill, version 1.2.1, MIT** | **no public URL** — a locally installed agent skill | **read in full**, 2026-07-31. Microsoft-authored operational skill, **not published documentation and covered by no currency guarantee.** Supplies the sub-skill map, the `.foundry` workspace convention, the statement that the default `azd ai agent` flow uses basic agent setup and does not provision `capabilityHosts/agents`, the network-isolation error signatures and the management-plane diagnostic query, and the note that Foundry MCP tools cannot reach a VNet-isolated project even from inside the VNet. **Its diagnostic claims are recorded as reported, not verified.** |

### Microsoft 365 Agents Toolkit and the agent SDK family
Grouped separately because these document the **developer-facing build surface** — what a practitioner scaffolds, runs, debugs, promotes and submits — rather than the build-path choice or the evaluation of the result, which are carried by [microsoft-foundry-and-copilot-studio-docs.md](/research/06-microsoft-platform/microsoft-foundry-and-copilot-studio-docs.md) and [agent-framework-and-evaluations-docs.md](/research/06-microsoft-platform/agent-framework-and-evaluations-docs.md) respectively. All rows read 2026-07-31. **Six pages were fetched and read in full; the remainder are excerpt depth; two of the most consequential — the Agent Store validation guidelines and the marketplace certification policies — were not fetched, so the criteria recorded in the note are a subset and are labelled as such.** Every principal name in this group has been renamed at least once. Note: [agents-toolkit-and-sdk-family.md](/research/06-microsoft-platform/agents-toolkit-and-sdk-family.md).

| Source | URL | Read |
|---|---|---|
| Microsoft 365 Agents Toolkit — overview | `https://learn.microsoft.com/microsoftteams/platform/toolkit/overview-agents-toolkit` | **fetched and read in full**, 2026-07-31 |
| What is the Microsoft 365 Agents SDK | `https://learn.microsoft.com/microsoft-365/agents-sdk/agents-sdk-overview` | **fetched and read in full**, 2026-07-31 |
| Microsoft 365 Agents Playground | `https://learn.microsoft.com/microsoftteams/platform/toolkit/debug-your-agents-playground` | **fetched and read in full**, 2026-07-31 — carries the limitations list and the emulation-comparison table |
| Publish agents for Microsoft 365 Copilot | `https://learn.microsoft.com/microsoft-365/copilot/extensibility/publish` | **fetched and read in full**, 2026-07-31 — seven per-build-path distribution matrices |
| Responsible AI validation | `https://learn.microsoft.com/microsoft-365/copilot/extensibility/rai-validation` | **fetched and read in full**, 2026-07-31 |
| Manage environments and versions for declarative agents | `https://learn.microsoft.com/microsoft-365/copilot/extensibility/declarative-agents-multi-environment` | **fetched and read in full**, 2026-07-31 |
| Agent Store Validation Guidelines | `https://learn.microsoft.com/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines` | search excerpts only — **not fetched; the must-fix criteria recorded are a subset** |
| Teams Store validation guidelines | `https://learn.microsoft.com/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines` | search excerpts only |
| Microsoft Marketplace certification policies, §1140 | `https://learn.microsoft.com/legal/marketplace/certification-policies` | search excerpts only — **not fetched; the policy list recorded is partial** |
| Microsoft 365 Agents Toolkit command line interface | `https://learn.microsoft.com/microsoftteams/platform/toolkit/microsoft-365-agents-toolkit-cli` | search excerpts only — the full `atk` command table was captured |
| Set up CI/CD pipelines | `https://learn.microsoft.com/microsoftteams/platform/toolkit/use-cicd-template` | search excerpts only |
| Environments in Microsoft 365 Agents Toolkit | `https://learn.microsoft.com/microsoftteams/platform/toolkit/teamsfx-multi-env` | search excerpts only |
| Publish Teams apps using Microsoft 365 Agents Toolkit | `https://learn.microsoft.com/microsoftteams/platform/toolkit/publish` | search excerpts only |
| Provision cloud resources; Deploy to the cloud | `https://learn.microsoft.com/microsoftteams/platform/toolkit/provision`, `.../deploy` | search excerpts only |
| Migrate Teams Toolkit projects from Visual Studio 17.13 to 17.14+ | `https://learn.microsoft.com/microsoftteams/platform/toolkit/teams-toolkit-migration-guide_1714` | search excerpts only — **the only toolkit version-break guidance located** |
| Azure Bot Framework SDK to Agents SDK migration guidance | `https://learn.microsoft.com/microsoft-365/agents-sdk/bf-migration-guidance` | search excerpts only — the full unsupported-and-deprecated table was captured |
| Bot Framework migration guidance for .NET and for Python | `https://learn.microsoft.com/microsoft-365/agents-sdk/bf-migration-dotnet`, `.../bf-migration-python` | search excerpts only |
| Test your agent locally in Microsoft 365 Agents Playground | `https://learn.microsoft.com/microsoft-365/agents-sdk/test-with-toolkit-project` | search excerpts only |
| Use Semantic Kernel and Agent Framework in Agents SDK | `https://learn.microsoft.com/microsoft-365/agents-sdk/using-semantic-kernel-agent-framework` | search excerpts only — establishes that the two compose rather than compete |
| Build custom engine agents with Microsoft 365 Agents SDK | `https://learn.microsoft.com/microsoft-365/copilot/extensibility/m365-agents-sdk` | search excerpts only — carries the Government-tenant publishing restriction |
| Bring your agents into Microsoft 365 Copilot | `https://learn.microsoft.com/microsoft-365/copilot/extensibility/bring-agents-to-copilot` | search excerpts only |
| TypeSpec for Microsoft 365 Copilot — overview, capabilities, decorators, tutorial | `https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-typespec`, `.../typespec-capabilities`, `.../typespec-decorators`, `.../build-declarative-agents-typespec` | search excerpts only |
| Set up Agent Store in Microsoft 365 Copilot | `https://learn.microsoft.com/microsoft-365/copilot/copilot-agent-store` | search excerpts only |
| Publish agents to Microsoft 365 Copilot and Teams in the Foundry portal | `https://learn.microsoft.com/azure/foundry/agents/how-to/publish-copilot` | search excerpts only |
| Publish agents … by using the REST API + VNet guidance | `https://learn.microsoft.com/azure/foundry/agents/how-to/publish-copilot-virtual-network` | search excerpts only |
| Set up CI/CD for hosted agents with the Azure Developer CLI | `https://learn.microsoft.com/azure/foundry/agents/how-to/set-up-ci-cd-cli` | search excerpts only |
| Migrate from agent applications to the new agent endpoint | `https://learn.microsoft.com/azure/foundry/agents/how-to/migrate-agent-applications` | search excerpts only — **publishes a deprecation timeline whose end of support is "TBD"** |
| Microsoft 365 Agents Playground (Teams SDK developer tools) | `https://learn.microsoft.com/microsoftteams/platform/teams-sdk/developer-tools/agents-playground/overview` | search excerpts only |
| TeamsFx SDK; Teams SDK reference | `https://learn.microsoft.com/microsoftteams/platform/toolkit/teamsfx-sdk`, `https://learn.microsoft.com/javascript/api/overview/msteams-client` | search excerpts only — **the only dated support window in the group: community-only support on GitHub until September 2026** |
| **`microsoft-365-agents-toolkit` skill, shipped inside the VS Code extension `teamsdevapp.ms-teams-vscode-extension`, version 6.13.2026072312** | **no public URL** — a local file in an installed extension | **read in full**, 2026-07-31: `SKILL.md`, `toolkit/manifest-and-yaml.md`, `toolkit/templates.md`, `test-playground/test-playground.md`, `test-playground/playground-cli.md`. Microsoft-authored operational skill, **not published documentation and covered by no currency guarantee.** Supplies the schema-version table, the template catalogue, the `playground-cli` interfaces and several error diagnoses that appear on no Learn page. **Its diagnostic claims are recorded as reported, not verified.** |

**Precedent, not a new rule.** This is the second locally installed first-party skill in this register, after the `microsoft-foundry` skill row above, and it is handled the same way: **cited by product and version and by nothing else — no URL and no implied permanence — with its factual claims recorded as reported rather than verified.** Such material is not internal and needs no paraphrase; its provenance is simply a package version. Worth stating once about both rows: **the most operationally specific source in each group is the one with no public address and the shortest half-life.**

## Agent configuration repositories — perishable, pinned by commit

Open source repositories whose content is agent configuration rather than prose. They are cited only against a pinned revision, because an unpinned citation to a repository is a citation to whatever it says today.

| Source | Identifier | Access | Read |
|---|---|---|---|
| HVE Core, `microsoft/hve-core` | `https://github.com/microsoft/hve-core`; commit `cf29fb457b0fe62745bb71592ec9394b834957f4`; package version 3.3.101 | open | **cloned and machine-read in full at the pinned commit** |
| Compare the serverless agents runtime | `https://learn.microsoft.com/azure/azure-functions/compare-serverless-agents-runtime` | search excerpts only |

## Retrieval methods that worked
- arXiv abstract pages (`https://arxiv.org/abs/<id>`).
- The Microsoft Learn documentation search and fetch tools. Large fetches are diverted to a temporary file and must be read from there.
- Europe PMC REST API, as a workaround for PMC and PubMed captcha blocking.
- Microsoft Research publication pages.
- `microsoft.github.io`, `mlip-cmu.github.io`, `cs336.stanford.edu`, `llmagents-learning.org`, `csed.acm.org` HTML, `abet.org`.
- `blog.palantir.com` posts, **but only with a `?gi=<token>` query parameter appended**.

## Retrieval methods that failed
- `csed.acm.org` PDF assets — confirmed three times.
- `pmc.ncbi.nlm.nih.gov` and `pubmed.ncbi.nlm.nih.gov` — captcha.
- `inria.hal.science` document endpoints; `nowpublishers.com`; `meridian.allenpress.com` (403).
- `learn.microsoft.com/search/?terms=` and general web search through a browser tool.
- Medium-hosted Palantir content — sign-in redirect.
- The ABET 2024–2025 criteria URL — 404. Use the 2025–2026 URL.
- `palantir.com/careers/engineering/forward-deployed/` — 404. Use the careers index.
- **Collapsed accordion blocks on `code.visualstudio.com` — FAQ answers and worked examples — do not expand under a general web fetch.** Their headings are returned and their bodies are not. Anything behind one is unread, and must be recorded as such rather than inferred from the heading.
- `https://learn.microsoft.com/api/mcp` cannot be read in a browser or by a general web fetch. It is an MCP endpoint and returns `405 Method Not Allowed`; reach it with an MCP client or MCP Inspector.

## Verification note
Every Cliff Notes file ends with a `## Verification status` section stating what was verified against the original and what remains provisional. Claims marked provisional must not be repeated as fact.

Specific claims flagged as **unverified** across the research set:
- The CS2023 competency formula, named dispositions list, core-hours figures and exact knowledge-area count — the sectioned PDFs could not be extracted.
- The Huyen *AI Engineering* note is a synthesis; the book itself was not consulted.
- The "36% better retrieval" and "weeks rather than months" claims in `sources/vendor-courses/03-Accelerate-Agentic-AI.md` carry no methodology and must not be repeated.
- **Amended 2026-07-31, and the amendment matters.** The clause above, and the same characterisation in [03-accelerate-agentic-ai.md](/research/06-microsoft-platform/03-accelerate-agentic-ai.md) and [collected-materials.md](/research/06-microsoft-platform/collected-materials.md), said the 36% claim carries **no methodology**. That is now false. The claim appears in first-party Microsoft Learn documentation — the Foundry IQ FAQ — restated as "approximately 36% higher response quality than traditional single-shot RAG", citing a Microsoft Foundry Blog post with ten named authors, six named datasets, a named metric and per-dataset results. **The methodology exists and it measures something else.** The blog's own words are that the figure is "an average of 36% when comparing medium to minimal retrieval reasoning effort" — the product against itself with its reasoning dial turned down, described elsewhere in the same post as "brute force searching all sources at once". No traditional single-shot RAG system was built or measured. No interval, variance or run count accompanies any figure, and no agreement rate is reported between the LLM answer-relevance judge and human raters. **The prohibition stands; its justification changes from "there is no methodology" to "the methodology does not support the sentence".** Full analysis: [microsoft-iq-intelligence-layer.md](/research/06-microsoft-platform/microsoft-iq-intelligence-layer.md).
- **No IQ layer publishes a retrieval quality measure for Work IQ or Fabric IQ, an indexing latency or freshness bound, a measure of permission-trimming completeness, a coverage statement for what data is and is not included, or any evidence of outperforming a plain retrieval implementation.** Work IQ MCP asserts continuous evaluation of accuracy, latency and reliability and publishes no value for any of the three. Fourteen such silences are enumerated in the note.
- No Microsoft Foundry evaluator publishes agreement rates with human judgement, calibration data, or threshold rationale.
- No governance source publishes detection or false-positive rates.
- Analyst projections quoted in internal material (IDC, Capgemini, Gartner) are attributed but not independently verified.
- **The Microsoft Learn MCP Server publishes no measure of retrieval quality, no indexing-lag bound, no rate-limit value, no availability target, and no evidence that grounding through it improves answer accuracy.** Rate limits are confirmed to exist and are not quantified; a golden dataset is described in a 2024 engineering blog and no result from it is published. Its repository README asserts outcomes — "Eliminate Hallucinations", "100% Trusted & Safe" — which are **marketing and must not be repeated in any form**.
- No measure exists, from any source, of how often a model declines to call an attached MCP tool, before or after applying the vendor's recommended instructions file. Both the Learn getting-started page and the repository confirm the failure occurs.
- **The claim that MCP tool checkboxes arrive cleared by default is not supported by the VS Code documentation as read on 2026-07-31.** It is asserted in `wiki/seminars/S001.md`, `S012.md` and `S020.md` and must be treated as a build-specific observation pending re-verification. The durable claim it supports — a connected tool is not an invoked tool — is separately documented and unaffected.
- **The Foundry Control Plane and governance surface publishes no measurement of itself.** Read on 2026-07-31 across roughly thirty pages, seven of them in full, the following are absent from every source and are therefore claimed by nobody: any record of **how often model retirement notices were honoured in practice**, or how many deployments broke at a retirement boundary, or how often emergency retirement was invoked; any **service level for quota-increase requests** — no response time, no approval rate, no appeal route, and no quantification of the shared quota pool's stated "depends on the use case" duration; any evidence that **continuous evaluation detects anything a manual review would not**, and no detection or false-negative rate for it; any **measure of tracing completeness** — no dropped-span rate, no sampling loss, no statement of what fraction of runs yields a usable trace, and no default retention period; any **bound on compliance-scan latency** beyond "varies by scope size and resources"; any **measure of guardrail policy effectiveness**; and any **regional availability list, SLA or API for Foundry Control Plane itself**, which is documented as portal-only. **The stated eighteen-month lifecycle and the sixty- and thirty-day notice windows are commitments, not observations, and no record of their fulfilment is published.**
- **Two interpretive thresholds on the Foundry agent monitoring dashboard — "latency above 10 seconds" and "a rate below 95%" — are asserted with no stated basis and must never be repeated as findings.** They are guidance for reading a chart, not measurements.
- **Azure OpenAI provides no hard spend limit.** This is stated affirmatively by the cost documentation rather than merely absent, and any claim that Foundry can cap spend natively is false.
- The Microsoft Q&A thread on quota latency is **community content**. It establishes that the question is asked and nothing about typical response times. No inference about quota timelines may be drawn from it.
- **The Microsoft 365 Agents Toolkit and the agent SDK family publish no measure of their own effect.** Read on 2026-07-31 across roughly thirty pages, six of them in full: there is **no measure of how much the toolkit reduces time to a first working agent** — no baseline, no comparison, no sample, no study — and the benefit is asserted only in adjectives ("streamlines", "dramatically simplifies", "enhanced productivity", "simplified onboarding"), which are **marketing and must not be repeated**. **Nothing in this family supports any claim about agents launching in one duration rather than another**, and the standing "weeks rather than months" prohibition applies to it without exception.
- **Two absences that had been assumed are not absences, and the correction matters more than the assumption.** Store validation criteria **are** published in detail and partly numerically, and Bot Framework migration guidance **is** published across a general page and two language-specific guides with a full unsupported-feature table. What is missing is different and narrower: **no submission pass or rejection rate, no rejection-reason distribution, no time-to-approval, and no measurement method, instrument, population or observation window for any of the published numeric store criteria**; and **no dated end-of-support, no support policy and no migration-effort estimate for the Bot Framework SDK itself.** Only TeamsFx carries a date — community-only support on GitHub until **September 2026**.
- **The Responsible AI manifest validation check publishes no calibration.** It is not stated whether the check is deterministic or model-judged; no false-positive or false-negative rate is given; no appeal path beyond resubmission is described; and **no evidence is offered that a manifest passing the check yields an agent that behaves acceptably.** Its input is the declared name, description and instructions, and nothing else — a real control with a narrow, knowable scope that must not be filed against runtime behaviour.
- **No evidence is published that the Microsoft 365 Agents Playground predicts deployed behaviour.** A capability-difference table exists and is valuable; a **fidelity claim does not exist**. The default channel differs by launch route — `msteams` standalone, `emulator` through the toolkit — and the `emulator` channel omits several Teams-specific activities, so **the convenient local loop is the less faithful one, by default and silently.** The five-user requirement in the mock configuration is stated as an unexplained constant.
- **Toolkit version compatibility is acknowledged and not documented.** `atk upgrade` exists and a Visual Studio 17.13-to-17.14 migration guide exists, so breakage is admitted; **no compatibility matrix, no support window for a toolkit version, and no statement of which toolkit versions emit which schema versions appear on Learn.** The schema-version table exists only inside the installed extension skill, at one extension version.
- **The toolchain has no evaluation surface, and does not say so.** `atk validate` checks the manifest; `playground-cli` drives conversations and asserts on them. **Nothing scores agent quality**, nothing connects to the Foundry evaluator catalogue, and no page consulted acknowledges the gap. **A passing conversation test is not a quality measurement** and must never be reported as one.
- **Numeric store thresholds are contractual admission criteria, not measurements.** The published latency percentiles, the availability figure and the manifest schema floors are policy values imposed by the party that enforces them. They license **no claim about how any agent performs**, they are perishable, and they must not be propagated into any page under `wiki/` as magnitudes.

## Perishability
- **Durable:** research papers, standards documents, assessment literature, craft books, and the accreditation criteria.
- **Semi-durable:** course exemplars, which are offering-specific and change yearly.
- **Perishable:** everything in `research/06-microsoft-platform/`. Two pages consulted were already superseded at the time of reading, and one Defender capability moves to a separate licence on 1 July 2026. Re-verify before every offering.
- **Renaming in flight, recorded twice.** The build-path note records that the Agent Framework SDK is documented as "formerly Semantic Kernel". The governance note records a second instance: **the five Foundry RBAC roles — Foundry User, Owner, Account Owner, Project Manager — were renamed from Azure AI \* while the documentation was live**, with the role IDs unchanged and an explicit instruction to use GUIDs rather than names in code. Prefer the GUID to the name wherever either could be cited.
- **Renaming in flight, third and worst instance — the developer toolchain.** [agents-toolkit-and-sdk-family.md](/research/06-microsoft-platform/agents-toolkit-and-sdk-family.md) records that **every principal name in that family has changed at least once, and one package has changed twice.** Teams Toolkit is now Microsoft 365 Agents Toolkit and is documented as "an evolution of" it; the Teams App Test Tool is now the Microsoft 365 Agents Playground; the TeamsFx CLI is now the Agents Toolkit CLI, distributed as `@microsoft/m365agentstoolkit-cli` with the binary `atk`; the Azure Bot Framework SDK is superseded by the Microsoft 365 Agents SDK; Semantic Kernel and AutoGen are merged into Agent Framework; the Teams AI Library serves pages titled Teams SDK; and Foundry's "Shared Scope" is now "Individual Scope". **The Playground appears in live documentation under two npm packages and two commands at once** — `@microsoft/teams-app-test-tool` with `teamsapptester`, and `@microsoft/m365agentsplayground` with `agentsplayground` — so a citation to either is correct and incomplete. **Cite this family by version and date or do not cite it.**
- **Preview features are load-bearing in the governance story and carry no SLA.** As read on 2026-07-31: client-side tracing, scheduled evaluations, red team scans, monitoring alerts, project-level cost attribution, the model-deployment eligibility policy, managed compute deployments, and the AI gateway's Foundry integration. **A governance claim resting on any of these rests on a preview.**
- **Classic and new coexist and search results silently mix them.** Foundry (classic), hub-based projects, standalone Azure OpenAI resources and the new Foundry portal are all live, and several pages exist in both variants. Check for "(classic)" in a page title before citing it.
- **Perishable in its names, not only its capabilities:** the Microsoft IQ family. It is the only entry in this register whose **membership** is inconsistent across its own first-party pages — four capabilities on two pages, three on three others — and whose documentation contradicts itself on licensing, layer naming, storage, topology and whether actions are supported at all. **Re-verify the membership of Microsoft IQ before re-verifying anything inside it.**
- **Most perishable of all:** the Learn MCP Server. Its own release notes record **seven dated changes between 2025-06-12 and 2026-03-23** — the initial release, two tool additions after it, the general-availability declaration, and three changes to the access surface — and its developer reference reserves the right to change the tool list and its request and response formats without notice. The endpoint is the only part safe to quote from memory; **discover the tools with `tools/list` rather than citing this repository for them.**

## The machine index

The tables above are extracted into `graph/sources.jsonl` by [scripts/build-graph.ps1](/scripts/build-graph.ps1) and served by [HVE IQ](/mcp/hve-iq/README.md), so the **Read** column can be queried rather than read. No judgement is applied; sources are joined to their Cliff Note by author surname, and the 11 rows that do not join — aggregate rows, organisational authors, one bare URL — are kept with a null note rather than dropped.

**54 sources: 18 read in full, 17 abstract only, 19 not read at all.**

## Four notes now cover two works at two depths, and the machine field cannot say so

On 2026-07-30 ten previously unobtainable sources were obtained and read. Six of them are the work the register already named, and their rows simply changed depth. **Four are a different work by the same author**, and that is a distinction this register's schema cannot express.

- [edmondson-psychological-safety.md](/research/04-professional-formation/edmondson-psychological-safety.md) now covers **both** *The Fearless Organization* (2019, read in full) and the 1999 *ASQ* paper (**still unread**). The 2019 definition drops *shared* and *team*, which the 1999 paper carries; the team-efficacy discriminant and the mediation of performance by learning behaviour appear only in the unread paper.
- [bandura-self-efficacy.md](/research/04-professional-formation/bandura-self-efficacy.md) covers the 1995 edited volume (read in full) and the 1977 *Psychological Review* paper (**still unread**). The efficacy-versus-outcome distinction, the three dimensions and the unifying claim rest only on the unread paper.
- [sinha-kapur-productive-failure.md](/research/04-professional-formation/sinha-kapur-productive-failure.md) covers the book (read in full) and the journal articles (**still unread**).
- The Kotter row now names the later edition carrying the author's new preface, not the 1996 first printing.

**The join is deliberately conservative.** `graph/sources.jsonl` derives one read depth per note by first-token surname, and where two rows resolve to the same note the last row wins. The unread rows are therefore placed **after** the newly read ones, so a claim extracted from these notes carries `unread` rather than `full`. **That understates the warrant for most claims in those notes and overstates it for none**, which is the error worth making. **The note is authoritative on which claim rests on which work; the graph field is a floor.**


That last number is not a defect being confessed. Many of the 19 are copyrighted books, and this register's own copyright handling rule is to store original synthesis rather than copied text. The claims resting on unread sources are evidence class 2, which licenses direction and mechanism and forbids an effect size. **The register always knew this. What is new is that a reader can ask.**

Two sources are worth naming because of how much sits on them:

| Source | Whitepapers depending on it | Read |
|---|---|---|
| Edmondson, psychological safety | **29** | synthesis only |
| Keith and Frese, error management training | **25** | synthesis only |

Both underpin content the [Durable and Perishable Register](/archive/bsc-programme/program/09-Durable-and-Perishable-Register.md) lists as **durable and therefore assessable** — *psychological safety; error management; blameless review*. Durable content may be assessed; the warrant under these two is direction-only. That tension is real, it is not resolved here, and it is exactly what this index exists to make visible.

## What resolving the citations exposed

Citations in whitepaper evidence sections used to point at folder-level `collected-materials` files 74% of the time. [The whitepaper standard](/archive/bsc-programme/program/05-Whitepaper-Standard.md) requires class 1 to cite **"the specific note… and the depth of verification recorded there carried forward honestly"** — so a folder link was never compliant. 193 of 348 were resolved to named notes by reading the notes and confirming they carry the claim.

| | Before | After |
|---|---|---|
| Citations naming a source | 26% | **76%** |
| Whitepapers citing any named source | 46 of 90 | **90 of 90** |
| Distinct named sources cited | 43 | 55 |

**Making the citations specific exposed things the folder links had concealed.** Three are recorded here rather than fixed, because each needs a decision this index has no authority to make.

**1. 52 of 90 class-1 paragraphs cite at least one never-read source.** The standard permits this — class 1 means a note exists, not that the source was read — *provided the depth is carried forward honestly*. Several paragraphs do not carry it forward: claims phrased as "the finding that…" sit in class 1 while resting on synthesis-only notes. Whoever owns the four-class scheme should rule on whether synthesis-only notes may support class 1 at all.

**2. This register and the notes disagree about effect sizes.** The register marks Keith & Frese, Edmondson, Bandura, Frazier and Sinha & Kapur as *synthesis only*. Those notes' own `## Verification status` sections carry magnitudes — Keith & Frese *d* = 0.44 / 0.56 / 0.80, Sinha & Kapur *g* = 0.36 and 0.87. **Two sources of truth disagree about what was verified.** No whitepaper propagates any of these figures, so the standing prohibition holds, but the contradiction is real and unresolved.

**3. Claims resting on folders that hold no such source.** `research/02-technical-foundations/` is cited in class 1 for resilience patterns, tail latency and memory pressure; it holds no note on any of them, and *Release It!* and *SRE* appear neither there nor in this register. Separately, `research/04-professional-formation/` is repeatedly cited for FDE-craft material that lives in `research/05-fde-craft/`. Either the notes should be commissioned or the claims reclassified to class 2.

**A retraction query still under-counts.** ten Cate, Govaerts and Thakur each exist as several non-identical notes under different filenames across folders, so retracting one source hits nodes this index counts separately. An alias field would fix it.

**Dependency counts remain a floor.** 25% of citations are still folder-level, most of them legitimately — the clearest case being `research/06-microsoft-platform/`, whose claim that *every source states a latency or a bound and none states an accuracy* is a cross-source observation no single note carries.

## Copyright handling
When a source is copyrighted or paywalled, store a Cliff Notes-style synthesis and citation details rather than copying the source text into the repository.
