# Cliff Notes — Your AI Product Needs Evals

## Citation and access
- **Author:** Hamel Husain
- **Title:** Your AI Product Needs Evals
- **Venue and year:** Personal technical blog, published 29 March 2024
- **Source consulted:** https://hamel.dev/blog/posts/evals/
- **Access status:** open access (public blog post, fetched and read in full)

Husain led the team that built CodeSearchNet, a precursor to GitHub Copilot, and now works as an independent consultant on domain-specific AI products. The post is an adaptation of a Vanishing Gradients podcast conversation with Emil Sedgh (lead AI engineer at Rechat) and Hugo Bowne-Anderson, and was reviewed before publication by Jeremy Howard, Eugene Yan, Shreya Shankar, Jeremy Lewi, and Joseph Gleasure.

## What this source is
A practitioner essay that argues most failed LLM products share one root cause: no robust evaluation system. It presents a three-level evaluation hierarchy — unit tests, human and model evaluation, and A/B testing — and grounds the hierarchy in a single sustained case study of Rechat, a real-estate SaaS company whose AI assistant "Lucy" had plateaued. It is prescriptive rather than empirical: there is no controlled study, no dataset release, and no statistical claim. Its authority comes from the specificity of the engineering practices it describes.

## The argument in full
Husain opens by claiming that teams building successful LLM products need three capabilities: the ability to evaluate quality, the ability to debug issues by logging and inspecting data, and the ability to change system behavior through prompt engineering, fine-tuning, or ordinary code. Most teams, he argues, focus almost exclusively on the third capability. The consequence is that they can change the system but cannot tell whether the change helped, "which prevents them from improving their LLM products beyond a demo." The essay's thesis is therefore that evaluation is not a quality-assurance step appended to development; it is the mechanism that makes iteration possible at all.

The Rechat case study makes the plateau concrete. Rechat's assistant Lucy could handle a wide range of real-estate agent tasks, but development stalled with three specific symptoms. First, whack-a-mole: fixing one failure mode reliably introduced others. Second, no visibility beyond "vibe checks" — the team could not say how the assistant was performing across tasks or whether a change was an improvement. Third, prompt sprawl: prompts had expanded into "long and unwieldy forms" as the team bolted on instructions to patch individual failures. Husain's diagnosis is that all three symptoms are downstream of the same missing infrastructure.

Level 1 is unit tests, written as ordinary assertions in whatever test framework the team already uses. The design move that makes this tractable is decomposition: break the LLM's scope into **features** (what the assistant can do) and **scenarios** (situations the feature must handle). Husain works through the "Listing Finder" feature, which must handle three scenarios — a query matching exactly one listing, a query matching multiple listings, and a query matching none — each of which becomes an assertion on the returned array length. He also shows generic assertions that apply across features, such as a regex check that no raw UUIDs leak into user-facing output after template placeholders are stripped. Rechat, he reports, "has hundreds of these unit tests." Test cases themselves can be generated synthetically: prompt an LLM to write fifty instructions a real-estate agent might give, pair each with a follow-up lookup instruction, and check the round trip — if creating a contact and then fetching it does not return exactly one result, either creation or retrieval is broken. Critically, Husain breaks with software-testing convention here: "unlike traditional unit tests, you don't necessarily need a 100% pass rate. Your pass rate is a product decision." These tests run in CI on every code change, and results are tracked over time outside CI; Rechat uses Metabase dashboards for this.

Level 2 is human and model evaluation, and its prerequisite is logging traces. A trace is a logical grouping of log records; for a conversational assistant, the trace is the conversation. Rechat uses LangSmith, which auto-logs LangChain calls, and Husain stresses that "searching, filtering, and reading traces are essential features" of whatever tool a team picks. But he argues strongly for building a domain-specific data viewer on top of the generic trace store. Rechat's custom tool showed which feature and scenario was being evaluated, whether the input was synthetic or from a real user, filters across feature-scenario combinations, and links out to both the CRM record and the trace log. It was built with Shiny for Python in "less than a day"; Gradio, Streamlit, and Panel are named as alternatives, and Lilac is mentioned for semantic search and filtering. The tool also made the model's output human-editable, so reviewing doubled as curation of fine-tuning data. On labeling schemes Husain is blunt: "I often start by labeling examples as good or bad… assigning scores or more granular ratings is more onerous to manage than binary ratings."

On how much data to look at, Husain refuses to give a number and instead gives a floor and a heuristic. The floor is that you should read traces from *all* your test cases plus real user traces. The heuristic, in a footnote, is to "keep reading logs until you feel like you aren't learning anything new." His stated position is that "you can never stop looking at data—no free lunch exists." Automated evaluation with LLM judges is then introduced not as a replacement for this reading but as something whose agreement with human judgment must itself be tracked. The workflow is a spreadsheet with the model's response, the model's critique, the model's binary outcome, and a human's parallel critique and outcome, filled in twenty-five to fifty examples at a time. He offers two rules: use the most powerful model you can afford as the judge, and recognize that "model-based evaluation is a meta-problem within your larger problem" requiring its own mini-evaluation system. He also warns explicitly that "using raw agreement is generally not recommended and can be misleading when classes are imbalanced. Instead, you should typically measure precision and recall separately."

