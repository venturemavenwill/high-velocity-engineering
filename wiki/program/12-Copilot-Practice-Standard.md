# Copilot Practice Standard

> Every seminar day in this programme is executed with GitHub Copilot in agent mode. This page defines what that means, what it requires, and what it is not allowed to claim. It binds every seminar day and every whitepaper.

## The claim this programme makes

**A graduate of this programme can architect and ship a working AI system on the Microsoft AI Platform — of any design, at any layer — principally by prompting GitHub Copilot, and can say what the result does badly.**

Both halves are load-bearing and the second is the harder one. A student who can produce a working system from prompts and cannot state its failure modes has learned to operate a tool, not to engineer. The programme's entire assessment architecture already turns on that distinction, and the Copilot integration does not soften it.

## Why the tool is the subject and not the medium

Copilot is not a productivity aid bolted onto a course about something else. **It is the instrument through which the platform is operated, and this programme's central methodological commitment is that an instrument must be characterised before its outputs are trusted.**

That commitment produces an unusually direct fit. Everything the measurement strand teaches about instruments applies to Copilot without modification:

| Programme content | Applied to Copilot |
|---|---|
| [S026](wiki/seminars/S026.md) construct versus instrument | What you asked for versus what the agent optimised toward |
| [S027](wiki/seminars/S027.md) four error sources | The agent's systematic component does not average out over more prompts |
| [S029](wiki/seminars/S029.md) validating an instrument | A prompt that has never failed has never been tested |
| [S048](wiki/seminars/S048.md) the judge is biased | The agent as reviewer of its own output |
| [S052](wiki/seminars/S052.md) weight is not influence | The agent's stated reasoning is a routing record, not a cause |
| [S074](wiki/seminars/S074.md) four shapes of tool failure | Selection, input, execution, output utilisation — all four occur in agent mode |

**The jagged frontier is taught in week one and retrieved for three years.** [research/04-professional-formation/dellacqua-jagged-technological-frontier.md](research/04-professional-formation/dellacqua-jagged-technological-frontier.md) is the anchor, and its finding — that capability is uneven in ways not predictable from task difficulty as humans perceive it — is the reason the programme requires students to locate the frontier empirically rather than assume it. **No effect size from that source is asserted anywhere in this wiki**, per the standing rule; the direction and the mechanism are what is taught.

## What every seminar day must carry

Six additions to the [Seminar Day Design Pattern](wiki/program/04-Seminar-Day-Design-Pattern.md). None replaces an existing phase; each attaches to one.

**1. A header block naming the platform anchor and the MCP servers in use.** A day with neither does not exist in this programme.

**2. A Copilot prediction at phase 1.** Sealed with the other pretest items. *What will the agent do with this, and where will it be wrong?* The prediction is checked at phase 8, and the cohort's accuracy is the programme's running measurement of frontier calibration.

**3. Phase 3's four contrasting cases are run, not read.** Where the day's subject permits, the four cases are four prompts, four configurations or four architectures executed against a real service, and the payload case is the one whose actual behaviour defeats the room's expectation. Where a case cannot be run — because a capability requires a licence or tenant privilege the programme does not hold — the day states that it is demonstrated rather than operated, and the specification does not assess it.

**4. Phase 4 carries at least one platform-specific point, marked perishable, and at least one point naming a default the platform chose for you.** *Defaults are opinions and thresholds are policy.* The evaluation framework adds a tool-accuracy evaluator automatically when tool definitions appear. The conversation split defaults to last turn, which measures something different from what most teams believe they are measuring. A pass threshold of three on a one-to-five scale is a decision nobody made. **An engineer who cannot state what was chosen for them and why does not understand their own system**, and this generalises far beyond any vendor.

**5. Phase 5 produces a build, and the artefact carries a prompt record.** This is the largest change and it is specified in full below.

**6. Phase 6's error clinic includes an agent failure.** A case where Copilot produced something confidently and wrongly, with attention on why review did not catch it.

## The build, and the prompt record

Phase 5 stops being a paper exercise. The student ships something — to the substrate where the substrate is involved, to a disposable environment otherwise — using Copilot agent mode against a named service through a named MCP server.

**Three artefact elements are added to every phase 5 specification.** They are cheap to produce, they are hard to fake, and they are the elements that make the difference between a student who directed the work and one who accepted it.

