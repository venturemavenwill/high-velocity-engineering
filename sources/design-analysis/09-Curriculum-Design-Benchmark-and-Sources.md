# Curriculum Design Benchmark — FTE Study Package vs. Formal Standards

> A research-grounded review of this study-note package against ACM/IEEE-CS/AAAI **CS2023**, **ABET** (EAC + CAC) criteria, published learning-science practice, and exemplar university AI-engineering courses.
> Every claim below is tagged **[verified]** (fetched from the primary source during this pass), **[secondary]** (fetched from a credible source quoting the primary), or **[unverified]** (asserted from prior knowledge, not re-derived — treat as a hypothesis).

---

## 0. Headline finding — act on this first

**The README's Phase 1 substitution note is likely stale.** [verified]

`README.md` states: *"AI-103: Develop AI apps and agents on Azure … (no LevelUp prep course; an active **AI-102** is accepted in its place)."*

Microsoft Learn's credential page for **Microsoft Certified: Azure AI Engineer Associate** (the AI-102 credential) now carries the banner:

> "This certification and the renewal assessment are **retired**."

Page metadata: `Last Updated 12/23/2025`, `hidden: true`, `ROBOTS: noindex`. The page also shows no training available and lists assessed domains including *Plan and manage an Azure AI solution*, *Implement generative AI solutions*, **and *Implement an agentic solution***.

**Action:** re-confirm with the LevelUp/Partner Center team whether "an active AI-102" still satisfies Phase 1, and what the replacement path is. An *already-held, unexpired* AI-102 may still count; a *newly attempted* one may no longer be sittable. This is a hard blocker for anyone planning to sit AI-102 as the substitution.

---

## 1. What formal standards actually require

### 1.1 ABET — Computing Accreditation Commission (CAC), 2025–26 [verified]

**Criterion 3 (Student Outcomes).** Graduates will have an ability to:

1. Analyze a complex computing problem and apply principles of computing and other relevant disciplines to identify solutions.
2. Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program's discipline.
3. Communicate effectively in a variety of professional contexts.
4. Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles.
5. Function effectively as a member or leader of a team engaged in activities appropriate to the program's discipline.

Computer Science programs add outcome **6: Apply computer science theory and software development fundamentals to produce computing-based solutions.**

**Criterion 5 (Curriculum).** ≥30 semester credit hours of computing topics, which *must* include:

1. Techniques, skills, and tools necessary for computing practice.
2. **Principles and practices of security and privacy in computing.**
3. **Local and global impacts of computing solutions on individuals, organizations, and society.**

CS program criteria add: ≥40 credit hours CS (substantial coverage of algorithms/complexity, CS theory, programming-language concepts, software development; ≥1 general-purpose language; exposure to architecture, information management, networking, OS, parallel/distributed; systems at varying levels of abstraction; **a major project integrating prior coursework**), ≥15 credit hours math/stats including discrete math, probability, statistics, and science coursework applying the scientific method.

### 1.2 ABET's *proposed* CAC changes (180-day comment closed 15 Jun 2025; first applied 2026–27 cycle) [verified]

Three changes matter directly to an AI-engineering curriculum:

| Change | Why it matters here |
|---|---|
| New definition: **PROFESSIONAL DISPOSITIONS** = *"behaviors desired in the workplace."* | Formalises the "how you work," not just "what you know." |
| Criterion 5 gains item 4: *"A **comprehensive project or experience** appropriate to the discipline which: 1) builds on technical knowledge and skills acquired in prior advanced course work, and 2) **enables the application of appropriate professional dispositions**."* | A capstone is no longer optional garnish — and it must exercise dispositions. |
| CS program criteria "substantial coverage" list expands to explicitly add **software engineering** and **artificial intelligence**; "exposure" list expands to add specialized platforms, graphics/interactive techniques, HCI, and **sustainable computing**. | AI moves from elective to core-substantial. |

