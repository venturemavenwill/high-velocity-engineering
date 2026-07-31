# Substrate and Infrastructure

> The substrate is a live system with real users, operated continuously by the cohort for three years, deployed on the Microsoft AI Platform. It is the single element of this design most likely to fail, and this page is written to make that failure legible in advance rather than discovered in year two.

## What the substrate is

A publicly available service, built and operated by successive cohorts, serving real users who are not students and who have not consented to poor service in exchange for pedagogy. It runs continuously. It has an on-call rota. It has incidents. It costs money.

Every complexity-class-5 and class-6 seminar day depends on it, because those days require decisions under genuine consequence, and consequence cannot be simulated. A student who decides not to ship in an exercise has decided nothing. A student who decides not to ship when users are waiting has made a decision that can be assessed.

## What it runs on

The substrate is an actual deployment on the Microsoft AI Platform, and its architecture is the programme's syllabus in physical form. It is organised by the four layers of the [Microsoft AI Platform Map](/archive/bsc-programme/program/11-Microsoft-AI-Platform-Map.md), because those are the layers whose failures the students are being taught to tell apart.

**Capacity.** Microsoft Foundry model deployments, standard rather than provisioned as the default. The reason is a cost argument the students are shown and can check, and it is set out below.

**Traffic.** An Azure API Management AI gateway in front of the model deployments. Token-limit policies are applied per consumer, so that a cohort team's runaway loop degrades that team and not the service. Load balancing across backends and circuit breaking on a failing one are configured because the substrate needs them, and they are then the concrete instance S033 and S068 teach from.

**Retrieval.** An Azure AI Search index with document-level access control, where permission metadata is captured at indexing time and enforced at query time against the caller's own identity. The substrate's data is minimised by design, which is a duty-of-care requirement first and a teaching convenience second.

**Governance.** Purview data-security posture and Defender AI posture management over the above, **where the institution's tenant permits it.** Several capabilities in this layer carry licensing and tenant-administration prerequisites a university may not hold, and where a capability cannot be operated the day states that it is demonstrated rather than operated and the specification does not assess it. That rule is not a concession made for this layer; it is the same rule the whole programme runs on.

**All of it is declared in Bicep, authored in agent mode, operated through the Azure MCP Server, and reviewed as an artefact.** The substrate's infrastructure repository is therefore also the largest worked example in the programme, and the instructions file that governs changes to it is a specification the cohort maintains.

## The precedent

The CMU exemplar verified at [research/01-course-structure/cmu-17-645-ml-in-production-ai-engineering.md](/research/01-course-structure/cmu-17-645-ml-in-production-ai-engineering.md) runs a movie recommendation service against roughly one million simulated active users, and grades student work on how the system holds up under that load rather than on the model's offline accuracy. That is the shape being borrowed, with one difference that is the whole difficulty: the exemplar's users are simulated, and this programme's are not.

The exemplar's approach is the safe one. This design takes the harder position deliberately, and the rest of this page is the cost of that position.

---

## What the substrate must supply

| Requirement | Depends on it |
|---|---|
| Real users with real expectations | S037, S046, S081, S084, EA-3 |
| Genuine traffic variation, including unplanned peaks | S019, S062, S064 |
| A cost line someone actually pays | S065, S064 |
| Consequential release decisions | S066–S070, EA-1 |
| Real incidents, not injected ones | S079, S080 |
| A receiving party for handover | S086–S089, EA-2 |
| Longitudinal observation across three years | The whole assessment architecture |

## Shape

- **Domain.** A service whose failure is inconvenient rather than harmful. Not health, not finance, not safety-critical, not anything where a student's judgement error injures someone. This constraint is absolute and it eliminates most of the interesting problems.
- **Continuity.** Cohorts overlap. A year-three cohort hands the system to a year-two cohort as part of EA-2, which is the only honest way to assess handover.
- **Ownership.** The institution owns the service and carries the duty of care to its users. Students operate it; they do not own the liability.
- **Escalation.** A staff on-call layer sits behind the student rota, with the authority to take over. Students are told this exists, because concealing it would be dishonest, and are told that its use is not held against them, because otherwise it will not be invoked when it should be.

## Cost

Three components, none of which is optional.

**Infrastructure.** Compute, storage, serving and inference for a continuously running service. Inference cost is the volatile term and the one that makes multi-year budgeting hard. The programme carries a hard monthly ceiling with automatic degradation to a cheaper serving path rather than an outage, and students are shown the ceiling, because capacity under a budget constraint is itself the content of S064 and S065.

