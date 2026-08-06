# Cliff Notes — an internal HVE workshop enablement corpus (white-labelled)

## Source and access status

- **Subject:** the internal enablement hub of a customer-embedded engineering organisation inside a large technology vendor, covering an introduction to its Hypervelocity Engineering model, a workshop delivery system, a facilitator guide set, a customer discovery questionnaire, a customer-facing FAQ, two maturity matrices, and a folder of worked examples.
- **Access:** **internal.** Every page declares its own audience in front-matter, and the great majority declare `internal`, addressed to named internal role groups. One document is marked *internal use only, not to be shared with customers* in its own opening line. **It is not publicly reachable from the copy read and is not citable externally.**
- **Read:** all 40 markdown files, 4,233 lines, **read in full on 2026-08-06**. 75 files in total; the remainder are site scaffolding, images, schemas and scripts, inventoried and not interpreted.
- **One file could not be read and that is itself a finding** — see the examples section below.
- **What this note is:** **a public formulation based on Microsoft's practice, rewritten as original prose.** Nothing is quoted. No link, no rendered document title, no repository name, no internal organisational identifier, no programme or site name, no individual, no customer and no internal address appears here or anywhere in this repository.

> **Filed under the repository's standing rule for internal material** — see the internal-documents section of [research/99-source-register/source-register.md](/research/99-source-register/source-register.md). Paraphrase the durable structure, attribute to Microsoft generally, reproduce no label, never link.
>
> **A redaction decision was taken deliberately and is recorded so a later reader knows the omission is not an absence of content.** Excluded entirely: a named customer, its industry and its named leadership roles; an individual author name; a tenant identifier and a rights-management label recovered from a binary file's metadata; and the internal role-group names the pages are addressed to.

## What it is

**An enablement hub, not a method.** Where the delivery corpus already summarised in [research/05-fde-craft/microsoft-accelerated-delivery-practice.md](/research/05-fde-craft/microsoft-accelerated-delivery-practice.md) is a stratum of ninety documents written by many hands over years, this is a curated, navigable site with a table of contents, a quick-start table and a contribution guide. It is the same practice presented as a product.

**It is substantially the same material, independently arranged** — and that is what makes it worth a separate note. Roughly two-thirds of what it contains was already visible in the larger corpus: the workshop lifecycle, the readiness gates, the antipattern set, the difficult-situations catalogue, the facilitator wellness document, the discovery question bank and the maturity matrices. **A second, independently structured presentation of the same practice is a rare opportunity to test whether the first note's findings were properties of the material or artefacts of how it was read.** They were properties of the material. Every substantive diagnosis in that note reappears here, and several appear in sharper form.

**Genre mixing, which the earlier note named, is here made visible and then ignored.** Every page declares an audience in its front-matter, and the values include internal enablement and customer-facing marketing. So the genres are *labelled* — a real improvement — and then filed in one tree with one navigation, so a reader moving between pages crosses from method to pitch without a boundary. **Labelling a distinction and then not acting on it is a specific and common failure**, and it is more instructive than not labelling it at all, because the label proves somebody knew.

## The four pillars, and the one the summary drops

The model is stated as four pillars: **tight multidisciplinary teams with deep domain expertise; design thinking; proven production accelerators; and AI tooling across the lifecycle.** Each has its own page.

**The introductory page's own pillar list contains three of the four, and the one it omits is AI tooling** — the pillar the entire model exists to organise. The hub's front page calls the section a four-pillar introduction, the workshop lifecycle names all four, the readiness guide names all four, and the FAQ names all four. **A summary that drops a quarter of its own subject, in the one document written for newcomers, is a defect worth showing to students** precisely because nothing about it looks wrong on the page.

The pillar content itself is better than the marketing surface around it:

