# Cliff Notes — 10 Gap Analysis and Course Architecture

> Internal working document, not an external source. It takes the requirement established in [09-curriculum-design-benchmark-and-sources.md](research/01-course-structure/09-curriculum-design-benchmark-and-sources.md) and converts it into a working architecture. Design decisions are marked as internal judgements; external claims cite the note holding the verified source reading.

## What this document is
The architecture proposal. It states what the gap actually is, proposes a six-strand structure to close it, places the assessment spine at the centre rather than the margin, and introduces the durable-versus-perishable split that keeps the design stable as platform detail churns. It is a proposal under revision, not a settled plan, and the open questions at the end are as load-bearing as the proposal itself.

## The gap, stated precisely
The gap is not content volume. On volume the package is already strong, and adding material would lengthen it without changing its kind. The gap is that **the course cannot currently certify judgement**, and judgement is the entire proposition of a forward-deployed engineering course. Every ABET outcome is a behavioural verb; three of six are non-technical; the proposed 2026-27 comprehensive-project clause requires an experience that occasions observable professional dispositions. None of these can be satisfied by material, however good. What is missing is a mechanism that produces evidence about what a student does when the answer is not given.

Three subsidiary gaps follow from the first and are worth naming separately, because each has a different fix.

- **No substrate.** There is no system with real users, real degradation and real consequences. Without it, incidents cannot occur, monitoring has nothing to monitor, and operations content has nothing to attach to. CMU's answer is a recommendation service serving one million active users, live for several weeks and "graded on how it holds up under real load and changing environment conditions." This is the single hardest gap to close and everything else depends on it. See [cmu-17-645-ml-in-production-ai-engineering.md](research/01-course-structure/cmu-17-645-ml-in-production-ai-engineering.md).
- **No assessment design.** There is no scale, no evidence standard, no rater discipline and no verification gate. The material for building one is assembled in [research/08-assessment-epas/collected-materials.md](research/08-assessment-epas/collected-materials.md) but has not been applied.
- **No separation between durable and perishable.** Platform specifics and durable engineering principles currently sit at the same level, which means the course ages at the rate of its fastest-moving component.

## The six-strand architecture
Six interlocking strands. The claim is not that these are the only possible strands, but that each is necessary and that together they cover the outcome set.

1. **Foundations.** Transformer architecture and attention, inference economics and serving, retrieval from lexical baselines through dense and approximate methods, alignment and preference optimisation, and the planning limitations of language models. Sources in [research/02-technical-foundations/](research/02-technical-foundations/collected-materials.md).
2. **Measurement and evaluation.** Evaluation as workflow rather than benchmark, criteria discovery and drift, judge bias and its mitigations, statistical defensibility including clustering and power, generalisation testing, and evaluation governance. Sources in [research/03-measurement-evaluation/](research/03-measurement-evaluation/collected-materials.md). **This strand is the spine, not a support topic.**
3. **Architecture and operations.** System design, deployment, pipeline automation, monitoring and detectability, versioning and provenance, incident handling, and handover. Partly served by the Microsoft platform material in [research/06-microsoft-platform/](research/06-microsoft-platform/collected-materials.md).
4. **Adversary and safety.** Threat modelling for agentic systems, prompt injection and tool abuse, data governance and access control, and safety cases. Note that CMU devotes two consecutive lectures to ML security and system security and places a lab on agents and MCP directly after them.
5. **Professional formation.** Self-efficacy, error management, productive failure, psychological safety, and the empirical evidence on AI-assisted productivity and its jagged frontier. Sources in [research/04-professional-formation/](research/04-professional-formation/collected-materials.md).
6. **FDE and engagement craft.** Contextual inquiry, user interviewing, domain modelling, negotiation, change management, and the Palantir practitioner literature on the deployed-engineer role. Sources in [research/05-fde-craft/](research/05-fde-craft/collected-materials.md).

**Why six and not fewer.** Strands 1 through 4 are the technical arc and could plausibly be compressed into three. Strands 5 and 6 cannot be folded into the technical strands without disappearing, and they are exactly what the three non-technical ABET outcomes require. Keeping them structurally separate is what makes them assessable. **This is an internal design judgement.**

**Why the interlock matters.** The strands are not modules to be taught in sequence. Each milestone should recruit several strands at once, in the way CMU's fairness-security-feedback milestone recruits its safety, operations and measurement content simultaneously. A strand that is only ever exercised alone has been mis-designed.

## The assessment spine
The spine is entrustment-based, and it belongs at the centre because it is the only element that touches every strand. The design as it currently stands:

- **Two or three entrusted activities**, not twelve. Source sizing guidance is 20-40 for an entire programme, with a reported per-learner completion average of 6.6 over 2.5 years. The provisional selection is a bounded ship/no-ship evaluation decision, a system handover, and a stakeholder risk communication.
- **Output is an ordinal supervision level with expanded sub-levels**, targeting 3b or 3c at course completion. Never a percentage.
- **Mandatory narrative substantiation** with every level, because assessors reason from narrative and use scores only to confirm.
- **Multiple observers, multiple observations**, across direct observation, longitudinal observation, case-based discussion and product evaluation.
- **An entrustment-based discussion including what-if questions**, discharged as an ordinary rubric item at office hours within a bounded window rather than as a set-piece event.
- **Independent written judgements before deliberation** on any summative decision, because assessors reaching the same outcome frequently reason from incompatible premises.
- **A dispositions layer** — integrity, reliability, humility — assessed within activities rather than as activities, providing the ABET disposition evidence.
- **Coarse reporting, published reliability position**, including the 29% to over 50% rater-variance range and the roughly 80% human agreement ceiling.

