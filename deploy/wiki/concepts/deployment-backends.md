---
title: Deployment Backends
created: 2026-07-01
updated: 2026-07-01
type: concept
tags: [deployment, open-source]
sources:
  - raw/articles/2026-07-01-hermes-agent-docs.md
  - raw/articles/2026-07-01-hermes-agent-overview.md
  - raw/articles/2026-07-01-hermes-agent-releases.md
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
- Release history adds operational detail: Docker container support in v0.6.0; native Modal SDK
  backend in v0.5.0; remote-backend skills/credentials in v0.6.0; remote desktop-to-gateway sign-in
  in v0.16.0; and [[gateway-operations]] scale-to-zero/drain in v0.18.0. (source: raw/articles/2026-07-01-hermes-agent-releases.md)

## Related
- [[hermes-agent]] — what gets deployed
- [[messaging-gateway]] — how a deployed instance reaches users
- [[gateway-operations]] — lifecycle and production operation details

## Note
This wiki's own host is the local/SSH path — Hermes and the brain live on the same VPS.
