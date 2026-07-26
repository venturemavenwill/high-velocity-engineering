# Durable and Perishable Register

> The rule: **perishable content may be used as an instance of durable content, but it may never be the thing assessed.** A three-year programme that assesses the perishable layer certifies students against a world that will have moved by the time they graduate.

## Why this register exists

Every seminar day in this programme touches concrete systems: named models, named services, named tools. That concreteness is not optional — abstraction taught without instance produces students who can define a concept and cannot recognise it. But concreteness carries a liability, and the liability is that the instance decays faster than the concept.

The register makes the decay rate explicit so that a day designer knows, at design time, which sentences in their material must be checked before every delivery and which will still be true in a decade.

Three classes.

---

## Durable

Content whose truth is not expected to change over the life of the programme. May be assessed directly. May ground a design claim in a whitepaper.

| Content | Where taught | Why durable |
|---|---|---|
| Attention as a content-addressable retrieval operation; the transformer's compositional structure | S052, S053 | Architectural insight, independent of any implementation |
| Lexical retrieval baselines and the ranking problem they define | S056 | The baseline has outlived several generations of successors |
| The geometry of dense similarity and its failure conditions | S057 | Mathematical, not implementational |
| Recall / latency trade in approximate search | S058 | A structural trade-off, not a library feature |
| Construct validity; the gap between a measure and the thing measured | S026 | Predates computing entirely |
| Error decomposition; systematic versus stochastic error | S027 | Measurement science |
| Sampling, intervals, clustering, power | S028, S049 | Statistics |
| The criteria-drift phenomenon and validating the validator | S047 | A property of human judgement under iteration |
| Judge bias in model and human evaluation | S048 | Follows from how preferences are elicited |
| Latency is not throughput; queueing behaviour under load | S019, S062 | Queueing theory |
| Memory hierarchy as the real performance model | S016, S061 | Physics of storage, not a product |
| Consistency models as caller contracts | S034 | Distributed systems theory |
| Partial failure; the unreliable network | S033 | Structural |
| Threat modelling as a method | S044, SG201 | Method, not tool |
| Authorisation as a property of the retrieval path | S078 | Access-control theory |
| Psychological safety; error management; blameless review | S010, S080 | Human factors |
| Contextual inquiry; interviewing technique; ubiquitous language | S037, S038 | Method |
| Negotiation under constraint; risk communication | S083, S085 | Professional craft |
| Entrustment as a decision rather than a score | S090 | Assessment theory |
| The four shapes of tool failure | S074 | A decomposition, not an implementation |

---

## Semi-durable

Content expected to remain true for roughly the length of one cohort's passage, but which must be re-verified at each delivery. May be taught as fact **with a stated as-of date**. May not be assessed without that date attached.

| Content | Re-verify | Note |
|---|---|---|
| Documented planning and self-correction limitations of current language models | Annually | Direction is stable; magnitude and specific failure cases are not |
| Serving-system memory-management techniques | Annually | The problem is durable; the winning technique is not |
| Batching and scheduling strategies in production inference | Annually | |
| Agent orchestration patterns | Annually | Patterns are consolidating but not settled |
| Protocol-mediated tool interoperability | Per delivery | The interoperability *problem* is durable; the specific protocol is not |
| Adversarial technique catalogues for language and agent systems | Per delivery | The attack classes are more stable than the specific exploits |
| Retrieval evaluation benchmark composition | Annually | Benchmarks are gamed, then replaced |
| Evidence on AI assistance and developer productivity | Annually | Currently thin; direction contested |

---

## Perishable

Content that will be false within the life of a single cohort. **Never assessed.** Usable only as an instance, and every use must be marked in the seminar day material.

| Content | Decay driver |
|---|---|
| Specific model names, versions and context-window sizes | Release cadence |
| Leaderboard positions and headline benchmark scores | Continuous |
| Cloud service names, tier names and portal navigation paths | Rebranding and interface change |
| Quota mechanics, throughput unit definitions and provisioning modes | Commercial policy |
| Pricing, per-token costs and commitment discounts | Commercial policy |
| SDK surfaces, method signatures and configuration schemas | Library versioning |
| Vendor maturity models and analyst adoption projections | Marketing |
| Named product integrations and connector catalogues | Product roadmap |

---

## The platform layer

Every course in this programme is now taught against at least one named Microsoft service, and every seminar day is executed against one. **The whole of that layer is perishable.** Nothing in it is assessed, nothing in it grounds a design claim, and every entry below is a vehicle for a claim in the durable table above rather than content in its own right.

Two things distinguish this class from the perishable table and are the reason it has its own section.

**Its cadence is faster than annual.** The general perishable rule is refreshed at each delivery; the platform layer is **verified before every offering**, which in practice means the check runs at least each time a quarter is prepared. The justification is empirical rather than cautious: of the six sources behind [research/06-microsoft-platform/](research/06-microsoft-platform/collected-materials.md), two were already labelled classic or superseded at the moment they were read, and one capability set moves to a different licence in 2026. That was confirmed again on re-verification for this revision — the Purview data-security-posture page the research folder consulted still describes itself as the classic version and states that it has been replaced. **A layer that supersedes itself between two readings of the same page is not on an annual cycle.**

