---
title: The Learning Loop
created: 2026-07-01
updated: 2026-07-01
type: concept
tags: [learning, skills, memory]
sources:
  - raw/articles/2026-07-01-hermes-agent-docs.md
  - raw/articles/2026-07-01-hermes-agent-overview.md
confidence: high
---

## Definition
The learning loop is [[hermes-agent]]'s persistent (non-stateless) cycle that turns task experience
into reusable skills (see [[skills-system]]) and a compounding user model across sessions — the
capability Nous Research markets as unique to Hermes.

## Details
- Five stages: task execution → outcome evaluation → skill extraction → skill refinement → skill
  retrieval — (source: raw/articles/2026-07-01-hermes-agent-overview.md)
- Agent-curated memory with periodic nudges; autonomous skill creation; skill self-improvement
  during use — (source: raw/articles/2026-07-01-hermes-agent-docs.md)
- FTS5 cross-session recall with LLM summarization — (source: raw/articles/2026-07-01-hermes-agent-docs.md)
- User modeling: preserves preferences and decision history across sessions — (source: raw/articles/2026-07-01-hermes-agent-overview.md)

## Related
- [[hermes-agent]] — the loop is its core differentiator
- [[skills-system]] — the mechanism the loop produces and reuses

## Open questions
- How aggressively does the loop prune or de-duplicate skills over long horizons? (not in sources)
