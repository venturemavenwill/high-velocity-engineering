# Cliff Notes — 11 Research Brief for Complete Course Design

> Internal working document, not an external source. It is the operational plan that follows from the benchmark in [09-curriculum-design-benchmark-and-sources.md](/research/01-course-structure/09-curriculum-design-benchmark-and-sources.md) and the architecture in [10-gap-analysis-and-course-architecture.md](/research/01-course-structure/10-gap-analysis-and-course-architecture.md). It records the workstreams, the questions each must answer, the evidence standard the research runs under, and what has and has not been closed.

## What this document is
The research plan and its current state. It converts the redesign into workstreams that map onto the repository's folder structure, assigns each a question set, states the sourcing discipline the whole effort runs under, and keeps the durable structure separated from perishable platform detail so that the plan does not need rewriting every quarter. It is both a research plan and a curriculum construction guide, and it is deliberately written to be auditable: a reader should be able to tell which questions have been answered from sources, which have been answered by internal judgement, and which remain open.

## The evidence standard
This is the discipline the whole effort runs under, and it precedes the workstreams because it determines what counts as a workstream being done.

- **Evidence hierarchy.** Primary research, standards documents and published syllabi rank above official platform documentation, which ranks above practitioner canon, which ranks above secondary summaries. A claim should be sourced as high in that hierarchy as it can be.
- **Verification rule.** No count, benchmark, effect size or requirement is real unless it has been verified directly from the source or explicitly marked as unverified or provisional. Every note ends with a verification status section stating what was read in full, what was verified at abstract or listing level, and what was deliberately not asserted.
- **Copyright rule.** Where a source is copyrighted or paywalled, the repository stores a Cliff Notes synthesis and citation details rather than the source text. Recorded in [research/99-source-register/source-register.md](/research/99-source-register/source-register.md).
- **Negative results are recorded.** Sources that could not be retrieved are listed with the reason, so that the gap is visible rather than silently absent.

## Workstreams
Each workstream maps to a folder. The questions are what the workstream must answer for the curriculum to be constructible.

### WS1 — Course structure
*Folder:* [research/01-course-structure/](/research/01-course-structure/collected-materials.md)
Questions: what must the curriculum's shape be, what is it free to choose, what spine does it use, how do the strands map onto weeks, and where does the course sit relative to the integrative project and the credit envelope?
**Status:** standards and exemplars read; architecture proposed; **week-level mapping and credit positioning still open.**

### WS2 — Technical foundations
*Folder:* [research/02-technical-foundations/](/research/02-technical-foundations/collected-materials.md)
Questions: what is the durable technical content, what are the primary sources for each element, and what is the minimum a graduate must be able to reason about rather than recall?
**Status:** fourteen notes complete against primary sources. **The durable-content list exists; the "must be able to reason about" threshold has not been set.**

### WS3 — Measurement and evaluation
*Folder:* [research/03-measurement-evaluation/](/research/03-measurement-evaluation/collected-materials.md)
Questions: what does defensible evaluation require, what statistical discipline transfers, and how does evaluation become the spine rather than a topic?
**Status:** twelve notes complete. **Statistical discipline established and applied to the assessment design. Huyen, the folder's one deliberately unconsulted source, was obtained and read on 2026-07-30 — both evaluation chapters in full — and the placeholder note it replaces is corrected in place rather than deleted.**

### WS4 — Professional formation
*Folder:* [research/04-professional-formation/](/research/04-professional-formation/collected-materials.md)
Questions: what is the evidence base for developing judgement, error tolerance and psychological safety, and what does the empirical work on AI-assisted productivity say about what students should expect?
**Status:** twelve notes complete. **Evidence base established; translation into observable indicators for the dispositions layer is open.**

### WS5 — FDE and engagement craft
*Folder:* [research/05-fde-craft/](/research/05-fde-craft/collected-materials.md)
Questions: what does the deployed-engineer role actually consist of, what practitioner canon supports it, and which parts are teachable within a course?
**Status:** eleven notes complete. **Practitioner sourcing is thin by nature. The access gap has since closed: all seven copyrighted books in the folder have been read in full, and Palantir's "Dev versus Delta", previously blocked by a sign-in redirect, was obtained and read on 2026-07-30.**

### WS6 — Platform mapping
*Folder:* [research/06-microsoft-platform/](/research/06-microsoft-platform/collected-materials.md)
Questions: which platform capabilities instantiate which durable concepts, and how is this material kept quarantined so it can be replaced without disturbing the spine?
**Status:** content gathered from official documentation. **This is the most perishable workstream and needs an explicit refresh cadence, which does not yet exist.**

### WS7 — Accreditation and exemplars
*Folder:* [research/07-accreditation-exemplars/](/research/07-accreditation-exemplars/collected-materials.md)
Questions: what do the standards require, what do credible exemplars do, and what precedent exists for the mechanisms this course wants to use?
**Status:** nine notes complete; ABET, CS2023, CMU, Stanford and Berkeley read directly. **Three CS2023 sectioned PDFs could not be extracted and their contents are not asserted anywhere.**

