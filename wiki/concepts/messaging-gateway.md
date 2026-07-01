---
title: Messaging Gateway
type: concept
slug: messaging-gateway
sensitivity: public
sources:
  - raw/2026-07-01-hermes-agent-docs.md
  - raw/2026-07-01-hermes-agent-github.md
updated: 2026-07-01
status: active
---

## Definition
One gateway that lets [[hermes-agent]] talk to users across many chat platforms. Started with
`hermes gateway`.

## Details
- "20+ platforms from one gateway" — named ones include Telegram, Discord, Slack, WhatsApp,
  Signal, Email, Microsoft Teams, and the CLI/terminal UI — (source: raw/2026-07-01-hermes-agent-docs.md)
- The terminal UI has multiline editing, slash-command autocomplete, and streaming tool output — (source: raw/2026-07-01-hermes-agent-github.md)

## Applies to
- [[hermes-agent]]

## Note for this project
For the management-only pilot we chose a separate web app rather than a chat platform, but this
gateway (e.g. Slack) is the ready-made alternative access path if we widen the audience.
