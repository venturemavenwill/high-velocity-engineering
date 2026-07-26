# High Velocity Engineering

> A three-year BSc Computer Science programme design, the research it was built from, and the vendor study notes that started it.
> **AI agents: read [AGENTS.md](AGENTS.md) first, then load [graph/graph.json](graph/graph.json).**

## Repository map

| Path | What it holds | Count |
|---|---|---|
| [wiki/](wiki/Home.md) | **The programme.** 9 quarters, 18 modules, 90 seminar days, 90 whitepapers, 13 programme pages. | 221 |
| [research/](research/99-source-register/source-register.md) | **The evidence.** Cliff Notes on every external source, organised in 9 topic folders plus a source register. | 90 |
| [sources/](sources/) | **The raw material.** 8 vendor course notes and 3 design-analysis documents. | 11 |
| [graph/](graph/README.md) | **The index.** A regenerable knowledge graph of every file above. | — |
| [scripts/](scripts/build-graph.ps1) | Graph builder. Re-run after any structural change. | — |

The three content layers form a citation chain: **sources → research → wiki**. A claim in the wiki cites a research note; a research note cites a source or an external URL. Nothing in the wiki asserts an external fact without one of those two backings, and the [Whitepaper Standard](wiki/program/05-Whitepaper-Standard.md) enforces it.

The rest of this page is the study-note package that the `sources/` layer came from.

---

# Frontier Transformation Engineer — Study Note Package

> Complete study notes for the Microsoft **Frontier Transformation Engineer (FTE)** badge learning journey on LevelUp (`skillupwithlevelup.com/frontier`).
> 11 courses · ~86 hours · 3 phases · compiled 25 July 2026

---

## What the badge is

The Frontier Transformation Engineer badge is Microsoft's partner credential for technical professionals who deliver AI transformation at "Frontier Firm" scale. It validates end‑to‑end capability across Microsoft's advanced AI stack — Microsoft IQ, Microsoft 365 Copilot, Copilot Studio, Microsoft Foundry, Fabric, and Agent 365 — plus the engineering discipline (Hypervelocity Engineering) to ship it.

**Three steps to earn it:** Complete Certifications → Project Ready → Frontier CoE & Hypervelocity Engineering.

### Before you start (prerequisites)

1. Create your LevelUp account with your **work (MAICPP partner) email** only.
2. Sign in to **MS Learn with your personal email**, then link your work‑email profile.
3. Link your MS Learn profile to **Partner Center** so your admin can see your credentials.

> Certification recognition is not immediate — allow **2–3 weeks** after your exam pass date.

---

## Journey map

### Phase 1 — Certifications (required: 3 of 3)

| Certification | Hours | Prep course | Study notes |
|---|---|---|---|
| **GH-300: GitHub Copilot** | 10 | LevelUp 1776161 | [07 — GH-300 Prep](./sources/vendor-courses/07-GH-300-GitHub-Copilot-Certification-Prep.md) |
| **AI-103: Develop AI apps and agents on Azure** | 10 | (no LevelUp prep course; an active **AI-102** is accepted in its place) | — |
| **AB-100: Agentic AI Business Solutions Architect** | 10 | LevelUp 2426785 | [08 — AB-100 Prep](./sources/vendor-courses/08-AB-100-Agentic-AI-Business-Solutions-Architect-Prep.md) |

Preparation courses are optional; passing the certification exam is what counts. Exams are booked through Microsoft Learn.

### Phase 2 — Project Ready + Assessments (required: 5 of 5)

Preparation courses are optional; the **Frontier Engineer Assessment for each course is required at ≥ 80%**.

