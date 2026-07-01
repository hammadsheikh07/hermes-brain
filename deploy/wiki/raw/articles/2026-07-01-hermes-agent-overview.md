---
source_url: https://openhosst.com/blog/hermes-agent
ingested: 2026-07-01
sha256: 35d78c052b33fe38d6fed2a85fd39ae371b5bae571941b833a28d5753892102b
---

# Hermes Agent — third-party overview (capture)

- "Open-source AI agent framework built by Nous Research and released under the MIT license."
- **Five-stage learning loop:** task execution → outcome evaluation → skill extraction → skill
  refinement → skill retrieval. Creates "reusable, named reasoning patterns — skills."
- **Memory:** persists across sessions via skill creation (abstracting successful completions),
  skill refinement (updating with use), and user modeling (preferences + decision history).
- **Model providers:** cloud APIs Claude, GPT-4, Gemini; local via Ollama (Llama 3, Mistral,
  Qwen 2.5). Local LLMs: "at least 16GB VRAM is recommended for smooth performance with 7B+
  parameter models."
- **Backends (this source lists five):** local, Docker, SSH, Singularity, Modal.
  (Official docs list six, adding Daytona.)
- **Messaging:** Telegram, Discord, Slack, WhatsApp, Signal, Email, CLI.
- **Managed hosting (third-party, OpenHosst):** $2.99/month, 7-day free trial, durable skill
  storage, automatic updates.
- Published June 6, 2026.
