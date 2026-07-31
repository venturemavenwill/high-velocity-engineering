# Cliff Notes — Microsoft forward-deployed delivery practice (public paraphrase)

## Citation and access

**Read this section before any other. It governs the whole note, and it is why this note reads differently from every other one in this folder.**

- **Source class: Microsoft-internal.** The material this note rests on is an internal Microsoft forward-deployed engineering delivery standard. A rendering of it was reachable at the time of reading, but it carried an internal confidentiality marking, was published from an individual's personal space rather than through an official Microsoft channel, and attributed its content to internal working documents and internal meetings.
- **No link is given, and none should be added.** This repository is public. A citation that points a public reader at internal material is a disclosure with a footnote attached, and the fact that a URL happened to resolve is not permission.
- **No exact labels are reproduced.** The rendered title, the internal organisational identifier, the confidentiality marking's wording, the internal checklist's name and short link, the phase names as written, and the names of the internal agents and skills assigned to individual items are all deliberately absent. **Their absence is a decision, recorded here so a later reader knows something was withheld rather than that nothing existed.**
- **No individual is named.** Several sections of the source close with attributions naming Microsoft employees, internal document titles and internal meeting dates. None is reproduced.
- **What this note is.** An **original paraphrase** — a public formulation of the durable ideas, written in this repository's own words, for public guidance. The structure below is a restatement, not a transcription. Where an idea is Microsoft's it is attributed to Microsoft in general terms and to no document; where a phrase is this design's, it is this design's.
- **Read depth:** the rendering was fetched repeatedly with differing queries until extraction saturated, together with its public repository description. Some regions could not be drawn out; see [Verification status](#verification-status).

**Precedent, and the rule it sets.** This repository already holds one internal Microsoft artefact under exactly this discipline — a synthesis of an internal training course, recorded as not publicly accessible and not citable externally, filed in the [source register](/research/99-source-register/source-register.md) under "Internal documents, not external sources". **This note is filed under the same rule, and that rule now generalises: internal Microsoft material is paraphrased and attributed generally, never linked, and never quoted by label.**

## What this source is

A **delivery standard being proposed** — a statement of how a Microsoft forward-deployed engineering crew should run a customer engagement, from first workshop through to handover, over a fixed and fairly short window.

It is not research, not a report and not a retrospective. It is a *plan for how work will be done*, assembled by a small group from their own working material. Its genre is closest to a project charter: normative, prospective, and answerable to nothing yet.

Two things make it worth a note despite its provenance. First, it is the only artefact this repository has seen that **sequences a general engineering checklist into a dated delivery plan with named owning roles** — it converts a list of things a team ought to have into an order of who produces what, and when. Second, it **assigns an automation status to each individual item**, and in doing so exposes a working organisation's actual judgement about which parts of engineering work it currently believes can be automated, which can only be assisted, and which remain irreducibly human. **That three-valued judgement, applied item by item, is the most interesting thing in the material and the part least dependent on anything confidential.**

## The argument in full

The argument runs in four moves.

**First, that a forward-deployed engagement has a knowable shape.** Not a methodology in the heavy sense, but an ordering: understand the customer's situation before configuring anything; establish the working environment before writing requirements; write business-level requirements before technical ones; derive the technical specification from the business one rather than authoring the two in parallel; treat architecture, security and responsible-AI work as generating work rather than as approving it; then execute; then prepare for operation before launching. **The ordering claim is the substance.** A crew that writes a technical specification first has not merely resequenced its documents — it has committed to an architecture before it understood the problem, and the standard's value is that this becomes visible rather than arguable.

**Second, that the roles are few and their ownership is explicit.** A programme-management role owns the business requirements and the planning; engineering and data-science roles own the environment, the architecture and the execution; the whole crew jointly owns discovery, the consolidated technical specification, and the readiness-and-handover work at the end. Every phase has exactly one owning role. **Joint ownership appears only where the work genuinely cannot be divided**, which is a stronger position than it looks: the temptation in a small crew is to make everything collective and thereby make nothing owned.

**Third, that the artefact chain is one-directional and change is captured rather than absorbed.** Business requirements produce a backlog; architecture, security and responsible-AI review produce further backlog items; a technical specification is consolidated from all of it. **Once that specification is settled, a change to it is recorded as a decision record rather than as an edit.** This is the cheapest discipline in the whole standard and the most transferable outside it: an edited specification loses the fact that it changed, and with it the reason.

**Fourth, that automation is assigned rather than assumed.** Each item carries one of three statuses — automated, assisted, or manual — and the counts are visibly weighted toward the middle. Discovery is largely manual: conversations about success measures, security expectations and monitoring maturity are marked as live facilitation, not as anything an agent does. Specification and backlog generation are heavily assisted. **The stated position is that a human reviews every AI-produced artefact before it counts**, and it appears both as an operating principle and as a completion condition on the work itself.

## Structure of the original

Paraphrased as a shape rather than transcribed as a table of contents.

- A short set of team operating principles.
- A delivery workflow of eight sequential phases, each with a duration in working days, one owning role, a one-line purpose, and checklist items tagged by discipline and marked with an automation status.
- Blocks describing current working practice — repository and branching conventions, sprint and estimation habits, pull-request and review expectations, daily operating rhythm, and how a new member is brought on.
- A meeting cadence template, offered as a default to be settled with the customer rather than imposed.
- A mapping between a higher-level iterative engagement model and the eight phases.
- A short list of capability gaps the authors want filled by tooling.

## Key claims and specifics

- **Six operating principles, paraphrased.** *Build for real operational use, not for demonstration.* *Leave the customer's own engineers more capable, not more dependent.* *Extend what the customer already runs before introducing anything new.* *Anchor decisions in working software rather than in presentations.* *Treat security and responsible AI as first-commit obligations rather than pre-launch gates.* *Let AI accelerate the work, and require a human to decide.*
- **Understanding precedes configuration, and configuration precedes requirements.** The first phase is conversation; the second is environment; requirements come third.
- **Business requirements and technical specification are separate documents, and the second is derived** from the first together with the decisions taken in between.
- **Post-specification change becomes a decision record, not a specification edit.**
- **Architecture, security and responsible-AI review generate backlog items** rather than producing a sign-off.
- **Every phase has one owning role**; joint ownership is reserved for discovery, consolidation and handover.
- **Each item carries an automation status of automated, assisted or manual**, and assisted dominates.
- **Discovery is deliberately the least automated phase.**
- **Completion requires that a human has reviewed every AI-generated artefact**, alongside merged code, captured decisions, and addressed security and responsible-AI work.
- **The execution phase runs a per-work-item loop of research, planning, implementation and review** — the same loop, at engagement scale, that the publicly available agent-configuration corpus recorded at [/research/06-microsoft-platform/hve-core-repository.md](/research/06-microsoft-platform/hve-core-repository.md) implements at work-item scale. **The two are independent expressions of one idea, and each is evidence only that the idea is held, not that it works.**
- **The engineering fundamentals it sequences are the openly published ones** recorded at [/research/05-fde-craft/microsoft-ise-engineering-playbook.md](/research/05-fde-craft/microsoft-ise-engineering-playbook.md). **That layer is public and collectable; this one is not.**
- **The authors record their own gaps** — the standard names capabilities it wants and does not yet have, which is a more honest posture than most standards adopt.

## Method and evidence base

**There is none, and it must be said plainly because the material's confidence does not say it.**

It reports no outcome, no evaluation, no comparison against any other way of working, and no measurement of anything. Its phase durations are planning figures, not observations. The shares it attributes to AI-generated work are assertions. No engagement run under it is described, no result is published, and nothing in it distinguishes a practice that was tried and worked from one that was agreed in a meeting.

Its evidence base is the working experience of a small group, captured from internal documents and discussions. **That is a real thing to be — codified practice is how most engineering knowledge actually travels — and it is not a finding.** The correct reading is that a competent organisation has written down how it intends to work. Whether working that way is better than working some other way is not addressed, and it does not claim it is.

## Vocabulary the source introduces

Paraphrased; none of these is the source's own term as written.

- **Delivery phase** — a bounded stage with one owning role, a duration and a defined output.
- **Owning role** — the single role accountable for a phase's output, as distinct from those contributing to it.
- **Automation status** — a three-valued mark on each item: automated, assisted, or manual.
- **Artefact chain** — the one-directional flow from business requirements through decisions to a consolidated technical specification.
- **Decision record as the change mechanism** — a settled specification is amended by recording a decision, not by editing the specification.
- **Capability gap** — a named thing the standard wants and does not yet have, recorded rather than quietly omitted.

## What to remember

- The ordering claim is the content: understand, then configure, then require, then specify, then build, then prepare to operate.
- One owning role per phase; collective ownership only where work cannot be divided.
- Change to a settled specification is recorded, never absorbed.
- Automation is assigned item by item, not assumed wholesale, and the honest answer is usually *assisted*.
- Discovery resists automation, and the organisation says so in its own markings.
- **Nothing here is evidence that any of it works.**
- The public engineering fundamentals underneath it are collectable; this layer is not, and that difference matters more than the content.

## Why it matters for the course

It supplies the professional-formation strand with something it did not have: **a spine**. The strand's days were individually defensible and their sequence was derived from nothing in particular. This material gives a defensible ordering, an explicit account of who owns what, and an artefact chain precise enough to assess — from an organisation whose delivery model the course is trying to teach.

It also arrives with a second, sharper use. **It is the second complete, carefully built control system this repository has read in a week that reports no outcome at all**, the first being the agent-configuration corpus. Two independent artefacts, from the same organisation, both meticulous and both unmeasured, is not a coincidence to be smoothed over. It is a property of the genre, and a student who has met it twice will recognise it a third time in their own work.

The binding page is [/wiki/program/14-FDE-Delivery-Standard.md](/archive/bsc-programme/program/14-FDE-Delivery-Standard.md), which carries the paraphrase into teaching and repeats the prohibition on claiming any outcome for it.

## How to teach it

- Teach the ordering as a claim to be defended, not a process to be followed. Ask a cohort to write a technical specification first, and let them discover what it costs.
- Use the one-owner-per-phase rule against the instinct to make everything collective, and require a student to name the owner of each part of their own work.
- Teach the decision-record-not-specification-edit rule as an assessed artefact discipline. It is cheap, checkable, and it transfers everywhere.
- Run the automation-status exercise on the students' own work: mark each task automated, assisted or manual before starting, then compare against what actually happened. **The gap between the two is the lesson.**
- Ask what evidence would be needed to know whether the ordering is right, and let the answer be uncomfortable.
- **Never present it as best practice.** Present it as one organisation's considered intention, and assess whether the student can tell that apart from a finding.

## Limits and cautions

- **The provenance problem is the first limit and it constrains everything downstream.** Internal material, paraphrased here, not linked, not quoted by label. It may not be cited outward, and no teaching artefact may point a reader at it.
- **It is a standard still being settled.** The material shows undecided cadences, open questions and acknowledged gaps on its face. It will not be stable, and this note will date quickly.
- **Nothing in it is measured.** No outcome, no comparison, no evaluation. Durations are plans; automation shares are assertions.
- **It is one organisation's practice, within one company, for one kind of engagement.** Its ordering may not transfer to engagements of different shape, and nothing here tests that.
- **The automation marks reflect a belief at a moment**, held by people with a commercial interest in the tooling, and will move as the tooling moves.
- **A single-author rendering of an organisational standard is not the organisation's standard.** What was read is one person's account of a collective position, and the two can differ.

## Verification status

The rendering was fetched repeatedly with differing queries on 2026-07-30 until further fetches returned substantively identical content, together with its public repository description. It is a single self-contained page; a probe for a plausible sub-path returned HTTP 404, and no sub-pages were found.

**Not reachable, and recorded rather than glossed:** the contents of items marked recommended rather than required, collapsed behind expansion controls and visible only as counts; per-phase entry and exit criteria that the repository description advertises but the page does not show; a block following the final phase that truncated mid-word; the internal checklist that defines the item tagging, which is gated; and the responsible-AI resources, which require sign-in. **Roughly half of the material's outbound references are unreachable without a Microsoft account, and the unreachable half carries its most distinctive content.**

**One internal inconsistency was found and is not reconciled here:** one phase's owning role is stated differently in two places within the same page. It is recorded rather than resolved, because resolving it would require the internal material this note declines to consult.

**A second inconsistency concerns the material's own status.** Its rendering carries a confidentiality marking while its public repository description presents it as a personal project under a permissive licence and invites reuse. **Two provenance signals conflict, and this repository takes the more restrictive one.** That choice is why this note is a paraphrase rather than a citation, and it should be revisited only if Microsoft publishes the material through an official channel — at which point this note should be replaced by a properly cited reading, not amended.

**Everything above is a restatement in this repository's own words.** No sentence is a transcription. Where the paraphrase may have flattened a distinction the original drew, that is a defect of this note and not of the source.
