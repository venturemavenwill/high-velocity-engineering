# Gap Analysis — From Vendor Enablement to a University Course

> **Question asked:** we have Microsoft's Frontier Transformation Engineer material (notes 01–08). We want to teach the Forward Deployed Engineer / Hypervelocity Engineering way of working inside a 3-year computer-engineering degree. **What is missing?**
>
> **Scope of research behind this document:** five parallel research streams — (1) FDE intellectual lineage and primary practitioner canon; (2) the Microsoft AI platform surface as of mid-2026; (3) the vendor-neutral AI-engineering body of knowledge; (4) CS2023 / ABET / exemplar university courses; (5) the professional-formation and growth-mindset evidence base. Companion documents: [sources/design-analysis/09-Curriculum-Design-Benchmark-and-Sources.md](sources/design-analysis/09-Curriculum-Design-Benchmark-and-Sources.md).

**Verification key used throughout:** **[V]** verified against a primary source during research · **[V2]** verified only via a credible secondary source · **[B]** standard bibliographic record, not re-verified · **[?]** unverified or contested — do not print without checking.

---

## 0. The verdict in one page

The eight study notes are a **high-quality index of a product surface**. They are not a curriculum, and the gap is not one of volume — it is a gap of *kind*.

| | What notes 01–08 are | What a degree course must be |
|---|---|---|
| **Object of study** | Microsoft product capabilities | The class of system, of which Microsoft products are one instantiation |
| **Epistemology** | "Here is what the platform does" | "Here is the failure model, and here is how you measure it" |
| **Abstraction level** | At or above the API | At least one layer below the abstraction you will use |
| **Evidence standard** | Vendor claims (2–3x velocity, 36% better retrieval) reported as facts | Claims sourced, effect sizes given, contested findings taught as contested |
| **Assessment** | ≥80% multiple choice + proctored exams | Design, build, evaluate, defend orally, under supervision |
| **Half-life** | ~6–12 months (see §7) | 10+ years for the theory, with a deliberately-refreshed product layer |
| **Failure it produces** | Graduates who can configure a portal | Graduates who can tell you *why the p99 tripled* and *whether the 74%-vs-71% is real* |

**The three largest gaps, ranked:**

1. **Evaluation science.** The single biggest omission and the one that most reliably separates a demo from a product. Not "the portal has evaluators" — measurement theory: error analysis, judge validation, inter-rater agreement, confidence intervals, statistical power, construct validity, online experimentation.
2. **The systems layer beneath the abstraction.** Inference economics (prefill/decode, KV cache, batching, TTFT/TPOT), classical IR (BM25, hybrid, RRF), ANN index internals (HNSW/IVF-PQ/DiskANN), and the resilience patterns for treating an LLM as the least reliable dependency in the stack.
3. **The FDE craft itself.** The material teaches HVE as a *toolchain and workflow*. The primary sources say the job is discovery, data-access negotiation, organisational alignment, and the decision of when to overfit vs. generalise — and that the model is *"usually the cleanest part."* **[V]**

And one structural gap that sits underneath all three: **there is no assessment instrument in the current package capable of certifying any of this.** Nine of ten gates are MCQ or proctored exam. Those verify recall. They cannot verify design, teamwork, communication, or professional judgement — which is precisely the axis ABET is moving toward for the 2026–27 cycle. **[V]**

---

## 1. What the current material actually covers

Establishing the baseline honestly, so the gaps are measured against something real.

**Strong coverage:**
- Microsoft IQ platform (Work IQ / Fabric IQ / Foundry IQ) and its positioning — notes 01, 03, 04
- Agent build-surface decision framework (M365 Copilot → Copilot Studio → Foundry) — notes 02, 03
- Foundry Agent Service agent types, MCP, A2A, OpenAPI tools, Agent Framework's five orchestration patterns — note 03
- Fabric ontologies, semantic models, data agents, lifecycle/ALM — note 04
- Agent governance and security: Entra Agent ID, Purview DLP, Defender XDR, Agent 365 registry, Zero Trust — note 05 is genuinely comprehensive
- The HVE four pillars, RPI flow, accelerators (CAIRA/Edge AI/Intelligent Data/HVE Core), SFI, and the SPACE/DORA/ESSP framework vocabulary — note 06
- GitHub Copilot customisation layers and GH-300 exam surface — note 07
- AB-100 architecture decision guide and RAI/ALM reference — note 08

**Honest characterisation:** this is a well-organised, well-cross-referenced set of enablement notes with a genuine attempt at exam-oriented synthesis. As preparation for the badge, it looks sound. As the foundation of a degree course, it is the *reading list for week one of one module*.

---

## 2. Gap 1 — Epistemic frame: features vs. failure models

The material consistently teaches **what a capability does**, never **how it fails, what it costs, or how you would know**.

Concrete illustrations, each drawn from the current notes:

| Note says | The question a course must answer | Why it matters |
|---|---|---|
| "Agentic RAG delivers 36% better responses than traditional RAG" | Better on what corpus, measured by which metric, against which baseline, with what confidence interval? Who ran it? | This is a vendor benchmark reported as a fact. Teaching students to repeat it is teaching them to be bad engineers. |
| "Velocity increase 2–3x; 50%+ team size reduction; Trimble 120,000 hours saved" | Measured how? Compared to what counterfactual? The best-designed field experiment on this question (METR 2025, n=16, 246 real tasks) found experienced developers were **19% slower** with AI while *believing* they were 20% faster **[V]** | The impact numbers table is the least defensible page in the package. It is unsourced and directionally contradicted by the strongest available evidence. |
| "RAG: query index before LLM; augment prompt; generate grounded response" | Which of the seven documented RAG failure points did you hit? **[V]** (Barnett et al., CAIN 2024, arXiv:2401.05856) | Students say "RAG isn't working" instead of naming the failing stage. |
| "Five orchestration patterns: sequential, concurrent, group chat, handoff, Magentic" | At 95% per-step reliability, a 10-step agent succeeds 60% of the time and a 100-step agent 0.6%. What is your `pass^k`? **[V]** (τ-bench, arXiv:2406.12045) | The entire economic case for or against an agent turns on compounding error, and it appears nowhere. |
| "Content Safety: prompt shielding identifies and mitigates prompt injection" | Prompt injection is structurally unsolved. A guardrail at 95% detection is a *failing grade* in application security. **[V]** (Willison, "the lethal trifecta", 16 Jun 2025) | This framing actively produces engineers who will build exfiltration vectors into enterprise systems. |

**The fix is not more content. It is a rule:** every capability taught must be accompanied by (a) its failure modes, (b) its cost model, and (c) the measurement that would detect the failure.

---

## 3. Gap 2 — Evaluation science (the largest technical gap)

Nothing in notes 01–08 teaches measurement. This is the gap that most reliably decides whether a graduate can ship.

**Missing, in rough teaching order:**

