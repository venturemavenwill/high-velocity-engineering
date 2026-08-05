# Programme Map — the engagement arc

> **This programme is shaped like an engagement, not like a degree.** Nine stages follow what a forward-deployed engineer actually does, from deciding whether to take the work through to compounding what was learned into the next one.
>
> 90 working sessions · 9 stages · 18 modules · 5 sessions per module
>
> **Eight stages carry the canonical Hypervelocity Engineering names published by GitHub and Microsoft.** The ninth has no canonical equivalent and keeps its own. The mapping, and what it cost, is at [Canonical Lifecycle](/wiki/program/11-Canonical-Lifecycle.md).

## The arc

| Stage | Sessions | The question it answers |
|---|---|---|
| **1 · Discover** | [S001–S010](#stage-1--discover) | Should this work happen at all, and can you say no? |
| **2 · Define** | [S011–S020](#stage-2--define) | What is the real problem, and who actually has it? |
| **3 · Decompose** | [S021–S030](#stage-3--decompose) | What can be built, against what that cannot move? |
| **4 · Plan** | [S031–S040](#stage-4--plan) | Is it feasible, and how cheaply can you find out? |
| **5 · Implement** | [S041–S050](#stage-5--implement) | How is it delivered under real constraint? |
| **6 · Review** | [S051–S060](#stage-6--review) | Is it safe, and how would you know? |
| **7 · Deliver** | [S061–S070](#stage-7--deliver) | Does it work in production, and what does that measurement license? |
| **8 · Operate** | [S071–S080](#stage-8--operate) | Can they run it without you? |
| **9 · Compound** | [S081–S090](#stage-9--compound) | What is better next time — the system, the people, or the practice? |

**The arc closes into a cycle rather than an exit.** Stage 9 feeds Stage 1. That is the source material's own logic and not this design's invention: across the corpus behind this programme, language about iteration, maturity, adoption and reinforcement outnumbers language about decommissioning by more than two orders of magnitude.

## What is taken from where, stated once

This programme is built on **a public formulation of practice from a customer-embedded engineering organisation within a large technology vendor**, recorded as original prose at [research/05-fde-craft/microsoft-accelerated-delivery-practice.md](/research/05-fde-craft/microsoft-accelerated-delivery-practice.md) and [research/05-fde-craft/microsoft-agentic-threat-modelling.md](/research/05-fde-craft/microsoft-agentic-threat-modelling.md), and on the openly published engineering playbook at [research/05-fde-craft/microsoft-ise-engineering-playbook.md](/research/05-fde-craft/microsoft-ise-engineering-playbook.md).

**The internal material is paraphrased, never linked, never quoted by label, and carries no name, identifier or address.** See the internal-documents rule in [research/99-source-register/source-register.md](/research/99-source-register/source-register.md).

**Two stages are written past the source and say so.** Stage 1 exists because the corpus refuses work exactly once, in a slide note. Stage 9 exists because the cycle is implied by hundreds of scattered references and stated as a model nowhere. Both are **class 3 — design reasoning with no external warrant** — and every session in them carries that label.

---

## Stage 1 · Discover

**M01 · The engagement before it starts**

| | Session |
|---|---|
| S001 | Why this programme is shaped like an engagement |
| S002 | What a forward-deployed engineer is for |
| S003 | The problem behind the request |
| S004 | Reading a room you were invited into |
| S005 | The qualification decision ⊘ |

**M02 · Saying no, and what it costs**

| | Session |
|---|---|
| S006 | Constraints you cannot see yet |
| S007 | Who is not in the room |
| S008 | When simpler technology would do |
| S009 | The cost of doing nothing |
| S010 | A refusal you can defend ⊘ |

## Stage 2 · Define

**M03 · The workshop as an instrument**

| | Session |
|---|---|
| S011 | What a workshop is for, and what it is not |
| S012 | Readiness, and the workshop you should not run |
| S013 | Facilitation as a technical skill |
| S014 | The difficult room |
| S015 | Running a workshop end to end ⊘ |

**M04 · Discovery beyond the workshop**

| | Session |
|---|---|
| S016 | Questions that invite flattering answers |
| S017 | Watching work instead of asking about it |
| S018 | Consolidating across informants |
| S019 | The commitment ask |
| S020 | A discovery you can act on ⊘ |

## Stage 3 · Decompose

**M05 · From problem to requirement**

| | Session |
|---|---|
| S021 | A requirement is a business statement |
| S022 | Making a requirement falsifiable |
| S023 | Non-functional requirements that can be verified |
| S024 | The decision record |
| S025 | A specification somebody else can build from ⊘ |

**M06 · The frozen and the fluid**

| | Session |
|---|---|
| S026 | What cannot move, and who decides |
| S027 | Extending what already runs |
| S028 | The architecture you are not allowed to build |
| S029 | Trade studies, and when not to run one |
| S030 | A design at the scope of its decision ⊘ |

## Stage 4 · Plan

**M07 · Cheap evidence first**

| | Session |
|---|---|
| S031 | The spike, and why its code is discarded |
| S032 | The pre-mortem |
| S033 | Feasibility as a question with an answer |
| S034 | Data you were promised and data you have |
| S035 | A feasibility finding ⊘ |

**M08 · Prototypes that fail well**

| | Session |
|---|---|
| S036 | Deliberate low fidelity |
| S037 | The prototype that fails immediately |
| S038 | Testing with people who are not the buyer |
| S039 | From prototype to commitment |
| S040 | A proof somebody will fund ⊘ |

## Stage 5 · Implement

**M09 · Delivery under constraint**

| | Session |
|---|---|
| S041 | The minimal valuable slice |
| S042 | Scope that grows, and the backlog item that does not |
| S043 | Tests as the specification |
| S044 | Review under delivery pressure |
| S045 | Shipping the first increment ⊘ |

**M10 · Working with an agent**

| | Session |
|---|---|
| S046 | Instructions an executor actually receives |
| S047 | Plan before implementation |
| S048 | Comprehension debt |
| S049 | What the agent did that you cannot explain |
| S050 | A build you can defend line by line ⊘ |

## Stage 6 · Review

**M11 · Threat modelling as an engineered artefact**

| | Session |
|---|---|
| S051 | The system model before the threat |
| S052 | A threat bound to a component and a flow |
| S053 | Mapping controls without a junk drawer |
| S054 | Inference laundering |
| S055 | A security plan with its unmitigated list intact ⊘ |

**M12 · Responsible AI inside the process**

| | Session |
|---|---|
| S056 | Can this be solved without AI at all |
| S057 | The scope test that survives agentic delivery |
| S058 | Impact assessment as a living document |
| S059 | Sensitive use, and the decision it forces |
| S060 | An assessment that generates work, not a sign-off ⊘ |

## Stage 7 · Deliver

**M13 · Running what you built**

| | Session |
|---|---|
| S061 | Observability that answers a question |
| S062 | Evidence-derived closure |
| S063 | The incident you did not see |
| S064 | Cost as a design constraint |
| S065 | An operational readiness argument ⊘ |

**M14 · Measurement and what it licenses**

| | Session |
|---|---|
| S066 | The baseline nobody measured |
| S067 | Attribution, and who is responsible for it |
| S068 | A number-generating apparatus with no numbers |
| S069 | Reporting a result that undermines you |
| S070 | A measurement you will defend ⊘ |

## Stage 8 · Operate

**M15 · Handover as an engineered act**

| | Session |
|---|---|
| S071 | What actually transfers |
| S072 | Runbooks, and the operator who is not you |
| S073 | The evaluation harness they inherit |
| S074 | Estate hygiene, triggered by a register |
| S075 | A handover with a named receiving owner ⊘ |

**M16 · Leaving them more capable**

| | Session |
|---|---|
| S076 | Capability is not documentation |
| S077 | Teaching while delivering |
| S078 | The dependency you created |
| S079 | Proving they can run it |
| S080 | A transfer the recipient signs ⊘ |

## Stage 9 · Compound

**M17 · Raising the floor**

| | Session |
|---|---|
| S081 | Maturity as an evidenced level |
| S082 | Adoption you cannot mandate |
| S083 | Momentum, and why it decays |
| S084 | Each iteration leaves it better |
| S085 | A maturity claim with evidence ⊘ |

**M18 · The next engagement starts here**

| | Session |
|---|---|
| S086 | Reusable starting points |
| S087 | Engineering feedback that goes somewhere |
| S088 | What this engagement did not establish |
| S089 | The practice improving itself |
| S090 | Entrustment: the final defence ⊘ |

---

## Assessment occasions

**Eighteen**, one closing each module, marked ⊘. Each is an artefact produced under constraint and defended, not an examination.

**The final three are entrustment decisions** rather than specification checks: [S080](/wiki/seminars/S080.md), [S085](/wiki/seminars/S085.md) and [S090](/wiki/seminars/S090.md). See [Assessment Architecture](/wiki/program/03-Assessment-Architecture.md).

## Related pages

- [Home](/wiki/Home.md)
- [Stage and Module Map](/wiki/program/07-Module-Map.md)
- [The archived BSc programme](/archive/bsc-programme/Home.md) — the previous projection over the same knowledge, retained in full
