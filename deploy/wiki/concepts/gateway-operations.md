---
title: Gateway Operations
created: 2026-07-01
updated: 2026-07-01
type: concept
tags: [messaging, deployment, automation]
sources:
  - raw/articles/2026-07-01-hermes-agent-releases.md
confidence: medium
---

## Definition
Operational features that make the [[messaging-gateway]] more production-grade: lifecycle control,
scale-to-zero, drain coordination, relay behavior, and platform-specific reliability work. (source: raw/articles/2026-07-01-hermes-agent-releases.md)

## Details
- v0.18.0 added gateway scale-to-zero idle detection and dormant-quiesce guards, allowing an idle
  gateway to go dormant and wake back up on demand. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- External drain coordination lets restarts, migrations, and auto-updates avoid cutting off in-flight
  conversations; related changes persist transcripts on restart/shutdown drain timeouts and expose
  busy/idle status. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- Relay Phase 5/6 work added wake/idle primitives, passthrough forwarding over WebSockets,
  multi-platform-per-agent identity, and stable instance identity. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- v0.18.0 also covered cron continuations and reliability fixes, Telegram/Slack/Discord formatting,
  WhatsApp/Teams media, Signal voice-note remux, and bundled platform adapter migrations. (source: raw/articles/2026-07-01-hermes-agent-releases.md)

## Related
- [[messaging-gateway]] — user-facing gateway concept
- [[deployment-backends]] — where gateway processes run
- [[release-history]] — operational features in release chronology
