# Cliff Notes — HVE Core, the agent configuration repository

## Citation and access
- **Author:** Microsoft, published as an open-source repository
- **Title:** `microsoft/hve-core` — "A refined collection of Hypervelocity Engineering components (instructions, prompts, agents, and skills)"
- **Source consulted:** `https://github.com/microsoft/hve-core`
- **Revision read:** commit `cf29fb457b0fe62745bb71592ec9394b834957f4` on `main`, authored `2026-07-29T20:39:30Z`; published package version `3.3.101`; 3,098 tracked files
- **Access status:** open, public GitHub repository; the artifacts are text files under `.github/`, distributed as versioned plugins
- **Read depth:** the repository was cloned at the pinned commit and machine-read. 1,857 substantive non-generated text paths totalling 341,239 lines were read; the 699 generated files under `plugins/` were deduplicated by hash and analysed structurally rather than as independent evidence; 21 lockfiles, 114 binaries, two PDFs, one spreadsheet and one image were inventoried and not interpreted
- **Build state at that revision:** of 296 reported checks, 58 succeeded, 237 were skipped, and one failed — `Release Please` in the stable release pipeline. **This is not an all-green revision**, and the note records that rather than rounding it up

## What this source is
This is a **configuration corpus, not a document**. Where the ISE Engineering Fundamentals Playbook publishes what a Microsoft engineering organisation expects of its engineers in prose a human reads, this repository publishes what an organisation expects of its *agents* in files a coding agent loads. The two are the same genre one register apart, and the difference is the interesting part: an instructions file is a standard whose conformance is checked by execution rather than by reading.

It is also the first source in this repository that is **simultaneously vendor material and craft material**. Its mechanisms are engineering-workflow craft with the durability that implies; its surface — file paths, artifact kinds, plugin names, package versions — is vendor product detail that moved while it was being read. The note is filed in the platform folder for that reason: **the artifact decays in months even where the practice it encodes does not**, and filing it by its most perishable property is the conservative error.

## The argument in full
The repository's organising claim is that a coding agent's behaviour is an engineering artifact, and that if it is an artifact it should be authored, versioned, reviewed, packaged and distributed like any other. Everything else follows from taking that seriously.

The corpus separates four artifact kinds, defined in `docs/architecture/ai-artifacts.md` and kept in distinct trees. **Instructions** (80 files) are constraints applied automatically to matching work, and are the closest analogue to a coding standard. **Prompts** (68 files) are user-facing entry points — the things a person invokes. **Agents** (64 files) are orchestrators, specialists and review subagents, each with a declared role. **Skills** (927 files, 55 entry points) are reusable procedures with their own scripts, references and assets. **Collections** (`collections/*.collection.yml`) then declare membership, and `scripts/plugins/` generates the `plugins/` tree from them, exposing 14 versioned plugins through `.github/plugin/marketplace.json`. The generated tree is explicitly not canonical. This is an ordinary separation of authoring source, packaging manifest and build output, and its presence is what makes the corpus a distribution rather than a folder of tips — including the unglamorous consequence that **maturity and retirement are expressed through collection membership and metadata rather than inferred from a file's age**.

The workflow the corpus is built around is **RPI — Research, Plan, Implement, Review, Follow-up** — controlled by `.github/agents/hve-core/rpi-agent.agent.md` and implemented by one skill per phase. The phases are separated by gates, carry a stable task identity across the whole run, define blocker rules and review outcomes, and specify explicit return paths to earlier phases. The design's own commitment is that these are distinct activities with distinct exit conditions rather than a narrative order, and that a phase can be re-entered rather than only completed.

