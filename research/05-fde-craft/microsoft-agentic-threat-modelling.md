# Cliff Notes — a chained agent pipeline for threat modelling (white-labelled)

## Source and access status

- **Subject:** a suite of fourteen agent definitions that together produce a security plan for a system — an eleven-stage linear chain, three auxiliary analysers, and one single-agent reviewer representing the older unchained way of working. Plus the security-plan genre, checklist and maturity instrument the chain writes into.
- **Access:** **internal and access-controlled**, held in an identity-gated repository. **Not publicly reachable and not citable externally.**
- **Read:** all fourteen agent definitions plus the entry document, usage guide and skill definition, read in full on 2026-07-30. Approximately 370 kB.
- **What this note is:** **a public formulation based on Microsoft's practice, rewritten as original prose.** No prompt text is reproduced. No link, no rendered title, no internal organisational identifier, no agent-suite codename, no individual and no customer appears here or anywhere in this repository. **No operational attack detail is carried** — threat *categories* and control *classes* only.

> Filed under the repository's standing rule for internal material — see the internal-documents section of [research/99-source-register/source-register.md](/research/99-source-register/source-register.md). **A redaction decision was taken deliberately.** The source contains platform-specific injection detail and worked exploit examples; none is reproduced, and their existence is recorded here so a later reader knows the omission was a choice.

## Why this note exists separately

The rest of that organisation's material is documented in [research/05-fde-craft/microsoft-accelerated-delivery-practice.md](/research/05-fde-craft/microsoft-accelerated-delivery-practice.md). **This artefact is separated because it is a different kind of thing and it is the most directly useful item in the whole collection for this programme.** It is a working example of a multi-agent system designed by people solving a real problem under real constraints, and it fails in ways this programme already has vocabulary for. It is simultaneously the best specimen of good agent-system design in the collection and the best specimen of the confusion between a configured control and a demonstrated one.

## The design

**Eleven stages, each a single-purpose agent.** Architecture documents become a dataflow diagram; the diagram gains a security-attribute table; the three together are consolidated into a unified system model; the model generates a threat registry and, separately, a recommendation registry; the two registries are joined into a mapping; the mapping is assembled into a plan document; the plan is assessed against the actual code for what is already implemented; the assessed plan is reviewed and scored; unimplemented items become work items; work items are imported into a live tracking system.

**Two integrating devices carry the whole design, and both are worth teaching.**

**A folder used as a blackboard.** Every stage takes a single folder path, reads named artefacts, writes exactly one named artefact, and is forbidden to touch anything else. Stages never call each other. A stage that finds a prerequisite missing returns a named error and tells the user which earlier stage produces it. **This is a filesystem-mediated pipeline, not an orchestration graph** — and the consequence is that the chain cannot be run out of order by accident, because the artefact-presence precondition genuinely fails.

**Early conversion of prose into stable identifiers.** Dataflows get integers at stage one and every later stage refers to flows only by number. Threats and recommendations get prefixed identifiers as they are created. **By the join stage the reasoning problem has been reduced to a join over two identifier sets, and by the assembly stage to set resolution and text splicing.** The pipeline front-loads all semantic judgement and back-loads all mechanics. That ordering is the single most transferable idea in the artefact.

**A third idea is nearly as good: the compact index.** Each rich artefact also emits a deliberately lossy projection of itself — a few columns per entry — so that a downstream agent can perform a join without loading the full text. The mapping stage's subagents are given the projections and forbidden the originals. **Imposing an information diet on a subagent is a design move, not a limitation.**

**Two further details show the design was built against observed failures rather than imagined ones.** The assembly stage writes in chunks with a progress marker and, on re-run, inspects the partial file, truncates a half-written entry and resumes. And several prompts explicitly command the model to re-read a file rather than reuse a table it already has in context. **Nobody writes those instructions prospectively.** They are the fossil record of things that went wrong — but the observations themselves are nowhere reported, so they cannot be cited as evidence for anything.

## The artefact chain, which is the reusable part

The field sets accumulate in a fixed order, and a course can hand this over directly:

