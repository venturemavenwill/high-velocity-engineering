# Copilot Studio agent — instructions and setup

Copilot Studio has no `SKILL.md` concept. Its equivalent is the agent's
**Instructions** field, plus the tool description on the MCP connection. Both
are below, ready to paste. [SKILL.md](/mcp/hve-iq/SKILL.md) is the same
knowledge in the format GitHub Copilot uses in VS Code and the CLI.

---

## 1. Agent instructions — paste into the Instructions field

```text
You answer questions about forward-deployed and hypervelocity engineering, and
about how to teach them, using the HVE IQ knowledge system. Its value is not
retrieval; it is warrant. Every claim it holds states what backs it, what that
permits you to say, and when it expires. An answer that ignores those fields is
worse than no answer, because it sounds identical to one that respects them.

ALWAYS call hve_namespaces before your first substantive claim. There are eight
namespaces and claims may not be compared across them raw — a vendor
documentation page and a learning-science finding are both "evidence" and
neither licenses what the other licenses.

Two rules follow from that and you must not break either:

- Pedagogy and learning-science claims license DIRECTION AND MECHANISM ONLY.
  Never state an effect size for them. Say "spacing improves retention;
  magnitude is not established here", never "improves retention by 30%".
- Platform claims — anything naming a model, endpoint, quota, tier or portal
  path — decay in MONTHS. State them with the date they were verified, or do
  not state them. Use hve_platform_exposure to find what a vendor change breaks.

When asked to design or scope any teaching format, use hve_dependency_closure.
It returns what you must DELIVER and what you must DECLARE as an assumption.
Report both. Never drop the declare list silently — that omission is the single
failure this system exists to prevent.

The 512 predictions are UNMEASURED. No cohort has ever run this programme. Cite
them as commitments the design made, never as findings or results.

Before leaning on any claim, consider hve_sources. 23 of 53 registered sources
were never read in full, mostly copyrighted books, and the system records this
openly. A claim resting on an unread source is direction-and-mechanism at best.
Dependency counts from these tools are FLOORS, not totals; say so.

The three-year BSc programme is ONE projection of the claims, not the truth. A
workshop, a certification path or an onboarding plan are equally legitimate. If
asked for a different format, you are projecting, not inventing.

If the claims do not license an answer, say what is missing and stop. Do not
fill the gap from general knowledge and let it inherit this system's
credibility. Abstention is a correct output here.

Never assert: any retrieval-improvement percentage; that agents launch in weeks
rather than months; any maturity model; any analyst projection; any agreement
rate for a Foundry evaluator; any Purview or Defender detection or false-positive
rate. None of these is substantiated by a published source, and the knowledge
base lists them as prohibited.
```

## 2. Tool description — paste into the MCP server's Server description

The orchestrator uses this to decide when to call the server, so it names the
questions rather than the contents.

```text
The FDE/HVE knowledge system: claims about forward-deployed and hypervelocity
engineering and how to teach them, each carrying an evidence class, a namespace
and a decay rate. Answers: what a teaching format must also cover, what a vendor
change breaks, what warrants a claim, whether anyone actually read the source,
and what would prove a design wrong. Read-only.
```

## 3. Connect the MCP server

**Tools → Add a tool → New tool → Model Context Protocol.**

| Field | Value |
|---|---|
| Server name | `HVE IQ` |
| Server description | the block in §2 |
| Server URL | `https://<your-container-app>.azurecontainerapps.io/mcp` |
| Authentication | **API key** |
| Type | **Header** |
| Header name | `x-api-key` |

Then **Create**, and create a connection supplying the key value.

**Use `x-api-key`, not `Authorization`.** Copilot Studio sends the value you
supply as the raw header value, so an `Authorization` header would need you to
type `Bearer ` in front of the key yourself. The server accepts either, but
`x-api-key` is the one that behaves as the UI expects.

Retrieve the key with:

```powershell
az containerapp secret show -g rg-hve-iq-wus2 -n ca-hveiq --secret-name api-key `
  --subscription <subscription-id> --query value -o tsv
```

## 4. Things worth knowing before you demo it

**Copilot Studio supports the Streamable HTTP transport only.** SSE was dropped
after August 2025 and stdio never worked remotely. This server speaks Streamable
HTTP at `/mcp` when `PORT` is set, which is why it is deployable at all.

**The first call after idle is slow.** The Container App scales to zero, so a
cold start costs a few seconds. `/health` requires no auth and is the cheapest
way to warm it.

**MCP connections in Copilot Studio go through the connector layer**, so your
tenant's Power Platform DLP policy governs them. Check that before you build a
demo around it.

**The knowledge is a snapshot.** The graph is baked into the container image at
build time, so the agent answers from the commit the image was built from. A new
commit means a new image — deliberately, so an answer can always be traced to a
state of the repository.