### 1.3 ABET — Engineering Accreditation Commission (EAC), 2025–26 [verified]

Outcomes (1)–(7) include, notably, **(6) develop and conduct appropriate experimentation, analyze and interpret data, and use engineering judgment to draw conclusions** and **(7) acquire and apply new knowledge as needed, using appropriate learning strategies.** Criterion 5 requires *"a culminating major engineering design experience that 1) incorporates appropriate engineering standards and multiple constraints, and 2) is based on the knowledge and skills acquired in earlier course work."*

EAC's definition of **COMPLEX ENGINEERING PROBLEMS** is a useful design target: *"involving wide-ranging or conflicting technical issues, having no obvious solution, addressing problems not encompassed by current standards and codes, including many component parts or sub-problems, involving multiple disciplines, or having significant consequences in a range of contexts."*

### 1.4 ACM/IEEE-CS/AAAI CS2023

CS2023's structural innovation is that a knowledge area is not just content: [secondary]

> Knowledge area = { Knowledge units } + { Professional dispositions }
> "Professional dispositions are malleable values, beliefs, and attitudes that enable consistent behaviors desirable in the workplace, e.g., persistent, self-directed. When dispositions seem indistinguishable from skills (e.g., communicative, collaborative), they refer to the **willingness and intent to apply the skills** to complete a task."

CS2023 proposes a **competency framework** rather than an exhaustive competency model. [secondary]

**Named dispositions with definitions** (from the NSF-funded Dispositions Project, DUE-2216121 / 2215166 / 2215970 / 2216031, which studies the CS2023 disposition set): [verified]

| Disposition | Definition |
|---|---|
| Adaptable | modify your strategies, techniques or tools to adjust to new events, circumstances, or demands |
| Collaborative | work with other people as a team, exchange, share and discuss ideas, feedback, and actions to accomplish a task |
| Inventive | find different ways of completing a task that may not be obvious at first glance |
| Meticulous | paying attention to detail even when the detail is incidental to the success of a solution and addressing it may or may not be expected or rewarded |
| Persistent | stick with a task until it is completed even when the task seems difficult and even when you have doubts about your ability |
| Proactive | attempt a task before it is due even though such initiative may not be expected or rewarded |
| Responsive | promptly attempt to resolve/address events, requests, feedback, or suggestions appropriately even when promptness may not be expected or rewarded |
| Self-Directed | learn new tools, techniques, etc. on your own to complete a task, even when the tool/technique is only minimally used or discussed in class and you may not receive additional credit just for learning it |

> **Cite caution.** Secondary sources also reference *Professional*, *Purpose-driven*, and *Responsible* as CS2023 dispositions, and the CS2023 competency-framework section shows a longer picker list ending in "… / Self-Directed / Other". I could **not** verify a canonical count from the primary PDFs in this pass (csed.acm.org PDFs would not extract; the ACM DL book returned HTTP 403). **Do not assert a specific number of dispositions** without opening §1.4 *Introduction to Competency Framework* directly. [unverified]

**Primary sources to open by hand** (all PDFs; automated extraction failed):
- `csed.acm.org/wp-content/uploads/2024/04/1.3-Introduction-to-Knowledge-Model.pdf`
- `csed.acm.org/wp-content/uploads/2024/04/1.4-Introduction-to-Competency-Framework.pdf`
- `csed.acm.org/wp-content/uploads/2024/04/2.2-Characteristics-of-Graduates.pdf`
- `csed.acm.org/wp-content/uploads/2024/04/3.1-Body-of-Knowledge-1.pdf`
- `csed.acm.org/wp-content/uploads/2024/04/4.3-Generative-AI-and-the-Curriculum.pdf` ← most relevant to this package

---

## 2. How this package scores against those standards

Mapping the eight study notes (01–08) against ABET CAC Criterion 3 and Criterion 5:

