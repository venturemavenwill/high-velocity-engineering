# Cliff Notes — an accelerated customer-embedded delivery practice (white-labelled)

## Source and access status

- **Subject:** the internal delivery, discovery, workshop and governance material of a customer-embedded engineering organisation inside a large technology vendor, covering an AI-accelerated delivery model, a design-thinking method adapted for engineering, a workshop delivery system, a customer discovery question bank, a value-conversation framework, a project security-hygiene standard, a responsible-AI assessment regime and two maturity matrices.
- **Access:** **internal and access-controlled.** Portions carried confidentiality markings, portions were encrypted at rest at source, and several linked dependencies were closed even to a reader inside the organisation. **It is not publicly reachable and is not citable externally.**
- **Read:** approximately ninety documents, read in full on 2026-07-30 across seven parallel passes.
- **What this note is:** **a public formulation based on Microsoft's practice, rewritten as original prose.** Nothing is quoted. No link, no rendered document title, no internal organisational identifier, no programme or site name, no individual, no customer and no internal address appears here or anywhere in this repository.

> **This note is filed under the repository's standing rule for internal material** — see the internal-documents section of [research/99-source-register/source-register.md](/research/99-source-register/source-register.md). The rule is: paraphrase the durable structure, attribute to Microsoft generally, reproduce no label, and never link. **A redaction decision was taken deliberately and is recorded here so a later reader knows the omission is not an absence of content.** Excluded entirely: a roster of named security champions; a named customer case study; internal tenant, environment and application identifiers; internal escalation routing and contact points; and any operational attack detail.
>
> **If this material is ever published through an official channel, this note is re-cited properly.** Until then the course teaches the structure and refuses the labels.

## What it is

**A stratum, not a body of work.** The documents span roughly two and a half years of authorship, they were written by many hands for different audiences, and **they disagree with each other in more than a dozen places.** The oldest items are over two years old; the newest were revised within months of the reading. Nothing in the collection dates itself as a whole, and several items had already lost their own cited dependencies by the time they were read.

Its genre is **internal enablement**: material that teaches the organisation's own engineers how to run an engagement, plus customer-facing material that sells the model, plus governance material that constrains it. The three genres are not separated, and a reader who does not notice which one they are holding will mistake a pitch for a method.

**The organising thesis, which is genuinely good, is that a delivery can satisfy every agreed success criterion, use excellent architecture, follow textbook engineering fundamentals, ship to production — and still produce nothing of value.** Everything short of realised business value is reclassified as activity rather than impact, including the team, the architecture, the fundamentals and the deployment. It is a deliberately uncomfortable claim to put to an engineering audience, and it is the best thing in the collection.

**The collection then fails its own test.** Of roughly thirty quantitative assertions across the delivery material, two concern an outcome. The rest are activity measures — elapsed time, headcount, proportion of code generated, minutes to add a feature, proportion of a backlog judged ready. A body of work whose central claim is that only measurable benefit counts supports itself almost entirely with measures of activity.

## The operating model, and where it is interesting

The claimed mechanism is that AI tooling compresses the production of engineering artefacts, and that the compression is only converted into value if four things hold together: capable people, reusable starting points carried between engagements, the tooling itself, and a discovery method that establishes what should be built. **The fourth is argued to be the only one that produces impact rather than activity**, and it is also the one with the least material devoted to it.

Two structural features are worth carrying.

**First, the model is explicitly not democratisation.** The claim is that the tooling amplifies the operator: an experienced engineer gets usable assets out of it and an inexperienced one generates noise. That is a direct push against the prevailing assumption, and it makes reviewer competence load-bearing — a team member must be someone you would trust on a purely human team to hold the bar. **The model therefore rests entirely on expert human validation, and nowhere addresses what happens when generation accelerates and validation does not.** Review capacity is the obvious binding constraint and it is not discussed anywhere in ninety documents.

**Second, the prohibition that holds the whole thing together: use the tooling to make each step better, not to skip steps.** It is stated as a headline takeaway in the training material — and it is contradicted by the customer-facing material's proudest anecdote, in which a prototype is generated on day one from a template with no discovery activity described at all. Read against the method, the flagship story is step-skipping presented as acceleration. **Neither document notices.**

## Design thinking inside engineering delivery

The largest single document in the collection. Its useful contributions:

