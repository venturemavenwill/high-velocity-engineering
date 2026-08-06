# Cliff Notes — CAIRA, composable AI reference architectures for coding agents

## Citation and access

- **Author:** Microsoft, published as an open-source repository.
- **Title:** `microsoft/CAIRA` — "Composable AI Reference Architectures", described by its own README as "a small reference library for agents building Azure AI solutions".
- **Access status:** open, public GitHub repository, carrying a licence file and the standard Microsoft open-source scaffolding — code of conduct, security policy, support policy and a transparency note. **Citable normally; nothing here is white-labelled.**
- **Revision read:** a downloaded snapshot of the default branch, read in full on 2026-08-06. The bundled skill declares version `0.4.3`. **No commit identifier is recoverable from the snapshot**, so this note cannot be pinned the way the agent-configuration corpus was, and that is a real weakness in its citation: a later reader cannot reconstruct exactly what was read.
- **Read depth:** all 133 files. 17 markdown files totalling 317 lines; 35 TypeScript, 11 C#, 9 shell scripts, 8 Terraform, 10 workflow and task definitions, 9 React sources. **The prose is a small minority of the artefact and that is deliberate** — see below.

## What this source is

**A reference library whose intended reader is a coding agent.** That single fact reorganises everything else about it, and it is the reason this note exists alongside the agent-configuration corpus rather than being folded into it.

The primary entrypoint is not documentation. It is a **skill** — a file installed into the user's own project, which instructs an agent to go and inspect this repository and adapt the pieces that fit. The repository is the corpus; the skill is the reading protocol.

**Its own framing is unusually precise and worth carrying verbatim in substance: it is a reference library, not an application generator.** That distinction is the whole design, and almost every rule in the skill exists to enforce it.

## The argument in full

**The consumer is a machine, so the code is the specification and the prose is commentary.** The skill instructs the agent to read the full source of any component it is considering and explicitly forbids stopping at the README or the docs, on the stated grounds that the code is the source of truth. The API contract document says the same thing about itself in its opening line. **A repository optimised for agent reading inverts the ordinary documentation contract**: prose exists to route attention, and the artefact that must be correct is the code.

This is a defensible position and it has a cost that the repository does not discuss. **Prose is where intent lives.** Code states what happens; it rarely states what was considered and rejected. A human maintainer arriving in two years has 317 lines of prose and 133 files of artefact, and the reasons are in neither.

**Discovery is mandated before generation.** The skill requires the agent to ask a short intake set before producing anything: what outcome the user wants; what they already have in the way of endpoints, hosting, identity, observability and existing code; what isolation and security boundaries are required; which languages and frameworks are preferred; and which components are actually needed now. It adds the instruction that if the answer shows only one component is needed, only that component is used.

**One of those questions is the whole of qualification compressed into a sentence** — determine what the user already has before proposing new infrastructure. **That is discovery encoded as configuration rather than taught as discipline**, and it is the clearest instance in this repository's sources of a practice being moved from advice into a place where it executes.

**Then the anti-scaffolding rules, which are the interesting part.** The skill instructs the agent to prefer small component references over full-stack copying; to copy or adapt only the files needed for the user's stack; to remove sample text, model names, environment variables and infrastructure variables that do not apply; and to keep recommendations to the listed components rather than inventing around them.

**An accelerator whose own instruction is to take less of it is a genuinely unusual artefact.** The prevailing pitch for reusable starting points — including in this vendor's own partner-facing material — is that they compress delivery by giving you more, sooner. This one is built on the opposite premise: that the value is in the pattern, and the liability is in the volume.

**And the rule that makes it teachable is a provenance requirement.** The agent is told to explain which reference paths influenced its recommendation, and to state the exact paths used **and what was intentionally left out**. That is a declaration, attached to generated code, of where it came from and what was deliberately excluded.

