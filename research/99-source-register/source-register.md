# Source Register

Date: 2026-07-25

Use this file to track which sources were used, what they supported, and whether they are durable theory or perishable product detail.

Every source below has a Cliff Notes file under `research/`. Entries record the identifier that makes the source re-findable — arXiv ID, DOI, PMCID, ISBN or URL — together with the access status and whether the full text was read.

## Internal documents, not external sources
- `README.md`
- `sources/vendor-courses/03-Accelerate-Agentic-AI.md` — synthesis of internal Microsoft LevelUp course ID 2307124. **Not publicly accessible; not citable externally.**
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
| Jégou, Douze and Schmid, "Product Quantization for Nearest Neighbor Search" | *IEEE TPAMI* 2011 | **INRIA HAL document endpoint blocked** | synthesis only |

## Measurement and evaluation
| Source | Identifier | Access | Read |
|---|---|---|---|
| Husain, "Your AI Product Needs Evals" | `https://hamel.dev/blog/posts/evals/` | open | full |
| Huyen, *AI Engineering* | O'Reilly, 2025 | **copyrighted; book not consulted** | **synthesis only — flagged** |
| Shankar et al., "EvalGen" / "Who Validates the Validators?" | arXiv:2404.12272 | open | abstract and structure |
| Zheng et al., "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena" | arXiv:2306.05685 | open | abstract and structure |
| Angelopoulos et al., "Prediction-Powered Inference" | arXiv:2301.09633 | open | abstract and structure |
| Miller, "Adding Error Bars to Evals" | arXiv:2411.00640 | open | abstract and structure |
| Singh et al., "The Leaderboard Illusion" | arXiv:2504.20879 | open | abstract and structure |

## Professional formation
| Source | Identifier | Access | Read |
|---|---|---|---|
| Bandura, self-efficacy | *Psychological Review* 84(2), 1977 | copyrighted | synthesis only |
| Keith and Frese, error management training meta-analysis | *Journal of Applied Psychology* 93(1), 2008 | copyrighted | synthesis only |
| Kapur, productive failure | *Cognition and Instruction* / *Instructional Science* | copyrighted | synthesis only |
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
| Beyer and Holtzblatt, *Contextual Design* | Morgan Kaufmann, 1997 | copyrighted | synthesis only |
| Evans, *Domain-Driven Design* | Addison-Wesley, 2003 | copyrighted | synthesis only |
| Fisher and Ury, *Getting to Yes* | Houghton Mifflin, 1981 | copyrighted | synthesis only |
| Fitzpatrick, *The Mom Test* | 2013 | copyrighted | synthesis only |
| Hiatt, *ADKAR* | Prosci, 2006 | copyrighted | synthesis only |
| Kotter, *Leading Change* | HBS Press, 1996 | copyrighted | synthesis only |
| Portigal, *Interviewing Users* | Rosenfeld Media, 2013 | copyrighted | synthesis only |
| Microsoft ISE Engineering Fundamentals Playbook | `https://microsoft.github.io/code-with-engineering-playbook/`; repo `microsoft/code-with-engineering-playbook` | open | full |
| "A Day in the Life of a Palantir Forward Deployed Software Engineer" | Palantir Blog, 2 November 2020 | open — **requires `?gi=` query token to fetch** | full |
| Palantir careers, engineering roles | `https://www.palantir.com/careers/` | open | full |
| Palantir "Dev versus Delta" (Medium) | — | **sign-in redirect; not retrievable** | **not read** |

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

## Verification note
Every Cliff Notes file ends with a `## Verification status` section stating what was verified against the original and what remains provisional. Claims marked provisional must not be repeated as fact.

Specific claims flagged as **unverified** across the research set:
- The CS2023 competency formula, named dispositions list, core-hours figures and exact knowledge-area count — the sectioned PDFs could not be extracted.
- The Huyen *AI Engineering* note is a synthesis; the book itself was not consulted.
- The "36% better retrieval" and "weeks rather than months" claims in `sources/vendor-courses/03-Accelerate-Agentic-AI.md` carry no methodology and must not be repeated.
- No Microsoft Foundry evaluator publishes agreement rates with human judgement, calibration data, or threshold rationale.
- No governance source publishes detection or false-positive rates.
- Analyst projections quoted in internal material (IDC, Capgemini, Gartner) are attributed but not independently verified.

## Perishability
- **Durable:** research papers, standards documents, assessment literature, craft books, and the accreditation criteria.
- **Semi-durable:** course exemplars, which are offering-specific and change yearly.
- **Perishable:** everything in `research/06-microsoft-platform/`. Two pages consulted were already superseded at the time of reading, and one Defender capability moves to a separate licence on 1 July 2026. Re-verify before every offering.

## The machine index

The tables above are extracted into `graph/sources.jsonl` by [scripts/build-graph.ps1](scripts/build-graph.ps1) and served by [HVE IQ](mcp/hve-iq/README.md), so the **Read** column can be queried rather than read. No judgement is applied; sources are joined to their Cliff Note by author surname, and the 11 rows that do not join — aggregate rows, organisational authors, one bare URL — are kept with a null note rather than dropped.

**53 sources: 13 read in full, 17 abstract only, 23 not read at all.**

That last number is not a defect being confessed. Most of the 23 are copyrighted books, and this register's own [copyright handling](research/99-source-register/source-register.md) rule is to store a synthesis rather than copy the text. The claims resting on them are evidence class 2, which licenses direction and mechanism and forbids an effect size. **The register always knew this. What is new is that a reader can ask.**

Two sources are worth naming because of how much sits on them:

| Source | Whitepapers depending on it | Read |
|---|---|---|
| Keith and Frese, error management training | **10** | synthesis only |
| Edmondson, psychological safety | **9** | synthesis only |

Both underpin content the [Durable and Perishable Register](wiki/program/09-Durable-and-Perishable-Register.md) lists as **durable and therefore assessable** — *psychological safety; error management; blameless review*. Durable content may be assessed; the warrant under these two is direction-only. That tension is real, it is not resolved here, and it is exactly what this index exists to make visible.

**Dependency counts from this index are a floor.** 74% of citations in whitepaper evidence sections point at a folder-level `collected-materials` file rather than a named source, and only 46 of 90 whitepapers cite any named source at all. A source showing no dependants may still be carrying weight.

## Copyright handling
When a source is copyrighted or paywalled, store a Cliff Notes-style synthesis and citation details rather than copying the source text into the repository.