| # | Course | Hours | Type | Study notes | Assessment course ID |
|---|---|---|---|---|---|
| 1 | Activate organizational intelligence with Microsoft IQ | 1 | Project Ready | [01](./sources/vendor-courses/01-Activate-Organizational-Intelligence-with-Microsoft-IQ.md) | 2421493 |
| 2 | Build Frontier Firm productivity with Work IQ, Copilot & agents | 15 | Project Ready + Labs | [02](./sources/vendor-courses/02-Build-Frontier-Firm-Productivity-with-Work-IQ-Copilot-and-Agents.md) | 2431760 |
| 3 | Accelerate Agentic AI | 15 | Project Ready + Labs | [03](./sources/vendor-courses/03-Accelerate-Agentic-AI.md) | 2431478 |
| 4 | Microsoft Fabric IQ & Data Agents | 8 | Project Ready + Labs | [04](./sources/vendor-courses/04-Microsoft-Fabric-IQ-and-Data-Agents.md) | 2431757 |
| 5 | Implement Agent 365 to observe, govern and secure AI apps, Copilot & Agents | 12 | Project Ready + Labs | [05](./sources/vendor-courses/05-Implement-Agent-365-Observe-Govern-Secure.md) | 2431791 |

### Phase 3 — Frontier CoE & Hypervelocity Engineering (required: 1 of 1)

| Course | Hours | Status | Study notes |
|---|---|---|---|
| **Hypervelocity Engineering Framework** | 1.5 | **Required** — assessment at ≥ 80% | [06](./sources/vendor-courses/06-Hypervelocity-Engineering-Framework.md) |
| Create AI Center of Excellence | — | Optional · available July 2026 | not yet released |
| Industry Expertise for building AI agents | — | Optional · available July 2026 | not yet released |

---

## The eight study-note documents

| File | Covers | Size |
|---|---|---|
| [01 — Activate Organizational Intelligence with Microsoft IQ](./sources/vendor-courses/01-Activate-Organizational-Intelligence-with-Microsoft-IQ.md) | The Microsoft IQ platform as a unified intelligence layer: Work IQ, Fabric IQ, Foundry IQ, Agent 365; the Sunrise Farms scenario; the partner sales motion | 67 KB |
| [02 — Build Frontier Firm Productivity with Work IQ, Copilot & Agents](./sources/vendor-courses/02-Build-Frontier-Firm-Productivity-with-Work-IQ-Copilot-and-Agents.md) | Work IQ's four layers, the five M365 Copilot pillars, licensing/E7, Copilot Control System, oversharing remediation, no‑code → pro‑code agent building, five‑step adoption method (ZAVA case study) | 81 KB |
| [03 — Accelerate Agentic AI](./sources/vendor-courses/03-Accelerate-Agentic-AI.md) | Full agent lifecycle: Copilot Studio and Microsoft Foundry, MCP / A2A / OpenAPI tools, knowledge grounding, Microsoft Agent Framework multi‑agent orchestration, Foundry Control Plane | 110 KB |
| [04 — Microsoft Fabric IQ & Data Agents](./sources/vendor-courses/04-Microsoft-Fabric-IQ-and-Data-Agents.md) | Ontology, semantic models, graph and digital twins on OneLake; Fabric Data Agents; MCP server/client; Python SDK; Git, CI/CD and ALM for data agents | 58 KB |
| [05 — Implement Agent 365](./sources/vendor-courses/05-Implement-Agent-365-Observe-Govern-Secure.md) | Observe / Govern / Secure pillars, Entra Agent ID, agent registry and dashboards, Purview DLP, Defender XDR for agents, Security Copilot, Foundry Control Plane, Zero Trust for AI | 87 KB |
| [06 — Hypervelocity Engineering Framework](./sources/vendor-courses/06-Hypervelocity-Engineering-Framework.md) | **Required assessment.** HVE ways of working, the five‑phase Research‑Plan‑Implement flow, context engineering, Forward Deployed Engineering, Responsible AI, SFI, and the Accelerate/SAFe/SPACE/ESSP measurement frameworks | 70 KB |
| [07 — GH-300 GitHub Copilot Prep](./sources/vendor-courses/07-GH-300-GitHub-Copilot-Certification-Prep.md) | Copilot fundamentals, prompt engineering, VS Code / Visual Studio features, agent mode across the SDLC, SKU comparison, exam strategy | 72 KB |
| [08 — AB-100 Agentic AI Business Solutions Architect Prep](./sources/vendor-courses/08-AB-100-Agentic-AI-Business-Solutions-Architect-Prep.md) | AI architect role, agent design patterns, build & deploy with Copilot Studio and Foundry, testing, ALM, responsible AI governance, exam preparation | 106 KB |

