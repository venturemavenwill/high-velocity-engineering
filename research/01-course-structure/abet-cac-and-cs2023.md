# Cliff Notes — ABET CAC and CS2023 as Curriculum Structure Constraints

> Companion note. The full source readings are at [research/07-accreditation-exemplars/abet-cac-criteria-and-student-outcomes.md](research/07-accreditation-exemplars/abet-cac-criteria-and-student-outcomes.md) and [research/07-accreditation-exemplars/cs2023-competency-and-disposition-materials.md](research/07-accreditation-exemplars/cs2023-competency-and-disposition-materials.md). This note reads both sources through the structural lens: what shape a curriculum must take to satisfy them, what the standards do and do not prescribe about sequencing and credit allocation, and where the course's own architecture is therefore free.

## Citation and access
- **ABET, Criteria for Accrediting Computing Programs, 2025-2026.** Accreditation Board for Engineering and Technology, Computing Accreditation Commission. Source consulted: `https://www.abet.org/accreditation/accreditation-criteria/criteria-for-accrediting-computing-programs-2025-2026/`; PDF at `https://www.abet.org/2025-2026_cac_criteria/`. **Open access, read directly.** Note that the 2024-2025 URL returns 404; cite the 2025-2026 cycle.
- **CS2023: ACM/IEEE-CS/AAAI Computer Science Curricula.** DOI 10.1145/3664191. Source consulted: `https://csed.acm.org/` with the knowledge-areas, vision-statement and final-report pages. **Open access; site pages read directly. Three sectioned PDFs could not be extracted** — see Verification status.
- Endorsements: ACM 18 January 2024, IEEE-CS 22 January 2024, AAAI 22 February 2024.

## What this source is
Two documents that between them define the external structural envelope for any accredited computing curriculum in the United States, and increasingly beyond it. ABET is the compliance instrument: eight criteria that a programme must demonstrably satisfy, with a review cycle and a site visit behind them. CS2023 is the disciplinary consensus: a body of knowledge, a competency framework, and a set of curricular practice articles, carrying no enforcement but substantial normative weight and, critically, feeding back into what ABET's proposed changes say. Read structurally rather than substantively, they answer a narrow but important question: what must the curriculum's *shape* be, independent of its content?

## The argument in full
The first structural fact is that ABET deliberately declines to prescribe courses. Criterion 5 states plainly that "the curriculum requirements specify topics, but do not prescribe specific courses." This is the single most consequential sentence for course architecture, because it means the entire design space of sequencing, module boundaries, integration and delivery is open. What is constrained is the aggregate: at least 30 semester credit hours of computing at baccalaureate level under the general criteria, rising to 40 for computer science under the CSAB-led programme criteria, with 15 credit hours of mathematics and statistics including discrete mathematics, probability and statistics at a rigour at least equal to introductory calculus. Cybersecurity, data science and information technology programmes require 45 hours; information systems requires 30 plus 15. The design freedom is real but it sits inside a credit envelope, and any course claiming to serve an accredited programme has to know which envelope it is contributing to.

The second structural fact is that the required outcomes are behavioural, and that this constrains assessment architecture rather than content selection. Criterion 3 lists five outcomes for baccalaureate programmes: analyse a complex computing problem and apply principles of computing and other relevant disciplines to identify solutions; design, implement and evaluate a computing-based solution to meet a given set of requirements; communicate effectively in a variety of professional contexts; recognise professional responsibilities and make informed judgements in computing practice based on legal and ethical principles; and function effectively as a member or leader of a team. The computer science programme criteria add a sixth: apply computer science theory and software development fundamentals to produce computing-based solutions. Every one of these is a verb applied to a situation, not a body of knowledge. A curriculum can cover the right topics and still fail Criterion 3 if it cannot show students doing these things. That is a structural requirement — it dictates that the curriculum must contain occasions where the behaviour occurs and is observed, and it says nothing at all about which lectures precede which.

