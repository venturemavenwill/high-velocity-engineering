# Cliff Notes — The Leaderboard Illusion

## Citation and access
- **Authors:** Shivalika Singh, Yiyang Nan, Alex Wang, Daniel D'Souza, Sayash Kapoor, Ahmet Üstün, Sanmi Koyejo, Yuntian Deng, Shayne Longpre, and others; Marzieh Fadaee is the submitting author
- **Title:** The Leaderboard Illusion
- **Venue and year:** arXiv preprint 2504.20879, submitted 29 April 2025, revised v2 on 12 May 2025; primary category cs.AI, cross-listed cs.CL, cs.LG, stat.ME; 68 pages, 18 figures, 9 tables; licensed CC BY-SA 4.0
- **Source consulted:** https://arxiv.org/abs/2504.20879
- **Access status:** open access (arXiv listing and abstract fetched; full 68-page preprint openly available)

## What this source is
An audit of Chatbot Arena — the leaderboard that had become the de facto public ranking of frontier models — arguing that its scores are systematically distorted by undisclosed policies rather than by any single technical flaw. The distortions the paper identifies are institutional: who is permitted to test privately before publishing, whose models get sampled for battles, and whose models get quietly removed. It is a governance critique of an evaluation institution, backed by quantitative estimates of the resulting advantage.

**Note on this file's prior contents:** an earlier version of this note described the paper as a general warning about benchmark contamination and overfitting to test sets. That characterization was incorrect. The paper is specifically about Chatbot Arena's private-testing and data-allocation asymmetries. The correction matters because the two critiques have different remedies — contamination is fixed by data hygiene, whereas the problems this paper identifies are fixed by changing platform policy.

## The argument in full
The paper begins from the observation that "Chatbot Arena has emerged as the go-to leaderboard for ranking the most capable AI systems." That standing gives Arena scores real consequence: they drive procurement decisions, press coverage, funding, and research direction. The authors' claim is that despite this influence, the platform operates with undisclosed practices that "have resulted in a distorted playing field," and that the distortion is not random noise but a systematic advantage accruing to a small number of well-resourced providers.

The first mechanism is private testing. According to the paper, "undisclosed private testing practices benefit a handful of providers who are able to test multiple variants before public release and retract scores if desired." This is a selection-effect problem with a familiar statistical shape. A provider that can submit many private variants and publish only the best-performing one is reporting a maximum over a sample, not a draw from the sample. The paper describes the resulting "biased Arena scores due to selective disclosure of performance results." The most striking single data point is at the extreme of this practice: the authors "identify 27 private LLM variants tested by Meta in the lead-up to the Llama-4 release." Twenty-seven private attempts followed by one public score is not a measurement of the model; it is a measurement of the best of twenty-seven, reported as if it were the first.

The second mechanism is asymmetric data allocation. Arena rankings depend on battles, and battles are the data that both determine a model's rating and — because providers can observe their own battle outcomes and the accompanying prompts — inform its improvement. The paper finds that "proprietary closed models are sampled at higher rates (number of battles) and have fewer models removed from the arena than open-weight and open-source alternatives." The quantitative form of this is the paper's most-cited statistic: "Providers like Google and OpenAI have received an estimated 19.2% and 20.4% of all data on the arena, respectively. In contrast, a combined 83 open-weight models have only received an estimated 29.7% of the total data." Two providers together account for roughly 40 percent of the data; 83 open-weight models together account for less than 30 percent. Silent model removals compound the effect by pruning the records that would otherwise show weaker results.

The third step is showing that this allocation asymmetry actually matters, which requires demonstrating that Arena data has value beyond rating precision. The paper reports that "even limited additional data can result in relative performance gains of up to 112% on the arena distribution, based on our conservative estimates." That figure is the hinge of the argument. If access to Arena data confers no benefit, unequal allocation is merely unfair sampling; if additional data can more than double relative performance on the Arena distribution, then unequal allocation is a compounding advantage in which the providers who already receive the most data are best positioned to improve on precisely the distribution the leaderboard scores.

The three mechanisms together produce the paper's conclusion, and the source of its title: what the leaderboard measures drifts away from what it purports to measure. The result is "overfitting to Arena-specific dynamics rather than general model quality." A model can climb Arena by becoming better at Arena — at its prompt distribution, its voter population, its stylistic preferences — without becoming better in any way a user would notice elsewhere. The illusion is not that models are not improving; it is that the leaderboard's ordering is being read as evidence about general capability when it is substantially evidence about Arena-specific optimization plus differential access to the means of optimization.

