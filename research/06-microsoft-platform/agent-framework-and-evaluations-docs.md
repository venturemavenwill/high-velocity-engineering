# Cliff Notes — Agent Framework Evaluation and Foundry Agent Evaluators

## Citation and access
- **Titles:** "Evaluation" (Microsoft Agent Framework, per-language variants for C#, Python and Go); "Agent evaluators" and "Built-in evaluators reference" (Microsoft Foundry).
- **Publisher:** Microsoft, Microsoft Learn.
- **Sources consulted, read through search-returned excerpts rather than full page fetches:**
  - `https://learn.microsoft.com/agent-framework/agents/evaluation`
  - `https://learn.microsoft.com/azure/foundry/concepts/evaluation-evaluators/agent-evaluators`
  - `https://learn.microsoft.com/azure/foundry/concepts/built-in-evaluators`
  - `https://learn.microsoft.com/azure/foundry/how-to/evaluate-generative-ai-app`
- **Access status:** open documentation. **Perishable.** Many evaluators are marked **preview**, and one consulted page is a **classic** variant superseded by a newer one.

## What this source is
Two layers of documentation that together define how agent behaviour is measured on this platform. The **Agent Framework evaluation** pages define a small, deliberately minimal programming model — three types, two evaluator kinds, and a set of strategies for turning a conversation into something scoreable. The **Foundry evaluator** pages define the catalogue of things that can be measured, organised into agent behaviour, tool usage, quality and safety. The pairing matters: the framework is about *when and how* evaluation runs, and the catalogue is about *what is being asked*. Most of the intellectual content is in the second, but the first contains a design decision — how a multi-turn conversation is split — that silently determines what any score means.

## The argument in full
The framework states three design principles: **provider-agnostic**, so core types and orchestration work with any evaluation provider; **zero friction**, so you go from "I have an agent" to "I have eval results" with minimal code; and **progressive disclosure**, so simple scenarios need near-zero code while advanced ones build on the same primitives. These are ergonomics claims, and they matter more than they look, because the practical barrier to routine evaluation is not conceptual difficulty but setup cost. An evaluation harness that takes a day to stand up does not get used during development, and an evaluation that is not used during development is a release gate rather than a design tool.

The programming model is three types. **`EvalItem`** is "a single item to evaluate — wraps the full conversation and derives query/response via a split strategy." **`Evaluator`** is "a provider that scores items — local checks, Azure AI Foundry, or any custom implementation." **`EvalResults`** is "aggregated results from an evaluation run — pass/fail counts, per-item detail, and optional portal links." Three types is a good sign. The abstraction says that evaluation is a function from an interaction to a judgement, aggregated over a set, and that everything else is a detail of who does the judging.

The two-tier evaluator design is the framework's main structural idea. **`LocalEvaluator`** "runs checks locally without API calls — ideal for inner-loop development, CI smoke tests, and fast iteration", accepting any number of check functions applied to every item. **`FoundryEvals`** connects to the cloud evaluation service "for cloud-based LLM-as-judge evaluation", with results viewable in dashboards and comparison views. The two can be mixed in a single run, with each evaluator producing its own results. This is the same cost-and-speed gradient that structures the evaluation literature generally — cheap deterministic checks run constantly, expensive judged checks run less often — and having it expressed directly in the API is a genuine pedagogical asset, because the architecture teaches the discipline. `FoundryEvals` defaults to **relevance, coherence and task adherence**, and "when items contain tool definitions, it automatically adds tool call accuracy." Defaults are opinions, and this default says that an agent with tools has an additional obligation that an agent without them does not.

The **conversation split strategy** is the most important and most easily missed idea in the whole source, and the documentation flags it correctly: "Multi-turn conversations must be split into query and response halves for evaluation. How you split determines *what you're evaluating*." Three strategies are provided. **Last turn**, the default, splits at the last user message, treating everything before as query context and everything after as response, and suits "response quality at a specific point". **Full** treats the first user message as the query and the entire remainder as the response, and suits "task completion and overall trajectory". **Per-turn** scores each user-to-assistant exchange independently with cumulative context, for "fine-grained analysis". A custom splitter is also permitted — "any callable that takes a conversation and returns `(query_messages, response_messages)`". The lesson generalises far beyond this API: **the unit of analysis is a choice, and it silently determines what the number means.** An agent that recovers well from a bad first attempt scores well under Full and badly under Per-turn. Neither score is wrong; they answer different questions. A team that never chose deliberately is reporting an answer to a question it did not ask.

Several evaluation modes are described that map onto real development situations. **Expected outputs** can be supplied as ground truth, paired positionally with queries, and **expected tool calls** can be specified separately. **Pre-existing responses** can be evaluated directly "from logs or previous runs… without re-running the agent" — the mechanism that makes production trace evaluation possible rather than merely synthetic testing. **Repetitions** run each query multiple times "to detect non-deterministic behavior", which is the acknowledgement that a single sample from a stochastic system is not a measurement. And **workflow evaluation** handles multi-agent systems by extracting "each sub-agent's interactions" and evaluating them individually "along with the workflow's overall output" — separating per-component correctness from end-to-end success, which is the distinction between a system that fails and a system whose parts each look fine.

The Foundry catalogue then supplies what is actually measured, and its four-way grouping is a usable taxonomy in its own right. **Agent behaviour** covers `intent_resolution`, `task_adherence`, `task_completion` and `task_navigation_efficiency`. **Tool usage** covers `tool_call_accuracy`, `tool_selection`, `tool_input_accuracy`, `tool_output_utilization` and `tool_call_success`. **Quality** covers `coherence`, `fluency`, `relevance`, `groundedness`, `response_completeness` and `similarity`. **Safety** covers `violence`, `sexual`, `self_harm` and `hate_unfairness`. The five-way decomposition of tool usage is the part worth dwelling on, because it names five genuinely distinct failure modes that a single "did the tool work" check would conflate: choosing the wrong tool (`tool_selection`), calling the right tool with wrong arguments (`tool_input_accuracy`), the call failing technically (`tool_call_success`), and ignoring or misreading a successful result (`tool_output_utilization`), with `tool_call_accuracy` covering "the overall quality of tool calls including selection, parameter correctness, and efficiency". Two of these — wrong arguments and ignored output — produce a system that reports success and is wrong, which is exactly the failure class that is hardest to detect in production.

The published purposes of the behaviour evaluators are similarly precise. **Task Adherence** "measures whether the agent follows through on identified tasks according to system instructions." **Task Completion** measures end-to-end success. **Intent Resolution** "measures how accurately the agent identifies and addresses user intentions." **Task Navigation Efficiency** "determines whether the agent's sequence of steps matches an optimal or expected path to measure efficiency" — and it is notable as the only listed evaluator requiring no model parameter, taking `actions` and `expected_actions` instead. It is therefore the one deterministic agent-behaviour check in the set, and the only one whose result does not depend on a judge. **Customer Satisfaction** predicts satisfaction "across a conversation using six dimensions: helpfulness, completeness, clarity, tone, resolution, and adaptability." A **Quality Grader** in preview consolidates "relevance, abstention, answer completeness, groundedness, and context coverage" into a single evaluator, and **Rubric evaluators** in preview score against "custom, weighted criteria".

The output format carries a design decision worth teaching. Agent evaluators "return Pass/Fail results with reasoning", with fields including `label`, `reason`, `threshold` and `passed`; and "for evaluators that use a 1–5 scale before thresholding (such as `intent_resolution` and `tool_call_accuracy`), the output includes a numeric `score` field alongside the pass/fail result." A worked example shows `tool_call_accuracy` of 2 against a threshold of 3 producing a fail. Two things follow. First, **the threshold is a policy choice that is separable from the measurement**, and moving it changes the pass rate without changing the system — so a threshold must be justified, not inherited. Second, the accompanying `reason` string makes the judgement auditable, which is what distinguishes a usable evaluator from a number nobody trusts.

Data mapping is handled by an explicit templating syntax, and the distinction it encodes is substantive: `{{item.field_name}}` references test-dataset fields; `{{sample.output_items}}` references "the agent's structured output, including tool calls and results", required for `task_adherence`, `tool_call_accuracy`, `tool_selection`, `tool_input_accuracy` and `tool_output_utilization`; and `{{sample.output_text}}` references the plain text response, used for evaluators like `coherence` and `violence`. Some evaluators need to see the agent's trajectory and some need only its words, and a mapping error therefore silently changes what is evaluated rather than producing an error. Test data is JSONL, with simple string fields for straightforward cases and OpenAI-schema conversation arrays for tool-using interactions where "the system message is optional but useful for evaluators that assess agent behavior against instructions."

## Structure of the originals
**Agent Framework evaluation:**
- Design principles — provider-agnostic, zero friction, progressive disclosure
- Core concepts — `EvalItem`, `Evaluator`, `EvalResults`
- Local evaluators and built-in checks
- Azure AI Foundry evaluators, defaults, and the available evaluator catalogue
- Evaluating an agent; measuring consistency with repetitions
- Evaluating with expected outputs and expected tool calls
- Evaluating pre-existing responses
- Conversation split strategies, including custom splitters
- Evaluating workflows with per-agent breakdown
- Mixing multiple evaluators

**Foundry agent evaluators:**
- Per-evaluator required inputs and parameters
- Example input datasets in JSONL
- Data mapping syntax
- Configuration example
- Example output, thresholds and scores
- Built-in evaluator reference grouped by category

## Key concepts and practices
- **Three design principles:** provider-agnostic, zero friction, progressive disclosure.
- **Three core types:** `EvalItem` (one conversation, split into query and response), `Evaluator` (scores items), `EvalResults` (aggregated pass/fail counts, per-item detail, portal links).
- **Two evaluator tiers:** `LocalEvaluator` for inner-loop and CI smoke tests without API calls; `FoundryEvals` for cloud LLM-as-judge. **They can be mixed in one run.**
- **`FoundryEvals` defaults to relevance, coherence and task adherence**, adding **tool call accuracy** automatically when tool definitions are present.
- **Three split strategies:** **Last turn** (default; response quality at a point), **Full** (task completion and trajectory), **Per-turn** (fine-grained). Custom splitters accepted. **"How you split determines what you're evaluating."**
- **Expected outputs** pair positionally with queries; **expected tool calls** can be specified separately.
- **Pre-existing responses from logs can be evaluated without re-running the agent.**
- **Repetitions** exist "to detect non-deterministic behavior".
- **Workflow evaluation** extracts each sub-agent's interactions and evaluates them individually alongside the workflow's overall output.
- **Agent behaviour evaluators:** `intent_resolution`, `task_adherence`, `task_completion`, `task_navigation_efficiency`.
- **Tool usage evaluators:** `tool_call_accuracy`, `tool_selection`, `tool_input_accuracy`, `tool_output_utilization`, `tool_call_success`.
- **Quality evaluators:** `coherence`, `fluency`, `relevance`, `groundedness`, `response_completeness`, `similarity`. **Safety evaluators:** `violence`, `sexual`, `self_harm`, `hate_unfairness`.
- **`task_navigation_efficiency` takes `actions` and `expected_actions` and requires no model parameter** — the one deterministic agent-behaviour check.
- **Customer Satisfaction uses six dimensions:** helpfulness, completeness, clarity, tone, resolution, adaptability.
- **Output is pass/fail with a `reason`**, plus a numeric `score` for 1–5-scale evaluators; the documented example shows `tool_call_accuracy` 2 against threshold 3 failing.
- **Data mapping:** `{{item.*}}` for dataset fields; `{{sample.output_items}}` for structured output including tool calls, required by the trajectory evaluators; `{{sample.output_text}}` for plain text.
- Many evaluators are **preview**, and one consulted page is a superseded **classic** variant.

## Method and evidence base
First-party product documentation. Definitional, not empirical. Critically, **no agreement rates with human judgement are published for any evaluator**, no calibration data, and no guidance on where the default thresholds came from. This is a significant gap given that most of these evaluators are LLM-as-judge, and the independent literature is unambiguous that judges carry measurable biases. The documentation should be treated as an accurate description of what the tooling computes and as no evidence at all that what it computes is right.

## Vocabulary the sources introduce
- **`EvalItem`** — one conversation packaged for scoring, with a query/response split derived by strategy.
- **Conversation split strategy** — the rule turning a multi-turn conversation into a query and a response; determines what a score means.
- **Local evaluator** — a deterministic check run without API calls, for inner-loop and CI use.
- **LLM-as-judge** — model-based scoring against a rubric, run in the cloud service.
- **Intent resolution** — whether the agent correctly identified what the user wanted.
- **Task adherence** — whether the agent followed system instructions and constraints.
- **Task navigation efficiency** — whether the agent's action sequence matched an expected optimal path.
- **Tool selection / input accuracy / output utilization / call success** — the four decomposed tool failure modes.
- **Threshold** — the cut point converting a 1–5 score into pass or fail; a policy choice, not a measurement.
- **Data mapping** — the binding of dataset and agent-output fields to evaluator inputs.
- **Workflow evaluation** — per-sub-agent scoring alongside overall output for multi-agent systems.

## What to remember
- Evaluation is a function from interaction to judgement, aggregated. Three types are enough to express it.
- The two-tier design encodes the discipline: cheap deterministic checks constantly, expensive judged checks periodically.
- **The split strategy silently determines what a score means.** Choose it deliberately and state it whenever you report a number.
- Defaults are opinions. An agent with tools acquires an extra obligation by default.
- Tool failure decomposes into at least four distinct modes, two of which produce confident wrong answers.
- Repetition exists because one sample from a stochastic system is not a measurement.
- Evaluating stored traces is what makes production evaluation possible; synthetic queries only test what you thought to ask.
- Thresholds are policy. Moving one changes the pass rate without changing the system.
- A `reason` field is what makes an evaluator auditable rather than merely numeric.
- **No agreement-with-human data is published for these evaluators.** Validate the validator yourself.

## Why it matters for the course
This is where the measurement strand meets the build strand, and it is the most direct opportunity in the platform material to make evaluation a habit rather than a gate. Three things make it valuable pedagogically. The split-strategy decision is a compact, unforgettable demonstration that a metric is meaningless without its unit of analysis. The four-way decomposition of tool failure gives students a vocabulary for agent bugs that they otherwise describe as "it didn't work". And the local-versus-cloud tiering physically instantiates the cost-and-speed ladder that the evaluation literature argues for in the abstract, which means the API itself can carry the lesson. It connects directly to [research/03-measurement-evaluation/husain-your-ai-product-needs-evals.md](research/03-measurement-evaluation/husain-your-ai-product-needs-evals.md) for the ladder, [research/03-measurement-evaluation/zheng-mt-bench-chatbot-arena.md](research/03-measurement-evaluation/zheng-mt-bench-chatbot-arena.md) for judge bias, [research/03-measurement-evaluation/shankar-evalgen.md](research/03-measurement-evaluation/shankar-evalgen.md) for validating the validator, and [research/03-measurement-evaluation/miller-adding-error-bars-to-evals.md](research/03-measurement-evaluation/miller-adding-error-bars-to-evals.md) for why a pass rate without an interval is not a result.

## How to teach it
- **Lecture:** present the three split strategies and ask what happens to an agent that recovers from a bad first attempt. Answer the question before naming any tool.
- **Lecture:** teach the tool-failure decomposition as a debugging vocabulary, and ask which two modes produce silent wrong answers.
- **Lab:** evaluate one agent trace under all three split strategies and reconcile the differing scores. This is the highest-value single exercise in the topic.
- **Lab:** write local checks first, run them in CI, and only then add judged evaluators. Have students measure the time and cost difference themselves.
- **Lab:** run repetitions on a fixed query set and report the variance. Connect this to error bars.
- **Lab:** hand-label thirty traces and compute agreement between the students' labels and a built-in evaluator's. Report the disagreement rate. This is the validate-the-validator exercise, and the documentation's silence on agreement is exactly why it must be done.
- **Assessment:** require every shipped feature to carry an evaluation artefact naming its split strategy, its evaluators, its thresholds with justification, and its measured judge agreement.
- **Assessment:** ask a student to defend a threshold orally. Inherited defaults will not survive the question.
- **Framing:** perishable API surface, durable ideas. Assess the reasoning.

## Limits and cautions
- **Read through search excerpts, not full page fetches.** Structure is reconstructed; re-verify before teaching specifics.
- **No published agreement rates, calibration data, or threshold rationale for any evaluator.** This is the most serious gap.
- Most agent evaluators are **preview** and may change or disappear.
- One consulted page is a **classic** variant explicitly superseded.
- LLM-as-judge evaluators inherit the biases documented in the independent literature; the vendor documentation does not discuss them.
- Cloud evaluation requires a Foundry project with a model deployment and incurs cost, which a course lab must budget for.
- API surfaces differ across C#, Python and Go; examples are not interchangeable.
- Convenient evaluators encourage measuring what is easy to measure. The catalogue should not be mistaken for the set of things worth measuring.

## Verification status
Verified from documentation excerpts returned by search: the three stated design principles; all three core types with their quoted purposes; the `LocalEvaluator` and `FoundryEvals` descriptions and the fact that they can be mixed in a single run; the default evaluator set of relevance, coherence and task adherence, and the automatic addition of tool call accuracy when tool definitions are present; the complete four-category evaluator catalogue with all nineteen named constants; all three conversation split strategies with their quoted behaviours and "best for" descriptions, the custom-splitter signature, and the quoted statement that how you split determines what you are evaluating; expected outputs paired positionally, expected tool calls, evaluation of pre-existing responses without re-running the agent, and repetitions for detecting non-deterministic behaviour; workflow evaluation with per-sub-agent extraction alongside overall output; the per-evaluator required inputs and parameters table, including that `task_navigation_efficiency` requires `actions` and `expected_actions` and no model parameter; the published purposes of Task Adherence, Task Completion, Intent Resolution, Task Navigation Efficiency, all five tool evaluators, Customer Satisfaction with its six named dimensions, Quality Grader and Rubric evaluators; the pass/fail output format with `label`, `reason`, `threshold` and `passed`, the numeric `score` for 1–5-scale evaluators, and the worked `tool_call_accuracy` example scoring 2 against threshold 3; the three data-mapping expressions with the list of evaluators requiring `{{sample.output_items}}`; the JSONL dataset format and the note that the system message is optional but useful for instruction-following evaluators; and the preview status of numerous evaluators. **Not verified:** the full structure of any of the four pages, since none was fetched in full; any agreement rate, calibration figure or threshold rationale, none of which appears in the excerpts read; and the current content of the superseded classic page. The characterisation of thresholds as separable policy, the observation that two tool failure modes produce silent wrong answers, and the framing of setup cost as the practical barrier to routine evaluation are **this note's own analysis, not claims from the sources.**
