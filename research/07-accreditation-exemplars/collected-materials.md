# Collected Materials — Accreditation and Exemplars

## Working synthesis
This folder assembles four distinct bodies of source material and reads them against one another. The first is the **accreditation standard** itself — ABET's Criteria for Accrediting Computing Programs, which sets the outcomes a computer science programme must evidence and, in its proposed revisions, is moving toward requiring a comprehensive project that enables professional dispositions. The second is the **curricular guideline** — ACM/IEEE-CS/AAAI CS2023, which is not binding but establishes what the discipline's own bodies consider current, and which makes dispositions a first-class element of its competency model. The third is a set of **exemplar syllabi** — CMU 17-645, Stanford CS336 and the Berkeley LLM Agents MOOC — each demonstrating a different mechanism that a course of this kind needs: live-system project work with oral verification, principled AI-tool policy under minimal scaffolding, and tiered evidence levels for a heterogeneous cohort. The fourth is a set of **imported assessment theory** from medical education — ten Cate on entrustable professional activities and the Maastricht group on assessor cognition — which supplies both a tested precedent for outcome-based professional certification and the empirical honesty about rater subjectivity that any judgement-based scheme must confront.

The synthesis these four support is that the course is defensible if it can demonstrate a comprehensive integrative project, assessed through observed professional activity rather than examination, with narrative substantiation and multi-assessor deliberation on consequential judgements, and with an AI-tool policy derived per assessment from the evidence that assessment collects. Each element of that sentence has a source behind it in this folder.

## Source-by-source Cliff Notes

### ABET Criteria for Accrediting Computing Programs, 2025-2026
- Eight criteria: Students; Program Educational Objectives; Student Outcomes; Continuous Improvement; Curriculum; Faculty; Facilities; Institutional Support.
- **Five baccalaureate student outcomes** in Criterion 3, with a sixth added by the Computer Science Program Criteria: apply computer science theory and software development fundamentals to produce computing-based solutions.
- Criterion 5 for computer science requires **40 credit hours of computer science**, **15 of mathematics and statistics**, and **"a major project that requires integration and application of knowledge and skills acquired in earlier course work"**.
- "The curriculum requirements specify topics, but do not prescribe specific courses" — the standard constrains outcomes, not course architecture.
- ABET's own definition of assessment permits "relevant direct, indirect, quantitative and qualitative measures as appropriate to the outcome being measured", which is the textual hook for narrative and observation-based evidence.
- **Section V, Proposed Changes** — approved by the Computing Area Delegation on 25 October 2024, comment period closed 15 June 2025, first applied in the **2026-27 review cycle** — introduces the definition **"PROFESSIONAL DISPOSITIONS: Professional dispositions are behaviors desired in the workplace"** and a new Criterion 5 item requiring "a comprehensive project or experience appropriate to the discipline which: 1) builds on technical knowledge and skills acquired in prior advanced course work, and 2) enables the application of appropriate professional dispositions." Proposed CS criteria also add software engineering and artificial intelligence to substantial coverage.
- Full note: [abet-cac-criteria-and-student-outcomes.md](research/07-accreditation-exemplars/abet-cac-criteria-and-student-outcomes.md)

### CS2023 competency and disposition materials
- Endorsed by **ACM on 18 January 2024, IEEE-CS on 22 January 2024, and AAAI on 22 February 2024**; single volume, DOI 10.1145/3664191.
- The vision statement's first item commits to a competency model, arguing that "Computer Science is a professional discipline where skills and professional dispositions are just as important as the underlying knowledge", and that the community "has not yet widely accepted the benefits of professional dispositions to the same extent" as skills.
- Knowledge areas carry codes and include Artificial Intelligence (AI), Data Management (DM), Software Engineering (SE), Security (SEC), and Society, Ethics and the Profession (SEP), among others.
- The final report includes a section on **Generative AI and the Curriculum** within its Pedagogy and Practices part.
- The vision distinguishes Curricular Guidelines, which "list what should be covered", from Curricular Practices, which "describe how and why they should be covered, including challenges, best practices".
- Full note: [cs2023-competency-and-disposition-materials.md](research/07-accreditation-exemplars/cs2023-competency-and-disposition-materials.md)

