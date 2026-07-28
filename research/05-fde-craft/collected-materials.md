# Collected Materials — FDE / Engagement Craft

## Working synthesis
The craft is organizational problem-solving with code as the instrument. The
model is usually the cleanest part of the work; the hard parts are discovery,
data access, stakeholder alignment, adoption and the judgement about when to
generalise. The strand is built from four bodies of source material:

- field research method, for learning what the work actually is
- customer conversation and negotiation, for getting to truth and to access
- domain modelling, for translating between business and system language
- change and adoption, for the gap between a delivered system and a used one

plus two practitioner sources that show what the composite role looks like in
practice, one from a firm built entirely around it and one from a
customer-embedded engineering organisation inside Microsoft.

## Source-by-source Cliff Notes

Each entry below is a pointer. The full source-representative note lives in the
corresponding file in this folder, written against the original in a common
twelve-section template.

### Beyer and Holtzblatt, Contextual Design: Design for Life (second edition, Morgan Kaufmann, 2017)
- Contextual inquiry is structured observation of real work in its own setting, not a generic interview.
- Four principles govern the inquiry: context, partnership, interpretation and focus, with the master-apprentice relationship as the operating metaphor.
- Five work models are drawn from the data: flow, sequence, artifact, cultural and physical.
- Affinity diagramming and model consolidation turn individual observations into a defensible picture of the whole customer population, followed by visioning, storyboarding and User Environment Design.
- Copyrighted; the local second-edition EPUB was read in full and the note is an original synthesis with no source text reproduced.

### Portigal, Interviewing Users (Rosenfeld Media, 2013)
- The interviewer's job is to embrace not-knowing; domain expertise is treated as a liability during fieldwork because it substitutes assumption for observation.
- Ask about specific past events rather than generalities or hypotheticals; watch for leading questions; use silence; mirror the participant's vocabulary rather than importing your own.
- Contradictions between what people say and what they do are signal, not error.
- The first-edition local EPUB includes remote interviewing among its difficult-context adaptations; it is not the 2023 second edition.
- Copyrighted; the local EPUB was read in full and the note is an original synthesis with no source text reproduced.

### Fitzpatrick, The Mom Test (self-published, 2013)
- Three rules: talk about their life rather than your idea, ask about specifics in the past rather than generics or opinions about the future, and talk less and listen more.
- Bad data taxonomy: compliments, fluff and ideas, each with a deflect-anchor-dig response.
- You should be terrified of at least one question in every conversation; if you are not, you are not asking anything that could disconfirm you.
- Commitment and advancement are the test of interest, measured in the currencies of time, reputation risk and money.
- Copyrighted; the complete available local EPUB was read and the note is an original synthesis with no source text reproduced. The package does not supply reliable edition metadata.

### Evans, Domain-Driven Design (Addison-Wesley, 2003)
- The hardest problem in complex software is understanding the domain, not the technology.
- The ubiquitous language is used rigorously by everyone in speech, documents and code; a concept the code cannot express is a defect in the model.
- Bounded contexts make it legitimate for the same word to mean different things in different parts of an organisation, and context maps document the relationships actually in play.
- The anticorruption layer is the standard defensive move when integrating with a model you cannot influence, which is the normal condition on a customer site.
- Distillation identifies the core domain and concentrates effort there, which is the same judgement as deciding what to build custom and what to adopt.
- Copyrighted; the note is an original synthesis with no source text reproduced.

### Fisher, Ury and Patton, Getting to Yes (third edition, Penguin Books, 2011)
- Product of the Harvard Negotiation Project; structured as The Problem, The Method, and Yes, But.
- Four principles: separate the people from the problem, focus on interests rather than positions, invent options for mutual gain, and insist on objective criteria.
- Four obstacles to inventing options: premature judgement, searching for the single answer, the assumption of a fixed pie, and thinking that solving their problem is their problem.
- BATNA, the best alternative to a negotiated agreement, is the source of negotiating power and the standard against which any offer is judged.
- Negotiation jujitsu and the one-text procedure handle counterparts who will not play.
- Copyrighted; the local third-edition EPUB was read in full and the note is an original synthesis with no source text reproduced.

### Kotter, Leading Change (Harvard Business Review Press, 1996; anniversary edition 2012)
- Eight errors, inverted into an eight-stage process: urgency, guiding coalition, vision and strategy, communicating the vision, empowering broad-based action, short-term wins, consolidating gains, anchoring in the culture.
- Vision is chronically undercommunicated, and leadership behaviour inconsistent with the vision destroys it faster than communication builds it.
- Short-term wins must be engineered deliberately, and must be visible, unambiguous and attributable.
- Culture changes last, once new behaviour has been seen to produce better results.
- Management produces consistency; leadership produces change; transformation fails when over-managed and under-led.
- Copyrighted; the note is an original synthesis with no source text reproduced.

