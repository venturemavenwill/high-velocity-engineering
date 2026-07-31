# Learning Science Foundations

> The empirical basis for the whole programme. Every seminar day and every whitepaper argues from this page. It is written to be argued with: each mechanism carries its scope conditions, its known boundary effects, and its failure modes, because a design that cites only supporting evidence is not evidence-based.

## Position

Retention and transfer are **design variables**. They are determined less by what is taught than by how practice is scheduled, where difficulty is placed, how knowledge is retrieved, and whether the learner's own experience of learning is calibrated. A curriculum that optimises for in-session fluency will reliably produce forgetting, because the conditions that make learning feel easy and the conditions that make it durable are substantially different — and in several well-replicated cases, opposed.

This is the single most consequential claim in the programme, and it commits the design to something uncomfortable: **students will often perform worse during a seminar day than they would under a smoother design, and will be told this is intentional.** The commitment is defensible only if the mechanisms below hold, and only if the programme instruments itself well enough to notice when they do not.

---

## Four sources moved from synthesis to full reading on 2026-07-30

Until that date, four of the works this page rests on were recorded as syntheses written from abstracts rather than full-text readings — **nobody in this repository had opened them.** All four have now been read in full and their notes rewritten: Keith and Frese's error-management meta-analysis, Edmondson's *The Fearless Organization* (2019), Kapur's *Productive Failure* (book), and Bandura's *Self-efficacy in Changing Societies* (1995).

**Three of the four readings corrected something this page taught**, and the fourth withdrew a prohibition the research note had issued.

| Source | What the full reading did | Amended at |
|---|---|---|
| Keith and Frese | Withdrew a within-training claim. The advantage is a post-training transfer advantage and is **absent** during training, not reversed | §9 |
| Edmondson (2019) | Withdrew a definition. The author's current wording drops *shared* and *team*, which this page taught as definitional | §9 |
| Bandura (1995) | Withdrew a design principle. Easy, safe success does not build resilient efficacy; overcoming obstacles does | §12 |
| Kapur (book) | Withdrew a **prohibition** rather than a claim: the design features are domain-general, so the ban on using productive failure for general professional skills falls | §10 |

The corrections are annotated at the point of change and the superseded positions are left visible, as everywhere else in this repository. A reader who cannot see what the page used to say cannot evaluate the correction.

**What full-text verification did not unlock.** It does not license a magnitude. The rule that **no effect size, percentage or magnitude is asserted anywhere in this wiki for a pedagogy claim** is a *namespace* rule and not a *verification* rule — see [concepts/namespaces.md](/concepts/namespaces.md). It is unchanged by these readings. All four notes now record magnitudes they did not previously hold, and **none of them may cross into this wiki.**

**What remains unread, and is named in the same sentence as every claim resting on it.** Edmondson's 1999 ASQ paper; Bandura's 1977 paper; and both Kapur journal articles. Where this page or any whitepaper leans on the learning-behaviour mediation, on the discriminant separation of safety from team efficacy, or on the productive-failure meta-analysis's moderators, **it is leaning on a source nobody here has read**, and it now says so.

---

## Part I — Mechanisms of durable encoding

### 1. The testing effect (retrieval practice)

Retrieving information from memory strengthens later retention more than restudying the same material for the same time. The canonical demonstration compares repeated study against repeated testing at a delay: testing wins substantially at one week, while restudying wins on an immediate test — an inversion that makes the effect easy to miss in ordinary classroom feedback.

**Design consequence.** No seminar day opens with review. Phase 2 of every day is a **cumulative retrieval set** drawn from prior modules, closed-book, low-stakes, with feedback. Restudy is permitted only after a retrieval attempt has been made and scored.

**Scope conditions and limits.**
- The advantage grows with retention interval and largely disappears at very short intervals. A programme that tests only immediately after teaching captures almost none of it.
- Feedback matters more for retrieval practice than for restudy, because unsuccessful retrieval without correction can consolidate the error.
- The effect is weaker for material the learner never encoded adequately in the first place. Retrieval practice is not a substitute for initial instruction; it is a substitute for *re*-instruction.
- Transfer of the testing effect to inference-level tasks is real but smaller and less consistent than transfer to same-format recall. The programme therefore varies retrieval format deliberately (see §6).

### 2. Distributed practice (spacing)

Practice separated in time produces better long-term retention than the same practice massed. The relationship between optimal gap and retention interval is systematic rather than arbitrary: longer desired retention implies longer optimal spacing, with the optimum a substantial fraction of the target interval.

