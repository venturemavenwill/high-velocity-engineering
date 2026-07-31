# Programme Charter

> Programme-level design document. It states what the programme is for, what it commits to, and what it deliberately refuses. Everything downstream — the [course catalogue](/archive/bsc-programme/program/06-Course-Catalogue.md), the [module map](/archive/bsc-programme/program/07-Module-Map.md), the ninety seminar days and their whitepapers — is accountable to this page.

## Award and shape

**BSc (Hons) Computer Science — Applied AI Systems and Forward-Deployed Engineering.**

- **Duration:** three calendar years, year-round.
- **Structure:** nine quarters of ten teaching weeks each, plus a two-week inter-quarter interval used for consolidation, spaced retrieval and assessment, not for new content.
- **Load:** four courses per quarter at five quarter-units each — twenty units per quarter, 180 units across the programme, equivalent to 120 semester credits.
- **Spine:** one six-hour integrative **seminar day** per teaching week, ninety in total. The seminar day is not a lecture slot. It is where the four concurrent courses interlock and where nearly all assessment evidence is generated.
- **Toolchain:** **GitHub Copilot in agent mode**, used on every day from the first week, with three standing MCP servers — **Microsoft Learn** for documentation grounding, **Azure** for resource operations, **Foundry** for model, agent and evaluation operations — and a repository whose custom instructions and prompt files are this programme's specifications in executable form. See the [Copilot Practice Standard](/archive/bsc-programme/program/12-Copilot-Practice-Standard.md). **The configuration itself is an assessed artefact and carries its own standard**, including the programme-wide requirement that every conclusion drawn about an agent-assisted system is classified as a configured control, an executable check, an observed result, outcome evidence, or an unsupported inference. See the [Agent Configuration Standard](/archive/bsc-programme/program/13-Agent-Configuration-Standard.md).
- **Platform:** every course is taught against at least one named service in the **Microsoft AI Platform**, and every seminar day is executed against one. The mapping is the [Microsoft AI Platform Map](/archive/bsc-programme/program/11-Microsoft-AI-Platform-Map.md).
- **Substrate:** a single production system with real external users, operated continuously by the student cohort for the whole three years, deployed on that platform. See [Substrate and Infrastructure](/archive/bsc-programme/program/10-Substrate-and-Infrastructure.md).

## What a graduate can build

**A graduate of this programme can architect and ship a working AI system on the Microsoft AI Platform — of any design, at any layer — principally by prompting GitHub Copilot, and can say what the result does badly.**

Both halves are load-bearing and the second is the harder one, for the reason the whole programme exists: a student who can produce a working system and cannot state its failure modes has learned to operate a tool and not to engineer. Concretely, and each of these is built by a named cohort on a named service rather than described:

- a retrieval system on **Azure AI Search** whose authorisation is enforced per document at query time, and an account of what a stale permission does to it;
- an **API Management AI gateway** that meters tokens per consumer, load-balances across model backends and breaks the circuit on a failing one;
- a **Foundry** model deployment sized against a stated request shape, with the argument for standard against provisioned throughput and the cost consequence of each;
- a multi-agent system on the **Microsoft Agent Framework** connected to tools over **MCP**, together with the argument that a single agent would have been better;
- an evaluation gate running **Foundry cloud evaluation** in the substrate's continuous integration, with a written statement of what its scores do not license;
- the **Bicep** that declares all of it, authored in agent mode and reviewed as an artefact.

The claim this charter does **not** make is that any of that is fast, or that prompting removes the need to understand the system. The programme's own assessment record is the evidence against both readings: every entrustment judgement turns on stating what a system does badly, which is a claim no agent can make on the student's behalf, because it requires knowing what the user will do with the answer.

## The problem this programme exists to solve

Computer science graduates entering roles that involve deploying intelligent systems into other people's organisations fail, when they fail, on judgement rather than on knowledge. They can implement, and cannot decide. They can measure, and cannot say what the measurement licenses. They can build a system that works in a demonstration, and cannot say what will happen to it in eleven months when the data has drifted, the vendor has renamed the service, and the person who commissioned it has left.

The diagnosis is inherited directly from this repository's architecture work: the binding constraint is **the inability to certify judgement**, not a shortage of material. See [research/01-course-structure/10-gap-analysis-and-course-architecture.md](/research/01-course-structure/10-gap-analysis-and-course-architecture.md). A curriculum that responds to this by adding content makes the problem worse, because it consumes the hours in which judgement could have been exercised and observed.

