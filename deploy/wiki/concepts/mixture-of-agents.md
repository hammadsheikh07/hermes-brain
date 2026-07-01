---
title: Mixture-of-Agents
author: Hermes Agent
created: 2026-07-01
updated: 2026-07-01
type: concept
tags: [model-routing, model]
sources:
  - raw/articles/2026-07-01-hermes-agent-releases.md
confidence: medium
---

## Definition
Mixture-of-Agents (MoA) is a [[hermes-agent]] model-routing mode where multiple reference models
produce outputs and an aggregator model synthesizes the final answer. In v0.18.0 it became a
first-class provider/model surface rather than only a toggle. (source: raw/articles/2026-07-01-hermes-agent-releases.md)

## Details
- Named MoA presets appear as selectable virtual models under a `moa` provider in model pickers
  across CLI, TUI, desktop, and gateway. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- `/moa` became one-shot sugar for running one prompt through the default preset, while persistent
  switching uses the normal model picker. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- Reference model outputs are displayed as labelled blocks, and the aggregator response streams live
  in CLI, TUI, and desktop. (source: raw/articles/2026-07-01-hermes-agent-releases.md)
- Optional JSONL trace persistence (`moa.save_traces`) supports debugging and evaluation. (source: raw/articles/2026-07-01-hermes-agent-releases.md)

## Related
- [[model-providers]] — MoA is exposed through provider/model selection
- [[hermes-agent]] — product feature owner
- [[release-history]] — release chronology
