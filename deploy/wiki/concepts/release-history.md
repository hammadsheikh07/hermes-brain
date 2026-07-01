---
title: Release History
created: 2026-07-01
updated: 2026-07-01
type: concept
tags: [product, open-source, volatile]
sources:
  - raw/articles/2026-07-01-hermes-agent-releases.md
confidence: high
---

## Definition
The public GitHub release chronology for [[hermes-agent]], captured from the repository Releases
page. It records how the product moved from its early public foundation into a multi-surface agent
platform spanning [[messaging-gateway]], [[desktop-app]], [[skills-system]], and [[model-providers]].
(source: raw/articles/2026-07-01-hermes-agent-releases.md)

## Timeline highlights
- **v0.2.0 (2026-03-12)**: first tagged release after v0.1.0; highlighted multi-platform messaging,
  MCP client, the skills ecosystem, centralized provider routing, ACP server, CLI theming,
  git-worktree isolation, filesystem checkpoints/rollback, and 3,289 tests. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- **v0.3.0 (2026-03-17)**: streaming, plugins, provider overhaul, native Anthropic, smart approvals,
  `/stop`, Honcho memory, voice mode, concurrent tools, PII redaction, CDP browser attach, Vercel AI
  Gateway, ACP server, persistent shell mode, and OPD. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- **v0.4.0 (2026-03-23)**: OpenAI-compatible API server, six more messaging adapters, `@file`/`@url`
  context references, four more inference providers, MCP server management, prompt caching,
  compression overhaul, and streaming by default. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- **v0.5.0 (2026-03-28)**: Hugging Face provider, `/model` command overhaul, Telegram private chat
  topics, native Modal SDK backend, plugin lifecycle hooks, GPT tool-use guidance, Nix flake, and
  supply-chain hardening. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- **v0.6.0 (2026-03-30)**: multi-instance Profiles, MCP server mode, Docker container, ordered
  fallback provider chains, Feishu/Lark and WeCom gateway platforms, Slack multi-workspace OAuth,
  Telegram webhook mode, Exa search, and remote-backend skills/credentials. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- **v0.15.x (2026-05-29)**: patch/hotfix cycle around dashboard loopback auth, Docker dashboard
  `--insecure`, Docker MCP command resolution, Skills page UX, and bundled plugin manifests.
  (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- **v0.16.0 (2026-06-05), "The Surface Release"**: native [[desktop-app]], remote desktop-to-gateway
  sign-in, admin dashboard, Simplified Chinese UI, leaner default skill set, NVIDIA trusted skills tap,
  Quick Setup via Nous Portal, fuzzy model picker, `/undo`, and default CLI/TUI choice. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- **v0.17.0 (2026-06-19), "The Reach Release"**: iMessage via Photon Spectrum, Raft adapter,
  stronger desktop UX, background subagents, image-to-image generation, automation blueprints,
  xAI Grok Composer model, dashboard profile builder, Skills Hub overhaul, atomic memory batches,
  secure dashboard login, official WhatsApp Business Cloud API, richer Telegram output, and curator
  cost optimization. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- **v0.18.0 (2026-07-01), "The Judgment Release"**: P0/P1 clean sweep, first-class
  [[mixture-of-agents]], evidence-based [[verification-and-goals]], `/learn` and `/journey`, background
  fan-out, desktop Projects, gateway scale-to-zero/drain, smarter self-improvement review, `/prompt`,
  Vertex AI, and a security round. (source: raw/articles/2026-07-01-hermes-agent-releases.md)

## Related
- [[hermes-agent]] — product being released
- [[nous-research]] — maintainer
- [[skills-system]] and [[model-providers]] — recurring themes across releases
