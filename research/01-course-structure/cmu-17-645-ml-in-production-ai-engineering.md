# Cliff Notes — CMU 17-645 as a Course Structure Exemplar

> Companion note. The full source reading is at [research/07-accreditation-exemplars/cmu-17-645-ml-in-production-ai-engineering-materials.md](research/07-accreditation-exemplars/cmu-17-645-ml-in-production-ai-engineering-materials.md), and its assessment mechanics are analysed in [research/08-assessment-epas/cmu-oral-defense-and-token-economy-patterns.md](research/08-assessment-epas/cmu-oral-defense-and-token-economy-patterns.md). This note reads the same source through the structural lens: how the semester is laid out, how the project and the lectures interlock, where the load falls, and what the sequencing decisions reveal.

## Citation and access
- **17-645 / 17-445 / 17-745, Machine Learning in Production**, Carnegie Mellon University, School of Computer Science. Fall 2026 offering: Bogdan Vasilescu and Christian Kaestner. Source consulted: `https://mlip-cmu.github.io/` and `https://mlip-cmu.github.io/f2026/`. **Open; read directly. All course materials Creative Commons at `https://github.com/mlip-cmu`.**
- Companion text: *Machine Learning in Production*, MIT Press, **open access** at `https://mlip-cmu.github.io/book/`; print at `https://mitpress.mit.edu/9780262049726/`.
- Design rationale: Kaestner et al., "Teaching Software Engineering for AI-Enabled Systems", **arXiv:2001.06691**. Annotated bibliography at `https://github.com/ckaestne/seaibib`.
- Offered regularly since 2019. **Course content is offering-specific and drifts between semesters; cite the offering.**

## What this source is
A twelve-unit graduate course that has run since 2019 and publishes its full apparatus openly — schedule, assignments, policies, labs, book and design rationale. Structurally it is the closest available exemplar to the target course: an AI systems course whose spine is a live production service rather than a sequence of notebook exercises, whose lectures are sequenced against that service's lifecycle rather than against a textbook's chapter order, and whose assessment weight is distributed across many small evidenced occasions rather than concentrated in examinations. The value of reading it structurally is that the sequencing decisions are visible and can be inspected for what problem each one solves.

## The argument in full
The course states its own structural premise in its positioning, and it is worth quoting because it names the failure mode the architecture exists to avoid: "Plenty of courses teach you to beat a benchmark in a notebook, and plenty more teach you to pitch a demo, hackathon style. But a demo has no real customer, no real deployment, and no real stakes: Nobody depends on it, nothing breaks when it fails, nobody needs to maintain it. This CMU course is about the hard part that comes next." Every structural decision downstream follows from taking that sentence seriously. If the point is what happens after the demo, then the course cannot be organised as a sequence of demos, and the substrate has to be something that persists and degrades.

The substrate is a movie recommendation service serving one million active users, running live for several weeks, and — in the course's own phrasing — "graded on how it holds up under real load and changing environment conditions." That single design choice does more structural work than any other. It makes data quality, scaling, monitoring, versioning and operational planning into problems the students actually have rather than topics they are told about, which in turn licenses the lecture sequence to follow the system's lifecycle. It also solves a problem the assessment literature cannot solve on its own: genuine failure modes arise without being staged, so incident diagnosis becomes observable rather than simulated.

The sequencing is built around that lifecycle in four movements. The opening weeks establish framing — introduction and motivation, then correctness and risk, then goal-setting and requirements, then planning for mistakes — before any model quality content appears. This is a deliberate inversion of the conventional order: requirements and failure planning precede modelling. The second movement covers model quality, behavioural testing, interdisciplinary teams, pipeline automation and deployment, arriving at the first milestone in week six. The third movement, after the midterm and fall break, turns to operational and adversarial concerns — ML security, system security, safety, process and technical debt, versioning and provenance — with the second milestone at the end of October. The fourth movement covers explainability, transparency, accountability and ethics, fairness measurement and fairer system construction, with the third and fourth milestones landing in the final weeks. Responsibility content is not a bolted-on final lecture; it occupies roughly the last third of the semester and carries its own milestone.

