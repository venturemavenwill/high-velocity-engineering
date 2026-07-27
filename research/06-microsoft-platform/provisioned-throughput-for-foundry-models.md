# Cliff Notes — Provisioned Throughput for Foundry Models

## Citation and access
- **Title:** "What is provisioned throughput for Foundry Models?"
- **Publisher:** Microsoft, Microsoft Learn (Microsoft Foundry documentation).
- **Source consulted:** `https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/provisioned-throughput` — **fetched and read in full.**
- **Access status:** open documentation. **Perishable**: product names, quota defaults, model ratios and portal paths change frequently. Treat this note as durable-concepts-with-current-instantiation, and re-verify before quoting specifics.
- Referenced companion pages, not fetched: the sizing guide, the billing guide, the spillover how-to, the deployment-types comparison, and the model capacities REST API.

## What this source is
A concepts page in the Microsoft Foundry documentation that explains one deployment type — provisioned throughput — and, in doing so, lays out the whole framework by which model-serving capacity is bought, measured, allocated and billed on the platform. It is not a tutorial. It defines the deployment categories, the unit of capacity, the quota-versus-capacity distinction, the sizing inputs, the three data-routing variants, the overflow mechanism and the two billing modes, then points to how-to pages for each. For a course, its value is that it is the clearest first-party statement of the economics of serving a model at production scale.

## The argument in full
The page opens with a contrast that carries the whole concept. In a standard deployment, "inference capacity is shared across customers and throughput can vary with demand." In a provisioned deployment, the platform "holds a fixed amount of processing capacity exclusively for your deployment's use, whether or not requests are being made." Everything else follows from that clause. Capacity that is held whether or not it is used has to be paid for whether or not it is used, which is why the billing unit changes from tokens to time. It also means the deployment becomes a capacity-planning decision rather than a configuration setting, because a wrong estimate now costs money continuously rather than proportionally to traffic.

The four deployment categories are laid out against three axes — billing, latency service level agreement, and workload type — and the comparison is worth teaching directly because it is a clean example of an engineering trade space. **Standard** bills per token, offers no latency SLA, and suits "development, testing, and production with variable or unpredictable traffic". **Priority processing** bills per token at a priority rate and offers a defined per-model latency target, for "latency-sensitive production workloads needing consistent low latency without a long-term commitment". **Provisioned** bills per PTU per hour or via reservations, offers a defined per-model latency target, and suits "mission-critical, high-scale production workloads requiring guaranteed throughput and consistent latency". **Batch** bills at a discounted rate, offers no SLA, and returns results asynchronously for bulk processing. The structure of that table is the lesson: latency guarantees cost money, and the currency in which you pay changes depending on how much predictability you want.

The unit of capacity is the **provisioned throughput unit**, and its four properties are individually unremarkable and jointly consequential. PTUs are **model-independent** — "the same PTU quota can be used to deploy any supported model. You don't buy PTUs for a specific model." They are **region-specific** — "Quota in East US doesn't carry over to West Europe." Their **throughput varies by model** — "A heavier model requires more PTUs to serve the same TPM as a lighter one." And each model has a **minimum PTU count** below which a deployment cannot be created. Read together, these mean a PTU is a unit of compute rather than a unit of service: what you buy is machine capacity, and how much service that yields depends entirely on what you run on it. The minimum-deployment-size property is the one students consistently miss, because it puts a floor under the cost of using a large model at all.

The heart of the page, and the single most transferable idea in it, is the distinction between quota and capacity. **Quota** is "a policy limit enforced by Azure, and it has no associated cost", scoped per subscription, per region, and per deployment type, with Global, Data Zone and Regional Provisioned held as separate pools. **Capacity** is "the actual amount of PTUs per model version that's available to be deployed", allocated at deployment time and held for the deployment's lifetime. The page states the consequence in a call-out: "Having PTU quota doesn't guarantee that capacity is available. If capacity in the region is insufficient for the requested PTU count, the deployment fails." Two further facts sharpen it. Capacity availability "changes throughout the day based on customer demand across all regions and models", so the answer to "can I deploy this" is time-dependent. And "deleting or scaling down a deployment releases its capacity back to the region pool. There's no guarantee the same capacity is available if you re-create or scale the deployment up later" — so releasing capacity is a one-way door in practice even though it looks reversible. This is a permission-versus-availability distinction, and it generalises well beyond this product.

