# Cliff Notes — AI Engineering

## Citation and access
- **Author:** Chip Huyen
- **Title:** *AI Engineering: Building Applications with Foundation Models*
- **Publisher and year:** O'Reilly Media, 2025
- **Source consulted:** none. The book was not obtained or read for this note.
- **Access status:** **copyrighted book — synthesis only.** No text is reproduced, no passage is quoted, and no chapter or page citation is given, because none was verified. Everything below is an original characterization of the book's role in this folder, written from its publicly described subject matter and from the author's well-known prior work on machine learning systems design.

**Read this caveat before using the file.** This is the weakest-verified note in the folder. It is included because the book occupies a real slot in the course's source architecture — the practitioner-facing organizing text — not because its contents have been checked. Anything below that reads as a claim about what the book says should be confirmed against the book before it appears in teaching material.

## What this source is
A practitioner-oriented book on building applications on top of foundation models, positioned as the successor volume to the author's earlier work on designing machine learning systems. Its function in this folder is structural: it is the text that connects evaluation to the rest of the engineering lifecycle, so that measurement is not taught as an isolated statistical topic but as the thing that governs model selection, prompt and context design, adaptation decisions, and production monitoring.

## The argument in full
The framing that makes the book useful here is that AI engineering is a distinct discipline rather than a subset of either software engineering or machine learning research. The distinction rests on where the difficulty lives. In conventional software, behaviour is specified; in classical machine learning, behaviour is trained from a dataset the team assembles and controls. In foundation-model applications, the core capability arrives pre-built and the engineering work is about everything surrounding it — deciding which model, supplying the right context, constraining the output, detecting when it is wrong, and deciding what to do about it. That relocation of difficulty is why evaluation moves from a project phase to a continuous requirement.

The practical consequence, and the reason this book anchors the measurement strand rather than sitting beside it, is that in this setting you cannot know whether a change helped without measuring. A prompt edit, a retrieval adjustment, a model swap, a temperature change — none of these have inspectable consequences the way a code change does. The system's behaviour is a distribution, and a distribution can only be compared to another distribution through measurement. This is the same conclusion Husain reaches from the consulting side and Miller reaches from the statistical side, and having a book-length treatment that reaches it from the systems-engineering side is what makes the three mutually reinforcing.

The book's other structural contribution is the ordering of adaptation techniques by cost and reversibility. Prompt and context engineering come before retrieval augmentation, which comes before finetuning, which comes before anything involving training from scratch — not because the later options are worse but because they are more expensive, slower to iterate, and harder to undo. This ordering is genuinely useful pedagogy because students arriving with a research background tend to reach for finetuning first, and the discipline of exhausting cheaper interventions and measuring each one is a professional habit rather than a technical skill.

Evaluation in this framing is not one activity but several answering different questions at different costs. Automated offline checks answer whether a known behaviour regressed. Human review of production traces answers what is actually going wrong, which is a question automated checks cannot ask because they only test what someone already thought to test. Model-based judges answer whether an open-ended output meets a criterion at a scale humans cannot sustain, but only after being validated against human labels. Production monitoring answers whether behaviour has drifted since deployment. A team that runs only one of these has a specific blind spot, and knowing which blind spot corresponds to which omission is the operational skill.

Finally, the book treats the surrounding engineering — inference cost and latency, caching, routing, guardrails, observability — as first-class rather than as deployment afterthoughts. This matters for the course because these constraints shape what evaluation is even possible: an eval you cannot afford to run on every change will not be run on every change, and a system without trace capture cannot support the error analysis that the measurement strand depends on. Evaluation infrastructure and production infrastructure are the same infrastructure.

## Structure of the original
**Not verified.** The book's chapter structure was not confirmed against a table of contents. The publicly described subject areas include foundation model fundamentals, evaluation methodology, prompt engineering, retrieval-augmented generation and context construction, finetuning, dataset engineering, inference optimization, and end-to-end architecture with user feedback. The ordering and chapter boundaries stated in any teaching material should be taken from the book itself.

## Key claims, findings, and specifics
**No numbers, benchmark results, or specific findings are listed here, because none were verified.** This section is deliberately empty of specifics rather than populated from recollection. If the course needs a figure, a benchmark comparison, or a named technique attributed to this book, it must be read out of the book directly.

The following are characterizations of the book's general position, offered as this note's own synthesis and not as claims about its wording:
- AI engineering is treated as a discipline in its own right, distinguished by the fact that the model is acquired rather than built.
- Evaluation is positioned as foundational to the lifecycle rather than as a validation step at the end.
- Adaptation techniques are ordered by cost and reversibility, with prompting and context work preceding retrieval, which precedes finetuning.
- Different evaluation modes — automated checks, human trace review, model-based judging, production monitoring — answer different questions and are not substitutes.
- Inference cost, latency, and observability are treated as design constraints rather than deployment details.

## Method and evidence base
This is a practitioner text synthesizing industry practice, not a research contribution presenting new experimental results. Its authority derives from the author's engineering and teaching background and from the coherence of the framework rather than from primary evidence. This is a strength for course purposes — it supplies vocabulary and structure that the research papers do not — and a limitation for the same reason: claims about what works should be traced to the papers and the practitioner posts, not rested on the book. The course should treat it as the organizing spine and the papers as the load-bearing evidence.

