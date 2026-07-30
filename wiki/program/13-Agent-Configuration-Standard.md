# Agent Configuration Standard

> Every seminar day in this programme is executed with a **configured** agent, and the configuration is an assessed engineering artefact rather than a convenience. This page defines what that means in every course, what it is allowed to claim, and the one distinction it exists to teach. It binds every seminar day and every whitepaper, alongside the [Copilot Practice Standard](/wiki/program/12-Copilot-Practice-Standard.md).

## Why this page exists

The [Copilot Practice Standard](/wiki/program/12-Copilot-Practice-Standard.md) already asserts that **an instructions file is a specification whose conformance is checked by execution.** That assertion was made without a worked example at scale, and a programme that assesses specifications owed itself one.

It now has one. [research/06-microsoft-platform/hve-core-repository.md](/research/06-microsoft-platform/hve-core-repository.md) records a public Microsoft repository — read at a pinned commit — in which agent behaviour is authored as 80 instructions files, 68 prompts, 64 agents and 55 skills, packaged by manifest, generated into versioned plugins, and checked by its own conformance suite. **The equivalence this programme claimed in a sentence is that repository's entire architecture.**

The second reason is more important than the first, and it is why this page is a standard rather than a reading.

**That repository contains a large, sincere, well-engineered control system and no committed evidence that it works.** Graders exist; results do not. Its prose says *ship faster*, *prevents*, *proven*, and nothing in the tree establishes any of it. **This is not a criticism, and teaching it as one would waste it.** It is the cleanest available specimen of the error this entire programme is built to prevent — inferring efficacy from the existence of a process — produced by careful people, in public, at a scale no straw example could reach.

**The target this page defends across all three years: a control is not evidence, a check is not a result, and a record is not a correctness argument.**

## The five classes of conclusion

The programme's single addition to every course's vocabulary, and the object that carries the most weight in this standard. **Every conclusion a student draws about an agent-assisted system is placed in exactly one class**, from first year to final handover, and the classification is assessed wherever the artefact is.

| Class | What it is | What it licenses |
|---|---|---|
| **Configured control** | A file declares a constraint | That the constraint was *stated*. Nothing about whether it was applied |
| **Executable check** | A gate exists and can run | That non-conformance of the checked shape *can* be detected |
| **Observed result** | The check ran, on this revision, and reported | What it reported, at that revision, on that host |
| **Outcome evidence** | A measured effect on something anyone cares about | The effect, at the precision the design actually supports |
| **Unsupported inference** | Everything else | Nothing |

Two properties make this worth its cost.

**It is ordered, and the order is not one of increasing effort.** A team can spend a year producing configured controls and executable checks and reach no outcome evidence at all. **The fourth row is the expensive one and it is the one nobody reaches by working harder at the first three.**

**The fifth class is where the teaching is.** A student who classifies everything into the first four has not understood the ladder; the discipline is the willingness to write *unsupported inference* against a conclusion they believe. This is [S024](/wiki/seminars/S024.md)'s duty to say so, arriving in a register where it costs the student something.

## What the corpus supplies, and at what decay rate

Taught in this order, because the durable material must arrive before the instance that carries it — the same ordering rule [S072](/wiki/seminars/S072.md) point 9 obeys.

| Durable claim | Perishable instance carrying it |
|---|---|
| Agent behaviour is an authored artefact and is versioned, reviewed and retired like any other | The four artifact kinds, their directory names and their file counts |
| Authoring source, packaging manifest and generated output are three different things | `collections/*.collection.yml`, the generated plugin tree, the marketplace manifest |
| Phase separation with explicit return paths is a control-flow choice, not a narrative order | RPI, its five phase names, and the agent file that implements it |
| A durable record addressable by identifier buys provenance and restartability, and buys nothing about correctness | The tracking directory, and the `Pxx` / `PC-xxx` / `RV-xxx` identifier scheme |
| Execution completion and acceptance outcome are different results | The review skill's outcome vocabulary |
| Review is comparable across reviewers only if severity is normalised and depth is scaled to risk | The four review reference files and their taxonomy |
| Untrusted content is data and never authority | One instructions file, and whether the host in use actually attaches it |
| Human approval is a stop condition, not a field an agent may fill | The prohibition on an agent checking a review box |
| A gate's authority is a property of where it runs, not of what it checks | Advisory pull-request tier versus authoritative nightly tier |
| A grader tests the shape it was written to test | Regex-graded behavioural checks, and what they do not catch |
| Instrumentation of one's own tool use is a design decision with a privacy cost | Opt-in local telemetry, its redaction default, and its verbatim opt-in |

