# Module Map

> Eighteen modules, two per quarter, five seminar days each. Ninety seminar days in total. A module is not a course — it is the unit in which the four concurrent courses of a quarter interlock, and it is the unit at which complexity class advances. **Each module also carries a platform anchor**, derived from its quarter's course anchors by the rule stated below the table.

## Why modules and courses are different objects

Courses are the credit-bearing, accreditation-legible units. Modules are the pedagogical units. They are deliberately not the same, because a strand exercised only alone has been mis-designed: each module recruits several strands simultaneously, in the way a real deployment recruits them.

The mapping is many-to-many. `M09 Learning From Data` draws on IS201, MS201, ME201 and SG201 at once. This is intentional and is the mechanism by which interleaving operates at curriculum scale.

---

## The eighteen modules

| # | Module | Quarter | Days | Class | Strands recruited | Platform anchor |
|---|---|---|---|---|---|---|
| [M01](wiki/modules/M01.md) | The Machine and the Proof | Q1 | S001–S005 | 1 | CF MS SY PE | GitHub Copilot agent mode; Learn MCP Server |
| [M02](wiki/modules/M02.md) | Constructing Correct Programs | Q1 | S006–S010 | 1 | CF MS PE | Custom instructions as executable specification; Copilot as a proof-checking adversary |
| [M03](wiki/modules/M03.md) | Representing Structure | Q2 | S011–S015 | 1 | CF MS SY | Foundry embedding models; Copilot-generated implementations against a cost model stated first |
| [M04](wiki/modules/M04.md) | Managing Memory, Time and Contention | Q2 | S016–S020 | 2 | SY CF MS PE | Azure MCP Server (read); Azure compute and memory limits as the instance of contention |
| [M05](wiki/modules/M05.md) | Algorithmic Thinking Under Constraint | Q3 | S021–S025 | 2 | CF MS SY | Copilot's frontier, located empirically; Azure AI Search index schema |
| [M06](wiki/modules/M06.md) | Evidence, Error and Measurement | Q3 | S026–S030 | 2 | ME MS SY PE | Foundry evaluators; Foundry evaluation score distributions |
| [M07](wiki/modules/M07.md) | Correctness at Scale | Q4 | S031–S035 | 3 | SY CF MS | API Management load balancing, circuit breaking, partial failure; MCP tool definitions as an interface contract |
| [M08](wiki/modules/M08.md) | Understanding the Problem Before the Solution | Q4 | S036–S040 | 3 | PE CF SY | Substrate stakeholder work; quota negotiation as a real constraint |
| [M09](wiki/modules/M09.md) | Learning From Data | Q5 | S041–S045 | 3 | IS MS ME SG | Foundry model catalogue, deployment and the fine-tuning path; Defender AI posture |
| [M10](wiki/modules/M10.md) | Evaluating What Was Learned | Q5 | S046–S050 | 4 | ME IS MS SG | Foundry cloud evaluation; the conversation split decision |
| [M11](wiki/modules/M11.md) | Language, Attention and Representation | Q6 | S051–S055 | 4 | IS MS ME | Foundry model catalogue across families; deployment as an architectural choice |
| [M12](wiki/modules/M12.md) | Finding the Right Thing | Q6 | S056–S060 | 4 | IS ME SY PE | Azure AI Search vector and hybrid retrieval; semantic ranking; the chunking trap |
| [M13](wiki/modules/M13.md) | The Economics of Inference | Q7 | S061–S065 | 5 | IS SY ME | Provisioned throughput; **quota is not capacity**; spillover; hourly billing |
| [M14](wiki/modules/M14.md) | Releasing Responsibly | Q7 | S066–S070 | 5 | ME SY SG PE | Foundry cloud evaluation in CI; AI Search document-level ACLs; Purview DSPM for AI |
| [M15](wiki/modules/M15.md) | Agents That Act | Q8 | S071–S075 | 5 | IS SG ME SY | Microsoft Agent Framework; Foundry Agent Service; MCP |
| [M16](wiki/modules/M16.md) | The Adversary and the Accident | Q8 | S076–S080 | 6 | SG ME PE IS | Prompt injection against a real agent; Foundry observability and tracing; Defender AI alerts |
| [M17](wiki/modules/M17.md) | Deployment as Engagement | Q9 | S081–S085 | 6 | PE all | The whole stack, handed over |
| [M18](wiki/modules/M18.md) | Entrustment and Handover | Q9 | S086–S090 | 6 | all | The whole stack, handed over |