- **Multidisciplinary teams.** The argued position is that AI amplifies human skill and does not replace judgement, and that teams must know where human review is essential. **This is a direct restatement of the earlier corpus's anti-democratisation claim** and it is stated more plainly here.
- **Design thinking.** Three spaces — problem, solution, implementation — each defined as a confidence to be gained rather than a stage to be completed. Mindsets: iterate in small steps, validate assumptions, talk with users throughout. **The framing that business value is measurable benefit rather than activity is the corpus's best idea and appears here intact.**
- **Accelerators.** Production-ready open-source starting points with engineering fundamentals built in. The value proposition is a list of seven benefits, of which more below.
- **AI tooling.** The most operationally useful page. It names a research-plan-implement discipline and a discovery-first variant for brownfield work, a planner-implementer-reviewer chain with review subagents, per-subagent context isolation to limit bleed-over, and explicit guardrails requiring human approval for merges and high-risk refactors. **It also instructs the reader to ground model outputs in persistent artefacts and to define human judgement checkpoints early — who reviews what, and when.**

## The workshop system

**The strongest material in the hub, and the part with the least self-promotion in it.**

The engagement is a three-phase lifecycle: six to eight weeks of preparation, three days of delivery, two to six weeks of follow-through, stated as eight to eleven weeks end to end. Preparation is decomposed into introduction, stakeholder alignment, pain-point discovery, and environment setup, each with activities and a readiness checklist. Delivery is three named days: context and fundamentals; customer current state and pain points; hands-on practice. The closing session is explicitly about pilots, commitments, named owners and metrics, and it asks the executive sponsor for a time-boxed commitment in public.

**Success is redefined against the vendor-workshop default, and the redefinition is unusually blunt.** A readiness guide states what the workshop *is* and what it *is not*, and the *is not* list includes a slide deck, a product showcase, a one-way presentation, an awareness or inspiration session, and — the sharpest of them — an engagement that ends in thanks. **A workshop that ends in good feelings and no committed pilots has failed.** That position is correct, it is rare, and it is stated where the customer can see it.

**Four antipatterns are named with causes, warning signs and mitigations:** the engagement degrading into a demonstration; under-preparation producing generic content; insufficient technical depth so the method is dismissed as theory; and reinventing rather than evolving what the customer already runs. **The warning signs are the valuable part, because they are observable in advance** — a customer asking for a tool overview, a room of managers with few hands-on engineers, no sandbox requested, an agenda finalised before the customer is understood, and labs running on sample data rather than the customer's own scenarios.

**Then the lifecycle contradicts the antipattern set in its own preparation checklist**, which instructs the team to set up sample repositories and test data. One document names lab work on sample data as a warning sign of poor quality; another makes it a preparation step. **The earlier note predicted exactly this contradiction from a different document set, and here it is again in two files that sit four directory levels apart.** Neither notices.

## The facilitator guides, and a rename that is visible in the file system

A difficult-situations catalogue covers the dominating participant, the silent participant, the sceptic, the side conversation, technical failure, participant environment failure, disagreement, low energy, off-topic drift and running behind. Each carries both moves and prohibitions, and the prohibitions are the better half: do not dismiss concerns, do not argue, do not take sides, do not shut down respectful debate.

**The sceptic entry remains the strongest thing in the collection.** Validate the history, ask what was different last time, ask what would need to be true now, and recruit the sceptic explicitly as the person who can explain the obstacles. It carries an attached claim that sceptics who feel heard often become the strongest advocates. **That claim is practitioner judgement with no evidence attached and should be taught as such** — the *moves* are transferable regardless of whether the claim about advocacy holds.

**The wellness document is the archaeological find.** The earlier note observed that this document's framing had been shifted from the organisation's duty to the person, toward the person's contribution to delivery quality. **In this copy the shift is visible in the artefact itself: the file is still named for wellness, and its title and opening principle are about effectiveness and its impact on workshop outcomes.** The filename did not follow the retitle. Its content is still an incident record written in the grammar of advice — review material the week before, rehearse transitions, test technology in advance, arrive early, pace across multi-day events, tag-team with co-facilitators, know who to call, plan how the team covers for each other. **Nobody writes those instructions prospectively.**

**And the structural point from the earlier note survives intact: these remedies are advisory, and they sit outside the lifecycle, the checklist and the readiness gates — the documents that actually schedule the work.** Advisory guidance inside a system of checklists is guidance that loses.

## The discovery questionnaire, and what it now confirms

A ten-scenario question bank organised by lifecycle phase, with a mandatory general section and a mandatory first scenario on locating the engineering system's bottleneck.

