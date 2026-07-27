# Cliff Notes — The AI Gateway in Azure API Management

## Citation and access
- **Title:** "AI gateway in Azure API Management"
- **Publisher:** Microsoft, Microsoft Learn (Azure API Management documentation).
- **Source consulted:** `https://learn.microsoft.com/en-us/azure/api-management/genai-gateway-capabilities` — **fetched and read in full.**
- **Access status:** open documentation. **Perishable**: policy names, tier availability and preview status change frequently.
- Referenced companion pages, not fetched: the individual policy references, the backends page, the unified model API preview, the MCP server pages, and the LLM logging how-to.

## What this source is
The overview page for a set of capabilities Microsoft groups under the name "AI gateway" inside Azure API Management. Its purpose is to argue that the gateway — the reverse proxy in front of model endpoints — is the correct place to enforce cost control, quota fairness, authentication, resilience and observability for AI workloads, and then to enumerate the mechanisms that do each. The page is explicit that this is "not a separate offering": the AI gateway "extends API Management's existing API gateway." That framing is the most useful thing in it, because it makes the intellectual claim visible — the argument is that AI traffic is API traffic with different resource semantics, not a new category of thing.

## The argument in full
The page begins by defining scope. The AI gateway manages "language model APIs" conforming to the OpenAI Chat Completions or Responses API, the Anthropic Messages API (in v2 tiers), or the Google Vertex AI API; models "deployed in a variety of environments, including Microsoft Foundry or non-Microsoft providers such as Amazon Bedrock"; remote **MCP servers** and **A2A agent APIs**; and self-hosted models and endpoints. The breadth is the point. A gateway that only fronted one vendor's models would be a convenience; one that fronts several, plus tool servers and agent-to-agent protocols, is an architectural boundary. A **unified model API**, in preview, goes further by exposing "multiple backends through a single OpenAI-compatible endpoint", handling format translation automatically and letting governance policies be applied once across all models.

The motivation section frames AI adoption in three phases — evaluating models, building apps and agents that need access to them, and operationalising and deploying to production — and locates the gateway's value in the third. The five challenges it names are worth memorising as a checklist, because they are exactly the concerns that do not appear in a prototype: authenticate and authorise access to AI services; load balance across multiple endpoints; monitor and log interactions; manage token usage and quotas across multiple applications; and enable self-service for developer teams. Every one is a multi-tenant concern. A single application talking to a single model needs none of them, which is precisely why they are invisible until the second application appears.

The scalability argument is the sharpest reasoning on the page and deserves to be taught verbatim in structure. Tokens are the scarce resource; providers assign quota as tokens per minute; those tokens must be distributed "across your model consumers, such as different applications, developer teams, or departments within the company." With one application, a TPM limit set directly on the model deployment suffices. As the portfolio grows, "you need to make sure that one app doesn't use the whole TPM quota and block other apps from accessing the backends they need." That is a noisy-neighbour problem, and it is stated cleanly enough to serve as a general lesson: a shared finite resource with no per-consumer accounting will be consumed by whichever consumer is least careful.

The mechanism is the **token limit policy**. It enforces a TPM limit or a token quota "over a specified period, such as hourly, daily, weekly, monthly, or yearly", and it can key that limit on "any counter key, such as subscription key, originating IP address, or an arbitrary key defined through a policy expression." The detail that matters technically is prompt-token precalculation: the policy "enables precalculation of prompt tokens on the Azure API Management side, minimizing unnecessary requests to the AI service backend if the prompt already exceeds the limit." That is a fail-fast design — reject at the edge rather than paying to discover the rejection downstream. The worked example is a five-hundred-TPM limit keyed on subscription:

```xml
<llm-token-limit counter-key="@(context.Subscription.Id)" 
    tokens-per-minute="500" estimate-prompt-tokens="false" remaining-tokens-variable-name="remainingTokens">
</llm-token-limit>
```

The `remaining-tokens-variable-name` attribute is quietly important: the remaining budget becomes available to downstream policy, so the gateway can do more than accept or reject.

