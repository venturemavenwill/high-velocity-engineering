# FDE Delivery Standard

> The professional-formation strand runs through **40 of the 90 seminar days**, across all three years, and until now it had no spine. It had excellent parts — contextual inquiry, negotiation, ubiquitous language, handover, entrustment — and no statement of what a forward-deployed engineer is *for*. This page supplies one, and names the two Microsoft sources it is taken from and the exact extent to which they may be trusted.

## The problem this page fixes

A strand assembled from its best available parts is not the same thing as a strand with an argument. The PE days were each defensible and the sequence was not derived from anything; it was derived from what the other six strands left room for.

Two Microsoft sources now let that be repaired. [research/05-fde-craft/microsoft-ise-engineering-playbook.md](/research/05-fde-craft/microsoft-ise-engineering-playbook.md) is the published, openly contributable engineering standard of a customer-embedded Microsoft organisation. [research/05-fde-craft/microsoft-fde-delivery-practice.md](/research/05-fde-craft/microsoft-fde-delivery-practice.md) is **a public paraphrase of an internal Microsoft delivery standard built on top of that playbook**, specific to forward-deployed AI engagements.

**Take the second one's warning before its content.**

## What the delivery standard is, and how this page may use it

**It is internal Microsoft material, and everything below is a paraphrase.** It was reachable at the time of reading, but it carried an internal confidentiality marking, was published from an individual's personal space rather than through an official Microsoft channel, and attributed its content to internal documents and meetings — while the repository behind it simultaneously described itself as a personal project under a permissive licence. **Two provenance signals conflict, and this programme takes the more restrictive one.**

The consequences are operative, not decorative:

- **It is filed under the same rule as the internal vendor course** already in this repository: *not publicly accessible in any citable sense, and not citable externally.*
- **No link to it appears anywhere in this wiki**, and none may be added. This repository is public, and a citation that points a public reader at internal material is a disclosure with a footnote attached.
- **No exact label is reproduced** — not the rendered title, the internal organisational identifier, the marking's wording, the internal checklist's name, or the phase names as written. **No individual is named, and no internal document title or meeting date appears.**
- **The principles below are restated in this programme's own words**, not quoted. What is taught is the durable structure — the ordering, the role split, the artefact chain — because that is describable in original prose without reproducing anything restricted, and it is the part that would survive the material being withdrawn tomorrow.
- **If Microsoft publishes this through an official channel, this page is re-cited properly.** Until then it is a public formulation based on Microsoft's practice, and it says so. If the material is withdrawn instead, the page re-anchors to the playbook alone, which is open. The strand is designed so that it can.

## The six principles, and what each one costs

These are the spine. **They are restated in this programme's own words rather than quoted, for the reason given above.** The gloss and the cost are this design's.

**1. Build for real operational use, not for demonstration.** A capability earns its place by surviving mission-critical work. **The cost:** a student's build must survive contact with somebody's actual working day, which is why this programme runs a live substrate and withdraws the operations content rather than simulating it. See [Substrate and Infrastructure](/wiki/program/10-Substrate-and-Infrastructure.md).

**2. Leave the customer's engineers more capable, not more dependent.** **This is the strand's hardest principle and the one this programme is least able to assess.** A student can deliver a working system and leave the recipient less able than before, and the artefact looks identical. [S089](/wiki/seminars/S089.md)'s handover and [S090](/wiki/seminars/S090.md)'s entrustment are where it is examined, and both examine it through what the student can *say*, not through what the recipient can *do*.

**3. Extend what the customer already runs before introducing anything new.** **The cost:** the interesting architecture is usually the one you are not allowed to build, and a student who has only ever built greenfield has not met the constraint that defines the job.

**4. Anchor decisions in working software rather than in presentations.** **This one the programme already obeys** — phase 5 of every day produces a build, per the [Copilot Practice Standard](/wiki/program/12-Copilot-Practice-Standard.md) — and it is the reason it does.

**5. Treat security and responsible AI as first-commit obligations, not pre-launch gates.** **The cost is sequencing:** it puts threat modelling and responsible-AI assessment before the thing they assess exists, which students experience as premature and is the point.

**6. Let AI accelerate the work, and require a human to decide.** **This is the same claim the [Agent Configuration Standard](/wiki/program/13-Agent-Configuration-Standard.md) already binds**, arriving from a second source and one register up: there it is an instruction file forbidding an agent to tick a review box, here it is an engagement principle. **Two sources reaching the same rule independently is the strongest warrant either of them has**, and it is still not evidence that the rule works.

## The phase model, and how this programme is not it

