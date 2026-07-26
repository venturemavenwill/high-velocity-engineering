# Entry state and `satisfiable_from`

> A dependency is not absolute. **It is relative to an assumed entry state**, and the graph natively encodes exactly one — the BSc's, which is *knows nothing*.
>
> This page adds the field that lets a projection compute its own. It is a **`method`-namespace artefact**: design reasoning with no external warrant. See [namespaces.md](concepts/namespaces.md) for what that licenses, and read the limitations at the bottom of this page before using it.

## Why the field exists

[projections/workshop-2day](projections/workshop-2day/DERIVATION.md) declared four things it could not deliver, then a mechanical query showed its nine seed days carried a **57-day transitive dependency closure** — 48 implied prerequisites for a two-day format. The projection was not dependency-closed and had never said so.

The diagnosis was not that the classification was too generous. It was that *dependency* had been measured against the wrong entry state. `S051` depends on `S011` because S051 asks *"what does S011 tell you it must therefore make expensive?"* — a dependency on S011's **claim**, not on having met it here. A working engineer may already hold that claim from practice. A first-year student holds none of them.

## The reference entry state

Every value below is judged against **one specific person**, and the field is meaningless without them:

> A working software engineer with about five years of delivery experience. They have shipped and operated production systems, debugged live incidents, and worked in a team. They have **no** formal training in measurement, statistics, machine learning, or research method. They have used LLM APIs and coding assistants as a consumer but have never evaluated one. Competent and experienced — not exceptional, not a specialist.

A projection to a different audience — senior data scientists, new graduates, executives — **may not use this register unmodified.** It must state its own reference person and re-derive.

## The three values, and what each obliges a projection to do

| Value | Meaning | The projection must |
|---|---|---|
| `ordinary-professional-experience` | The reference person reliably holds the claim, strongly enough for what depends on it. | **Assume** it silently. |
| `either` | Commonly held, but informally or partially. Some of the audience will have it; some will not. | **Declare** it as an assumption. Not assume it. |
| `this-programme-only` | Not available from ordinary practice — taught only in specialist training, or practice teaches the opposite. | **Deliver** it, or drop what depends on it. |

`either` is not a hedge. It is the value that means *say this out loud*.

## Why the field is on the day and not on the edge

Edge-level would be more precise: S051 might need only the weak form of S011 while S062 needs the strong form. It was rejected because **the consumer is closure pruning, which asks a node question** — does this day stay or go? If any dependent needs the strong form, the day stays. The node value is therefore the minimum over incoming edges, and computing it per-edge would change nothing unless a projection pruned per-path, which none does.

Recorded as a refinement, not a defect. It becomes real if per-path pruning is ever wanted.

## The register

Judged by nine independent agents, ten days each, against the reference person above. The graph builder parses this table; **it is the source, and `graph/` is derived from it.**