### CMU 17-645 Machine Learning in Production
- Maintained by Christian Kaestner; Fall 2026 taught with Bogdan Vasilescu. All materials **Creative Commons** at github.com/mlip-cmu; companion book open access from MIT Press.
- Names **Forward Deployed Engineer** explicitly among its target roles, alongside AI Engineer, ML Engineer, MLOps Engineer, AI Product Manager and Applied Scientist.
- Group project builds a movie recommendation service **serving one million active users**, running live for several weeks, "graded on how it holds up under real load and changing environment conditions." Teams of 3-6, instructor-assigned, each with a TA mentor and a 30-minute post-milestone meeting.
- **Specification grading**: "All parts will be graded pass/fail for the points indicated, no partial credit", which "allow[s] you to intentionally decide to skip parts of assignments with clear upfront consequences."
- **Oral verification** is structural, not occasional: rubric parts "require you to verbally explain your solution to a member of the course staff", and lab credit is earned by "showing source code, demoing executions, and verbally answering a few questions".
- **Token economy**: 8 individual and 8 team tokens, strictly separate; 1 token per late day, 3 tokens to resubmit with 90% of the improvement credited.
- **AI-tool policy** permits and recommends AI tools with two exceptions — exams and live conversations with staff — resting on the principle that "you will be solely responsible for the correctness of the solution."
- Grading: 35% individual assignments, 30% group project, 25% midterms and participation, 10% labs, **no final exam**.
- Full note: [cmu-17-645-ml-in-production-ai-engineering-materials.md](research/07-accreditation-exemplars/cmu-17-645-ml-in-production-ai-engineering-materials.md)

### Stanford CS336 Language Modeling from Scratch
- Tatsunori Hashimoto and Percy Liang; five units; nineteen lectures; five layered assignments with public repositories.
- Deliberate **minimal scaffolding**: "the amount of code you will write will be at least an order of magnitude greater than for other classes."
- AI policy derived from a stated learning mechanism: conceptual and low-level prompting permitted, direct solution generation prohibited, and inline autocomplete strongly discouraged because "we have found that AI autocomplete makes it much harder to engage deeply with the content."
- Prohibits consulting existing implementations, but pairs the prohibition with a reciprocal obligation — "the handouts we'll give will be self-contained".
- Publishes H100 hourly prices as of 6 June 2025 so the course is attemptable without institutional compute.
- Full note: [stanford-cs336-language-modeling-materials.md](research/07-accreditation-exemplars/stanford-cs336-language-modeling-materials.md)

### Berkeley Large Language Model Agents MOOC
- Dawn Song with Xinyun Chen; twelve lectures, each by an external guest, Fall 2024.
- **Five certificate tiers** — Trailblazer, Mastery, Ninja, Legendary, Honorary — each defined by concrete deliverables, with Mastery (three labs) and Ninja (hackathon submission) as *parallel* rather than nested routes.
- Quizzes are graded on completion, at most roughly five questions each; the written article is ~500 words posted publicly and graded pass/no-pass on effort, with content depending on the tier pursued.
- Completing any assessment is explicitly optional: "You are more than welcome to just watch the lectures and audit the course!"
- Full note: [berkeley-advanced-llm-agent-course-materials.md](research/07-accreditation-exemplars/berkeley-advanced-llm-agent-course-materials.md)

### ten Cate EPA framework
- EPAs proposed in **2005** as a bridge from abstract competency frameworks to the concrete daily work of a profession, in response to Royal College dissatisfaction with time-based licensure.
- "Professionals can possess competencies; they can never possess EPAs" — EPAs describe work, competencies describe persons.
- Summative entrustment requires **multiple observers and multiple observations** across direct observation, longitudinal observation, case-based discussion and product evaluation.
- The **entrustment-based discussion** — a short post-activity conversation that "should include 'what-if' questions" — is the principled precedent for oral defence.
- Programme sizing guidance: **20 to 40 EPAs for a complete programme**; a course claims two or three.
- Full note: [ten-cate-epa-framework.md](research/07-accreditation-exemplars/ten-cate-epa-framework.md)

### Govaerts and the Maastricht narrative assessment literature
- Idiosyncratic rater effects account for **29% to over 50%** of variance in performance ratings, and this idiosyncrasy is **unrelated to rater expertise**.
- Assessors "mainly relied on narrative feedback"; grades "were merely used to confirm impressions based on narratives."
- Assessors reaching the same pass/fail outcome nonetheless "differed in their information-processing approaches and the reasoning behind their judgments", diverging on assessment beliefs, performance theories and inferences.
- Assessors "were inclined to stick to their initial judgments even when confronted with seemingly disconfirming evidence."
- Recommended remedies are structural: group decision-making on high-stakes judgements, multiple assessors, mandatory substantiation, and training aimed at self-awareness rather than instrument calibration.
- Full note: [govaerts-narrative-assessment-literature.md](research/07-accreditation-exemplars/govaerts-narrative-assessment-literature.md)