Each document follows the same shape: **At a glance → Module map → per‑module notes (what it covers · key concepts · detailed notes · exam pointers) → glossary → labs → pitfalls → self‑test questions with answer key.**

`_source-transcripts/` contains the raw underlying course material (on‑screen text plus full English narration transcripts, ~1.9 MB) if you want to check anything against the original wording.

---

## The five ideas that tie the whole journey together

1. **Context, not model quality, is the bottleneck.** Every course makes the same argument from a different angle: an agent without organisational context is "a brilliant intern on their first day"; with Microsoft IQ it behaves like "a ten‑year veteran who knows the business." HVE states it as a principle — *output quality is bounded by context quality, not model quality*.
2. **Three sources of context, one platform.** Work IQ = how your people work. Fabric IQ = how your business operates. Foundry IQ = how your agents unlock knowledge. Learn which layer answers which class of question — this distinction recurs in nearly every assessment.
3. **Governance is a first‑class design concern, not an afterthought.** Agent 365 (identity via Entra Agent ID, observability, Purview DLP, Defender XDR) and the Foundry Control Plane are presented as the reason enterprises can say yes to agents at all.
4. **Choose the right build surface.** No‑code Agent Builder → low‑code Copilot Studio → pro‑code Agents Toolkit / Microsoft Foundry. Both AB-100 and the Project Ready courses test the "when would you use which" judgement.
5. **Delivery discipline is part of the credential.** Hypervelocity Engineering and Forward Deployed Engineering are how the technical capability turns into weeks‑not‑months delivery — and it is the one assessment you cannot skip in Phase 3.

---

## Suggested study plan

| Week | Focus | Outcome |
|---|---|---|
| 1 | Notes 01 → then 02 (Work IQ / Copilot) | Foundation vocabulary; pass assessments 2421493 and 2431760 |
| 2 | Notes 03 (Accelerate Agentic AI) | Pass 2431478; you now understand the build surfaces |
| 3 | Notes 04 (Fabric IQ) + 05 (Agent 365) | Pass 2431757 and 2431791; Phase 2 complete |
| 4 | Note 06 (HVE) — study hardest, it is mandatory | Pass the Hypervelocity Engineering Framework assessment; Phase 3 complete |
| 5–7 | Notes 07 and 08 + AI-103/AI-102 self-study on Microsoft Learn | Sit GH-300, AB-100 and AI-103; Phase 1 complete |

Practical notes:
- Do the **assessments** in Phase 2 even if you skip the preparation courses — only the assessment is required.
- Leave **2–3 weeks** of slack at the end for certifications to propagate into Partner Center.
- Start note 06 early if your badge deadline is tight; it is short (1.5 h) but the assessment is rigorous and mandatory.
- Work through the **self-test questions** at the end of each document before attempting the real knowledge checks — they were written from the same material the checks are drawn from.

---

## Caveats

- Content reflects the courses as published in **July 2026**. Several capabilities referenced (Agent 365 GA, Microsoft 365 E7 "Frontier Suite", the two optional Phase 3 courses) were dated to May–July 2026 in the material; verify current availability before quoting dates to a customer.
- The **GH-300 sessions are Cloudweek 2024 recordings** and may lag the current exam objectives — cross‑check against the live GH-300 skills outline on Microsoft Learn.
- Where a course delivers content only as a live demo, the notes capture the narrated steps rather than screenshots.