**Two defaults are stated as prohibitions with a named override.** Managed identity and passwordless patterns are required, and API keys, static credentials and secrets are forbidden — in capitals — unless the user explicitly asks. Infrastructure for the Foundry foundation must use the vendor's verified module rather than standalone resources unless explicitly requested. **A default with a documented exception is a policy; a default without one is a trap**, and both of these are policies.

**Validation is deliberately not unified, and the repository argues for that.** Each component validates in its own idiom — package scripts for TypeScript, the .NET build for C#, format, initialise and validate for infrastructure, and an independent container build. The contributor guidance states the principle directly: prefer component-local scripts that preserve independent validation, and when adapting a component, preserve its validation style. **The claim is that independent validatability is worth more than a single toolchain**, which is an arguable engineering position stated as one.

The reference API surface carries three defaults worth noticing because they are usually retrofitted: a health endpoint, a metrics endpoint in a common scrape format, and a diagnostic endpoint that checks the credential the service is actually running as. **Observability and identity diagnostics are in the reference contract rather than in a follow-up ticket.**

## The weekly test, which is the specimen worth teaching

The repository runs a scheduled test of its own skill, and its structure is the most instructive thing in the artefact.

**One agent generates and a second agent grades.** The test creates an empty workspace, installs the skill, and runs a coding agent in unattended mode against the README's own example prompt — a monitoring system with an agentic API and a dashboard. The generating run is explicitly told not to ask questions, not to wait for confirmation, and **to leave everything ready to deploy without deploying or running anything.** A second run of the same agent is then pointed at the workspace, forbidden to modify it, and required to end its response with a pass or fail token that the script greps for.

**The five criteria the verifier applies are all presence checks.** That concrete files exist rather than only prose; that backend, frontend and setup documentation are present; that placeholders are used instead of real secrets and no deployment was attempted; that an infrastructure layer exists using the verified module; and that an API layer exists that builds an agent and connects to the frontend.

**Nothing is built. Nothing is run. Nothing is deployed.** The generator is forbidden from running anything, and the verification consists of a model looking at files and forming a view.

**So what the weekly test establishes is that an agent, given this skill, produces artefacts of the expected shape. It establishes nothing whatever about whether they work.** That is not a criticism of the design — a scheduled end-to-end deployment would cost real money and real blast radius, and the authors have chosen a cheap signal over an expensive one, which is a reasonable trade. **It is a criticism of reading the green tick as more than it is**, and the repository publishes nothing that would stop a reader doing so.

**It is also a judge with no calibration.** The generator and the verifier are the same model family, configured through the same provider, in the same run. No human label exists for any output, no disagreement rate is published, and no record of past results is committed. **A model grading another instance of itself, against criteria it can satisfy by producing well-shaped files, is the clearest public specimen of the unvalidated judge this repository has found.**

## Supply-chain and pipeline hygiene, which is better than the average

Recorded because it is genuinely good and cheap to copy:

- **Every action is pinned to a full commit identifier** with the human-readable version in a trailing comment.
- **Cloud sign-in uses federated credentials rather than a stored secret**, and the token minted for the run is short-lived, masked in the log, and scoped to a least-privilege role that the README names explicitly.
- **The workflow validates its own preconditions before doing any work** — checking that required configuration variables exist and that the endpoint has the expected shape — and fails with a message naming the missing variable rather than failing obscurely later.
- **Secret scanning, dependency audit, container scanning and code scanning are separate tasks** rather than one gate, so a slow scan cannot make a fast one optional.

## Method and evidence base

**No outcome evidence of any kind, and the repository does not claim any.** There is no measurement that using these references produces faster delivery, fewer defects, better architecture or lower cost; no comparison against building from scratch; no adoption data; and no study. **Its authority is definitional — this is what the vendor considers a sound starting point — and it does not overreach.** That restraint is worth crediting: the accompanying partner material makes acceleration claims this repository does not.

