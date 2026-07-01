# Implementation: The Brain

How to build and operate the company brain — the persistent markdown knowledge base Hermes
maintains and answers from. This is the backend/knowledge half. The access surface is covered
separately in [web-ui-implementation.md](./web-ui-implementation.md).

Authoritative contract: [`../schema.md`](../schema.md). This doc is the *how-to*; `schema.md`
is the *rules*. If they ever disagree, `schema.md` wins.

---

## 1. What we're building

A three-layer markdown wiki, in git, that **compounds** over time (Karpathy's LLM-Wiki pattern):

```
raw/    immutable source docs        (Hermes reads, never edits)
wiki/   curated entities/concepts/summaries   (Hermes owns; the source of truth)
control schema.md · index.md · log.md · lint/  (conventions, catalog, log, health)
```

Three operations run against it: **ingest**, **query**, **lint** (schema.md §6–§8).

Everything in `wiki/` is disposable — it can be rebuilt from `raw/` by re-running ingest. That
property is what makes the brain safe to iterate on.

---

## 2. Current state (already scaffolded)

| Piece | Path | Status |
|---|---|---|
| Operating contract | `schema.md` | ✅ written |
| Sources | `raw/2026-07-01-hermes-*.md` | ✅ 4 real web-sourced captures (Hermes Agent) |
| Wiki | `wiki/{entities,concepts,summaries}/` | ✅ 11 real, cited pages |
| Catalog / log | `index.md`, `log.md` | ✅ |
| Hermes skills | `hermes/skills/brain-{ingest,query,lint}.md` | ✅ prompts written |
| Free query tool | `bin/query.sh` | ✅ ripgrep retrieval |
| Free lint tool | `bin/lint.sh` | ✅ deterministic checks |
| Doc staging | `ingest/sync_docs.py` | ✅ idempotent, stamps provenance |

What's left is **wiring Hermes** to run the LLM half of ingest/query/lint, replacing seed data,
and automating maintenance.

---

## 3. Data model (enforced by lint)

Every `wiki/` page carries frontmatter (schema.md §3):

```yaml
---
title: Human Title
type: entity | concept | summary
slug: kebab-case-slug          # MUST equal the filename
sensitivity: public | internal | management | restricted
sources: [raw/2026-07-01-x.md] # provenance
updated: 2026-07-01
status: active | stale | draft
---
```

- **Cross-refs**: `[[slug]]` inline. Slugs are globally unique across `wiki/` subfolders.
- **Citations in prose**: `(source: raw/...)` the first time a source is used.
- **`index.md`** = catalog, grouped by type; **`log.md`** = append-only `date | op | slug | what | sources`.
- `bin/lint.sh` checks all of the above deterministically (broken links, orphans, missing-from-index,
  slug/filename mismatch, stale dates). Keep it green.

---

## 4. Operation: INGEST

**Goal:** a new doc in `raw/` becomes fully integrated wiki knowledge.

Pipeline:
```
export docs → ingest/sync_docs.py → raw/ (stamped) → Hermes brain-ingest skill → wiki/ updated
```

1. **Stage** (free, offline): `python3 ingest/sync_docs.py ~/exported-docs`
   Copies `*.md` into `raw/` with a provenance header, dated filename, idempotent on re-run.
2. **Curate** (LLM, Hermes): run the `brain-ingest` skill on the new `raw/` files. Per its prompt
   it writes a `summaries/` page, creates/updates the entity & concept pages the source touches,
   fixes `[[slug]]` cross-refs (~10–15 pages/touch), and updates `index.md` + `log.md`.
3. **Verify**: `bin/lint.sh` must stay clean; spot-check the new pages cite real sources.

**Acceptance:** drop a known doc → a summary + updated entity/concept pages + new index/log lines
appear, and every claim traces to the source.

---

## 5. Operation: QUERY

**Goal:** answer a question from the wiki only, with citations, or admit ignorance.

1. **Retrieve** (free): `bin/query.sh "<terms>"` — ripgrep over `wiki/` + scan `index.md`.
2. **Read & synthesize** (LLM, Hermes `brain-query` skill): read the top pages, follow `[[slug]]`
   one hop, answer from those pages only.
3. **Hard rule**: not in the wiki → *"That's not in the brain yet."* No model priors. Always cite.

This is the operation the web UI calls. **Query API contract** (shared with the web doc):

```
POST /query
  → { "question": string, "audience": "management" }        # auth via Bearer token
  ← { "answer": string,
      "citations": [ { "slug": "model-providers", "raw": "raw/2026-07-01-hermes-agent-github.md" } ],
      "notInBrain": boolean }
```

Two ways to implement the endpoint (decide against the Hermes docs — see §7):
- **A. Hermes API/webhook** if one exists → thin proxy that invokes the `brain-query` skill.
- **B. Thin wrapper** (FastAPI/Node) on the VPS that runs the loop directly:
  `bin/query.sh` for retrieval → send matched pages + question to the model → return the JSON above.
  Reuses `schema.md` §7 as the system prompt. ~100 lines; fully free besides model tokens.

---

## 6. Operation: LINT

**Goal:** keep the brain trustworthy as it grows. This is the step that prevents wiki-rot.

- **Free pass**: `bin/lint.sh` — orphans, broken links, missing-from-index, slug mismatch, stale dates.
- **LLM pass** (Hermes `brain-lint` skill): contradictions, superseded claims, gaps → writes
  `lint/YYYY-MM-DD.md`, sets `status: stale` on affected pages (flags, never deletes), appends to `log.md`.
- **Cadence**: nightly cron (§7). A human reviews the report — lint surfaces, humans curate.

---

## 7. Wiring Hermes (the remaining work)

See [`../hermes/README.md`](../hermes/README.md) for the version-specific bits; verify against
https://hermes-agent.nousresearch.com/docs/.

1. **Filesystem access**: run Hermes with a file/terminal backend whose CWD is this repo.
2. **Register skills**: point Hermes at `hermes/skills/brain-{ingest,query,lint}.md`. Each tells
   Hermes to read `schema.md` first.
3. **Model**: keep GPT-5.5 (`hermes model`) or switch to a free tier for the POC — retrieval is
   grep so context stays small either way.
4. **Automate** (VPS cron):
   ```cron
   0 * * * *  cd /path/hermes-brain && python3 ingest/sync_docs.py ~/exported-docs && hermes run brain-ingest raw/*
   0 2 * * *  cd /path/hermes-brain && hermes run brain-lint
   ```
   (Map `hermes run ...` to your CLI's actual invocation.)

---

## 8. Cost / free-resource notes

- Storage, retrieval (grep), lint, staging, hosting: **$0** (all local/CLI).
- Only variable cost = **model tokens**. Ingest is the heavy step (touches many pages) but is
  batch/infrequent; query is cheap (small grep'd context). Free-tier models via `hermes model`
  drive marginal cost to $0 at the price of rate limits (fine for the pilot).

---

## 9. Milestones

1. **M1 — Hermes ingest** works on one real doc; output matches the schema. *(the seed corpus is already real Hermes-Agent data — swap in your own docs here)*
2. **M2 — Query** endpoint live (option A or B) returning the contract JSON; passes the "not in brain" test.
3. **M3 — Lint** on cron writing reports; a human reviews the first one.
4. **M4 — Real source connector** (Notion/GDrive → `raw/`) once M1 quality holds.

---

## 10. Risks

- **Wiki-rot** if lint isn't run/reviewed → make it a habit, not an afterthought (biggest risk).
- **Hallucination** → the "cite or say you don't know" rule is enforced in `schema.md` and the
  `brain-query` skill; keep it there.
- **Duplication** → dedupe by slug on ingest; prefer updating over new near-duplicate pages.
- **Sensitivity leaks** → honor the `sensitivity` field before per-role access exists.