The third structural fact is the integrative project. The CS programme criteria already require 40 credit hours of computer science including "a major project that requires integration and application of knowledge and skills acquired in earlier course work." The word that matters is *earlier*: the project is defined by its position in the sequence, not by its content. This is a genuine sequencing constraint, and it is the one place where ABET tells a curriculum designer where something must go. The proposed changes strengthen it considerably. Approved by the ABET Computing Area Delegation on 25 October 2024, open for comment until 15 June 2025 and first applied in the 2026-27 review cycle, they add a new Criterion 5 item: "A comprehensive project or experience appropriate to the discipline which: 1) builds on technical knowledge and skills acquired in prior advanced course work, and 2) enables the application of appropriate professional dispositions." The second clause is new in kind. It requires the culminating experience to be an occasion for behaviour that is not technical, which means the project cannot be structurally isolated from whatever mechanism the programme uses to develop and observe dispositions.

That new clause is supported by a new definition, and the definition is unusually terse: "PROFESSIONAL DISPOSITIONS: Professional dispositions are behaviors desired in the workplace." Read structurally, the terseness is the point. ABET is not specifying which dispositions, which leaves the programme to define them — but it *is* specifying that they are behaviours, which means they must be observable, which means the curriculum must contain observation occasions. A disposition that is asserted in a syllabus and never observed cannot satisfy a criterion phrased this way.

CS2023 supplies the disciplinary rationale for the same move, and does so with more force than the accreditor. Its vision statement opens by arguing that "Computer Science is a professional discipline where skills and professional dispositions are just as important as the underlying knowledge", and immediately concedes that the field "has not yet widely accepted the benefits of professional dispositions to the same extent" as other professional disciplines. The vision statement's five items are themselves structurally revealing: a competency model; an updated knowledge model described as "a bridge between the tried and true knowledge model and the yet-to-be-designed competency model"; consistency between the two models; a hardcopy plus a live online version; and richly-researched curricular practice articles. The second item is an admission that the competency model is unfinished. The fifth item names a distinction that curriculum designers rarely make explicit: "Whereas Curricular Guidelines list what should be covered in the curriculum, Curricular Practices describe how and why they should be covered, including challenges, best practices, etc." That is precisely the guidelines-versus-architecture distinction this folder exists to work on, and CS2023 treats it as a separate publication stream rather than an afterthought.

The knowledge model itself is structurally conventional: knowledge areas with two- and three-letter codes — AL, AR, AI, DM, FPL, GIT, HCI, MSF, NC, OS, PDC, SEC, SEP, SDF, SE, SPD and SF — each decomposed into knowledge units and topics with hour allocations. A curriculum designer uses this as a coverage checklist, not as a sequence. The final report's own organisation is worth noting because it models the separation this folder needs: section 1 covers overview material including the introductions to both the knowledge model and the competency framework; section 2 covers design, including principles and processes, characteristics of graduates, and challenges and opportunities; section 3 covers details, meaning the body of knowledge and competency framework examples; and section 4 covers pedagogy and practices, including pedagogical considerations, curricular practices, and a dedicated treatment of generative AI and the curriculum. The structure separates *what to cover*, *what a graduate should be*, and *how to teach it* into distinct sections, which is the same three-way split any coherent course architecture needs.

Taken together, the two documents produce a short and unusually clear set of structural obligations. The curriculum must hit credit-hour aggregates in computing and in mathematics and statistics. It must contain occasions where five or six named behaviours occur and are observed. It must place an integrative experience after the advanced coursework it builds on. Under the proposed changes, that experience must also occasion professional dispositions, which must therefore be defined and observable. Everything else — module boundaries, ordering within the technical content, delivery mode, assessment instrument, and the internal architecture of any individual course — is unconstrained. The standards constrain the skeleton and leave the anatomy free.

## Structure of the originals
**ABET 2025-2026 Criteria for Accrediting Computing Programs:**
- Definitions
- I. General Criteria for Baccalaureate Level Programs (Criteria 1-8)
- II. General Criteria for Associate Level Programs
- III. General Criteria for Master's Level Programs (MS1-MS8, MI1-MI8)
- IV. Program Criteria (Computer Science, Cybersecurity, Data Science, Information Systems, Information Technology)
- V. Proposed Changes to Criteria

**CS2023 final report:**
- Cover Page
- §1 Overview — Executive Summary; Introduction to CS2023; Introduction to Knowledge Model; Introduction to Competency Framework
- §2 Design — Principles and Processes; Characteristics of Graduates; Challenges and Opportunities
- §3 Details — Body of Knowledge; Competency Framework Examples
- §4 Pedagogy and Practices — Pedagogical Considerations; Curricular Practices; Generative AI and the Curriculum; Acknowledgments

