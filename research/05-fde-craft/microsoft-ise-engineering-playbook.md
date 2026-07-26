# Cliff Notes — Microsoft ISE Engineering Fundamentals Playbook

## Citation and access
- **Author:** Microsoft Industry Solutions Engineering (ISE), a customer-embedded engineering organisation within Microsoft
- **Title:** Engineering Fundamentals Playbook (commonly referred to as the Code With Engineering Playbook)
- **Source consulted:** https://microsoft.github.io/code-with-engineering-playbook/
- **Repository:** https://github.com/microsoft/code-with-engineering-playbook — approximately 2.7k stars and 682 forks at time of consultation
- **Access status:** Open access, published as a MkDocs Material site from a public GitHub repository, open to external contribution via pull request with a CONTRIBUTING guide in the repo
- **Currency:** the site displayed a last-update date of 22 August 2024 at time of consultation

## What this source is
This is the working engineering handbook of a Microsoft organisation whose entire delivery model is embedding engineers with customers to build software jointly. It is not a whitepaper or a maturity model; it is the operational standard the organisation holds itself to, published verbatim, and it is unusually valuable to a forward-deployed curriculum precisely because it is the internal artifact rather than a description of one.

## The argument in full
The playbook opens by defining the engineer rather than the process, and the definition is deliberately obligation-shaped. An engineer working on an ISE project has responsibilities to their team as mentor, coach and lead; knows their playbook, follows their playbook, and fixes their playbook if it is broken; leads by example; and strives to understand how their work fits into a broader context and ensures the outcome. The third clause is the interesting one. A playbook that engineers are expected to repair rather than merely obey is a living standard, and the fact that the repair mechanism is a public pull request against a public repository makes the claim testable rather than rhetorical.

The rationale offered for having a playbook at all is stated in three parts: to increase overall efficiency for both individual team members and the team as a whole, to reduce mistakes and avoid common pitfalls, and to strive to be better engineers by learning from other people's shared experience. This is a knowledge-transfer argument, and it matters in a customer-embedded organisation because engineers are dispersed across engagements and cannot learn by osmosis from adjacent desks.

The general guidance section is the playbook's philosophical core and is worth teaching close to verbatim, because several of its instructions cut against the reflexes engineering students are trained into. It insists on keeping the code quality bar high and on valuing quality and precision over simply getting things done, which is a striking position for an organisation delivering under customer time pressure. It instructs engineers to work diligently on the one important thing, rather than in parallel on several. It recognises the distributed condition explicitly, requiring that context be shared through the wiki, through Teams and through backlog items rather than held in individual heads. It says to make the simple thing work now, and to build fewer features today provided they work amazingly. It forbids adding scope to an existing backlog item, requiring a new item instead, which is a scope-discipline mechanism rather than a bookkeeping preference. It states that the goal is to ship incremental customer value. It requires backlog item details to be kept current, and it requires that product issues be reported with clear, repeatable engineering feedback. It closes with a collective-ownership statement: we all own our code.

Structurally, the playbook offers two entry points that give it operational teeth. The first is an Engineering Fundamentals Checklist, which converts the whole document into something a team can be assessed against rather than merely read. The second is a guide to the first week of an ISE project, which maps playbook sections onto the sequence of an initial sprint, so that a newly formed embedded team knows what to establish and in what order. For a course, that first-week framing is directly reusable as the shape of a project-based module's opening.

The body is organised by engineering discipline and is unusually complete. Agile Development covers backlog management, ceremonies and roles, minimal valuable slices, risk management, pair programming, delivery planning, scrum of scrums, and the social contracts a team writes for itself in the form of a team manifesto, a working agreement, a definition of ready and a definition of done. It also includes an asynchronous collaboration and accessibility checklist and guidance on collecting external feedback, both of which reflect distributed, customer-facing delivery. Automated Testing spans unit testing, including test-driven development and mocking, integration testing, end-to-end testing with a comparison of methods, consumer-driven contract testing, UI testing, smoke testing, shadow testing, synthetic monitoring, fault injection, and performance and load testing with a test-planning process and an iteration template. CI/CD covers continuous integration and continuous delivery, GitOps including deployment workflows and secret management, and a substantial DevSecOps section covering dependency and container scanning, evaluation of open source software, penetration testing, credential scanning and rotation, static analysis and secret detection.

Code Reviews is treated as a first-class discipline rather than an afterthought, with process guidance separated into author guidance and reviewer guidance, material on inclusion in code review, pull request templates, tooling, and a set of language-specific recipes covering Azure Pipelines YAML, Bash, C#, Go, Java, JavaScript and TypeScript, Markdown, Python and Terraform. It also includes a section on evidence and measures, which is where code review stops being a norm and becomes something an engagement can demonstrate.