### WS8 — Assessment and EPAs
*Folder:* [research/08-assessment-epas/](/research/08-assessment-epas/collected-materials.md)
Questions: what unit is assessed, what does the output look like, what evidence licenses a summative decision, what will assessors get wrong, and how does any of it run inside a semester?
**Status:** six notes complete. **Design register written; activity set not reduced from twelve to three; no activity written to the seven-part template; assessor capacity unquantified; oral-assessment accommodation undesigned.**

### WS9 — Source register
*Folder:* [research/99-source-register/](/research/99-source-register/source-register.md)
Questions: what has been cited, at what verification level, under what licence, and what could not be retrieved?
**Status:** **incomplete.** Newly verified sources from the current pass are not yet all recorded.

## Measurement as the spine
The brief's central structural commitment is that measurement is the spine of the redesign rather than one topic among several, and the commitment has two halves that must be held together.

The first half is content: students learn evaluation as a workflow with a cost gradient, learn where judges are biased and how to mitigate it, learn why criteria drift and what to do about it, learn the statistics of clustering and power well enough to know when a claimed difference is not supported, and learn that generalisation rather than in-distribution performance is the target. The second half is reflexive: **the course's own assessment is built on the same principles**, which is why it reports coarse ordinal levels rather than percentages, requires multiple observers, and publishes its reliability position. The parallel is deliberate and should be made explicit to students, because a course that demands error bars on a benchmark while grading from a single unrepeated observation is teaching one thing and modelling another.

Neither half works alone. Content without the reflexive half is hypocrisy; the reflexive half without content is just an unusual grading scheme. See [research/08-assessment-epas/measurement-and-evaluation-sources.md](/research/08-assessment-epas/measurement-and-evaluation-sources.md).

## Durable and perishable, applied to the research plan
The split is a research management rule as well as a content rule. **Durable workstreams — WS2 through WS5, WS7 and WS8 — are researched once and revisited on a multi-year cycle.** WS6 is perishable and needs a standing refresh cadence, because platform naming, quota mechanics, portal paths and SDK surfaces will drift within a term. The plan's stability depends on that boundary holding, and the current absence of a defined refresh cadence for WS6 is a real gap rather than a formality.

## What has been closed and what has not
- **Closed:** the standards requirement; the exemplar comparison; the technical, measurement, formation and craft source bases; the assessment theory and its operational precedent; the evidence standard itself.
- **Open, and blocking:** the substrate question, which much of the architecture is contingent on; the assessor capacity question, which determines whether summative claims are honest; the reduction of the candidate activity set and the first full activity description.
- **Open, and not blocking:** week-level strand mapping; credit and sequence positioning; the observable-indicator set for dispositions; the WS6 refresh cadence; the source register completion; oral-assessment accommodation.
- **Deliberately not closed:** the CS2023 competency formula, disposition list, core-hours figures and knowledge-area count, all unextractable; the paywalled Govaerts programmatic-assessment canon. Each is recorded where it matters rather than papered over. **Huyen's *AI Engineering* was a third item on this list and is now closed: the book was read on 2026-07-30.**

## What to remember
- The brief is auditable by design: which questions are source-answered, judgement-answered and open should always be visible.
- The evidence standard precedes the workstreams, because it defines what completion means.
- Nine workstreams map onto the folder structure; six are substantially complete.
- Measurement as spine has a content half and a reflexive half, and neither works alone.
- The durable-perishable split is a research management rule as well as a content rule.
- Three open questions are blocking: substrate, assessor capacity, and the activity set.
- Negative retrieval results are recorded rather than hidden.

## Why it matters for the course
This is the bridge between research collection and curriculum construction, and its main function is to prevent two failure modes. The first is research that never converges, where more sources are gathered because gathering is easier than deciding. The second is construction that outruns its evidence, where a design gets built on claims nobody checked. The workstream structure addresses the first by defining what each stream must answer; the evidence standard addresses the second by making every claim's verification level explicit.

## Limits and cautions
- This is a planning artefact. Its accuracy depends entirely on the source notes staying current, and it will go stale silently if they are revised without it.
- Workstream status is a self-assessment. "Complete" means the questions have been answered to the evidence standard, not that the folder is beyond improvement.
- The mapping from workstreams to folders is convenient but imperfect; several questions cut across folders, particularly the measurement ones.
- The plan assumes the blocking questions are answerable. If the substrate question resolves negatively, the plan needs re-scoping rather than continuing.
- The brief does not schedule anything. Sequencing, ownership and effort are outside its scope and are not recorded anywhere else either.

## Verification status
This document makes no external factual claims of its own. Every source-derived statement referenced here carries the verification status recorded in the note cited, and the deliberate non-assertions — the CS2023 items behind the three unextractable PDFs and the paywalled Govaerts works — are listed above and flagged in every folder where they are relevant. Huyen's book was a third such item until it was read on 2026-07-30. The workstream status assessments, the workstream division, the blocking-versus-non-blocking classification and the durable-perishable assignment are internal judgements with no external warrant.