| Day | satisfiable_from | Reason |
|---|---|---|
| S001 | this-programme-only | Practice teaches fluency-as-mastery; desirable difficulties and self-as-instrument are actively counter-taught. |
| S002 | either | Holds a vague machine model; few can execute a complete one or use it as an oracle. |
| S003 | either | Float and Unicode burns are common; asking what a representation discarded rarely generalises past the burn. |
| S004 | this-programme-only | Code review teaches accommodation, not mandated rejection; proof as reader-relative sufficiency is taught nowhere. |
| S005 | this-programme-only | Establishment, preservation and termination for unbounded processes is specialist; practice substitutes testing. |
| S006 | either | Senses implicit assumptions; almost none can state one as a checkable invariant with obligations. |
| S007 | either | Everyone decomposes and has seam regrets; a cost criterion held as a recorded, adjudicated bet is rare. |
| S008 | either | Nearly all write recursion; almost none justify it via base case, hypothesis and well-founded ordering. |
| S009 | this-programme-only | Practice actively teaches confirmatory testing and coverage belief; falsification-first inverts the installed habit. |
| S010 | this-programme-only | Accurate public error disclosure under live assessment stake needs a firewall practice never supplies. |
| S011 | either | Holds "pick the right structure"; rarely that *similar* is a chosen model, dimension and metric. |
| S012 | either | Knows some comparisons are slow; rarely separates comparison count from per-comparison cost as multiplied terms. |
| S013 | this-programme-only | Practice teaches hash lookup is O(1); the worst-case/amortised split as caller-dependent is actively unlearned. |
| S014 | either | Recognises trees and graphs; rarely performs shape recognition on prose or spots identical deep structure. |
| S015 | either | Has met stakeholders and chosen structures; rarely derives an operation mix from a live caller's own words. |
| S016 | either | Knows caches exist; rarely holds access pattern as the performance model over operation count. |
| S017 | either | Has met noisy neighbours and priorities; rarely holds that every scheduling policy has a named victim. |
| S018 | this-programme-only | Practice assumes graceful degradation; the retry-amplification cliff is routinely built wrong by experienced engineers. |
| S019 | this-programme-only | Five years of ops teaches averages and headroom; unbounded latency near saturation is specialist queueing knowledge. |
| S020 | this-programme-only | Engineers estimate capacity, but defending a pre-observation number weighted on its breaking assumption is untaught. |
| S021 | either | Holds "pick the right approach"; rarely each paradigm as a checkable structural claim that can be falsified. |
| S022 | either | Knows p99 tails informally; rarely distinguishes expected-cost from amortised as separate promises to a caller. |
| S023 | this-programme-only | Reduction's direction rule is specialist; ordinary usage of "reduce A to B" teaches the inverted conclusion. |
| S024 | either | Has escalated bad news under pressure; rarely holds a hardness finding as a duty owed the moment it is known. |
| S025 | this-programme-only | Practice ships heuristics with no stated promise; requiring every approximation to carry a checkable guarantee is untaught. |
| S026 | this-programme-only | Practice actively teaches proxy-as-truth — latency is speed, pass rate is correctness. Construct-instrument divergence is unavailable outside measurement training. |
| S027 | this-programme-only | The default noise model is universal and wrong; decomposing systematic, drift and selection error requires formal training. |
| S028 | this-programme-only | Reads aggregate pass rates as facts; sampling, intervals and population-of-inference are not available from delivery work. |
| S029 | this-programme-only | Has never built or validated a measuring instrument; "an instrument that never failed was never tested" is not a practice norm. |
| S030 | this-programme-only | Defending an uncalibrated judged score without concealing or retreating presupposes S026–S029 and has no ordinary analogue. |
| S031 | either | Debugs races; few can state a correctness property precisely and name what rival properties would cost. |
| S032 | either | Irreproducible defects are common in ops; building a falsifiable evidence argument instead of retrying is not. |
| S033 | ordinary-professional-experience | Five years of production work reliably teaches timeouts, unknown outcomes, retries and idempotence as live concerns. |
| S034 | either | Consumes consistency guarantees; writing one as a caller-facing contract with permitted anomalies is uncommon. |
| S035 | either | Controlled production change is routine; committing an observable working criterion before the break is not. |
| S036 | this-programme-only | Delivery practice actively rewards implementing the request as written; treating it as evidence is trained out. |
| S037 | this-programme-only | Non-intervening observation, and modelling self-report as a biased instrument, is specialist method training. |
| S038 | either | Naming debates are universal; provenance-checking every term against the expert's own words is rare. |
| S039 | either | Experienced engineers do push back on requirements; evidence-backed negotiation of a published criterion is uneven. |
| S040 | this-programme-only | Delivery pressure rewards convergence; sustaining an unresolved characterisation against a solution is untrained. |
| S041 | this-programme-only | Holds "use a held-out set"; that a score estimates a *named population* is specialist. |
| S042 | this-programme-only | Practice actively teaches the opposite — leaderboard-chasing and repeated re-evaluation on one set is normal engineering. |
| S043 | either | Overfitting is folk knowledge; capacity choice as a checkable structural hypothesis about the data is not. |
| S044 | either | Threat-models systems; the actor requirement is common, but learned-component attack surfaces are not. |
| S045 | either | Shipping decisions and rollback are ordinary; stating what the system will do badly, to affected users, is not. |
| S046 | this-programme-only | Practice inherits metrics wholesale; constructing a criterion from named stakeholders is taught nowhere in delivery work. |
| S047 | this-programme-only | Building the check your own metric could fail, and acting on it, is the opposite of ordinary metric ownership. |
| S048 | this-programme-only | Judge-as-instrument-with-systematic-error requires measurement training; practice treats more samples as the remedy. |
| S049 | this-programme-only | Clustering, unit of analysis and minimum detectable effect are statistics; the reference person has none. |
| S050 | either | Routinely pushes back on overclaiming; doing so in language a hostile audience can act on is rarer. |
| S051 | either | Has used embeddings; lacks that *similar* is a chosen training signal recoverable by inspection. |
| S052 | this-programme-only | Practice actively teaches attention maps and stated rationales as explanations, not routing records. |
| S053 | this-programme-only | Load-bearing-by-ablation with a stated sensitivity floor is not taught by ordinary delivery work. |
| S054 | this-programme-only | "Aligned" is used unqualified everywhere; annotator error becoming the objective is specialist knowledge. |
| S055 | this-programme-only | Practice rewards stating model limits as permanent properties, not as model-task-distribution-instrument joints. |
| S056 | either | Knows keyword search works; rarely holds it as a baseline whose relevance criterion bounds every number. |
| S057 | this-programme-only | Negative-pair construction defining the retriever, and shared construction as a leak, is not ordinarily available. |
| S058 | either | Understands latency-accuracy tradeoffs; lacks that approximation loss concentrates on documents dense retrieval justified. |
| S059 | either | Distrusts benchmarks informally; lacks the judge-disagreement floor that makes small reported differences no result. |
| S060 | either | Ships and owns outcomes routinely; rarely writes a checkable promise plus an unwanted failure mode. |
| S061 | this-programme-only | Holds general perf intuition; lacks that prefill and decode have opposite bottlenecks, making cost a function of shape. |
| S062 | either | Knows latency/throughput trade-offs and rate limits; rarely holds that the counter key is a distributive decision. |
| S063 | this-programme-only | Knows working sets and cliffs; not that declared output length reserves capacity, making concurrency an allocation choice. |
| S064 | either | Has met quota errors and budgets; rarely separates capacity, quota and budget as three quantities with three owners. |
| S065 | either | Many have argued for spend; few pre-name a check date, a falsifying number, and provenance on every rate. |
| S066 | this-programme-only | Ships through gates daily; practice teaches gates are trusted instruments, not artefacts with two uncounted error rates. |
| S067 | either | Knows staging differs from production; lacks attributing a gap to one of five named differences with distinguishing evidence. |
| S068 | either | Operations teaches alerting and MTTD; detectability as a pre-release design with a stated false-alarm rate is inconsistent. |
| S069 | either | Knows sign-off and RBAC informally; rarely names owner, authority, record and reversal path as four separable things. |
| S070 | this-programme-only | Has shipped under uncertainty; the assessed act — defending what you accept being wrong about — is not practised anywhere. |
| S071 | either | Holds side-effects-are-irreversible and prose-isn't-enforcement; lacks limits-statement-as-enforceable-boundary. |
| S072 | either | Reads and draws control flow fluently; lacks path-set bounding when the branch condition is model-computed. |
| S073 | either | Holds input validation and API contracts; lacks the trust boundary on returned values a caller won't read. |
| S074 | this-programme-only | No decomposition by observational position; practice teaches more telemetry, not that two shapes have no observer. |
| S075 | this-programme-only | Never evaluated a model; unit-of-judgement and intervention-as-attribution are research method, and traces read as explanations. |
| S076 | either | May know prompt injection informally via SQL-injection intuition; lacks write-path enumeration and the adversary without intent. |
| S077 | this-programme-only | Holds exhaustion from ordinary capacity work; poisoning, extraction and attack/accident indistinguishability are specialist. |
| S078 | either | Knows post-hoc filtering isn't access control; lacks index-resident permissions, staleness, and recall cost falling unevenly. |
| S079 | either | On-call alerting and dead signals are ordinary; drift's reference, distance and window need statistics they lack. |
| S080 | either | Can write a blameless postmortem; rarely holds the warranty and undecided-attribution the day actually assesses. |
| S081 | either | Knows org context matters; few treat named people as system components with failure modes and boundary consequences. |
| S082 | this-programme-only | Practice teaches stakeholder consultation; the sampling-frame critique — thoroughness systematically omits the unreachable — is untaught. |
| S083 | either | Communicates risk upward; few hold that completeness without decidability is itself a failure. |
| S084 | either | Has felt adoption resistance; treating it as distributive information rather than a communications problem is uncommon. |
| S085 | ordinary-professional-experience | Negotiating scope against a date-holder and a resource-holder who disagree is routine senior delivery work. |
| S086 | either | Everyone has written handovers; measuring transfer on the receiver at a delay, not on document volume, is rare. |
| S087 | this-programme-only | Practice supplies test reports and dashboards, not bounded argument-with-assumptions; engineers believe broader claims are stronger. |
| S088 | this-programme-only | Enumerating residual risk plainly is uncommon; locating the line between legitimate selection and deception is untaught. |
| S089 | either | Warranty-shaped thinking exists in SLAs; ownership that survives a person, with named slot and transfer, does not. |
| S090 | this-programme-only | Capstone integration of the whole programme's four artefacts under simultaneous handover, risk-communication and release judgement. |