**Everything in the right-hand column is perishable in months and none of it is assessed.** The left-hand column is assessed. Where a re-verification finds a right-hand instance gone, the day is re-anchored and the left-hand claim is unchanged — and if the claim cannot survive the re-anchoring, that is a finding about the claim, per the [Durable and Perishable Register](/wiki/program/09-Durable-and-Perishable-Register.md).

## What every course takes from this

**This standard is not a Q8 topic.** Configuration is how the programme's primary instrument is operated from week one, so every course carries a share, and the share is chosen to be the part that course is already competent to assess.

### Year 1 — the artefact and the record

| Course | What it takes |
|---|---|
| CF101 Program Construction and Reasoning | An instructions file is a program's specification in executable form; conformance is observed, not asserted |
| MS101 Discrete Structures and Proof | A configured constraint is a proposition; whether it *held* is a separate proposition, and conflating them is a quantifier error |
| SY101 How Computers Compute | Source, package and generated artefact are distinct objects with distinct lifetimes; a generated file is never edited |
| PE101 Evidence, Inquiry and the Engineering Self | The five classes of conclusion, introduced here and retrieved for three years |
| CF102 Data Structures and Representation | A record addressable by stable identifier is an index; provenance is a lookup, not a proof |
| MS102 Linear Algebra for Computing | — the one course with no share; recorded as an omission rather than padded |
| SY102 Operating Systems and Resource Management | Phase gates are scheduling decisions; a return path is a state transition someone must have designed |
| PE102 Technical Communication and Contextual Inquiry | Writing for a reader who will act: an instruction that says *cite sources* and not *in the same sentence* produces detached citations |
| CF103 Algorithms, Complexity and Intractability | The path set of a workflow with return paths, bounded before it is trusted |
| MS103 Probability and Statistical Inference | A green summary over 296 checks of which 237 skipped is a denominator problem |
| SY103 Data Modelling and Database Systems | The tracking directory as a schema: what it can answer, and what it structurally cannot |
| ME101 Measurement, Error and Evidence | **Control is not evidence**, stated as the course's own material and not as a warning |

### Year 2 — the checks, and what they are worth

| Course | What it takes |
|---|---|
| CF201 Programming Languages and Type Systems | Artifact kinds as a type system: four application models, and what a category error between them costs |
| SY201 Concurrency and Distributed Systems | Advisory and authoritative gates as a consistency model over a build |
| MS201 Optimisation and Numerical Methods | Tuning a configuration against a check that measures shape optimises the check |
| PE201 Requirements, Domain Modelling and Negotiation I | The prohibition on an agent recording a human's approval, argued as an accountability requirement rather than a policy |
| IS201 Machine Learning Foundations | A behavioural check graded by pattern match is a label with a known confusion structure |
| ME201 Evaluation Design and Statistical Defensibility | A grader is not a result; a result corpus with an empty directory is the finding |
| SY202 Networks and Service Architecture | Untrusted content as data: every fetched page, tool output and issue body is input, and inputs do not issue instructions |
| SG201 Threat Modelling and Secure Design | The untrusted-content boundary as a declarative control, and enumerating who must cooperate for it to hold |
| IS202 Deep Learning and Transformer Architecture | Why a declarative boundary is not an architectural one, and what would make it architectural |
| IS203 Information Retrieval and Vector Search | Retrieved context is untrusted content; the boundary and the retrieval path are the same problem |
| ME202 Human and Model Judgement | Severity normalisation as inter-rater work, applied to review findings |
| PE202 Teams, Safety and Error Management | Execution completion versus acceptance outcome, and what a team loses when the two share a word |