**3.1 The workflow.** Sample traces → open-code failure modes → build an axial taxonomy → count frequencies → prioritise by frequency × severity → write targeted assertions/judges → validate judges against human labels → track over time. Anchors: Husain, *"Your AI Product Needs Evals"* (hamel.dev, 2024) and its three-level model (L1 assertions → L2 human+model on traces → L3 A/B); Huyen, *AI Engineering* (O'Reilly, 2025) ch. 3–4. **[V]**

**3.2 Criteria drift — the finding that dismantles the product-doc advice.** Users need criteria to grade outputs, but grading outputs is *how users discover criteria*. Therefore "define your metrics up front" is not merely hard, it is invalid as stated. Shankar, Zamfirescu-Pereira, Hartmann, Parameswaran, Arawjo, **"Who Validates the Validators?"** (EvalGen), UIST 2024, arXiv:2404.12272. **[V]**

**3.3 An LLM judge is a classifier you must validate.** Measure TPR/TNR or precision/recall against human labels — raw agreement is misleading under class imbalance. Then correct the judge's population estimate using human labels on a sample (prediction-powered inference; Angelopoulos et al., *Science* 382, 2023). **[V]**

**3.4 Judge bias catalogue.** Position, verbosity, self-enhancement, limited reasoning — named in the original MT-Bench/Chatbot Arena paper (Zheng et al., NeurIPS 2023 D&B, arXiv:2306.05685) **[V]**; position bias can swing rankings (Wang et al., ACL 2024, arXiv:2305.17926) **[V]**; self-preference is causally tied to self-recognition (Panickssery, Bowman, Feng, NeurIPS 2024, arXiv:2404.13076) **[V]**.

**3.5 Statistics for evals — near-universally missing everywhere, not just here.** Students must be able to answer: *"200 eval items, new prompt 74% vs old 71%. Ship it?"* with a paired test, a CI, and a power calculation. Anchor: Miller (Anthropic), **"Adding Error Bars to Evals"**, arXiv:2411.00640 **[V]**. Plus bootstrap, McNemar, Benjamini–Hochberg, clustered SEs.

**3.6 Inter-annotator agreement.** Cohen's κ, Fleiss' κ, Krippendorff's α, the kappa paradox, and Aroyo & Welty's argument that disagreement is signal not noise (*AI Magazine* 36(1), 2015). **[B]**

**3.7 Online experimentation.** Offline evals are necessary and insufficient. A/B tests, guardrail metrics, sample-ratio mismatch, novelty effects, CUPED, sequential testing/peeking. Anchor: Kohavi, Tang, Xu, *Trustworthy Online Controlled Experiments* (Cambridge, 2020). **[B]**

**3.8 Benchmark validity and contamination.** Construct validity, Goodhart, contamination detection, contamination-resistant designs (LiveBench, LiveCodeBench, GSM-Symbolic), and the **leaderboard illusion** (Singh et al., arXiv:2504.20879). The *construction* lesson matters more than the scores: **68.3% of original SWE-bench was filtered out as underspecified or unfairly tested** when OpenAI built SWE-bench Verified. **[V]**

**3.9 Agent-specific evaluation.** Trajectory failures ≠ answer-quality failures. Intent resolution, task adherence, tool-call accuracy, response completeness. Benchmark literacy: SWE-bench Verified, τ-bench / τ²-bench, GAIA, WebArena, OSWorld, BFCL, AgentDojo. And **`pass^k` not `pass@k`** — the probability that *all* k trials succeed is the metric production cares about. **[V]**

> **Design consequence:** evaluation should be the **spine** of the course, not a module. A defensible rule: *every assignment ships an eval suite before it ships a feature.*

---

## 4. Gap 3 — The systems layer beneath the abstraction

The notes operate entirely at or above the API. Students who never go below it cannot cost, size, tune, or debug anything.

### 4.1 Inference economics — the #1 gap the moment a demo meets real traffic

Missing entirely: prefill vs. decode, arithmetic intensity, memory-bandwidth-bound decoding, continuous/iteration-level batching, PagedAttention, speculative decoding, chunked prefill, prefix/KV-cache reuse.

Students should be able to compute, by hand:
- `KV_cache_bytes = 2 × layers × kv_heads × head_dim × seq_len × dtype_bytes`
- TTFT, TPOT/ITL, throughput (tok/s and req/s), goodput
- cost per 1k tokens **and** cost per resolved task

Anchors: Kwon et al., PagedAttention/vLLM, SOSP 2023, arXiv:2309.06180; Pope et al., "Efficiently Scaling Transformer Inference", MLSys 2023, arXiv:2211.05102; Yu et al., Orca, OSDI 2022. **[B]**

**On the Microsoft side this maps directly to a capability the notes omit:** Provisioned Throughput (PTU) vs. Standard deployments, the batch API, and quota/capacity planning. This is the single biggest cost-and-latency architecture decision in any real workload, and "works in dev, 429s in prod" is the most common production failure. **[V]** `learn.microsoft.com/azure/foundry/openai/concepts/provisioned-throughput`

### 4.2 Classical information retrieval

Absent: BM25, TF-IDF, inverted indexes, hybrid retrieval, reciprocal rank fusion. A student who has never implemented BM25 cannot explain why their vector search fails on SKUs, error codes, and rare proper nouns. Anchors: Robertson & Zaragoza, *"The Probabilistic Relevance Framework: BM25 and Beyond"*, FnTIR 3(4), 2009; Cormack, Clarke, Buettcher, RRF, SIGIR 2009; Thakur et al., **BEIR**, arXiv:2104.08663 — the paper showing dense retrievers *do not* generalise out of domain. **[B]**

Retrieval evaluation is also missing: nDCG, MRR, recall@k, MAP, and where relevance judgments come from. Without these you cannot separate a retrieval failure from a generation failure.

### 4.3 ANN index internals

"Vector database" is treated as a black box. Students never tune `ef_search`, `M`, or `nprobe`, and never measure recall. Missing: HNSW (Malkov & Yashunin, *TPAMI* 42(4), 2020), IVF+PQ (Jégou et al., *TPAMI* 33(1), 2011), ScaNN, **DiskANN** (Subramanya et al., NeurIPS 2019 — Microsoft Research's own algorithm, now shipping in Cosmos DB and `pg_diskann`), and the recall/QPS/memory/build-time tradeoff. **[B]**

### 4.4 Long-context limits

"Lost in the middle" (Liu et al., TACL 2023, arXiv:2307.03172), RULER's finding that effective context ≪ advertised context (arXiv:2404.06654), and context rot. These drive every chunking, reranking, compaction, and sub-agent decision. **[B]**

### 4.5 Model behaviour has causes

Post-training — SFT, RLHF, DPO, RLAIF, GRPO, RLVR — explains sycophancy, refusal behaviour, format bias, and why reasoning models exist. Without it, model behaviour is magic. Anchors: Ouyang et al. (InstructGPT), arXiv:2203.02155; Rafailov et al. (DPO), arXiv:2305.18290; DeepSeek-R1, *Nature* 645:633–638 (2025). **[B]**

Related: **test-time compute as a third scaling axis** (Snell et al., arXiv:2408.03314) — central to 2025–26 model selection and budgeting, absent from the material.

### 4.6 Resilience for a nondeterministic, rate-limited, expensive dependency

Not LLM theory — distributed-systems practice applied to a novel dependency class. That framing is itself the lesson. Timeouts, backoff with full jitter, circuit breakers, bulkheads, idempotency, load shedding, admission control, per-tenant token budgets, model cascades and routing (FrugalGPT arXiv:2305.05176; RouteLLM arXiv:2406.18665), exact vs. semantic caching. Anchors: Nygard, *Release It!* 2nd ed. (2018); Beyer et al., *SRE* (2016). **[B]**

Also: **determinism is a myth**, and the reason is batch-invariance of kernels, not floating-point folklore — Thinking Machines Lab, *"Defeating Nondeterminism in LLM Inference"* (2025). Students otherwise promise reproducibility they cannot deliver and then cannot debug flaky evals. **[V2]**

### 4.7 The LLM-planning skeptics

The correct agent architecture is **generate–test–critique against a non-LLM verifier**, not "trust the plan." Kambhampati et al., *"LLMs Can't Plan, But Can Help Planning in LLM-Modulo Frameworks"*, ICML 2024, arXiv:2402.01817; Huang et al., *"LLMs Cannot Self-Correct Reasoning Yet"*, ICLR 2024, arXiv:2310.01798; Valmeekam et al., arXiv:2310.08118. Product documentation sells the opposite story. **[B]**

---

## 5. Gap 4 — Security as a structural problem, not a control surface

Note 05 is the strongest note in the package on *governance*. It is nonetheless framed as **controls to apply**, not **an adversary to reason about**.

**Missing:**

- **Prompt injection is structurally unsolved.** LLMs cannot reliably distinguish instruction provenance because everything becomes one token sequence. Greshake et al., *"Not what you've signed up for"*, AISec@CCS 2023, arXiv:2302.12173. **[B]**
- **The lethal trifecta** — private data + untrusted content + external communication. If a system has all three, an attacker can exfiltrate. Willison, 16 Jun 2025. Also the doctrinal point that **prompt injection ≠ jailbreaking**, and that conflating them causes developers to dismiss it as a vendor-embarrassment problem. **[V]**
- **MCP-specific threat model.** The notes teach MCP as a feature; the attack surface is the interesting part. Tool poisoning (hidden `<IMPORTANT>` instructions in tool descriptions the model sees and the user does not), **rug pulls** (server mutates the description after approval), **cross-server tool shadowing** (a malicious server rewrites agent behaviour toward a *trusted* server's tool — hijacking without appearing in the user-visible tool-call log), and the classical **confused deputy** framing for OAuth-token-holding proxies. Invariant Labs, 1 Apr 2025. **[V2]**
- **Real incidents to teach:** EchoLeak (M365 Copilot, Jun 2025); GitHub MCP server exploit (May 2025); GitLab Duo remote prompt injection (May 2025). These are directly on-topic for note 03's MCP content. **[V2]**
- **Partial defences, taught as partial.** Design Patterns for Securing LLM Agents (arXiv:2506.08837); CaMeL capability-based dual-LLM (arXiv:2503.18813); Meta's "Agents Rule of Two"; Microsoft's own Spotlighting (arXiv:2403.14720); the Instruction Hierarchy (arXiv:2404.13208). Evaluated by AgentDojo (arXiv:2406.13352) and InjecAgent. **[B]**
- **Standards mapping:** OWASP Top 10 for LLM Applications 2025; **OWASP Top 10 for Agentic Applications 2026** (published 9 Dec 2025); MITRE ATLAS (now carrying an explicit Agentic AI platform); NIST AI RMF 1.0 + **AI 600-1 Generative AI Profile**; ISO/IEC 42001 and 23894; the **EU AI Act** timeline — in force 1 Aug 2024, prohibitions + AI literacy 2 Feb 2025, GPAI obligations 2 Aug 2025, general application 2 Aug 2026, Art. 6(1) high-risk 2 Aug 2027. **[V]**
- **Red-teaming as a repeatable process** with open tooling — PyRIT (Microsoft), garak (arXiv:2406.11036), HarmBench, JailbreakBench — plus Microsoft AI Red Team, *"Lessons from red teaming 100 generative AI products"*, arXiv:2501.07238. **[B]**

---

## 6. Gap 5 — The Microsoft platform itself is under-covered

This is the gap that will surprise you. **The material does not even cover Microsoft's own surface adequately for production work.** Research verified 25 significant omissions against Microsoft Learn; the top ones:

| # | Omission | Consequence of leaving it out |
|---|---|---|
| 1 | **APIM AI Gateway** — `llm-token-limit`, `llm-emit-token-metric`, semantic cache lookup/store, `llm-content-safety`, backend pools + circuit breaker, PTU→PAYG spillover | No per-consumer quota, no cost attribution, no failover, no cache. **You never let apps call the model endpoint directly** — and retrofitting means re-pointing every client. **[V]** |
| 2 | **Foundry Evaluations SDK + agent evaluators + continuous/online evaluation** | No regression harness = you cannot safely change a prompt or a model version. **[V]** |
| 3 | **PTU / batch API / quota & capacity planning** | The dominant cost and latency lever; wrong choice is 5–10× cost or a blown SLO. **[V]** |
| 4 | **Foundry Toolbox + private tool catalog + MCP auth modes** (key / managed identity / OAuth passthrough) | The only scalable way to manage tools across many agents with centralised credentials and versioned promotion. New in 2026. **[V]** |
| 5 | **Purview DSPM for AI + the Purview SDK for custom GenAI apps** | Without the SDK path, custom agents are invisible to the governance plane the customer already bought. Blocks enterprise rollout. Note 05 covers Purview *DLP only*. **[V]** |
| 6 | **Defender for Cloud AI-SPM + threat protection for AI workloads** | Runtime detection of prompt injection / data leakage / wallet abuse; AI-BOM and attack paths. **[V]** |
| 7 | **Document-level ACLs / security trimming in AI Search + label-aware retrieval + on-behalf-of query execution** | The #1 real-world RAG blocker. Retrofitting permissions into an index is a full re-ingest. **[V]** |
| 8 | **Well-Architected Framework — AI workloads** (design methodology, principles, grounding-data design, assessment) | The architectural spine that makes every other choice defensible. Cheap to add, enormous leverage. **[V]** |
| 9 | **Fine-tuning beyond LoRA — SFT / DPO / RFT + distillation via stored completions** | The primary cost-reduction lever once a workload stabilises. Currently taught as one technique. **[V]** |
| 10 | **Azure Container Apps dynamic sessions + serverless GPU** | The correct sandbox for LLM-generated code, and the substrate under Foundry's Custom Code Interpreter. Security-critical. **[V]** |

**Also absent and material:** OpenTelemetry GenAI semantic conventions + App Insights + KQL over agent traces · AI Red Teaming Agent + PyRIT · Agent Optimizer and Prompt Optimizer · Cosmos DB vector/DiskANN + **agentic memories** (agent memory is entirely unaddressed) · Foundry Local + Olive + Windows ML / NPU · Content Understanding + Document Intelligence (ingestion quality caps retrieval quality) · Workload Identity Federation + Private Link + Key Vault · GitHub Models (`.prompt.yml`, evaluators, comparisons) + Actions eval gates + GHAS push protection · **Azure SRE Agent** · Agent Framework **Workflows + durable agents** (Durable Task Scheduler) · **Voice Live API** · `pg_diskann` + `azure_ai` extension for Postgres · **Microsoft GraphRAG** (incl. LazyGraphRAG, DRIFT) · AVM + `azd` + Landing Zones + CAF AI scenario · AKS + KAITO / Azure ML managed endpoints + RAI dashboard + feature store.

### 6.1 Corrections — things the material likely states incorrectly

These need checking before the notes are used with students.

| Current statement | Verified position | Source |
|---|---|---|
| "AI-102 accepted in place of AI-103" ([README.md](README.md)) | Microsoft Learn's Azure AI Engineer Associate page carries *"This certification and the renewal assessment are retired."* Metadata: last updated 2025-12-23, `hidden: true`, `noindex`. **An already-held unexpired cert may still count; a newly attempted one may not be sittable.** Confirm with LevelUp before anyone books. | **[V]** |
| "Azure AI Foundry" | **Microsoft Foundry.** Docs at `/azure/foundry/**`; the prior surface is explicitly **"Foundry (classic)"** at `/azure/foundry-classic/**`. | **[V]** |
| "Grounding with Bing Search" as the web-grounding tool | **Web Search tool** is now the recommended built-in; Bing grounding is the advanced/market-filtering case. | **[V]** |
| Agent tool list = Code Interpreter, File Search, Bing, Functions, Logic Apps, OpenAPI | Catalog has grown substantially: Custom Code Interpreter, Image Generation, Browser Automation, Computer Use, Fabric, SharePoint, A2A — plus **Toolbox** and the **private tool catalog**. | **[V]** |
| Agentic retrieval is preview | **Partially GA** — depends on the Search REST API version; portal experiences remain preview. There is a formal migration doc. Avoid blanket GA/preview claims. | **[V]** |
| Fine-tuning = LoRA | Taxonomy is **SFT / DPO / RFT** (+ distillation). LoRA is an implementation detail, not the top-level concept. | **[V]** |
| A2A is a spec | Also a **preview built-in tool type** in Foundry Agent Service. | **[V]** |
| Prompt flow is the eval/orchestration path | Now under `/azure/machine-learning/prompt-flow/**` and `/azure/foundry-classic/**`. Modern path is Foundry evaluations + Agent Framework + Agent Optimizer. **No formal retirement notice found — do not write "deprecated" without confirming.** | **[?]** |
| Impact numbers table (2–3x velocity, 120,000 hrs, $1.5M, 95%-of-pilots-fail) | Unsourced. The MIT NANDA "95% of pilots produced no P&L impact" figure is widely contested. The "800%+ growth in FDE postings" claim in trade press is unsourced. | **[?]** |

---

## 7. Gap 6 — The FDE discipline itself

This is the gap I did not expect to be the largest, and it may be.

Note 06 teaches HVE as **four pillars + a workflow + a toolchain**. The primary sources on this discipline say something quite different about what the job is.

### 7.1 What the practitioners say the work actually is

- *"You'd have a company buying an 8–12 week pilot, and we'd spend all 8–12 weeks just getting data access, and the final week scrambling to have something to demo."* — Sarah Constantin, *"The Great Data Integration Schlep"* (2024) **[V]**
- *"The model is usually the cleanest part. The hard part is finding the workflow nobody documented, the data source people actually trust, and the person who knows why the process works that way."* — anonymous FDE, The New Stack (2026) **[V]**
- *"Navigating the intricacies of how to use technology to overcome challenges that are often not technical on the surface: organizational alignment, technical aptitude, user adoption, reimagining technology enabled business processes. These are all problems technology companies externalize. **The FDE internalizes them and uses code to solve them.**"* — Ted Mabrey (Palantir), *"Sorry, that isn't an FDE"* (2024) **[V]**
- *"In practice, most customer-specific work takes place at the orchestration layer rather than in the models themselves."* — Natalie Meurer (Head of Agent Engineering, Sierra), Latent Space (2026) **[V]**

### 7.2 The missing modules

| Missing capability | Why it can't be skipped | Canonical anchor |
|---|---|---|
| **Discovery as method, not vibes** | Contextual inquiry and JTBD interviewing are 25–40-year-old research traditions with methods and documented failure modes. Practitioners are reinventing them badly. Anthropic's own FDE JD requires *"conduct discovery with customers"* **[V]** | Beyer & Holtzblatt, *Contextual Design* (1998); Portigal, *Interviewing Users* (2013) — **literally on Palantir's FDE onboarding reading list** **[V]**; Fitzpatrick, *The Mom Test* (2013) |
| **Data-access negotiation** | The dominant time-sink of real engagements. **No textbook exists.** | Nearest: Fisher & Ury, *Getting to Yes* (1981). This is a place where a university course can make an original contribution rather than a synthetic one. |
| **"Corporate detective work"** | Named and defined by Constantin: figuring out the shape of the organisational Badness when everyone presents as a reasonable professional and every story differs. **No canonical source exists.** | Nearest: Suchman, *Plans and Situated Actions* (1987); Argyris, *Overcoming Organizational Defenses* (1990) |
| **Stakeholder mapping and the political model** | Constantin's verified four-step Palantir commercial playbook: sell only into existential threat → get C-suite buy-in → win front-line hearts → use top and bottom to squeeze out the middle. Palantir's own Echo JD: *"aligning stakeholders from the CIO to the nurse."* **[V]** | Mendelow power/interest grid; Freeman (1984) |
| **The generalisation decision** | *"Many core products required 10–20 different custom implementations before they could be synthesized into a common load-bearing technology."* When to overfit, when to abstract, and who decides — this is the discipline's core **unsolved research question**. **[V]** | Qureshi (2024); Mabrey (2024); Team Topologies enabling-team pattern |
| **Domain-language acquisition** | *"Your effectiveness directly correlates to how quickly you can learn to speak the customer's language… you quickly learn to talk about capacity management and patient throughput vs. just saying 'help you improve your healthcare'."* **[V]** | Evans, *Domain-Driven Design* (2003) — ubiquitous language |
| **Change management and handover** | *"Their job does not end at handoff."* **[V]** Meurer: enterprises need *"hundreds or thousands of people to contribute… and follow a discrete release process"* — explicitly framed as a change-management problem. **[V]** | Kotter (1996); Hiatt, *ADKAR* (2006); the ISE Playbook's Onboarding Guide + Documentation sections |
| **Engineering feedback as an institution** | Microsoft ISE has a whole playbook section for it. It is the institutionalised form of the FDE→product flywheel. It has **no analogue in any CS curriculum**. **[V]** | `microsoft.github.io/code-with-engineering-playbook/` → Engineering Feedback |
| **Economics of the model** | Qureshi: 80% gross margins vs. Accenture's 32% — *"these are software margins."* Mabrey: >$1.1B from top 20 clients. The FDE *role* is not portable; the FDE *model* is. Teaching it as a skillset rather than an organisational commitment produces exactly the "replicant" Mabrey describes. **[V]** | Mabrey (2024); Qureshi (2024) |

### 7.3 The contradiction that a course can teach and a vendor module cannot

This is the highest-value seminar in the whole design.

| Microsoft ISE Engineering Playbook **[V]** | Palantir FDE canon **[V]** |
|---|---|
| *"Value quality and precision over 'getting things done'."* | *"FDEs tend to write code that gets the job done fast, which usually means – politely – technical debt and hacky workarounds."* |
| *"Avoid adding scope to a backlog item."* | *"At odds with traditional waterfall or agile… **the FDE yearns for scope creep** because the customer's mission demands it."* |
| *"Make the simple thing work now. Build fewer features today."* | *"It wasn't just a database or a spreadsheet, it was an end-to-end solution to that specific problem, and **to hell with generalizability**."* |

**Both are mature, commercially successful practices, and they are directly contradictory.** A course teaches the tradeoff space. A 90-minute enablement module structurally teaches one branch and calls it best practice. Note that ISE and Palantir describe the *same* flywheel in their own words — ISE's stated "superpower" is working with customer engineering teams *and* Microsoft product teams to *"help Microsoft improve our products and services."* **[V]**

### 7.4 The convergence argument — why this belongs in the core curriculum

> *"When code becomes cheap to author, it also becomes easier to translate customer insights directly into a product. **Product engineering and forward deployed engineering are therefore converging** — at least among the best people in each role. If you are a product engineer, you should be talking to customers. If you are a forward deployed engineer, you should be building the product. I think that is new."* — Natalie Meurer, Sierra (2026) **[V]**

If that holds, this is not an elective.

---

## 8. Gap 7 — Professional formation, and why "growth mindset" is the wrong answer

You are right that mindset is completely absent. But the standard fix — bolt on a growth-mindset module — is not supported by the evidence, and a university course that teaches it as science will be embarrassing.

### 8.1 What the evidence actually says

| Study | Finding |
|---|---|
| **Macnamara & Burgoyne (2023)**, *Psychological Bulletin* 149(3–4), DOI 10.1037/bul0000352 | k=63, N=97,672. Mean **d = 0.05** — **non-significant after publication-bias correction**. In studies that demonstrably shifted mindsets: **d = 0.04, n.s.** In highest-quality studies: **d = 0.02, n.s.** *"No theoretically-meaningful moderators were significant."* And: *"Authors with a financial incentive to report positive findings published significantly larger effects."* Conclusion verbatim: *"likely attributable to inadequate study design, reporting flaws, and bias."* **[V]** |
| **Burnette et al. (2023)**, same issue, DOI 10.1037/bul0000368 — the *friendly* meta-analysis | Best case (targeted + high fidelity): academic achievement **d = 0.14**, but the **95% prediction interval is −0.08 to 0.35** — it crosses zero. **[V]** |
| **Yeager et al. (2019)**, *Nature* 573 | Real but small effect, and the decisive moderator is that *"the intervention changed grades when **peer norms aligned** with the messages of the intervention."* **[V]** |

The two 2023 meta-analyses were published **back-to-back in the same issue** as a deliberate adversarial pairing. Citing only one is intellectually dishonest. **[V]**

And: for **university-age engineering students** there is no evidence base at all — the only credible signals are in low-achieving adolescents and low-SES populations.

**Keep the finding (norms and environment decide whether beliefs translate into behaviour). Discard the module.**

### 8.2 What to build instead — better-evidenced, and a better fit for FDE work

| Mechanism | Evidence | Fit |
|---|---|---|
| **Error management training** — active exploration + explicit encouragement to make and process errors during training | Keith & Frese (2008), *JAP* 93(1), DOI 10.1037/0021-9010.93.1.59: k=24, N=2,183. **d = 0.44** overall; **d = 0.56** post-training transfer; **d = 0.80 adaptive transfer** (structurally novel tasks) **[V]** | Adaptive transfer *is* the FDE job description. This is the operationalised, evidence-backed version of what "growth mindset" gestures at — but it is a **training design**, not a belief intervention. **This should be the spine.** |
| **Productive failure** — problem-solving *before* instruction | Sinha & Kapur (2021), *RER* 91(5): 53 studies, 166 comparisons. **g = 0.36** [0.20, 0.51]; **g = 0.87 after publication-bias correction** — note the correction *increased* the estimate, the opposite of growth mindset. Boundary condition: works for domain-specific conceptual learning in older learners; reverses for young children and domain-general skills **[V]** | Directly implies the sequencing rule below. |
| **Feedback discipline** | Kluger & DeNisi (1996), *Psych Bulletin* 119(2): 607 effect sizes, 23,663 observations, mean **d = 0.41** — but **over one-third of feedback interventions *decreased* performance**, and *"FI effectiveness decreases as attention moves up the hierarchy closer to the self and away from the task"* **[V]** | This **contraindicates "praise the effort"** — effort praise is self-directed feedback, exactly the region where feedback stops working. Feedback must target the **artefact and the reasoning**. |
| **Psychological safety** | Edmondson (1999), *ASQ* 44(2): psychological safety → **learning behaviour** → team performance (mediated). Frazier et al. (2017), *Personnel Psychology* 70(1): 136 samples, 22,000+ individuals **[V]** | The mediator matters: the assessable thing is the **observable learning behaviour** (help-seeking, error-disclosure latency, question-asking in review), not a vibe. |
| **Self-efficacy** | Bandura: mastery experiences are the strongest source; **verbal persuasion is the weakest [B]** | Predicted the weakness of mindset interventions 25 years in advance. Design implication: **shipping working things to real users is the intervention.** |
| **Deliberate practice — with a warning** | Macnamara, Hambrick & Oswald (2014), *Psych Science* 25(8): variance explained = games 26%, music 21%, sports 18%, **education 4%, professions <1%** **[V]** | Do **not** build the strand on "10,000 hours". Use it only for narrow, well-defined sub-skills (debugging drills, code-reading fluency). |

**On Microsoft's own culture material:** *Hit Refresh*, "learn-it-all not know-it-all", Model–Coach–Care. There is **no peer-reviewed evaluation**, no control condition, and total confounding (CEO change + cloud pivot + abolition of stack ranking + reorg). Use it as a **case study in organisational change to be critiqued** — asking students to identify the confounds is itself a good professional-formation exercise — and note that the parts that plausibly worked (abolishing stack ranking) are **environment changes, not belief messaging**. Do not present it as evidence. **[V]**

### 8.3 The AI-specific formation gap

The material teaches students to *use* AI tools. It does not teach them to be **calibrated** about AI tools, and the evidence says that is the harder and more important skill.

| Finding | Numbers |
|---|---|
| **METR (2025)**, arXiv:2507.09089 — 16 experienced OSS developers, 246 real tasks in mature repos (~5 yrs prior experience), randomised per task | Developers **forecast** +24% faster · **believed afterwards** +20% faster · **measured: 19% slower** (95% CI +2% to +39%). Economics experts forecast 39% faster; ML experts 38%. **Practitioners could not detect a 19% slowdown while it was happening to them.** **[V]** |
| **METR (Feb 2026) follow-up** — 57 developers, 143 repos, 800+ tasks | −18% (original cohort) / −4% (new cohort) i.e. speedups — **but METR call their own data unreliable** because 30–50% of developers withheld tasks they didn't want to do without AI. Superb teaching case on selection bias. **[V]** |
| **Dell'Acqua et al. (2023/2026)**, HBS WP 24-013, forthcoming *Organization Science* — 758 BCG consultants, preregistered | Inside the frontier (18 tasks): **+12.2% tasks completed, −25.1% time, quality up.** Outside it (1 task): **19 percentage points *less* likely to be correct.** Definition: the frontier is jagged *"even within the same knowledge workflow and with a seemingly similar level of difficulty."* **[V]** |
| **Peng et al. (2023)**, arXiv:2302.06590 — GitHub Copilot RCT, HTTP-server-in-JS task | **55.8% faster.** Note the task: greenfield, self-contained, well-specified, auto-checkable — the opposite end of the spectrum from METR. **The +55.8% and the −19% are not contradictory; they are two points on the jagged frontier. Teach them together, always.** **[V]** |
| **Noy & Zhang (2023)**, *Science* 381(6654) — 453 professionals, mid-level writing | Time −40%, quality +18%, **inequality between workers decreased** (lower-skilled gained most). **[V]** |
| **Kosmyna et al. (2025)**, arXiv:2506.08872 — EEG, essay writing, crossover | **Ordering effect:** Brain-then-LLM showed higher recall and engagement; LLM-then-Brain showed under-engagement. LLM users had the lowest essay ownership and **struggled to quote their own work**. Handle with care: n=18 in the crossover, non-peer-reviewed preprint, "cognitive debt" is a coinage. Teach the critique alongside. **[V]** |
| **Bastani et al. (2024)**, SSRN 4895486 — ~1,000 students, maths practice | Reported: large gains *during* AI-assisted practice; **~17% worse on a subsequent unassisted exam** for the unguarded-AI arm; pedagogical guardrails neutralised the deficit. **[?] Numbers not verifiable this session (SSRN 403) — verify before using; this is a load-bearing citation.** |

**Three verified findings converge on one rule** — Kapur (struggle before instruction), Kosmyna (brain-first ordering), and the Bastani direction: **productive struggle first, AI second, verification always.** And from METR + Dell'Acqua: **the frontier is jagged and invisible to intuition, and practitioners are badly miscalibrated about their own AI-assisted performance.** Calibration is therefore a first-class, separately assessed learning outcome — not a footnote.

---

## 9. Gap 8 — Assessment and accreditation

Nine of the ten gates in the current journey are ≥80% MCQ or proctored exam. Mapped against ABET CAC Criterion 3 **[V]**:

| Outcome | Status |
|---|---|
| C5.1 Techniques, skills, tools for practice | **Met** |
| C5.2 Security **and privacy** principles/practices | **Met** (note 05 is genuinely strong) |
| C5.3 Local and global impacts on individuals/orgs/society | **Partial** — RAI is framed as a control plane, not a societal-impact analysis |
| C3.1 Analyse a complex problem, apply principles to identify solutions | **Partial** — the "choose the right build surface" judgement is exactly this, but it is assessed by knowledge check |
| C3.2 **Design, implement, and evaluate** a solution | **Gap** — labs exist; the terminal artefact is an assessment score |
| C3.3 Communicate effectively in varied professional contexts | **Gap** — no assessed communication artefact |
| C3.4 Professional responsibility, informed legal/ethical judgement | **Partial** — content present, no assessed judgement task |
| C3.5 Function effectively as team member/leader | **Gap** — the entire journey is a solo path |
| Proposed C5.4 (2026-27) comprehensive project exercising **professional dispositions** | **Gap** | 

ABET's proposed CAC changes (comment period closed 15 Jun 2025, first applied 2026–27) add a required *"comprehensive project or experience… which builds on technical knowledge and skills acquired in prior advanced course work, and enables the application of appropriate professional dispositions"*, and promote **AI** and **software engineering** to substantial-coverage status. **[V]**

**The package is knowledge-model complete and competency-model empty** — precisely the axis accreditation is moving toward.

### 9.1 What the closest academic analogue does

**CMU 17-645 *Machine Learning in Production / AI Engineering*** (Kästner), Fall 2026 — the nearest analogue, and its syllabus already covers MCP, agent security, and LLM-as-judge evals. **[V]**

- Grading: 35% individual assignments, 30% group project, 25% midterms + participation, 10% labs. **No final exam.**
- **The project is the spine:** teams of 3–6 build a movie recommendation service serving **1 million active users** across four milestones; *"your system runs live for several weeks, is graded on how it holds up under real load and changing environment conditions."*
- **Oral verification:** *"Some parts of the grading rubric will require you to verbally explain your solution to a member of the course staff."*
- **Specifications grading with a token economy:** pass/fail, no partial credit, 8 student tokens + 8 team tokens; 1 token = 1 day extension, 3 tokens = resubmission recovering 90% of the difference. Grade boundaries set high to compensate (A ≥96%).
- **Their AI policy is the sharpest one found, and it is the opposite of a ban:** unrestricted AI use on artefacts; *"two settings where AI use is strictly prohibited: (1) exams… and (2) **live conversations with course staff**."* Plus an explicit cost disclosure: *"students should expect subscription costs of $20–100 per month (roughly comparable to the cost of traditional textbooks)."*

**The design logic is the important part: unrestricted AI use is made safe by moving verification to synchronous oral defence.** You do not need to detect AI if the gate is a conversation. This matters because **detection is not a viable control** — Liang et al. (arXiv:2304.02819, *Patterns*) show GPT detectors both systematically misclassify non-native English writers *and* are trivially bypassed by simple prompting. Both failure modes are disqualifying. **[V]**

Contrast **Stanford CS336**, which bans AI autocomplete outright **[V]** — because *its* learning objective is the implementation skill itself, so tool use substitutes for the objective. **Policy should be derived from what you are certifying, not from a global stance on AI.**

### 9.2 The assessment model worth stealing from medicine

Medicine has already solved your actual problem: *how do you certify that a person can be trusted to do dangerous, ambiguous work unsupervised?*

**Entrustable Professional Activities** (ten Cate, *JGME* 5(1), 2013, DOI 10.4300/JGME-D-12-00380.1) **[V]**:
- An EPA is a **unit of professional practice** — *"independently executable, observable, and measurable in their process and outcome, and therefore suitable for entrustment decisions."*
- Entrustment decisions *"involve clinical skills and abilities as well as more general facets of competence, such as **understanding one's own limitations and knowing when to ask for help**."* ← this is the assessable form of the disposition you care about.
- Rated on a 5-level supervision scale: observe only → direct supervision → indirect/reactive supervision → unsupervised → supervises others.
- Distinguishes **ad hoc entrustment** (this shift) from **structural entrustment** (a documented threshold crossing).
- Explicitly models four sources of variance: trainee state, supervisor leniency, context, task rarity.
- ~20–30 EPAs for a full residency; a 3-year undergraduate degree should target 8–12.

And the crucial measurement warning — Govaerts et al. (*AHSE* 16(2), 2011) found expert raters *"generated significantly more interpretations and fewer literal descriptions"* than novices but **there were no significant differences in rating scores**. **[V]** The number is the low-information channel; **the narrative justification is the assessment.** Design instruments so narrative is mandatory. And never let one supervisor's single observation carry a structural decision — use many low-stakes observations aggregated by a committee.

---

## 10. Gap 9 — Ethics, society, and critique

Note 06 covers Responsible AI as five principles mapped to workflow stages, and note 05 covers governance tooling. Both are compliance framings. Missing:

- **Fairness impossibility results.** Calibration, balance-for-positive-class, and balance-for-negative-class cannot be simultaneously satisfied except in degenerate cases (Kleinberg, Mullainathan, Raghavan, ITCS 2017, arXiv:1609.05807; Chouldechova, *Big Data* 5(2), 2017). Governance tooling implies fairness is a checkbox; it is a set of provably incompatible constraints requiring an explicit, defended choice. **[B]** Textbook: Barocas, Hardt, Narayanan, *Fairness and Machine Learning* (MIT Press, 2023, free).
- **Human–AI interaction as an engineering discipline.** Amershi et al., "Guidelines for Human-AI Interaction", CHI 2019 (18 validated guidelines; the basis of Microsoft's own **HAX Toolkit** — vendor-authored, genuinely vendor-neutral, and absent from the notes); Google PAIR *People + AI Guidebook*. **[B]**
- **Appropriate reliance and automation bias.** Bansal et al. (CHI 2021) found explanations increase acceptance *whether or not the AI is correct*. Buçinca et al. on cognitive forcing functions (CSCW 2021). Vaccaro, Almaatouq, Malone, *Nature Human Behaviour* 8 (2024): human–AI combinations frequently **underperform the better of the two alone**. **[B]**
- **Explainability and its limits.** Rudin, *"Stop Explaining Black Box Machine Learning Models for High Stakes Decisions"*, *Nature Machine Intelligence* 1 (2019); "Fooling LIME and SHAP" (AIES 2020). **[B]**
- **Documentation artefacts.** Model cards (Mitchell et al., FAT* 2019), datasheets for datasets (Gebru et al., *CACM* 64(12), 2021), system cards, and Microsoft's own **Responsible AI Standard v2 / Transparency Notes / Impact Assessment template** — required for internal RAI review and never seen by students.
- **Environmental cost and labour.** Luccioni, Jernite, Strubell, "Power Hungry Processing", FAccT 2024 — *inference* now dominates lifecycle emissions at scale. Gray & Suri, *Ghost Work* (2019); Crawford, *Atlas of AI* (2021). **[B]**
- **The critical position on the discipline itself.** Palantir's Gotham thesis is explicitly a security/civil-liberties tradeoff, and its careers page frames the mission as *"ensuring the future of the West."* **[V]** An academic course must engage this critically. A vendor module structurally cannot.
- **The organisational-structure critique.** Qureshi himself cites Jo Freeman, *"The Tyranny of Structurelessness"* (1970–73) against Palantir's near-titleless org design. **[V]** Excellent seminar pairing.

---

## 11. Gap 10 — Content half-life

Roughly 60–70% of the current material is product-surface detail with a **6–12 month half-life**. Evidence: within the research window, "Azure AI Foundry" → "Microsoft Foundry", Bing grounding → Web Search tool, the tool catalog roughly doubled, Toolbox and Agent Optimizer appeared, and AI-102 was retired. **[V]**

A degree course cannot be built on that layer. The architecture must separate:

- **Durable core (10-year half-life):** IR theory, ANN algorithms, inference economics, measurement theory, statistics, distributed-systems resilience, security threat models, HCI, ethics, discovery method, engagement craft.
- **Semi-durable (3–5 years):** transformer internals, post-training taxonomy, agent patterns, RAG architectures, eval frameworks, OTel GenAI conventions, MCP/A2A protocols.
- **Perishable (6–12 months):** portal names, SKU names, preview/GA status, specific tool lists, pricing.

**The perishable layer belongs in a lab manual with a version stamp and an owner, not in a lecture.** A good forcing function: make the students maintain it — a living, versioned "frontier map" of what current models and platform features are and are not reliable at, updated monthly with evidence. That converts Dell'Acqua's jagged frontier from a fact to memorise into an empirical, perishable object they own. **[V]**

---

## 12. Proposed course architecture

A three-year spine, not a module. Each principle traced to evidence.

### 12.1 Design principles

| # | Principle | Evidence |
|---|---|---|
| **P1** | **Do not teach mindset. Engineer the environment that produces the behaviour.** | Macnamara & Burgoyne (belief intervention ≈ 0) **[V]** + Yeager (peer norms are *the* moderator) **[V]** + Bandura (verbal persuasion is the weakest source) **[B]** |
| **P2** | **Make error production a designed feature, then require structured error processing.** | Keith & Frese, **d = 0.80 adaptive transfer** **[V]** |
| **P3** | **Sequence: struggle → instruction → augmentation. Never AI-first.** | Sinha & Kapur g=0.36/0.87 **[V]**; Kosmyna ordering effect **[V]** |
| **P4** | **All feedback targets the artefact and the reasoning. Never the person, never the effort.** | Kluger & DeNisi — >1/3 of feedback interventions harm; self-directed are worst **[V]** |
| **P5** | **Assess entrustment, not disposition self-report.** Many low-stakes observations, narrative mandatory, aggregated by committee. | ten Cate **[V]**; Govaerts (scores don't discriminate; narratives do) **[V]** |
| **P6** | **Calibration is a first-class, separately assessed outcome.** | METR perception gap **[V]**; Dell'Acqua invisible jagged frontier **[V]** |
| **P7** | **Teach at least one layer below the abstraction you will use.** | Anthropic's own guidance: start with the API directly, because frameworks obscure the prompts you must debug **[V]** |
| **P8** | **Every assignment ships an eval suite before it ships a feature.** | Huyen devotes 2 of 9 chapters to evaluation; Husain's whole thesis is that eval capability *is* the differentiator **[V]** |
| **P9** | **Real clients, real stakes, graded release of responsibility.** | Lave & Wenger **[B]**; Bandura mastery experiences **[B]**; ten Cate structural entrustment **[V]** |
| **P10** | **Teach contested things as contested.** Show ISE vs. Palantir; show Macnamara vs. Burnette; show METR vs. Peng. | The defining capability a course has that a vendor module does not. |

### 12.2 Strand structure

**Strand A — Foundations of AI systems (durable core).** Transformers and tokenization → post-training taxonomy → inference economics (with hand-computed KV cache and TTFT/TPOT) → embeddings and ANN internals → classical IR and hybrid retrieval → long-context limits. Lab: implement BM25, a naive HNSW insert/search, a KV-cache calculator, a ReAct loop over raw API calls.

**Strand B — Measurement (the spine).** Error analysis and failure taxonomies → criteria drift → building and *validating* an LLM judge against your own hand labels → inter-annotator agreement → statistics for evals → retrieval metrics → agent benchmarks and `pass^k` → online experimentation and guardrail metrics → construct validity and contamination. Runs through every other strand as the assessment gate.

**Strand C — Building and operating.** Agent architectures and the LLM-Modulo posture → context engineering → tools, MCP, A2A → orchestration and durable/long-running execution → structured outputs and their quality cost → resilience patterns → observability with OTel GenAI conventions → cost/latency budgeting and gateway patterns → deployment, canary, model migration. **Microsoft platform is the instantiation layer here** — and it should include the ten omissions in §6, especially the gateway, PTU, evaluations, Toolbox, ACL trimming, and WAF-for-AI.

**Strand D — Adversary and society.** Prompt injection as structural → the lethal trifecta → MCP threat model → red-teaming with PyRIT/garak → standards mapping (OWASP/ATLAS/NIST/ISO/EU AI Act) → fairness impossibility → appropriate reliance and automation bias → documentation artefacts → environmental and labour cost → the critical literature on the discipline itself.

**Strand E — Engagement craft (the FDE strand).** Context scarcity and tacit knowledge → contextual inquiry and JTBD interviewing → stakeholder mapping and organisational politics → data-access negotiation → corporate detective work → domain-language acquisition → velocity vs. quality (the ISE/Palantir seminar) → the generalisation decision → change management, enablement, handover → engineering feedback as an institution → measurement and economics of the model.

**Strand F — Professional formation (assessment layer, ~10% credit/year, never standalone).**
- *Year 1 — calibration and error.* Weekly **error autopsy** with a fixed, artefact-directed format (observable failure / my model of the system / where the models diverged / what would have detected it sooner — **no feelings section**, per P4). **Calibration lab:** before each AI-assisted task, predict correctness and time-with vs time-without; after, record actual; score with a **Brier score** across the semester. This turns the METR perception gap from a lecture into a personal dataset. **Struggle-first protocol** on every new concept. Collectively-maintained **frontier map**.
- *Year 2 — team, feedback, client.* Studio with desk crits, where faculty visibly work problems *badly first*. Feedback training as a taught, assessed skill, scored for task-locus vs self-locus. Psychological safety instrumented via observable learning behaviours (help-seeking frequency, error-disclosure latency). First real client at supervision level 2–3.
- *Year 3 — entrustment.* Extended forward deployment with an external client, supervision level 3→4. Explicitly assessed: recognising the limits of one's own competence and escalating. Handover capability. Terminal entrustment-committee decision.

### 12.3 Assessment architecture

**Define 8–12 EPAs.** Draft set:

| EPA | Title |
|---|---|
| 1 | Convert an ambiguous customer situation into a scoped, testable build increment |
| 2 | Ship a working increment to a real user within a fixed time-box |
| 3 | **Verify AI-generated output before it reaches a user** (appropriate reliance) |
| 4 | **Decide when *not* to use AI, and justify it against evidence** |
| 5 | Design, run, and correctly interpret an evaluation that decides a ship/no-ship |
| 6 | Diagnose and recover from a production incident |
| 7 | Give and receive design critique that changes an artefact |
| 8 | **Recognise the limit of own competence and escalate appropriately** |
| 9 | Instrument a system so that its failures are detectable |
| 10 | Hand over a running system with sufficient documentation for another engineer |
| 11 | Communicate technical risk to a non-technical stakeholder |
| 12 | Threat-model an agentic system and demonstrate an exploit against your own build |

EPAs 3, 4 and 8 are the professional-formation core — and note that all three are **behaviours in context**, not dispositions in the head. That is what makes them assessable.

**Rate on the 5-level entrustment scale.** Graduation expressed as an entrustment profile (*"Level 4 on EPAs 1,2,3,5,6,10; Level 3 on 4,8,9,11,12"*) — far more defensible to an accreditor and more meaningful to an employer than a grade.

**Collect many low-stakes observations with mandatory narrative**, target ~8–12 per EPA before a structural decision **[?] — verify this number against the generalisability-theory literature**. Distinguish ad hoc from structural entrustment. Require raters to note ten Cate's four variance sources.

**A competence committee, not an examiner.** A standing panel reviews the accumulated portfolio each semester. Individual supervisors make ad hoc ratings only. This is the single most important structural protection against rater bias.

**AI policy — adopt the CMU split verbatim:** unrestricted tool use on artefacts; **zero** tool use in live conversation with assessors. Publish it with CMU's specificity, including the subscription-cost disclosure (Russell Group principle 3 requires attention to equal access where tools sit behind paywalls). **[V]**

---

## 13. Prioritised build order

If you can only do some of this, do it in this order.

| Priority | Action | Why first |
|---|---|---|
| **1** | **Resolve the AI-102 substitution** in [README.md](README.md) | Hard blocker; someone may book a retired exam. **[V]** |
| **2** | **Add the evaluation spine (Strand B)** and the rule that every assignment ships an eval suite first | Largest single gap; highest transfer; changes student behaviour immediately. |
| **3** | **Add one comprehensive project with oral defence** | Closes C3.2, C3.3, C3.5 and proposed C5.4 with a single instrument, and makes AI policy tractable without detection. **[V]** |
| **4** | **Add the systems layer beneath the abstraction (Strand A labs)** — BM25, HNSW, KV-cache calculator, raw ReAct loop | Cheap to build, permanently useful, and the fastest way to break the "portal = understanding" illusion. |
| **5** | **Rewrite the security content as an adversary model** (Strand D), not a control list | The current framing actively produces engineers who will ship exfiltration vectors. |
| **6** | **Fix the vendor-claim hygiene** — source or delete the impact-numbers table; mark the 36% and 2–3x claims as vendor benchmarks | Credibility precondition for everything else in an academic setting. |
| **7** | **Add the ten Microsoft platform omissions** in §6, led by the AI gateway, PTU/capacity, evaluations SDK, Toolbox, ACL trimming, WAF-for-AI | Makes the *vendor* half actually production-grade. |
| **8** | **Build Strand E (engagement craft)** starting with contextual inquiry, stakeholder mapping, and the ISE-vs-Palantir seminar | The distinctive content. Nobody else teaches it; the primary sources are free. |
| **9** | **Build Strand F with EPAs and a competence committee** | Highest design cost, highest accreditation payoff. Requires institutional buy-in. |
| **10** | **Version-stamp and delegate the perishable layer** to a student-maintained frontier map | Solves the half-life problem structurally instead of by annual rewrite. |

---

## 14. Open questions and things to verify before publishing

Flagged honestly rather than papered over.

1. **AI-102 status** — confirm with LevelUp whether an already-held cert still satisfies Phase 1. **[V] that the page says retired; [?] what the substitution rule now is.**
2. **CS2023 disposition list and count** — the csed.acm.org PDFs would not extract and the ACM DL returned 403. The Dispositions Project lists 8 with definitions; secondary sources reference 11. **Open DOI 10.1145/3664191 by hand before quoting a count.** **[?]**
3. **Bastani et al. (2024)** effect sizes — SSRN blocked. This is a load-bearing citation for the "AI-first harms learning" argument. **Verify before use.** **[?]**
4. **Sisk et al. (2018) point estimates** (r≈.10, d≈0.08) — could not retrieve from primary source. **[?]**
5. **Prompt flow deprecation** — strong circumstantial evidence (relocated to `/azure/machine-learning/` and `/foundry-classic/`) but **no formal retirement notice found**. **[?]**
6. **The WBA "8–12 observations" figure** — from the generalisability-theory literature, not verified. **[?]**
7. **Palantir's current role taxonomy** — the careers page now names **three** roles (Echos, Deltas, Devs), not two; only the Echo description rendered. The Palantir blog posts ("Dev versus Delta", 2019; "Who Wants to be a Delta?", 2021) were only reachable via aggregator summaries. **Read the originals before teaching the taxonomy.** **[?]**
8. **The lowercase "delta" as a metric** ("the measurable change you produced") circulates in FDE discourse. **No primary Palantir source defines it that way** — the verified meaning is a role name. Do not teach it as canon. **[?]**
9. **CSE → ISE rename history** — real, but not confirmed from a Microsoft primary source. **[?]**
10. **Unsourced trade-press figures** — "800%+ growth in FDE postings Jan–Sep 2025", "95% of enterprise AI pilots produced no P&L impact" (MIT NANDA, widely contested), "until 2016 Palantir had more Deltas than SWEs". **Do not repeat.** **[?]**
11. **Microsoft Learn URLs** — several from the platform research were not individually re-resolved, and the `/azure/ai-foundry/` → `/azure/foundry/` migration means some will 301 or 404. Re-resolve every URL before it goes in front of students.

---

## 15. Reading list (highest-value first)

**Free primary sources — assign these directly**
1. Ted Mabrey, *"Sorry, that isn't an FDE"* (2024) — the normative definition of the discipline
2. Nabeel Qureshi, *"Reflections on Palantir"* (2024) — the insider ethnography
3. Sarah Constantin, *"The Great Data Integration Schlep"* (2024) — the materialist counter-reading
4. Microsoft ISE Engineering Fundamentals Playbook — "Who is ISE?", the Checklist, First Week of an ISE Project, **Engineering Feedback**
5. Anthropic, *"Building effective agents"* (Dec 2024) and *"Effective context engineering for AI agents"* (Sept 2025)
6. OpenAI, *"A practical guide to building agents"* (2025)
7. Hamel Husain, *"Your AI Product Needs Evals"* (2024); Shankar et al., *"Who Validates the Validators?"* (UIST 2024)
8. Simon Willison, *"The lethal trifecta"* (Jun 2025) and the `prompt-injection` tag series
9. Live FDE job descriptions (OpenAI, Anthropic, Sierra) — as primary documents to close-read, not as career advice

**Textbooks**
10. Chip Huyen, *AI Engineering: Building Applications with Foundation Models* (O'Reilly, 2025) — **if you adopt one book for the technical half, this is it**
11. Christian Kästner, *Machine Learning in Production* (MIT Press, 2025; free web edition) — the closest thing to a course-shaped text, with a full published syllabus at `mlip-cmu.github.io`
12. Barocas, Hardt, Narayanan, *Fairness and Machine Learning* (MIT Press, 2023; free)
13. Kleppmann, *Designing Data-Intensive Applications* (O'Reilly, 2017)
14. Nygard, *Release It!* 2nd ed. (2018); Beyer et al., *Site Reliability Engineering* (2016)
15. Kohavi, Tang, Xu, *Trustworthy Online Controlled Experiments* (Cambridge, 2020)
16. Beyer & Holtzblatt, *Contextual Design* (1998); Portigal, *Interviewing Users* (2013); Fitzpatrick, *The Mom Test* (2013)
17. Evans, *Domain-Driven Design* (2003); Skelton & Pais, *Team Topologies* (2019)
18. Manning, Raghavan, Schütze, *Introduction to Information Retrieval* (Cambridge, 2008; free)

**Papers that must be on the syllabus** — Sculley et al., "Hidden Technical Debt in ML Systems" (NeurIPS 2015); Amershi et al., "Software Engineering for Machine Learning" (ICSE-SEIP 2019); Amershi et al., "Guidelines for Human-AI Interaction" (CHI 2019); Greshake et al., indirect prompt injection (arXiv:2302.12173); Kambhampati et al., LLM-Modulo (arXiv:2402.01817); Barnett et al., seven RAG failure points (arXiv:2401.05856); Miller, "Adding Error Bars to Evals" (arXiv:2411.00640); Kleinberg et al., fairness impossibility (arXiv:1609.05807); Keith & Frese, error management training (JAP 2008); Kluger & DeNisi, feedback (Psych Bull 1996); ten Cate, EPAs (JGME 2013).
