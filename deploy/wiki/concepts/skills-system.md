---
title: Skills System
created: 2026-07-01
updated: 2026-07-01
type: concept
tags: [skills, learning, automation]
sources:
  - raw/articles/2026-07-01-hermes-learn-skills.md
  - raw/articles/2026-07-01-hermes-agent-docs.md
confidence: high
---

## Definition
Skills are [[hermes-agent]]'s **procedural memory**: named, reusable reasoning patterns stored as
markdown `SKILL.md` files that the agent creates, improves, and retrieves. The format is
"compatible with the agentskills.io open standard." (source: raw/articles/2026-07-01-hermes-learn-skills.md)

## Details
- Storage: a skill is a folder with a `SKILL.md` (YAML frontmatter) under `~/.hermes/skills/` — (source: raw/articles/2026-07-01-hermes-learn-skills.md)
- `SKILL.md` sections: description (<60 chars), When to Use, Procedure, Pitfalls, Verification — (source: raw/articles/2026-07-01-hermes-learn-skills.md)
- Progressive disclosure: a ~3k-token index loads first, full content only when needed — (source: raw/articles/2026-07-01-hermes-learn-skills.md)
- Four ways to create a skill: hand-write; `/learn`; agent auto-save after solving; install from
  the Skills Hub — (source: raw/articles/2026-07-01-hermes-learn-skills.md)
- `/learn` (announced 2026-06-23) captures a source into a skill automatically — a directory, docs
  URL, past conversation, or pasted notes — (source: raw/articles/2026-07-01-hermes-learn-skills.md)

## Related
- [[hermes-agent]] — owns the skills system
- [[learning-loop]] — drives skill creation and reuse

## Note
The bundled `llm-wiki` skill that maintains this very wiki is itself a `SKILL.md` under
`~/.hermes/skills/research/llm-wiki/` — same markdown-plus-frontmatter shape described here.