- **Design activity is interleaved into the existing engineering cadence and is never run as a separate workshop or a pause in delivery.** This prohibition is repeated across documents — and is in tension with case studies whose headline achievement is a compressed multi-day workshop.
- **A frozen/fluid axis.** Every element of a problem space is classified by how much it can move. The associated rule is a rule against learned helplessness: even in an almost entirely frozen space there is always something that can be changed, and constraint is not an excuse for doing nothing. **This is the most transferable original idea in the collection** and it pairs directly with the course's existing position that the interesting architecture is usually the one you are not allowed to build.
- **Deliberate low fidelity, argued from a mechanism rather than asserted.** Adding detail to an early concept artefact is held to be actively harmful, because detail drags the discussion onto irrelevancies — the wrong equipment type, an assumed attribute of the workforce, whether a device fits over safety gear — and away from the idea being tested. **Polish suppresses honest feedback, so strip it on purpose.** The collection then notices, without resolving, that its own tooling makes polished output nearly costless, and offers no advice on holding the line when the refined version costs the same as the rough one.
- **The best-argued claim in the collection is a question.** Asking *why is that a problem for you* immediately after a user complaint is what converts a cosmetic preference into an underlying constraint — the worked dialogue turns "dim the lights" into "redesign what happens when alerts fire". It is taught as a dialogue rather than as a principle, which is the right way to teach it.
- **A cheap prototype that fails immediately is to be treated as an instant win**, and stakeholders are to be actively coached into reading it that way rather than as a setback.

## The workshop delivery system

The most professionally mature material in the collection, and the part with the least self-promotion in it.

**Success is redefined against the vendor-workshop default:** a workshop that ends in thanks and good feelings but no committed pilots has failed, and awareness and enthusiasm are explicitly not acceptable outcomes.

**Four antipatterns are named with causes, warning signs and mitigations** — the engagement degrading into a product demonstration; under-preparation producing generic content; insufficient technical depth so that the method is dismissed as theory; and reinventing rather than building on what the customer already runs. The warning signs are the valuable part because they are observable in advance: a customer asking for a tool overview, a room of managers with few hands-on engineers, no sandbox requested, an agenda finalised before the customer is understood, labs running on sample data rather than the customer's own scenarios. **One of these antipatterns is contradicted by the collection's own workshop recipe**, which hands teams a sample product idea and a prepared starter repository.

**A catalogue of difficult situations with prescribed handling** — the dominating participant, the silent participant, the sceptic, the side conversation, demo and network failure, a participant's own environment failing, disagreement between participants, low energy, off-topic drift, running behind, late arrival, a topic not landing, a question the facilitator cannot answer, and mid-workshop scope creep. Each carries both moves and prohibitions. The sceptic entry is the strongest: validate the history, ask what was different last time, ask what would need to be true now, and recruit them explicitly as the person who can explain the obstacles — with an attached claim that sceptics who feel heard often become the strongest advocates.

**A facilitator wellness document, which is an incident record written in the grammar of advice.** It tells facilitators not to work until midnight every night, to keep meals and sleep intact, to avoid back-to-back engagements, to rotate the intensive roles between people, and it establishes a peer-observation protocol for noticing a colleague in difficulty. **Nobody writes those instructions prospectively.** Two things about it are worth teaching directly. Its framing has been shifted to *effectiveness* — rest is justified by its contribution to delivery quality rather than as something the organisation owes the person. And **it contains the collection's only structural remedies for overload, none of which appear in the lifecycle, the timeline, the checklist or the readiness gates — the documents that actually schedule the work.** Advisory guidance inside a system of checklists is guidance that loses.

**Hybrid delivery is named as the hardest setting**, with a stated core risk of a two-tier experience, and a requirement for a dedicated person whose only job is the remote participants' experience. The venue-selection rule is a genuine non-obvious ordering claim: the pain point determines which engineers must be present, which determines where the workshop is held.

## The discovery question bank

A large practitioner question bank, and the item that most repays comparison against this repository's research literature on interviewing.

**What it does well.** A mandatory breadth-first block before any deep dive — an independent rediscovery of the rule against investigating detail inside a problem category before establishing that the category matters, and enforced structurally rather than merely advised. Prior-attempt questions that are textbook. Threshold questions asking what would be good enough. A closing pair in every block asking what good would look like and how improvement would be measured. Several genuinely behavioural questions: a recent shipped feature and where it stalled, how often tests are disabled under deadline, whether security has actually blocked a release, what happens when the key person is away.

