# Reading List — FDE / Engagement Craft

Grouped by the question each cluster answers. Access and reading depth are
recorded because the craft books are copyrighted and their notes must distinguish
full-source synthesis from provisional synthesis.

## Field research method — learning what the work actually is
- Beyer, H. and Holtzblatt, K. *Contextual Design: Design for Life.* Second edition, Morgan Kaufmann, 2017. **Copyrighted — local EPUB read in full.**
- Portigal, S. *Interviewing Users: How to Uncover Compelling Insights.* Rosenfeld Media, 2013. **Copyrighted — first-edition local EPUB read in full.**

## Customer conversation and negotiation — getting to truth and to access
- Fitzpatrick, R. *The Mom Test: How to Talk to Customers and Learn if Your Business is a Good Idea When Everyone is Lying to You.* **Copyrighted — complete available local EPUB read; edition metadata is absent from the package.**
- Fisher, R., Ury, W. and Patton, B. *Getting to Yes: Negotiating Agreement Without Giving In.* Third edition, Penguin Books, 2011. **Copyrighted — local EPUB read in full.**

## Translation and modelling — carrying the customer's language into the system
- Evans, E. *Domain-Driven Design: Tackling Complexity in the Heart of Software.* Addison-Wesley, 2003. **Copyrighted — a locally held EPUB was read in full on 2026-07-30, with Part II sampled rather than read through.** The package declares no publisher, date or edition, so the 2003 first-edition attribution and every page number remain unverified. The author's organisation publishes a free reference distillation of the pattern definitions, which is open and usable in teaching.

## Adoption and handover — the gap between delivered and used
- Kotter, J. P. *Leading Change.* Harvard Business Review Press, 1996; anniversary edition 2012. Precursor article: Kotter, J. P. "Leading Change: Why Transformation Efforts Fail", *Harvard Business Review*, 1995. **Copyrighted — a locally held EPUB was read in full on 2026-07-30.** The copy is the 2012 reissue, *Leading Change: With a New Preface by the Author*, ISBN 978-1-4221-8643-5; the added preface is dated November 2012 and adds emphasis rather than correction.
- Hiatt, J. M. *ADKAR: A Model for Change in Business, Government and our Community.* Prosci Learning Center Publications, 2006. **Copyrighted — a locally held EPUB was read in full on 2026-07-30.** The copyright page states "© 2006 Prosci Inc.", Loveland, Colorado, and the imprint recorded here appears nowhere in the book. Prosci publishes open descriptions of the five elements and the barrier-point concept.

## The composite role in practice
- Microsoft Industry Solutions Engineering. *Engineering Fundamentals Playbook.* https://microsoft.github.io/code-with-engineering-playbook/ — **open access**, GitHub repository microsoft/code-with-engineering-playbook, contributable by pull request. **All 243 pages read in full on 2026-07-30**, enumerated from the site's own sitemap. **Start with the templates, not the checklist** — the trade study, the four design-review scopes, the pull request form, the onboarding guide and the requirement-capture form are complete specifications, whereas roughly a third of the checklist's items are not falsifiable as written. *The First Week of an ISE Project* is a navigation index rather than an onboarding guide. **Page footer dates range from 2021 to 2025, so cite by page and date; the site cannot be dated as a whole.** About half the site is substantive practice, a quarter is tool-bound recipe and a fifth is stub or link list — and **nothing in the navigation tells you which is which.**
- An **internal Microsoft forward-deployed delivery standard** built on that playbook is recorded as a **public paraphrase** in [microsoft-fde-delivery-practice.md](/research/05-fde-craft/microsoft-fde-delivery-practice.md). It is **not linked, not quoted by label, and not citable externally** — see the internal-documents section of the [source register](/research/99-source-register/source-register.md) for the rule that governs it.
- Palantir Blog. "Dev versus Delta: Demystifying engineering roles at Palantir", 8 April 2019 — **read in full on 2026-07-30** from a locally held plain-text copy at `raw/palantir-dev-vs-delta.txt`. It was listed below as retrieved but unavailable until that date, when the sign-in redirect was bypassed by taking a plain-text copy of the article. It is the company's own definitional statement of the two roles and is now the primary text for the distinction; it is also a recruiting artefact and says so in its first and last lines.
- Palantir Blog. "A Day in the Life of a Palantir Forward Deployed Software Engineer", 2 November 2020 — **open access**, though the default link redirects to a sign-in page; a working retrieval required appending a `gi` query parameter.
- Palantir. Careers overview, https://www.palantir.com/careers/ — **open access**; current role taxonomy of Echos, Deltas and Devs. The role-specific forward-deployed engineering URL returns 404.

## What the two Microsoft sources cite — a harvest for further reading

Collected 2026-07-30 by reading outward from the published playbook and from an internal delivery standard built on it. **Coverage is partial and stated: 29 of roughly 190 playbook pages were fetched, about 15%, plus the internal standard's full outbound link set.** Nothing below is a recommendation; it is what the two documents rest on. **No link to internal material is given here or anywhere in this repository.**

**The single most useful finding is the asymmetry.** Every external link across the 29 playbook pages read is publicly reachable. **A substantial share of the internal delivery standard's outbound links require a Microsoft sign-in, and the gated share carries the load** — the checklist that defines its own tag taxonomy, its security programme, its entire responsible-AI process, and the public agent-configuration corpus its roadmap addresses. Its fundamentals layer is collectable; its distinctive content is not.

