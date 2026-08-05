# Cliff Notes — the Hypervelocity Engineering lifecycle, as GitHub and Microsoft state it

## Source and access status

- **Subject:** a first-party programme graphic, branded **GitHub Copilot** and **Microsoft Azure**, defining **Hypervelocity Engineering** as an eight-step delivery lifecycle with a continuous feedback loop, four classes of reusable accelerator asset, and eight claimed benefits.
- **Access:** supplied directly as an image and **read in full on 2026-08-05**. Every label, caption and tile was read.
- **No Microsoft Learn article stating this eight-step sequence under this name was located on the day of reading.** A Learn documentation search returned adjacent DevOps, platform-engineering and AI-adoption guidance and nothing carrying this lifecycle. **The artefact is first-party and its canonical published home is not established**, so it cannot be cited by URL, edition or date of publication. That limitation is recorded rather than smoothed away, and it is the reason nothing below is upgraded above evidence class 4.
- **Perishability: months.** The graphic carries no version marker and no date. Product-branded lifecycle vocabulary is exactly the class of claim this repository verifies before every offering.

## What kind of source this is

**Definitional, not evidential.** The graphic establishes what its publisher means by the term. It is authoritative for vocabulary and for nothing else — it reports no adoption data, no failure-rate data, no comparison and no measurement.

The distinction matters more than usual here, because the same artefact carries both halves at once. The left half is a named sequence of steps, which is a vocabulary and is usable. The lower half is a grid of outcome claims — faster, more productive, fewer failures — which is marketing and is not. **A reader who takes the whole artefact at one authority level will import the second half on the credibility of the first.**

## What it states

**The lifecycle is eight named steps, in order:**

1. **Discover**
2. **Define**
3. **Decompose**
4. **Plan**
5. **Implement**
6. **Review**
7. **Deliver**
8. **Operate**

Each step carries an icon and nothing else — no definition, no artefact, no owner. Beneath the eight runs a single arc labelled **"Continuous feedback & learning"**, and the arc's return edges are drawn into the **first four** steps rather than into step 1 alone.

**That is the most interesting thing in the graphic, and it is easy to miss.** The publisher's own drawing does not describe a line that terminates at Operate, nor a simple ring back to the start. It describes a lifecycle whose later steps feed back into discovery, definition, decomposition and planning independently. A course that renders this as a straight pipeline has rendered it wrongly.

**Four classes of reusable accelerator asset**, introduced as "a refined collection of Hypervelocity Engineering components that compound over time":

- **Instructions** — "clear guidance that drives consistent results"
- **Prompts** — "context-rich prompts that elicit better output"
- **Agents** — "autonomous helpers that take action and adapt"
- **Skills** — "domain expertise and capabilities ready to reuse"

**Eight benefit tiles:** faster time to market; higher engineering productivity; fewer failures; compresses engineering cycles; AI throughout delivery; specialised agents; reusable engineering assets; outcomes over activities.

**Not one of the eight carries a number, a baseline, a period, a denominator or an instrument.** Recorded here as claims made, not as findings. The taglines are "AI-powered. End to end. Outcomes first." and "Build better. Ship faster. Deliver what matters. Together with AI."

**One of the eight is not a benefit at all.** *Outcomes over activities* is a stance, and it happens to be the same stance the internal practice corpus behind this course adopts and then fails — see [research/05-fde-craft/microsoft-accelerated-delivery-practice.md](/research/05-fde-craft/microsoft-accelerated-delivery-practice.md), which asserts that only measurable benefit counts and then supports itself almost entirely with measures of activity. **The same tension is present in this artefact in a single image:** it puts *outcomes over activities* beside seven claims for which no outcome is reported.

## What it does not state, which is most of what a reader would need

- **No step is defined.** No entry criteria, no exit criteria, no artefact, no owner, no duration. *Decompose* and *Define* are distinguished by their position in the sequence and by nothing else stated.
- **No measurement of any kind**, for any of the eight benefit claims.
- **No date, no version, no revision history.**
- **No scope and no exclusions.** Nothing states the size, domain or risk profile of work the model does not suit. A method that states no exclusions invites the reader to assume it has none.
- **No qualification and no refusal.** The sequence opens at Discover and assumes throughout that the work is happening. **There is no step at which the answer is *do not build this*.**
- **No transfer.** Nothing addresses handing a running system, its runbooks or its evaluation harness to somebody else. *Operate* does not say who operates.
- **Review is unelaborated.** Whether it means code review, security review, responsible-AI review, or a stakeholder demonstration is not stated, and the four are different acts with different participants.
- **No failure semantics.** Nothing states what happens when a step's output is rejected, or which earlier step a rejection returns to.

## Key concepts and practices

- **Eight canonical steps:** Discover, Define, Decompose, Plan, Implement, Review, Deliver, Operate.
- **The feedback arc returns into the first four steps**, not only into Discover — the lifecycle is drawn as a loop over its own front half.
- **Accelerator assets are the stated compounding unit**, in four classes: instructions, prompts, agents and skills.
- **The asset classes map onto real, separately documented host machinery** — instruction files, prompt files, agents and skills are all things a Copilot host actually loads — which makes this the one part of the graphic with an independent trail to follow.
- **The step names are the citable content.** They are definitional and carry the publisher's authority.
- **The benefit tiles are claims without instruments** and license nothing. No magnitude appears in the artefact and none may be inferred from it.
- **The lifecycle has no refusal step, no transfer step and no stated exclusions.** Those three absences are the load-bearing ones for any course built on it.

## What to remember

- **A lifecycle diagram is a vocabulary, not a finding.** Adopt the names; do not adopt the claims attached to them.
- **The publisher's silence is where a course has to do its own work**, and here the silence is specific and nameable: refusal, transfer and exclusions.
- **An artefact that says *outcomes over activities* while reporting no outcome is demonstrating the failure it names.** That is worth showing to learners directly, because it is the same defect the practice corpus behind this course commits at much greater length.
- **Vocabulary decays in months and it decays quietly** — a renamed step breaks no build and fails no test.

## Why it matters for the course

This course was organised into nine stages before this artefact was read, and the stages were named from the practice corpus and the course's own design reasoning. **Adopting the publisher's step names makes the course legible to people arriving from the vendor's own material**, at the cost of nothing but labels — the stage questions, the modules, the sessions and the assessment occasions are unaffected by a rename.

The mapping is not clean, and the places where it is not clean are the interesting ones. **The vendor's lifecycle has no equivalent for two of this course's stages** — the qualification stage that can decline the work, and the compounding stage that closes the loop — and those are precisely the two stages this course has always recorded as *written past its source*. **An independent artefact being silent in exactly the two places the course already flagged is not evidence that the course is right. It is evidence that the gap is real and is not peculiar to one corpus.**

The mapping itself, with its fit recorded honestly stage by stage, is at [wiki/program/11-Canonical-Lifecycle.md](/wiki/program/11-Canonical-Lifecycle.md).

## How to teach it

Show the graphic before naming anything, and ask two questions. **Where in this diagram does the work stop?** — there is no such place, and finding that out by looking is worth more than being told. **Which of these eight tiles could be checked, and how?** — the answer is none of them, from this artefact alone, and a learner who reaches that conclusion unaided has performed the evidence-class judgement this course spends ninety sessions building.

Then give them the step names, which are genuinely useful, and be explicit that the names are all they are getting.
