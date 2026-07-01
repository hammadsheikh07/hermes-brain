---
title: The Learning Loop
created: 2026-07-01
updated: 2026-07-01
type: concept
tags: [learning, skills, memory]
sources:
  - raw/articles/2026-07-01-hermes-agent-docs.md
  - raw/articles/2026-07-01-hermes-agent-overview.md
  - raw/articles/2026-07-01-hermes-agent-releases.md
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
- v0.18.0 adds `/journey` for inspecting and editing accumulated memories/skills, plus a desktop
  memory graph; it also makes post-turn self-improvement cheaper via auxiliary-model routing,
  context digests, and adaptive cadence. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- [[verification-and-goals]] strengthens the loop's outcome-evaluation side by grounding completion
  in explicit evidence rather than claims. (source: raw/articles/2026-07-01-hermes-agent-releases.md)

## Related
- [[hermes-agent]] — the loop is its core differentiator
- [[skills-system]] — the mechanism the loop produces and reuses
- [[verification-and-goals]] — evidence and completion contracts

## Open questions
- How aggressively does the loop prune or de-duplicate skills over long horizons? (not in sources)
