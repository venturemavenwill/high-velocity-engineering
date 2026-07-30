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

- **Architecture decision records.** Ascending number and title, date, status from a fixed set, context written as a value-neutral description of the forces at play, a decision beginning *we will*, and consequences. Stored in the repository, raised as a pull request in proposed status. **This is the single most reusable artefact in either source.**
- **Trade studies.** Requirements first, then criteria, then two to four candidates, then evaluation against the stated criteria — with the negative rule carried: *a trade study should be avoided where there is a clear choice.* A trade study performed on a settled question is a defect.
- **Engineering feasibility spikes.** A pre-mortem asking what caused the failure that has not happened yet, then time-boxed investigation, with the standing warning that **spike code is not the solution's code**.
- **Team agreements** — definition of done, definition of ready, working agreement, team manifesto — written by the team rather than issued to it. The manifesto's stated purpose is *to surface disagreement*, which is why it is written before the work and not after.
- **The engineering fundamentals checklist**, used as the source uses it: a checklist. **Roughly two-thirds of its items are mechanically checkable and the remainder are not**, and telling those apart is itself an exercise this strand runs.

## What neither source establishes, stated once so no day has to

**Neither source is evidence that any of this works.**

The playbook offers no comparative evidence for any practice it prescribes. The handbook reports **no outcome, no evaluation, no comparison, and no measurement** of the standard it proposes; its durations are plans; the shares it attributes to AI-generated work are assertions. Both are codified practice — which is a real thing to be, and is not a finding.

**This programme therefore teaches the standard and refuses the claim.** A student is assessed on whether they can operate the artefacts and say what each does not establish. **No day may assert that following this standard produces better engagements, faster delivery, higher quality, or more capable customers**, because nothing published supports it — and the [Agent Configuration Standard](/wiki/program/13-Agent-Configuration-Standard.md)'s five classes of conclusion apply here without modification. A phase model is a configured control. A checklist is an executable check. Neither is outcome evidence.

**The playbook also contains one claim this programme refuses outright.** Its code-review page closes by asserting that the cost of doing code reviews is negative. No evidence accompanies it. It appears in this repository only here, as a specimen, and it is a good one: a careful document, in its most operational section, ending on a magnitude nobody measured.

## Perishability

**The handbook is the most perishable source in the strand.** It describes a standard still being finalised, with open items and undecided cadences visible on its face, dated to a year. It is verified before every offering, like the platform layer, and for the same reason.

**The playbook is uneven rather than old, which is worse.** Its pages carry footer dates ranging over four years — some updated within the last year, one untouched since 2021 — so **the playbook cannot be dated as a whole and any citation of it must name the page and its date.** A note that dates the site is wrong, and this repository's did.

## Related pages

- [Course Catalogue](/wiki/program/06-Course-Catalogue.md) — the PE strand's courses
- [Agent Configuration Standard](/wiki/program/13-Agent-Configuration-Standard.md) — principle 6, and the same RPI loop at work-item scale
- [Substrate and Infrastructure](/wiki/program/10-Substrate-and-Infrastructure.md) — principle 1, and the withdrawal commitment
- [Assessment Architecture](/wiki/program/03-Assessment-Architecture.md)
- [Durable and Perishable Register](/wiki/program/09-Durable-and-Perishable-Register.md)
- [research/05-fde-craft/microsoft-ise-engineering-playbook.md](/research/05-fde-craft/microsoft-ise-engineering-playbook.md)
- [research/05-fde-craft/microsoft-fde-delivery-practice.md](/research/05-fde-craft/microsoft-fde-delivery-practice.md)