The second problem is retention. A three-year programme that teaches well and is forgotten has not taught. The empirical position taken here is that retention is a **design variable, not an outcome** — it is determined by how practice is scheduled, how difficulty is placed, and how often knowledge is retrieved rather than reviewed. That position, and the evidence for it, is set out in [Learning Science Foundations](/archive/bsc-programme/program/02-Learning-Science-Foundations.md) and defended day by day in the whitepapers.

## Seven commitments

**1. Every teaching hour has a stated instructional warrant.**
No seminar phase exists because it is conventional. Each of the eight phases in the [Seminar Day Design Pattern](/archive/bsc-programme/program/04-Seminar-Day-Design-Pattern.md) is justified against a named effect with a named literature, and each day's whitepaper restates that warrant for its specific content. Where the warrant is weak, the whitepaper says so.

**2. Difficulty is placed deliberately, not minimised.**
The programme is built on the desirable-difficulties position: conditions that slow acquisition and depress in-session performance frequently improve retention and transfer. Students will routinely be asked to attempt problems before instruction, to retrieve rather than review, and to practise under interleaved and variable conditions. This is stated openly to students in the first week, because the design depends on students not interpreting difficulty as a failure of teaching.

**3. Retrieval is cumulative and programme-wide.**
The spacing schedule does not reset at quarter boundaries. Seminar day S061 may retrieve material first encountered at S007. This is the reason seminar days are numbered continuously and the reason the [Seminar Day Index](/archive/bsc-programme/program/08-Seminar-Day-Index.md) records a retrieval set for each day.

**4. Assessment certifies entrustment, not accumulation.**
The output of summative assessment is an ordinal supervision level with mandatory narrative substantiation, produced by multiple observers across multiple occasions, and verified orally. Percentages are not used. See [Assessment Architecture](/archive/bsc-programme/program/03-Assessment-Architecture.md).

**5. Perishable content may illustrate but is never assessed.**
A student is assessed on whether they can reason about inference cost under a throughput constraint, never on whether they can recall a current product name or portal path. The line is maintained explicitly in the [Durable and Perishable Register](/archive/bsc-programme/program/09-Durable-and-Perishable-Register.md).

**6. AI tools are permitted on produced work and prohibited in live conversation with staff.**
This is structurally safe only because oral verification exists at every milestone. The policy is imported from the CMU exemplar, where it is paired with the same safeguard. See [research/01-course-structure/cmu-17-645-ml-in-production-ai-engineering.md](/research/01-course-structure/cmu-17-645-ml-in-production-ai-engineering.md).

**Amended when the toolchain was adopted.** On produced work the agent is no longer merely permitted but **required**, because it is the instrument through which the platform is operated and an instrument cannot be characterised by a student who is not using it. The prohibition in live conversation is unchanged and is now doing more work than it was. Against the dependency risk this creates, the design carries one structural measure and no exhortation: **at [S010](/archive/bsc-programme/seminars/S010.md), [S045](/archive/bsc-programme/seminars/S045.md) and [S090](/archive/bsc-programme/seminars/S090.md) a bounded portion of the assessed work is performed without agent assistance**, and the comparison between the assisted and unassisted work is reported to the student and to the programme. It does not award a level. Whether three occasions is enough is unknown and is recorded as unknown in the [Copilot Practice Standard](/archive/bsc-programme/program/12-Copilot-Practice-Standard.md).

**7. The programme instruments itself.**
Each whitepaper closes with falsifiable predictions and the measurement that would test them. A design that cannot be wrong cannot be improved. Programme-level instrumentation is described in [Assessment Architecture](/archive/bsc-programme/program/03-Assessment-Architecture.md).

## What the programme refuses

- **It refuses to be a survey.** Coverage is sacrificed for depth wherever the two conflict. Several standard topics appear only as they arise in service of the substrate.
- **It refuses vendor certification framing.** Platform material is taught as an instance of a durable problem. No seminar day teaches a portal. **This refusal was narrowed when the platform anchors were adopted and the narrowing is stated rather than absorbed.** The programme now teaches one vendor's platform in depth, on every day, from the first week. What it still refuses is the certification shape — a syllabus organised by product surface, an assessment that rewards recall of a service name, a graduate whose credential expires when a page is rewritten. The durable claim is what is assessed and the service is the vehicle, enforced by the [Durable and Perishable Register](/archive/bsc-programme/program/09-Durable-and-Perishable-Register.md). Whether that distinction survives three years of daily contact with one platform is the largest open question in the design and is listed below as one.
- **It refuses to grade on percentages.** There is no partial credit and no numeric course mark. Specification grading and entrustment levels replace them.
- **It refuses simulated consequence.** If the substrate cannot carry real users with real stakes, the operations, incident and monitoring content is withdrawn rather than faked. This is the largest single risk to the design and is named as such in [Substrate and Infrastructure](/archive/bsc-programme/program/10-Substrate-and-Infrastructure.md).
- **It refuses to hide its own uncertainty.** Where the evidence for a design choice is thin, contested or absent, the whitepaper says so and states what would settle it.