Design is the section most directly relevant to forward-deployed work. It covers design patterns spanning cloud resource design, data and DataOps fundamentals, distributed system design, network architecture for Azure and hybrid environments, object-oriented design, REST API design, and the capture of non-functional requirements. Its design review material is the standout: decision logs and architecture decision records, asynchronous design reviews, an engagement design review process, engineering feasibility spikes, high-level game plans, milestone and epic reviews, technical spike templates, and trade studies with a template. Trade studies and ADRs together give a team a written trail of why a design is what it is, which is exactly the evidence a customer-embedded engagement needs when a decision is questioned months later. The section also covers preferred diagram tooling and diagram types including class, component, deployment and sequence diagrams, and closes with sustainable engineering principles.

The remaining sections round out the operational picture. Developer Experience covers the inner loop for client applications, Copilots, cross-platform tasks, dev containers, running pipelines locally, and fake services for inner-loop development, along with an onboarding guide template. Documentation covers establishing and managing documentation, what makes documentation good, guidance for code, pull requests, REST APIs, work items, projects and repositories, plus DocFx and MkDocs recipes and wiki tooling. Engineering Feedback is its own section with guidance, examples and an FAQ, and it is the mechanism by which field friction becomes product input, which is the institutional flywheel a forward-deployed organisation depends on.

The ML and AI Projects section is where the playbook becomes directly relevant to an AI systems course. It covers agile considerations specific to machine learning work, envisioning and problem formulation with a summary template, feasibility studies, data exploration, model experimentation, the proposed ML process, testing data science and MLOps code, profiling ML and MLOps code, and TPM considerations for ML projects. It includes two checklists that are the closest thing in the source to a rubric: an ML Fundamentals Checklist and an ML Model Production Checklist. It also contains a Responsible AI in ISE section, placing responsible AI inside the engineering process rather than alongside it.

Non-Functional Requirements is enumerated rather than gestured at, covering accessibility, availability, capacity, compliance, data integrity, disaster recovery and continuity, internationalisation and localisation, interoperability, maintainability, performance, portability, privacy including data handling and privacy frameworks, reliability, scalability and usability. Observability is organised around the pillars of dashboards, logging, metrics and tracing, with the logs-versus-metrics-versus-traces distinction called out explicitly, plus alerting, correlation IDs, diagnostic tools, profiling, known pitfalls, observability as code, and specific guidance for microservices, machine learning, CI/CD pipelines and Azure Databricks, with tooling coverage of OpenTelemetry, Prometheus, Loki and Kubernetes dashboards. Security covers application security analysis with rules of engagement and threat modelling with a worked example. Source Control covers component versioning, merge strategies, branch naming, handling secrets in source control, and Git guidance including Git LFS and VFS. A short UI/UX section covers recommended technologies.

## Structure of the original
- Who an ISE engineer is, and why the organisation has a playbook
- General guidance — the operating principles
- Engineering Fundamentals Checklist
- The First Week of an ISE Project
- Agile Development
- Automated Testing
- CI/CD, including GitOps and DevSecOps
- Code Reviews, including process guidance and language-specific recipes
- Design, including design patterns, design reviews, ADRs, trade studies, diagramming and sustainability
- Developer Experience
- Documentation
- Engineering Feedback
- ML and AI Projects, including the ML Fundamentals and ML Model Production checklists and Responsible AI in ISE
- Non-Functional Requirements
- Observability
- Security
- Source Control
- UI/UX

## Key claims and specifics
- An ISE engineer knows the playbook, follows it, and fixes it when it is broken; the fix mechanism is a public pull request.
- The playbook exists to increase efficiency, reduce mistakes and common pitfalls, and transfer shared experience.
- Quality and precision are valued above getting things done, stated explicitly.
- Work diligently on the one important thing.
- Context must be shared through the wiki, Teams and backlog items because the team is distributed.
- Make the simple thing work now; build fewer features today but ensure they work amazingly.
- Never add scope to an existing backlog item; create a new one.
- Keep backlog item details up to date, and report product issues with clear, repeatable engineering feedback.
- We all own our code.
- The Engineering Fundamentals Checklist makes the playbook assessable.
- The First Week guide maps playbook sections onto an initial sprint.
- Design reviews are supported by decision logs and ADRs, trade studies with a template, feasibility spikes and technical spike templates.
- Code review guidance is split into author and reviewer responsibilities and includes evidence and measures.
- The ML and AI section provides an ML Fundamentals Checklist and an ML Model Production Checklist, plus Responsible AI guidance inside the engineering process.
- Observability is organised as dashboards, logging, metrics and tracing, with logs versus metrics versus traces treated as a distinction engineers must understand.
- Fifteen non-functional requirement categories are enumerated individually.