The paper is careful about its posture. It credits Arena's organizers and community rather than treating the platform as adversarial, and it closes with "actionable recommendations to reform the Chatbot Arena's evaluation framework." The critique is aimed at policy — disclosure of private testing, equitable sampling, transparent deprecation — rather than at the existence of the platform. This matters for how the paper should be taught: it is a case study in evaluation governance, not an argument for abandoning preference-based leaderboards.

## Structure of the original
- Introduction: Chatbot Arena's role as the go-to leaderboard and the case for auditing it
- Background on Chatbot Arena: battle mechanics, rating system, and stated policies
- Undisclosed private testing: identification of private variants, the selective-disclosure mechanism, and the Meta Llama-4 case
- Data access asymmetries: battle sampling rates by provider and model class
- Model deprecation and silent removal: differential removal rates for proprietary versus open-weight models
- Quantifying the value of Arena data: estimated performance gains from additional access
- Consequences: overfitting to Arena-specific dynamics
- Recommendations for reforming the evaluation framework
- Extensive appendices (the paper runs 68 pages with 18 figures and 9 tables)

## Key claims, findings, and specifics
- **27 private LLM variants** were identified as tested by Meta in the lead-up to the Llama-4 release.
- **Google: an estimated 19.2%** of all Arena data. **OpenAI: an estimated 20.4%.** Two providers therefore account for roughly 40 percent.
- **A combined 83 open-weight models received an estimated 29.7%** of total Arena data.
- Proprietary closed models are **sampled at higher rates** and have **fewer models removed** from the arena than open-weight and open-source alternatives.
- Additional Arena data can produce **relative performance gains of up to 112% on the arena distribution**, described as a conservative estimate.
- Private testing plus the ability to retract scores produces **biased scores through selective disclosure** — a best-of-N reported as a single draw.
- Net consequence: **overfitting to Arena-specific dynamics rather than general model quality**.
- The paper offers **actionable reform recommendations** and explicitly credits Arena's organizers and community.
- Scale of the study: **68 pages, 18 figures, 9 tables**, released CC BY-SA 4.0.

## Method and evidence base
The study is an empirical audit conducted largely from outside the platform. The authors reconstruct private-testing behavior by identifying model variants that appeared in Arena battles without corresponding public releases, which is how the count of 27 Meta variants is obtained. Data-allocation shares are estimated from observed battle records aggregated by provider and by model class, which is why the paper consistently labels these figures as estimates rather than platform-reported values. The claim that additional data confers performance gains is supported by an experimental estimate on the Arena distribution, and the authors characterize the resulting figure as conservative — implying the true advantage may be larger. The 68-page length with 18 figures and 9 tables indicates substantial supporting analysis in the appendices. The principal methodological limitation is inherent to external auditing: without platform-internal logs, sampling rates, private submissions, and removals must be inferred, and the authors' estimates carry the uncertainty of that inference. This should be stated when the numbers are cited.

## Vocabulary the source introduces
- **Leaderboard illusion** — the gap between what a leaderboard's ranking is taken to mean (general capability) and what it actually measures (performance under that leaderboard's specific dynamics and access conditions).
- **Private testing** — evaluating multiple model variants on a leaderboard without public disclosure, then publishing only selected results.
- **Selective disclosure** — publishing the best outcome from a set of private trials while suppressing the rest, which biases the reported score upward.
- **Score retraction** — withdrawing an unfavorable result before it becomes public, an option available only to providers with private-testing access.
- **Data access asymmetry** — unequal allocation of battle data across providers, which advantages those receiving more.
- **Silent deprecation** — removing models from a leaderboard without disclosure, which reshapes the historical record.
- **Arena-specific overfitting** — improving on a leaderboard's particular prompt distribution and voter preferences rather than on general capability.

## What to remember
- The paper is about Arena's governance, not about benchmark contamination. Do not conflate the two — they have different mechanisms and different fixes.
- Private testing plus selective disclosure converts a published score into a best-of-N statistic, and 27 private Meta variants is the concrete illustration.
- Two providers received an estimated 40 percent of all Arena data while 83 open-weight models shared under 30 percent.
- Data access is not neutral: additional data was estimated to yield up to 112 percent relative gains on the Arena distribution, so allocation asymmetry compounds.
- The failure mode is overfitting to Arena-specific dynamics, which means a rising leaderboard position is not by itself evidence of general improvement.
- The remedy the authors propose is disclosure and policy reform, not abandoning preference-based evaluation.

