---
title: Deployment Backends
created: 2026-07-01
updated: 2026-07-01
type: concept
tags: [deployment, open-source]
sources:
  - raw/articles/2026-07-01-hermes-agent-docs.md
  - raw/articles/2026-07-01-hermes-agent-overview.md
confidence: high
---

## Definition
The execution environments ("terminal backends" / sandboxes) [[hermes-agent]] can run in, from a
laptop to serverless cloud.

## Details
- Official docs list **6 backends**: local, Docker, SSH, Daytona, Singularity, Modal — (source: raw/articles/2026-07-01-hermes-agent-docs.md)
- A third-party overview lists only **5** (omitting Daytona) — a discrepancy; trust the docs — (source: raw/articles/2026-07-01-hermes-agent-overview.md)
- Daytona and Modal offer serverless persistence/hibernation — "nearly nothing" when idle — (source: raw/articles/2026-07-01-hermes-agent-docs.md)
- Install (Linux/macOS/WSL2/Termux): `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash` — (source: raw/articles/2026-07-01-hermes-agent-docs.md)
- Windows: `iex (irm https://hermes-agent.nousresearch.com/install.ps1)`; a desktop installer also exists — (source: raw/articles/2026-07-01-hermes-agent-docs.md)

## Related
- [[hermes-agent]] — what gets deployed
- [[messaging-gateway]] — how a deployed instance reaches users

## Note
This wiki's own host is the local/SSH path — Hermes and the brain live on the same VPS.