### How the module anchors were derived

The [Microsoft AI Platform Map](wiki/program/11-Microsoft-AI-Platform-Map.md) assigns anchors to courses and to quarters, not to modules, because modules are not credit-bearing and the map is written for the reader who is auditing the curriculum. **A module's anchor is therefore the subset of its quarter's course anchors belonging to the courses that module actually recruits.** Nothing above is invented, and where this page and the map disagree the map is correct.

Two consequences of the derivation rule are worth stating rather than letting a reader discover them.

**Modules that share a quarter do not share an anchor.** M05 and M06 both sit in Q3 and recruit different subsets of it, which is why one is anchored on Copilot's frontier and an index schema and the other on Foundry's evaluators. That is the intended behaviour: the anchor follows the strands, and the strands are what make a module a module.

**M14's anchor is short by one strand, and the reason is a known defect.** M14 recruits PE and Q7 has no PE course, so the derivation has nothing to draw from and the module's professional-formation content has no platform anchor. This is the same misalignment recorded against [WP-069](wiki/whitepapers/WP-069.md) §8 in the [Whitepaper Standard](wiki/program/05-Whitepaper-Standard.md)'s compliance register, where it stands as **Recorded** on the ground that repairing it requires a Course Catalogue change. The platform anchors did not create the defect and do not repair it; they make it visible in a second place, which is the only thing being claimed here.

---

## Module descriptions

### Year 1

**M01 · The Machine and the Proof.** Establishes the two habits the rest of the programme depends on: reasoning about behaviour before executing, and treating a claim as something that requires warrant. Students build a small machine simulator and simultaneously learn to prove properties of the programs it runs. The module also carries the programme's own design rationale — students are taught the learning science that governs their timetable, because compliance with an aversive-feeling design requires holding the model.

**M02 · Constructing Correct Programs.** Invariants, decomposition, recursion, and testing as hypothesis. The first module in which students are wrong in public on purpose, and the first in which the error clinic runs at full strength.

**M03 · Representing Structure.** Data structures taught as a decision problem rather than a catalogue. The organising question is never "what is a hash table" but "what does this representation make cheap, and what does it make expensive, and which of those does the caller care about?"

**M04 · Managing Memory, Time and Contention.** Complexity class rises to 2: the student now chooses the method. Operating-system resource management is taught here specifically so that inference economics in M13 can be recognised as the same problem with different units.

### Year 2 entry

**M05 · Algorithmic Thinking Under Constraint.** Design paradigms, hardness, and the professional skill of recognising when an exact answer is not available and saying so. Reductions are taught as an argumentative move, not a formalism.

**M06 · Evidence, Error and Measurement.** The spine begins. Construct validity, instrument design, error decomposition, intervals. This module contains the programme's first genuine confrontation with the difference between a number and a result, and it is placed in year one deliberately, before students have anything they are invested in measuring.

**M07 · Correctness at Scale.** Concurrency, partial failure, consistency. Complexity class 3: the student now chooses both method and success criterion. The first module in which a correct-looking system is demonstrably wrong under conditions the student must themselves construct.

**M08 · Understanding the Problem Before the Solution.** Contextual inquiry, interviewing, domain modelling, ubiquitous language. Students conduct real interviews with real substrate users. The module's central difficulty is affective rather than cognitive: engineers find it hard to remain in the problem.

### Year 2 core

