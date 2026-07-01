# hermes-brain

A **company brain** for [Hermes Agent](https://github.com/nousresearch/hermes-agent) — a
persistent, human-curatable knowledge base that Hermes maintains and answers questions from,
following Karpathy's **LLM Wiki** pattern (a compounding markdown wiki instead of per-query RAG).

Status: **proof of concept**, management-only pilot. See [PLAN.md](./PLAN.md) for the full plan
and the free-resource feasibility analysis (verdict: workable).

**Implementation docs** (build guides, one per half):
- [docs/brain-implementation.md](./docs/brain-implementation.md) — v1: the brain (wiki + Hermes ingest/query/lint)
- [docs/web-ui-implementation.md](./docs/web-ui-implementation.md) — v2: the web app (management chat + dashboard)

## How it works

```
raw/     → immutable source documents (docs exported to markdown)
wiki/    → the brain: agent-curated entities / concepts / summaries (the source of truth)
schema.md → the operating contract Hermes follows (page templates + ingest/query/lint workflows)
index.md → catalog of every wiki page          log.md → append-only activity log
lint/    → generated health reports            bin/   → free ripgrep query + deterministic lint
hermes/  → skill prompts that point Hermes at this repo
ingest/  → scripts that pull docs into raw/     web/  → management chat UI (POC)
```

Three operations, all defined in [`schema.md`](./schema.md):

- **ingest** — a new doc lands in `raw/` → Hermes writes a summary, updates the entity/concept
  pages it touches, fixes cross-references, and updates `index.md` + `log.md`.
- **query** — a question comes in → Hermes greps the wiki, reads the relevant pages, and answers
  **with citations**. If the brain doesn't know, it says so (no hallucination).
- **lint** — periodic health check for contradictions, stale claims, orphans, and broken links.

## Try it (no LLM needed, $0)

```bash
# search the brain the same way Hermes does
bin/query.sh "remote work"

# run the deterministic health check (orphans, broken [[links]], stale pages)
bin/lint.sh

# stage a document for ingestion (stamps it with source + fetch date)
python3 ingest/sync_docs.py /path/to/exported/docs
```

Then point Hermes at this repo (see [`hermes/README.md`](./hermes/README.md)) to run the full
LLM-driven ingest / query / lint.

## Seed content

The `Acme Co.` pages under `wiki/` and the files in `raw/` are **sample data** to validate the
schema end-to-end. Delete them and ingest your own docs when you're ready.