The phases are joined by **durable state on disk**. `.github/instructions/hve-core/copilot-tracking.instructions.md` makes files under `.copilot-tracking/` authoritative over session memory, with separate locations for research, plans, phase details, implementation evidence, critique and review records, and stable identifiers of the form `Pxx`, `Pxx-Txx`, `PC-xxx` and `RV-xxx`. The argument is provenance and restartability: a run that is interrupted resumes from files, and a decision made in phase two can be found in phase four by identifier. **This establishes that the record exists and is addressable. It establishes nothing about whether the decisions recorded in it were correct**, and the repository does not claim otherwise.

Review is treated as a first-class subsystem rather than a step. `.github/skills/coding-standards/code-review/` separates factual orientation from judgement (`context-bootstrap.md`), scales depth to risk (`depth-tiers.md`), fixes the lenses a reviewer applies (`lens-checklists.md`), and normalises severity across reviewers (`severity-taxonomy.md`), persisting findings under stable identifiers. RPI reinforces the separation that matters most: **execution completion and acceptance outcome are different results**, and a phase that ran to completion has not thereby been accepted.

Two boundaries are declared explicitly, and both are declarations rather than enforcement. `.github/copilot-instructions.md` prohibits an agent from checking human-review boxes and requires a backlog workflow to stop when a required human review is absent; `TRANSPARENCY-NOTE.md` states that the project ships no model and no safety classifier, that host behaviour varies, and that human oversight remains necessary. `.github/instructions/shared/untrusted-content-boundary.instructions.md` treats fetched pages, uploaded documents, source repositories, MCP tool output and issue bodies as **data rather than authority**, and requires embedded instructions to be reported rather than obeyed. Whether that boundary holds depends on the host attaching the instruction and the model complying with it, neither of which the file can guarantee.

Assurance is where the repository is most instructive, because it is candid about the limits of its own gates. `evals/` contains distinct lanes — regex-graded agent-behaviour smoke tests, behaviour-conformance contract checks for prompts, instructions and skills, and baseline-equivalence comparisons against documented divergences — alongside Pester and pytest suites and validators for schema, links, metadata, dependency pinning, moderation and security. The repository states, in its own documentation, that the agent-behaviour regex checks test **output shape and not correctness**; that behaviour-conformance is **advisory by default** and lacks established branch calibration; that baseline equivalence covers a narrow contract with unresolved materialisation work; that a check can be advisory at pull-request tier while the nightly run is authoritative; and that missing dependencies produce setup failures rather than silent passes. **A grader exists. No result corpus does** — the storage is a `logs/.gitkeep`.

Telemetry is documented at `docs/customization/local-telemetry.md` as opt-in, local, and written as JSONL under `.copilot-tracking/telemetry`. Processed records omit complete prompts and tool inputs by default; verbatim capture requires a separate `HVE_TELEMETRY_RAW=1` opt-in; storage is plaintext and local, with explicit cleanup guidance.

## Structure of the original
- `.github/agents/` — 64 orchestrator, specialist and review agent definitions
- `.github/instructions/` — 80 automatically applied behavioural and coding constraints
- `.github/prompts/` — 68 user-facing workflow entry points
- `.github/skills/` — 927 files across 55 skill entry points, with scripts, references and assets
- `collections/` — 28 manifests declaring what ships together
- `plugins/` — 699 generated files, 14 marketplace plugins; build output, not source
- `docs/` — 554 files covering architecture, the RPI lifecycle, customization and generated reference
- `scripts/` — 355 files for generation, linting, validation, tests, security, packaging and eval drivers
- `evals/` — 165 specifications across behaviour, conformance, baseline and moderation lanes
- `TRANSPARENCY-NOTE.md`, `.github/copilot-instructions.md` — the human-authority and scope declarations

