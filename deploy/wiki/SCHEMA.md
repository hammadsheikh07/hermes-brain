# Wiki Schema

## Domain
Hermes Agent and the self-hosted AI-agent ecosystem — the platform, its maker, and the concepts
needed to run and reason about it (learning loop, skills, deployment, models, messaging).

## Conventions
- File names: lowercase, hyphens, no spaces (e.g., `learning-loop.md`)
- Every wiki page starts with YAML frontmatter (see below)
- Use `[[wikilinks]]` to link between pages (minimum 2 outbound links per page)
- When updating a page, bump the `updated` date
- Every new page must be added to `index.md` under the correct section
- Every action must be appended to `log.md`
- Cite claims inline as `(source: raw/articles/<file>.md)`

## Frontmatter
```yaml
---
title: Page Title
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | summary
tags: [from taxonomy below]
sources: [raw/articles/source-name.md]
confidence: high | medium | low        # optional; how well-supported the claims are
contested: true                        # optional; set on unresolved contradictions
---
```

### raw/ Frontmatter
Raw sources carry `source_url`, `ingested`, and `sha256` (over the body) so re-ingests detect drift.

## Tag Taxonomy
Add a tag here BEFORE using it. Every tag on a page must appear below.
- Entities: `agent`, `product`, `company`, `lab`, `model`, `tool`
- Capabilities: `learning`, `skills`, `memory`, `deployment`, `model-routing`, `messaging`, `automation`, `mcp`, `integration`
- Meta: `open-source`, `license`, `pricing`, `comparison`, `volatile`

## Page Thresholds
- Create a page when an entity/concept appears in 2+ sources OR is central to one source.
- Add to an existing page for passing mentions; don't create thin pages.
- Split pages over ~200 lines.

## Update Policy
When new info conflicts with existing content: prefer newer sources; if genuinely contradictory,
record both with dates + sources, set `contested: true`, and flag in the next lint report. Volatile
figures (star counts, versions) are tagged `volatile` and marked "verify live."

## Guardrails
- Never modify files in `raw/` — sources are immutable; corrections live on wiki pages.
- Orient before acting: read this file, `index.md`, and recent `log.md`.
- Cite or say "not in the wiki." No unsourced claims.
