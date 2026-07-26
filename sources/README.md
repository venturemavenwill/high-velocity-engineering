# Sources — the raw material

The bottom layer of the citation chain. **Nothing here is authored by this repository**, and nothing here may be cited by [wiki/](wiki/Home.md) directly — a wiki claim cites a [research/](research/99-source-register/source-register.md) Cliff Note, and the Cliff Note cites one of these.

| Folder | What it holds | Files |
|---|---|---|
| [vendor-courses/](sources/vendor-courses/06-Hypervelocity-Engineering-Framework.md) | Study notes compiled from Microsoft's Frontier Transformation Engineer badge journey. The seed the whole repository grew from. | 8 |
| [design-analysis/](sources/design-analysis/10-Gap-Analysis-and-Course-Architecture.md) | The three design documents that turned those notes into a programme brief. | 3 |

**These are the most perishable documents in the repository.** They describe a vendor platform at a moment in 2026, and two of the six vendor sources were already labelled classic or superseded when read. See [11-Microsoft-AI-Platform-Map.md](wiki/program/11-Microsoft-AI-Platform-Map.md) for what that obliges before every offering.

---

# Frontier Transformation Engineer — study note package

> Compiled 25 July 2026 from the Microsoft **Frontier Transformation Engineer (FTE)** badge journey on LevelUp (`skillupwithlevelup.com/frontier`) · 11 courses · ~86 hours · 3 phases.

## What the badge is

Microsoft's partner credential for technical professionals delivering AI transformation at "Frontier Firm" scale. It covers Microsoft IQ, Microsoft 365 Copilot, Copilot Studio, Microsoft Foundry, Fabric and Agent 365, plus the engineering discipline — Hypervelocity Engineering — to ship it.

**Three steps:** Complete Certifications → Project Ready → Frontier CoE & Hypervelocity Engineering.

### Prerequisites

1. Create your LevelUp account with your **work (MAICPP partner) email** only.
2. Sign in to **MS Learn with your personal email**, then link your work-email profile.
3. Link your MS Learn profile to **Partner Center** so your admin can see your credentials.

> Certification recognition is not immediate — allow **2–3 weeks** after your exam pass date.

## Journey map

### Phase 1 — Certifications (3 of 3 required)

| Certification | Hours | Prep course | Notes |
|---|---|---|---|
| **GH-300: GitHub Copilot** | 10 | LevelUp 1776161 | [07](sources/vendor-courses/07-GH-300-GitHub-Copilot-Certification-Prep.md) |
| **AI-103: Develop AI apps and agents on Azure** | 10 | none; an active **AI-102** is accepted instead | — |
| **AB-100: Agentic AI Business Solutions Architect** | 10 | LevelUp 2426785 | [08](sources/vendor-courses/08-AB-100-Agentic-AI-Business-Solutions-Architect-Prep.md) |

Preparation courses are optional; passing the exam is what counts. Exams are booked through Microsoft Learn.

### Phase 2 — Project Ready + assessments (5 of 5 required)

Preparation courses are optional; the **Frontier Engineer Assessment for each course is required at ≥ 80%**.

| # | Course | Hours | Notes | Assessment ID |
|---|---|---|---|---|
| 1 | Activate organizational intelligence with Microsoft IQ | 1 | [01](sources/vendor-courses/01-Activate-Organizational-Intelligence-with-Microsoft-IQ.md) | 2421493 |
| 2 | Build Frontier Firm productivity with Work IQ, Copilot & agents | 15 | [02](sources/vendor-courses/02-Build-Frontier-Firm-Productivity-with-Work-IQ-Copilot-and-Agents.md) | 2431760 |
| 3 | Accelerate Agentic AI | 15 | [03](sources/vendor-courses/03-Accelerate-Agentic-AI.md) | 2431478 |
| 4 | Microsoft Fabric IQ & Data Agents | 8 | [04](sources/vendor-courses/04-Microsoft-Fabric-IQ-and-Data-Agents.md) | 2431757 |
| 5 | Implement Agent 365 to observe, govern and secure AI apps, Copilot & agents | 12 | [05](sources/vendor-courses/05-Implement-Agent-365-Observe-Govern-Secure.md) | 2431791 |

### Phase 3 — Frontier CoE & Hypervelocity Engineering (1 of 1 required)

| Course | Hours | Status | Notes |
|---|---|---|---|
| **Hypervelocity Engineering Framework** | 1.5 | **Required** — assessment at ≥ 80% | [06](sources/vendor-courses/06-Hypervelocity-Engineering-Framework.md) |
| Create AI Center of Excellence | — | Optional · available July 2026 | not yet released |
| Industry Expertise for building AI agents | — | Optional · available July 2026 | not yet released |

