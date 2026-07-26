# Cliff Notes — Dell'Acqua et al., Navigating the Jagged Technological Frontier

## Citation and access
- **Authors:** Fabrizio Dell'Acqua, Edward McFowland III, Ethan Mollick, Hila Lifshitz-Assaf, Katherine C. Kellogg, Saran Rajendran, Lisa Krayer, François Candelon, Karim R. Lakhani
- **Title:** Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of Artificial Intelligence on Knowledge Worker Productivity and Quality
- **Venue and year:** Harvard Business School Working Paper 24-013, September 2023, 58 pages. Subsequently published in *Organization Science* (listed as forthcoming and then published in 2026).
- **Source consulted:** https://www.hbs.edu/faculty/Pages/item.aspx?num=64700 (HBS faculty publication page with official abstract)
- **Access status:** Working paper openly available via HBS and SSRN; abstract open. The published *Organization Science* version is paywalled. This note is written from the official abstract; the full PDF was not parsed.

## What this source is
A large preregistered field experiment run with Boston Consulting Group consultants to measure what happens to knowledge-work output when workers get access to GPT-4. Its distinctive contribution is not the finding that AI helps — several studies show that — but the demonstration that AI's capability boundary is *jagged* rather than smooth: tasks of similar apparent difficulty to a human can fall on opposite sides of the frontier, and workers cannot reliably tell which side a given task is on. The paper is the origin of the "jagged frontier" metaphor now widely used in discussions of AI capability.

## The argument in full

The study's framing problem is that AI capability does not decline gracefully with task difficulty in the way human capability does. For a human professional, tasks that feel comparably hard usually are comparably hard, and a person who can do one can generally do the other. For a large language model this correspondence breaks down. Some tasks that appear demanding to a consultant are handled well; some that appear routine are handled badly. The authors call the resulting boundary a jagged technological frontier. The practical consequence is that a worker's intuition about where AI will help, formed from human-difficulty priors, is an unreliable guide.

To test this, the researchers ran a preregistered experiment with 758 consultants at Boston Consulting Group, a substantial fraction of that organisation's individual contributor consultants. Participants first completed a set of similar tasks to establish an individual baseline, which matters because it lets the analysis control for pre-existing ability rather than relying on randomisation alone at small sample sizes. Consultants were then randomly assigned to one of three conditions: no AI access, GPT-4 access, or GPT-4 access accompanied by an overview of prompt engineering. The third arm exists to test whether instruction in how to use the tool changes the result.

For the 18 realistic knowledge-intensive tasks selected to lie inside the frontier — a set that ranged from creative to analytical work of the sort consultants actually do — the effect of AI access was substantial and consistent. Consultants with AI completed 12.2 percent more tasks on average, completed them 25.1 percent more quickly, and produced results of significantly higher quality. These are not marginal effects and they hold across the range from creative to analytical work.

The critical result is the contrast case. The researchers also included one complex managerial task deliberately constructed to sit *outside* the frontier — a task on which the AI's output would be misleading rather than helpful. On that task, consultants using AI were 19 percent *less* likely to produce correct solutions than those working without it. The tool did not merely fail to help; it actively degraded performance below the unassisted baseline. This is the finding that gives the paper its force. If AI's failures were transparent, workers would simply discard bad output and revert to unaided performance, and the floor would be no worse than the control condition. That the floor is *below* control means the failures are persuasive: consultants adopted plausible-looking wrong answers.

Taken together the two results define the design problem the paper poses. Inside the frontier, AI produces large, real, quality-improving gains. Outside it, AI produces confident-sounding errors that competent professionals accept. And because the frontier is jagged, the same worker on the same day cannot reliably tell which regime they are in from the surface features of the task. The paper's implication is that the value of AI to an organisation depends less on the capability of the model than on the workforce's ability to locate the frontier — which is a skill, and a teachable one, distinct from prompt-writing.