The handbook specifies eight phases with owners and durations: Discovery and Workshop, Environment and Foundation, Strategic Requirements, Backlog and Sprint Planning, Architecture and Security and Responsible AI, Technical Product Spec, Sprint Execution, Operational Readiness and Launch. Phases two through eight sum to sixty working days.

**The programme does not run those phases and should not pretend to.** A three-year degree is not a twelve-week engagement, and mapping one onto the other would produce the simulation this design refuses everywhere else. What transfers is narrower and more useful:

| The handbook's structure | What the strand takes |
|---|---|
| Discovery before environment before requirements | **The order is the content.** A student who writes requirements before doing discovery has inverted the standard, and can be shown they have |
| Requirements are business-level, and the technical spec is consolidated *from* them plus decisions | The two-document split, and that the second is derived rather than authored |
| Post-specification change is captured as a decision record, not as a specification edit | **An assessed artefact rule**, and the cheapest discipline in the whole standard |
| Architecture, security and responsible AI generate backlog items rather than sign-offs | Security work that produces work, not a gate somebody passes |
| Sprint execution is Research, Plan, Implement, Review per work item | The same loop the [Agent Configuration Standard](/wiki/program/13-Agent-Configuration-Standard.md) teaches at work-item scale, now visible at engagement scale |
| Operational readiness precedes launch and includes handoff | [S089](/wiki/seminars/S089.md) and the withdrawal commitment on [Substrate and Infrastructure](/wiki/program/10-Substrate-and-Infrastructure.md) |

**The durations are planning figures, not measurements**, and no page in this wiki repeats one.

## The artefacts, which are where the strand becomes assessable

The playbook's contribution is not its philosophy; it is that it specifies artefacts precisely enough to be marked. These are now the strand's assessed forms, and each is taken from a page that was read in full.

**Amended 2026-07-30, on a reading of the playbook in full — every page, rather than the sample the previous version of this section rested on.** This section previously led on the engineering fundamentals checklist and carried the templates as one line among five. **The order is now reversed, and the reason fits in a sentence: the checklist is a partial instrument whose items are not uniformly falsifiable as written, whereas the templates are complete specifications — every heading named, in order, with nothing left to the reader's judgement about what the artefact must contain.** The superseded emphasis is left in place at the foot of the list rather than deleted, because the correction is only legible against it.

**The templates are the source's real contribution and the site indexes them nowhere.** None is reachable from the navigation as a template; recovering them required reading every page. There are about ten. Six carry this strand.

- **Architecture decision records.** Ascending number and title, date, status from a fixed set, context written as a value-neutral description of the forces at play, a decision beginning *we will*, and consequences. Stored in the repository, raised as a pull request in proposed status. **This is the single most reusable artefact in either source.**
- **The trade study template**, which is a different page from the trade study guidance and is the only one of the two that specifies anything. Header fields first — who conducted it, against which backlog work item, in which sprint, the decision, and the decision makers — then `Overview`, `Desired Outcomes`, `Evaluation Criteria`, optional `Key Metrics` and `Constraints`, `Accessibility`, `Solution Hypotheses`, then **one block per candidate solution, each pairing an `Experiment(s)` heading with an `Evidence` heading**, closing on `Results`, `Decision` and `Next Steps`. The pairing is the form's whole argument: a candidate is compared by what you did to it and what that produced, not by what you think of it. It carries a floor — **at least two options, or you did not need a study** — and the guidance page carries the negative rule, *a trade study should be avoided where there is a clear choice.* **The two pages disagree about the ceiling**, and neither is treated here as authoritative on it.
- **Four design-review templates at four scopes** — task, feature or story, milestone or epic, and technical spike — each requiring a `[DRAFT/WIP]` prefix in the title while the document is open. **Moving from the story scope to the milestone scope adds exactly one heading, `Operationalization`**, and changes nothing else. That is the strand's most precise statement of what design scope actually is, and it is taught at [S039](/wiki/seminars/S039.md).
- **The pull request template**, nine fields, all of them mechanically checkable from the pull request itself: the work-item link, a description, steps to reproduce and validate, a six-item checklist covering documentation, tests, passing tests, style, lint and duplicate requests, an explicit breaking-change question, a testing section naming operating system and scenarios, relevant logs, and known dependencies.
- **The onboarding guide template**, six headings — overview and goals, contacts, team agreement and code of conduct, development environment setup, project building blocks, resources. It pairs with the source's own commitment that a cloned repository can be configured and run without help, which makes the guide's necessity the measure of that commitment's failure.
- **The non-functional-requirement capture template**, eight fields, of which **only two make the requirement assessable rather than aspirational: its measurement or metric, and its verification method.** The same page supplies a large catalogue of example thresholds and **cites no source for any of them**; the catalogue is usable as an example bank and is never a benchmark. This is taught, with the catalogue handed over under that label, at [S039](/wiki/seminars/S039.md).
- **Engineering feasibility spikes.** A pre-mortem asking what caused the failure that has not happened yet, then time-boxed investigation, with the standing warning that **spike code is not the solution's code**.
- **Team agreements** — definition of done, definition of ready, working agreement, team manifesto — written by the team rather than issued to it. The manifesto's stated purpose is *to surface disagreement*, which is why it is written before the work and not after.
- **The engineering fundamentals checklist**, used as the source uses it: a checklist, and now the last item here rather than the first. The superseded wording is kept: **roughly two-thirds of its items are mechanically checkable and the remainder are not**, and telling those apart is itself an exercise this strand runs. What the complete reading adds is that the unfalsifiable remainder is not evenly spread — one section slips out of declarative form altogether and begins asking questions rather than stating conditions, so two items in the same list are doing different grammatical work. **It is a good inventory of expectations and a partial instrument, and the templates are what the strand marks against.**