**Design consequence.** The retrieval schedule is **programme-wide and cumulative**, not quarter-local. Seminar day numbering runs `S001`–`S090` continuously precisely so that day 61 can retrieve day 7. Each seminar day's plan names the days its retrieval set draws from, and gaps expand rather than repeat at fixed intervals.

**Scope conditions and limits.**
- Spacing costs acquisition speed. Massed practice looks better in-session, which is why it survives in curricula despite the evidence.
- There is no single optimal gap; the optimum depends on the retention interval, and for a three-year target the implied gaps are months, not days. The programme therefore uses expanding intervals across quarters, which is a design inference and not directly warranted by the spacing literature.
- Very long gaps can drop retrieval success low enough that the attempt provides little benefit without support. Retrieval sets in this programme carry scaffolded prompts for items last seen more than two quarters earlier.

### 3. Interleaving and contextual interference

Mixing problem types within a practice session, rather than blocking them by type, depresses practice performance and improves later discrimination and transfer. The mechanism most consistent with the data is that interleaving forces the learner to *select* a strategy rather than merely execute a pre-announced one — and strategy selection is the skill that transfers.

**Design consequence.** Problem sets are interleaved across the four concurrent courses of a quarter rather than blocked by course. Phase 5 of the seminar day, the whole-task learning task, is by construction interleaved, because a real system does not announce which discipline the next fault belongs to.

**Scope conditions and limits.**
- Interleaving benefits depend on the categories being confusable. Interleaving genuinely unrelated material gains little and costs switching overhead.
- The effect is strongest for discrimination-heavy learning; for pure procedural fluency on a single well-defined operation, blocking can be superior early.
- Learners consistently rate interleaved practice as less effective while performing better on it — a metacognitive illusion the programme must actively manage (see §11).

### 4. Generation, and the pretesting effect

Producing an answer, even a wrong one, before being shown the correct answer improves retention of the correct answer relative to simply studying it. Unsuccessful attempts are productive: the failed retrieval appears to prepare the encoding of the subsequent correction, and errors made with high confidence are corrected especially reliably once feedback arrives.

**Design consequence.** Phase 1 of every seminar day is a **pretest on material not yet taught**, with confidence ratings attached. Students are told explicitly that low scores are expected and are not recorded. Phase 6, the error clinic, exploits the same mechanism deliberately by exposing high-confidence errors.

**Scope conditions and limits.**
- Pretesting benefits require feedback to follow within the session. Without it the risk of consolidating the error is real.
- Benefits are clearest for material where a plausible-but-wrong answer is generable. For arbitrary associations the effect is weaker.
- The affective cost is nontrivial. Repeated public failure without a safety norm suppresses participation, which is why §9 is load-bearing rather than decorative.

### 5. Elaboration, self-explanation and the ICAP ordering

Learners who explain material to themselves, ask and answer why-questions, and articulate reasoning aloud retain and transfer more than those who summarise or highlight. Constructive activity — producing something beyond what was presented — outperforms active engagement, which outperforms passive reception; interactive dialogue with a partner outperforms all three when both partners contribute constructively.

**Design consequence.** Phase 7 is a **peer articulation phase** structured so that both partners must produce, not merely agree. Phase 4's instruction is delivered in a worked-example-with-prompted-self-explanation format rather than as continuous exposition.

**Scope conditions and limits.**
- Interactive dialogue only outperforms constructive solo work when both partners genuinely construct. Unstructured pair work frequently degrades into one partner explaining and the other receiving, which is passive for the receiver.
- Self-explanation prompts help novices substantially and can be redundant for experts, an instance of the expertise reversal pattern in §7.

### 6. Transfer-appropriate processing and encoding specificity

Retrieval succeeds to the degree that the processing performed at retrieval matches the processing performed at encoding, and to the degree that retrieval cues overlap encoding context. This reframes "deep processing is better" into something more precise and more useful: **processing is better when it matches the eventual use.**

**Design consequence.** Because the eventual use is *deciding under uncertainty in someone else's organisation*, encoding conditions are built to match: ambiguous problem statements, incomplete information, oral defence, and a real system. It is also the reason retrieval format is varied — recall, recognition, application, explanation and critique — rather than standardised.

