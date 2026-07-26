# Namespaces

> HVE is not one body of knowledge. It is **eight**, each with its own warrant standard, its own decay rate, and its own specialization frontier. This page defines them.
>
> The discipline is borrowed from the **Semantic Interoperability Layer** (a separate repository, `concepts/namespace.md`): a namespace is a domain whose claims **may not be compared raw** against another namespace's. You decode first.

## Why this is not just a topic list

A topic list is a convenience. A namespace boundary is a constraint, and it earns its place only if crossing it without decoding produces a wrong answer. These do.

A Microsoft Learn page states that the conversation split defaults to last turn. A learning-science paper reports that spaced retrieval outperforms massed practice. Both are "evidence." **Neither licenses what the other licenses.** The first is authoritative about its own behaviour, unversioned in practice, and silent on accuracy by genre. The second is directional, replicated to varying degrees, and its magnitude does not survive being quoted. Composing them into one confidence ranking is the error the whole repository exists to prevent.

That is why the boundary is real, and it is why every whitepaper already closes with a four-part `## Evidence status` rather than a bibliography. **The four parts are the codec.**

## The eight

| id | Domain | What a claim licenses | Decay | Verify | Primary sources |
|---|---|---|---|---|---|
| `platform` | Microsoft AI Platform | What the documentation says, **at a stated version**, together with **what it does not report that a reader would need**. States bounds; never accuracies. | **months** | before every offering | [research/06-microsoft-platform/](research/06-microsoft-platform/collected-materials.md) |
| `ai-systems` | AI systems, technical | Mechanism, verified. Magnitudes are properties of a particular model after a particular training run and do not transfer. | 1–3 years | annually | [research/02-technical-foundations/](research/02-technical-foundations/collected-materials.md) |
| `measurement` | Measurement and inference | An identity under a stated model, or an interval with its dependency structure argued. Exactly as good as the model. | permanent | on amendment | [research/03-measurement-evaluation/](research/03-measurement-evaluation/collected-materials.md) |
| `pedagogy` | Learning science | **Direction and mechanism only. No effect size, ever.** | decades | 3 years | [research/04-professional-formation/](research/04-professional-formation/collected-materials.md) |
| `assessment` | Entrustment and assessment | An ordinal judgement with mandatory narrative substantiation. No percentages, no carry-forward. | decades | 3 years | [research/08-assessment-epas/](research/08-assessment-epas/collected-materials.md) |
| `fde-craft` | Forward-deployed craft | A transferable practice pattern with weak formal warrant, honestly labelled as such. | slow | 3 years | [research/05-fde-craft/](research/05-fde-craft/collected-materials.md) |
| `curriculum` | Curriculum architecture | Design reasoning, plus accreditation mapping where a standard exists. | years | annually | [research/01-course-structure/](research/01-course-structure/collected-materials.md) · [research/07-accreditation-exemplars/](research/07-accreditation-exemplars/collected-materials.md) |
| `method` | HVE's own discipline | Design reasoning with **no external warrant**. The instrumentation rules, the compliance register, the pattern observations. | on amendment | on amendment | [wiki/program/](wiki/program/04-Seminar-Day-Design-Pattern.md) |

## How a document acquires a namespace

**Research notes** take their namespace from their folder. That is definitional.

**Wiki pages take theirs by derivation, not declaration.** A page's namespace mix is computed from its `grounded_in` edges — what it actually cites. This is deliberate: a page that *claims* to be about measurement but cites only vendor documentation is a platform page, whatever its title says, and the graph will say so.

The consequence is worth stating plainly. **A page whose namespace mix is dominated by `platform` inherits `platform`'s decay.** Half the wiki now carries a platform anchor, which means half the wiki now decays in months. The [Durable and Perishable Register](wiki/program/09-Durable-and-Perishable-Register.md) is the response, and the per-day perishability registers are where the separation is actually made.

## The rule that binds them

**No claim crosses a namespace boundary without decoding.**

Concretely, and each of these is already enforced somewhere in the wiki:

- A `platform` claim may not be cited as evidence for a `pedagogy` conclusion. Vendor documentation is not a study.
- A `pedagogy` claim may not carry a magnitude into any other namespace. Direction and mechanism only — the rule is absolute and applies to vendor material exactly as to research literature.
- A `method` claim has no external warrant by construction and may never be presented as one. It is the design's own argument and is labelled as such.
- A `measurement` claim carries its model with it. Stripped of the model, the identity is not conservative in a knowable direction.
- `fde-craft` claims are the weakest-warranted in the repository and must not be laundered into `curriculum` claims by being scheduled.

## Specialization frontiers

Each namespace grows differently, and knowing *how* is what makes an autonomous loop possible rather than merely busy.

| Namespace | How it grows | What "more specialized" means here |
|---|---|---|
| `platform` | Continuous vendor change. Highest volume, lowest half-life. | Better silence-detection — knowing faster what the docs stopped saying. |
| `ai-systems` | Published research, fast-moving. | Better separation of durable mechanism from perishable magnitude. |
| `measurement` | Essentially static. | Better application to *this* domain's odd dependency structures. |
| `pedagogy` | Slow literature, plus **this programme's own findings**. | Findings that are ours, not borrowed — the only namespace where HVE can originate evidence at scale. |
| `assessment` | Slow. Medical-education lineage. | Entrustment judgements calibrated on engineering work rather than clinical work. |
| `fde-craft` | Practice, not literature. | Patterns promoted from anecdote to characterised practice. |
| `curriculum` | Accreditation change, plus projection experience. | Knowing which structures survive re-projection into other formats. |
| `method` | Self-correction only. | Rules that survived contact with a cohort. |

**`pedagogy` is the one to watch.** It is the only namespace where this repository can generate original evidence at volume, because every seminar day carries §9 predictions with named instruments and an actual cohort would settle them. That is also the namespace where the repository is currently weakest — it cites the literature and has measured nothing.

## Related

- [Projections](concepts/projections.md) — why the BSc programme is a read model and not the truth
- [AGENTS.md](AGENTS.md) — the working contract
- [graph/README.md](graph/README.md) — namespace fields are on every node