Sizing is presented as a three-input calculation. **Request shape** is expected requests per minute, average prompt size in input tokens and average response size in output tokens. **Output-to-input ratio** captures the fact that "output tokens require more processing capacity than input tokens", expressed as how many input tokens one output token is equivalent to for capacity purposes; for GPT-4.1 and later Azure OpenAI models this ratio matches the model's global standard pricing ratio between output and input tokens. **Cache rate** is the fraction of input tokens served from the prompt cache, and "cached tokens don't consume PTU capacity, so a higher cache rate reduces the PTUs required." The three inputs are combined into a single **normalized TPM** figure which is divided by the model's **Input TPM per PTU** value to give the required PTU count. The structural insight for students is that this is a capacity model, not a pricing model: it converts a description of traffic into a quantity of machine, and every simplification in the traffic description propagates into the answer.

Three deployment types then vary where inference traffic is processed rather than how much capacity is held. **Global Provisioned** (`GlobalProvisionedManaged`) routes across Azure regions globally and offers the highest availability. **Data Zone Provisioned** (`DataZoneProvisionedManaged`) keeps traffic within a geographic zone, US or EU, giving zone-level data residency with higher availability than regional. **Regional Provisioned** (`ProvisionedManaged`) keeps traffic in the deployment's specific Azure region, for strict single-region residency requirements. The ordering is a residency-versus-availability gradient, and it makes a compliance requirement into a directly visible availability cost.

**Spillover** is the safety valve. When a provisioned deployment is fully utilised and returns non-200 responses — the page names a `429` when PTUs are exhausted — spillover "redirects those requests to the standard deployment" in the same Foundry resource, "helping reduce disruptions during traffic bursts". It can be configured for all requests on a deployment or controlled per request using the `x-ms-spillover-deployment` header. All Azure OpenAI models supporting provisioned throughput also support spillover; models from other providers, named as Azure DeepSeek and Meta Llama, do not currently. Architecturally this is a graceful-degradation pattern: reserved capacity for the predictable load, shared capacity for the tail, with the fallback triggered by an error response rather than by a predictive signal.

Billing closes the page with a caution worth quoting to students. Hourly billing runs at a dollar-per-PTU-per-hour rate "regardless of the number of tokens consumed", with the meter starting at deployment creation and stopping at deletion. It suits short-term scenarios such as benchmarking a new model or scaling up for an event. But the page explicitly warns against treating it as an autoscaling mechanism: "don't plan to scale provisioned deployments up and down with traffic to stay on hourly billing", for two stated reasons — "capacity might not be available when you need to scale back up", and "continuous hourly billing at high utilization typically exceeds reservation pricing." **Azure Reservations** are then defined precisely as "a financial discount applied to the PTU billing meter… not to individual deployments", purchased per deployment type, scoped to subscriptions or resource groups, and loosely coupled to deployments. The critical sentence is the last one: "Reservations don't guarantee capacity. First create deployments to confirm that capacity is available, then purchase the reservation to lock in the discounted rate." The correct sequence is deploy, verify, then commit — and the intuitive sequence, commit then deploy, is exactly wrong.

## Structure of the original
- What provisioned throughput is, and the shared-versus-dedicated contrast
- Deployment categories compared — standard, priority processing, provisioned, batch
- When to use provisioned throughput
- Provisioned throughput units — model-independence, region-specificity, per-model throughput, minimum sizes
- Quota and capacity — what each is, how to get quota, how to check capacity
- PTU sizing — request shape, output-to-input ratio, cache rate, normalized TPM
- Provisioned throughput deployment types — Global, Data Zone, Regional
- Supported models
- Spillover
- Hourly billing and Azure reservations
- How to track PTU costs and billing

