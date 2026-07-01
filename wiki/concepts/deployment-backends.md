---
title: Deployment Backends
type: concept
slug: deployment-backends
sensitivity: public
sources:
  - raw/2026-07-01-hermes-agent-docs.md
  - raw/2026-07-01-hermes-agent-overview.md
updated: 2026-07-01
status: active
---

## Definition
The execution environments ("terminal backends" / sandboxes) [[hermes-agent]] can run in, from a
laptop to serverless cloud.

## Details
- Official docs list **6 backends**: local, Docker, SSH, Daytona, Singularity, Modal — (source: raw/2026-07-01-hermes-agent-docs.md)
- A third-party overview lists only **5** (omitting Daytona) — note the discrepancy; trust the docs — (source: raw/2026-07-01-hermes-agent-overview.md)
- Daytona and Modal offer serverless persistence/hibernation — "nearly nothing" when idle — (source: raw/2026-07-01-hermes-agent-docs.md)
- Install (Linux/macOS/WSL2/Termux): `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash` — (source: raw/2026-07-01-hermes-agent-docs.md)
- Windows: `iex (irm https://hermes-agent.nousresearch.com/install.ps1)`; a desktop installer also exists — (source: raw/2026-07-01-hermes-agent-docs.md)

## Applies to
- [[hermes-agent]]

## Note for this project
Our VPS install uses the local/SSH/Docker path — the brain repo lives on the same VPS Hermes runs on.
