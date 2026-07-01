---
title: Skills System
type: concept
slug: skills-system
sensitivity: public
sources:
  - raw/2026-07-01-hermes-learn-skills.md
  - raw/2026-07-01-hermes-agent-docs.md
updated: 2026-07-01
status: active
---

## Definition
Skills are [[hermes-agent]]'s **procedural memory**: named, reusable reasoning patterns stored as
markdown `SKILL.md` files that the agent creates, improves, and retrieves. The format is
"compatible with the agentskills.io open standard." (source: raw/2026-07-01-hermes-learn-skills.md)

## Details
- Storage: a skill is a folder with a `SKILL.md` (YAML frontmatter) under `~/.hermes/skills/` — (source: raw/2026-07-01-hermes-learn-skills.md)
- `SKILL.md` sections: description (<60 chars), When to Use, Procedure, Pitfalls, Verification — (source: raw/2026-07-01-hermes-learn-skills.md)
- Progressive disclosure: a ~3k-token index loads first, full content only when needed — (source: raw/2026-07-01-hermes-learn-skills.md)
- Four ways to create a skill: hand-write; `/learn`; agent auto-save after solving; install from
  the Skills Hub — (source: raw/2026-07-01-hermes-learn-skills.md)
- `/learn` (announced 2026-06-23) captures a source into a skill automatically — inputs can be a
  directory, a docs URL, a past conversation, or pasted notes. Example: `/learn https://docs.example.com/api/quickstart` — (source: raw/2026-07-01-hermes-learn-skills.md)

## Applies to
- [[hermes-agent]]; drives the [[learning-loop]]

## Note for this project
Hermes' `SKILL.md` pattern — markdown + frontmatter, progressive disclosure — is the same shape
as our brain: our own `hermes/skills/brain-*.md` are written to match it, so registering them as
real Hermes skills should be natural.