**Semantic caching** follows, and it is conceptually the most interesting capability because it caches on meaning rather than on identity. The technique caches completions of previous prompts and reuses them "by comparing the vector proximity of the prompt to prior requests", implemented with Azure Managed Redis or another RediSearch-compatible external cache, the Embeddings API, and the paired `llm-semantic-cache-store` and `llm-semantic-cache-lookup` policies. The claimed benefits are fewer backend calls, better response times and lower cost. The engineering caution the page does not state is the obvious one: a similarity threshold is a correctness knob. Set it loosely and the system returns an answer to a question that was not asked. This is where a course should intervene, because the failure is silent and the failure mode is a plausible wrong answer.

Native scaling is handled briefly and honestly. API Management can add gateway **scale units** automatically or manually and add regional gateways for multiregion deployments, with capabilities varying by tier. But the page attaches a note that prevents the obvious misreading: "While API Management can scale gateway capacity, you also need to scale and distribute traffic to your AI backends to accommodate increased load… deploy backend AI services in the same regions as your API Management gateways." Scaling the front door does not widen the corridor behind it. That is a general distributed-systems lesson dressed as a product caveat.

Security is three mechanisms. **Managed identities** authenticate to Azure AI services "so you don't need API keys for authentication" — the elimination of a long-lived secret, not merely its better storage. **OAuth authorization** for AI apps and agents to reach APIs or MCP servers, via credential manager. And policy-based prompt moderation using **Azure AI Content Safety**. Placing moderation at the gateway is a deliberate architectural choice with a real trade-off: it guarantees uniform enforcement across every consumer, and it centralises a decision that some applications might legitimately want to make differently.

Resilience is the pairing of a **load balancer** and a **circuit breaker** over configured backends. The load balancer "supports round-robin, weighted, priority-based, and session-aware load balancing", and the page gives a specific and instructive example: "define priorities within the load balancer configuration to ensure optimal utilization of specific Microsoft Foundry endpoints, particularly those purchased as PTU instances." That is the direct operational consequence of the provisioned-throughput economics — you have paid for dedicated capacity whether or not you use it, so route to it first and overflow elsewhere. The circuit breaker "features dynamic trip duration, applying values from the `Retry-After` header provided by the backend", which is a better design than a fixed timeout because it lets the failing service state its own recovery time rather than being guessed at.

Observability closes the technical argument, and it is here that the gateway earns its place in a course on production systems. The capabilities are logging prompts and completions to Azure Monitor, tracking token metrics per consumer in Application Insights, a built-in monitoring dashboard, custom policy expressions, and cross-application quota management. The `llm-emit-token-metric` policy attaches custom dimensions to emitted metrics:

```xml
<llm-emit-token-metric namespace="llm-metrics">
    <dimension name="Client IP" value="@(context.Request.IpAddress)" />
    <dimension name="API ID" value="@(context.Api.Id)" />
    <dimension name="User ID" value="@(context.Request.Headers.GetValueOrDefault("x-user-id", "N/A"))" />
</llm-emit-token-metric>
```

Dimensions are what make a metric answerable. Total token consumption tells you the bill; token consumption per API per user tells you who to talk to. The page also notes that logging supports "billing and auditing", which is the point at which observability stops being an operational nicety and becomes a governance requirement. It does not discuss the privacy implications of logging prompts and completions, and a course must.

The developer-experience and Foundry-integration sections describe a governance plane rather than a data plane: registration of APIs, MCP servers and skills in an organisational catalogue in Azure API Center, self-service developer portals, a policy toolkit, and direct integration of the AI gateway into Microsoft Foundry so that models, agents and tools are governed from within the Foundry environment. The Foundry integration is in **preview**, which should be stated whenever it is taught.

## Structure of the original
- What the AI gateway is, and the endpoint types it manages
- Why use an AI gateway — adoption phases and the five challenges
- Traffic mediation and control — import, schema, managed-identity authentication, MCP and A2A
- Scalability and performance — token rate limiting and quotas; semantic caching; native scaling
- Security and safety — managed identities, OAuth, content safety
- Resiliency — backend load balancer; circuit breaker
- Observability and governance — logging, token metrics, dashboard
- Developer experience — API Center catalogue, developer portals, policy toolkit
- AI gateway in Microsoft Foundry (preview)