## Structure of the original
- Introduction: the jagged frontier concept and why human-difficulty intuitions mislead
- Theory and hypotheses regarding AI effects on productivity and quality inside and outside the frontier
- Experimental design: participants, baseline task set, three-arm randomisation, task construction
- Inside-the-frontier results: task completion, speed, quality
- Outside-the-frontier results: the deliberately selected complex managerial task
- Heterogeneity analysis across participant skill levels
- Analysis of usage patterns and human–AI configurations
- Discussion: implications for organisations, task design and workforce capability
- Appendices with task materials and preregistration details

## Key claims, findings, and specifics
- Preregistered field experiment with **758 knowledge workers** at Boston Consulting Group.
- Baseline performance was established on similar tasks before treatment assignment.
- **Three randomised conditions:** no AI access; GPT-4 access; GPT-4 access plus a prompt engineering overview.
- **18 realistic knowledge tasks** inside the frontier, spanning creative to analytical work.
- Inside the frontier, AI-assisted consultants completed **12.2 percent more tasks**, **25.1 percent more quickly**, and with **significantly improved quality**.
- **One complex managerial task** was deliberately selected to fall outside the frontier.
- Outside the frontier, AI-assisted consultants were **19 percent less likely to produce correct solutions**.
- The below-control performance on the out-of-frontier task implies that AI errors were persuasive enough to be adopted rather than rejected.
- The paper introduces "jagged technological frontier" as a term for the irregular boundary of AI capability relative to human intuitions about task difficulty.

## Method and evidence base
This is a preregistered randomised field experiment with a large sample of real professionals doing tasks representative of their actual work, conducted inside a single global consulting firm. The pre-treatment baseline measurement is a genuine methodological strength: it allows within-person comparison and reduces reliance on randomisation to balance ability. The three-arm design isolates the marginal effect of prompt-engineering instruction from the effect of tool access alone. The principal limits are the single-organisation setting — BCG consultants are an unusually capable, unusually homogeneous and unusually well-supported population — and the fact that the out-of-frontier condition rests on a single task, which makes the 19 percent figure much less precisely estimated than the inside-frontier results derived from 18 tasks. The tasks are also time-bounded exercises rather than multi-week client engagements, so the study cannot speak to effects that accumulate over a long project. The model tested is GPT-4 as available in 2023.

## Vocabulary the source introduces
- **Jagged technological frontier** — the irregular boundary between tasks AI performs well and tasks it performs poorly, which does not align with human intuitions about task difficulty.
- **Inside the frontier** — tasks where AI capability is sufficient and assistance yields gains in speed, throughput and quality.
- **Outside the frontier** — tasks where AI output is misleading and assistance degrades performance below the unassisted baseline.
- **Centaur and cyborg working patterns** — two configurations of human–AI division of labour, the first splitting tasks between human and machine, the second interleaving them continuously. See verification status: this typology is widely attributed to this paper but was not confirmed in the abstract consulted.

## What to remember
- Inside the frontier the gains are large: 12.2 percent more tasks, 25.1 percent faster, better quality, across 758 consultants.
- Outside the frontier the loss is worse than not using the tool at all: 19 percent fewer correct solutions.
- The frontier is jagged, so surface task difficulty does not predict which side you are on.
- Performance falling *below* the unassisted control is the key mechanism claim: bad AI output is persuasive, not obviously bad.
- A prompt-engineering overview was tested as a separate arm. Skill in locating the frontier is a different skill from skill in writing prompts.
- The out-of-frontier result rests on a single task and deserves proportionally less confidence than the inside-frontier results.

## Why it matters for the course
This paper supplies the course with its central technical-judgement problem, stated in a form that is empirically grounded rather than rhetorical. A forward-deployed engineer's job is largely to decide, in front of a customer and under time pressure, whether a given problem is one that current AI can carry and whether a given AI output can be trusted. The jagged frontier finding says that this decision cannot be made from intuition about how hard the task looks, and the below-baseline out-of-frontier result says that failing to make it correctly is worse than not having the tool. That converts "know when to use AI" from a platitude into a specific, assessable competence: the ability to probe a task for frontier position before committing to an AI-assisted approach, and the ability to detect plausible-but-wrong output.