**Four diagnosable failures against a research-grounded method.**

1. **It asks the customer to endorse the solution, systematically, in every block.** Each section asks where the interviewer's own solution category would help. This is the central prohibition in the question-quality literature, and it is here as the template rather than as an occasional slip — asked by the person who has come to deliver that solution.
2. **The specimen answers lead the witness.** Nearly every question ships with example responses. Defensible as preparation for a novice; lethal in the room, because appending examples narrows the response set. The specimens disproportionately name the frictions the method addresses.
3. **No observation of any kind.** It is entirely self-report about the engineering system. Nobody is asked to demonstrate a deployment, share a screen during a pipeline run, or set up an environment while being watched.
4. **No consolidation, and an artefact that actively prevents it** — a lookup table converting a single utterance from a single person into a prescribed intervention.

**Three absences worth naming to students.** There is no data block at all: nothing about where data comes from, who may see it, whether it is correct or labelled, or whether anyone consented. There is no question asking what result would make the customer conclude it had *not* worked. And there is no question asking who loses if it succeeds — despite the accompanying commercial material carrying an explicit headcount claim.

**The anticipated-objection brief is the most revealing document in the collection**, because a list of prepared answers is a map of where a delivery model actually meets resistance. The objection it pre-arms engineers against most heavily is that the tooling improved and delivery did not speed up — and the prepared answer reattributes the shortfall to the customer's own organisational constraints. Paired with a readiness rubric composed almost entirely of customer dispositions, **the model has arranged its evidence so that a disappointing result confirms rather than challenges the thesis.** That is the single most teachable thing in the entire collection.

## The value-conversation framework

**It contains no unwarranted magnitudes, because it contains no magnitudes.** This reverses the expectation and is the more interesting finding. There are no claimed multiples, no claimed savings, no efficiency figures; the metric catalogue is a taxonomy of definitions in which not one entry is populated with an observed value, a benchmark or a typical range; the case-studies section is reserved and empty.

**Its weakness is not exaggeration but non-closure.** It instructs the reader to establish a baseline and never exhibits one being established. It catalogues two dozen metrics and never reports one being measured. It recommends a stochastic simulation method for quantities it never quantifies.

**And that shape carries a specific hazard worth teaching:** it is a number-generating apparatus containing no numbers. It ships spreadsheet models and a simulation workbook. Figures produced downstream will carry the authority of a named framework while resting entirely on elicited inputs — and because the framework asserts nothing, **those figures cannot be traced back to any claim in it.** There is no proposition to check them against. That is a worse failure mode than an unwarranted magnitude, which is at least locatable and refutable.

**The structural diagnosis: the cost side is engineered and the return side is elicited.** Consumption is forecast by engineers, instrumented by engineers and refined against telemetry from their own system. Return is chosen by the customer from a menu, measured by the customer using instrumentation the customer may not possess, over a period nobody specifies, with causation assumed. **No party is assigned responsibility for establishing that an observed change was caused by the system.** Several metric definitions define themselves as the change *attributable to* the system, which presupposes the thing that needed establishing. The framework poses the confounding question correctly — how would you separate the value and the learning if a previous solution already exists — and then answers it nowhere.

A ratio whose denominator is well instrumented and whose numerator is not is not a well-instrumented ratio, but it will feel like one.

## Security hygiene, and withdrawal as estate hygiene

The most substantive item in the collection, and it reads as having been written by people who have handled incidents.

**The best single idea: the withdrawal trigger is a state change in an authoritative register, not a person remembering.** Every environment is tagged to a project in the organisation's project register, that register is declared the source of truth for project status, and marking the project closed is what initiates decommissioning. **Reusing an environment after project close is named as a policy violation rather than an inefficiency**, explicitly because the asset is bound to a project identity — which forecloses the commonest drift in practice, the team that keeps the environment for the next thing and carries one customer's residue into another's engagement.

Two further controls worth teaching. **Access revocation is a two-party act**, performed by the project lead jointly with the departing person's own manager — a design that suggests somebody learned that single-party revocation does not happen. And **a person's departure is treated as a security event with consequences across the organisational boundary**, triggering credential rotation inside the customer's estate, performed jointly with the customer.

