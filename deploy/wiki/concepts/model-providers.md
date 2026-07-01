---
title: Model Providers
created: 2026-07-01
updated: 2026-07-01
type: concept
tags: [model-routing, model, deployment]
sources:
  - raw/articles/2026-07-01-hermes-agent-github.md
  - raw/articles/2026-07-01-hermes-agent-overview.md
  - raw/articles/2026-07-01-hermes-agent-releases.md
confidence: high
---

## Definition
The LLM backends [[hermes-agent]] can run on. Providers are switchable with `hermes model` — no
code changes, no lock-in.

## Details
- Official routes: **Nous Portal** (recommended, one-account, "300+ models"), **OpenRouter**,
  **OpenAI**, or any **custom endpoint** — (source: raw/articles/2026-07-01-hermes-agent-github.md)
- A third-party overview adds concrete examples reachable via those routes: Claude, GPT-4, Gemini,
  and **local Ollama** (Llama 3, Mistral, Qwen 2.5) — (source: raw/articles/2026-07-01-hermes-agent-overview.md)
- Local LLMs: "at least 16GB VRAM is recommended … with 7B+ parameter models" — a small VPS
  usually can't run these well — (source: raw/articles/2026-07-01-hermes-agent-overview.md)
- v0.18.0 makes [[mixture-of-agents]] presets selectable as virtual models under provider `moa`, with
  labelled reference-model outputs and streaming aggregator answers. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- v0.18.0 adds Google Vertex AI as a first-class Gemini provider over Vertex's OpenAI-compatible
  endpoint, auto-minting and refreshing short-lived OAuth2 access tokens from service-account JSON
  or Application Default Credentials. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- Release history also records Hugging Face, GitHub Copilot, Alibaba/DashScope, Kilo Code, OpenCode
  Zen/Go, Vercel AI Gateway, ordered fallback chains, credential pools, and custom endpoint work.
  (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- Nous Portal is operated by [[nous-research]].

## Related
- [[hermes-agent]] — the consumer of these providers
- [[nous-research]] — operator of Nous Portal
- [[mixture-of-agents]] — virtual provider/model layer

## Note
This deployment runs on `gpt-5.5` (OpenAI); a free tier can be swapped in via `hermes model`.
Wiki retrieval is grep-based, so context stays small regardless of model.