## Key claims and specifics
- A provisioned deployment "holds a fixed amount of processing capacity exclusively for your deployment's use, whether or not requests are being made."
- **Four deployment categories:** standard (per token, no SLA), priority processing (priority token rate, per-model latency target), provisioned (per PTU per hour or reservation, per-model latency target), batch (discounted token rate, asynchronous, no SLA).
- **PTUs are model-independent, region-specific, and deliver model-dependent TPM**, with per-model minimum deployment sizes.
- **Quota is a policy limit with no cost**, scoped per subscription, per region, per deployment type, with Global, Data Zone and Regional as separate pools.
- **Capacity is the actual deployable PTUs per model version**, allocated at deployment time and held for the deployment's lifetime.
- **"Having PTU quota doesn't guarantee that capacity is available."** Insufficient regional capacity causes deployment failure.
- Capacity "changes throughout the day based on customer demand"; releasing it offers "no guarantee the same capacity is available" later.
- **Three sizing inputs:** request shape (RPM, input tokens, output tokens); output-to-input ratio, matching the global standard pricing ratio for GPT-4.1 and later Azure OpenAI models; cache rate, where **cached tokens don't consume PTU capacity**.
- Sizing produces **normalized TPM**, divided by the model's **Input TPM per PTU**.
- **Three routing variants:** `GlobalProvisionedManaged` (global routing, highest availability), `DataZoneProvisionedManaged` (US or EU zone residency), `ProvisionedManaged` (single-region residency).
- **Spillover** redirects non-200 responses — a `429` when PTUs are exhausted — to a standard deployment in the same resource; per-request control via the **`x-ms-spillover-deployment`** header; not supported for Azure DeepSeek or Meta Llama.
- **Hourly billing** charges per PTU per hour "regardless of the number of tokens consumed", metered from creation to deletion.
- The docs **explicitly advise against scaling provisioned deployments with traffic** — capacity may not return, and sustained hourly billing typically exceeds reservation pricing.
- **Reservations are a discount on the billing meter, not on deployments**, purchased per deployment type, loosely coupled, and **do not guarantee capacity**. Deploy first, then reserve.

## Method and evidence base
First-party product documentation. Its authority is definitional rather than empirical — it states how the platform behaves, and for that purpose it is the highest-quality source available. It makes no performance claims that could be independently checked, and it offers no comparison against other vendors' capacity models. It should be cited as evidence of how this platform works, never as evidence of what is architecturally best.

## Vocabulary the source introduces
- **Provisioned throughput unit (PTU)** — a fixed quantity of model processing capacity; the unit in which dedicated capacity is bought.
- **Quota** — a policy limit on deployable PTUs per subscription, region and deployment type. Costs nothing; guarantees nothing.
- **Capacity** — the PTUs per model version actually available to deploy right now in a region.
- **Normalized TPM** — the single throughput figure derived from request shape, output-to-input ratio and cache rate.
- **Input TPM per PTU** — the per-model divisor converting normalized TPM into a PTU count.
- **Output-to-input ratio** — how many input tokens one output token is equivalent to for capacity purposes.
- **Cache rate** — the fraction of input tokens served from prompt cache and therefore free of PTU capacity.
- **Spillover** — automatic redirection of overflow requests from a saturated provisioned deployment to a standard one.
- **Azure Reservation** — a commitment-based discount applied to the PTU billing meter.

## What to remember
- Dedicated capacity is held whether used or not, which is why billing changes from tokens to time.
- Quota is permission; capacity is availability. Having the first does not give you the second.
- Capacity fluctuates through the day and is not reserved for you when you release it.
- A PTU buys machine, not service; how much service it yields depends on the model, and every model has a floor.
- Output tokens cost more capacity than input tokens; cached input tokens cost none.
- Residency and availability trade against each other across the three routing variants.
- Spillover is graceful degradation triggered by an error response, not by prediction.
- Do not use provisioned deployments as an autoscaling mechanism; the documentation says so and gives two reasons.
- Deploy to confirm capacity first, then buy the reservation. Reservations discount a meter; they do not hold anything.