**M09 · Learning From Data.** Generalisation, model selection, regularisation, and the threat model of a learned component. Security is recruited from the start so that adversarial thinking is not a later addition.

**M10 · Evaluating What Was Learned.** Complexity class 4: the student now formulates the problem from an ambiguous brief. Criteria discovery and drift, judge bias, statistical defensibility, and the discipline of stating what a measurement does not license.

**M11 · Language, Attention and Representation.** Transformer architecture built up from the linear algebra of M03 and the optimisation of M07's quarter. Alignment and preference optimisation. Documented planning limitations are taught as a result, not as a caveat.

**M12 · Finding the Right Thing.** Retrieval from lexical baselines through dense methods and approximate structures, with zero-shot generalisation testing as the organising evidence. Ends with the first full-stack retrieval system the cohort owns in production.

### Year 3

**M13 · The Economics of Inference.** Complexity class 5: the student now decides whether to proceed at all, under cost and uncertainty. Serving, batching, memory management, capacity as commitment, and the distinction between an allocation policy and available capacity.

**M14 · Releasing Responsibly.** Regression evaluation as a gate, offline-online divergence, monitoring design, and governance of the release decision. The module in which the ship/no-ship entrustment activity is first rehearsed.

**M15 · Agents That Act.** Orchestration, tool invocation, protocol-mediated interoperability, and the four-way decomposition of tool failure. The module's central lesson is that two of the four failure classes produce systems that report success and are wrong.

**M16 · The Adversary and the Accident.** Complexity class 6. Adversarial machine learning, agent-specific attack classes, incident forensics, and blameless review. Deliberate distinction between attack and accident, and the observation that the detection problem is frequently the same.

**M17 · Deployment as Engagement.** The forward-deployed engagement in full: inquiry, modelling, negotiation, change management, risk communication to non-technical decision-makers. Drawn from [research/05-fde-craft/](research/05-fde-craft/collected-materials.md).

**M18 · Entrustment and Handover.** What transfers, to whom, with what warranty. The safety case. The residual risk statement. The final entrustment occasions and the oral defences that discharge them.

---

## Complexity class progression

| Class | Student decides | Modules | Seminar days |
|---|---|---|---|
| 1 | Nothing; task specified, method given | M01–M03 | S001–S015 |
| 2 | Method, given a specified task | M04–M06 | S016–S030 |
| 3 | Method and success criterion | M07–M09 | S031–S045 |
| 4 | Problem formulation, from an ambiguous brief | M10–M12 | S046–S060 |
| 5 | Whether to proceed at all, under uncertainty and cost | M13–M15 | S061–S075 |
| 6 | What to hand over, to whom, with what warranty | M16–M18 | S076–S090 |

The progression is the four-component design's task-class sequence. Within each class, the five days of each module vary systematically in surface structure while holding the class constant — variability of practice at module scale.

## Strand interlock density

Count of modules recruiting each strand:

| Strand | Modules | First appearance | Last |
|---|---|---|---|
| CF | 8 | M01 | M18 |
| MS | 9 | M01 | M18 |
| SY | 10 | M01 | M18 |
| ME | 10 | M06 | M18 |
| PE | 9 | M01 | M18 |
| IS | 8 | M09 | M18 |
| SG | 6 | M09 | M18 |

**Reading of this table.** Systems and measurement are the highest-density strands, which is the intended signature of a programme about production judgement rather than about model building. Intelligent systems enters late and is never the sole strand of a module — a deliberate refusal of the survey-of-AI shape. Security's six-module count is the design's thinnest area and is a known weakness: it is defensible only because SG is recruited in every module of year three.

## Related pages

- [Course Catalogue](wiki/program/06-Course-Catalogue.md)
- [Seminar Day Index](wiki/program/08-Seminar-Day-Index.md)
- [Seminar Day Design Pattern](wiki/program/04-Seminar-Day-Design-Pattern.md)
- [Microsoft AI Platform Map](wiki/program/11-Microsoft-AI-Platform-Map.md)
