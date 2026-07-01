# Brain Schema — Operating Contract

> This file is the **contract** for how the company brain is maintained. Hermes (and any
> human editor) MUST follow it. It is loaded into the agent's context for every operation.
> Pattern inspiration: Karpathy's "LLM Wiki". Keep this file short, stable, and authoritative.

## 1. The three layers

1. **`raw/` — sources (immutable).** Exported documents. The agent READS these; it never edits
   them. Each file is stamped with where it came from and when it was fetched.
2. **`wiki/` — the brain (agent-owned).** Curated markdown the agent writes and rewrites:
   `entities/`, `concepts/`, `summaries/`. This is the source of truth answers are built from.
3. **`schema.md` + `index.md` + `log.md` — control plane.** Conventions (this file), the
   catalog, and the append-only activity log.

**Golden rule:** never invent facts. Every claim in `wiki/` must trace to a `raw/` source (or be
explicitly marked `> [!inferred]`). Every answer to a user must cite the `wiki/` pages it used.

## 2. Naming & files

- One concept/entity/source = one file. **Filename = `<slug>.md`**, slug is `kebab-case`.
- Slugs are globally unique across all `wiki/` subfolders (so `[[slug]]` is unambiguous).
- `raw/` filenames are prefixed with fetch date: `YYYY-MM-DD-<slug>.md`.

## 3. Page frontmatter (required on every `wiki/` page)

```yaml
---
title: Human Readable Title
type: entity | concept | summary
slug: kebab-case-slug
sensitivity: public | internal | management | restricted
sources:
  - raw/2026-07-01-example.md
updated: 2026-07-01
status: active | stale | draft
---
```

- **`sensitivity`** drives future access control. In the management-only pilot everything is
  gated behind the UI, but tag pages honestly now so tiers can be enforced later without a rewrite.
- **`status: stale`** is set by lint when a page's sources are outdated or contradicted.

## 4. Cross-references

- Link related pages inline with **`[[slug]]`**. Link generously — a `[[slug]]` that has no page
  yet is a valid "to-be-written" marker, not an error.
- The `sources:` frontmatter list is the machine-readable link from a wiki page back to `raw/`.
- In prose, cite a source the first time it is used: `(source: raw/2026-07-01-example.md)`.

## 5. Page templates

### entity (`wiki/entities/<slug>.md`)
A person, team, product, customer, vendor, or system.
```
## Summary
One paragraph: what/who this is and why it matters.
## Key facts
- fact — (source: raw/...)
## Relationships
- Reports to / owns / uses [[other-slug]]
## Open questions
- ...
```

### concept (`wiki/concepts/<slug>.md`)
A process, policy, decision, metric, or domain idea.
```
## Definition
What it is, in one paragraph.
## Details
- point — (source: raw/...)
## Applies to
- [[entity-or-concept-slug]]
## History / changes
- 2026-07-01: established — (source: raw/...)
```

### summary (`wiki/summaries/<slug>.md`)
Exactly one per `raw/` source — the agent's reading notes for that document.
```
## Source
raw/2026-07-01-<slug>.md — <original title>, fetched 2026-07-01, from <origin>.
## TL;DR
3–6 bullets.
## Entities & concepts touched
- [[slug]], [[slug]] (pages created/updated during ingest)
## Verbatim anchors
- "short exact quote worth citing later"
```

## 6. Operation: INGEST

Trigger: a new or changed file appears in `raw/`.
1. Read the source fully.
2. Create/replace `wiki/summaries/<source-slug>.md` (the reading notes).
3. Decide which **entities** and **concepts** the source touches. For each: create the page if
   missing, otherwise update it — add facts, refresh `updated:`, add `(source: ...)` citations.
4. Fix cross-references: ensure every entity/concept mentioned links via `[[slug]]`, and that
   newly created pages are linked from at least one existing page. Expect to touch ~10–15 pages.
5. Update `index.md` (add/){move entries to the right category, refresh one-line summaries).
6. Append ONE line to `log.md` (see §9).
7. Never edit `raw/`. If a source is wrong, note it on the wiki page, don't rewrite the source.

## 7. Operation: QUERY

Trigger: a user question (via web UI / Hermes gateway).
1. Search the brain: scan `index.md`, then `ripgrep` across `wiki/` for the key terms
   (`bin/query.sh "<terms>"`). Retrieval is grep — keep context small.
2. Read the handful of most relevant `wiki/` pages (follow `[[slug]]` links one hop as needed).
3. Answer **only** from what those pages say. **Hard rule:** if the brain doesn't contain the
   answer, say *"That's not in the brain yet"* and (optionally) suggest what to ingest. Never
   fill gaps with model priors.
4. **Cite** every claim: list the `wiki/` pages used, which trace to `raw/` sources.
5. If the synthesized answer is a genuinely reusable insight, offer to file it back as a new
   `wiki/concepts/` page (this is how the brain compounds).

## 8. Operation: LINT

Trigger: `cron` (e.g. nightly) or on demand. Writes a report to `lint/YYYY-MM-DD.md`.
Checks:
- **Contradictions** — two pages asserting incompatible facts.
- **Stale claims** — `updated:` older than 90 days, or sources superseded by a newer one.
- **Orphans** — pages not linked from any other page and/or missing from `index.md`.
- **Broken links** — `[[slug]]` with no matching page (list as "to write").
- **Gaps** — entities/concepts referenced but never fleshed out; suggested research directions.
`bin/lint.sh` performs the cheap deterministic subset (orphans, broken links, missing-in-index,
stale dates) with no LLM. The agent's lint pass is a superset that also reasons about contradictions.

## 9. `log.md` line format (append-only, one line per action)

```
YYYY-MM-DD | <op> | <target-slug> | <what changed> | sources: raw/...
```
`<op>` ∈ `ingest | query | lint | edit`. Keep it greppable; never rewrite past lines.

## 10. `index.md` format

Grouped by category (`## Entities`, `## Concepts`, `## Summaries`). One line per page:
```
- [[slug]] — one-line summary  ·  sensitivity  ·  updated YYYY-MM-DD
```

## 11. Guardrails (non-negotiable)

- Cite or say "not in the brain." No unsourced claims in answers.
- `raw/` is immutable. `wiki/` is disposable and rebuildable from `raw/`.
- Respect `sensitivity`. Don't surface `management`/`restricted` pages outside their audience.
- Prefer updating an existing page over creating a near-duplicate; dedupe by slug first.