## Key concepts and practices
- Agent behaviour is an authored artifact, separated into four kinds — **instructions, prompts, agents and skills** — with distinct trees and distinct application rules.
- **Authoring source, packaging manifest and generated output are separated**, and the generated tree is declared non-canonical.
- **RPI separates Research, Plan, Implement, Review and Follow-up** as gated phases with explicit return paths, rather than as a narrative order.
- **Durable on-disk state under stable identifiers replaces session memory as the authority** for what was researched, planned, implemented and reviewed.
- **Execution completion and acceptance outcome are distinct results**, and a completed phase is not an accepted one.
- Review is decomposed into orientation, lens, severity normalisation and risk-scaled depth, so that two reviewers produce comparable findings.
- **Untrusted content is data, not authority:** fetched pages, documents, repositories, tool output and issue bodies may not issue instructions, and embedded instructions are reported rather than obeyed.
- **An agent may not record a human's approval.** Human review is a stop condition, not a checkbox the workflow can satisfy for itself.
- **A gate may be advisory or authoritative, and the difference is a property of the tier it runs in** rather than of the check itself.
- **Regex-graded behavioural checks test output shape, not correctness**, and the repository says so in its own documentation.
- Missing dependencies are made to produce setup failures rather than silent passes.
- Telemetry is opt-in, local, and redacted by default, with verbatim capture behind a separate explicit opt-in.
- **The existence of a control is not evidence that the control works**, and this corpus is the clearest available worked example of the distinction at scale.

## Method and evidence base
This is codified practice distributed as configuration. Its authority is the same kind the ISE Playbook has — it is the actual working standard of a Microsoft engineering group, published where it can be inspected — and it is subject to the same limit: **it offers no comparative evidence that its practices outperform alternatives.**

The limit is sharper here than for the Playbook, because this repository *contains* evaluation machinery, and machinery invites the inference that results exist. At the pinned commit, they do not. There is no committed controlled study, no calibrated branch baseline, no time-to-delivery dataset, no defect-rate comparison, no human-rated outcome dataset and no learner study. The evals produce artifacts at run time; the repository stores none of them as evidence.

The repository's prose nonetheless uses causal and outcome vocabulary — "ship faster", "accelerate", "prevents", "measurably different", "proven". **Those readings are not established by anything in the repository**, and the gap between the mechanism claims (which the source warrants) and the benefit claims (which it does not) is the single most useful thing about it for this course.

## Vocabulary the source introduces
- **Artifact kinds** — instructions, prompts, agents, skills; four different application models, not four names for one thing.
- **Collection** — a manifest declaring which artifacts ship together, and the mechanism through which maturity and retirement are expressed.
- **RPI** — Research, Plan, Implement, Review, Follow-up, as gated phases with return paths.
- **Tracking directory** — `.copilot-tracking/`, the on-disk state declared authoritative over session memory.
- **Depth tier** — the review-effort level selected from assessed risk rather than from preference.
- **Severity taxonomy** — the normalisation that makes two reviewers' findings comparable.
- **Untrusted-content boundary** — the rule that fetched material is data and never authority.
- **Advisory versus authoritative gate** — the same check with different consequences depending on where it runs.
- **Behaviour conformance** — a contract check on an artifact's declared shape, distinct from a check on the work it produces.
- **Baseline equivalence** — comparison against a recorded prior behaviour with documented divergences.

## What to remember
- The corpus is large, versioned, packaged and distributed; that is an architecture claim and it is warranted.
- **Every strong benefit claim attached to it is unwarranted at the revision read**, including by its own evaluation machinery.
- The four artifact kinds are a genuine distinction and worth teaching; the specific paths and plugin names are not.
- RPI's contribution is phase separation with return paths and a durable record, not the acronym.
- Durable tracking buys provenance and restartability, and buys nothing about correctness.
- The untrusted-content boundary is a declaration whose effectiveness depends on the host and the model.
- Advisory-versus-authoritative is the distinction most likely to be misread by a student looking at a green check.
- A grader is not a result. The repository has graders and no committed results, and is honest about it.
- **The one failed check at the pinned revision is part of the evidence**, not noise to be tidied away.

## Why it matters for the course
Three things, in descending order of durability.

