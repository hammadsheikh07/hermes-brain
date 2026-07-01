# Plan: A "Company Brain" for Hermes — POC (LLM-Wiki pattern)

## Context

We have **Hermes Agent** (NousResearch, open source) on a VPS, authed to GPT-5.5. The goal
is a **shared, inspectable company brain** Hermes maintains and answers from, so management
can ask questions and get cited, trustworthy interpretations — as a **proof of concept**
that must stand up on **free / already-paid resources**.

Design follows Karpathy's **LLM Wiki** pattern: not classic RAG (which re-discovers facts
per query and needs a vector DB), but a **persistent, compounding markdown wiki** the LLM
curates — three ops (**ingest / query / lint**), an `index.md`, and an append-only `log.md`.
Hermes is the tireless maintainer + interface; the wiki is the human-curatable source of truth.

**Decisions locked in:** pure markdown wiki in git · docs & wikis as first source · web chat
UI · management-only pilot · advisory answers with citations (no autonomous actions in v1).
The brain repo **is this directory** (`hermes-brain/`).

## Is it workable on free resources? — verdict: **Yes.**

The **pure-markdown decision is what makes it cheap**: no vector DB to host, retrieval is
`ripgrep` + `index.md`, so context per query stays small and token spend is minimal. The only
non-free element is LLM inference — which we already pay (GPT-5.5) or can zero out.

| Component | POC choice | Free? | Note |
|---|---|---|---|
| Brain storage | Markdown in git (this dir) | ✅ | GitHub free private repo |
| Retrieval | `ripgrep` + `index.md`, no vector DB | ✅ | pure-markdown avoids all embedding cost |
| Agent runtime | Hermes (open source) | ✅ | already installed |
| Ingestion | folder of exported `.md` (or Notion/GDrive free API) | ✅ | no embedding step |
| Web UI | Next.js self-hosted on VPS (or reuse Hermes web UI) | ✅ | open source |
| Scheduling (lint/ingest) | `cron` on the VPS | ✅ | |
| Hosting | existing VPS | ✅ | sunk cost |
| **LLM inference** | GPT-5.5 **or** free model | ⚠️ | only variable cost — see below |

**The LLM is the only lever.** Two options, both viable:
- **Use existing GPT-5.5** (recommended for POC quality). At pilot scale — grep = small
  context, management-only = low query volume — spend is a few dollars, not a real barrier.
- **Zero marginal cost**: Hermes swaps models with `hermes model` (OpenRouter/Gemini/Groq
  free tiers → $0, rate-limited but fine for a pilot). Local Ollama only if the VPS has the
  RAM/GPU — a $5 VPS won't run a good model well, so prefer a hosted free tier.

**Honest caveats:** free API tiers are rate-limited (fine for a few management users); the
**ingest** op touches 10–15 pages per source so it's the token-heaviest step, but it's batch
and infrequent; quality depends on **curation + the lint step**, not on spend.

## Repo layout (this directory = the brain repo)

```
hermes-brain/               # git repo
├── raw/                    # Layer 1 — immutable source dumps (docs exported to .md)
├── wiki/                   # Layer 2 — LLM-owned, curated markdown
│   ├── entities/           #   people, teams, products, customers
│   ├── concepts/           #   processes, policies, domain concepts
│   └── summaries/          #   one page per raw source
├── schema.md               # Layer 3 — conventions + ingest/query/lint workflows
├── index.md                # catalog by category: links + 1-line summaries + metadata
├── log.md                  # append-only, parseable activity log
├── lint/                   # generated health reports
├── ingest/                 # sync scripts (docs → raw/, then trigger Hermes ingest)
├── hermes/                 # Hermes skill prompts / config pointing at this repo
├── bin/                    # free POC tooling (ripgrep query + deterministic lint)
└── web/                    # management chat UI (starts as a thin page)
```
Cross-refs use `[[wikilink]]` style so one ingest pass can update many related pages consistently.
`schema.md` is loaded as Hermes' operating contract — it keeps maintenance disciplined.

## Build steps

1. **Scaffold + `schema.md`** — page templates, naming, `[[wikilink]]` rules, and the three
   workflows. Hand-seed a few wiki pages from sample docs to validate the schema.
2. **Wire Hermes to this repo** — point its file/terminal backend here; add skill prompts
   `hermes/skills/brain-{ingest,query,lint}.md` referencing `schema.md`. Pick model via `hermes model`.
3. **Ingestion connector** — `ingest/` pulls exported markdown into `raw/` (stamped with source
   + fetch date), then triggers the Hermes ingest op. Add Notion/GDrive later, once quality holds.
4. **Query path + web UI** — start with Hermes' built-in UI / a thin page; harden into an
   auth-gated (email allowlist) management UI with cited answers + an interpretation dashboard.
5. **Automate** — `cron` the lint (and periodic ingest) on the VPS.

## Open technical question (resolve at implementation)

**How the web UI reaches Hermes for queries.** Check `hermes-agent.nousresearch.com/docs` for
an HTTP API/webhook. If present → UI calls it. If not → a thin service that shells out to the
Hermes CLI or runs the query loop directly (read this repo + call the model), reusing `schema.md`.
Keep **ingest/lint owned by Hermes** regardless; only the query path might need the wrapper.

## Verification (end-to-end)

- **Ingest**: drop a known doc in `raw/`, run ingest → a `summaries/` page + updated
  entity/concept pages + new `index.md`/`log.md` entries appear, and `[[wikilinks]]` resolve.
- **Query**: ask something the doc answers → cited answer to the right page; ask something **not**
  in the brain → it says so (no hallucination).
- **Lint**: plant a contradiction across two pages → lint flags it. `bin/lint.sh` catches the
  structural issues (orphans, broken links) for free without the LLM.
- **Web UI**: allowed management user gets in, non-member is blocked; citations resolve.
- **Cost check**: run 10 representative queries + 1 full ingest, record token spend to confirm
  the free/near-free assumption holds at our corpus size.

## Sources
- Karpathy "LLM Wiki" gist — the pattern this builds on.
- Hermes Agent docs: https://hermes-agent.nousresearch.com/docs/ · repo: https://github.com/nousresearch/hermes-agent