**Scope conditions and limits.**
- Taken strictly, this principle warns against over-optimising practice conditions to a single assessment format, which is a real risk in a programme with a strong oral component.
- Context-dependent memory effects are reliable but modest, and are reduced when the material is well learned. Varying context (§8) is the mitigation.

---

## Part II — Managing capacity

### 7. Cognitive load, element interactivity and expertise reversal

Working memory is severely limited for novel, interacting information and effectively unlimited for information organised in schemas held in long-term memory. The instructional load imposed by material is a function of **element interactivity** — the number of elements that must be held simultaneously because they cannot be understood in isolation — and this is not a property of the material alone but of the material relative to the learner's existing schemas.

Three consequences are directly designed for:

- **Worked examples then completion then problems.** For high-interactivity novel content, studying worked examples outperforms solving equivalent problems. As competence develops, guidance is faded through partially completed problems to full problems.
- **Expertise reversal.** Guidance that helps a novice actively harms a more expert learner, because processing redundant support consumes capacity. Support must be withdrawn, not accumulated.
- **Split attention, redundancy and modality.** Physically or temporally separated sources that must be integrated impose avoidable load; duplicated information in two modalities imposes avoidable load; transient information — anything spoken or animated that cannot be re-inspected — imposes avoidable load.

**Design consequence.** Phase 4 uses worked examples with faded guidance and integrated rather than separated representations. Phase 5's whole-task work supplies **procedural information just in time** and **supportive information in advance**, a distinction drawn from four-component instructional design and used throughout the seminar pattern. Transient explanation is minimised: anything a student must reason with is available in writing.

**The tension with Part I.** Desirable difficulties increase load deliberately; cognitive load theory reduces it. These are not contradictory but they are not automatically reconcilable either. The programme's working rule — which is a **design judgement, not an empirical finding** — is that difficulty should be introduced in the *retrieval and selection* dimensions and reduced in the *representational and attentional* dimensions. A student may be asked to solve an unfamiliar problem before instruction; they should never have to reconstruct a diagram from prose to do it.

### 8. Whole-task sequencing and variability of practice

Complex skills decompose poorly. Teaching constituent skills separately and expecting integration to emerge is the dominant failure mode in engineering education. Four-component instructional design instead sequences **whole but simplified tasks** in increasing complexity classes, with variability across the tasks within each class, supported by part-task practice only for constituent skills that must reach automaticity.

**Design consequence.** This is the structural basis for the seminar day and for the substrate. Every seminar day contains one whole-task learning task located on the live system. Task classes increase in complexity across the eighteen modules. Variability is deliberate: no two learning tasks in a class share a surface structure.

**Scope conditions and limits.**
- Whole-task designs are expensive to author and to staff, and they fail badly if the simplification of early task classes is done carelessly — an over-simplified whole task teaches a distorted schema that must later be unlearned.
- Variability of practice increases transfer and depresses immediate performance, consistent with §3 and §4.

### 9. Psychological safety and error management

Teams and individuals learn from error only in environments where reporting error is not punished. Error management training — which supplies **active exploration together with explicit encouragement to make errors during training and to learn from them**, and in which **the trainer provides no further assistance when an error occurs** — outperforms error-avoidant training on **post-training transfer**, with the advantage concentrated in tasks unlike those practised. Psychological safety is a reliable predictor of learning behaviour and is established primarily by leader behaviour, including visible fallibility.

> **Amended 2026-07-30, on the first full reading of Keith and Frese.** The paragraph above previously read that error management training "explicitly frames errors as informative and encourages exploration" and "outperforms error-avoidant training on transfer tasks", without saying *when* the advantage appears. The meta-analysis was effective **only** where post-training and not within-training performance was considered, and **the within-training difference is not significant.** The advantage during training is **absent, not reversed.**
>
> **Any reading of this page which took error-avoidant training to look better in the session is withdrawn.** The programme's willingness to pay an in-session cost is warranted by §§2–4 — spacing, interleaving and generation — and **not** by this source. Two further corrections travel with it. The withholding of assistance is part of the method rather than a staffing economy, and it was not previously recorded here at all. And the decomposition of the method into two independently effective elements, which this page had stated as established, is offered by the authors only as something the finding "can be interpreted to the effect that", with further study requested.

**Psychological safety, in the author's current words.** "The belief that the work environment is safe for interpersonal risk taking."