First, it is the **worked example the programme has been missing for its own claim that an instructions file is a specification**. The [Copilot Practice Standard](/archive/bsc-programme/program/12-Copilot-Practice-Standard.md) asserts the equivalence; this corpus is 80 instructions files and 55 skills where the equivalence has been taken to its conclusion, complete with conformance checks on the specifications themselves. A student can read a specification, run it, and see what non-conformance looks like inside one afternoon.

Second, it is an **inspectable control system for teaching that control is not evidence.** The programme's central methodological commitment is that an instrument must be characterised before its outputs are trusted, and the commonest failure of that discipline in industry is inferring efficacy from the existence of a process. This repository is a large, sincere, well-engineered process with no committed outcome evidence, published by the vendor whose platform the programme teaches. It is a far better teaching object than a straw example, precisely because nothing about it is careless.

Third, it supplies **durable engineering mechanisms** — phase separation with return paths, decisions addressable by identifier, review with normalised severity and risk-scaled depth, untrusted input as data, human approval as a stop condition — that survive the disappearance of every file path in it.

## How to teach it
- Pin the revision. Never teach it live: record commit, package version, host, model, enabled collections and date, and treat any of those changing as a re-verification trigger.
- Have students reconstruct the RPI control flow from source files rather than from the documentation that describes it, and mark every branch as code-computed or model-computed.
- Run one small change end to end through the phases, preserving every artifact and identifier, then ask what the record proves and what it does not.
- Inject a document containing an embedded instruction that attempts to change the agent's authority, and observe whether the untrusted-content boundary holds on the host in use.
- Require students to classify each of their conclusions as configured control, executable check, observed result, outcome evidence, or unsupported inference. The fifth category is where the learning is.
- Set the exercise of adding one behavioural check that distinguishes output shape from semantic correctness, which is the limitation the repository declares about its own graders.
- Assess the audit, never the adoption. A student who used the corpus fluently and cannot say what it fails to establish has the wrong competence.

## Limits and cautions
- **Perishability is extreme.** File counts, paths, plugin names, package version and collection membership all changed during the period this note describes and will be wrong soon after it. Only the mechanism layer is quotable without a date.
- **Host and model dependence is total.** Every artifact is inert without a host that loads it, and the repository says so in `TRANSPARENCY-NOTE.md`. A result observed on one client and model is not a result about the corpus.
- **It contains its own marketing.** Benefit vocabulary appears in the prose without support, and the note's separation of warranted from unwarranted claims must travel with every classroom use.
- **Scale will overwhelm a student team** exactly as the ISE Playbook does; select, do not adopt wholesale.
- **The evaluation lanes are easy to over-read.** Advisory checks look like authoritative ones in a green summary, and the one failing job at the pinned revision is invisible unless someone looks.
- **A single vendor's opinion about agent configuration is not the field.** The artifact-kind taxonomy in particular is a product decision, and the course teaches it as one instance of the durable idea that agent behaviour must be authored and versioned.
- **Nothing in it licenses a claim about learning.** It was not built for a cohort, and no learner study exists.

## Verification status
The repository was cloned at commit `cf29fb457b0fe62745bb71592ec9394b834957f4` and read at that revision; every path, count and quotation above is as of that commit and the date recorded in it. Counts of files and lines are machine-derived from the working tree rather than from the repository's own documentation. The check outcome — 58 succeeded, 237 skipped, one failed in `Release Please` — is as reported by GitHub for that commit at the time of reading and will not be reproducible from the tree alone.

The claims recorded here as **warranted** are architecture, configuration and observed-execution claims: what files exist, what they declare, how they are packaged, and what the maintainers state about their own limits. The claims recorded as **not established** were tested by searching the tree for a committed study, baseline, dataset or result corpus that would support them; none was found, and their absence is the finding. **Absence at one commit is not proof of absence in the project**, and this note should be re-run against a later revision before any stronger statement is made in either direction.

No effect size, productivity figure, defect-rate change or safety property is asserted anywhere in this note, because none is available to assert.
