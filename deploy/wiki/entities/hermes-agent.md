---
title: Hermes Agent
created: 2026-07-01
updated: 2026-07-01
type: entity
tags: [agent, product, open-source, learning, skills]
sources:
  - raw/articles/2026-07-01-hermes-agent-docs.md
  - raw/articles/2026-07-01-hermes-agent-github.md
  - raw/articles/2026-07-01-hermes-agent-overview.md
confidence: high
---

## Overview
Hermes Agent is an open-source (MIT) **self-improving AI agent** built by [[nous-research]]. Nous
markets it as "the only agent with a built-in learning loop": it turns experience into reusable
skills, improves them with use, and builds a model of the user across sessions. It runs on a range
of backends and reaches users across 20+ chat platforms. (source: raw/articles/2026-07-01-hermes-agent-docs.md)

## Key facts
- License **MIT**; Python-based (~82% of the codebase) — (source: raw/articles/2026-07-01-hermes-agent-github.md)
- Core differentiator: the [[learning-loop]], realized through the [[skills-system]] — (source: raw/articles/2026-07-01-hermes-agent-docs.md)
- Runs on 6 backends — see [[deployment-backends]] — (source: raw/articles/2026-07-01-hermes-agent-docs.md)
- Model-agnostic; providers switch with `hermes model` — see [[model-providers]] — (source: raw/articles/2026-07-01-hermes-agent-github.md)
- Reachable on 20+ platforms via one [[messaging-gateway]] — (source: raw/articles/2026-07-01-hermes-agent-docs.md)
- Also: built-in cron scheduler, isolated subagents for parallel work, MCP support — (source: raw/articles/2026-07-01-hermes-agent-github.md)
- Latest release at capture: v0.17.0 (v2026.6.19), 2026-06-19 — (source: raw/articles/2026-07-01-hermes-agent-github.md)

## Relationships
- Built by [[nous-research]]
- Implements [[learning-loop]] and [[skills-system]]
- Deployed via [[deployment-backends]]; powered by [[model-providers]]; accessed via [[messaging-gateway]]

## Open questions
- Current GitHub star count — sources conflict (~32k in April 2026 vs a much larger figure at the
  2026-06-19 snapshot). Tagged volatile; verify live before quoting.