> **Amended 2026-07-30, on the first full reading of Edmondson (2019).** This page, and the seminar days that argue from it, taught the definition as a ***shared*** belief that a ***team*** is safe. **The author's 2019 restatement drops both words.** The scope is the work environment; the group is the level at which the belief is observed, not what the definition is about. The older wording is left visible because it is correctly attributed to the 1999 ASQ paper — **which this repository has never read** — and because several seminar days still carry it.

**What it is not**, and the author is emphatic on each. Not *nice* — "you could say it's the opposite". Not comfort or ease. Not a personality factor. **Not trust**: trust concerns whether *you* give others the benefit of the doubt, and safety concerns whether others will give it to *you*. And **not lowered standards** — equating it with an inability to hold people to account is "a misunderstanding of the nature of the phenomenon". Safety and standards are **two separate and equally important dimensions**, not two ends of one, and the quadrant that should worry a demanding programme is **high standards with low safety**. Safety "takes off the brakes that keep people from achieving what's possible. But it's not the fuel that powers the car" — it makes disclosure affordable and supplies no competence whatever.

**Design consequence.** Phase 6 of the seminar day is an **error clinic** in which errors are surfaced deliberately. Staff model fallibility explicitly. Incident review on the substrate is blameless by protocol and the protocol is published. Failures are separated by archetype rather than treated as one thing: **preventable failure is never good news, complex failure is still not good news, and intelligent failure must be celebrated** — which is the distinction the clinic's disclosure classes implement. And because safety is **reinforced rather than harmed by fair, thoughtful responses** — which on the author's account can extend to dismissal for a genuinely blameworthy act — the programme states the firewall's exceptions in advance rather than leaving them to be discovered. Readings: [research/04-professional-formation/keith-frese-error-management-training.md](/research/04-professional-formation/keith-frese-error-management-training.md) and [research/04-professional-formation/edmondson-psychological-safety.md](/research/04-professional-formation/edmondson-psychological-safety.md), **both read in full on 2026-07-30**; [research/04-professional-formation/frazier-psychological-safety-meta-analysis.md](/research/04-professional-formation/frazier-psychological-safety-meta-analysis.md), **verified at abstract level only and asserting no magnitude.**

**Scope conditions and limits.**
- Psychological safety is necessary and not sufficient; it predicts learning behaviour rather than learning outcome. **The claim that it acts *through* learning behaviour, and the discriminant separation of safety from team efficacy, rest on the 1999 ASQ paper, which this repository has not read** — the 2019 book restates neither. Every wiki claim that safety works via learning behaviour is leaning on an unread source and must say so where it appears.
- **A moderator this page previously missed entirely.** The task itself must supply clearly interpretable and informative feedback for error management training to be effective — and the authors report that hypothesis "received only limited support". It is named here because it bites hardest in this setting: the systems this programme teaches on frequently fail silently, which is the unclear-feedback case.
- **Two bounds now travel with every citation of the error-management source.** All of its effects are **relative to another training method and never to no training**, and **none of the available studies measured on-the-job performance.** Nothing in it reaches professional practice on its own warrant.
- Error management framing can be misread as tolerance of carelessness. The programme distinguishes explicitly between *error in exploration*, which is encouraged, and *error in verification*, which is not — and now has the author's own formulation to lean on, that safety is not an inability to hold people accountable.

### 10. Productive failure

Having learners attempt to generate solutions to a problem targeting a concept they have not yet been taught, *before* receiving instruction, produces better conceptual understanding and transfer than instruction followed by practice — despite, and apparently because of, the failure of the initial attempts. The generation phase appears to activate and differentiate prior knowledge, making the subsequent instruction interpretable in a way it otherwise is not.

**The failure is sufficient and not necessary.** The author's own formulation, read in full on 2026-07-30: "Impasses, failures, errors, and misconceptions are **sufficient, but not necessary**." What is mandatory is the other half — "the power of Productive Failure cannot be realized without assembly… without a proper assembly, all of it goes to waste." A design that produces failure and then fails to assemble what the room produced has not run a weak version of the method; it has run none of it.

**Design consequence.** Phases 3 and 4 are ordered **problem-first, instruction-second**, deliberately and against convention. Phase 3 uses contrasting cases to make the relevant distinctions noticeable without naming them. Reading: [research/04-professional-formation/sinha-kapur-productive-failure.md](/research/04-professional-formation/sinha-kapur-productive-failure.md) — **the book was read in full on 2026-07-30; both journal articles remain unread**, and every claim below that traces to the meta-analysis rather than to the book rests on an abstract.

