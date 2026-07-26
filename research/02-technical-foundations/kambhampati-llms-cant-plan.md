# Cliff Notes — LLMs Can't Plan, But Can Help Planning in LLM-Modulo Frameworks

## Citation and access
- **Authors:** Subbarao Kambhampati, Karthik Valmeekam, Lin Guan, Mudit Verma, Kaya Stechly, Siddhant Bhambri, Lucas Saldyt, Anil Murthy
- **Title:** LLMs Can't Plan, But Can Help Planning in LLM-Modulo Frameworks
- **Venue and year:** Proceedings of the 41st International Conference on Machine Learning, Vienna, PMLR 235, 2024; arXiv:2402.01817, submitted 2 February 2024, last revised 12 June 2024 (v3)
- **Source consulted:** https://arxiv.org/abs/2402.01817
- **Access status:** Open access on arXiv under CC BY 4.0; PDF, HTML and TeX source available
- **Type:** Position paper
- **Subjects:** Artificial Intelligence (cs.AI); Machine Learning (cs.LG)

## What this source is
This is a position paper, not an experimental report, and it should be taught as such. It intervenes in a polarised debate about whether large language models can plan, rejects both of the prevailing positions, and proposes an architecture that assigns the model a specific and bounded role inside a planning system.

## The argument in full
The paper opens by naming the confusion it intends to resolve. There is considerable disagreement about the role of large language models in planning and reasoning tasks, and the authors characterise two camps. On one side are over-optimistic claims that models can indeed do these tasks given the right prompting or self-verification strategies. On the other side are what the authors call perhaps over-pessimistic claims that all models are good for in planning and reasoning is acting as mere translators of a problem specification from one syntactic format to another, shipping the real problem off to an external symbolic solver. The authors' position is that both these extremes are misguided.

The first half of their argument is the negative claim, and it is stated without hedging: auto-regressive large language models cannot, by themselves, do planning or self-verification. The parenthetical matters, because the authors note that self-verification is after all a form of reasoning. This closes the most popular escape route in agent design. If a model cannot reliably plan, one cannot repair the plan by asking the same model to check its own work, because checking is the same class of capability that was found wanting. The paper commits to shedding light on the reasons for misunderstandings in the literature, which in the authors' broader research programme has meant showing that apparent successes often reflect benchmark contamination, human-in-the-loop correction that is not accounted for, or evaluation of plan plausibility rather than plan correctness.

The second half is the constructive claim, and it is the reason the paper is useful rather than merely deflationary. The authors argue that models should be viewed as universal approximate knowledge sources with much more meaningful roles to play in planning and reasoning tasks than simple front-end or back-end format translation. The phrase repays attention. Universal captures breadth of coverage across domains. Approximate captures unreliability. Knowledge source captures the correct functional role: a model is a good source of candidate structure, plausible decompositions, relevant constraints and domain knowledge, none of which are guaranteed correct.

From this the authors present their vision of LLM-Modulo Frameworks, which combine the strengths of models with external model-based verifiers in a tighter bi-directional interaction regime. The word bi-directional is the load-bearing term. The model proposes; external verifiers, which are sound with respect to a formal model, critique; the critique is fed back to the model, which revises. Neither component is trusted to do the other's job. Correctness comes from the verifier, and flexibility comes from the model.

The authors then close an obvious objection. A sound verifier requires a formal model of the domain, and building formal models by hand is exactly the bottleneck that made classical planning hard to deploy. Their answer is that the models driving the external verifiers can themselves be acquired with the help of large language models. The model is used twice, in different roles: once to help construct the domain model, under human review, and once to generate candidate plans against it.

Finally the authors distinguish their proposal from the obvious alternative. Rather than simply pipelining language models and symbolic components, they argue that the LLM-Modulo framework provides a better neuro-symbolic approach, offering tighter integration between the two and allowing the scope of model-based planning and reasoning to extend towards more flexible knowledge, problem and preference specifications. The claimed advantage over a pipeline is that iteration and critique flow in both directions, and that the model can absorb informal, natural-language specifications that a purely symbolic front end could not accept.

## Structure of the original
- Introduction — the polarised debate about language models and planning
- The case that auto-regressive models cannot plan or self-verify, with discussion of why the literature reports otherwise
- Language models as approximate knowledge sources rather than solvers or translators
- The LLM-Modulo framework — generator, external verifier bank, and the bi-directional critique loop
- Acquiring the models that drive verifiers, with language model assistance and human oversight
- Comparison with pipelined neuro-symbolic approaches
- Discussion, scope and open problems