Level 3 is A/B testing against real users, which Husain treats briefly because it is not meaningfully different from A/B testing any other product feature, and because he thinks most teams should defer it until the product is mature. The three levels are ordered by cost — "the cost of Level 3 > Level 2 > Level 1" — and this ordering dictates cadence: Level 1 on every code change, Level 2 on a set cadence, Level 3 only after significant product changes. The essay closes with the argument that the eval system pays for itself twice over. Fine-tuning becomes tractable because "99% of the labor involved with fine-tuning is assembling high-quality data," and the eval system is already producing curated, human-corrected examples. Debugging becomes tractable because the trace inspection infrastructure a team builds for evaluation is the same infrastructure needed to diagnose a production incident.

## Structure of the original
- Motivation
- Iterating Quickly == Success
- Case Study: Lucy, A Real Estate AI Assistant
  - The Problem: How To Systematically Improve The AI?
- The Types Of Evaluation
  - Level 1: Unit Tests — Step 1: Write Scoped Tests; Step 2: Create Test Cases; Step 3: Run & Track Your Tests Regularly
  - Level 2: Human & Model Eval — Logging Traces; Looking At Your Traces (How much data should you look at?); Automated Evaluation w/ LLMs
  - Level 3: A/B Testing
  - Evaluating RAG (explicitly out of scope; defers to Jason Liu)
- Eval Systems Unlock Superpowers For Free — Fine-Tuning (Data Synthesis & Curation); Debugging
- Conclusion

## Key claims, findings, and specifics
- Three capabilities are required to build a working LLM product: evaluate quality, debug via logging and data inspection, and change system behavior. Most teams do only the third.
- Rechat's plateau presented as three named symptoms: whack-a-mole failure fixing, no visibility beyond vibe checks, and prompts grown into "long and unwieldy forms."
- Decomposition unit: features × scenarios. Worked example is a "Listing Finder" feature with three scenarios asserting `len(listing_array) == 1`, `> 1`, and `== 0`.
- Generic assertion example: after stripping `{{...}}` template placeholders, a UUID regex must match zero times in user-facing output.
- Rechat maintains "hundreds of these unit tests."
- Pass rate is explicitly a product decision, not a fixed 100 percent target.
- Synthetic test-case generation prompt given verbatim in the original: "Write 50 different instructions that a real estate agent can give to his assistant to create contacts on his CRM…"
- Round-trip verification pattern: create a record, then fetch it; a result count other than one localizes the bug to creation or retrieval.
- Tooling named: LangSmith (traces), Metabase (test-result dashboards), Shiny for Python (custom viewer, built in under a day), Gradio / Streamlit / Panel (alternatives), Lilac (semantic search and filter).
- Binary good/bad labeling is preferred over graded scores because graded scores are "more onerous to manage."
- Judge validation workflow operates on 25–50 examples at a time with paired model and human critique and outcome columns.
- Explicit statistical warning: raw agreement is misleading under class imbalance; report precision and recall separately.
- Cost and cadence ordering: Level 3 > Level 2 > Level 1 in cost; Level 1 runs on every code change, Level 2 on a cadence, Level 3 after significant product changes.
- On fine-tuning: "99% of the labor involved with fine-tuning is assembling high-quality data," and "fine-tuning is best for learning syntax, style, and rules, whereas techniques like RAG supply the model with context or up-to-date facts."

## Method and evidence base
This is an argument from engineering practice, not from experiment. Its evidence is a single detailed longitudinal case — Rechat's Lucy assistant — supplemented by code snippets, screenshots of the custom review tool, and named tooling choices. There is no comparison group, no measured before-and-after improvement, and no released dataset. The claims about what works are therefore best read as well-specified hypotheses backed by one practitioner's sustained consulting experience, not as validated findings. The essay's pre-publication review by five named practitioners is the closest thing it has to external validation. When teaching from it, the specificity is the value: the piece tells you exactly what to build, in what order, with what tools, which is precisely what most evaluation literature omits.

## Vocabulary the source introduces
- **Feature** — a discrete capability of the LLM system that can be scoped and tested independently (for example, "Listing Finder").
- **Scenario** — a specific situation a feature must handle correctly; the unit that becomes an assertion.
- **Trace** — a logical grouping of log records; for a conversational assistant, the whole conversation.
- **Level 1 / Level 2 / Level 3 evaluation** — the cost-ordered hierarchy of unit tests, human-and-model review, and live A/B testing.
- **Vibe check** — informal, unstructured quality judgment; the anti-pattern the essay is written against.
- **Data synthesis and curation** — using the eval review loop to produce human-corrected examples suitable for fine-tuning.

