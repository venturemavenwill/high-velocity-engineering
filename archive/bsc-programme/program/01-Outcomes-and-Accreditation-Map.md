# Outcomes and Accreditation Map

> What the programme claims a graduate can do, and where each claim is *evidenced* rather than merely covered. Coverage is the weak claim and is easy; evidence is the strong claim and is the only one this page makes.

## The distinction this page enforces

A curriculum map that shows an outcome "covered" in eleven courses has told you nothing. The question an external reviewer should ask is: **point me at the artefact and the assessor judgement that would let me disagree with you.** Every row below names one.

Where no such artefact exists, the row says so.

---

## Programme outcomes

Aligned to the five baccalaureate student outcomes of the ABET Computing Accreditation Commission's Criterion 3, plus the sixth outcome supplied by the Computer Science Program Criteria.

**PO1 · Analyse a complex computing problem and apply principles of computing and other relevant disciplines to identify solutions.**

**PO2 · Design, implement and evaluate a computing-based solution to meet a given set of computing requirements in the context of the programme's discipline.**

**PO3 · Communicate effectively in a variety of professional contexts.**

**PO4 · Recognise professional responsibilities and make informed judgements in computing practice based on legal and ethical principles.**

**PO5 · Function effectively as a member or leader of a team engaged in activities appropriate to the programme's discipline.**

**PO6 · Apply computer science theory and software development fundamentals to produce computing-based solutions.**

To these the programme adds one outcome of its own, which the criteria do not require and which is the reason the programme exists:

**PO7 · Decide, under uncertainty and cost, whether a system is fit to be released, and defend that decision to those who bear its consequences.**

---

## Where each outcome is evidenced

| Outcome | Principal evidence | Assessor judgement | Secondary evidence |
|---|---|---|---|
| PO1 | S035 breaking a working system; CF103 hardness portfolio | Product evaluation, two assessors | S024, S058 |
| PO2 | CAP390 capstone artefact on the live substrate | Longitudinal, three assessors | S060, S070 |
| PO3 | EA-3 risk communication to a non-technical decision-maker | Direct observation, three assessors | S083, S037 |
| PO4 | SG390 safety case and responsible disclosure | Case-based discussion | S087, S088, dispositions record |
| PO5 | Substrate on-call rota and incident record | Longitudinal, peer plus staff | S080, PE202 |
| PO6 | CF201, MS101, IS202 assembled-from-primitives artefacts | Product evaluation | S053, S005 |
| PO7 | EA-1 ship / no-ship decision, four occasions | Entrustment-based discussion | S050, S065, S070 |

**Reading of the table.** PO3, PO5 and PO7 are evidenced by observed behaviour rather than by artefacts, which is why the [Assessment Architecture](/archive/bsc-programme/program/03-Assessment-Architecture.md) invests so heavily in narrative discipline. PO1 and PO6 are evidenced by artefacts, which is why the tool policy requires oral defence.

---

## The build capability, mapped to the outcomes

The programme claims that a graduate can architect and ship a working AI system on the Microsoft AI Platform, of any design and at any layer, principally by prompting GitHub Copilot, and can say what the result does badly. That is a capability claim and it has to be evidenced against the outcomes rather than added beside them. This table states what the platform work contributes to each outcome and where the contribution is checkable. It does not replace the table above; it says which artefact in that table now carries a platform dimension.