### Token accounting, and where the ceiling is enforced

**Tokens are the unit of everything on this platform**, and that is the reason the substrate meters them rather than requests. They are the capacity unit for a provisioned deployment, the quota unit at the gateway, the cost unit on the invoice, and the attack surface in a resource-exhaustion attack. A programme that teaches token accounting once, early, is paid for it in four separate places.

The consequence for the substrate is that **the monthly ceiling is enforced at the gateway and not discovered on an invoice.** Token-limit policies per consumer are what convert a budget into a control, and the degradation path — routing to a cheaper serving configuration rather than failing — is a gateway routing decision rather than an operational scramble. The current position against the ceiling is visible to students continuously, on the same dashboard that supplies S068's detectability content. A budget a student cannot see is not a constraint they can reason about, and S065 requires them to reason about it in front of someone who pays.

### Provisioned against standard, and why the substrate runs standard

This is stated in full because the argument is the content of a seminar day and because the alternative would look like an oversight.

A provisioned deployment reserves processing capacity exclusively, and **bills hourly from creation to deletion regardless of the number of tokens consumed.** A teaching substrate's inference load is concentrated into ninety six-hour windows a year and is close to flat between them. That is close to the worst possible shape for a reservation, and the documentation independently warns against scaling provisioned deployments with traffic. **The substrate therefore runs standard deployments, and the programme's most instructive capacity content is run on a bounded provisioned deployment created for the day and deleted after it.**

Three consequences follow and all three are taught rather than absorbed.

- **The provisioned days can fail to happen, and the failure is the lesson.** Quota limits what may be deployed and is explicitly not a guarantee that capacity exists, and available capacity moves through the day. If the deployment cannot be created in the window, S064 runs on the refusal rather than on the deployment, and the day is designed so that this is the better of the two outcomes rather than a contingency.
- **Spillover is content, not architecture.** Redirecting to a standard deployment when a provisioned one returns a non-200 is a mechanism the students configure and observe on the bounded deployment. The substrate does not depend on it, because the substrate's primary path is already the standard one.
- **The reservation decision is never taken.** A commitment purchase is the one capacity instrument the programme discusses and does not operate, and the days that cover it say so under the demonstrated-rather-than-operated rule.

### The agent toolchain is itself a consumption line

Every student runs an agent against this platform on every day, and that is a cost the original design did not carry. It is budgeted as infrastructure rather than passed to students, per the [Programme Charter](/archive/bsc-programme/program/00-Program-Charter.md), and it is metered by the same per-consumer policies as everything else, so that a cohort can see what its own working method costs. **A student who has never seen the token cost of the way they prompt has not been taught inference economics**, whatever else they have been taught.

**Staff.** The dominant cost, and the one usually underestimated. The staff on-call layer, the assessor time required by the multiple-observer discipline, and the office-hours oral verification described in the [Assessment Architecture](/archive/bsc-programme/program/03-Assessment-Architecture.md) together represent a staffing model considerably heavier than a conventional programme's. **This is unresolved.**

**Duty of care.** Legal, privacy and accessibility obligations to real users. Data minimisation is designed in from the start, both because it is required and because it is the concrete instance that S078 teaches from.

Student-borne tooling cost is separately capped at the figure published in the [Programme Charter](/archive/bsc-programme/program/00-Program-Charter.md).

## Risks, ranked