## What neither source establishes, stated once so no day has to

**Neither source is evidence that any of this works.**

The playbook offers no comparative evidence for any practice it prescribes. The handbook reports **no outcome, no evaluation, no comparison, and no measurement** of the standard it proposes; its durations are plans; the shares it attributes to AI-generated work are assertions. Both are codified practice — which is a real thing to be, and is not a finding.

**This programme therefore teaches the standard and refuses the claim.** A student is assessed on whether they can operate the artefacts and say what each does not establish. **No day may assert that following this standard produces better engagements, faster delivery, higher quality, or more capable customers**, because nothing published supports it — and the [Agent Configuration Standard](/wiki/program/13-Agent-Configuration-Standard.md)'s five classes of conclusion apply here without modification. A phase model is a configured control. A checklist is an executable check. Neither is outcome evidence.

**The playbook reaches for a magnitude in at least four places and warrants it in none, and this programme refuses all four.**

*Amended 2026-07-30. This paragraph previously read: "The playbook also contains **one** claim this programme refuses outright… it appears in this repository only here, as a specimen, and it is a good one: a careful document, in its most operational section, ending on a magnitude nobody measured." The specimen is unchanged and the word* one *was wrong.* Reading every page found the same failure in four different sections and four different registers: an assertion about what code review costs; an assertion about a team's delivery rate under a named collaboration practice; a multiple for what a defect costs when it is found late, attributed to a study through a link no current browser will follow; and a set of vendor efficiency figures banded widely enough that no observation could contradict them. **None of the four figures is reproduced anywhere in this repository, on this page or on any other.**

**One instance is a slip. Four is a property of the document**, and the property is that the playbook does not distinguish between a practice it has reasoned about and a number it has repeated — while writing both in the same flat declarative voice. That is the specimen worth teaching, and it is larger and more useful than the single sentence this page used to carry. The strand teaches it as a reading skill rather than as an indictment: the register is uniform across every page, only the bibliography differs, and the bibliography is the only place a reader can find out which they are holding.

## Perishability

**The handbook is the most perishable source in the strand.** It describes a standard still being finalised, with open items and undecided cadences visible on its face, dated to a year. It is verified before every offering, like the platform layer, and for the same reason.

**The playbook is uneven rather than old, which is worse.** Its pages carry footer dates ranging over four years — some updated within the last year, one untouched since 2021 — so **the playbook cannot be dated as a whole and any citation of it must name the page and its date.** A note that dates the site is wrong, and this repository's did.

**A substantial part of it is not practice at all but recipe** — step-by-step procedure bound to a named tool at a named version, written in the same voice as the normative pages and carrying none of their shelf life. **Nothing in the navigation marks the boundary.** A recipe page may be cited for the existence of an approach and never as the standard, no day may teach one as durable content, and the register carries the class explicitly on the [Durable and Perishable Register](/wiki/program/09-Durable-and-Perishable-Register.md).

## Related pages

- [Course Catalogue](/wiki/program/06-Course-Catalogue.md) — the PE strand's courses
- [Agent Configuration Standard](/wiki/program/13-Agent-Configuration-Standard.md) — principle 6, and the same RPI loop at work-item scale
- [Substrate and Infrastructure](/wiki/program/10-Substrate-and-Infrastructure.md) — principle 1, and the withdrawal commitment
- [Assessment Architecture](/wiki/program/03-Assessment-Architecture.md)
- [Durable and Perishable Register](/wiki/program/09-Durable-and-Perishable-Register.md)
- [research/05-fde-craft/microsoft-ise-engineering-playbook.md](/research/05-fde-craft/microsoft-ise-engineering-playbook.md)
- [research/05-fde-craft/microsoft-fde-delivery-practice.md](/research/05-fde-craft/microsoft-fde-delivery-practice.md)
