# Cliff Notes — low-code and citizen development: the adoption hubs and the Learn guidance beneath them

## Citation and access

- **Titles:** the Microsoft Adoption hub for Copilot Studio ("Get started with agents"), plus the Microsoft Learn guidance libraries for fusion development, Power Platform governance and adoption, Power Platform Well-Architected, and Copilot Studio implementation guidance.
- **Publisher:** Microsoft — an adoption marketing site, and Microsoft Learn.
- **Source consulted:** `https://adoption.microsoft.com/en-us/ai-agents/copilot-studio/`, formerly `https://adoption.microsoft.com/en-us/power-platform/`, and roughly thirty Learn pages under `learn.microsoft.com/power-platform/`, `/power-apps/`, `/microsoft-copilot-studio/` and `/agents/`.
- **Access status:** open web, no authentication.
- **Read:** the hub and the guidance layer read in full on 2026-08-06.

**Two access facts belong at the top because they are findings, not housekeeping.**

**The Power Platform adoption hub returned content in the morning of 2026-08-06 and a 404 in the afternoon of the same day.** This note previously recorded that page as read in full; **the earlier reading is retained below and is now unverifiable by any later reader**, which is precisely the failure mode this repository warns about for vendor material. Whether the page moved, was retired, or failed transiently is not known and was not guessed.

**The Copilot Studio hub silently redirects** from `/en-us/copilot-studio/` to `/en-us/ai-agents/copilot-studio/`, and has been restructured into a three-product page — Copilot Studio, Microsoft Foundry and Microsoft Agent 365 — behind a product picker. **The page a citation names and the page a reader arrives at are already different.**

**Read depth, and a correction to this note's first version.** The first pass read the hubs only. **That was too shallow to be worth much, and the note said the right thing about its own limits while still drawing a conclusion from the wrong layer** — the hubs are routing tables and all the substance is one hop away. This revision follows the routes. What is now read is the guidance layer; **what remains unread is most of the downloadable collateral** — the success kit, the ninety-day framework, the skilling academy, the adoption workbook, and the case-study library beyond two summaries.

## What kind of source this is

**Routing tables.** Neither page contains a method, a practice, a measurement or an argument. Both are navigation surfaces: a product picker, a role picker, a phase picker, a list of links updated on a stated cadence, community and event listings, and a large quantity of unrelated site chrome — consumer hardware, retail and education links sit in the same document as the governance guidance.

**That genre is worth naming, because this repository has already recorded the same shift once.** The internal responsible-AI regime summarised at [research/05-fde-craft/microsoft-accelerated-delivery-practice.md](/research/05-fde-craft/microsoft-accelerated-delivery-practice.md) was found to have changed genre between generations — from a document stating duties to a page pointing at where the duties are held. The finding recorded there was that this is **better for currency and worse for self-containment**, and that a team reading only the current material learns process rather than duty.

**These two pages are that end state as the primary artefact.** They are current, they are maintained, they route accurately, and **a reader who reads only them has learned where to go and nothing about what to do.** That is not a criticism of a hub — routing is what a hub is for. It is a caution about mistaking the hub for the material, which is easy because the hub is what a search engine returns.

## What they actually state

**The role segmentation is the one genuinely useful structural idea here**, and it is the only thing in either page this repository has taken forward.

The Copilot Studio hub addresses four distinct roles — **leadership, IT administrator, maker, and developer** — and gives each its own path through three phases: plan, implement, improve. **The maker and the developer are separate audiences with separate routes**, which is a small piece of vocabulary doing real work: it says the same product is built by two different populations with different accountabilities, different prior knowledge and different failure modes.

The Power Platform hub structures adoption as a five-step journey: get started, engage the organisation, train the organisation, connect with communities, and **secure your environment**. **Governance appears as a named stage of adoption rather than as a gate at the end**, which is the right shape and is asserted rather than argued.

Both pages route to a maturity instrument — the Power Platform hub to an adoption maturity model, the Copilot Studio hub to an agent maturity framework described as moving beyond pilots. Both route to a self-assessment: the Copilot Studio hub offers a readiness benchmark stated as taking about ten minutes.

Two product facts are worth recording because they change what the course can teach:

- **Copilot Studio has acquired an evaluation surface.** The release list includes agent evaluation for measuring agent quality. **A low-code product with evals is a materially different teaching object from one without**, because the untestable residue shrinks.
- **The model choice is no longer single-vendor**, with a third-party model family listed alongside the first-party ones, and a computer-use capability listed in preview.

## The guidance layer: what the routes actually lead to

**This is the part the first pass missed, and it is much stronger than the hubs suggest.** It is first-party product documentation with definitional authority over its own products; it states mechanisms; it publishes comparison tables; and in several places it is candid about its own limits in directly usable ways. **It still reports no outcome data of any kind**, and nothing in it licenses a magnitude.

### Fusion development is a named discipline with defined personas

`power-platform/developer/fusion-development` defines fusion development — attributing the term to a 2019 Gartner survey — as distributed, multidisciplinary teams blending technology with other domain expertise. **It names three personas:**

| Persona | As the documentation defines it |
|---|---|
| **Citizen developer or maker** | A business user with business knowledge looking to improve a business process; uses visual, drag-and-drop, low-code tools; **usually has no technical background** |
| **Professional developer** | Uses pro-dev tools for pro-dev tasks — code in an IDE, in languages such as C# or JavaScript |
| **IT professional or DevOps engineer** | Responsible for the application lifecycle management of business applications |

**The division of labour it states is the load-bearing sentence.** The role of the professional developer and the IT professional is to **create a secure and governed environment in which the citizen developer can achieve more with minimum friction.** The pro-code party's deliverable is *the conditions under which somebody else builds* — not the build.

`power-apps/guidance/co-develop/collaboration` adds a **four-role minimum team**: product owner, domain expert, professional developer, administrator. Its stated rule is **start small and add roles only when necessary**, using small targets to demonstrate the model before attempting ambitious projects.

`power-platform/well-architected/operational-excellence/principles` elevates this to a **design principle — "embrace a fusion development and DevOps culture"** — under checklist item OE:01, with a dedicated recommendations page at `.../fusion-culture`.

**The documentation is candid about the failure mode.** `power-apps/guidance/co-develop/overview` states that the ability to prototype in isolation "can also provide challenges for IT departments, including **siloing and a growth in shadow IT projects**."

### Governance control latency — the best mechanism claim in the corpus

`power-platform/guidance/adoption/reactive-governance` states a distinction worth more to this programme than everything else on these pages combined:

> The CoE Starter Kit uses **publicly available APIs** and actions to apply guardrails on governance. Governance processes are **asynchronous and happen reactively**. Let's say your organization needs to restrict sharing of apps to 20 users. The CoE **can only react after the limit is exceeded, possibly resulting in noncompliant assets**. On the other hand, managed environments uses **private APIs, built into the product, that enforce sharing limits before they're passed.**

**This is a mechanism, not a preference.** A control implemented *on top of* a platform's public surface can only observe and respond; a control implemented *inside* the platform can refuse. The consequence is stated plainly: **the reactive control produces non-compliant assets as a matter of routine**, and its only remedy is notification. The comparison table records the kit's sharing limits as usable "only to send compliance notifications and reminders to makers."

**The durable claim is about where a control sits relative to the thing it governs.** Which product is on which side of the line is the perishable part.

### Graduated enforcement, with a published severity matrix

Solution checker enforcement offers **three levels — None, Warn, Block** — configurable per environment, with the result returned to the maker. Recommended settings are published per environment type:

| Environment | Solution checker | Sharing limit |
|---|---|---|
| Default | **Block**, send emails | exclude groups, limit to 20 individuals |
| Developer | **Warn**, no emails | no limit |
| Sandbox | **Warn**, no emails | no limit |
| Production | **Block**, send emails | no limit |
| Teams | **Block**, send emails | no limit |

**The teaching content is the shape, not the values:** one check runs everywhere and its *severity* is tuned to blast radius — loosest where mistakes are cheap, strictest where they are not — and **the default environment is treated as strictly as production.**

### The default environment is the ungoverned surface, by construction

**Every employee in the organisation has access to the default environment.** Resources there "might not follow application lifecycle management best practices, posing a business continuity risk." A dedicated feature, **default environment routing**, exists to move makers out of it into personal developer environments automatically.

