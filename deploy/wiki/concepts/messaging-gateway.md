---
title: Messaging Gateway
created: 2026-07-01
updated: 2026-07-01
type: concept
tags: [messaging, integration]
sources:
  - raw/articles/2026-07-01-hermes-agent-docs.md
  - raw/articles/2026-07-01-hermes-agent-github.md
confidence: high
---

## Definition
One gateway that lets [[hermes-agent]] talk to users across many chat platforms. Started with
`hermes gateway`.

## Details
- "20+ platforms from one gateway" — named ones include Telegram, Discord, Slack, WhatsApp,
  Signal, Email, Microsoft Teams, and the CLI/terminal UI — (source: raw/articles/2026-07-01-hermes-agent-docs.md)
- The terminal UI has multiline editing, slash-command autocomplete, and streaming tool output — (source: raw/articles/2026-07-01-hermes-agent-github.md)

## Related
- [[hermes-agent]] — the agent behind the gateway
- [[deployment-backends]] — where the gateway process runs

## Note
For a management-only pilot, a dedicated web app is one option; this gateway (e.g. Slack) is the
ready-made alternative if the audience widens.