It also pairs productively with the METR study in this folder. Dell'Acqua measures large gains in a population of consultants doing bounded knowledge tasks; METR measures a slowdown in a population of expert maintainers doing deep work in familiar codebases. Read together they are not contradictory — they are two samples from opposite regions of a jagged distribution, which is precisely what both papers predict. Teaching them as a pair is far more instructive than teaching either as the answer.

## How to teach it
- **Lecture point:** Introduce the jagged frontier with the two numbers side by side — 12.2 percent more tasks inside, 19 percent fewer correct solutions outside — and ask what a rational worker should do given that they cannot see the boundary.
- **Lecture point:** Emphasise that out-of-frontier performance fell below the *control* group, and draw out the implication: the failure mode is adoption of confident errors, not visible breakdown.
- **Lecture point:** Pair with METR explicitly. Have students reconcile the two results rather than pick a winner.
- **Lab exercise:** Give students a mixed batch of tasks, some inside and some outside current model capability, without telling them which. Require a written frontier-position judgement and a stated confidence before they are allowed to use a model. Score the judgement separately from the output.
- **Lab exercise:** Construct an adversarial exercise where the model produces a fluent, well-formatted, wrong answer. Measure how many students catch it and how long it takes.
- **Studio exercise:** Run a client simulation in which the correct professional move is to decline to use AI for a specific sub-task and to explain why to the stakeholder. Assess the explanation.
- **Assessment idea:** An EPA for "determining whether a task is suitable for AI assistance and justifying that determination." Entrustment requires the student to demonstrate probing behaviour, not just a correct guess.
- **Assessment idea:** Score restraint. Award credit for correctly declining to use a tool, which most assessment regimes systematically fail to reward.

## Limits and cautions
- Single organisation. BCG consultants are highly selected, highly trained and well resourced; generalisation to other workforces is an assumption.
- The out-of-frontier finding rests on **one task**. The 12.2 and 25.1 percent figures come from 18 tasks; the 19 percent figure does not have comparable statistical support.
- Tasks are bounded exercises, not real client engagements. Effects over the life of a multi-month project are not measured.
- The model is GPT-4 as of 2023. Both the location and the shape of the frontier move with model generation, so the specific boundary found here is dated even though the jaggedness claim is not.
- The study measures task output quality as judged in the experiment, not downstream client or business outcomes.
- Widely circulated secondary summaries of this paper attribute claims to it that are not in the abstract, including specific figures about differential gains for lower-skilled workers and the centaur/cyborg typology. Verify before citing.
- The working paper and the published *Organization Science* version may differ in analysis and reported figures. This note is based on the working-paper abstract.

## Verification status
- **Verified against the official HBS abstract:** the full author list; the title; working paper number 24-013 and September 2023 date; the 58-page length; publication in *Organization Science*; the preregistered design; **758** BCG knowledge workers; establishment of baseline performance on similar tasks first; the three randomised conditions including the prompt-engineering overview arm; **18** realistic tasks inside the frontier ranging creative to analytical; **12.2 percent** more tasks completed; **25.1 percent** more quickly; significantly improved quality; **one** complex managerial task deliberately selected outside the frontier; **19 percent** less likely to produce correct solutions on it.
- **Provisional — attributed to this paper but not confirmed in the abstract consulted:** the "centaur" and "cyborg" typology of human–AI working patterns. This is very widely cited as originating here, but it does not appear in the official abstract and the full PDF was not parsed. Do not present it as a verified finding of this paper without checking the full text.
- **Provisional — not confirmed:** commonly repeated claims that below-average-performing consultants gained more than above-average performers, and specific figures attached to that claim. The abstract does not contain them.
- **Interpretive, not sourced:** the inference that below-control out-of-frontier performance implies AI errors were persuasive rather than obvious. This is a reasonable reading of the reported result but is stated as an interpretation here, not as a claim the authors make in the abstract.
- **Interpretive, not sourced:** the "Why it matters for the course" and "How to teach it" sections, including the pairing with METR.
