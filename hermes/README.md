# Wiring Hermes to the brain

This folder holds the skill prompts Hermes uses to maintain the brain. The exact mechanism for
registering a skill depends on your Hermes version — **verify against the docs**
(https://hermes-agent.nousresearch.com/docs/). The intent below is version-agnostic.

## 1. Give Hermes access to this repo
Run Hermes with a filesystem/terminal backend whose working directory is this repository, so it
can read `raw/` + `schema.md` and read/write `wiki/`, `index.md`, `log.md`, `lint/`.

## 2. Register the three skills
Point Hermes at the prompts in `hermes/skills/`:
- `brain-ingest.md` — integrate a new `raw/` doc into the wiki
- `brain-query.md` — answer a question, cited, from the wiki only
- `brain-lint.md` — health-check the wiki and write a report

Each skill instructs Hermes to **read `schema.md` first** — that file is the operating contract.

## 3. Pick the model
Keep GPT-5.5, or switch to a free tier for the POC:
```bash
hermes model            # inspect / choose (OpenRouter / Gemini / Groq free tiers, etc.)
```
The wiki is model-agnostic; retrieval is grep, so context stays small either way.

## 4. Automate maintenance (VPS cron)
```cron
# nightly lint at 02:00
0 2 * * *  cd /path/to/hermes-brain && hermes run brain-lint   >> log.md 2>&1
# ingest anything newly synced into raw/, every hour
0 * * * *  cd /path/to/hermes-brain && python3 ingest/sync_docs.py ~/exported-docs && hermes run brain-ingest raw/*
```
(Command names above are illustrative — map them to your Hermes CLI's actual invocation.)

## 5. Query path for the web UI
Decide how `web/` reaches Hermes for queries: a Hermes HTTP API/webhook if one exists, else a
thin wrapper that shells out to the Hermes CLI. Keep **ingest/lint owned by Hermes** regardless.
See `../PLAN.md` → "Open technical question".
