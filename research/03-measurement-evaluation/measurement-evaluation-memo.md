# Measurement and Evaluation Memo

Date: 2026-07-25

## Summary
This is the largest structural gap. The course must teach students how to measure whether a model, retriever, or agent actually works, and how to defend a ship/no-ship decision with evidence.

## End-to-end summary
This memo defines the measurement spine of the course. It argues that a serious AI systems curriculum must teach students how to decide whether a model, retriever, or agent works well enough to ship, and how to defend that decision with evidence. The content sequence moves from failure taxonomy to rubric design, then to judge validation, statistical defense, contamination checking, and online experimentation. That sequence is important because measurement is not a single lesson; it is a workflow.

## Core sequence to teach
1. Error taxonomy and open coding
2. Criteria discovery and rubric iteration
3. Judge validation against human labels
4. Statistical defense with confidence intervals and paired tests
5. Contamination and construct-validity checks
6. Online experiment design and guardrails

## Required assessment artifacts
- Failure taxonomy
- Annotated example set
- Judge validation report
- Statistical decision memo
- Contamination audit
- A/B test report or simulation report

## Main gaps
- No criteria-drift workflow
- No judge-bias audit
- No statistics for evals
- No agent-specific metrics such as pass^k
- No online experimentation layer
- No entrustment scale or narrative rubric

## What to remember
- Evaluation should be taught as a workflow.
- Judge quality and contamination matter as much as raw scores.
- Evidence needs statistics and narrative interpretation.
- The course should cover both offline and online evaluation.

## Why it matters for the course
This memo is the strongest argument that the course needs a real evaluation strand.

## Limits
It is a gap analysis, so the detailed notes and assessment artifacts have to carry the implementation burden.

## High-signal sources
- Your AI Product Needs Evals
- AI Engineering
- EvalGen
- MT-Bench and Chatbot Arena
- Prediction-Powered Inference
- Adding Error Bars to Evals
- BEIR
- The Leaderboard Illusion