1. **Dataflow diagram** — nodes with a category and a trust zone; directed edges labelled with integers only, never protocol text.
2. **Dataflow attributes** — per numbered flow: transport, data classification from a closed enum, authentication, authorisation, purpose. Plus two side-channels: an inferred-values section pairing each inference with the principle that supports it, and an open-questions list.
3. **Unified system model** — components, dataflows, trust-zone boundaries, external dependencies, a context summary, open questions, and a **characteristics checklist** of architectural traits marked present or absent with named components or flow numbers as evidence. That checklist is the routing key for everything downstream.
4. **Threat registry** — a ranked table, a detail entry per threat, a compact mapping index, a component-to-threat reverse index, and a filtering log recording every discard with its reason.
5. **Recommendation registry** — resource matching with confidence levels, framework and category selection covering both selected *and skipped* categories with justifications, recommendation bodies, a compact index, and filtering logs.
6. **Mapping** — threat to recommendation, a coverage summary with three-way accounting, unmapped threats with reasons, unmapped recommendations with rationale.
7. **Security plan** — overview, diagrams, attributes, a **secrets inventory** carrying purpose, location, generation method, rotation strategy with downtime impact, distribution and lifespan; a threat summary table; threat entries with recommendations interleaved; consolidated open questions.
8. **Work items** — imperative title, priority, source threats, affected components and flows, origin classification, the original mitigation quoted, a system-specific reason, implementation detail, and **testable acceptance criteria**.

**Three specification decisions worth teaching on their own.**

- **Hedging language is banned inside table cells.** Uncertainty must be relocated to a separate justification section naming the principle that supports the inference, never qualified in place. The stated reason is that a hedge inside a cell destroys machine consumption downstream.
- **A threat survives only if it can be bound to at least one named component and at least one numbered flow.** Anything that cannot be is discarded with a logged reason. This is a genuinely good discipline for making a threat model about *this* system — and it has a serious consequence discussed below.
- **Risk maps to work-item priority through a fixed table the agent is forbidden to adjust.** Removing a judgement the model is bad at is better design than prompting it to judge well.

## The best thing in it: closure re-derived rather than asserted

**A threat's status is not something a person ticks. It is re-derived from the workspace.** The status stage searches source, pipeline definitions, container files, four infrastructure dialects, configuration and documentation for evidence that each mitigation is implemented, and a claim of "implemented" **must cite a file and a location**. Re-running it after a fix finds the evidence, flips the status, and the work-item stage then generates nothing for that step.

**Evidence in the repository is the closure criterion.** That is the right shape, and most organisations do not have it. Three caveats belong with it: nothing schedules the re-run; a fix that is real but invisible in the repository — a portal setting, a tenant policy — will never close and will regenerate as a work item indefinitely; and the acceptance criteria a human might close a ticket against were written by the same model that wrote the mitigation.

The instruction that governs the whole stage is the right one: **when in doubt, classify as unclear, because a false claim of implementation is worse than a false negative.**

## Where it goes wrong, which is why it is worth teaching

**Inference laundering is the most dangerous property of the design, and it is structural rather than accidental.** The attribute stage is told to infer missing security properties from best practice, forbidden from marking those inferences in the table, and instructed to resolve conflicts between diagram and context *in the more secure direction*. The provenance survives only in a separate justification section — **which the assembly stage is explicitly instructed to exclude when embedding the table into the delivered plan.** A guess enters as an assumption and leaves as a stated fact, with its provenance removed by design and biased optimistic.

**The review stage then scores authentication, authorisation and transport encryption by counting non-empty cells in that very table.** The pipeline fills in the answers and later grades itself on them. A plan can score well on encryption because an earlier stage assumed encryption.

**The scores measure documents, not systems.** One constraint says so plainly; the presentation contradicts it everywhere — a score out of a hundred, a named tier, severity colours and a findings table all signal posture measurement. What is measured is prose conformance.

**The proxy checks are trivially satisfiable.** Most principle checks reduce to whether some mitigation somewhere mentions a thing. The evaluator's own definition of a "specific" mitigation is that it names a concrete technology — **so naming a technology you have not deployed scores full marks.** Any team that learns the rubric can raise the score without touching the system.

**Recall is unmeasured and the design declines to measure it.** Threats that cannot be bound to a component and a flow are dropped — which systematically removes anything about the operator, the supply chain, human process or out-of-band administration, each discarded with an entirely plausible logged justification that nobody reads. **The evaluator then explicitly refuses to deduct for threats that are missing**, listing them separately as unscored suggestions. That is a defensible choice which also means the score is silent on the pipeline's most consequential failure mode.