The lecture-lab-assignment interlock is the second structural feature worth extracting. Lectures run Tuesday and Thursday, labs on Friday in five sections, so each week's concept is exercised within days by a hands-on session with a specific technology: Flask APIs, Kafka, git, model testing, Docker, continuous integration, agents and MCP, Prometheus and Grafana, DVC, explainability tools. The labs are one to two hours, credited in-session, and their sequence tracks the infrastructure the project needs at that point in the term. The four individual assignments — I1 on ML products and LLM features, I2 on requirements and risks, I3 on MCP and security, I4 on explainability — are spaced to fall between milestones rather than alongside them, which spreads the load. The tooling list across the course is Apache Kafka, GitHub Actions, Prometheus, Grafana, DVC, Weights and Biases, Docker and Kubernetes, all encountered because the project requires them.

The weighting reveals the architecture's priorities: 35% individual assignments, 30% group project, 25% midterms and participation, 10% labs, and **no final exam**. Two midterms, the second non-comprehensive. Grade boundaries are published to the point with no rounding — A+ at 99%, A at 96%, A- at 94%, B+ at 91%, B at 86%, B- at 82%, C at 75%, D at 60%. Two features of this distribution matter structurally. First, individual work outweighs group work, which is unusual for a project-spine course and answers the standard objection that team projects obscure individual contribution. Second, the absence of a final exam removes the traditional integrative assessment point, and the milestone sequence plus the final presentation in the registrar's exam slot replaces it.

The prerequisite and entry structure is the most transferable single idea in the course. There are no formal prerequisites, and the course explicitly does not require a software engineering background — a striking choice for a course this infrastructure-heavy. Instead there is a Google Form prerequisite knowledge check: ten machine learning questions, anonymous and ungraded, that returns targeted readings based on the answers. This converts a gatekeeping decision into a self-assessment and remediation mechanism, which is exactly what a course with a heterogeneous intake needs. The course also states its expected time commitment openly at twelve hours per week — roughly three in class, one to two in labs, and seven on assignments — and states an expected AI subscription cost of twenty to a hundred dollars a month, "roughly comparable to the cost of traditional textbooks."

The team structure supports the project without being left to chance. Teams are three to six students, assigned by the instructor rather than self-selected, each with a TA mentor and a thirty-minute meeting with that mentor in the week after every milestone. Peer rating on "team citizenship (i.e., being active and cooperative members)" uses a procedure adapted from a Barbara Oakley article, with a preview form that shows students their expected grade adjustment before it is applied. Structurally this is a scheduled feedback loop attached to each milestone rather than an end-of-term survey, which means team problems surface while there is still term left to fix them.

Two variants complete the picture and show how the structure flexes. The 17-745 doctoral variant replaces two homeworks with a mandatory research project, preserving the spine while changing the individual work. Participation is opt-in: opting in makes midterms worth 15% and participation 10%, opting out makes midterms 25% and participation ungraded, with the participation bands themselves graduated — 100% for most lectures with four waived, no questions asked, down through 80%, 60%, 30% and zero. The course commits to "at least one breakout session in every single lecture", which is what makes participation a meaningful measure rather than an attendance proxy. Auditing is not allowed, though visitors may sit in, and there is an explicit opt-out from the research conducted in the course.