**Each instance is recorded against the durable claim it carries.** This is the mechanism that makes re-anchoring cheap. When a service is renamed, replaced or withdrawn, the question is not what to do with the day — it is whether the claim in the third column still holds under the replacement. If it does, the day is re-anchored and nothing else changes. **If it does not, that is a finding about the claim rather than about the service, and it is recorded in the durable table's review rather than patched here.**

| Platform instance | Where it appears | The durable claim it carries |
|---|---|---|
| GitHub Copilot agent mode; custom instructions and prompt files | Q1 onward, every day | An instrument must be characterised before its output is trusted; a specification that produces non-conforming work is a defective specification |
| Microsoft Learn MCP Server | Q1 onward | A claim travels with its source or it is not a claim |
| Azure MCP Server, read then write | Q2 onward | An abstraction has a bill, and a resource is operated rather than imagined |
| Foundry MCP Server | Q5 onward | Model, agent and evaluation operations are the same class of operation and should be reachable the same way |
| Foundry embedding model deployments | Q2, Q6 | Similarity is a geometric relation, and its failures are geometric rather than semantic |
| Foundry evaluators, their default set and their thresholds | Q3 onward | Defaults are opinions and thresholds are policy; an uncharacterised instrument yields an uncalibrated score |
| Conversation split strategies in agent evaluation | Q5, Q8 | How you partition an interaction determines what you measured |
| Foundry model catalogue composition | Q5, Q6 | Model selection is an architectural decision with a price attached |
| Fine-tuning techniques and their hyperparameters | Q4, Q5 | An optimisation failure can present as a modelling error |
| Provisioned throughput: unit definitions, sizing inputs, spillover, hourly billing | Q7 | Capacity is a commitment; an allocation policy is not available capacity |
| API Management AI gateway policies: token limits, semantic caching, load balancing, circuit breaking | Q4, Q5, Q7 | Contention requires a policy, and the policy is where fairness is decided |
| Azure AI Search access-control approaches and their preview or generally available status | Q3, Q6, Q7, Q8 | Authorisation is a property of the retrieval path; enforcement against indexed metadata carries an inherent lag |
| The chunking behaviour of a retrieval skillset | Q6, Q8 | A transformation that splits a document must carry its permissions with it |
| Purview DSPM for AI; Defender AI posture management | Q5, Q8 | Governance divides into data posture and workload posture, because a permissions fix and an inventory gap are different problems |
| Microsoft Agent Framework orchestration patterns | Q8 | Orchestration is control flow, and control flow admits partial failure |
| Foundry Agent Service; MCP tool definitions and their limits | Q8 | A tool boundary is a trust boundary, and tool failure has four shapes |
| Foundry observability, tracing and continuous evaluation surfaces | Q8 | Detectability is a design property rather than a monitoring product |
| Bicep and the infrastructure-as-code surface | Q4, Q7 | Infrastructure is a reviewable artefact and is reviewed |

### What the verification pass checks

Four things, in this order, because the cheap checks eliminate most of the work.

1. **Does the citation still resolve, and under the same name?** A rename is the most common event and the least consequential.
2. **Is the capability still described in the same terms?** Wording changes in vendor documentation are frequently substantive.
3. **Has preview or generally available status changed?** This is the check that matters most and is easiest to miss, because it changes what a day may recommend without changing what a day may explain. The programme deliberately teaches that **the generally available access-control approach is the one the documentation itself calls a workaround**, and if that ceases to be true the day has lost its point rather than its accuracy.
4. **Does the durable claim in the third column survive the change?** If not, escalate to the durable table's review. This is the only step that can produce work.

### What must never be asserted from this layer

Carried from [research/06-microsoft-platform/](research/06-microsoft-platform/collected-materials.md) and from the [Microsoft AI Platform Map](wiki/program/11-Microsoft-AI-Platform-Map.md), and binding on every page and every day:

- **The 36% retrieval improvement claim.** No benchmark, metric definition, baseline or interval accompanies it anywhere.
- **"Agents launch in weeks rather than months."** Not a finding.
- **The five-stage maturity model**, and any analyst projection.
- **Any evaluator's agreement with human judgement.** None is published. Every judged score produced by this stack is described as uncalibrated, and students are taught to say so.
- **Any detection or false-positive rate for Purview or Defender.** None is published.

**The rule that no effect size is asserted for an unverified source applies to vendor material exactly as it applies to research literature.** The asymmetry students are taught to notice is that every source in the folder states a latency or a sampling bound and none states an accuracy — a property consistent enough across six independent sources to be a feature of the genre rather than an oversight by any one author.

---

## How the rule is enforced

Four mechanisms, because a rule with no enforcement is a preference.