1. **Staffing cannot support the assessment load.** Most likely failure. Symptom: entrustment judgements quietly reduce to single-observer, single-occasion, which the architecture explicitly says is indefensible. Mitigation: reduce the number of entrusted activities before reducing the observation discipline.
2. **The substrate loses its users.** A service with no users supplies no consequence, and every class-5 and class-6 day silently degrades to simulation while the syllabus still claims otherwise. Mitigation: monitor active use as a programme-health metric with a declared floor.
3. **Cost volatility.** Mitigation: hard ceiling, degradation path, and a serving architecture chosen for substitutability.
4. **Harm to users.** Mitigation: domain constraint, staff escalation, and the safety-case discipline of SG390 applied to the substrate itself, not only to student artefacts.
5. **Cohort discontinuity.** A weak handover year damages the following two years. Mitigation: EA-2 is assessed on the handover's usability by the receiving cohort, measured after the fact.
6. **Pedagogical capture by operations.** A live system generates unbounded work that is not instructive. Mitigation: a declared cap on operational hours per student per week, with staff absorbing the overflow.
7. **Student-built artefacts degrade the substrate they were built to serve.** Identified in [WP-029](/archive/bsc-programme/whitepapers/WP-029.md) §8. Measurement instruments designed at [S029](/archive/bsc-programme/seminars/S029.md), monitoring signals from [S068](/archive/bsc-programme/seminars/S068.md) and evaluation harnesses from [S066](/archive/bsc-programme/seminars/S066.md) all enter operational use, and the programme's own teaching establishes that their two characteristic failures — a construct-instrument gap, and silent decay after a correct start — are invisible to inspection. Staff review catches design errors and cannot catch either of these.
8. **The substrate's platform is superseded mid-programme.** A service the substrate depends on is renamed, re-tiered, moved to a different licence or withdrawn between a cohort's second year and its third. This is not speculative: of the six sources behind [research/06-microsoft-platform/](/research/06-microsoft-platform/collected-materials.md), two were already labelled classic or superseded at the moment they were read, and one capability set moves to a different licence in 2026. **The base rate for this risk over three years is high and the design assumes it will fire at least once per cohort.**

   Four mitigations, in the order they are reached. The [Durable and Perishable Register](/archive/bsc-programme/program/09-Durable-and-Perishable-Register.md) records every platform instance against the durable claim it carries, so a re-anchoring is a lookup rather than a redesign. The infrastructure is declared in Bicep, so a substitution is a diff rather than an archaeology. The serving architecture was already chosen for substitutability under risk 3, and now carries a second load for it. And where a layer can no longer be operated at all, the withdrawal commitment below applies without modification: the affected days are demonstrated rather than operated, and their specifications do not assess them.

   **What is not mitigated, and is the reason this risk is listed separately from cost volatility.** If a supersession shows that a durable claim was an artefact of one implementation, then the claim was wrong rather than the service, and the programme has assessed a cohort on it. There is no mechanism for un-assessing, and inventing one would be worse than the problem. The design's only available response is the one it uses everywhere else: record the finding, amend the durable table, tell the affected cohort what changed and why, and leave the error legible. That is a poor remedy and it is the only one available.

### Adoption conditions for student-built instruments

Two safeguards, both introduced in response to [WP-029](/archive/bsc-programme/whitepapers/WP-029.md) §8.

- **Every adopted student instrument carries a review date** and is withdrawn automatically at that date unless revalidated against its own stated validation criterion. This converts an indefinite exposure into a bounded one and makes the [S029](/archive/bsc-programme/seminars/S029.md) step 4 criterion operationally load-bearing rather than an assessment artefact.
- **The limitation statement propagates with the output, not with the instrument.** Any number the instrument emits carries its [S029](/archive/bsc-programme/seminars/S029.md) step 3 statement mechanically, enforced by the substrate's tooling rather than by convention. The failure this prevents is the one disclosed in the S029 error clinic and in [S026](/archive/bsc-programme/seminars/S026.md) phase 6: the caveat is written once, is not attached to the number, and the number travels without it.

Neither safeguard was in the original design. Both are cheap, and their prior absence meant the programme exposed its own operational system to a hazard it teaches students to recognise.

### The agent configuration the programme itself runs

**The instructions, prompt and skill artefacts that configure the programme's own agent are infrastructure, and they are versioned, reviewed and pinned like the rest of it.** They are also, by the [Copilot Practice Standard](/archive/bsc-programme/program/12-Copilot-Practice-Standard.md)'s own argument, specifications — which means the two safeguards above apply to them unchanged: **each carries a review date and is withdrawn at that date unless revalidated**, and any limitation attached to one propagates with the work it produces rather than sitting in the file nobody reads.

Three operating rules follow, and all three exist because the corpus this material is taught from is an external dependency that moves.

- **The revision is pinned per offering, not per term.** Commit, package version, host, model and enabled collections are recorded in the manifest specified by the [Agent Configuration Standard](/archive/bsc-programme/program/13-Agent-Configuration-Standard.md). An upgrade mid-quarter changes the instrument every student is being assessed with.
- **A configuration change is a substrate change and goes through substrate review.** An instructions file that alters what the agent will do to production code is not a preference, and the programme has no separate lightweight path for it.
- **What the programme's own configuration cannot establish is stated where students can see it.** The [WP-066](/archive/bsc-programme/whitepapers/WP-066.md) §8 finding — that the programme teaches release gates go unvalidated and does not validate the substrate's own — applies here in its sharpest form. **The programme's configuration has no measured effect on the quality of student work, and none is claimed.** It is taught as an assessable specification, not as an improvement.