> **Amended 2026-07-30: a prohibition is withdrawn.** The research note previously issued teaching guidance that this programme should **not** use productive failure for general professional skills such as structured communication or interview technique, and should confine it to domain-specific technical content. **The book contradicts the operational half of that.** The design's features "are not tied to mathematics or any other domain. They remain domain general", and the author reports applying the cycle across writing, business, psychology and creative fields among others. The prohibition was an inference — a moderator about domain-general *learning outcomes* was converted into a ban on domain-general *subject areas* — and it is withdrawn rather than quietly dropped, because days in this programme were designed around it. **The honest position is that the two sources emphasise different things, that the meta-analysis has not been read past its abstract, and that the question is open.**

**Scope conditions and limits.**
- The consolidation phase is not optional. Productive failure without a well-designed instructional follow-up is simply failure. This is now the author's own strongest statement rather than this design's inference.
- **The boundary the author actually states, which this page did not previously carry.** The method is not needed for purely procedural learning goals — "**Unless of course you need to understand why the procedure is the way it is**", which is the qualification that keeps most of this programme inside the boundary rather than outside it. The claim that effects are frequently null or negative for procedural fluency comes from the meta-analysis abstract and is **retained at that depth**, marked, because the book states the boundary differently.
- **Three further ways it fails, all named by the author.** Bad design or implementation; classroom norms misaligned with a method that asks people to fail in front of each other; and difficulty miscalibrated so high that learners give up. The third is a calibration problem the design owns: "In a well-designed learning environment, more people will appear resilient and motivated… **the burden is then on the designer**."
- The design is demanding of staff: the consolidation must build on what the students actually produced, which cannot be fully scripted in advance.

---

## Part III — Calibration, motivation and the learner's own model

### 11. Metacognitive illusions and calibration

Learners' judgements of their own learning are systematically miscalibrated and are driven by **processing fluency** — how easily material comes to mind now — rather than by durability. Re-reading feels effective and is not; interleaved and spaced practice feel ineffective and are. Left unmanaged, this means students will resist exactly the practices that help them and will optimise their private study toward the practices that do not.

**Design consequence.** This is why calibration is a *phase* rather than an aside. Phase 8 requires students to predict their delayed performance and later confronts them with the outcome. The programme's own design rationale is taught to students in Q1 and revisited, because compliance with an aversive-feeling design requires the student to hold the model, not merely be subject to it.

**Scope conditions and limits.**
- Calibration training improves calibration on trained tasks and generalises weakly.
- Confronting students with miscalibration can reduce self-efficacy if handled without the safety conditions in §9. The two mechanisms must be designed together or not at all.

### 12. Self-efficacy

Beliefs about one's capability to execute a task determine the goals people set, effort, persistence and resilience to failure, and are formed principally from mastery experience, then vicarious experience, social persuasion and interpretation of physiological state. **"The most effective way of creating a strong sense of efficacy is through mastery experiences."**

> **Amended 2026-07-30, on the first full reading of Bandura's 1995 volume.** This page's design consequence previously rested on a principle the research note had drawn from the 1977 abstract: that the productive zone is *subjectively threatening and objectively safe*, and that early success should therefore be made reachable. **The volume contradicts that as a principle of curriculum design.** "If people experience only easy successes they come to expect quick results and are easily discouraged by failure. **A resilient sense of efficacy requires experience in overcoming obstacles through perseverant effort.**" What survives is a **timing** constraint and not a difficulty ceiling: the warning is against failure before a sense of efficacy is established, and against situations where people are likely to fail often — not against difficulty as such. The superseded principle is left visible because early task classes were sized against it.

**Design consequence.** Early task classes are engineered so that success is genuine and **non-trivial, with the obstacle left in** — not by lowering standards and not by controlling complexity class down to comfort. The credit structure recognises demonstrated capability rather than accumulated points. Vicarious experience is supplied by near-peer demonstration in phase 7, with second-year students visible to first-year cohorts on the shared substrate. **Social persuasion is treated as the weak instrument the source says it is, and is not relied on alone**: "It is more difficult to instill high beliefs of personal efficacy by social persuasion alone than to undermine them", and successful efficacy builders "do more than convey positive appraisals… **they structure situations for them in ways that bring success.**" Reading: [research/04-professional-formation/bandura-self-efficacy.md](/research/04-professional-formation/bandura-self-efficacy.md) — **the 1995 edited volume was read in full on 2026-07-30; the 1977 paper remains unread**, and anything traced to it here rests on an abstract.