**What it does well, stated first because it is genuinely good.** Breadth before depth is enforced structurally rather than advised: one scenario is marked as the place every engagement starts, and it opens by naming the wrong question — how do we generate more code — against the right one, where does the system actually slow down. There are real prior-attempt questions, of the form *have you tried to improve this before, and what happened*. There are genuinely behavioural items: how often tests are disabled under deadline, what happens when the one architect is unavailable, whether there are areas only one person will touch, whether developers trust the suite to catch real issues.

**One question is better than anything in the larger corpus and deserves to be named.** After asking for the ratio of new-feature work to maintenance, it asks **how the customer knows** — whether the figure is tracked or estimated — and says that understanding whether a real baseline exists is what makes improvement measurable later. **That is a provenance question about the customer's own number, and it is the single discipline the rest of the corpus was found to lack.** It exists here, once.

**The four failures diagnosed in the earlier note are all present, and three are sharper.**

1. **It asks the customer to endorse the solution, systematically.** Every scenario carries a block asking where the customer sees AI helping most in that phase — asked by the person who has come to deliver AI. **This is the template, not an occasional slip**, and it is now confirmed across two independently arranged document sets.
2. **The specimen answers lead the witness, and they carry numbers.** Nearly every question ships with illustrative responses, and those responses contain figures: PR sizes and turnaround times, coverage percentages with a before-and-after target, rework proportions, feature-to-maintenance splits, boilerplate shares, CI feedback thresholds. **None is attributed and all are presented as the plausible range of customer answers, which makes them function as implicit norms.** An engineer who has internalised them will hear a real customer's number as high or low against a scale nobody validated. **No figure is reproduced in this note. These remain the items to quarantine most aggressively.**
3. **No observation of any kind.** It is entirely self-report about the engineering system. Nobody is asked to demonstrate a deployment, share a screen during a pipeline run, or set up an environment while being watched. The closest item asks the customer to narrate a recent feature, which is recall, not observation.
4. **A lookup table converting one utterance into a prescribed intervention.** The customer-facing FAQ opens with a two-column table mapping what a customer says to what to recommend — and the recommendations are products and activities. **This is consolidation's opposite: a single sentence from a single person, in a single conversation, resolved directly into an intervention with no cross-informant step.**

**Two of the three absences also hold.** There is still no question asking what result would make the customer conclude it had *not* worked, and still no question asking who loses if it succeeds. **The third absence has been partly closed**: a dedicated security and compliance scenario now exists. **A data block still does not** — nothing asks where data comes from, who may see it, whether it is correct or labelled, or whether anyone consented.

## Governance, and two maturity matrices

Two matrices, one general and one specific to the engineering organisation, both on four levels: awareness, practising, integrated, champion. The specific one is a grid of pillars against disciplines, and each cell states an outcome and the behaviours that demonstrate it.

**Three things are right about it and worth carrying.** It describes **observable behaviours** rather than attitudes. It refuses, in its own words, to be a checklist or a scoring mechanism. And it is explicit that the point is intentional progression applying all four pillars together, rather than a level to be attained.

**What it does not have is any evidence that the progression is real.** No cohort, no calibration, no inter-rater check, no outcome associated with any level, and no account of what was observed to produce the four levels rather than three or five. **A maturity model that refuses to be a score is better designed than one that produces a number, and it is not thereby validated.**

## The examples, which are why this note exists

The hub advertises a folder of fully populated samples and real-world examples, and names three kinds: complete requirements-document examples, architecture-decision-record samples, and documented workshop executions.

**Two of the three folders are empty.** They contain a placeholder file and nothing else. The requirements-document examples and the decision-record samples — the two artefact types a practitioner would most want to copy — do not exist. **The index describing them is fully written.**

**The third contains one item, and it cannot be read.** A workshop case study is present twice, as a markdown file and as a binary document.

- **The markdown version terminates at the heading *workshop outcomes*, with nothing beneath it.** Everything before that heading is context: customer, dates, duration, team sizes, participant roles, objectives and topics. The document ends exactly where its evidential content would begin.
- **The binary version is encrypted.** It carries a rights-management wrapper and an information-protection label, and its contents are not recoverable without authorisation. It also carries an author name and a tenant identifier in cleartext metadata, none of which is reproduced here.
- **The binary is also misnamed.** It uses the modern document extension while actually being the legacy compound-file format. **Any pipeline that trusts the extension will fail on it**, which is how this was discovered — a standard archive read failed before the encryption was visible.