## Vocabulary the source introduces
**Attribution caution:** the terms below are standard in contemporary AI engineering practice and are not necessarily coined by this book. They are listed because the book is a convenient place to point students for a coherent treatment of them, not as a claim about origination.
- **AI engineering** — the discipline of building applications on foundation models, distinguished from machine learning engineering by the fact that the model is adapted rather than trained from scratch.
- **Adaptation** — the general term for changing a system's behaviour without training a new model, spanning prompting, context construction, retrieval, and finetuning.
- **Context construction** — the deliberate assembly of what goes into a model's input, of which retrieval augmentation is one method.
- **Model-based evaluation** — using a model to judge outputs against a criterion, requiring validation against human labels before its scores can be trusted.
- **Inference optimization** — the set of techniques for reducing latency and cost at serving time.

## What to remember
- The organizing claim is that AI engineering is a discipline of its own, because the model arrives pre-built and the work is everything around it.
- Evaluation is not a phase. In this setting it is the only way to know whether any change helped, which makes it continuous.
- Adaptation techniques should be tried in order of increasing cost and decreasing reversibility: prompting and context first, retrieval next, finetuning after that.
- Automated checks, human trace review, model-based judging, and production monitoring answer different questions and cannot substitute for one another.
- Inference cost, latency, and observability constrain what evaluation is practically possible, so they are evaluation concerns and not just deployment concerns.
- **This note is unverified.** Confirm anything before teaching it.

## Why it matters for the course
The course needs one text that a student can read cover to cover and come away with a coherent mental model of the whole system, and the research papers cannot do that individually — Miller is about standard errors, Thakur is about retrieval generalization, Shankar is about criteria drift. This book is the candidate for that role, and its particular value is that it makes evaluation structural rather than topical. A course built around it can justify the claim that measurement is the spine rather than a module, because the book already treats it that way. It also gives students the vocabulary they will encounter in industry, which matters for a forward-deployed engineering programme where graduates must communicate with client teams who use these terms. The honest framing for course designers is that this book supplies structure and language, while Husain supplies the practitioner workflow, Shankar supplies the human-in-the-loop mechanics, Miller supplies the statistics, Zheng supplies the judge methodology, Singh supplies the governance critique, and Thakur supplies the retrieval-specific evidence. The book organizes; the papers substantiate.

## How to teach it
- **Structural use:** consider it as assigned background reading for the systems half of the course, with the papers assigned against specific weeks. Do not build lecture claims on it without verifying them.
- **Lecture point:** the argument that AI engineering is distinct because the model is acquired rather than built. This reframes what students think the job is.
- **Lecture point:** the cost-and-reversibility ordering of adaptation techniques, taught explicitly against the instinct to finetune first.
- **Lab exercise:** give students a failing system and require them to work up the adaptation ladder in order — prompt, then context, then retrieval, then finetuning — measuring at each step and stopping when the measurement says they can.
- **Lab exercise:** have students map the four evaluation modes onto a system they are building and identify which failure classes each mode would and would not catch.
- **Assessment idea:** ask students to write the evaluation section of a design document for their project, specifying which modes they will use, what each is intended to catch, and what it will cost to run.
- **Instructor task before adoption:** read the book and replace this note's unverified sections with page-anchored specifics. Until that happens, treat this file as a placeholder with a plan rather than as a study note.

## Limits and cautions
- **The book was not consulted.** This is the primary caution and it applies to everything above.
- It is a practitioner synthesis, not a research contribution. It should not be cited as evidence for an empirical claim.
- The field moves quickly and books lag. Specific tooling recommendations and model comparisons will date faster than the framework.
- Breadth is bought at the cost of depth. The statistical treatment of evaluation uncertainty in Miller, the retrieval-generalization evidence in Thakur, and the rater-cognition evidence in the assessment literature are all deeper than a general text can be, and the book should not displace them.
- As a copyrighted commercial work, nothing from it may be reproduced in course materials beyond fair-dealing quotation with attribution.
- Assigning a book has a cost to students. If the course cannot require purchase, the openly available practitioner sources in this folder — particularly Husain — carry more of the same load at no cost, and the book should then be listed as optional.

## Verification status
- **Verified:** author name, title, publisher, and the fact that it is a copyrighted commercial book. Nothing else.
- **Not verified — everything substantive.** The book was not obtained, opened, or read. No table of contents was fetched. No chapter titles, page numbers, section structure, figures, tables, numbers, benchmark results, named techniques, or direct quotations appear in this note, and none should be added without reading the book.
- **Explicitly synthesized rather than reported:** the entire "argument in full" section is this note's own reconstruction of the book's likely position from its publicly described subject area and from the author's known prior work. It is written to be useful as a course-design placeholder. It is not a summary of the book's actual contents and must not be represented as one.
- **Required follow-up before this file is used in teaching:** obtain the book, verify or correct the framing above, populate the structure section from the real table of contents, and replace the empty specifics section with page-anchored content.

