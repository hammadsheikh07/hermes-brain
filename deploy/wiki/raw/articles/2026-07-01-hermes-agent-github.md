---
source_url: https://github.com/nousresearch/hermes-agent
ingested: 2026-07-01
sha256: 62554da4489b4e8a715eda9e34e3533cc3c4588f1f2f30f814f743f53156fa9a
---

# Hermes Agent — GitHub README (capture)

- Tagline: "The agent that grows with you." "The self-improving AI agent built by Nous Research …
  the only agent with a built-in learning loop."
- **Features:**
  - Built-in learning loop that creates skills from experience and improves them during use.
  - Full terminal UI: multiline editing, slash-command autocomplete, streaming tool output.
  - Lives across platforms: Telegram, Discord, Slack, WhatsApp, Signal, and CLI.
  - Closed learning loop: agent-curated memory, autonomous skill creation, FTS5 session search.
  - Scheduled automations via a built-in cron scheduler.
  - Delegates work via isolated subagents for parallel processing.
  - Batch trajectory generation for training tool-calling models.
- **Architecture:** Python (≈82% of codebase), TypeScript/JavaScript frontend; modular dirs for
  agent core, skills, tools, providers, and messaging gateways; MCP integration.
- **Model providers:** Nous Portal (recommended, one-account setup — "300+ models"), OpenRouter,
  OpenAI, custom endpoints.
- **Install:** `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash` → `source ~/.bashrc` → `hermes`.
  Windows: `iex (irm https://hermes-agent.nousresearch.com/install.ps1)`.
- **Key commands:** `hermes model` (choose provider), `hermes gateway` (start messaging gateway),
  `hermes setup` (configuration wizard).
- **License:** MIT.
- **Repo stats (2026-06-19 snapshot — VOLATILE):** latest release v0.17.0 (v2026.6.19), 18 total
  releases, primary language Python 82.0%. Star/fork counts reported in the hundreds of
  thousands at fetch time — treat as unverified; an April 2026 source reported ~32k stars.