**The prompt record.** What you asked for, in the order you asked. Not a transcript — a record of the *instructions you gave and why*, including the ones you abandoned. A build produced in one prompt and a build produced in fourteen are different engineering events, and the record is what makes them distinguishable.

**The intervention record.** Every point at which you corrected the agent, and what the correction was. **An intervention record with no entries fails**, unless the artefact demonstrates that the design could have detected an intervention-worthy error — the same sensitivity discipline [S052](wiki/seminars/S052.md) established and [WP-048](wiki/whitepapers/WP-048.md) §8 corrected. A student who intervened nowhere either had a trivial task or was not reading the output.

**The frontier statement.** One thing the agent did well that you could not have done as fast, and one thing it did badly that you had to catch. Both specific, both from this build. This is the day's contribution to the running frontier map, and it is the element that keeps the programme honest about its own primary tool.

## Instructions files are specifications

The programme assesses specifications from [S006](wiki/seminars/S006.md) onward. A repository custom instructions file is a specification whose conformance is checked by execution rather than by reading, and the programme treats the two as the same object taught in two registers.

This has consequences that are taught explicitly:

- **A specification that produces non-conforming work is a defective specification**, and in this register you find out immediately.
- **Specification rule 1 applies.** An instructions file must state what is actually checked. Wording that implies a quality judgement the agent cannot make will produce one.
- **Specification rule 2 applies.** A qualification must travel with the quantity it qualifies, in the same field. An instruction that says "cite sources" and does not say "in the same sentence as the claim" will produce detached citations.
- **Prompt files are procedures**, and are versioned, reviewed and retired like any other operational artefact. A prompt file with no review date is [S029](wiki/seminars/S029.md)'s unvalidated instrument in a new costume.

## What this programme does not claim about Copilot

Stated here so that no seminar day has to hedge, and so that a reader can hold the programme to it.

- **Not that Copilot removes the need to understand the system.** The programme's evidence is its own assessment record: every entrustment judgement turns on stating what a system does badly, which is a claim no agent can make on the student's behalf because it requires knowing what the user will do with the answer.
- **Not that prompting is faster in general.** It is faster on some tasks and slower on others, unevenly, and the programme requires the student to find out which rather than assume.
- **Not that agent output is correct by default.** Two of the four tool-failure shapes produce systems that report success and are wrong.
- **Not any productivity figure.** No effect size is asserted for AI-assisted productivity anywhere in this wiki. The research folder contains the source; the source's numbers are not taught as this programme's claim.
- **Not that this transfers to other platforms unchanged.** See the open questions on the [Microsoft AI Platform Map](wiki/program/11-Microsoft-AI-Platform-Map.md).

## The dependency risk, stated plainly

**A student who has only ever built with an agent may be unable to build without one, and this programme cannot currently detect that.**

The risk is real, it is not mitigated by exhortation, and the design's response is a single structural measure: **at three points in the programme — [S010](wiki/seminars/S010.md), [S045](wiki/seminars/S045.md) and [S090](wiki/seminars/S090.md) — a bounded portion of the assessed work is performed without agent assistance**, and the comparison between assisted and unassisted work is reported to the student and to the programme. It is not used to award a level. It exists so that the trajectory is visible while there is still time to act on it.

Whether three occasions is enough is unknown. It is recorded here as unknown.

## Rule interaction

- **Instrumentation rule 3** (a day must state how its own evidence was sampled) binds the frontier statements. A frontier map assembled from one cohort's builds on one substrate is a sample, and the day says so.
- **Instrumentation rule 8** (an instrument administered after its answer has been taught measures recall) binds the phase 1 Copilot prediction to phase 1. It may not migrate into phase 5.
- **Instrumentation rule 9** (an instrument must name the party who will read its result) binds the frontier map. Its reader is the following year's cohort, via the [Durable and Perishable Register](wiki/program/09-Durable-and-Perishable-Register.md).
- **The scope rule, strong form**, binds every platform-specific phase 4 point. Safe and unsafe conditions are stated, and the unsafe condition is nearly always *any version other than the one in front of you*.

## Related pages

- [Microsoft AI Platform Map](wiki/program/11-Microsoft-AI-Platform-Map.md)
- [Seminar Day Design Pattern](wiki/program/04-Seminar-Day-Design-Pattern.md)
- [Assessment Architecture](wiki/program/03-Assessment-Architecture.md)
- [Whitepaper Standard](wiki/program/05-Whitepaper-Standard.md)
- [research/04-professional-formation/](research/04-professional-formation/collected-materials.md)