**The transparency note is three sentences and is the artefact's weakest point.** It states that the repository is reference material for coding agents containing sample code and infrastructure patterns that agents can inspect, adapt and validate. **It names no limitation, no failure mode, no human-oversight requirement and no statement about what the generated output is and is not.** The same organisation's agent-configuration corpus publishes a transparency note that does state those things — that no model and no safety classifier ships with it, that host behaviour varies, and that human oversight remains necessary. **Two repositories from one vendor, one of which explains what its users must still do and one of which does not.**

## Key concepts and practices

- **A reference library is not an application generator**, and the difference is enforced by rules that make the agent take less.
- **The intended reader is an agent, so the code is the source of truth and prose is routing**; the skill forbids stopping at the README.
- **Intake before generation:** establish the outcome, what already exists, the security boundaries, the language preference, and which components are genuinely needed.
- **Determine what the user already has before proposing new infrastructure.**
- **Prefer the smallest component over the full stack**, and delete the sample values, model names and variables that do not apply.
- **State which reference paths were used and what was deliberately left out** — a provenance and exclusion record attached to generated code.
- **Passwordless by default, stated as a prohibition with an explicit user override.**
- **Preserve each component's own validation idiom** rather than unifying the toolchain; independent validatability is treated as the property worth keeping.
- **Health, metrics and a credential-diagnostic endpoint belong in the reference contract**, not in a later ticket.
- **A scheduled test in which one agent generates and another grades, on presence criteria, with nothing built or run**, establishes shape and not function.
- **Pin actions by commit, mint short-lived federated credentials, name the least-privilege role, and validate the pipeline's own preconditions first.**

## What to remember

- **An accelerator that tells you to take less of it is arguing that the liability is volume and the value is pattern.** That is the opposite of the usual pitch and it is the more defensible position.
- **A provenance-and-exclusion statement attached to generated code is the cheapest known countermeasure to comprehension debt**, because it manufactures a reviewable artefact where a scaffold would otherwise leave none.
- **Moving a practice from advice into configuration is what makes it happen.** The intake questions execute; the same guidance in a playbook does not.
- **A green tick on a shape check is a green tick on shape.** A model verifying another model's files, against criteria satisfiable by well-formed output, with nothing executed, is a signal about form.
- **A thin transparency note on a code-generating artefact is a gap**, and it is visible here only because a sibling repository from the same vendor does it properly.
- **Prose is where intent lives, and a repository that subordinates prose to code has chosen to keep less of it.**

## Why it matters for the course

**It is the counter-design to the scaffold problem [S048](/wiki/seminars/S048.md) teaches.** That session's sharpest observation is that a generated project arrives with no diff, so the review reflex has nothing to grip, and the debt concentrates in the directories nobody reads. CAIRA's skill attacks exactly that: it forbids wholesale copying, requires deletion of everything inapplicable, and **obliges the agent to state which paths it used and what it deliberately excluded.** That statement is the missing diff — not a comparison against a previous state, but a declaration of provenance and omission that a reviewer can actually read.

**It is also the best available public specimen for [S043](/wiki/seminars/S043.md)'s unvalidated judge** — a real, scheduled, inspectable instance of a model grading a model with no human label and no disagreement rate, which that session currently teaches as a failure mode without a worked example.

And its intake block is discovery moved into configuration, which is the same move [S046](/wiki/seminars/S046.md) makes with instructions an executor actually receives.

## How to teach it

**Give learners the five verification criteria before telling them what the test does**, and ask what a passing result would license them to believe. Most will read them as a working-system check. Then reveal that the generator is forbidden to run anything and the verifier only looks at files. **The gap between what the criteria appear to establish and what they do establish is the lesson**, and it is available in a public repository rather than a constructed example.

For the provenance rule, have learners take any scaffold they have generated and write, after the fact, the statement CAIRA requires up front: which references it came from and what was deliberately left out. **The difficulty of writing it retrospectively is the argument for requiring it at generation time.**