## Why it matters for the course
This page is the platform's clearest statement of the economics that separate a demo from a production system, and it makes several durable ideas concrete in a way an abstract lecture cannot. The quota-versus-capacity distinction is a general lesson about permission versus availability in shared infrastructure, and it is the kind of thing engineers only learn painfully. The sizing calculation shows that capacity planning is an inference from a traffic model, so the quality of the traffic model bounds the quality of the answer. The spillover pattern is a textbook graceful-degradation design. And the reservation guidance — verify availability before committing financially — is a procurement lesson that transfers to almost any reserved-capacity system. It also connects directly to the technical foundations strand: the output-to-input ratio and the cache-rate term are the commercial surface of the inference-efficiency work in [research/02-technical-foundations/pope-scaling-transformer-inference.md](/research/02-technical-foundations/pope-scaling-transformer-inference.md) and [research/02-technical-foundations/kwon-pagedattention-vllm.md](/research/02-technical-foundations/kwon-pagedattention-vllm.md).

## How to teach it
- **Lecture:** teach the four-category comparison as a trade space, with latency guarantee, billing unit and traffic predictability as the axes, before naming any product.
- **Lecture:** teach quota versus capacity as a general distinction between permission and availability, then use this page as the instance.
- **Lab:** give students a traffic description — requests per minute, average prompt and response sizes, an assumed cache rate — and have them derive a normalized TPM and a PTU count, then vary the cache rate and the output ratio to see the sensitivity.
- **Lab:** have students design a spillover strategy and state explicitly what user-visible behaviour changes when overflow requests are served by shared capacity.
- **Assessment:** ask for a written capacity plan with its assumptions stated and its failure modes named, then question the assumptions orally. The oral component is where the reasoning is actually visible.
- **Assessment:** present a scenario where a team bought a reservation before confirming capacity, and ask what went wrong and what the correct sequence is.
- **Framing:** mark this material as perishable. Assess the reasoning, never the current terminology.

## Limits and cautions
- Product documentation is perishable. Names, defaults, ratios, minimums and portal paths change; nothing here should be assessed as fact.
- The page is single-vendor. It describes one capacity model and does not situate it against alternatives.
- Concrete numbers — per-model PTU-to-TPM ratios, minimum deployment sizes, current prices — live on companion pages that were not fetched and are not reproduced here.
- Documentation states intended behaviour. It is not evidence of observed reliability, and the latency targets it references are defined elsewhere.
- The page has an obvious commercial framing. The trade-offs it presents are real, but the choice architecture is the vendor's.
- Teaching from this material risks producing platform familiarity rather than engineering judgement unless the durable concepts are extracted explicitly.

## Verification status
Verified by fetching and reading the page in full: the shared-versus-dedicated definition and its quoted framing; the four-category deployment comparison across billing, SLA and workload type; the four listed conditions for choosing provisioned throughput; all four PTU characteristics including model-independence, region-specificity, model-dependent throughput and minimum deployment sizes; the definitions of quota and capacity and the quoted call-out that quota does not guarantee capacity; the statements about intra-day capacity fluctuation and the lack of guarantee on re-creation; the three sizing inputs with the output-to-input ratio's relationship to global standard pricing for GPT-4.1 and later, and the statement that cached tokens do not consume capacity; the normalized-TPM-over-Input-TPM-per-PTU method; all three routing variants with their CLI SKU names and residency characteristics; the spillover mechanism including the `429` example, the `x-ms-spillover-deployment` header, and the exclusion of Azure DeepSeek and Meta Llama; hourly billing mechanics and both stated reasons against traffic-based scaling; and the reservation definition, scoping, loose coupling, and the explicit statement that reservations do not guarantee capacity. **Not verified:** any per-model PTU-to-TPM ratio, minimum deployment size, price, default quota allocation, or regional availability figure — all live on companion pages that were not fetched, and none is asserted in this note. Documentation currency was not independently checked against a dated revision.