1. **Marking at design time.** Every seminar day plan marks perishable material inline. An unmarked perishable claim is a design defect, caught in review.
2. **Assessment exclusion.** Specification bundles and entrustment rubrics are checked against this register. A specification that requires a student to recall a perishable fact is rejected.
3. **Whitepaper discipline.** [The whitepaper standard](wiki/program/05-Whitepaper-Standard.md) prohibits a perishable detail from grounding a design claim. A whitepaper may say *students meet this idea in the form of a current serving system*; it may not say *students learn service X because service X is what industry uses*.
4. **Re-verification passes, at three different cadences.** Before each delivery, the semi-durable table is re-checked and the perishable instances in each affected seminar day are refreshed. **Before every offering, the platform layer is verified in full against the four checks above**, and the outcome is recorded so that the next pass can see what changed rather than re-deriving it. The durable table is reviewed on a three-year cycle.
5. **A day states its anchor and its perishability together.** Each seminar day's header block names its platform anchor, and the day's own perishability register separates the durable claim from the platform instance carrying it. The claim is assessed; the instance is the vehicle. A day whose header names an anchor and whose register does not name the durable claim behind it has not been designed, and is caught in the same review as an unmarked perishable claim.

## The machine index

Mechanism 5 above makes every day state its durable claim and its platform instance side by side, and every day now expresses that pairing as a table — which means **it can be read by a machine without anyone re-authoring it**. [scripts/build-graph.ps1](scripts/build-graph.ps1) extracts those rows into `graph/claims.jsonl` — **581 pairs across 89 days** — and [HVE IQ](mcp/hve-iq/README.md) serves them, so the question *"this service changed; what does it cost us?"* is answered by query rather than by re-reading ninety files.

No judgement is applied in the extraction. The claims are the ones the day already wrote; the index adds only the day's anchor, module and quarter by join. **If the index disagrees with a day, the day is right.**

**One blind spot remains, and it is declared by the tool in every answer:** [S090](wiki/seminars/S090.md) has no perishable content of substance. That is a true zero, not a gap — the day's anchor is not a service.

### What the conversion of S001–S015 found

S001–S015 were originally invisible to the index, and the assumption recorded here was that they were prose-only and predated the table format. **That was half wrong, and the half that was wrong is the useful part.**

S011–S015 already carried conforming tables. They were invisible for one reason: the section heading read `## Perishability register` rather than `## Perishable content in this day`, and the extractor keyed on the literal string. **A heading, not a format, was hiding thirty claims** — including every perishable instance in the module that first introduces Foundry embeddings.

Only S001–S010 needed pairings authored, and their prose already separated durable from perishable, so the authoring was pairing rather than invention. All original prose survives beneath the tables, including S001's record of what the register cost it.

Two findings worth keeping:

- **[S002](wiki/seminars/S002.md)'s central durable claim has no platform instance at all.** *A machine's next state is a function of its current state* is carried by a teaching machine that "corresponds to no product and never will." It is the one headline claim in the early modules with zero perishable exposure, and the table records that by omission rather than by inventing a carrier.
- **One vendor behaviour is load-bearing for two separate days.** The file-visibility-versus-terminal-permission asymmetry carries a durable claim in both S001 and S002. That concentration is exactly what the index exists to surface, and it is now visible.

## The uncomfortable consequence

Students will occasionally learn a concept through an instance that is already stale by the time they encounter it in industry, and will find that the specific commands they were shown do not work. This design accepts that outcome. The alternative — chasing currency — produces a programme that is a perpetually out-of-date tutorial, which is both worse and more expensive.

What the programme owes students instead is the ability to *re-acquire the perishable layer quickly*, which is a durable skill and is taught explicitly in S011, S015 and S086.

## A known failure mode of this register

The boundary between semi-durable and durable is not stable. Several items currently listed as durable — the four shapes of tool failure, the criteria-drift phenomenon — are durable in this design's judgement and have a shallower evidential base than, say, queueing theory. If they turn out to be artefacts of a particular generation of systems, they will have been assessed when they should not have been. The register is therefore a claim, not a fact, and the durable table carries the higher review burden precisely because errors there are the expensive ones.

**The platform layer sharpens this rather than introducing it.** Several durable claims in the third column of the platform table were extracted from vendor documentation about a single vendor's implementation, and an extraction that has only ever been tested against the system it was extracted from is not yet a generalisation. *Authorisation is a property of the retrieval path* is safe; it predates this platform by decades. *Governance divides into data posture and workload posture* is weaker — two sources reaching the same two-sided shape is real evidence and it is weak evidence, and the shape may reflect how one organisation divided its product teams. **The claims in that column are load-bearing exactly in proportion to how much the design leans on them, and the ones doing the most work are the ones least separable from their origin.** Where a re-anchoring shows a claim does not survive a change of implementation, that is the evidence arriving, and it is recorded rather than absorbed.

## Related pages

- [Programme Charter](wiki/program/00-Program-Charter.md)
- [Whitepaper Standard](wiki/program/05-Whitepaper-Standard.md)
- [Microsoft AI Platform Map](wiki/program/11-Microsoft-AI-Platform-Map.md)
- [Copilot Practice Standard](wiki/program/12-Copilot-Practice-Standard.md)
- [Substrate and Infrastructure](wiki/program/10-Substrate-and-Infrastructure.md)
- [research/06-microsoft-platform/collected-materials.md](research/06-microsoft-platform/collected-materials.md)