## Admissions and entry state

No formal prerequisites beyond secondary mathematics. An anonymous, ungraded diagnostic in week zero returns targeted readings rather than a gate — a structural decision imported from the CMU exemplar and adopted because prerequisite gating suppresses the enrolment of exactly the students whose self-efficacy the programme is designed to build. See [research/04-professional-formation/bandura-self-efficacy.md](/research/04-professional-formation/bandura-self-efficacy.md).

Entry state is assumed to be: fluent in one language informally, no formal data structures, no calculus beyond secondary level, no professional experience. Each seminar day's whitepaper states its own entry assumptions explicitly in §2, so that a mis-sequenced prerequisite is a detectable error rather than a silent one.

## Workload and cost transparency

Stated openly to applicants, following the exemplar's practice:

- **Twelve to fifteen hours per week per quarter outside the seminar day**, distributed across four courses and the substrate rota.
- **A six-hour seminar day** every teaching week, non-negotiable and non-recorded, because the phases that generate assessment evidence cannot be reconstructed from a recording.
- **Tool costs.** Students should expect to spend on AI tooling at a level comparable to a traditional textbook budget. The exemplar publishes a figure of $20–100 per month; this programme publishes the same range and reviews it each year. **The tooling is required rather than optional**, since the agent is the instrument through which the platform is operated, and the institution therefore treats non-affordability as an access obligation on itself rather than as a student's problem. Platform consumption for coursework is carried on the substrate's budget under the ceiling described in [Substrate and Infrastructure](/archive/bsc-programme/program/10-Substrate-and-Infrastructure.md) and is not billed to students.
- **A substrate on-call rota** in years two and three, bounded and scheduled, never overnight, and always with a staff escalation path.

## Governance of this design

- The design is a proposal, not a settled plan. It commits to specific structures on the basis of exemplars, standards and literature, not on the basis of having run anything.
- Each whitepaper's §9 states what would falsify its design claim. Where a cohort's data contradicts a prediction, the seminar day is redesigned and the whitepaper amended with the contradicting evidence retained, not deleted.
- The [Durable and Perishable Register](/archive/bsc-programme/program/09-Durable-and-Perishable-Register.md) is reviewed before every offering. Perishable citations are re-verified; durable content is not disturbed.

## Open questions carried from the architecture work

These are unresolved and are not hidden by this charter.

- **Can the substrate carry genuine consequence?** If not, the entrustment framing overclaims and a substantial fraction of years two and three needs redesign rather than patching.
- **How many independent assessor-occasion pairs can staffing support per student?** Until this is known, no assessment decision here can honestly be called summative.
- **Which activities are actually entrusted?** A provisional set of three is proposed in [Assessment Architecture](/archive/bsc-programme/program/03-Assessment-Architecture.md); none has been ratified.
- **How is oral assessment accommodated at cohort scale?** No source in this repository addresses it.
- **What is the minimum viable version** if the substrate, the staffing or the assessor capacity proves unavailable?
- **Does three years of formation on one platform produce transferable understanding or product familiarity?** The design's answer is that the four layers of the platform, their habit of failing invisibly upward, and the discipline of characterising your own instruments are platform-independent — but that answer is asserted, not demonstrated. It is carried in full on the [Microsoft AI Platform Map](/archive/bsc-programme/program/11-Microsoft-AI-Platform-Map.md) and is repeated here because a charter that omitted it would be hiding the cost of its own correction.
- **Can a student who has only ever built with an agent build without one?** The programme cannot currently detect this. The three unassisted occasions make the trajectory visible; they do not establish that the capability is intact.

## Related pages

- [Outcomes and Accreditation Map](/archive/bsc-programme/program/01-Outcomes-and-Accreditation-Map.md)
- [Learning Science Foundations](/archive/bsc-programme/program/02-Learning-Science-Foundations.md)
- [Assessment Architecture](/archive/bsc-programme/program/03-Assessment-Architecture.md)
- [Course Catalogue](/archive/bsc-programme/program/06-Course-Catalogue.md)
- [Microsoft AI Platform Map](/archive/bsc-programme/program/11-Microsoft-AI-Platform-Map.md)
- [Copilot Practice Standard](/archive/bsc-programme/program/12-Copilot-Practice-Standard.md)
- [FDE Delivery Standard](/archive/bsc-programme/program/14-FDE-Delivery-Standard.md)