**Scope conditions and limits.**
- Self-efficacy that outruns capability degrades calibration (§11), and the two must be balanced rather than maximised independently. **Amended 2026-07-30:** this page previously stated the over-reach hazard as the rule. Bandura states close to the reverse — that people who err in self-appraisal tend to overestimate, and that this "is a benefit rather than a cognitive failing" if not unrealistically exaggerated — and **confines the hazard to a carve-out**: "Activities in which mistakes can produce costly or injurious consequences call for accurate self-appraisal." The programme retains the constraint because it operates a live production substrate and its graduates work on other people's systems, which is that carve-out exactly. **It is retained as a scope-specific carve-out rather than as the general principle it was previously stated to be**, and §11's calibration work is warranted on that ground rather than on a general preference for accurate self-appraisal.
- Success must be attributable to the student's own action to build efficacy. Success delivered by scaffolding the student cannot see does not.

### 13. Autonomy, competence, relatedness

Sustained engagement depends on perceived autonomy, perceived competence and relatedness to others. Controlling structures, purely extrinsic contingencies and rankings undermine the internalisation that long programmes depend on.

**Design consequence.** Specification grading removes point-chasing. Learning tasks carry genuine choice of approach within fixed constraints. Cohort continuity on a shared substrate supplies relatedness structurally rather than through exhortation. No leaderboards on assessed work — a deliberate departure from exemplar practice, justified in the relevant whitepapers.

### 14. Interest development

Situational interest is triggered by novelty, surprise and personal relevance, and becomes maintained and then individual interest only when it is repeatedly supported and connected to competence. Interest is therefore something a curriculum builds over quarters, not something a lecture ignites.

**Design consequence.** Each module opens with a genuine anomaly from the substrate rather than a motivating anecdote. Programme structure allows increasing self-direction in years two and three so that emerging individual interest has somewhere to go.

---

## Part IV — Evidence about the specific setting

Two findings from this repository's research bear directly on a programme teaching AI-assisted engineering, and both cut against comfortable assumptions.

- **AI assistance can slow experienced developers while they believe it has sped them up.** The METR study is the clearest available demonstration that perceived and actual productivity effects can diverge in the same direction as the metacognitive illusions in §11. See [research/04-professional-formation/metr-ai-assisted-productivity-study.md](/research/04-professional-formation/metr-ai-assisted-productivity-study.md).
- **Capability is jagged rather than uniform.** Performance gains from AI assistance are large inside the frontier of tasks the system handles well and negative outside it, and the boundary is not observable from inside the task. See [research/04-professional-formation/dellacqua-jagged-technological-frontier.md](/research/04-professional-formation/dellacqua-jagged-technological-frontier.md).

**Design consequence.** Both are taught early, both are re-encountered on the substrate, and both are treated as calibration content rather than as tool training. The programme's AI-tool policy — permitted on produced work, prohibited in live conversation with staff — is coherent only under this reading.

- **Deliberate practice is not sufficient.** Structured practice accounts for a real but limited share of performance variance, with the share smaller in less structured domains. Engineering deployment is a weakly structured domain. See [research/04-professional-formation/macnamara-deliberate-practice-limits.md](/research/04-professional-formation/macnamara-deliberate-practice-limits.md). The design consequence is that practice volume is not treated as the primary lever, and the programme does not promise expertise as a function of hours.

### 15. Why building with an agent is taught the way it is

The programme's practical work is done with GitHub Copilot in agent mode on every day from the first week. That is a large instructional commitment and it is made on the argument below rather than on the observation that the tool is available.

**An agent's output is a worked example that arrives on demand and does not fade.** §7 establishes the sequence this design uses everywhere: worked example, then completion problem, then unguided problem, with guidance withdrawn as competence develops. An agent collapses that sequence. It supplies a complete solution at any point, at any level of prior knowledge, without being asked to stop. Under the worked-example account this is exactly right for a novice meeting high element interactivity, and under expertise reversal it is exactly wrong for the same student four months later — and the mechanism of the harm is that processing redundant support consumes the capacity the learner needed for the problem. **Nothing in the tool performs the withdrawal, so the curriculum has to.** This is the warrant for two structures. The complexity-class progression in the [Module Map](/archive/bsc-programme/program/07-Module-Map.md) is applied to the agent's role and not only to the task: in early classes the student directs an agent through a specified method, and by class 5 the student is deciding whether to proceed at all, which is a judgement no agent is positioned to make for them. And the three unassisted occasions at [S010](/archive/bsc-programme/seminars/S010.md), [S045](/archive/bsc-programme/seminars/S045.md) and [S090](/archive/bsc-programme/seminars/S090.md) exist because a fading schedule with no measurement is a hope.

