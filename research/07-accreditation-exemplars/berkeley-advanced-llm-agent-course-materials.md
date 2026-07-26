# Cliff Notes — Berkeley Large Language Model Agents MOOC

## Citation and access
- **Authors:** Dawn Song (UC Berkeley), instructor; Xinyun Chen (Research Scientist, Google DeepMind), co-instructor
- **Title:** Large Language Model Agents (MOOC), Fall 2024
- **Venue and year:** University of California, Berkeley, Autumn 2024; a follow-on Advanced LLM Agents offering ran in Spring 2025
- **Source consulted:** `https://llmagents-learning.org/f24`; Spring 2025 iteration at `https://llmagents-learning.org/sp25`
- **Access status:** open. Lecture videos, readings and course structure remain publicly available after the course completed; all certificates were released.

## What this source is
This is the public course page for a Berkeley MOOC on LLM agents, delivered as twelve guest lectures from named researchers and practitioners across industry and academia, each with a quiz and assigned readings. It is included here not primarily for its content but for its assessment architecture: a five-tier certificate structure layered on a course that is, at base, optional to complete. It is the clearest available exemplar of how to design differentiated evidence levels within a single syllabus without diluting the top tier.

## The argument in full
The course's structural premise is that a very large, very heterogeneous audience — the open-enrolment MOOC population, ranging from curious professionals to researchers to students seeking credentials — cannot be served by a single completion standard. The site states the baseline plainly: "completing the assignments… is completely optional. You are more than welcome to just watch the lectures and audit the course!" Everything above that baseline is opt-in, and the design question becomes how to make higher effort visible and worth undertaking without making lower effort a failure.

The answer is a ladder of five named certificate tiers, each defined by a cumulative set of concrete deliverables. *Trailblazer* requires completing all twelve quizzes and passing the written article. *Mastery* requires all twelve quizzes, the written article, and passing all three lab assignments. *Ninja* requires all twelve quizzes, the written article, and submitting a project to the LLM Agents Hackathon. *Legendary* requires all twelve quizzes, the written article, and becoming a prize winner or finalist at the hackathon. *Honorary* is awarded "for the most helpful/supportive students in discord" who also meet the Ninja or Mastery coursework requirements. Two features of this ladder repay attention. First, the tiers are not simply nested by quantity; Mastery and Ninja are parallel rather than sequential, one demanding technical depth through labs and the other demanding applied synthesis through a hackathon submission. A student chooses which kind of harder to be. Second, the Honorary tier assesses something no artefact can capture — sustained helpfulness to peers — and gates it behind a real coursework floor so that it cannot be earned by presence alone.

The individual mechanisms are lightweight by design, and the lightness is what makes twelve of them tractable at MOOC scale. Quizzes are released alongside each lecture, are multiple-choice with at most about five questions, and are "graded on completion" rather than on correctness. That is a deliberate choice: the quiz is an attention mechanism and a pacing device, not a measurement instrument. The written article is the more interesting artefact. It is a Twitter, LinkedIn or Medium post of roughly five hundred words, graded pass/no-pass on effort. Its content depends on the tier being pursued: Trailblazer and Mastery students summarise a lecture or write a postmortem on their learning experience, while Ninja and Legendary students write about their hackathon submission. This is a single assessment slot whose content adapts to the student's chosen path — one rubric, two genres. It also has the unusual property of being published to a real audience rather than submitted to a grader, which changes the writing task in ways a private submission does not. The three lab assignments must all be passed; the hackathon permits unlimited team sizes; and a Discord community underpins the whole thing and is itself the substrate for the Honorary tier.

The twelve lectures are worth listing because they document, as a snapshot, what the agent research community considered its own agenda in autumn 2024. Denny Zhou of Google DeepMind opened on LLM reasoning, with readings including "Chain-of-Thought Reasoning Without Prompting" and "Large Language Models Cannot Self-Correct Reasoning Yet". Shunyu Yao of OpenAI gave a brief history and overview of LLM agents, with WebShop and ReAct as readings. Chi Wang of AutoGen-AI covered agentic AI frameworks and AutoGen, paired with Jerry Liu of LlamaIndex on building a multimodal knowledge assistant, with AutoGen and StateFlow assigned. Burak Gokturk of Google covered enterprise trends for generative AI, with needle-in-a-haystack readings. Omar Khattab, then at Databricks, covered compound AI systems and the DSPy framework. Graham Neubig of CMU covered agents for software development, with SWE-agent and OpenHands. Nicolas Chapados of ServiceNow covered AI agents for enterprise workflows, with WorkArena, WorkArena++ and TapeAgents. Yuandong Tian of Meta FAIR covered neural and symbolic decision making. Jim Fan of NVIDIA presented Project GR00T, with Voyager, Eureka and DrEureka. Percy Liang of Stanford covered open source and science in the era of foundation models, with Cybench. Ben Mann of Anthropic covered measuring agent capabilities and Anthropic's Responsible Scaling Policy. Dawn Song closed on building safe and trustworthy AI agents, with DecodingTrust, Representation Engineering, Extracting Training Data from LLMs, and The Secret Sharer. The overall topic list the course advertises spans foundations of LLMs, reasoning, planning and tool use, agent infrastructure, retrieval-augmented generation, code generation and data science, multimodal agents and robotics, evaluation and benchmarking of agent applications, privacy, safety and ethics, human-agent interaction, personalisation and alignment, and multi-agent collaboration.

## Structure of the original
- Course overview and topic list
- Instructor and co-instructor
- Syllabus: twelve dated lecture sessions, each with speaker, affiliation, title, quiz and assigned readings
- Coursework and certificate structure: the five tiers and their requirements
- Mechanics: quizzes, written article, lab assignments, hackathon, Discord