### Hiatt, ADKAR (Prosci Learning Center Publications, 2006)
- Change happens one person at a time; the organisation changes only as an aggregate of individual transitions.
- Five sequential elements: awareness, desire, knowledge, ability, reinforcement.
- The barrier point, the first unmet element, determines which intervention will work; effort spent past it is wasted.
- Being told is not awareness, wanting is not knowing, and knowing is not being able; training is the default reflex and is habitually aimed at the wrong element.
- Copyrighted; the note is an original synthesis with no source text reproduced.

### Microsoft ISE Engineering Fundamentals Playbook (open access, microsoft.github.io/code-with-engineering-playbook)
- The published working standard of a Microsoft organisation whose delivery model is embedding engineers with customers. Open on GitHub, MkDocs Material, contributable by pull request.
- Verified specifics: an engineer knows the playbook, follows it, and fixes it if it is broken; quality and precision are valued explicitly above getting things done; work diligently on the one important thing; share context through wiki, Teams and backlog items; never add scope to a backlog item, create a new one; we all own our code.
- Entry points that give it teeth: the Engineering Fundamentals Checklist and The First Week of an ISE Project.
- The design review apparatus of decision logs, architecture decision records, trade studies with a template and engineering feasibility spikes is the strand's best model for assessing engineering judgement in writing.
- The ML and AI Projects section supplies an ML Fundamentals Checklist, an ML Model Production Checklist and Responsible AI guidance placed inside the engineering process.
- Non-functional requirements are enumerated as fifteen named categories; observability is organised as dashboards, logging, metrics and tracing.
- Engineering Feedback is a first-class section, and is the institutional mechanism turning field friction into product input.

### Palantir FDE practitioner writing (open access, blog.palantir.com and palantir.com/careers)
- Grounded in a retrieved primary source: "A Day in the Life of a Palantir Forward Deployed Software Engineer", Palantir Blog, 2 November 2020, an interview with an FDSE delivering data integration to a US Department of Defense customer.
- Verified specifics: the FDSE is internally called a Delta; a Dev focuses on creating a single capability usable by many customers, while an FDSE focuses on enabling many capabilities for a single customer.
- The role is explicitly not consulting, because the platforms are ready-built and the engineer configures rather than rebuilds; traditional engineering rigour still applies, including engineering reviews, code reviews, deployability optimisation, and maintenance and monitoring of production systems.
- A key responsibility is carrying technical expertise from the field back to business development and product development; some of the firm's most valuable product additions originated in the field.
- The hardest aspect named by the practitioner is directing focus, meaning identifying the most valuable thing to work on regardless of expertise or comfort level.
- The current careers page describes three deliberately overlapping roles, Echos, Deltas and Devs, with the Echo mission spanning identification of the true limiting problem, decomposition into component workflows, stakeholder alignment from the CIO to the nurse, solving backwards from a user's workflow, and building the technical solution.

## Corrections and open items
- Seven of the nine sources in this folder are copyrighted books. Four local EPUBs have now been read in full: *Contextual Design: Design for Life*, *Interviewing Users*, *The Mom Test*, and *Getting to Yes*. Their notes are original, source-grounded syntheses and reproduce no source text. The Evans, Kotter, and Hiatt notes remain provisional syntheses; chapter-level detail, exact wording, and any passage intended for quotation must be checked before publication. Each note states its own verification depth.
- The companion Palantir post "Dev versus Delta: Demystifying Engineering Roles at Palantir" could not be retrieved; the hosting platform redirected to a sign-in page. The Dev versus Delta distinction recorded above comes from the day-in-the-life interview, which states it directly.
- The Palantir careers URL for the forward-deployed engineering role returned 404; the current role taxonomy was taken from the top-level careers page instead.
- The ISE playbook is a living document with a public change history. Any section cited in course materials should be pinned to a commit or a retrieval date. It displayed a last-update date of 22 August 2024 at time of consultation.
- The commonly repeated statistic that a large majority of change efforts fail is frequently attributed to Kotter without a traceable source in his work. It is flagged in that note and must not be quoted in course materials without a verifiable citation.
- Prosci's benchmarking research behind ADKAR is proprietary, practitioner self-reported and commercially tied to a certification business. No specific finding from it should be cited without retrieving the published study.

## Material retained here
- Discovery and contextual inquiry notes
- Stakeholder and negotiation notes
- Change management and handover notes
- Demo-craft and workshop notes
- Cliff Notes summaries of books and practitioner writing that are not safe to copy verbatim

## Public-source notes to keep
- The ISE playbook table of contents, checklists and design-review templates, which are open and directly reusable
- Palantir practitioner essays with retrieval dates and the working URL form, since default links redirect
- Short source summaries and verified quotations where the licence allows