## Key structural constraints and specifics
- **"The curriculum requirements specify topics, but do not prescribe specific courses."** The strongest single licence for architectural freedom in the document.
- **Credit envelopes:** at least 30 semester credit hours of computing under the general baccalaureate criteria. Computer science [CS]: 40 credit hours of computer science plus 15 of mathematics and statistics. Cybersecurity [CY]: 45 plus 6. Data science [DS]: 45. Information systems [IS]: 30 plus 15. Information technology [IT]: 45 plus 6.
- **Mathematics rigour requirement:** discrete mathematics, probability and statistics, at a rigour at least equal to introductory calculus.
- **Three mandatory topic areas** in the baccalaureate curriculum: techniques, skills and tools for computing practice; principles and practices of security and privacy; local and global impacts of computing.
- **Five baccalaureate student outcomes**, all behavioural, plus a sixth for computer science: apply computer science theory and software development fundamentals to produce computing-based solutions.
- **The sequencing constraint:** "a major project that requires integration and application of knowledge and skills acquired in earlier course work."
- **Proposed Criterion 5 item 4:** "A comprehensive project or experience appropriate to the discipline which: 1) builds on technical knowledge and skills acquired in prior advanced course work, and 2) enables the application of appropriate professional dispositions."
- **Proposed definition:** "Professional dispositions are behaviors desired in the workplace."
- **Proposed CS criteria changes** add software engineering and artificial intelligence to the areas requiring substantial coverage, and rename "information management" to "data management".
- **Timeline:** proposed changes approved 25 October 2024, comment period to 15 June 2025, first applied in the 2026-27 review cycle.
- **ABET's own assessment/evaluation split:** assessment is "one or more processes that identify, collect, and prepare data to evaluate the attainment of student outcomes"; evaluation is "one or more processes for interpreting the data and evidence accumulated through assessment processes."
- **CS2023 knowledge area codes:** AL, AR, AI, DM, FPL, GIT, HCI, MSF, NC, OS, PDC, SEC, SEP, SDF, SE, SPD, SF.
- **The guidelines-versus-practices distinction:** "Whereas Curricular Guidelines list what should be covered in the curriculum, Curricular Practices describe how and why they should be covered."

## Method and evidence base
Both documents are consensus products of committee processes rather than empirical studies, and neither offers evidence that its requirements improve outcomes. ABET's authority is procedural — it derives from the accreditation review, not from research. CS2023's authority is disciplinary consensus, backed by the three endorsing societies and a multi-year steering committee process, with the design principles and processes documented in its own section 2. Neither should be cited as evidence that a particular curriculum structure works; both should be cited as evidence of what the field and the accreditor currently require.

## Vocabulary these sources introduce
- **Program educational objectives** — "broad statements that describe what graduates are expected to attain within a few years after graduation", based on constituency needs. Note the time horizon: years after graduation, not at graduation.
- **Student outcomes** — what students "are expected to know and be able to do by the time of graduation". Distinct from objectives by timing.
- **Assessment** — identifying, collecting and preparing data. A data operation.
- **Evaluation** — interpreting that data and evidence. A judgement operation. The two are deliberately separated.
- **Professional dispositions** — "behaviors desired in the workplace". Behaviours, therefore observable.
- **Knowledge area / knowledge unit / topic** — the three-level decomposition of the CS2023 body of knowledge.
- **Competency** — CS2023's alternative framing to pure knowledge coverage; the model is explicitly described as unfinished.
- **Curricular guidelines versus curricular practices** — what to cover versus how and why to cover it.

## What to remember
- ABET constrains topics and credit aggregates but explicitly does not prescribe courses. Architecture is free.
- The required outcomes are verbs applied to situations, so the curriculum must contain observation occasions, not just coverage.
- The only firm sequencing constraint is that the integrative project follows the coursework it builds on.
- The proposed comprehensive-project clause couples the culminating experience to professional dispositions, which must therefore be defined and observable.
- CS2023 states that skills and dispositions matter as much as knowledge, and concedes the field has not accepted this.
- CS2023 explicitly separates what to cover from how and why to cover it, and treats the latter as a distinct publication stream.
- Assessment and evaluation are formally distinct operations in ABET's vocabulary, and conflating them weakens a self-study.
- The 2026-27 review cycle is when the proposed changes bite. A course designed now should be designed against them.

