---
title: Model Providers
type: concept
slug: model-providers
sensitivity: public
sources:
  - raw/2026-07-01-hermes-agent-github.md
  - raw/2026-07-01-hermes-agent-overview.md
updated: 2026-07-01
status: active
---

## Definition
The LLM backends [[hermes-agent]] can run on. Providers are switchable with `hermes model` — no
code changes, no lock-in.

## Details
- Official routes: **Nous Portal** (recommended, one-account, "300+ models"), **OpenRouter**,
  **OpenAI**, or any **custom endpoint** — (source: raw/2026-07-01-hermes-agent-github.md)
- A third-party overview adds concrete examples reachable via those routes: Claude, GPT-4, Gemini,
  and **local Ollama** (Llama 3, Mistral, Qwen 2.5) — (source: raw/2026-07-01-hermes-agent-overview.md)
- Local LLMs: "at least 16GB VRAM is recommended … with 7B+ parameter models" — a small VPS
  usually can't run these well — (source: raw/2026-07-01-hermes-agent-overview.md)
- Nous Portal is operated by [[nous-research]].

## Applies to
- [[hermes-agent]]

## Note for this project
The brain currently runs on GPT-5.5, but for a free POC it can switch here to an OpenRouter/Nous
Portal free tier via `hermes model`. Retrieval is grep, so context stays small regardless of model.