| Outcome | What building on the platform contributes | Where it is checkable |
|---|---|---|
| PO1 | The four-layer analysis — capacity, traffic, retrieval, governance — and the specific observation that **each layer fails in a way the layer above cannot detect**. A student who diagnoses a retrieval fault as a model fault has not analysed the problem, and on this platform that mistake is available to be made rather than described | S064 quota-against-capacity argument; S078 stale-permission diagnosis; SG301, IS301 artefacts |
| PO2 | The whole of it. Every phase 5 produces a build against a named service, and the specification requires the design, the implementation and the evaluation together | Every seminar day's phase 5 artefact; CAP390 |
| PO3 | The **prompt record** and the **intervention record** are technical writing whose reader acts on it immediately, and the instructions file is the same discipline with a machine as the reader. Non-conformance is visible rather than arguable | Phase 5 artefacts from S006 onward; EA-3 |
| PO4 | The judgement calls the platform forces and does not answer: shipping on a judge evaluator whose agreement with human judgement is unpublished; choosing a preview access-control mechanism over a generally available one the documentation itself calls a workaround; disclosing to substrate users what is being run on them | SG390 safety case; S078; the dispositions record |
| PO5 | The agent is a team member with an uneven and unannounced frontier, and error management is practised on its output as well as on the student's own | PE202; phase 6 agent-failure case; substrate rota |
| PO6 | Primitives assembled rather than invoked: an MCP tool schema written as an interface contract, an embedding similarity computed from the vector rather than from a library's convenience method, a gateway policy authored rather than clicked | CF201 MCP server; MS102 similarity tool; SY301 Bicep |
| PO7 | The refusals. Quota that is not capacity, a monthly ceiling that binds, and a provisioned deployment that bills hourly whether or not it is used, are the conditions under which a release decision stops being rhetorical | EA-1 across four occasions; ME390; S065 |

**What this table does not claim.** It does not claim that the platform work evidences any outcome on its own. Every row names an occasion already in the evidence table above, because an outcome evidenced only by a build on one vendor's stack would be evidenced by exactly the thing this programme says it refuses to certify.

## The concession about single-platform formation

This is warranted and is stated at its strongest rather than managed.

**A graduate of this programme will have done substantially all of their practical formation on one vendor's platform, and the programme cannot demonstrate that what they learned transfers off it.** The design's answer is that the durable content is platform-independent — the four layers and their habit of failing invisibly upward, the discipline of characterising an instrument before trusting it, the distinction between a default and a decision — and that the service is the vehicle rather than the cargo. The [Durable and Perishable Register](/archive/bsc-programme/program/09-Durable-and-Perishable-Register.md) is the mechanism that keeps the vehicle out of the assessment.

That answer is asserted. No evidence in this repository supports it, no comparable programme has published a transfer study, and the design has no instrument that would detect the failure. A student who can build a retrieval system with document-level authorisation on Azure AI Search and cannot recognise the same problem when it appears as row-level security in an unfamiliar system would falsify the claim, and nothing in the assessment architecture would notice.

The concession is recorded here rather than only on the [Microsoft AI Platform Map](/archive/bsc-programme/program/11-Microsoft-AI-Platform-Map.md) because this is the page an external reviewer reads, and a reviewer entitled to ask *point me at the artefact that would let me disagree with you* is entitled to be told when there is not one.

---

## Curriculum requirements

The Criterion 5 requirements the programme must satisfy, and how.

| Requirement | Programme position |
|---|---|
| At least 30 semester credit hours of up-to-date computing topics | 120 semester credits total; CF, SY, IS, ME and SG together account for the substantial majority |
| At least 15 semester credit hours of mathematics and statistics | MS101, MS102, MS103, MS201 plus the statistical content embedded in ME101, ME201 and ME301 |
| At least 40 semester credit hours of computer science, per the CS Program Criteria | Satisfied by CF, SY, IS, SG and the computational content of ME |
| A major project integrating a range of the programme's subject matter | CAP390, on the live substrate, with real users |
| Discrete mathematics coverage | MS101 |
| Substantial coverage of algorithms, data structures, software design, programming languages, computer architecture | CF102, CF103, CF201, SY101, SY102, SY201 |
| Exposure to security concerns throughout | SG201 in Q5, SG301, SG302, SG390; and SG recruited in six modules |

**The programme's honest position on the last row.** "Throughout" is the criterion's word and the programme does not fully meet it. Security first appears in Q5. See the strand interlock table in the [Module Map](/archive/bsc-programme/program/07-Module-Map.md), where this is named as the design's thinnest area.

---

## Proposed criteria changes

Two changes proposed for the 2026–27 accreditation cycle are treated by this design as though already in force, because both are things the programme wanted to do anyway.

- **Professional dispositions.** Evidence supplied by the dispositions layer described in the [Assessment Architecture](/archive/bsc-programme/program/03-Assessment-Architecture.md): integrity, reliability and humility, evidenced by observed behaviour within activities, never as separate activities.
- **A comprehensive project requirement.** Evidence supplied by CAP390 plus the continuous three-year substrate obligation.