**Precision is defended exactly where recall matters.** The mapping stage is elaborately instrumented against over-mapping — signal hierarchies, semantic gates, anti-junk-drawer rules, a stated preference for leaving a threat unmapped. Nothing comparable guards against under-mapping, and an unmapped threat still appears in the plan and still reads as handled.

**The knowledge base is a single point of failure whose currency is invisible.** Threats, recommendations, the resource catalogue and the document template all come from one source, and inventing outside it is forbidden — so the pipeline's blind spots are exactly that catalogue's blind spots. **No stage records the catalogue's version, age or coverage anywhere in any output.** A stale catalogue produces a confident, well-formatted, out-of-date threat model containing no signal that this happened.

**No adversarial-input handling exists anywhere.** Every input stage reads untrusted repository content — architecture documents, context files, source code, pipeline definitions — feeds it to a model that writes files, and the chain terminates in an authenticated write to an external tracking system. Nothing in fourteen definitions addresses content in the analysed repository attempting to influence the analysis. **For a pipeline whose entire subject is threat modelling, this is the most useful thing in the artefact to make a student notice.**

**The analysers do not reach the plan.** The code and infrastructure agents produce good standalone reports, and neither emits threat or recommendation identifiers, neither writes into the plan, and no stage consumes their output. **A real vulnerability found by the code agent, with no corresponding entry in the threat registry, never becomes a threat, never becomes a work item and never reaches the backlog.** They are parallel outputs that happen to share a knowledge source.

## No approval gate anywhere — and that is the finding

Human decisions exist as *inputs*: which control frameworks apply (the agent is explicitly forbidden to choose), whether scope includes recommendations, and the target and credential for the backlog write. **One machine gate exists** — the work-item stage refuses to run while any threat is still unevaluated, which is a gate on a machine-written field satisfied by an earlier stage running, not by a person agreeing with it.

There are **placeholders shaped like sign-off**: a reviewer row per control with blanks for reviewer, date and disposition. It is a form to fill in, not a precondition for anything.

**Open questions are carried forward as prose from stage to stage, and every downstream precondition is "does the file exist and parse".** A system model full of unresolved ambiguity flows unimpeded into a threat registry, a plan, a status assessment, a work-item registry and finally into a team's live backlog, with nobody required to have read any of it. **The one place a person is unavoidably present is authenticating the backlog write — and that person is being asked for a credential, not for a judgement.**

## Classified against the five classes of conclusion

This programme's [Agent Configuration Standard](/wiki/program/13-Agent-Configuration-Standard.md) distinguishes a configured control, an executable check, an observed result, outcome evidence, and unsupported inference. Applying it strictly:

| Class | What this pipeline has |
|---|---|
| **Configured control** | Nearly everything. Fourteen files of prompts. Every "must", every refusal, every rubric, every self-verification checklist is an instruction a model may follow, partly follow, or silently not follow |
| **Executable check** | A small real set — artefact-presence and parse preconditions, the unevaluated-threat refusal, and the import stage's authenticated read-before-write, status handling, stop-on-first-error and idempotent detection |
| **Observed result** | **None reported**, though heavily implied by the scar tissue in the prompts. The observations exist; the records do not, so nothing can be cited |
| **Outcome evidence** | **None whatsoever.** No comparison against a human-authored threat model, no defect-escape rate, no time-to-plan, no coverage against a known vulnerability set |
| **Unsupported inference** | Every calibration constant, and the reading of any produced score as a security measurement |

**The verdict, which is the sentence to teach:** heavily configured, thinly executable, indirectly and unreportedly observed, entirely unmeasured for outcome. **If a control must be able to fail without the model's cooperation, this pipeline has roughly half a dozen controls and several hundred instructions.**

**Self-verification is self-report.** Every stage ends in a numbered checklist — identifier uniqueness, referential integrity, arithmetic reconciliation. These are prompt-engineering devices that measurably improve output quality and they are not controls: the model checks its own output and reports that it did. **In one agent the checklist is rendered into the deliverable with the model's own ticks, which makes a configured control wear the visual language of an audit trail.** That single move is worth a whole teaching session.

## Is the evaluator calibrated against human judgement? No