**The large absence: there is no handover.** Nothing describes transferring the running system, its infrastructure definitions, its pipelines, its runbooks, its evaluation harness, its cost model or its monitoring *to* the customer. No named receiving owner, no exit criteria, no acceptance, no support taper, and **no evidentiary requirement that the teardown was performed at all.**

**The model on offer is withdrawal as estate hygiene, not withdrawal as transfer of a going concern.** Its question is *is our house clean?*, not *can they run it without us?* Only the second is an engineering problem. The one place the right instinct appears — that the customer should be left holding the cost-modelling capability because they will need it after the team disengages — sits as a reflection inside a business-value narrative rather than as a step in any exit procedure. **The organisation has mechanised the teardown of its own assets to the level of a register-triggered state machine and left the transfer of capability as an unrecorded aspiration.**

## The responsible-AI regime, and what its revision reveals

The governance material was found in two generations, and **comparing them is more instructive than either alone.**

**The scope test moved from effort to surface.** The older test asked, in effect, whether the team had built or fine-tuned a model. The newer test asks whether **an artefact capable of AI behaviour crossed the tenant boundary into the customer's control** such that they can execute, test or operationalise it. That is precisely the redefinition that agentic and low-code delivery forces: when the deliverable is a configured agent rather than a trained model, an effort-based test lets the highest-velocity work escape governance entirely. **The newer test closes that hole cleanly, and it is the single best governance idea in the collection.**

**It then draws the line at authored artefacts rather than at outcomes**, explicitly excluding configuration using existing controls. Defensible on ownership grounds and indefensible on harm grounds: a carelessly configured off-the-shelf agent in a hiring workflow can do exactly the damage the regime exists to prevent, and under the newer test it is out of scope.

**Adding a documented, approvable non-conformance state is the maturity signal.** A compliance regime with no legitimate way to say *we cannot comply yet* is a regime that gets quietly ignored; making deviation visible rather than merely absent is what converts an aspiration into a control.

**Three things were dropped, and the dropping is the finding.** The older document contained the actual clause-by-clause duties; the newer one points at a standard held elsewhere. **The genre changed from statute to routing table** — better for currency, worse for self-containment, and a team reading only the current material learns process rather than duty. The older document also conceded candidly that no compliance timeline had been established and explained why its goal set was reduced. Those admissions are gone and no replacement timeline appears. **The confidence went up; the enforcement did not.**

**The living-document requirement is asserted repeatedly and instrumented nowhere.** Refresh at least annually, on every new intended use, before every release stage, at every milestone, with a per-sprint re-screen written into the team's cadence. Against that: the signature block has one row shape and no re-sign-off mechanism, the revision history has no version number and no change description, the submission is one-shot with no expiry, and the completed assessment is filed in a document repository rather than the delivery system of record. **The per-sprint re-screen is the best-designed control in the collection and the least observable — no artefact, no checkbox, nowhere to record that it happened.** In practice the assessment will be written once to clear a commercial gate and will thereafter describe a system that no longer exists.

**The assessment template's own contribution** is that a handful of its fields force a claim to become falsifiable — a named measurement, a stated threshold, a verification method, an accountable owner. Those fields are reusable directly; the rest is form-filling.

## Method and evidence base

**This is codified organisational practice with essentially no evidence behind it, and it is unusually easy to demonstrate.**

**There is not one reference, footnote, study, dataset or citation anywhere in approximately ninety documents.** Not one external source is cited for any claim. The method has obvious ancestry in long-established published design and product practice — diverge-converge structure, affinity clustering, impact-and-feasibility grids — and presents itself as emergent from the organisation's own experience.

**Roughly thirty distinct quantitative assertions appear across the delivery material. Exactly one names a measurement instrument.** None carries a citation, a baseline definition, a measurement protocol, a period, a denominator or an independent observation. **No figure from any of them is reproduced in this note or anywhere in this repository.** They concern, in general terms: elapsed build times, onboarding and debugging reductions, engagement-count experience bases, annual savings at named customers, phase durations, headcount ratios, proportions of code generated, timeline compressions, backlog readiness proportions, code-navigation multiples, accelerator setup reductions, and a development-time reduction range attributed to "teams" generally.

**One assertion is not a measurable quantity by any method** — a percentage figure for stakeholder alignment achieved. Its presence in material that elsewhere insists on measurable benefit is the clearest available specimen of a number used as rhetoric.

