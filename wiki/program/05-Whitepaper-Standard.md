# Whitepaper Standard

> Every session carries a paper. The paper defends the session's design, states what the design does not establish, and commits to something that could turn out to be wrong.

## Required structure

Header block · **Release rule** · **Vocabulary used here without definition** · `## In plain terms` · `## Abstract` · `## 1.`–`## 9.` · `## What a learner should take from this paper` · `## Further reading` · `## Evidence status`

**The release rule names which of the paper's own sections spoil the session it documents.** This exists because a paper that hands a learner the answers to the instruments the session is built on has destroyed the session. In practice §1 is a spoiler far more often than its title suggests, and the vendor-documentation block is a spoiler whenever the session's discovery is a documented default that the paper then quotes.

**§8 must state at least two objections at their strongest, and concede at least one outright**, naming the fix considered and declined. An objection stated weakly so it can be answered is worse than no objection.

**§9 must give falsifiable predictions, each naming an `*Instrument:*`** — the specific observation that would settle it. A prediction with no instrument is a hope.

## The four evidence classes

Every claim in a paper sorts into exactly one. **There is no fifth.** The leads are matched literally by the graph builder and must appear verbatim.

| Class | Lead | What it licenses |
|---|---|---|
| 1 | **Verified in this repository.** | Cites a note in `research/` recording what was checked and against what |
| 2 | **Cited from general knowledge, not verified here.** | Direction and mechanism only. **No effect size, ever** |
| 3 | **Design reasoning with no external warrant.** | The design's own argument. Carries no evidential weight outside it |
| 4 | **Grounded in vendor documentation, with its version and its silence recorded.** | What the documentation states at a version, **and what it does not report that a reader would need** |

**Class 4's second half is the part that matters.** Recording what a vendor does not publish — no accuracy figure, no convergence measure, no adherence rate — is usually more useful than recording what it does.

## Standing prohibitions

- **No effect size is asserted anywhere in this wiki for an unverified source.** Direction and mechanism only. This applies to vendor material exactly as to research literature.
- **No magnitude from the practice corpus is reproduced.** It contains many; none is sourced.
- **Links are root-absolute**: `[S055](/wiki/seminars/S055.md)`. The leading slash is load-bearing.

## A limitation of this standard

**It disciplines what a paper is entitled to claim and says almost nothing about whether the claims are true.** A paper can satisfy every rule here and still defend a design that does not work.

That is deliberate — the alternative would be asserting outcomes nobody measured — but it should not be mistaken for rigour about the subject matter. **Several of these papers are rigorous about their epistemic status and thin on the substance**, and where that is true the paper says so under *What this paper does not yet do* or in its limits.

## Related pages

- [Programme Map](/wiki/program/01-Programme-Map.md)
- [Assessment Architecture](/wiki/program/03-Assessment-Architecture.md)
- [research/99-source-register/source-register.md](/research/99-source-register/source-register.md)