### Year 3 — the system, and what may be claimed of it

| Course | What it takes |
|---|---|
| IS301 Inference Economics and Serving Systems | A phase-separated workflow's token bill, and which phase pays it |
| SY301 Production Platform Engineering | Configuration as deployed infrastructure: reviewed, versioned, pinned, rolled back |
| ME301 Evaluation in the Release Workflow | Advisory-at-PR and authoritative-at-nightly as a release-gate design, with its failure mode named |
| SG301 Data Governance and Access Control | Local telemetry: what it captures by default, what the verbatim opt-in changes, and who can read the file |
| IS302 Agentic Systems, Tools and Orchestration | RPI reconstructed from source as one inspectable orchestration, marked for model-computed branches |
| SG302 Adversarial ML and Agent Security | The untrusted-content boundary, attacked, on the host actually in use |
| ME302 Monitoring, Drift and Incident Forensics | The tracking record as forensic evidence: what it reconstructs, and what it cannot |
| PE301 Change, Stakeholders and Risk Communication | Presenting a control system to a stakeholder who will hear *evidence* unless stopped |

**MS102 has no share and the table says so.** Padding it would have made the integration look complete and made one row false, which is the trade this programme refuses everywhere else.

## What every seminar day must carry

Three additions to the [Seminar Day Design Pattern](/wiki/program/04-Seminar-Day-Design-Pattern.md), all attaching to phases that already exist. They are deliberately cheaper than the Copilot Practice Standard's six, because a day that must satisfy nine additional requirements satisfies none of them well.

**1. The day's configuration is stated in the header block, or the day declares that it runs unconfigured.** Which instructions, prompt and skill artefacts were loaded is a property of the instrument, and [S029](/wiki/seminars/S029.md)'s rule — an unvalidated instrument is not an instrument — does not except the configuration.

**2. Every phase 5 artefact classifies its own conclusions into the five classes.** This attaches to the prompt record, the intervention record and the frontier statement already required, and adds no new artefact. **A conclusion in no class fails.** An artefact whose classes are all *observed result* or better, with nothing in the fifth class, is returned once with the question *what did you conclude that you cannot support?*

**3. Where a day uses the corpus, it pins the revision.** Commit, package version, host, model, enabled collections, date, and any known failing check. A result observed against an unpinned repository is an anecdote about an unknown object.

## The reproducibility manifest

Recorded once per offering, and carried into any day that touches the corpus. It is short because a long manifest is not completed.

```text
repository:          microsoft/hve-core
commit:              <sha>
package_version:     <version>
host / client:       <the thing that loads the artefacts>
model:               <the thing that complies, or does not>
enabled_collections: <what was actually loaded>
evaluation_lanes:    <which were run, and at which tier>
date:                <when>
known_failures:      <what was red, including in the vendor's own pipeline>
```

**The `host` and `model` lines are the ones students omit and the ones that invalidate the record.** Every artefact in the corpus is inert without a host that loads it and a model that complies, and the repository's own transparency note says so. **An observation about configured-agent behaviour is an observation about a triple**, not about a repository.

**The `known_failures` line is a design decision.** At the revision this programme read, one job in the vendor's own release pipeline was failing, 237 of 296 checks were skipped, and the summary still read as broadly green. Students record the red, because a manifest that only records success is the same instrument as a grader with no result corpus.

## What this programme does not claim

Stated here so that no seminar day has to hedge, and binding exactly as the [Durable and Perishable Register](/wiki/program/09-Durable-and-Perishable-Register.md)'s prohibitions bind.