Full design register at [research/08-assessment-epas/epa-research-notes.md](research/08-assessment-epas/epa-research-notes.md).

## The durable and perishable split
Durable content changes on a decade scale: attention and transformer architecture, retrieval theory and the ranking baselines, the statistics of evaluation, measurement discipline, human factors and team dynamics, negotiation and inquiry technique, threat-modelling method. Perishable content changes on a quarterly scale: specific model names and context windows, platform service names and portal paths, quota and pricing mechanics, SDK surfaces, and any benchmark leaderboard position.

The rule is that **perishable content may be used as an instance of durable content but may never be the thing assessed**. A student should be assessed on whether they can reason about inference cost under a throughput constraint, not on whether they can recall the current provisioned-throughput terminology. This has a filing consequence too: perishable material belongs in clearly marked, separately versioned artefacts so it can be replaced wholesale without disturbing the spine. **Internal design decision.**

## Structural decisions carried from the exemplar
- **Sequence against a lifecycle, not a taxonomy.** Requirements and failure planning before modelling; operations and adversarial content in the middle; responsibility content in the final third with a deliverable attached.
- **Interlock a weekly hands-on session with each concept**, tied to the technology the project needs next, credited in-session by demonstration and questioning.
- **Replace prerequisites with an anonymous ungraded diagnostic** that returns targeted readings.
- **Weight individual work at least as heavily as group work**, following CMU's 35% to 30%.
- **State the expected weekly hours and tool costs openly**, following CMU's twelve hours and $20-100 per month.
- **Attach a short mentor meeting to every milestone** so team problems surface while the term can absorb a fix.
- **Permit AI tools on produced work; prohibit them only in live conversation with staff.** This is structurally safe only because oral verification exists.

## What to remember
- The gap is the inability to certify judgement, not a shortage of material.
- Three subsidiary gaps follow: no substrate, no assessment design, no durable-perishable separation.
- Six strands; the last two cannot be folded into the technical arc without disappearing.
- Strands interlock at milestones; a strand exercised only alone is mis-designed.
- The assessment spine is central because it is the only element touching every strand.
- Two or three entrusted activities, ordinal output, narrative substantiation, multiple observers.
- Perishable content may illustrate but must never be the thing assessed.
- The substrate is the largest and hardest open question, and much of the architecture is contingent on it.

## Why it matters for the course
This is the document that turns research into a design. It is also the document that will be wrong first, because it commits to specific structures on the basis of exemplars and standards rather than on the basis of having run anything. Its value is that the commitments are explicit and traceable, so when a piece of it fails, what failed and why can be identified rather than guessed at.

## Open questions
- **Can the course produce a substrate with genuine consequences?** If not, the entrustment framing overclaims and the operations, incident and monitoring content has nothing to attach to. This is the first question to resolve.
- **How many independent assessor-occasion pairs can the staffing support per student?** Until this is known, no decision in the assessment spine can honestly be called summative rather than ad-hoc.
- **Which two or three activities are actually entrusted?** The provisional selection has not been ratified, and no activity has yet been written to the seven-part template.
- **How is oral assessment accommodated?** No source in this repository addresses it, and it cannot be left until it is needed.
- **What credit envelope does the course contribute to**, and where does it sit relative to the integrative project it must not duplicate?
- **How do the six strands map onto weeks** without either fragmenting into six parallel threads or collapsing into a technical sequence with two appendices?
- **What is the minimum viable version** if the substrate, the staffing or the assessor capacity turns out to be unavailable?

## Limits and cautions
- This is a design proposal. Implementation still requires per-strand reading sequences, assignment specifications, activity descriptions and rubrics, none of which exist.
- The six-strand division is an internal judgement with no external warrant. It is defensible against the outcome set but it is not the only defensible division.
- Structural decisions imported from CMU carry CMU's assumptions about student level, staffing and infrastructure.
- Much of the architecture is contingent on the substrate question. If that answer is no, the design needs revisiting rather than patching.
- The durable-perishable line is easy to state and hard to hold. It will need active maintenance, because perishable detail is what makes material feel current.

## Verification status
External claims carry the verification status of the notes cited: ABET criteria and proposed changes and CS2023 site pages read directly, with the CS2023 competency formula, disposition list, core-hours figures and exact knowledge-area count not verified; CMU course and offering pages read directly; ten Cate's 2018 primer and the 2018 Oudkerk Pool and Govaerts study read in full; the 29-50% rater-variance range reported second-hand by the 2013 Govaerts paper from prior literature; several measurement sources verified at abstract level only. Everything else in this document — the six-strand division, the durable-perishable rule, the interlock requirement, the gap diagnosis and the open-question set — is internal design reasoning and carries no external warrant.
