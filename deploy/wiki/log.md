# Wiki Log

> Chronological record of all wiki actions. Append-only.
> Format: `## [YYYY-MM-DD] action | subject`
> Actions: ingest, update, query, lint, create, archive, delete
> When this file exceeds 500 entries, rotate: rename to log-YYYY.md, start fresh.

## [2026-07-01] create | Wiki initialized
- Domain: Hermes Agent and the self-hosted AI-agent ecosystem
- Structure created with SCHEMA.md, index.md, log.md, raw/articles/

## [2026-07-01] ingest | Hermes Agent official docs
- Source: raw/articles/2026-07-01-hermes-agent-docs.md
- Created [[hermes-agent]], [[nous-research]], [[learning-loop]], [[skills-system]], [[deployment-backends]], [[model-providers]], [[messaging-gateway]]

## [2026-07-01] ingest | Hermes Agent GitHub README
- Source: raw/articles/2026-07-01-hermes-agent-github.md
- Updated [[hermes-agent]], [[deployment-backends]], [[model-providers]], [[messaging-gateway]] (commands, cron, subagents, volatile stats)

## [2026-07-01] ingest | /learn skills feature (MarkTechPost)
- Source: raw/articles/2026-07-01-hermes-learn-skills.md
- Updated [[skills-system]] (/learn, SKILL.md format) and [[learning-loop]]

## [2026-07-01] ingest | Third-party overview (OpenHosst)
- Source: raw/articles/2026-07-01-hermes-agent-overview.md
- Updated [[learning-loop]] (five stages) and [[model-providers]] (local Ollama); flagged backend-count discrepancy

## [2026-07-01] ingest | Hermes Agent GitHub releases
- Source: raw/articles/2026-07-01-hermes-agent-releases.md
- Captured 19 GitHub releases from https://github.com/NousResearch/Hermes-Agent/releases (v0.2.0 through v0.18.0)
- Created [[release-history]], [[mixture-of-agents]], [[verification-and-goals]], [[desktop-app]], [[gateway-operations]]
- Updated [[hermes-agent]], [[model-providers]], [[skills-system]], [[learning-loop]], [[messaging-gateway]], [[deployment-backends]], and index.md