## What the distribution says

| Value | Days | Share |
|---|---|---|
| `ordinary-professional-experience` | 2 | 2% |
| `either` | 47 | 52% |
| `this-programme-only` | 41 | 46% |

**Two days of ninety can be assumed silently.** S033, partial failure, and S085, negotiating scope under constraint — the two most operationally routine things in the programme.

The practical consequence is that `either` is where every projection's real decision lives. Fifty-two per cent of the programme is *commonly held informally and rarely held precisely*, which is the exact population a short-format projection is tempted to skip silently and is obliged to declare instead.

## Limitations — read these before using the register

**1. The distribution is suspiciously consistent with the programme's own thesis.** This programme exists because it believes ordinary practice does not teach these things. Nine agents reading this programme's own pages then concluded that ordinary practice does not teach these things. That is either corroboration or circularity, and **this repository cannot currently tell which.** The judgements were made from programme-internal material only; no practitioner was surveyed and no external source was consulted.

**2. The tie-break biases against `ordinary-professional-experience`.** Classifiers were told that a claim widely held informally but rarely precisely is `either`. That is a defensible rule, but it is a thumb on the scale, and a different rule would produce a different register.

**3. It is one reference person, chosen by design and not sampled.** "Five years, no formal measurement training" is a construct. Real audiences are distributions, and the variance within a cohort is probably larger than the gap between this construct and a neighbouring one.

**4. It is `method` namespace and carries no external warrant.** It licenses design reasoning about projections. It does **not** license any claim about what engineers know, and must not be cited as one.

**The honest status: this is a usable default that has never been tested against a real audience.** Any projection consuming it inherits that status and should say so.

## Falsifiable prediction

If a cohort of ten engineers matching the reference person is given a claim-level pretest across the 90 days, **fewer than 15 of the 47 `either` days will show a majority already holding the claim in the precise form the dependents need.** If more than 25 do, the tie-break in limitation 2 is wrong and the register should be re-derived with a rule that credits informal knowledge more.

*Instrument:* claim-level pretest, one item per day, scored by two independent raters against the day's stated claim — an application of [S029](wiki/seminars/S029.md) and [S048](wiki/seminars/S048.md) to this repository's own metadata.

## Related pages

- [concepts/projections.md](concepts/projections.md) — what a projection may and may not do
- [concepts/namespaces.md](concepts/namespaces.md) — why this is `method` and what that licenses
- [projections/workshop-2day/DERIVATION.md](projections/workshop-2day/DERIVATION.md) — the closure finding that produced this field
- [mcp/hve-iq/README.md](mcp/hve-iq/README.md) — `hve_dependency_closure` consumes this register