This is where an unsurveyed maker estate physically lives, and the documentation says so: the named business-continuity risks are **ownerless resources** — owned by people who have left the organisation — and **high-value resources sitting in the default environment**.

### A published reversibility table

`reactive-governance` publishes **what breaks for makers and for admins if managed environments are switched off**, per feature, coded Direct / Indirect / None. Makers directly lose pipelines, sharing limits and environment routing; admins directly lose environment groups, the actions page, governance recommendations, the inventory explorer and the weekly digest. **A vendor publishing the exit cost of its own governance tier, feature by feature, is rare, and is the artefact to point at when teaching reversibility.**

### Build paths, and governance acquired by moving the artefact

The agent build path is **three-tier, not two**: Agent Builder inside Microsoft 365 Copilot for information workers; Copilot Studio for makers and developers; Foundry for pro-code. `microsoft-365/copilot/extensibility/copy-agent-to-copilot-studio` documents a **"Copy to Copilot Studio"** promotion and states what promotion buys: versioning, staged deployment, rollback, structured release, usage analytics, role-based access and data policies.

**The mechanism worth teaching: governance is acquired by relocating the artefact into a governed tool, not by adding controls where it was built.**

### A promotion gate operated by someone other than the builder

The Deutsche Bahn case study describes citizen developers building in development-test environments, then — **when a concept is proven** — staging the app while **local expert teams evaluate it for business criticality, value, risk management, data protection and security**, and only then deploying to production. **The gate is named, staged, and operated by a party other than the builder.** No outcome, cost or duration figure is attached to any of it.

### Delivery models and administrative shape

Governance delivery comes in three shapes — **centralised, decentralised, hybrid** — with environment groups and rules for bulk policy application, and three named roles: Power Platform admins, environment admins, makers. `guidance/adoption/common-vision/establish-coe` recommends **platform terms and conditions for makers**, setting explicit expectations on ownership, security and self-support, plus an idea-intake process and a decision matrix for platform and licence selection.

### The maturity instrument, read and refused

The staged agentic-adoption maturity model at `agents/adoption-maturity-model/` is organised as levels against pillars and states that it is based on the Capability Maturity Model. **This repository prohibits asserting it and nothing from it is carried into the wiki as a claim.**

**Reading it was still worth doing, for one reason.** Its technology pillar states that an organisation at the defined level "consistently distinguishes between SaaS agents, Copilot Studio agents, and more advanced build paths," and that one at the capable level uses Copilot Studio for process-oriented agents and Foundry for others. **That is a build-path routing rule wearing a maturity label** — and the routing rule can be assessed on its own merits once the ladder is discarded. The prohibition is on the ladder, not on the observation that build-path selection is a capability an organisation either has or lacks.

## Where the documentation contradicts itself

**The CoE Starter Kit is simultaneously deprecated and recommended.** `guidance/coe/starter-kit-explained` opens with: "**The Power Platform CoE Starter Kit is no longer actively maintained.** Its core capabilities are part of the Power Platform admin center. Issues are no longer reviewed or addressed." Meanwhile `reactive-governance`, `environment-strategy`, `embrace-citizen-devs` and the Deutsche Bahn case study all recommend it in the present tense, and `reactive-governance` advises establishing an internal process to **update it monthly**.

**This is the second specimen of a pattern this repository has already recorded**, the first being the Microsoft IQ family, whose pages contradict one another on licensing, layer names, storage and supported actions. The lesson now has two instances: **within one vendor's documentation library, currency is per-page, and no single page can be trusted alone.**

## What must not cross into teaching material

**The Copilot Studio hub links a five-stage maturity model for moving beyond pilots.**

**Any five-stage maturity model is on this repository's [standing prohibition list](/wiki/program/09-Durable-and-Perishable-Register.md)**, which forbids asserting one on the grounds that no published source substantiates the progression at the specificity with which it is repeated. **It is recorded here as seen and refused.** The linked model was not read, and reading it would not change the prohibition: the objection is to asserting a staged progression as established, not to the existence of the document.

The same applies more weakly to the readiness assessment. **A ten-minute self-scored benchmark of organisational maturity is an instrument with no published validation**, no inter-rater data and no outcome association. It may be a perfectly good conversation starter. It is not a measurement, and a number produced by it must not be reported as one.