## Structure of the original
The Fall 2026 schedule, verified from the offering page:
- **Aug 25** Introduction and Motivation (ch1) · **Aug 27** Correctness and Risk (ch2, 3, 15) · **Aug 28** Lab: Flask APIs
- **Sep 1** Setting Goals, Gathering Requirements (ch5, 6) · **Sep 3** Planning for Mistakes (ch7) · **Sep 4** Lab: Kafka
- **Sep 8** Model Quality (ch15), **I1 due** · **Sep 10** Behavioral Model Testing · **Sep 11** Lab: git
- **Sep 15** Fostering Interdisciplinary Teams, **I2 due** · **Sep 17** Automating and Testing ML Pipelines (ch11, 18, 19) · **Sep 18** Lab: Model testing
- **Sep 22** Deploying a Model (ch10) · **Sep 24** Testing and Experimenting in Production (ch19) · **Sep 25** Lab: Docker
- **Sep 29** Data Quality (ch16), **M1 due** · **Oct 1** Scaling the System (ch12) · **Oct 2** Lab: CI
- **Oct 6** Planning for Operations (ch13) · **Oct 8 Midterm** · **Oct 13-17 Fall break**
- **Oct 20** ML Security (ch28) · **Oct 22** System Security (ch28) · **Oct 23** Lab: Agents and MCP
- **Oct 27** Safety (ch27), **M2 due** · **Oct 29** Process and Technical Debt (ch20, 22) · **Oct 30** Lab: Prometheus/Grafana
- **Nov 3 I3 due** · **Nov 5** Versioning, Provenance, Reproducibility (ch24) · **Nov 6** Lab: DVC
- **Nov 10** Explainability (ch25) · **Nov 12** Transparency (ch29) · **Nov 13** Lab: explainability tools
- **Nov 17** Accountability and Ethics (ch23, 26), **M3 due** · **Nov 19** Measuring Fairness (ch26)
- **Nov 24** Building Fairer Systems (ch26), **I4 due** · **Dec 1** Summary and Review · **Dec 3 Midterm** · **Dec 4 M4 due**

Milestones: **M1** Modeling and First Deployment · **M2** Infrastructure Quality · **M3** Monitoring and Continuous Delivery · **M4** Fairness, Security and Feedback Loops · plus a final presentation in the registrar exam slot.

## Key structural claims and specifics
- **Twelve units.** Lectures Tuesday and Thursday 3:30-4:50pm, DH 2315; labs Friday in five sections.
- **Substrate:** a movie recommendation service **serving one million active users**, live for several weeks, "graded on how it holds up under real load and changing environment conditions."
- **Weighting:** 35% individual assignments, 30% group project, 25% midterms and participation, 10% labs. **No final exam.** Two midterms, second non-comprehensive.
- **Grade boundaries, no rounding:** A+ ≥99%, A ≥96%, A- ≥94%, B+ ≥91%, B ≥86%, B- ≥82%, C ≥75%, D ≥60%.
- **No formal prerequisites** and explicitly no software engineering background required; entry is mediated by an anonymous, ungraded **ten-question knowledge check** that returns targeted readings.
- **Stated load:** twelve hours per week — approximately three in class, one to two in labs, seven on assignments. **Stated cost:** $20-100 per month in AI subscriptions.
- **Teams of 3-6, instructor-assigned**, TA mentor each, **30-minute mentor meeting in the week after every milestone**, peer rating on team citizenship with a preview form.
- **Requirements and failure planning precede modelling** in the sequence. Responsibility content occupies roughly the final third and carries a milestone.
- **Labs are technology-specific and weekly**, tracking the infrastructure the project needs at that point.
- **17-745 doctoral variant** replaces two homeworks with a mandatory research project.
- **Participation is opt-in**, shifting ten percentage points, with graduated bands and a commitment to "at least one breakout session in every single lecture."
- **Target roles named explicitly:** "AI Engineer, ML Engineer, MLOps Engineer, AI Product Manager, **Forward Deployed Engineer**, or Applied Scientist."
- **Scope statement:** covers "classic ML, LLMs, and increasingly AI agents that take actions in the real world."
- **Auditing not allowed**; visitors may sit in. Research opt-out available by email.

## Method and evidence base
This is a course, not a study, and its structure is the product of iteration since 2019 rather than controlled comparison. The published design rationale in arXiv:2001.06691 documents the reasoning but does not measure outcomes against an alternative structure. Its evidential status is therefore existence proof and longevity: this architecture has been run repeatedly at a serious institution and continues to be refined, which establishes workability, not superiority. Its unusual value is that every artefact is open — schedule, assignments, policies, labs, book and rationale — so the structure can be inspected rather than inferred.

## Vocabulary this source introduces
- **Milestone** — a project checkpoint with its own deliverable and its own extension budget, distinct from an assignment.
- **Prerequisite knowledge check** — an anonymous ungraded diagnostic that returns targeted remediation instead of gating admission.
- **Team citizenship** — the peer-rated construct, defined as "being active and cooperative members".
- **Opt-in participation** — a student-elected reweighting between participation and examinations.
- **The hard part that comes next** — the course's own name for the post-demo territory it occupies.