## The eight documents

| File | Covers | Size |
|---|---|---|
| [01 — Microsoft IQ](sources/vendor-courses/01-Activate-Organizational-Intelligence-with-Microsoft-IQ.md) | Microsoft IQ as a unified intelligence layer: Work IQ, Fabric IQ, Foundry IQ, Agent 365; the Sunrise Farms scenario; the partner sales motion | 67 KB |
| [02 — Work IQ, Copilot & agents](sources/vendor-courses/02-Build-Frontier-Firm-Productivity-with-Work-IQ-Copilot-and-Agents.md) | Work IQ's four layers, the five M365 Copilot pillars, licensing/E7, Copilot Control System, oversharing remediation, no-code → pro-code agents, five-step adoption (ZAVA) | 81 KB |
| [03 — Accelerate Agentic AI](sources/vendor-courses/03-Accelerate-Agentic-AI.md) | Agent lifecycle: Copilot Studio and Foundry, MCP / A2A / OpenAPI tools, knowledge grounding, Agent Framework orchestration, Foundry Control Plane | 110 KB |
| [04 — Fabric IQ & Data Agents](sources/vendor-courses/04-Microsoft-Fabric-IQ-and-Data-Agents.md) | Ontology, semantic models, graph and digital twins on OneLake; Fabric Data Agents; MCP server/client; Python SDK; Git, CI/CD and ALM | 58 KB |
| [05 — Agent 365](sources/vendor-courses/05-Implement-Agent-365-Observe-Govern-Secure.md) | Observe / Govern / Secure, Entra Agent ID, agent registry, Purview DLP, Defender XDR for agents, Security Copilot, Zero Trust for AI | 87 KB |
| [06 — Hypervelocity Engineering](sources/vendor-courses/06-Hypervelocity-Engineering-Framework.md) | **The one that started this repository.** HVE ways of working, five-phase Research-Plan-Implement, context engineering, Forward Deployed Engineering, Responsible AI, SFI, Accelerate/SAFe/SPACE/ESSP | 70 KB |
| [07 — GH-300 prep](sources/vendor-courses/07-GH-300-GitHub-Copilot-Certification-Prep.md) | Copilot fundamentals, prompt engineering, VS Code / Visual Studio, agent mode across the SDLC, SKU comparison, exam strategy | 72 KB |
| [08 — AB-100 prep](sources/vendor-courses/08-AB-100-Agentic-AI-Business-Solutions-Architect-Prep.md) | AI architect role, agent design patterns, Copilot Studio and Foundry, testing, ALM, responsible AI governance, exam preparation | 106 KB |

Each follows the same shape: **At a glance → module map → per-module notes → glossary → labs → pitfalls → self-test with answer key.**

## Suggested study plan

| Week | Focus | Outcome |
|---|---|---|
| 1 | 01, then 02 | Foundation vocabulary; assessments 2421493 and 2431760 |
| 2 | 03 | 2431478; you now understand the build surfaces |
| 3 | 04 + 05 | 2431757 and 2431791; Phase 2 complete |
| 4 | 06 — study hardest, it is mandatory | HVE assessment; Phase 3 complete |
| 5–7 | 07 and 08 + AI-103/AI-102 self-study | GH-300, AB-100, AI-103; Phase 1 complete |

Do the **assessments** in Phase 2 even if you skip the preparation courses — only the assessment is required. Leave **2–3 weeks** of slack for certifications to reach Partner Center.

## The five ideas the journey keeps returning to

1. **Context, not model quality, is the bottleneck.** An agent without organisational context is "a brilliant intern on their first day." HVE states it as a principle: output quality is bounded by context quality.
2. **Three sources of context, one platform.** Work IQ = how your people work. Fabric IQ = how your business operates. Foundry IQ = how your agents unlock knowledge.
3. **Governance is a first-class design concern.** Agent 365 and the Foundry Control Plane are presented as the reason enterprises can say yes to agents at all.
4. **Choose the right build surface.** No-code Agent Builder → low-code Copilot Studio → pro-code Agents Toolkit / Foundry.
5. **Delivery discipline is part of the credential.** HVE and Forward Deployed Engineering are how capability becomes delivery — and Phase 3 is the assessment you cannot skip.

> **A note on how these are used downstream.** Everything above is vendor material read at a point in time. Where the wiki draws on it, the claim is marked *grounded in vendor documentation, with its version and its silence recorded* — the fourth evidence class — and what the documentation does **not** report is recorded alongside what it does. Several widely repeated figures from this material are on the repository's [prohibited list](wiki/program/09-Durable-and-Perishable-Register.md) precisely because no published source substantiates them.
