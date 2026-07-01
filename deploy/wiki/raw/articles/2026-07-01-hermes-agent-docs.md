---
source_url: https://hermes-agent.nousresearch.com/docs/
ingested: 2026-07-01
sha256: a453f6feb599acefc68a5b99d60d6689aa449a25f5a74357c1137f5e3c7a0f3f
---

# Hermes Agent — Official Docs (capture)

- Hermes Agent is "the self-improving AI agent built by Nous Research. The only agent with a
  built-in learning loop — it creates skills from experience, improves them during use, nudges
  itself to persist knowledge, and builds a deepening model of who you are across sessions."
- Built by **Nous Research** (the lab behind the Hermes, Nomos, and Psyche models).
- **Learning loop:** "agent-curated memory with periodic nudges, autonomous skill creation, skill
  self-improvement during use, FTS5 cross-session recall with LLM summarization."
- **Skills:** procedural memory the agent creates and reuses; compatible with agentskills.io.
- **Memory:** persistent, growing across sessions, with dialectic user modeling.
- **Deployment:** "6 terminal backends: local, Docker, SSH, Daytona, Singularity, Modal."
- **Access:** "20+ platforms from one gateway" — Telegram, Discord, Slack, WhatsApp, Signal,
  Teams, and others.
- **MCP:** connects to Model Context Protocol servers.
- **Web tools:** search, extraction, browsing, vision, image generation, TTS.
- **Model providers:** Nous Portal, OpenRouter, OpenAI, or any custom endpoint.
- **Install:** `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash`
  (Linux/macOS/WSL2/Android); Windows PowerShell: `iex (irm https://hermes-agent.nousresearch.com/install.ps1)`.
  A desktop installer is also available.
- **License:** MIT.
- **Cost:** Daytona and Modal offer serverless persistence — the environment hibernates when idle,
  "costing nearly nothing."