**The learner cannot feel the reversal happening.** §11 is the reason. Judgements of learning are driven by processing fluency, and an agent produces the most fluent artefact a student will encounter — complete, formatted, confident, immediate. Every condition §11 identifies as producing miscalibration is present at maximum strength. This is why the divergence between perceived and actual effect reported in [research/04-professional-formation/metr-ai-assisted-productivity-study.md](/research/04-professional-formation/metr-ai-assisted-productivity-study.md) is treated here as the predicted result rather than as a surprising one: it is §11's mechanism operating on a new artefact. The design consequence is that the Copilot prediction sealed at phase 1 and checked at phase 8 is a calibration instrument on the same footing as the day's other pretest items, and is not tool training.

**The instrument-characterisation stance transfers to the student's own tool without modification.** The measurement strand already teaches construct validity, the decomposition of error into systematic and stochastic components, the design and validation of an instrument, and the requirement that a number carry what it does not license. Applied to an agent these are the same operations: what you asked for is not what the agent optimised toward; its systematic component does not average out over more prompts; a prompt that has never failed has never been tested. **What is new is only that the instrument is the one producing the student's own work**, which is the condition under which characterisation is hardest to sustain and most necessary. It is also the condition under which the programme's error-clinic firewall matters most, since a student who believes disclosure of an agent-produced error will be held against them will stop disclosing.

**The frontier is located rather than assumed.** [research/04-professional-formation/dellacqua-jagged-technological-frontier.md](/research/04-professional-formation/dellacqua-jagged-technological-frontier.md) reports that capability is uneven in ways not predictable from task difficulty as humans perceive it. If the boundary is not inferable, it must be mapped empirically, which is why every build carries a frontier statement and why the cohort's accumulated statements are treated as a sample with a stated sampling method rather than as a fact about the tool.

**Scope conditions and limits.**
- **No effect size is asserted here for any of it.** The worked-example, expertise-reversal, fluency-illusion and jagged-frontier findings are used at the level of direction and mechanism only, on the same terms as every other source on this page.
- **The claim that an agent's output functions as a worked example is a design inference, not a finding.** None of the cognitive-load literature was run on an interactive system that produces a bespoke complete solution on request, and the differences — the learner chooses when it appears, it is generated rather than curated, and it is sometimes wrong — are all differences that matter. This extrapolation is of the same size as the one named in tension 5 below and is subject to the same liability.
- **The interaction with productive failure is unresolved** and is registered as tension 7.

---

## Part V — Assessment as a learning mechanism

Assessment in this programme is designed to teach, not merely to measure, and its design draws on three further bodies of evidence.

- **Feedback is not reliably beneficial.** A substantial minority of feedback interventions reduce performance, with the damage concentrated where feedback directs attention to the self rather than to the task. Feedback in this programme is task-referenced, narrative, and explicitly not comparative.
- **Assessors reason from narrative and use scores to confirm.** Where raters are given both, narrative dominates and numeric ratings serve as confirmation of an impression already formed. Idiosyncratic rater variance is large. See [research/08-assessment-epas/govaerts-narrative-assessment-literature.md](/research/08-assessment-epas/govaerts-narrative-assessment-literature.md).
- **Entrustment is a decision, not a score.** Supervision level is the natural output of workplace-embedded judgement, and competencies are possessed while activities are entrusted. See [research/08-assessment-epas/ten-cate-epa-framework.md](/research/08-assessment-epas/ten-cate-epa-framework.md).

Full design in [Assessment Architecture](/archive/bsc-programme/program/03-Assessment-Architecture.md).

---

## Known tensions in this foundation

These are unresolved and are named so that the whitepapers can argue about them rather than around them.