### Publicly reachable, and worth collecting first
- **GitHub, Engineering System Success Playbook** — `https://github.com/resources/insights/engineering-system-success-playbook`. Public, and itself the doorway to SPACE, DevEx, DX Core 4 and DORA. The best single onward jump from either handbook.
- **Azure Well-Architected Framework** — reliability principles, operational excellence and incident response, and SaaS incident management, all on `learn.microsoft.com`.
- **Observability Lab Workshop** — `https://observability-lab-cse.github.io/observability-lab-workshop/`. A public, runnable lab.
- **Microsoft REST API Guidelines** — `https://github.com/microsoft/api-guidelines`, which carries its own recommended-reading section.
- **Principles of Green Software Engineering** — `https://principles.green/`. It is the entire substrate of the playbook's sustainability section.

### Engineering practice and craft
- **Michael Nygard, "Documenting Architecture Decisions"** — the ADR format is taken from it wholesale.
- **Jack Ganssle, "A Guide to Code Inspections"** — `http://www.ganssle.com/inspections.pdf`. **Read this one with attention**: it is the only citation on the page that closes by asserting the cost of code review is negative. The claim is not unsourced, but a paper on inspections does not license the assertion in the form the playbook makes it, and this repository refuses the assertion either way.
- **Martin Fowler**, on pair programming, on distributed-system patterns, on contract testing and integration testing.
- **Ian Robinson, "Consumer-Driven Contracts"**; **Kent C. Dodds, "Write tests. Not too many. Mostly integration."**; **Google Testing Blog, "Just Say No to More End-to-End Tests"**.
- The git commit-message canon — Tim Pope, Chris Beams, Peter Hutterer — plus **Conventional Commits** and **SemVer** as standards.
- **SAFe, "Team and Technical Agility"** — the team-manifesto page's only citation.

### Machine learning, data and evaluation
- **Aurélien Géron, machine-learning project checklist**, and **fast.ai's data project checklist** — together the source of the playbook's problem-framing and workflow question lists.
- **Howard, Zwemer and Loukides, "Designing Great Data Products"** — the drivetrain approach.
- **Lu et al., "Learning Under Concept Drift: A Review"** — arXiv:2004.05785. A genuine paper, and the drift material's anchor.
- **Moses et al., *Data Quality Fundamentals*** — the one book cited in the ML section.
- **Stanford CS230 on train/dev/test splits**; two baseline-model essays; **CookieCutter Data Science**.
- **Microsoft's six Responsible AI principles**, **InterpretML** and **Fairlearn**.

### Resilience, security, privacy and accessibility
- **Cindy Sridharan, "Testing in Production"**, both parts; **Mark Russinovich on chaos engineering**; *The Landscape of Software Failure Cause Models*.
- Security cites **only Microsoft** — the SDL threat-modelling material and STRIDE. The rules-of-engagement page cites nothing at all.
- **Wood et al., "Differential Privacy: A Primer for a Non-Technical Audience"**; **Carnegie Mellon's data-classification guidelines**; **OWASP Access Control Cheat Sheet**.
- **WCAG 2.0** and the **W3C WAI evaluation tools list**; Microsoft Inclusive Design; **Google's accessible-documentation style guide**.

### What the internal delivery standard adds, and what it withholds

It rests on the playbook constantly but never describes the relationship in prose — the playbook is its fundamentals reference and it is the phase, sequencing and automation-assignment layer over it. **It names several well-known engineering-measurement frameworks in passing and cites none of them.** It cites **no academic literature and no standards body**, and one book. Its roadmap names a handful of capabilities it wants added to the public agent-configuration corpus — pipeline scaffolding, a catalogue of proven starting points, artefact reuse tracking, incident-runbook generation and pre-launch drill orchestration — paraphrased here, and never links the corpus.

### Gated, recorded so the gap is visible rather than forgotten

A substantial share of that standard's outbound references require a Microsoft account: the internal checklist that defines its own tag taxonomy, its internal security programme, every responsible-AI artefact, and an internal maturity matrix. **None of it is collectable without a Microsoft account, and the standard's most distinctive content depends on it.** No link to any of these is given here, per the internal-material rule in the [source register](/research/99-source-register/source-register.md).

### The citation-density finding, which is itself worth knowing
Of the 29 playbook pages read, **five cite nothing external at all** and a further four cite only Microsoft-owned material — so roughly a sixth is uncited assertion and near a third rests on no source outside Microsoft. Three pages are essentially pure link lists with almost no argument of their own. **The ML and resilience sections are well sourced; security practice, observability practice and agile process are largely assertion.** A reader collecting from this playbook should expect the quality of its warrant to vary by section far more than its uniform tone suggests.

## Retrieved but unavailable
Nothing is currently held here. The section is kept rather than deleted so that the earlier gap stays visible: its one item, Palantir's "Dev versus Delta", was obtained on 2026-07-30 and has moved to *The composite role in practice* above.

## Adjacent reading, not core
- Vernon, V. *Implementing Domain-Driven Design.* Addison-Wesley, 2013 — the usual applied companion to Evans.
- Ury, W. *Getting Past No.* Bantam, 1991 — the follow-on for hostile counterparts, expanding negotiation jujitsu.
- Kotter, J. P. *XLR8 (Accelerate).* Harvard Business Review Press, 2014 — Kotter's later reframing of the eight steps as continuous accelerators rather than a sequential process.

## What this folder should answer
- What a forward-deployed engineer actually does, from a primary practitioner account rather than a job advertisement
- How discovery is conducted rigorously enough that its findings can be defended
- How to get truthful answers from people who are motivated to be encouraging
- How to negotiate for data access and stakeholder time without positional power
- How to carry a customer's vocabulary into a system design without silently redefining it
- Why a delivered system is not an adopted one, at both the organisational and the individual level
- How to diagnose where an adoption effort is actually stuck
- When to generalise a solution into a product and when to keep it custom
- What engineering rigour looks like when the team is embedded on a customer site