**So the sample workloads are: two advertised and absent, one present and unreadable.** The only outcome content anywhere in the folder is a short summary in the folder's own index, which reports that the workshop established shared understanding, defined two pilots, identified organisational blockers and enabled hands-on practice. **Those are activities and commitments. None is an outcome, none is measured, and the document that was supposed to carry the measurement is the one that will not open.**

**This is the corpus's central failure reproduced in miniature, in a folder small enough to hold in one hand.** The organising thesis is that only measurable benefit counts. The examples folder is the place that thesis would be discharged. It is empty, truncated and encrypted, in that order.

## Method and evidence base

**Codified organisational practice with no evidence behind it, and the hub is easier to audit than the larger corpus because it is smaller.**

There is not one reference, study, dataset or citation anywhere in 4,233 lines. The lineage of the design methods is obvious and unacknowledged.

**The quantitative claims are concentrated in the customer-facing pages**, which is the expected place and the dangerous one. The accelerator page asserts an order-of-magnitude compression of environment setup and deployment time and a saving of weeks to months on development cycles. The FAQ asserts a time-to-value in weeks rather than months. **No instrument, baseline, period, denominator or observation accompanies any of them, and no figure from any of them is reproduced here.**

**One claim needs naming because this repository has already prohibited its near neighbour.** The weeks-rather-than-months time-to-value assertion is a close relative of a claim on the [standing prohibition list](/wiki/program/09-Durable-and-Perishable-Register.md), which no published source substantiates. **It must not cross into teaching material in any form, and it is recorded here only so that a future reader who meets it knows it was seen and refused.**

**The unfalsifiability structure from the earlier note is fully present.** Readiness is described in terms of customer dispositions — leadership sponsorship, willingness to rethink processes, active engineer participation. The biggest mistake is attributed to the customer's assumption that AI accelerates everything. **A model whose success conditions are the customer's attitudes and whose characteristic failure is the customer's misunderstanding has arranged its evidence so that a disappointing result confirms rather than challenges the thesis.**

**And the exclusion problem is now worse than an omission.** The earlier note recorded that the corpus states no exclusion criteria. This hub goes further and asserts the negative: asked whether the method works in regulated environments, it answers that it works anywhere the four pillars can be brought. **A method that states no scope exclusions invites the reader to assume it has none; a method that asserts it has none has made a claim it cannot support.**

## Human-voice claims worth carrying

Paraphrased. These are the assertions that carry judgement and field experience rather than documentation.

**On the engagement**

- A workshop that ends in thanks and good feelings, with no committed pilot, has failed.
- Awareness and enthusiasm are not acceptable outcomes for a technical engagement.
- The biggest mistake is asking how to produce more code instead of asking where the engineering system loses time.
- An agenda finalised before the customer is understood is a warning sign, not a sign of preparation.
- A room of managers with no hands-on engineers is a room the engagement will not survive.
- If nobody asked for a sandbox, the engagement has already been reframed as a demonstration.
- Ask how the customer knows their own number; an estimate and a tracked figure are different objects.
- Close on named owners, a time-box and a public commitment from the sponsor, or nothing will happen.

**On facilitation**

- Validate a sceptic's history before challenging their conclusion, and recruit them to explain the obstacles.
- Do not dismiss, argue, take sides, or shut down respectful debate.
- Your own energy sets the room's tone when something fails.
- Say *I do not know, let me find out* rather than deferring the question invisibly.
- Do not hold the whole group for one person's broken environment; pair them and move.
- Perfect delivery is not the goal; learning is.
- Low energy after lunch is a scheduling fact, not a judgement about the participants.

**On working with AI**

- AI amplifies human skill and does not replace judgement; teams must know where human review is essential.
- Ground model outputs in persistent artefacts, and define who reviews what, and when, before starting.
- Isolate context per subagent to limit bleed-over between them.
- Require human approval for merges and for any high-risk refactor an agent produced.
- Discovery precedes research-plan-implement on an existing codebase, and skipping it is how brownfield work fails.
- This is not vibe coding; expert validation is what makes the speed safe.

