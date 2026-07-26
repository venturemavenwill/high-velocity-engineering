# Cliff Notes — METR, AI-Assisted Developer Productivity RCT

## Citation and access
- **Authors:** Joel Becker, Nate Rush, Elizabeth Barnes, David Rein (METR)
- **Title:** Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity
- **Venue and year:** arXiv preprint 2507.09089, v1 12 July 2025, v2 25 July 2025. Accompanying blog post 10 July 2025.
- **DOI:** 10.48550/arXiv.2507.09089
- **Source consulted:** https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ and the arXiv listing for 2507.09089
- **Access status:** Open access, CC BY 4.0. 51 pages, 8 tables, 22 figures. Data released at github.com/METR/Measuring-Early-2025-AI-on-Exp-OSS-Devs.
- **Important currency note:** METR itself now labels the 2025 results out of date. A follow-up post, "We are Changing our Developer Productivity Experiment Design" (24 February 2026), reports a second study and explains why METR does not consider its raw results reliable. That follow-up is covered below and must be read alongside the original.

## What this source is
A randomised controlled trial measuring whether access to early-2025 AI coding tools made experienced open-source maintainers faster at real work on their own repositories. It is one of very few studies in this space that uses real tasks in real codebases with randomised assignment rather than benchmarks or self-report. The headline finding is that developers were slower with AI, and that both the developers themselves and domain experts predicted the opposite. The paper's most durable contribution is arguably not the effect size but the demonstration that self-perceived productivity and measured productivity can diverge in the wrong direction.

## The argument in full

METR set out to measure AI's effect on developer productivity in a setting deliberately chosen to be realistic and high-stakes rather than convenient. They recruited 16 developers with moderate prior AI experience who were established maintainers of large open-source repositories — projects averaging over 22,000 GitHub stars and more than a million lines of code, on which the participating developers had an average of five years of prior experience. Developers supplied their own task lists from their own backlogs, producing 246 tasks with an average length of about two hours. Each task was randomly assigned to allow or disallow AI tooling. Developers were paid $150 per hour, recorded their screens, and self-reported implementation time. When AI was allowed, the tools used were principally Cursor Pro with Claude 3.5 and 3.7 Sonnet.

The forecasting component is central to the paper's argument and is easy to under-weight. Before the study, participating developers predicted that AI access would reduce completion time by 24 percent. Independent expert forecasters were similarly optimistic: economics experts predicted a 39 percent reduction, machine-learning experts a 38 percent reduction. The measured result was an increase in completion time of 19 percent, with a confidence interval running from a 2 percent increase to a 39 percent increase. The most striking datum is the post-hoc estimate: after having actually done the tasks, developers still believed AI had made them roughly 20 percent faster. Direct personal experience did not correct the misperception.

METR then works hard to rule out mundane explanations, and this is the part of the paper that earns it credibility. They confirm that developers used frontier models rather than obsolete tools; that they complied with their randomised treatment assignment; that they did not differentially abandon issues in one arm; and that the pull requests submitted with and without AI were of comparable quality. The slowdown persisted across alternative outcome measures, across different estimators, and across subsets of the data. Twenty candidate properties of the experimental setting were evaluated as potential explanations for the slowdown, and the authors found evidence that five of them likely contribute.

The paper is unusually explicit about what it does not claim, devoting a table to it. METR does not claim that AI fails to speed up most developers in general. They do not claim anything about domains outside software. They do not claim that near-future AI will fail to speed up work in this setting. And they do not claim that there is no better way to use existing AI tools in this setting. The result is a measurement of one specific and quite unusual population — expert maintainers working in codebases they know intimately — not a general verdict on AI-assisted software development.

The discussion frames three competing interpretations rather than asserting one. The first is that the RCT underestimates true AI capability, because of features of this particular setting. The second is that benchmarks and anecdotal reports overestimate capability, because they sample easier or more legible tasks. The third, which the authors treat sympathetically, is that all three methods — RCTs, benchmarks and anecdotes — are measuring genuinely different and individually valid subsets of the task distribution, and the apparent contradiction between them is a sampling artefact rather than a disagreement about facts.

The 2026 follow-up substantially complicates the picture and should be treated as part of this source rather than as separate news. METR began a second study in August 2025 with 57 developers — 10 from the original cohort plus 47 newly recruited — spanning 143 repositories and over 800 tasks, with a median of 10 years of experience and pay reduced from $150 to $50 per hour. The raw results showed an estimated speedup of 18 percent for the subset of original developers, with a confidence interval from a 38 percent speedup to a 9 percent slowdown, and 4 percent for newly recruited developers, with a confidence interval from 15 percent speedup to 9 percent slowdown. METR judges this signal unreliable and has changed the experimental design in response. The stated reason is selection: between 30 and 50 percent of developers said they chose not to submit some tasks because they did not want to do them without AI. Developers increasingly decline to participate at all for the same reason, and the reduced pay made refusal cheaper. Time measurement itself has become unreliable because developers now run multiple concurrent agents and cannot accurately report elapsed effort on any one task. METR also notes task-type substitution toward AI strengths, quality differences between conditions, and outright non-completion of AI-disallowed tasks, including one developer who completed none.

