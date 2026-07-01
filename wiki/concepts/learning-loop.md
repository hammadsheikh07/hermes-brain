---
title: The Learning Loop
type: concept
slug: learning-loop
sensitivity: public
sources:
  - raw/2026-07-01-hermes-agent-docs.md
  - raw/2026-07-01-hermes-agent-overview.md
updated: 2026-07-01
status: active
---

## Definition
The learning loop is [[hermes-agent]]'s persistent (non-stateless) cycle that turns task
experience into reusable skills (see [[skills-system]]) and a compounding user model across sessions —
the capability Nous Research markets as unique to Hermes.

## Details
- Five stages: task execution → outcome evaluation → skill extraction → skill refinement → skill
  retrieval — (source: raw/2026-07-01-hermes-agent-overview.md)
- Agent-curated memory with periodic nudges; autonomous skill creation; skill self-improvement
  during use — (source: raw/2026-07-01-hermes-agent-docs.md)
- FTS5 cross-session recall with LLM summarization — (source: raw/2026-07-01-hermes-agent-docs.md)
- User modeling: preserves preferences and decision history across sessions — (source: raw/2026-07-01-hermes-agent-overview.md)

## Applies to
- [[hermes-agent]] — the loop is its core differentiator
- Realized through the [[skills-system]]

## History / changes
- Emphasized across 2026 releases; the `/learn` addition (2026-06-23) made skill capture easier
  (see [[skills-system]]).