## What to remember
- The live substrate with real users is the load-bearing structural choice; everything else follows from it.
- Lectures are sequenced against the system lifecycle, not against a textbook's chapter order.
- Requirements and failure planning come before modelling, deliberately.
- Responsibility content occupies the final third and carries a milestone, rather than appearing as a closing lecture.
- Weekly technology-specific labs interlock with lectures within days.
- Individual work outweighs group work even though the project is the spine.
- There is no final exam; the milestone sequence and final presentation replace it.
- Entry heterogeneity is handled by diagnosis and remediation rather than by prerequisites.
- Time and money costs are stated openly and up front.
- Team feedback is scheduled after every milestone, not deferred to the end of term.

## Why it matters for the course
This is the closest structural template available for the target redesign, and it demonstrates that the pieces the redesign wants — a live system, evidence-based assessment, permissive tool use, distributed load — compose into a semester that actually runs. Three transfers are immediate: sequencing lectures against a system lifecycle rather than a topic taxonomy; using an ungraded diagnostic instead of prerequisites to manage a heterogeneous intake; and placing responsibility content in the final third with its own deliverable, which both gives it weight and lets it draw on a system the students have already built. The fourth and hardest transfer is the substrate itself. Without a system with real users and real degradation, the course's incident, monitoring and operations content has nothing to attach to, and the assessment design in folder 08 loses the genuine failure modes it depends on. Establishing that substrate is the single largest open structural question for this course.

## How to use it in course design
- **Settle the substrate before the syllabus.** The schedule can only be sequenced against a lifecycle if there is a system with a lifecycle. Decide what it is first.
- **Sequence requirements and failure planning ahead of modelling**, following the pattern here. It inverts the conventional order for a defensible reason.
- **Interlock a weekly hands-on session with each concept**, tied to the specific technology the project needs next, and credit it in-session.
- **Place responsibility content in the final third with a deliverable attached**, so it draws on a system that exists.
- **Replace prerequisites with a diagnostic** that returns targeted readings, and keep it anonymous and ungraded.
- **Publish the expected weekly hours and the expected tool costs** in the syllabus.
- **Attach a short mentor meeting to every milestone** so team problems surface while the term can still absorb a fix.
- **Weight individual work at least as heavily as group work** even when the project is the spine.
- **Consider opt-in participation** if the alternative is an examination weighting that does not suit the material.
- **Read arXiv:2001.06691 before adapting**, so the mechanics are copied with their reasoning rather than as a cargo cult.

## Limits and cautions
- Course content is offering-specific and drifts between semesters. Cite the offering, not the course, and re-verify before quoting.
- This is a graduate course at a highly selective institution with substantial TA support. The structure assumes staffing that many contexts do not have.
- A service with a million users requires infrastructure and institutional backing that cannot be assumed. Without it, much of the sequencing rationale evaporates.
- No effectiveness data is published. Longevity and iteration are evidence of workability, not of superiority over the alternatives.
- Assessment integrity depends on the oral verification mechanism being staffed; adopting the permissive AI policy without the oral component would be unsafe.
- The twelve-hour weekly load and the stated subscription cost are real barriers, and transparency about them does not remove them.
- The structure is tuned to machine learning in production. Transferring it to different content requires re-deriving the lifecycle, not reusing this one.

## Verification status
Verified directly from the course and offering pages: the unit count, instructors, meeting times and lab structure; the Creative Commons licensing and repository location; the open-access book and MIT Press print edition; the positioning statement and scope statement as quoted; the named target roles including Forward Deployed Engineer; the absence of formal prerequisites and the design of the knowledge check; the full Fall 2026 schedule with dates, topics, chapter mappings and due dates as reproduced above; the four milestone titles and the final presentation slot; the four individual assignments; the 17-745 variant; the grade weighting and the full grade-boundary table; the team size, assignment method, mentor meetings and peer-rating basis; the opt-in participation mechanism and its bands; the stated weekly hours and subscription cost range; the tooling list; the auditing and research opt-out policies; and the arXiv identifier and bibliography location for the design rationale. Not verified: any claim about the course's effectiveness relative to alternatives, since none is published; and the detail of the Barbara Oakley peer-rating procedure, which is referenced by the course without a full citation.