| Requirement | Coverage in this package | Verdict |
|---|---|---|
| C5.1 Techniques, skills, tools for practice | Strong — Copilot Studio, Foundry, Agent Framework, Fabric, MCP/A2A/OpenAPI, Agents Toolkit, CI/CD and ALM (note 04) | **Met** |
| C5.2 Security **and privacy** principles/practices | Strong — note 05 is a dedicated Observe/Govern/Secure treatment (Entra Agent ID, Purview DLP, Defender XDR, Zero Trust for AI); note 06 covers SFI | **Met** |
| C5.3 Local and global impacts on individuals/orgs/society | Partial — Responsible AI appears in notes 06 and 08, but as a governance control surface rather than a societal-impact analysis | **Partial** |
| C3.1 Analyze a complex problem, apply principles to identify solutions | Partial — "choose the right build surface" (README idea #4) is exactly this judgement, but it is assessed via knowledge checks | **Partial** |
| C3.2 **Design, implement, and evaluate** a computing-based solution | Weak — labs exist (notes 02–05) but the terminal artifact is an ≥80% assessment, not a built-and-evaluated system | **Gap** |
| C3.3 Communicate effectively in varied professional contexts | Weak — no assessed communication artifact | **Gap** |
| C3.4 Professional responsibility, informed judgment on legal/ethical grounds | Partial — Responsible AI content present; no assessed judgment task | **Partial** |
| C3.5 Function effectively as member/leader of a team | Absent — the entire journey is a solo path | **Gap** |
| Proposed C5.4 Comprehensive project exercising dispositions | Absent | **Gap** |

**Summary.** The package is **knowledge-model complete and competency-model thin.** It covers the CS2023-style *knowledge units* well and the *dispositions* half not at all — which is precisely the axis ABET is moving toward for the 2026–27 cycle.

This is a predictable consequence of the assessment instrument. Nine of the ten required gates in this journey are multiple-choice-style assessments at ≥80% or proctored certification exams. Both are excellent at verifying recall and recognition, and structurally unable to verify design, teamwork, communication, or disposition.

---

## 3. What exemplar courses do that this package doesn't

### 3.1 CMU 17-645 *Machine Learning in Production / AI Engineering*, Fall 2026 [verified]

The closest academic analogue to this package's subject matter — and it is instructive on assessment design.

**Structure.** 12 units. Grading: 35% individual assignments, 30% group project, 25% midterms + participation, 10% labs. **No final exam.**

**The project is the spine.** A team of 3–6 builds a **movie recommendation service serving 1 million active users**, across four milestones (M1 Modeling & First Deployment → M2 Infrastructure Quality → M3 Monitoring & CD → M4 Fairness, Security & Feedback Loops). Course text:

> "your system runs live for several weeks, is graded on how it holds up under real load and changing environment conditions."

**Individual assignments track the agentic frontier.** I1 ML Product → I2 Requirements/Risks → **I3 MCP and Security** → I4 Explainability. There is a dedicated *Agents and MCP* lab, and a required reading on *"Supabase MCP can leak your entire SQL database."*

**Three assessment mechanisms worth stealing:**

1. **Oral verification.** *"Some parts of the grading rubric will require you to verbally explain your solution to a member of the course staff or verbally answer their questions."* Labs are graded by demoing to a TA who *"may ask a few questions to probe your understanding."*
2. **Specifications grading with a token economy.** All parts graded pass/fail, no partial credit, against clear point breakdowns — *"Clear specifications and point breakdowns allow you to intentionally decide to skip parts of assignments with clear upfront consequences."* Each student gets **8 tokens**; each team gets **8 separate tokens**. 1 token = 1 day extension; 3 tokens = resubmit an assignment, recovering 90% of the difference. Grade boundaries are set high to compensate (A ≥96%, B ≥86%, C ≥75%).
3. **Peer-rated team citizenship**, with a preview form so students can see the expected grade adjustment before rating.

**Their generative-AI policy is the sharpest one I found** [verified] — and it is the *opposite* of a ban:

> "we are open to using AI tools for completing work. We actually strongly recommend it for many tasks. Except for two restrictions … we place no restrictions on the use of content generation tools … You will be solely responsible for the correctness of the solution."
>
> "There are two settings where AI use is strictly prohibited: (1) exams and any on-paper quizzes we designate as strictly offline, and (2) **live conversations with course staff**, whether over Zoom or in person."
>
> "if you take the course … solely rely on LLMs/agents for all your coding, you will significantly struggle and will likely cause conflicts within the group project."
>
> "Students likely will want to use commercial AI tools during the course and should expect subscription costs of **$20-100 per month** (roughly comparable to the cost of traditional textbooks)."

Note the design logic: **unrestricted AI use is made safe by moving verification to synchronous oral defence.** You do not need to detect AI if the gate is a conversation.

Course design rationale is published: Kästner & Kang, *"Teaching Software Engineering for AI-Enabled Systems,"* ICSE-SEET 2020, arXiv:2001.06691. [verified] Materials are CC-licensed at `github.com/mlip-cmu`; textbook free at `mlip-cmu.github.io/book/`.

### 3.2 Stanford CS336 *Language Modeling from Scratch* [verified]

5 units, five assignments (Basics → Systems → Scaling → Data → Alignment/RL), *"students will be given minimal scaffolding. The amount of code you will write will be at least an order of magnitude greater than for other classes."* AI policy is the mirror image of CMU's:

> "Prompting LLMs such as ChatGPT is permitted for low-level programming questions or high-level conceptual questions … but using it directly to solve the problem is prohibited. We strongly encourage you to disable AI autocomplete (e.g., Cursor Tab, GitHub CoPilot) in your IDE … We have found that AI autocomplete makes it much harder to engage deeply with the content."

**The two policies are not contradictory — they track the learning objective.** CS336's objective *is* the implementation skill, so tool use substitutes for the objective. CMU's objective is systems judgment, so tool use is orthogonal to the objective. **Policy should be derived from what you are trying to certify, not from a global stance on AI.**

### 3.3 Berkeley CS294/194-280 *Advanced LLM Agents*, Spring 2025 [verified]

Variable-unit course (1–4 units) with **differentiated deliverables per unit count**: 1 unit = a lecture-summary article; 2 units = lab + survey report; 3–4 units = **Applications Track** (groups of 3–4, coding implementation interacting programmatically with LLMs) or **Research Track** (groups of 2–3, novel research aimed at workshop/conference publication). Grade weights shift accordingly (e.g. Participation 40% → 16% → 8%).

This is a directly transferable pattern for a partner badge with heterogeneous learners: **one syllabus, tiered evidence requirements.**

### 3.4 Certification landscape, for calibration [verified]

| Credential | Format | Cost | Stated experience assumption |
|---|---|---|---|
| AWS Certified ML Engineer – Associate (MLA-C01 → MLA-C02) | 130 min, 65 questions | $150 | ≥1 yr ML engineering + ≥1 yr AWS; valid 3 years |
| Google Professional ML Engineer | 2 hrs, 50–60 MC/multi-select | $200 | 3+ yrs industry, 1+ yr on Google Cloud; *"does not directly assess coding skill"* |
| Microsoft Azure AI Engineer Associate (AI-102) | 100 min, proctored | — | **Retired** (see §0) |

Two observations. First, AWS now ships *"Demonstrated"* credentials alongside exams — *"timed, hands-on challenges … going beyond theoretical knowledge to prove what you can actually do"* — including **AWS Agentic AI Demonstrated**. The industry is itself migrating off pure MCQ. Second, Google's PMLE explicitly disclaims coding assessment; treating any of these as evidence of build capability is a category error.

---

## 4. AI-era assessment integrity — what the evidence supports

### 4.1 Detection is not a viable control [verified]

Liang, Yuksekgonul, Mao, Wu & Zou, *"GPT detectors are biased against non-native English writers"* (arXiv:2304.02819; published in *Patterns*):

> "these detectors consistently misclassify non-native English writing samples as AI-generated, whereas native writing samples are accurately identified. Furthermore, we demonstrate that **simple prompting strategies can not only mitigate this bias but also effectively bypass GPT detectors** … Our results … caution against their use in evaluative or educational settings, particularly when they may inadvertently penalize or exclude non-native English speakers."

Both failure modes are disqualifying: high false-positive rate on a protected-characteristic-correlated group, **and** trivially defeatable by the population you are trying to catch. Any integrity design resting on detection inherits both.

### 4.2 The policy consensus — Russell Group principles on generative AI in education (Jul 2023) [verified]

1. Universities will support students and staff to become **AI-literate**.
2. Staff should be equipped to support students to use generative AI tools effectively and appropriately.
3. Universities will **adapt teaching and assessment** to incorporate the ethical use of generative AI **and support equal access** — including the explicit concern that *"elements of generative AI used within universities may reside behind paywalls or be restricted to paying subscribers"* and institutions must *"attempt to ensure fairness of access."*
4. Universities will ensure academic rigour and integrity is upheld — including *"cultivating an environment where students can ask questions about specific cases of their use and discuss the associated challenges openly and without fear of penalisation."*
5. Universities will work collaboratively to share best practice.

Principle 3's access clause and CMU's *"$20–100 per month"* disclosure are the same problem seen from two sides. **A curriculum that assumes frontier-model access has introduced a cost barrier and should say so explicitly.**

### 4.3 Growth mindset — flagged, not asserted [unverified]

Prior-knowledge claim: large meta-analyses (Sisk et al., *Psychological Science* 2018; Macnamara & Burgoyne, *Psychological Bulletin* 2023) report **weak average effects** of mindset interventions, with the Yeager et al. *Nature* 2019 National Study finding small, **heterogeneous** effects concentrated among lower-achieving students in supportive school norms.

I could **not** verify any of this in this pass — SAGE returned 403, PubMed/PMC returned bot-challenges, Nature redirected to auth, and one PMID I guessed resolved to an unrelated *Blood* article. **Do not cite effect sizes from this section.** If disposition-development language enters the curriculum, source it from the CS2023/Dispositions Project literature (§1.4), which is about *cultivable workplace behaviours* and does not depend on the mindset-intervention evidence base at all.

---

## 5. Recommendations

Ordered by leverage.

### R1 — Resolve the AI-102 substitution (blocker)
See §0. Confirm before anyone books an exam.

### R2 — Add one comprehensive project as the terminal gate
Directly targets the largest cluster of gaps (C3.2, C3.3, C3.5, proposed C5.4) with a single instrument. Design it to hit ABET's *complex problem* definition: conflicting technical issues, no obvious solution, multiple sub-problems, multiple disciplines, consequences across contexts.

A minimal specification that would satisfy the proposed CAC Criterion 5.4:

- **Build** an agent that crosses at least two Microsoft IQ layers (e.g. Work IQ + Fabric IQ), so the "which layer answers which class of question" judgement (README idea #2) is *exercised*, not recalled.
- **Govern** it end to end: Entra Agent ID, a Purview DLP policy, a Defender XDR detection, an entry in the Agent 365 registry.
- **Evaluate** it against a written success measure defined *before* build — this is the ABET EAC outcome (6) behaviour and the single most transferable habit from CMU 17-645.
- **Operate** it for a fixed window with telemetry, and report what drifted.
- **Defend** it in a 20-minute oral session.

### R3 — Make oral defence the integrity mechanism, and let AI use be open
Adopt the CMU split verbatim: unrestricted tool use on artifacts; **zero** tool use in live conversation with assessors. This is the only control in §4 that is both effective and non-discriminatory. It also converts an integrity problem into a learning-quality signal — someone who shipped without understanding cannot answer follow-ups, regardless of who wrote the code.

Publish the policy in the README with the same specificity CMU uses, including the subscription-cost disclosure (Russell Group principle 3).

### R4 — Name the dispositions the journey develops, and assess two of them
The package already implicitly demands **Self-Directed** (README: *"Preparation courses are optional; passing the certification exam is what counts"* — this is literally the Dispositions Project definition) and **Persistent** (86 hours across 11 courses). Say so, using the §1.4 definitions, and attach evidence requirements. Tokens/resubmission mechanics (§3.1) make Persistent observable without making it punitive.

If R2 lands, **Collaborative** and **Meticulous** become assessable too.

### R5 — Tier the evidence, not the syllabus
Borrow Berkeley's variable-unit structure: a *Foundation* tier (current assessments, unchanged), a *Practitioner* tier (+ project + oral defence), a *Lead* tier (+ team leadership + a customer-facing artifact). One curriculum, three defensible claims. This preserves the current path for people who need the badge fast while creating a credential that survives scrutiny.

### R6 — Strengthen societal-impact coverage (C5.3)
Currently Responsible AI is framed as a control plane. Add one analysis task — the CMU pattern is a short memo on a real incident (their assigned reading is the Supabase MCP data-exfiltration writeup, which is directly on-topic for this package's MCP content in note 03).

### R7 — Fix the cite hygiene flagged in this document
Open the five CS2023 PDFs listed in §1.4 by hand and pin down the canonical disposition list before any of it is quoted in customer-facing or assessment material.

---

## Appendix — Source register

| # | Source | Status | Used for |
|---|---|---|---|
| 1 | ABET, *Criteria for Accrediting Computing Programs, 2025–2026* | verified | §1.1, §1.2, §2 |
| 2 | ABET, *Criteria for Accrediting Engineering Programs, 2025–2026* | verified | §1.3 |
| 3 | ACM/IEEE-CS/AAAI CS2023 Final Report (csed.acm.org/final-report) — section index only | verified | §1.4 source list |
| 4 | CS2023 Body of Knowledge / Competency Framework text | secondary (via SlideShare + Scribd quotations) | §1.4 definitions |
| 5 | Dispositions Project (dispositions-project.org/dispositions.html), NSF DUE-2216121 et al. | verified | §1.4 table |
| 6 | CMU 17-445/645/745 *Machine Learning in Production*, Fall 2026 (mlip-cmu.github.io/f2026) | verified | §3.1, R2, R3 |
| 7 | CMU MLIP learning goals (github.com/mlip-cmu/s2025 `learning_goals.md`) | verified | §3.1 |
| 8 | Kästner & Kang, ICSE-SEET 2020, arXiv:2001.06691 | verified | §3.1 |
| 9 | Stanford CS336 Spring 2025 (cs336.stanford.edu/spring2025) | verified | §3.2 |
| 10 | Berkeley CS294/194-280 Spring 2025 (rdi.berkeley.edu/adv-llm-agents/sp25) | verified | §3.3, R5 |
| 11 | AWS Certified ML Engineer – Associate | verified | §3.4 |
| 12 | Google Professional ML Engineer | verified | §3.4 |
| 13 | Microsoft Certified: Azure AI Engineer Associate | verified | §0, §3.4 |
| 14 | Russell Group, *Principles on the use of generative AI tools in education*, 3 Jul 2023 | verified | §4.2 |
| 15 | Liang et al., arXiv:2304.02819 (*Patterns*) | verified (abstract) | §4.1 |
| 16 | Sisk 2018 / Macnamara & Burgoyne 2023 / Yeager 2019 | **unverified — paywalled or bot-blocked** | §4.3, flagged only |
| 17 | ACM Curricula Recommendations index (CE2016, SE2014, CSEC2017, IT2017, IS2020, CC2020) | verified as an index; **PDF bodies not extracted** | not cited substantively |