### Disclosure to users

**The service states, in its own interface and in its own terms, that it is operated as a teaching substrate and that its behaviour is deliberately disturbed during announced windows.**

This was absent from the original design and was added after [WP-035](/archive/bsc-programme/whitepapers/WP-035.md) §8 identified the gap. The prior position — that degradation was bounded, announced as maintenance, reversible, and in a domain where failure is inconvenient rather than harmful — established proportionality and not consent. A user told that maintenance is occurring has not been told that students will deliberately break the component they depend on in order to observe what happens.

The disclosure is one paragraph. Its absence meant the programme was running an experiment on people who had not been told they were part of one, in the same quarter as a module whose fourth day is about what you owe the person on the other side of an interface. That is an exact self-refutation and the design had no defence for it beyond not having considered it.

**Scope of the disclosure.** It covers deliberate disturbance and instrument adoption. It does not cover ordinary defects introduced by student work in the normal course, which are disclosed on the same basis as any service's defects — that is, not individually. Where a user's data or a user's decision could be affected by a disturbance, the window is not run.

## The withdrawal commitment

**If the substrate cannot be delivered, the operations, incident and monitoring content is withdrawn rather than simulated.**

Concretely, that means S068, S079 and S080 are not taught, EA-1 is reduced in scope, EA-2 is not assessable in its current form, and the [Programme Charter](/archive/bsc-programme/program/00-Program-Charter.md) is amended to remove the claims that depend on them. The programme would be smaller and its entrustment claims weaker, and it would say so.

The alternative — running these days against an injected-fault simulation and continuing to describe the outcome as production judgement — is the exact failure this programme was designed to correct. A simulated incident produces a student who can perform incident response. The programme claims to produce students who can decide under consequence. Those are different claims and only one of them is worth three years.

**The same commitment applies one layer down.** If a platform capability cannot be operated — because the tenant lacks the licence, because capacity is unavailable in the window, or because the service has been withdrawn — the day states that the capability is demonstrated rather than operated, and its specification does not assess it. What is not permitted is to keep the assessment and replace the operation with a description of one. The two failure modes this page exists to prevent are the same failure mode at different scales: claiming consequence that is not there.

## Open questions

- What is the minimum viable user base below which consequence is no longer real?
- Can a receiving cohort meaningfully assess a handover it does not yet understand well enough to judge?
- Does staff escalation, once used, permanently change what students are willing to risk?
- What is the actual staff-hours-per-student figure, and has any comparable programme published one? No source in this repository answers this.
- **How much of the governance layer can this institution actually operate?** Purview assessments and several posture capabilities carry tenant-administration prerequisites that are held by an institution's central IT rather than by a department, and the answer determines whether Q8's governance days are operated or demonstrated. It is not known and it is not in the programme's gift.
- **What does the toolchain actually consume?** Ninety cohort-days of agent-mediated work against a metered platform is a consumption profile no source in this repository describes. The ceiling bounds the exposure; it does not tell the programme what the number will be, and the first offering is where that is found out.
- **Does a monthly ceiling that binds distort the teaching?** A cohort that learns to work within a ceiling has learned something real. A cohort that learns to avoid the interesting experiment because it is expensive has learned something the programme did not intend to teach, and the two are hard to tell apart from the outside.

## Related pages

- [Programme Charter](/archive/bsc-programme/program/00-Program-Charter.md)
- [Assessment Architecture](/archive/bsc-programme/program/03-Assessment-Architecture.md)
- [Microsoft AI Platform Map](/archive/bsc-programme/program/11-Microsoft-AI-Platform-Map.md)
- [Durable and Perishable Register](/archive/bsc-programme/program/09-Durable-and-Perishable-Register.md)
- [Agent Configuration Standard](/archive/bsc-programme/program/13-Agent-Configuration-Standard.md)
- [research/06-microsoft-platform/hve-core-repository.md](/research/06-microsoft-platform/hve-core-repository.md)
- [research/01-course-structure/cmu-17-645-ml-in-production-ai-engineering.md](/research/01-course-structure/cmu-17-645-ml-in-production-ai-engineering.md)
- [research/06-microsoft-platform/collected-materials.md](/research/06-microsoft-platform/collected-materials.md)