## Key concepts and practices
- **The AI gateway "extends API Management's existing API gateway; it's not a separate offering."** Capability availability varies by service tier.
- **Supported endpoint types:** OpenAI Chat Completions and Responses, Anthropic Messages (v2 tiers), Google Vertex AI; Foundry and non-Microsoft providers including Amazon Bedrock; remote MCP servers; A2A agent APIs; self-hosted models.
- **Unified model API (preview):** multiple backends behind one OpenAI-compatible endpoint, with automatic format translation and policy applied once.
- **Five stated challenges:** authenticate and authorise; load balance; monitor and log; manage token usage and quotas across applications; enable developer self-service.
- **Token limit policy:** TPM limits or quotas over hourly, daily, weekly, monthly or yearly periods; keyed on subscription key, originating IP, or an arbitrary policy expression; **prompt tokens can be precalculated at the gateway** to avoid backend calls that would exceed the limit; remaining tokens exposed to downstream policy.
- **Semantic caching** compares "vector proximity of the prompt to prior requests"; requires Azure Managed Redis or a RediSearch-compatible external cache; implemented by the paired `llm-semantic-cache-store` and `llm-semantic-cache-lookup` policies over the Embeddings API.
- **Scale units and regional gateways** scale the gateway. The docs explicitly warn this does not scale the AI backends, which must be deployed in the same regions.
- **Security:** managed identities remove the need for API keys; OAuth via credential manager for apps and agents including MCP servers; `llm-content-safety` policy for prompt moderation via Azure AI Content Safety.
- **Load balancing modes:** round-robin, weighted, priority-based, session-aware. Priority routing is recommended specifically to saturate PTU endpoints first.
- **Circuit breaker** uses **dynamic trip duration from the backend's `Retry-After` header** rather than a fixed interval.
- **`llm-emit-token-metric`** emits token metrics with custom dimensions for filtering in Azure Monitor; logging captures prompts, completions and token usage "for billing and auditing".
- **Governance plane:** Azure API Center catalogue for APIs, MCP servers and skills; developer portals; policy toolkit; Copilot Studio connector.
- **AI gateway in Microsoft Foundry is preview.**

## Method and evidence base
First-party product documentation. Definitional rather than empirical: it states what the platform does, not how well it performs. No benchmarks, no latency figures, no cost-reduction measurements, and no comparison against other gateway products. The architectural reasoning it contains — the noisy-neighbour argument, the front-door-versus-backend scaling caveat, the `Retry-After`-driven circuit breaker — is sound and generalisable, but it is asserted rather than demonstrated.

## Vocabulary the source introduces
- **AI gateway** — the set of API Management capabilities for managing AI backends; an extension of the existing API gateway, not a distinct product.
- **Token limit policy** — per-consumer enforcement of TPM limits or longer-period token quotas.
- **Counter key** — the dimension a limit is enforced against: subscription, IP, or an arbitrary policy expression.
- **Prompt token precalculation** — estimating input tokens at the gateway so over-limit requests never reach the backend.
- **Semantic caching** — reuse of prior completions selected by vector proximity of prompts rather than exact match.
- **Scale unit** — the unit of gateway capacity, added manually or automatically.
- **Backend** — a configured AI endpoint the gateway can route to, load balance across, and circuit-break.
- **Dynamic trip duration** — circuit-breaker recovery timing taken from the backend's `Retry-After` header.
- **Unified model API** — one OpenAI-compatible endpoint fronting multiple providers with automatic format translation.
- **A2A agent API** — an agent-to-agent protocol endpoint the gateway can import and manage.

## What to remember
- The gateway is where multi-tenant concerns become visible; a single-application prototype needs none of them.
- Tokens are a shared finite resource, so without per-consumer accounting one application will starve the others.
- Precalculating prompt tokens at the edge is fail-fast: reject before paying for the rejection.
- Semantic caching trades correctness for cost and latency, and the similarity threshold is the dial. Failures are silent.
- Scaling the gateway does not scale the backends; both must be scaled, and co-located regionally.
- Managed identity eliminates a long-lived secret rather than merely storing it better.
- Priority load balancing exists to saturate paid-for dedicated capacity before overflowing to shared capacity.
- A circuit breaker that reads `Retry-After` recovers on the backend's schedule rather than a guessed one.
- Metric dimensions are what make token spend attributable, and attribution is what makes governance possible.
- Logging prompts and completions serves billing and auditing — and creates a privacy surface the docs do not discuss.