**Neither page carries a single outcome figure, comparison, adoption statistic or study.** For once that is a virtue of the genre rather than a defect: a routing table that asserted magnitudes would be worse.

## What this changes for the course, assessed against what the course already teaches

**The premise that this programme is a pro-code Azure endeavour is measurably false, and the measurement should be stated before anything is added.**

Low-code is the declared **platform anchor** for six sessions: conversational topic and trigger design at [S011](/wiki/seminars/S011.md); escalation and fallback design at [S014](/wiki/seminars/S014.md); deliberate low fidelity at [S036](/wiki/seminars/S036.md), where the low-code tool is chosen *because* its limits are published; group-initiated testing at [S038](/wiki/seminars/S038.md); adoption at published scale at [S082](/wiki/seminars/S082.md); and the build-path decision record at [S005](/wiki/seminars/S005.md). The published department-level scale envelope is taught in eight separate places, and [S008](/wiki/seminars/S008.md) teaches the low-code path's own published disadvantages as a cost side.

**The strongest low-code teaching in the programme is already the governance one.** [M12](/wiki/modules/M12.md) and [WP-057](/wiki/whitepapers/WP-057.md) argue that a governance scope test based on *effort* lets low-code and agentic delivery escape review without any rule being broken — because the team did no model work — and that a test based on **whether an artefact crossed the boundary** closes that hole. That is a low-code-first argument and it is the design's best governance idea.

**So the gap is not the tool. It is the person.**

**In every one of those sessions the low-code product is something the engineer chooses and operates.** The citizen developer — the maker as the enablement hub names them — appears nowhere as a party to the engagement. The programme's cast is customer, sponsor, engineers, security, operators and a receiving owner. **The population that has already built four hundred flows in the environment you are about to govern is not on the list.**

That absence has three specific consequences, and they map onto sessions that already exist:

1. **A maker estate is a frozen constraint nobody surveys.** [S026](/wiki/seminars/S026.md) asks what cannot move and who decides; [S074](/wiki/seminars/S074.md) treats estate hygiene as register-triggered. Neither contemplates an estate built by people outside the delivery team, undocumented, in production, and load-bearing.
2. **A maker is a party who bears a cost and holds no purchasing power** — which is the exact test [S007](/wiki/seminars/S007.md) applies to absent parties. Governance you propose lands on them; a platform decision you record removes options they were using; and they were not in the room because the sponsor did not introduce them.
3. **Handover to a maker is not handover to an operator.** [S079](/wiki/seminars/S079.md) proves the recipient can run it. A receiving population whose operating surface is a designer rather than a terminal needs a different bar, and the programme states only one.

**Of those three, only the second is integrated here**, because it is the one an existing session can absorb without redesign. The other two are recorded as open.

## What this source does not establish

- **No outcome data anywhere.** Not one adoption rate, failure rate, defect rate, cycle-time figure, cost saving or comparison against an alternative appears in any page read, hub or Learn. **No effect size may be asserted from any of it.**
- **No population data on makers** — no size, distribution, behaviour, retention or objection data. The persona definitions are definitions, not measurements.
- **The fusion-development definition rests on a 2019 analyst survey** that was not read and whose method is unknown here.
- **The two case studies are vendor-selected successes** with no denominator, no comparison and no failure cases.
- **The readiness self-assessment publishes no scoring, calibration or validation**, and is not evidence about any organisation completing it.
- **Nothing states how to engage a maker population as a party to an engagement** — the question the absence-map work actually needs. The role is named; consulting it is not discussed anywhere.
- **The recommended enforcement settings carry no justification.** No page explains why the default environment warrants production-grade strictness, and the values are conventions rather than findings.
- **Every product name, role name, tier name and default value is perishable**, and inside a single day of this reading one page changed genre and another 404'd.

## Key concepts and practices