**The deepest evidential problem is a slide.** The material devotes space to four externally published measurement frameworks and presents them as the lens through which value will be demonstrated. **No measurement from any of them is reported anywhere.** They are invoked and abandoned; the benefit categories they supposedly support are asserted on the basis of belief and experience, and the accompanying notes say so. **The frameworks function as credibility furniture rather than as instruments** — in a body of work whose central thesis is that only measurable benefit counts.

**A distinct and more insidious class: figures embedded in specimen answers.** The question bank's illustrative response menus contain numerous figures — change sizes, review turnarounds, coverage percentages including a before-and-after target, feedback-time thresholds, deployment failure rates, rework proportions, requirements lead times. They are unattributed and presented as the plausible range of customer answers, **which makes them function as implicit norms.** An engineer who has internalised them will hear a real customer's number as high or low against a scale nobody validated. **These are the items to quarantine most aggressively.**

**One case reaches the collection's high-water mark:** an internal application's own telemetry is named as the instrument for an abandonment proportion and a subsequent reduction in access-related issues. The instrument is named; the methodology, period, sampling and confounders are not. It is still short of a measurement.

## Human-voice claims worth carrying

Paraphrased. These are the assertions that carry judgement and field experience rather than documentation.

**On failure**

- A delivery can meet every agreed criterion and still produce nothing of value.
- Customers routinely arrive having chosen a solution without ever having articulated a problem.
- The real problem is often mentioned once, in passing, buried in a long conversation about solutions; noticing it is the job.
- Some customers have genuinely lost track of their own problem, because it was mislaid across handoffs.
- **Solving the wrong problem quickly is the characteristic failure of the new tooling, not a residual one.**
- Generated code accumulates comprehension debt: it exists, it passes, and nobody understands it.

**On what practitioners get wrong**

- The tooling amplifies the operator's skill rather than levelling it.
- Adding detail to an early concept artefact is actively harmful.
- People skip the ideation step because it looks too simple to be worth doing.
- Interviewing from a checklist destroys the interview — follow the thread until it is proven irrelevant.
- The characteristic mistake is asking how to produce more code instead of asking where the system loses time.
- Existing complex systems reveal bottlenecks that new projects conceal.

**Stated as rules**

- Use the tooling to make each step better, not to skip steps.
- Given a fixed time budget, run more iterations rather than fewer and more refined ones.
- Do not automate the existing workflow — ask how you would do this from scratch given the tooling.
- Move engineering artefacts out of documents and slides into markdown in the repository, because that is what makes them actionable.
- Even in an almost entirely frozen space there is something you can change; constraint is not an excuse.

**On people and organisations**

- Working software is hard to argue with, so political resistance dissolves in front of a running prototype in a way it does not in front of a document.
- Resistance originates in ownership of process, not in technical incapacity.
- Sessions with only leaders produce plans nobody executes; sessions with only practitioners lack the authority to change anything.
- Assess a stakeholder's AI literacy indirectly, because a direct question will not get an honest answer.
- A request stated with unusual specificity signals that thinking has happened elsewhere; ask what is driving it.
- If asked who the users are and the answer is "everyone" or "I don't know", treat it as a flag and escalate.
- Momentum decays without a deliberate reinforcing rhythm after the initial engagement.

**Two refusals, which are the most trustworthy content in the collection**

- Replacing human reviewers with AI in a legal-review process was judged irresponsible because those reviewers catch issues with legal consequences, and the customer's own proposed solution was declined on those grounds. **This is the only place in ninety documents where the answer to a customer request is no.**
- On a mature production codebase the assistant could not be asked to add a feature end to end, because the generated code reused outdated patterns and ignored architectural constraints; the workaround was to make failing tests the specification and spend most of the human effort on the tests. **This directly contradicts the collection's own headline velocity claims, and it is buried in speaker notes.**

## What to remember

- The organising thesis is excellent and the collection fails it: only measurable benefit counts, and almost every figure offered measures activity.
- **A prepared-objection list is a map of where a model meets resistance**, and reading one that way is a transferable analytical skill.
- **A model whose failure explanation is always the customer's readiness has arranged its evidence to be unfalsifiable.**
- The frozen/fluid axis and the rule against treating constraint as an excuse are the most reusable original ideas here.
- Withdrawal triggered by a state change in an authoritative register is the right shape; withdrawal without handover is estate hygiene, not engineering.
- A governance scope test based on **whether an artefact crossed the boundary** survives agentic delivery; a test based on how much model work was done does not.
- **A regime with no legitimate way to say "we cannot comply yet" gets quietly ignored.**
- **A living-document requirement with no version field, no re-sign-off row and no place to record the review is not a requirement.**
- Specimen answers in a question bank become benchmarks whether or not anyone intends them to.
- A framework that generates numbers while asserting none is harder to check than one that over-claims, because there is no proposition to check against.
- Wellness guidance that is advisory inside a system of checklists loses to the checklists.