## Contradictions

- **The preparation checklist instructs teams to set up sample repositories and test data; the antipattern set names labs running on sample data as a warning sign of a poor workshop.** Two documents, one collection, no cross-reference.
- **The introductory page lists three pillars and the rest of the corpus lists four.** The omitted one is the pillar the model is named for.
- **Every page declares an audience and the audiences are then not separated** — internal method and customer-facing pitch share one navigation.
- **The examples index describes fully populated samples; two of the three folders contain only a placeholder.**
- **The stakeholder-alignment step carries a lead-time that is incoherent with the lifecycle it sits inside** — an alignment horizon stated in months against a preparation phase stated in weeks. A reader cannot tell whether this is a typographical error or a real expectation, and the document does not resolve it.
- **The maturity matrix declines to be a scoring mechanism while being laid out as a scoring grid**, with levels ascending left to right across disciplines. The refusal is in the prose; the affordance is in the table.

## What to remember

- **A second, independently arranged presentation of the same practice reproduced every substantive defect of the first.** That converts a set of readings into findings about the material.
- **Labelling a distinction is not acting on it.** Front-matter that declares an audience, in a tree that mixes audiences, proves the authors knew and did nothing.
- **The examples folder is where a practice discharges its central claim, and this one is empty, truncated and encrypted.**
- **A file whose extension misdescribes its format will break any pipeline that trusts extensions**, and it will do so before anyone discovers the more serious problem underneath.
- **Rights-protected binaries in a sharing repository are unreadable to the audience the repository exists to serve.** Encryption is a control; it is also an availability decision, and nobody appears to have made it deliberately.
- **Specimen answers in a question bank become benchmarks whether or not anyone intends them to** — confirmed twice now, in two document sets, with two disjoint figure sets.
- **Asking the customer how they know their own number is the single highest-value question in the bank**, and it appears once.
- **A method that asserts it has no scope exclusions has made a stronger claim than one that merely omits them.**
- **A wellness document retitled to effectiveness, with the filename left behind, is a change of duty-holder recorded by accident.**

## Why it matters for the course

**Because it is a naturally occurring replication, and this repository had no other.** [S088](/wiki/seminars/S088.md) asks what an engagement did not establish; a course that teaches evidential discipline should be able to show a case where a prior reading was tested against new material rather than merely repeated. This is that case, and the honest result is mixed: the diagnoses held, and one of them — the missing provenance question — turned out to be less absolute than stated, because the discipline does exist here in a single item.

It also supplies the course with three things it can use directly. **The workshop system is the best available worked instance** for [S011](/wiki/seminars/S011.md) and [S012](/wiki/seminars/S012.md), where readiness and the workshop you should not run are the subject. **The difficult-situations catalogue and the facilitator guides are the material** for [S013](/wiki/seminars/S013.md) and [S014](/wiki/seminars/S014.md). **The question bank is the specimen** for [S016](/wiki/seminars/S016.md), and it is better than a constructed example because its leading questions are sincere.

And the examples folder is the sharpest artefact the repository now holds for [S066](/wiki/seminars/S066.md) and [S068](/wiki/seminars/S068.md) — a baseline nobody measured, and an apparatus that generates numbers while containing none.

## How to teach it

**Do not open by naming the defects.** Hand over the examples folder's index, which promises populated samples of three kinds, and ask what a reader should expect to find. Then open the folders. **The gap between an index and its contents is discoverable in under a minute and is not forgettable afterwards.**

For the question bank, use the contrast the material supplies for free: put the one provenance question — *how do you know?* — beside any of the specimen-answer blocks, and ask which one a customer's answer could be wrong about. **One of them invites a checkable claim and the other supplies the range the claim should fall in.**

For [S016](/wiki/seminars/S016.md), give learners one scenario block and ask them to mark every question whose answer would please the person asking it. The count is the finding, and it is high.

Then ask the question the corpus never asks anywhere in 4,233 lines: **what result would make this customer conclude the engagement had not worked?** It is not in the bank, it is not in the FAQ, it is not in the lifecycle, and it is not in the maturity matrices. A learner who notices the absence unaided has performed the evidence-class judgement the whole programme is built to produce.