## Cross-source observations
- **The three exemplar syllabi disagree about AI tools, and the disagreement is coherent.** CMU permits nearly everything because it verifies orally; CS336 restricts more because its evidence is the implementation process itself; Berkeley is silent because its stakes are low. The transferable rule is that tool policy follows the evidence the assessment collects, not a moral position about tools.
- **ABET's proposed dispositions language and CS2023's vision statement converge independently.** Two separate bodies, on separate timelines, arrived at the position that behaviour in professional settings belongs in the assessed curriculum. That convergence is a stronger argument to a curriculum committee than either source alone.
- **CMU's oral verification and ten Cate's entrustment-based discussion are the same mechanism arrived at from opposite directions** — one from a practical need to verify understanding under permissive AI policy, one from a theory of what makes delegation of responsibility defensible. Citing both makes the oral component look like convergent practice rather than local preference.
- **Govaerts is the counterweight to everything else in this folder.** The other sources argue for judgement-based assessment; Govaerts documents what judgement-based assessment actually does, including anchoring and construct divergence beneath outcome agreement. A self-study that cites only the enthusiastic sources is weaker than one that cites the sceptical evidence and names its structural controls.
- **Two of the exemplars name compute or subscription costs explicitly** — CS336 publishes GPU hourly rates, CMU tells students to expect $20-100 per month for AI subscriptions and compares it to textbook cost. Cost transparency appears to be an emerging norm in courses of this type and should be adopted.

## Corrections and open items
- **ABET Section V is proposed, not adopted.** The professional-dispositions definition and the comprehensive-project requirement were approved for review by the Computing Area Delegation on 25 October 2024 and are slated to take effect for the 2026-27 review cycle. They must be described as forthcoming, never as current criteria. Re-verify before any self-study submission.
- **CS2023 competency-model specifics are unverified.** The three sectioned PDFs that would confirm them — the Executive Summary, the Introduction to the Competency Framework, and Characteristics of Graduates — all failed content extraction. The competency formula, the named dispositions list, core-hours figures and the exact knowledge-area count are therefore *not* asserted anywhere in this folder and must not be quoted until the full report or its DOI version is obtained.
- **The CS2023 knowledge-area count is ambiguous.** The knowledge-areas index lists seventeen entries when Systems Fundamentals is counted, but the SF entry links to a subcommittee page rather than a knowledge-area page in the same pattern as the others. The note says "sixteen" in prose and flags the discrepancy; resolve it from the final report.
- **Both exemplar syllabi are semester-specific and will drift.** CMU material is from the Fall 2026 offering and CS336 material from the archived Spring 2025 page, which explicitly points to a later offering. Schedules, tool lists and prices in particular have short half-lives. Cite the offering, not the course.
- **The Berkeley MOOC is complete.** It ran in Autumn 2024 and all certificates have been released. Its content is a snapshot of agent research as of late 2024; its *structure* is what transfers, not its reading list.
- **The most-cited Govaerts works are paywalled and unread.** This folder's narrative-assessment note rests on two open-access Maastricht studies substituted deliberately for the paywalled canon. It should not be presented as a full literature survey.
- **The 29-50% variance figure is second-hand.** It is reported by the 2013 Govaerts paper from prior quantitative literature, not generated by it. Attribute accordingly.
- **ABET's 2024-2025 criteria URL returns 404.** Use the 2025-2026 criteria page.

## Material retained here
- The four bodies of source material and their relationship to one another, as set out in the working synthesis.
- Verified per-source specifics with quoted criterion language, credit-hour requirements, grading weights and assessment mechanisms.
- Cross-source observations, particularly the coherent disagreement on AI tooling and the independent convergence on dispositions.
- Corrections and open items, including everything deliberately not asserted because a source could not be retrieved.

## Public-source notes to keep
- Official criteria and curricular-guideline references: the ABET 2025-2026 criteria page and its PDF; the CS2023 site, its knowledge-areas index, vision statement and final-report index.
- Exemplar course pages: CMU 17-645 (course site and Fall 2026 offering page, plus the Creative Commons material repository and the open-access MIT Press book), Stanford CS336 Spring 2025, Berkeley LLM Agents Fall 2024 and Spring 2025.
- Open-access assessment literature: ten Cate's primer via Europe PMC (PMCID PMC5840559) and the two Maastricht studies (PMCID PMC5882626 and PMC3728456).
- The design-rationale paper behind the CMU course, "Teaching Software Engineering for AI-Enabled Systems" (arXiv:2001.06691), and the annotated bibliography at github.com/ckaestne/seaibib.