## Why it matters for the course

**Not as a model to adopt. As the most complete available specimen of a serious, competent organisation documenting its own practice without evidence** — and doing so while its central thesis is that evidence is the only thing that counts.

That combination is rare and pedagogically valuable. The material is not sloppy; it is thoughtful, experienced and in places genuinely wise. It is also entirely unwarranted, and the two facts sit in the same documents in the same register. **A student who can hold both readings at once has acquired the skill this programme exists to produce.**

Four things transfer directly and are worth teaching as content rather than as specimen: the frozen/fluid classification of a problem space; the withdrawal trigger bound to a project register; the governance scope test based on artefact transfer across a boundary; and the catalogue of difficult facilitation situations, which is the kind of hard-won operational knowledge that is almost never written down.

## How to teach it

- **Lecture:** state the organising thesis — everything short of realised business value is activity — then hand students the collection's own evidence profile and ask whether the material passes its own test. **No figure need be reproduced to run this; the count and the character of the figures is the lesson.**
- **Lecture:** teach the prepared-objection brief as a *readable artefact*. What does an organisation's list of anticipated objections tell you about where its model actually fails? Then show the objection it prepares for most heavily, and the answer that reattributes the shortfall to the customer, and ask what evidence could possibly disconfirm the thesis.
- **Lab:** give students the discovery question bank alongside this repository's notes on contextual inquiry and on avoiding questions that invite flattering answers. Require them to classify each question as behavioural, projective or evaluative, and to rewrite the evaluative ones. **The rewrite is the assessable work.**
- **Lab:** run the frozen/fluid classification on the programme's own substrate. Which constraints are genuinely immovable, which are merely inherited, and what could be changed this term?
- **Lab:** the difficult-situations catalogue as a rehearsal exercise. Assign situations, run them, and mark the handling against the stated prohibitions rather than against outcome.
- **Assessment:** require a withdrawal plan whose trigger is a state change in a register rather than a person's intention, and which names what transfers to the recipient — the system, its definitions, its runbooks, its evaluation harness, its cost model, and a named receiving owner. **Mark the transfer, not the teardown**, because the source mechanises the teardown and omits the transfer.
- **Assessment:** require a governance scope test for a student project, written in the artefact-transfer form rather than the effort form, and require the student to identify one case their own test wrongly excludes.
- **Assessment:** require any value claim to name who establishes causation. A claim whose attribution is assigned to nobody is not a claim.

## Limits and cautions

- **This is internal material and nothing here may be linked, labelled or attributed to a named document.** If a claim in this repository needs an external warrant, this note cannot supply one.
- **It is a stratum spanning two and a half years and it contradicts itself in at least a dozen places**, including on team composition, on prototype sequencing, on whether design activity may be a separate workshop, on delivery format, and between a stated antipattern and the collection's own workshop recipe. Nothing reconciles them.
- **Its prerequisites are stated and immediately waived** — three conditions are named for the model to work, followed by an offer to proceed regardless. They are therefore not conditions.
- **No failure is recorded anywhere.** Every case study succeeds; the single failure narrative is a synthetic composite and is fictional by the material's own admission.
- **No exclusion criteria exist** — no domain, scale or regulatory limits, and no criteria for a customer being unsuitable.
- **No cost side appears anywhere.** Every claim is a gross benefit; staffing cost, compute cost, the cost of the discovery activity itself and opportunity cost are all absent.
- **No quality evidence appears** — no defect, incident, security-finding or maintainability data, and no post-deployment record for any case.
- **No sustainment evidence appears.** Whether any delivered system survived, was maintained by the customer, or was still running months later is not reported once.
- **Ethics and consent are absent** from material that describes recording workshops, collecting user telemetry and researching people at work.
- **The AI-persona substitution — using a model's simulation of a user in place of a user — is proposed without any validity discussion**, in the same collection that opens by warning against building for an imagined user.
