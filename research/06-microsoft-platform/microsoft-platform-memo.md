# Microsoft Platform Memo

Date: 2026-07-25

## Summary
Microsoft-specific capabilities matter, but they should be split into durable platform concepts and perishable product details.

## End-to-end summary
This memo is the organizing principle for the Microsoft platform strand. The course should teach durable platform concepts such as identity, governance, retrieval, agent orchestration, evaluation, and capacity planning, while treating product surfaces as refreshable examples. That separation matters because Microsoft’s AI surface evolves quickly, but the underlying engineering questions are stable. The memo therefore defines what belongs in the core curriculum and what belongs in the changeable implementation layer.

## Durable platform layer
- Work IQ, Foundry IQ, and Fabric IQ
- Declarative and custom-engine agent paths
- Entra identity, Purview, Defender, Agent 365
- MCP, A2A, and OpenAPI patterns
- Foundry architecture and evaluations

## Perishable / product-specific layer
- Tool catalog details
- Copilot Studio surface details
- Model catalog volatility
- Prompt flow updates
- UI and packaging changes

## Critical missing gaps
- PTU versus standard and batch API planning
- APIM AI Gateway patterns
- Foundry Evaluations and continuous evaluation
- Document-level ACLs and label-aware retrieval
- Purview SDK for custom apps
- AI security and governance plumbing
- Serverless execution and dynamic sessions
- Fine-tuning and compression beyond basic examples

## What to remember
- Durable concepts and product details must be separated.
- Capacity, governance, and retrieval are core platform topics.
- Evaluation should be taught as an operational practice.
- The strand needs both architecture and deployment examples.

## Why it matters for the course
This memo is the map for what the Microsoft strand must cover to be complete.

## Limits
It is intentionally high-level; the individual platform notes supply the concrete detail.

## High-signal sources
- sources/vendor-courses/03-Accelerate-Agentic-AI.md
- Microsoft Learn for Foundry and related AI surfaces
- APIM AI Gateway docs
- Purview and Defender docs
- Foundry Evaluations docs