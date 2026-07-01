---
title: Verification and Goals
created: 2026-07-01
updated: 2026-07-01
type: concept
tags: [automation, learning]
sources:
  - raw/articles/2026-07-01-hermes-agent-releases.md
confidence: medium
---

## Definition
Verification and goals are the parts of [[hermes-agent]] that make completion evidence-based rather
than assertion-based: the agent records proof from checks and judges standing goals against explicit
completion contracts. (source: raw/articles/2026-07-01-hermes-agent-releases.md)

## Details
- v0.18.0 describes completion contracts for `/goal`: the user states what "done" means, and the
  standing-goal loop evaluates evidence against that contract. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- `/goal wait <pid>` lets the standing-goal loop park on a background process instead of repeatedly
  prompting the agent. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- Coding verification gained a profile-scoped evidence ledger of canonical project checks detected
  by coding context, with gateway exposure of verification status. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- A `pre_verify` hook and coding guidance config allow custom checks; verify-on-stop defaults were
  tuned and gated by surface. (source: raw/articles/2026-07-01-hermes-agent-releases.md)

## Related
- [[learning-loop]] — uses outcomes and evidence as part of improvement
- [[hermes-agent]] — implements these mechanisms
- [[release-history]] — v0.18.0 made this a headline theme