## Key claims, findings, and specifics
- Both the over-optimistic and over-pessimistic positions on language model planning are rejected as misguided.
- Auto-regressive language models cannot, by themselves, do planning.
- They likewise cannot do self-verification, because self-verification is itself a form of reasoning.
- Language models should be viewed as universal approximate knowledge sources.
- Their role extends beyond front-end and back-end format translation.
- LLM-Modulo Frameworks pair language models with external model-based verifiers in a tighter bi-directional interaction regime.
- The domain models that drive external verifiers can themselves be acquired with language model assistance.
- The framework is claimed to be a better neuro-symbolic approach than simple pipelining of language models and symbolic components.
- The approach is claimed to extend model-based planning towards more flexible knowledge, problem and preference specifications.
- Published as a position paper at ICML 2024.

## Method and evidence base
This is argumentation rather than experiment. Its authority comes from three places: the authors' prior empirical work on planning benchmarks, which supplies the negative evidence; a careful critique of methodology in the papers claiming positive results; and the internal coherence of the proposed architecture. Students should be told explicitly that a position paper's claims are contestable and that the negative result about self-verification, in particular, has been debated in the subsequent literature. The paper's practical value lies less in settling the empirical question than in supplying a design discipline that remains correct whether or not model reasoning improves.

## Vocabulary the source introduces
- **LLM-Modulo Framework** — an architecture in which a language model generates candidates and external model-based verifiers critique them in a bi-directional loop.
- **Universal approximate knowledge source** — the authors' proposed role for language models: broad coverage, no correctness guarantee.
- **External model-based verifier** — a sound checker operating against a formal domain model, external to the language model.
- **Bi-directional interaction regime** — iterative critique flowing back into generation, as opposed to a one-way pipeline.
- **Self-verification** — a model checking its own output, argued here to be unreliable because it is itself a reasoning task.
- **Neuro-symbolic pipelining** — the weaker alternative in which a language model merely translates into a symbolic solver's input format.

## What to remember
- The paper's negative claim covers self-verification as well as planning; self-critique loops do not rescue an unreliable planner.
- Verification must be external and grounded in a model of the domain, not delegated to the generator.
- The correct framing of a language model in an agent is generator of candidates, not decider of correctness.
- Generate, verify externally, critique, regenerate is the design pattern to internalise.
- The framework is bi-directional, which is what distinguishes it from a simple pipeline into a symbolic solver.
- Language models can help build the verifier's domain model, so formalisation cost is reduced rather than eliminated.

## Why it matters for the course
This is the conceptual bridge between agent architecture and safety discipline, and it is the corrective to the most common failure in student and industry agent projects: trusting a plan because it reads well. It gives the course a defensible default architecture for anything agentic, in which every consequential action passes an external check, and it supplies the vocabulary to explain that architecture to a customer. It also connects directly to the evaluation spine, because an external verifier is simply an eval executed inside the control loop rather than after it, and to the professional-formation strand, because the discipline being taught is calibrated scepticism about a system's own confidence.

## How to teach it
- Lecture: present the two rejected extremes first and let students place their own intuitions before revealing the paper's position.
- Lecture: make the self-verification point explicit, since asking the model to check itself is the design students most often reach for.
- Lab: build an agent that proposes plans, then add a deterministic external verifier such as a schema check, a simulator, a type checker or a constraint solver, and measure the change in end-to-end task success.
- Lab: have students attempt self-critique instead of external verification on the same task and compare the results directly.
- Assessment: require every agentic student project to identify, for each consequential action, which external verifier authorises it; an action with no verifier must be justified explicitly.

## Limits and cautions
- This is a position paper, not an empirical study; its central claims are arguments and have been contested.
- It is not an implementation manual, and it does not specify how to build verifiers for open-ended domains.
- Sound verification requires a formal domain model, which is not always available; the paper mitigates but does not remove this cost.
- The claims target auto-regressive language models as of early 2024, and models explicitly trained for reasoning postdate the argument, so the empirical picture should be re-checked rather than assumed static.
- The verifier-construction step still depends on human review, which the framework requires but does not eliminate.

## Verification status
Verified against the arXiv abstract page: authorship, submission and revision dates, CC BY 4.0 licence, subject classifications, the ICML 2024 PMLR 235 journal reference, the framing of the two extreme positions and their rejection as misguided, the claim that auto-regressive models cannot by themselves plan or self-verify with the parenthetical that self-verification is a form of reasoning, the characterisation of models as universal approximate knowledge sources with roles beyond front-end and back-end translation, the LLM-Modulo Framework and its combination of models with external model-based verifiers in a tighter bi-directional interaction regime, the claim that verifier models can themselves be acquired with language model help, and the argument that this is a better neuro-symbolic approach than simple pipelining and extends planning towards more flexible knowledge, problem and preference specifications. The section outline is reconstructed from the abstract's argument sequence and was not read heading by heading from the full text in this pass.