1. **Desirable difficulties versus cognitive load.** Reconciled here by a design rule that has no direct empirical warrant: raise difficulty in retrieval and selection, lower it in representation and attention.
2. **Productive failure versus expertise reversal.** Problem-first design assumes a novice; the same design applied to a student with relevant schemas may be redundant or harmful. The programme does not currently adapt phase 3 by prior knowledge, and this is a known weakness.
3. **Interleaving versus fluency.** Some constituent skills genuinely require blocked practice to reach automaticity. Deciding which is a judgement call made module by module and is stated in each whitepaper.
4. **Calibration versus self-efficacy.** Confrontation with miscalibration and construction of efficacy pull in opposite directions in the short term.
5. **Effect sizes are mostly from short laboratory intervals and unlike populations.** Very little of the underlying evidence comes from three-year engineering programmes with live production substrates. The extrapolation is large and is the design's central empirical liability.
6. **Publication and replication.** Several of these literatures have contested effect magnitudes even where direction is secure. The programme's position is that direction is sufficient for design and magnitude is not claimed.
7. **Productive failure versus an answer that is always available.** Phase 3 depends on students failing to reach the target concept, and the agent in front of them can frequently supply it. The design's response is that phase 3's cases are executed rather than asked about — four prompts, four configurations or four architectures run against a real service, where the payload case is the one whose actual behaviour defeats the room's expectation, and where the agent is the means of running the case rather than the oracle for it. **Whether that holds is a staffing and case-design question, and where it fails, phase 3 has been converted into an expensive way of reading an answer.** The design has no detector for this and it is the most likely way the seminar pattern degrades under the new toolchain.
8. **Fading is designed and not verified.** The withdrawal of agent support across the complexity classes is a curriculum decision. The three unassisted occasions make the trajectory visible; they are too few to characterise it, and the design says so rather than implying otherwise.

---

## Evidence status

**Verified within this repository**, with the exact scope of verification recorded in each note and in the [source register](/research/99-source-register/source-register.md): self-efficacy; error management training; productive failure; deliberate practice limits; psychological safety and its meta-analysis; the METR productivity study; the jagged-frontier study; the entrustment framework; the narrative-assessment literature including the reported rater-variance range.

**Verification depth, corrected 2026-07-30.** This paragraph previously read that "several of these are recorded as syntheses of copyrighted works rather than full-text readings". **Four of them are no longer** — the error-management meta-analysis, Edmondson's 2019 book, the Kapur book and Bandura's 1995 volume were read in full on that date, and the corrections that produced are annotated at §9, §10 and §12 above. **Three works those notes depend on are still unread and are named wherever they are leaned on**: Edmondson's 1999 ASQ paper, Bandura's 1977 paper, and both Kapur journal articles. The psychological-safety meta-analysis remains verified at abstract level and asserts no magnitude. **The source register is stale on several of these rows and is recorded as such in the notes rather than silently corrected here.** That distinction is preserved in the notes and must be carried forward by every whitepaper citing them, per the depth rule in the [Whitepaper Standard](/archive/bsc-programme/program/05-Whitepaper-Standard.md).

**Cited from canonical literature but not verified in this repository:** the testing effect; distributed practice and the spacing-interval relationship; interleaving and contextual interference; the pretesting and generation effects; hypercorrection; self-explanation and the ICAP framework; transfer-appropriate processing and encoding specificity; cognitive load theory including element interactivity, worked examples, expertise reversal, split attention, redundancy, modality and transient information; four-component instructional design and whole-task sequencing; variability of practice; metacognitive illusions and judgements of learning; self-determination theory; interest development; the feedback-intervention literature; active-learning meta-analytic findings. These are stated at the level of direction and mechanism only. **No effect size is asserted anywhere in this wiki for an unverified source**, and none should be added without a verified citation.

**Design reasoning with no external warrant:** the reconciliation rule between desirable difficulties and cognitive load; the expanding programme-wide spacing schedule; the decision to place difficulty in retrieval and selection rather than representation; the eight-phase seminar structure as a whole; the mapping of task classes onto eighteen modules; **the whole of §15** — that an agent's output functions as an unfading worked example, that the complexity-class progression is an adequate fading schedule for it, and that three unassisted occasions are a sufficient instrument for detecting dependency; and every claim in this wiki about what this specific design will achieve.

**A note on the vendor material this page does not use.** The platform documentation behind the [Microsoft AI Platform Map](/archive/bsc-programme/program/11-Microsoft-AI-Platform-Map.md) states latencies, sampling bounds and quota mechanics precisely and states no accuracy anywhere. None of it bears on learning, none of it is cited on this page as though it did, and no productivity or capability figure from any vendor source is asserted in this wiki. The rule that no effect size is asserted for an unverified source applies to vendor material exactly as it applies to research literature, and §15 is written to that rule.
