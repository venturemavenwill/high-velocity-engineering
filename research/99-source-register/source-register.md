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
- No Microsoft Foundry evaluator publishes agreement rates with human judgement, calibration data, or threshold rationale.
- No governance source publishes detection or false-positive rates.
- Analyst projections quoted in internal material (IDC, Capgemini, Gartner) are attributed but not independently verified.
- **The Microsoft Learn MCP Server publishes no measure of retrieval quality, no indexing-lag bound, no rate-limit value, no availability target, and no evidence that grounding through it improves answer accuracy.** Rate limits are confirmed to exist and are not quantified; a golden dataset is described in a 2024 engineering blog and no result from it is published. Its repository README asserts outcomes — "Eliminate Hallucinations", "100% Trusted & Safe" — which are **marketing and must not be repeated in any form**.
- No measure exists, from any source, of how often a model declines to call an attached MCP tool, before or after applying the vendor's recommended instructions file. Both the Learn getting-started page and the repository confirm the failure occurs.
- **The claim that MCP tool checkboxes arrive cleared by default is not supported by the VS Code documentation as read on 2026-07-31.** It is asserted in `wiki/seminars/S001.md`, `S012.md` and `S020.md` and must be treated as a build-specific observation pending re-verification. The durable claim it supports — a connected tool is not an invoked tool — is separately documented and unaffected.

## Perishability
- **Durable:** research papers, standards documents, assessment literature, craft books, and the accreditation criteria.
- **Semi-durable:** course exemplars, which are offering-specific and change yearly.
- **Perishable:** everything in `research/06-microsoft-platform/`. Two pages consulted were already superseded at the time of reading, and one Defender capability moves to a separate licence on 1 July 2026. Re-verify before every offering.
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