## Why it matters for the course
This is the course's case study in evaluation governance, and it is the necessary counterweight to Zheng et al. Those two papers must be taught in sequence: Zheng establishes that Chatbot Arena is a legitimate instrument for approximating human preference, and Singh establishes that an instrument's legitimacy depends on the institution operating it. The pairing teaches a lesson that is otherwise hard to convey — that evaluation validity has a social and procedural dimension, and that a methodologically sound benchmark can still produce misleading results if the rules about who may test, how often, and with what disclosure are unequal. For students headed into forward-deployed roles, this is directly practical: they will be asked to justify model selection to clients who have read a leaderboard, and they need to be able to explain precisely what a leaderboard position does and does not establish. The paper also models a professional skill worth teaching in its own right — auditing an evaluation system from the outside, quantifying the distortion, and proposing reform without dismissing the enterprise.

## How to teach it
- **Lecture point:** teach the selective-disclosure mechanism as statistics before teaching it as ethics. Best-of-27 reported as a single measurement is a bias with a computable magnitude, not merely bad manners.
- **Lecture point:** put the data-allocation numbers on a slide — 19.2%, 20.4%, and 29.7% across 83 models — and ask students what follows if data has value. Then reveal the 112% figure.
- **Lecture point:** contrast this with contamination and overfitting-to-test-set, and make the distinction explicit, since it is a distinction students routinely collapse.
- **Lab exercise:** a simulation of selective disclosure. Students sample N noisy evaluations of an identical underlying model and report the maximum, then plot the upward bias in reported score as N grows from 1 to 27.
- **Lab exercise:** a governance audit. Give students a public leaderboard and have them document its stated policies on submission, retraction, and deprecation, and identify what is not disclosed.
- **Assessment idea:** students write the evaluation-governance section of a hypothetical model card or benchmark charter, specifying submission limits, disclosure requirements, sampling policy, and deprecation policy, with justification drawn from this paper.
- **Assessment idea:** a client memo. A client wants to select a model based on Arena rank. The student must write a one-page response explaining what the rank supports and what additional evidence is required.

## Limits and cautions
- All allocation figures are external estimates, not platform-disclosed values. Cite them as estimates and say so.
- The paper is a critique and a reform proposal, not a replacement methodology. Students still need positive guidance on how to build and validate evaluations, which comes from Husain, Shankar, Zheng, and Miller.
- The findings are specific to Chatbot Arena at a particular point in time. Platform policies can change in response to exactly this kind of audit, so the specific numbers should be treated as of April–May 2025.
- Nothing in the paper establishes that models are not improving or that preference-based evaluation is invalid in principle. Teaching it as leaderboard nihilism misreads it and loses the reform argument.
- The 112% figure is a relative gain on the Arena distribution under the authors' conservative estimate. It should not be restated as a general capability gain.
- This note is built from the abstract and listing metadata. The 68-page paper contains substantially more analysis, and any teaching material relying on figures beyond those listed above should go to the full text.

## Verification status
- **Verified against the original:** the leading author list and submitting author; exact title; arXiv identifier, submission and revision dates, all subject categories, page and figure and table counts, and CC BY-SA 4.0 license; the characterization of Chatbot Arena as the go-to leaderboard and the "distorted playing field" framing; the undisclosed-private-testing finding including the ability to test multiple variants and retract scores; the "biased Arena scores due to selective disclosure of performance results" phrasing; the identification of 27 private Meta variants ahead of Llama-4; the higher sampling rates and lower removal rates for proprietary closed models; the estimated data shares of 19.2% for Google, 20.4% for OpenAI, and 29.7% across 83 open-weight models; the "relative performance gains of up to 112% on the arena distribution" claim and its characterization as conservative; the "overfitting to Arena-specific dynamics rather than general model quality" conclusion; the paper's crediting of organizers and community and its offer of actionable reform recommendations.
- **Provisional or not verified:** the section outline is reconstructed from the abstract and the paper's described contributions rather than transcribed from verbatim headings. The full author list is long and only the leading authors plus the submitting author were confirmed. The specific reform recommendations are known to exist but were not enumerated; they should be read from the paper before being taught. The method description above is inferred from the nature of the reported findings rather than from a read of the paper's methodology section, and the time period covered by the data was not established.
- **Correction applied:** the previous version of this file described the paper as being about benchmark contamination and training-data leakage. That was wrong and has been replaced.