## Why it matters for the course
This note establishes what the course architecture is obliged to do and, more usefully, what it is free to do. The obligations are few: contribute to a credit envelope, create occasions where the five or six named behaviours occur and are observed, sit correctly relative to an integrative experience, and — under the proposed changes — support observable professional dispositions. The freedoms are extensive: sequencing, module boundaries, delivery, and every assessment instrument choice. This is the structural warrant for the rest of the design work in this folder. It is also why the assessment architecture in [research/08-assessment-epas/](research/08-assessment-epas/collected-materials.md) is not an eccentric choice — an entrustment-based design that produces observable behavioural evidence and narrative substantiation is unusually well matched to a criterion set phrased entirely in behavioural verbs, and to a proposed disposition clause that requires behaviours to be visible.

## How to use it in course design
- **Map first.** Build an outcome-by-occasion matrix: for each of the five or six ABET outcomes, name where in the course the behaviour occurs, who observes it, and what artefact records it. Empty cells are design defects, not paperwork.
- **Design against the proposed changes, not the current text.** The 2026-27 cycle is the relevant one; retrofitting a dispositions layer later is more expensive than building it in.
- **Define the dispositions explicitly**, since ABET does not. The integrity, reliability and humility set from the EPA literature is a defensible starting point with a behavioural definition already attached.
- **Use CS2023 knowledge-area codes as a coverage checklist**, not as a syllabus order. The codes are for demonstrating coverage to a reviewer; the order is a pedagogical decision.
- **Keep assessment and evaluation separated in the documentation**, matching ABET's vocabulary. Collecting evidence and interpreting it are different steps with different owners.
- **Position the course relative to the integrative project deliberately** and state the position. Whether the course feeds the project, contains it, or follows it changes what it must demonstrate.
- **Adopt the guidelines-versus-practices split** in the course's own documentation: one artefact for what is covered, a separate one for how and why. CS2023 models this and it prevents the two from silently merging.

## Limits and cautions
- Neither document offers evidence that its requirements improve graduate outcomes. They are consensus and compliance instruments.
- The proposed ABET changes were still in the comment period as consulted and could change before the 2026-27 cycle. Verify the final text before relying on the exact wording.
- ABET's criteria are programme-level. A single course cannot satisfy them alone, and claiming otherwise misrepresents the standard.
- The disposition definition is minimal by design. The specificity — and therefore the difficulty — is left entirely to the programme.
- CS2023's competency model is described by its own authors as not yet designed. It should not be treated as a finished framework to implement.
- Non-US contexts have different accreditation regimes. The structural analysis here does not transfer automatically.
- Several CS2023 specifics were not verifiable — see below — and must not be asserted.

## Verification status
Verified directly from the sources: the ABET criteria structure and section list; the definitions of program educational objectives, student outcomes, assessment, evaluation and professional dispositions; the five baccalaureate student outcomes and the CS sixth outcome; the "does not prescribe specific courses" language; the credit-hour figures for all five programme criteria; the mathematics rigour requirement; the three mandatory topic areas; the major-project and proposed comprehensive-project language; the proposed-changes approval date, comment deadline and first-application cycle; the proposed CS additions of software engineering and artificial intelligence and the data-management rename; the CS2023 endorsement dates and DOI; the final report's section structure; the vision statement's five items with quoted language; and the knowledge area codes.

**Not verified and deliberately not asserted:** the CS2023 competency formula, the named list of dispositions, core-hours figures, and the exact knowledge-area count. All three sectioned PDFs that contain them — the introduction to the competency framework, the executive summary, and the characteristics of graduates — failed extraction on repeated attempts. The knowledge-areas page lists seventeen entries when Systems Fundamentals is counted, but SF's link points to a subcommittee page rather than a knowledge-area page in the same pattern, so the count is left open. The structural reading in this note does not depend on any of these figures. The ABET 2024-2025 criteria URL returns 404; only the 2025-2026 cycle was consulted.