## Why it matters for the course
This page supplies the operational layer that a model-centric curriculum characteristically omits. A student who can build a working feature and cannot say who pays for it, what happens when a second team starts using it, or how it degrades when the backend is unhealthy has not built a production system. Every mechanism here maps onto a durable concept that outlives the product: rate limiting is fairness under contention, semantic caching is a correctness-versus-cost trade, circuit breaking is failure isolation, managed identity is secret elimination, and metric dimensions are cost attribution. It also closes a loop with the platform's capacity economics — priority routing to PTU endpoints is the direct operational consequence of having bought dedicated capacity, as described in [provisioned-throughput-for-foundry-models.md](/research/06-microsoft-platform/provisioned-throughput-for-foundry-models.md) — and with the safety strand, since gateway-level content moderation is a design decision about where policy is enforced.

## How to teach it
- **Lecture:** teach the noisy-neighbour problem first with no product attached, then show the token limit policy as one instance of a per-consumer quota.
- **Lecture:** teach semantic caching as a correctness-versus-cost trade and ask directly what a threshold that is slightly too loose costs a user.
- **Lab:** have two student teams share a single quota against one backend, observe the starvation, then introduce per-consumer limits and measure the change.
- **Lab:** configure a circuit breaker and a priority load balancer across two backends, fail one deliberately, and observe the recovery behaviour driven by `Retry-After`.
- **Lab:** emit token metrics with dimensions and produce a per-team cost attribution from the resulting data.
- **Assessment:** require a gateway policy design as part of any deployed feature, with the consumer-fairness, caching-correctness and failure-isolation decisions justified in writing and defended orally.
- **Assessment:** ask what is logged, who can read it, and what the retention policy should be. The privacy answer is not in the documentation and must be reasoned to.
- **Framing:** perishable. Assess the reasoning, not the policy names.

## Limits and cautions
- Product documentation with a commercial frame; it argues for a gateway, and does not discuss the latency, cost or operational burden the gateway itself adds.
- Capability availability "varies by API Management service tier", so any lab must confirm what the available tier actually supports.
- The Foundry integration and the unified model API are **preview** features and should not be built on for anything durable.
- Semantic caching's correctness risk is not discussed at all in the source. That gap must be filled by the instructor.
- Privacy implications of logging prompts and completions are not addressed, despite logging being recommended for billing and auditing.
- No performance or cost-saving data of any kind. The benefits described are plausible mechanisms, not measured outcomes.
- Policy names, XML attributes and tier boundaries drift between revisions; treat all code shown here as illustrative.

## Verification status
Verified by fetching and reading the page in full: the "extends… not a separate offering" framing and the tier-variability note; the full list of supported endpoint types including the three API schemas, Anthropic's v2-tier restriction, Foundry and Amazon Bedrock, MCP servers, A2A agent APIs and self-hosted endpoints; the unified model API preview and its description; the three adoption phases and the five stated challenges; the token-quota distribution argument and the noisy-neighbour framing; the token limit policy's period options, counter-key flexibility, prompt-token precalculation, and the quoted `llm-token-limit` example including the 500 TPM figure and the `remaining-tokens-variable-name` attribute; the semantic-caching description including vector proximity, Azure Managed Redis and RediSearch compatibility, the Embeddings API, and both policy names; the scale-unit and regional-gateway capabilities together with the quoted caveat that backends must also be scaled and co-located; all three security mechanisms including managed identity, OAuth via credential manager, and Azure AI Content Safety moderation; all four load-balancing modes and the quoted PTU-priority recommendation; the circuit breaker's dynamic trip duration from the `Retry-After` header; the five observability capabilities and the quoted `llm-emit-token-metric` example with its three dimensions; the billing-and-auditing purpose of logging; the API Center governance-plane features; and the preview status of the Foundry integration. **Not verified:** any performance, latency or cost-saving claim, since none is made; the behaviour of individual policies beyond their descriptions, since the policy reference pages were not fetched; and current tier-by-tier availability. The correctness caution about semantic-caching thresholds and the privacy caution about prompt logging are **this note's own analysis, not claims from the source.**