## Structure of the original
- Abstract and headline result
- Related work: benchmarks, self-report surveys, prior productivity studies
- Study design: recruitment, repository and task selection, randomisation, payment, screen recording
- Forecasts: developer forecasts, expert forecasts, post-hoc developer estimates
- Main results: primary effect estimate and confidence interval
- Robustness: alternative outcome measures, alternative estimators, subgroup analysis
- Factors evaluated: twenty candidate properties of the setting, with evidence assessed for each
- Explicit non-claims table
- Discussion: three hypotheses reconciling RCT, benchmark and anecdotal evidence
- Appendices, tables and figures

## Key claims, findings, and specifics
- 16 developers, 246 tasks, mature repositories averaging over 22,000 stars and more than 1 million lines of code, developer tenure averaging 5 years on those repositories.
- Tasks averaged approximately 2 hours; developers were paid $150 per hour; screens were recorded; implementation time was self-reported.
- Tooling when AI was permitted: primarily Cursor Pro with Claude 3.5 Sonnet and Claude 3.7 Sonnet.
- Developer forecast before the study: 24 percent reduction in completion time.
- Economics experts forecast: 39 percent reduction. Machine-learning experts forecast: 38 percent reduction.
- Measured result: 19 percent *increase* in completion time, 95 percent confidence interval from 2 percent to 39 percent increase.
- Developers' own post-hoc estimate after completing the study: 20 percent reduction. The direction of the error did not correct with direct experience.
- Twenty candidate explanatory properties of the setting were evaluated; five were judged likely contributors.
- Ruled out: use of non-frontier models, non-compliance with assignment, differential dropping of issues, systematic quality differences in submitted pull requests.
- 2026 follow-up: 57 developers, 143 repositories, 800-plus tasks, median 10 years experience, pay reduced to $50 per hour. Raw estimates were 18 percent speedup for returning developers (CI: 38 percent speedup to 9 percent slowdown) and 4 percent for new developers (CI: 15 percent speedup to 9 percent slowdown). METR considers these unreliable.
- 2026 follow-up selection problem: 30 to 50 percent of developers reported declining to submit some tasks because they did not want to do them without AI.
- A separate METR survey of 349 technical workers (11 May 2026) reported a median self-reported change in value of work of 1.4 to 2 times, which METR itself flags as likely overstated.

## Method and evidence base
This is a within-developer randomised controlled trial on self-selected real tasks. Randomisation is at the task level, which controls for stable differences between developers but not for learning or contamination across tasks. The outcome is self-reported implementation time, validated against screen recordings. The design's principal strength is ecological validity: real maintainers, real repositories, real backlog items, real consequences for code quality. Its principal weaknesses are the very small developer sample, the narrowness of the population (expert maintainers of codebases they already know deeply, which is close to the worst case for AI assistance since the developer's tacit knowledge advantage is maximal), and reliance on self-reported time. The confidence interval on the headline result is wide and its lower bound is close to zero, so the correct reading is "AI did not speed this population up, and probably slowed them down somewhat," not "AI reliably costs 19 percent." The 2026 follow-up demonstrates a further methodological problem that will affect all future work of this kind: as AI tooling becomes normalised, the counterfactual arm becomes unattractive to participants and the randomisation is compromised by differential non-compliance.

## Vocabulary the source introduces
- **Jagged capability sampling** — the observation that RCTs, benchmarks and anecdotes each sample different regions of the task distribution, so their disagreement may be about sampling rather than about facts. (METR frames this as hypothesis H3 rather than coining a term; the label here is descriptive.)
- **Non-claims table** — an explicit enumeration of inferences the paper does not support, published alongside the results. A practice worth imitating.
- **Post-hoc self-estimate** — the developer's own retrospective judgement of speedup after completing the study, contrasted with the measured effect.
- **Treatment-arm refusal** — the 2026 phenomenon in which participants decline to attempt tasks in the AI-disallowed condition, compromising randomisation.

## What to remember
- Experienced maintainers were 19 percent slower with early-2025 AI tools, and both they and expert forecasters expected them to be roughly 25 to 40 percent faster.
- Perceived productivity did not converge on measured productivity even after doing the work. This is the finding with the broadest implications.
- The population is narrow and adversarial to the hypothesis: experts in codebases they know extremely well. Do not generalise it to novices, unfamiliar codebases or greenfield work.
- The authors published an explicit list of things their result does not show. Cite that list, not just the headline.
- METR now treats the 2025 result as out of date and has redesigned the study because participants will no longer reliably work without AI.
- The 2026 raw numbers point the other way but are not trustworthy, and METR says so. Do not quote them as a reversal.