## What to remember
- Evaluation is the mechanism that makes iteration possible, not a report card produced after iteration. Teams that can only change behavior, without measuring it, plateau at demo quality.
- Decompose the system into features and scenarios before writing any assertion. The decomposition is what makes the test suite maintainable and diagnostic.
- Pass rate is a product decision. Copying the 100-percent-green convention from software unit testing is a category error here.
- Remove all friction from looking at data, then look at a lot of it. Build a domain-specific viewer; a generic trace browser is not enough.
- An LLM judge is a measurement instrument that requires its own evaluation, tracked against human labels, reported as precision and recall rather than raw agreement.
- The eval system is dual-use infrastructure: it is also the debugging system and the fine-tuning data pipeline.

## Why it matters for the course
This is the most direct practitioner argument for making evaluation the spine of the course rather than a module inside it. Husain's three levels give a natural progression that maps onto course structure: students can write scoped assertions in the first weeks, build a labeling and trace-review workflow in the middle, and reason about live experimentation at the end. The features-and-scenarios decomposition is a teachable design skill that transfers directly to a forward-deployed engineering context, where the first real task on a client engagement is usually figuring out what "working" means for a specific domain. The essay also supplies the strongest available justification for a course rule that every shipped feature must be accompanied by an evaluation artifact, and its insistence on building a custom review tool gives students a concrete, small, buildable lab deliverable.

## How to teach it
- **Lecture point:** contrast the three capabilities (evaluate, debug, change) and show why teams that own only the third are stuck. Use the Rechat whack-a-mole symptom as the diagnostic signature.
- **Lecture point:** the features × scenarios grid as a design artifact. Have students produce one for a system before they write any test.
- **Lab exercise:** given a small LLM-backed application, write ten scoped assertions plus two generic assertions (for example, a leaked-identifier regex), wire them into CI, and produce a run-over-time dashboard.
- **Lab exercise:** synthetically generate fifty test cases with an LLM, then implement one round-trip verification (create then fetch) and report the pass rate with a written justification for why that rate is acceptable.
- **Lab exercise:** build a minimal domain-specific trace viewer in Streamlit or Shiny with filtering by feature and scenario, a binary good/bad label control, and an editable output field. Time-box it to one session, matching Husain's claim that this is a sub-day build.
- **Assessment idea:** students set up an LLM judge for their own project, hand-label 50 examples, and report judge precision and recall against the human labels — explicitly not raw agreement. Grade on whether they correctly identify class imbalance in their own data.
- **Assessment idea:** a written ship/no-ship memo that states the pass rate achieved, argues why that threshold is the right product decision, and names the failure modes the suite does not cover.

## Limits and cautions
- No empirical validation. One case study, one company, no control condition, no measured improvement figures. Do not present its recommendations as findings.
- The essay explicitly defers RAG evaluation to another author, so it does not cover retrieval-specific measurement at all.
- Level 3 is treated in a paragraph. For experimental design, statistical power, and inference, this source is insufficient and must be paired with the Miller and Angelopoulos material in this folder.
- The advice to "use the most powerful model you can afford" as judge is a cost heuristic with no accompanying analysis of when a weaker judge suffices, and it interacts badly with the self-enhancement bias documented by Zheng et al.
- Tooling recommendations are dated to early 2024 and will drift. Teach the pattern, not the product names.
- Binary labeling is easier to manage but discards information that graded or narrative assessment preserves — a tension worth surfacing alongside the Govaerts material in this folder.

## Verification status
- **Verified against the original:** author identity and background; publication date; full section outline; the three-capabilities framing; the Rechat case study and its three plateau symptoms; the features-and-scenarios decomposition; the Listing Finder example and its three assertions; the UUID regex assertion pattern; the "hundreds of these unit tests" claim; the "pass rate is a product decision" claim; the synthetic test-generation prompt; the round-trip verification pattern; all named tooling (LangSmith, Metabase, Shiny for Python, Gradio, Streamlit, Panel, Lilac); the binary-labeling preference; the "keep reading logs until you feel like you aren't learning anything new" heuristic; the 25–50 example judge-validation batch size; the precision-and-recall warning; the cost ordering and cadence; the fine-tuning and debugging "superpowers" section; the concluding takeaway list; the podcast provenance and named reviewers.
- **Provisional or not verified:** none of the quantitative claims in this note are the author's own measurements, because the source contains none. The "99% of the labor" figure is the author's rhetorical estimate and is reproduced as such, not as a measured quantity. Screenshots referenced in the original were not independently inspected.