## Key concepts and specifics
- Twelve lecture sessions, 9 September to 2 December 2024, each delivered by an external guest speaker.
- Five certificate tiers: Trailblazer, Mastery, Ninja, Legendary, Honorary.
- Quizzes: one per lecture, multiple choice, at most roughly five questions, graded on completion.
- Written article: roughly 500 words, published to Twitter, LinkedIn or Medium, graded pass/no-pass on effort, with tier-dependent content.
- Lab assignments: three, all must be passed for the Mastery tier.
- Hackathon: unlimited team sizes; submission qualifies for Ninja, prize-winner or finalist status for Legendary.
- Honorary tier is awarded for Discord helpfulness on top of Ninja- or Mastery-level coursework.
- Completing any assessment is optional; auditing by watching lectures alone is explicitly endorsed.
- Instructor pairing spans academia and industry research (Berkeley and Google DeepMind), and every lecture is externally sourced.

## Method and evidence base
There is no evidence base in the research sense; this is a course page. Its value as an exemplar rests on scale and completion — the course ran, the certificates were issued, and the structure is documented publicly enough to be copied. The assigned readings, however, function as a curated primary-source bibliography of agent research as of late 2024, and are usable as such. No completion statistics, tier distributions or outcome data are published.

## Vocabulary the source introduces
- **Certificate tier** — a named, publicly defined bundle of deliverables that a learner opts into.
- **Completion-graded quiz** — a low-stakes per-lecture check used for pacing and attention rather than measurement.
- **Written article** — a short, publicly posted piece assessed pass/no-pass on effort, with content determined by the learner's chosen tier.
- **Hackathon track** — an applied alternative to the lab track at the same tier height.
- **Honorary recognition** — an award for community contribution, gated behind a coursework floor.

## What to remember
- Differentiated evidence levels can coexist in one syllabus if each tier is defined by concrete deliverables rather than by vague effort language.
- Parallel tiers beat purely nested ones. Mastery and Ninja are equally demanding in different directions, which lets students choose the kind of difficulty that suits them.
- A single assessment slot can carry different genres for different tiers — the same 500-word article requirement serves both a lecture summary and a hackathon writeup.
- Grading low-stakes checks on completion rather than correctness removes anxiety while preserving pacing.
- Community contribution can be assessed, but only if it is gated behind a real coursework floor.
- Publishing writing to a real audience is a different task from submitting it to a grader, and is cheap to require.
- The lecture list and readings are a usable snapshot bibliography of agent research circa autumn 2024.

## Why it matters for the course
This is the exemplar for handling a mixed-preparation cohort without either lowering the ceiling or abandoning students at the floor. The relevant lesson is modularity, not leniency — the top tier here is genuinely demanding, requiring finalist placement in a competitive hackathon, while the entry tier is genuinely reachable. For a course that will draw students with very different backgrounds in software engineering, machine learning and product work, a tier structure gives a way to publish one syllabus and multiple honest completion standards. The parallel Mastery/Ninja split is the specific pattern worth stealing: a technical-depth track and an applied-delivery track at equal height maps naturally onto the two halves of forward-deployed engineering work.

## How to use it in course design
- **Assessment:** define tiers by named deliverables, published in advance, so that a student can choose a target at the start rather than discovering the standard at the end.
- **Assessment:** offer at least two routes to the higher tiers — one depth-oriented, one delivery-oriented — rather than a single ladder.
- **Assessment:** use completion-graded, sub-five-question checks to pace lecture engagement, and reserve real measurement for the artefacts that matter.
- **Assessment:** require one short public writeup, tier-dependent in content, graded pass/no-pass on effort. It is the cheapest instrument in this collection and produces genuine synthesis.
- **Community:** if community contribution is to be recognised, gate it behind a coursework floor so recognition is not available for sociability alone.
- **Content:** use the twelve-lecture guest structure as a model for bringing external practitioner perspectives in, and mine the assigned readings as a starting bibliography.

## Limits and cautions
- MOOC incentives are not degree incentives. Tier structures work partly because MOOC students have nothing to lose by aiming low; in a credit-bearing course the tiers interact with grades and transcripts, and the design cannot be transplanted unchanged.
- Tiering must be designed so that higher tiers are genuinely harder rather than merely longer. Volume is not depth, and a badly designed ladder rewards persistence over capability.
- Effort-based pass/no-pass grading of the written article is only defensible at low stakes. It would not survive being made load-bearing for a degree outcome.
- Hackathon-dependent tiers rely on an external event with prizes and judges; that infrastructure is not free and may not be reproducible.
- No completion or distribution data is published, so nothing can be said about how many students reached which tier or whether the ladder actually motivated the intended behaviour.
- The Fall 2024 content is a snapshot of a fast-moving field and is already dated; the structure transfers, the reading list ages.

## Verification status
Verified directly against the Fall 2024 course page: the instructor and co-instructor with affiliations; the advertised topic list; the twelve dated lecture sessions with speakers, affiliations, titles and assigned readings as enumerated above; the complete five-tier certificate structure with the exact requirements for Trailblazer, Mastery, Ninja, Legendary and Honorary; the quiz mechanics including per-lecture release, multiple-choice format, approximate five-question length and completion grading; the written-article requirement including the ~500-word length, the Twitter/LinkedIn/Medium publication venues, pass/no-pass effort grading and the tier-dependent content split; the three lab assignments and the all-must-pass requirement; the hackathon with unlimited team sizes; the Discord community; the explicit statement that completing assignments is optional and auditing is welcome; and the fact that the course has completed with videos still available and all certificates released. Not verified: completion rates, tier distributions, hackathon participation numbers, or any outcome evidence — none is published.