**Not anywhere, in any form.** No calibration set, no gold standard, no held-out sample, no inter-rater statistic, no pilot result, no statement that any score was ever compared with an expert's assessment of the same plan.

**Two reviewers overlap substantially, produce numbers on different scales, and never reference each other.** There is no rule for what to do when they disagree and no record of whether they ever have. Their self-verification verifies *computation*, not validity. The scoring weights, category allocations, band cut-points and partial-credit fractions are all asserted constants with no derivation.

**The pipeline can prove it added its own numbers up correctly, and can prove nothing else about them.**

## Evidence audit

**Not one calibration constant in this corpus cites a study, a measurement, a pilot or a rationale.** Every one is a designer's judgement rendered as a number. **No figure is reproduced here.** They concern: the size of a control set; how many controls are typically inapplicable to a given architecture pattern; per-principle weightings; category point allocations; quality-tier band boundaries; a partial-credit fraction for planned-but-undeployed controls; subagent batch sizes; a node count above which sub-services are collapsed; component and flow thresholds that directly change mapping outcomes; minimum counts of control layers and threat classes required to pass two checks; file counts above which scanning degrades; and length caps on generated phrases.

**That matters precisely because the outputs present them as measurements.** A score out of a hundred with a named tier and a coloured severity is read as an observation, and it is an assertion.

The coverage and compliance percentages in the outputs *are* computed, and the formulas are given and reproducible — **but every input is a model judgement, so the precision is spurious.**

## Human-voice claims worth carrying

Paraphrased; these are the practitioner judgements the design encodes.

- An error at the front of a chain is not a local error — it silently corrupts everything downstream, so front-stage formatting discipline is a security property.
- Hedging inside a table cell destroys machine consumption; relocate uncertainty, never qualify in place.
- A threat that cannot be tied to a named component and a numbered flow is not a threat for this system.
- **Generic mitigations are worse than absent ones, because they cannot be assessed, implemented or falsified.**
- When choosing which security domains to consider, over-inclusion is cheap and under-inclusion is catastrophic.
- When *mapping* controls to threats the same instinct is a disaster — the junk drawer of broad hardening attached to everything is the characteristic failure of coverage-maximising practitioners.
- Component overlap is not relevance; a shared name proves nothing.
- **A control that protects the wrong layer or the wrong direction must not be credited** — channel versus payload, ingress versus egress, data plane versus management plane are distinctions practitioners routinely collapse.
- A credited control that a documented alternative path bypasses is not a control at all.
- **Different sections of the same security document routinely contradict each other, and that contradiction is itself a first-class finding.**
- False positives destroy reviewer trust, and destroyed trust costs more than the findings were worth.
- Claiming something is implemented when it is not is strictly worse than failing to notice that it is.
- A legitimate engineering trade-off is not a violation; scoring it as one teaches teams to ignore the scorer.
- **Teams given every finding at once fix none of them; withhold the long tail deliberately.**
- The permanent technical record and the temporary action plan must be different documents.
- **The correct number of secrets in an architecture is zero; every one that remains is a defect awaiting a design change.**
- Evidence is a file path and a line, never an assertion that something is secure.
- Do not create tracked issues before the team has read and discussed the findings.
- Deliberately vulnerable test fixtures are not findings; real credentials in test files are.
- Long generations get interrupted — design the writing strategy for resumption, not for a single perfect pass.
- A model will confidently reuse stale context rather than re-reading the file, so the re-read must be commanded.
- **Perfect compliance is not the goal and pursuing it is itself a failure mode**; the goal is that each iteration leaves the system more secure than the last.

## Contradictions

- **Two adjacent stages are given opposite uncertainty policies** — retain when uncertain in one, drop when uncertain in the next. Each is defensible alone; together they guarantee a large unmapped tail, which the design absorbs with a dedicated output section and mandatory three-way accounting. **The accounting machinery exists because two policies pull in opposite directions: a structural symptom treated as a reporting problem.**
- One stage strips uncertainty from cells; a later stage grades those cells as evidence that controls exist. **The design manufactures the artefact it later marks.**
- Two review agents apply two different operative definitions of "specific enough" to the same field of the same document.
- The chain is positioned as a lightweight fallback for contexts where fuller tooling cannot be used, yet it terminates in the highest-consequence action in the design: writing to a live backlog.
- The unchained reviewer and the chain embody incompatible philosophies — scoped, incremental, human-led triage that warns explicitly against overwhelming teams, versus exhaustive automated enumeration that produces exactly that volume and files it as tickets. **Nothing says when to choose which.**
- **A category-selection heuristic appears in at least four separate prompts in near-identical form, and drifts between them.** Two stages selecting domains by slightly different rules will select different domains for the same system, and the plan will then be graded against controls a different stage never fetched. Nothing detects it.