## Why it matters for the course
This is the single best case study in the repository for teaching the difference between feeling effective and being effective, which is the central calibration problem a forward-deployed engineer faces. An FDE stands in front of a customer and asserts that a system will or will not work, and that assertion has to be grounded in measurement rather than in the felt fluency of having used the tool. METR provides a clean, well-documented instance of expert practitioners being confidently and consistently wrong about their own throughput, in a domain where they had every advantage. It also models the epistemic behaviour the course wants to instil: preregistered forecasts, adversarial robustness checks, an explicit non-claims section, published data, and public retraction of currency when the result aged. Teaching the 2025 paper together with the 2026 redesign post is more valuable than teaching either alone, because the pair demonstrates a research group discovering that its measurement instrument has been degraded by changes in the world and saying so in public. That is precisely the professional disposition the Entrustable Professional Activity framework should be certifying.

## How to teach it
- **Lecture point:** Present the three forecasts (developer 24 percent faster, economists 39 percent faster, ML experts 38 percent faster) before revealing the result, and have students record their own prediction first. Almost all will predict speedup.
- **Lecture point:** Walk through the twenty-factor elimination and the non-claims table as a model of how to bound a claim. Contrast with a typical vendor benchmark blog post.
- **Lecture point:** Teach the 2026 follow-up as a lesson in instrument decay: what do you do when the control condition becomes unacceptable to participants?
- **Lab exercise:** Replicate the design in miniature. Students forecast completion time for a set of their own tasks, work half with AI and half without under randomised assignment, log actual time, then compare forecast, post-hoc estimate and measurement.
- **Studio exercise:** Give students a customer scenario in which a stakeholder asserts an AI tool has delivered a large productivity gain based on team sentiment. Require them to design a measurement that could confirm or refute it, and to state in advance what result would change their mind.
- **Assessment idea:** An EPA for "estimating and reporting the effect of a tool or intervention." Entrustment requires the student to produce an estimate with an interval, state the population it applies to, and enumerate at least three things the estimate does not show.
- **Assessment idea:** Score forecast calibration across the term. Students who systematically over-predict AI speedup should see that pattern in their own data.

## Limits and cautions
- Sixteen developers is a very small sample. The confidence interval spans 2 to 39 percent and the lower bound is near the null.
- The population is expert maintainers on codebases they know intimately. This is close to a worst case for AI assistance and should not be read as representative of software work generally.
- Outcome is self-reported time. Screen recording mitigates but does not eliminate this.
- Tooling is fixed to early 2025 — Cursor Pro with Claude 3.5 and 3.7 Sonnet. Agentic workflows, longer-context models and different harnesses are outside the study's scope.
- The study measures completion time, not value delivered. A slower process producing better-designed changes is not captured.
- METR itself now describes the 2025 findings as out of date. Presenting the 19 percent figure as current is a misuse.
- The 2026 results are not a clean reversal and must not be quoted as one. METR judges them unreliable because of selection effects, task-type substitution, quality differences between arms, and the impossibility of accurate time reporting while supervising concurrent agents.
- The 2026 survey figure of 1.4 to 2 times self-reported value is self-report, and METR explicitly cautions against its magnitude.
- No independent replication of either study exists at the time of writing.

## Verification status
- **Verified against the METR blog post and arXiv listing:** 16 developers; 246 tasks; repository scale (22,000-plus stars, 1 million-plus lines); 5 years average developer tenure; approximately 2-hour average task; $150 per hour pay; screen recording; Cursor Pro with Claude 3.5/3.7 Sonnet; developer forecast of 24 percent reduction; post-hoc estimate of 20 percent reduction; economics-expert forecast of 39 percent; ML-expert forecast of 38 percent; measured 19 percent increase; confidence interval of 2 to 39 percent; 20 candidate properties evaluated with 5 likely contributors; the four ruled-out explanations; the non-claims content; the three discussion hypotheses; arXiv identifier, version dates, page and figure counts, licence and DOI.
- **Verified against the METR follow-up post of 24 February 2026:** 57 developers (10 returning, 47 new); 143 repositories; 800-plus tasks; median 10 years experience; pay reduced to $50 per hour; raw estimates and confidence intervals for both subgroups; METR's judgement that the signal is unreliable; the 30-to-50-percent task-refusal figure; the listed design problems; the 2025 results being labelled out of date; both dataset repository names.
- **Verified:** the 11 May 2026 METR survey of 349 technical workers and its 1.4-to-2x median self-reported figure, including METR's own caveat.
- **Provisional:** the phrase "jagged capability sampling" in the vocabulary section is this repository's descriptive label for METR's third discussion hypothesis, not METR's term.
- **Not verified:** the exact identity of the five contributing factors among the twenty evaluated. The counts are verified; the specific list was not read from the full paper.
- **Interpretive, not sourced:** the "Why it matters for the course" and "How to teach it" sections.