- **Not that a configured agent produces better work than an unconfigured one.** No comparison is published in the corpus, none is published anywhere this repository has read, and the programme asserts no direction.
- **Not that the untrusted-content boundary prevents prompt injection.** It is a declarative control whose effect depends on the host and the model. [S076](/wiki/seminars/S076.md) tests it; whatever it finds is a result about one triple on one day.
- **Not that phase separation improves outcomes.** It bounds a path set and produces a record. Both are architecture claims and neither is an outcome claim.
- **Not that a durable tracking record makes decisions correct.** It makes them findable.
- **Not any productivity, quality, defect-rate, safety or time-to-delivery figure**, from this corpus or about it. **No effect size is asserted**, per the standing rule, which applies to a vendor repository exactly as it applies to research literature.
- **Not that any of this transfers to another vendor's configuration model unchanged.** The four artifact kinds are one product's decision. The durable claim is that agent behaviour must be authored and versioned, and that claim has been tested against exactly one implementation.

## The honest weakness in this standard

**The programme is teaching an audit discipline using an artefact it has never audited under conditions a student will face.** The corpus was read, at one commit, by machine. Nobody in this design has run a task through it on a host, watched the boundary hold or fail, or observed what an intervention record looks like when the agent is carrying 80 instructions files instead of none.

Three specific exposures follow, and they are recorded rather than mitigated.

- **The five classes of conclusion have never been applied by a student.** They are this design's own construction, `method` namespace, no external warrant. It is entirely possible that first-year students place everything in class one and that the distinction between *executable check* and *observed result* is invisible without the experience of having been misled by a green summary.
- **The corpus may be too large to be a teaching object.** 3,098 files is not a reading; it is a codebase. Selection is required, selection is staff judgement, and a selection chosen to demonstrate the control-is-not-evidence point will demonstrate it.
- **The programme's own position is structurally similar to the corpus's.** This repository has 520 predictions with named instruments and no measurements, and [WP-090](/wiki/whitepapers/WP-090.md) §8 concedes fewer than one in ten will ever be measured. **A programme that teaches students to distrust an unmeasured control system is itself an unmeasured control system**, and the correct response is to say so in the room rather than to hope nobody notices. It is [S088](/wiki/seminars/S088.md)'s material arriving early, and it is the strongest argument available for why the discipline is worth having.

## Rule interaction

- **Instrumentation rule 3** (a day must state how its own evidence was sampled) binds every observation drawn from the corpus. One commit on one host with one model is a sample of one, and the manifest is the disclosure.
- **Instrumentation rule 7** (a claim the design finds obvious is staged like any other) binds the five classes. *Control is not evidence* reads as obvious and is violated constantly; it is staged, retrieved and assessed rather than announced.
- **Instrumentation rule 9** (an instrument must name the party who will read its result) binds the reproducibility manifest. Its reader is the next offering's verification pass.
- **The scope rule, strong form**, binds every claim taken from the corpus. The unsafe condition is *any revision other than the pinned one, and any host or model other than the one in front of you*.
- **Specification rules 1 and 2** apply to configuration artefacts exactly as to written specifications, per the [Copilot Practice Standard](/wiki/program/12-Copilot-Practice-Standard.md). An instructions file that states what it cannot check produces work that appears to conform.

## Related pages

- [Copilot Practice Standard](/wiki/program/12-Copilot-Practice-Standard.md)
- [FDE Delivery Standard](/wiki/program/14-FDE-Delivery-Standard.md) — principle 6 is this standard's human-approval rule, reached independently by a second source, and its phase 7 is this RPI loop at engagement scale
- [Microsoft AI Platform Map](/wiki/program/11-Microsoft-AI-Platform-Map.md)
- [Durable and Perishable Register](/wiki/program/09-Durable-and-Perishable-Register.md)
- [Seminar Day Design Pattern](/wiki/program/04-Seminar-Day-Design-Pattern.md)
- [Assessment Architecture](/wiki/program/03-Assessment-Architecture.md)
- [Course Catalogue](/wiki/program/06-Course-Catalogue.md)
- [research/06-microsoft-platform/hve-core-repository.md](/research/06-microsoft-platform/hve-core-repository.md)