Treating proposed criteria as binding costs nothing if they are not adopted and saves a redesign if they are.

---

## Knowledge-area coverage

The programme maps to the CS2023 knowledge areas as follows. Areas are given by their conventional codes.

| Area | Where |
|---|---|
| SDF Software Development Fundamentals | CF101, M01, M02 |
| AL Algorithmic Foundations | CF103, M05 |
| DM Discrete Mathematics | MS101, M01 |
| MSF Mathematical and Statistical Foundations | MS102, MS103, MS201, ME101 |
| AR Architecture and Organisation | SY101, M01, M04 |
| OS Operating Systems | SY102, M04 |
| NC Networking and Communication | SY202, M12 |
| PDC Parallel and Distributed Computing | SY201, M07 |
| DM/Data Management | SY103, M03 |
| FPL Foundations of Programming Languages | CF201, M07 |
| SE Software Engineering | PE201, SY301, M08, M14 |
| SEC Security | SG201, SG301, SG302, SG390 |
| AI Artificial Intelligence | IS201, IS202, IS203, IS301, IS302 |
| HCI Human-Computer Interaction | PE102, PE202, M08, M17 |
| SEP Society, Ethics and the Profession | PE101, PE301, SG390, M17, M18 |
| SF Systems Fundamentals | SY101, SY102, SY201, IS301 |
| SPD Specialised Platform Development | IS301, SY301 |
| GIT Graphics and Interactive Techniques | **Not covered.** Deliberate omission; declared |

**Declared omission.** Graphics and interactive techniques is not covered. A programme this specialised cannot claim general breadth and should not pretend to. The omission is stated here rather than concealed behind a nominal elective.

---

## Evidence status

**Verified in this repository.** The structural decisions inherited from the CMU exemplar, and the entrustment and narrative-assessment positions, are grounded in read sources — see [research/07-accreditation-exemplars/](/research/07-accreditation-exemplars/collected-materials.md) and [research/08-assessment-epas/](/research/08-assessment-epas/collected-materials.md).

**Cited from general knowledge, not verified here.** The wording and numbering of the ABET Criterion 3 outcomes and Criterion 5 credit-hour requirements are stated from general familiarity with the published criteria. They are accurate in substance and should be checked against the current criteria document before any submission.

**Explicitly unverified.** The CS2023 competency formula, its named dispositions list, its core-hours figures, and the exact count of its knowledge areas are **not verified in this repository**. Extraction of the sectioned report failed on three attempts, recorded in [research/99-source-register/source-register.md](/research/99-source-register/source-register.md). The knowledge-area codes above are used as an organising convenience and must not be cited as an accreditation claim until the primary document is read.

**Grounded in vendor documentation, with its version and its silence recorded.** The platform capabilities named in the build-capability table are grounded in open Microsoft Learn documentation, cited in [research/06-microsoft-platform/](/research/06-microsoft-platform/collected-materials.md) and re-verified at each offering. Three things must travel with any such claim: what the documentation says, when it said it, and what it does not report that a reader would need. In this case the omission is systematic and is itself taught: **no agreement-with-human figure is published for any Foundry evaluator, and no detection or false-positive rate is published for Purview or Defender.** Every judged score produced by this stack is therefore described as uncalibrated. No effect size, benchmark or numeric finding from vendor material is asserted anywhere in this wiki, on exactly the terms applied to research literature.

**Design reasoning with no external warrant.** PO7 is this programme's own addition. The evidence-not-coverage rule, the declared-omission convention and the decision to treat proposed criteria as binding are design positions, not requirements. **So is the claim that formation on one platform transfers off it**, which is conceded above as asserted and uninstrumented.

## Related pages

- [Programme Charter](/archive/bsc-programme/program/00-Program-Charter.md)
- [Assessment Architecture](/archive/bsc-programme/program/03-Assessment-Architecture.md)
- [Course Catalogue](/archive/bsc-programme/program/06-Course-Catalogue.md)
- [Microsoft AI Platform Map](/archive/bsc-programme/program/11-Microsoft-AI-Platform-Map.md)
- [Copilot Practice Standard](/archive/bsc-programme/program/12-Copilot-Practice-Standard.md)
- [Agent Configuration Standard](/archive/bsc-programme/program/13-Agent-Configuration-Standard.md)