## What to remember

- **Front-load judgement, back-load mechanics.** Convert prose to stable identifiers as early as possible, and every later stage becomes a join.
- **A folder with named artefacts and explicit refusals is a sufficient integration contract** for a multi-agent system; an orchestration framework is not required.
- **A compact index is a design artefact** — a deliberately lossy projection that lets a downstream agent reason without loading everything.
- **Imposing an information diet on a subagent improves its output.**
- **Closure re-derived from evidence beats closure asserted by a person**, and evidence means a file and a line.
- **Removing a judgement the model is bad at beats prompting it to judge well** — see the fixed risk-to-priority table.
- **A self-verification checklist is a configured control, not an executed one**, and rendering it into the deliverable disguises which it is.
- **A pipeline that infers a value, strips the marker, and later grades itself on that value is grading its own guess.**
- **Never read a generated score as a measurement of the system**; it is a measurement of a document.
- **Be more suspicious, not less, of a threat model with no unmapped threats and no open questions.**
- **A method that never states its own scope exclusions invites the reader to assume it has none.**

## Why it matters for the course

**Because it is the strongest available specimen of the distinction this programme already teaches**, arriving from an organisation that clearly knows what it is doing. Nothing constructed for a classroom would be this good or fail this instructively.

It also supplies something the programme lacks: **a worked example of a real multi-agent system whose design decisions can be examined one at a time.** The blackboard contract, the identifier scheme, the compact index, the information diet, the resumable write, the deterministic priority mapping and the evidence-based closure criterion are each a lesson in their own right, and none of them requires the reader to accept any claim about efficacy.

And it is the sharpest available argument for the standing rule that **a control which cannot fail without the model's cooperation is not a control.**

## How to teach it

- **Lecture:** walk the eleven stages and ask at each one *what would happen if this stage were wrong?* The answer is always the same and it is the point of the decomposition.
- **Lecture:** the inference-laundering path, traced end to end — a value inferred, its marker stripped, the justification section dropped at assembly, then the same value counted as evidence by the scorer. **Ask students to name the smallest change that would fix it.**
- **Lab:** classify every claim in the pipeline against the five classes of conclusion. Mark the classification and the defence, not the count.
- **Lab:** give students the artefact chain's field sets and require them to threat-model a system they built, by hand, in that form — then ask which fields they could not fill and why.
- **Lab:** adversarial input. The pipeline reads untrusted repository content and terminates in an authenticated write. **Ask students to design the attack, then to design the control that would stop it** — and note that the source contains neither.
- **Assessment:** require a threat model in which every threat is bound to a named component and a numbered flow, and **require a separate list of the threats that binding requirement excluded.** The second list is the assessed artefact.
- **Assessment:** require closure criteria expressed as evidence discoverable in the repository, and require the student to name one real fix their own criterion would fail to detect.

## Limits and cautions

- **Internal material. Nothing here may be linked, labelled or attributed to a named document**, and this note cannot supply an external warrant for any claim.
- **No outcome evidence exists for any of it.** Nothing published or internal establishes that plans produced this way lead to more fixed vulnerabilities than plans produced any other way.
- **The scar tissue in the prompts implies observed failures that are nowhere recorded**, so the strongest evidence that the design works cannot be cited.
- **The source contains operational attack detail in its platform-specific check tables and worked examples.** None is reproduced here and none should be.
- **The suite is bound to a specific knowledge server, a specific set of control frameworks and a specific tracking platform.** The *pattern* is durable; every concrete integration in it is perishable and should be treated as recipe, not standard.
- **No statement of scope exclusions exists anywhere in the suite** — insider risk, physical, organisational and process controls, contractual and third-party obligations, and privacy duties beyond what the encoded frameworks happen to contain are all outside it, and the suite never says so.