## Method and evidence base
This is codified organisational practice, not research. Its authority comes from being the actual working standard of a large customer-embedded engineering group, refined through many engagements and maintained in public where it is subject to external scrutiny and contribution. It offers no comparative evidence that its practices outperform alternatives, and it should not be taught as though it did. What it does offer, uniquely among the sources in this strand, is completeness and specificity: it is a full enumeration of what a customer-embedded team is expected to have in place, at a level of detail that a student team can be measured against.

## Vocabulary the source introduces
- **Engineering Fundamentals Checklist** — the assessable summary of the playbook's expectations for a team.
- **The First Week of an ISE Project** — the mapping of playbook sections onto the opening sprint of an engagement.
- **Working agreement, team manifesto, definition of ready, definition of done** — the explicit social contracts a team writes for itself.
- **Minimal valuable slice** — the smallest increment that delivers customer value.
- **Trade study** — a documented comparison of design options against stated criteria.
- **Architecture Decision Record and decision log** — the durable written record of why a design decision was made.
- **Engineering feasibility spike** — a time-boxed investigation to reduce technical uncertainty before committing.
- **Engineering feedback** — structured, repeatable reporting of product friction from the field back to product teams.
- **Inner loop** — the local develop-run-test cycle, and the target of deliberate optimisation.
- **Observability pillars** — dashboards, logging, metrics and tracing.
- **DevSecOps** — security practices embedded into the CI/CD pipeline rather than applied afterwards.

## What to remember
- The playbook is meant to be fixed, not just followed; a standard nobody may amend is a standard nobody owns.
- Quality is stated to outrank throughput, in an organisation delivering under customer pressure.
- Distributed and embedded work makes written context mandatory rather than optional.
- Scope discipline is mechanical: new work becomes a new backlog item, never a bigger old one.
- Design reviews, ADRs and trade studies are the durable evidence of engineering judgement.
- Engineering feedback is the institutional flywheel turning field friction into product improvement.
- The ML checklists are the closest thing the source offers to a production-readiness rubric.
- Non-functional requirements are enumerated so that omitting one becomes visible.

## Why it matters for the course
This is the strongest available model of what a customer-embedded engineering organisation actually requires of its engineers, and it is open, current and citable. Three things make it especially useful. First, the checklists convert an aspirational standard into something a student team can be graded against, which is otherwise the hardest part of assessing project work. Second, the design review apparatus — ADRs, decision logs, trade studies, feasibility spikes — gives the course a way to assess engineering judgement in writing rather than inferring it from a finished artifact, which matters because judgement is what forward-deployed work actually tests. Third, the ML and AI section, with its production checklist and its placement of responsible AI inside the engineering process, provides a directly reusable structure for the course's own production-readiness requirements. The engineering feedback section supplies the institutional half of the flywheel that the Palantir practitioner writing describes from the individual side.

## How to teach it
- Lecture: use the general guidance list as a discussion text and ask students which items they would push back on, particularly quality over getting things done and the prohibition on adding scope.
- Lab: have each project team complete the Engineering Fundamentals Checklist in week one and re-complete it at project close, and grade the delta.
- Lab: run the First Week guide as the literal structure of the project module's opening sprint, including producing a working agreement and a definition of done.
- Lab: require one trade study with a real decision, real options and stated criteria, using the playbook's template.
- Lab: require ADRs for every architecturally significant decision, and assess the reasoning rather than the outcome.
- Lab: use the ML Model Production Checklist as the gate a team must pass before demonstrating their system.
- Assessment: require a structured engineering feedback item written against a real tool or platform the team used, following the playbook's guidance.
- Assessment: assign the observability section and require that projects instrument logging, metrics and tracing distinctly, defending the choice of what went into each.

## Limits and cautions
- The playbook reflects a specific organisational culture and toolchain, with a visible Microsoft and Azure orientation; students should extract the principle and not assume the specific tooling.
- Its scale assumes a professional delivery team over a full engagement, and it will overwhelm a student project if adopted wholesale rather than selectively.
- It is prescriptive practice with no comparative evidence base, and should not be taught as though its recommendations were empirically established.
- Published guidance describes the intended standard, not measured compliance; a course should not treat it as evidence that the practices are universally followed.
- It is a living document with a public change history, so any specific section cited in course materials should be pinned to a commit or date.
- It is strong on engineering discipline and comparatively light on the customer discovery and negotiation craft that the other sources in this strand supply, so it complements rather than replaces them.

## Verification status
The playbook's homepage, including the engineer definition, the rationale for having a playbook, the general guidance list, the two entry-point links and the full top-level table of contents, was retrieved and read during this research pass, and all structural claims and section enumerations above are taken from that retrieval. The characterisations of the operating principles closely follow the source's own phrasing and should be checked against the live page before being presented as direct quotation. Individual subsection contents were catalogued from the site's navigation rather than read in full, so claims about what a specific subsection contains beyond its title are inferred from the title and should be confirmed before being relied on. The repository statistics and the 22 August 2024 last-update date are as displayed at time of consultation and will drift.