- **The same product has at least four audiences** — leadership, administration, makers, developers — with different accountabilities and different failure modes.
- **A maker and a developer are different populations**, not the same population at different skill levels.
- **The pro-code deliverable in a fusion engagement is the environment, not the artefact.**
- **A control's latency is a property of where it sits**, not of how strict it is written to be.
- **Severity is a design variable**: one check, tuned per environment to blast radius.
- **Governance is a stage of adoption, not a gate at the end** — the framing both hubs use, asserted rather than argued.
- **A hub is a routing table**, and its currency is bought with self-containment.
- **A ten-minute self-scored maturity benchmark is a conversation, not a measurement.**

## Human-voice claims worth carrying

- A control built on a platform's public API can only observe and respond after the fact, while a control built inside the platform can refuse before the fact; the difference is latency rather than strength, and a reactive control produces non-compliant assets as a matter of routine.
- The pro-code party's deliverable in a low-code engagement is the conditions under which someone else builds, not the build.
- A person who builds without being on the delivery team is a party to the engagement, and the sponsor has no reason to introduce them because they hold no budget.
- The same check should run in every environment, and what varies is whether it warns or blocks; that severity is a function of blast radius rather than of the check.
- Governance is frequently acquired by moving an artefact into a governed tool rather than by adding controls where it was built.
- An environment every employee can reach, which no lifecycle process covers, is where an unsurveyed estate accumulates, and ownerless assets are its characteristic failure.
- A vendor that publishes the exit cost of its own governance tier, feature by feature, has said something about reversibility that most vendors decline to say.
- Within a single vendor documentation library currency is per-page, and a component can be deprecated on one page while four others recommend it in the present tense.
- A maturity ladder and a routing rule are different claims, and a routing rule embedded in a maturity ladder can be assessed on its own merits after the ladder is discarded.
- Two roles named as separate audiences for one product is a statement that the product is built by populations with different accountabilities and different failure modes.

## What to remember

- **The substance is always one hop away, and the hop is where the reading has to happen.** The first version of this note stopped at the hub, described its own shallowness accurately, and still drew a conclusion from the wrong layer. **Declaring a limit is not the same as respecting it.**
- **A routing table is the mature form of a governance document and the weakest form of a teaching document.**
- **The gap in a curriculum is more often a missing person than a missing technology.** This programme teaches the low-code platform thoroughly and had never once treated the people who build on it as parties to the engagement.
- **A staged maturity model remains prohibited however authoritative its publisher** — but a mechanism buried inside one can be extracted and judged separately.
- **The most valuable sentence in a vendor library is usually the one comparing two of its own products**, because that is where it is obliged to say what each cannot do.

## Where this lands in the programme

- **[S005](/wiki/seminars/S005.md)** — the build-path decision record. The three-tier path, the promotion mechanism and the fusion personas turn the ADR from *which service* into *which service, built by whom, inherited by whom*.
- **[S057](/wiki/seminars/S057.md)** — the governance scope test. Control latency is the mechanism the effort-versus-boundary argument was missing.
- **[S007](/wiki/seminars/S007.md)** — the maker as an affected non-buyer on the absence map.
- **Recorded, not integrated:** the maker estate as an unsurveyed frozen constraint ([S026](/wiki/seminars/S026.md), [S074](/wiki/seminars/S074.md)); handover to a maker as distinct from handover to an operator ([S079](/wiki/seminars/S079.md)); the reversibility table as a specimen for exit-cost analysis.

## Why it matters for the course

**It supplies a named, vendor-recognised absent party to a session that is about absent parties.** [S007](/wiki/seminars/S007.md) requires a map that includes at least one party bearing a cost without purchasing power, and its stated failure mode is the buyer's map — only the people the sponsor introduced. **The maker population is the clearest available instance**, it is recognised as a first-class audience by the vendor's own enablement structure, and it is invisible in the programme as it stands.

It also confirms, from an independent surface, the genre finding already recorded about the internal governance material: **the routing table is now the primary artefact**, and a practitioner's working method has to account for that.

## How to teach it

**Do not teach these pages.** They are a specimen, not a source, and their content is a list of links.

Use them once, as an exercise in provenance: give learners the Copilot Studio hub and ask what it establishes about how to build a good agent. **The answer is nothing** — it establishes where the guidance lives. Then ask which of the linked destinations they would have to read to answer the original question, and how they would know when they had read enough. That is the same discipline the programme applies to any corpus, applied to a surface that looks like an answer and is an index.
