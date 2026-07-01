---
source_url: https://github.com/NousResearch/Hermes-Agent/releases
ingested: 2026-07-01
sha256: 97d75c0934a3d9b0de57fd00818ec259075ff96a8fa96d79c5fc3bb645f4c071
---
# Hermes Agent GitHub Releases

Source: https://github.com/NousResearch/Hermes-Agent/releases
Captured: 2026-07-01
Releases captured: 19

## Hermes Agent v0.18.0 (2026.7.1) — The Judgment Release

- Tag: `v2026.7.1`
- Published: 2026-07-01T20:08:06Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.1
- Prerelease: False

- Assets: hermes_agent-0.18.0-py3-none-any.whl.sigstore.json, hermes_agent-0.18.0.tar.gz.sigstore.json

# Hermes Agent v0.18.0 (v2026.7.1)

**Release Date:** July 1, 2026
**Since v0.17.0:** ~1,720 commits · 998 merged PRs · 2,215 files changed · ~251,000 insertions · ~41,000 deletions · **949 issues closed** · **370+ community contributors**

> **The Judgment Release.** Over the last week and a half the team put nearly all of its effort into one goal: resolve **every P0 and P1 issue and PR in the entire Hermes Agent repo** — and as of this release, **100% of them are closed.** Zero open P0s. Zero open P1s. That's **~700 highest-priority items** cleared as part of **~1,950 total issues and PRs closed** this window. We intend to keep P0/P1 at zero from here on.
>
> On top of that clean-sweep, v0.18.0 is about how *well* Hermes thinks and how it *knows when its work is actually done*. Mixture-of-Agents became a first-class citizen — named ensembles of models you can pick like any other model, with every reference model's reasoning shown to you and the aggregator's answer streamed live. The agent learned to verify its own work against evidence instead of vibes, `/goal` gained completion contracts, and `/learn` + `/journey` turned self-improvement into something you can see and steer. Underneath, the gateway became genuinely deployable-at-scale (scale-to-zero, drain coordination), the desktop grew first-class coding projects and a playable memory graph, and subagents can now fan out in the background.

## 🎯 The P0/P1 Clean Sweep — 100% resolved

This is the release headline. For a week and a half the team hammered the priority backlog day and night, and every single P0 and P1 across the whole repo is now closed:

| Priority | Issues closed | PRs merged |
|---|---|---|
| **P0** (critical) | 3 | 8 |
| **P1** (high) | 493 | 188 |
| **Total** | **496** | **196** |

That's **~692 highest-priority items resolved** in twelve days — and at the moment the sweep completed, the open P0/P1 count hit **0 across the entire repo.** The final cluster to fall was the interrupt-protected-compression sibling-fork bug (issue #56391) and its fix (#56416), closed on an all-nighter right before this release cut.

Special shoutout to **@kshitijk4poor**, who burned through the priority backlog day and night alongside the core team — the cron reliability wave, the compression-fork fix, the credential-exfil hardening, and a huge share of the P1 closures are his.

We're keeping P0/P1 at **0** from here forward. 🫡

## ✨ Highlights

- **Mixture-of-Agents is now a first-class model you can pick** — MoA used to be a mode you toggled; now every named MoA preset shows up as a selectable model under a `moa` provider, right alongside Claude, GPT, and Grok in every model picker (CLI, TUI, desktop, gateway). Pick "my-council" the same way you'd pick any model, and Hermes routes your prompt through that ensemble automatically. An ensemble of frontier models deliberating on your hardest questions is now one selection away, on every surface. ([#46081](https://github.com/NousResearch/hermes-agent/pull/46081), [#53548](https://github.com/NousResearch/hermes-agent/pull/53548), [#53561](https://github.com/NousResearch/hermes-agent/pull/53561) — @teknium1)

- **See every model's reasoning, then watch the answer stream in** — When a MoA ensemble runs, each reference model's full output now renders as its own labelled block — you can read what GPT-5 thought, what Claude thought, and what Grok thought, before the aggregator synthesizes them into one answer. And that final answer now streams to you live instead of appearing all at once after a long silence. This works in the CLI, the TUI, and the desktop app. You get to watch the committee deliberate, not just read the verdict. ([#53793](https://github.com/NousResearch/hermes-agent/pull/53793), [#53855](https://github.com/NousResearch/hermes-agent/pull/53855), [#55625](https://github.com/NousResearch/hermes-agent/pull/55625), [#56101](https://github.com/NousResearch/hermes-agent/pull/56101) — @teknium1)

- **The agent verifies its own work — "done" means proven, not claimed** — Hermes now records verification evidence for coding work and can decide it's finished by actually running your project's checks, not by asserting success. `/goal` gained **completion contracts**: you state what "done" looks like, and the standing-goal loop judges completion against that evidence instead of stopping when the model feels like it. There's a `pre_verify` hook for wiring in custom checks and a one-time migration that tunes the defaults sensibly. The difference between "I think I fixed it" and "the tests pass, here's proof." ([#50501](https://github.com/NousResearch/hermes-agent/pull/50501), [#52285](https://github.com/NousResearch/hermes-agent/pull/52285), [#55413](https://github.com/NousResearch/hermes-agent/pull/55413), [#53552](https://github.com/NousResearch/hermes-agent/pull/53552) — @teknium1, @OutThisLife)

- **`/learn` — turn anything into a reusable skill by describing it** — Run `/learn <anything>` and Hermes distills a reusable skill out of whatever you point it at — a directory, a URL, or just the workflow you walked it through five minutes ago. It writes the skill to the standards in your CONTRIBUTING.md automatically. The next time you need that workflow, it's already there. Teaching Hermes a new trick is now a single command, not a manual skill-authoring session. ([#51506](https://github.com/NousResearch/hermes-agent/pull/51506), [#52372](https://github.com/NousResearch/hermes-agent/pull/52372) — @teknium1)

- **`/journey` — a playable timeline of everything Hermes has learned about you** — The CLI and TUI gained `/journey`, a learning timeline that shows the memories and skills Hermes has accumulated over time — and you can edit or delete any of them right from the view. Pair it with the desktop's new **memory graph** (a top-down, playable radial timeline of memories and skills) and for the first time you can actually *see* what your agent knows, watch it grow, and prune what's wrong. Your agent's memory stops being a black box. ([#55555](https://github.com/NousResearch/hermes-agent/pull/55555), [#55859](https://github.com/NousResearch/hermes-agent/pull/55859), [#55226](https://github.com/NousResearch/hermes-agent/pull/55226) — @OutThisLife)

- **Delegate a pile of work and keep going — background fan-out** — `delegate_task` can now fan out multiple subagents that all run in the **background**: your chat is never blocked, and when every subagent finishes, their results come back as a single consolidated turn. Kick off "research these five competitors in parallel" or "audit these three modules," then carry on with something else while a small fleet works. When it's all done, you get one clean summary instead of babysitting each one. ([#49734](https://github.com/NousResearch/hermes-agent/pull/49734) — @teknium1)

- **First-class coding Projects in the desktop app** — The desktop app gained real, per-profile **Projects** — a sidebar of your codebases, a coding rail, a review pane, git worktree management, and agent-facing project tools, all backed by a proper `project → repo → lane` model. Instead of scattered chat sessions, your coding work is organized into projects the agent understands and can act on. It's the desktop turning into an actual coding cockpit. ([#49037](https://github.com/NousResearch/hermes-agent/pull/49037), [#54385](https://github.com/NousResearch/hermes-agent/pull/54385), [#54517](https://github.com/NousResearch/hermes-agent/pull/54517) — @OutThisLife)

- **Run Hermes at scale — scale-to-zero and drain coordination** — The gateway can now go **dormant when idle** and quiesce cleanly before a restart, migration, or auto-update — without dropping in-flight conversations. A hosted or relay-only Hermes can scale to zero when nobody's talking to it and wake back up on demand, and disruptive lifecycle actions coordinate an external drain so nobody gets cut off mid-turn. Running Hermes for a team or as a hosted service just got a lot more production-grade. ([#52243](https://github.com/NousResearch/hermes-agent/pull/52243), [#52937](https://github.com/NousResearch/hermes-agent/pull/52937), [#54824](https://github.com/NousResearch/hermes-agent/pull/54824) — @teknium1, @benbarclay)

- **Cheaper self-improvement — smarter background review** — The post-turn self-improvement fork (the one that decides whether to save a memory or skill) now routes to an auxiliary model, digests context instead of replaying the whole conversation, and adapts its cadence — so the "learn from what just happened" loop that runs after your turns costs a fraction of what it used to. You keep the self-improvement, you stop paying full main-model price for it. ([#49252](https://github.com/NousResearch/hermes-agent/pull/49252) — @teknium1)

- **Compose your next prompt in your editor — `/prompt`** — `/prompt` opens your `$EDITOR` so you can hand-write a long, multi-line prompt in real markdown instead of fighting a one-line input box. Draft a detailed spec, a structured question, or a big paste, save, and it's queued as your next message. Small thing, huge quality-of-life win for anyone who writes Hermes more than a sentence at a time. ([#50509](https://github.com/NousResearch/hermes-agent/pull/50509) — @teknium1)

- **Google Vertex AI — Gemini through your GCP service account, no static key** — Vertex AI is now a first-class provider for Gemini models over Vertex's OpenAI-compatible endpoint. The reason a plain custom-provider setup always died mid-session is that Vertex has no static API key — every request needs a short-lived OAuth2 access token (~1h TTL) minted from a service-account JSON or Application Default Credentials. Hermes now mints and auto-refreshes those tokens for you, so if your org runs Gemini through Google Cloud, you point Hermes at your service account and it just works — no token-pasting, no mid-session expiry. ([#56363](https://github.com/NousResearch/hermes-agent/pull/56363) — @teknium1, @slawt)

- **Security round** — This window hardened several surfaces: MCP-config persistence attack surface locked down, cron `base_url` overrides that could exfiltrate provider credentials blocked, a non-reusable sentinel for prefix secrets in file reads, Slack app-level (`xapp-`) token redaction, a browser cloud-metadata floor enforced on every backend, and an `aiohttp` CVE floor across the lazy messaging paths. Fewer ways for a prompt-injected or misconfigured session to leak a credential. ([#50476](https://github.com/NousResearch/hermes-agent/pull/50476), [#56196](https://github.com/NousResearch/hermes-agent/pull/56196), [#54166](https://github.com/NousResearch/hermes-agent/pull/54166), [#56227](https://github.com/NousResearch/hermes-agent/pull/56227), [#52349](https://github.com/NousResearch/hermes-agent/pull/52349), [#56237](https://github.com/NousResearch/hermes-agent/pull/56237) — @teknium1, @kshitijk4poor, @claudlos)


---

## 🧠 Mixture-of-Agents (MoA)

MoA graduated from a mode to a first-class part of the model system this window.

- **Presets as selectable virtual models** — each named MoA preset appears as a model under provider `moa`; pick it in any model picker and Hermes routes through the ensemble ([#46081](https://github.com/NousResearch/hermes-agent/pull/46081), [#53561](https://github.com/NousResearch/hermes-agent/pull/53561), [#53775](https://github.com/NousResearch/hermes-agent/pull/53775) — @teknium1)
- **`/moa` is now one-shot sugar** — runs a single prompt through the default preset and restores your model afterward; persistent switching goes through the model picker ([#53548](https://github.com/NousResearch/hermes-agent/pull/53548) — @teknium1)
- **Reference-model output shown as labelled blocks** in CLI, TUI, and desktop — read each model's reasoning before the aggregator's synthesis ([#53793](https://github.com/NousResearch/hermes-agent/pull/53793), [#53855](https://github.com/NousResearch/hermes-agent/pull/53855) — @teknium1)
- **Aggregator response streams live** instead of appearing whole after a silence ([#55625](https://github.com/NousResearch/hermes-agent/pull/55625) — @teknium1)
- **References see full tool state and fire on every user/tool response**; advisory references end on a user turn and get a reference-role system prompt ([#54016](https://github.com/NousResearch/hermes-agent/pull/54016), [#54007](https://github.com/NousResearch/hermes-agent/pull/54007) — @teknium1)
- **Opt-in full-turn trace persistence to JSONL** (`moa.save_traces`) for debugging and eval ([#56101](https://github.com/NousResearch/hermes-agent/pull/56101) — @teknium1)
- Reliability: reference + aggregator models called through their provider's real route; context window resolved from the aggregator (not the 256K default); auxiliary tasks resolve to the aggregator; virtual provider blocked as a reference/aggregator slot; tolerant of hand-edited preset config ([#53580](https://github.com/NousResearch/hermes-agent/pull/53580), [#53780](https://github.com/NousResearch/hermes-agent/pull/53780), [#53827](https://github.com/NousResearch/hermes-agent/pull/53827), [#53281](https://github.com/NousResearch/hermes-agent/pull/53281), [#53275](https://github.com/NousResearch/hermes-agent/pull/53275), [#53556](https://github.com/NousResearch/hermes-agent/pull/53556) — @teknium1)
- MoA slot provider-identity unified on the single `call_llm` chokepoint; HermesBench results documented ([#55991](https://github.com/NousResearch/hermes-agent/pull/55991), [#53206](https://github.com/NousResearch/hermes-agent/pull/53206) — @teknium1)

## ✅ Verification & Goals — the agent proves its work

- **Completion contracts for `/goal`** — state what "done" looks like; the standing-goal loop judges against evidence, not the model's say-so ([#50501](https://github.com/NousResearch/hermes-agent/pull/50501) — @teknium1)
- **`/goal wait <pid>`** — park the standing-goal loop on a background process instead of re-poking the agent ([#50503](https://github.com/NousResearch/hermes-agent/pull/50503) — @teknium1)
- **Coding verification evidence ledger** — profile-scoped record of canonical project checks detected by `agent.coding_context`; gateway exposes verification status ([#52285](https://github.com/NousResearch/hermes-agent/pull/52285), [#52286](https://github.com/NousResearch/hermes-agent/pull/52286) — @OutThisLife)
- **`pre_verify` hook + coding guidance config**; verification stop loop + ad-hoc verification scripts ([#55413](https://github.com/NousResearch/hermes-agent/pull/55413), [#52296](https://github.com/NousResearch/hermes-agent/pull/52296), [#52297](https://github.com/NousResearch/hermes-agent/pull/52297) — @OutThisLife)
- **verify-on-stop defaults OFF** with a one-time v32 migration; skips doc-only edits; surface-aware "auto" default restored; gated off for messaging surfaces ([#53552](https://github.com/NousResearch/hermes-agent/pull/53552), [#54740](https://github.com/NousResearch/hermes-agent/pull/54740), [#55449](https://github.com/NousResearch/hermes-agent/pull/55449), [#52412](https://github.com/NousResearch/hermes-agent/pull/52412) — @teknium1, @OutThisLife, @GodsBoy)

## 🎓 Self-Improvement (Learn / Journey)

- **`/learn <anything>`** — distill a reusable skill from a directory, URL, or a workflow you just walked through; honors CONTRIBUTING.md skill standards and mixed requirements ([#51506](https://github.com/NousResearch/hermes-agent/pull/51506), [#52372](https://github.com/NousResearch/hermes-agent/pull/52372), [#55956](https://github.com/NousResearch/hermes-agent/pull/55956) — @teknium1)
- **`/journey`** — CLI + TUI learning timeline of accumulated memories and skills, with in-place edit/delete ([#55555](https://github.com/NousResearch/hermes-agent/pull/55555), [#55859](https://github.com/NousResearch/hermes-agent/pull/55859) — @OutThisLife)
- **Cheaper background review** — aux-model routing + context digest + adaptive cadence for the post-turn self-improvement fork ([#49252](https://github.com/NousResearch/hermes-agent/pull/49252) — @teknium1)
- **`memory` graph** in the desktop — playable radial timeline of memories + skills over time ([#55226](https://github.com/NousResearch/hermes-agent/pull/55226) — @OutThisLife)

## 🖥️ Hermes Desktop App

### Coding cockpit
- **First-class Projects** — per-profile sidebar, coding rail, review pane, agent project tools (`project → repo → lane`); remote-gateway-aware folder picker + git cockpit (status, review, worktrees) ([#49037](https://github.com/NousResearch/hermes-agent/pull/49037), [#54385](https://github.com/NousResearch/hermes-agent/pull/54385) — @OutThisLife)
- **Multi-terminal panel** with read-only agent terminals; persist & restore terminal tabs + scrollback across relaunch ([#54517](https://github.com/NousResearch/hermes-agent/pull/54517), [#54585](https://github.com/NousResearch/hermes-agent/pull/54585) — @OutThisLife)
- **PR-style file diffs in chat**; in-app spot editor for the file preview pane; inline rich embeds, diagrams & alerts in assistant markdown ([#50731](https://github.com/NousResearch/hermes-agent/pull/50731), [#52772](https://github.com/NousResearch/hermes-agent/pull/52772), [#52935](https://github.com/NousResearch/hermes-agent/pull/52935) — @OutThisLife)

### UX & surfaces
- Conversation timeline rail for long threads; context-usage breakdown popover; read-only spectator transcript for subagent watch windows; pop the composer into a draggable floating window ([#51094](https://github.com/NousResearch/hermes-agent/pull/51094), [#54907](https://github.com/NousResearch/hermes-agent/pull/54907), [#55033](https://github.com/NousResearch/hermes-agent/pull/55033), [#49488](https://github.com/NousResearch/hermes-agent/pull/49488) — @OutThisLife, @austinpickett)
- Read replies aloud (auto-TTS) composer toggle; remember window size/position/maximized across launches; redesigned clarify prompt; shared overlay Panel primitive for cron/profiles/agents ([#55154](https://github.com/NousResearch/hermes-agent/pull/55154), [#52086](https://github.com/NousResearch/hermes-agent/pull/52086), [#52993](https://github.com/NousResearch/hermes-agent/pull/52993), [#54558](https://github.com/NousResearch/hermes-agent/pull/54558) — @OutThisLife)
- Backup import/create/download from the web UI; add context-usage popover; flag already-installed themes in install pickers; config-driven Electron launch flags + GPU policy ([#54611](https://github.com/NousResearch/hermes-agent/pull/54611), [#55410](https://github.com/NousResearch/hermes-agent/pull/55410), [#53991](https://github.com/NousResearch/hermes-agent/pull/53991) — @teknium1, @OutThisLife)
- **Pets** — roaming pet (opt-in), calmer/realistic roam, Alt+wheel scaling never cropped, frame-perfect hatch flow + CPU-safe chroma, pop-out overlay + notifications ([#55114](https://github.com/NousResearch/hermes-agent/pull/55114), [#55400](https://github.com/NousResearch/hermes-agent/pull/55400), [#52877](https://github.com/NousResearch/hermes-agent/pull/52877), [#47959](https://github.com/NousResearch/hermes-agent/pull/47959), [#52303](https://github.com/NousResearch/hermes-agent/pull/52303) — @OutThisLife)

### Refactor wave (composer / god-file de-entangle)
- Decomposed the composer into isolated engine hooks; extracted branch/esc/url/placeholder/popout engines; split `thread.tsx`, `sidebar/index.tsx`, onboarding overlay, and `use-prompt-actions` god files into focused modules; shared WebSocket layer decoupling desktop from dashboard (`hermes serve`) ([#55500](https://github.com/NousResearch/hermes-agent/pull/55500), [#55842](https://github.com/NousResearch/hermes-agent/pull/55842), [#55451](https://github.com/NousResearch/hermes-agent/pull/55451), [#55453](https://github.com/NousResearch/hermes-agent/pull/55453), [#55807](https://github.com/NousResearch/hermes-agent/pull/55807), [#55504](https://github.com/NousResearch/hermes-agent/pull/55504), [#54568](https://github.com/NousResearch/hermes-agent/pull/54568) — @OutThisLife)
- perf: bound tool-result rendering so big `/learn` runs don't freeze; fast session switching under load ([#52273](https://github.com/NousResearch/hermes-agent/pull/52273), [#52620](https://github.com/NousResearch/hermes-agent/pull/52620) — @OutThisLife)

## 📊 Web Dashboard
- Auto-initiate portal SSO redirect on unauthenticated load; interactive auth setup on no-provider non-loopback bind; confidential-client (`client_secret`) support in self-hosted OIDC ([#54846](https://github.com/NousResearch/hermes-agent/pull/54846), [#50551](https://github.com/NousResearch/hermes-agent/pull/50551), [#55344](https://github.com/NousResearch/hermes-agent/pull/55344) — @teknium1, @benbarclay)
- Catalogue all memory-provider API keys in `OPTIONAL_ENV_VARS`; list & add arbitrary custom `.env` keys on the Keys page; expose cron job execution fields; backup import/create/download ([#54546](https://github.com/NousResearch/hermes-agent/pull/54546), [#54552](https://github.com/NousResearch/hermes-agent/pull/54552), [#53551](https://github.com/NousResearch/hermes-agent/pull/53551), [#54611](https://github.com/NousResearch/hermes-agent/pull/54611) — @benbarclay, @teknium1)
- Offload PTY spawn/close off the event loop; exclude non-interactive providers from interactive login surfaces ([#53227](https://github.com/NousResearch/hermes-agent/pull/53227), [#53239](https://github.com/NousResearch/hermes-agent/pull/53239) — @IAvecilla)


## 🏗️ Core Agent & Architecture

### Delegation & subagents
- **Background fan-out** — parallel subagents run in the background, one consolidated return when all finish; calm "will resume" affordance for background `delegate_task` ([#49734](https://github.com/NousResearch/hermes-agent/pull/49734), [#52756](https://github.com/NousResearch/hermes-agent/pull/52756) — @teknium1, @OutThisLife)
- Track background subagents in the CLI + TUI status bar ([#51441](https://github.com/NousResearch/hermes-agent/pull/51441), [#51485](https://github.com/NousResearch/hermes-agent/pull/51485) — @teknium1)

### Agent loop, tools & coding context
- One-shot LLM helper + `llm.oneshot` gateway RPC; expose coding-context project facts (`project.facts` RPC) ([#51261](https://github.com/NousResearch/hermes-agent/pull/51261), [#51259](https://github.com/NousResearch/hermes-agent/pull/51259) — @OutThisLife)
- `web_extract` truncate-and-store instead of LLM summarization; concurrent @-reference expansion ([#54843](https://github.com/NousResearch/hermes-agent/pull/54843), [#55207](https://github.com/NousResearch/hermes-agent/pull/55207) — @teknium1, @kshitijk4poor)
- Friendly human-phrased tool labels for built-in tools; `/reasoning full` (uncapped thinking); `/timestamps` + timestamps in `/history`; `/prompt` composes in `$EDITOR` ([#55166](https://github.com/NousResearch/hermes-agent/pull/55166), [#50499](https://github.com/NousResearch/hermes-agent/pull/50499), [#50506](https://github.com/NousResearch/hermes-agent/pull/50506), [#50509](https://github.com/NousResearch/hermes-agent/pull/50509) — @teknium1)
- Per-reasoning-model stale-timeout floor in stream + non-stream detectors; escalate SIGTERM→SIGKILL on host-pid termination after grace ([#52845](https://github.com/NousResearch/hermes-agent/pull/52845), [#50489](https://github.com/NousResearch/hermes-agent/pull/50489) — @teknium1)
- Multiple `HERMES_WRITE_SAFE_ROOT` dirs; opt-in HTTP/WS body capture to an isolated, share-excluded `gui_bodies.log` ([#53292](https://github.com/NousResearch/hermes-agent/pull/53292), [#49044](https://github.com/NousResearch/hermes-agent/pull/49044) — @kshitijk4poor)

### Compression & sessions
- In-place compaction option (single session id); flip `in_place` default to True with a guard fix ([#49739](https://github.com/NousResearch/hermes-agent/pull/49739), [#52658](https://github.com/NousResearch/hermes-agent/pull/52658) — @teknium1)
- Backup includes `projects.db` and kanban boards in the pre-update snapshot ([#52990](https://github.com/NousResearch/hermes-agent/pull/52990) — @kshitijk4poor)

### Providers & models
- **Google Vertex AI** first-class provider for Gemini over the OpenAI-compatible endpoint — auto-mints and refreshes short-lived OAuth2 tokens from a service-account JSON / ADC (no static key); salvages & modernizes #8427 by @slawt ([#56363](https://github.com/NousResearch/hermes-agent/pull/56363) — @teknium1, @slawt)
- Krea via managed Nous Subscription gateway; Z.AI endpoint picker (Global/China/Coding Plan); Ollama-cloud reasoning_effort wiring; remove google-gemini-cli + google-antigravity OAuth providers ([#52647](https://github.com/NousResearch/hermes-agent/pull/52647), [#52364](https://github.com/NousResearch/hermes-agent/pull/52364), [#51494](https://github.com/NousResearch/hermes-agent/pull/51494), [#50492](https://github.com/NousResearch/hermes-agent/pull/50492) — @teknium1, @kshitijk4poor)
- Honor `NOUS_INFERENCE_BASE_URL` env override for Nous OAuth; keep Nous auth fresh for idle dashboard/gateway agents ([#52270](https://github.com/NousResearch/hermes-agent/pull/52270), [#50567](https://github.com/NousResearch/hermes-agent/pull/50567) — @benbarclay, @teknium1)

## 🌐 Gateway, Fleet & Relay

### Scale-to-zero & drain
- **Scale-to-zero idle detection + dormant-quiesce (Phase 0)**; hardened dormancy guards; fixed arm-gate counting disabled placeholder platforms ([#52243](https://github.com/NousResearch/hermes-agent/pull/52243), [#52359](https://github.com/NousResearch/hermes-agent/pull/52359), [#52831](https://github.com/NousResearch/hermes-agent/pull/52831) — @teknium1, @benbarclay)
- **External drain coordination (safe-shutdown Phase 2)**; suppress home-channel shutdown broadcast on flagged drains; persist in-flight transcript on restart/shutdown drain timeout; busy/idle readout for safe lifecycle actions ([#52937](https://github.com/NousResearch/hermes-agent/pull/52937), [#54824](https://github.com/NousResearch/hermes-agent/pull/54824), [#50312](https://github.com/NousResearch/hermes-agent/pull/50312), [#50131](https://github.com/NousResearch/hermes-agent/pull/50131) — @teknium1, @benbarclay, @kshitijk4poor)
- Default `restart_drain_timeout` to 0 to kill a systemd crash loop; self-heal a gateway stranded in draining/degraded ([#54066](https://github.com/NousResearch/hermes-agent/pull/54066), [#55397](https://github.com/NousResearch/hermes-agent/pull/55397) — @teknium1)

### Relay (Phase 5 / 6)
- Wake primitive (gateway side); going-idle / buffered-flip primitive; `passthrough_forward` over WS; multi-platform-per-agent identity + per-frame egress; forward stable instance id at self-provision; declare relevance policy to the connector ([#51595](https://github.com/NousResearch/hermes-agent/pull/51595), [#51572](https://github.com/NousResearch/hermes-agent/pull/51572), [#50702](https://github.com/NousResearch/hermes-agent/pull/50702), [#52830](https://github.com/NousResearch/hermes-agent/pull/52830), [#50772](https://github.com/NousResearch/hermes-agent/pull/50772), [#51248](https://github.com/NousResearch/hermes-agent/pull/51248) — @benbarclay)
- Authorize relay-delivered events by delivery, not `source.platform`; adopt `scope_id` wire key; purge platform-specific scope terminology ([#52306](https://github.com/NousResearch/hermes-agent/pull/52306), [#55289](https://github.com/NousResearch/hermes-agent/pull/55289), [#56016](https://github.com/NousResearch/hermes-agent/pull/56016) — @benbarclay)

### Gateway core & rendering
- Typed send-error classification (`SendResult.error_kind`); per-platform `typing_indicator` toggle; per-category context breakdown in `/usage` ([#50342](https://github.com/NousResearch/hermes-agent/pull/50342), [#55394](https://github.com/NousResearch/hermes-agent/pull/55394), [#55204](https://github.com/NousResearch/hermes-agent/pull/55204) — @teknium1)
- API server: configurable concurrent-run cap to prevent DoS; scope run approvals by run id ([#50007](https://github.com/NousResearch/hermes-agent/pull/50007), [#56129](https://github.com/NousResearch/hermes-agent/pull/56129) — @teknium1)

## 📱 Messaging Platforms
- **Cron continuations** — continuable cron jobs (thread-preferred continuation with DM-mirror fallback); flat in-channel continuable cron delivery for Slack; warn when gateway not running on cron create/list ([#52250](https://github.com/NousResearch/hermes-agent/pull/52250), [#56254](https://github.com/NousResearch/hermes-agent/pull/56254), [#51696](https://github.com/NousResearch/hermes-agent/pull/51696) — @teknium1)
- Telegram: configurable command menu + raised default cap so skills stay visible; gate rich draft previews separately; drain general send pool on pool timeout before retry ([#51716](https://github.com/NousResearch/hermes-agent/pull/51716), [#52088](https://github.com/NousResearch/hermes-agent/pull/52088), [#54121](https://github.com/NousResearch/hermes-agent/pull/54121) — @teknium1, @helix4u)
- Slack: opt-in Block Kit rendering for agent messages; `--no-assistant` flag for manifest generation ([#56102](https://github.com/NousResearch/hermes-agent/pull/56102), [#51487](https://github.com/NousResearch/hermes-agent/pull/51487) — @teknium1)
- Discord: render reasoning as `-#` subtext via `display.reasoning_style` ([#51168](https://github.com/NousResearch/hermes-agent/pull/51168) — @teknium1)
- Native WhatsApp media delivery via the Baileys bridge; Teams native `send_video`/`send_voice`/`send_document`; photon sidecar upgraded to spectrum-ts v8 with tapback correlation; Raft gateway setup wizard ([#53598](https://github.com/NousResearch/hermes-agent/pull/53598), [#49308](https://github.com/NousResearch/hermes-agent/pull/49308), [#53451](https://github.com/NousResearch/hermes-agent/pull/53451), [#56230](https://github.com/NousResearch/hermes-agent/pull/56230) — @teknium1)
- Signal: AAC voice-note remux + shared markdown formatting ([#49530](https://github.com/NousResearch/hermes-agent/pull/49530) — @kshitijk4poor)
- Migrate slack/dingtalk/whatsapp/matrix/feishu/telegram/wecom/email/sms adapters to bundled ([#49408](https://github.com/NousResearch/hermes-agent/pull/49408) — @teknium1)

## 🔧 Tool System, Skills & MCP
- Blank Slate setup mode — minimal agent, opt in to everything ([#36733](https://github.com/NousResearch/hermes-agent/pull/36733) — @teknium1)
- MCP: config persistence attack surface hardened; block base_url exfil; keepalive for short-TTL sessions (see Security) — plus catalog & UX carried from v0.17.0
- Skills: `/learn` distillation (see Self-Improvement); `cloudflare-temporary-deploy` optional skill; creative-ideation v2.1.0 method library ([#50849](https://github.com/NousResearch/hermes-agent/pull/50849), [#42402](https://github.com/NousResearch/hermes-agent/pull/42402) — @teknium1, @SHL0MS)
- Kanban: task lifecycle plugin hooks (claimed/completed/blocked); typed block reasons + unblock-loop breaker; handoff freshness stamping ([#50349](https://github.com/NousResearch/hermes-agent/pull/50349), [#52848](https://github.com/NousResearch/hermes-agent/pull/52848), [#53973](https://github.com/NousResearch/hermes-agent/pull/53973) — @teknium1)
- Plugins: `ctx.profile_name` for session-agnostic profile access ([#50346](https://github.com/NousResearch/hermes-agent/pull/50346) — @teknium1)
- LSP: PowerShellEditorServices language server; mem0 v3 API + OSS mode + update/delete tools ([#55930](https://github.com/NousResearch/hermes-agent/pull/55930), [#15624](https://github.com/NousResearch/hermes-agent/pull/15624) — @teknium1, @kartik-mem0)

## ⚡ Performance
- Cold start: lazy-load gateway platform adapters; parse config + plugin manifests with libyaml `CSafeLoader` ([#54448](https://github.com/NousResearch/hermes-agent/pull/54448), [#54486](https://github.com/NousResearch/hermes-agent/pull/54486) — @teknium1)
- State: merge FTS5 segments + `handoff_state` index to curb write-lock contention; single-pass `list_profiles` alias map + skill-count cache + event-loop offload ([#54752](https://github.com/NousResearch/hermes-agent/pull/54752), [#54770](https://github.com/NousResearch/hermes-agent/pull/54770) — @kshitijk4poor, @teknium1)

## 🔒 Security & Reliability
- Harden MCP-config persistence attack surface; block cron `base_url` overrides that exfiltrate provider credentials; non-reusable sentinel for prefix secrets in file reads ([#50476](https://github.com/NousResearch/hermes-agent/pull/50476), [#56196](https://github.com/NousResearch/hermes-agent/pull/56196), [#54166](https://github.com/NousResearch/hermes-agent/pull/54166) — @teknium1, @kshitijk4poor)
- Redact Slack App-Level (`xapp-`) tokens; browser cloud-metadata floor on all backends (CDP non-local); re-check private-network guard after `browser_back` navigation; scope `/resume` and `/sessions` to caller origin (IDOR); `aiohttp` 3.14.1 CVE floor across lazy messaging paths + pin-drift guard ([#56227](https://github.com/NousResearch/hermes-agent/pull/56227), [#52349](https://github.com/NousResearch/hermes-agent/pull/52349), [#56526](https://github.com/NousResearch/hermes-agent/pull/56526), [#56378](https://github.com/NousResearch/hermes-agent/pull/56378), [#56237](https://github.com/NousResearch/hermes-agent/pull/56237) — @teknium1, @claudlos, @kshitijk4poor)
- Cron reliability wave: fail closed when an unpinned job's provider drifts; run missed-grace jobs once instead of deferring forever; keep the ticker alive on `BaseException` + heartbeat-aware status; layer enabled MCP servers onto per-job toolsets; guard cron model-tool path + auto-resume loop breaker ([#51051](https://github.com/NousResearch/hermes-agent/pull/51051), [#50062](https://github.com/NousResearch/hermes-agent/pull/50062), [#50016](https://github.com/NousResearch/hermes-agent/pull/50016), [#50117](https://github.com/NousResearch/hermes-agent/pull/50117), [#56240](https://github.com/NousResearch/hermes-agent/pull/56240) — @kshitijk4poor, @teknium1)
- Windows: suppress console flashes + harden gateway restarts; prefer cmd npm shim on PATH fallback; respawn gateway windowless after GUI update; prefer managed node for whatsapp/desktop ([#52340](https://github.com/NousResearch/hermes-agent/pull/52340), [#50398](https://github.com/NousResearch/hermes-agent/pull/50398), [#52239](https://github.com/NousResearch/hermes-agent/pull/52239) — @helix4u, @teknium1)

## 🔁 Reverts (in-window, for the record)
- cron job storage returned to per-profile (reverts #32117 + #50993); don't clone `auth.json` (duplicating OAuth grant causes sibling revocation); windows terminal-popup PRs rolled back; `prompt_caching.enabled` toggle backed out for re-evaluation ([#51116](https://github.com/NousResearch/hermes-agent/pull/51116), [#51732](https://github.com/NousResearch/hermes-agent/pull/51732), [#53853](https://github.com/NousResearch/hermes-agent/pull/53853), [#56126](https://github.com/NousResearch/hermes-agent/pull/56126) — @teknium1)

## 👥 Contributors

**381 people** contributed to this release (via commits, co-author trailers, and salvaged PRs). Thank you, all of you.

### Core
- @teknium1 — release lead; MoA first-class, verification/goals, `/learn`, background review, security round, providers, the P0/P1 clean-sweep
- @OutThisLife — desktop app (projects, memory graph, `/journey`, multi-terminal, composer refactor wave, pets, verification UX)

### Top community contributors
- @kshitijk4poor — the P0/P1 backlog burn: cron reliability wave, state perf, security (cron credential-exfil), gateway/signal, TUI config — a huge share of the priority closures
- @benbarclay — relay Phase 5/6, scale-to-zero / drain coordination, dashboard auth/keys, gateway hardening
- @ethernet8023 — CI/docker (unified jobs, faster builds, timings report)
- @helix4u — Windows hardening (console flashes, npm shim, gateway restarts)

### All contributors

@0xbyt4, @0xDevNinja, @0xsir0000, @1RB, @595650661, @aaronlab, @abchiaravalle, @adammatski1972, @AetherAgents,
@Afnath-max, @agt-user, @ahmadashfq, @AhmetArif0, @AIalliAI, @aieng-abdullah, @ailang323, @ailthrim, @aj-nt,
@alelpoan, @alloevil, @amathxbt, @ambition0802, @anderskev, @andressommerhoff, @angelos, @annguyenNous,
@Antimatter543, @arminanton, @arthurzhang, @asimons81, @austinpickett, @baolingao, @Bartok9, @basilalshukaili,
@BBCrypto-web, @bbopen, @Beandon13, @beardthelion, @benbarclay, @benbenlijie, @binhnt92, @bitcryptic-gw,
@Blaryxoff, @bogerman1, @bradhallett, @brett539, @briandevans, @buihongduc132, @bykim0119, @catapreta,
@chaithanyak42, @charleneleong-ai, @CharlieKerfoot, @chazmaniandinkle, @chrispersico, @Christopher-Schulze,
@chriswesley4, @claudlos, @clovericbot, @cmcejas, @codexGW, @Cossackx, @counterposition, @coygeek, @CRWuTJ,
@cyb0rgk1tty, @cyb3rwr3n, @cypctlinux, @cypres0099, @dalenguyen, @Danamove, @DanAsBjorn, @DataAdvisory,
@davidgut1982, @DavidMetcalfe, @davidvv, @de1tydev, @denisqq, @devorun, @devsart95, @DhivinX, @DiamondEyesFox,
@difujia, @Disaster-Terminator, @djimit, @djstunami, @dodo-reach, @donovan-yohan, @Dr1985, @DrZM007, @Dusk1e,
@egilewski, @ehz0ah, @Eji4h, @EloquentBrush0x, @Elshayib, @emozilla, @entropy-0x, @Erosika, @EtherAura,
@etherman-os, @ethernet8023, @f-trycua, @fayenix, @fesalfayed, @firefly, @flamiinngo, @flobo3, @francescomucio,
@franksong2702, @friendshipisover, @fsaad1984, @fyzanshaik, @GauravPatil2515, @gdeyoung, @georgex8001,
@GodsBoy, @graphanov, @Gromykoss, @gustavosmendes, @Gutslabs, @H2KFORGIVEN, @haileymarshall, @hakanpak,
@happy5318, @haran2001, @harjothkhara, @heathley, @hehehe0803, @helix4u, @herbalizer404, @HexLab98,
@HiddenPuppy, @Hinotoi-agent, @HODLCLONE, @houko, @huangsen365, @huangxudong663-sys, @huangxun375-stack,
@HwangJohn, @iaji, @iamlukethedev, @IamSanchoPanza, @IAvecilla, @Icather, @iizotov, @indigokarasu,
@infinitycrew39, @ipriyaaanshu, @isair, @islam666, @itenev, @itsflownium, @izumi0uu, @Jaaneek, @JabberELF,
@jackjin1997, @jackroofan, @janrenz, @jasnoorgill, @jasonQin6, @jcjc81, @jearnest11, @jeeves-assistant,
@Jeffgithub0029, @jeffrobodie-glitch, @JezzaHehn, @jimmyjohansson84, @jmmaloney4, @jnibarger01, @JoaoMarcos44,
@jplew, @Junass1, @justemu, @justin-cyhuang, @JustinOhms, @jvradahellys24-art, @Kailigithub, @kaishi00,
@kangsoo-bit, @kartik-mem0, @keiravoss94, @kenyonxu, @kernel-t1, @Kewe63, @KeyArgo, @KiruyaMomochi, @kn8-codes,
@Kolektori, @konsisumer, @kshitijk4poor, @kyssta-exe, @Kyzcreig, @Lazymonter, @LehaoLin, @LeonSGP43, @lEWFkRAD,
@libre-7, @LIC99, @LifeJiggy, @linyubin, @liuhao1024, @lkevincc0, @lkz-de, @loes5050, @londo161, @lubosxyz,
@m24927605, @MaheshtheDev, @manus-use, @marco0158, @MarioYounger, @martinramos002-bot, @MattKotsenas,
@max-chen, @MaxFreedomPollard, @maxmilian, @maxpetrusenko, @memosr, @Mibayy, @Minksgo, @mintybasil, @mkslzk,
@mohamedorigami-jpg, @MorAlekss, @mrparker0980, @ms-alan, @namredips, @nankingjing, @natehale, @necoweb3,
@neo-2026, @Nickperillo, @nightq, @nikshepsvn, @nnnet, @nocturnum91, @nodejun, @NousResearch, @nycomar,
@OmarB97, @orbisai0security, @oreoluwa, @outsourc-e, @OutThisLife, @p-andhika, @panghuer023, @Paperclip,
@peetwan, @pefontana, @petrichor-op, @pinguarmy, @PINKIIILQWQ, @pmos69, @PolyphonyRequiem, @pprism13,
@PRATHAMESH75, @professorpalmer, @pyxl-dev, @Que0x, @qWaitCrypto, @r266-tech, @RafaelMiMi, @Railway9784,
@randomuser2026x, @rayjun, @rc-int, @rebel0789, @redactdeveloper, @riyas22, @rlaope, @rob-maron, @rodboev,
@rodrigoeqnit, @rratmansky, @rrevenanttt, @ruangraung, @Ruzzgar, @ryo-solo, @s010mn, @Sahil-SS9,
@SahilRakhaiya05, @SandroHub013, @Sanjays2402, @sasquatch9818, @ScotterMonk, @season179, @sgabel, @sgaofen,
@sgtworkman, @shandian64, @shannonsands, @shashwatgokhe, @shawchanshek, @sherman-yang, @SHL0MS, @SidUParis,
@SimoKiihamaki, @simpolism, @sjh9714, @skabartem, @skyc1e, @slawt, @soynchux, @spiky02plateau, @spjoes,
@sprmn24, @srojk34, @stepanov1975, @steveonjava, @Subway2023, @sweetcornna, @swissly, @Sworntech-dev,
@syahidfrd, @synapsesx, @szzhoujiarui-sketch, @talmax1124, @telos-oc, @testingbuddies24, @texhy, @tgmerritt,
@theAgenticBuilder, @thestral123, @tkwong, @Tortugasaur, @Tranquil-Flow, @trevorgordon981, @truenorth-lj,
@tt-a1i, @tuancookiez-hub, @TutkuEroglu, @tymrtn, @udatny, @UgwujaGeorge, @underthestars-zhy, @uperLu,
@uzunkuyruk, @valenteff, @valentt, @vanthinh6886, @Versun, @victor-kyriazakos, @virtuadex, @vKongv,
@w31rdm4ch1nZ, @weidzhou, @wgu9, @whoislikemiha, @wnuuee1, @woaini30050, @WuKongAI-CMU, @WuTianyi123, @WXBR,
@x7peeps, @x9x9x9x9x9x91, @Xowiek, @xxchan, @xxxigm, @xydigit-zt, @yapsrubricsz0, @yashiels, @yeyitech, @ygd58,
@YLChen-007, @yong2bba, @yoniebans, @ypwcharles, @yu-xin-c, @yungchentang, @yusekiotacode, @YuShu, @yyzquwu,
@zapabob, @zccyman, @zeapsu, @zmlgit, @znding04, @Zyxxx-xxxyZ

Also: Lucas Nicolas.

---

**Full Changelog**: [v2026.6.19...v2026.7.1](https://github.com/NousResearch/hermes-agent/compare/v2026.6.19...v2026.7.1)

---

## Hermes Agent v0.17.0 (v2026.6.19)

- Tag: `v2026.6.19`
- Published: 2026-06-19T19:39:06Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.19
- Prerelease: False

- Assets: hermes_agent-0.17.0-py3-none-any.whl.sigstore.json, hermes_agent-0.17.0.tar.gz.sigstore.json

# Hermes Agent v0.17.0 (v2026.6.19)

**Release Date:** June 19, 2026
**Since v0.16.0:** ~1,475 commits · ~800 merged PRs · 1,693 files changed · 235,390 insertions · 50,730 deletions · 300+ issues closed · 245 community contributors

> **The Reach Release.** v0.16.0 put Hermes on your desktop. v0.17.0 is about how far that reach extends — across new places to talk to it, deeper into the tools you already use, and out to the people running Hermes for a team. Hermes reached two new channels (iMessage via Photon, and the Raft agent network), the desktop app gained substantial new capability, subagents can now run in the background, image generation learned to edit, and Cursor's Composer model is reachable through an xAI Grok subscription. The dashboard got a full profile builder and secure login, the Skills Hub browser was rehauled, the `memory` tool got a major upgrade, and the curator stopped spending aux-model budget on every routine run. 300+ issues closed ride along, plus a security round.

## ✨ Highlights

- **Hermes reaches iMessage — Photon Spectrum, no Mac relay required** — There's now an iMessage platform plugin built on Photon's managed line pool. Run `hermes photon login`, authenticate with a device code, and Hermes can send and receive iMessage — no Mac sitting in a closet running a relay, no BlueBubbles bridge to babysit. It's positioned as the successor to BlueBubbles: free to start, nothing to self-host. If your friends and family live in the blue bubbles, Hermes lives there now too. ([#32348](https://github.com/NousResearch/hermes-agent/pull/32348), [#42582](https://github.com/NousResearch/hermes-agent/pull/42582), [#44713](https://github.com/NousResearch/hermes-agent/pull/44713) — @teknium1)

- **Raft — Hermes joins the Raft agent network as a gateway channel** — A new bundled Raft platform adapter lets Hermes connect to [Raft](https://raft.build) as an external agent through a wake-channel bridge. Set `RAFT_PROFILE`, run the bridge, and Raft can wake Hermes to handle messages — with a privacy-by-contract design where wake payloads carry only metadata (event IDs, timestamps), never message bodies. Another surface where Hermes can show up and do work. ([#48210](https://github.com/NousResearch/hermes-agent/pull/48210) — @xxchan, @teknium1)

- **A substantially more capable desktop app** — v0.16.0 shipped the desktop app; v0.17.0 deepened it across dozens of PRs. Rebindable keyboard shortcuts, native OS notifications with per-type toggles, live subagent **watch-windows** that stream a delegated agent's activity into its own pane, a composer model selector with per-model presets, automatic RTL/bidi text direction, a resizable VS Code-themed terminal pane, per-thread composer drafts, and the ability to install **any VS Code Marketplace theme** directly into the app. The desktop is now a serious daily driver, not a preview. ([#45866](https://github.com/NousResearch/hermes-agent/pull/45866), [#40660](https://github.com/NousResearch/hermes-agent/pull/40660), [#47060](https://github.com/NousResearch/hermes-agent/pull/47060), [#46959](https://github.com/NousResearch/hermes-agent/pull/46959), [#43292](https://github.com/NousResearch/hermes-agent/pull/43292), [#44596](https://github.com/NousResearch/hermes-agent/pull/44596) — @OutThisLife, @teknium1)

- **Background / async subagents — delegate work and keep going** — `delegate_task(background=true)` now dispatches a subagent that runs in the background and returns a handle immediately. You and the model keep working while it churns, and the full result re-enters the conversation as a new turn the moment it finishes. Kick off a long research dive or a multi-step build, then carry on with something else instead of sitting blocked waiting on it. ([#40946](https://github.com/NousResearch/hermes-agent/pull/40946), [#46968](https://github.com/NousResearch/hermes-agent/pull/46968) — @teknium1)

- **Edit images, not just generate them — image-to-image in `image_generate`** — `image_generate` can now edit and transform a source image, not only create one from scratch. Pass an existing image and a prompt and it routes to the backend's edit endpoint (same tool, same pattern as `video_generate`), across every supported image provider. "Make this logo blue," "remove the background," "turn this sketch into a render" — all from the tool you already use. ([#48705](https://github.com/NousResearch/hermes-agent/pull/48705) — @teknium1)

- **Automation Blueprints — schedule things without learning cron** — Pick an automation by name and Hermes asks you for what it needs — no cron syntax, no `slot=value` typing. One blueprint definition renders natively on every surface: a form in the dashboard, a slash command in the CLI/TUI/messenger, a conversation with the agent, an entry in the docs catalog. "Daily news briefing at 8am" becomes a thing you set up by answering questions, not by memorizing `0 8 * * *`. ([#41309](https://github.com/NousResearch/hermes-agent/pull/41309) — @teknium1)

- **Cursor's Composer model, through your xAI Grok subscription** — `grok-composer-2.5-fast` is now in the xAI OAuth model picker, with its context window reconciled to the full 200k. Composer is the fast coding model behind Cursor — and if you have an xAI Grok subscription, you can now point Hermes at it directly over OAuth, no separate API key. Your Grok plan, Hermes's agent loop, Composer's coding speed. ([#47908](https://github.com/NousResearch/hermes-agent/pull/47908), [#6f89e17](https://github.com/NousResearch/hermes-agent/pull/47371) — @teknium1)

- **Full profile builder in the dashboard** — Build a complete Hermes profile from the browser — pick its model, choose its skills, attach its MCP servers — without hand-editing `config.yaml`. The dashboard also unified multi-profile management into one machine-wide view with a global profile switcher, so you manage every profile from a single place. ([#39084](https://github.com/NousResearch/hermes-agent/pull/39084), [#44007](https://github.com/NousResearch/hermes-agent/pull/44007) — @teknium1)

- **Skills Hub browser rehaul** — The dashboard's Skills Hub got a ground-up rework: connected hubs, a Featured section, full skill previews before you install, and a security scan on each skill. Browsing and installing skills from the trusted taps (OpenAI, Anthropic, HuggingFace, NVIDIA) is now a real browsing experience, not a flat list. ([#40384](https://github.com/NousResearch/hermes-agent/pull/40384), [#43398](https://github.com/NousResearch/hermes-agent/pull/43398) — @teknium1)

- **The `memory` tool got a major upgrade — atomic batch operations** — The `memory` tool gained an `operations` array that applies a batch of add/replace/remove edits **atomically against the final character budget**. The model can free up space and add new entries in a single call — even when an add alone would overflow the budget — collapsing what used to be a fragile multi-turn dance into one reliable operation. Memory updates are now faster and far less likely to fail mid-edit. ([#48507](https://github.com/NousResearch/hermes-agent/pull/48507) — @teknium1)

- **Secure dashboard login** — The dashboard's authentication was hardened: every token-required endpoint now correctly returns 401 behind the OAuth gate, websocket auth uses the served dashboard token, and a warning fires when a `public_url` override is silently rejected. Exposing your dashboard to the network is safer by default. ([#42578](https://github.com/NousResearch/hermes-agent/pull/42578), [#42578](https://github.com/NousResearch/hermes-agent/pull/43214) — @benbarclay, @teknium1)

- **Official WhatsApp Business Cloud API adapter** — Alongside the existing Baileys bridge, Hermes now speaks the **official** WhatsApp Business Cloud API — Meta's first-party, hosted, no-bridge-process path. Point it at your Business API credentials and Hermes talks WhatsApp through the supported channel, with no QR-scanning bridge process to keep alive. ([#44331](https://github.com/NousResearch/hermes-agent/pull/44331), [#43921](https://github.com/NousResearch/hermes-agent/pull/43921) — @jquesnelle, @teknium1)

- **Rich text for Telegram — Bot API 10.1 rich messages** — Telegram replies now render as proper rich messages via Bot API 10.1: better formatting, cleaner long-message handling, native markup instead of flattened text. It's on by default with an opt-out, so your Telegram conversations look the way they should without any configuration. ([#44829](https://github.com/NousResearch/hermes-agent/pull/44829), [#45584](https://github.com/NousResearch/hermes-agent/pull/45584), [#45953](https://github.com/NousResearch/hermes-agent/pull/45953) — @teknium1)

- **Curator cost optimization — no aux-model spend on routine runs** — The skill curator now prunes stale skills by default but no longer runs its LLM-powered consolidation pass unless you opt in (`curator.consolidate: true` or `hermes curator run --consolidate`). The deterministic inactivity sweep keeps running for free; the opinionated, aux-model-spending "build umbrella skills" fork is now off by default. Routine background curation costs you **zero tokens**. ([#47840](https://github.com/NousResearch/hermes-agent/pull/47840) — @teknium1)

## 🖥️ Hermes Desktop App

### New surfaces & UX
- Rebindable keyboard shortcuts panel; native OS notifications with per-type toggles; curated turn-completion cue + dismissable error banners ([#40660](https://github.com/NousResearch/hermes-agent/pull/40660), [#45866](https://github.com/NousResearch/hermes-agent/pull/45866), [#42480](https://github.com/NousResearch/hermes-agent/pull/42480), [#47985](https://github.com/NousResearch/hermes-agent/pull/47985) — @OutThisLife, @teknium1)
- Live subagent **watch-windows** — stream a delegated agent's activity into its own pane; composer status stack + editable prompts; open any chat in its own window; new-session-in-compact-window hotkey ([#47060](https://github.com/NousResearch/hermes-agent/pull/47060), [#44630](https://github.com/NousResearch/hermes-agent/pull/44630), [#43219](https://github.com/NousResearch/hermes-agent/pull/43219), [#46951](https://github.com/NousResearch/hermes-agent/pull/46951) — @OutThisLife, @teknium1)
- Composer model selector + per-model presets + external-provider disconnect; surface every provider/model from `hermes model` in the GUI; unify provider list to one source; warn when a main-model switch leaves auxiliary tasks pinned elsewhere ([#46959](https://github.com/NousResearch/hermes-agent/pull/46959), [#40563](https://github.com/NousResearch/hermes-agent/pull/40563), [#49080](https://github.com/NousResearch/hermes-agent/pull/49080), [#40286](https://github.com/NousResearch/hermes-agent/pull/40286) — @teknium1, @OutThisLife)
- Install **any VS Code Marketplace theme**; assignable themes per profile; window translucency slider; unified overlay design system + BrandMark + onboarding redesign ([#43292](https://github.com/NousResearch/hermes-agent/pull/43292), [#42286](https://github.com/NousResearch/hermes-agent/pull/42286), [#45086](https://github.com/NousResearch/hermes-agent/pull/45086), [#40708](https://github.com/NousResearch/hermes-agent/pull/40708) — @teknium1, @OutThisLife)
- Resizable VS Code-themed terminal pane + palette polish; auto-detect RTL/bidi text direction in chat; Mac-style session switcher (^Tab / ^1-9); worktree-aware sidebar grouping; hover-reveal collapsed sidebars; messaging source folders in sidebar ([#42521](https://github.com/NousResearch/hermes-agent/pull/42521), [#44596](https://github.com/NousResearch/hermes-agent/pull/44596), [#43111](https://github.com/NousResearch/hermes-agent/pull/43111), [#45273](https://github.com/NousResearch/hermes-agent/pull/45273), [#41670](https://github.com/NousResearch/hermes-agent/pull/41670), [#41751](https://github.com/NousResearch/hermes-agent/pull/41751) — @OutThisLife)
- Arrow-key history + queue editing in composer; expand full command inline from the approval bar; follow-streaming-at-bottom + jump-to-bottom button; first-class cron jobs in the sidebar + dashboard scheduler ([#40234](https://github.com/NousResearch/hermes-agent/pull/40234), [#44864](https://github.com/NousResearch/hermes-agent/pull/44864), [#45263](https://github.com/NousResearch/hermes-agent/pull/45263), [#40684](https://github.com/NousResearch/hermes-agent/pull/40684) — @OutThisLife, @teknium1)
- Desktop pets — pop-out overlay + notifications ([#47938](https://github.com/NousResearch/hermes-agent/pull/47938) — @teknium1)
- Full tool-backend config (pickers + per-backend settings) in Settings; run tool-backend post-setup installs from the GUI; uninstall the Chat GUI without removing the agent; Shift+click status-bar zap to toggle YOLO globally; `/browser connect` on a local gateway ([#41232](https://github.com/NousResearch/hermes-agent/pull/41232), [#40559](https://github.com/NousResearch/hermes-agent/pull/40559), [#40355](https://github.com/NousResearch/hermes-agent/pull/40355), [#41666](https://github.com/NousResearch/hermes-agent/pull/41666), [#47245](https://github.com/NousResearch/hermes-agent/pull/47245) — @teknium1, @OutThisLife)
- Japanese + Traditional Chinese language switching ([#40114](https://github.com/NousResearch/hermes-agent/pull/40114))
- "Restart gateway" action (renamed from "Restart messaging") surfaced in the statusbar + on messaging save/toggle toasts; rendered logs are selectable/copyable ([#49094](https://github.com/NousResearch/hermes-agent/pull/49094) — @OutThisLife)

### Remote-gateway & multi-profile
- **Remote media relay** — attach images/PDFs and display agent-written images over the network for the first time; remote-gateway file attachments via `file.attach` ([#41336](https://github.com/NousResearch/hermes-agent/pull/41336), [#42634](https://github.com/NousResearch/hermes-agent/pull/42634) — @teknium1)
- Client + backend version buttons + remote-backend update flow; browse remote backend files; route global-remote profile REST calls; recover chat after sleep/wake by revalidating a stale remote backend ([#42181](https://github.com/NousResearch/hermes-agent/pull/42181), [#44326](https://github.com/NousResearch/hermes-agent/pull/44326), [#47011](https://github.com/NousResearch/hermes-agent/pull/47011), [#41350](https://github.com/NousResearch/hermes-agent/pull/41350) — @OutThisLife, @teknium1)
- Multi-profile fallout cleanup — WS auth + cross-profile session reads; release profile backends before delete; scope session list/model switch/timer per session ([#44529](https://github.com/NousResearch/hermes-agent/pull/44529), [#42613](https://github.com/NousResearch/hermes-agent/pull/42613), [#41103](https://github.com/NousResearch/hermes-agent/pull/41103), [#41120](https://github.com/NousResearch/hermes-agent/pull/41120), [#41182](https://github.com/NousResearch/hermes-agent/pull/41182) — @OutThisLife, @teknium1)
- Stream subagent activity into watch windows; keep streaming painting in unfocused secondary chat windows; recover stranded session windows ([#47060](https://github.com/NousResearch/hermes-agent/pull/47060), [#47919](https://github.com/NousResearch/hermes-agent/pull/47919), [#47655](https://github.com/NousResearch/hermes-agent/pull/47655) — @OutThisLife)

## 📊 Web Dashboard
- Full-featured profile builder (model + skills + MCPs); unify multi-profile management — one machine dashboard + global profile switcher; profile-scoped skills & toolsets; session switcher panel on the Chat tab ([#39084](https://github.com/NousResearch/hermes-agent/pull/39084), [#44007](https://github.com/NousResearch/hermes-agent/pull/44007), [#43808](https://github.com/NousResearch/hermes-agent/pull/43808), [#49077](https://github.com/NousResearch/hermes-agent/pull/49077) — @teknium1)
- Skills hub browser rehaul — connected hubs, featured, preview + security scan; SKILL.md editor on Skills page + attach-skill selector in cron modals; full per-MCP catalog detail; full tool-backend config in the GUI ([#40384](https://github.com/NousResearch/hermes-agent/pull/40384), [#44231](https://github.com/NousResearch/hermes-agent/pull/44231), [#48520](https://github.com/NousResearch/hermes-agent/pull/48520), [#40418](https://github.com/NousResearch/hermes-agent/pull/40418) — @teknium1)
- Enable webhooks from the Webhooks page; idempotent `hermes dashboard register`; auto-restart gateway after Telegram QR onboarding; file browser; change UI font from the theme picker; reasoning-effort picker in the chat sidebar ([#44021](https://github.com/NousResearch/hermes-agent/pull/44021), [#42455](https://github.com/NousResearch/hermes-agent/pull/42455), [#43424](https://github.com/NousResearch/hermes-agent/pull/43424), [#43512](https://github.com/NousResearch/hermes-agent/pull/43512), [#41145](https://github.com/NousResearch/hermes-agent/pull/41145), [#49141](https://github.com/NousResearch/hermes-agent/pull/49141) — @teknium1)

## 🏗️ Core Agent & Architecture

### God-file refactor wave (run_agent.py / cli.py / gateway/run.py)
- **`cli.py` main() 3297 → 954 lines** — extracted 28 subcommand parsers into `hermes_cli/subcommands/`, then promoted 9 closure handlers; 32 slash-command handlers → `CLICommandsMixin`; 18 model-flow wizard functions → `model_setup_flows`; agent-construction cluster → `CLIAgentSetupMixin` ([#41798](https://github.com/NousResearch/hermes-agent/pull/41798), [#41835](https://github.com/NousResearch/hermes-agent/pull/41835), [#41942](https://github.com/NousResearch/hermes-agent/pull/41942), [#42174](https://github.com/NousResearch/hermes-agent/pull/42174), [#42153](https://github.com/NousResearch/hermes-agent/pull/42153) — @teknium1)
- **`gateway/run.py` 19157 → 15870 lines** — 42 slash-command handlers → `GatewaySlashCommandsMixin`; authorization cluster → `GatewayAuthorizationMixin`; kanban watcher loops → `GatewayKanbanWatchersMixin` ([#41886](https://github.com/NousResearch/hermes-agent/pull/41886), [#42159](https://github.com/NousResearch/hermes-agent/pull/42159), [#41849](https://github.com/NousResearch/hermes-agent/pull/41849) — @teknium1)
- **`run_agent.py` turn loop** — extracted prologue into `TurnContext`, post-loop tail into `finalize_turn`, consolidated inner-retry-loop recovery flags into `TurnRetryState` ([#41778](https://github.com/NousResearch/hermes-agent/pull/41778), [#42169](https://github.com/NousResearch/hermes-agent/pull/42169), [#41828](https://github.com/NousResearch/hermes-agent/pull/41828) — @teknium1)

### Agent loop, prompt & tools
- **`memory` batch operations** — atomic add/replace/remove array against the final char budget, so a single call can free space and add entries ([#48507](https://github.com/NousResearch/hermes-agent/pull/48507) — @teknium1)
- **`search_files` lossless densification** — headroom evaluation report + the one densification improvement worth shipping (fewer tokens per result, same matches) ([#47866](https://github.com/NousResearch/hermes-agent/pull/47866) — @teknium1)
- Removed the agent-callable `send_message` tool; coding-context posture across CLI/TUI/desktop/ACP; `read_file` extracts `.ipynb`/`.docx`/`.xlsx` to text ([#47856](https://github.com/NousResearch/hermes-agent/pull/47856), [#43316](https://github.com/NousResearch/hermes-agent/pull/43316), [#37082](https://github.com/NousResearch/hermes-agent/pull/37082) — @teknium1)
- Context-file handling: configurable truncation limit + warnings; scale context-file cap to model window + point agent at the truncated file ([#47251](https://github.com/NousResearch/hermes-agent/pull/47251), [#47846](https://github.com/NousResearch/hermes-agent/pull/47846) — @teknium1)
- Compression: temporal anchoring in compaction summaries; raise compaction trigger to 85% for gpt-5.5 on Codex OAuth ([#41102](https://github.com/NousResearch/hermes-agent/pull/41102), [#40957](https://github.com/NousResearch/hermes-agent/pull/40957) — @teknium1)
- Adaptive middleware (consumed by NeMo-Relay observer telemetry); usable mid-turn steer — desktop affordance + trusted injection ([#29724](https://github.com/NousResearch/hermes-agent/pull/29724), [#40240](https://github.com/NousResearch/hermes-agent/pull/40240) — @teknium1)

### Provider & model support
- New models: `z-ai/glm-5.2` (verified 1M context, OpenRouter + Nous), `anthropic/claude-fable-5`, `laguna-m.1` + `nemotron-3-ultra`, xAI Composer 2.5 in the OAuth picker; default xAI to `grok-build-0.1` ([#47391](https://github.com/NousResearch/hermes-agent/pull/47391), [#45695](https://github.com/NousResearch/hermes-agent/pull/45695), [#42979](https://github.com/NousResearch/hermes-agent/pull/42979), [#42629](https://github.com/NousResearch/hermes-agent/pull/42629), [#47908](https://github.com/NousResearch/hermes-agent/pull/47908), [#47371](https://github.com/NousResearch/hermes-agent/pull/47371) — @teknium1)
- Model picker: Refresh-Models control to bust stale cache; persist Nous recommended-models to disk + fall back on Portal failure; seed catalog disk cache from checkout on update; MiniMax-M3 reports true 1M context ([#48691](https://github.com/NousResearch/hermes-agent/pull/48691), [#42628](https://github.com/NousResearch/hermes-agent/pull/42628), [#42614](https://github.com/NousResearch/hermes-agent/pull/42614), [#43338](https://github.com/NousResearch/hermes-agent/pull/43338) — @teknium1)
- Anthropic adaptive models: default to modern thinking contract; never send `reasoning` field; route `reasoning_effort` to verbosity; require confirmation for very expensive selections ([#42991](https://github.com/NousResearch/hermes-agent/pull/42991), [#43012](https://github.com/NousResearch/hermes-agent/pull/43012), [#43436](https://github.com/NousResearch/hermes-agent/pull/43436), [#43391](https://github.com/NousResearch/hermes-agent/pull/43391) — @teknium1)
- Auth: auto-detect OpenRouter credential from the pool; keep Codex OAuth pool accounts distinct on add/re-auth; resolve xAI OAuth across profiles + write rotated tokens back to root; honor `model.default_headers` for custom OpenAI-compatible providers ([#42263](https://github.com/NousResearch/hermes-agent/pull/42263), [#42316](https://github.com/NousResearch/hermes-agent/pull/42316), [#46614](https://github.com/NousResearch/hermes-agent/pull/46614), [#41096](https://github.com/NousResearch/hermes-agent/pull/41096) — @teknium1)
- Bedrock falls back to non-streaming `InvokeModel` when IAM denies the streaming variant; Ollama default `max_tokens=65536`; surface model refusals as `content_filter` ([#44293](https://github.com/NousResearch/hermes-agent/pull/44293), [#41694](https://github.com/NousResearch/hermes-agent/pull/41694), [#46013](https://github.com/NousResearch/hermes-agent/pull/46013) — @teknium1)

### Sessions, state & multi-agent
- Optional **max session cap**; drop empty sessions on CLI exit and rotation; ACP session-provenance metadata for compression rotation ([#42389](https://github.com/NousResearch/hermes-agent/pull/42389), [#43855](https://github.com/NousResearch/hermes-agent/pull/43855), [#41724](https://github.com/NousResearch/hermes-agent/pull/41724) — @teknium1)
- Delegation: resolve custom-endpoint subagent pools by endpoint identity; remove the default subagent wall-clock timeout; stop subagent completion lines leaking into parent CLI display ([#41730](https://github.com/NousResearch/hermes-agent/pull/41730), [#45149](https://github.com/NousResearch/hermes-agent/pull/45149), [#44223](https://github.com/NousResearch/hermes-agent/pull/44223) — @teknium1)
- Kanban: config-gated auto-subscribe on `kanban_create`; machine-global singleton lock for the embedded dispatcher; pin assigned profile toolsets for workers; hold reclaim while worker still alive ([#48635](https://github.com/NousResearch/hermes-agent/pull/48635), [#49068](https://github.com/NousResearch/hermes-agent/pull/49068), [#45590](https://github.com/NousResearch/hermes-agent/pull/45590), [#49064](https://github.com/NousResearch/hermes-agent/pull/49064) — @teknium1)
- Memory: configurable Hindsight retain observation scopes; OpenViking setup UX; Honcho gateway-gated identity tree; Supermemory session-level ingest ([#46611](https://github.com/NousResearch/hermes-agent/pull/46611), [#48262](https://github.com/NousResearch/hermes-agent/pull/48262), [#44431](https://github.com/NousResearch/hermes-agent/pull/44431), [#38756](https://github.com/NousResearch/hermes-agent/pull/38756) — @teknium1, @alt-glitch)

## 📱 Messaging Platforms (Gateway)

### New channels
- **iMessage via Photon Spectrum** — `hermes photon login` (device-code OAuth), gRPC-native channel (no webhook), markdown rendering, emoji reactions, outbound media via spectrum-ts ([#32348](https://github.com/NousResearch/hermes-agent/pull/32348), [#42582](https://github.com/NousResearch/hermes-agent/pull/42582), [#44713](https://github.com/NousResearch/hermes-agent/pull/44713), [#42397](https://github.com/NousResearch/hermes-agent/pull/42397) — @teknium1)
- **WhatsApp Business Cloud API** adapter (official, no bridge process) ([#44331](https://github.com/NousResearch/hermes-agent/pull/44331), [#43921](https://github.com/NousResearch/hermes-agent/pull/43921) — @jquesnelle, @teknium1)
- **SimpleX** — groups, native attachments, text batching, auto-accept; **Raft** bundled platform plugin with activity hooks ([#42584](https://github.com/NousResearch/hermes-agent/pull/42584), [#48210](https://github.com/NousResearch/hermes-agent/pull/48210) — @teknium1)

### Gateway core & rendering
- Render terminal tool calls as native bash code blocks on markdown platforms; bare fenced code blocks in chat; optional message timestamps for LLM context; configurable `tool_progress_grouping` ([#41215](https://github.com/NousResearch/hermes-agent/pull/41215), [#42576](https://github.com/NousResearch/hermes-agent/pull/42576), [#47253](https://github.com/NousResearch/hermes-agent/pull/47253), [#47228](https://github.com/NousResearch/hermes-agent/pull/47228) — @teknium1)
- Telegram: Bot API 10.1 rich messages (now always-on with opt-out); opt-in Online/Offline bot status indicator; stop cutting long streamed responses; MarkdownV2 on progress edits; gate oversized voice/audio before download ([#44829](https://github.com/NousResearch/hermes-agent/pull/44829), [#45584](https://github.com/NousResearch/hermes-agent/pull/45584), [#49134](https://github.com/NousResearch/hermes-agent/pull/49134), [#43761](https://github.com/NousResearch/hermes-agent/pull/43761), [#44245](https://github.com/NousResearch/hermes-agent/pull/44245) — @teknium1)
- Discord: propagate `role_authorized` so `DISCORD_ALLOWED_ROLES` works end-to-end; recover from runtime gateway task exits; cancel `_bot_task` on connect failure; stop typing after replies ([#43327](https://github.com/NousResearch/hermes-agent/pull/43327), [#44383](https://github.com/NousResearch/hermes-agent/pull/44383), [#44432](https://github.com/NousResearch/hermes-agent/pull/44432), [#44836](https://github.com/NousResearch/hermes-agent/pull/44836) — @teknium1)
- Slack: scope top-level channel messages when `reply_in_thread=false`; thread approval UX (block-size overflow + typed-prefix); make video attachments available to agents; `register_slack_action_handler` plugin API ([#41703](https://github.com/NousResearch/hermes-agent/pull/41703), [#43444](https://github.com/NousResearch/hermes-agent/pull/43444), [#45512](https://github.com/NousResearch/hermes-agent/pull/45512), [#44664](https://github.com/NousResearch/hermes-agent/pull/44664) — @teknium1)
- Replied-to media attachments included; document attachments classified as DOCUMENT on Signal/Email/SimpleX/Teams; WhatsApp restarts stale bridge processes; Matrix room-context isolation; QQbot CPU-spin fix; Weixin rate-limit circuit breaker ([#46107](https://github.com/NousResearch/hermes-agent/pull/46107), [#44695](https://github.com/NousResearch/hermes-agent/pull/44695), [#44205](https://github.com/NousResearch/hermes-agent/pull/44205), [#18505](https://github.com/NousResearch/hermes-agent/pull/18505), [#40574](https://github.com/NousResearch/hermes-agent/pull/40574), [#41718](https://github.com/NousResearch/hermes-agent/pull/41718) — @teknium1, @banditburai)

## 🖥️ CLI, TUI & Setup
- `/version` slash command; `/billing` interactive terminal billing (TUI + CLI); show time since last final agent response on the status bar; persist resolved approval/clarify prompts in scrollback ([#40214](https://github.com/NousResearch/hermes-agent/pull/40214), [#45449](https://github.com/NousResearch/hermes-agent/pull/45449), [#44265](https://github.com/NousResearch/hermes-agent/pull/44265), [#44702](https://github.com/NousResearch/hermes-agent/pull/44702) — @teknium1)
- Lock hermes worktrees so concurrent processes can't clobber them; display custom profile alias names in list/show; clone profiles from any source ([#48699](https://github.com/NousResearch/hermes-agent/pull/48699), [#40371](https://github.com/NousResearch/hermes-agent/pull/40371), [#45630](https://github.com/NousResearch/hermes-agent/pull/45630) — @teknium1)
- Opt-in structured profile-build path on first contact; configurable per-platform system-prompt hints; configurable background memory/skill notifications ([#41114](https://github.com/NousResearch/hermes-agent/pull/41114), [#48630](https://github.com/NousResearch/hermes-agent/pull/48630), [#47226](https://github.com/NousResearch/hermes-agent/pull/47226) — @teknium1)
- TUI: interactive Plugins Hub enable/disable overlay; session name in the terminal titlebar; paint approval/clarify/sudo/secret modals directly (not via throttle); wrap long approval commands instead of truncating ([#42965](https://github.com/NousResearch/hermes-agent/pull/42965), [#43188](https://github.com/NousResearch/hermes-agent/pull/43188), [#41155](https://github.com/NousResearch/hermes-agent/pull/41155), [#44691](https://github.com/NousResearch/hermes-agent/pull/44691) — @teknium1)
- TTS: Gemini persona prompts + audio tags; xAI auto speech tags + speed/streaming knobs; Piper speaker_id; OGG for Telegram auto-TTS ([#43442](https://github.com/NousResearch/hermes-agent/pull/43442), [#49061](https://github.com/NousResearch/hermes-agent/pull/49061), [#49062](https://github.com/NousResearch/hermes-agent/pull/49062), [#49060](https://github.com/NousResearch/hermes-agent/pull/49060), [#41644](https://github.com/NousResearch/hermes-agent/pull/41644) — @teknium1)

## 🔧 Tool System, Skills & MCP
- **image-to-image / editing** in `image_generate` across all backends; shrink images to provider dimension limit ([#48705](https://github.com/NousResearch/hermes-agent/pull/48705), [#45979](https://github.com/NousResearch/hermes-agent/pull/45979) — @teknium1)
- MCP: official **Unreal Engine 5.8** MCP server in the catalog; **elicitation handler** so MCP servers can prompt for mid-tool-call confirmation (payment/OAuth) on whichever surface owns the session — CLI/TUI/Telegram/Slack; expose late-connecting MCP tools to the agent between turns (cache-safe); keepalive ping for short-TTL HTTP sessions; block exfil-shaped / suspicious stdio configs before probe; capability-gate `tools/list` so prompt-only servers connect; preserve stdio argv passthrough + Windows env vars ([#48397](https://github.com/NousResearch/hermes-agent/pull/48397), [#49203](https://github.com/NousResearch/hermes-agent/pull/49203), [#49208](https://github.com/NousResearch/hermes-agent/pull/49208), [#49221](https://github.com/NousResearch/hermes-agent/pull/49221), [#46083](https://github.com/NousResearch/hermes-agent/pull/46083), [#44550](https://github.com/NousResearch/hermes-agent/pull/44550), [#44324](https://github.com/NousResearch/hermes-agent/pull/44324) — @teknium1, @lgalabru)
- Skills: `simplify-code` skill (parallel 3-agent code review & cleanup) + risk-tiered application with Chesterton's Fence; find & diff user-modified bundled skills; optional **payments** skills (Stripe Link, MPP, Projects); CLI-based shop skill; live per-source browse progress ([#41691](https://github.com/NousResearch/hermes-agent/pull/41691), [#49070](https://github.com/NousResearch/hermes-agent/pull/49070), [#48286](https://github.com/NousResearch/hermes-agent/pull/48286), [#31343](https://github.com/NousResearch/hermes-agent/pull/31343), [#47309](https://github.com/NousResearch/hermes-agent/pull/47309), [#43398](https://github.com/NousResearch/hermes-agent/pull/43398) — @teknium1, @colinwren-stripe)
- Curator: make skill consolidation opt-in (prune stays default-on) ([#47840](https://github.com/NousResearch/hermes-agent/pull/47840) — @teknium1)
- Plugins: install from a subdirectory within a repo; accept browser-pasted GitHub URLs in `hermes plugins install`; `session:compress` lifecycle event + `thread_id`/`chat_type` in agent:start/end context ([#42963](https://github.com/NousResearch/hermes-agent/pull/42963), [#33539](https://github.com/NousResearch/hermes-agent/pull/33539), [#47252](https://github.com/NousResearch/hermes-agent/pull/47252), [#41672](https://github.com/NousResearch/hermes-agent/pull/41672) — @teknium1)
- Memory/skill **write approval** gate (default off) — boolean `write_approval` replaces the tri-state `write_mode` ([#38199](https://github.com/NousResearch/hermes-agent/pull/38199), [#43354](https://github.com/NousResearch/hermes-agent/pull/43354) — @teknium1)

## 🌐 Fleet, Relay & Automation
- **Managed scope** — administrator-pinned, user-immutable config & secrets from a root-owned `/etc/hermes` ([#49098](https://github.com/NousResearch/hermes-agent/pull/49098) — @teknium1)
- **Multiplex all profiles over one gateway process** (opt-in) ([#48273](https://github.com/NousResearch/hermes-agent/pull/48273) — @benbarclay)
- **Pluggable CronScheduler** + Chronos managed-cron provider (scale-to-zero) ([#48275](https://github.com/NousResearch/hermes-agent/pull/48275) — @benbarclay)
- **Automation Blueprints** — parameterized automation templates across every surface ([#41309](https://github.com/NousResearch/hermes-agent/pull/41309) — @teknium1)
- Gateway-Gateway relay (phases 0-3): relay adapter + capability descriptor, connector⇄gateway channel auth + signed-HTTP inbound + enroll CLI, WS-only inbound, managed-boot self-provision client ([#48078](https://github.com/NousResearch/hermes-agent/pull/48078), [#48147](https://github.com/NousResearch/hermes-agent/pull/48147), [#48294](https://github.com/NousResearch/hermes-agent/pull/48294), [#48242](https://github.com/NousResearch/hermes-agent/pull/48242) — @teknium1)

## 🐳 Docker, Nix & Installer
- s6: detect supervisor directly for gateway restart; register profile gateways without auto-starting; persist desired state; clear stale log locks ([#46290](https://github.com/NousResearch/hermes-agent/pull/46290), [#46266](https://github.com/NousResearch/hermes-agent/pull/46266), [#46292](https://github.com/NousResearch/hermes-agent/pull/46292), [#46289](https://github.com/NousResearch/hermes-agent/pull/46289) — @teknium1)
- Docker: optimize image size (.dockerignore, drop dev deps, split layers); pre-install matrix deps; supervised gateway uses `--replace`; harden hosted install tree against self-modification ([#38749](https://github.com/NousResearch/hermes-agent/pull/38749), [#42413](https://github.com/NousResearch/hermes-agent/pull/42413), [#47555](https://github.com/NousResearch/hermes-agent/pull/47555), [#47490](https://github.com/NousResearch/hermes-agent/pull/47490) — @teknium1)
- Nix: cold npm build fixes + auto-fix-lockfiles workflow; hashless npm deps via `importNpmLock`; refresh npmDepsHash after Electron 40.10.2 pin ([#41867](https://github.com/NousResearch/hermes-agent/pull/41867), [#48883](https://github.com/NousResearch/hermes-agent/pull/48883), [#48457](https://github.com/NousResearch/hermes-agent/pull/48457) — @teknium1)
- Installer: clear unmerged git index before autostash; scope install-method stamp to the code tree ([#45515](https://github.com/NousResearch/hermes-agent/pull/45515), [#48188](https://github.com/NousResearch/hermes-agent/pull/48188) — @teknium1)

## 🔒 Security & Reliability
- Fail closed on own-policy gateway adapters; fail closed for approval-button auth on Slack/Feishu/Discord when no allowlist is set ([#45634](https://github.com/NousResearch/hermes-agent/pull/45634), [#41226](https://github.com/NousResearch/hermes-agent/pull/41226) — @teknium1)
- Redact secrets in request debug dumps; withhold host metadata from public status; block exfil-shaped / suspicious MCP stdio configs before probe ([#46637](https://github.com/NousResearch/hermes-agent/pull/46637), [#45642](https://github.com/NousResearch/hermes-agent/pull/45642), [#46083](https://github.com/NousResearch/hermes-agent/pull/46083) — @teknium1)
- Close shell-escape denylist bypass + fail-closed on missing approval module; scrub operator environment before launching cua-driver MCP; sanitize env for cron job-script subprocesses; bound TodoStore content length/count; scan REST cron prompts for parity with the agent tool ([#40591](https://github.com/NousResearch/hermes-agent/pull/40591), [#48423](https://github.com/NousResearch/hermes-agent/pull/48423), [#49207](https://github.com/NousResearch/hermes-agent/pull/49207), [#41648](https://github.com/NousResearch/hermes-agent/pull/41648), [#41335](https://github.com/NousResearch/hermes-agent/pull/41335) — @teknium1, @kshitijk4poor)
- Bump urllib3 and PyJWT to clear CVEs; Langfuse redacts base64 data URIs instead of truncating into invalid base64 ([#40179](https://github.com/NousResearch/hermes-agent/pull/40179), [#43322](https://github.com/NousResearch/hermes-agent/pull/43322) — @teknium1)

## 🪟 Windows
- Dashboard `/chat` tab via ConPTY (`win_pty_bridge`) + tests; resolve PowerShell host instead of bare `powershell` for uv install; resolve `powershell.exe` by absolute path so Desktop install doesn't stall ([#42251](https://github.com/NousResearch/hermes-agent/pull/42251), [#48341](https://github.com/NousResearch/hermes-agent/pull/48341), [#40927](https://github.com/NousResearch/hermes-agent/pull/40927) — @teknium1)
- Repair stale winget registration + refresh/merge PATH; kill hermes before recreating venv to release `_bcrypt.pyd` lock; read HERMES_HOME from the registry when env is stale; quarantine running `hermes.exe` during update repair ([#44084](https://github.com/NousResearch/hermes-agent/pull/44084), [#45120](https://github.com/NousResearch/hermes-agent/pull/45120), [#46772](https://github.com/NousResearch/hermes-agent/pull/46772), [#40409](https://github.com/NousResearch/hermes-agent/pull/40409) — @teknium1)
- JOB-breakaway watcher reliability + status --deep probes; handle Windows PTY stdin + detached WS frames; decode subprocess output as UTF-8; confirm-modal on native Windows ([#40909](https://github.com/NousResearch/hermes-agent/pull/40909), [#41953](https://github.com/NousResearch/hermes-agent/pull/41953), [#44328](https://github.com/NousResearch/hermes-agent/pull/44328), [#42419](https://github.com/NousResearch/hermes-agent/pull/42419) — @teknium1)

## 🐛 Notable Bug Fixes
- Percent-encode non-ascii URL components; sanitize `:` in FTS5 queries so colon searches don't silently return empty ([#41430](https://github.com/NousResearch/hermes-agent/pull/41430), [#40653](https://github.com/NousResearch/hermes-agent/pull/40653) — @teknium1)
- Preserve multimodal user content through crash-resilience persist; flatten multimodal content before provider sync; strip MEDIA directives from compressor input ([#47907](https://github.com/NousResearch/hermes-agent/pull/47907), [#44738](https://github.com/NousResearch/hermes-agent/pull/44738), [#44708](https://github.com/NousResearch/hermes-agent/pull/44708) — @teknium1)
- Re-enter retry loop on genuine Nous 429 so the fallback guard runs; scope Nous tags to Nous auxiliary calls; suppress "Credit access paused" notice on free models ([#45136](https://github.com/NousResearch/hermes-agent/pull/45136), [#45801](https://github.com/NousResearch/hermes-agent/pull/45801), [#43669](https://github.com/NousResearch/hermes-agent/pull/43669) — @teknium1)
- Cron: don't strict-scan script-injected output in no-skills jobs; resolve per-job provider "custom" to `providers.custom` instead of codex; repair cron ownership on container restart ([#43223](https://github.com/NousResearch/hermes-agent/pull/43223), [#43505](https://github.com/NousResearch/hermes-agent/pull/43505), [#41976](https://github.com/NousResearch/hermes-agent/pull/41976) — @teknium1)
- *(300+ issues closed this window; full per-area fix list is exhaustive — these are the highest-impact.)*

## ↩️ Reverted in this window (not shipping)
- `html-artifact` skill + sketch/architecture-diagram/concept-diagrams fold ([#48899](https://github.com/NousResearch/hermes-agent/pull/48899)) — reverted ([#49053](https://github.com/NousResearch/hermes-agent/pull/49053)); absent on main.
- Cron per-job profile support reverted ([#43956](https://github.com/NousResearch/hermes-agent/pull/43956)); a nix patchPhase workaround reverted ([#42151](https://github.com/NousResearch/hermes-agent/pull/42151)).

## 👥 Contributors

A huge thank-you to everyone who contributed to this release — **245 contributors** across commits, co-author trailers, and salvaged PRs.

### Core
@teknium1

### Top community contributors (by merged PRs)
- @OutThisLife — 92 PRs (desktop app maturity (shortcuts, notifications, watch-windows, themes))
- @kshitijk4poor — 60 PRs (onboarding, model picker, cron env sanitization)
- @xxxigm — 27 PRs (desktop & gateway fixes)
- @benbarclay — 23 PRs (gateway multiplex, Chronos cron, dashboard auth)
- @helix4u — 21 PRs (gateway & installer reliability)
- @austinpickett — 19 PRs (dashboard & desktop UX)
- @alt-glitch — 14 PRs (usage-aware credits, Supermemory)
- @ethernet8023 — 14 PRs (desktop build pipeline & Linux/Windows)
- @liuhao1024 — 5 PRs (session lifecycle fixes)

### All contributors (alphabetical)
@0z1-ghb, @0xdany, @0xneobyte, @0xyg3n, @1960697431, @895252509, @achaljhawar, @Adolanium, @AhmetArif0, @AIalliAI,
@aimable100, @AJ, @ak2k, @alarcritty, @AlchemistChaos, @aldoeliacim, @alelpoan, @AlexanderBFoley,
@alfred-smith-0, @ali-nld, @alt-glitch, @am423, @ameobius, @AMIK-coorporations, @annguyenNous, @ArcanePivot,
@ARegalado1, @asdlem, @ashishpatel26, @austinpickett, @banditburai, @barronlroth, @Bartok9, @basilalshukaili,
@bbednarski9, @bcsmith528, @benbarclay, @benegessarit, @benfrank241, @bionicbutterfly13, @BlackishGreen33,
@blut-agent, @bmoore210, @bpasquini, @briandevans, @BROCCOLO1D, @capt-marbles, @ccook1963, @Cdddo, @channkim,
@ChasLui, @chimpera, @chromalinx, @CiarasClaws, @claytonchew, @cnfi, @colinwren-stripe, @cresslank,
@cyb0rgk1tty, @dangelo352, @davidgut1982, @deaneeth, @definitelynotguru, @Diyoncrz18, @draix, @dschnurbusch,
@Dusk1e, @dusterbloom, @ehz0ah, @emozilla, @enesilhaydin, @Erosika, @ethernet8023, @Evisolpxe, @firefly,
@flooryyyy, @flyinhigh, @foras910521-lab, @Frowtek, @ft-ioxcs, @fyzanshaik, @Ganesh0690, @gauravsaxena1997,
@giladbau, @glesperance, @GodsBoy, @goku94123, @H-Ali13381, @HaozheZhang6, @haran2001, @harshitAgr, @hbentel,
@helix4u, @HeLLGURD, @Hermes, @huangxun375-stack, @iamlukethedev, @ianculling, @IAvecilla, @iborazzi,
@infinitycrew39, @islam666, @ITheEqualizer, @itsflownium, @Jaaneek, @james47kjv, @jeeves-assistant,
@jeffrobodie-glitch, @JezzaHehn, @jiangkoumo, @jimjsong, @JimLiu, @JimStenstrom, @jmsunseri, @JoaoMarcos44,
@joel611, @JoelJJohnson, @joerj123, @johnjacobkenny, @jooray, @joshuadow, @jplew, @justinbao19, @Justlrnal4,
@Kailigithub, @kamonspecial, @kdunn926, @Kenmege, @Kewe63, @kmccammon, @konsisumer, @kristianvast,
@kshitijk4poor, @kyssta-exe, @l37525778-coder, @LaPhilosophie, @leo4226, @LeonSGP43, @liuhao1024, @Llugaes,
@loongfay, @loongzhao, @lsaether, @m4dni5, @manishbyatroy, @MaxFreedomPollard, @maxmilian, @maxtrigify,
@mnajafian-nv, @mohamedorigami-jpg, @mollusk, @MrDiamondBallz, @mssteuer, @mvanhorn, @naqerl, @Nea74,
@necoweb3, @nepenth, @nicoloboschi, @NormallyGaussian, @OmarB97, @omegazheng, @OndrejDrapalik, @OutThisLife,
@oxngon, @OYLFLMH, @Paperclip, @paulb26, @pengyuyanITYU, @PhilipAD, @pinguarmy, @plcunha, @ProgramCaiCai,
@psionic73, @qin-ctx, @qingshan89, @Que0x, @qWaitCrypto, @r266-tech, @randomsnowflake, @rbrtbn, @rewbs,
@rio-jeong, @Rivuza, @rob-maron, @rodboev, @ruangraung, @RyTsYdUp, @Sahil-SS9, @salesondemandio, @sanidhyasin,
@sarvesh1327, @sdyckjq-lab, @shannonsands, @SHL0MS, @simpolism, @sitkarev, @skyc1e, @skylarbpayne, @SNooZyy2,
@Spaceman-Spiffy, @srojk34, @sweetcornna, @synapsesx, @Tamaz-sujashvili, @tangtaizong666, @temalo, @tfournet,
@thedavidweng, @TheGardenGallery, @tim404x, @tomekpanek, @Tranquil-Flow, @tt-a1i, @tuancookiez-hub,
@underthestars-zhy, @Veritas-7, @victor-kyriazakos, @wesleysimplicio, @WolframRavenwolf, @WompaJango, @x1erra,
@xiaoxinova, @xtymac, @xushibo, @XVVH, @xxchan, @xxxigm, @xy200303, @y0shua1ee, @yanxue06, @yatesjalex,
@YLChen-007, @yoniebans, @youjunxiaji, @yubingz, @zakame, @zapabob, @zccyman, @zimigit2020, @ziwon, @zwcf5200,
@zxcasongs.

---

**Full Changelog**: [v2026.6.5...v2026.6.19](https://github.com/NousResearch/hermes-agent/compare/v2026.6.5...v2026.6.19)

---

## Hermes Agent v0.16.0 (2026.6.5) — The Surface Release

- Tag: `v2026.6.5`
- Published: 2026-06-06T00:55:58Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.5
- Prerelease: False

- Assets: hermes_agent-0.16.0-py3-none-any.whl.sigstore.json, hermes_agent-0.16.0.tar.gz.sigstore.json

# Hermes Agent v0.16.0 (v2026.6.5)

**Release Date:** June 5, 2026
**Since v0.15.2:** 874 commits · 542 merged PRs · 1,962 files changed · 205,216 insertions · 46,217 deletions · 399 issues closed (2 P0, 62 P1, 16 security-tagged) · 170 community contributors (including co-authors)

> **The Surface Release.** Hermes meets you wherever you work. A brand-new native desktop app — built across 100 PRs and 159 commits in a single week — gives you Hermes as a real macOS/Linux/Windows application: one-click install, in-app self-update, drag-and-drop files into chat, an inline model picker in the status bar, concurrent multi-profile sessions, a full Simplified Chinese translation, and the ability to connect to a remote Hermes gateway over OAuth or username/password. Alongside it, the web dashboard grew a full browser-based administration panel (MCP catalog, messaging channels, credentials, webhooks, memory, pluggable OIDC / username-password login), and first-time setup got a "Quick Setup via Nous Portal" path that gets you from install to first message in seconds. The default skill set was trimmed to what you actually need, NVIDIA/skills joined the trusted Skills Hub taps, the model picker is now fuzzy-searchable everywhere (desktop, web, TUI, CLI), and `/undo` finally lets you take back the last N turns. 2 P0 and 62 P1 closures ride along, plus a security round (CVE-2026-48710 Starlette pin, SSRF off-loop hardening, subprocess credential stripping).

---

## ✨ Highlights

- **Hermes Desktop — a real native app, not a terminal wrapper** — This is the headline. There's now a `apps/desktop/` Electron application that installs like any other desktop app on macOS, Linux, and Windows, updates itself in place from inside the app, and gives you a polished GUI for everything Hermes does. You get a proper chat window with streaming, a session list you can archive and search, drag-and-drop files anywhere in the chat area, clipboard image paste, a Cmd+K command palette, and a model picker right in the status bar. If you've been telling friends "it's a CLI agent" and watching their eyes glaze over — now you can just send them an installer. None of this existed a week ago. ([#20059](https://github.com/NousResearch/hermes-agent/pull/20059), [#35607](https://github.com/NousResearch/hermes-agent/pull/35607), [#37099](https://github.com/NousResearch/hermes-agent/pull/37099), [#37379](https://github.com/NousResearch/hermes-agent/pull/37379), [#38631](https://github.com/NousResearch/hermes-agent/pull/38631) — @OutThisLife, @jquesnelle, @ethernet8023, @austinpickett, @benbarclay)

- **Run the desktop app against a remote Hermes — sign in with OAuth or username/password** — The desktop app doesn't have to run Hermes locally. Point it at a remote Hermes gateway (your homelab, a hosted box, a teammate's server) and it connects over a secure WebSocket, authenticating with OAuth or a username/password login — no fiddling with `--insecure` flags or hand-copied session tokens. Each profile can target its own remote host, and you can run concurrent sessions across multiple profiles in one window with cross-profile `@session` links. The practical version: your laptop runs a thin GUI, the heavy agent runs wherever your API keys and compute live. ([#37888](https://github.com/NousResearch/hermes-agent/pull/37888), [#38851](https://github.com/NousResearch/hermes-agent/pull/38851), [#39330](https://github.com/NousResearch/hermes-agent/pull/39330), [#39778](https://github.com/NousResearch/hermes-agent/pull/39778) — @benbarclay, @OutThisLife, @teknium1)

- **The web dashboard is now a full admin panel — configure everything from the browser** — The dashboard grew from "view your sessions" into a complete administration surface. There's a Channels page that sets up every gateway messaging platform (Telegram, Discord, Slack, etc.) from the browser, an admin panel for the MCP catalog with enable/disable toggles, credential management, webhook and hook creation, memory configuration, gateway controls, and a System page with check-before-update and one-click Debug Share. You no longer have to SSH in and edit `config.yaml` to wire up a new messaging channel or MCP server — it's all point-and-click now. ([#36704](https://github.com/NousResearch/hermes-agent/pull/36704), [#36736](https://github.com/NousResearch/hermes-agent/pull/36736), [#37211](https://github.com/NousResearch/hermes-agent/pull/37211), [#38205](https://github.com/NousResearch/hermes-agent/pull/38205), [#38600](https://github.com/NousResearch/hermes-agent/pull/38600) — @teknium1)

- **Hermes Desktop speaks Simplified Chinese — full 简体中文 in the chat GUI** — The desktop app now ships a complete Simplified Chinese (简体中文) translation across every UI surface — the chat window itself, sidebar, settings, command center, cron, messaging, profiles, skills, agents, the lot. English stays the default; switch language in Appearance settings and the choice persists to your config (`display.language`). It's built on a proper typed i18n layer, so adding more languages from here is straightforward. ([#38241](https://github.com/NousResearch/hermes-agent/pull/38241) — @JimLiu)

- **Leaner default skill set — Hermes ships only what you actually need** — The bundled skill set got a deliberate trim. Skills that were redundant or dead are gone (`spotify` — superseded by the native Spotify plugin's 7 tools; `linear` — superseded by `hermes mcp install linear`; `kanban-codex-lane`, `debugging-hermes-tui-commands`, a stale `domain` orphan, and several empty category markers). Heavier or niche skills moved from bundled to optional (the Baoyu creative set, `dspy`, `subagent-driven-development`, `minecraft-modpack-server`, `pokemon-player`, `hermes-s6-container-supervision`) — still one `hermes skills install` away, just not loaded by default. And a new `environments:` relevance gate keeps context-specific skills (kanban, docker/s6) out of the skills index for users who'll never use them, while still loading them on explicit request. The result: a smaller, sharper default skill list, less noise in the picker, and a lighter prompt. The curator can now prune unused **built-in** skills too (not just agent-created ones), with usage tracked for every skill. ([#39028](https://github.com/NousResearch/hermes-agent/pull/39028), [#36701](https://github.com/NousResearch/hermes-agent/pull/36701), [#36228](https://github.com/NousResearch/hermes-agent/pull/36228) — @teknium1)

- **NVIDIA/skills is now a built-in trusted skills tap** — `NVIDIA/skills` joins OpenAI, Anthropic, and HuggingFace as a default trusted tap in the Skills Hub — discoverable, browsable, searchable, and auto-updating through the same pipeline. NVIDIA's verified skills for CUDA-X, AIQ, cuOpt and the rest of their product stack are one install away, with real category labels from the repo's `skills.sh.json` sidecar. ([#34333](https://github.com/NousResearch/hermes-agent/pull/34333) — @teknium1)

- **Quick Setup via Nous Portal — from install to first message in seconds** — First-time setup was thinned down to two clear paths: Quick Setup (sign in with Nous Portal, get a model picker, start chatting immediately) or Full Setup (the detailed wizard for power users). `hermes portal` is now the human-readable alias that runs the full quick-setup Nous flow. The first-run menu explains the difference inline so newcomers aren't guessing. The goal: a brand-new user shouldn't need to read docs to send their first message. ([#35723](https://github.com/NousResearch/hermes-agent/pull/35723), [#36227](https://github.com/NousResearch/hermes-agent/pull/36227), [#38449](https://github.com/NousResearch/hermes-agent/pull/38449), [#38465](https://github.com/NousResearch/hermes-agent/pull/38465) — @teknium1, @kshitijk4poor)

- **Fuzzy model picker, everywhere — type a few letters, find your model** — The model picker now does fuzzy search across the desktop app, web dashboard, TUI, and CLI. Type "v4fl" and `deepseek-v4-flash` surfaces; multi-endpoint providers are grouped under one row instead of cluttering the list with duplicates, and each row carries a description so you know what you're picking. The catalog refreshes hourly instead of daily, so new models show up the same day they launch. New this window: `deepseek-v4-flash`, `MiniMax-M3` with 1M context, `qwen3.7-plus`. ([#36928](https://github.com/NousResearch/hermes-agent/pull/36928), [#35227](https://github.com/NousResearch/hermes-agent/pull/35227), [#35756](https://github.com/NousResearch/hermes-agent/pull/35756), [#35659](https://github.com/NousResearch/hermes-agent/pull/35659), [#36214](https://github.com/NousResearch/hermes-agent/pull/36214) — @kshitijk4poor, @teknium1)

- **`/undo [N]` — take back the last N turns** — Said the wrong thing, or sent the agent down a bad path? `/undo` backs up N user turns, prefills your last message so you can edit and resend, and soft-deletes the turns in between. It works in the CLI, the TUI, and across messaging platforms (Telegram, Discord, etc.) with full parity. Closes a long-standing request ([#21910](https://github.com/NousResearch/hermes-agent/issues/21910)). ([#36229](https://github.com/NousResearch/hermes-agent/pull/36229), [#36699](https://github.com/NousResearch/hermes-agent/pull/36699) — @teknium1)

- **Choose your default interface — `cli` or `tui`** — You can now set whether `hermes chat` drops you into the classic CLI or the Ink TUI by default, with a `--cli` flag to override per-invocation. The TUI also got a single unified `/model` command and a Sessions overlay for switching between live sessions. Use the interface you actually like. ([#37782](https://github.com/NousResearch/hermes-agent/pull/37782), [#37112](https://github.com/NousResearch/hermes-agent/pull/37112) — @OutThisLife)

---

## 🖥️ Hermes Desktop App (NEW)

### Install & lifecycle
- macOS desktop install + in-app self-update; rebuild-and-relaunch cleanly on macOS ([#35607](https://github.com/NousResearch/hermes-agent/pull/35607), [#36198](https://github.com/NousResearch/hermes-agent/pull/36198), [#38296](https://github.com/NousResearch/hermes-agent/pull/38296) — @OutThisLife)
- macOS installer renamed to "Hermes" and turned into a launcher ([#37516](https://github.com/NousResearch/hermes-agent/pull/37516) — @OutThisLife)
- Build desktop in its own `desktop` stage on macOS/Linux instead of silently skipping; content-hash build stamp, `--build-only` / `--force-build` flags ([#36134](https://github.com/NousResearch/hermes-agent/pull/36134) — @OutThisLife, [#37597](https://github.com/NousResearch/hermes-agent/pull/37597) — @ethernet8023)
- Boot-failure recovery + live API-key validation; cancellable install; recover from corrupt cached Electron download ([#35864](https://github.com/NousResearch/hermes-agent/pull/35864), [#37379](https://github.com/NousResearch/hermes-agent/pull/37379), [#39032](https://github.com/NousResearch/hermes-agent/pull/39032) — @OutThisLife, @teknium1)
- Windows: recover from corrupt Electron cache in bootstrap install; stop racing our own backend during in-app update ([#39465](https://github.com/NousResearch/hermes-agent/pull/39465), [#39828](https://github.com/NousResearch/hermes-agent/pull/39828) — @teknium1, @OutThisLife)
- Linux: configure Electron sandbox helper; detect linux arm64 binary; disable GPU acceleration on remote displays to stop flicker ([#37691](https://github.com/NousResearch/hermes-agent/pull/37691), [#38594](https://github.com/NousResearch/hermes-agent/pull/38594), [#37932](https://github.com/NousResearch/hermes-agent/pull/37932) — @ethernet8023, @OutThisLife)
- Require Node ≥20.19/22.12 for the desktop build; zero eslint/typecheck debt + prettier pass ([#38255](https://github.com/NousResearch/hermes-agent/pull/38255), [#39100](https://github.com/NousResearch/hermes-agent/pull/39100) — @OutThisLife)

### Remote-gateway & multi-profile
- Connect to OAuth-gated remote gateways; username/password login for remote gateways; per-profile remote gateway hosts ([#37888](https://github.com/NousResearch/hermes-agent/pull/37888), [#38851](https://github.com/NousResearch/hermes-agent/pull/38851), [#39778](https://github.com/NousResearch/hermes-agent/pull/39778) — @benbarclay, @teknium1, @OutThisLife)
- Concurrent multi-profile sessions, cross-profile `@session` links; re-mint OAuth WS ticket on gateway reconnect; gate OAuth remote connect on AT-or-RT ([#39330](https://github.com/NousResearch/hermes-agent/pull/39330), [#38886](https://github.com/NousResearch/hermes-agent/pull/38886), [#39464](https://github.com/NousResearch/hermes-agent/pull/39464) — @OutThisLife, @teknium1, @benbarclay)
- Offer remote sign-in on a gated-gateway boot failure; validate live WebSocket in remote gateway test ([#39402](https://github.com/NousResearch/hermes-agent/pull/39402), [#39511](https://github.com/NousResearch/hermes-agent/pull/39511) — @teknium1)

### Chat UX & settings
- Drop files anywhere in the chat area; clipboard image paste with dedupe; attachments on Enter, IME composition handling ([#36262](https://github.com/NousResearch/hermes-agent/pull/36262), [#38306](https://github.com/NousResearch/hermes-agent/pull/38306), [#38677](https://github.com/NousResearch/hermes-agent/pull/38677) — @OutThisLife, @teknium1)
- Background needs-input indicator, clarify redesign, Cmd+K palette & UI consistency pass; inline model picker in the status bar; YOLO toggle in the status bar (TUI parity) ([#38631](https://github.com/NousResearch/hermes-agent/pull/38631), [#37738](https://github.com/NousResearch/hermes-agent/pull/37738), [#38517](https://github.com/NousResearch/hermes-agent/pull/38517) — @OutThisLife)
- Session-list overhaul, session hygiene/archive, media streaming + connecting overlay; search sessions by id (SQL-bounded) ([#37379](https://github.com/NousResearch/hermes-agent/pull/37379), [#37099](https://github.com/NousResearch/hermes-agent/pull/37099), [#39062](https://github.com/NousResearch/hermes-agent/pull/39062) — @OutThisLife, @teknium1)
- Dedicated Providers settings + polished Accounts/API-keys UX; consolidate skills + tools management into one pane; move model management into Settings ([#38551](https://github.com/NousResearch/hermes-agent/pull/38551) — @austinpickett, [#37310](https://github.com/NousResearch/hermes-agent/pull/37310), [#37330](https://github.com/NousResearch/hermes-agent/pull/37330) — @jquesnelle)
- Render approval/sudo/secret prompts so tools stop silently timing out; surface skill & quick-command slash commands in the palette; first-class xAI Grok OAuth provider in the launcher ([#38578](https://github.com/NousResearch/hermes-agent/pull/38578), [#38531](https://github.com/NousResearch/hermes-agent/pull/38531), [#37697](https://github.com/NousResearch/hermes-agent/pull/37697) — @teknium1, @OutThisLife)
- "Choose provider later" skip on first-run onboarding; onboarding can configure a local/custom endpoint without an API key; custom zoom shortcuts ([#39483](https://github.com/NousResearch/hermes-agent/pull/39483), [#38572](https://github.com/NousResearch/hermes-agent/pull/38572), [#37894](https://github.com/NousResearch/hermes-agent/pull/37894) — @teknium1, @ethernet8023)
- macOS helper microphone entitlement; scroll-jump fixes (native anchoring, at-rest jump, wheel-up snap-back); thinking block stays open mid-streaming ([#37745](https://github.com/NousResearch/hermes-agent/pull/37745) — @xxxigm, [#37866](https://github.com/NousResearch/hermes-agent/pull/37866), [#38221](https://github.com/NousResearch/hermes-agent/pull/38221), [#38809](https://github.com/NousResearch/hermes-agent/pull/38809) — @OutThisLife, @teknium1, @stremtec)
- GUI quality-of-life triage batch; salvaged AhmetArif0 desktop/dashboard fixes; rename session via `session.title` RPC so `/title` works ([#37536](https://github.com/NousResearch/hermes-agent/pull/37536) — @austinpickett, [#39070](https://github.com/NousResearch/hermes-agent/pull/39070), [#39410](https://github.com/NousResearch/hermes-agent/pull/39410) — @teknium1, @benbarclay)
- `hermes debug share` / `/debug` / `hermes logs` now include `desktop.log` ([#38203](https://github.com/NousResearch/hermes-agent/pull/38203) — @teknium1)
- **Simplified Chinese (简体中文) translation** across every desktop UI surface — typed i18n layer, switch in Appearance settings, persisted via `display.language` (English remains default) ([#38241](https://github.com/NousResearch/hermes-agent/pull/38241) — @JimLiu)
- Full multi-profile support over one global-remote dashboard; remote-profile sessions are first-class (resume, read, rename/archive/delete); new chats honor their profile in global-remote mode ([#39921](https://github.com/NousResearch/hermes-agent/pull/39921), [#39894](https://github.com/NousResearch/hermes-agent/pull/39894), [#39993](https://github.com/NousResearch/hermes-agent/pull/39993) — @OutThisLife)

## 📊 Web Dashboard

### Administration panel (NEW)
- Full administration panel — MCP catalog with enable/disable toggles, pairing, webhooks, credentials, memory, gateway, hook creation, system settings ([#36704](https://github.com/NousResearch/hermes-agent/pull/36704), [#36736](https://github.com/NousResearch/hermes-agent/pull/36736) — @teknium1)
- Channels page — set up every gateway messaging channel from the browser ([#37211](https://github.com/NousResearch/hermes-agent/pull/37211) — @teknium1)
- System page: check-before-update flow + Debug Share ([#38205](https://github.com/NousResearch/hermes-agent/pull/38205), [#38600](https://github.com/NousResearch/hermes-agent/pull/38600) — @teknium1)
- nous-blue theme, bulk sessions, schedule picker; enriched profiles dashboard + de-dupe channel env vars; configurable terminal background via theme ([#37383](https://github.com/NousResearch/hermes-agent/pull/37383), [#37872](https://github.com/NousResearch/hermes-agent/pull/37872) — @austinpickett, [#37156](https://github.com/NousResearch/hermes-agent/pull/37156) — @teknium1)
- Always enable embedded chat; remove dashboard `--tui` flag ([#38591](https://github.com/NousResearch/hermes-agent/pull/38591) — @benbarclay)

### Auth
- Pluggable username/password login (Option B); generic self-hosted OIDC provider + multi-provider verify fix; `hermes dashboard register` for self-hosted OAuth client ([#38819](https://github.com/NousResearch/hermes-agent/pull/38819) — @benbarclay, [#38917](https://github.com/NousResearch/hermes-agent/pull/38917), [#38802](https://github.com/NousResearch/hermes-agent/pull/38802) — @teknium1)
- Rotate dashboard sessions via refresh token; share `/api/*` public allowlist between legacy and OAuth gates; drop `/api/*` paths from OAuth `next=` round trip ([#37247](https://github.com/NousResearch/hermes-agent/pull/37247), [#34254](https://github.com/NousResearch/hermes-agent/pull/34254), [#36244](https://github.com/NousResearch/hermes-agent/pull/36244) — @benbarclay)
- Chat tab works in gated (OAuth) mode; trust non-web WS origins on OAuth-gated binds after ticket auth; authenticate server-spawned PTY child WS; sanction plugin WS/upload auth via SDK helpers ([#34793](https://github.com/NousResearch/hermes-agent/pull/34793), [#37870](https://github.com/NousResearch/hermes-agent/pull/37870), [#37972](https://github.com/NousResearch/hermes-agent/pull/37972), [#38549](https://github.com/NousResearch/hermes-agent/pull/38549) — @teknium1, @benbarclay, @kshitijk4poor)
- Allow desktop websocket origins on remote binds ([#37747](https://github.com/NousResearch/hermes-agent/pull/37747) — @teknium1)

## 🏗️ Core Agent & Architecture

### Provider & model support
- New models: `deepseek-v4-flash` (+ trimmed variants, maker-grouped curated lists), `MiniMax-M3` with 1M context on native minimax providers, `qwen3.7-plus` (Nous + OpenRouter), `gemini-3.5-flash` to Gemini OAuth + API-key pickers ([#35659](https://github.com/NousResearch/hermes-agent/pull/35659), [#36214](https://github.com/NousResearch/hermes-agent/pull/36214), [#39409](https://github.com/NousResearch/hermes-agent/pull/39409), [#37046](https://github.com/NousResearch/hermes-agent/pull/37046) — @teknium1)
- Model picker: fuzzy search across WebUI/TUI/CLI; group multi-endpoint providers under one row; refresh provider descriptions + describe grouped rows; refresh catalog hourly; stop routing OpenAI selection to OpenRouter ([#36928](https://github.com/NousResearch/hermes-agent/pull/36928) — @kshitijk4poor, [#35227](https://github.com/NousResearch/hermes-agent/pull/35227), [#35773](https://github.com/NousResearch/hermes-agent/pull/35773), [#35756](https://github.com/NousResearch/hermes-agent/pull/35756), [#37175](https://github.com/NousResearch/hermes-agent/pull/37175))
- Always show Nous Tool Gateway backends, login on select; surface the Nous free tool pool (entitlement + setup prompt); route FAL video gen through managed Nous gateway ([#35792](https://github.com/NousResearch/hermes-agent/pull/35792) — @teknium1, [#36153](https://github.com/NousResearch/hermes-agent/pull/36153), [#33259](https://github.com/NousResearch/hermes-agent/pull/33259) — @alt-glitch)
- Persist mid-session model switch to database; recover model on post-interrupt recovery turn ([#35256](https://github.com/NousResearch/hermes-agent/pull/35256), [#35381](https://github.com/NousResearch/hermes-agent/pull/35381) — @teknium1)
- Credential pool: `STATUS_DEAD` for terminal OAuth failures; isolate custom provider picker credentials ([#34412](https://github.com/NousResearch/hermes-agent/pull/34412), [#34810](https://github.com/NousResearch/hermes-agent/pull/34810) — @teknium1)
- Disable Nous Portal legacy session-key inference fallback — JWT-only ([#34508](https://github.com/NousResearch/hermes-agent/pull/34508) — @kshitijk4poor)

### Agent loop, prompt & tools
- `/undo [N]` — backs up N user turns with prefill + soft-delete (CLI/TUI + messaging-platform parity) ([#36229](https://github.com/NousResearch/hermes-agent/pull/36229), [#36699](https://github.com/NousResearch/hermes-agent/pull/36699) — @teknium1)
- Progressive tool disclosure for MCP and plugin tools (scoped); embedder environment-hint hook for the system prompt; universal task-completion guidance + local Python toolchain probe ([#34493](https://github.com/NousResearch/hermes-agent/pull/34493), [#34574](https://github.com/NousResearch/hermes-agent/pull/34574), [#34340](https://github.com/NousResearch/hermes-agent/pull/34340) — @teknium1)
- Uncap delegation `max_spawn_depth` (floor 1, no ceiling); broaden Hermes self-knowledge pointer to docs + skill; `hermes prompt-size` diagnostic ([#39772](https://github.com/NousResearch/hermes-agent/pull/39772), [#38538](https://github.com/NousResearch/hermes-agent/pull/38538), [#35276](https://github.com/NousResearch/hermes-agent/pull/35276) — @teknium1)
- `perf(read_file)`: compact line-number gutter — ~14% fewer tokens per read (now the only format) ([#35368](https://github.com/NousResearch/hermes-agent/pull/35368), [#35532](https://github.com/NousResearch/hermes-agent/pull/35532) — @teknium1)
- Resolve agent cwd from `TERMINAL_CWD` via one reader; align prefill messages key handling; resume relaunches in the session's original working directory ([#35028](https://github.com/NousResearch/hermes-agent/pull/35028) — @banditburai, [#38760](https://github.com/NousResearch/hermes-agent/pull/38760) — @helix4u, [#38562](https://github.com/NousResearch/hermes-agent/pull/38562) — @teknium1)
- Prevent session-id fork from concurrent compressions; observer telemetry hooks + NeMo-Relay plugin (gated tool emit) ([#34351](https://github.com/NousResearch/hermes-agent/pull/34351), [#38232](https://github.com/NousResearch/hermes-agent/pull/38232) — @teknium1)

### Sessions, state & memory
- `perf(state)`: merge FTS5 segments on VACUUM + `hermes sessions optimize`; keep `/branch` sessions visible after parent reopen; survive missing FTS5 runtimes ([#34596](https://github.com/NousResearch/hermes-agent/pull/34596), [#39214](https://github.com/NousResearch/hermes-agent/pull/39214) — @teknium1, @kshitijk4poor, [#35452](https://github.com/NousResearch/hermes-agent/pull/35452) — @helix4u)
- Honcho: make startup fail open; harden self-hosted setup paths ([#24847](https://github.com/NousResearch/hermes-agent/pull/24847) — @stephenschoettler, [#35170](https://github.com/NousResearch/hermes-agent/pull/35170) — @kshitijk4poor)
- Supermemory: session-level ingest + kebab aliases ([#38756](https://github.com/NousResearch/hermes-agent/pull/38756) — @alt-glitch)

## 🧩 Multi-Agent (Kanban) & Skills

### Kanban
- `goal_mode` cards run workers in a `/goal` loop; file attachments on tasks; attach images referenced in task bodies to worker vision ([#35710](https://github.com/NousResearch/hermes-agent/pull/35710), [#35395](https://github.com/NousResearch/hermes-agent/pull/35395), [#34210](https://github.com/NousResearch/hermes-agent/pull/34210) — @teknium1)
- `default_assignee` fallback + per-profile concurrency cap; `POST /runs/{run_id}/terminate` endpoint; gate notifier watcher on `dispatch_in_gateway` ([#34244](https://github.com/NousResearch/hermes-agent/pull/34244), [#34449](https://github.com/NousResearch/hermes-agent/pull/34449), [#37174](https://github.com/NousResearch/hermes-agent/pull/37174) — @teknium1)
- CLI dispatch config passthrough + humanizer skill swap ([#34337](https://github.com/NousResearch/hermes-agent/pull/34337) — @teknium1)

### Skills
- **Leaner default skill set** ([#39028](https://github.com/NousResearch/hermes-agent/pull/39028) — @teknium1):
  - Removed (redundant / dead): `spotify` (→ Spotify plugin's 7 native tools), `linear` (→ `hermes mcp install linear`), `kanban-codex-lane`, `debugging-hermes-tui-commands`, stale `domain` orphan, empty category markers (`diagramming`, `gifs`, `inference-sh`, `mlops/training`, `mlops/vector-databases`)
  - Bundled → optional: `baoyu-article-illustrator`, `baoyu-comic`, `creative-ideation`, `pixel-art`, `dspy`, `subagent-driven-development`, `minecraft-modpack-server`, `pokemon-player`, `hermes-s6-container-supervision`
  - Consolidated: `webhook-subscriptions` + `native-mcp` folded into the `hermes-agent` skill as on-demand references; `writing-plans` merged into `plan` (v2.0.0)
  - New `environments:` frontmatter relevance gate (`kanban` / `docker` / `s6`) — context-specific skills stop appearing in the index for users who won't use them, still load on explicit request
- Curator can now prune unused **built-in** skills (not just agent-created), with usage tracked for every skill ([#36701](https://github.com/NousResearch/hermes-agent/pull/36701) — @teknium1)
- Blank-slate skills — `install --no-skills` + opt-out/opt-in for the default profile ([#36228](https://github.com/NousResearch/hermes-agent/pull/36228) — @teknium1)
- **NVIDIA/skills trusted tap** — `NVIDIA/skills` is now a default trusted Skills Hub tap alongside OpenAI/Anthropic/HuggingFace; `skills.sh.json` sidecar gives taps real category labels ([#34333](https://github.com/NousResearch/hermes-agent/pull/34333) — @teknium1)
- Skills Hub: fix browse cap, add source links + copy buttons + category cleanup ([#37143](https://github.com/NousResearch/hermes-agent/pull/37143) — @teknium1)
- New optional skills: `grok` (xAI Grok Build CLI), `antigravity-cli` operator (under autonomous-ai-agents) ([#34582](https://github.com/NousResearch/hermes-agent/pull/34582), [#34583](https://github.com/NousResearch/hermes-agent/pull/34583), [#34604](https://github.com/NousResearch/hermes-agent/pull/34604) — @teknium1)

## 📱 Messaging Platforms (Gateway)

- Structured stream-event protocol + Telegram draft formatting parity; per-platform streaming defaults (Telegram on, Discord off) + dashboard toggles; surface gateway streaming block in `DEFAULT_CONFIG` ([#37250](https://github.com/NousResearch/hermes-agent/pull/37250), [#37303](https://github.com/NousResearch/hermes-agent/pull/37303), [#37285](https://github.com/NousResearch/hermes-agent/pull/37285) — @teknium1)
- Discord voice-channel mixer — ambient idle bed + verbal acks that overlap TTS; explain `/voice` usage when toggled bare ([#39659](https://github.com/NousResearch/hermes-agent/pull/39659), [#39766](https://github.com/NousResearch/hermes-agent/pull/39766) — @teknium1)
- Handle Feishu meeting invitations; bluebubbles group mention gating; matrix bang-command aliases; matrix fail-closed approval reaction auth ([#39040](https://github.com/NousResearch/hermes-agent/pull/39040), [#37091](https://github.com/NousResearch/hermes-agent/pull/37091), [#38175](https://github.com/NousResearch/hermes-agent/pull/38175) — @teknium1, @alt-glitch, [#34567](https://github.com/NousResearch/hermes-agent/pull/34567))
- Clean service restart flow; close ResponseStore + dispose unowned adapter on reconnect failure; weixin `asyncio.wait_for` timeouts ([#36188](https://github.com/NousResearch/hermes-agent/pull/36188) — @helix4u, [#37679](https://github.com/NousResearch/hermes-agent/pull/37679) — @Fearvox, [#35117](https://github.com/NousResearch/hermes-agent/pull/35117) — @banditburai)

## 🖥️ CLI, TUI & Setup

- Configurable default interface (cli vs tui) + `--cli` flag; TUI single `/model` command + unified Sessions overlay; nudge toward `/agents` dashboard when delegation starts ([#37782](https://github.com/NousResearch/hermes-agent/pull/37782), [#37112](https://github.com/NousResearch/hermes-agent/pull/37112) — @OutThisLife, [#34704](https://github.com/NousResearch/hermes-agent/pull/34704) — @kshitijk4poor)
- Thin out setup — Quick Setup via Nous Portal + Full Setup defaults; explain Quick vs Full inline; `hermes portal` human-readable Portal onboarding alias + full quick-setup Nous flow ([#35723](https://github.com/NousResearch/hermes-agent/pull/35723), [#36227](https://github.com/NousResearch/hermes-agent/pull/36227), [#38449](https://github.com/NousResearch/hermes-agent/pull/38449), [#38465](https://github.com/NousResearch/hermes-agent/pull/38465) — @teknium1, @kshitijk4poor)
- Set process title to `hermes` in ps/top/htop; warn on unsupported pip installs + fix stale update-check cache ([#35143](https://github.com/NousResearch/hermes-agent/pull/35143), [#34846](https://github.com/NousResearch/hermes-agent/pull/34846) — @teknium1)
- TUI perf: stop slow/dead MCP servers from freezing startup; stop eager MCP discovery from blocking agent-capable startup; stop persisting full tool output in trail lines (silent OOM) ([#35273](https://github.com/NousResearch/hermes-agent/pull/35273), [#35397](https://github.com/NousResearch/hermes-agent/pull/35397), [#38224](https://github.com/NousResearch/hermes-agent/pull/38224) — @teknium1)
- TUI fixes: auto-recover session on unexpected gateway death; reassemble split SGR mouse sequences; preserve UTF-8 in PowerShell clipboard; reset terminal input modes on exit; `/save` snapshots under Hermes home ([#35893](https://github.com/NousResearch/hermes-agent/pull/35893), [#38564](https://github.com/NousResearch/hermes-agent/pull/38564) — @OutThisLife, [#35222](https://github.com/NousResearch/hermes-agent/pull/35222) — @teknium1, [#36864](https://github.com/NousResearch/hermes-agent/pull/36864) — @maxmilian, [#38251](https://github.com/NousResearch/hermes-agent/pull/38251) — @austinpickett)
- Setup model/provider pickers migrated off `simple_term_menu` to curses (ESC + ghost-row fixes); default browser/TTS picker to free local backend, not paid Nous ([#35806](https://github.com/NousResearch/hermes-agent/pull/35806), [#37800](https://github.com/NousResearch/hermes-agent/pull/37800) — @teknium1)

## 🔧 Tool System & Installer

- `single managed-uv path`, delete fts5 installer escalation; installer commit pinning opt-in (default branch-follow); shallow clones ([#37660](https://github.com/NousResearch/hermes-agent/pull/37660) — @ethernet8023, [#37123](https://github.com/NousResearch/hermes-agent/pull/37123) — @jquesnelle, [#39423](https://github.com/NousResearch/hermes-agent/pull/39423) — @ethernet8023)
- `ensure_uv()` survives the update boundary (no first-run crash); harden venv rebuild + verify core deps after install; require managed marker before destructive clean; stash/restore by default for non-interactive updates ([#39780](https://github.com/NousResearch/hermes-agent/pull/39780) — @OutThisLife, [#38887](https://github.com/NousResearch/hermes-agent/pull/38887), [#39568](https://github.com/NousResearch/hermes-agent/pull/39568), [#39645](https://github.com/NousResearch/hermes-agent/pull/39645) — @teknium1, @helix4u)
- MCP: stop reporting false OAuth success when no token was obtained; vision honors `model.supports_vision` in `vision_analyze` + `browser_vision`; MiniMax t2a_v2 TTS `raise_for_status` ([#34807](https://github.com/NousResearch/hermes-agent/pull/34807), [#34562](https://github.com/NousResearch/hermes-agent/pull/34562), [#39057](https://github.com/NousResearch/hermes-agent/pull/39057) — @teknium1)
- yuanbao: cache resolved media resources by resourceId ([#34474](https://github.com/NousResearch/hermes-agent/pull/34474) — @teknium1)

## 🐳 Docker & Deployment

- Container reuse + bounded-sync cleanup + orphan reaper; auto-join Docker socket group for docker-in-docker backend; boot non-root containers (skip s6-setuidgid drop when already unprivileged) ([#33645](https://github.com/NousResearch/hermes-agent/pull/33645), [#34407](https://github.com/NousResearch/hermes-agent/pull/34407) — @benbarclay, [#34837](https://github.com/NousResearch/hermes-agent/pull/34837) — @IAvecilla)
- Skip unnecessary boot chown when volume ownership matches remapped UID; seed `gateway_state.json` from `HERMES_GATEWAY_BOOTSTRAP_STATE` on first boot; tag containers with hermes-agent labels for identification ([#35027](https://github.com/NousResearch/hermes-agent/pull/35027) — @Foldblade, [#37896](https://github.com/NousResearch/hermes-agent/pull/37896) — @benbarclay)
- Point TUI launcher at prebuilt bundle via `HERMES_TUI_DIR`; consolidate node/nix workspace lockfile + update all consumers ([#37923](https://github.com/NousResearch/hermes-agent/pull/37923), [#36171](https://github.com/NousResearch/hermes-agent/pull/36171) — @benbarclay, @ethernet8023)

## 🔒 Security & Reliability

- **CVE-2026-48710 (Starlette BadHost)** — pin patched Starlette ≥1.0.1 ([#35118](https://github.com/NousResearch/hermes-agent/pull/35118) — @teknium1)
- Run URL SSRF checks off the event loop in async paths; strip Bedrock inference bearer token from subprocess env; add `bws_cache.json` to file-safety read guard; neutralize file paths in mutation-verifier footer ([#39046](https://github.com/NousResearch/hermes-agent/pull/39046), [#34498](https://github.com/NousResearch/hermes-agent/pull/34498), [#34421](https://github.com/NousResearch/hermes-agent/pull/34421), [#35684](https://github.com/NousResearch/hermes-agent/pull/35684) — @teknium1)
- Restore approval/sudo context in `execute_code` + guard entry points; add docker restart/stop/kill to `DANGEROUS_PATTERNS`; sanitize invisible unicode in vetted skill content; deepcopy tools before in-place xAI mutation ([#34497](https://github.com/NousResearch/hermes-agent/pull/34497), [#33438](https://github.com/NousResearch/hermes-agent/pull/33438) — @teknium1, @Sarbai, [#37245](https://github.com/NousResearch/hermes-agent/pull/37245), [#34416](https://github.com/NousResearch/hermes-agent/pull/34416))
- Sandbox-mirror soft guard for writes to per-task `.hermes` mirrors; honcho fail-open on startup ([#32213](https://github.com/NousResearch/hermes-agent/pull/32213) — @briandevans, [#24847](https://github.com/NousResearch/hermes-agent/pull/24847) — @stephenschoettler)

## 🐛 Notable Bug Fixes

- **399 issues closed** this window (2 P0, 62 P1, 16 security-tagged, 262 bug-labeled).
- Desktop: keep in-flight new chats from vanishing on refresh; Stop button actually interrupts when a turn is queued; stop background session messages bleeding into the active transcript; slash/@ completion menu navigable & Esc-dismissable; IME Enter no longer splits messages ([#37908](https://github.com/NousResearch/hermes-agent/pull/37908) — @OutThisLife, [#37948](https://github.com/NousResearch/hermes-agent/pull/37948), [#37975](https://github.com/NousResearch/hermes-agent/pull/37975), [#37937](https://github.com/NousResearch/hermes-agent/pull/37937) — @kshitijk4poor, [#38333](https://github.com/NousResearch/hermes-agent/pull/38333) — @stremtec)
- Update: stop stash/restore from clobbering desktop source on managed clones; don't fail desktop rebuild/skills sync on mid-rebuild venv; export launcher virtualenv to uv ([#38542](https://github.com/NousResearch/hermes-agent/pull/38542), [#38885](https://github.com/NousResearch/hermes-agent/pull/38885), [#35224](https://github.com/NousResearch/hermes-agent/pull/35224) — @teknium1)
- Voice: honor `PIPEWIRE_REMOTE` in PortAudio fallback; allow `/voice` over SSH when a sound server is reachable; restore mistralai (2.4.8 clean, ban lifted) ([#33473](https://github.com/NousResearch/hermes-agent/pull/33473) — @Dusk1e, [#35719](https://github.com/NousResearch/hermes-agent/pull/35719), [#34841](https://github.com/NousResearch/hermes-agent/pull/34841) — @teknium1)

## 📚 Documentation

- New Desktop App guide + remote-backend sections (session token, `--tui` requirement, username/password connect, dashboard/gateway prerequisites) ([#37457](https://github.com/NousResearch/hermes-agent/pull/37457), [#38144](https://github.com/NousResearch/hermes-agent/pull/38144), [#38180](https://github.com/NousResearch/hermes-agent/pull/38180), [#38534](https://github.com/NousResearch/hermes-agent/pull/38534), [#39128](https://github.com/NousResearch/hermes-agent/pull/39128) — @teknium1)
- Dashboard auth-provider suitability + registration across dashboard/Docker/Desktop; network egress isolation guide for Docker ([#39633](https://github.com/NousResearch/hermes-agent/pull/39633) — @benbarclay, [#26385](https://github.com/NousResearch/hermes-agent/pull/26385) — @Manzela)

---

![Hermes Agent v0.16.0 — The Surface Release](https://v3b.fal.media/files/b/0a9d248f/AyRBEKS8C4o6HZNF6KjbD_M2U5y4wY.png)

## 👥 Contributors

A huge thank-you to the **170 community contributors** (including co-authors) who shipped work in this release.

### Core
- @teknium1

### Top community contributors (by merged-PR count)
- **@OutThisLife** (52) — built the desktop app end to end: install, self-update, remote-gateway connect, multi-profile sessions, chat UX, status-bar model picker
- **@benbarclay** (44) — Docker hardening, dashboard auth (OIDC, username/password, refresh-token rotation), desktop OAuth remote connect
- **@kshitijk4poor** (29) — fuzzy model picker, setup/portal onboarding, desktop completion-menu & Stop-button fixes, honcho hardening
- **@ethernet8023** (18) — desktop build pipeline (content-hash stamp, build flags), Linux/arm64 desktop support, managed-uv consolidation
- **@austinpickett** (8) — dashboard nous-blue theme + bulk sessions, desktop Providers settings, GUI QoL triage
- **@alt-glitch** (7) — Nous tool-pool entitlement surfacing, FAL video-gen managed gateway, supermemory session ingest, matrix aliases
- **@helix4u** (6) — gateway service-restart flow, update destructive-clean guard, config prefill alignment
- **@jquesnelle** (4) — installer commit-pinning opt-in, desktop skills/tools + model-management consolidation
- **@JimLiu** — full Simplified Chinese (简体中文) desktop translation + typed i18n layer

### All Contributors

@0xharryriddle, @a1245582339, @adybag14-cyber, @AhmetArif0, @alaamohanad169-ship-it, @alelpoan, @alt-glitch,
@Aman113114-IITD, @amathxbt, @aminvakil, @annguyenNous, @aqilaziz, @Archerouyang, @ashishpatel26, @asimons81,
@austinpickett, @banditburai, @baofuen, @Bartok9, @bbednarski9, @beardthelion, @bedirhancode, @benbarclay,
@benfrank241, @blackpilledsoftware-prog, @bluefishs, @brian-doherty, @briancl2, @briandevans, @BROCCOLO1D,
@caojiguang, @CharZhou, @counterposition, @coygeek, @CryptoByz, @davetist, @davidgut1982, @dchenk, @dirtyren,
@donovan-yohan, @dparikh79, @dskwe, @Dusk1e, @dvir-pashut, @EloquentBrush0x, @emozilla, @ErnestHysa, @Erosika,
@ethernet8023, @f3rs3n, @faisfamilytravel, @Fearvox, @ferminquant, @fesalfayed, @firefly, @flooryyyy,
@Foldblade, @Frowtek, @gbarany, @Glucksberg, @GodsBoy, @haran2001, @harjothkhara, @HashClawAI, @hayka-pacha,
@helix4u, @HeLLGURD, @Hinotoi-agent, @hllqkb, @IAvecilla, @inchargeautomation-lab, @Interstellar-code, @isair,
@ITheEqualizer, @jeffrobodie-glitch, @JezzaHehn, @JimLiu, @Julientalbot, @julio-cloudvisor, @karmeleon,
@Kenmege, @Kewe63, @Kolektori, @konsisumer, @kshitijk4poor, @kurobaryo, @kweiner, @kyssta-exe, @Kyzcreig,
@LengR, @leonardsellem, @LeonSGP43, @libre-7, @liuboacean, @liuhao1024, @loongzhao, @luyao618, @MaheshtheDev,
@Manzela, @mathijsvandenhurk, @MattMaximo, @maxcz79, @maxmilian, @Moikapy, @MustafaKara7, @nateGeorge,
@nepenth, @nielskaspers, @ninjmnky, @octavioturra, @OCWC22, @ohMyJason, @ousiaresearch, @outsourc-e,
@OutThisLife, @Pluviobyte, @polnikale, @pxdsgnco, @Que0x, @r266-tech, @redpiggy-cyber, @rewbs, @rexdotsh,
@rob-maron, @SaguaroDev, @sahibzada-allahyar, @Sarbai, @sarvesh1327, @scubamount, @SeaXen, @seppegadeyne,
@shannonsands, @SHL0MS, @SimoKiihamaki, @SiTaggart, @solaitken, @sprmn24, @stephenschoettler, @steveonjava,
@stremtec, @Subway2023, @sweetcornna, @Sylw3ster, @ThyFriendlyFox, @tillfalko, @tmchow, @TonyPepeBear,
@Tranquil-Flow, @truenorth-lj, @tuancookiez-hub, @Twanislas, @tymrtn, @uzunkuyruk, @ViewWay, @VinciZhu,
@vinoth12940, @vladkvlchk, @vynxevainglory-ai, @WadydX, @wenchengxucool, @whyhkzk, @worlldz, @Wysie, @x1am1,
@xxxigm, @ygd58, @youngstar-eth, @zapabob, @zhaoleibd, @Zyrixtrex

---

**Full Changelog**: [v2026.5.29.2...v2026.6.5](https://github.com/NousResearch/hermes-agent/compare/v2026.5.29.2...v2026.6.5)

---

## Hermes Agent v0.15.2 (2026.5.29.2)

- Tag: `v2026.5.29.2`
- Published: 2026-05-29T13:37:26Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29.2
- Prerelease: False

- Assets: hermes_agent-0.15.2-py3-none-any.whl, hermes_agent-0.15.2.tar.gz

# Hermes Agent v0.15.2 (v2026.5.29.2)

**Release Date:** May 29, 2026

## 🐛 Bug Fixes

- Packaging): ship bundled plugin.yaml manifests in wheel and sdist ([`827f7f07`](https://github.com/NousResearch/hermes-agent/commit/827f7f07825be57108cbea18325e8f5e9fb5d2f2))

## 👥 Contributors

Thank you to everyone who contributed to this release!

- @outsourc-e (1 commit)
- @dparikh79 (1 commit)
- @ousiaresearch (1 commit)
- @libre-7 (1 commit)

**Full Changelog**: [v2026.5.29...v2026.5.29.2](https://github.com/NousResearch/hermes-agent/compare/v2026.5.29...v2026.5.29.2)

---

## Hermes Agent v0.15.1 (2026.5.29) — The Patch Release

- Tag: `v2026.5.29`
- Published: 2026-05-29T01:12:15Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29
- Prerelease: False

- Assets: hermes_agent-0.15.1-py3-none-any.whl.sigstore.json, hermes_agent-0.15.1.tar.gz.sigstore.json

# Hermes Agent v0.15.1 (v2026.5.29)

**Release Date:** May 29, 2026
**Since v0.15.0:** 28 commits · 21 merged PRs · hotfix release · 9 contributors

> **The Patch Release.** A same-day hotfix for v0.15.0. Headline fix: the dashboard infinite-reload loop that hit anyone running v0.15.0 in loopback mode (Docker, hosted Hermes, fresh installs). A handful of other v0.15.0 follow-ups go along for the ride — kanban worker SIGTERM, `/model` picker unification, `/yolo` session bypass, the full 19,932-entry skills.sh catalog, `.md` media delivery restoration, gateway probe-stepdown safety, web-URL redaction passthrough, kanban worker vision on referenced images, hindsight observation-default. Docker users get an explicit `--insecure` opt-in env var (no more bind-host inference), MCP server bare-command PATH resolution, and arm64 PR-build cache fixes.

---

## ✨ Highlights

- **Dashboard 401 reload loop fixed** — In loopback mode the dashboard's identity probe (`/api/auth/me`) returns 401 by design, but v0.15.0's stale-token reload guard treated every 401 as a rotated session token and full-page-reloaded to pick up a fresh one. Every successful sibling call cleared the one-shot reload guard, so the page reload-looped forever (Firefox: "Navigated to /sessions" storm; Chrome: React re-render storm). Fix adds an `allowUnauthorized` opt-out to `fetchJSON` that skips only the loopback stale-token reload — 401 still throws so `AuthWidget` swallows it, gated-mode `login_url` redirects are unaffected. Closes [#34206](https://github.com/NousResearch/hermes-agent/issues/34206), [#34202](https://github.com/NousResearch/hermes-agent/issues/34202). ([#30698](https://github.com/NousResearch/hermes-agent/pull/30698) — @austinpickett)

- **Docker dashboard `--insecure` is now an explicit env opt-in, never derived from bind host** — Previously the Docker entrypoint inferred `--insecure` when the dashboard bound to a non-loopback host. That conflated "I want LAN access" with "I want to disable the same-origin guard." The fix splits them: bind host is bind host, and disabling the dashboard's loopback auth requires an explicit `HERMES_DASHBOARD_INSECURE=1`. Existing setups that genuinely wanted insecure binding must now set the env var. ([#34188](https://github.com/NousResearch/hermes-agent/pull/34188), [#34204](https://github.com/NousResearch/hermes-agent/pull/34204) — @benbarclay)

- **MCP bare command resolution under Docker** — MCP servers configured with bare commands (`npx`, `npm`, `node`) now resolve against `/usr/local/bin` so they actually launch inside the Docker image where those binaries live. v0.15.0 left these failing silently in containers when the agent's effective PATH didn't include the Node toolchain location. ([#34186](https://github.com/NousResearch/hermes-agent/pull/34186) — @benbarclay)

- **Skills page sidebar / source pills restored** — A stale `useMemo` dependency in the new dashboard skills page collapsed the source pills and category sidebar to "All" only. Fixed; both surfaces now reflect the live catalog state. ([#34194](https://github.com/NousResearch/hermes-agent/pull/34194))

- **Kanban worker can be killed again** — `SIGTERM` on a kanban worker was being absorbed by an intermediate process and the worker stayed running. Closes [#28181](https://github.com/NousResearch/hermes-agent/issues/28181). ([#34045](https://github.com/NousResearch/hermes-agent/pull/34045))

- **Full skills.sh catalog (858 → 19,932 entries)** — The skills hub page was pulling a partial paginated catalog. The fetch now walks the sitemap, so all 19,932 skills.sh entries surface in the picker instead of just the first 858. ([#34025](https://github.com/NousResearch/hermes-agent/pull/34025))

---

## 🐛 Bug Fixes

### Dashboard / Web

- **`/api/auth/me` 401 no longer triggers reload loop** in loopback mode — ([#30698](https://github.com/NousResearch/hermes-agent/pull/30698) — @austinpickett)
- **Skills page source pills + category sidebar restored** — stale `useMemo` dep ([#34194](https://github.com/NousResearch/hermes-agent/pull/34194))

### Docker

- **`--insecure` is now explicit opt-in via env var**, not derived from bind host ([#34188](https://github.com/NousResearch/hermes-agent/pull/34188) — @benbarclay)
- **Dashboard test suite repaired** to match the insecure-opt-in fix ([#34204](https://github.com/NousResearch/hermes-agent/pull/34204) — @benbarclay)
- **arm64 PR builds skip the GHA cache** to avoid cache-thrash on cross-arch builders ([#33704](https://github.com/NousResearch/hermes-agent/pull/33704) — @BROCCOLO1D)

### MCP

- **Bare `npx`/`npm`/`node` resolve against `/usr/local/bin`** for Docker compatibility ([#34186](https://github.com/NousResearch/hermes-agent/pull/34186) — @benbarclay)

### Kanban

- **Worker SIGTERM actually terminates the process** ([#34045](https://github.com/NousResearch/hermes-agent/pull/34045))
- **Workers receive images referenced in task bodies** for vision-capable models ([#34210](https://github.com/NousResearch/hermes-agent/pull/34210))

### Gateway

- **`.md` files deliver again** — media-delivery validation defaults to denylist-only instead of an overly-narrow allowlist ([#34022](https://github.com/NousResearch/hermes-agent/pull/34022))
- **Probe stepdown safety** — on a context-overflow without an explicit provider context limit, the agent no longer steps down to a smaller model based on an unknown ceiling (salvage of [#33673](https://github.com/NousResearch/hermes-agent/pull/33673)) ([#33826](https://github.com/NousResearch/hermes-agent/pull/33826))

### CLI

- **`/yolo` mid-session enables the per-session bypass** instead of just toggling the env var (which the running agent had already snapshotted) ([#33931](https://github.com/NousResearch/hermes-agent/pull/33931) — @kshitijk4poor)
- **`/model` and `hermes model` show the same list**, plus disk cache for picker startup ([#33867](https://github.com/NousResearch/hermes-agent/pull/33867))

### Skills

- **Full skills.sh catalog via sitemap** — 858 → 19,932 entries ([#34025](https://github.com/NousResearch/hermes-agent/pull/34025))

### Redaction

- **Web URLs pass through unchanged** — the redactor was eating query parameters that looked credential-shaped ([#34029](https://github.com/NousResearch/hermes-agent/pull/34029))

---

## ✨ Small Features

- **Hindsight default narrowed to observation-only** for `recall_types` — tool path is also narrowed ([#34079](https://github.com/NousResearch/hermes-agent/pull/34079) — @nicoloboschi, follow-up [#34091](https://github.com/NousResearch/hermes-agent/pull/4df62d239e38bf8c212a595721c9c01e176f6c3a) — @kshitijk4poor)
- **Memory providers receive completed-turn message context** — salvage of [#28065](https://github.com/NousResearch/hermes-agent/pull/28065) ([#34097](https://github.com/NousResearch/hermes-agent/pull/34097) — @kshitijk4poor, credit to @devwdave)

---

## 📚 Documentation

- **`--no-supervise` / `HERMES_GATEWAY_NO_SUPERVISE` documented** in the reference docs (follow-up to [#33583](https://github.com/NousResearch/hermes-agent/pull/33583)) ([#33751](https://github.com/NousResearch/hermes-agent/pull/33751) — @r266-tech)

---

## 🛠️ Infrastructure

- **Vercel deploy workflow accepts `workflow_dispatch`** so docs deploys can be manually triggered ([#34081](https://github.com/NousResearch/hermes-agent/pull/34081))
- **`@nous-research/ui` bumped to 0.18.2** (Nix `npmDepsHash` also updated to match) ([#34193](https://github.com/NousResearch/hermes-agent/pull/34193) follow-ups — @austinpickett)

---

## 👥 Contributors

### Core
- @teknium1

### Community
- @austinpickett — dashboard 401 reload-loop fix (the headline), `@nous-research/ui` bump, Nix `npmDepsHash` updates
- @benbarclay — Docker `--insecure` opt-in, MCP bare-command resolution, dashboard test repair
- @kshitijk4poor — `/yolo` session bypass, completed-turn memory context salvage, hindsight follow-up docs
- @nicoloboschi — hindsight `recall_types` observation default
- @BROCCOLO1D — arm64 PR build cache fix
- @r266-tech — `--no-supervise` reference docs
- @yangguangjin — probe stepdown safety (salvage of @yanghd's #33673)
- @devwdave — completed-turn memory context (credited via salvage)
- @andrewhosf — co-author

### Issue Reporters (the 401 loop)
- @routesmith ([#34206](https://github.com/NousResearch/hermes-agent/issues/34206))
- @beeaton ([#34202](https://github.com/NousResearch/hermes-agent/issues/34202))

---

**Full Changelog**: [v2026.5.28...v2026.5.29](https://github.com/NousResearch/hermes-agent/compare/v2026.5.28...v2026.5.29)

---

## Hermes Agent v0.15.0 (2026.5.28) — The Velocity Release

- Tag: `v2026.5.28`
- Published: 2026-05-28T17:46:09Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.28
- Prerelease: False

- Assets: hermes_agent-0.15.0-py3-none-any.whl.sigstore.json, hermes_agent-0.15.0.tar.gz.sigstore.json

# Hermes Agent v0.15.0 (v2026.5.28)

**Release Date:** May 28, 2026
**Since v0.14.0:** 1,302 commits · 747 merged PRs · 1,746 files changed · 282,712 insertions · 36,699 deletions · 560+ issues closed (15 P0, 65 P1, 19 security-tagged) · 321 community contributors (including co-authors)

> **The Velocity Release.** Hermes gets dramatically faster — to start, to run, to ship work, and to grow. The 16,083-line `run_agent.py` collapses to 3,821 (-76%) across 14 cohesive `agent/*` modules. Kanban grew into a real multi-agent platform across 104 PRs — orchestrator auto-decomposition, swarm topology, scheduled tasks, worktree-per-task, per-task model overrides. The cold-start perf wave keeps going: another second shaved off launch, 47% fewer per-conversation function calls, `hermes --version` flipping the head-to-head benchmark against Codex CLI. `session_search` is 4,500× faster and free now. Promptware defense lands against Brainworm-class attacks. Bitwarden Secrets Manager replaces N per-provider API keys with one bootstrap token. Skill bundles let one slash command load a whole workflow. The Ink TUI gets a multi-session orchestrator. Two new image_gen providers (Krea 2 Medium + Large, FAL ported to plugin), the Nous-approved MCP catalog with an interactive picker, an OpenHands orchestration skill, ntfy as the 23rd messaging platform, and a deep xAI integration round (Web Search plugin, xai-oauth `hermes proxy` upstream, retired-May-15 model detection + `hermes migrate xai`, natural TTS speech-tag pauses, base_url leak guard, OpenAI-style execution guidance for Grok). 15 P0 + 65 P1 closures alongside.

---

## ✨ Highlights

- **The Big Refactor — `run_agent.py` is no longer 16,000 lines** — The file at the heart of Hermes — the agent conversation loop — has been reduced from 16,083 lines to 3,821 (-76%), with the extracted code redistributed across 14 cohesive modules under `agent/`. Behavior is unchanged: every extraction keeps a thin forwarder on `AIAgent`, every test patch path still works, every external caller is compatible. The reason you care: future Hermes development moves faster, plugin authors can finally grep the codebase, and the file that took 90 seconds to load in your editor opens in a blink. ([#27248](https://github.com/NousResearch/hermes-agent/pull/27248))

- **Kanban grew into a real multi-agent platform — 104 PRs end to end** — Triage auto-decomposes one task into a tree of sub-tasks. `hermes kanban swarm` creates a full Swarm v1 graph in one command — root, parallel workers, gated verifier, gated synthesizer, shared blackboard. Tasks support per-task model overrides (cheap models for boilerplate, expensive ones for hard sub-tasks), board-level default workdirs, per-task worktree paths and branches, scheduled start times, configurable claim TTL, retry fingerprinting, stale-task detection, respawn guards, and a drag-to-delete trash zone. Workers report through `/workers/active`, `/runs/{id}`, and `/inspect` endpoints. ([#27572](https://github.com/NousResearch/hermes-agent/pull/27572), [#28443](https://github.com/NousResearch/hermes-agent/pull/28443), [#28364](https://github.com/NousResearch/hermes-agent/pull/28364), [#28394](https://github.com/NousResearch/hermes-agent/pull/28394), [#28462](https://github.com/NousResearch/hermes-agent/pull/28462), [#28384](https://github.com/NousResearch/hermes-agent/pull/28384), [#28467](https://github.com/NousResearch/hermes-agent/pull/28467), [#28455](https://github.com/NousResearch/hermes-agent/pull/28455), [#28452](https://github.com/NousResearch/hermes-agent/pull/28452), [#28432](https://github.com/NousResearch/hermes-agent/pull/28432), [#28468](https://github.com/NousResearch/hermes-agent/pull/28468), [#28420](https://github.com/NousResearch/hermes-agent/pull/28420))

- **Cold-start perf wave keeps going — another second saved, 47% fewer per-turn function calls** — Three new optimization rounds: defer `openai._base_client` import (-240ms / -17MB on every CLI invocation), hot-path optimizations cut 47% of per-conversation function calls (399k → 213k for 31-turn chat), defer compression-feasibility check (-170 to -290ms on every agent construction), adaptive subprocess polling (-195ms per tool call, 1+ second per turn). Termux cold start drops from 2.9s to 0.8s. `hermes --version` cold drops 63% (701ms → 258ms), flipping the head-to-head benchmark against Codex CLI from 5/11 wins to 6/11. ([#28864](https://github.com/NousResearch/hermes-agent/pull/28864), [#28866](https://github.com/NousResearch/hermes-agent/pull/28866), [#28957](https://github.com/NousResearch/hermes-agent/pull/28957), [#29006](https://github.com/NousResearch/hermes-agent/pull/29006), [#29419](https://github.com/NousResearch/hermes-agent/pull/29419), [#30121](https://github.com/NousResearch/hermes-agent/pull/30121), [#30609](https://github.com/NousResearch/hermes-agent/pull/30609), [#31968](https://github.com/NousResearch/hermes-agent/pull/31968))

- **`session_search` rebuilt — no LLM, no cost, 4,500× faster** — The old `session_search` was an aux-LLM-powered tool that cost ~$0.30/call and took ~30 seconds to summarize three sessions, sometimes confabulating when the right session wasn't even in the FTS5 hit list. The new shape is one tool with three modes (discovery, scroll, browse) inferred from which args are set — no `mode` parameter, no aux-LLM, no config knob, no companion skill. Discovery is ~20ms instead of ~90s; scroll is ~1ms. Searching your past sessions for context is now free and instant. ([#27590](https://github.com/NousResearch/hermes-agent/pull/27590))

- **Promptware defense — Brainworm-class attacks blocked at three chokepoints** — Inspired by recent Brainworm / Promptware Kill Chain research (Origin HQ, arxiv 2601.09625), Hermes now defends the context window against prompt-injection attacks that try to hijack the agent via tool output, recalled memory, or stored skills. Single source of truth (`tools/threat_patterns.py`) with ~15 new Brainworm/C2 patterns; recalled memory is scanned at load time; tool results get delimiter markers so a malicious file or remote service can't impersonate Hermes' own system content. Paired with a new `security-guidance` plugin that pattern-matches dangerous code writes. ([#32269](https://github.com/NousResearch/hermes-agent/pull/32269), [#33131](https://github.com/NousResearch/hermes-agent/pull/33131), [#9151](https://github.com/NousResearch/hermes-agent/pull/9151))

- **Bitwarden Secrets Manager — one bootstrap token replaces every per-provider API key** — Stop keeping plaintext API keys in `~/.hermes/.env`. Install Bitwarden Secrets Manager (`bws` auto-installs lazily on first use), point Hermes at it with one bootstrap token (`BWS_ACCESS_TOKEN`), and every credential you need comes from Bitwarden at startup. Rotate a key in the Bitwarden web app and the rotation actually takes effect — Bitwarden defaults to source-of-truth so its values overwrite matching env vars on startup. Flip `secrets.bitwarden.override_existing: false` to invert. EU Cloud and self-hosted Bitwarden server URLs supported. Detected credentials are now labeled with their source so you can see at a glance which keys came from Bitwarden vs. the local env. ([#30035](https://github.com/NousResearch/hermes-agent/pull/30035), [#31378](https://github.com/NousResearch/hermes-agent/pull/31378), [#30364](https://github.com/NousResearch/hermes-agent/pull/30364))

- **ntfy as the 23rd messaging platform — push notifications without an account** — ntfy is the self-hostable push-notification service with no signup, no API key, just a topic URL. Hermes now adapts to it as a platform plugin (zero edits to core), so your agent can send you push notifications from any cron job, kanban task completion, or chat `send_message` — to your phone, your watch, your desktop, your homelab. (salvages [#30625](https://github.com/NousResearch/hermes-agent/pull/30625) → originally [#4043](https://github.com/NousResearch/hermes-agent/pull/4043)) ([#30867](https://github.com/NousResearch/hermes-agent/pull/30867))

- **Skill bundles — `/<name>` loads multiple skills at once** — A skill bundle is a named group of skills that loads them all together with one slash command. Set up your "writing day" bundle (humanizer + ideation + obsidian + youtube-content) and `/writing-day` activates all four for the session. Skills Hub now has health checks, a freshness badge, and a watchdog cron. Three new optional skills land: `code-wiki` (Karpathy's LLM-Wiki, persistent indexed dev wiki), `openhands` (delegate to OpenHands for parallel coding agents), and `web-pentest` (OWASP-style web pentest recipes). ([#28373](https://github.com/NousResearch/hermes-agent/pull/28373), [#32345](https://github.com/NousResearch/hermes-agent/pull/32345), [#32240](https://github.com/NousResearch/hermes-agent/pull/32240), [#32261](https://github.com/NousResearch/hermes-agent/pull/32261), [#32265](https://github.com/NousResearch/hermes-agent/pull/32265))

- **TUI session orchestrator — multiple live sessions in one TUI window** — The Ink TUI gained an active-session switcher overlay. List, switch between, refresh, and close multiple live process-local sessions without leaving the TUI; dispatch a new session with a session-scoped model picker. Plus a wave of TUI polish — mouse-tracking DEC mode presets, scrollback preservation across branches and termux, slash-dropdown fixes, x.com link rendering, and CJK / IME input rendering improvements. (salvages [#27642](https://github.com/NousResearch/hermes-agent/pull/27642)) ([#32980](https://github.com/NousResearch/hermes-agent/pull/32980), [#30084](https://github.com/NousResearch/hermes-agent/pull/30084))

- **Two new image_gen providers — Krea 2 Medium + Large, FAL ported to plugin** — Krea joins the image_gen lineup as a built-in plugin: `Krea 2 Medium` ($0.03) and `Krea 2 Large` ($0.06), auto-discovered, selectable via `hermes tools` → Image Generation → Krea. Available through both the native Krea plugin and the FAL.ai catalog. The FAL.ai backend got pulled out of the monolithic image-generation tool into `plugins/image_gen/fal/`, completing the four-way architectural parity already established by web, browser, and video_gen — new image providers are now one file, not a fork. ([#33236](https://github.com/NousResearch/hermes-agent/pull/33236), [#30380](https://github.com/NousResearch/hermes-agent/pull/30380), [#33506](https://github.com/NousResearch/hermes-agent/pull/33506))

- **Nous-approved MCP catalog with interactive picker** — A curated catalog of Nous-vetted MCP servers, mirroring the optional-skills shape. Run `hermes mcp` and you get an interactive picker; install with one keystroke, credentials prompted at install time and written to `~/.hermes/.env`. Ships with the n8n manifest first. Closes the discovery gap that left users hunting GitHub for trusted MCP servers. ([#30870](https://github.com/NousResearch/hermes-agent/pull/30870))

- **OpenHands orchestration skill** — A new optional skill under `optional-skills/autonomous-ai-agents/openhands/` lets the agent delegate coding tasks to the OpenHands CLI alongside `claude-code`, `codex`, and `opencode`. OpenHands is the model-agnostic member of that family — any LiteLLM-supported provider works (OpenAI, Anthropic, OpenRouter, your own), so you can route a sub-task to the cheapest model that can finish it. Drop-in worker for kanban swarms and `/delegate` flows. (closes [#477](https://github.com/NousResearch/hermes-agent/issues/477)) ([#32261](https://github.com/NousResearch/hermes-agent/pull/32261))

- **Deep xAI integration round — Web Search plugin, OAuth proxy upstream, May 15 retirement detection, natural TTS, security hardening** — Six interlocking xAI improvements:
    - **xAI Web Search** lands as a `plugins/web/xai/` provider, slots alongside Brave / Tavily / Exa / SearXNG / DDGS / Firecrawl — reuses your existing Grok OAuth or `XAI_API_KEY` credentials, no new env vars. ([#29042](https://github.com/NousResearch/hermes-agent/pull/29042))
    - **`hermes proxy` gains an xAI upstream** — your local OpenAI-compatible endpoint can now be backed by SuperGrok OAuth, no PKCE-refresh code to write in your client. ([#28356](https://github.com/NousResearch/hermes-agent/pull/28356))
    - **May 15 model retirement detection** — `grok-4`, `grok-4-fast{,-reasoning,-non-reasoning}`, `grok-3`, `grok-code-fast-1`, `grok-imagine-image-pro` etc. are detected in doctor and chat startup, with `hermes migrate xai` to one-shot config migration to the supported model. No more silent 404s after the retirement date. ([#29277](https://github.com/NousResearch/hermes-agent/pull/29277))
    - **Opt-in `auto_speech_tags`** for xAI TTS — inserts light `[pause]` tags between paragraphs and sentences for more natural-sounding voice replies. Default OFF. ([#29376](https://github.com/NousResearch/hermes-agent/pull/29376))
    - **`xai-oauth` `base_url` pinned to `x.ai` origin** — closes a silent credential-leak vector where `XAI_BASE_URL` could repoint OAuth-authenticated inference to an attacker-controlled host. ([#28952](https://github.com/NousResearch/hermes-agent/pull/28952))
    - **OpenAI-style execution guidance applied to Grok models** — Grok and xai-oauth now get the same family-specific execution discipline block GPT/Codex have, so the model stops claiming completion without tool calls and stops suggesting workarounds instead of using existing tools. ([#27797](https://github.com/NousResearch/hermes-agent/pull/27797))
    - Plus `x_search` degraded-results surfacing, tier-gated 403 with API-key fallback, PKCE `code_challenge` round-trip fix, dead-token quarantine on terminal refresh failure, MiniMax-style short-token refresh on per-request, and `WKE=unauthenticated` honor at both classifier sites. ([#29484](https://github.com/NousResearch/hermes-agent/pull/29484), [#28351](https://github.com/NousResearch/hermes-agent/pull/28351), [#27560](https://github.com/NousResearch/hermes-agent/pull/27560), [#28116](https://github.com/NousResearch/hermes-agent/pull/28116), [#30619](https://github.com/NousResearch/hermes-agent/pull/30619), [#30872](https://github.com/NousResearch/hermes-agent/pull/30872))

---

## 🏗️ Core Agent & Architecture

### The Big Refactor — `run_agent.py` 16k → 3.8k

- `run_agent.py` from 16,083 → 3,821 lines (-76%), extracted into 14 cohesive `agent/*` modules. `run_conversation` alone was 3,877 lines before the refactor. Every extraction keeps a thin forwarder on `AIAgent`, every test-patch path is preserved, every external caller stays compatible. ([#27248](https://github.com/NousResearch/hermes-agent/pull/27248))

### Agent loop & conversation

- Auxiliary task layered fallback (primary → chain → main agent → graceful fail) on capacity errors (402/429/connection). (salvages [#26811](https://github.com/NousResearch/hermes-agent/pull/26811) + [#26998](https://github.com/NousResearch/hermes-agent/pull/26998)) ([#27625](https://github.com/NousResearch/hermes-agent/pull/27625))
- Buffer retry/fallback status; surface only on terminal failure (no more noisy "retrying..." spam in mid-run output). ([#33816](https://github.com/NousResearch/hermes-agent/pull/33816))
- Host contract for external context engines — condenses 5 prior PRs into one extension surface. ([#33750](https://github.com/NousResearch/hermes-agent/pull/33750))
- Fallback immediately on provider content-policy blocks. ([#33883](https://github.com/NousResearch/hermes-agent/pull/33883))
- Re-pad `reasoning_content` on cross-provider fallback to require-side providers. (salvage [#33784](https://github.com/NousResearch/hermes-agent/pull/33784)) ([#33795](https://github.com/NousResearch/hermes-agent/pull/33795))
- Per-turn tool-outcome verifier — patch tool gets indent preservation, CRLF preservation, per-file failure escalation. ([#32273](https://github.com/NousResearch/hermes-agent/pull/32273))
- Single-knob native vision for custom-provider models. ([#29679](https://github.com/NousResearch/hermes-agent/pull/29679))
- Background review fork isolated from external memory plugins. ([#27190](https://github.com/NousResearch/hermes-agent/pull/27190))
- Background review inherits parent toolset config for `tools[]` cache parity. ([#29704](https://github.com/NousResearch/hermes-agent/pull/29704))
- Recover from providers returning list-type tool content. ([#30259](https://github.com/NousResearch/hermes-agent/pull/30259))
- Treat partial-stream stub responses as length truncation rather than clean stop. ([#30998](https://github.com/NousResearch/hermes-agent/pull/30998))
- OpenAI execution guidance applied to xAI Grok / xai-oauth. ([#27797](https://github.com/NousResearch/hermes-agent/pull/27797))
- ContextVars propagate to concurrent tool worker threads.
- Preload `jiter` native parser. ([#33692](https://github.com/NousResearch/hermes-agent/pull/33692))
- Expose context engine tools with saved toolsets. (salvage of [#31194](https://github.com/NousResearch/hermes-agent/pull/31194)) ([#33719](https://github.com/NousResearch/hermes-agent/pull/33719))

### Sessions & memory

- `session_search` rebuilt — single-shape (discovery + scroll + browse), no aux-LLM, ~20ms vs. ~90s. ([#27590](https://github.com/NousResearch/hermes-agent/pull/27590))
- Salvage [#29182](https://github.com/NousResearch/hermes-agent/pull/29182) — opt-in JSON snapshot writer for sessions. ([#29278](https://github.com/NousResearch/hermes-agent/pull/29278))
- Persist `platform_message_id` for recall across gateway restarts. ([#29449](https://github.com/NousResearch/hermes-agent/pull/29449))
- Inline memory-context mentions stay visible in conversation. ([#28132](https://github.com/NousResearch/hermes-agent/pull/28132))
- Recalled memory labeled informational, not authoritative. ([#28583](https://github.com/NousResearch/hermes-agent/pull/28583))
- Memory + context-engine tool injection gated on `enabled_toolsets`. ([#30177](https://github.com/NousResearch/hermes-agent/pull/30177))
- Guard against external drift in `MEMORY.md` / `USER.md`. ([#30877](https://github.com/NousResearch/hermes-agent/pull/30877))
- Honcho runtime peer mapping — correctness follow-ups + setup wizard + docs. ([#30077](https://github.com/NousResearch/hermes-agent/pull/30077))
- Periodic memory logging for leak detection. (salvage of [#17667](https://github.com/NousResearch/hermes-agent/pull/17667)) ([#27102](https://github.com/NousResearch/hermes-agent/pull/27102))

### Codex / Responses-API maturation

- TTFB watchdog for stalled Codex Responses streams. ([#32042](https://github.com/NousResearch/hermes-agent/pull/32042))
- Actionable hint when stale-call detector fires on known silent-reject pattern. ([#32016](https://github.com/NousResearch/hermes-agent/pull/32016), [#33133](https://github.com/NousResearch/hermes-agent/pull/33133))
- Drop SDK `responses.stream()` helper; consume events directly. ([#33042](https://github.com/NousResearch/hermes-agent/pull/33042))
- Gracefully recover from `invalid_encrypted_content`. (salvage of [#10144](https://github.com/NousResearch/hermes-agent/pull/10144)) ([#33035](https://github.com/NousResearch/hermes-agent/pull/33035))
- Recover Codex Responses streams with null output. ([#32963](https://github.com/NousResearch/hermes-agent/pull/32963), [#33390](https://github.com/NousResearch/hermes-agent/pull/33390))
- Drop foreign-issuer reasoning and transient `rs_tmp` reasoning replay state. ([#33156](https://github.com/NousResearch/hermes-agent/pull/33156), [#33146](https://github.com/NousResearch/hermes-agent/pull/33146))
- Codex 429 quota classified as rate-limit, not missing credentials. ([#33168](https://github.com/NousResearch/hermes-agent/pull/33168))
- Codex chat path falls back to credential_pool when singleton is empty. ([#33189](https://github.com/NousResearch/hermes-agent/pull/33189))
- Codex re-auth syncs credential_pool. ([#33164](https://github.com/NousResearch/hermes-agent/pull/33164))
- Omit `tools` key when no tools registered. ([#33409](https://github.com/NousResearch/hermes-agent/pull/33409))
- Parse Codex image-generation SSE directly. ([#32933](https://github.com/NousResearch/hermes-agent/pull/32933))

---

## 🎛️ Kanban — Multi-Agent Maturation Wave

### Orchestration & dispatch

- Orchestrator-driven auto-decomposition on triage. ([#27572](https://github.com/NousResearch/hermes-agent/pull/27572))
- Kanban swarm topology helper — `hermes kanban swarm` creates a Swarm v1 graph (root + parallel workers + gated verifier + gated synthesizer + shared blackboard). (salvages [#26791](https://github.com/NousResearch/hermes-agent/pull/26791) by @Niraven) ([#28443](https://github.com/NousResearch/hermes-agent/pull/28443))
- Dispatcher wires review agents from the review column. ([#28449](https://github.com/NousResearch/hermes-agent/pull/28449))
- Stale-detection for running tasks in dispatcher. ([#28452](https://github.com/NousResearch/hermes-agent/pull/28452))
- Respawn guard blocks repeat worker storms. ([#28455](https://github.com/NousResearch/hermes-agent/pull/28455))
- Respawn guard defers `blocker_auth` instead of auto-blocking. ([#28683](https://github.com/NousResearch/hermes-agent/pull/28683))
- Cross-profile cron jobs surface in dashboard. ([#28457](https://github.com/NousResearch/hermes-agent/pull/28457))
- Worker visibility endpoints: `/workers/active`, `/runs/{id}`, `/inspect`. (salvages [#23761](https://github.com/NousResearch/hermes-agent/pull/23761) by @Interstellar-code) ([#28432](https://github.com/NousResearch/hermes-agent/pull/28432))

### Task configuration & scheduling

- Per-task model override. ([#28364](https://github.com/NousResearch/hermes-agent/pull/28364))
- Board-level default workdir. ([#28394](https://github.com/NousResearch/hermes-agent/pull/28394))
- Configurable worktree paths and branches. ([#28462](https://github.com/NousResearch/hermes-agent/pull/28462))
- Scheduled task start times. ([#28384](https://github.com/NousResearch/hermes-agent/pull/28384))
- Scheduled status for delayed follow-ups. ([#28467](https://github.com/NousResearch/hermes-agent/pull/28467))
- Trimmed task comments. ([#28399](https://github.com/NousResearch/hermes-agent/pull/28399))
- Initial-status for human-ops cards. ([#28414](https://github.com/NousResearch/hermes-agent/pull/28414))
- `max_in_progress` config to cap concurrent running tasks. ([#28420](https://github.com/NousResearch/hermes-agent/pull/28420))
- Filter tasks by workflow fields. ([#28454](https://github.com/NousResearch/hermes-agent/pull/28454))
- `--sort` for `hermes kanban list`. ([#28427](https://github.com/NousResearch/hermes-agent/pull/28427))
- Optional `board` parameter on all MCP tools. ([#28444](https://github.com/NousResearch/hermes-agent/pull/28444))
- Stamp originating ACP session_id on tasks. ([#28447](https://github.com/NousResearch/hermes-agent/pull/28447))
- `auto_promote_children` config toggle. ([#28344](https://github.com/NousResearch/hermes-agent/pull/28344))
- `archive --rm` to hard-delete archived tasks. ([#28355](https://github.com/NousResearch/hermes-agent/pull/28355))
- Promote dependents when parent is archived. ([#28372](https://github.com/NousResearch/hermes-agent/pull/28372))
- Promote blocked tasks when parent dependencies complete. ([#28377](https://github.com/NousResearch/hermes-agent/pull/28377))
- Demote ready children when parent is reopened. ([#28382](https://github.com/NousResearch/hermes-agent/pull/28382))
- `promote` verb for manual `todo→ready` recovery + bulk `--ids`. (salvage [#29464](https://github.com/NousResearch/hermes-agent/pull/29464)) ([#31334](https://github.com/NousResearch/hermes-agent/pull/31334))

### Dashboard

- Drag-to-delete trash zone + bulk delete. ([#28468](https://github.com/NousResearch/hermes-agent/pull/28468))
- Surface per-task `model_override` in show + tool output. ([#28442](https://github.com/NousResearch/hermes-agent/pull/28442))
- Cross-profile notification delivery via `kanban.notification_sources`. ([#28395](https://github.com/NousResearch/hermes-agent/pull/28395))
- Scratch-workspace deletion warning for users. ([#30949](https://github.com/NousResearch/hermes-agent/pull/30949))
- Mobile dashboard UX polish. ([#28127](https://github.com/NousResearch/hermes-agent/pull/28127))

### Reliability

- Worker log retention configurable. ([#27867](https://github.com/NousResearch/hermes-agent/pull/27867))
- Configurable claim TTL. ([#28392](https://github.com/NousResearch/hermes-agent/pull/28392))
- Fingerprint crash errors to prevent fleet-wide retry exhaustion. ([#28380](https://github.com/NousResearch/hermes-agent/pull/28380))
- Reset failure counters on `unblock_task`. ([#28379](https://github.com/NousResearch/hermes-agent/pull/28379))
- Detect cycles in `decompose_triage_task` sibling-link pre-validation. ([#28088](https://github.com/NousResearch/hermes-agent/pull/28088))
- Surface unusable triage auxiliary model (auto-decompose aware). ([#27871](https://github.com/NousResearch/hermes-agent/pull/27871))
- Align failure diagnostics with retry limit. ([#27868](https://github.com/NousResearch/hermes-agent/pull/27868))
- Align worker terminal timeout with task runtime. ([#27864](https://github.com/NousResearch/hermes-agent/pull/27864))
- Auto-install bundled skills (kanban-worker) on init. ([#28368](https://github.com/NousResearch/hermes-agent/pull/28368))
- Make legacy task migration idempotent. ([#28397](https://github.com/NousResearch/hermes-agent/pull/28397))
- Serialize DB initialization. ([#28383](https://github.com/NousResearch/hermes-agent/pull/28383))
- Persist worker session metadata on completion. ([#28387](https://github.com/NousResearch/hermes-agent/pull/28387))
- Pass `accept-hooks` to worker chat subprocess. ([#28393](https://github.com/NousResearch/hermes-agent/pull/28393))
- Preserve worker tools with restricted toolsets. ([#28396](https://github.com/NousResearch/hermes-agent/pull/28396))
- Avoid unsafe Windows worker Hermes shim resolution. ([#28398](https://github.com/NousResearch/hermes-agent/pull/28398))
- Sync slash subcommands with live parser. ([#28376](https://github.com/NousResearch/hermes-agent/pull/28376))
- Show scheduled kanban tasks in dashboard. ([#28400](https://github.com/NousResearch/hermes-agent/pull/28400))
- Assign single-task kanban decompositions. ([#28401](https://github.com/NousResearch/hermes-agent/pull/28401))
- Configurable `max_tokens` for kanban specify. ([#28374](https://github.com/NousResearch/hermes-agent/pull/28374))
- Per-job profile support for cron. ([#28124](https://github.com/NousResearch/hermes-agent/pull/28124))
- Codex app-server: include every Kanban-pinned path in `writable_roots`. ([#28435](https://github.com/NousResearch/hermes-agent/pull/28435))
- Cache kanban worker guidance at session init for prompt-cache reuse. ([#28425](https://github.com/NousResearch/hermes-agent/pull/28425))

---

## ⚡ Performance

- `openai._base_client` import deferred — 240ms / 17MB off every CLI cold start. ([#28864](https://github.com/NousResearch/hermes-agent/pull/28864))
- Agent-loop hot-path optimizations — 47% fewer per-conversation function calls (399k → 213k for 31-turn chat). ([#28866](https://github.com/NousResearch/hermes-agent/pull/28866))
- Compression-feasibility check deferred — 170-290ms off every agent construction. ([#28957](https://github.com/NousResearch/hermes-agent/pull/28957))
- Adaptive subprocess poll — ~195ms off every tool call, 1+ second per turn. ([#29006](https://github.com/NousResearch/hermes-agent/pull/29006))
- Termux TUI cold start speedup. ([#29419](https://github.com/NousResearch/hermes-agent/pull/29419))
- Termux non-TUI cold start speedup. (salvage [#29438](https://github.com/NousResearch/hermes-agent/pull/29438)) ([#30121](https://github.com/NousResearch/hermes-agent/pull/30121))
- Termux fast-path version + deferred bare-prompt agent startup. ([#30609](https://github.com/NousResearch/hermes-agent/pull/30609))
- Cut hermes `--version` wall time 63% — flips head-to-head vs Codex CLI. ([#31968](https://github.com/NousResearch/hermes-agent/pull/31968))
- Date-only timestamp + loud gateway-DB roundtrip logging — improves prompt-cache hit rate. ([#27675](https://github.com/NousResearch/hermes-agent/pull/27675))
- Cache kanban worker guidance at session init for prompt-cache reuse. ([#28425](https://github.com/NousResearch/hermes-agent/pull/28425))

---

## 🔧 Tool System

### Tool surface

- `patch`: indent preservation, CRLF preservation, per-file failure escalation. ([#32273](https://github.com/NousResearch/hermes-agent/pull/32273))
- `terminal`: warn at call time when `background=true` runs silently. ([#31289](https://github.com/NousResearch/hermes-agent/pull/31289))
- `terminal`: nudge homebrewed CI pollers at the tool surface. ([#33142](https://github.com/NousResearch/hermes-agent/pull/33142))
- `x_search`: surface degraded results + validate dates. ([#29484](https://github.com/NousResearch/hermes-agent/pull/29484))
- `x_search`: auto-enable toolset when xAI credentials are configured. ([#27376](https://github.com/NousResearch/hermes-agent/pull/27376))
- `computer_use`: route SOM/vision captures via auxiliary.vision. ([#30126](https://github.com/NousResearch/hermes-agent/pull/30126))
- `transcription`: reject symlinked audio inputs. ([#10082](https://github.com/NousResearch/hermes-agent/pull/10082))
- TTS: prevent double `[pause]` in xAI auto speech tags. ([#32237](https://github.com/NousResearch/hermes-agent/pull/32237))
- TTS: preserve native audio outside Telegram voice delivery. ([#28512](https://github.com/NousResearch/hermes-agent/pull/28512))
- TTS: opt-in xAI `auto_speech_tags` speech-tag pauses for natural voice replies. ([#29376](https://github.com/NousResearch/hermes-agent/pull/29376))
- Voice: chunk oversized CLI recordings. ([#30044](https://github.com/NousResearch/hermes-agent/pull/30044))
- Voice: honor `PULSE_SERVER` / `PIPEWIRE_REMOTE` inside Docker. ([#22534](https://github.com/NousResearch/hermes-agent/pull/22534))

### Browser

- All cloud browser providers (Browserbase, Anchor, Camofox, Hyperbrowser, etc.) migrated to image_gen-style plugins. (salvages [#25580](https://github.com/NousResearch/hermes-agent/pull/25580)) ([#27403](https://github.com/NousResearch/hermes-agent/pull/27403))
- Auto-launch Chromium-family browser for CDP. ([#29106](https://github.com/NousResearch/hermes-agent/pull/29106))
- Docker: discover agent-browser Chromium binary at boot. ([#33184](https://github.com/NousResearch/hermes-agent/pull/33184))

### Image generation

- **Krea** provider plugin (Krea 2 Medium + Large). ([#33236](https://github.com/NousResearch/hermes-agent/pull/33236))
- FAL backend ported to `plugins/image_gen/fal`. (salvage [#27966](https://github.com/NousResearch/hermes-agent/pull/27966)) ([#30380](https://github.com/NousResearch/hermes-agent/pull/30380))
- Cache xAI ephemeral URL responses to disk. ([#31759](https://github.com/NousResearch/hermes-agent/pull/31759))

### Web search

- **xAI Web Search** as a provider plugin. ([#29042](https://github.com/NousResearch/hermes-agent/pull/29042))

### MCP

- **Nous-approved MCP catalog** with interactive picker. ([#30870](https://github.com/NousResearch/hermes-agent/pull/30870))
- **TLS client certificate (mTLS) support** for HTTP and SSE MCP servers. ([#33721](https://github.com/NousResearch/hermes-agent/pull/33721))
- Stdin paste-back fallback for headless OAuth flow. ([#32053](https://github.com/NousResearch/hermes-agent/pull/32053))
- `skip` at paste prompt bypasses auth without disabling server. ([#32069](https://github.com/NousResearch/hermes-agent/pull/32069))
- Registry-aware `mcp_` prefix on both ends of round-trip. ([#31700](https://github.com/NousResearch/hermes-agent/pull/31700))

---

## 🧩 Skills Ecosystem

### Skills system

- **Skill bundles** — `/<name>` loads multiple skills. ([#28373](https://github.com/NousResearch/hermes-agent/pull/28373))
- Skills Hub: health checks, freshness badge, and a watchdog cron. ([#32345](https://github.com/NousResearch/hermes-agent/pull/32345))
- Opt-in AST deep diagnostics on skill writes. (salvage of [#30918](https://github.com/NousResearch/hermes-agent/pull/30918)) ([#31198](https://github.com/NousResearch/hermes-agent/pull/31198))
- Bundled/pinned skill protection in background-review prompts. ([#28338](https://github.com/NousResearch/hermes-agent/pull/28338))
- Show user-modified skill names in bundled skill sync summary. ([#28671](https://github.com/NousResearch/hermes-agent/pull/28671))
- Load symlinked skill slash commands. ([#27759](https://github.com/NousResearch/hermes-agent/pull/27759))
- Deduplicate Skills Hub search results by identifier, not name. ([#29490](https://github.com/NousResearch/hermes-agent/pull/29490))

### New skills

- `openhands` — delegate-to-OpenHands orchestration skill (closes [#477](https://github.com/NousResearch/hermes-agent/issues/477)) ([#32261](https://github.com/NousResearch/hermes-agent/pull/32261))
- `code-wiki` — persistent indexed dev wiki (closes [#486](https://github.com/NousResearch/hermes-agent/issues/486)) ([#32240](https://github.com/NousResearch/hermes-agent/pull/32240))
- `web-pentest` — OWASP recipes (closes [#400](https://github.com/NousResearch/hermes-agent/issues/400)) ([#32265](https://github.com/NousResearch/hermes-agent/pull/32265))
- `baoyu-article-illustrator` ([#28287](https://github.com/NousResearch/hermes-agent/pull/28287))

---

## ☁️ Providers

### xAI deep integration

- **xAI Web Search** as a `plugins/web/xai/` provider plugin. ([#29042](https://github.com/NousResearch/hermes-agent/pull/29042))
- **`hermes proxy` xAI upstream** — OpenAI-compatible local proxy backed by xai-oauth. ([#28356](https://github.com/NousResearch/hermes-agent/pull/28356))
- **May 15 model retirement detection + `hermes migrate xai`** for grok-4 / grok-3 / grok-code-fast-1 / grok-imagine-image-pro. ([#29277](https://github.com/NousResearch/hermes-agent/pull/29277))
- **Opt-in `auto_speech_tags`** for natural xAI TTS voice replies. ([#29376](https://github.com/NousResearch/hermes-agent/pull/29376))
- **xai-oauth base_url pinned to x.ai origin** — closes silent credential-leak vector. ([#28952](https://github.com/NousResearch/hermes-agent/pull/28952))
- **OpenAI-style execution guidance** applied to Grok / xai-oauth models. ([#27797](https://github.com/NousResearch/hermes-agent/pull/27797))
- xAI: detect retired May 15 models in doctor/chat startup. ([#29277](https://github.com/NousResearch/hermes-agent/pull/29277))
- xAI: resolve Grok Build context for OAuth. ([#30579](https://github.com/NousResearch/hermes-agent/pull/30579))
- xAI OAuth: tier-gated 403 with API-key fallback. ([#28351](https://github.com/NousResearch/hermes-agent/pull/28351))
- xAI OAuth: PKCE `code_challenge` echo. ([#27560](https://github.com/NousResearch/hermes-agent/pull/27560))
- xAI OAuth: quarantine dead tokens on terminal refresh failure. ([#28116](https://github.com/NousResearch/hermes-agent/pull/28116))
- xAI OAuth: honor `WKE=unauthenticated` disambiguator at both classifier sites. ([#30872](https://github.com/NousResearch/hermes-agent/pull/30872))
- xAI OAuth: accept bare-code manual paste (state=None). (closes [#26923](https://github.com/NousResearch/hermes-agent/issues/26923)) ([#33880](https://github.com/NousResearch/hermes-agent/pull/33880))
- xAI OAuth: fall back to manual paste on loopback timeout. ([#33231](https://github.com/NousResearch/hermes-agent/pull/33231))
- xAI proxy: handle 429 rate-limit responses in proxy retry path. ([#33743](https://github.com/NousResearch/hermes-agent/pull/33743))

### Other providers

- **OpenAI API as a first-class provider** (distinct from Codex runtime). ([#31898](https://github.com/NousResearch/hermes-agent/pull/31898))
- **Microsoft Entra ID** auth for Azure Foundry (with 1M Anthropic-Messages beta preserved on Bearer). (salvages [#27509](https://github.com/NousResearch/hermes-agent/pull/27509), [#27022](https://github.com/NousResearch/hermes-agent/pull/27022)) ([#28101](https://github.com/NousResearch/hermes-agent/pull/28101), [#28084](https://github.com/NousResearch/hermes-agent/pull/28084))
- **OpenRouter** sticky routing — `session_id` passed via `extra_body` so a long-running session keeps landing on the same upstream provider. (@Cybourgeoisie) ([#33939](https://github.com/NousResearch/hermes-agent/pull/33939))
- Nous: JWT token for inference; stop replaying invalid Nous refresh tokens. (@rewbs) ([#27663](https://github.com/NousResearch/hermes-agent/pull/27663))
- Nous Portal: one-shot setup, status CLI, and Nous-included markers. ([#30860](https://github.com/NousResearch/hermes-agent/pull/30860))
- Anthropic adapter: extract 7 helpers from `convert_messages_to_anthropic`. (salvage [#27784](https://github.com/NousResearch/hermes-agent/pull/27784)) ([#30386](https://github.com/NousResearch/hermes-agent/pull/30386))
- Catalog: add `qwen3.7-max` to Alibaba + Alibaba-Coding-Plan model lists. ([#33129](https://github.com/NousResearch/hermes-agent/pull/33129))
- opencode-go: route `qwen3.7-max` via `anthropic_messages`. (@beardthelion) ([#32780](https://github.com/NousResearch/hermes-agent/pull/32780))
- opencode-go: expose Kimi K2 + DeepSeek reasoning controls. ([#30845](https://github.com/NousResearch/hermes-agent/pull/30845))
- Remove Vercel AI Gateway and Vercel Sandbox.
- MiniMax OAuth: refresh short-lived access tokens per request. ([#30619](https://github.com/NousResearch/hermes-agent/pull/30619))
- Codex OAuth: quarantine terminal refresh errors. ([#28118](https://github.com/NousResearch/hermes-agent/pull/28118))
- Codex: drop dead model slugs that HTTP 400 on ChatGPT Pro. ([#33424](https://github.com/NousResearch/hermes-agent/pull/33424))
- Codex: sync `manual:device_code` pool entries on re-auth. ([#33744](https://github.com/NousResearch/hermes-agent/pull/33744))
- MiniMax OAuth: quarantine terminal refresh errors. ([#28119](https://github.com/NousResearch/hermes-agent/pull/28119))

---

## 🔑 Secrets

- **Bitwarden Secrets Manager** integration with lazy `bws` install. ([#30035](https://github.com/NousResearch/hermes-agent/pull/30035))
- Bitwarden: EU Cloud + self-hosted server URL support. ([#31378](https://github.com/NousResearch/hermes-agent/pull/31378))
- Label detected credentials with their source (Bitwarden). ([#30364](https://github.com/NousResearch/hermes-agent/pull/30364))

---

## 📱 Messaging Platforms (Gateway)

### Gateway core

- **Deliverable mode** — agents ship artifacts as native uploads from any platform (Slack/Discord/Telegram/Teams/Email). ([#27813](https://github.com/NousResearch/hermes-agent/pull/27813))
- `hermes send` — pipe any script's output to any messaging platform. (salvage of [#19631](https://github.com/NousResearch/hermes-agent/pull/19631)) ([#27188](https://github.com/NousResearch/hermes-agent/pull/27188))
- Debounce queued text follow-ups during active sessions. (salvage of [#31235](https://github.com/NousResearch/hermes-agent/pull/31235)) ([#31341](https://github.com/NousResearch/hermes-agent/pull/31341))
- Plugin-transformed final_response delivered through streaming gate. ([#31433](https://github.com/NousResearch/hermes-agent/pull/31433))
- Refresh cached agent tools on `/reload-mcp`. ([#32815](https://github.com/NousResearch/hermes-agent/pull/32815))
- Harden kanban + provider cleanup races on long-running workloads. ([#29479](https://github.com/NousResearch/hermes-agent/pull/29479))

### New / reorganized adapters

- **ntfy** — 23rd platform, push notifications, plugin shape, zero core edits. (salvages [#30625](https://github.com/NousResearch/hermes-agent/pull/30625) → [#4043](https://github.com/NousResearch/hermes-agent/pull/4043)) ([#30867](https://github.com/NousResearch/hermes-agent/pull/30867))
- **Discord** adapter migrated to bundled plugin. (salvage of [#24356](https://github.com/NousResearch/hermes-agent/pull/24356)) ([#30591](https://github.com/NousResearch/hermes-agent/pull/30591))
- **Mattermost** adapter migrated to bundled plugin. (salvage of [#30916](https://github.com/NousResearch/hermes-agent/pull/30916)) ([#31748](https://github.com/NousResearch/hermes-agent/pull/31748))

### Telegram

- Edit status messages in place instead of appending. (based on [#30141](https://github.com/NousResearch/hermes-agent/pull/30141) by @qike-ms) ([#30864](https://github.com/NousResearch/hermes-agent/pull/30864))
- Skip-STT audio path + 2GB cap via local Bot API server. ([#28541](https://github.com/NousResearch/hermes-agent/pull/28541))
- Route image documents (.png/.jpg/.webp/.gif) through vision pipeline. ([#28519](https://github.com/NousResearch/hermes-agent/pull/28519))
- Route audio file attachments away from STT pipeline. ([#28478](https://github.com/NousResearch/hermes-agent/pull/28478))
- `disable_topic_auto_rename` gateway flag. ([#28523](https://github.com/NousResearch/hermes-agent/pull/28523))
- `ignore_root_dm` config to drop messages without thread_id. ([#28536](https://github.com/NousResearch/hermes-agent/pull/28536))
- Chat-scoped auth without sender user_id. ([#28525](https://github.com/NousResearch/hermes-agent/pull/28525))
- Fail-closed auth fallback when `TELEGRAM_ALLOWED_USERS` is empty. ([#28494](https://github.com/NousResearch/hermes-agent/pull/28494))
- Roll over tool progress bubbles + scope audio_file_paths. ([#28482](https://github.com/NousResearch/hermes-agent/pull/28482))
- Avoid duplicate text after auto-TTS voice replies. ([#28509](https://github.com/NousResearch/hermes-agent/pull/28509))
- Mark final voice reply notify-worthy so Telegram delivers it audibly. ([#28504](https://github.com/NousResearch/hermes-agent/pull/28504))

### Discord

- Recover Windows voice opus decoding. ([#33182](https://github.com/NousResearch/hermes-agent/pull/33182))
- `allow_any_attachment` config to accept arbitrary file types. ([#27245](https://github.com/NousResearch/hermes-agent/pull/27245))
- Transcribe native voice notes. ([#28993](https://github.com/NousResearch/hermes-agent/pull/28993))
- Define UI view classes after lazy install. ([#28817](https://github.com/NousResearch/hermes-agent/pull/28817))

### Signal / Matrix / Feishu / Slack / WeCom

- Signal: `require_mention` filter for group chats. ([#28574](https://github.com/NousResearch/hermes-agent/pull/28574))
- Matrix: warn on clock-skew silent message drops. ([#27330](https://github.com/NousResearch/hermes-agent/pull/27330))
- Matrix E2EE installs full dep set; plugins respect `is_connected`. ([#31688](https://github.com/NousResearch/hermes-agent/pull/31688))
- Feishu: require webhook auth secret + honor config extras. ([#30746](https://github.com/NousResearch/hermes-agent/pull/30746))
- Feishu: enforce auth and chat binding for approval buttons. ([#30744](https://github.com/NousResearch/hermes-agent/pull/30744))
- Slack: socket recovery + Windows restart dedupe. ([#28873](https://github.com/NousResearch/hermes-agent/pull/28873))
- WeCom: safe-parse untrusted XML. ([#32442](https://github.com/NousResearch/hermes-agent/pull/32442))

### DingTalk / Webhooks / Microsoft Graph

- DingTalk: transcribe native voice notes. ([#28993](https://github.com/NousResearch/hermes-agent/pull/28993))
- Webhook: enforce `INSECURE_NO_AUTH` safety rail on dynamic route reloads. ([#30863](https://github.com/NousResearch/hermes-agent/pull/30863))
- Webhook: restrict default toolset capabilities. ([#30745](https://github.com/NousResearch/hermes-agent/pull/30745))
- Microsoft Graph: harden webhook auth requirements. ([#30169](https://github.com/NousResearch/hermes-agent/pull/30169))

---

## 🖥️ CLI & TUI

### CLI

- `/update` slash command in CLI and TUI. ([#23854](https://github.com/NousResearch/hermes-agent/pull/23854))
- Update auto-rollback when post-pull syntax check fails. ([#28669](https://github.com/NousResearch/hermes-agent/pull/28669))
- `--branch` flag for `hermes update`. (@jquesnelle) ([#29591](https://github.com/NousResearch/hermes-agent/pull/29591))
- `/exit --delete` flag to remove session on quit. (salvage of [#17665](https://github.com/NousResearch/hermes-agent/pull/17665)) ([#27101](https://github.com/NousResearch/hermes-agent/pull/27101))
- `▶ N` indicator in status bar for running `/background` tasks. ([#27175](https://github.com/NousResearch/hermes-agent/pull/27175))
- Live background terminal-process count in status bar. ([#32061](https://github.com/NousResearch/hermes-agent/pull/32061))
- Append session recap to `/status` output. (salvage of [#18587](https://github.com/NousResearch/hermes-agent/pull/18587)) ([#27176](https://github.com/NousResearch/hermes-agent/pull/27176))
- Configurable paste-collapse thresholds (TUI + CLI). (salvage [#29723](https://github.com/NousResearch/hermes-agent/pull/29723)) ([#32087](https://github.com/NousResearch/hermes-agent/pull/32087))
- `/resume` accepts position numbers. ([#31709](https://github.com/NousResearch/hermes-agent/pull/31709))
- Bring tool-call display back — verbose mode, specific failure reasons, todo progress. ([#31293](https://github.com/NousResearch/hermes-agent/pull/31293))
- Validate runtime token refresh in Qwen auth status. ([#31196](https://github.com/NousResearch/hermes-agent/pull/31196))

### TUI

- **TUI session orchestrator** — multiple live sessions in one TUI window. (salvages [#27642](https://github.com/NousResearch/hermes-agent/pull/27642)) ([#32980](https://github.com/NousResearch/hermes-agent/pull/32980))
- `mouse_tracking` DEC mode presets. (salvage of [#26681](https://github.com/NousResearch/hermes-agent/pull/26681) by @OutThisLife) ([#30084](https://github.com/NousResearch/hermes-agent/pull/30084))
- Termux scrollback preservation + touch-friendly defaults. ([#28910](https://github.com/NousResearch/hermes-agent/pull/28910))
- Full assistant text in scrollback (no history truncation). ([#28829](https://github.com/NousResearch/hermes-agent/pull/28829))
- Preserve scrollback when branching sessions. ([#30162](https://github.com/NousResearch/hermes-agent/pull/30162))
- Preserve Python dunder identifiers in markdown. ([#28582](https://github.com/NousResearch/hermes-agent/pull/28582))
- Active profile shown in TUI prompt. ([#28581](https://github.com/NousResearch/hermes-agent/pull/28581))
- Improve Charizard completion menu contrast. ([#28346](https://github.com/NousResearch/hermes-agent/pull/28346))
- Stop slash dropdown chopping last char of `/goal`. ([#31311](https://github.com/NousResearch/hermes-agent/pull/31311))
- Clipboard copy on linux/wayland. ([#29342](https://github.com/NousResearch/hermes-agent/pull/29342))
- Anchor `splitReasoning` unclosed-tag regex; stop eating last paragraph. ([#29426](https://github.com/NousResearch/hermes-agent/pull/29426))
- Surface verbose tool details. ([#30225](https://github.com/NousResearch/hermes-agent/pull/30225))
- Load Linux skills on Termux + salvage @adybag14-cyber's Termux gates. ([#30166](https://github.com/NousResearch/hermes-agent/pull/30166))
- Handle images with codex app-server. ([#31220](https://github.com/NousResearch/hermes-agent/pull/31220))
- Refresh virtual transcript on viewport resize. ([#31077](https://github.com/NousResearch/hermes-agent/pull/31077))
- Ignore late thinking deltas after completion. ([#31055](https://github.com/NousResearch/hermes-agent/pull/31055))
- Commit composer input bursts immediately. ([#31053](https://github.com/NousResearch/hermes-agent/pull/31053))
- Log parent gateway lifecycle exits. ([#31051](https://github.com/NousResearch/hermes-agent/pull/31051))
- Clear TTS env var on voice off + TTS indicator in status bar. ([#30987](https://github.com/NousResearch/hermes-agent/pull/30987))
- Pass `--expose-gc` as node argv instead of NODE_OPTIONS. ([#29998](https://github.com/NousResearch/hermes-agent/pull/29998))
- Align composer cursorLayout with wrap-ansi to kill multiline cursor drift. ([#27489](https://github.com/NousResearch/hermes-agent/pull/27489))
- Harden Terminal.app rendering and color paths. ([#27251](https://github.com/NousResearch/hermes-agent/pull/27251))
- Keep `/goal` verdict out of compact status row. ([#27971](https://github.com/NousResearch/hermes-agent/pull/27971))
- Clamp curses color 8 for 8-color terminals (Docker). ([#30260](https://github.com/NousResearch/hermes-agent/pull/30260))

---

## 🔒 Security & Reliability

### Promptware & memory hardening

- **Promptware defense** — shared threat patterns + memory load-time scan + tool-result delimiters. ([#32269](https://github.com/NousResearch/hermes-agent/pull/32269))
- Expand memory content scanning patterns to parity with skills guard. ([#9151](https://github.com/NousResearch/hermes-agent/pull/9151))
- Harden Skills Guard multi-word prompt patterns. (@YLChen-007) ([#26852](https://github.com/NousResearch/hermes-agent/pull/26852))
- Split cron scanner so skill prose stops false-positiving exfil patterns. ([#32339](https://github.com/NousResearch/hermes-agent/pull/32339))

### File safety

- Protect Hermes control-plane files from prompt injection (`auth.json`, `config.yaml`, `webhook_subscriptions.json`, `mcp-tokens/`). (salvages @PratikRai0101's [#14157](https://github.com/NousResearch/hermes-agent/pull/14157)) ([#30397](https://github.com/NousResearch/hermes-agent/pull/30397))
- Write-deny `<root>/.env` when running under a profile. ([#29687](https://github.com/NousResearch/hermes-agent/pull/29687))
- Defense-in-depth read-deny on credential stores. (salvages [#17659](https://github.com/NousResearch/hermes-agent/pull/17659) + [#8055](https://github.com/NousResearch/hermes-agent/pull/8055)) ([#30721](https://github.com/NousResearch/hermes-agent/pull/30721))
- TTS `output_path` traversal + update ZIP symlink reject. (salvage [#6693](https://github.com/NousResearch/hermes-agent/pull/6693) + [#15881](https://github.com/NousResearch/hermes-agent/pull/15881)) ([#32056](https://github.com/NousResearch/hermes-agent/pull/32056))
- Reject symlinked audio inputs. ([#10082](https://github.com/NousResearch/hermes-agent/pull/10082))

### Credential safety

- Avoid persisting borrowed credential secrets — runtime env-sourced keys no longer leak into `auth.json`. ([#31416](https://github.com/NousResearch/hermes-agent/pull/31416))
- Validate Nous Portal `inference_base_url` against host allowlist. (salvages [#27612](https://github.com/NousResearch/hermes-agent/pull/27612)) ([#30611](https://github.com/NousResearch/hermes-agent/pull/30611))
- Harden API server key placeholder handling. ([#30738](https://github.com/NousResearch/hermes-agent/pull/30738))
- Harden Google Chat OAuth credential persistence. (@Zyrixtrex) ([#24788](https://github.com/NousResearch/hermes-agent/pull/24788))
- xAI OAuth: pin inference `base_url` to x.ai origin. ([#28952](https://github.com/NousResearch/hermes-agent/pull/28952))
- Quarantine dead OAuth tokens on terminal refresh failure (xAI, Codex, MiniMax). ([#28116](https://github.com/NousResearch/hermes-agent/pull/28116), [#28118](https://github.com/NousResearch/hermes-agent/pull/28118), [#28119](https://github.com/NousResearch/hermes-agent/pull/28119))

### Supply-chain

- **On-demand supply-chain audit via OSV.dev** — `hermes audit`. ([#31460](https://github.com/NousResearch/hermes-agent/pull/31460))
- `hermes update` syntax-validates critical files post-pull, auto-rollback on failure. ([#28669](https://github.com/NousResearch/hermes-agent/pull/28669))
- Quarantine `hermes.exe` vs concurrent Windows instance. ([#26677](https://github.com/NousResearch/hermes-agent/pull/26677))

### Other hardening

- Restrict default webhook toolset capabilities. ([#30745](https://github.com/NousResearch/hermes-agent/pull/30745))
- Harden Microsoft Graph webhook auth requirements. ([#30169](https://github.com/NousResearch/hermes-agent/pull/30169))
- Require source CIDR allowlisting for public msgraph webhook binds. ([#33722](https://github.com/NousResearch/hermes-agent/pull/33722))
- Require `API_SERVER_KEY` before dispatching API server work. ([#33232](https://github.com/NousResearch/hermes-agent/pull/33232))
- env_passthrough: apply GHSA-rhgp-j443-p4rf filter to config.yaml path. (@roadhero) ([#27794](https://github.com/NousResearch/hermes-agent/pull/27794))
- Dashboard + WeCom: restrict markdown link schemes; safe-parse untrusted XML. ([#32442](https://github.com/NousResearch/hermes-agent/pull/32442))
- Salvage project-plugin RCE bypass fix from PR [#29311](https://github.com/NousResearch/hermes-agent/pull/29311) (GHSA-5qr3-c538-wm9j). ([#30837](https://github.com/NousResearch/hermes-agent/pull/30837))
- Cross-profile soft guard on file-write tools + system-prompt hint. ([#31290](https://github.com/NousResearch/hermes-agent/pull/31290))
- Reject unsafe tar members in Android psutil compatibility installer. ([#33742](https://github.com/NousResearch/hermes-agent/pull/33742))
- Reject non-regular tar members during tirith auto-install. ([#33786](https://github.com/NousResearch/hermes-agent/pull/33786))

---

## 🪟 Native Windows (Beta Continued)

- Complete Windows bootstrap — `dep_ensure` + `install.ps1` + detection. (@alt-glitch) ([#27845](https://github.com/NousResearch/hermes-agent/pull/27845))
- `install.ps1`: strip BOM, `-Commit`/`-Tag` pin params, harden git ops. (@jquesnelle) ([#28169](https://github.com/NousResearch/hermes-agent/pull/28169))
- Consolidate ACP browser bootstrap into `install.{sh,ps1}`. (@alt-glitch) ([#27851](https://github.com/NousResearch/hermes-agent/pull/27851))
- `hermes update` quarantines live `hermes.exe`. ([#26677](https://github.com/NousResearch/hermes-agent/pull/26677))
- Discord voice opus decoding on Windows. ([#33182](https://github.com/NousResearch/hermes-agent/pull/33182))
- Windows Docker Desktop compatible compose file. (@Sunil123135) ([#31031](https://github.com/NousResearch/hermes-agent/pull/31031))

---

## 🖥️ Web Dashboard

- Hardened Slack socket recovery + Windows restart dedupe. ([#28873](https://github.com/NousResearch/hermes-agent/pull/28873))
- Web dashboard: migrate checkboxes to `@nous-research/ui` + design-system polish. (@austinpickett) ([#28814](https://github.com/NousResearch/hermes-agent/pull/28814))
- Web dashboard: collapsible sidebar. (@austinpickett) ([#33421](https://github.com/NousResearch/hermes-agent/pull/33421))
- Dashboard typography & contrast pass. (salvage of [#28832](https://github.com/NousResearch/hermes-agent/pull/28832)) ([#30714](https://github.com/NousResearch/hermes-agent/pull/30714))
- Skills page: lazy-fetch catalog instead of bundling 34MB into JS. ([#33809](https://github.com/NousResearch/hermes-agent/pull/33809))

---

## 🐳 Docker

- **s6-overlay container supervision** — abstract `ServiceManager` protocol (systemd/launchd/Windows/s6 backends), per-profile gateway supervision in-container, container-restart reconciliation, hadolint/shellcheck CI. (salvage of [#30136](https://github.com/NousResearch/hermes-agent/pull/30136), @benbarclay) ([#31760](https://github.com/NousResearch/hermes-agent/pull/31760))
- Auto-redirect `gateway run` to supervised mode inside the s6 image. (@benbarclay) ([#33583](https://github.com/NousResearch/hermes-agent/pull/33583))
- Tee supervised gateway stdout to docker logs. (@benbarclay) ([#33621](https://github.com/NousResearch/hermes-agent/pull/33621))
- Drop `docker exec` to hermes uid before invoking the CLI. (@benbarclay) ([#33628](https://github.com/NousResearch/hermes-agent/pull/33628))
- Align HOME for dashboard and s6 gateway services. (@Dusk1e) ([#33481](https://github.com/NousResearch/hermes-agent/pull/33481))
- Bake build-time git SHA into image so `hermes dump` reports it. (@benbarclay) ([#33655](https://github.com/NousResearch/hermes-agent/pull/33655))
- `hermes update` prints `docker pull` guidance instead of bogus git error. (@benbarclay) ([#33659](https://github.com/NousResearch/hermes-agent/pull/33659))
- Upgrade Node to 22 LTS via multi-stage from `node:22-bookworm-slim`. (@benbarclay) ([#33060](https://github.com/NousResearch/hermes-agent/pull/33060))
- Drop `build-essential` from apt install. (@benbarclay) ([#33028](https://github.com/NousResearch/hermes-agent/pull/33028))
- Propagate env through s6 to cont-init and main CMD. ([#32412](https://github.com/NousResearch/hermes-agent/pull/32412))
- Targeted chown to preserve host file ownership in `HERMES_HOME`. ([#33033](https://github.com/NousResearch/hermes-agent/pull/33033))
- `mkdir HERMES_HOME` as root in stage2 before chown / privilege drop. ([#33078](https://github.com/NousResearch/hermes-agent/pull/33078))
- chown `ui-tui` and `node_modules` on UID remap so TUI esbuild works. ([#33045](https://github.com/NousResearch/hermes-agent/pull/33045))
- Include `anthropic`, `bedrock`, `azure-identity` extras in image. ([#30504](https://github.com/NousResearch/hermes-agent/pull/30504))
- Stop pushing per-commit SHA tags to Docker Hub. ([#29387](https://github.com/NousResearch/hermes-agent/pull/29387))
- Simplify Docker tagging — push both `:main` and `:latest` on main push. ([#33225](https://github.com/NousResearch/hermes-agent/pull/33225))
- Test slicing across GH actions jobs. (@ethernet8023) ([#30575](https://github.com/NousResearch/hermes-agent/pull/30575))
- Discover agent-browser Chromium binary at boot. ([#33184](https://github.com/NousResearch/hermes-agent/pull/33184))

---

## 🌐 API Server

- **Session control API** — `/api/sessions/*` (list/create/read/patch/delete/fork) + SSE-streaming chat. (salvages [#29302](https://github.com/NousResearch/hermes-agent/pull/29302) by @Codename-11 + multimodal followup by @Schwartz10) ([#33134](https://github.com/NousResearch/hermes-agent/pull/33134))
- `GET /v1/skills` and `/v1/toolsets`. ([#33016](https://github.com/NousResearch/hermes-agent/pull/33016))
- Coerce stringified booleans in stream/store/approval payloads. (salvage [#26639](https://github.com/NousResearch/hermes-agent/pull/26639)) ([#27293](https://github.com/NousResearch/hermes-agent/pull/27293))
- Honor `key_env` in auth-failure fallback resolution. ([#30840](https://github.com/NousResearch/hermes-agent/pull/30840))

---

## 🎟️ ACP (VS Code / Zed / JetBrains)

- Session edit auto-approval modes. (salvage of [#27034](https://github.com/NousResearch/hermes-agent/pull/27034)) ([#27862](https://github.com/NousResearch/hermes-agent/pull/27862))
- Enrich Zed permission cards — command in title + `reject_always`. ([#28148](https://github.com/NousResearch/hermes-agent/pull/28148))
- Replay session history before responding to `session/load`. ([#26957](https://github.com/NousResearch/hermes-agent/pull/26957), [#26943](https://github.com/NousResearch/hermes-agent/pull/26943))
- Plugin-transformed final_response delivered through streaming gate. ([#31433](https://github.com/NousResearch/hermes-agent/pull/31433))

---

## 🔌 Plugin Surface

- `register_tts_provider()` plugin hook. (salvage of [#30420](https://github.com/NousResearch/hermes-agent/pull/30420)) ([#31745](https://github.com/NousResearch/hermes-agent/pull/31745))
- `register_transcription_provider()` hook + `stt.providers` command-provider registry. (salvage of [#30493](https://github.com/NousResearch/hermes-agent/pull/30493)) ([#31907](https://github.com/NousResearch/hermes-agent/pull/31907))
- `register_auxiliary_task()` in PluginContext API. (salvage [#29817](https://github.com/NousResearch/hermes-agent/pull/29817)) ([#31177](https://github.com/NousResearch/hermes-agent/pull/31177))
- Bundled `security-guidance` plugin. ([#33131](https://github.com/NousResearch/hermes-agent/pull/33131))
- Discord and Mattermost migrated to bundled plugins. ([#30591](https://github.com/NousResearch/hermes-agent/pull/30591), [#31748](https://github.com/NousResearch/hermes-agent/pull/31748))
- ntfy as platform plugin. ([#30867](https://github.com/NousResearch/hermes-agent/pull/30867))
- Surface category-namespaced plugins in `hermes plugins list`. ([#27187](https://github.com/NousResearch/hermes-agent/pull/27187))
- Plugin discovery failures raised to WARNING level. ([#28318](https://github.com/NousResearch/hermes-agent/pull/28318))
- `hermes_plugins` included in gateway.log component filter. ([#28313](https://github.com/NousResearch/hermes-agent/pull/28313))
- Seed plugin extras before `is_connected` gate. ([#31703](https://github.com/NousResearch/hermes-agent/pull/31703))
- Dashboard: allowlist plugin assets + denylist subprocess-influencing env vars. ([#32277](https://github.com/NousResearch/hermes-agent/pull/32277))

---

## 📦 Distribution & Install

- Install-method stamping + Docker detection. (@alt-glitch) ([#27843](https://github.com/NousResearch/hermes-agent/pull/27843))
- Nix `#messaging` and `#full` package variants. (@alt-glitch) ([#33108](https://github.com/NousResearch/hermes-agent/pull/33108))
- Pre-load messaging gateway deps via `--extra messaging`. (salvage [#26394](https://github.com/NousResearch/hermes-agent/pull/26394)) ([#27558](https://github.com/NousResearch/hermes-agent/pull/27558))
- Avoid piping installer directly into `iex` (Windows). ([#28347](https://github.com/NousResearch/hermes-agent/pull/28347))
- Ship bundled skills in wheel. ([#28421](https://github.com/NousResearch/hermes-agent/pull/28421))
- Ship dashboard plugin assets in wheel. ([#28406](https://github.com/NousResearch/hermes-agent/pull/28406))
- Make Camofox lazy-installed instead of eager. ([#27055](https://github.com/NousResearch/hermes-agent/pull/27055))
- Wire STT lazy-install into transcription_tools.py. ([#30256](https://github.com/NousResearch/hermes-agent/pull/30256))

---

## 🐛 Notable Bug Fixes (highlights only)

- Match bare custom provider by active base URL in `hermes model`. ([#28908](https://github.com/NousResearch/hermes-agent/pull/28908))
- Route `auxiliary.vision.provider=openai` to api.openai.com, skip text-only main. ([#31452](https://github.com/NousResearch/hermes-agent/pull/31452))
- Lint: skip per-file shell linter when LSP will handle the file. ([#29054](https://github.com/NousResearch/hermes-agent/pull/29054))
- Treat empty credential pool entries as unauthenticated in `/model` picker. ([#28312](https://github.com/NousResearch/hermes-agent/pull/28312))
- Reverted within window: Firecrawl integration tag, send_message @username auto-mentions, Telegram quick-command-only menus, Telegram pin-on-turn.

---

## 🧪 Testing

- Disarm lazy-install probe so `_HAS_FASTER_WHISPER` patches work. ([#30334](https://github.com/NousResearch/hermes-agent/pull/30334))
- Cover default board dashboard pin. ([#28361](https://github.com/NousResearch/hermes-agent/pull/28361))
- Cover `_task_dict` `task_age` fallback. ([#28365](https://github.com/NousResearch/hermes-agent/pull/28365))
- Allowlist `tmp_path` for `kanban_notify` artifact delivery tests. ([#30851](https://github.com/NousResearch/hermes-agent/pull/30851), [#30852](https://github.com/NousResearch/hermes-agent/pull/30852))
- Cover null output stream terminal events in Codex. ([#33137](https://github.com/NousResearch/hermes-agent/pull/33137))

---

## 📚 Documentation

- **30-day docs overhaul** — full correctness audit, every PR in the window covered, Nous Portal weave, sidebar reorg. ([#33782](https://github.com/NousResearch/hermes-agent/pull/33782))
- Dedicated Nous Portal integration page and setup guide. ([#31296](https://github.com/NousResearch/hermes-agent/pull/31296))
- Providers: move Nous Portal first, Google Gemini OAuth last. ([#31287](https://github.com/NousResearch/hermes-agent/pull/31287))
- `session_search` rewrite for single-shape tool. ([#27840](https://github.com/NousResearch/hermes-agent/pull/27840))
- Kanban: document failure_limit, max_retries, inline create shortcuts, goals & kanban settings. ([#28357](https://github.com/NousResearch/hermes-agent/pull/28357), [#28358](https://github.com/NousResearch/hermes-agent/pull/28358), [#28359](https://github.com/NousResearch/hermes-agent/pull/28359), [#28360](https://github.com/NousResearch/hermes-agent/pull/28360), [#28362](https://github.com/NousResearch/hermes-agent/pull/28362))
- Kanban Codex lane skill. ([#28430](https://github.com/NousResearch/hermes-agent/pull/28430))
- xAI OAuth: note X Premium+ also unlocks Grok OAuth. ([#29055](https://github.com/NousResearch/hermes-agent/pull/29055))
- Docs site: Docker audio bridge notes, "Installing more tools in the container", xurl auth HOME in Docker.
- Email: clarify gateway vs Himalaya setup. (@helix4u) ([#33634](https://github.com/NousResearch/hermes-agent/pull/33634))
- Auth docs: replace stale `hermes login` references with `hermes auth add`. ([#32859](https://github.com/NousResearch/hermes-agent/pull/32859))

---

## 👥 Contributors

### Core
- @teknium1 (lead)

### Notable salvages & cherry-picks

- **@benbarclay** — s6-overlay container supervision (29 commits salvaged), Node 22 LTS upgrade, build-essential cleanup, `gateway run` auto-redirect in s6, tee supervised stdout to docker logs, `hermes update` Docker guidance, build-time SHA stamping
- **@OutThisLife** — `mouse_tracking` DEC mode presets
- **@jquesnelle** — Windows installer hardening, `--branch` flag for `hermes update`, install.ps1 BOM strip / commit-pin
- **@alt-glitch** — Windows `dep_ensure` bootstrap, Nix package variants (`.#messaging`, `.#full`), install-method stamping, ACP browser bootstrap consolidation
- **@austinpickett** — `/update` slash command, dashboard checkboxes → `@nous-research/ui`, mobile dashboard polish, collapsible sidebar
- **@ethernet8023** — CI test slicing across GH Actions jobs, TUI clipboard copy fix
- **@kshitijk4poor** — doctor section banner + fail-and-issue helpers extraction, post-tag salvage cluster (curator-fallout, kanban SQLite hardening, install world-readable uv dirs, xAI bare-code paste)
- **@rewbs** — Nous JWT inference switch + refresh-token replay fix
- **@Codename-11** + **@Schwartz10** — session control API (REST + SSE + multimodal followup)
- **@Niraven** — kanban swarm topology helper
- **@Interstellar-code** — kanban worker visibility endpoints
- **@adybag14-cyber** — termux cold-start optimizations (multiple PRs)
- **@qike-ms** — Telegram in-place status edits design
- **@sprmn24** — ntfy adapter
- **@Jaaneek** — xAI Web Search provider plugin
- **@yannsunn** — xAI upstream adapter for `hermes proxy`
- **@Cybourgeoisie** — OpenRouter sticky routing via session_id
- **@memosr** — Nous Portal base_url allowlist validation
- **@Sunil123135** — Windows Docker Desktop compose file
- **@Dusk1e** — Docker HOME alignment for dashboard + s6 gateway services
- **@beardthelion** — opencode-go anthropic_messages routing
- **@YLChen-007** — Skills Guard multi-word prompt patterns
- **@roadhero** — env_passthrough GHSA-rhgp-j443-p4rf filter
- **@Zyrixtrex** — Google Chat OAuth credential persistence hardening
- **@briandevans**, **@tomqiaozc** — defense-in-depth read-deny on credential stores
- **@PratikRai0101** — control-plane file write protection
- **@helix4u**, **@Bartok9**, **@zccyman** — auxiliary fallback ladder components
- **@ms-alan**, **@ticketclosed-wontfix**, **@donovan-yohan** — TUI session orchestrator + follow-ups
- **@daimon-nous[bot]** — cron per-job profile support
- **@bisko** — re-pad `reasoning_content` on cross-provider fallback

### All Contributors

@02356abc, @0xchainer, @0xDevNinja, @0xjackyang, @0xsir0000, @0z1-ghb, @8bit64k, @aaronlab, @AceWattGit,
@ACR27, @adam91holt, @AdamPlatin123, @Ade5954, @AdityaRajeshGadgil, @adybag14-cyber, @AhmetArif0, @ai-hana-ai,
@alaamohanad169-ship-it, @alber70g, @albert748, @alt-glitch, @aqilaziz, @argabor, @asdlem, @austinpickett,
@avifenesh, @awizemann, @B0Tch1, @Bartok9, @BaxBit, @Beandon13, @beardthelion, @benbarclay, @bensargotest-sys,
@binhnt92, @bird, @bisko, @BlackishGreen33, @booker1207, @bradhallett, @briandevans, @Brixyy, @brndnsvr,
@BROCCOLO1D, @btorresgil, @burjorjee, @carltonawong, @Carry00, @chaconne67, @chdlc, @chromalinx, @ChyuWei,
@CipherFrame, @cmullins70, @CNSeniorious000, @codeblackhole1024, @Codename-11, @colin-chang, @counterposition,
@cresslank, @CryptoByz, @cyb0rgk1tty, @Cybourgeoisie, @daizhonggeng, @darvsum, @davidcampbelldc, @deas,
@dgians, @dillweed, @DoGMaTiiC, @donovan-yohan, @draplater, @Drexuxux, @dskwe, @dsr-restyn, @Dusk1e,
@dusterbloom, @duyua9, @egilewski, @el-analista, @eliteworkstation94-ai, @eloklam, @EloquentBrush0x, @emonty,
@emozilla, @erhnysr, @erikengervall, @Erosika, @ether-btc, @ethernet8023, @EvilHumphrey, @fabiosiqueira,
@falasi, @falconexe, @fardoche6, @felix-windsor, @Fewmanism, @ffr31mr, @flamiinngo, @flanny7, @flooryyyy,
@fonhal, @francip, @fujinice, @gianfrancopiana, @glennc, @Glucksberg, @godlin-gh, @Grogger, @guillaumemeyer,
@Gutslabs, @H-Ali13381, @hanzckernel, @haran2001, @hawknewton, @hayka-pacha, @hehehe0803, @helix4u, @HenkDz,
@Hermes, @hermesagent26, @Hinotoi-agent, @hongchen1993, @honor2030, @houenyang-momo, @ht1072, @hueilau,
@iamfoz, @ilonagaja509-glitch, @InB4DevOps, @indigokarasu, @Interstellar-code, @iqdoctor, @iRonin, @Jaaneek,
@JabberELF, @jacevys, @jackey8616, @jackjin1997, @jdelmerico, @jfuenmayor, @Jiahui-Gu, @JimLiu, @joe102084,
@JohnC1009, @jonpol01, @Jpalmer95, @Julientalbot, @justemu, @justincc, @jvinals, @karthikeyann, @kasunvinod,
@kchuang1015, @kenyonxu, @khungate, @kiranvk-2011, @kjames2001, @konsisumer, @kpadilha, @kriscolab,
@krislidimo, @kronexoi, @kshitijk4poor, @kunci115, @Kylejeong2, @kylekahraman, @LaPhilosophie, @leeseoki0,
@lemassykoi, @Lempkey, @LeonJS, @LeonSGP43, @lidge-jun, @LifeJiggy, @liuhao1024, @LizerAIDev, @loicnico96,
@loongfay, @m0n3r0, @malaiwah, @matthewlai, @mavrickdeveloper, @maxmilian, @McClean-Edison, @memosr,
@Mind-Dragon, @momowind, @MoonJuhan, @MoonRay305, @moortekweb-art, @MorAlekss, @ms-alan, @Nami4D,
@nehaaprasaad, @nekwo, @nftpoetrist, @NickLarcombe, @nidhi-singh02, @Niraven, @nnnet, @noctilust, @novax635,
@nthrow, @nv-kasikritc, @nycomar, @OCWC22, @oemtalks, @OmX, @ooovenenoso, @orcool, @oseftg, @outsourc-e,
@OutThisLife, @Paperclip, @PaTTeeL, @pepelax, @phoenixshen, @Pluviobyte, @pnascimento9596, @pochi-gio, @pr7426,
@PratikRai0101, @Prithvi1994, @psionic73, @ptichalouf, @Que0x, @QuenVix, @quocanh261997, @qWaitCrypto, @Qwinty,
@r266-tech, @rak135, @rdasilva1016-ui, @rewbs, @roadhero, @rodrigoeqnit, @RonHillDev, @roycepersonalassistant,
@rudi193-cmd, @RyanRana, @sadiksaifi, @samahn0601, @samggggflynn, @SamuelZ12, @sanghyuk-seo-nexcube,
@Saurav0989, @savanne-kham, @Schrotti77, @Schwartz10, @SerenityTn, @sgtworkman, @sharziki, @shaun0927,
@shellybotmoyer, @shunsuke-hikiyama, @SimbaKingjoe, @SimoKiihamaki, @sir-ad, @Slimydog21, @slowtokki0409,
@Soju06, @someaka, @soynchux, @sprmn24, @Stark-X, @steezkelly, @stepanov1975, @stephenschoettler,
@stevehq26-bot, @steveonjava, @Strontvod, @subtract0, @Sunil123135, @superearn-fisher, @Sylw3ster, @tchanee,
@that-ambuj, @thedavidmurray, @TheOnlyMika, @therahul-yo, @thewillhuang, @ticketclosed-wontfix, @Timur00Kh,
@tomqiaozc, @Tosko4, @Tranquil-Flow, @tw2818, @uzunkuyruk, @vaddisrinivas, @vanthinh6886, @vgocoder,
@victorGPT, @vynxevainglory-ai, @waefrebeorn, @walli, @wangpuv, @wanwan2qq, @wesleysimplicio, @worlldz,
@wpengpeng168, @WuKongAI-CMU, @wuli666, @Wysie, @wysie, @xxxigm, @yannsunn, @YanzhongSu, @YarrowQiao, @ygd58,
@YLChen-007, @yoniebans, @yu-xin-c, @YuanHanzhong, @zapabob, @zccyman, @ziliangpeng, @zwolniony, @Zyrixtrex

---

**Full Changelog**: [v2026.5.16...v2026.5.28](https://github.com/NousResearch/hermes-agent/compare/v2026.5.16...v2026.5.28)

---

## Hermes Agent v0.14.0 (2026.5.16)

- Tag: `v2026.5.16`
- Published: 2026-05-16T09:59:15Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.16
- Prerelease: False

# Hermes Agent v0.14.0 (v2026.5.16)

**Release Date:** May 16, 2026
**Since v0.13.0:** 808 commits · 633 merged PRs · 1393 files changed · 165,061 insertions · 545 issues closed (12 P0, 50 P1) · 215 community contributors (including co-authors)

> The Foundation Release — Hermes installs and runs anywhere, ships with the things you actually want to use, and stops shipping the things you don't. xAI Grok lands as a SuperGrok OAuth provider with grok-4.3 bumped to a 1M context window. A new OpenAI-compatible local proxy turns any OAuth-authed Hermes provider — Claude Pro, ChatGPT Pro, SuperGrok — into an endpoint that Codex / Aider / Cline / Continue can hit. `x_search` lands as a first-class X (Twitter) search tool with OAuth-or-API-key auth. The Microsoft Teams stack is wired end-to-end (Graph auth + webhook listener + pipeline runtime + outbound delivery). A debloating wave makes installs dramatically lighter — heavyweight backends now lazy-install on first use, the `[all]` extras drop everything covered by lazy-deps, and a tiered install falls back when a wheel rejects on your platform. `pip install hermes-agent` works from PyPI. The cold-start wave shaves ~19 seconds off `hermes` launch. Browser CDP calls are 180x faster. Two new messaging platforms (LINE + SimpleX Chat) bring the total to 22. Cross-session 1-hour Claude prompt caching, `/handoff` that actually transfers sessions live, native button UI for `clarify` on Telegram and Discord, Discord channel history backfill, LSP semantic diagnostics on every write, a unified pluggable `video_generate`, a `computer_use` cua-driver backend that finally works with non-Anthropic providers, clickable URLs in any terminal, Zed ACP Registry integration via `uvx`, native Windows beta, 9 new optional skills, OpenRouter Pareto Code router, huggingface/skills as a trusted default tap. 12 P0 + 50 P1 closures.

---

## ✨ Highlights

- **xAI Grok via SuperGrok OAuth — and grok-4.3 jumps to a 1M context window** — If you pay for SuperGrok, you can now use Grok inside Hermes by signing in with your xAI account — no API key, no separate billing. The wire-through also bumps grok-4.3 to a 1M token context window, so you can drop whole codebases or research corpora into a single prompt. Includes proper handling for entitlement errors and an SSH-to-tunnel docs page for when you're SSH'd into a remote box and need to complete the OAuth flow. ([#26534](https://github.com/NousResearch/hermes-agent/pull/26534), [#26664](https://github.com/NousResearch/hermes-agent/pull/26664), [#26644](https://github.com/NousResearch/hermes-agent/pull/26644), [#26592](https://github.com/NousResearch/hermes-agent/pull/26592))

- **OpenAI-compatible local proxy for OAuth providers** — Run `hermes proxy` and you get a `http://localhost:port` endpoint that speaks the OpenAI API but is backed by whichever OAuth provider you're signed into — Claude Pro, ChatGPT Pro, SuperGrok. Now any tool that expects an OpenAI-compatible endpoint (Codex CLI, Aider, Cline, Continue, your custom scripts) just works with your existing subscription, no API key required. One subscription, every tool. ([#25969](https://github.com/NousResearch/hermes-agent/pull/25969))

- **`x_search` — first-class X (Twitter) search tool** — The agent can now search X directly without installing a skill or wiring up a custom integration. Search the timeline, find threads, surface specific posts — straight from the chat. Auth with either your X OAuth login or an API key, whichever you have. ([#26763](https://github.com/NousResearch/hermes-agent/pull/26763))

- **Microsoft Teams — end-to-end** — Hermes can now read messages from Teams and post back. The full Microsoft Graph stack lands together: auth + client foundation, a webhook listener that receives Teams events, a pipeline plugin runtime, and outbound delivery. Wire up the bot once, then chat to your agent from any Teams channel, DM, or group. (salvages of #21408–#21411) ([#21922](https://github.com/NousResearch/hermes-agent/pull/21922), [#21969](https://github.com/NousResearch/hermes-agent/pull/21969), [#22007](https://github.com/NousResearch/hermes-agent/pull/22007), [#22024](https://github.com/NousResearch/hermes-agent/pull/22024))

- **Debloating wave — lighter installs, less you don't use** — A clean `pip install hermes-agent` used to pull down everything: every messaging adapter SDK, every image-gen SDK, every voice/TTS provider, whether you used them or not. Now those heavy backends (Slack / Matrix / Feishu / DingTalk adapters, hindsight client, codex app-server, Pixverse / Camofox / image-gen SDKs, voice/TTS providers) install automatically the first time you actually use them. The `[all]` extras drop everything covered by lazy-deps, the installer falls back through tiers when a wheel doesn't fit your platform, and a supply-chain advisory checker scans every install for unsafe versions. Faster installs, smaller disk footprint, fewer transitive vulnerabilities. ([#24220](https://github.com/NousResearch/hermes-agent/pull/24220), [#24515](https://github.com/NousResearch/hermes-agent/pull/24515), [#25014](https://github.com/NousResearch/hermes-agent/pull/25014), [#25038](https://github.com/NousResearch/hermes-agent/pull/25038), [#25766](https://github.com/NousResearch/hermes-agent/pull/25766), [#21818](https://github.com/NousResearch/hermes-agent/pull/21818))

- **`pip install hermes-agent && hermes`** — Hermes Agent is now a real PyPI package. No more cloning the repo or running shell installers — one pip command and you're running. The wheel ships with the Ink TUI bundle and the shell launcher, so the full experience comes out of the box. (salvage of [#26350](https://github.com/NousResearch/hermes-agent/pull/26350)) ([#26593](https://github.com/NousResearch/hermes-agent/pull/26593), [#26148](https://github.com/NousResearch/hermes-agent/pull/26148))

- **Cross-session 1h Claude prompt cache** — When you use Claude through Anthropic, OpenRouter, or Nous Portal, the prompt prefix (system prompt, skills, memory) now caches for an hour across sessions. Start a `/new` session and the first response comes back faster and cheaper because the cache is still warm from your last session. Background memory review hits the cache too, so it's not paying full price every turn. ([#23828](https://github.com/NousResearch/hermes-agent/pull/23828), [#25434](https://github.com/NousResearch/hermes-agent/pull/25434), [#24778](https://github.com/NousResearch/hermes-agent/pull/24778))

- **180x faster `browser_console` evaluations** — When the agent uses the browser tool to inspect a page or run JavaScript, those calls now share one persistent connection to Chrome instead of spinning up a new DevTools session every time. The difference is huge: things that used to take a couple of seconds per call return in milliseconds. Real-world page interactions feel instant. ([#23226](https://github.com/NousResearch/hermes-agent/pull/23226))

- **Cold-start performance wave — ~19 seconds off `hermes` launch** — Running `hermes` used to make you wait through a chunk of import overhead and network calls before you saw a prompt. Now the launch path is mostly deferred: heavy adapters only load when you use them, model catalogs come from disk cache first, doctor checks run in parallel, and `chat -q` skips the welcome banner entirely. The `hermes tools` All-Platforms screen alone dropped from 14 seconds to under 1.5 seconds. ([#22138](https://github.com/NousResearch/hermes-agent/pull/22138), [#22120](https://github.com/NousResearch/hermes-agent/pull/22120), [#22681](https://github.com/NousResearch/hermes-agent/pull/22681), [#22790](https://github.com/NousResearch/hermes-agent/pull/22790), [#22808](https://github.com/NousResearch/hermes-agent/pull/22808), [#22831](https://github.com/NousResearch/hermes-agent/pull/22831), [#22859](https://github.com/NousResearch/hermes-agent/pull/22859), [#22904](https://github.com/NousResearch/hermes-agent/pull/22904), [#22766](https://github.com/NousResearch/hermes-agent/pull/22766), [#25341](https://github.com/NousResearch/hermes-agent/pull/25341))

- **Two new messaging platforms — LINE + SimpleX Chat** — LINE is huge in Japan, Korea, and Taiwan, and now Hermes runs natively on the LINE Messaging API. SimpleX Chat is the privacy-focused decentralized messenger with no user IDs — also wired up as a first-class platform. That brings Hermes to 22 messaging platforms total, so wherever you and your team chat, the agent can be there. ([#23197](https://github.com/NousResearch/hermes-agent/pull/23197), [#26232](https://github.com/NousResearch/hermes-agent/pull/26232))

- **`/handoff` actually transfers the session live** — Switching models or personalities mid-conversation used to mean losing context or starting over. Now `/handoff` moves your active session — every message, every tool call, every piece of context — to the target model, persona, or profile, live, without dropping anything. Mid-debugging hand off from a fast model to a deep-reasoning one, or pass a session between profiles for different parts of a task. ([#23395](https://github.com/NousResearch/hermes-agent/pull/23395))

- **Native button UI for `clarify` on Telegram and Discord** — When the agent uses the `clarify` tool to ask you a multiple-choice question, it now shows real platform-native buttons on Telegram and Discord instead of asking you to type back the option number. Tap the button, the agent gets your answer. Especially nice on mobile. ([#24199](https://github.com/NousResearch/hermes-agent/pull/24199), [#25485](https://github.com/NousResearch/hermes-agent/pull/25485))

- **Discord channel history backfill (default on)** — When Hermes joins a Discord channel or thread for the first time, it now reads the recent message history so it knows what's been said before it responds. No more "what are we talking about?" — the agent has the context that's already on screen for everyone else. ([#25984](https://github.com/NousResearch/hermes-agent/pull/25984))

- **`vision_analyze` returns pixels to vision-capable models** — When you point the agent at an image with `vision_analyze` and the active model can actually see (GPT-5, Claude, Gemini, Grok-vision), Hermes now passes the raw pixels straight to the model instead of converting them to a text description first. You get the model's actual visual reasoning instead of a degraded text-summary round-trip. ([#22955](https://github.com/NousResearch/hermes-agent/pull/22955))

- **Per-turn file-mutation verifier footer** — After every turn that wrote or edited files, the agent now gets a short footer summarizing exactly what changed on disk — the file paths, the line counts, the actual delta. That means the agent catches its own mistakes when a write didn't land or got silently overwritten, instead of confidently telling you "I added the function" when the file wasn't actually saved. ([#24498](https://github.com/NousResearch/hermes-agent/pull/24498))

- **LSP semantic diagnostics on every write** — When the agent uses `write_file` or `patch`, Hermes now runs a real language server against the edited file and surfaces any new errors back to the agent before the next turn. Type errors, undefined symbols, missing imports — caught immediately. Goes way beyond v0.13.0's basic Python/JSON/YAML/TOML linting because it's actual semantic analysis. ([#24168](https://github.com/NousResearch/hermes-agent/pull/24168), [#25978](https://github.com/NousResearch/hermes-agent/pull/25978))

- **Unified `video_generate` with pluggable provider backends** — One tool, any video model. Hermes ships with the obvious backends already, but you can drop in a new video provider as a plugin without touching core. So when a new video model lands next month, it can be a one-file plugin instead of a fork. ([#25126](https://github.com/NousResearch/hermes-agent/pull/25126))

- **`computer_use` cua-driver backend — works with non-Anthropic models now** — Computer-use (the agent controlling your mouse and keyboard to drive GUI apps) used to be locked to Anthropic's SDK. The new cua-driver backend works with non-Anthropic providers too, has proper focus-safe operations, and refreshes itself on `hermes update`. Now any vision-capable model can drive your desktop. (re-salvage of #16936) ([#21967](https://github.com/NousResearch/hermes-agent/pull/21967), [#24063](https://github.com/NousResearch/hermes-agent/pull/24063))

- **Clickable URLs in any terminal** — Links in agent output are now real OSC8 hyperlinks with hover-highlight in any terminal that supports them. Click to open in your browser — no more copy-paste-trim of long URLs from the transcript. Just works in iTerm2, Kitty, Ghostty, modern Windows Terminal, etc. (@OutThisLife) ([#25071](https://github.com/NousResearch/hermes-agent/pull/25071), [#24013](https://github.com/NousResearch/hermes-agent/pull/24013))

- **Zed ACP Registry — `uvx` install in one click** — Hermes is now listed in Zed's Agent Client Protocol registry, so Zed users can install it with one click. The install path uses `uvx` so there's no npm dependency. `hermes acp --setup-browser` bootstraps the browser tools for registry-driven installs. (salvage of [#25908](https://github.com/NousResearch/hermes-agent/pull/25908)) ([#26079](https://github.com/NousResearch/hermes-agent/pull/26079), [#26120](https://github.com/NousResearch/hermes-agent/pull/26120), [#26234](https://github.com/NousResearch/hermes-agent/pull/26234))

- **OpenRouter Pareto Code router with `min_coding_score` knob** — OpenRouter's "Pareto" router automatically picks the cheapest model that meets a minimum quality bar. The new `min_coding_score` config lets you set that bar for coding tasks specifically — Hermes routes to the most affordable model that's at least that good at code. Stop paying for top-tier models when a mid-tier one would do. ([#22838](https://github.com/NousResearch/hermes-agent/pull/22838))

- **NovitaAI as a new model provider** — NovitaAI joins the provider lineup, giving you another option for open-source model hosting (Llama, Qwen, DeepSeek, etc.) with their pricing and rate limits. (salvage #7219) (@kshitijk4poor) ([#25507](https://github.com/NousResearch/hermes-agent/pull/25507))

- **Codex app-server runtime for OpenAI/Codex models** — An optional runtime that drives OpenAI's Codex CLI under the hood when you're using OpenAI or Codex paths. You get session reuse, automatic retirement of wedged sessions, and proper OAuth refresh classification — the kind of plumbing that makes long agentic runs not fall over. ([#24182](https://github.com/NousResearch/hermes-agent/pull/24182), [#25769](https://github.com/NousResearch/hermes-agent/pull/25769))

- **`huggingface/skills` as a trusted default tap** — The community skills index hosted at huggingface.co/skills is now wired into the Skills Hub by default. So when somebody publishes a useful skill there, you can install it from your own `hermes skills` browser without any extra config. (closes #2549) ([#26219](https://github.com/NousResearch/hermes-agent/pull/26219))

- **9 new optional skills** — Hyperliquid (perp + spot trading via the SDK and REST API), Yahoo Finance (live market data, fundamentals, historicals), api-testing (REST + GraphQL debug recipes), unified EVM multi-chain (one skill covers Ethereum + L2s + Base), darwinian-evolver (evolutionary prompt/skill tuning), osint-investigation (OSINT recipes for people / domains / orgs), pinggy-tunnel (expose local services to the public internet), watchers (polls RSS / HTTP JSON / GitHub via cron `no_agent` mode for change detection), and a full Notion overhaul for the May 2026 Developer Platform. ([#23582](https://github.com/NousResearch/hermes-agent/pull/23582), [#23583](https://github.com/NousResearch/hermes-agent/pull/23583), [#23590](https://github.com/NousResearch/hermes-agent/pull/23590), [#25299](https://github.com/NousResearch/hermes-agent/pull/25299), [#26760](https://github.com/NousResearch/hermes-agent/pull/26760), [#26729](https://github.com/NousResearch/hermes-agent/pull/26729), [#26765](https://github.com/NousResearch/hermes-agent/pull/26765), [#21881](https://github.com/NousResearch/hermes-agent/pull/21881), [#26612](https://github.com/NousResearch/hermes-agent/pull/26612))

- **API server exposes run approval events** — If you're driving Hermes programmatically through the HTTP API, long-running runs no longer silently hang when the agent hits an approval-required command. The approval request now surfaces on the API stream so your client can prompt the user and reply — no more silent stalls. (salvage of [#20311](https://github.com/NousResearch/hermes-agent/pull/20311)) ([#21899](https://github.com/NousResearch/hermes-agent/pull/21899))

- **Plugins can run any LLM call via `ctx.llm` + replace built-in tools via `tool_override`** — If you're writing a Hermes plugin, you now get first-class access to make LLM calls through the active provider and credentials — no manual client wiring. The new `tool_override` flag lets a plugin swap out a built-in tool with its own implementation cleanly. Plugin authors get the same model-routing and auth plumbing the core agent uses. (closes #11049) ([#23194](https://github.com/NousResearch/hermes-agent/pull/23194), [#26759](https://github.com/NousResearch/hermes-agent/pull/26759))

- **Brave Search (free tier) + DuckDuckGo (DDGS) as web-search providers** — Two new free web-search backends join Tavily, SearXNG, and Exa. Brave Search has a generous free tier; DDGS is the DuckDuckGo scraper that needs no key at all. Pick whichever fits your budget and rate-limit needs. ([#21337](https://github.com/NousResearch/hermes-agent/pull/21337))

- **Sudo brute-force block + 3 dangerous-command bypasses closed + tool-error sanitization** — The approval gate now blocks `sudo -S` brute-force attempts and classifies stdin-fed or askpass-stripped sudo invocations as DANGEROUS. Three known bypasses of dangerous-command detection are closed (inspired by Claude Code's command-detection work). And tool error strings are now sanitized before being re-injected into the model context, so a malicious file or remote service can't pass instructions to your agent through error output. ([#23736](https://github.com/NousResearch/hermes-agent/pull/23736), [#26829](https://github.com/NousResearch/hermes-agent/pull/26829), [#26823](https://github.com/NousResearch/hermes-agent/pull/26823))

- **`/subgoal` — user-added criteria appended to an active `/goal`** — When you've got a `/goal` running (the persistent Ralph-loop goal where the agent keeps going until criteria are met), you can now use `/subgoal <text>` to layer extra success criteria onto it mid-run. The judge factors your new criteria into the done-or-keep-going decision without restarting the loop. ([#25449](https://github.com/NousResearch/hermes-agent/pull/25449))

- **Provider rename — Alibaba Cloud → Qwen Cloud** — The Alibaba Cloud provider is renamed to Qwen Cloud in the picker and config to match what the rest of the world calls it. Existing config keys still work — no breaking changes — but the UI matches the actual brand now. ([#24835](https://github.com/NousResearch/hermes-agent/pull/24835))

- **Native Windows support (early beta)** — Hermes now runs natively on `cmd.exe` and PowerShell without WSL. A full PowerShell installer handles MinGit auto-install, Microsoft Store python stub detection, and the foreground Ctrl+C dance. There's still rough edges (this is the "early beta" stamp) — ~40 follow-up Windows-only fixes already landed in the window — but the basic loop works end-to-end on a clean Windows box. ([#21561](https://github.com/NousResearch/hermes-agent/pull/21561))


---

## 🪟 Windows — Native Support (Early Beta)

### Bootstrap & installer
- **Native Windows support (early beta)** — first-class native Windows path across CLI / gateway / TUI / tools ([#21561](https://github.com/NousResearch/hermes-agent/pull/21561))
- **PyPI wheel packaging — `pip install hermes-agent && hermes`** (salvage of #26350) ([#26593](https://github.com/NousResearch/hermes-agent/pull/26593))
- **Recognise Shift+Enter as a newline key** + Windows docs (salvage #21545) ([#22130](https://github.com/NousResearch/hermes-agent/pull/22130))
- **Preserve Ctrl+C for Windows foreground runs** (@helix4u) ([#22752](https://github.com/NousResearch/hermes-agent/pull/22752))
- **Stop spamming cwd-missing + tirith-spawn warnings on every terminal call** ([#26618](https://github.com/NousResearch/hermes-agent/pull/26618))
- **Use `--extra all` not `--all-extras`; drop lazy-covered extras from `[all]`** ([#24515](https://github.com/NousResearch/hermes-agent/pull/24515))

### Windows-specific fixes (40+ across cli / tools / gateway / curator / TUI)
A long tail of native-Windows fixes shipped alongside the beta — taskkill-based subprocess management, MinGit auto-install, Microsoft Store python stub detection, npm prefix handling, native PTY paths, signal handling differences, foreground process management, ANSI sequence handling, path normalization, file-locking semantics, and many more. Full list in commit log under `fix(windows)` / `feat(windows)` / `windows`.

---

## 🚀 Performance Wave

### Cold start
- **Cut ~19s from `hermes` cold start** — skills cache + lazy Feishu + no Nous HTTP at startup ([#22138](https://github.com/NousResearch/hermes-agent/pull/22138))
- **Skip eager plugin discovery on known built-in subcommands** ([#22120](https://github.com/NousResearch/hermes-agent/pull/22120))
- **Cache Nous auth + .env loads** — `hermes tools` All Platforms from 14s to <1.5s ([#25341](https://github.com/NousResearch/hermes-agent/pull/25341))
- **Skip welcome banner on `chat -q` single-query mode** ([#22904](https://github.com/NousResearch/hermes-agent/pull/22904))
- **Defer heavy google-cloud imports in google_chat to first adapter use** ([#22681](https://github.com/NousResearch/hermes-agent/pull/22681))
- **Defer QQAdapter and YuanbaoAdapter imports via PEP 562** ([#22790](https://github.com/NousResearch/hermes-agent/pull/22790))
- **Defer httpx import in teams to first webhook call** ([#22831](https://github.com/NousResearch/hermes-agent/pull/22831))
- **Defer fal_client import to first generation request** ([#22859](https://github.com/NousResearch/hermes-agent/pull/22859))
- **models.dev cache-first lookup, skip network when disk cache is fresh** ([#22808](https://github.com/NousResearch/hermes-agent/pull/22808))
- **Parallelize API connectivity checks in `hermes doctor` and disable IMDS** ([#22766](https://github.com/NousResearch/hermes-agent/pull/22766))

### Runtime
- **180x faster `browser_console` evaluations** — route through supervisor's persistent CDP WebSocket ([#23226](https://github.com/NousResearch/hermes-agent/pull/23226))
- **Tune Telegram cadence + adaptive fast-path for short replies** (salvage of #10388) ([#23587](https://github.com/NousResearch/hermes-agent/pull/23587))
- **Accumulate length-continuation prefix via list+join** ([#26237](https://github.com/NousResearch/hermes-agent/pull/26237))

### Prompt caching
- **Cross-session 1h prefix cache for Claude on Anthropic / OpenRouter / Nous Portal** ([#23828](https://github.com/NousResearch/hermes-agent/pull/23828))
- **Hit prefix cache in background review fork** (salvage #17276 + #25427) ([#25434](https://github.com/NousResearch/hermes-agent/pull/25434))

---

## 📦 Installation & Distribution

### PyPI + supply-chain
- **PyPI wheel packaging — `pip install hermes-agent && hermes`** (salvage of #26350) ([#26593](https://github.com/NousResearch/hermes-agent/pull/26593))
- **Supply-chain advisory checker + lazy-install framework + tiered install fallback** ([#24220](https://github.com/NousResearch/hermes-agent/pull/24220))
- **Use `--extra all` not `--all-extras`; drop lazy-covered extras from `[all]`** ([#24515](https://github.com/NousResearch/hermes-agent/pull/24515))
- **Skip browser download when system chromium exists** (@helix4u) ([#25317](https://github.com/NousResearch/hermes-agent/pull/25317))

### Nix
- **`extraDependencyGroups` for sealed venv extras** (@alt-glitch) ([#21817](https://github.com/NousResearch/hermes-agent/pull/21817))
- **Refresh npm lockfile hashes** — keeps Nix flake builds reproducible

### Docker
- **Bootstrap auth.json from env on first boot** ([#21880](https://github.com/NousResearch/hermes-agent/pull/21880))
- **Drop manual @hermes/ink build, rely on esbuild bundle** — slimmer image

### ACP / Zed
- **Zed ACP Registry integration** (salvage of #25908) ([#26079](https://github.com/NousResearch/hermes-agent/pull/26079))
- **Switch to uvx distribution, drop npm launcher** ([#26120](https://github.com/NousResearch/hermes-agent/pull/26120))
- **`hermes acp --setup-browser` bootstraps browser tools for registry installs** ([#26234](https://github.com/NousResearch/hermes-agent/pull/26234))

---

## 🏗️ Core Agent & Architecture

### Sessions & handoff
- **`/handoff` actually transfers the session live** ([#23395](https://github.com/NousResearch/hermes-agent/pull/23395))
- **Expose `HERMES_SESSION_ID` env var to agent tools** (@alt-glitch) ([#23847](https://github.com/NousResearch/hermes-agent/pull/23847))

### Goals (Ralph loop)
- **`/subgoal` — user-added criteria appended to active `/goal`** ([#25449](https://github.com/NousResearch/hermes-agent/pull/25449))
- **`/goal` checklist + /subgoal user controls** ([#23456](https://github.com/NousResearch/hermes-agent/pull/23456)) — rolled back in window ([#23813](https://github.com/NousResearch/hermes-agent/pull/23813)); /subgoal returned in simpler form via #25449

### Compression
- **Make `protect_first_n` configurable** ([#25447](https://github.com/NousResearch/hermes-agent/pull/25447))

### Verification
- **Per-turn file-mutation verifier footer** ([#24498](https://github.com/NousResearch/hermes-agent/pull/24498))

### Stream retry
- **Log inner cause, upstream headers, bytes/elapsed on every drop** ([#23005](https://github.com/NousResearch/hermes-agent/pull/23005))

---

## 🤖 Models & Providers

### New providers
- **xAI Grok OAuth (SuperGrok Subscription) provider** ([#26534](https://github.com/NousResearch/hermes-agent/pull/26534))
- **NovitaAI provider** (salvage #7219) (@kshitijk4poor) ([#25507](https://github.com/NousResearch/hermes-agent/pull/25507))
- **NVIDIA NIM billing origin header** (salvage #25211) ([#26585](https://github.com/NousResearch/hermes-agent/pull/26585))

### Provider work
- **OpenRouter Pareto Code router with `min_coding_score` knob** ([#22838](https://github.com/NousResearch/hermes-agent/pull/22838))
- **Optional codex app-server runtime for OpenAI/Codex models** ([#24182](https://github.com/NousResearch/hermes-agent/pull/24182))
- **Codex-runtime: retire wedged sessions + post-tool watchdog + OAuth refresh classify** ([#25769](https://github.com/NousResearch/hermes-agent/pull/25769))
- **Codex-runtime: skip unavailable plugins during migration** ([#25437](https://github.com/NousResearch/hermes-agent/pull/25437))
- **Codex-runtime: de-dup `[plugins.X]` tables and stop leaking HERMES_HOME into config.toml** (#26250) (@kshitijk4poor) ([#26260](https://github.com/NousResearch/hermes-agent/pull/26260))
- **Pass `reasoning.effort` to xAI Responses API** ([#22807](https://github.com/NousResearch/hermes-agent/pull/22807))
- **Custom provider: prompt and persist explicit `api_mode`** ([#25068](https://github.com/NousResearch/hermes-agent/pull/25068))
- **Rename Alibaba Cloud → Qwen Cloud, reorder picker** ([#24835](https://github.com/NousResearch/hermes-agent/pull/24835))
- **Restore gpt-5.3-codex-spark for ChatGPT Pro** (salvage #18286 + #19530, fixes #16172) (@kshitijk4poor) ([#22991](https://github.com/NousResearch/hermes-agent/pull/22991))
- **Inject tool-use enforcement for GLM models** ([#24715](https://github.com/NousResearch/hermes-agent/pull/24715))
- **Use Nous Portal as model metadata authority** (@rob-maron) ([#24502](https://github.com/NousResearch/hermes-agent/pull/24502))
- **Unified `client=hermes-client-v<version>` tag on every Portal request** ([#24779](https://github.com/NousResearch/hermes-agent/pull/24779))
- **Prevent stale Ollama credentials after provider switch** (@kshitijk4poor) ([#21703](https://github.com/NousResearch/hermes-agent/pull/21703))
- **Auxiliary client: rotate pooled auth after quota failures** (salvage #22779) ([#22792](https://github.com/NousResearch/hermes-agent/pull/22792))
- **Auxiliary client: skip providers without credentials immediately** (#25395) ([#25487](https://github.com/NousResearch/hermes-agent/pull/25487))
- **Auth: send Nous refresh token via header** (@shannonsands) ([#21578](https://github.com/NousResearch/hermes-agent/pull/21578))
- **MiniMax: harden OAuth dashboard and runtime** ([#24165](https://github.com/NousResearch/hermes-agent/pull/24165))

### OpenAI-compatible proxy
- **Local OpenAI-compatible proxy for OAuth providers** — Codex / Aider / Cline can hit Claude Pro, ChatGPT Pro, SuperGrok ([#25969](https://github.com/NousResearch/hermes-agent/pull/25969))

---

## 📱 Messaging Platforms (Gateway)

### New platforms
- **LINE Messaging API platform plugin** ([#23197](https://github.com/NousResearch/hermes-agent/pull/23197))
- **SimpleX Chat platform plugin** (salvages #2558) ([#26232](https://github.com/NousResearch/hermes-agent/pull/26232))

### Microsoft Graph foundation
- **msgraph: add auth and client foundation** (salvage of #21408) ([#21922](https://github.com/NousResearch/hermes-agent/pull/21922))
- **msgraph: add webhook listener platform** (salvage of #21409) ([#21969](https://github.com/NousResearch/hermes-agent/pull/21969))
- **teams-pipeline: add plugin runtime and operator cli** (salvage of #21410) ([#22007](https://github.com/NousResearch/hermes-agent/pull/22007))
- **teams: add pipeline outbound delivery via existing adapter** (salvage of #21411) ([#22024](https://github.com/NousResearch/hermes-agent/pull/22024))

### Cross-platform
- **Per-platform admin/user split for slash commands** (salvage of #4443) ([#23373](https://github.com/NousResearch/hermes-agent/pull/23373))
- **Forensics on signal handling — non-blocking diag, per-phase timing, stale-unit warning** ([#23285](https://github.com/NousResearch/hermes-agent/pull/23285))
- **Keep gateway running when platforms fail; add per-platform circuit breaker + `/platform`** ([#26600](https://github.com/NousResearch/hermes-agent/pull/26600))
- **Wire `clarify` tool with inline keyboard buttons on Telegram** ([#24199](https://github.com/NousResearch/hermes-agent/pull/24199))
- **Add `chat_id` to `hook_ctx` for message source tracking** ([#24710](https://github.com/NousResearch/hermes-agent/pull/24710))

### Telegram
- **Native draft streaming via `sendMessageDraft` (Bot API 9.5+)** (salvage of #3412) ([#23512](https://github.com/NousResearch/hermes-agent/pull/23512))
- **Stream Telegram edits safely** — salvage of #22264 (@kshitijk4poor) ([#22518](https://github.com/NousResearch/hermes-agent/pull/22518))
- **Telegram notification mode** (salvage #22772) ([#22793](https://github.com/NousResearch/hermes-agent/pull/22793))
- **Telegram guest mention mode** (@kshitijk4poor) ([#22759](https://github.com/NousResearch/hermes-agent/pull/22759))
- **Split-and-deliver oversized edits instead of silent truncation** (salvage of #19537) ([#23576](https://github.com/NousResearch/hermes-agent/pull/23576))
- **Preserve DM topic routing via reply fallback** (salvage #22053) (@kshitijk4poor) ([#22410](https://github.com/NousResearch/hermes-agent/pull/22410))
- **Pass `source.thread_id` explicitly on auto-reset notice** (carve-out of #7404) ([#23440](https://github.com/NousResearch/hermes-agent/pull/23440))

### Discord
- **Render clarify choices as buttons** ([#25485](https://github.com/NousResearch/hermes-agent/pull/25485))
- **Channel history backfill — default on, broadened scope** ([#25984](https://github.com/NousResearch/hermes-agent/pull/25984))
- **`thread_require_mention` for multi-bot threads** (salvage #25313) ([#25445](https://github.com/NousResearch/hermes-agent/pull/25445))

### Slack
- **Support `!cmd` as alternate prefix for slash commands in threads** ([#25355](https://github.com/NousResearch/hermes-agent/pull/25355))

### WhatsApp
- **Surface quoted reply metadata from Baileys** (#25398) ([#25489](https://github.com/NousResearch/hermes-agent/pull/25489))

### Feishu / Google Chat / others
- **Feishu: native update prompt cards** (@kshitijk4poor) ([#22448](https://github.com/NousResearch/hermes-agent/pull/22448))
- **Google Chat: repair setup prompt imports** (@helix4u) ([#22038](https://github.com/NousResearch/hermes-agent/pull/22038))
- **Google Chat: honor relay-declared sender_type** (salvage of #22107) (@kshitijk4poor) ([#22432](https://github.com/NousResearch/hermes-agent/pull/22432))
- **LINE: use `build_source` instead of nonexistent `create_source`** ([#24717](https://github.com/NousResearch/hermes-agent/pull/24717))
- **Add `weixin, and more` to gateway docs** (salvage of #21063 by @wuwuzhijing)

---

## 🖥️ CLI & TUI

### CLI
- **Show YOLO mode warning in banner and status bar** ([#26238](https://github.com/NousResearch/hermes-agent/pull/26238))
- **Confirm prompt for destructive slash commands** (#4069) ([#22687](https://github.com/NousResearch/hermes-agent/pull/22687))
- **`docker_extra_args` + `display.timestamps`** ([#23599](https://github.com/NousResearch/hermes-agent/pull/23599))
- **Delegate tool: show user's actual concurrency / spawn-depth limits in description** ([#22694](https://github.com/NousResearch/hermes-agent/pull/22694))

### TUI
- **`/sessions` slash command for browsing and resuming previous sessions** (@austinpickett) ([#20805](https://github.com/NousResearch/hermes-agent/pull/20805))
- **Segment turns with rule above non-first user msgs; trim ticker dead space** (@OutThisLife) ([#21846](https://github.com/NousResearch/hermes-agent/pull/21846))
- **Support attaching to an existing gateway** (@OutThisLife) ([#21978](https://github.com/NousResearch/hermes-agent/pull/21978))
- **Resolve markdown links to readable page titles** (@OutThisLife) ([#24013](https://github.com/NousResearch/hermes-agent/pull/24013))
- **Width-aware markdown table rendering with vertical fallback** (@alt-glitch) ([#26195](https://github.com/NousResearch/hermes-agent/pull/26195))
- **Keep Ink displayCursor in sync with fast-echo writes so cursor stops drifting** (@OutThisLife) ([#26717](https://github.com/NousResearch/hermes-agent/pull/26717))
- **Allow transcript scroll + Esc during approval/clarify/confirm prompts** (@OutThisLife) ([#26414](https://github.com/NousResearch/hermes-agent/pull/26414))
- **Preserve session when switching personality** (@austinpickett) ([#20942](https://github.com/NousResearch/hermes-agent/pull/20942))
- **Skip native safety net on OSC52-capable terminals** (@benbarclay) ([#20954](https://github.com/NousResearch/hermes-agent/pull/20954))

### Dashboard / GUI
- **Route embedded TUI through dashboard gateway** (@OutThisLife) ([#21979](https://github.com/NousResearch/hermes-agent/pull/21979))
- **Hide token/cost analytics behind config flag (default off)** ([#25438](https://github.com/NousResearch/hermes-agent/pull/25438))
- **Fix Langfuse observability — trace I/O, tool outputs, placeholder credentials** (closes #22342, #22763) (@kshitijk4poor) ([#26320](https://github.com/NousResearch/hermes-agent/pull/26320))
- **MiniMax 'Login' button launched Claude OAuth** (salvage #22849) ([#24058](https://github.com/NousResearch/hermes-agent/pull/24058))
- **Update cron modals** (@austinpickett) ([#25985](https://github.com/NousResearch/hermes-agent/pull/25985))
- **Analytics: prevent silent token loss and add Claude 4.5–4.7 pricing** (@austinpickett) ([#21455](https://github.com/NousResearch/hermes-agent/pull/21455))

---

## 🔧 Tools & Capabilities

### Vision & video
- **`vision_analyze` returns pixels to vision-capable models** ([#22955](https://github.com/NousResearch/hermes-agent/pull/22955))
- **Unified `video_generate` with pluggable provider backends** ([#25126](https://github.com/NousResearch/hermes-agent/pull/25126))
- **`image_gen`: actionable setup message when no FAL backend is reachable** ([#26222](https://github.com/NousResearch/hermes-agent/pull/26222))

### Computer use
- **`computer_use` cua-driver backend + focus-safe ops + non-Anthropic provider fix** (re-salvage #16936) ([#21967](https://github.com/NousResearch/hermes-agent/pull/21967))
- **Refresh cua-driver on `hermes update` + add `install --upgrade`** ([#24063](https://github.com/NousResearch/hermes-agent/pull/24063))

### LSP & write-time diagnostics
- **Semantic diagnostics from real language servers in `write_file`/`patch`** ([#24168](https://github.com/NousResearch/hermes-agent/pull/24168))
- **Shift baseline diagnostics into post-edit coordinates** ([#25978](https://github.com/NousResearch/hermes-agent/pull/25978))

### Search & web
- **Brave Search (free tier) and DDGS search providers** ([#21337](https://github.com/NousResearch/hermes-agent/pull/21337))
- **Bearer auth header for Tavily `/crawl` endpoint** ([#24658](https://github.com/NousResearch/hermes-agent/pull/24658))

### X (Twitter)
- **Gated `x_search` tool with OAuth-or-API-key auth** ([#26763](https://github.com/NousResearch/hermes-agent/pull/26763))

### Browser
- **Route `browser_console` eval through supervisor's persistent CDP WS (180x faster)** ([#23226](https://github.com/NousResearch/hermes-agent/pull/23226))
- **Support externally managed Camofox sessions** ([#24499](https://github.com/NousResearch/hermes-agent/pull/24499))

### MCP
- **`supports_parallel_tool_calls` for MCP servers** (salvage of #9944) ([#26825](https://github.com/NousResearch/hermes-agent/pull/26825))
- **Codex preset for Codex CLI MCP server** (salvage #22663) ([#22679](https://github.com/NousResearch/hermes-agent/pull/22679))
- **Stop retrying initial MCP auth failures** (#25624) ([#25776](https://github.com/NousResearch/hermes-agent/pull/25776))

### Google Workspace
- **Drive write ops + Docs/Sheets create/append** ([#21895](https://github.com/NousResearch/hermes-agent/pull/21895))

### Per-turn verifier
- **Per-turn file-mutation verifier footer** ([#24498](https://github.com/NousResearch/hermes-agent/pull/24498))

---

## 🧩 Kanban (Multi-Agent)

- **`specify` — auxiliary LLM fleshes out triage tasks** ([#21435](https://github.com/NousResearch/hermes-agent/pull/21435))
- **Orchestrator board tools — `kanban_list` + `kanban_unblock`** (carve-out of #20568) ([#23012](https://github.com/NousResearch/hermes-agent/pull/23012))
- **`stranded_in_ready` diagnostic for unclaimed tasks** ([#23578](https://github.com/NousResearch/hermes-agent/pull/23578))
- **Dashboard batch QOL upgrade** (salvage of #23240) ([#23550](https://github.com/NousResearch/hermes-agent/pull/23550))
- **Tooltips and docs link across dashboard** ([#21541](https://github.com/NousResearch/hermes-agent/pull/21541))
- **Dedupe notifier delivery via atomic claim + rewind on failure** (salvage #22558) ([#23401](https://github.com/NousResearch/hermes-agent/pull/23401))
- **Keep notifier subscriptions alive across retry cycles** (salvage #21398) ([#23423](https://github.com/NousResearch/hermes-agent/pull/23423))
- **Drop caller-controlled author override in `kanban_comment`** (salvage of #22109) (@kshitijk4poor) ([#22435](https://github.com/NousResearch/hermes-agent/pull/22435))
- **Sanitize comment author rendering in `build_worker_context`** ([#22769](https://github.com/NousResearch/hermes-agent/pull/22769))

---

## 🧠 Plugins & Extension

### Plugin surface
- **Run any LLM call from inside a plugin via `ctx.llm`** ([#23194](https://github.com/NousResearch/hermes-agent/pull/23194))
- **`tool_override` flag for replacing built-in tools** (closes #11049) ([#26759](https://github.com/NousResearch/hermes-agent/pull/26759))
- **`standalone_sender_fn` for out-of-process cron delivery** (@kshitijk4poor) ([#22461](https://github.com/NousResearch/hermes-agent/pull/22461))
- **`HERMES_PLUGINS_DEBUG=1` surfaces plugin discovery logs** ([#22684](https://github.com/NousResearch/hermes-agent/pull/22684))
- **Hindsight-client as optional dependency** (@alt-glitch) ([#21818](https://github.com/NousResearch/hermes-agent/pull/21818))

### Profile & distribution
- **Shareable profile distributions via git** ([#20831](https://github.com/NousResearch/hermes-agent/pull/20831))

---

## ⏰ Cron

- **Routing intent — `deliver=all` fans out to every connected channel** ([#21495](https://github.com/NousResearch/hermes-agent/pull/21495))
- **Support name-based lookup for job operations** ([#26231](https://github.com/NousResearch/hermes-agent/pull/26231))
- **Blank Cron dashboard tab + partial-record crashes** (salvage #21042 + #22330) (@kshitijk4poor) ([#22389](https://github.com/NousResearch/hermes-agent/pull/22389))
- **Do not seed `HERMES_SESSION_*` contextvars from cron origin** (salvage of #22356) (@kshitijk4poor) ([#22382](https://github.com/NousResearch/hermes-agent/pull/22382))
- **Scan assembled prompt including skill content for prompt injection** (#3968)

---

## 🧩 Skills Ecosystem

### Skills Hub
- **`hermes-skills/huggingface` as a trusted default tap** (closes #2549) ([#26219](https://github.com/NousResearch/hermes-agent/pull/26219))
- **Show per-skill pages in the left sidebar** ([#26646](https://github.com/NousResearch/hermes-agent/pull/26646))
- **Richer info panels on the Skills Hub** ([#22905](https://github.com/NousResearch/hermes-agent/pull/22905))
- **Refuse `skill_view` name collisions instead of guessing** (closes #6136 @polkn)

### Curator
- **Show rename map in user-visible summary** ([#22910](https://github.com/NousResearch/hermes-agent/pull/22910))
- **Hint at `hermes curator pin` in the rename block** ([#23212](https://github.com/NousResearch/hermes-agent/pull/23212))

### New optional skills
- **Hyperliquid** — perp/spot trading via SDK + REST (salvage of #1952) ([#23583](https://github.com/NousResearch/hermes-agent/pull/23583))
- **Yahoo Finance** market data ([#23590](https://github.com/NousResearch/hermes-agent/pull/23590))
- **api-testing** (REST/GraphQL debug, salvages #1800) ([#23582](https://github.com/NousResearch/hermes-agent/pull/23582))
- **Unified EVM multi-chain skill** (salvages #25291 + #2010 + folds in base/) ([#25299](https://github.com/NousResearch/hermes-agent/pull/25299))
- **darwinian-evolver** ([#26760](https://github.com/NousResearch/hermes-agent/pull/26760))
- **osint-investigation** (closes #355) ([#26729](https://github.com/NousResearch/hermes-agent/pull/26729))
- **pinggy-tunnel** ([#26765](https://github.com/NousResearch/hermes-agent/pull/26765))
- **watchers** — RSS / HTTP JSON / GitHub polling via cron no-agent ([#21881](https://github.com/NousResearch/hermes-agent/pull/21881))
- **Notion overhaul for the Developer Platform** (May 2026) ([#26612](https://github.com/NousResearch/hermes-agent/pull/26612))

---

## 🔒 Security & Reliability

### Security hardening
- **Sudo brute-force block + sudo-stdin/askpass DANGEROUS** (salvage of #22194 + #21128) (@kshitijk4poor) ([#23736](https://github.com/NousResearch/hermes-agent/pull/23736))
- **Drop caller-controlled author override in `kanban_comment`** (salvage of #22109) (@kshitijk4poor) ([#22435](https://github.com/NousResearch/hermes-agent/pull/22435))
- **Cover remaining SSRF fetch paths in skills-hub** (salvage #22804) ([#22843](https://github.com/NousResearch/hermes-agent/pull/22843))
- **Use credential_pool for custom endpoint model listing probes** (salvage #22810) ([#22842](https://github.com/NousResearch/hermes-agent/pull/22842))
- **Require dashboard auth for plugin API routes** (salvage #19541) ([#23220](https://github.com/NousResearch/hermes-agent/pull/23220))
- **Sanitize env and redact output in quick commands + remove write-only `_pending_messages`** ([#23584](https://github.com/NousResearch/hermes-agent/pull/23584))
- **Reduce unnecessary `shell=True` in subprocess calls** ([#25149](https://github.com/NousResearch/hermes-agent/pull/25149))
- **Sanitize Google Chat sender_type from relay** (salvage of #22107) (@kshitijk4poor) ([#22432](https://github.com/NousResearch/hermes-agent/pull/22432))
- **Supply-chain advisory checker** ([#24220](https://github.com/NousResearch/hermes-agent/pull/24220))
- **Rewrite security policy around OS-level isolation as the boundary** (@jquesnelle) ([#20317](https://github.com/NousResearch/hermes-agent/pull/20317))
- **Remove public security advisory page** ([#24253](https://github.com/NousResearch/hermes-agent/pull/24253))

### Reliability — notable bug closures
- **SQLite: fall back to `journal_mode=DELETE` on NFS/SMB/FUSE** (fixes `/resume` on network mounts) (@kshitijk4poor) ([#22043](https://github.com/NousResearch/hermes-agent/pull/22043))
- **Codex-runtime: retire wedged sessions + post-tool watchdog + OAuth refresh classify** ([#25769](https://github.com/NousResearch/hermes-agent/pull/25769))
- **Codex-runtime: de-dup `[plugins.X]` tables and stop leaking HERMES_HOME** (#26250) (@kshitijk4poor) ([#26260](https://github.com/NousResearch/hermes-agent/pull/26260))
- **Daytona: migrate legacy-sandbox lookup to cursor-based `list()`** ([#24587](https://github.com/NousResearch/hermes-agent/pull/24587))
- **MCP: stop retrying initial MCP auth failures** (#25624) ([#25776](https://github.com/NousResearch/hermes-agent/pull/25776))
- **Gateway: enable text-intercept for multi-choice clarify fallback** (#25587) ([#25778](https://github.com/NousResearch/hermes-agent/pull/25778))
- **Gateway: keep running when platforms fail; per-platform circuit breaker + `/platform`** ([#26600](https://github.com/NousResearch/hermes-agent/pull/26600))
- **Delegate: salvage #21933 JSON-string batch + diagnostic logging** (@kshitijk4poor) ([#22436](https://github.com/NousResearch/hermes-agent/pull/22436))
- **Profiles+banner: exclude infrastructure from `--clone-all` + fix stale update-check repo resolution** (@kshitijk4poor) ([#22475](https://github.com/NousResearch/hermes-agent/pull/22475))
- **ACP: inline file attachment resources** (salvage #21400 + image support) ([#21407](https://github.com/NousResearch/hermes-agent/pull/21407))
- **CI: unblock shared PR checks** (@stephenschoettler) ([#21012](https://github.com/NousResearch/hermes-agent/pull/21012), [#25957](https://github.com/NousResearch/hermes-agent/pull/25957))

### Notable reverts in window
- **`/goal` checklist + /subgoal feature stack** — rolled back ([#23813](https://github.com/NousResearch/hermes-agent/pull/23813)); `/subgoal` returned in simpler form via [#25449](https://github.com/NousResearch/hermes-agent/pull/25449)
- **Scrollback box width clamp** (#25975) rolled back to restore full-width borders ([#26163](https://github.com/NousResearch/hermes-agent/pull/26163))
- **`fix(cli): tolerate unreadable dirs when building systemd PATH`** rolled back

---

## 🌍 i18n

- **Localize all gateway commands + web dashboard, add 8 new locales (16 total)** ([#22914](https://github.com/NousResearch/hermes-agent/pull/22914))

---

## 📚 Documentation

- **Repair Voice & TTS provider table** (@nightcityblade, fixes #24101) ([#24138](https://github.com/NousResearch/hermes-agent/pull/24138))
- **Show per-skill pages in the left sidebar** ([#26646](https://github.com/NousResearch/hermes-agent/pull/26646))
- **Mention Weixin in gateway help and docstrings** (salvage of #21063 by @wuwuzhijing)
- **Richer info panels on the Skills Hub** ([#22905](https://github.com/NousResearch/hermes-agent/pull/22905))
- Many more doc updates across providers, platforms, skills, Windows install paths, and dashboard.

---

## 🧪 Testing & CI

- **Unblock shared PR checks** (@stephenschoettler) ([#21012](https://github.com/NousResearch/hermes-agent/pull/21012))
- **Stabilize shared test state after 21012** (@stephenschoettler) ([#25957](https://github.com/NousResearch/hermes-agent/pull/25957))
- A long tail of test additions for platforms, providers, plugins, and edge cases — 8 explicit `test:` PRs plus ~250 fix PRs that also added regression coverage.

---

## 👥 Contributors

### Core
- @teknium1 — release lead, architecture, ~406 PRs merged in window

### Top community contributors
- **@kshitijk4poor** — 38 PRs · Telegram cadence/streaming/topic routing, security hardening (sudo, SSRF, kanban_comment, dashboard auth), codex-runtime hygiene, NovitaAI provider, profile/banner fixes, Feishu update cards, gateway QOL across the board
- **@alt-glitch** — 13 PRs · Markdown-table TUI rendering, `HERMES_SESSION_ID` env var, hindsight-client optional dep, Nix `extraDependencyGroups`
- **@OutThisLife** (Brooklyn Nicholson) — 12 PRs · TUI turn segmentation, attach-to-gateway, markdown link titles, embedded TUI via dashboard gateway, Ink cursor sync, scroll/Esc during prompts
- **@austinpickett** — 8 PRs · `/sessions` slash command, personality switching preserves session, cron modals, dashboard analytics
- **@helix4u** — 5 PRs · Google Chat setup, browser install skip on system chromium, Windows Ctrl+C preservation
- **@rob-maron** — 4 PRs · Nous Portal as model metadata authority, provider polish
- **@stephenschoettler** — 3 PRs · CI stabilization
- **@ethernet8023** — 3 PRs · platform/gateway work

### All contributors (alphabetical)

@02356abc, @0xbyt4, @0xharryriddle, @1000Delta, @1RB, @29206394, @A-kamal, @aashizpoudel, @Abd0r,
@adybag14-cyber, @AgentArcLab, @ahmedbadr3, @AhmetArif0, @alblez, @Alex-yang00, @ALIYILD, @AllynSheep,
@alt-glitch, @am423, @amathxbt, @amethystani, @ArecaNon, @Arkmusn, @askclaw-vesper, @AsoTora, @austinpickett,
@aydnOktay, @ayushere, @baocin, @Bartok9, @benbarclay, @BennetYrWang, @Bihruze, @binhnt92, @briandevans,
@brooklynnicholson, @btorresgil, @buntingszn, @CalmProton, @chrisworksai, @CoinTheHat, @dandacompany, @Dangooy,
@DanielLSM, @David-0x221Eight, @ddupont808, @dhruv-saxena, @diablozzc, @dlkakbs, @dmahan93, @dmnkhorvath,
@domtriola, @donrhmexe, @Dusk1e, @eloklam, @emozilla, @ephron-ren, @erenkarakus, @EthanGuo-coder,
@ethernet8023, @evgyur, @explainanalyze, @fahdad, @fr33d3m0n, @Freeman-Consulting, @freqyfreqy, @Frowtek,
@fu576, @github-actions[bot], @gnanirahulnutakki, @GodsBoy, @guglielmofonda, @Gutslabs, @hanzckernel,
@heathley, @hekaru-agent, @helix4u, @HenkDz, @HiddenPuppy, @hllqkb, @hrygo, @HuangYuChuh, @Hugo-SEQUIER, @HxT9,
@iacker, @InB4DevOps, @isaachuangGMICLOUD, @iuyup, @Jaaneek, @jackey8616, @jackjin1997, @Jaggia, @jak983464779,
@jelrod27, @jethac, @JithendraNara, @johnisag, @Julientalbot, @Jwd-gity, @kallidean, @keyuyuan, @kfa-ai,
@kidonng, @KiraKatana, @kjames2001, @konsisumer, @Korkyzer, @kshitijk4poor, @KvnGz, @lars-hagen, @leehack,
@leepoweii, @LeonSGP43, @li0near, @libo1106, @liquidchen, @littlewwwhite, @liuhao1024, @liyoungc, @luandiasrj,
@luoyuctl, @luyao618, @magic524, @mbac, @McClean, @memosr, @Mibayy, @ming1523, @mizgyo, @mrshu, @ms-alan,
@MustafaKara7, @nederev, @nicoechaniz, @nidhi-singh02, @nightcityblade, @nik1t7n, @Ninso112, @NivOO5,
@novax635, @nv-kasikritc, @oferlaor, @oswaldb22, @outdoorsea, @oxngon, @PaTTeeL, @pearjelly, @pefontana,
@perng, @PhilipAD, @phuongvm, @polkn, @Prasanna28Devadiga, @princepal9120, @pty819, @purzbeats, @Quarkex,
@quocanh261997, @qWaitCrypto, @Qwinty, @rahimsais, @raymaylee, @ReqX, @rewbs, @RhombusMaximus, @rob-maron,
@Ruzzgar, @ryptotalent, @Sanjays2402, @shannonsands, @shaun0927, @SiliconID, @silv-mt-holdings, @simpolism,
@smwbev, @soichiyo, @sprmn24, @steezkelly, @stephenschoettler, @Sylw3ster, @szymonclawd, @teyrebaz33,
@Tianyu199509, @Tranquil-Flow, @TreyDong, @TurgutKural, @tw2818, @tymrtn, @uzunkuyruk, @v1b3coder,
@vanthinh6886, @VinceZcrikl, @vKongv, @vominh1919, @voteblake, @VTRiot, @wali-reheman, @wesleysimplicio,
@wilsen0, @WorldWriter, @worlldz, @wuli666, @wuwuzhijing, @Wysie, @XiaoXiao0221, @xieNniu, @xxxigm, @yehuosi,
@ygd58, @yifengingit, @yuga-hashimoto, @zccyman, @ZeterMordio, @Zhekinmaksim, @zhengyn0001

Also: @Nagatha (Claude Opus 4.7).

---

**Full Changelog**: [v2026.5.7...v2026.5.16](https://github.com/NousResearch/hermes-agent/compare/v2026.5.7...v2026.5.16)

---

## Hermes Agent v0.13.0 (2026.5.7) — The Tenacity Release

- Tag: `v2026.5.7`
- Published: 2026-05-07T16:23:08Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.7
- Prerelease: False

# Hermes Agent v0.13.0 (v2026.5.7)

**Release Date:** May 7, 2026
**Since v0.12.0:** 864 commits · 588 merged PRs · 829 files changed · 128,366 insertions · 282 issues closed (13 P0, 36 P1) · 295 community contributors (including co-authors)

> The Tenacity Release — Hermes Agent now finishes what it starts. Kanban ships as a durable multi-agent board (heartbeat, reclaim, zombie detection, auto-block on incomplete exit, per-task retries, hallucination recovery). `/goal` keeps the agent locked on a target across turns (Ralph loop). Checkpoints v2 rewrites state persistence with real pruning. Gateway auto-resumes interrupted sessions after restart. Cron grows a `no_agent` watchdog mode. A security wave closes 8 P0s — redaction is now ON by default, Discord role-allowlists are guild-scoped, WhatsApp rejects strangers by default, and TOCTOU windows close across auth.json and MCP OAuth. Google Chat becomes the 20th platform. Providers become a pluggable surface. Seven i18n locales ship.

---

## ✨ Highlights

- **Multi-agent Kanban — delegate to an AI team that actually finishes** — Spin up a durable board, drop tasks on it, and let multiple Hermes workers pick them up, hand off, and close them out. Heartbeats, reclaim, zombie detection, retry budgets, and a hallucination gate keep the team honest. One install, many kanbans. ([#17805](https://github.com/NousResearch/hermes-agent/pull/17805), [#19653](https://github.com/NousResearch/hermes-agent/pull/19653), [#20232](https://github.com/NousResearch/hermes-agent/pull/20232), [#20332](https://github.com/NousResearch/hermes-agent/pull/20332), [#21330](https://github.com/NousResearch/hermes-agent/pull/21330), [#21183](https://github.com/NousResearch/hermes-agent/pull/21183), [#21214](https://github.com/NousResearch/hermes-agent/pull/21214))

- **`/goal` — the agent doesn't forget what you asked it to do** — Lock the agent onto a target and it stays on task across turns. The Ralph loop as a first-class primitive. ([#18262](https://github.com/NousResearch/hermes-agent/pull/18262), [#18275](https://github.com/NousResearch/hermes-agent/pull/18275), [#21287](https://github.com/NousResearch/hermes-agent/pull/21287))

- **Show it a video** — new `video_analyze` tool for native video understanding on Gemini and compatible multimodal models. (@alt-glitch) ([#19301](https://github.com/NousResearch/hermes-agent/pull/19301))

- **Clone a voice** — xAI Custom Voices lands as a TTS provider with voice cloning support. (@alt-glitch) ([#18776](https://github.com/NousResearch/hermes-agent/pull/18776))

- **Hermes speaks your language** — static gateway + CLI messages translate to 7 locales: Chinese, Japanese, German, Spanish, French, Ukrainian, and Turkish. Docs site gains a Chinese (zh-Hans) locale. ([#20231](https://github.com/NousResearch/hermes-agent/pull/20231), [#20329](https://github.com/NousResearch/hermes-agent/pull/20329), [#20467](https://github.com/NousResearch/hermes-agent/pull/20467), [#20474](https://github.com/NousResearch/hermes-agent/pull/20474), [#20430](https://github.com/NousResearch/hermes-agent/pull/20430), [#20431](https://github.com/NousResearch/hermes-agent/pull/20431))

- **Google Chat — the 20th messaging platform** — plus a generic platform-plugin hooks surface so third-party adapters drop in without touching core (IRC and Teams migrated). ([#21306](https://github.com/NousResearch/hermes-agent/pull/21306), [#21331](https://github.com/NousResearch/hermes-agent/pull/21331))

- **Sessions survive restarts** — gateway bounces mid-agent, `/update` restarts, source-file reloads — conversations auto-resume when the gateway comes back. ([#21192](https://github.com/NousResearch/hermes-agent/pull/21192))

- **Security wave — 8 P0 closures** — redaction ON by default, Discord role-allowlists guild-scoped (CVSS 8.1 cross-guild DM bypass closed), WhatsApp rejects strangers by default, TOCTOU windows closed across `auth.json` and MCP OAuth, browser enforces cloud-metadata SSRF floor, cron prompt-injection scans assembled skill content, `hermes debug share` redacts at upload. ([#21193](https://github.com/NousResearch/hermes-agent/pull/21193), [#21241](https://github.com/NousResearch/hermes-agent/pull/21241), [#21291](https://github.com/NousResearch/hermes-agent/pull/21291), [#21176](https://github.com/NousResearch/hermes-agent/pull/21176), [#21194](https://github.com/NousResearch/hermes-agent/pull/21194), [#21228](https://github.com/NousResearch/hermes-agent/pull/21228), [#21350](https://github.com/NousResearch/hermes-agent/pull/21350), [#19318](https://github.com/NousResearch/hermes-agent/pull/19318))

- **Checkpoints v2** — state persistence rewritten. Real pruning, disk guardrails, no more orphan shadow repos. ([#20709](https://github.com/NousResearch/hermes-agent/pull/20709))

- **The agent lints its own writes** — post-write delta lint on `write_file` + `patch`. Python, JSON, YAML, TOML. Syntax errors surface immediately instead of shipping downstream. ([#20191](https://github.com/NousResearch/hermes-agent/pull/20191))

- **`no_agent` cron mode — script-only watchdog** — cron jobs can now skip the agent entirely and just run a script. Empty stdout is silent, non-empty gets delivered verbatim. ([#19709](https://github.com/NousResearch/hermes-agent/pull/19709))

- **Platform allowlists everywhere** — `allowed_channels` / `allowed_chats` / `allowed_rooms` config across Slack, Telegram, Mattermost, Matrix, and DingTalk. ([#21251](https://github.com/NousResearch/hermes-agent/pull/21251))

- **Providers are now plugins** — `ProviderProfile` ABC + `plugins/model-providers/`. Drop in third-party providers without touching core. ([#20324](https://github.com/NousResearch/hermes-agent/pull/20324))

- **API server — long-term memory per session** — `X-Hermes-Session-Key` header gives memory providers a stable session identifier. ([#20199](https://github.com/NousResearch/hermes-agent/pull/20199))

- **MCP levels up** — SSE transport with OAuth forwarding, stale-pipe retries, image results surface as MEDIA tags instead of getting dropped, keepalive on long-lived lifecycle waits. ([#21227](https://github.com/NousResearch/hermes-agent/pull/21227), [#21323](https://github.com/NousResearch/hermes-agent/pull/21323), [#21289](https://github.com/NousResearch/hermes-agent/pull/21289), [#21328](https://github.com/NousResearch/hermes-agent/pull/21328), [#20209](https://github.com/NousResearch/hermes-agent/pull/20209))

- **Curator grows subcommands** — `hermes curator archive`, `prune`, `list-archived`. Manual `hermes curator run` is synchronous now — you see results without polling. ([#20200](https://github.com/NousResearch/hermes-agent/pull/20200), [#21236](https://github.com/NousResearch/hermes-agent/pull/21236), [#21216](https://github.com/NousResearch/hermes-agent/pull/21216))

- **ACP — `/steer` and `/queue`** — direct the in-flight agent or queue follow-ups from Zed, VS Code, or JetBrains. Plus atomic session persistence and reasoning-metadata preservation across restarts. (@HenkDz) ([#18114](https://github.com/NousResearch/hermes-agent/pull/18114), [#20279](https://github.com/NousResearch/hermes-agent/pull/20279), [#20296](https://github.com/NousResearch/hermes-agent/pull/20296), [#20433](https://github.com/NousResearch/hermes-agent/pull/20433))

- **TUI glow-up** — `/model` picker matches `hermes model` with inline auth (@austinpickett), collapsible startup banner sections (@kshitijk4poor), context-compression counter in the status bar. ([#18117](https://github.com/NousResearch/hermes-agent/pull/18117), [#20625](https://github.com/NousResearch/hermes-agent/pull/20625), [#21218](https://github.com/NousResearch/hermes-agent/pull/21218))

- **Dashboard grows up** — Plugins page (manage, enable/disable, auth status) (@austinpickett), Profiles management page (@vincez-hms-coder), sortable analytics tables, reverse-proxy support via `X-Forwarded-Prefix`, new `default-large` 18px theme. ([#18095](https://github.com/NousResearch/hermes-agent/pull/18095), [#16419](https://github.com/NousResearch/hermes-agent/pull/16419), [#18192](https://github.com/NousResearch/hermes-agent/pull/18192), [#21296](https://github.com/NousResearch/hermes-agent/pull/21296), [#20820](https://github.com/NousResearch/hermes-agent/pull/20820))

- **SearXNG + split web tools** — SearXNG ships as a native search-only backend; web tools now let you pick different backends per capability (search vs extract vs browse). (@kshitijk4poor) ([#20823](https://github.com/NousResearch/hermes-agent/pull/20823), [#20061](https://github.com/NousResearch/hermes-agent/pull/20061), [#20841](https://github.com/NousResearch/hermes-agent/pull/20841))

- **OpenRouter response caching** — explicit cache control for models that expose it. (@kshitijk4poor) ([#19132](https://github.com/NousResearch/hermes-agent/pull/19132))

- **`[[as_document]]` — skill media-routing directive** — skills can force the gateway to deliver output as a document on platforms that support it. ([#21210](https://github.com/NousResearch/hermes-agent/pull/21210))

- **`transform_llm_output` plugin hook** — new lifecycle hook that lets plugins reshape or filter LLM output before it hits the conversation. Useful for context-window reducers and content filters. ([#21235](https://github.com/NousResearch/hermes-agent/pull/21235))

- **Nous OAuth persists across profiles** — shared token store: sign in once, every profile inherits the session. ([#19712](https://github.com/NousResearch/hermes-agent/pull/19712))

- **QQBot — native approval keyboards** — feature parity with Telegram / Discord approval UX. Chunked upload, quoted attachments. ([#21342](https://github.com/NousResearch/hermes-agent/pull/21342), [#21353](https://github.com/NousResearch/hermes-agent/pull/21353))

- **6 new optional skills** — Shopify (Admin + Storefront GraphQL), here.now, shop-app personal shopping assistant, Anthropic financial-services bundle, kanban-video-orchestrator (@SHL0MS), searxng-search (@kshitijk4poor). ([#18116](https://github.com/NousResearch/hermes-agent/pull/18116), [#18170](https://github.com/NousResearch/hermes-agent/pull/18170), [#20702](https://github.com/NousResearch/hermes-agent/pull/20702), [#21180](https://github.com/NousResearch/hermes-agent/pull/21180), [#19281](https://github.com/NousResearch/hermes-agent/pull/19281), [#20841](https://github.com/NousResearch/hermes-agent/pull/20841))

- **New models** — `deepseek/deepseek-v4-pro`, `x-ai/grok-4.3`, `openrouter/owl-alpha` (free), `tencent/hy3-preview` (@Contentment003111), Arcee Trinity Large Thinking temperature + compression overrides. ([#20495](https://github.com/NousResearch/hermes-agent/pull/20495), [#20497](https://github.com/NousResearch/hermes-agent/pull/20497), [#18071](https://github.com/NousResearch/hermes-agent/pull/18071), [#21077](https://github.com/NousResearch/hermes-agent/pull/21077), [#20473](https://github.com/NousResearch/hermes-agent/pull/20473))

- **100 fresh CLI startup tips** — the random tip banner gets 100 new entries covering cron, kanban, curator, plugins, and lesser-known flags. ([#20168](https://github.com/NousResearch/hermes-agent/pull/20168))

---

## 🧩 Multi-Agent Kanban (Durable)

### New — durable multi-profile collaboration board
- **`feat(kanban): durable multi-profile collaboration board`** — post-revert reimplementation, multi-profile by design ([#17805](https://github.com/NousResearch/hermes-agent/pull/17805))
- **Multi-project boards** — one install, many kanbans ([#19653](https://github.com/NousResearch/hermes-agent/pull/19653), [#19679](https://github.com/NousResearch/hermes-agent/pull/19679))
- **Share board, workspaces, and worker logs across profiles** ([#19378](https://github.com/NousResearch/hermes-agent/pull/19378))
- **Hallucination gate + recovery UX for worker-created-card claims** (closes #20017) ([#20232](https://github.com/NousResearch/hermes-agent/pull/20232))
- **Generic diagnostics engine for task distress signals** ([#20332](https://github.com/NousResearch/hermes-agent/pull/20332))
- **Per-task `max_retries` override** (supersedes #20972) ([#21330](https://github.com/NousResearch/hermes-agent/pull/21330))
- **Multiline textarea for inline-create title** (salvage of #20970) ([#21243](https://github.com/NousResearch/hermes-agent/pull/21243))

### Kanban Dashboard
- **Workspace kind + path inputs in inline create form** ([#19679](https://github.com/NousResearch/hermes-agent/pull/19679))
- **Per-platform home-channel notification toggles** ([#19864](https://github.com/NousResearch/hermes-agent/pull/19864))
- **Sharper home-channel toggle contrast + drop → running action** ([#19916](https://github.com/NousResearch/hermes-agent/pull/19916))
- Fix: reject direct status transition to 'running' via dashboard API (salvage of #19554) ([#19705](https://github.com/NousResearch/hermes-agent/pull/19705))
- Fix: dashboard board pin authoritative over server current file (#20879) ([#21230](https://github.com/NousResearch/hermes-agent/pull/21230))
- Fix: treat dashboard event-stream cancellation as normal shutdown (#20790) ([#21222](https://github.com/NousResearch/hermes-agent/pull/21222))
- Fix: filter dashboard board by selected tenant (#19817) ([#21349](https://github.com/NousResearch/hermes-agent/pull/21349))
- Fix: code/pre styling theme-immune across all themes (#21086) ([#21247](https://github.com/NousResearch/hermes-agent/pull/21247))
- Fix: reset `<code>` background inside dashboard board ([#20687](https://github.com/NousResearch/hermes-agent/pull/20687))
- Fix: preserve dashboard completion summaries + add kanban edit (salvages #20016) ([#20195](https://github.com/NousResearch/hermes-agent/pull/20195))
- Fix: avoid fragile failure-column renames (salvage #20848) (@kshitijk4poor) ([#20855](https://github.com/NousResearch/hermes-agent/pull/20855))

### Worker lifecycle + reliability
- **Heartbeat + reclaim + zombie + retry-cap fixes** (#21147, #21141, #21169, #20881) ([#21183](https://github.com/NousResearch/hermes-agent/pull/21183))
- **Auto-block workers that exit without completing + shutdown race** (#20894) ([#21214](https://github.com/NousResearch/hermes-agent/pull/21214))
- **Detect darwin zombie workers** (salvages #20023) ([#20188](https://github.com/NousResearch/hermes-agent/pull/20188))
- **Unify failure counter across spawn/timeout/crash outcomes** ([#20410](https://github.com/NousResearch/hermes-agent/pull/20410))
- **Enforce worker task-ownership on destructive tool calls** ([#19713](https://github.com/NousResearch/hermes-agent/pull/19713))
- **Drop worker identity claim from KANBAN_GUIDANCE** ([#19427](https://github.com/NousResearch/hermes-agent/pull/19427))
- Fix: skip dispatch for tasks assigned to non-profile lanes (salvages #20105, #20134) ([#20165](https://github.com/NousResearch/hermes-agent/pull/20165))
- Fix: include default profile in on-disk assignee enumeration (salvages #20123) ([#20170](https://github.com/NousResearch/hermes-agent/pull/20170))
- Fix: ignore stale current board pointers (salvages #20063) ([#20183](https://github.com/NousResearch/hermes-agent/pull/20183))
- Fix: profile discovery ignores HERMES_HOME in custom-root deployments (@jackey8616) ([#19020](https://github.com/NousResearch/hermes-agent/pull/19020))
- Fix: allow orchestrator profiles to see kanban tools via toolsets config ([#19606](https://github.com/NousResearch/hermes-agent/pull/19606))

### Batch salvages
- Tier-1 batch — metadata test, max_spawn config, run-id lifecycle guard (salvages #19522 #19556 #19829) ([#20440](https://github.com/NousResearch/hermes-agent/pull/20440))
- Tier-2 batch — doctor, started_at, parent-guard, latest_summary, selects, linked-children ([#20448](https://github.com/NousResearch/hermes-agent/pull/20448))

### Documentation
- Backfill multi-board refs in reference docs ([#19704](https://github.com/NousResearch/hermes-agent/pull/19704))
- Document `/kanban` slash command ([#19584](https://github.com/NousResearch/hermes-agent/pull/19584))
- Document recommended handoff evidence metadata (salvage #19512) ([#20415](https://github.com/NousResearch/hermes-agent/pull/20415))
- Fix orchestrator + worker skill setup instructions (@helix4u) ([#20958](https://github.com/NousResearch/hermes-agent/pull/20958), [#20960](https://github.com/NousResearch/hermes-agent/pull/20960))

---

## 🎯 Persistent Goals, Checkpoints & Session Durability

### `/goal` — persistent cross-turn goals (Ralph loop)
- **`feat: /goal — persistent cross-turn goals`** ([#18262](https://github.com/NousResearch/hermes-agent/pull/18262))
- **Docs page — Persistent Goals (/goal)** ([#18275](https://github.com/NousResearch/hermes-agent/pull/18275))
- Fix: honor configured goal turn budget (salvage #19423) ([#21287](https://github.com/NousResearch/hermes-agent/pull/21287))

### Checkpoints v2
- **Single-store rewrite with real pruning + disk guardrails** ([#20709](https://github.com/NousResearch/hermes-agent/pull/20709))

### Session durability
- **Auto-resume interrupted sessions after gateway restart** (salvage #20888) ([#21192](https://github.com/NousResearch/hermes-agent/pull/21192))
- **Preserve pending update prompts across restarts** ([#20160](https://github.com/NousResearch/hermes-agent/pull/20160))
- **Preserve home-channel thread targets across restart notifications** (salvage #18440) ([#19271](https://github.com/NousResearch/hermes-agent/pull/19271))
- **Preserve thread routing from cached live session sources** ([#21206](https://github.com/NousResearch/hermes-agent/pull/21206))
- **Preserve assistant metadata when branching sessions** ([#18222](https://github.com/NousResearch/hermes-agent/pull/18222))
- **Preserve thread routing for /update progress and prompts** ([#18193](https://github.com/NousResearch/hermes-agent/pull/18193))
- **Preserve document type when merging queued events** ([#18215](https://github.com/NousResearch/hermes-agent/pull/18215))

---

## 🛡️ Security & Reliability

### Security hardening (8 P0 closures)
- **Enable secret redaction by default** (#17691, #20785) ([#21193](https://github.com/NousResearch/hermes-agent/pull/21193))
- **Discord — scope `DISCORD_ALLOWED_ROLES` to originating guild** (#12136, CVSS 8.1) ([#21241](https://github.com/NousResearch/hermes-agent/pull/21241))
- **WhatsApp — reject strangers by default, never respond in self-chat** (#8389) ([#21291](https://github.com/NousResearch/hermes-agent/pull/21291))
- **MCP OAuth — close TOCTOU window when saving credentials** ([#21176](https://github.com/NousResearch/hermes-agent/pull/21176))
- **`hermes_cli/auth.py` — close TOCTOU window in credential writers** ([#21194](https://github.com/NousResearch/hermes-agent/pull/21194))
- **Browser — enforce cloud-metadata SSRF floor in hybrid routing** (#16234) ([#21228](https://github.com/NousResearch/hermes-agent/pull/21228))
- **`hermes debug share` — redact log content at upload time** (@GodsBoy) ([#19318](https://github.com/NousResearch/hermes-agent/pull/19318))
- **Cron — scan assembled prompt including skill content for prompt injection** (#3968) ([#21350](https://github.com/NousResearch/hermes-agent/pull/21350))
- **Restore .env/auth.json/state.db with 0600 perms** ([#19699](https://github.com/NousResearch/hermes-agent/pull/19699))
- **SRI integrity for dashboard plugin scripts** (salvage #19389) ([#21277](https://github.com/NousResearch/hermes-agent/pull/21277))
- **Bind Meet node server to localhost, restrict token file to owner read** ([#19597](https://github.com/NousResearch/hermes-agent/pull/19597))
- **Extend sensitive-write target to cover shell RC and credential files** ([#19282](https://github.com/NousResearch/hermes-agent/pull/19282))
- **Harden YOLO mode env parsing against quoted-bool strings** ([#18214](https://github.com/NousResearch/hermes-agent/pull/18214))
- **OSV-Scanner CI + Dependabot for github-actions only** ([#20037](https://github.com/NousResearch/hermes-agent/pull/20037))

### Reliability — critical bug closures
- **CLI crash on startup — `Invalid key 'c-S-c'`** (P0, prompt_toolkit doesn't support Shift modifier) ([#19895](https://github.com/NousResearch/hermes-agent/pull/19895), [#19919](https://github.com/NousResearch/hermes-agent/pull/19919))
- **CLOSE_WAIT fd leak audit** — httpx keepalive + WhatsApp aiohttp leak + Feishu hygiene (#18451) ([#18766](https://github.com/NousResearch/hermes-agent/pull/18766))
- **Gateway creates AIAgent with empty OpenRouter API key when OPENROUTER_API_KEY is missing** (#20982) — fallback providers correctly honored
- **Background review + curator protected from overwriting bundled/hub skills** (#20273) ([#20194](https://github.com/NousResearch/hermes-agent/pull/20194))
- **TUI compression continuation — ghost sessions with incomplete metadata** (#20001)
- **`hermes mcp add` silently launches chat instead of registering MCP server** (#19785) ([#21204](https://github.com/NousResearch/hermes-agent/pull/21204))
- **Background review agent runtime propagation** — provider/model/credentials now actually inherit from parent
- **Inbound document host paths translated to container paths for Docker backend** (salvage #19048) ([#21184](https://github.com/NousResearch/hermes-agent/pull/21184))
- **Matrix gateway race between auto-redaction and message delivery with high-speed models** (#19075)
- **`/new` during active agent session never sends response on Telegram** (#18912)

---

## 📱 Messaging Platforms (Gateway)

### New platform
- **Google Chat — 20th platform** + generic `env_enablement_fn` / `cron_deliver_env_var` platform-plugin hooks (IRC + Teams migrated) ([#21306](https://github.com/NousResearch/hermes-agent/pull/21306), [#21331](https://github.com/NousResearch/hermes-agent/pull/21331))

### Cross-platform
- **`allowed_{channels,chats,rooms}` whitelist** — Slack (salvage #7401), Telegram, Mattermost, Matrix, DingTalk ([#21251](https://github.com/NousResearch/hermes-agent/pull/21251))
- **Per-platform `gateway_restart_notification` flag** ([#20892](https://github.com/NousResearch/hermes-agent/pull/20892))
- **`busy_ack_enabled` config — suppress ack messages** ([#18194](https://github.com/NousResearch/hermes-agent/pull/18194))
- **Auto-delete slash-command system notices after TTL** ([#18266](https://github.com/NousResearch/hermes-agent/pull/18266))
- **Opt-in cleanup of temporary progress bubbles** ([#21186](https://github.com/NousResearch/hermes-agent/pull/21186))
- **`[[as_document]]` directive — skill media routing** (salvage #19069) ([#21210](https://github.com/NousResearch/hermes-agent/pull/21210))
- **`hermes gateway list` — cross-profile status** (salvage #19129) ([#21225](https://github.com/NousResearch/hermes-agent/pull/21225))
- **Auto-resume interrupted sessions after restart** (salvage #20888) ([#21192](https://github.com/NousResearch/hermes-agent/pull/21192))
- **Atomic restart markers + Windows runtime-lock offset** (#17842) ([#18179](https://github.com/NousResearch/hermes-agent/pull/18179))
- Fix: `config.yaml` wins over `.env` for agent/display/timezone settings ([#18764](https://github.com/NousResearch/hermes-agent/pull/18764))
- Fix: auto-restart when source files change out from under us (#17648) ([#18409](https://github.com/NousResearch/hermes-agent/pull/18409))
- Fix: use git HEAD SHA for stale-code check, not file mtimes ([#19740](https://github.com/NousResearch/hermes-agent/pull/19740))
- Fix: shutdown + restart hygiene — drain timeout, false-fatal, success log ([#18761](https://github.com/NousResearch/hermes-agent/pull/18761))
- Fix: preserve max_turns after env reload (salvage #19183) ([#21240](https://github.com/NousResearch/hermes-agent/pull/21240))
- Fix: exclude ancestor PIDs from gateway process scan ([#19586](https://github.com/NousResearch/hermes-agent/pull/19586))
- Fix: move quick-command alias dispatch before built-ins ([#19588](https://github.com/NousResearch/hermes-agent/pull/19588))
- Fix: show other profiles in 'gateway status' to prevent confusion ([#19582](https://github.com/NousResearch/hermes-agent/pull/19582))
- Fix: include external_dirs skills in Telegram/Discord slash commands (salvage #8790) ([#18741](https://github.com/NousResearch/hermes-agent/pull/18741))
- Fix: match disabled/optional skills by frontmatter slug, not dir name ([#18753](https://github.com/NousResearch/hermes-agent/pull/18753))
- Fix: read /status token totals from SessionDB (#17158) ([#18206](https://github.com/NousResearch/hermes-agent/pull/18206))
- Fix: snapshot callback generation after agent binds it, not before ([#18219](https://github.com/NousResearch/hermes-agent/pull/18219))
- Fix: re-inject topic-bound skill after /new or /reset ([#18205](https://github.com/NousResearch/hermes-agent/pull/18205))
- Fix: isolate pending native image paths by session ([#18202](https://github.com/NousResearch/hermes-agent/pull/18202))
- Fix: clear queued reload skills notes on new/resume/branch ([#19431](https://github.com/NousResearch/hermes-agent/pull/19431))
- Fix: hide required-arg commands from Telegram menu ([#19400](https://github.com/NousResearch/hermes-agent/pull/19400))
- Fix: bridge top-level `require_mention` to Telegram config ([#19429](https://github.com/NousResearch/hermes-agent/pull/19429))
- Fix: suppress duplicate voice transcripts ([#19428](https://github.com/NousResearch/hermes-agent/pull/19428))
- Fix: show friendly error when service is not installed ([#19707](https://github.com/NousResearch/hermes-agent/pull/19707))
- Fix: read context_length from custom_providers in session info header ([#19708](https://github.com/NousResearch/hermes-agent/pull/19708))
- Fix: preserve WSL interop PATH in systemd units ([#19867](https://github.com/NousResearch/hermes-agent/pull/19867))
- Fix: handle planned service stops (salvage #19876) ([#19936](https://github.com/NousResearch/hermes-agent/pull/19936))
- Fix: keep DoH-confirmed Telegram IPs that match system DNS (salvage #17043) ([#20175](https://github.com/NousResearch/hermes-agent/pull/20175))
- Fix: load `reply_to_mode` from config.yaml for Discord + Telegram (salvage #17117) ([#20171](https://github.com/NousResearch/hermes-agent/pull/20171))
- Fix: tolerate malformed HERMES_HUMAN_DELAY_* env vars (salvage #16933) ([#20217](https://github.com/NousResearch/hermes-agent/pull/20217))
- Fix: deterministic thread eviction preserves newest entries (salvage #13639) ([#20285](https://github.com/NousResearch/hermes-agent/pull/20285))
- Fix: don't dead-end setup wizard when only system-scope unit is installed ([#20905](https://github.com/NousResearch/hermes-agent/pull/20905))
- Fix: wait for systemd restart readiness + harden Discord slash-command sync ([#20949](https://github.com/NousResearch/hermes-agent/pull/20949))
- Fix: avoid duplicated Responses history (salvage #18995) ([#21185](https://github.com/NousResearch/hermes-agent/pull/21185))
- Fix: surface bootstrap failures to stderr (salvage #21157) ([#21278](https://github.com/NousResearch/hermes-agent/pull/21278))
- Fix: log agent task failures instead of silently losing usage data (salvage #21159) ([#21274](https://github.com/NousResearch/hermes-agent/pull/21274))
- Fix: log runtime-status write failures with rate-limiting (salvage #21158) ([#21285](https://github.com/NousResearch/hermes-agent/pull/21285))
- Fix: reset-failed before every fallback restart so the gateway can't get stranded ([#21371](https://github.com/NousResearch/hermes-agent/pull/21371))
- Fix: Telegram — preserve `thread_id=1` for forum General typing indicator ([#21390](https://github.com/NousResearch/hermes-agent/pull/21390))
- Fix: batch critical fixes — session resume, /new race, HA WebSocket scheme (@kshitijk4poor) ([#19182](https://github.com/NousResearch/hermes-agent/pull/19182))

### Telegram
- **DM user-managed multi-session topics** (salvage of #19185) ([#19206](https://github.com/NousResearch/hermes-agent/pull/19206))

### Discord
- **Message deletion action** (salvage #19052) ([#21197](https://github.com/NousResearch/hermes-agent/pull/21197))
- Fix: allow `free_response_channels` to override `DISCORD_IGNORE_NO_MENTION` ([#19629](https://github.com/NousResearch/hermes-agent/pull/19629))

### Slack
- Fix: ephemeral slash-command ack, private notice delivery, format_message fixes (@kshitijk4poor) ([#18198](https://github.com/NousResearch/hermes-agent/pull/18198))

### WhatsApp
- Fix: load WhatsApp home channel from env overrides ([#18190](https://github.com/NousResearch/hermes-agent/pull/18190))

### Feishu
- **Operator-configurable bot admission and mention policy** ([#18208](https://github.com/NousResearch/hermes-agent/pull/18208))
- Fix: force text mode for markdown tables (salvage of #13723 by @WuTianyi123) ([#20275](https://github.com/NousResearch/hermes-agent/pull/20275))

### Matrix + Email
- Fix: `/sethome` on Matrix and Email now persists across restarts ([#18272](https://github.com/NousResearch/hermes-agent/pull/18272))

### Teams
- **Docs + feat: sidebar + threading with group-chat fallback** ([#20042](https://github.com/NousResearch/hermes-agent/pull/20042))

### Weixin
- Fix: deduplicate Weixin messages by content fingerprint ([#19742](https://github.com/NousResearch/hermes-agent/pull/19742))

### QQBot
- **Port SDK improvements in-tree — chunked upload, approval keyboards, quoted attachments** ([#21342](https://github.com/NousResearch/hermes-agent/pull/21342))
- **Wire native tool-approval UX via inline keyboards** ([#21353](https://github.com/NousResearch/hermes-agent/pull/21353))

---

## 🏗️ Core Agent & Architecture

### Provider & Model Support

#### Pluggable providers
- **ProviderProfile ABC + `plugins/model-providers/`** — inference providers are now a pluggable surface (salvage of #14424) ([#20324](https://github.com/NousResearch/hermes-agent/pull/20324))
- **`list_picker_providers`** — credential-filtered picker (salvage #13561) ([#20298](https://github.com/NousResearch/hermes-agent/pull/20298))
- **Remove `/provider` alias for `/model`** ([#20358](https://github.com/NousResearch/hermes-agent/pull/20358))
- **Shared Hermes dotenv loader across CLI + plugins** (salvage #13660) ([#20281](https://github.com/NousResearch/hermes-agent/pull/20281))
- **Nous OAuth persisted across profiles via shared token store** ([#19712](https://github.com/NousResearch/hermes-agent/pull/19712))

#### New models
- `deepseek/deepseek-v4-pro` added to OpenRouter + Nous Portal ([#20495](https://github.com/NousResearch/hermes-agent/pull/20495))
- `x-ai/grok-4.3` added to OpenRouter + Nous Portal ([#20497](https://github.com/NousResearch/hermes-agent/pull/20497))
- `openrouter/owl-alpha` (free tier) added to curated OpenRouter list ([#18071](https://github.com/NousResearch/hermes-agent/pull/18071))
- `tencent/hy3-preview` paid route on OpenRouter (@Contentment003111) ([#21077](https://github.com/NousResearch/hermes-agent/pull/21077))
- Arcee Trinity Large Thinking — temperature + compression overrides ([#20473](https://github.com/NousResearch/hermes-agent/pull/20473))
- Rename `x-ai/grok-4.20-beta` to `x-ai/grok-4.20` ([#19640](https://github.com/NousResearch/hermes-agent/pull/19640))
- Demote Vercel AI Gateway to bottom of provider picker ([#18112](https://github.com/NousResearch/hermes-agent/pull/18112))

#### Provider configuration
- **OpenRouter — response caching support** (@kshitijk4poor) ([#19132](https://github.com/NousResearch/hermes-agent/pull/19132))
- **`image_gen.model` from config.yaml honored** (salvage #19376) ([#21273](https://github.com/NousResearch/hermes-agent/pull/21273))
- Fix: honor runtime default model during delegate provider resolution (@johnncenae) ([#17587](https://github.com/NousResearch/hermes-agent/pull/17587))
- Fix: avoid Bedrock credential probe in provider picker (@helix4u) ([#18998](https://github.com/NousResearch/hermes-agent/pull/18998))
- Fix: drop stale env-var override of persisted provider for cron ([#19627](https://github.com/NousResearch/hermes-agent/pull/19627))
- Fix: auxiliary curator api_key/base_url into runtime resolution ([#19421](https://github.com/NousResearch/hermes-agent/pull/19421))

### Agent Loop & Conversation
- **`video_analyze` — native video understanding tool** (@alt-glitch) ([#19301](https://github.com/NousResearch/hermes-agent/pull/19301))
- **Show context compression count in status bar** (CLI + TUI) ([#21218](https://github.com/NousResearch/hermes-agent/pull/21218))
- **Isolate `get_tool_definitions` quiet_mode cache + dedup LCM injection** (#17335) ([#17889](https://github.com/NousResearch/hermes-agent/pull/17889))
- Fix: warning-first tool-call loop guardrails ([#18227](https://github.com/NousResearch/hermes-agent/pull/18227))
- Fix: break permanent empty-response loop from orphan tool-tail ([#21385](https://github.com/NousResearch/hermes-agent/pull/21385))
- Fix: propagate ContextVars to concurrent tool worker threads (salvage #16660) ([#18123](https://github.com/NousResearch/hermes-agent/pull/18123))
- Fix: surface self-improvement review summaries across CLI, TUI, and gateway ([#18073](https://github.com/NousResearch/hermes-agent/pull/18073))
- Fix: serialize concurrent `hermes_tools` RPC calls from `execute_code` ([#17894](https://github.com/NousResearch/hermes-agent/pull/17894), [#17902](https://github.com/NousResearch/hermes-agent/pull/17902))
- Fix: include system prompt + tool schemas in token estimates for compression ([#18265](https://github.com/NousResearch/hermes-agent/pull/18265))

### Compression
- Fix: skip non-string tool content in dedup pass to prevent AttributeError ([#19398](https://github.com/NousResearch/hermes-agent/pull/19398))
- Fix: reset `_summary_failure_cooldown_until` on session reset ([#19622](https://github.com/NousResearch/hermes-agent/pull/19622))
- Fix: trigger fallback on timeout errors alongside model-unavailable errors ([#19665](https://github.com/NousResearch/hermes-agent/pull/19665))
- Fix: `_prune_old_tool_results` boundary direction ([#19725](https://github.com/NousResearch/hermes-agent/pull/19725))
- Fix: soften summary prompt for content filters (salvage #19456) ([#21302](https://github.com/NousResearch/hermes-agent/pull/21302))

### Delegate
- Fix: inherit parent fallback_chain in `_build_child_agent` ([#19601](https://github.com/NousResearch/hermes-agent/pull/19601))
- Fix: guard `_load_config()` against `delegation: null` in config.yaml ([#19662](https://github.com/NousResearch/hermes-agent/pull/19662))
- Fix: inherit parent api_key when `delegation.base_url` set without `delegation.api_key` ([#19741](https://github.com/NousResearch/hermes-agent/pull/19741))
- Fix: expand composite toolsets before intersection (salvage #19455) ([#21300](https://github.com/NousResearch/hermes-agent/pull/21300))
- Fix: correct ACP docs — Claude Code CLI has no --acp flag (salvage #19058) ([#21201](https://github.com/NousResearch/hermes-agent/pull/21201))

### Session & Memory
- **Hindsight — probe API for `update_mode='append'` to dedupe across processes** (@nicoloboschi) ([#20222](https://github.com/NousResearch/hermes-agent/pull/20222))

### Curator
- **`hermes curator archive` and `prune` subcommands** ([#20200](https://github.com/NousResearch/hermes-agent/pull/20200))
- **`hermes curator list-archived`** (#20651) ([#21236](https://github.com/NousResearch/hermes-agent/pull/21236))
- **Synchronous manual `hermes curator run`** (#20555) ([#21216](https://github.com/NousResearch/hermes-agent/pull/21216))
- Fix: preserve `last_report_path` in state ([#18169](https://github.com/NousResearch/hermes-agent/pull/18169))
- Fix: rewrite cron job skill refs after consolidation ([#18253](https://github.com/NousResearch/hermes-agent/pull/18253))
- Fix: defer first run + `--dry-run` preview (#18373) ([#18389](https://github.com/NousResearch/hermes-agent/pull/18389))
- Fix: authoritative `absorbed_into` on delete + restore cron skill links on rollback (#18671) ([#18731](https://github.com/NousResearch/hermes-agent/pull/18731))
- Fix: prevent false-positive consolidation from substring matching ([#19573](https://github.com/NousResearch/hermes-agent/pull/19573))
- Fix: only mark agent-created for background-review sediment ([#19621](https://github.com/NousResearch/hermes-agent/pull/19621))
- Fix: protect hub skills by frontmatter name ([#20194](https://github.com/NousResearch/hermes-agent/pull/20194))

---

## 🔧 Tool System

### File tools
- **Post-write delta lint on `write_file` + `patch`** — in-proc linters for Python, JSON, YAML, TOML ([#20191](https://github.com/NousResearch/hermes-agent/pull/20191))

### Cron
- **`no_agent` mode — script-only cron jobs (watchdog pattern)** ([#19709](https://github.com/NousResearch/hermes-agent/pull/19709))
- **`context_from` chaining docs** (salvage #15724) ([#20394](https://github.com/NousResearch/hermes-agent/pull/20394))
- Fix: treat non-dict origin as missing instead of crashing tick ([#19283](https://github.com/NousResearch/hermes-agent/pull/19283))
- Fix: bump skill usage when cron jobs load skills ([#19433](https://github.com/NousResearch/hermes-agent/pull/19433))
- Fix: recover null `next_run_at` jobs ([#19576](https://github.com/NousResearch/hermes-agent/pull/19576))
- Fix: skip AI call when prerun script produces no output ([#19628](https://github.com/NousResearch/hermes-agent/pull/19628))
- Fix: expand config.yaml refs during job execution ([#19872](https://github.com/NousResearch/hermes-agent/pull/19872))
- Fix: serialize `get_due_jobs` writes to prevent parallel state corruption ([#19874](https://github.com/NousResearch/hermes-agent/pull/19874))
- Fix: initialize MCP servers before constructing the cron AIAgent ([#21354](https://github.com/NousResearch/hermes-agent/pull/21354))

### MCP
- **SSE transport support** (salvage #19135) ([#21227](https://github.com/NousResearch/hermes-agent/pull/21227))
- **Forward OAuth auth + bump `sse_read_timeout` on SSE transport** ([#21323](https://github.com/NousResearch/hermes-agent/pull/21323))
- **Retry stale pipe transport failures as session-expired** ([#21289](https://github.com/NousResearch/hermes-agent/pull/21289))
- **Surface image tool results as MEDIA tags instead of dropping them** ([#21328](https://github.com/NousResearch/hermes-agent/pull/21328))
- **Periodic keepalive to `_wait_for_lifecycle_event`** (salvage #17016) ([#20209](https://github.com/NousResearch/hermes-agent/pull/20209))
- Fix: reconnect on terminated sessions ([#19380](https://github.com/NousResearch/hermes-agent/pull/19380))
- Fix: decouple AnyUrl import from mcp dependency ([#19695](https://github.com/NousResearch/hermes-agent/pull/19695))
- Fix: `mcp add --command` gets distinct argparse dest ([#21204](https://github.com/NousResearch/hermes-agent/pull/21204))
- Fix: clear stale thread interrupt before MCP discovery ([#21276](https://github.com/NousResearch/hermes-agent/pull/21276))
- Fix: report configured timeout in MCP call errors ([#21281](https://github.com/NousResearch/hermes-agent/pull/21281))
- Fix: include exception type in error messages when str(exc) is empty (salvage #19425) ([#21292](https://github.com/NousResearch/hermes-agent/pull/21292))
- Fix: re-raise CancelledError explicitly in `MCPServerTask.run` ([#21318](https://github.com/NousResearch/hermes-agent/pull/21318))
- Fix: coerce numeric tool args defensively in `mcp_serve` ([#21329](https://github.com/NousResearch/hermes-agent/pull/21329))
- Fix: gate utility stubs on server-advertised capabilities ([#21347](https://github.com/NousResearch/hermes-agent/pull/21347))

### Browser
- Fix: allow explicit CDP override without local agent-browser ([#19670](https://github.com/NousResearch/hermes-agent/pull/19670))
- Fix: inject `--no-sandbox` for root + AppArmor userns restrictions ([#19747](https://github.com/NousResearch/hermes-agent/pull/19747))
- Fix: tighten Lightpanda fallback edge cases (@kshitijk4poor) ([#20672](https://github.com/NousResearch/hermes-agent/pull/20672))

### Web tools
- **Per-capability backend selection — search/extract split** (@kshitijk4poor) ([#20061](https://github.com/NousResearch/hermes-agent/pull/20061))
- **SearXNG native search-only backend** (@kshitijk4poor) ([#20823](https://github.com/NousResearch/hermes-agent/pull/20823))

### Approval / Tool gating
- Fix: wake blocked gateway approvals on session cleanup ([#18171](https://github.com/NousResearch/hermes-agent/pull/18171))
- Fix: harden YOLO mode env parsing against quoted-bool strings ([#18214](https://github.com/NousResearch/hermes-agent/pull/18214))
- Fix: extend sensitive write target to cover shell RC and credential files ([#19282](https://github.com/NousResearch/hermes-agent/pull/19282))

---

## 🔌 Plugin System

- **`transform_llm_output` plugin hook** (salvage of #20813) ([#21235](https://github.com/NousResearch/hermes-agent/pull/21235))
- **Document `env_enablement_fn` + `cron_deliver_env_var` platform-plugin hooks** ([#21331](https://github.com/NousResearch/hermes-agent/pull/21331))
- **Pluggable surfaces coverage — model-provider guide, full plugin map, opt-in fix** ([#20749](https://github.com/NousResearch/hermes-agent/pull/20749))
- **Plugin-authoring gaps — image-gen provider guide + publishing a skill tap** ([#20800](https://github.com/NousResearch/hermes-agent/pull/20800))

---

## 🧩 Skills Ecosystem

### New optional skills
- **Shopify** — Admin + Storefront GraphQL optional skill ([#18116](https://github.com/NousResearch/hermes-agent/pull/18116))
- **here.now** — optional skill ([#18170](https://github.com/NousResearch/hermes-agent/pull/18170))
- **shop-app** — personal shopping assistant (optional) ([#20702](https://github.com/NousResearch/hermes-agent/pull/20702))
- **Anthropic financial-services bundle** — ported as optional finance skills ([#21180](https://github.com/NousResearch/hermes-agent/pull/21180))
- **kanban-video-orchestrator** — creative optional skill (@SHL0MS) ([#19281](https://github.com/NousResearch/hermes-agent/pull/19281))
- **searxng-search** — optional skill + Web Search + Extract docs page (@kshitijk4poor) ([#20841](https://github.com/NousResearch/hermes-agent/pull/20841), [#20844](https://github.com/NousResearch/hermes-agent/pull/20844))

### Skill UX
- **Linear skill — add Documents support + Python helper script** ([#20752](https://github.com/NousResearch/hermes-agent/pull/20752))
- **Modernize Obsidian skill to use file tools** (salvage #19332) ([#20413](https://github.com/NousResearch/hermes-agent/pull/20413))
- **Default custom tool creation to plugins** (@kshitijk4poor) ([#19755](https://github.com/NousResearch/hermes-agent/pull/19755))
- **skill_commands cache — rescan on platform scope changes** (salvage #14570 by @LeonSGP43) ([#18739](https://github.com/NousResearch/hermes-agent/pull/18739))
- **Skills — additional rescan paths in skill_commands cache** (salvage #19042) ([#21181](https://github.com/NousResearch/hermes-agent/pull/21181))
- Fix: regression tests for non-dict metadata in `extract_skill_conditions` ([#18213](https://github.com/NousResearch/hermes-agent/pull/18213))
- Docs: explain restoring bundled skills (salvage #19254) ([#20404](https://github.com/NousResearch/hermes-agent/pull/20404))
- Docs: document `hermes skills reset` subcommand (salvage #11544) ([#20395](https://github.com/NousResearch/hermes-agent/pull/20395))
- Docs: himalaya v1.2.0 `folder.aliases` syntax ([#19882](https://github.com/NousResearch/hermes-agent/pull/19882))
- Point agent at `hermes-agent` skill + docs site sync ([#20390](https://github.com/NousResearch/hermes-agent/pull/20390))

---

## 🖥️ CLI & User Experience

### CLI
- **`/new` accepts optional session name argument** (salvage of #19555) ([#19637](https://github.com/NousResearch/hermes-agent/pull/19637))
- **100 new CLI startup tips** ([#20168](https://github.com/NousResearch/hermes-agent/pull/20168))
- **`display.language` — static message translation** (zh/ja/de/es) ([#20231](https://github.com/NousResearch/hermes-agent/pull/20231))
- **French (fr) locale** (@Foolafroos) ([#20329](https://github.com/NousResearch/hermes-agent/pull/20329))
- **Ukrainian (uk) locale** ([#20467](https://github.com/NousResearch/hermes-agent/pull/20467))
- **Turkish (tr) locale** ([#20474](https://github.com/NousResearch/hermes-agent/pull/20474))
- Fix: recover classic CLI output after resize (@helix4u) ([#20444](https://github.com/NousResearch/hermes-agent/pull/20444))
- Fix: complete absolute paths as paths (@helix4u) ([#19930](https://github.com/NousResearch/hermes-agent/pull/19930))
- Fix: resolve lazy session creation regressions (#18370 fallout) (@alt-glitch) ([#20363](https://github.com/NousResearch/hermes-agent/pull/20363))
- Fix: local backend CLI always uses launch directory (@alt-glitch) ([#19334](https://github.com/NousResearch/hermes-agent/pull/19334))
- Refactor: drop dead c-S-c key binding (follow-up to #19895) ([#19919](https://github.com/NousResearch/hermes-agent/pull/19919))

### TUI (Ink)
- **`/model` picker overhaul to match `hermes model` with inline auth** (@austinpickett) ([#18117](https://github.com/NousResearch/hermes-agent/pull/18117))
- **Collapsible sections in startup banner** — skills, system prompt, MCP (@kshitijk4poor) ([#20625](https://github.com/NousResearch/hermes-agent/pull/20625))
- **Show context compression count in status bar** ([#21218](https://github.com/NousResearch/hermes-agent/pull/21218))
- Perf: reduce overlay render churn with focused selectors (@OutThisLife) ([#20393](https://github.com/NousResearch/hermes-agent/pull/20393))
- Fix: restore voice push-to-talk parity (salvage of #16189 by @Montbra) (@OutThisLife) ([#20897](https://github.com/NousResearch/hermes-agent/pull/20897))
- Fix: kanban button (@austinpickett) ([#18358](https://github.com/NousResearch/hermes-agent/pull/18358))

### Dashboard
- **Plugins page — manage, enable/disable, auth status** (@austinpickett) ([#18095](https://github.com/NousResearch/hermes-agent/pull/18095))
- **Profiles management page** (@vincez-hms-coder) ([#16419](https://github.com/NousResearch/hermes-agent/pull/16419))
- **Interactive column sorting in analytics tables** ([#18192](https://github.com/NousResearch/hermes-agent/pull/18192))
- **`default-large` built-in theme with 18px base size** ([#20820](https://github.com/NousResearch/hermes-agent/pull/20820))
- **Support serving under URL prefix via `X-Forwarded-Prefix`** (salvage #19450) ([#21296](https://github.com/NousResearch/hermes-agent/pull/21296))
- **Launch dashboard as side-process via `HERMES_DASHBOARD=1` in Docker** (@benbarclay) ([#19540](https://github.com/NousResearch/hermes-agent/pull/19540))
- Fix: dashboard theme layout shift (@AllardQuek) ([#17232](https://github.com/NousResearch/hermes-agent/pull/17232))
- Fix: gateway model picker current context (@helix4u) ([#20513](https://github.com/NousResearch/hermes-agent/pull/20513))

### Update + setup
- **`hermes update --yes/-y` to skip interactive prompts** ([#18261](https://github.com/NousResearch/hermes-agent/pull/18261))
- **Restart manual profile gateways after update** ([#18178](https://github.com/NousResearch/hermes-agent/pull/18178))

### Profiles
- **`--no-skills` flag for empty profile creation** ([#20986](https://github.com/NousResearch/hermes-agent/pull/20986))

---

## 🎵 Voice, Image & Media

- **xAI Custom Voices — voice cloning** (@alt-glitch) ([#18776](https://github.com/NousResearch/hermes-agent/pull/18776))
- **Achievements — share card render on unlocked badges** ([#19657](https://github.com/NousResearch/hermes-agent/pull/19657))
- **Refresh systemd unit on gateway boot (not just start/restart)** (@alt-glitch) ([#19684](https://github.com/NousResearch/hermes-agent/pull/19684))

---

## 🔗 API Server & Remote Access

- **`X-Hermes-Session-Key` header for long-term memory scoping** (closes #20060) ([#20199](https://github.com/NousResearch/hermes-agent/pull/20199))

---

## 🧰 ACP Adapter (VS Code / Zed / JetBrains)

- **`/steer` and `/queue` slash commands** (@HenkDz) ([#18114](https://github.com/NousResearch/hermes-agent/pull/18114))
- Fix: translate Windows cwd for WSL sessions (salvage #18128) ([#18233](https://github.com/NousResearch/hermes-agent/pull/18233))
- Fix: run `/steer` as a regular prompt on idle sessions ([#18258](https://github.com/NousResearch/hermes-agent/pull/18258))
- Fix: route Zed thoughts to reasoning + polish tool/context rendering ([#19139](https://github.com/NousResearch/hermes-agent/pull/19139))
- Fix: atomic session persistence via `replace_messages` (salvage #13675) ([#20279](https://github.com/NousResearch/hermes-agent/pull/20279))
- Fix: preserve assistant reasoning metadata in session persistence (salvage #13575) ([#20296](https://github.com/NousResearch/hermes-agent/pull/20296))
- Docs: update VS Code setup for ACP Client extension (salvage #12495) ([#20433](https://github.com/NousResearch/hermes-agent/pull/20433))

---

## 🐳 Docker

- **Launch dashboard as side-process via `HERMES_DASHBOARD=1`** (@benbarclay) ([#19540](https://github.com/NousResearch/hermes-agent/pull/19540))
- **Refuse root gateway runs in official image** (salvage #19215) ([#21250](https://github.com/NousResearch/hermes-agent/pull/21250))
- **Chown runtime `node_modules` trees to hermes user** (salvage #19303) ([#21267](https://github.com/NousResearch/hermes-agent/pull/21267))
- Fix: exclude compose/profile runtime state from build context ([#19626](https://github.com/NousResearch/hermes-agent/pull/19626))
- CI: don't cancel overlapping builds, guard `:latest` (@ethernet8023) ([#20890](https://github.com/NousResearch/hermes-agent/pull/20890))
- Test: align Dockerfile contract tests with simplified TUI flow (salvage #19024) ([#21174](https://github.com/NousResearch/hermes-agent/pull/21174))
- Docs: connect to local inference servers (vLLM, Ollama) (salvage #12335) ([#20407](https://github.com/NousResearch/hermes-agent/pull/20407))
- Docs: document `API_SERVER_*` env vars (salvage #11758) ([#20409](https://github.com/NousResearch/hermes-agent/pull/20409))
- Docs: clarify Docker terminal backend is a single persistent container ([#20003](https://github.com/NousResearch/hermes-agent/pull/20003))

---

## 🐛 Notable Bug Fixes

### Agent
- Fix: recover lazy session creation regressions (#18370 fallout) (@alt-glitch) ([#20363](https://github.com/NousResearch/hermes-agent/pull/20363))
- Fix: propagate ContextVars to concurrent tool worker threads (salvage #16660) ([#18123](https://github.com/NousResearch/hermes-agent/pull/18123))
- Fix: warning-first tool-call loop guardrails ([#18227](https://github.com/NousResearch/hermes-agent/pull/18227))
- Fix: surface self-improvement review summaries across CLI, TUI, and gateway ([#18073](https://github.com/NousResearch/hermes-agent/pull/18073))

### Gateway streaming
- Fix: harden StreamingConfig bool and numeric coercion (@simbam99) ([#16463](https://github.com/NousResearch/hermes-agent/pull/16463))

### Model
- Fix: avoid Bedrock credential probe in provider picker (@helix4u) ([#18998](https://github.com/NousResearch/hermes-agent/pull/18998))

### Doctor
- Fix: check global agent-browser when local install not found ([#19671](https://github.com/NousResearch/hermes-agent/pull/19671))
- Test: kimi-coding-cn provider validation regression ([#19734](https://github.com/NousResearch/hermes-agent/pull/19734))

### Update
- Fix: patch `isatty` on real streams to fix xdist-flaky `--yes` tests (salvage #19026) ([#21175](https://github.com/NousResearch/hermes-agent/pull/21175))
- Fix: teach restart-mocks about the post-update survivor sweep (salvage #19031) ([#21177](https://github.com/NousResearch/hermes-agent/pull/21177))

### Auth
- Fix: acp preserve assistant reasoning metadata ([#20296](https://github.com/NousResearch/hermes-agent/pull/20296))

### Redact
- Fix: add `code_file` param to skip false-positive ENV/JSON patterns ([#19715](https://github.com/NousResearch/hermes-agent/pull/19715))

### Email
- Fix: quoted-relative file-drop paths + Date header on tool email path ([#19646](https://github.com/NousResearch/hermes-agent/pull/19646))

---

## 🧪 Testing

- **ACP — accept prompt persistence kwargs in MCP E2E mocks** (@stephenschoettler) ([#18047](https://github.com/NousResearch/hermes-agent/pull/18047))
- **Toolsets — include kanban in expected post-#17805 toolset assertions** (@briandevans) ([#18122](https://github.com/NousResearch/hermes-agent/pull/18122))
- **Agent — cover max-iterations summary message sanitization** ([#19580](https://github.com/NousResearch/hermes-agent/pull/19580))
- **run_agent — `-inf` and `nan` regression coverage for `_coerce_number`** ([#19703](https://github.com/NousResearch/hermes-agent/pull/19703))

---

## 📚 Documentation

### Major docs additions
- **`llms.txt` + `llms-full.txt` — agent-friendly ingestion** ([#18276](https://github.com/NousResearch/hermes-agent/pull/18276))
- **User Stories and Use Cases collage page** ([#18282](https://github.com/NousResearch/hermes-agent/pull/18282))
- **Persistent Goals (/goal) feature page** ([#18275](https://github.com/NousResearch/hermes-agent/pull/18275))
- **Windows (WSL2) guide expansion** — filesystem, networking, services, pitfalls ([#20748](https://github.com/NousResearch/hermes-agent/pull/20748))
- **Chinese (zh-CN) README translation** (salvage #13508) ([#20431](https://github.com/NousResearch/hermes-agent/pull/20431))
- **zh-Hans Docusaurus locale** + Tool Gateway / image-gen / WSL quickstart translations (salvage #11728) ([#20430](https://github.com/NousResearch/hermes-agent/pull/20430))
- **Tool Gateway docs restructure** — lead with what it does, config moved to bottom ([#20827](https://github.com/NousResearch/hermes-agent/pull/20827))
- **Quickstart — Onchain AI Garage Hermes tutorials playlist** ([#20192](https://github.com/NousResearch/hermes-agent/pull/20192))
- **Open WebUI bootstrap script** (salvage #9566) ([#20427](https://github.com/NousResearch/hermes-agent/pull/20427))
- **Local Ollama setup guide** (salvage #5842) ([#20426](https://github.com/NousResearch/hermes-agent/pull/20426))
- **Google Gemini guide** (salvage #17450) ([#20401](https://github.com/NousResearch/hermes-agent/pull/20401))
- **Custom model aliases for /model command** ([#20475](https://github.com/NousResearch/hermes-agent/pull/20475))
- **Together/Groq/Perplexity cookbook via `custom_providers`** (salvage #15214) ([#20400](https://github.com/NousResearch/hermes-agent/pull/20400))
- **Doubao speech integration examples** (TTS + STT) (salvage #18065) ([#20418](https://github.com/NousResearch/hermes-agent/pull/20418))
- **WSL-to-Windows Chrome MCP bridge** (salvage #8313) ([#20428](https://github.com/NousResearch/hermes-agent/pull/20428))
- **Hermes skills docs sync** — slash commands + durable-systems section ([#20390](https://github.com/NousResearch/hermes-agent/pull/20390))
- **AGENTS.md — curator/cron/delegation/toolsets + fix plugin tree** ([#20226](https://github.com/NousResearch/hermes-agent/pull/20226))
- **Bedrock quickstart entry + fallback comment + deployment link** (salvage #11093) ([#20397](https://github.com/NousResearch/hermes-agent/pull/20397))

### Docs polish
- Collapse exploding skills tree to a single Skills node ([#18259](https://github.com/NousResearch/hermes-agent/pull/18259))
- Clarify `session_search` auxiliary model docs ([#19593](https://github.com/NousResearch/hermes-agent/pull/19593))
- Open WebUI Quick Setup gap fill ([#19654](https://github.com/NousResearch/hermes-agent/pull/19654))
- Default custom tool creation to plugins (@kshitijk4poor) ([#19755](https://github.com/NousResearch/hermes-agent/pull/19755))
- Clarify Telegram group chat troubleshooting (salvage #18672) ([#20416](https://github.com/NousResearch/hermes-agent/pull/20416))
- Codex OAuth auth prerequisite clarification (salvage #18688) ([#20417](https://github.com/NousResearch/hermes-agent/pull/20417))
- Discord Server Members Intent + SSRC-mapping drift + /voice join slash Choice (salvage #11350) ([#20411](https://github.com/NousResearch/hermes-agent/pull/20411))
- Document `ctx.dispatch_tool()` (salvage #10955) ([#20391](https://github.com/NousResearch/hermes-agent/pull/20391))
- Document `hermes webhook subscribe --deliver-only` (salvage #12612) ([#20392](https://github.com/NousResearch/hermes-agent/pull/20392))
- Document `hermes import` reference (salvage #14711) ([#20396](https://github.com/NousResearch/hermes-agent/pull/20396))
- Document per-provider TTS `max_text_length` caps (salvage #13825) ([#20389](https://github.com/NousResearch/hermes-agent/pull/20389))
- Clarify supported prompt customization surfaces (salvage #19987) ([#20383](https://github.com/NousResearch/hermes-agent/pull/20383))
- Correct `web_extract` summarizer timeout comment (salvage #20051) ([#20381](https://github.com/NousResearch/hermes-agent/pull/20381))
- Fix fallback provider config paths (salvage #20033) ([#20382](https://github.com/NousResearch/hermes-agent/pull/20382))
- Fix misleading RL install-extras claim (salvage #19080) ([#21213](https://github.com/NousResearch/hermes-agent/pull/21213))
- Clarify API server tool execution locality (salvage #19117) ([#21223](https://github.com/NousResearch/hermes-agent/pull/21223))
- Prefer `.venv` to match AGENTS.md and scripts/run_tests.sh (@xxxigm) ([#21334](https://github.com/NousResearch/hermes-agent/pull/21334))
- Align tool discovery + test runner with AGENTS.md (@xxxigm) ([#20791](https://github.com/NousResearch/hermes-agent/pull/20791))
- Align terminal-backend count and naming across docs and code (salvage #19044) ([#20402](https://github.com/NousResearch/hermes-agent/pull/20402))
- Refresh stale platform counts (salvage #19053) ([#20403](https://github.com/NousResearch/hermes-agent/pull/20403))

---

## 👥 Contributors

### Core
- **@teknium1** — salvage, triage, review, feature work, and release management

### Top Community Contributors

- **@kshitijk4poor** (21 PRs) — SearXNG native search backend, per-capability backend selection, collapsible TUI startup banner, Slack ephemeral ack + format fixes, Lightpanda fallback hardening, searxng-search optional skill + Web Search + Extract docs, default custom tool creation to plugins, kanban failure-column fix
- **@alt-glitch** (13 PRs) — video_analyze tool, xAI Custom Voices (voice cloning), local-backend CLI launch-directory fix, lazy-session creation regression recovery, systemd unit refresh on gateway boot
- **@OutThisLife** (9 PRs) — TUI perf — overlay render churn reduction, voice push-to-talk parity restoration (salvaging @Montbra)
- **@helix4u** (6 PRs) — Classic CLI output recovery after resize, absolute-path TUI completion, gateway model picker current-context fix, Bedrock credential probe avoidance, kanban docs fixes
- **@ethernet8023** (3 PRs) — Docker CI — don't cancel overlapping builds, :latest guard
- **@benbarclay** (3 PRs) — Docker — launch dashboard as side-process via HERMES_DASHBOARD=1
- **@austinpickett** (3 PRs) — Dashboard Plugins page, TUI /model picker overhaul with inline auth, kanban button fix
- **@sprmn24** (2 PRs) — Contributor (2 PRs)
- **@asheriif** (2 PRs) — Contributor (2 PRs)
- **@xxxigm** (2 PRs) — Contributing docs — .venv preference and test runner alignment with AGENTS.md
- **@stephenschoettler** (1 PR) — ACP — MCP E2E mock kwargs
- **@vincez-hms-coder** (1 PR) — Dashboard — Profiles management page
- **@cdanis** (1 PR) — Contributor
- **@briandevans** (1 PR) — Toolsets test — kanban assertions post-#17805
- **@heyitsaamir** (1 PR) — Contributor

### All Contributors

Thanks to everyone who contributed to v0.13.0 — commits, co-authored work, and salvaged PRs. 295 contributors in one week.

@0oAstro, @0xDevNinja, @0xharryriddle, @0xKingBack, @0xsir0000, @0xyg3n, @0z1-ghb, @abhinav11082001-stack,
@acc001k, @acesjohnny, @adamludwin, @adybag14-cyber, @agentlinker, @agilejava, @ai-ag2026, @AJV20,
@alanxchen85, @albert748, @AllardQuek, @alt-glitch, @altmazza0-star, @ambition0802, @amitgaur, @amroessam,
@andrewhosf, @Asce66, @asheriif, @ashermorse, @asimons81, @Aslaaen, @Asunfly, @atongrun, @austinpickett,
@banditburai, @barteqpl, @Bartok9, @Beandon13, @beardthelion, @beibi9966, @benbarclay, @binhnt92, @bjianhang,
@BlackJulySnow, @bobashopcashier, @bogerman1, @Bongulielmi, @Brecht-H, @briandevans, @brooklynnicholson,
@c3115644151, @camaragon, @CashWilliams, @CCClelo, @cdanis, @CES4751, @cg2aigc, @changchun989, @ChanlerDev,
@CharlieKerfoot, @chengoak, @chenyunbo411, @chinadbo, @CIRWEL, @cixuuz, @cmcgrabby-hue, @colorcross,
@Contentment003111, @CoreyNoDream, @counterposition, @curiouscleo, @DaniuXie, @deep-name, @dengtaoyuan450-a11y,
@discodirector, @donramon77, @dpaluy, @ee-blog, @ehz0ah, @el-analista, @elmatadorgh, @EmelyanenkoK,
@Emidomenge, @emozilla, @Es1la, @EthanGuo-coder, @etherman-os, @ethernet8023, @EvilDrag0n, @exxmen, @Fearvox,
@Feranmi10, @firefly, @flobo3, @fmercurio, @Foolafroos, @formulahendry, @franksong2702, @ggnnggez, @GinWU05,
@giwaov, @glesperance, @gnanirahulnutakki, @GodsBoy, @Gosuj, @Grey0202, @guillaumemeyer, @Gutslabs, @h0tp-ftw,
@haidao1919, @halmisen, @happy5318, @hedirman, @helix4u, @hendrixfreire, @HenkDz, @hex-clawd, @heyitsaamir,
@hharry11, @Hinotoi-agent, @holynn-q, @hrkzogw, @Hypn0sis, @Hypnus-Yuan, @ideathinklab01-source, @IMHaoyan,
@Interstellar-code, @ishardo, @jacdevos, @jackey8616, @JanCong, @jasonoutland, @jatingodnani, @JayGwod,
@jethac, @JezzaHehn, @JiaDe-Wu, @jjjojoj, @jkausel-ai, @John-tip, @johnncenae, @jrusso1020, @jslizar,
@JTroyerOvermatch, @julysir, @Junass1, @JustinUssuri, @Kailigithub, @keepcalmqqf, @kiala9, @konsisumer,
@kowenhaoai, @Krionex, @kshitijk4poor, @kyan12, @leavrcn, @leon7609, @LeonSGP43, @leprincep35700, @lhysdl,
@likejudy, @lisanhu, @liu-collab, @liuguangyong93, @liuhao1024, @LucianoSP, @luoyuctl, @luyao618, @M3RCUR2Y,
@maciekczech, @Magicray1217, @magicray1217, @MaHaoHao-ch, @malaiwah, @manateelazycat, @masonjames, @megastary,
@memosr, @MichaelWDanko, @mikeyobrien, @millerc79, @Mind-Dragon, @mioimotoai-lgtm, @misery-hl, @molvikar,
@momowind, @Montbra, @MottledShadow, @mrbob-git, @mrcharlesiv, @mrcoferland, @ms-alan, @mwnickerson,
@nazirulhafiy, @nftpoetrist, @nicoloboschi, @nightq, @nikolay-bratanov, @NikolayGusev-astra, @nocturnum91,
@noOne-list, @nouseman666, @novax635, @npmisantosh, @nudiltoys-cmyk, @olisikh, @oluwadareab12, @Oxidane-bot,
@pama0227, @pander, @pasevin, @paul-tian, @pdonizete, @perlowja, @pingchesu, @PratikRai0101, @priveperfumes,
@probepark, @QifengKuang, @quocanh261997, @qWaitCrypto, @qxxaa, @r266-tech, @rames-jusso, @revaraver,
@Ricardo-M-L, @rob-maron, @Roy-oss1, @rxdxxxx, @SandroHub013, @Sanjays2402, @Sertug17, @shashwatgokhe,
@shellybotmoyer, @SHL0MS, @SimbaKingjoe, @simbam99, @simplenamebox-ops, @socrates1024, @sonic-netizen,
@sprmn24, @steezkelly, @stephen0110, @stephenschoettler, @stevenchanin, @stevenchouai, @stormhierta,
@subtract0, @suncokret12, @swithek, @taeng0204, @TakeshiSawaguchi, @tangyuanjc, @TheEpTic, @thelumiereguy,
@Tkander1715, @tmdgusya, @Tranquil-Flow, @TruaShamu, @UgwujaGeorge, @valda, @vincez-hms-coder, @VinVC,
@vominh1919, @wabrent, @WadydX, @wanazhar, @WanderWang, @warabe1122, @web-dev0521, @WideLee, @willy-scr,
@wmagev, @WuTianyi123, @wxst, @wysie, @Wysie, @xsfX20, @xxxigm, @xyiy001, @YanzhongSu, @ygd58, @Yoimex,
@yuehei, @Yukipukii1, @yuqianma, @YX234, @zeejaytan, @zhanggttry, @zhao0112, @zng8418, @zons-zhaozhy, @Zyproth

---

**Full Changelog**: [v2026.4.30...v2026.5.7](https://github.com/NousResearch/hermes-agent/compare/v2026.4.30...v2026.5.7)

---

## Hermes Agent v0.12.0 (2026.4.30)

- Tag: `v2026.4.30`
- Published: 2026-04-30T18:31:21Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.30
- Prerelease: False

# Hermes Agent v0.12.0 (v2026.4.30)

**Release Date:** April 30, 2026
**Since v0.11.0:** 1,096 commits · 550 merged PRs · 1,270 files changed · 217,776 insertions · 213 community contributors (including co-authors)

> The Curator release — Hermes Agent now maintains itself. An autonomous background Curator grades, prunes, and consolidates your skill library on its own schedule. The self-improvement loop that reviews what to save got a substantial upgrade. Four new inference providers, a 18th messaging platform, a 19th via Teams plugin, native Spotify + Google Meet integrations, ComfyUI and TouchDesigner-MCP moved from optional to bundled-by-default, and a ~57% cut to visible TUI cold start.

---

## ✨ Highlights

- **Autonomous Curator** — `hermes curator` runs as a background agent on the gateway's cron ticker (7-day cycle default). It grades your skill library, consolidates related skills, prunes dead ones, and writes per-run reports to `logs/curator/run.json` + `REPORT.md`. Archived skills are classified consolidated-vs-pruned via model + heuristic. Defense-in-depth gates protect bundled/hub skills from mutation. Unified under `auxiliary.curator` — pick the curator's model in `hermes model`, manage it from the dashboard. `hermes curator status` ranks skills by usage (most-used / least-used). ([#17277](https://github.com/NousResearch/hermes-agent/pull/17277), [#17307](https://github.com/NousResearch/hermes-agent/pull/17307), [#17941](https://github.com/NousResearch/hermes-agent/pull/17941), [#17868](https://github.com/NousResearch/hermes-agent/pull/17868), [#18033](https://github.com/NousResearch/hermes-agent/pull/18033))

- **Self-improvement loop — substantially upgraded** — The background review fork (the core of Hermes' self-improvement: after each turn it decides what memories/skills to save or update) is now class-first (rubric-based rather than free-form), active-update biased (prefers the skill the agent just loaded), handles `references/`/`templates/` sub-files, and properly inherits the parent's live runtime (provider, model, credentials actually propagate). Restricted to memory + skills toolsets so it can't sprawl. Memory providers shut down cleanly. Prior-turn tool messages excluded from the summary so the fork sees a clean context. ([#16026](https://github.com/NousResearch/hermes-agent/pull/16026), [#17213](https://github.com/NousResearch/hermes-agent/pull/17213), [#16099](https://github.com/NousResearch/hermes-agent/pull/16099), [#16569](https://github.com/NousResearch/hermes-agent/pull/16569), [#16204](https://github.com/NousResearch/hermes-agent/pull/16204), [#15057](https://github.com/NousResearch/hermes-agent/pull/15057))

- **Skill integrations — major expansion** — **ComfyUI v5** with official CLI + REST + hardware-gated local install, moved from optional to **built-in by default** ([#17610](https://github.com/NousResearch/hermes-agent/pull/17610), [#17631](https://github.com/NousResearch/hermes-agent/pull/17631), [#17734](https://github.com/NousResearch/hermes-agent/pull/17734)). **TouchDesigner-MCP** bundled by default, expanded with GLSL, post-FX, audio, geometry, and 9 new reference docs ([#16753](https://github.com/NousResearch/hermes-agent/pull/16753), [#16624](https://github.com/NousResearch/hermes-agent/pull/16624), [#16768](https://github.com/NousResearch/hermes-agent/pull/16768) — @kshitijk4poor + @SHL0MS). **Humanizer** skill ports a text-cleaner that strips AI-isms ([#16787](https://github.com/NousResearch/hermes-agent/pull/16787)). **claude-design** HTML artifact skill + design-md (Google DESIGN.md spec) + airtable salvage + `skill_manage` edits in `external_dirs` + direct-URL skill install + `/reload-skills` slash command. ([#16358](https://github.com/NousResearch/hermes-agent/pull/16358), [#14876](https://github.com/NousResearch/hermes-agent/pull/14876), [#16291](https://github.com/NousResearch/hermes-agent/pull/16291), [#17512](https://github.com/NousResearch/hermes-agent/pull/17512), [#16323](https://github.com/NousResearch/hermes-agent/pull/16323), [#17744](https://github.com/NousResearch/hermes-agent/pull/17744))

- **LM Studio — first-class provider** — upgraded from a custom-endpoint alias to a full-blown native provider: dedicated auth, `hermes doctor` checks, reasoning transport, live `/models` listing. (Salvage of @kshitijk4poor's #17061.) ([#17102](https://github.com/NousResearch/hermes-agent/pull/17102))

- **Four more new inference providers** — **GMI Cloud** (first-class, salvage of #11955 — @isaachuangGMICLOUD), **Azure AI Foundry** with auto-detection, **MiniMax OAuth** with PKCE browser flow (salvage #15203), **Tencent Tokenhub** (salvage of #16860). ([#16663](https://github.com/NousResearch/hermes-agent/pull/16663), [#15845](https://github.com/NousResearch/hermes-agent/pull/15845), [#17524](https://github.com/NousResearch/hermes-agent/pull/17524), [#16960](https://github.com/NousResearch/hermes-agent/pull/16960))

- **Pluggable gateway platforms + Microsoft Teams** — the gateway is now a plugin host. Drop-in messaging adapters live outside the core, and Microsoft Teams is the first plugin-shipped platform. (Salvage of #17664.) ([#17751](https://github.com/NousResearch/hermes-agent/pull/17751), [#17828](https://github.com/NousResearch/hermes-agent/pull/17828))

- **Tencent 元宝 (Yuanbao) — 18th messaging platform** — native gateway adapter with text + media delivery. ([#16298](https://github.com/NousResearch/hermes-agent/pull/16298), [#17424](https://github.com/NousResearch/hermes-agent/pull/17424))

- **Spotify — native tools + bundled skill + wizard** — 7 tools (play, search, queue, playlists, devices) behind PKCE OAuth, interactive setup wizard, bundled skill, surfacing in `hermes tools`, cron usage documented. ([#15121](https://github.com/NousResearch/hermes-agent/pull/15121), [#15130](https://github.com/NousResearch/hermes-agent/pull/15130), [#15154](https://github.com/NousResearch/hermes-agent/pull/15154), [#15180](https://github.com/NousResearch/hermes-agent/pull/15180))

- **Google Meet plugin** — join calls, transcribe, speak, follow up. Realtime OpenAI transport + Node bot server, full pipeline bundled as a plugin. ([#16364](https://github.com/NousResearch/hermes-agent/pull/16364))

- **`hermes -z` one-shot mode + `hermes update --check`** — non-interactive `hermes -z <prompt>` with `--model`/`--provider`/`HERMES_INFERENCE_MODEL`. `hermes update --check` preflight. Opt-in pre-update HERMES_HOME backup. ([#15702](https://github.com/NousResearch/hermes-agent/pull/15702), [#15704](https://github.com/NousResearch/hermes-agent/pull/15704), [#15841](https://github.com/NousResearch/hermes-agent/pull/15841), [#16539](https://github.com/NousResearch/hermes-agent/pull/16539), [#16566](https://github.com/NousResearch/hermes-agent/pull/16566))

- **Models dashboard tab + in-browser model config** — rich per-model analytics, switch main + auxiliary models from the dashboard. ([#17745](https://github.com/NousResearch/hermes-agent/pull/17745), [#17802](https://github.com/NousResearch/hermes-agent/pull/17802))

- **Remote model catalog manifest** — OpenRouter + Nous Portal model catalogs are now pulled from a remote manifest so new models show up without a release. ([#16033](https://github.com/NousResearch/hermes-agent/pull/16033))

- **Native multimodal image routing** — images now route based on the model's actual vision capability rather than provider defaults. ([#16506](https://github.com/NousResearch/hermes-agent/pull/16506))

- **Gateway media parity** — native multi-image sending across Telegram, Discord, Slack, Mattermost, Email, and Signal; centralized audio routing with FLAC support + Telegram document fallback. ([#17909](https://github.com/NousResearch/hermes-agent/pull/17909), [#17833](https://github.com/NousResearch/hermes-agent/pull/17833))

- **TUI catches up to (and past) the classic CLI** — LaTeX rendering (@austinpickett), `/reload` .env hot-reload, pluggable busy-indicator styles (@OutThisLife, #13610), opt-in auto-resume of last session, expanded light-terminal auto-detection, session delete from `/resume` picker with `d`, modified mouse-wheel line scroll, and a `/mouse` toggle that kills ConPTY's phantom mouse injection (@kevin-ho). ([#17175](https://github.com/NousResearch/hermes-agent/pull/17175), [#17286](https://github.com/NousResearch/hermes-agent/pull/17286), [#17150](https://github.com/NousResearch/hermes-agent/pull/17150), [#17130](https://github.com/NousResearch/hermes-agent/pull/17130), [#17113](https://github.com/NousResearch/hermes-agent/pull/17113), [#17668](https://github.com/NousResearch/hermes-agent/pull/17668), [#17669](https://github.com/NousResearch/hermes-agent/pull/17669), [#15488](https://github.com/NousResearch/hermes-agent/pull/15488))

- **Observability + achievements plugins** — bundled Langfuse observability plugin (salvage #16845) + bundled hermes-achievements plugin that scans full session history. ([#16917](https://github.com/NousResearch/hermes-agent/pull/16917), [#17754](https://github.com/NousResearch/hermes-agent/pull/17754))

- **TTS provider registry + Piper local TTS** — pluggable `tts.providers.<name>` registry; Piper ships as a native local TTS provider. (Closes #8508.) ([#17843](https://github.com/NousResearch/hermes-agent/pull/17843), [#17885](https://github.com/NousResearch/hermes-agent/pull/17885))

- **Vercel Sandbox backend** — Vercel sandboxes as an execute_code/terminal backend (@kshitijk4poor). ([#17445](https://github.com/NousResearch/hermes-agent/pull/17445))

- **Secret redaction off by default** — default flipped to off. Prevents the long-standing patch-corruption incidents where fake secret-shaped substrings mangled tool outputs. Opt in via `redaction.enabled: true` when you need it. ([#16794](https://github.com/NousResearch/hermes-agent/pull/16794))

- **Cold-start performance** — visible TUI cold start cut **~57%** via lazy agent init (@OutThisLife), lazy imports of OpenAI / Anthropic / Firecrawl / account_usage, mtime-cached `load_config()`, memoized `get_tool_definitions()` with TTL-cached `check_fn` results, precompiled dangerous-command patterns. ([#17190](https://github.com/NousResearch/hermes-agent/pull/17190), [#17046](https://github.com/NousResearch/hermes-agent/pull/17046), [#17041](https://github.com/NousResearch/hermes-agent/pull/17041), [#17098](https://github.com/NousResearch/hermes-agent/pull/17098), [#17206](https://github.com/NousResearch/hermes-agent/pull/17206))

- **Configurable prompt cache TTL** — `prompt_caching.cache_ttl` (5m default, 1h opt-in — cost savings for bursty sessions that keep cache warm). Salvage of #12659. ([#15065](https://github.com/NousResearch/hermes-agent/pull/15065))

---

## 🧠 Autonomous Curator & Self-Improvement Loop

### Curator — autonomous skill maintenance
- **`hermes curator` as a background agent** — runs on the gateway's cron ticker, 7-day cycle by default, umbrella-first prompt, inherits parent config, unbounded iterations ([#17277](https://github.com/NousResearch/hermes-agent/pull/17277) — issue #7816)
- **Per-run reports** — `logs/curator/run.json` + `REPORT.md` per cycle ([#17307](https://github.com/NousResearch/hermes-agent/pull/17307))
- **Consolidated vs pruned classification** — archived skills split with model + heuristic ([#17941](https://github.com/NousResearch/hermes-agent/pull/17941))
- **`hermes curator status`** — ranks skills by usage, shows most-used and least-used ([#18033](https://github.com/NousResearch/hermes-agent/pull/18033))
- **Unified under `auxiliary.curator`** — pick the model in `hermes model`, configure from the dashboard ([#17868](https://github.com/NousResearch/hermes-agent/pull/17868))
- **Documentation** — dedicated curator feature page on the docs site ([#17563](https://github.com/NousResearch/hermes-agent/pull/17563))
- Fix: seed defaults on update, create `logs/curator/` directory, defer fire import ([#17927](https://github.com/NousResearch/hermes-agent/pull/17927))
- Fix: scan nested archive subdirs in `restore_skill` (@0xDevNinja) ([#17951](https://github.com/NousResearch/hermes-agent/pull/17951))
- Fix: use actual skill activity in curator status (@y0shua1ee) ([#17953](https://github.com/NousResearch/hermes-agent/pull/17953))
- Fix: `skill_manage` refuses writes on pinned skills; pinning now blocks curator writes ([#17562](https://github.com/NousResearch/hermes-agent/pull/17562), [#17578](https://github.com/NousResearch/hermes-agent/pull/17578))
- Fix: `bump_use()` wired into skill invocation + preload + skill_view (salvage #17782) ([#17932](https://github.com/NousResearch/hermes-agent/pull/17932))

### Self-improvement loop (background review fork)
- **Class-first skill-review prompt** — rubric-based grading rather than free-form "should this update" ([#16026](https://github.com/NousResearch/hermes-agent/pull/16026))
- **Active-update bias** — prefers updating skills the agent just loaded, handles `references/` + `templates/` sub-files ([#17213](https://github.com/NousResearch/hermes-agent/pull/17213))
- **Fork inherits parent's live runtime** — provider, model, credentials actually propagate now ([#16099](https://github.com/NousResearch/hermes-agent/pull/16099))
- **Scoped toolsets** — review fork restricted to memory + skills (no shell, no web) ([#16569](https://github.com/NousResearch/hermes-agent/pull/16569))
- **Clean shutdown** — background review memory providers exit properly (salvage #15289) ([#16204](https://github.com/NousResearch/hermes-agent/pull/16204))
- **Clean context** — prior-history tool messages excluded from review summary (salvage #14967) ([#15057](https://github.com/NousResearch/hermes-agent/pull/15057))

---

## 🧩 Skills Ecosystem

### Skill integrations — newly bundled or promoted
- **ComfyUI v5** — official CLI + REST + hardware-gated local install; **moved from optional to built-in** ([#17610](https://github.com/NousResearch/hermes-agent/pull/17610), [#17631](https://github.com/NousResearch/hermes-agent/pull/17631), [#17734](https://github.com/NousResearch/hermes-agent/pull/17734), [#17612](https://github.com/NousResearch/hermes-agent/pull/17612))
- **TouchDesigner-MCP** — **bundled by default** ([#16753](https://github.com/NousResearch/hermes-agent/pull/16753) — @kshitijk4poor), expanded with GLSL, post-FX, audio, geometry references ([#16624](https://github.com/NousResearch/hermes-agent/pull/16624)), 9 new reference docs ([#16768](https://github.com/NousResearch/hermes-agent/pull/16768) — @SHL0MS)
- **Humanizer** — strips AI-isms from text ([#16787](https://github.com/NousResearch/hermes-agent/pull/16787))
- **claude-design** — HTML artifact skill with disambiguation from other design skills ([#16358](https://github.com/NousResearch/hermes-agent/pull/16358))
- **design-md** — Google's DESIGN.md spec skill ([#14876](https://github.com/NousResearch/hermes-agent/pull/14876))
- **airtable** — salvaged skill + skill API keys wired into `.env` (#15838) ([#16291](https://github.com/NousResearch/hermes-agent/pull/16291))
- **pretext** — creative browser demos with @chenglou/pretext ([#17259](https://github.com/NousResearch/hermes-agent/pull/17259))
- **spike** + **sketch** — throwaway experiments + HTML mockups, adapted from gsd-build ([#17421](https://github.com/NousResearch/hermes-agent/pull/17421))

### Skills UX
- **Install skills from a direct HTTP(S) URL** — `hermes skills install <url>` ([#16323](https://github.com/NousResearch/hermes-agent/pull/16323))
- **`/reload-skills`** slash command (salvage #17670) ([#17744](https://github.com/NousResearch/hermes-agent/pull/17744))
- **`hermes skills list`** shows enabled/disabled status ([#16129](https://github.com/NousResearch/hermes-agent/pull/16129))
- **`skill_manage` refuses writes on pinned skills** ([#17562](https://github.com/NousResearch/hermes-agent/pull/17562))
- **`skill_manage` edits external_dirs skills in place** (salvage #9966) ([#17512](https://github.com/NousResearch/hermes-agent/pull/17512), [#17289](https://github.com/NousResearch/hermes-agent/pull/17289))
- Fix: inline-shell rendering in `skill_view` ([#15376](https://github.com/NousResearch/hermes-agent/pull/15376))
- Fix: exclude `.archive/` from skill index walk (salvage #17639) ([#17931](https://github.com/NousResearch/hermes-agent/pull/17931))
- Fix: dedicated docs page per bundled + optional skill ([#14929](https://github.com/NousResearch/hermes-agent/pull/14929))
- Fix: `google-workspace` shared HERMES_HOME helper + ship deps as optional extra ([#15405](https://github.com/NousResearch/hermes-agent/pull/15405))
- Fix: auto-wrap ASCII-art code blocks in generated skill pages ([#16497](https://github.com/NousResearch/hermes-agent/pull/16497))
- Point agent at `hermes-agent` skill + docs site for Hermes questions ([#16535](https://github.com/NousResearch/hermes-agent/pull/16535))

---

## 🏗️ Core Agent & Architecture

### Provider & Model Support

#### New providers
- **GMI Cloud** — first-class API-key provider on par with Arcee/Kilocode/Xiaomi (salvage of #11955 — @isaachuangGMICLOUD) ([#16663](https://github.com/NousResearch/hermes-agent/pull/16663))
- **Azure AI Foundry** — auto-detection, full wiring ([#15845](https://github.com/NousResearch/hermes-agent/pull/15845))
- **LM Studio** — upgraded from custom-endpoint alias to first-class provider: dedicated auth, doctor checks, reasoning transport, live `/models` (salvage of #17061 — @kshitijk4poor) ([#17102](https://github.com/NousResearch/hermes-agent/pull/17102))
- **MiniMax OAuth** — PKCE browser flow with full OAuth integration (salvage #15203) ([#17524](https://github.com/NousResearch/hermes-agent/pull/17524))
- **Tencent Tokenhub** — new provider (salvage of #16860) ([#16960](https://github.com/NousResearch/hermes-agent/pull/16960))

#### Model catalog
- **Remote model catalog manifest** — OpenRouter + Nous Portal catalogs pulled from remote manifest so new models show up without a release ([#16033](https://github.com/NousResearch/hermes-agent/pull/16033))
- `openai/gpt-5.5` and `gpt-5.5-pro` added to OpenRouter + Nous Portal ([#15343](https://github.com/NousResearch/hermes-agent/pull/15343))
- `deepseek-v4-pro` and `deepseek-v4-flash` added ([#14934](https://github.com/NousResearch/hermes-agent/pull/14934))
- `qwen3.6-plus` added to Alibaba-supported models ([#16896](https://github.com/NousResearch/hermes-agent/pull/16896))
- Gemini free-tier keys blocked at setup with 429 guidance surfacing ([#15100](https://github.com/NousResearch/hermes-agent/pull/15100))

#### Model configuration
- **Configurable `prompt_caching.cache_ttl`** — 5m default, 1h opt-in (salvage #12659) ([#15065](https://github.com/NousResearch/hermes-agent/pull/15065))
- `/fast` whitelist broadened to all OpenAI + Anthropic models ([#16883](https://github.com/NousResearch/hermes-agent/pull/16883))
- `auxiliary.extra_body.reasoning` translates into Codex Responses API ([#17004](https://github.com/NousResearch/hermes-agent/pull/17004))
- `hermes fallback` command for managing fallback providers ([#16052](https://github.com/NousResearch/hermes-agent/pull/16052))

### Agent Loop & Conversation
- **Native multimodal image routing** — based on model vision capability, not provider defaults ([#16506](https://github.com/NousResearch/hermes-agent/pull/16506))
- **Delegate `child_timeout_seconds` default bumped to 600s** ([#14809](https://github.com/NousResearch/hermes-agent/pull/14809))
- **Diagnostic dump when subagent times out with 0 API calls** ([#15105](https://github.com/NousResearch/hermes-agent/pull/15105))
- **Gateway busts cached agent on compression/context_length config edits** ([#17008](https://github.com/NousResearch/hermes-agent/pull/17008))
- **Opt-in runtime-metadata footer on final replies** ([#17026](https://github.com/NousResearch/hermes-agent/pull/17026))
- `/reload-mcp` awareness — rebuild cached agents + prompt-cache cost confirmation ([#17729](https://github.com/NousResearch/hermes-agent/pull/17729))
- Fix: repair CamelCase + `_tool` suffix tool-call emissions ([#15124](https://github.com/NousResearch/hermes-agent/pull/15124))
- Fix: retry on `json.JSONDecodeError` instead of treating as local validation error ([#15107](https://github.com/NousResearch/hermes-agent/pull/15107))
- Fix: handle unescaped control chars in `tool_call.arguments` ([#15356](https://github.com/NousResearch/hermes-agent/pull/15356))
- Fix: ordering fix in `_copy_reasoning_content_for_api` — cross-provider reasoning isolation (@Zjianru) ([#15749](https://github.com/NousResearch/hermes-agent/pull/15749))
- Fix: inject empty `reasoning_content` for DeepSeek/Kimi `tool_calls` unconditionally (@Zjianru) ([#15762](https://github.com/NousResearch/hermes-agent/pull/15762))
- Fix: persist streamed `reasoning_content` on assistant turns (#16844) ([#16892](https://github.com/NousResearch/hermes-agent/pull/16892))
- Fix: cancel coroutine on timeout so worker thread exits; full traceback on tool failure ([#17428](https://github.com/NousResearch/hermes-agent/pull/17428))
- Fix: isolate `get_tool_definitions` quiet_mode cache + dedup LCM injection (#17335) ([#17889](https://github.com/NousResearch/hermes-agent/pull/17889))
- Fix: serialize concurrent `hermes_tools` RPC calls from `execute_code` (#17770) ([#17894](https://github.com/NousResearch/hermes-agent/pull/17894), [#17902](https://github.com/NousResearch/hermes-agent/pull/17902))
- Fix: rename `[SYSTEM:` → `[IMPORTANT:` in all user-injected markers (dodges Azure content filter) ([#16114](https://github.com/NousResearch/hermes-agent/pull/16114))

### Compression
- **Retry summary on main model for unknown errors before giving up** ([#16774](https://github.com/NousResearch/hermes-agent/pull/16774))
- **Notify users when configured aux model fails even if main-model fallback recovers** ([#16775](https://github.com/NousResearch/hermes-agent/pull/16775))
- `/compress` wrapped in `_busy_command` to block input during compression ([#15388](https://github.com/NousResearch/hermes-agent/pull/15388))
- Fix: reserve system + tools headroom when aux binds threshold ([#15631](https://github.com/NousResearch/hermes-agent/pull/15631))
- Fix: use text-char sum for multimodal token estimation in `_find_tail_cut_by_tokens` ([#16369](https://github.com/NousResearch/hermes-agent/pull/16369))

### Session, Memory & State
- **Trigram FTS5 index for CJK search, replace LIKE fallback** (@alt-glitch) ([#16651](https://github.com/NousResearch/hermes-agent/pull/16651))
- **Index `tool_name` + `tool_calls` in FTS5, with repair + migration** (salvages #16866) ([#16914](https://github.com/NousResearch/hermes-agent/pull/16914))
- **Checkpoints: auto-prune orphan and stale shadow repos at startup** ([#16303](https://github.com/NousResearch/hermes-agent/pull/16303))
- **Memory providers notified on mid-process session_id rotation** (#6672) ([#17409](https://github.com/NousResearch/hermes-agent/pull/17409))
- Fix: quote underscored terms in FTS5 query sanitization ([#16915](https://github.com/NousResearch/hermes-agent/pull/16915))
- Fix: resolve viking_read 500/412 on file URIs + pseudo-summary URIs (salvage #5886) ([#17869](https://github.com/NousResearch/hermes-agent/pull/17869))
- Fix: skip external-provider sync on interrupted turns ([#15395](https://github.com/NousResearch/hermes-agent/pull/15395))
- Fix: close embedded Hindsight async client cleanly (salvage #14605) ([#16209](https://github.com/NousResearch/hermes-agent/pull/16209))
- Fix: pass session transcript to `shutdown_memory_provider` on gateway + CLI (#15165) ([#16571](https://github.com/NousResearch/hermes-agent/pull/16571))
- Fix: write-origin metadata seam ([#15346](https://github.com/NousResearch/hermes-agent/pull/15346))
- Fix: preserve symlinks during atomic file writes ([#16980](https://github.com/NousResearch/hermes-agent/pull/16980))
- Refactor: remove `flush_memories` entirely ([#15696](https://github.com/NousResearch/hermes-agent/pull/15696))

### Auxiliary models
- Fix: surface auxiliary failures in UI (previously silent) ([#15324](https://github.com/NousResearch/hermes-agent/pull/15324))
- Fix: surface title-gen auxiliary failures instead of silently dropping ([#16371](https://github.com/NousResearch/hermes-agent/pull/16371))
- Fix: generalize unsupported-parameter detector and harden `max_tokens` retry ([#15633](https://github.com/NousResearch/hermes-agent/pull/15633))

---

## 📱 Messaging Platforms (Gateway)

### New Platforms
- **Microsoft Teams (19th platform)** — as a plugin, + xdist collision guard ([#17828](https://github.com/NousResearch/hermes-agent/pull/17828))
- **Yuanbao (Tencent 元宝, 18th platform)** — native adapter with text + media delivery ([#16298](https://github.com/NousResearch/hermes-agent/pull/16298), [#17424](https://github.com/NousResearch/hermes-agent/pull/17424), [#16880](https://github.com/NousResearch/hermes-agent/pull/16880))

### Pluggable Gateway Platforms
- **Drop-in messaging adapters** — the gateway is now a plugin host for platforms (salvage of #17664) ([#17751](https://github.com/NousResearch/hermes-agent/pull/17751))

### Telegram
- **Chat allowlists for groups and forums** (@web3blind) ([#15027](https://github.com/NousResearch/hermes-agent/pull/15027))
- **Send fresh finals for stale preview streams** (port openclaw#72038) ([#16261](https://github.com/NousResearch/hermes-agent/pull/16261))
- **Render markdown tables as row-group bullets + prompt hint** ([#16997](https://github.com/NousResearch/hermes-agent/pull/16997))
- Document fallback in centralized audio routing ([#17833](https://github.com/NousResearch/hermes-agent/pull/17833))
- Native multi-image sending ([#17909](https://github.com/NousResearch/hermes-agent/pull/17909))

### Discord
- **Opt-in toolsets + ID injection + tool split + Feishu wiring** (salvage #15457, #15458) ([#15610](https://github.com/NousResearch/hermes-agent/pull/15610), [#15613](https://github.com/NousResearch/hermes-agent/pull/15613))
- Fix: coerce `limit` parameter to int before `min()` call ([#16319](https://github.com/NousResearch/hermes-agent/pull/16319))

### Slack
- **Register every gateway command as a native slash (Discord/Telegram parity)** ([#16164](https://github.com/NousResearch/hermes-agent/pull/16164))
- **`strict_mention` config** — prevents thread auto-engagement ([#16193](https://github.com/NousResearch/hermes-agent/pull/16193))
- **`channel_skill_bindings`** — bind specific skills to specific Slack channels ([#16283](https://github.com/NousResearch/hermes-agent/pull/16283))

### Signal
- **Native formatting** — markdown → bodyRanges, reply quotes, reactions ([#17417](https://github.com/NousResearch/hermes-agent/pull/17417))
- Native multi-image sending ([#17909](https://github.com/NousResearch/hermes-agent/pull/17909))

### Feishu / Mattermost / Email / Signal
- All participate in **native multi-image sending** ([#17909](https://github.com/NousResearch/hermes-agent/pull/17909))

### Gateway Core
- **Centralized audio routing + FLAC support + Telegram doc fallback** ([#17833](https://github.com/NousResearch/hermes-agent/pull/17833))
- **Native multi-image sending** across Telegram, Discord, Slack, Mattermost, Email, Signal ([#17909](https://github.com/NousResearch/hermes-agent/pull/17909))
- **Make hygiene hard message limit configurable** ([#17000](https://github.com/NousResearch/hermes-agent/pull/17000))
- **Opt-in runtime-metadata footer on final replies** ([#17026](https://github.com/NousResearch/hermes-agent/pull/17026))
- **`pre_gateway_dispatch` hook** — plugins can intercept before dispatch ([#15050](https://github.com/NousResearch/hermes-agent/pull/15050))
- **`pre_approval_request` / `post_approval_response` hooks** ([#16776](https://github.com/NousResearch/hermes-agent/pull/16776))
- Fix: timeouts — guard `load_config()` call against runtime exceptions ([#16318](https://github.com/NousResearch/hermes-agent/pull/16318))
- Fix: support passing handler tools via registry ([#15613](https://github.com/NousResearch/hermes-agent/pull/15613))

---

## 🔧 Tool System

### Plugin-first architecture
- **Pluggable gateway platforms** — platforms can ship as plugins ([#17751](https://github.com/NousResearch/hermes-agent/pull/17751))
- **Microsoft Teams as first plugin-shipped platform** ([#17828](https://github.com/NousResearch/hermes-agent/pull/17828))
- **`pre_gateway_dispatch` hook** ([#15050](https://github.com/NousResearch/hermes-agent/pull/15050))
- **`pre_approval_request` + `post_approval_response` hooks** ([#16776](https://github.com/NousResearch/hermes-agent/pull/16776))
- **`duration_ms` on `post_tool_call`** (inspired by Claude Code 2.1.119) ([#15429](https://github.com/NousResearch/hermes-agent/pull/15429))
- **Bundled plugins**: Spotify ([#15174](https://github.com/NousResearch/hermes-agent/pull/15174)), Google Meet ([#16364](https://github.com/NousResearch/hermes-agent/pull/16364)), Langfuse observability ([#16917](https://github.com/NousResearch/hermes-agent/pull/16917)), hermes-achievements ([#17754](https://github.com/NousResearch/hermes-agent/pull/17754))
- **Page-scoped plugin slots for built-in dashboard pages** ([#15658](https://github.com/NousResearch/hermes-agent/pull/15658))
- **Declarative plugin installation for NixOS module** (@alt-glitch) ([#15953](https://github.com/NousResearch/hermes-agent/pull/15953))

### Browser
- **CDP supervisor** — dialog detection + response + cross-origin iframe eval ([#14540](https://github.com/NousResearch/hermes-agent/pull/14540))
- **Auto-spawn local Chromium for LAN/localhost URLs** when cloud provider is configured ([#16136](https://github.com/NousResearch/hermes-agent/pull/16136))

### Execute code / Terminal
- **Vercel Sandbox backend** for `execute_code` / terminal (@kshitijk4poor) ([#17445](https://github.com/NousResearch/hermes-agent/pull/17445))
- **Collapse subagent `task_id`s to shared container** ([#16177](https://github.com/NousResearch/hermes-agent/pull/16177))
- **Docker: run container as host user** to avoid root-owned bind mounts (@benbarclay) ([#17305](https://github.com/NousResearch/hermes-agent/pull/17305))
- Fix: safely quote `~/` subpaths in wrapped `cd` commands ([#15394](https://github.com/NousResearch/hermes-agent/pull/15394))
- Fix: close file descriptor in `LocalEnvironment._update_cwd` ([#17300](https://github.com/NousResearch/hermes-agent/pull/17300))
- Fix: SSH — prevent tar from overwriting remote home dir permissions ([#17898](https://github.com/NousResearch/hermes-agent/pull/17898), [#17867](https://github.com/NousResearch/hermes-agent/pull/17867))

### Image generation
- See Provider section for updates; no new image providers this window.

### TTS / Voice
- **Pluggable TTS provider registry** under `tts.providers.<name>` ([#17843](https://github.com/NousResearch/hermes-agent/pull/17843))
- **Piper** as native local TTS provider (closes #8508) ([#17885](https://github.com/NousResearch/hermes-agent/pull/17885))
- **Voice mode CLI parity in the TUI** — VAD loop + TTS + crash forensics ([#14810](https://github.com/NousResearch/hermes-agent/pull/14810))
- Fix: vision — use HERMES_HOME-based cache dir instead of cwd ([#17719](https://github.com/NousResearch/hermes-agent/pull/17719))

### Cron
- **Honor `hermes tools` config for the cron platform** ([#14798](https://github.com/NousResearch/hermes-agent/pull/14798))
- **Per-job `workdir`** — project-aware cron runs ([#15110](https://github.com/NousResearch/hermes-agent/pull/15110))
- **`context_from` field** — chain cron job outputs ([#15606](https://github.com/NousResearch/hermes-agent/pull/15606))
- Fix: promote `croniter` to a core dependency ([#17577](https://github.com/NousResearch/hermes-agent/pull/17577))

### Web search
- **Expose `limit` for `web_search`** ([#16934](https://github.com/NousResearch/hermes-agent/pull/16934))

### Maps
- Fix: include seconds in timezone UTC offset output ([#16300](https://github.com/NousResearch/hermes-agent/pull/16300))

### Approvals
- **Hardline blocklist for unrecoverable commands** ([#15878](https://github.com/NousResearch/hermes-agent/pull/15878))
- Perf: precompile DANGEROUS_PATTERNS and HARDLINE_PATTERNS ([#17206](https://github.com/NousResearch/hermes-agent/pull/17206))

### ACP
- **Advertise and forward image prompts** ([#18030](https://github.com/NousResearch/hermes-agent/pull/18030))

### API Server
- **POST `/v1/runs/{run_id}/stop`** (salvage of #15656) ([#15842](https://github.com/NousResearch/hermes-agent/pull/15842))
- **Expose run status for external UIs** (#17085) ([#17458](https://github.com/NousResearch/hermes-agent/pull/17458))

### Nix
- **Declarative plugin installation for NixOS module** (@alt-glitch) ([#15953](https://github.com/NousResearch/hermes-agent/pull/15953))
- Fix: use `--rebuild` in fix-lockfiles to bypass cached FOD store paths ([#15444](https://github.com/NousResearch/hermes-agent/pull/15444))
- Fix: `extraPackages` now actually works via per-user profile ([#17047](https://github.com/NousResearch/hermes-agent/pull/17047))
- Fix: refresh web/ npm-deps hash to unblock main builds ([#17174](https://github.com/NousResearch/hermes-agent/pull/17174))
- Fix: replace magic-nix-cache with Cachix ([#17928](https://github.com/NousResearch/hermes-agent/pull/17928))

---

## 🖥️ TUI

### New features
- **LaTeX rendering** (@austinpickett) ([#17175](https://github.com/NousResearch/hermes-agent/pull/17175))
- **`/reload` .env hot-reload** — ported from the classic CLI ([#17286](https://github.com/NousResearch/hermes-agent/pull/17286))
- **Pluggable busy-indicator styles** (@OutThisLife, #13610) ([#17150](https://github.com/NousResearch/hermes-agent/pull/17150))
- **Opt-in auto-resume of the most recent session** (@OutThisLife) ([#17130](https://github.com/NousResearch/hermes-agent/pull/17130))
- **Expanded light-terminal auto-detection** — `HERMES_TUI_THEME` + background hex (@OutThisLife) ([#17113](https://github.com/NousResearch/hermes-agent/pull/17113))
- **Delete sessions from `/resume` picker with `d`** (@OutThisLife) ([#17668](https://github.com/NousResearch/hermes-agent/pull/17668))
- **Line-by-line scroll on modified mouse wheel** (@OutThisLife) ([#17669](https://github.com/NousResearch/hermes-agent/pull/17669))
- **Delete queued message while editing with ctrl-x / cancel with esc** (@OutThisLife) ([#16707](https://github.com/NousResearch/hermes-agent/pull/16707))
- **Per-section visibility for the details accordion** (@OutThisLife) ([#14968](https://github.com/NousResearch/hermes-agent/pull/14968))
- **Voice mode CLI parity** — VAD loop + TTS + crash forensics ([#14810](https://github.com/NousResearch/hermes-agent/pull/14810))
- **Contextual first-touch hints ported to TUI** — `/busy`, `/verbose` ([#16054](https://github.com/NousResearch/hermes-agent/pull/16054))
- **Mini help menu on `?` in the input field** (@ethernet8023) ([#18043](https://github.com/NousResearch/hermes-agent/pull/18043))

### Fixes
- Fix: proactive mouse disable on ConPTY + `/mouse` toggle command (@kevin-ho, WSL2 ghost-mouse fix) ([#15488](https://github.com/NousResearch/hermes-agent/pull/15488))
- Fix: restore skills search RPC ([#15870](https://github.com/NousResearch/hermes-agent/pull/15870))
- Perf: cache text measurements across yoga flex re-passes ([#14818](https://github.com/NousResearch/hermes-agent/pull/14818))
- Perf: stabilize long-session scrolling ([#15926](https://github.com/NousResearch/hermes-agent/pull/15926))
- Perf: lazily seed virtual history heights ([#16523](https://github.com/NousResearch/hermes-agent/pull/16523))
- Perf: cut visible cold start ~57% with lazy agent init ([#17190](https://github.com/NousResearch/hermes-agent/pull/17190))

---

## 🖱️ CLI & User Experience

### New commands
- **`hermes -z <prompt>`** — non-interactive one-shot mode ([#15702](https://github.com/NousResearch/hermes-agent/pull/15702))
- **`hermes -z` with `--model` / `--provider` / `HERMES_INFERENCE_MODEL`** ([#15704](https://github.com/NousResearch/hermes-agent/pull/15704))
- **`hermes update --check`** preflight flag ([#15841](https://github.com/NousResearch/hermes-agent/pull/15841))
- **`hermes fallback`** command for managing fallback providers ([#16052](https://github.com/NousResearch/hermes-agent/pull/16052))
- **`/busy`** slash command for busy input mode ([#15382](https://github.com/NousResearch/hermes-agent/pull/15382))
- **`/busy` input mode 'steer'** as a third option ([#16279](https://github.com/NousResearch/hermes-agent/pull/16279))
- **`/btw` as alias for `/background`** ([#16053](https://github.com/NousResearch/hermes-agent/pull/16053))
- **`/reload-skills`** slash command (salvage #17670) ([#17744](https://github.com/NousResearch/hermes-agent/pull/17744))
- **Surface `/queue`, `/bg`, `/steer` in agent-running placeholder** ([#16118](https://github.com/NousResearch/hermes-agent/pull/16118))

### Setup / onboarding
- **Auto-reconfigure on existing installs** ([#15879](https://github.com/NousResearch/hermes-agent/pull/15879))
- **Contextual first-touch hints for `/busy` and `/verbose`** ([#16046](https://github.com/NousResearch/hermes-agent/pull/16046))
- **Cost-saving tips from the April 30 tip-of-the-day** ([#17841](https://github.com/NousResearch/hermes-agent/pull/17841))
- **Hyperlink startup banner title to the latest GitHub Release** ([#14945](https://github.com/NousResearch/hermes-agent/pull/14945))

### Update / backup
- **Snapshot pairing data before `git pull`** ([#16383](https://github.com/NousResearch/hermes-agent/pull/16383))
- **Auto-backup HERMES_HOME before `hermes update`** (opt-in, off by default) ([#16539](https://github.com/NousResearch/hermes-agent/pull/16539), [#16566](https://github.com/NousResearch/hermes-agent/pull/16566))
- **Exclude `checkpoints/` from backups** ([#16572](https://github.com/NousResearch/hermes-agent/pull/16572))
- **Exclude SQLite WAL/SHM/journal sidecars from backups** ([#16576](https://github.com/NousResearch/hermes-agent/pull/16576))
- **Installer FHS layout for root installs on Linux** ([#15608](https://github.com/NousResearch/hermes-agent/pull/15608))
- Fix: kill stale dashboards instead of warning ([#17832](https://github.com/NousResearch/hermes-agent/pull/17832))
- Fix: show correct update status on nix-built hermes ([#17550](https://github.com/NousResearch/hermes-agent/pull/17550))

### Slash-command housekeeping
- Refactor: drop `/provider`, `/plan` handler, and clean up slash registry ([#15047](https://github.com/NousResearch/hermes-agent/pull/15047))
- Refactor: drop `persist_session` plumbing + fix broken `/btw` mid-turn bypass ([#16075](https://github.com/NousResearch/hermes-agent/pull/16075))

### OpenClaw migration (for folks coming from OpenClaw)
- **Hardened OpenClaw import** — plan-first apply, redaction, pre-migration backup ([#16911](https://github.com/NousResearch/hermes-agent/pull/16911))
- Fix: case-preserving brand rewrite + one-time `~/.openclaw` residue banner ([#16327](https://github.com/NousResearch/hermes-agent/pull/16327))
- Fix: resolve `openclaw` workspace files from `agents.defaults.workspace` ([#16879](https://github.com/NousResearch/hermes-agent/pull/16879))
- Fix: resolve model aliases against real OpenClaw catalog schema (salvage #16778) ([#16977](https://github.com/NousResearch/hermes-agent/pull/16977))

---

## 📊 Web Dashboard

- **Models tab** — rich per-model analytics ([#17745](https://github.com/NousResearch/hermes-agent/pull/17745))
- **Configure main + auxiliary models from the Models page** ([#17802](https://github.com/NousResearch/hermes-agent/pull/17802))
- **Dashboard Chat tab — xterm.js + JSON-RPC sidecar** (supersedes #12710 + #13379, @OutThisLife) ([#14890](https://github.com/NousResearch/hermes-agent/pull/14890))
- **Dashboard layout refresh** (@austinpickett) ([#14899](https://github.com/NousResearch/hermes-agent/pull/14899))
- **`--stop` and `--status` flags** on the dashboard CLI ([#17840](https://github.com/NousResearch/hermes-agent/pull/17840))
- **Page-scoped plugin slots for built-in pages** ([#15658](https://github.com/NousResearch/hermes-agent/pull/15658))
- Fix: replace all buttons for design system buttons ([#17007](https://github.com/NousResearch/hermes-agent/pull/17007))

---

## ⚡ Performance

- **TUI visible cold start cut ~57%** via lazy agent init ([#17190](https://github.com/NousResearch/hermes-agent/pull/17190))
- **Lazy-import OpenAI, Anthropic, Firecrawl, account_usage** ([#17046](https://github.com/NousResearch/hermes-agent/pull/17046))
- **mtime-cache `load_config()` and `read_raw_config()`** ([#17041](https://github.com/NousResearch/hermes-agent/pull/17041))
- **Memoize `get_tool_definitions()` + TTL-cache `check_fn` results** ([#17098](https://github.com/NousResearch/hermes-agent/pull/17098))
- **Precompile DANGEROUS_PATTERNS and HARDLINE_PATTERNS** ([#17206](https://github.com/NousResearch/hermes-agent/pull/17206))
- **Cache Ink text measurements across yoga flex re-passes** ([#14818](https://github.com/NousResearch/hermes-agent/pull/14818))
- **Stabilize long-session scrolling** ([#15926](https://github.com/NousResearch/hermes-agent/pull/15926))
- **Lazily seed virtual history heights** ([#16523](https://github.com/NousResearch/hermes-agent/pull/16523))

---

## 🔒 Security & Reliability

- **Secret redaction off by default** — stops corrupting patches / API payloads with fake-key substitutions. Opt in via `redaction.enabled: true` ([#16794](https://github.com/NousResearch/hermes-agent/pull/16794))
- **`[SYSTEM:` → `[IMPORTANT:`** in all user-injected markers (Azure content filter dodge) ([#16114](https://github.com/NousResearch/hermes-agent/pull/16114))
- **Hardline blocklist for unrecoverable commands** ([#15878](https://github.com/NousResearch/hermes-agent/pull/15878))
- **Canonical `mask_secret` helper; fix status.py DIM drift** ([#17207](https://github.com/NousResearch/hermes-agent/pull/17207))
- **Sweep expired paste.rs uploads on a real timer** ([#16431](https://github.com/NousResearch/hermes-agent/pull/16431))
- **Preserve symlinks during atomic file writes** ([#16980](https://github.com/NousResearch/hermes-agent/pull/16980))
- **Probe `/dev/tty` by opening it, not bare existence** ([#17024](https://github.com/NousResearch/hermes-agent/pull/17024))

---

## 🐛 Notable Bug Fixes

This window includes 360 `fix:` PRs. Selected highlights from across the stack:

- **Background review fork inherits parent's live runtime** — provider/model/creds now propagate correctly ([#16099](https://github.com/NousResearch/hermes-agent/pull/16099))
- **Hindsight configurable `HINDSIGHT_TIMEOUT` env var** ([#15077](https://github.com/NousResearch/hermes-agent/pull/15077))
- **Tools: normalize numeric entries + clear stale `no_mcp` in `_save_platform_tools`** ([#15607](https://github.com/NousResearch/hermes-agent/pull/15607))
- **MCP: rewrite `definitions` refs to `$defs` in input schemas** — closes provider-side 400s
- **Azure content filter compatibility** — renamed `[SYSTEM:` markers so Azure's content filter stops flagging them ([#16114](https://github.com/NousResearch/hermes-agent/pull/16114))
- **Vision cache uses HERMES_HOME instead of cwd** ([#17719](https://github.com/NousResearch/hermes-agent/pull/17719))
- **FTS5 search** — tool_name + tool_calls indexing with repair + migration ([#16914](https://github.com/NousResearch/hermes-agent/pull/16914))
- **Streaming reasoning persists on assistant turns** ([#16892](https://github.com/NousResearch/hermes-agent/pull/16892))
- **execute_code concurrent RPC serialization** (#17770) ([#17894](https://github.com/NousResearch/hermes-agent/pull/17894), [#17902](https://github.com/NousResearch/hermes-agent/pull/17902))
- **Background reviewer scoped to memory + skills toolsets** — no more accidental web/shell escapes ([#16569](https://github.com/NousResearch/hermes-agent/pull/16569))
- **Compression recovery** — retry on main before giving up; notify user when aux fails ([#16774](https://github.com/NousResearch/hermes-agent/pull/16774), [#16775](https://github.com/NousResearch/hermes-agent/pull/16775))
- **`croniter` promoted to a core dependency** ([#17577](https://github.com/NousResearch/hermes-agent/pull/17577))
- **Discord tool `limit` parameter coerced to int** before `min()` call ([#16319](https://github.com/NousResearch/hermes-agent/pull/16319))
- **Yuanbao messaging platform entrance fix** ([#16880](https://github.com/NousResearch/hermes-agent/pull/16880))
- **ACP advertise and forward image prompts** ([#18030](https://github.com/NousResearch/hermes-agent/pull/18030))
- **DeepSeek / Kimi reasoning content isolation** across cross-provider histories (@Zjianru) ([#15749](https://github.com/NousResearch/hermes-agent/pull/15749), [#15762](https://github.com/NousResearch/hermes-agent/pull/15762))
- **Preserve reasoning_content replay on DeepSeek v4 + Kimi/Moonshot thinking** ([#18045](https://github.com/NousResearch/hermes-agent/pull/18045))

The vast majority of the 360 fixes landed in the streaming/compression/tool-calling paths across all providers — DeepSeek, Kimi, Moonshot, GLM, Qwen, MiniMax, Gemini, Anthropic, OpenAI — alongside TUI polish (resize, scroll, sticky-prompt) and gateway platform-specific edge cases.

---

## 🧪 Testing & CI

- Hermetic test parity (`scripts/run_tests.sh`) held across this window
- **Microsoft Teams xdist collision guard** — prevents worker collisions when Teams platform tests run in parallel ([#17828](https://github.com/NousResearch/hermes-agent/pull/17828))
- Chore: remove unused imports and dead locals (ruff F401, F841) ([#17010](https://github.com/NousResearch/hermes-agent/pull/17010))

---

## 📚 Documentation

- **Curator feature page** added to docs site ([#17563](https://github.com/NousResearch/hermes-agent/pull/17563))
- **Document pin also blocking `skill_manage` writes** ([#17578](https://github.com/NousResearch/hermes-agent/pull/17578))
- **Direct-URL skill install documented** across features, reference, guide, and `hermes-agent` skill ([#16355](https://github.com/NousResearch/hermes-agent/pull/16355))
- **Hooks tutorial — build a BOOT.md startup checklist** (replaces the removed built-in hook) ([#17202](https://github.com/NousResearch/hermes-agent/pull/17202))
- **ComfyUI docs: ask local vs cloud FIRST before hardware check** ([#17612](https://github.com/NousResearch/hermes-agent/pull/17612))
- **Obliteratus skill: link YouTube video guide in SKILL.md** ([#15808](https://github.com/NousResearch/hermes-agent/pull/15808))
- Per-skill docs pages generated for bundled + optional skills; ASCII art code blocks auto-wrapped ([#14929](https://github.com/NousResearch/hermes-agent/pull/14929), [#16497](https://github.com/NousResearch/hermes-agent/pull/16497))

---

## ⚖️ Removed / Reverted

- **Kanban multi-profile collaboration board** — landed in #16081, reverted in ([#16098](https://github.com/NousResearch/hermes-agent/pull/16098)) while the design is reworked
- **computer-use cua-driver** — 3 preparatory PRs landed then were reverted in ([#16927](https://github.com/NousResearch/hermes-agent/pull/16927))
- **BOOT.md built-in hook** removed ([#17093](https://github.com/NousResearch/hermes-agent/pull/17093)); the hooks tutorial ([#17202](https://github.com/NousResearch/hermes-agent/pull/17202)) shows how to build the same workflow yourself with a shell hook
- **`/provider` + `/plan` slash commands dropped** ([#15047](https://github.com/NousResearch/hermes-agent/pull/15047))
- **`flush_memories` removed entirely** ([#15696](https://github.com/NousResearch/hermes-agent/pull/15696))

---

## 👥 Contributors

### Core
- **@teknium1** (Teknium)

### Top Community Contributors (by merged PR count since v0.11.0)

- **@OutThisLife** (Brooklyn) — 52 PRs · TUI — light-terminal detection + pluggable busy styles + auto-resume + session-delete from /resume + mouse-wheel scrolling + xterm.js dashboard Chat tab + cold-start cut + accordion polish
- **@kshitijk4poor** — 12 PRs · LM Studio first-class provider (salvage), Vercel Sandbox backend, GMI Cloud salvage, bundled-by-default touchdesigner-mcp, many tool-call / reasoning fixes
- **@helix4u** — 10 PRs · MCP schema robustness, assorted stability fixes
- **@alt-glitch** — 8 PRs · trigram FTS5 CJK search, declarative Nix plugin install, matrix/feishu hints and fixes
- **@ethernet8023** — 4 PRs
- **@austinpickett** — 4 PRs · LaTeX rendering in TUI, dashboard layout refresh
- **@benbarclay** — 3 PRs · Docker run-as-host-user so bind mounts don't get root-owned
- **@vominh1919** — 2 PRs
- **@stephenschoettler** — 2 PRs
- **@kevin-ho** — ConPTY mouse-injection fix (#15488)
- **@Zjianru** — cross-provider reasoning_content isolation + DeepSeek/Kimi empty-reasoning injection (#15749, #15762)
- **@web3blind** — Telegram chat allowlists for groups and forums (#15027)
- **@SHL0MS** — 9 new TouchDesigner-MCP reference docs (#16768)
- **@0xDevNinja** — curator `restore_skill` nested-archive fix (#17951)
- **@y0shua1ee** — curator `use` activity fix (#17953)

### Also contributing
Salvaged or co-authored work from **@isaachuangGMICLOUD** (GMI Cloud), earlier upstream PRs from the original author of each salvage chain, and a long tail of one-shot fixes, documentation nudges, and skill contributions from the community.

### All Contributors (alphabetical, excluding @teknium1)

@0xbyt4, @0xharryriddle, @0xDevNinja, @0z1-ghb, @5park1e, @A-FdL-Prog, @aj-nt, @akhater, @alblez, @alexg0bot,
@alexzhu0, @AllardQuek, @alt-glitch, @amanning3390, @amanuel2, @AndreKurait, @andrewhosf, @Andy283, @andyylin,
@angel12, @AntAISecurityLab, @ash, @austinpickett, @badgerbees, @BadTechBandit, @Bartok9, @beenherebefore,
@beesrsj2500, @BeliefanX, @benbarclay, @benjaminsehl, @BlackishGreen33, @bloodcarter, @BlueBirdBack,
@briandevans, @brooklynnicholson, @bsgdigital, @buray, @bwjoke, @camaragon, @cdanis, @cgarwood82,
@charles-brooks, @chen1749144759, @chengoak, @ching-kaching, @Contentment003111, @crayfish-ai, @CruxExperts,
@cyclingwithelephants, @dandaka, @danklynn, @ddupont808, @dhabibi, @difujia, @dimitrovi, @dlkakbs,
@dontcallmejames, @EKKOLearnAI, @emozilla, @ericnicolaides, @Erosika, @ethernet8023, @exiao, @Feranmi10,
@flobo3, @foxion37, @georgeglessner, @georgex8001, @ghostmfr, @H-Ali13381, @HangGlidersRule, @harryplusplus,
@haru398801, @heathley, @hejuntt1014, @hekaru-agent, @helix4u, @Heltman, @HenkDz, @heyitsaamir, @hharry11,
@hhhonzik, @hhuang91, @HiddenPuppy, @htsh, @iamagenius00, @in-liberty420, @innocarpe, @irispillars, @iRonin,
@isaachuangGMICLOUD, @Ito-69, @j3ffffff, @jackjin1997, @jakubkrcmar, @Jason2031, @JayGwod, @jerome-benoit,
@johnncenae, @Kailigithub, @keiravoss94, @kevin-ho, @knockyai, @konsisumer, @kshitijk4poor, @kunlabs, @l0hde,
@Leihb, @leoneparise, @LeonSGP43, @liizfq, @liuhao1024, @loongzhao, @lsdsjy, @luyao618, @ma-pony, @Magaav,
@MagicRay1217, @math0r-be, @MattMaximo, @maxims-oss, @MaxyMoos, @maymuneth, @mcndjxlefnd, @memosr,
@MestreY0d4-Uninter, @mewwts, @Mirac1eSky, @MorAlekss, @mrhwick, @mrunmayee17, @mssteuer, @Nanako0129,
@nazirulhafiy, @Nerijusas, @Nicecsh, @nicoloboschi, @nightq, @ningfangbin, @octo-patch, @Octopus,
@OutThisLife, @Paperclip, @pein892, @perlowja, @prasadus92, @qike-ms, @qiyin-code, @Readon, @ReginaldasR,
@revaraver, @rfilgueiras, @rmoen, @romanornr, @rugvedS07, @rylena, @samrusani, @Sanjays2402, @sasha-id,
@Satoshi-agi, @scheidti, @scotttrinh, @season179, @SeeYangZhi, @sgaofen, @shamork, @shannonsands, @SHL0MS,
@simbam99, @Societus, @socrates1024, @Sonoyunchu, @sprmn24, @stephenschoettler, @tangyuanjc, @TechPrototyper,
@tekgnosis-net, @ThomassJonax, @tmimmanuel, @tochukwuada, @Tosko4, @Tranquil-Flow, @twozle, @txbxxx,
@UgwujaGeorge, @Versun, @vlwkaos, @voidborne-d, @vominh1919, @Wang-tianhao, @Wangshengyang2004, @web3blind,
@westers, @Wysie, @xandersbell, @xiahu88988, @XieNBi, @xinbenlv, @xnbi, @y0shua1ee, @yatesjalex, @yes999zc,
@yeyitech, @Yoimex, @YueLich, @Yukipukii1, @zhiyanliu, @zicochaos, @Zjianru, @zkl2333, @zons-zhaozhy,
@ztexydt-cqh.

Also: @Siddharth Balyan, @YuShu.

---

**Full Changelog**: [v2026.4.23...v2026.4.30](https://github.com/NousResearch/hermes-agent/compare/v2026.4.23...v2026.4.30)

---

## Hermes Agent v0.11.0 (2026.4.23)

- Tag: `v2026.4.23`
- Published: 2026-04-23T22:32:13Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.23
- Prerelease: False

# Hermes Agent v0.11.0 (v2026.4.23)

**Release Date:** April 23, 2026
**Since v0.9.0:** 1,556 commits · 761 merged PRs · 1,314 files changed · 224,174 insertions · 29 community contributors (290 including co-authors)

> The Interface release — a full React/Ink rewrite of the interactive CLI, a pluggable transport architecture underneath every provider, native AWS Bedrock support, five new inference paths, a 17th messaging platform (QQBot), a dramatically expanded plugin surface, and GPT-5.5 via Codex OAuth.

This release also folds in all the highlights deferred from v0.10.0 (which shipped only the Nous Tool Gateway) — so it covers roughly two weeks of work across the whole stack.

---

## ✨ Highlights

- **New Ink-based TUI** — `hermes --tui` is now a full React/Ink rewrite of the interactive CLI, with a Python JSON-RPC backend (`tui_gateway`). Sticky composer, live streaming with OSC-52 clipboard support, stable picker keys, status bar with per-turn stopwatch and git branch, `/clear` confirm, light-theme preset, and a subagent spawn observability overlay. ~310 commits to `ui-tui/` + `tui_gateway/`. (@OutThisLife + Teknium)

- **Transport ABC + Native AWS Bedrock** — Format conversion and HTTP transport were extracted from `run_agent.py` into a pluggable `agent/transports/` layer. `AnthropicTransport`, `ChatCompletionsTransport`, `ResponsesApiTransport`, and `BedrockTransport` each own their own format conversion and API shape. Native AWS Bedrock support via the Converse API ships on top of the new abstraction. ([#10549](https://github.com/NousResearch/hermes-agent/pull/10549), [#13347](https://github.com/NousResearch/hermes-agent/pull/13347), [#13366](https://github.com/NousResearch/hermes-agent/pull/13366), [#13430](https://github.com/NousResearch/hermes-agent/pull/13430), [#13805](https://github.com/NousResearch/hermes-agent/pull/13805), [#13814](https://github.com/NousResearch/hermes-agent/pull/13814) — @kshitijk4poor + Teknium)

- **Five new inference paths** — Native NVIDIA NIM ([#11774](https://github.com/NousResearch/hermes-agent/pull/11774)), Arcee AI ([#9276](https://github.com/NousResearch/hermes-agent/pull/9276)), Step Plan ([#13893](https://github.com/NousResearch/hermes-agent/pull/13893)), Google Gemini CLI OAuth ([#11270](https://github.com/NousResearch/hermes-agent/pull/11270)), and Vercel ai-gateway with pricing + dynamic discovery ([#13223](https://github.com/NousResearch/hermes-agent/pull/13223) — @jerilynzheng). Plus Gemini routed through the native AI Studio API for better performance ([#12674](https://github.com/NousResearch/hermes-agent/pull/12674)).

- **GPT-5.5 over Codex OAuth** — OpenAI's new GPT-5.5 reasoning model is now available through your ChatGPT Codex OAuth, with live model discovery wired into the model picker so new OpenAI releases show up without catalog updates. ([#14720](https://github.com/NousResearch/hermes-agent/pull/14720))

- **QQBot — 17th supported platform** — Native QQBot adapter via QQ Official API v2, with QR scan-to-configure setup wizard, streaming cursor, emoji reactions, and DM/group policy gating that matches WeCom/Weixin parity. ([#9364](https://github.com/NousResearch/hermes-agent/pull/9364), [#11831](https://github.com/NousResearch/hermes-agent/pull/11831))

- **Plugin surface expanded** — Plugins can now register slash commands (`register_command`), dispatch tools directly (`dispatch_tool`), block tool execution from hooks (`pre_tool_call` can veto), rewrite tool results (`transform_tool_result`), transform terminal output (`transform_terminal_output`), ship image_gen backends, and add custom dashboard tabs. The bundled disk-cleanup plugin is opt-in by default as a reference implementation. ([#9377](https://github.com/NousResearch/hermes-agent/pull/9377), [#10626](https://github.com/NousResearch/hermes-agent/pull/10626), [#10763](https://github.com/NousResearch/hermes-agent/pull/10763), [#10951](https://github.com/NousResearch/hermes-agent/pull/10951), [#12929](https://github.com/NousResearch/hermes-agent/pull/12929), [#12944](https://github.com/NousResearch/hermes-agent/pull/12944), [#12972](https://github.com/NousResearch/hermes-agent/pull/12972), [#13799](https://github.com/NousResearch/hermes-agent/pull/13799), [#14175](https://github.com/NousResearch/hermes-agent/pull/14175))

- **`/steer` — mid-run agent nudges** — `/steer <prompt>` injects a note that the running agent sees after its next tool call, without interrupting the turn or breaking prompt cache. For when you want to course-correct an agent in-flight. ([#12116](https://github.com/NousResearch/hermes-agent/pull/12116))

- **Shell hooks** — Wire any shell script as a Hermes lifecycle hook (pre_tool_call, post_tool_call, on_session_start, etc.) without writing a Python plugin. ([#13296](https://github.com/NousResearch/hermes-agent/pull/13296))

- **Webhook direct-delivery mode** — Webhook subscriptions can now forward payloads straight to a platform chat without going through the agent — zero-LLM push notifications for alerting, uptime checks, and event streams. ([#12473](https://github.com/NousResearch/hermes-agent/pull/12473))

- **Smarter delegation** — Subagents now have an explicit `orchestrator` role that can spawn their own workers, with configurable `max_spawn_depth` (default flat). Concurrent sibling subagents share filesystem state through a file-coordination layer so they don't clobber each other's edits. ([#13691](https://github.com/NousResearch/hermes-agent/pull/13691), [#13718](https://github.com/NousResearch/hermes-agent/pull/13718))

- **Auxiliary models — configurable UI + main-model-first** — `hermes model` has a dedicated "Configure auxiliary models" screen for per-task overrides (compression, vision, session_search, title_generation). `auto` routing now defaults to the main model for side tasks across all users (previously aggregator users were silently routed to a cheap provider-side default). ([#11891](https://github.com/NousResearch/hermes-agent/pull/11891), [#11900](https://github.com/NousResearch/hermes-agent/pull/11900))

- **Dashboard plugin system + live theme switching** — The web dashboard is now extensible. Third-party plugins can add custom tabs, widgets, and views without forking. Paired with a live-switching theme system — themes now control colors, fonts, layout, and density — so users can hot-swap the dashboard look without a reload. Same theming discipline the CLI has, now on the web. ([#10951](https://github.com/NousResearch/hermes-agent/pull/10951), [#10687](https://github.com/NousResearch/hermes-agent/pull/10687), [#14725](https://github.com/NousResearch/hermes-agent/pull/14725))

- **Dashboard polish** — i18n (English + Chinese), react-router sidebar layout, mobile-responsive, Vercel deployment, real per-session API call tracking, and one-click update + gateway restart buttons. ([#9228](https://github.com/NousResearch/hermes-agent/pull/9228), [#9370](https://github.com/NousResearch/hermes-agent/pull/9370), [#9453](https://github.com/NousResearch/hermes-agent/pull/9453), [#10686](https://github.com/NousResearch/hermes-agent/pull/10686), [#13526](https://github.com/NousResearch/hermes-agent/pull/13526), [#14004](https://github.com/NousResearch/hermes-agent/pull/14004) — @austinpickett + @DeployFaith + Teknium)

---

## 🏗️ Core Agent & Architecture

### Transport Layer (NEW)
- **Transport ABC** abstracts format conversion and HTTP transport from `run_agent.py` into `agent/transports/` ([#13347](https://github.com/NousResearch/hermes-agent/pull/13347))
- **AnthropicTransport** — Anthropic Messages API path ([#13366](https://github.com/NousResearch/hermes-agent/pull/13366), @kshitijk4poor)
- **ChatCompletionsTransport** — default path for OpenAI-compatible providers ([#13805](https://github.com/NousResearch/hermes-agent/pull/13805))
- **ResponsesApiTransport** — OpenAI Responses API + Codex build_kwargs wiring ([#13430](https://github.com/NousResearch/hermes-agent/pull/13430), @kshitijk4poor)
- **BedrockTransport** — AWS Bedrock Converse API transport ([#13814](https://github.com/NousResearch/hermes-agent/pull/13814))

### Provider & Model Support
- **Native AWS Bedrock provider** via Converse API ([#10549](https://github.com/NousResearch/hermes-agent/pull/10549))
- **NVIDIA NIM native provider** (salvage of #11703) ([#11774](https://github.com/NousResearch/hermes-agent/pull/11774))
- **Arcee AI direct provider** ([#9276](https://github.com/NousResearch/hermes-agent/pull/9276))
- **Step Plan provider** (salvage #6005) ([#13893](https://github.com/NousResearch/hermes-agent/pull/13893), @kshitijk4poor)
- **Google Gemini CLI OAuth** inference provider ([#11270](https://github.com/NousResearch/hermes-agent/pull/11270))
- **Vercel ai-gateway** with pricing, attribution, and dynamic discovery ([#13223](https://github.com/NousResearch/hermes-agent/pull/13223), @jerilynzheng)
- **GPT-5.5 over Codex OAuth** with live model discovery in the picker ([#14720](https://github.com/NousResearch/hermes-agent/pull/14720))
- **Gemini routed through native AI Studio API** ([#12674](https://github.com/NousResearch/hermes-agent/pull/12674))
- **xAI Grok upgraded to Responses API** ([#10783](https://github.com/NousResearch/hermes-agent/pull/10783))
- **Ollama improvements** — Cloud provider support, GLM continuation, `think=false` control, surrogate sanitization, `/v1` hint ([#10782](https://github.com/NousResearch/hermes-agent/pull/10782))
- **Kimi K2.6** across OpenRouter, Nous Portal, native Kimi, and HuggingFace ([#13148](https://github.com/NousResearch/hermes-agent/pull/13148), [#13152](https://github.com/NousResearch/hermes-agent/pull/13152), [#13169](https://github.com/NousResearch/hermes-agent/pull/13169))
- **Kimi K2.5** promoted to first position in all model suggestion lists ([#11745](https://github.com/NousResearch/hermes-agent/pull/11745), @kshitijk4poor)
- **Xiaomi MiMo v2.5-pro + v2.5** on OpenRouter, Nous Portal, and native ([#14184](https://github.com/NousResearch/hermes-agent/pull/14184), [#14635](https://github.com/NousResearch/hermes-agent/pull/14635), @kshitijk4poor)
- **GLM-5V-Turbo** for coding plan ([#9907](https://github.com/NousResearch/hermes-agent/pull/9907))
- **Claude Opus 4.7** in Nous Portal catalog ([#11398](https://github.com/NousResearch/hermes-agent/pull/11398))
- **OpenRouter elephant-alpha** in curated lists ([#9378](https://github.com/NousResearch/hermes-agent/pull/9378))
- **OpenCode-Go** — Kimi K2.6 and Qwen3.5/3.6 Plus in curated catalog ([#13429](https://github.com/NousResearch/hermes-agent/pull/13429))
- **minimax/minimax-m2.5:free** in OpenRouter catalog ([#13836](https://github.com/NousResearch/hermes-agent/pull/13836))
- **`/model` merges models.dev entries** for lesser-loved providers ([#14221](https://github.com/NousResearch/hermes-agent/pull/14221))
- **Per-provider + per-model `request_timeout_seconds`** config ([#12652](https://github.com/NousResearch/hermes-agent/pull/12652))
- **Configurable API retry count** via `agent.api_max_retries` ([#14730](https://github.com/NousResearch/hermes-agent/pull/14730))
- **ctx_size context length key** for Lemonade server (salvage #8536) ([#14215](https://github.com/NousResearch/hermes-agent/pull/14215))
- **Custom provider display name prompt** ([#9420](https://github.com/NousResearch/hermes-agent/pull/9420))
- **Recommendation badges** on tool provider selection ([#9929](https://github.com/NousResearch/hermes-agent/pull/9929))
- Fix: correct GPT-5 family context lengths in fallback defaults ([#9309](https://github.com/NousResearch/hermes-agent/pull/9309))
- Fix: clamp `minimal` reasoning effort to `low` on Responses API ([#9429](https://github.com/NousResearch/hermes-agent/pull/9429))
- Fix: strip reasoning item IDs from Responses API input when `store=False` ([#10217](https://github.com/NousResearch/hermes-agent/pull/10217))
- Fix: OpenViking correct account default + commit session on `/new` and compress ([#10463](https://github.com/NousResearch/hermes-agent/pull/10463))
- Fix: Kimi `/coding` thinking block survival + empty reasoning_content + block ordering (multiple PRs)
- Fix: don't send Anthropic thinking to api.kimi.com/coding ([#13826](https://github.com/NousResearch/hermes-agent/pull/13826))
- Fix: send `max_tokens`, `reasoning_effort`, and `thinking` for Kimi/Moonshot
- Fix: stream reasoning content through OpenAI-compatible providers that emit it

### Agent Loop & Conversation
- **`/steer <prompt>`** — mid-run agent nudges after next tool call ([#12116](https://github.com/NousResearch/hermes-agent/pull/12116))
- **Orchestrator role + configurable spawn depth** for `delegate_task` (default flat) ([#13691](https://github.com/NousResearch/hermes-agent/pull/13691))
- **Cross-agent file state coordination** for concurrent subagents ([#13718](https://github.com/NousResearch/hermes-agent/pull/13718))
- **Compressor smart collapse, dedup, anti-thrashing**, template upgrade, hardening ([#10088](https://github.com/NousResearch/hermes-agent/pull/10088))
- **Compression summaries respect the conversation's language** ([#12556](https://github.com/NousResearch/hermes-agent/pull/12556))
- **Compression model falls back to main model** on permanent 503/404 ([#10093](https://github.com/NousResearch/hermes-agent/pull/10093))
- **Auto-continue interrupted agent work** after gateway restart ([#9934](https://github.com/NousResearch/hermes-agent/pull/9934))
- **Activity heartbeats** prevent false gateway inactivity timeouts ([#10501](https://github.com/NousResearch/hermes-agent/pull/10501))
- **Auxiliary models UI** — dedicated screen for per-task overrides ([#11891](https://github.com/NousResearch/hermes-agent/pull/11891))
- **Auxiliary auto routing defaults to main model** for all users ([#11900](https://github.com/NousResearch/hermes-agent/pull/11900))
- **PLATFORM_HINTS for Matrix, Mattermost, Feishu** ([#14428](https://github.com/NousResearch/hermes-agent/pull/14428), @alt-glitch)
- Fix: reset retry counters after compression; stop poisoning conversation history ([#10055](https://github.com/NousResearch/hermes-agent/pull/10055))
- Fix: break compression-exhaustion infinite loop and auto-reset session ([#10063](https://github.com/NousResearch/hermes-agent/pull/10063))
- Fix: stale agent timeout, uv venv detection, empty response after tools ([#10065](https://github.com/NousResearch/hermes-agent/pull/10065))
- Fix: prevent premature loop exit when weak models return empty after substantive tool calls ([#10472](https://github.com/NousResearch/hermes-agent/pull/10472))
- Fix: preserve pre-start terminal interrupts ([#10504](https://github.com/NousResearch/hermes-agent/pull/10504))
- Fix: improve interrupt responsiveness during concurrent tool execution ([#10935](https://github.com/NousResearch/hermes-agent/pull/10935))
- Fix: word-wrap spinner, interruptable agent join, and delegate_task interrupt ([#10940](https://github.com/NousResearch/hermes-agent/pull/10940))
- Fix: `/stop` no longer resets the session ([#9224](https://github.com/NousResearch/hermes-agent/pull/9224))
- Fix: honor interrupts during MCP tool waits ([#9382](https://github.com/NousResearch/hermes-agent/pull/9382), @helix4u)
- Fix: break stuck session resume loops after repeated restarts ([#9941](https://github.com/NousResearch/hermes-agent/pull/9941))
- Fix: empty response nudge crash + placeholder leak to cron targets ([#11021](https://github.com/NousResearch/hermes-agent/pull/11021))
- Fix: streaming cursor sanitization to prevent message truncation (multiple PRs)
- Fix: resolve `context_length` for plugin context engines ([#9238](https://github.com/NousResearch/hermes-agent/pull/9238))

### Session & Memory
- **Auto-prune old sessions + VACUUM state.db** at startup ([#13861](https://github.com/NousResearch/hermes-agent/pull/13861))
- **Honcho overhaul** — context injection, 5-tool surface, cost safety, session isolation ([#10619](https://github.com/NousResearch/hermes-agent/pull/10619))
- **Hindsight richer session-scoped retain metadata** (salvage of #6290) ([#13987](https://github.com/NousResearch/hermes-agent/pull/13987))
- Fix: deduplicate memory provider tools to prevent 400 on strict providers ([#10511](https://github.com/NousResearch/hermes-agent/pull/10511))
- Fix: discover user-installed memory providers from `$HERMES_HOME/plugins/` ([#10529](https://github.com/NousResearch/hermes-agent/pull/10529))
- Fix: add `on_memory_write` bridge to sequential tool execution path ([#10507](https://github.com/NousResearch/hermes-agent/pull/10507))
- Fix: preserve `session_id` across `previous_response_id` chains in `/v1/responses` ([#10059](https://github.com/NousResearch/hermes-agent/pull/10059))

---

## 🖥️ New Ink-based TUI

A full React/Ink rewrite of the interactive CLI — invoked via `hermes --tui` or `HERMES_TUI=1`. Shipped across ~310 commits to `ui-tui/` and `tui_gateway/`.

### TUI Foundations
- New TUI based on Ink + Python JSON-RPC backend
- Prettier + ESLint + vitest tooling for `ui-tui/`
- Entry split between `src/entry.tsx` (TTY gate) and `src/app.tsx` (state machine)
- Persistent `_SlashWorker` subprocess for slash command dispatch

### UX & Features
- **Stable picker keys, /clear confirm, light-theme preset** ([#12312](https://github.com/NousResearch/hermes-agent/pull/12312), @OutThisLife)
- **Git branch in status bar** cwd label ([#12305](https://github.com/NousResearch/hermes-agent/pull/12305), @OutThisLife)
- **Per-turn elapsed stopwatch in FaceTicker + done-in sys line** ([#13105](https://github.com/NousResearch/hermes-agent/pull/13105), @OutThisLife)
- **Subagent spawn observability overlay** ([#14045](https://github.com/NousResearch/hermes-agent/pull/14045), @OutThisLife)
- **Per-prompt elapsed stopwatch in status bar** ([#12948](https://github.com/NousResearch/hermes-agent/pull/12948))
- Sticky composer that freezes during scroll
- OSC-52 clipboard support for copy across SSH sessions
- Virtualized history rendering for performance
- Slash command autocomplete via `complete.slash` RPC
- Path autocomplete via `complete.path` RPC
- Dozens of resize/ghosting/sticky-prompt fixes landed through the week

### Structural Refactors
- Decomposed `app.tsx` into `app/event-handler`, `app/slash-handler`, `app/stores`, `app/hooks` ([#14640](https://github.com/NousResearch/hermes-agent/pull/14640) and surrounding)
- Component split: `branding.tsx`, `markdown.tsx`, `prompts.tsx`, `sessionPicker.tsx`, `messageLine.tsx`, `thinking.tsx`, `maskedPrompt.tsx`
- Hook split: `useCompletion`, `useInputHistory`, `useQueue`, `useVirtualHistory`

---

## 📱 Messaging Platforms (Gateway)

### New Platforms
- **QQBot (17th platform)** — QQ Official API v2 adapter with QR setup, streaming, package split ([#9364](https://github.com/NousResearch/hermes-agent/pull/9364), [#11831](https://github.com/NousResearch/hermes-agent/pull/11831))

### Telegram
- **Dedicated `TELEGRAM_PROXY` env var + config.yaml proxy support** (closes #9414, #6530, #9074, #7786) ([#10681](https://github.com/NousResearch/hermes-agent/pull/10681))
- **`ignored_threads` config** for Telegram groups ([#9530](https://github.com/NousResearch/hermes-agent/pull/9530))
- **Config option to disable link previews** (closes #8728) ([#10610](https://github.com/NousResearch/hermes-agent/pull/10610))
- **Auto-wrap markdown tables** in code blocks ([#11794](https://github.com/NousResearch/hermes-agent/pull/11794))
- Fix: prevent duplicate replies when stream task is cancelled ([#9319](https://github.com/NousResearch/hermes-agent/pull/9319))
- Fix: prevent streaming cursor (▉) from appearing as standalone messages ([#9538](https://github.com/NousResearch/hermes-agent/pull/9538))
- Fix: retry transient tool sends + cold-boot budget ([#10947](https://github.com/NousResearch/hermes-agent/pull/10947))
- Fix: Markdown special char escaping in `send_exec_approval`
- Fix: parentheses in URLs during MarkdownV2 link conversion
- Fix: Unicode dash normalization in model switch (closes iOS smart-punctuation issue)
- Many platform hint / streaming / session-key fixes

### Discord
- **Forum channel support** (salvage of #10145 + media + polish) ([#11920](https://github.com/NousResearch/hermes-agent/pull/11920))
- **`DISCORD_ALLOWED_ROLES`** for role-based access control ([#11608](https://github.com/NousResearch/hermes-agent/pull/11608))
- **Config option to disable slash commands** (salvage #13130) ([#14315](https://github.com/NousResearch/hermes-agent/pull/14315))
- **Native `send_animation`** for inline GIF playback ([#10283](https://github.com/NousResearch/hermes-agent/pull/10283))
- **`send_message` Discord media attachments** ([#10246](https://github.com/NousResearch/hermes-agent/pull/10246))
- **`/skill` command group** with category subcommands ([#9909](https://github.com/NousResearch/hermes-agent/pull/9909))
- **Extract reply text from message references** ([#9781](https://github.com/NousResearch/hermes-agent/pull/9781))

### Feishu
- **Intelligent reply on document comments** with 3-tier access control ([#11898](https://github.com/NousResearch/hermes-agent/pull/11898))
- **Show processing state via reactions** on user messages ([#12927](https://github.com/NousResearch/hermes-agent/pull/12927))
- **Preserve @mention context for agent consumption** (salvage #13874) ([#14167](https://github.com/NousResearch/hermes-agent/pull/14167))

### DingTalk
- **`require_mention` + `allowed_users` gating** (parity with Slack/Telegram/Discord) ([#11564](https://github.com/NousResearch/hermes-agent/pull/11564))
- **QR-code device-flow authorization** for setup wizard ([#11574](https://github.com/NousResearch/hermes-agent/pull/11574))
- **AI Cards streaming, emoji reactions, and media handling** (salvage of #10985) ([#11910](https://github.com/NousResearch/hermes-agent/pull/11910))

### WhatsApp
- **`send_voice`** — native audio message delivery ([#13002](https://github.com/NousResearch/hermes-agent/pull/13002))
- **`dm_policy` and `group_policy`** parity with WeCom/Weixin/QQ adapters ([#13151](https://github.com/NousResearch/hermes-agent/pull/13151))

### WeCom / Weixin
- **WeCom QR-scan bot creation + interactive setup wizard** (salvage #13923) ([#13961](https://github.com/NousResearch/hermes-agent/pull/13961))

### Signal
- **Media delivery support** via `send_message` ([#13178](https://github.com/NousResearch/hermes-agent/pull/13178))

### Slack
- **Per-thread sessions for DMs by default** ([#10987](https://github.com/NousResearch/hermes-agent/pull/10987))

### BlueBubbles (iMessage)
- Group chat session separation, webhook registration & auth fixes ([#9806](https://github.com/NousResearch/hermes-agent/pull/9806))

### Gateway Core
- **Gateway proxy mode** — forward messages to a remote API server ([#9787](https://github.com/NousResearch/hermes-agent/pull/9787))
- **Per-channel ephemeral prompts** (Discord, Telegram, Slack, Mattermost) ([#10564](https://github.com/NousResearch/hermes-agent/pull/10564))
- **Surface plugin slash commands** natively on all platforms + decision-capable command hook ([#14175](https://github.com/NousResearch/hermes-agent/pull/14175))
- **Support document/archive extensions in MEDIA: tag extraction** (salvage #8255) ([#14307](https://github.com/NousResearch/hermes-agent/pull/14307))
- **Recognize `.pdf` in MEDIA: tag extraction** ([#13683](https://github.com/NousResearch/hermes-agent/pull/13683))
- **`--all` flag for `gateway start` and `restart`** ([#10043](https://github.com/NousResearch/hermes-agent/pull/10043))
- **Notify active sessions on gateway shutdown** + update health check ([#9850](https://github.com/NousResearch/hermes-agent/pull/9850))
- **Block agent from self-destructing the gateway** via terminal (closes #6666) ([#9895](https://github.com/NousResearch/hermes-agent/pull/9895))
- Fix: suppress duplicate replies on interrupt and streaming flood control ([#10235](https://github.com/NousResearch/hermes-agent/pull/10235))
- Fix: close temporary agents after one-off tasks ([#11028](https://github.com/NousResearch/hermes-agent/pull/11028), @kshitijk4poor)
- Fix: busy-session ack when user messages during active agent run ([#10068](https://github.com/NousResearch/hermes-agent/pull/10068))
- Fix: route watch-pattern notifications to the originating session ([#10460](https://github.com/NousResearch/hermes-agent/pull/10460))
- Fix: preserve notify context in executor threads ([#10921](https://github.com/NousResearch/hermes-agent/pull/10921), @kshitijk4poor)
- Fix: avoid duplicate replies after interrupted long tasks ([#11018](https://github.com/NousResearch/hermes-agent/pull/11018))
- Fix: unlink stale PID + lock files on cleanup
- Fix: force-unlink stale PID file after `--replace` takeover

---

## 🔧 Tool System

### Plugin Surface (major expansion)
- **`register_command()`** — plugins can now add slash commands ([#10626](https://github.com/NousResearch/hermes-agent/pull/10626))
- **`dispatch_tool()`** — plugins can invoke tools from their code ([#10763](https://github.com/NousResearch/hermes-agent/pull/10763))
- **`pre_tool_call` blocking** — plugins can veto tool execution ([#9377](https://github.com/NousResearch/hermes-agent/pull/9377))
- **`transform_tool_result`** — plugins rewrite tool results generically ([#12972](https://github.com/NousResearch/hermes-agent/pull/12972))
- **`transform_terminal_output`** — plugins rewrite terminal tool output ([#12929](https://github.com/NousResearch/hermes-agent/pull/12929))
- **Namespaced skill registration** for plugin skill bundles ([#9786](https://github.com/NousResearch/hermes-agent/pull/9786))
- **Opt-in-by-default + bundled disk-cleanup plugin** (salvage #12212) ([#12944](https://github.com/NousResearch/hermes-agent/pull/12944))
- **Pluggable `image_gen` backends + OpenAI provider** ([#13799](https://github.com/NousResearch/hermes-agent/pull/13799))
- **`openai-codex` image_gen plugin** (gpt-image-2 via Codex OAuth) ([#14317](https://github.com/NousResearch/hermes-agent/pull/14317))
- **Shell hooks** — wire shell scripts as hook callbacks ([#13296](https://github.com/NousResearch/hermes-agent/pull/13296))

### Browser
- **`browser_cdp` raw DevTools Protocol passthrough** ([#12369](https://github.com/NousResearch/hermes-agent/pull/12369))
- Camofox hardening + connection stability across the window

### Execute Code
- **Project/strict execution modes** (default: project) ([#11971](https://github.com/NousResearch/hermes-agent/pull/11971))

### Image Generation
- **Multi-model FAL support** with picker in `hermes tools` ([#11265](https://github.com/NousResearch/hermes-agent/pull/11265))
- **Recraft V3 → V4 Pro, Nano Banana → Pro upgrades** ([#11406](https://github.com/NousResearch/hermes-agent/pull/11406))
- **GPT Image 2** in FAL catalog ([#13677](https://github.com/NousResearch/hermes-agent/pull/13677))
- **xAI image generation provider** (grok-imagine-image) ([#14765](https://github.com/NousResearch/hermes-agent/pull/14765))

### TTS / STT / Voice
- **Google Gemini TTS provider** ([#11229](https://github.com/NousResearch/hermes-agent/pull/11229))
- **xAI Grok STT provider** ([#14473](https://github.com/NousResearch/hermes-agent/pull/14473))
- **xAI TTS** (shipped with Responses API upgrade) ([#10783](https://github.com/NousResearch/hermes-agent/pull/10783))
- **KittenTTS local provider** (salvage of #2109) ([#13395](https://github.com/NousResearch/hermes-agent/pull/13395))
- **CLI record beep toggle** ([#13247](https://github.com/NousResearch/hermes-agent/pull/13247), @helix4u)

### Webhook / Cron
- **Webhook direct-delivery mode** — zero-LLM push notifications ([#12473](https://github.com/NousResearch/hermes-agent/pull/12473))
- **Cron `wakeAgent` gate** — scripts can skip the agent entirely ([#12373](https://github.com/NousResearch/hermes-agent/pull/12373))
- **Cron per-job `enabled_toolsets`** — cap token overhead + cost per job ([#14767](https://github.com/NousResearch/hermes-agent/pull/14767))

### Delegate
- **Orchestrator role** + configurable spawn depth (default flat) ([#13691](https://github.com/NousResearch/hermes-agent/pull/13691))
- **Cross-agent file state coordination** ([#13718](https://github.com/NousResearch/hermes-agent/pull/13718))

### File / Patch
- **`patch` — "did you mean?" feedback** when patch fails to match ([#13435](https://github.com/NousResearch/hermes-agent/pull/13435))

### API Server
- **Stream `/v1/responses` SSE tool events** (salvage #9779) ([#10049](https://github.com/NousResearch/hermes-agent/pull/10049))
- **Inline image inputs** on `/v1/chat/completions` and `/v1/responses` ([#12969](https://github.com/NousResearch/hermes-agent/pull/12969))

### Docker / Podman
- **Entry-level Podman support** — `find_docker()` + rootless entrypoint ([#10066](https://github.com/NousResearch/hermes-agent/pull/10066))
- **Add docker-cli to Docker image** (salvage #10096) ([#14232](https://github.com/NousResearch/hermes-agent/pull/14232))
- **File-sync back to host on teardown** (salvage of #8189 + hardening) ([#11291](https://github.com/NousResearch/hermes-agent/pull/11291))

### MCP
- 12 MCP improvements across the window (status, timeout handling, tool-call forwarding, etc.)

---

## 🧩 Skills Ecosystem

### Skill System
- **Namespaced skill registration** for plugin bundles ([#9786](https://github.com/NousResearch/hermes-agent/pull/9786))
- **`hermes skills reset`** to un-stick bundled skills ([#11468](https://github.com/NousResearch/hermes-agent/pull/11468))
- **Skills guard opt-in** — `config.skills.guard_agent_created` (default off) ([#14557](https://github.com/NousResearch/hermes-agent/pull/14557))
- **Bundled skill scripts runnable out of the box** ([#13384](https://github.com/NousResearch/hermes-agent/pull/13384))
- **`xitter` replaced with `xurl`** — the official X API CLI ([#12303](https://github.com/NousResearch/hermes-agent/pull/12303))
- **MiniMax-AI/cli as default skill tap** (salvage #7501) ([#14493](https://github.com/NousResearch/hermes-agent/pull/14493))
- **Fuzzy `@` file completions + mtime sorting** ([#9467](https://github.com/NousResearch/hermes-agent/pull/9467))

### New Skills
- **concept-diagrams** (salvage of #11045, @v1k22) ([#11363](https://github.com/NousResearch/hermes-agent/pull/11363))
- **architecture-diagram** (Cocoon AI port) ([#9906](https://github.com/NousResearch/hermes-agent/pull/9906))
- **pixel-art** with hardware palettes and video animation ([#12663](https://github.com/NousResearch/hermes-agent/pull/12663), [#12725](https://github.com/NousResearch/hermes-agent/pull/12725))
- **baoyu-comic** ([#13257](https://github.com/NousResearch/hermes-agent/pull/13257), @JimLiu)
- **baoyu-infographic** — 21 layouts × 21 styles (salvage #9901) ([#12254](https://github.com/NousResearch/hermes-agent/pull/12254))
- **page-agent** — embed Alibaba's in-page GUI agent in your webapp ([#13976](https://github.com/NousResearch/hermes-agent/pull/13976))
- **fitness-nutrition** optional skill + optional env var support ([#9355](https://github.com/NousResearch/hermes-agent/pull/9355))
- **drug-discovery** — ChEMBL, PubChem, OpenFDA, ADMET ([#9443](https://github.com/NousResearch/hermes-agent/pull/9443))
- **touchdesigner-mcp** (salvage of #10081) ([#12298](https://github.com/NousResearch/hermes-agent/pull/12298))
- **adversarial-ux-test** optional skill (salvage of #2494, @omnissiah-comelse) ([#13425](https://github.com/NousResearch/hermes-agent/pull/13425))
- **maps** — added `guest_house`, `camp_site`, and dual-key bakery lookup ([#13398](https://github.com/NousResearch/hermes-agent/pull/13398))
- **llm-wiki** — port provenance markers, source hashing, and quality signals ([#13700](https://github.com/NousResearch/hermes-agent/pull/13700))

---

## 📊 Web Dashboard

- **i18n (English + Chinese) language switcher** ([#9453](https://github.com/NousResearch/hermes-agent/pull/9453))
- **Live-switching theme system** ([#10687](https://github.com/NousResearch/hermes-agent/pull/10687))
- **Dashboard plugin system** — extend the web UI with custom tabs ([#10951](https://github.com/NousResearch/hermes-agent/pull/10951))
- **react-router, sidebar layout, sticky header, dropdown component** ([#9370](https://github.com/NousResearch/hermes-agent/pull/9370), @austinpickett)
- **Responsive for mobile** ([#9228](https://github.com/NousResearch/hermes-agent/pull/9228), @DeployFaith)
- **Vercel deployment** ([#10686](https://github.com/NousResearch/hermes-agent/pull/10686), [#11061](https://github.com/NousResearch/hermes-agent/pull/11061), @austinpickett)
- **Context window config support** ([#9357](https://github.com/NousResearch/hermes-agent/pull/9357))
- **HTTP health probe for cross-container gateway detection** ([#9894](https://github.com/NousResearch/hermes-agent/pull/9894))
- **Update + restart gateway buttons** ([#13526](https://github.com/NousResearch/hermes-agent/pull/13526), @austinpickett)
- **Real API call count per session** (salvages #10140) ([#14004](https://github.com/NousResearch/hermes-agent/pull/14004))

---

## 🖱️ CLI & User Experience

- **Dynamic shell completion for bash, zsh, and fish** ([#9785](https://github.com/NousResearch/hermes-agent/pull/9785))
- **Light-mode skins + skin-aware completion menus** ([#9461](https://github.com/NousResearch/hermes-agent/pull/9461))
- **Numbered keyboard shortcuts** on approval and clarify prompts ([#13416](https://github.com/NousResearch/hermes-agent/pull/13416))
- **Markdown stripping, compact multiline previews, external editor** ([#12934](https://github.com/NousResearch/hermes-agent/pull/12934))
- **`--ignore-user-config` and `--ignore-rules` flags** (port codex#18646) ([#14277](https://github.com/NousResearch/hermes-agent/pull/14277))
- **Account limits section in `/usage`** ([#13428](https://github.com/NousResearch/hermes-agent/pull/13428))
- **Doctor: Command Installation check** for `hermes` bin symlink ([#10112](https://github.com/NousResearch/hermes-agent/pull/10112))
- **ESC cancels secret/sudo prompts**, clearer skip messaging ([#9902](https://github.com/NousResearch/hermes-agent/pull/9902))
- Fix: agent-facing text uses `display_hermes_home()` instead of hardcoded `~/.hermes` ([#10285](https://github.com/NousResearch/hermes-agent/pull/10285))
- Fix: enforce `config.yaml` as sole CWD source + deprecate `.env` CWD vars + add `hermes memory reset` ([#11029](https://github.com/NousResearch/hermes-agent/pull/11029))

---

## 🔒 Security & Reliability

- **Global toggle to allow private/internal URL resolution** ([#14166](https://github.com/NousResearch/hermes-agent/pull/14166))
- **Block agent from self-destructing the gateway** via terminal (closes #6666) ([#9895](https://github.com/NousResearch/hermes-agent/pull/9895))
- **Telegram callback authorization** on update prompts ([#10536](https://github.com/NousResearch/hermes-agent/pull/10536))
- **SECURITY.md** added ([#10532](https://github.com/NousResearch/hermes-agent/pull/10532), @I3eg1nner)
- **Warn about legacy hermes.service units** during `hermes update` ([#11918](https://github.com/NousResearch/hermes-agent/pull/11918))
- **Complete ASCII-locale UnicodeEncodeError recovery** for `api_messages`/`reasoning_content` (closes #6843) ([#10537](https://github.com/NousResearch/hermes-agent/pull/10537))
- **Prevent stale `os.environ` leak** after `clear_session_vars` ([#10527](https://github.com/NousResearch/hermes-agent/pull/10527))
- **Prevent agent hang when backgrounding processes** via terminal tool ([#10584](https://github.com/NousResearch/hermes-agent/pull/10584))
- Many smaller session-resume, interrupt, streaming, and memory-race fixes throughout the window

---

## 🐛 Notable Bug Fixes

The `fix:` category in this window covers 482 PRs. Highlights:

- Streaming cursor artifacts filtered from Matrix, Telegram, WhatsApp, Discord (multiple PRs)
- `<think>` and `<thought>` blocks filtered from gateway stream consumers ([#9408](https://github.com/NousResearch/hermes-agent/pull/9408))
- Gateway display.streaming root-config override regression ([#9799](https://github.com/NousResearch/hermes-agent/pull/9799))
- Context `session_search` coerces limit to int (prevents TypeError) ([#10522](https://github.com/NousResearch/hermes-agent/pull/10522))
- Memory tool stays available when `fcntl` is unavailable (Windows) ([#9783](https://github.com/NousResearch/hermes-agent/pull/9783))
- Trajectory compressor credentials load from `HERMES_HOME/.env` ([#9632](https://github.com/NousResearch/hermes-agent/pull/9632), @Dusk1e)
- `@_context_completions` no longer crashes on `@` mention ([#9683](https://github.com/NousResearch/hermes-agent/pull/9683), @kshitijk4poor)
- Group session `user_id` no longer treated as `thread_id` in shutdown notifications ([#10546](https://github.com/NousResearch/hermes-agent/pull/10546))
- Telegram `platform_hint` — markdown is supported (closes #8261) ([#10612](https://github.com/NousResearch/hermes-agent/pull/10612))
- Doctor checks for Kimi China credentials fixed
- Streaming: don't suppress final response when commentary message is sent ([#10540](https://github.com/NousResearch/hermes-agent/pull/10540))
- Rapid Telegram follow-ups no longer get cut off

---

## 🧪 Testing & CI

- **Contributor attribution CI check** on PRs ([#9376](https://github.com/NousResearch/hermes-agent/pull/9376))
- Hermetic test parity (`scripts/run_tests.sh`) held across this window
- Test count stabilized post-Transport refactor; CI matrix held green through the transport rollout

---

## 📚 Documentation

- Atropos + wandb links in user guide
- ACP / VS Code / Zed / JetBrains integration docs refresh
- Webhook subscription docs updated for direct-delivery mode
- Plugin author guide expanded for new hooks (`register_command`, `dispatch_tool`, `transform_tool_result`)
- Transport layer developer guide added
- Website removed Discussions link from README

---

## 👥 Contributors

### Core
- **@teknium1** (Teknium)

### Top Community Contributors (by merged PR count)
- **@kshitijk4poor** — 49 PRs · Transport refactor (AnthropicTransport, ResponsesApiTransport), Step Plan provider, Xiaomi MiMo v2.5 support, numerous gateway fixes, promoted Kimi K2.5, @ mention crash fix
- **@OutThisLife** (Brooklyn) — 31 PRs · TUI polish, git branch in status bar, per-turn stopwatch, stable picker keys, `/clear` confirm, light-theme preset, subagent spawn observability overlay
- **@helix4u** — 11 PRs · Voice CLI record beep, MCP tool interrupt handling, assorted stability fixes
- **@austinpickett** — 8 PRs · Dashboard react-router + sidebar + sticky header + dropdown, Vercel deployment, update + restart buttons
- **@alt-glitch** — 8 PRs · PLATFORM_HINTS for Matrix/Mattermost/Feishu, Matrix fixes
- **@ethernet8023** — 3 PRs
- **@benbarclay** — 3 PRs
- **@Aslaaen** — 2 PRs

### Also contributing
@jerilynzheng (ai-gateway pricing), @JimLiu (baoyu-comic skill), @Dusk1e (trajectory compressor credentials), @DeployFaith (mobile-responsive dashboard), @LeonSGP43, @v1k22 (concept-diagrams), @omnissiah-comelse (adversarial-ux-test), @coekfung (Telegram MarkdownV2 expandable blockquotes), @liftaris (TUI provider resolution), @arihantsethia (skill analytics dashboard), @topcheer + @xing8star (QQBot foundation), @kovyrin, @I3eg1nner (SECURITY.md), @PeterBerthelsen, @lengxii, @priveperfumes, @sjz-ks, @cuyua9, @Disaster-Terminator, @leozeli, @LehaoLin, @trevthefoolish, @loongfay, @MrNiceRicee, @WideLee, @bluefishs, @malaiwah, @bobashopcashier, @dsocolobsky, @iamagenius00, @IAvecilla, @aniruddhaadak80, @Es1la, @asheriif, @walli, @jquesnelle (original Tool Gateway work).

### All Contributors (alphabetical)

@0xyg3n, @10ishq, @A-afflatus, @Abnertheforeman, @admin28980, @adybag14-cyber, @akhater, @alexzhu0,
@AllardQuek, @alt-glitch, @aniruddhaadak80, @anna-oake, @anniesurla, @anthhub, @areu01or00, @arihantsethia,
@arthurbr11, @asheriif, @Aslaaen, @Asunfly, @austinpickett, @AviArora02-commits, @AxDSan, @azhengbot, @Bartok9,
@benbarclay, @bennytimz, @bernylinville, @bingo906, @binhnt92, @bkadish, @bluefishs, @bobashopcashier,
@brantzh6, @BrennerSpear, @brianclemens, @briandevans, @brooklynnicholson, @bugkill3r, @buray, @burtenshaw,
@cdanis, @cgarwood82, @ChimingLiu, @chongweiliu, @christopherwoodall, @coekfung, @cola-runner, @corazzione,
@counterposition, @cresslank, @cuyua9, @cypres0099, @danieldoderlein, @davetist, @davidvv, @DeployFaith,
@Dev-Mriganka, @devorun, @dieutx, @Disaster-Terminator, @dodo-reach, @draix, @DrStrangerUJN, @dsocolobsky,
@Dusk1e, @dyxushuai, @elkimek, @elmatadorgh, @emozilla, @entropidelic, @Erosika, @erosika, @Es1la, @etcircle,
@etherman-os, @ethernet8023, @fancydirty, @farion1231, @fatinghenji, @Fatty911, @fengtianyu88, @Feranmi10,
@flobo3, @francip, @fuleinist, @g-guthrie, @GenKoKo, @gianfrancopiana, @gnanam1990, @GuyCui, @haileymarshall,
@haimu0x, @handsdiff, @hansnow, @hedgeho9X, @helix4u, @hengm3467, @HenkDz, @heykb, @hharry11, @HiddenPuppy,
@honghua, @houko, @houziershi, @hsy5571616, @huangke19, @hxp-plus, @Hypn0sis, @I3eg1nner, @iacker,
@iamagenius00, @IAvecilla, @iborazzi, @Ifkellx, @ifrederico, @imink, @isaachuangGMICLOUD, @ismell0992-afk,
@j0sephz, @Jaaneek, @jackjin1997, @JackTheGit, @jaffarkeikei, @jerilynzheng, @JiaDe-Wu, @Jiawen-lee, @JimLiu,
@jinzheng8115, @jneeee, @jplew, @jquesnelle, @Julientalbot, @Junass1, @jvcl, @kagura-agent, @keifergu,
@kevinskysunny, @keyuyuan, @konsisumer, @kovyrin, @kshitijk4poor, @leeyang1990, @LehaoLin, @lengxii,
@LeonSGP43, @leozeli, @li0near, @liftaris, @Lind3ey, @Linux2010, @liujinkun2025, @LLQWQ, @Llugaes, @lmoncany,
@longsizhuo, @lrawnsley, @Lubrsy706, @lumenradley, @luyao618, @lvnilesh, @LVT382009, @m0n5t3r, @Magaav,
@MagicRay1217, @malaiwah, @manuelschipper, @Marvae, @MassiveMassimo, @mavrickdeveloper, @maxchernin, @memosr,
@meng93, @mengjian-github, @MestreY0d4-Uninter, @Mibayy, @MikeFac, @mikewaters, @milkoor, @minorgod,
@MrNiceRicee, @ms-alan, @mvanhorn, @n-WN, @N0nb0at, @Nan93, @NIDNASSER-Abdelmajid, @nish3451, @niyoh120,
@nocoo, @nosleepcassette, @NousResearch, @ogzerber, @omnissiah-comelse, @Only-Code-A, @opriz, @OwenYWT, @pedh,
@pefontana, @PeterBerthelsen, @phpoh, @pinion05, @plgonzalezrx8, @pradeep7127, @priveperfumes,
@projectadmin-dev, @PStarH, @rnijhara, @Roy-oss1, @roytian1217, @RucchiZ, @Ruzzgar, @RyanLee-Dev, @Salt-555,
@Sanjays2402, @sgaofen, @sharziki, @shenuu, @shin4, @SHL0MS, @shushuzn, @sicnuyudidi, @simon-gtcl,
@simon-marcus, @sirEven, @Sisyphus, @sjz-ks, @snreynolds, @Societus, @Somme4096, @sontianye, @sprmn24,
@StefanIsMe, @stephenschoettler, @Swift42, @taeng0204, @taeuk178, @tannerfokkens-maker, @TaroballzChen,
@ten-ltw, @teyrebaz33, @Tianworld, @topcheer, @Tranquil-Flow, @trevthefoolish, @TroyMitchell911, @UNLINEARITY,
@v1k22, @vivganes, @vominh1919, @vrinek, @VTRiot, @WadydX, @walli, @wenhao7, @WhiteWorld, @WideLee, @wujhsu,
@WuTianyi123, @Wysie, @xandersbell, @xiaoqiang243, @xiayh0107, @xinpengdr, @Xowiek, @ycbai, @yeyitech, @ygd58,
@youngDoo, @yudaiyan, @Yukipukii1, @yule975, @yyq4193, @yzx9, @ZaynJarvis, @zhang9w0v5, @zhanggttry,
@zhangxicen, @zhongyueming1121, @zhouxiaoya12, @zons-zhaozhy

Also: @maelrx, @Marco Rutsch, @MaxsolcuCrypto, @Mind-Dragon, @Paul Bergeron, @say8hi, @whitehatjr1001.


---

**Full Changelog**: [v2026.4.13...v2026.4.23](https://github.com/NousResearch/hermes-agent/compare/v2026.4.13...v2026.4.23)

---

## Hermes Agent v0.10.0 (2026.4.16)

- Tag: `v2026.4.16`
- Published: 2026-04-16T19:53:25Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.16
- Prerelease: False

# Hermes Agent v0.10.0 (v2026.4.16)

**Release Date:** April 16, 2026

> The Tool Gateway release — paid Nous Portal subscribers can now use web search, image generation, text-to-speech, and browser automation through their existing subscription with zero additional API keys.

---

## ✨ Highlights

- **Nous Tool Gateway** — Paid [Nous Portal](https://portal.nousresearch.com) subscribers now get automatic access to **web search** (Firecrawl), **image generation** (FAL / FLUX 2 Pro), **text-to-speech** (OpenAI TTS), and **browser automation** (Browser Use) through their existing subscription. No separate API keys needed — just run `hermes model`, select Nous Portal, and pick which tools to enable. Per-tool opt-in via `use_gateway` config, full integration with `hermes tools` and `hermes status`, and the runtime correctly prefers the gateway even when direct API keys exist. Replaces the old hidden `HERMES_ENABLE_NOUS_MANAGED_TOOLS` env var with clean subscription-based detection. ([#11206](https://github.com/NousResearch/hermes-agent/pull/11206), based on work by @jquesnelle; docs: [#11208](https://github.com/NousResearch/hermes-agent/pull/11208))

---

## 🐛 Bug Fixes & Improvements

This release includes 180+ commits with numerous bug fixes, platform improvements, and reliability enhancements across the agent core, gateway, CLI, and tool system. Full details will be published in the v0.11.0 changelog.

---

## 👥 Contributors

- **@jquesnelle** (emozilla) — Original Tool Gateway implementation ([#10799](https://github.com/NousResearch/hermes-agent/pull/10799)), salvaged and shipped in this release

---

**Full Changelog**: [v2026.4.13...v2026.4.16](https://github.com/NousResearch/hermes-agent/compare/v2026.4.13...v2026.4.16)

---

## Hermes Agent v0.9.0 (v2026.4.13)

- Tag: `v2026.4.13`
- Published: 2026-04-13T18:52:41Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.13
- Prerelease: False

# Hermes Agent v0.9.0 (v2026.4.13)

**Release Date:** April 13, 2026
**Since v0.8.0:** 487 commits · 269 merged PRs · 167 resolved issues · 493 files changed · 63,281 insertions · 24 contributors

> The everywhere release — Hermes goes mobile with Termux/Android, adds iMessage and WeChat, ships Fast Mode for OpenAI and Anthropic, introduces background process monitoring, launches a local web dashboard for managing your agent, and delivers the deepest security hardening pass yet across 16 supported platforms.

---

## ✨ Highlights

- **Local Web Dashboard** — A new browser-based dashboard for managing your Hermes Agent locally. Configure settings, monitor sessions, browse skills, and manage your gateway — all from a clean web interface without touching config files or the terminal. The easiest way to get started with Hermes.

- **Fast Mode (`/fast`)** — Priority processing for OpenAI and Anthropic models. Toggle `/fast` to route through priority queues for significantly lower latency on supported models (GPT-5.4, Codex, Claude). Expands across all OpenAI Priority Processing models and Anthropic's fast tier. ([#6875](https://github.com/NousResearch/hermes-agent/pull/6875), [#6960](https://github.com/NousResearch/hermes-agent/pull/6960), [#7037](https://github.com/NousResearch/hermes-agent/pull/7037))

- **iMessage via BlueBubbles** — Full iMessage integration through BlueBubbles, bringing Hermes to Apple's messaging ecosystem. Auto-webhook registration, setup wizard integration, and crash resilience. ([#6437](https://github.com/NousResearch/hermes-agent/pull/6437), [#6460](https://github.com/NousResearch/hermes-agent/pull/6460), [#6494](https://github.com/NousResearch/hermes-agent/pull/6494))

- **WeChat (Weixin) & WeCom Callback Mode** — Native WeChat support via iLink Bot API and a new WeCom callback-mode adapter for self-built enterprise apps. Streaming cursor, media uploads, markdown link handling, and atomic state persistence. Hermes now covers the Chinese messaging ecosystem end-to-end. ([#7166](https://github.com/NousResearch/hermes-agent/pull/7166), [#7943](https://github.com/NousResearch/hermes-agent/pull/7943))

- **Termux / Android Support** — Run Hermes natively on Android via Termux. Adapted install paths, TUI optimizations for mobile screens, voice backend support, and the `/image` command work on-device. ([#6834](https://github.com/NousResearch/hermes-agent/pull/6834))

- **Background Process Monitoring (`watch_patterns`)** — Set patterns to watch for in background process output and get notified in real-time when they match. Monitor for errors, wait for specific events ("listening on port"), or watch build logs — all without polling. ([#7635](https://github.com/NousResearch/hermes-agent/pull/7635))

- **Native xAI & Xiaomi MiMo Providers** — First-class provider support for xAI (Grok) and Xiaomi MiMo, with direct API access, model catalogs, and setup wizard integration. Plus Qwen OAuth with portal request support. ([#7372](https://github.com/NousResearch/hermes-agent/pull/7372), [#7855](https://github.com/NousResearch/hermes-agent/pull/7855))

- **Pluggable Context Engine** — Context management is now a pluggable slot via `hermes plugins`. Swap in custom context engines that control what the agent sees each turn — filtering, summarization, or domain-specific context injection. ([#7464](https://github.com/NousResearch/hermes-agent/pull/7464))

- **Unified Proxy Support** — SOCKS proxy, `DISCORD_PROXY`, and system proxy auto-detection across all gateway platforms. Hermes behind corporate firewalls just works. ([#6814](https://github.com/NousResearch/hermes-agent/pull/6814))

- **Comprehensive Security Hardening** — Path traversal protection in checkpoint manager, shell injection neutralization in sandbox writes, SSRF redirect guards in Slack image uploads, Twilio webhook signature validation (SMS RCE fix), API server auth enforcement, git argument injection prevention, and approval button authorization. ([#7933](https://github.com/NousResearch/hermes-agent/pull/7933), [#7944](https://github.com/NousResearch/hermes-agent/pull/7944), [#7940](https://github.com/NousResearch/hermes-agent/pull/7940), [#7151](https://github.com/NousResearch/hermes-agent/pull/7151), [#7156](https://github.com/NousResearch/hermes-agent/pull/7156))

- **`hermes backup` & `hermes import`** — Full backup and restore of your Hermes configuration, sessions, skills, and memory. Migrate between machines or create snapshots before major changes. ([#7997](https://github.com/NousResearch/hermes-agent/pull/7997))

- **16 Supported Platforms** — With BlueBubbles (iMessage) and WeChat joining Telegram, Discord, Slack, WhatsApp, Signal, Matrix, Email, SMS, DingTalk, Feishu, WeCom, Mattermost, Home Assistant, and Webhooks, Hermes now runs on 16 messaging platforms out of the box.

- **`/debug` & `hermes debug share`** — New debugging toolkit: `/debug` slash command across all platforms for quick diagnostics, plus `hermes debug share` to upload a full debug report to a pastebin for easy sharing when troubleshooting. ([#8681](https://github.com/NousResearch/hermes-agent/pull/8681))

---

## 🏗️ Core Agent & Architecture

### Provider & Model Support
- **Native xAI (Grok) provider** with direct API access and model catalog ([#7372](https://github.com/NousResearch/hermes-agent/pull/7372))
- **Xiaomi MiMo as first-class provider** — setup wizard, model catalog, empty response recovery ([#7855](https://github.com/NousResearch/hermes-agent/pull/7855))
- **Qwen OAuth provider** with portal request support ([#6282](https://github.com/NousResearch/hermes-agent/pull/6282))
- **Fast Mode** — `/fast` toggle for OpenAI Priority Processing + Anthropic fast tier ([#6875](https://github.com/NousResearch/hermes-agent/pull/6875), [#6960](https://github.com/NousResearch/hermes-agent/pull/6960), [#7037](https://github.com/NousResearch/hermes-agent/pull/7037))
- **Structured API error classification** for smart failover decisions ([#6514](https://github.com/NousResearch/hermes-agent/pull/6514))
- **Rate limit header capture** shown in `/usage` ([#6541](https://github.com/NousResearch/hermes-agent/pull/6541))
- **API server model name** derived from profile name ([#6857](https://github.com/NousResearch/hermes-agent/pull/6857))
- **Custom providers** now included in `/model` listings and resolution ([#7088](https://github.com/NousResearch/hermes-agent/pull/7088))
- **Fallback provider activation** on repeated empty responses with user-visible status ([#7505](https://github.com/NousResearch/hermes-agent/pull/7505))
- **OpenRouter variant tags** (`:free`, `:extended`, `:fast`) preserved during model switch ([#6383](https://github.com/NousResearch/hermes-agent/pull/6383))
- **Credential exhaustion TTL** reduced from 24 hours to 1 hour ([#6504](https://github.com/NousResearch/hermes-agent/pull/6504))
- **OAuth credential lifecycle** hardening — stale pool keys, auth.json sync, Codex CLI race fixes ([#6874](https://github.com/NousResearch/hermes-agent/pull/6874))
- Empty response recovery for reasoning models (MiMo, Qwen, GLM) ([#8609](https://github.com/NousResearch/hermes-agent/pull/8609))
- MiniMax context lengths, thinking guard, endpoint corrections ([#6082](https://github.com/NousResearch/hermes-agent/pull/6082), [#7126](https://github.com/NousResearch/hermes-agent/pull/7126))
- Z.AI endpoint auto-detect via probe and cache ([#5763](https://github.com/NousResearch/hermes-agent/pull/5763))

### Agent Loop & Conversation
- **Pluggable context engine slot** via `hermes plugins` ([#7464](https://github.com/NousResearch/hermes-agent/pull/7464))
- **Background process monitoring** — `watch_patterns` for real-time output alerts ([#7635](https://github.com/NousResearch/hermes-agent/pull/7635))
- **Improved context compression** — higher limits, tool tracking, degradation warnings, token-budget tail protection ([#6395](https://github.com/NousResearch/hermes-agent/pull/6395), [#6453](https://github.com/NousResearch/hermes-agent/pull/6453))
- **`/compress <focus>`** — guided compression with a focus topic ([#8017](https://github.com/NousResearch/hermes-agent/pull/8017))
- **Tiered context pressure warnings** with gateway dedup ([#6411](https://github.com/NousResearch/hermes-agent/pull/6411))
- **Staged inactivity warning** before timeout escalation ([#6387](https://github.com/NousResearch/hermes-agent/pull/6387))
- **Prevent agent from stopping mid-task** — compression floor, budget overhaul, activity tracking ([#7983](https://github.com/NousResearch/hermes-agent/pull/7983))
- **Propagate child activity to parent** during `delegate_task` ([#7295](https://github.com/NousResearch/hermes-agent/pull/7295))
- **Truncated streaming tool call detection** before execution ([#6847](https://github.com/NousResearch/hermes-agent/pull/6847))
- Empty response retry (3 attempts with nudge) ([#6488](https://github.com/NousResearch/hermes-agent/pull/6488))
- Adaptive streaming backoff + cursor strip to prevent message truncation ([#7683](https://github.com/NousResearch/hermes-agent/pull/7683))
- Compression uses live session model instead of stale persisted config ([#8258](https://github.com/NousResearch/hermes-agent/pull/8258))
- Strip `<thought>` tags from Gemma 4 responses ([#8562](https://github.com/NousResearch/hermes-agent/pull/8562))
- Prevent `<think>` in prose from suppressing response output ([#6968](https://github.com/NousResearch/hermes-agent/pull/6968))
- Turn-exit diagnostic logging to agent loop ([#6549](https://github.com/NousResearch/hermes-agent/pull/6549))
- Scope tool interrupt signal per-thread to prevent cross-session leaks ([#7930](https://github.com/NousResearch/hermes-agent/pull/7930))

### Memory & Sessions
- **Hindsight memory plugin** — feature parity, setup wizard, config improvements — @nicoloboschi ([#6428](https://github.com/NousResearch/hermes-agent/pull/6428))
- **Honcho** — opt-in `initOnSessionStart` for tools mode — @Kathie-yu ([#6995](https://github.com/NousResearch/hermes-agent/pull/6995))
- Orphan children instead of cascade-deleting in prune/delete ([#6513](https://github.com/NousResearch/hermes-agent/pull/6513))
- Doctor command only checks the active memory provider ([#6285](https://github.com/NousResearch/hermes-agent/pull/6285))

---

## 📱 Messaging Platforms (Gateway)

### New Platforms
- **BlueBubbles (iMessage)** — full adapter with auto-webhook registration, setup wizard, and crash resilience ([#6437](https://github.com/NousResearch/hermes-agent/pull/6437), [#6460](https://github.com/NousResearch/hermes-agent/pull/6460), [#6494](https://github.com/NousResearch/hermes-agent/pull/6494), [#7107](https://github.com/NousResearch/hermes-agent/pull/7107))
- **Weixin (WeChat)** — native support via iLink Bot API with streaming, media uploads, markdown links ([#7166](https://github.com/NousResearch/hermes-agent/pull/7166), [#8665](https://github.com/NousResearch/hermes-agent/pull/8665))
- **WeCom Callback Mode** — self-built enterprise app adapter with atomic state persistence ([#7943](https://github.com/NousResearch/hermes-agent/pull/7943), [#7928](https://github.com/NousResearch/hermes-agent/pull/7928))

### Discord
- **Allowed channels whitelist** config — @jarvis-phw ([#7044](https://github.com/NousResearch/hermes-agent/pull/7044))
- **Forum channel topic inheritance** in thread sessions — @hermes-agent-dhabibi ([#6377](https://github.com/NousResearch/hermes-agent/pull/6377))
- **DISCORD_REPLY_TO_MODE** setting ([#6333](https://github.com/NousResearch/hermes-agent/pull/6333))
- Accept `.log` attachments, raise document size limit — @kira-ariaki ([#6467](https://github.com/NousResearch/hermes-agent/pull/6467))
- Decouple readiness from slash sync ([#8016](https://github.com/NousResearch/hermes-agent/pull/8016))

### Slack
- **Consolidated Slack improvements** — 7 community PRs salvaged into one ([#6809](https://github.com/NousResearch/hermes-agent/pull/6809))
- Handle assistant thread lifecycle events ([#6433](https://github.com/NousResearch/hermes-agent/pull/6433))

### Matrix
- **Migrated from matrix-nio to mautrix-python** ([#7518](https://github.com/NousResearch/hermes-agent/pull/7518))
- SQLite crypto store replacing pickle (fixes E2EE decryption) — @alt-glitch ([#7981](https://github.com/NousResearch/hermes-agent/pull/7981))
- Cross-signing recovery key verification for E2EE migration ([#8282](https://github.com/NousResearch/hermes-agent/pull/8282))
- DM mention threads + group chat events for Feishu ([#7423](https://github.com/NousResearch/hermes-agent/pull/7423))

### Gateway Core
- **Unified proxy support** — SOCKS, DISCORD_PROXY, multi-platform with macOS auto-detection ([#6814](https://github.com/NousResearch/hermes-agent/pull/6814))
- **Inbound text batching** for Discord, Matrix, WeCom + adaptive delay ([#6979](https://github.com/NousResearch/hermes-agent/pull/6979))
- **Surface natural mid-turn assistant messages** in chat platforms ([#7978](https://github.com/NousResearch/hermes-agent/pull/7978))
- **WSL-aware gateway** with smart systemd detection ([#7510](https://github.com/NousResearch/hermes-agent/pull/7510))
- **All missing platforms added to setup wizard** ([#7949](https://github.com/NousResearch/hermes-agent/pull/7949))
- **Per-platform `tool_progress` overrides** ([#6348](https://github.com/NousResearch/hermes-agent/pull/6348))
- **Configurable 'still working' notification interval** ([#8572](https://github.com/NousResearch/hermes-agent/pull/8572))
- `/model` switch persists across messages ([#7081](https://github.com/NousResearch/hermes-agent/pull/7081))
- `/usage` shows rate limits, cost, and token details between turns ([#7038](https://github.com/NousResearch/hermes-agent/pull/7038))
- Drain in-flight work before restart ([#7503](https://github.com/NousResearch/hermes-agent/pull/7503))
- Don't evict cached agent on failed runs — prevents MCP restart loop ([#7539](https://github.com/NousResearch/hermes-agent/pull/7539))
- Replace `os.environ` session state with `contextvars` ([#7454](https://github.com/NousResearch/hermes-agent/pull/7454))
- Derive channel directory platforms from enum instead of hardcoded list ([#7450](https://github.com/NousResearch/hermes-agent/pull/7450))
- Validate image downloads before caching (cross-platform) ([#7125](https://github.com/NousResearch/hermes-agent/pull/7125))
- Cross-platform webhook delivery for all platforms ([#7095](https://github.com/NousResearch/hermes-agent/pull/7095))
- Cron Discord thread_id delivery support ([#7106](https://github.com/NousResearch/hermes-agent/pull/7106))
- Feishu QR-based bot onboarding ([#8570](https://github.com/NousResearch/hermes-agent/pull/8570))
- Gateway status scoped to active profile ([#7951](https://github.com/NousResearch/hermes-agent/pull/7951))
- Prevent background process notifications from triggering false pairing requests ([#6434](https://github.com/NousResearch/hermes-agent/pull/6434))

---

## 🖥️ CLI & User Experience

### Interactive CLI
- **Termux / Android support** — adapted install paths, TUI, voice, `/image` ([#6834](https://github.com/NousResearch/hermes-agent/pull/6834))
- **Native `/model` picker modal** for provider → model selection ([#8003](https://github.com/NousResearch/hermes-agent/pull/8003))
- **Live per-tool elapsed timer** restored in TUI spinner ([#7359](https://github.com/NousResearch/hermes-agent/pull/7359))
- **Stacked tool progress scrollback** in TUI ([#8201](https://github.com/NousResearch/hermes-agent/pull/8201))
- **Random tips on new session start** (CLI + gateway, 279 tips) ([#8225](https://github.com/NousResearch/hermes-agent/pull/8225), [#8237](https://github.com/NousResearch/hermes-agent/pull/8237))
- **`hermes dump`** — copy-pasteable setup summary for debugging ([#6550](https://github.com/NousResearch/hermes-agent/pull/6550))
- **`hermes backup` / `hermes import`** — full config backup and restore ([#7997](https://github.com/NousResearch/hermes-agent/pull/7997))
- **WSL environment hint** in system prompt ([#8285](https://github.com/NousResearch/hermes-agent/pull/8285))
- **Profile creation UX** — seed SOUL.md + credential warning ([#8553](https://github.com/NousResearch/hermes-agent/pull/8553))
- Shell-aware sudo detection, empty password support ([#6517](https://github.com/NousResearch/hermes-agent/pull/6517))
- Flush stdin after curses/terminal menus to prevent escape sequence leakage ([#7167](https://github.com/NousResearch/hermes-agent/pull/7167))
- Handle broken stdin in prompt_toolkit startup ([#8560](https://github.com/NousResearch/hermes-agent/pull/8560))

### Setup & Configuration
- **Per-platform display verbosity** configuration ([#8006](https://github.com/NousResearch/hermes-agent/pull/8006))
- **Component-separated logging** with session context and filtering ([#7991](https://github.com/NousResearch/hermes-agent/pull/7991))
- **`network.force_ipv4`** config to fix IPv6 timeout issues ([#8196](https://github.com/NousResearch/hermes-agent/pull/8196))
- **Standardize message whitespace and JSON formatting** ([#7988](https://github.com/NousResearch/hermes-agent/pull/7988))
- **Rebrand OpenClaw → Hermes** during migration ([#8210](https://github.com/NousResearch/hermes-agent/pull/8210))
- Config.yaml takes priority over env vars for auxiliary settings ([#7889](https://github.com/NousResearch/hermes-agent/pull/7889))
- Harden setup provider flows + live OpenRouter catalog refresh ([#7078](https://github.com/NousResearch/hermes-agent/pull/7078))
- Normalize reasoning effort ordering across all surfaces ([#6804](https://github.com/NousResearch/hermes-agent/pull/6804))
- Remove dead `LLM_MODEL` env var + migration to clear stale entries ([#6543](https://github.com/NousResearch/hermes-agent/pull/6543))
- Remove `/prompt` slash command — prefix expansion footgun ([#6752](https://github.com/NousResearch/hermes-agent/pull/6752))
- `HERMES_HOME_MODE` env var to override permissions — @ygd58 ([#6993](https://github.com/NousResearch/hermes-agent/pull/6993))
- Fall back to default model when model config is empty ([#8303](https://github.com/NousResearch/hermes-agent/pull/8303))
- Warn when compression model context is too small ([#7894](https://github.com/NousResearch/hermes-agent/pull/7894))

---

## 🔧 Tool System

### Environments & Execution
- **Unified spawn-per-call execution layer** for environments ([#6343](https://github.com/NousResearch/hermes-agent/pull/6343))
- **Unified file sync** with mtime tracking, deletion, and transactional state ([#7087](https://github.com/NousResearch/hermes-agent/pull/7087))
- **Persistent sandbox envs** survive between turns ([#6412](https://github.com/NousResearch/hermes-agent/pull/6412))
- **Bulk file sync** via tar pipe for SSH/Modal backends — @alt-glitch ([#8014](https://github.com/NousResearch/hermes-agent/pull/8014))
- **Daytona** — bulk upload, config bridge, silent disk cap ([#7538](https://github.com/NousResearch/hermes-agent/pull/7538))
- Foreground timeout cap to prevent session deadlocks ([#7082](https://github.com/NousResearch/hermes-agent/pull/7082))
- Guard invalid command values ([#6417](https://github.com/NousResearch/hermes-agent/pull/6417))

### MCP
- **`hermes mcp add --env` and `--preset`** support ([#7970](https://github.com/NousResearch/hermes-agent/pull/7970))
- Combine `content` and `structuredContent` when both present ([#7118](https://github.com/NousResearch/hermes-agent/pull/7118))
- MCP tool name deconfliction fixes ([#7654](https://github.com/NousResearch/hermes-agent/pull/7654))

### Browser
- Browser hardening — dead code removal, caching, scroll perf, security, thread safety ([#7354](https://github.com/NousResearch/hermes-agent/pull/7354))
- `/browser connect` auto-launch uses dedicated Chrome profile dir ([#6821](https://github.com/NousResearch/hermes-agent/pull/6821))
- Reap orphaned browser sessions on startup ([#7931](https://github.com/NousResearch/hermes-agent/pull/7931))

### Voice & Vision
- **Voxtral TTS provider** (Mistral AI) ([#7653](https://github.com/NousResearch/hermes-agent/pull/7653))
- **TTS speed support** for Edge TTS, OpenAI TTS, MiniMax ([#8666](https://github.com/NousResearch/hermes-agent/pull/8666))
- **Vision auto-resize** for oversized images, raise limit to 20 MB, retry-on-failure ([#7883](https://github.com/NousResearch/hermes-agent/pull/7883), [#7902](https://github.com/NousResearch/hermes-agent/pull/7902))
- STT provider-model mismatch fix (whisper-1 vs faster-whisper) ([#7113](https://github.com/NousResearch/hermes-agent/pull/7113))

### Other Tools
- **`hermes dump`** command for setup summary ([#6550](https://github.com/NousResearch/hermes-agent/pull/6550))
- TODO store enforces ID uniqueness during replace operations ([#7986](https://github.com/NousResearch/hermes-agent/pull/7986))
- List all available toolsets in `delegate_task` schema description ([#8231](https://github.com/NousResearch/hermes-agent/pull/8231))
- API server: tool progress as custom SSE event to prevent model corruption ([#7500](https://github.com/NousResearch/hermes-agent/pull/7500))
- API server: share one Docker container across all conversations ([#7127](https://github.com/NousResearch/hermes-agent/pull/7127))

---

## 🧩 Skills Ecosystem

- **Centralized skills index + tree cache** — eliminates rate-limit failures on install ([#8575](https://github.com/NousResearch/hermes-agent/pull/8575))
- **More aggressive skill loading instructions** in system prompt (v3) ([#8209](https://github.com/NousResearch/hermes-agent/pull/8209), [#8286](https://github.com/NousResearch/hermes-agent/pull/8286))
- **Google Workspace skill** migrated to GWS CLI backend ([#6788](https://github.com/NousResearch/hermes-agent/pull/6788))
- **Creative divergence strategies** skill — @SHL0MS ([#6882](https://github.com/NousResearch/hermes-agent/pull/6882))
- **Creative ideation** — constraint-driven project generation — @SHL0MS ([#7555](https://github.com/NousResearch/hermes-agent/pull/7555))
- Parallelize skills browse/search to prevent hanging ([#7301](https://github.com/NousResearch/hermes-agent/pull/7301))
- Read name from SKILL.md frontmatter in skills_sync ([#7623](https://github.com/NousResearch/hermes-agent/pull/7623))

---

## 🔒 Security & Reliability

### Security Hardening
- **Twilio webhook signature validation** — SMS RCE fix ([#7933](https://github.com/NousResearch/hermes-agent/pull/7933))
- **Shell injection neutralization** in `_write_to_sandbox` via path quoting ([#7940](https://github.com/NousResearch/hermes-agent/pull/7940))
- **Git argument injection** and path traversal prevention in checkpoint manager ([#7944](https://github.com/NousResearch/hermes-agent/pull/7944))
- **SSRF redirect bypass** in Slack image uploads + base.py cache helpers ([#7151](https://github.com/NousResearch/hermes-agent/pull/7151))
- **Path traversal, credential gate, DANGEROUS_PATTERNS gaps** ([#7156](https://github.com/NousResearch/hermes-agent/pull/7156))
- **API bind guard** — enforce `API_SERVER_KEY` for non-loopback binding ([#7455](https://github.com/NousResearch/hermes-agent/pull/7455))
- **Approval button authorization** — require auth for session continuation — @Cafexss ([#6930](https://github.com/NousResearch/hermes-agent/pull/6930))
- Path boundary enforcement in skill manager operations ([#7156](https://github.com/NousResearch/hermes-agent/pull/7156))
- DingTalk/API webhook URL origin validation, header injection rejection ([#7455](https://github.com/NousResearch/hermes-agent/pull/7455))

### Reliability
- **Contextual error diagnostics** for invalid API responses ([#8565](https://github.com/NousResearch/hermes-agent/pull/8565))
- **Prevent 400 format errors** from triggering compression loop on Codex ([#6751](https://github.com/NousResearch/hermes-agent/pull/6751))
- **Don't halve context_length** on output-cap-too-large errors — @KUSH42 ([#6664](https://github.com/NousResearch/hermes-agent/pull/6664))
- **Recover primary client** on OpenAI transport errors ([#7108](https://github.com/NousResearch/hermes-agent/pull/7108))
- **Credential pool rotation** on billing-classified 400s ([#7112](https://github.com/NousResearch/hermes-agent/pull/7112))
- **Auto-increase stream read timeout** for local LLM providers ([#6967](https://github.com/NousResearch/hermes-agent/pull/6967))
- **Fall back to default certs** when CA bundle path doesn't exist ([#7352](https://github.com/NousResearch/hermes-agent/pull/7352))
- **Disambiguate usage-limit patterns** in error classifier — @sprmn24 ([#6836](https://github.com/NousResearch/hermes-agent/pull/6836))
- Harden cron script timeout and provider recovery ([#7079](https://github.com/NousResearch/hermes-agent/pull/7079))
- Gateway interrupt detection resilient to monitor task failures ([#8208](https://github.com/NousResearch/hermes-agent/pull/8208))
- Prevent unwanted session auto-reset after graceful gateway restarts ([#8299](https://github.com/NousResearch/hermes-agent/pull/8299))
- Prevent duplicate update prompt spam in gateway watcher ([#8343](https://github.com/NousResearch/hermes-agent/pull/8343))
- Deduplicate reasoning items in Responses API input ([#7946](https://github.com/NousResearch/hermes-agent/pull/7946))

### Infrastructure
- **Multi-arch Docker image** — amd64 + arm64 ([#6124](https://github.com/NousResearch/hermes-agent/pull/6124))
- **Docker runs as non-root user** with virtualenv — @benbarclay contributing ([#8226](https://github.com/NousResearch/hermes-agent/pull/8226))
- **Use `uv`** for Docker dependency resolution to fix resolution-too-deep ([#6965](https://github.com/NousResearch/hermes-agent/pull/6965))
- **Container-aware Nix CLI** — auto-route into managed container — @alt-glitch ([#7543](https://github.com/NousResearch/hermes-agent/pull/7543))
- **Nix shared-state permission model** for interactive CLI users — @alt-glitch ([#6796](https://github.com/NousResearch/hermes-agent/pull/6796))
- **Per-profile subprocess HOME isolation** ([#7357](https://github.com/NousResearch/hermes-agent/pull/7357))
- Profile paths fixed in Docker — profiles go to mounted volume ([#7170](https://github.com/NousResearch/hermes-agent/pull/7170))
- Docker container gateway pathway hardened ([#8614](https://github.com/NousResearch/hermes-agent/pull/8614))
- Enable unbuffered stdout for live Docker logs ([#6749](https://github.com/NousResearch/hermes-agent/pull/6749))
- Install procps in Docker image — @HiddenPuppy ([#7032](https://github.com/NousResearch/hermes-agent/pull/7032))
- Shallow git clone for faster installation — @sosyz ([#8396](https://github.com/NousResearch/hermes-agent/pull/8396))
- `hermes update` always reset on stash conflict ([#7010](https://github.com/NousResearch/hermes-agent/pull/7010))
- Write update exit code before gateway restart (cgroup kill race) ([#8288](https://github.com/NousResearch/hermes-agent/pull/8288))
- Nix: `setupSecrets` optional, tirith runtime dep — @devorun, @ethernet8023 ([#6261](https://github.com/NousResearch/hermes-agent/pull/6261), [#6721](https://github.com/NousResearch/hermes-agent/pull/6721))
- launchd stop uses `bootout` so `KeepAlive` doesn't respawn ([#7119](https://github.com/NousResearch/hermes-agent/pull/7119))

---

## 🐛 Notable Bug Fixes

- Fix: `/model` switch not persisting across gateway messages ([#7081](https://github.com/NousResearch/hermes-agent/pull/7081))
- Fix: session-scoped gateway model overrides ignored — @Hygaard ([#7662](https://github.com/NousResearch/hermes-agent/pull/7662))
- Fix: compaction model context length ignoring config — 3 related issues ([#8258](https://github.com/NousResearch/hermes-agent/pull/8258), [#8107](https://github.com/NousResearch/hermes-agent/pull/8107))
- Fix: OpenCode.ai context window resolved to 128K instead of 1M ([#6472](https://github.com/NousResearch/hermes-agent/pull/6472))
- Fix: Codex fallback auth-store lookup — @cherifya ([#6462](https://github.com/NousResearch/hermes-agent/pull/6462))
- Fix: duplicate completion notifications when process killed ([#7124](https://github.com/NousResearch/hermes-agent/pull/7124))
- Fix: agent daemon thread prevents orphan CLI processes on tab close ([#8557](https://github.com/NousResearch/hermes-agent/pull/8557))
- Fix: stale image attachment on text paste and voice input ([#7077](https://github.com/NousResearch/hermes-agent/pull/7077))
- Fix: DM thread session seeding causing cross-thread contamination ([#7084](https://github.com/NousResearch/hermes-agent/pull/7084))
- Fix: OpenClaw migration shows dry-run preview before executing ([#6769](https://github.com/NousResearch/hermes-agent/pull/6769))
- Fix: auth errors misclassified as retryable — @kuishou68 ([#7027](https://github.com/NousResearch/hermes-agent/pull/7027))
- Fix: Copilot-Integration-Id header missing ([#7083](https://github.com/NousResearch/hermes-agent/pull/7083))
- Fix: ACP session capabilities — @luyao618 ([#6985](https://github.com/NousResearch/hermes-agent/pull/6985))
- Fix: ACP PromptResponse usage from top-level fields ([#7086](https://github.com/NousResearch/hermes-agent/pull/7086))
- Fix: several failing/flaky tests on main — @dsocolobsky ([#6777](https://github.com/NousResearch/hermes-agent/pull/6777))
- Fix: backup marker filenames — @sprmn24 ([#8600](https://github.com/NousResearch/hermes-agent/pull/8600))
- Fix: `NoneType` in fast_mode check — @0xbyt4 ([#7350](https://github.com/NousResearch/hermes-agent/pull/7350))
- Fix: missing imports in uninstall.py — @JiayuuWang ([#7034](https://github.com/NousResearch/hermes-agent/pull/7034))

---

## 📚 Documentation

- Platform adapter developer guide + WeCom Callback docs ([#7969](https://github.com/NousResearch/hermes-agent/pull/7969))
- Cron troubleshooting guide ([#7122](https://github.com/NousResearch/hermes-agent/pull/7122))
- Streaming timeout auto-detection for local LLMs ([#6990](https://github.com/NousResearch/hermes-agent/pull/6990))
- Tool-use enforcement documentation expanded ([#7984](https://github.com/NousResearch/hermes-agent/pull/7984))
- BlueBubbles pairing instructions ([#6548](https://github.com/NousResearch/hermes-agent/pull/6548))
- Telegram proxy support section ([#6348](https://github.com/NousResearch/hermes-agent/pull/6348))
- `hermes dump` and `hermes logs` CLI reference ([#6552](https://github.com/NousResearch/hermes-agent/pull/6552))
- `tool_progress_overrides` configuration reference ([#6364](https://github.com/NousResearch/hermes-agent/pull/6364))
- Compression model context length warning docs ([#7879](https://github.com/NousResearch/hermes-agent/pull/7879))

---

## 👥 Contributors

**269 merged PRs** from **24 contributors** across **487 commits**.

### Community Contributors
- **@alt-glitch** (6 PRs) — Nix container-aware CLI, shared-state permissions, Matrix SQLite crypto store, bulk SSH/Modal file sync, Matrix mautrix compat
- **@SHL0MS** (2 PRs) — Creative divergence strategies skill, creative ideation skill
- **@sprmn24** (2 PRs) — Error classifier disambiguation, backup marker fix
- **@nicoloboschi** — Hindsight memory plugin feature parity
- **@Hygaard** — Session-scoped gateway model override fix
- **@jarvis-phw** — Discord allowed_channels whitelist
- **@Kathie-yu** — Honcho initOnSessionStart for tools mode
- **@hermes-agent-dhabibi** — Discord forum channel topic inheritance
- **@kira-ariaki** — Discord .log attachments and size limit
- **@cherifya** — Codex fallback auth-store lookup
- **@Cafexss** — Security: auth for session continuation
- **@KUSH42** — Compaction context_length fix
- **@kuishou68** — Auth error retryable classification fix
- **@luyao618** — ACP session capabilities
- **@ygd58** — HERMES_HOME_MODE env var override
- **@0xbyt4** — Fast mode NoneType fix
- **@JiayuuWang** — CLI uninstall import fix
- **@HiddenPuppy** — Docker procps installation
- **@dsocolobsky** — Test suite fixes
- **@benbarclay** — Docker image tag simplification
- **@sosyz** — Shallow git clone for faster install
- **@devorun** — Nix setupSecrets optional
- **@ethernet8023** — Nix tirith runtime dep

---

**Full Changelog**: [v2026.4.8...v2026.4.13](https://github.com/NousResearch/hermes-agent/compare/v2026.4.8...v2026.4.13)

---

## Hermes Agent v0.8.0 (v2026.4.8)

- Tag: `v2026.4.8`
- Published: 2026-04-08T11:56:44Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.8
- Prerelease: False

# Hermes Agent v0.8.0 (v2026.4.8)

**Release Date:** April 8, 2026

> The intelligence release — background task auto-notifications, free MiMo v2 Pro on Nous Portal, live model switching across all platforms, self-optimized GPT/Codex guidance, native Google AI Studio, smart inactivity timeouts, approval buttons, MCP OAuth 2.1, and 209 merged PRs with 82 resolved issues.

---

## ✨ Highlights

- **Background Process Auto-Notifications (`notify_on_complete`)** — Background tasks can now automatically notify the agent when they finish. Start a long-running process (AI model training, test suites, deployments, builds) and the agent gets notified on completion — no polling needed. The agent can keep working on other things and pick up results when they land. ([#5779](https://github.com/NousResearch/hermes-agent/pull/5779))

- **Free Xiaomi MiMo v2 Pro on Nous Portal** — Nous Portal now supports the free-tier Xiaomi MiMo v2 Pro model for auxiliary tasks (compression, vision, summarization), with free-tier model gating and pricing display in model selection. ([#6018](https://github.com/NousResearch/hermes-agent/pull/6018), [#5880](https://github.com/NousResearch/hermes-agent/pull/5880))

- **Live Model Switching (`/model` Command)** — Switch models and providers mid-session from CLI, Telegram, Discord, Slack, or any gateway platform. Aggregator-aware resolution keeps you on OpenRouter/Nous when possible, with automatic cross-provider fallback when needed. Interactive model pickers on Telegram and Discord with inline buttons. ([#5181](https://github.com/NousResearch/hermes-agent/pull/5181), [#5742](https://github.com/NousResearch/hermes-agent/pull/5742))

- **Self-Optimized GPT/Codex Tool-Use Guidance** — The agent diagnosed and patched 5 failure modes in GPT and Codex tool calling through automated behavioral benchmarking, dramatically improving reliability on OpenAI models. Includes execution discipline guidance and thinking-only prefill continuation for structured reasoning. ([#6120](https://github.com/NousResearch/hermes-agent/pull/6120), [#5414](https://github.com/NousResearch/hermes-agent/pull/5414), [#5931](https://github.com/NousResearch/hermes-agent/pull/5931))

- **Google AI Studio (Gemini) Native Provider** — Direct access to Gemini models through Google's AI Studio API. Includes automatic models.dev registry integration for real-time context length detection across any provider. ([#5577](https://github.com/NousResearch/hermes-agent/pull/5577))

- **Inactivity-Based Agent Timeouts** — Gateway and cron timeouts now track actual tool activity instead of wall-clock time. Long-running tasks that are actively working will never be killed — only truly idle agents time out. ([#5389](https://github.com/NousResearch/hermes-agent/pull/5389), [#5440](https://github.com/NousResearch/hermes-agent/pull/5440))

- **Approval Buttons on Slack & Telegram** — Dangerous command approval via native platform buttons instead of typing `/approve`. Slack gets thread context preservation; Telegram gets emoji reactions for approval status. ([#5890](https://github.com/NousResearch/hermes-agent/pull/5890), [#5975](https://github.com/NousResearch/hermes-agent/pull/5975))

- **MCP OAuth 2.1 PKCE + OSV Malware Scanning** — Full standards-compliant OAuth for MCP server authentication, plus automatic malware scanning of MCP extension packages via the OSV vulnerability database. ([#5420](https://github.com/NousResearch/hermes-agent/pull/5420), [#5305](https://github.com/NousResearch/hermes-agent/pull/5305))

- **Centralized Logging & Config Validation** — Structured logging to `~/.hermes/logs/` (agent.log + errors.log) with the `hermes logs` command for tailing and filtering. Config structure validation catches malformed YAML at startup before it causes cryptic failures. ([#5430](https://github.com/NousResearch/hermes-agent/pull/5430), [#5426](https://github.com/NousResearch/hermes-agent/pull/5426))

- **Plugin System Expansion** — Plugins can now register CLI subcommands, receive request-scoped API hooks with correlation IDs, prompt for required env vars during install, and hook into session lifecycle events (finalize/reset). ([#5295](https://github.com/NousResearch/hermes-agent/pull/5295), [#5427](https://github.com/NousResearch/hermes-agent/pull/5427), [#5470](https://github.com/NousResearch/hermes-agent/pull/5470), [#6129](https://github.com/NousResearch/hermes-agent/pull/6129))

- **Matrix Tier 1 & Platform Hardening** — Matrix gets reactions, read receipts, rich formatting, and room management. Discord adds channel controls and ignored channels. Signal gets full MEDIA: tag delivery. Mattermost gets file attachments. Comprehensive reliability fixes across all platforms. ([#5275](https://github.com/NousResearch/hermes-agent/pull/5275), [#5975](https://github.com/NousResearch/hermes-agent/pull/5975), [#5602](https://github.com/NousResearch/hermes-agent/pull/5602))

- **Security Hardening Pass** — Consolidated SSRF protections, timing attack mitigations, tar traversal prevention, credential leakage guards, cron path traversal hardening, and cross-session isolation. Terminal workdir sanitization across all backends. ([#5944](https://github.com/NousResearch/hermes-agent/pull/5944), [#5613](https://github.com/NousResearch/hermes-agent/pull/5613), [#5629](https://github.com/NousResearch/hermes-agent/pull/5629))

---

## 🏗️ Core Agent & Architecture

### Provider & Model Support
- **Native Google AI Studio (Gemini) provider** with models.dev integration for automatic context length detection ([#5577](https://github.com/NousResearch/hermes-agent/pull/5577))
- **`/model` command — full provider+model system overhaul** — live switching across CLI and all gateway platforms with aggregator-aware resolution ([#5181](https://github.com/NousResearch/hermes-agent/pull/5181))
- **Interactive model picker for Telegram and Discord** — inline button-based model selection ([#5742](https://github.com/NousResearch/hermes-agent/pull/5742))
- **Nous Portal free-tier model gating** with pricing display in model selection ([#5880](https://github.com/NousResearch/hermes-agent/pull/5880))
- **Model pricing display** for OpenRouter and Nous Portal providers ([#5416](https://github.com/NousResearch/hermes-agent/pull/5416))
- **xAI (Grok) prompt caching** via `x-grok-conv-id` header ([#5604](https://github.com/NousResearch/hermes-agent/pull/5604))
- **Grok added to tool-use enforcement models** for direct xAI usage ([#5595](https://github.com/NousResearch/hermes-agent/pull/5595))
- **MiniMax TTS provider** (speech-2.8) ([#4963](https://github.com/NousResearch/hermes-agent/pull/4963))
- **Non-agentic model warning** — warns users when loading Hermes LLM models not designed for tool use ([#5378](https://github.com/NousResearch/hermes-agent/pull/5378))
- **Ollama Cloud auth, /model switch persistence**, and alias tab completion ([#5269](https://github.com/NousResearch/hermes-agent/pull/5269))
- **Preserve dots in OpenCode Go model names** (minimax-m2.7, glm-4.5, kimi-k2.5) ([#5597](https://github.com/NousResearch/hermes-agent/pull/5597))
- **MiniMax models 404 fix** — strip /v1 from Anthropic base URL for OpenCode Go ([#4918](https://github.com/NousResearch/hermes-agent/pull/4918))
- **Provider credential reset windows** honored in pooled failover ([#5188](https://github.com/NousResearch/hermes-agent/pull/5188))
- **OAuth token sync** between credential pool and credentials file ([#4981](https://github.com/NousResearch/hermes-agent/pull/4981))
- **Stale OAuth credentials** no longer block OpenRouter users on auto-detect ([#5746](https://github.com/NousResearch/hermes-agent/pull/5746))
- **Codex OAuth credential pool disconnect** + expired token import fix ([#5681](https://github.com/NousResearch/hermes-agent/pull/5681))
- **Codex pool entry sync** from `~/.codex/auth.json` on exhaustion — @GratefulDave ([#5610](https://github.com/NousResearch/hermes-agent/pull/5610))
- **Auxiliary client payment fallback** — retry with next provider on 402 ([#5599](https://github.com/NousResearch/hermes-agent/pull/5599))
- **Auxiliary client resolves named custom providers** and 'main' alias ([#5978](https://github.com/NousResearch/hermes-agent/pull/5978))
- **Use mimo-v2-pro** for non-vision auxiliary tasks on Nous free tier ([#6018](https://github.com/NousResearch/hermes-agent/pull/6018))
- **Vision auto-detection** tries main provider first ([#6041](https://github.com/NousResearch/hermes-agent/pull/6041))
- **Provider re-ordering and Quick Install** — @austinpickett ([#4664](https://github.com/NousResearch/hermes-agent/pull/4664))
- **Nous OAuth access_token** no longer used as inference API key — @SHL0MS ([#5564](https://github.com/NousResearch/hermes-agent/pull/5564))
- **HERMES_PORTAL_BASE_URL env var** respected during Nous login — @benbarclay ([#5745](https://github.com/NousResearch/hermes-agent/pull/5745))
- **Env var overrides** for Nous portal/inference URLs ([#5419](https://github.com/NousResearch/hermes-agent/pull/5419))
- **Z.AI endpoint auto-detect** via probe and cache ([#5763](https://github.com/NousResearch/hermes-agent/pull/5763))
- **MiniMax context lengths, model catalog, thinking guard, aux model, and config base_url** corrections ([#6082](https://github.com/NousResearch/hermes-agent/pull/6082))
- **Community provider/model resolution fixes** — salvaged 4 community PRs + MiniMax aux URL ([#5983](https://github.com/NousResearch/hermes-agent/pull/5983))

### Agent Loop & Conversation
- **Self-optimized GPT/Codex tool-use guidance** via automated behavioral benchmarking — agent self-diagnosed and patched 5 failure modes ([#6120](https://github.com/NousResearch/hermes-agent/pull/6120))
- **GPT/Codex execution discipline guidance** in system prompts ([#5414](https://github.com/NousResearch/hermes-agent/pull/5414))
- **Thinking-only prefill continuation** for structured reasoning responses ([#5931](https://github.com/NousResearch/hermes-agent/pull/5931))
- **Accept reasoning-only responses** without retries — set content to "(empty)" instead of infinite retry ([#5278](https://github.com/NousResearch/hermes-agent/pull/5278))
- **Jittered retry backoff** — exponential backoff with jitter for API retries ([#6048](https://github.com/NousResearch/hermes-agent/pull/6048))
- **Smart thinking block signature management** — preserve and manage Anthropic thinking signatures across turns ([#6112](https://github.com/NousResearch/hermes-agent/pull/6112))
- **Coerce tool call arguments** to match JSON Schema types — fixes models that send strings instead of numbers/booleans ([#5265](https://github.com/NousResearch/hermes-agent/pull/5265))
- **Save oversized tool results to file** instead of destructive truncation ([#5210](https://github.com/NousResearch/hermes-agent/pull/5210))
- **Sandbox-aware tool result persistence** ([#6085](https://github.com/NousResearch/hermes-agent/pull/6085))
- **Streaming fallback** improved after edit failures ([#6110](https://github.com/NousResearch/hermes-agent/pull/6110))
- **Codex empty-output gaps** covered in fallback + normalizer + auxiliary client ([#5724](https://github.com/NousResearch/hermes-agent/pull/5724), [#5730](https://github.com/NousResearch/hermes-agent/pull/5730), [#5734](https://github.com/NousResearch/hermes-agent/pull/5734))
- **Codex stream output backfill** from output_item.done events ([#5689](https://github.com/NousResearch/hermes-agent/pull/5689))
- **Stream consumer creates new message** after tool boundaries ([#5739](https://github.com/NousResearch/hermes-agent/pull/5739))
- **Codex validation aligned** with normalization for empty stream output ([#5940](https://github.com/NousResearch/hermes-agent/pull/5940))
- **Bridge tool-calls** in copilot-acp adapter ([#5460](https://github.com/NousResearch/hermes-agent/pull/5460))
- **Filter transcript-only roles** from chat-completions payload ([#4880](https://github.com/NousResearch/hermes-agent/pull/4880))
- **Context compaction failures fixed** on temperature-restricted models — @MadKangYu ([#5608](https://github.com/NousResearch/hermes-agent/pull/5608))
- **Sanitize tool_calls for all strict APIs** (Fireworks, Mistral, etc.) — @lumethegreat ([#5183](https://github.com/NousResearch/hermes-agent/pull/5183))

### Memory & Sessions
- **Supermemory memory provider** — new memory plugin with multi-container, search_mode, identity template, and env var override ([#5737](https://github.com/NousResearch/hermes-agent/pull/5737), [#5933](https://github.com/NousResearch/hermes-agent/pull/5933))
- **Shared thread sessions** by default — multi-user thread support across gateway platforms ([#5391](https://github.com/NousResearch/hermes-agent/pull/5391))
- **Subagent sessions linked to parent** and hidden from session list ([#5309](https://github.com/NousResearch/hermes-agent/pull/5309))
- **Profile-scoped memory isolation** and clone support ([#4845](https://github.com/NousResearch/hermes-agent/pull/4845))
- **Thread gateway user_id to memory plugins** for per-user scoping ([#5895](https://github.com/NousResearch/hermes-agent/pull/5895))
- **Honcho plugin drift overhaul** + plugin CLI registration system ([#5295](https://github.com/NousResearch/hermes-agent/pull/5295))
- **Honcho holographic prompt and trust score** rendering preserved ([#4872](https://github.com/NousResearch/hermes-agent/pull/4872))
- **Honcho doctor fix** — use recall_mode instead of memory_mode — @techguysimon ([#5645](https://github.com/NousResearch/hermes-agent/pull/5645))
- **RetainDB** — API routes, write queue, dialectic, agent model, file tools fixes ([#5461](https://github.com/NousResearch/hermes-agent/pull/5461))
- **Hindsight memory plugin overhaul** + memory setup wizard fixes ([#5094](https://github.com/NousResearch/hermes-agent/pull/5094))
- **mem0 API v2 compat**, prefetch context fencing, secret redaction ([#5423](https://github.com/NousResearch/hermes-agent/pull/5423))
- **mem0 env vars merged** with mem0.json instead of either/or ([#4939](https://github.com/NousResearch/hermes-agent/pull/4939))
- **Clean user message** used for all memory provider operations ([#4940](https://github.com/NousResearch/hermes-agent/pull/4940))
- **Silent memory flush failure** on /new and /resume fixed — @ryanautomated ([#5640](https://github.com/NousResearch/hermes-agent/pull/5640))
- **OpenViking atexit safety net** for session commit ([#5664](https://github.com/NousResearch/hermes-agent/pull/5664))
- **OpenViking tenant-scoping headers** for multi-tenant servers ([#4936](https://github.com/NousResearch/hermes-agent/pull/4936))
- **ByteRover brv query** runs synchronously before LLM call ([#4831](https://github.com/NousResearch/hermes-agent/pull/4831))

---

## 📱 Messaging Platforms (Gateway)

### Gateway Core
- **Inactivity-based agent timeout** — replaces wall-clock timeout with smart activity tracking; long-running active tasks never killed ([#5389](https://github.com/NousResearch/hermes-agent/pull/5389))
- **Approval buttons for Slack & Telegram** + Slack thread context preservation ([#5890](https://github.com/NousResearch/hermes-agent/pull/5890))
- **Live-stream /update output** + forward interactive prompts to user ([#5180](https://github.com/NousResearch/hermes-agent/pull/5180))
- **Infinite timeout support** + periodic notifications + actionable error messages ([#4959](https://github.com/NousResearch/hermes-agent/pull/4959))
- **Duplicate message prevention** — gateway dedup + partial stream guard ([#4878](https://github.com/NousResearch/hermes-agent/pull/4878))
- **Webhook delivery_info persistence** + full session id in /status ([#5942](https://github.com/NousResearch/hermes-agent/pull/5942))
- **Tool preview truncation** respects tool_preview_length in all/new progress modes ([#5937](https://github.com/NousResearch/hermes-agent/pull/5937))
- **Short preview truncation** restored for all/new tool progress modes ([#4935](https://github.com/NousResearch/hermes-agent/pull/4935))
- **Update-pending state** written atomically to prevent corruption ([#4923](https://github.com/NousResearch/hermes-agent/pull/4923))
- **Approval session key isolated** per turn ([#4884](https://github.com/NousResearch/hermes-agent/pull/4884))
- **Active-session guard bypass** for /approve, /deny, /stop, /new ([#4926](https://github.com/NousResearch/hermes-agent/pull/4926), [#5765](https://github.com/NousResearch/hermes-agent/pull/5765))
- **Typing indicator paused** during approval waits ([#5893](https://github.com/NousResearch/hermes-agent/pull/5893))
- **Caption check** uses exact line-by-line match instead of substring (all platforms) ([#5939](https://github.com/NousResearch/hermes-agent/pull/5939))
- **MEDIA: tags stripped** from streamed gateway messages ([#5152](https://github.com/NousResearch/hermes-agent/pull/5152))
- **MEDIA: tags extracted** from cron delivery before sending ([#5598](https://github.com/NousResearch/hermes-agent/pull/5598))
- **Profile-aware service units** + voice transcription cleanup ([#5972](https://github.com/NousResearch/hermes-agent/pull/5972))
- **Thread-safe PairingStore** with atomic writes — @CharlieKerfoot ([#5656](https://github.com/NousResearch/hermes-agent/pull/5656))
- **Sanitize media URLs** in base platform logs — @WAXLYY ([#5631](https://github.com/NousResearch/hermes-agent/pull/5631))
- **Reduce Telegram fallback IP activation log noise** — @MadKangYu ([#5615](https://github.com/NousResearch/hermes-agent/pull/5615))
- **Cron static method wrappers** to prevent self-binding ([#5299](https://github.com/NousResearch/hermes-agent/pull/5299))
- **Stale 'hermes login' replaced** with 'hermes auth' + credential removal re-seeding fix ([#5670](https://github.com/NousResearch/hermes-agent/pull/5670))

### Telegram
- **Group topics skill binding** for supergroup forum topics ([#4886](https://github.com/NousResearch/hermes-agent/pull/4886))
- **Emoji reactions** for approval status and notifications ([#5975](https://github.com/NousResearch/hermes-agent/pull/5975))
- **Duplicate message delivery prevented** on send timeout ([#5153](https://github.com/NousResearch/hermes-agent/pull/5153))
- **Command names sanitized** to strip invalid characters ([#5596](https://github.com/NousResearch/hermes-agent/pull/5596))
- **Per-platform disabled skills** respected in Telegram menu and gateway dispatch ([#4799](https://github.com/NousResearch/hermes-agent/pull/4799))
- **/approve and /deny** routed through running-agent guard ([#4798](https://github.com/NousResearch/hermes-agent/pull/4798))

### Discord
- **Channel controls** — ignored_channels and no_thread_channels config options ([#5975](https://github.com/NousResearch/hermes-agent/pull/5975))
- **Skills registered as native slash commands** via shared gateway logic ([#5603](https://github.com/NousResearch/hermes-agent/pull/5603))
- **/approve, /deny, /queue, /background, /btw** registered as native slash commands ([#4800](https://github.com/NousResearch/hermes-agent/pull/4800), [#5477](https://github.com/NousResearch/hermes-agent/pull/5477))
- **Unnecessary members intent** removed on startup + token lock leak fix ([#5302](https://github.com/NousResearch/hermes-agent/pull/5302))

### Slack
- **Thread engagement** — auto-respond in bot-started and mentioned threads ([#5897](https://github.com/NousResearch/hermes-agent/pull/5897))
- **mrkdwn in edit_message** + thread replies without @mentions ([#5733](https://github.com/NousResearch/hermes-agent/pull/5733))

### Matrix
- **Tier 1 feature parity** — reactions, read receipts, rich formatting, room management ([#5275](https://github.com/NousResearch/hermes-agent/pull/5275))
- **MATRIX_REQUIRE_MENTION and MATRIX_AUTO_THREAD** support ([#5106](https://github.com/NousResearch/hermes-agent/pull/5106))
- **Comprehensive reliability** — encrypted media, auth recovery, cron E2EE, Synapse compat ([#5271](https://github.com/NousResearch/hermes-agent/pull/5271))
- **CJK input, E2EE, and reconnect** fixes ([#5665](https://github.com/NousResearch/hermes-agent/pull/5665))

### Signal
- **Full MEDIA: tag delivery** — send_image_file, send_voice, and send_video implemented ([#5602](https://github.com/NousResearch/hermes-agent/pull/5602))

### Mattermost
- **File attachments** — set message type to DOCUMENT when post has file attachments — @nericervin ([#5609](https://github.com/NousResearch/hermes-agent/pull/5609))

### Feishu
- **Interactive card approval buttons** ([#6043](https://github.com/NousResearch/hermes-agent/pull/6043))
- **Reconnect and ACL** fixes ([#5665](https://github.com/NousResearch/hermes-agent/pull/5665))

### Webhooks
- **`{__raw__}` template token** and thread_id passthrough for forum topics ([#5662](https://github.com/NousResearch/hermes-agent/pull/5662))

---

## 🖥️ CLI & User Experience

### Interactive CLI
- **Defer response content** until reasoning block completes ([#5773](https://github.com/NousResearch/hermes-agent/pull/5773))
- **Ghost status-bar lines cleared** on terminal resize ([#4960](https://github.com/NousResearch/hermes-agent/pull/4960))
- **Normalise \r\n and \r line endings** in pasted text ([#4849](https://github.com/NousResearch/hermes-agent/pull/4849))
- **ChatConsole errors, curses scroll, skin-aware banner, git state** banner fixes ([#5974](https://github.com/NousResearch/hermes-agent/pull/5974))
- **Native Windows image paste** support ([#5917](https://github.com/NousResearch/hermes-agent/pull/5917))
- **--yolo and other flags** no longer silently dropped when placed before 'chat' subcommand ([#5145](https://github.com/NousResearch/hermes-agent/pull/5145))

### Setup & Configuration
- **Config structure validation** — detect malformed YAML at startup with actionable error messages ([#5426](https://github.com/NousResearch/hermes-agent/pull/5426))
- **Centralized logging** to `~/.hermes/logs/` — agent.log (INFO+), errors.log (WARNING+) with `hermes logs` command ([#5430](https://github.com/NousResearch/hermes-agent/pull/5430))
- **Docs links added** to setup wizard sections ([#5283](https://github.com/NousResearch/hermes-agent/pull/5283))
- **Doctor diagnostics** — sync provider checks, config migration, WAL and mem0 diagnostics ([#5077](https://github.com/NousResearch/hermes-agent/pull/5077))
- **Timeout debug logging** and user-facing diagnostics improved ([#5370](https://github.com/NousResearch/hermes-agent/pull/5370))
- **Reasoning effort unified** to config.yaml only ([#6118](https://github.com/NousResearch/hermes-agent/pull/6118))
- **Permanent command allowlist** loaded on startup ([#5076](https://github.com/NousResearch/hermes-agent/pull/5076))
- **`hermes auth remove`** now clears env-seeded credentials permanently ([#5285](https://github.com/NousResearch/hermes-agent/pull/5285))
- **Bundled skills synced to all profiles** during update ([#5795](https://github.com/NousResearch/hermes-agent/pull/5795))
- **`hermes update` no longer kills** freshly-restarted gateway service ([#5448](https://github.com/NousResearch/hermes-agent/pull/5448))
- **Subprocess.run() timeouts** added to all gateway CLI commands ([#5424](https://github.com/NousResearch/hermes-agent/pull/5424))
- **Actionable error message** when Codex refresh token is reused — @tymrtn ([#5612](https://github.com/NousResearch/hermes-agent/pull/5612))
- **Google-workspace skill scripts** can now run directly — @xinbenlv ([#5624](https://github.com/NousResearch/hermes-agent/pull/5624))

### Cron System
- **Inactivity-based cron timeout** — replaces wall-clock; active tasks run indefinitely ([#5440](https://github.com/NousResearch/hermes-agent/pull/5440))
- **Pre-run script injection** for data collection and change detection ([#5082](https://github.com/NousResearch/hermes-agent/pull/5082))
- **Delivery failure tracking** in job status ([#6042](https://github.com/NousResearch/hermes-agent/pull/6042))
- **Delivery guidance** in cron prompts — stops send_message thrashing ([#5444](https://github.com/NousResearch/hermes-agent/pull/5444))
- **MEDIA files delivered** as native platform attachments ([#5921](https://github.com/NousResearch/hermes-agent/pull/5921))
- **[SILENT] suppression** works anywhere in response — @auspic7 ([#5654](https://github.com/NousResearch/hermes-agent/pull/5654))
- **Cron path traversal** hardening ([#5147](https://github.com/NousResearch/hermes-agent/pull/5147))

---

## 🔧 Tool System

### Terminal & Execution
- **Execute_code on remote backends** — code execution now works on Docker, SSH, Modal, and other remote terminal backends ([#5088](https://github.com/NousResearch/hermes-agent/pull/5088))
- **Exit code context** for common CLI tools in terminal results — helps agent understand what went wrong ([#5144](https://github.com/NousResearch/hermes-agent/pull/5144))
- **Progressive subdirectory hint discovery** — agent learns project structure as it navigates ([#5291](https://github.com/NousResearch/hermes-agent/pull/5291))
- **notify_on_complete for background processes** — get notified when long-running tasks finish ([#5779](https://github.com/NousResearch/hermes-agent/pull/5779))
- **Docker env config** — explicit container environment variables via docker_env config ([#4738](https://github.com/NousResearch/hermes-agent/pull/4738))
- **Approval metadata included** in terminal tool results ([#5141](https://github.com/NousResearch/hermes-agent/pull/5141))
- **Workdir parameter sanitized** in terminal tool across all backends ([#5629](https://github.com/NousResearch/hermes-agent/pull/5629))
- **Detached process crash recovery** state corrected ([#6101](https://github.com/NousResearch/hermes-agent/pull/6101))
- **Agent-browser paths with spaces** preserved — @Vasanthdev2004 ([#6077](https://github.com/NousResearch/hermes-agent/pull/6077))
- **Portable base64 encoding** for image reading on macOS — @CharlieKerfoot ([#5657](https://github.com/NousResearch/hermes-agent/pull/5657))

### Browser
- **Switch managed browser provider** from Browserbase to Browser Use — @benbarclay ([#5750](https://github.com/NousResearch/hermes-agent/pull/5750))
- **Firecrawl cloud browser** provider — @alt-glitch ([#5628](https://github.com/NousResearch/hermes-agent/pull/5628))
- **JS evaluation** via browser_console expression parameter ([#5303](https://github.com/NousResearch/hermes-agent/pull/5303))
- **Windows browser** fixes ([#5665](https://github.com/NousResearch/hermes-agent/pull/5665))

### MCP
- **MCP OAuth 2.1 PKCE** — full standards-compliant OAuth client support ([#5420](https://github.com/NousResearch/hermes-agent/pull/5420))
- **OSV malware check** for MCP extension packages ([#5305](https://github.com/NousResearch/hermes-agent/pull/5305))
- **Prefer structuredContent over text** + no_mcp sentinel ([#5979](https://github.com/NousResearch/hermes-agent/pull/5979))
- **Unknown toolsets warning suppressed** for MCP server names ([#5279](https://github.com/NousResearch/hermes-agent/pull/5279))

### Web & Files
- **.zip document support** + auto-mount cache dirs into remote backends ([#4846](https://github.com/NousResearch/hermes-agent/pull/4846))
- **Redact query secrets** in send_message errors — @WAXLYY ([#5650](https://github.com/NousResearch/hermes-agent/pull/5650))

### Delegation
- **Credential pool sharing** + workspace path hints for subagents ([#5748](https://github.com/NousResearch/hermes-agent/pull/5748))

### ACP (VS Code / Zed / JetBrains)
- **Aggregate ACP improvements** — auth compat, protocol fixes, command ads, delegation, SSE events ([#5292](https://github.com/NousResearch/hermes-agent/pull/5292))

---

## 🧩 Skills Ecosystem

### Skills System
- **Skill config interface** — skills can declare required config.yaml settings, prompted during setup, injected at load time ([#5635](https://github.com/NousResearch/hermes-agent/pull/5635))
- **Plugin CLI registration system** — plugins register their own CLI subcommands without touching main.py ([#5295](https://github.com/NousResearch/hermes-agent/pull/5295))
- **Request-scoped API hooks** with tool call correlation IDs for plugins ([#5427](https://github.com/NousResearch/hermes-agent/pull/5427))
- **Session lifecycle hooks** — on_session_finalize and on_session_reset for CLI + gateway ([#6129](https://github.com/NousResearch/hermes-agent/pull/6129))
- **Prompt for required env vars** during plugin install — @kshitijk4poor ([#5470](https://github.com/NousResearch/hermes-agent/pull/5470))
- **Plugin name validation** — reject names that resolve to plugins root ([#5368](https://github.com/NousResearch/hermes-agent/pull/5368))
- **pre_llm_call plugin context** moved to user message to preserve prompt cache ([#5146](https://github.com/NousResearch/hermes-agent/pull/5146))

### New & Updated Skills
- **popular-web-designs** — 54 production website design systems ([#5194](https://github.com/NousResearch/hermes-agent/pull/5194))
- **p5js creative coding** — @SHL0MS ([#5600](https://github.com/NousResearch/hermes-agent/pull/5600))
- **manim-video** — mathematical and technical animations — @SHL0MS ([#4930](https://github.com/NousResearch/hermes-agent/pull/4930))
- **llm-wiki** — Karpathy's LLM Wiki skill ([#5635](https://github.com/NousResearch/hermes-agent/pull/5635))
- **gitnexus-explorer** — codebase indexing and knowledge serving ([#5208](https://github.com/NousResearch/hermes-agent/pull/5208))
- **research-paper-writing** — AI-Scientist & GPT-Researcher patterns — @SHL0MS ([#5421](https://github.com/NousResearch/hermes-agent/pull/5421))
- **blogwatcher** updated to JulienTant's fork ([#5759](https://github.com/NousResearch/hermes-agent/pull/5759))
- **claude-code skill** comprehensive rewrite v2.0 + v2.2 ([#5155](https://github.com/NousResearch/hermes-agent/pull/5155), [#5158](https://github.com/NousResearch/hermes-agent/pull/5158))
- **Code verification skills** consolidated into one ([#4854](https://github.com/NousResearch/hermes-agent/pull/4854))
- **Manim CE reference docs** expanded — geometry, animations, LaTeX — @leotrs ([#5791](https://github.com/NousResearch/hermes-agent/pull/5791))
- **Manim-video references** — design thinking, updaters, paper explainer, decorations, production quality — @SHL0MS ([#5588](https://github.com/NousResearch/hermes-agent/pull/5588), [#5408](https://github.com/NousResearch/hermes-agent/pull/5408))

---

## 🔒 Security & Reliability

### Security Hardening
- **Consolidated security** — SSRF protections, timing attack mitigations, tar traversal prevention, credential leakage guards ([#5944](https://github.com/NousResearch/hermes-agent/pull/5944))
- **Cross-session isolation** + cron path traversal hardening ([#5613](https://github.com/NousResearch/hermes-agent/pull/5613))
- **Workdir parameter sanitized** in terminal tool across all backends ([#5629](https://github.com/NousResearch/hermes-agent/pull/5629))
- **Approval 'once' session escalation** prevented + cron delivery platform validation ([#5280](https://github.com/NousResearch/hermes-agent/pull/5280))
- **Profile-scoped Google Workspace OAuth tokens** protected ([#4910](https://github.com/NousResearch/hermes-agent/pull/4910))

### Reliability
- **Aggressive worktree and branch cleanup** to prevent accumulation ([#6134](https://github.com/NousResearch/hermes-agent/pull/6134))
- **O(n²) catastrophic backtracking** in redact regex fixed — 100x improvement on large outputs ([#4962](https://github.com/NousResearch/hermes-agent/pull/4962))
- **Runtime stability fixes** across core, web, delegate, and browser tools ([#4843](https://github.com/NousResearch/hermes-agent/pull/4843))
- **API server streaming fix** + conversation history support ([#5977](https://github.com/NousResearch/hermes-agent/pull/5977))
- **OpenViking API endpoint paths** and response parsing corrected ([#5078](https://github.com/NousResearch/hermes-agent/pull/5078))

---

## 🐛 Notable Bug Fixes

- **9 community bugfixes salvaged** — gateway, cron, deps, macOS launchd in one batch ([#5288](https://github.com/NousResearch/hermes-agent/pull/5288))
- **Batch core bug fixes** — model config, session reset, alias fallback, launchctl, delegation, atomic writes ([#5630](https://github.com/NousResearch/hermes-agent/pull/5630))
- **Batch gateway/platform fixes** — matrix E2EE, CJK input, Windows browser, Feishu reconnect + ACL ([#5665](https://github.com/NousResearch/hermes-agent/pull/5665))
- **Stale test skips removed**, regex backtracking, file search bug, and test flakiness ([#4969](https://github.com/NousResearch/hermes-agent/pull/4969))
- **Nix flake** — read version, regen uv.lock, add hermes_logging — @alt-glitch ([#5651](https://github.com/NousResearch/hermes-agent/pull/5651))
- **Lowercase variable redaction** regression tests ([#5185](https://github.com/NousResearch/hermes-agent/pull/5185))

---

## 🧪 Testing

- **57 failing CI tests repaired** across 14 files ([#5823](https://github.com/NousResearch/hermes-agent/pull/5823))
- **Test suite re-architecture** + CI failure fixes — @alt-glitch ([#5946](https://github.com/NousResearch/hermes-agent/pull/5946))
- **Codebase-wide lint cleanup** — unused imports, dead code, and inefficient patterns ([#5821](https://github.com/NousResearch/hermes-agent/pull/5821))
- **browser_close tool removed** — auto-cleanup handles it ([#5792](https://github.com/NousResearch/hermes-agent/pull/5792))

---

## 📚 Documentation

- **Comprehensive documentation audit** — fix stale info, expand thin pages, add depth ([#5393](https://github.com/NousResearch/hermes-agent/pull/5393))
- **40+ discrepancies fixed** between documentation and codebase ([#5818](https://github.com/NousResearch/hermes-agent/pull/5818))
- **13 features documented** from last week's PRs ([#5815](https://github.com/NousResearch/hermes-agent/pull/5815))
- **Guides section overhaul** — fix existing + add 3 new tutorials ([#5735](https://github.com/NousResearch/hermes-agent/pull/5735))
- **Salvaged 4 docs PRs** — docker setup, post-update validation, local LLM guide, signal-cli install ([#5727](https://github.com/NousResearch/hermes-agent/pull/5727))
- **Discord configuration reference** ([#5386](https://github.com/NousResearch/hermes-agent/pull/5386))
- **Community FAQ entries** for common workflows and troubleshooting ([#4797](https://github.com/NousResearch/hermes-agent/pull/4797))
- **WSL2 networking guide** for local model servers ([#5616](https://github.com/NousResearch/hermes-agent/pull/5616))
- **Honcho CLI reference** + plugin CLI registration docs ([#5308](https://github.com/NousResearch/hermes-agent/pull/5308))
- **Obsidian Headless setup** for servers in llm-wiki ([#5660](https://github.com/NousResearch/hermes-agent/pull/5660))
- **Hermes Mod visual skin editor** added to skins page ([#6095](https://github.com/NousResearch/hermes-agent/pull/6095))

---

## 👥 Contributors

### Core
- **@teknium1** — 179 PRs

### Top Community Contributors
- **@SHL0MS** (7 PRs) — p5js creative coding skill, manim-video skill + 5 reference expansions, research-paper-writing, Nous OAuth fix, manim font fix
- **@alt-glitch** (3 PRs) — Firecrawl cloud browser provider, test re-architecture + CI fixes, Nix flake fixes
- **@benbarclay** (2 PRs) — Browser Use managed provider switch, Nous portal base URL fix
- **@CharlieKerfoot** (2 PRs) — macOS portable base64 encoding, thread-safe PairingStore
- **@WAXLYY** (2 PRs) — send_message secret redaction, gateway media URL sanitization
- **@MadKangYu** (2 PRs) — Telegram log noise reduction, context compaction fix for temperature-restricted models

### All Contributors
@alt-glitch, @austinpickett, @auspic7, @benbarclay, @CharlieKerfoot, @GratefulDave, @kshitijk4poor, @leotrs, @lumethegreat, @MadKangYu, @nericervin, @ryanautomated, @SHL0MS, @techguysimon, @tymrtn, @Vasanthdev2004, @WAXLYY, @xinbenlv

---

**Full Changelog**: [v2026.4.3...v2026.4.8](https://github.com/NousResearch/hermes-agent/compare/v2026.4.3...v2026.4.8)

---

## Hermes Agent v0.7.0 (v2026.4.3)

- Tag: `v2026.4.3`
- Published: 2026-04-03T18:15:29Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.3
- Prerelease: False

# Hermes Agent v0.7.0 (v2026.4.3)

**Release Date:** April 3, 2026

> The resilience release — pluggable memory providers, credential pool rotation, Camofox anti-detection browser, inline diff previews, gateway hardening across race conditions and approval routing, and deep security fixes across 168 PRs and 46 resolved issues.

---

## ✨ Highlights

- **Pluggable Memory Provider Interface** — Memory is now an extensible plugin system. Third-party memory backends (Honcho, vector stores, custom DBs) implement a simple provider ABC and register via the plugin system. Built-in memory is the default provider. Honcho integration restored to full parity as the reference plugin with profile-scoped host/peer resolution. ([#4623](https://github.com/NousResearch/hermes-agent/pull/4623), [#4616](https://github.com/NousResearch/hermes-agent/pull/4616), [#4355](https://github.com/NousResearch/hermes-agent/pull/4355))

- **Same-Provider Credential Pools** — Configure multiple API keys for the same provider with automatic rotation. Thread-safe `least_used` strategy distributes load across keys, and 401 failures trigger automatic rotation to the next credential. Set up via the setup wizard or `credential_pool` config. ([#4188](https://github.com/NousResearch/hermes-agent/pull/4188), [#4300](https://github.com/NousResearch/hermes-agent/pull/4300), [#4361](https://github.com/NousResearch/hermes-agent/pull/4361))

- **Camofox Anti-Detection Browser Backend** — New local browser backend using Camoufox for stealth browsing. Persistent sessions with VNC URL discovery for visual debugging, configurable SSRF bypass for local backends, auto-install via `hermes tools`. ([#4008](https://github.com/NousResearch/hermes-agent/pull/4008), [#4419](https://github.com/NousResearch/hermes-agent/pull/4419), [#4292](https://github.com/NousResearch/hermes-agent/pull/4292))

- **Inline Diff Previews** — File write and patch operations now show inline diffs in the tool activity feed, giving you visual confirmation of what changed before the agent moves on. ([#4411](https://github.com/NousResearch/hermes-agent/pull/4411), [#4423](https://github.com/NousResearch/hermes-agent/pull/4423))

- **API Server Session Continuity & Tool Streaming** — The API server (Open WebUI integration) now streams tool progress events in real-time and supports `X-Hermes-Session-Id` headers for persistent sessions across requests. Sessions persist to the shared SessionDB. ([#4092](https://github.com/NousResearch/hermes-agent/pull/4092), [#4478](https://github.com/NousResearch/hermes-agent/pull/4478), [#4802](https://github.com/NousResearch/hermes-agent/pull/4802))

- **ACP: Client-Provided MCP Servers** — Editor integrations (VS Code, Zed, JetBrains) can now register their own MCP servers, which Hermes picks up as additional agent tools. Your editor's MCP ecosystem flows directly into the agent. ([#4705](https://github.com/NousResearch/hermes-agent/pull/4705))

- **Gateway Hardening** — Major stability pass across race conditions, photo media delivery, flood control, stuck sessions, approval routing, and compression death spirals. The gateway is substantially more reliable in production. ([#4727](https://github.com/NousResearch/hermes-agent/pull/4727), [#4750](https://github.com/NousResearch/hermes-agent/pull/4750), [#4798](https://github.com/NousResearch/hermes-agent/pull/4798), [#4557](https://github.com/NousResearch/hermes-agent/pull/4557))

- **Security: Secret Exfiltration Blocking** — Browser URLs and LLM responses are now scanned for secret patterns, blocking exfiltration attempts via URL encoding, base64, or prompt injection. Credential directory protections expanded to `.docker`, `.azure`, `.config/gh`. Execute_code sandbox output is redacted. ([#4483](https://github.com/NousResearch/hermes-agent/pull/4483), [#4360](https://github.com/NousResearch/hermes-agent/pull/4360), [#4305](https://github.com/NousResearch/hermes-agent/pull/4305), [#4327](https://github.com/NousResearch/hermes-agent/pull/4327))

---

## 🏗️ Core Agent & Architecture

### Provider & Model Support
- **Same-provider credential pools** — configure multiple API keys with automatic `least_used` rotation and 401 failover ([#4188](https://github.com/NousResearch/hermes-agent/pull/4188), [#4300](https://github.com/NousResearch/hermes-agent/pull/4300))
- **Credential pool preserved through smart routing** — pool state survives fallback provider switches and defers eager fallback on 429 ([#4361](https://github.com/NousResearch/hermes-agent/pull/4361))
- **Per-turn primary runtime restoration** — after fallback provider use, the agent automatically restores the primary provider on the next turn with transport recovery ([#4624](https://github.com/NousResearch/hermes-agent/pull/4624))
- **`developer` role for GPT-5 and Codex models** — uses OpenAI's recommended system message role for newer models ([#4498](https://github.com/NousResearch/hermes-agent/pull/4498))
- **Google model operational guidance** — Gemini and Gemma models get provider-specific prompting guidance ([#4641](https://github.com/NousResearch/hermes-agent/pull/4641))
- **Anthropic long-context tier 429 handling** — automatically reduces context to 200k when hitting tier limits ([#4747](https://github.com/NousResearch/hermes-agent/pull/4747))
- **URL-based auth for third-party Anthropic endpoints** + CI test fixes ([#4148](https://github.com/NousResearch/hermes-agent/pull/4148))
- **Bearer auth for MiniMax Anthropic endpoints** ([#4028](https://github.com/NousResearch/hermes-agent/pull/4028))
- **Fireworks context length detection** ([#4158](https://github.com/NousResearch/hermes-agent/pull/4158))
- **Standard DashScope international endpoint** for Alibaba provider ([#4133](https://github.com/NousResearch/hermes-agent/pull/4133), closes [#3912](https://github.com/NousResearch/hermes-agent/issues/3912))
- **Custom providers context_length** honored in hygiene compression ([#4085](https://github.com/NousResearch/hermes-agent/pull/4085))
- **Non-sk-ant keys** treated as regular API keys, not OAuth tokens ([#4093](https://github.com/NousResearch/hermes-agent/pull/4093))
- **Claude-sonnet-4.6** added to OpenRouter and Nous model lists ([#4157](https://github.com/NousResearch/hermes-agent/pull/4157))
- **Qwen 3.6 Plus Preview** added to model lists ([#4376](https://github.com/NousResearch/hermes-agent/pull/4376))
- **MiniMax M2.7** added to hermes model picker and OpenCode ([#4208](https://github.com/NousResearch/hermes-agent/pull/4208))
- **Auto-detect models from server probe** in custom endpoint setup ([#4218](https://github.com/NousResearch/hermes-agent/pull/4218))
- **Config.yaml single source of truth** for endpoint URLs — no more env var vs config.yaml conflicts ([#4165](https://github.com/NousResearch/hermes-agent/pull/4165))
- **Setup wizard no longer overwrites** custom endpoint config ([#4180](https://github.com/NousResearch/hermes-agent/pull/4180), closes [#4172](https://github.com/NousResearch/hermes-agent/issues/4172))
- **Unified setup wizard provider selection** with `hermes model` — single code path for both flows ([#4200](https://github.com/NousResearch/hermes-agent/pull/4200))
- **Root-level provider config** no longer overrides `model.provider` ([#4329](https://github.com/NousResearch/hermes-agent/pull/4329))
- **Rate-limit pairing rejection messages** to prevent spam ([#4081](https://github.com/NousResearch/hermes-agent/pull/4081))

### Agent Loop & Conversation
- **Preserve Anthropic thinking block signatures** across tool-use turns ([#4626](https://github.com/NousResearch/hermes-agent/pull/4626))
- **Classify think-only empty responses** before retrying — prevents infinite retry loops on models that produce thinking blocks without content ([#4645](https://github.com/NousResearch/hermes-agent/pull/4645))
- **Prevent compression death spiral** from API disconnects — stops the loop where compression triggers, fails, compresses again ([#4750](https://github.com/NousResearch/hermes-agent/pull/4750), closes [#2153](https://github.com/NousResearch/hermes-agent/issues/2153))
- **Persist compressed context** to gateway session after mid-run compression ([#4095](https://github.com/NousResearch/hermes-agent/pull/4095))
- **Context-exceeded error messages** now include actionable guidance ([#4155](https://github.com/NousResearch/hermes-agent/pull/4155), closes [#4061](https://github.com/NousResearch/hermes-agent/issues/4061))
- **Strip orphaned think/reasoning tags** from user-facing responses ([#4311](https://github.com/NousResearch/hermes-agent/pull/4311), closes [#4285](https://github.com/NousResearch/hermes-agent/issues/4285))
- **Harden Codex responses preflight** and stream error handling ([#4313](https://github.com/NousResearch/hermes-agent/pull/4313))
- **Deterministic call_id fallbacks** instead of random UUIDs for prompt cache consistency ([#3991](https://github.com/NousResearch/hermes-agent/pull/3991))
- **Context pressure warning spam** prevented after compression ([#4012](https://github.com/NousResearch/hermes-agent/pull/4012))
- **AsyncOpenAI created lazily** in trajectory compressor to avoid closed event loop errors ([#4013](https://github.com/NousResearch/hermes-agent/pull/4013))

### Memory & Sessions
- **Pluggable memory provider interface** — ABC-based plugin system for custom memory backends with profile isolation ([#4623](https://github.com/NousResearch/hermes-agent/pull/4623))
- **Honcho full integration parity** restored as reference memory provider plugin ([#4355](https://github.com/NousResearch/hermes-agent/pull/4355)) — @erosika
- **Honcho profile-scoped** host and peer resolution ([#4616](https://github.com/NousResearch/hermes-agent/pull/4616))
- **Memory flush state persisted** to prevent redundant re-flushes on gateway restart ([#4481](https://github.com/NousResearch/hermes-agent/pull/4481))
- **Memory provider tools** routed through sequential execution path ([#4803](https://github.com/NousResearch/hermes-agent/pull/4803))
- **Honcho config** written to instance-local path for profile isolation ([#4037](https://github.com/NousResearch/hermes-agent/pull/4037))
- **API server sessions** persist to shared SessionDB ([#4802](https://github.com/NousResearch/hermes-agent/pull/4802))
- **Token usage persisted** for non-CLI sessions ([#4627](https://github.com/NousResearch/hermes-agent/pull/4627))
- **Quote dotted terms in FTS5 queries** — fixes session search for terms containing dots ([#4549](https://github.com/NousResearch/hermes-agent/pull/4549))

---

## 📱 Messaging Platforms (Gateway)

### Gateway Core
- **Race condition fixes** — photo media loss, flood control, stuck sessions, and STT config issues resolved in one hardening pass ([#4727](https://github.com/NousResearch/hermes-agent/pull/4727))
- **Approval routing through running-agent guard** — `/approve` and `/deny` now route correctly when the agent is blocked waiting for approval instead of being swallowed as interrupts ([#4798](https://github.com/NousResearch/hermes-agent/pull/4798), [#4557](https://github.com/NousResearch/hermes-agent/pull/4557), closes [#4542](https://github.com/NousResearch/hermes-agent/issues/4542))
- **Resume agent after /approve** — tool result is no longer lost when executing blocked commands ([#4418](https://github.com/NousResearch/hermes-agent/pull/4418))
- **DM thread sessions seeded** with parent transcript to preserve context ([#4559](https://github.com/NousResearch/hermes-agent/pull/4559))
- **Skill-aware slash commands** — gateway dynamically registers installed skills as slash commands with paginated `/commands` list and Telegram 100-command cap ([#3934](https://github.com/NousResearch/hermes-agent/pull/3934), [#4005](https://github.com/NousResearch/hermes-agent/pull/4005), [#4006](https://github.com/NousResearch/hermes-agent/pull/4006), [#4010](https://github.com/NousResearch/hermes-agent/pull/4010), [#4023](https://github.com/NousResearch/hermes-agent/pull/4023))
- **Per-platform disabled skills** respected in Telegram menu and gateway dispatch ([#4799](https://github.com/NousResearch/hermes-agent/pull/4799))
- **Remove user-facing compression warnings** — cleaner message flow ([#4139](https://github.com/NousResearch/hermes-agent/pull/4139))
- **`-v/-q` flags wired to stderr logging** for gateway service ([#4474](https://github.com/NousResearch/hermes-agent/pull/4474))
- **HERMES_HOME remapped** to target user in system service unit ([#4456](https://github.com/NousResearch/hermes-agent/pull/4456))
- **Honor default for invalid bool-like config values** ([#4029](https://github.com/NousResearch/hermes-agent/pull/4029))
- **setsid instead of systemd-run** for `/update` command to avoid systemd permission issues ([#4104](https://github.com/NousResearch/hermes-agent/pull/4104), closes [#4017](https://github.com/NousResearch/hermes-agent/issues/4017))
- **'Initializing agent...'** shown on first message for better UX ([#4086](https://github.com/NousResearch/hermes-agent/pull/4086))
- **Allow running gateway service as root** for LXC/container environments ([#4732](https://github.com/NousResearch/hermes-agent/pull/4732))

### Telegram
- **32-char limit on command names** with collision avoidance ([#4211](https://github.com/NousResearch/hermes-agent/pull/4211))
- **Priority order enforced** in menu — core > plugins > skills ([#4023](https://github.com/NousResearch/hermes-agent/pull/4023))
- **Capped at 50 commands** — API rejects above ~60 ([#4006](https://github.com/NousResearch/hermes-agent/pull/4006))
- **Skip empty/whitespace text** to prevent 400 errors ([#4388](https://github.com/NousResearch/hermes-agent/pull/4388))
- **E2E gateway tests** added ([#4497](https://github.com/NousResearch/hermes-agent/pull/4497)) — @pefontana

### Discord
- **Button-based approval UI** — register `/approve` and `/deny` slash commands with interactive button prompts ([#4800](https://github.com/NousResearch/hermes-agent/pull/4800))
- **Configurable reactions** — `discord.reactions` config option to disable message processing reactions ([#4199](https://github.com/NousResearch/hermes-agent/pull/4199))
- **Skip reactions and auto-threading** for unauthorized users ([#4387](https://github.com/NousResearch/hermes-agent/pull/4387))

### Slack
- **Reply in thread** — `slack.reply_in_thread` config option for threaded responses ([#4643](https://github.com/NousResearch/hermes-agent/pull/4643), closes [#2662](https://github.com/NousResearch/hermes-agent/issues/2662))

### WhatsApp
- **Enforce require_mention in group chats** ([#4730](https://github.com/NousResearch/hermes-agent/pull/4730))

### Webhook
- **Platform support fixes** — skip home channel prompt, disable tool progress for webhook adapters ([#4660](https://github.com/NousResearch/hermes-agent/pull/4660))

### Matrix
- **E2EE decryption hardening** — request missing keys, auto-trust devices, retry buffered events ([#4083](https://github.com/NousResearch/hermes-agent/pull/4083))

---

## 🖥️ CLI & User Experience

### New Slash Commands
- **`/yolo`** — toggle dangerous command approvals on/off for the session ([#3990](https://github.com/NousResearch/hermes-agent/pull/3990))
- **`/btw`** — ephemeral side questions that don't affect the main conversation context ([#4161](https://github.com/NousResearch/hermes-agent/pull/4161))
- **`/profile`** — show active profile info without leaving the chat session ([#4027](https://github.com/NousResearch/hermes-agent/pull/4027))

### Interactive CLI
- **Inline diff previews** for write and patch operations in the tool activity feed ([#4411](https://github.com/NousResearch/hermes-agent/pull/4411), [#4423](https://github.com/NousResearch/hermes-agent/pull/4423))
- **TUI pinned to bottom** on startup — no more large blank spaces between response and input ([#4412](https://github.com/NousResearch/hermes-agent/pull/4412), [#4359](https://github.com/NousResearch/hermes-agent/pull/4359), closes [#4398](https://github.com/NousResearch/hermes-agent/issues/4398), [#4421](https://github.com/NousResearch/hermes-agent/issues/4421))
- **`/history` and `/resume`** now surface recent sessions directly instead of requiring search ([#4728](https://github.com/NousResearch/hermes-agent/pull/4728))
- **Cache tokens shown** in `/insights` overview so total adds up ([#4428](https://github.com/NousResearch/hermes-agent/pull/4428))
- **`--max-turns` CLI flag** for `hermes chat` to limit agent iterations ([#4314](https://github.com/NousResearch/hermes-agent/pull/4314))
- **Detect dragged file paths** instead of treating them as slash commands ([#4533](https://github.com/NousResearch/hermes-agent/pull/4533)) — @rolme
- **Allow empty strings and falsy values** in `config set` ([#4310](https://github.com/NousResearch/hermes-agent/pull/4310), closes [#4277](https://github.com/NousResearch/hermes-agent/issues/4277))
- **Voice mode in WSL** when PulseAudio bridge is configured ([#4317](https://github.com/NousResearch/hermes-agent/pull/4317))
- **Respect `NO_COLOR` env var** and `TERM=dumb` for accessibility ([#4079](https://github.com/NousResearch/hermes-agent/pull/4079), closes [#4066](https://github.com/NousResearch/hermes-agent/issues/4066)) — @SHL0MS
- **Correct shell reload instruction** for macOS/zsh users ([#4025](https://github.com/NousResearch/hermes-agent/pull/4025))
- **Zero exit code** on successful quiet mode queries ([#4613](https://github.com/NousResearch/hermes-agent/pull/4613), closes [#4601](https://github.com/NousResearch/hermes-agent/issues/4601)) — @devorun
- **on_session_end hook fires** on interrupted exits ([#4159](https://github.com/NousResearch/hermes-agent/pull/4159))
- **Profile list display** reads `model.default` key correctly ([#4160](https://github.com/NousResearch/hermes-agent/pull/4160))
- **Browser and TTS** shown in reconfigure menu ([#4041](https://github.com/NousResearch/hermes-agent/pull/4041))
- **Web backend priority** detection simplified ([#4036](https://github.com/NousResearch/hermes-agent/pull/4036))

### Setup & Configuration
- **Allowed_users preserved** during setup and quiet unconfigured provider warnings ([#4551](https://github.com/NousResearch/hermes-agent/pull/4551)) — @kshitijk4poor
- **Save API key to model config** for custom endpoints ([#4202](https://github.com/NousResearch/hermes-agent/pull/4202), closes [#4182](https://github.com/NousResearch/hermes-agent/issues/4182))
- **Claude Code credentials gated** behind explicit Hermes config in wizard trigger ([#4210](https://github.com/NousResearch/hermes-agent/pull/4210))
- **Atomic writes in save_config_value** to prevent config loss on interrupt ([#4298](https://github.com/NousResearch/hermes-agent/pull/4298), [#4320](https://github.com/NousResearch/hermes-agent/pull/4320))
- **Scopes field written** to Claude Code credentials on token refresh ([#4126](https://github.com/NousResearch/hermes-agent/pull/4126))

### Update System
- **Fork detection and upstream sync** in `hermes update` ([#4744](https://github.com/NousResearch/hermes-agent/pull/4744))
- **Preserve working optional extras** when one extra fails during update ([#4550](https://github.com/NousResearch/hermes-agent/pull/4550))
- **Handle conflicted git index** during hermes update ([#4735](https://github.com/NousResearch/hermes-agent/pull/4735))
- **Avoid launchd restart race** on macOS ([#4736](https://github.com/NousResearch/hermes-agent/pull/4736))
- **Missing subprocess.run() timeouts** added to doctor and status commands ([#4009](https://github.com/NousResearch/hermes-agent/pull/4009))

---

## 🔧 Tool System

### Browser
- **Camofox anti-detection browser backend** — local stealth browsing with auto-install via `hermes tools` ([#4008](https://github.com/NousResearch/hermes-agent/pull/4008))
- **Persistent Camofox sessions** with VNC URL discovery for visual debugging ([#4419](https://github.com/NousResearch/hermes-agent/pull/4419))
- **Skip SSRF check for local backends** (Camofox, headless Chromium) ([#4292](https://github.com/NousResearch/hermes-agent/pull/4292))
- **Configurable SSRF check** via `browser.allow_private_urls` ([#4198](https://github.com/NousResearch/hermes-agent/pull/4198)) — @nils010485
- **CAMOFOX_PORT=9377** added to Docker commands ([#4340](https://github.com/NousResearch/hermes-agent/pull/4340))

### File Operations
- **Inline diff previews** on write and patch actions ([#4411](https://github.com/NousResearch/hermes-agent/pull/4411), [#4423](https://github.com/NousResearch/hermes-agent/pull/4423))
- **Stale file detection** on write and patch — warns when file was modified externally since last read ([#4345](https://github.com/NousResearch/hermes-agent/pull/4345))
- **Staleness timestamp refreshed** after writes ([#4390](https://github.com/NousResearch/hermes-agent/pull/4390))
- **Size guard, dedup, and device blocking** on read_file ([#4315](https://github.com/NousResearch/hermes-agent/pull/4315))

### MCP
- **Stability fix pack** — reload timeout, shutdown cleanup, event loop handler, OAuth non-blocking ([#4757](https://github.com/NousResearch/hermes-agent/pull/4757), closes [#4462](https://github.com/NousResearch/hermes-agent/issues/4462), [#2537](https://github.com/NousResearch/hermes-agent/issues/2537))

### ACP (Editor Integration)
- **Client-provided MCP servers** registered as agent tools — editors pass their MCP servers to Hermes ([#4705](https://github.com/NousResearch/hermes-agent/pull/4705))

### Skills System
- **Size limits for agent writes** and **fuzzy matching for skill patch** — prevents oversized skill writes and improves edit reliability ([#4414](https://github.com/NousResearch/hermes-agent/pull/4414))
- **Validate hub bundle paths** before install — blocks path traversal in skill bundles ([#3986](https://github.com/NousResearch/hermes-agent/pull/3986))
- **Unified hermes-agent and hermes-agent-setup** into single skill ([#4332](https://github.com/NousResearch/hermes-agent/pull/4332))
- **Skill metadata type check** in extract_skill_conditions ([#4479](https://github.com/NousResearch/hermes-agent/pull/4479))

### New/Updated Skills
- **research-paper-writing** — full end-to-end research pipeline (replaced ml-paper-writing) ([#4654](https://github.com/NousResearch/hermes-agent/pull/4654)) — @SHL0MS
- **ascii-video** — text readability techniques and external layout oracle ([#4054](https://github.com/NousResearch/hermes-agent/pull/4054)) — @SHL0MS
- **youtube-transcript** updated for youtube-transcript-api v1.x ([#4455](https://github.com/NousResearch/hermes-agent/pull/4455)) — @el-analista
- **Skills browse and search page** added to documentation site ([#4500](https://github.com/NousResearch/hermes-agent/pull/4500)) — @IAvecilla

---

## 🔒 Security & Reliability

### Security Hardening
- **Block secret exfiltration** via browser URLs and LLM responses — scans for secret patterns in URL encoding, base64, and prompt injection vectors ([#4483](https://github.com/NousResearch/hermes-agent/pull/4483))
- **Redact secrets from execute_code sandbox output** ([#4360](https://github.com/NousResearch/hermes-agent/pull/4360))
- **Protect `.docker`, `.azure`, `.config/gh` credential directories** from read/write via file tools and terminal ([#4305](https://github.com/NousResearch/hermes-agent/pull/4305), [#4327](https://github.com/NousResearch/hermes-agent/pull/4327)) — @memosr
- **GitHub OAuth token patterns** added to redaction + snapshot redact flag ([#4295](https://github.com/NousResearch/hermes-agent/pull/4295))
- **Reject private and loopback IPs** in Telegram DoH fallback ([#4129](https://github.com/NousResearch/hermes-agent/pull/4129))
- **Reject path traversal** in credential file registration ([#4316](https://github.com/NousResearch/hermes-agent/pull/4316))
- **Validate tar archive member paths** on profile import — blocks zip-slip attacks ([#4318](https://github.com/NousResearch/hermes-agent/pull/4318))
- **Exclude auth.json and .env** from profile exports ([#4475](https://github.com/NousResearch/hermes-agent/pull/4475))

### Reliability
- **Prevent compression death spiral** from API disconnects ([#4750](https://github.com/NousResearch/hermes-agent/pull/4750), closes [#2153](https://github.com/NousResearch/hermes-agent/issues/2153))
- **Handle `is_closed` as method** in OpenAI SDK — prevents false positive client closure detection ([#4416](https://github.com/NousResearch/hermes-agent/pull/4416), closes [#4377](https://github.com/NousResearch/hermes-agent/issues/4377))
- **Exclude matrix from [all] extras** — python-olm is upstream-broken, prevents install failures ([#4615](https://github.com/NousResearch/hermes-agent/pull/4615), closes [#4178](https://github.com/NousResearch/hermes-agent/issues/4178))
- **OpenCode model routing** repaired ([#4508](https://github.com/NousResearch/hermes-agent/pull/4508))
- **Docker container image** optimized ([#4034](https://github.com/NousResearch/hermes-agent/pull/4034)) — @bcross

### Windows & Cross-Platform
- **Voice mode in WSL** with PulseAudio bridge ([#4317](https://github.com/NousResearch/hermes-agent/pull/4317))
- **Homebrew packaging** preparation ([#4099](https://github.com/NousResearch/hermes-agent/pull/4099))
- **CI fork conditionals** to prevent workflow failures on forks ([#4107](https://github.com/NousResearch/hermes-agent/pull/4107))

---

## 🐛 Notable Bug Fixes

- **Gateway approval blocked agent thread** — approval now blocks the agent thread like CLI does, preventing tool result loss ([#4557](https://github.com/NousResearch/hermes-agent/pull/4557), closes [#4542](https://github.com/NousResearch/hermes-agent/issues/4542))
- **Compression death spiral** from API disconnects — detected and halted instead of looping ([#4750](https://github.com/NousResearch/hermes-agent/pull/4750), closes [#2153](https://github.com/NousResearch/hermes-agent/issues/2153))
- **Anthropic thinking blocks lost** across tool-use turns ([#4626](https://github.com/NousResearch/hermes-agent/pull/4626))
- **Profile model config ignored** with `-p` flag — model.model now promoted to model.default correctly ([#4160](https://github.com/NousResearch/hermes-agent/pull/4160), closes [#4486](https://github.com/NousResearch/hermes-agent/issues/4486))
- **CLI blank space** between response and input area ([#4412](https://github.com/NousResearch/hermes-agent/pull/4412), [#4359](https://github.com/NousResearch/hermes-agent/pull/4359), closes [#4398](https://github.com/NousResearch/hermes-agent/issues/4398))
- **Dragged file paths** treated as slash commands instead of file references ([#4533](https://github.com/NousResearch/hermes-agent/pull/4533)) — @rolme
- **Orphaned `</think>` tags** leaking into user-facing responses ([#4311](https://github.com/NousResearch/hermes-agent/pull/4311), closes [#4285](https://github.com/NousResearch/hermes-agent/issues/4285))
- **OpenAI SDK `is_closed`** is a method not property — false positive client closure ([#4416](https://github.com/NousResearch/hermes-agent/pull/4416), closes [#4377](https://github.com/NousResearch/hermes-agent/issues/4377))
- **MCP OAuth server** could block Hermes startup instead of degrading gracefully ([#4757](https://github.com/NousResearch/hermes-agent/pull/4757), closes [#4462](https://github.com/NousResearch/hermes-agent/issues/4462))
- **MCP event loop closed** on shutdown with HTTP servers ([#4757](https://github.com/NousResearch/hermes-agent/pull/4757), closes [#2537](https://github.com/NousResearch/hermes-agent/issues/2537))
- **Alibaba provider** hardcoded to wrong endpoint ([#4133](https://github.com/NousResearch/hermes-agent/pull/4133), closes [#3912](https://github.com/NousResearch/hermes-agent/issues/3912))
- **Slack reply_in_thread** missing config option ([#4643](https://github.com/NousResearch/hermes-agent/pull/4643), closes [#2662](https://github.com/NousResearch/hermes-agent/issues/2662))
- **Quiet mode exit code** — successful `-q` queries no longer exit nonzero ([#4613](https://github.com/NousResearch/hermes-agent/pull/4613), closes [#4601](https://github.com/NousResearch/hermes-agent/issues/4601))
- **Mobile sidebar** shows only close button due to backdrop-filter issue in docs site ([#4207](https://github.com/NousResearch/hermes-agent/pull/4207)) — @xsmyile
- **Config restore reverted** by stale-branch squash merge — `_config_version` fixed ([#4440](https://github.com/NousResearch/hermes-agent/pull/4440))

---

## 🧪 Testing

- **Telegram gateway E2E tests** — full integration test suite for the Telegram adapter ([#4497](https://github.com/NousResearch/hermes-agent/pull/4497)) — @pefontana
- **11 real test failures fixed** plus sys.modules cascade poisoner resolved ([#4570](https://github.com/NousResearch/hermes-agent/pull/4570))
- **7 CI failures resolved** across hooks, plugins, and skill tests ([#3936](https://github.com/NousResearch/hermes-agent/pull/3936))
- **Codex 401 refresh tests** updated for CI compatibility ([#4166](https://github.com/NousResearch/hermes-agent/pull/4166))
- **Stale OPENAI_BASE_URL test** fixed ([#4217](https://github.com/NousResearch/hermes-agent/pull/4217))

---

## 📚 Documentation

- **Comprehensive documentation audit** — 9 HIGH and 20+ MEDIUM gaps fixed across 21 files ([#4087](https://github.com/NousResearch/hermes-agent/pull/4087))
- **Site navigation restructured** — features and platforms promoted to top-level ([#4116](https://github.com/NousResearch/hermes-agent/pull/4116))
- **Tool progress streaming** documented for API server and Open WebUI ([#4138](https://github.com/NousResearch/hermes-agent/pull/4138))
- **Telegram webhook mode** documentation ([#4089](https://github.com/NousResearch/hermes-agent/pull/4089))
- **Local LLM provider guides** — comprehensive setup guides with context length warnings ([#4294](https://github.com/NousResearch/hermes-agent/pull/4294))
- **WhatsApp allowlist behavior** clarified with `WHATSAPP_ALLOW_ALL_USERS` documentation ([#4293](https://github.com/NousResearch/hermes-agent/pull/4293))
- **Slack configuration options** — new config section in Slack docs ([#4644](https://github.com/NousResearch/hermes-agent/pull/4644))
- **Terminal backends section** expanded + docs build fixes ([#4016](https://github.com/NousResearch/hermes-agent/pull/4016))
- **Adding-providers guide** updated for unified setup flow ([#4201](https://github.com/NousResearch/hermes-agent/pull/4201))
- **ACP Zed config** fixed ([#4743](https://github.com/NousResearch/hermes-agent/pull/4743))
- **Community FAQ** entries for common workflows and troubleshooting ([#4797](https://github.com/NousResearch/hermes-agent/pull/4797))
- **Skills browse and search page** on docs site ([#4500](https://github.com/NousResearch/hermes-agent/pull/4500)) — @IAvecilla

---

## 👥 Contributors

### Core
- **@teknium1** — 135 commits across all subsystems

### Top Community Contributors
- **@kshitijk4poor** — 13 commits: preserve allowed_users during setup ([#4551](https://github.com/NousResearch/hermes-agent/pull/4551)), and various fixes
- **@erosika** — 12 commits: Honcho full integration parity restored as memory provider plugin ([#4355](https://github.com/NousResearch/hermes-agent/pull/4355))
- **@pefontana** — 9 commits: Telegram gateway E2E test suite ([#4497](https://github.com/NousResearch/hermes-agent/pull/4497))
- **@bcross** — 5 commits: Docker container image optimization ([#4034](https://github.com/NousResearch/hermes-agent/pull/4034))
- **@SHL0MS** — 4 commits: NO_COLOR/TERM=dumb support ([#4079](https://github.com/NousResearch/hermes-agent/pull/4079)), ascii-video skill updates ([#4054](https://github.com/NousResearch/hermes-agent/pull/4054)), research-paper-writing skill ([#4654](https://github.com/NousResearch/hermes-agent/pull/4654))

### All Contributors
@0xbyt4, @arasovic, @Bartok9, @bcross, @binhnt92, @camden-lowrance, @curtitoo, @Dakota, @Dave Tist, @Dean Kerr, @devorun, @dieutx, @Dilee, @el-analista, @erosika, @Gutslabs, @IAvecilla, @Jack, @Johannnnn506, @kshitijk4poor, @Laura Batalha, @Leegenux, @Lume, @MacroAnarchy, @maymuneth, @memosr, @NexVeridian, @Nick, @nils010485, @pefontana, @Penov, @rolme, @SHL0MS, @txchen, @xsmyile

### Issues Resolved from Community
@acsezen ([#2537](https://github.com/NousResearch/hermes-agent/issues/2537)), @arasovic ([#4285](https://github.com/NousResearch/hermes-agent/issues/4285)), @camden-lowrance ([#4462](https://github.com/NousResearch/hermes-agent/issues/4462)), @devorun ([#4601](https://github.com/NousResearch/hermes-agent/issues/4601)), @eloklam ([#4486](https://github.com/NousResearch/hermes-agent/issues/4486)), @HenkDz ([#3719](https://github.com/NousResearch/hermes-agent/issues/3719)), @hypotyposis ([#2153](https://github.com/NousResearch/hermes-agent/issues/2153)), @kazamak ([#4178](https://github.com/NousResearch/hermes-agent/issues/4178)), @lstep ([#4366](https://github.com/NousResearch/hermes-agent/issues/4366)), @Mark-Lok ([#4542](https://github.com/NousResearch/hermes-agent/issues/4542)), @NoJster ([#4421](https://github.com/NousResearch/hermes-agent/issues/4421)), @patp ([#2662](https://github.com/NousResearch/hermes-agent/issues/2662)), @pr0n ([#4601](https://github.com/NousResearch/hermes-agent/issues/4601)), @saulmc ([#4377](https://github.com/NousResearch/hermes-agent/issues/4377)), @SHL0MS ([#4060](https://github.com/NousResearch/hermes-agent/issues/4060), [#4061](https://github.com/NousResearch/hermes-agent/issues/4061), [#4066](https://github.com/NousResearch/hermes-agent/issues/4066), [#4172](https://github.com/NousResearch/hermes-agent/issues/4172), [#4277](https://github.com/NousResearch/hermes-agent/issues/4277)), @Z-Mackintosh ([#4398](https://github.com/NousResearch/hermes-agent/issues/4398))

---

**Full Changelog**: [v2026.3.30...v2026.4.3](https://github.com/NousResearch/hermes-agent/compare/v2026.3.30...v2026.4.3)

---

## Hermes Agent v0.6.0 (v2026.3.30)

- Tag: `v2026.3.30`
- Published: 2026-03-30T15:30:14Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.3.30
- Prerelease: False

# Hermes Agent v0.6.0 (v2026.3.30)

**Release Date:** March 30, 2026

> The multi-instance release — Profiles for running isolated agent instances, MCP server mode, Docker container, fallback provider chains, two new messaging platforms (Feishu/Lark and WeCom), Telegram webhook mode, Slack multi-workspace OAuth, 95 PRs and 16 resolved issues in 2 days.

---

## ✨ Highlights

- **Profiles — Multi-Instance Hermes** — Run multiple isolated Hermes instances from the same installation. Each profile gets its own config, memory, sessions, skills, and gateway service. Create with `hermes profile create`, switch with `hermes -p <name>`, export/import for sharing. Full token-lock isolation prevents two profiles from using the same bot credential. ([#3681](https://github.com/NousResearch/hermes-agent/pull/3681))

- **MCP Server Mode** — Expose Hermes conversations and sessions to any MCP-compatible client (Claude Desktop, Cursor, VS Code, etc.) via `hermes mcp serve`. Browse conversations, read messages, search across sessions, and manage attachments — all through the Model Context Protocol. Supports both stdio and Streamable HTTP transports. ([#3795](https://github.com/NousResearch/hermes-agent/pull/3795))

- **Docker Container** — Official Dockerfile for running Hermes Agent in a container. Supports both CLI and gateway modes with volume-mounted config. ([#3668](https://github.com/NousResearch/hermes-agent/pull/3668), closes [#850](https://github.com/NousResearch/hermes-agent/issues/850))

- **Ordered Fallback Provider Chain** — Configure multiple inference providers with automatic failover. When your primary provider returns errors or is unreachable, Hermes automatically tries the next provider in the chain. Configure via `fallback_providers` in config.yaml. ([#3813](https://github.com/NousResearch/hermes-agent/pull/3813), closes [#1734](https://github.com/NousResearch/hermes-agent/issues/1734))

- **Feishu/Lark Platform Support** — Full gateway adapter for Feishu (飞书) and Lark with event subscriptions, message cards, group chat, image/file attachments, and interactive card callbacks. ([#3799](https://github.com/NousResearch/hermes-agent/pull/3799), [#3817](https://github.com/NousResearch/hermes-agent/pull/3817), closes [#1788](https://github.com/NousResearch/hermes-agent/issues/1788))

- **WeCom (Enterprise WeChat) Platform Support** — New gateway adapter for WeCom (企业微信) with text/image/voice messages, group chats, and callback verification. ([#3847](https://github.com/NousResearch/hermes-agent/pull/3847))

- **Slack Multi-Workspace OAuth** — Connect a single Hermes gateway to multiple Slack workspaces via OAuth token file. Each workspace gets its own bot token, resolved dynamically per incoming event. ([#3903](https://github.com/NousResearch/hermes-agent/pull/3903))

- **Telegram Webhook Mode & Group Controls** — Run the Telegram adapter in webhook mode as an alternative to polling — faster response times and better for production deployments behind a reverse proxy. New group mention gating controls when the bot responds: always, only when @mentioned, or via regex triggers. ([#3880](https://github.com/NousResearch/hermes-agent/pull/3880), [#3870](https://github.com/NousResearch/hermes-agent/pull/3870))

- **Exa Search Backend** — Add Exa as an alternative web search and content extraction backend alongside Firecrawl and DuckDuckGo. Set `EXA_API_KEY` and configure as preferred backend. ([#3648](https://github.com/NousResearch/hermes-agent/pull/3648))

- **Skills & Credentials on Remote Backends** — Mount skill directories and credential files into Modal and Docker containers, so remote terminal sessions have access to the same skills and secrets as local execution. ([#3890](https://github.com/NousResearch/hermes-agent/pull/3890), [#3671](https://github.com/NousResearch/hermes-agent/pull/3671), closes [#3665](https://github.com/NousResearch/hermes-agent/issues/3665), [#3433](https://github.com/NousResearch/hermes-agent/issues/3433))

---

## 🏗️ Core Agent & Architecture

### Provider & Model Support
- **Ordered fallback provider chain** — automatic failover across multiple configured providers ([#3813](https://github.com/NousResearch/hermes-agent/pull/3813))
- **Fix api_mode on provider switch** — switching providers via `hermes model` now correctly clears stale `api_mode` instead of hardcoding `chat_completions`, fixing 404s for providers with Anthropic-compatible endpoints ([#3726](https://github.com/NousResearch/hermes-agent/pull/3726), [#3857](https://github.com/NousResearch/hermes-agent/pull/3857), closes [#3685](https://github.com/NousResearch/hermes-agent/issues/3685))
- **Stop silent OpenRouter fallback** — when no provider is configured, Hermes now raises a clear error instead of silently routing to OpenRouter ([#3807](https://github.com/NousResearch/hermes-agent/pull/3807), [#3862](https://github.com/NousResearch/hermes-agent/pull/3862))
- **Gemini 3.1 preview models** — added to OpenRouter and Nous Portal catalogs ([#3803](https://github.com/NousResearch/hermes-agent/pull/3803), closes [#3753](https://github.com/NousResearch/hermes-agent/issues/3753))
- **Gemini direct API context length** — full context length resolution for direct Google AI endpoints ([#3876](https://github.com/NousResearch/hermes-agent/pull/3876))
- **gpt-5.4-mini** added to Codex fallback catalog ([#3855](https://github.com/NousResearch/hermes-agent/pull/3855))
- **Curated model lists preferred** over live API probe when the probe returns fewer models ([#3856](https://github.com/NousResearch/hermes-agent/pull/3856), [#3867](https://github.com/NousResearch/hermes-agent/pull/3867))
- **User-friendly 429 rate limit messages** with Retry-After countdown ([#3809](https://github.com/NousResearch/hermes-agent/pull/3809))
- **Auxiliary client placeholder key** for local servers without auth requirements ([#3842](https://github.com/NousResearch/hermes-agent/pull/3842))
- **INFO-level logging** for auxiliary provider resolution ([#3866](https://github.com/NousResearch/hermes-agent/pull/3866))

### Agent Loop & Conversation
- **Subagent status reporting** — reports `completed` status when summary exists instead of generic failure ([#3829](https://github.com/NousResearch/hermes-agent/pull/3829))
- **Session log file updated during compression** — prevents stale file references after context compression ([#3835](https://github.com/NousResearch/hermes-agent/pull/3835))
- **Omit empty tools param** — sends no `tools` parameter when empty instead of `None`, fixing compatibility with strict providers ([#3820](https://github.com/NousResearch/hermes-agent/pull/3820))

### Profiles & Multi-Instance
- **Profiles system** — `hermes profile create/list/switch/delete/export/import/rename`. Each profile gets isolated HERMES_HOME, gateway service, CLI wrapper. Token locks prevent credential collisions. Tab completion for profile names. ([#3681](https://github.com/NousResearch/hermes-agent/pull/3681))
- **Profile-aware display paths** — all user-facing `~/.hermes` paths replaced with `display_hermes_home()` to show the correct profile directory ([#3623](https://github.com/NousResearch/hermes-agent/pull/3623))
- **Lazy display_hermes_home imports** — prevents `ImportError` during `hermes update` when modules cache stale bytecode ([#3776](https://github.com/NousResearch/hermes-agent/pull/3776))
- **HERMES_HOME for protected paths** — `.env` write-deny path now respects HERMES_HOME instead of hardcoded `~/.hermes` ([#3840](https://github.com/NousResearch/hermes-agent/pull/3840))

---

## 📱 Messaging Platforms (Gateway)

### New Platforms
- **Feishu/Lark** — Full adapter with event subscriptions, message cards, group chat, image/file attachments, interactive card callbacks ([#3799](https://github.com/NousResearch/hermes-agent/pull/3799), [#3817](https://github.com/NousResearch/hermes-agent/pull/3817))
- **WeCom (Enterprise WeChat)** — Text/image/voice messages, group chats, callback verification ([#3847](https://github.com/NousResearch/hermes-agent/pull/3847))

### Telegram
- **Webhook mode** — run as webhook endpoint instead of polling for production deployments ([#3880](https://github.com/NousResearch/hermes-agent/pull/3880))
- **Group mention gating & regex triggers** — configurable bot response behavior in groups: always, @mention-only, or regex-matched ([#3870](https://github.com/NousResearch/hermes-agent/pull/3870))
- **Gracefully handle deleted reply targets** — no more crashes when the message being replied to was deleted ([#3858](https://github.com/NousResearch/hermes-agent/pull/3858), closes [#3229](https://github.com/NousResearch/hermes-agent/issues/3229))

### Discord
- **Message processing reactions** — adds a reaction emoji while processing and removes it when done, giving visual feedback in channels ([#3871](https://github.com/NousResearch/hermes-agent/pull/3871))
- **DISCORD_IGNORE_NO_MENTION** — skip messages that @mention other users/bots but not Hermes ([#3640](https://github.com/NousResearch/hermes-agent/pull/3640))
- **Clean up deferred "thinking..."** — properly removes the "thinking..." indicator after slash commands complete ([#3674](https://github.com/NousResearch/hermes-agent/pull/3674), closes [#3595](https://github.com/NousResearch/hermes-agent/issues/3595))

### Slack
- **Multi-workspace OAuth** — connect to multiple Slack workspaces from a single gateway via OAuth token file ([#3903](https://github.com/NousResearch/hermes-agent/pull/3903))

### WhatsApp
- **Persistent aiohttp session** — reuse HTTP sessions across requests instead of creating new ones per message ([#3818](https://github.com/NousResearch/hermes-agent/pull/3818))
- **LID↔phone alias resolution** — correctly match Linked ID and phone number formats in allowlists ([#3830](https://github.com/NousResearch/hermes-agent/pull/3830))
- **Skip reply prefix in bot mode** — cleaner message formatting when running as a WhatsApp bot ([#3931](https://github.com/NousResearch/hermes-agent/pull/3931))

### Matrix
- **Native voice messages via MSC3245** — send voice messages as proper Matrix voice events instead of file attachments ([#3877](https://github.com/NousResearch/hermes-agent/pull/3877))

### Mattermost
- **Configurable mention behavior** — respond to messages without requiring @mention ([#3664](https://github.com/NousResearch/hermes-agent/pull/3664))

### Signal
- **URL-encode phone numbers** and correct attachment RPC parameter — fixes delivery failures with certain phone number formats ([#3670](https://github.com/NousResearch/hermes-agent/pull/3670)) — @kshitijk4poor

### Email
- **Close SMTP/IMAP connections on failure** — prevents connection leaks during error scenarios ([#3804](https://github.com/NousResearch/hermes-agent/pull/3804))

### Gateway Core
- **Atomic config writes** — use atomic file writes for config.yaml to prevent data loss during crashes ([#3800](https://github.com/NousResearch/hermes-agent/pull/3800))
- **Home channel env overrides** — apply environment variable overrides for home channels consistently ([#3796](https://github.com/NousResearch/hermes-agent/pull/3796), [#3808](https://github.com/NousResearch/hermes-agent/pull/3808))
- **Replace print() with logger** — BasePlatformAdapter now uses proper logging instead of print statements ([#3669](https://github.com/NousResearch/hermes-agent/pull/3669))
- **Cron delivery labels** — resolve human-friendly delivery labels via channel directory ([#3860](https://github.com/NousResearch/hermes-agent/pull/3860), closes [#1945](https://github.com/NousResearch/hermes-agent/issues/1945))
- **Cron [SILENT] tightening** — prevent agents from prefixing reports with [SILENT] to suppress delivery ([#3901](https://github.com/NousResearch/hermes-agent/pull/3901))
- **Background task media delivery** and vision download timeout fixes ([#3919](https://github.com/NousResearch/hermes-agent/pull/3919))
- **Boot-md hook** — example built-in hook to run a BOOT.md file on gateway startup ([#3733](https://github.com/NousResearch/hermes-agent/pull/3733))

---

## 🖥️ CLI & User Experience

### Interactive CLI
- **Configurable tool preview length** — show full file paths by default instead of truncating at 40 chars ([#3841](https://github.com/NousResearch/hermes-agent/pull/3841))
- **Tool token context display** — `hermes tools` checklist now shows estimated token cost per toolset ([#3805](https://github.com/NousResearch/hermes-agent/pull/3805))
- **/bg spinner TUI fix** — route background task spinner through the TUI widget to prevent status bar collision ([#3643](https://github.com/NousResearch/hermes-agent/pull/3643))
- **Prevent status bar wrapping** into duplicate rows ([#3883](https://github.com/NousResearch/hermes-agent/pull/3883)) — @kshitijk4poor
- **Handle closed stdout ValueError** in safe print paths — fixes crashes when stdout is closed during gateway thread shutdown ([#3843](https://github.com/NousResearch/hermes-agent/pull/3843), closes [#3534](https://github.com/NousResearch/hermes-agent/issues/3534))
- **Remove input() from /tools disable** — eliminates freeze in terminal when disabling tools ([#3918](https://github.com/NousResearch/hermes-agent/pull/3918))
- **TTY guard for interactive CLI commands** — prevent CPU spin when launched without a terminal ([#3933](https://github.com/NousResearch/hermes-agent/pull/3933))
- **Argparse entrypoint** — use argparse in the top-level launcher for cleaner error handling ([#3874](https://github.com/NousResearch/hermes-agent/pull/3874))
- **Lazy-initialized tools show yellow** in banner instead of red, reducing false alarm about "missing" tools ([#3822](https://github.com/NousResearch/hermes-agent/pull/3822))
- **Honcho tools shown in banner** when configured ([#3810](https://github.com/NousResearch/hermes-agent/pull/3810))

### Setup & Configuration
- **Auto-install matrix-nio** during `hermes setup` when Matrix is selected ([#3802](https://github.com/NousResearch/hermes-agent/pull/3802), [#3873](https://github.com/NousResearch/hermes-agent/pull/3873))
- **Session export stdout support** — export sessions to stdout with `-` for piping ([#3641](https://github.com/NousResearch/hermes-agent/pull/3641), closes [#3609](https://github.com/NousResearch/hermes-agent/issues/3609))
- **Configurable approval timeouts** — set how long dangerous command approval prompts wait before auto-denying ([#3886](https://github.com/NousResearch/hermes-agent/pull/3886), closes [#3765](https://github.com/NousResearch/hermes-agent/issues/3765))
- **Clear __pycache__ during update** — prevents stale bytecode ImportError after `hermes update` ([#3819](https://github.com/NousResearch/hermes-agent/pull/3819))

---

## 🔧 Tool System

### MCP
- **MCP Server Mode** — `hermes mcp serve` exposes conversations, sessions, and attachments to MCP clients via stdio or Streamable HTTP ([#3795](https://github.com/NousResearch/hermes-agent/pull/3795))
- **Dynamic tool discovery** — respond to `notifications/tools/list_changed` events to pick up new tools from MCP servers without reconnecting ([#3812](https://github.com/NousResearch/hermes-agent/pull/3812))
- **Non-deprecated HTTP transport** — switched from `sse_client` to `streamable_http_client` ([#3646](https://github.com/NousResearch/hermes-agent/pull/3646))

### Web Tools
- **Exa search backend** — alternative to Firecrawl and DuckDuckGo for web search and extraction ([#3648](https://github.com/NousResearch/hermes-agent/pull/3648))

### Browser
- **Guard against None LLM responses** in browser snapshot and vision tools ([#3642](https://github.com/NousResearch/hermes-agent/pull/3642))

### Terminal & Remote Backends
- **Mount skill directories** into Modal and Docker containers ([#3890](https://github.com/NousResearch/hermes-agent/pull/3890))
- **Mount credential files** into remote backends with mtime+size caching ([#3671](https://github.com/NousResearch/hermes-agent/pull/3671))
- **Preserve partial output** when commands time out instead of losing everything ([#3868](https://github.com/NousResearch/hermes-agent/pull/3868))
- **Stop marking persisted env vars as missing** on remote backends ([#3650](https://github.com/NousResearch/hermes-agent/pull/3650))

### Audio
- **.aac format support** in transcription tool ([#3865](https://github.com/NousResearch/hermes-agent/pull/3865), closes [#1963](https://github.com/NousResearch/hermes-agent/issues/1963))
- **Audio download retry** — retry logic for `cache_audio_from_url` matching the existing image download pattern ([#3401](https://github.com/NousResearch/hermes-agent/pull/3401)) — @binhnt92

### Vision
- **Reject non-image files** and enforce website-only policy for vision analysis ([#3845](https://github.com/NousResearch/hermes-agent/pull/3845))

### Tool Schema
- **Ensure name field** always present in tool definitions, fixing `KeyError: 'name'` crashes ([#3811](https://github.com/NousResearch/hermes-agent/pull/3811), closes [#3729](https://github.com/NousResearch/hermes-agent/issues/3729))

### ACP (Editor Integration)
- **Complete session management surface** for VS Code/Zed/JetBrains clients — proper task lifecycle, cancel support, session persistence ([#3675](https://github.com/NousResearch/hermes-agent/pull/3675))

---

## 🧩 Skills & Plugins

### Skills System
- **External skill directories** — configure additional skill directories via `skills.external_dirs` in config.yaml ([#3678](https://github.com/NousResearch/hermes-agent/pull/3678))
- **Category path traversal blocked** — prevents `../` attacks in skill category names ([#3844](https://github.com/NousResearch/hermes-agent/pull/3844))
- **parallel-cli moved to optional-skills** — reduces default skill footprint ([#3673](https://github.com/NousResearch/hermes-agent/pull/3673)) — @kshitijk4poor

### New Skills
- **memento-flashcards** — spaced repetition flashcard system ([#3827](https://github.com/NousResearch/hermes-agent/pull/3827))
- **songwriting-and-ai-music** — songwriting craft and AI music generation prompts ([#3834](https://github.com/NousResearch/hermes-agent/pull/3834))
- **SiYuan Note** — integration with SiYuan note-taking app ([#3742](https://github.com/NousResearch/hermes-agent/pull/3742))
- **Scrapling** — web scraping skill using Scrapling library ([#3742](https://github.com/NousResearch/hermes-agent/pull/3742))
- **one-three-one-rule** — communication framework skill ([#3797](https://github.com/NousResearch/hermes-agent/pull/3797))

### Plugin System
- **Plugin enable/disable commands** — `hermes plugins enable/disable <name>` for managing plugin state without removing them ([#3747](https://github.com/NousResearch/hermes-agent/pull/3747))
- **Plugin message injection** — plugins can now inject messages into the conversation stream on behalf of the user via `ctx.inject_message()` ([#3778](https://github.com/NousResearch/hermes-agent/pull/3778)) — @winglian
- **Honcho self-hosted support** — allow local Honcho instances without requiring an API key ([#3644](https://github.com/NousResearch/hermes-agent/pull/3644))

---

## 🔒 Security & Reliability

### Security Hardening
- **Hardened dangerous command detection** — expanded pattern matching for risky shell commands and added file tool path guards for sensitive locations (`/etc/`, `/boot/`, docker.sock) ([#3872](https://github.com/NousResearch/hermes-agent/pull/3872))
- **Sensitive path write checks** in approval system — catch writes to system config files through file tools, not just terminal ([#3859](https://github.com/NousResearch/hermes-agent/pull/3859))
- **Secret redaction expansion** — now covers ElevenLabs, Tavily, and Exa API keys ([#3920](https://github.com/NousResearch/hermes-agent/pull/3920))
- **Vision file rejection** — reject non-image files passed to vision analysis to prevent information disclosure ([#3845](https://github.com/NousResearch/hermes-agent/pull/3845))
- **Category path traversal blocking** — prevent directory traversal in skill category names ([#3844](https://github.com/NousResearch/hermes-agent/pull/3844))

### Reliability
- **Atomic config.yaml writes** — prevent data loss during gateway crashes ([#3800](https://github.com/NousResearch/hermes-agent/pull/3800))
- **Clear __pycache__ on update** — prevent stale bytecode from causing ImportError after updates ([#3819](https://github.com/NousResearch/hermes-agent/pull/3819))
- **Lazy imports for update safety** — prevent ImportError chains during `hermes update` when modules reference new functions ([#3776](https://github.com/NousResearch/hermes-agent/pull/3776))
- **Restore terminalbench2 from patch corruption** — recovered file damaged by patch tool's secret redaction ([#3801](https://github.com/NousResearch/hermes-agent/pull/3801))
- **Terminal timeout preserves partial output** — no more lost command output on timeout ([#3868](https://github.com/NousResearch/hermes-agent/pull/3868))

---

## 🐛 Notable Bug Fixes

- **OpenClaw migration model config overwrite** — migration no longer overwrites model config dict with a string ([#3924](https://github.com/NousResearch/hermes-agent/pull/3924)) — @0xbyt4
- **OpenClaw migration expanded** — covers full data footprint including sessions, cron, memory ([#3869](https://github.com/NousResearch/hermes-agent/pull/3869))
- **Telegram deleted reply targets** — gracefully handle replies to deleted messages instead of crashing ([#3858](https://github.com/NousResearch/hermes-agent/pull/3858))
- **Discord "thinking..." persistence** — properly cleans up deferred response indicators ([#3674](https://github.com/NousResearch/hermes-agent/pull/3674))
- **WhatsApp LID↔phone aliases** — fixes allowlist matching failures with Linked ID format ([#3830](https://github.com/NousResearch/hermes-agent/pull/3830))
- **Signal URL-encoded phone numbers** — fixes delivery failures with certain formats ([#3670](https://github.com/NousResearch/hermes-agent/pull/3670))
- **Email connection leaks** — properly close SMTP/IMAP connections on error ([#3804](https://github.com/NousResearch/hermes-agent/pull/3804))
- **_safe_print ValueError** — no more gateway thread crashes on closed stdout ([#3843](https://github.com/NousResearch/hermes-agent/pull/3843))
- **Tool schema KeyError 'name'** — ensure name field always present in tool definitions ([#3811](https://github.com/NousResearch/hermes-agent/pull/3811))
- **api_mode stale on provider switch** — correctly clear when switching providers via `hermes model` ([#3857](https://github.com/NousResearch/hermes-agent/pull/3857))

---

## 🧪 Testing

- Resolved 10+ CI failures across hooks, tiktoken, plugins, and skill tests ([#3848](https://github.com/NousResearch/hermes-agent/pull/3848), [#3721](https://github.com/NousResearch/hermes-agent/pull/3721), [#3936](https://github.com/NousResearch/hermes-agent/pull/3936))

---

## 📚 Documentation

- **Comprehensive OpenClaw migration guide** — step-by-step guide for migrating from OpenClaw/Claw3D to Hermes Agent ([#3864](https://github.com/NousResearch/hermes-agent/pull/3864), [#3900](https://github.com/NousResearch/hermes-agent/pull/3900))
- **Credential file passthrough docs** — document how to forward credential files and env vars to remote backends ([#3677](https://github.com/NousResearch/hermes-agent/pull/3677))
- **DuckDuckGo requirements clarified** — note runtime dependency on duckduckgo-search package ([#3680](https://github.com/NousResearch/hermes-agent/pull/3680))
- **Skills catalog updated** — added red-teaming category and optional skills listing ([#3745](https://github.com/NousResearch/hermes-agent/pull/3745))
- **Feishu docs MDX fix** — escape angle-bracket URLs that break Docusaurus build ([#3902](https://github.com/NousResearch/hermes-agent/pull/3902))

---

## 👥 Contributors

### Core
- **@teknium1** — 90 PRs across all subsystems

### Community Contributors
- **@kshitijk4poor** — 3 PRs: Signal phone number fix ([#3670](https://github.com/NousResearch/hermes-agent/pull/3670)), parallel-cli to optional-skills ([#3673](https://github.com/NousResearch/hermes-agent/pull/3673)), status bar wrapping fix ([#3883](https://github.com/NousResearch/hermes-agent/pull/3883))
- **@winglian** — 1 PR: Plugin message injection interface ([#3778](https://github.com/NousResearch/hermes-agent/pull/3778))
- **@binhnt92** — 1 PR: Audio download retry logic ([#3401](https://github.com/NousResearch/hermes-agent/pull/3401))
- **@0xbyt4** — 1 PR: OpenClaw migration model config fix ([#3924](https://github.com/NousResearch/hermes-agent/pull/3924))

### Issues Resolved from Community
@Material-Scientist ([#850](https://github.com/NousResearch/hermes-agent/issues/850)), @hanxu98121 ([#1734](https://github.com/NousResearch/hermes-agent/issues/1734)), @penwyp ([#1788](https://github.com/NousResearch/hermes-agent/issues/1788)), @dan-and ([#1945](https://github.com/NousResearch/hermes-agent/issues/1945)), @AdrianScott ([#1963](https://github.com/NousResearch/hermes-agent/issues/1963)), @clawdbot47 ([#3229](https://github.com/NousResearch/hermes-agent/issues/3229)), @alanfwilliams ([#3404](https://github.com/NousResearch/hermes-agent/issues/3404)), @kentimsit ([#3433](https://github.com/NousResearch/hermes-agent/issues/3433)), @hayka-pacha ([#3534](https://github.com/NousResearch/hermes-agent/issues/3534)), @primmer ([#3595](https://github.com/NousResearch/hermes-agent/issues/3595)), @dagelf ([#3609](https://github.com/NousResearch/hermes-agent/issues/3609)), @HenkDz ([#3685](https://github.com/NousResearch/hermes-agent/issues/3685)), @tmdgusya ([#3729](https://github.com/NousResearch/hermes-agent/issues/3729)), @TypQxQ ([#3753](https://github.com/NousResearch/hermes-agent/issues/3753)), @acsezen ([#3765](https://github.com/NousResearch/hermes-agent/issues/3765))

---

**Full Changelog**: [v2026.3.28...v2026.3.30](https://github.com/NousResearch/hermes-agent/compare/v2026.3.28...v2026.3.30)

---

## Hermes Agent v0.5.0 (v2026.3.28)

- Tag: `v2026.3.28`
- Published: 2026-03-28T20:12:05Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.3.28
- Prerelease: False

# Hermes Agent v0.5.0 (v2026.3.28)

**Release Date:** March 28, 2026

> The hardening release — Hugging Face provider, /model command overhaul, Telegram Private Chat Topics, native Modal SDK, plugin lifecycle hooks, tool-use enforcement for GPT models, Nix flake, 50+ security and reliability fixes, and a comprehensive supply chain audit.

---

## ✨ Highlights

- **Nous Portal now supports 400+ models** — The Nous Research inference portal has expanded dramatically, giving Hermes Agent users access to over 400 models through a single provider endpoint

- **Hugging Face as a first-class inference provider** — Full integration with HF Inference API including curated agentic model picker that maps to OpenRouter analogues, live `/models` endpoint probe, and setup wizard flow ([#3419](https://github.com/NousResearch/hermes-agent/pull/3419), [#3440](https://github.com/NousResearch/hermes-agent/pull/3440))

- **Telegram Private Chat Topics** — Project-based conversations with functional skill binding per topic, enabling isolated workflows within a single Telegram chat ([#3163](https://github.com/NousResearch/hermes-agent/pull/3163))

- **Native Modal SDK backend** — Replaced swe-rex dependency with native Modal SDK (`Sandbox.create.aio` + `exec.aio`), eliminating tunnels and simplifying the Modal terminal backend ([#3538](https://github.com/NousResearch/hermes-agent/pull/3538))

- **Plugin lifecycle hooks activated** — `pre_llm_call`, `post_llm_call`, `on_session_start`, and `on_session_end` hooks now fire in the agent loop and CLI/gateway, completing the plugin hook system ([#3542](https://github.com/NousResearch/hermes-agent/pull/3542))

- **Improved OpenAI Model Reliability** — Added `GPT_TOOL_USE_GUIDANCE` to prevent GPT models from describing intended actions instead of making tool calls, plus automatic stripping of stale budget warnings from conversation history that caused models to avoid tools across turns ([#3528](https://github.com/NousResearch/hermes-agent/pull/3528))

- **Nix flake** — Full uv2nix build, NixOS module with persistent container mode, auto-generated config keys from Python source, and suffix PATHs for agent-friendliness ([#20](https://github.com/NousResearch/hermes-agent/pull/20), [#3274](https://github.com/NousResearch/hermes-agent/pull/3274), [#3061](https://github.com/NousResearch/hermes-agent/pull/3061)) by @alt-glitch

- **Supply chain hardening** — Removed compromised `litellm` dependency, pinned all dependency version ranges, regenerated `uv.lock` with hashes, added CI workflow scanning PRs for supply chain attack patterns, and bumped deps to fix CVEs ([#2796](https://github.com/NousResearch/hermes-agent/pull/2796), [#2810](https://github.com/NousResearch/hermes-agent/pull/2810), [#2812](https://github.com/NousResearch/hermes-agent/pull/2812), [#2816](https://github.com/NousResearch/hermes-agent/pull/2816), [#3073](https://github.com/NousResearch/hermes-agent/pull/3073))

- **Anthropic output limits fix** — Replaced hardcoded 16K `max_tokens` with per-model native output limits (128K for Opus 4.6, 64K for Sonnet 4.6), fixing "Response truncated" and thinking-budget exhaustion on direct Anthropic API ([#3426](https://github.com/NousResearch/hermes-agent/pull/3426), [#3444](https://github.com/NousResearch/hermes-agent/pull/3444))

---

## 🏗️ Core Agent & Architecture

### New Provider: Hugging Face
- First-class Hugging Face Inference API integration with auth, setup wizard, and model picker ([#3419](https://github.com/NousResearch/hermes-agent/pull/3419))
- Curated model list mapping OpenRouter agentic defaults to HF equivalents — providers with 8+ curated models skip live `/models` probe for speed ([#3440](https://github.com/NousResearch/hermes-agent/pull/3440))
- Added glm-5-turbo to Z.AI provider model list ([#3095](https://github.com/NousResearch/hermes-agent/pull/3095))

### Provider & Model Improvements
- `/model` command overhaul — extracted shared `switch_model()` pipeline for CLI and gateway, custom endpoint support, provider-aware routing ([#2795](https://github.com/NousResearch/hermes-agent/pull/2795), [#2799](https://github.com/NousResearch/hermes-agent/pull/2799))
- Removed `/model` slash command from CLI and gateway in favor of `hermes model` subcommand ([#3080](https://github.com/NousResearch/hermes-agent/pull/3080))
- Preserve `custom` provider instead of silently remapping to `openrouter` ([#2792](https://github.com/NousResearch/hermes-agent/pull/2792))
- Read root-level `provider` and `base_url` from config.yaml into model config ([#3112](https://github.com/NousResearch/hermes-agent/pull/3112))
- Align Nous Portal model slugs with OpenRouter naming ([#3253](https://github.com/NousResearch/hermes-agent/pull/3253))
- Fix Alibaba provider default endpoint and model list ([#3484](https://github.com/NousResearch/hermes-agent/pull/3484))
- Allow MiniMax users to override `/v1` → `/anthropic` auto-correction ([#3553](https://github.com/NousResearch/hermes-agent/pull/3553))
- Migrate OAuth token refresh to `platform.claude.com` with fallback ([#3246](https://github.com/NousResearch/hermes-agent/pull/3246))

### Agent Loop & Conversation
- **Improved OpenAI model reliability** — `GPT_TOOL_USE_GUIDANCE` prevents GPT models from describing actions instead of calling tools + automatic budget warning stripping from history ([#3528](https://github.com/NousResearch/hermes-agent/pull/3528))
- **Surface lifecycle events** — All retry, fallback, and compression events now surface to the user as formatted messages ([#3153](https://github.com/NousResearch/hermes-agent/pull/3153))
- **Anthropic output limits** — Per-model native output limits instead of hardcoded 16K `max_tokens` ([#3426](https://github.com/NousResearch/hermes-agent/pull/3426))
- **Thinking-budget exhaustion detection** — Skip useless continuation retries when model uses all output tokens on reasoning ([#3444](https://github.com/NousResearch/hermes-agent/pull/3444))
- Always prefer streaming for API calls to prevent hung subagents ([#3120](https://github.com/NousResearch/hermes-agent/pull/3120))
- Restore safe non-streaming fallback after stream failures ([#3020](https://github.com/NousResearch/hermes-agent/pull/3020))
- Give subagents independent iteration budgets ([#3004](https://github.com/NousResearch/hermes-agent/pull/3004))
- Update `api_key` in `_try_activate_fallback` for subagent auth ([#3103](https://github.com/NousResearch/hermes-agent/pull/3103))
- Graceful return on max retries instead of crashing thread ([untagged commit](https://github.com/NousResearch/hermes-agent))
- Count compression restarts toward retry limit ([#3070](https://github.com/NousResearch/hermes-agent/pull/3070))
- Include tool tokens in preflight estimate, guard context probe persistence ([#3164](https://github.com/NousResearch/hermes-agent/pull/3164))
- Update context compressor limits after fallback activation ([#3305](https://github.com/NousResearch/hermes-agent/pull/3305))
- Validate empty user messages to prevent Anthropic API 400 errors ([#3322](https://github.com/NousResearch/hermes-agent/pull/3322))
- GLM reasoning-only and max-length handling ([#3010](https://github.com/NousResearch/hermes-agent/pull/3010))
- Increase API timeout default from 900s to 1800s for slow-thinking models ([#3431](https://github.com/NousResearch/hermes-agent/pull/3431))
- Send `max_tokens` for Claude/OpenRouter + retry SSE connection errors ([#3497](https://github.com/NousResearch/hermes-agent/pull/3497))
- Prevent AsyncOpenAI/httpx cross-loop deadlock in gateway mode ([#2701](https://github.com/NousResearch/hermes-agent/pull/2701)) by @ctlst

### Streaming & Reasoning
- **Persist reasoning across gateway session turns** with new schema v6 columns (`reasoning`, `reasoning_details`, `codex_reasoning_items`) ([#2974](https://github.com/NousResearch/hermes-agent/pull/2974))
- Detect and kill stale SSE connections ([untagged commit](https://github.com/NousResearch/hermes-agent))
- Fix stale stream detector race causing spurious `RemoteProtocolError` ([untagged commit](https://github.com/NousResearch/hermes-agent))
- Skip duplicate callback for `<think>`-extracted reasoning during streaming ([#3116](https://github.com/NousResearch/hermes-agent/pull/3116))
- Preserve reasoning fields in `rewrite_transcript` ([#3311](https://github.com/NousResearch/hermes-agent/pull/3311))
- Preserve Gemini thought signatures in streamed tool calls ([#2997](https://github.com/NousResearch/hermes-agent/pull/2997))
- Ensure first delta is fired during reasoning updates ([untagged commit](https://github.com/NousResearch/hermes-agent))

### Session & Memory
- **Session search recent sessions mode** — Omit query to browse recent sessions with titles, previews, and timestamps ([#2533](https://github.com/NousResearch/hermes-agent/pull/2533))
- **Session config surfacing** on `/new`, `/reset`, and auto-reset ([#3321](https://github.com/NousResearch/hermes-agent/pull/3321))
- **Third-party session isolation** — `--source` flag for isolating sessions by origin ([#3255](https://github.com/NousResearch/hermes-agent/pull/3255))
- Add `/resume` CLI handler, session log truncation guard, `reopen_session` API ([#3315](https://github.com/NousResearch/hermes-agent/pull/3315))
- Clear compressor summary and turn counter on `/clear` and `/new` ([#3102](https://github.com/NousResearch/hermes-agent/pull/3102))
- Surface silent SessionDB failures that cause session data loss ([#2999](https://github.com/NousResearch/hermes-agent/pull/2999))
- Session search fallback preview on summarization failure ([#3478](https://github.com/NousResearch/hermes-agent/pull/3478))
- Prevent stale memory overwrites by flush agent ([#2687](https://github.com/NousResearch/hermes-agent/pull/2687))

### Context Compression
- Replace dead `summary_target_tokens` with ratio-based scaling ([#2554](https://github.com/NousResearch/hermes-agent/pull/2554))
- Expose `compression.target_ratio`, `protect_last_n`, and `threshold` in `DEFAULT_CONFIG` ([untagged commit](https://github.com/NousResearch/hermes-agent))
- Restore sane defaults and cap summary at 12K tokens ([untagged commit](https://github.com/NousResearch/hermes-agent))
- Preserve transcript on `/compress` and hygiene compression ([#3556](https://github.com/NousResearch/hermes-agent/pull/3556))
- Update context pressure warnings and token estimates after compaction ([untagged commit](https://github.com/NousResearch/hermes-agent))

### Architecture & Dependencies
- **Remove mini-swe-agent dependency** — Inline Docker and Modal backends directly ([#2804](https://github.com/NousResearch/hermes-agent/pull/2804))
- **Replace swe-rex with native Modal SDK** for Modal backend ([#3538](https://github.com/NousResearch/hermes-agent/pull/3538))
- **Plugin lifecycle hooks** — `pre_llm_call`, `post_llm_call`, `on_session_start`, `on_session_end` now fire in the agent loop ([#3542](https://github.com/NousResearch/hermes-agent/pull/3542))
- Fix plugin toolsets invisible in `hermes tools` and standalone processes ([#3457](https://github.com/NousResearch/hermes-agent/pull/3457))
- Consolidate `get_hermes_home()` and `parse_reasoning_effort()` ([#3062](https://github.com/NousResearch/hermes-agent/pull/3062))
- Remove unused Hermes-native PKCE OAuth flow ([#3107](https://github.com/NousResearch/hermes-agent/pull/3107))
- Remove ~100 unused imports across 55 files ([#3016](https://github.com/NousResearch/hermes-agent/pull/3016))
- Fix 154 f-strings, simplify getattr/URL patterns, remove dead code ([#3119](https://github.com/NousResearch/hermes-agent/pull/3119))

---

## 📱 Messaging Platforms (Gateway)

### Telegram
- **Private Chat Topics** — Project-based conversations with functional skill binding per topic, enabling isolated workflows within a single Telegram chat ([#3163](https://github.com/NousResearch/hermes-agent/pull/3163))
- **Auto-discover fallback IPs via DNS-over-HTTPS** when `api.telegram.org` is unreachable ([#3376](https://github.com/NousResearch/hermes-agent/pull/3376))
- **Configurable reply threading mode** ([#2907](https://github.com/NousResearch/hermes-agent/pull/2907))
- Fall back to no `thread_id` on "Message thread not found" BadRequest ([#3390](https://github.com/NousResearch/hermes-agent/pull/3390))
- Self-reschedule reconnect when `start_polling` fails after 502 ([#3268](https://github.com/NousResearch/hermes-agent/pull/3268))

### Discord
- Stop phantom typing indicator after agent turn completes ([#3003](https://github.com/NousResearch/hermes-agent/pull/3003))

### Slack
- Send tool call progress messages to correct Slack thread ([#3063](https://github.com/NousResearch/hermes-agent/pull/3063))
- Scope progress thread fallback to Slack only ([#3488](https://github.com/NousResearch/hermes-agent/pull/3488))

### WhatsApp
- Download documents, audio, and video media from messages ([#2978](https://github.com/NousResearch/hermes-agent/pull/2978))

### Matrix
- Add missing Matrix entry in `PLATFORMS` dict ([#3473](https://github.com/NousResearch/hermes-agent/pull/3473))
- Harden e2ee access-token handling ([#3562](https://github.com/NousResearch/hermes-agent/pull/3562))
- Add backoff for `SyncError` in sync loop ([#3280](https://github.com/NousResearch/hermes-agent/pull/3280))

### Signal
- Track SSE keepalive comments as connection activity ([#3316](https://github.com/NousResearch/hermes-agent/pull/3316))

### Email
- Prevent unbounded growth of `_seen_uids` in EmailAdapter ([#3490](https://github.com/NousResearch/hermes-agent/pull/3490))

### Gateway Core
- **Config-gated `/verbose` command** for messaging platforms — toggle tool output verbosity from chat ([#3262](https://github.com/NousResearch/hermes-agent/pull/3262))
- **Background review notifications** delivered to user chat ([#3293](https://github.com/NousResearch/hermes-agent/pull/3293))
- **Retry transient send failures** and notify user on exhaustion ([#3288](https://github.com/NousResearch/hermes-agent/pull/3288))
- Recover from hung agents — `/stop` hard-kills session lock ([#3104](https://github.com/NousResearch/hermes-agent/pull/3104))
- Thread-safe `SessionStore` — protect `_entries` with `threading.Lock` ([#3052](https://github.com/NousResearch/hermes-agent/pull/3052))
- Fix gateway token double-counting with cached agents — use absolute set instead of increment ([#3306](https://github.com/NousResearch/hermes-agent/pull/3306), [#3317](https://github.com/NousResearch/hermes-agent/pull/3317))
- Fingerprint full auth token in agent cache signature ([#3247](https://github.com/NousResearch/hermes-agent/pull/3247))
- Silence background agent terminal output ([#3297](https://github.com/NousResearch/hermes-agent/pull/3297))
- Include per-platform `ALLOW_ALL` and `SIGNAL_GROUP` in startup allowlist check ([#3313](https://github.com/NousResearch/hermes-agent/pull/3313))
- Include user-local bin paths in systemd unit PATH ([#3527](https://github.com/NousResearch/hermes-agent/pull/3527))
- Track background task references in `GatewayRunner` ([#3254](https://github.com/NousResearch/hermes-agent/pull/3254))
- Add request timeouts to HA, Email, Mattermost, SMS adapters ([#3258](https://github.com/NousResearch/hermes-agent/pull/3258))
- Add media download retry to Mattermost, Slack, and base cache ([#3323](https://github.com/NousResearch/hermes-agent/pull/3323))
- Detect virtualenv path instead of hardcoding `venv/` ([#2797](https://github.com/NousResearch/hermes-agent/pull/2797))
- Use `TERMINAL_CWD` for context file discovery, not process cwd ([untagged commit](https://github.com/NousResearch/hermes-agent))
- Stop loading hermes repo AGENTS.md into gateway sessions (~10k wasted tokens) ([#2891](https://github.com/NousResearch/hermes-agent/pull/2891))

---

## 🖥️ CLI & User Experience

### Interactive CLI
- **Configurable busy input mode** + fix `/queue` always working ([#3298](https://github.com/NousResearch/hermes-agent/pull/3298))
- **Preserve user input on multiline paste** ([#3065](https://github.com/NousResearch/hermes-agent/pull/3065))
- **Tool generation callback** — streaming "preparing terminal…" updates during tool argument generation ([untagged commit](https://github.com/NousResearch/hermes-agent))
- Show tool progress for substantive tools, not just "preparing" ([untagged commit](https://github.com/NousResearch/hermes-agent))
- Buffer reasoning preview chunks and fix duplicate display ([#3013](https://github.com/NousResearch/hermes-agent/pull/3013))
- Prevent reasoning box from rendering 3x during tool-calling loops ([#3405](https://github.com/NousResearch/hermes-agent/pull/3405))
- Eliminate "Event loop is closed" / "Press ENTER to continue" during idle — three-layer fix with `neuter_async_httpx_del()`, custom exception handler, and stale client cleanup ([#3398](https://github.com/NousResearch/hermes-agent/pull/3398))
- Fix status bar shows 26K instead of 260K for token counts with trailing zeros ([#3024](https://github.com/NousResearch/hermes-agent/pull/3024))
- Fix status bar duplicates and degrades during long sessions ([#3291](https://github.com/NousResearch/hermes-agent/pull/3291))
- Refresh TUI before background task output to prevent status bar overlap ([#3048](https://github.com/NousResearch/hermes-agent/pull/3048))
- Suppress KawaiiSpinner animation under `patch_stdout` ([#2994](https://github.com/NousResearch/hermes-agent/pull/2994))
- Skip KawaiiSpinner when TUI handles tool progress ([#2973](https://github.com/NousResearch/hermes-agent/pull/2973))
- Guard `isatty()` against closed streams via `_is_tty` property ([#3056](https://github.com/NousResearch/hermes-agent/pull/3056))
- Ensure single closure of streaming boxes during tool generation ([untagged commit](https://github.com/NousResearch/hermes-agent))
- Cap context pressure percentage at 100% in display ([#3480](https://github.com/NousResearch/hermes-agent/pull/3480))
- Clean up HTML error messages in CLI display ([#3069](https://github.com/NousResearch/hermes-agent/pull/3069))
- Show HTTP status code and 400 body in API error output ([#3096](https://github.com/NousResearch/hermes-agent/pull/3096))
- Extract useful info from HTML error pages, dump debug on max retries ([untagged commit](https://github.com/NousResearch/hermes-agent))
- Prevent TypeError on startup when `base_url` is None ([#3068](https://github.com/NousResearch/hermes-agent/pull/3068))
- Prevent update crash in non-TTY environments ([#3094](https://github.com/NousResearch/hermes-agent/pull/3094))
- Handle EOFError in sessions delete/prune confirmation prompts ([#3101](https://github.com/NousResearch/hermes-agent/pull/3101))
- Catch KeyboardInterrupt during `flush_memories` on exit and in exit cleanup handlers ([#3025](https://github.com/NousResearch/hermes-agent/pull/3025), [#3257](https://github.com/NousResearch/hermes-agent/pull/3257))
- Guard `.strip()` against None values from YAML config ([#3552](https://github.com/NousResearch/hermes-agent/pull/3552))
- Guard `config.get()` against YAML null values to prevent AttributeError ([#3377](https://github.com/NousResearch/hermes-agent/pull/3377))
- Store asyncio task references to prevent GC mid-execution ([#3267](https://github.com/NousResearch/hermes-agent/pull/3267))

### Setup & Configuration
- Use explicit key mapping for returning-user menu dispatch instead of positional index ([#3083](https://github.com/NousResearch/hermes-agent/pull/3083))
- Use `sys.executable` for pip in update commands to fix PEP 668 ([#3099](https://github.com/NousResearch/hermes-agent/pull/3099))
- Harden `hermes update` against diverged history, non-main branches, and gateway edge cases ([#3492](https://github.com/NousResearch/hermes-agent/pull/3492))
- OpenClaw migration overwrites defaults and setup wizard skips imported sections — fixed ([#3282](https://github.com/NousResearch/hermes-agent/pull/3282))
- Stop recursive AGENTS.md walk, load top-level only ([#3110](https://github.com/NousResearch/hermes-agent/pull/3110))
- Add macOS Homebrew paths to browser and terminal PATH resolution ([#2713](https://github.com/NousResearch/hermes-agent/pull/2713))
- YAML boolean handling for `tool_progress` config ([#3300](https://github.com/NousResearch/hermes-agent/pull/3300))
- Reset default SOUL.md to baseline identity text ([#3159](https://github.com/NousResearch/hermes-agent/pull/3159))
- Reject relative cwd paths for container terminal backends ([untagged commit](https://github.com/NousResearch/hermes-agent))
- Add explicit `hermes-api-server` toolset for API server platform ([#3304](https://github.com/NousResearch/hermes-agent/pull/3304))
- Reorder setup wizard providers — OpenRouter first ([untagged commit](https://github.com/NousResearch/hermes-agent))

---

## 🔧 Tool System

### API Server
- **Idempotency-Key support**, body size limit, and OpenAI error envelope ([#2903](https://github.com/NousResearch/hermes-agent/pull/2903))
- Allow Idempotency-Key in CORS headers ([#3530](https://github.com/NousResearch/hermes-agent/pull/3530))
- Cancel orphaned agent + true interrupt on SSE disconnect ([#3427](https://github.com/NousResearch/hermes-agent/pull/3427))
- Fix streaming breaks when agent makes tool calls ([#2985](https://github.com/NousResearch/hermes-agent/pull/2985))

### Terminal & File Operations
- Handle addition-only hunks in V4A patch parser ([#3325](https://github.com/NousResearch/hermes-agent/pull/3325))
- Exponential backoff for persistent shell polling ([#2996](https://github.com/NousResearch/hermes-agent/pull/2996))
- Add timeout to subprocess calls in `context_references` ([#3469](https://github.com/NousResearch/hermes-agent/pull/3469))

### Browser & Vision
- Handle 402 insufficient credits error in vision tool ([#2802](https://github.com/NousResearch/hermes-agent/pull/2802))
- Fix `browser_vision` ignores `auxiliary.vision.timeout` config ([#2901](https://github.com/NousResearch/hermes-agent/pull/2901))
- Make browser command timeout configurable via config.yaml ([#2801](https://github.com/NousResearch/hermes-agent/pull/2801))

### MCP
- MCP toolset resolution for runtime and config ([#3252](https://github.com/NousResearch/hermes-agent/pull/3252))
- Add MCP tool name collision protection ([#3077](https://github.com/NousResearch/hermes-agent/pull/3077))

### Auxiliary LLM
- Guard aux LLM calls against None content + reasoning fallback + retry ([#3449](https://github.com/NousResearch/hermes-agent/pull/3449))
- Catch ImportError from `build_anthropic_client` in vision auto-detection ([#3312](https://github.com/NousResearch/hermes-agent/pull/3312))

### Other Tools
- Add request timeouts to `send_message_tool` HTTP calls ([#3162](https://github.com/NousResearch/hermes-agent/pull/3162)) by @memosr
- Auto-repair `jobs.json` with invalid control characters ([#3537](https://github.com/NousResearch/hermes-agent/pull/3537))
- Enable fine-grained tool streaming for Claude/OpenRouter ([#3497](https://github.com/NousResearch/hermes-agent/pull/3497))

---

## 🧩 Skills Ecosystem

### Skills System
- **Env var passthrough** for skills and user config — skills can declare environment variables to pass through ([#2807](https://github.com/NousResearch/hermes-agent/pull/2807))
- Cache skills prompt with shared `skill_utils` module for faster TTFT ([#3421](https://github.com/NousResearch/hermes-agent/pull/3421))
- Avoid redundant file re-read for skill conditions ([#2992](https://github.com/NousResearch/hermes-agent/pull/2992))
- Use Git Trees API to prevent silent subdirectory loss during install ([#2995](https://github.com/NousResearch/hermes-agent/pull/2995))
- Fix skills-sh install for deeply nested repo structures ([#2980](https://github.com/NousResearch/hermes-agent/pull/2980))
- Handle null metadata in skill frontmatter ([untagged commit](https://github.com/NousResearch/hermes-agent))
- Preserve trust for skills-sh identifiers + reduce resolution churn ([#3251](https://github.com/NousResearch/hermes-agent/pull/3251))
- Agent-created skills were incorrectly treated as untrusted community content — fixed ([untagged commit](https://github.com/NousResearch/hermes-agent))

### New Skills
- **G0DM0D3 godmode jailbreaking skill** + docs ([#3157](https://github.com/NousResearch/hermes-agent/pull/3157))
- **Docker management skill** added to optional-skills ([#3060](https://github.com/NousResearch/hermes-agent/pull/3060))
- **OpenClaw migration v2** — 17 new modules, terminal recap for migrating from OpenClaw to Hermes ([#2906](https://github.com/NousResearch/hermes-agent/pull/2906))

---

## 🔒 Security & Reliability

### Security Hardening
- **SSRF protection** added to `browser_navigate` ([#3058](https://github.com/NousResearch/hermes-agent/pull/3058))
- **SSRF protection** added to `vision_tools` and `web_tools` (hardened) ([#2679](https://github.com/NousResearch/hermes-agent/pull/2679))
- **Restrict subagent toolsets** to parent's enabled set ([#3269](https://github.com/NousResearch/hermes-agent/pull/3269))
- **Prevent zip-slip path traversal** in self-update ([#3250](https://github.com/NousResearch/hermes-agent/pull/3250))
- **Prevent shell injection** in `_expand_path` via `~user` path suffix ([#2685](https://github.com/NousResearch/hermes-agent/pull/2685))
- **Normalize input** before dangerous command detection ([#3260](https://github.com/NousResearch/hermes-agent/pull/3260))
- Make tirith block verdicts approvable instead of hard-blocking ([#3428](https://github.com/NousResearch/hermes-agent/pull/3428))
- Remove compromised `litellm`/`typer`/`platformdirs` from deps ([#2796](https://github.com/NousResearch/hermes-agent/pull/2796))
- Pin all dependency version ranges ([#2810](https://github.com/NousResearch/hermes-agent/pull/2810))
- Regenerate `uv.lock` with hashes, use lockfile in setup ([#2812](https://github.com/NousResearch/hermes-agent/pull/2812))
- Bump dependencies to fix CVEs + regenerate `uv.lock` ([#3073](https://github.com/NousResearch/hermes-agent/pull/3073))
- Supply chain audit CI workflow for PR scanning ([#2816](https://github.com/NousResearch/hermes-agent/pull/2816))

### Reliability
- **SQLite WAL write-lock contention** causing 15-20s TUI freeze — fixed ([#3385](https://github.com/NousResearch/hermes-agent/pull/3385))
- **SQLite concurrency hardening** + session transcript integrity ([#3249](https://github.com/NousResearch/hermes-agent/pull/3249))
- Prevent recurring cron job re-fire on gateway crash/restart loop ([#3396](https://github.com/NousResearch/hermes-agent/pull/3396))
- Mark cron session as ended after job completes ([#2998](https://github.com/NousResearch/hermes-agent/pull/2998))

---

## ⚡ Performance

- **TTFT startup optimizations** — salvaged easy-win startup improvements ([#3395](https://github.com/NousResearch/hermes-agent/pull/3395))
- Cache skills prompt with shared `skill_utils` module ([#3421](https://github.com/NousResearch/hermes-agent/pull/3421))
- Avoid redundant file re-read for skill conditions in prompt builder ([#2992](https://github.com/NousResearch/hermes-agent/pull/2992))

---

## 🐛 Notable Bug Fixes

- Fix gateway token double-counting with cached agents ([#3306](https://github.com/NousResearch/hermes-agent/pull/3306), [#3317](https://github.com/NousResearch/hermes-agent/pull/3317))
- Fix "Event loop is closed" / "Press ENTER to continue" during idle sessions ([#3398](https://github.com/NousResearch/hermes-agent/pull/3398))
- Fix reasoning box rendering 3x during tool-calling loops ([#3405](https://github.com/NousResearch/hermes-agent/pull/3405))
- Fix status bar shows 26K instead of 260K for token counts ([#3024](https://github.com/NousResearch/hermes-agent/pull/3024))
- Fix `/queue` always working regardless of config ([#3298](https://github.com/NousResearch/hermes-agent/pull/3298))
- Fix phantom Discord typing indicator after agent turn ([#3003](https://github.com/NousResearch/hermes-agent/pull/3003))
- Fix Slack progress messages appearing in wrong thread ([#3063](https://github.com/NousResearch/hermes-agent/pull/3063))
- Fix WhatsApp media downloads (documents, audio, video) ([#2978](https://github.com/NousResearch/hermes-agent/pull/2978))
- Fix Telegram "Message thread not found" killing progress messages ([#3390](https://github.com/NousResearch/hermes-agent/pull/3390))
- Fix OpenClaw migration overwriting defaults ([#3282](https://github.com/NousResearch/hermes-agent/pull/3282))
- Fix returning-user setup menu dispatching wrong section ([#3083](https://github.com/NousResearch/hermes-agent/pull/3083))
- Fix `hermes update` PEP 668 "externally-managed-environment" error ([#3099](https://github.com/NousResearch/hermes-agent/pull/3099))
- Fix subagents hitting `max_iterations` prematurely via shared budget ([#3004](https://github.com/NousResearch/hermes-agent/pull/3004))
- Fix YAML boolean handling for `tool_progress` config ([#3300](https://github.com/NousResearch/hermes-agent/pull/3300))
- Fix `config.get()` crashes on YAML null values ([#3377](https://github.com/NousResearch/hermes-agent/pull/3377))
- Fix `.strip()` crash on None values from YAML config ([#3552](https://github.com/NousResearch/hermes-agent/pull/3552))
- Fix hung agents on gateway — `/stop` now hard-kills session lock ([#3104](https://github.com/NousResearch/hermes-agent/pull/3104))
- Fix `_custom` provider silently remapped to `openrouter` ([#2792](https://github.com/NousResearch/hermes-agent/pull/2792))
- Fix Matrix missing from `PLATFORMS` dict ([#3473](https://github.com/NousResearch/hermes-agent/pull/3473))
- Fix Email adapter unbounded `_seen_uids` growth ([#3490](https://github.com/NousResearch/hermes-agent/pull/3490))

---

## 🧪 Testing

- Pin `agent-client-protocol` < 0.9 to handle breaking upstream release ([#3320](https://github.com/NousResearch/hermes-agent/pull/3320))
- Catch anthropic ImportError in vision auto-detection tests ([#3312](https://github.com/NousResearch/hermes-agent/pull/3312))
- Update retry-exhaust test for new graceful return behavior ([#3320](https://github.com/NousResearch/hermes-agent/pull/3320))
- Add regression tests for null metadata frontmatter ([untagged commit](https://github.com/NousResearch/hermes-agent))

---

## 📚 Documentation

- Update all docs for `/model` command overhaul and custom provider support ([#2800](https://github.com/NousResearch/hermes-agent/pull/2800))
- Fix stale and incorrect documentation across 18 files ([#2805](https://github.com/NousResearch/hermes-agent/pull/2805))
- Document 9 previously undocumented features ([#2814](https://github.com/NousResearch/hermes-agent/pull/2814))
- Add missing skills, CLI commands, and messaging env vars to docs ([#2809](https://github.com/NousResearch/hermes-agent/pull/2809))
- Fix api-server response storage documentation — SQLite, not in-memory ([#2819](https://github.com/NousResearch/hermes-agent/pull/2819))
- Quote pip install extras to fix zsh glob errors ([#2815](https://github.com/NousResearch/hermes-agent/pull/2815))
- Unify hooks documentation — add plugin hooks to hooks page, add `session:end` event ([untagged commit](https://github.com/NousResearch/hermes-agent))
- Clarify two-mode behavior in `session_search` schema description ([untagged commit](https://github.com/NousResearch/hermes-agent))
- Fix Discord Public Bot setting for Discord-provided invite link ([#3519](https://github.com/NousResearch/hermes-agent/pull/3519)) by @mehmoodosman
- Revise v0.4.0 changelog — fix feature attribution, reorder sections ([untagged commit](https://github.com/NousResearch/hermes-agent))

---

## 👥 Contributors

### Core
- **@teknium1** — 157 PRs covering the full scope of this release

### Community Contributors
- **@alt-glitch** (Siddharth Balyan) — 2 PRs: Nix flake with uv2nix build, NixOS module, and persistent container mode ([#20](https://github.com/NousResearch/hermes-agent/pull/20)); auto-generated config keys and suffix PATHs for Nix builds ([#3061](https://github.com/NousResearch/hermes-agent/pull/3061), [#3274](https://github.com/NousResearch/hermes-agent/pull/3274))
- **@ctlst** — 1 PR: Prevent AsyncOpenAI/httpx cross-loop deadlock in gateway mode ([#2701](https://github.com/NousResearch/hermes-agent/pull/2701))
- **@memosr** (memosr.eth) — 1 PR: Add request timeouts to `send_message_tool` HTTP calls ([#3162](https://github.com/NousResearch/hermes-agent/pull/3162))
- **@mehmoodosman** (Osman Mehmood) — 1 PR: Fix Discord docs for Public Bot setting ([#3519](https://github.com/NousResearch/hermes-agent/pull/3519))

### All Contributors
@alt-glitch, @ctlst, @mehmoodosman, @memosr, @teknium1

---

**Full Changelog**: [v2026.3.23...v2026.3.28](https://github.com/NousResearch/hermes-agent/compare/v2026.3.23...v2026.3.28)

---

## Hermes Agent v0.4.0 (v2026.3.23)

- Tag: `v2026.3.23`
- Published: 2026-03-24T05:34:23Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.3.23
- Prerelease: False

# Hermes Agent v0.4.0 (v2026.3.23)

**Release Date:** March 23, 2026

> The platform expansion release — OpenAI-compatible API server, 6 new messaging adapters, 4 new inference providers, MCP server management with OAuth 2.1, @ context references, gateway prompt caching, streaming enabled by default, and a sweeping reliability pass with 200+ bug fixes.

---

## ✨ Highlights

- **OpenAI-compatible API server** — Expose Hermes as an `/v1/chat/completions` endpoint with a new `/api/jobs` REST API for cron job management, hardened with input limits, field whitelists, SQLite-backed response persistence, and CORS origin protection ([#1756](https://github.com/NousResearch/hermes-agent/pull/1756), [#2450](https://github.com/NousResearch/hermes-agent/pull/2450), [#2456](https://github.com/NousResearch/hermes-agent/pull/2456), [#2451](https://github.com/NousResearch/hermes-agent/pull/2451), [#2472](https://github.com/NousResearch/hermes-agent/pull/2472))

- **6 new messaging platform adapters** — Signal, DingTalk, SMS (Twilio), Mattermost, Matrix, and Webhook adapters join Telegram, Discord, and WhatsApp. Gateway auto-reconnects failed platforms with exponential backoff ([#2206](https://github.com/NousResearch/hermes-agent/pull/2206), [#1685](https://github.com/NousResearch/hermes-agent/pull/1685), [#1688](https://github.com/NousResearch/hermes-agent/pull/1688), [#1683](https://github.com/NousResearch/hermes-agent/pull/1683), [#2166](https://github.com/NousResearch/hermes-agent/pull/2166), [#2584](https://github.com/NousResearch/hermes-agent/pull/2584))

- **@ context references** — Claude Code-style `@file` and `@url` context injection with tab completions in the CLI ([#2343](https://github.com/NousResearch/hermes-agent/pull/2343), [#2482](https://github.com/NousResearch/hermes-agent/pull/2482))

- **4 new inference providers** — GitHub Copilot (OAuth + token validation), Alibaba Cloud / DashScope, Kilo Code, and OpenCode Zen/Go ([#1924](https://github.com/NousResearch/hermes-agent/pull/1924), [#1879](https://github.com/NousResearch/hermes-agent/pull/1879) by @mchzimm, [#1673](https://github.com/NousResearch/hermes-agent/pull/1673), [#1666](https://github.com/NousResearch/hermes-agent/pull/1666), [#1650](https://github.com/NousResearch/hermes-agent/pull/1650))

- **MCP server management CLI** — `hermes mcp` commands for installing, configuring, and authenticating MCP servers with full OAuth 2.1 PKCE flow ([#2465](https://github.com/NousResearch/hermes-agent/pull/2465))

- **Gateway prompt caching** — Cache AIAgent instances per session, preserving Anthropic prompt cache across turns for dramatic cost reduction on long conversations ([#2282](https://github.com/NousResearch/hermes-agent/pull/2282), [#2284](https://github.com/NousResearch/hermes-agent/pull/2284), [#2361](https://github.com/NousResearch/hermes-agent/pull/2361))

- **Context compression overhaul** — Structured summaries with iterative updates, token-budget tail protection, configurable summary endpoint, and fallback model support ([#2323](https://github.com/NousResearch/hermes-agent/pull/2323), [#1727](https://github.com/NousResearch/hermes-agent/pull/1727), [#2224](https://github.com/NousResearch/hermes-agent/pull/2224))

- **Streaming enabled by default** — CLI streaming on by default with proper spinner/tool progress display during streaming mode, plus extensive linebreak and concatenation fixes ([#2340](https://github.com/NousResearch/hermes-agent/pull/2340), [#2161](https://github.com/NousResearch/hermes-agent/pull/2161), [#2258](https://github.com/NousResearch/hermes-agent/pull/2258))

---

## 🖥️ CLI & User Experience

### New Commands & Interactions
- **@ context completions** — Tab-completable `@file`/`@url` references that inject file content or web pages into the conversation ([#2482](https://github.com/NousResearch/hermes-agent/pull/2482), [#2343](https://github.com/NousResearch/hermes-agent/pull/2343))
- **`/statusbar`** — Toggle a persistent config bar showing model + provider info in the prompt ([#2240](https://github.com/NousResearch/hermes-agent/pull/2240), [#1917](https://github.com/NousResearch/hermes-agent/pull/1917))
- **`/queue`** — Queue prompts for the agent without interrupting the current run ([#2191](https://github.com/NousResearch/hermes-agent/pull/2191), [#2469](https://github.com/NousResearch/hermes-agent/pull/2469))
- **`/permission`** — Switch approval mode dynamically during a session ([#2207](https://github.com/NousResearch/hermes-agent/pull/2207))
- **`/browser`** — Interactive browser sessions from the CLI ([#2273](https://github.com/NousResearch/hermes-agent/pull/2273), [#1814](https://github.com/NousResearch/hermes-agent/pull/1814))
- **`/cost`** — Live pricing and usage tracking in gateway mode ([#2180](https://github.com/NousResearch/hermes-agent/pull/2180))
- **`/approve` and `/deny`** — Replaced bare text approval in gateway with explicit commands ([#2002](https://github.com/NousResearch/hermes-agent/pull/2002))

### Streaming & Display
- Streaming enabled by default in CLI ([#2340](https://github.com/NousResearch/hermes-agent/pull/2340))
- Show spinners and tool progress during streaming mode ([#2161](https://github.com/NousResearch/hermes-agent/pull/2161))
- Show reasoning/thinking blocks when `show_reasoning` enabled ([#2118](https://github.com/NousResearch/hermes-agent/pull/2118))
- Context pressure warnings for CLI and gateway ([#2159](https://github.com/NousResearch/hermes-agent/pull/2159))
- Fix: streaming chunks concatenated without whitespace ([#2258](https://github.com/NousResearch/hermes-agent/pull/2258))
- Fix: iteration boundary linebreak prevents stream concatenation ([#2413](https://github.com/NousResearch/hermes-agent/pull/2413))
- Fix: defer streaming linebreak to prevent blank line stacking ([#2473](https://github.com/NousResearch/hermes-agent/pull/2473))
- Fix: suppress spinner animation in non-TTY environments ([#2216](https://github.com/NousResearch/hermes-agent/pull/2216))
- Fix: display provider and endpoint in API error messages ([#2266](https://github.com/NousResearch/hermes-agent/pull/2266))
- Fix: resolve garbled ANSI escape codes in status printouts ([#2448](https://github.com/NousResearch/hermes-agent/pull/2448))
- Fix: update gold ANSI color to true-color format ([#2246](https://github.com/NousResearch/hermes-agent/pull/2246))
- Fix: normalize toolset labels and use skin colors in banner ([#1912](https://github.com/NousResearch/hermes-agent/pull/1912))

### CLI Polish
- Fix: prevent 'Press ENTER to continue...' on exit ([#2555](https://github.com/NousResearch/hermes-agent/pull/2555))
- Fix: flush stdout during agent loop to prevent macOS display freeze ([#1654](https://github.com/NousResearch/hermes-agent/pull/1654))
- Fix: show human-readable error when `hermes setup` hits permissions error ([#2196](https://github.com/NousResearch/hermes-agent/pull/2196))
- Fix: `/stop` command crash + UnboundLocalError in streaming media delivery ([#2463](https://github.com/NousResearch/hermes-agent/pull/2463))
- Fix: allow custom/local endpoints without API key ([#2556](https://github.com/NousResearch/hermes-agent/pull/2556))
- Fix: Kitty keyboard protocol Shift+Enter for Ghostty/WezTerm (attempted + reverted due to prompt_toolkit crash) ([#2345](https://github.com/NousResearch/hermes-agent/pull/2345), [#2349](https://github.com/NousResearch/hermes-agent/pull/2349))

### Configuration
- **`${ENV_VAR}` substitution** in config.yaml ([#2684](https://github.com/NousResearch/hermes-agent/pull/2684))
- **Real-time config reload** — config.yaml changes apply without restart ([#2210](https://github.com/NousResearch/hermes-agent/pull/2210))
- **`custom_models.yaml`** for user-managed model additions ([#2214](https://github.com/NousResearch/hermes-agent/pull/2214))
- **Priority-based context file selection** + CLAUDE.md support ([#2301](https://github.com/NousResearch/hermes-agent/pull/2301))
- **Merge nested YAML sections** instead of replacing on config update ([#2213](https://github.com/NousResearch/hermes-agent/pull/2213))
- Fix: config.yaml provider key overrides env var silently ([#2272](https://github.com/NousResearch/hermes-agent/pull/2272))
- Fix: log warning instead of silently swallowing config.yaml errors ([#2683](https://github.com/NousResearch/hermes-agent/pull/2683))
- Fix: disabled toolsets re-enable themselves after `hermes tools` ([#2268](https://github.com/NousResearch/hermes-agent/pull/2268))
- Fix: platform default toolsets silently override tool deselection ([#2624](https://github.com/NousResearch/hermes-agent/pull/2624))
- Fix: honor bare YAML `approvals.mode: off` ([#2620](https://github.com/NousResearch/hermes-agent/pull/2620))
- Fix: `hermes update` use `.[all]` extras with fallback ([#1728](https://github.com/NousResearch/hermes-agent/pull/1728))
- Fix: `hermes update` prompt before resetting working tree on stash conflicts ([#2390](https://github.com/NousResearch/hermes-agent/pull/2390))
- Fix: use git pull --rebase in update/install to avoid divergent branch error ([#2274](https://github.com/NousResearch/hermes-agent/pull/2274))
- Fix: add zprofile fallback and create zshrc on fresh macOS installs ([#2320](https://github.com/NousResearch/hermes-agent/pull/2320))
- Fix: remove `ANTHROPIC_BASE_URL` env var to avoid collisions ([#1675](https://github.com/NousResearch/hermes-agent/pull/1675))
- Fix: don't ask IMAP password if already in keyring or env ([#2212](https://github.com/NousResearch/hermes-agent/pull/2212))
- Fix: OpenCode Zen/Go show OpenRouter models instead of their own ([#2277](https://github.com/NousResearch/hermes-agent/pull/2277))

---

## 🏗️ Core Agent & Architecture

### New Providers
- **GitHub Copilot** — Full OAuth auth, API routing, token validation, and 400k context. ([#1924](https://github.com/NousResearch/hermes-agent/pull/1924), [#1896](https://github.com/NousResearch/hermes-agent/pull/1896), [#1879](https://github.com/NousResearch/hermes-agent/pull/1879) by @mchzimm, [#2507](https://github.com/NousResearch/hermes-agent/pull/2507))
- **Alibaba Cloud / DashScope** — Full integration with DashScope v1 runtime, model dot preservation, and 401 auth fixes ([#1673](https://github.com/NousResearch/hermes-agent/pull/1673), [#2332](https://github.com/NousResearch/hermes-agent/pull/2332), [#2459](https://github.com/NousResearch/hermes-agent/pull/2459))
- **Kilo Code** — First-class inference provider ([#1666](https://github.com/NousResearch/hermes-agent/pull/1666))
- **OpenCode Zen and OpenCode Go** — New provider backends ([#1650](https://github.com/NousResearch/hermes-agent/pull/1650), [#2393](https://github.com/NousResearch/hermes-agent/pull/2393) by @0xbyt4)
- **NeuTTS** — Local TTS provider backend with built-in setup flow, replacing the old optional skill ([#1657](https://github.com/NousResearch/hermes-agent/pull/1657), [#1664](https://github.com/NousResearch/hermes-agent/pull/1664))

### Provider Improvements
- **Eager fallback** to backup model on rate-limit errors ([#1730](https://github.com/NousResearch/hermes-agent/pull/1730))
- **Endpoint metadata** for custom model context and pricing; query local servers for actual context window size ([#1906](https://github.com/NousResearch/hermes-agent/pull/1906), [#2091](https://github.com/NousResearch/hermes-agent/pull/2091) by @dusterbloom)
- **Context length detection overhaul** — models.dev integration, provider-aware resolution, fuzzy matching for custom endpoints, `/v1/props` for llama.cpp ([#2158](https://github.com/NousResearch/hermes-agent/pull/2158), [#2051](https://github.com/NousResearch/hermes-agent/pull/2051), [#2403](https://github.com/NousResearch/hermes-agent/pull/2403))
- **Model catalog updates** — gpt-5.4-mini, gpt-5.4-nano, healer-alpha, haiku-4.5, minimax-m2.7, claude 4.6 at 1M context ([#1913](https://github.com/NousResearch/hermes-agent/pull/1913), [#1915](https://github.com/NousResearch/hermes-agent/pull/1915), [#1900](https://github.com/NousResearch/hermes-agent/pull/1900), [#2155](https://github.com/NousResearch/hermes-agent/pull/2155), [#2474](https://github.com/NousResearch/hermes-agent/pull/2474))
- **Custom endpoint improvements** — `model.base_url` in config.yaml, `api_mode` override for responses API, allow endpoints without API key, fail fast on missing keys ([#2330](https://github.com/NousResearch/hermes-agent/pull/2330), [#1651](https://github.com/NousResearch/hermes-agent/pull/1651), [#2556](https://github.com/NousResearch/hermes-agent/pull/2556), [#2445](https://github.com/NousResearch/hermes-agent/pull/2445), [#1994](https://github.com/NousResearch/hermes-agent/pull/1994), [#1998](https://github.com/NousResearch/hermes-agent/pull/1998))
- Inject model and provider into system prompt ([#1929](https://github.com/NousResearch/hermes-agent/pull/1929))
- Tie `api_mode` to provider config instead of env var ([#1656](https://github.com/NousResearch/hermes-agent/pull/1656))
- Fix: prevent Anthropic token leaking to third-party `anthropic_messages` providers ([#2389](https://github.com/NousResearch/hermes-agent/pull/2389))
- Fix: prevent Anthropic fallback from inheriting non-Anthropic `base_url` ([#2388](https://github.com/NousResearch/hermes-agent/pull/2388))
- Fix: `auxiliary_is_nous` flag never resets — leaked Nous tags to other providers ([#1713](https://github.com/NousResearch/hermes-agent/pull/1713))
- Fix: Anthropic `tool_choice 'none'` still allowed tool calls ([#1714](https://github.com/NousResearch/hermes-agent/pull/1714))
- Fix: Mistral parser nested JSON fallback extraction ([#2335](https://github.com/NousResearch/hermes-agent/pull/2335))
- Fix: MiniMax 401 auth resolved by defaulting to `anthropic_messages` ([#2103](https://github.com/NousResearch/hermes-agent/pull/2103))
- Fix: case-insensitive model family matching ([#2350](https://github.com/NousResearch/hermes-agent/pull/2350))
- Fix: ignore placeholder provider keys in activation checks ([#2358](https://github.com/NousResearch/hermes-agent/pull/2358))
- Fix: Preserve Ollama model:tag colons in context length detection ([#2149](https://github.com/NousResearch/hermes-agent/pull/2149))
- Fix: recognize Claude Code OAuth credentials in startup gate ([#1663](https://github.com/NousResearch/hermes-agent/pull/1663))
- Fix: detect Claude Code version dynamically for OAuth user-agent ([#1670](https://github.com/NousResearch/hermes-agent/pull/1670))
- Fix: OAuth flag stale after refresh/fallback ([#1890](https://github.com/NousResearch/hermes-agent/pull/1890))
- Fix: auxiliary client skips expired Codex JWT ([#2397](https://github.com/NousResearch/hermes-agent/pull/2397))

### Agent Loop
- **Gateway prompt caching** — Cache AIAgent per session, keep assistant turns, fix session restore ([#2282](https://github.com/NousResearch/hermes-agent/pull/2282), [#2284](https://github.com/NousResearch/hermes-agent/pull/2284), [#2361](https://github.com/NousResearch/hermes-agent/pull/2361))
- **Context compression overhaul** — Structured summaries, iterative updates, token-budget tail protection, configurable `summary_base_url` ([#2323](https://github.com/NousResearch/hermes-agent/pull/2323), [#1727](https://github.com/NousResearch/hermes-agent/pull/1727), [#2224](https://github.com/NousResearch/hermes-agent/pull/2224))
- **Pre-call sanitization and post-call tool guardrails** ([#1732](https://github.com/NousResearch/hermes-agent/pull/1732))
- **Auto-recover** from provider-rejected `tool_choice` by retrying without ([#2174](https://github.com/NousResearch/hermes-agent/pull/2174))
- **Background memory/skill review** replaces inline nudges ([#2235](https://github.com/NousResearch/hermes-agent/pull/2235))
- **SOUL.md as primary agent identity** instead of hardcoded default ([#1922](https://github.com/NousResearch/hermes-agent/pull/1922))
- Fix: prevent silent tool result loss during context compression ([#1993](https://github.com/NousResearch/hermes-agent/pull/1993))
- Fix: handle empty/null function arguments in tool call recovery ([#2163](https://github.com/NousResearch/hermes-agent/pull/2163))
- Fix: handle API refusal responses gracefully instead of crashing ([#2156](https://github.com/NousResearch/hermes-agent/pull/2156))
- Fix: prevent stuck agent loop on malformed tool calls ([#2114](https://github.com/NousResearch/hermes-agent/pull/2114))
- Fix: return JSON parse error to model instead of dispatching with empty args ([#2342](https://github.com/NousResearch/hermes-agent/pull/2342))
- Fix: consecutive assistant message merge drops content on mixed types ([#1703](https://github.com/NousResearch/hermes-agent/pull/1703))
- Fix: message role alternation violations in JSON recovery and error handler ([#1722](https://github.com/NousResearch/hermes-agent/pull/1722))
- Fix: `compression_attempts` resets each iteration — allowed unlimited compressions ([#1723](https://github.com/NousResearch/hermes-agent/pull/1723))
- Fix: `length_continue_retries` never resets — later truncations got fewer retries ([#1717](https://github.com/NousResearch/hermes-agent/pull/1717))
- Fix: compressor summary role violated consecutive-role constraint ([#1720](https://github.com/NousResearch/hermes-agent/pull/1720), [#1743](https://github.com/NousResearch/hermes-agent/pull/1743))
- Fix: remove hardcoded `gemini-3-flash-preview` as default summary model ([#2464](https://github.com/NousResearch/hermes-agent/pull/2464))
- Fix: correctly handle empty tool results ([#2201](https://github.com/NousResearch/hermes-agent/pull/2201))
- Fix: crash on None entry in `tool_calls` list ([#2209](https://github.com/NousResearch/hermes-agent/pull/2209) by @0xbyt4, [#2316](https://github.com/NousResearch/hermes-agent/pull/2316))
- Fix: per-thread persistent event loops in worker threads ([#2214](https://github.com/NousResearch/hermes-agent/pull/2214) by @jquesnelle)
- Fix: prevent 'event loop already running' when async tools run in parallel ([#2207](https://github.com/NousResearch/hermes-agent/pull/2207))
- Fix: strip ANSI at the source — clean terminal output before it reaches the model ([#2115](https://github.com/NousResearch/hermes-agent/pull/2115))
- Fix: skip top-level `cache_control` on role:tool for OpenRouter ([#2391](https://github.com/NousResearch/hermes-agent/pull/2391))
- Fix: delegate tool — save parent tool names before child construction mutates global ([#2083](https://github.com/NousResearch/hermes-agent/pull/2083) by @ygd58, [#1894](https://github.com/NousResearch/hermes-agent/pull/1894))
- Fix: only strip last assistant message if empty string ([#2326](https://github.com/NousResearch/hermes-agent/pull/2326))

### Session & Memory
- **Session search** and management slash commands ([#2198](https://github.com/NousResearch/hermes-agent/pull/2198))
- **Auto session titles** and `.hermes.md` project config ([#1712](https://github.com/NousResearch/hermes-agent/pull/1712))
- Fix: concurrent memory writes silently drop entries — added file locking ([#1726](https://github.com/NousResearch/hermes-agent/pull/1726))
- Fix: search all sources by default in `session_search` ([#1892](https://github.com/NousResearch/hermes-agent/pull/1892))
- Fix: handle hyphenated FTS5 queries and preserve quoted literals ([#1776](https://github.com/NousResearch/hermes-agent/pull/1776))
- Fix: skip corrupt lines in `load_transcript` instead of crashing ([#1744](https://github.com/NousResearch/hermes-agent/pull/1744))
- Fix: normalize session keys to prevent case-sensitive duplicates ([#2157](https://github.com/NousResearch/hermes-agent/pull/2157))
- Fix: prevent `session_search` crash when no sessions exist ([#2194](https://github.com/NousResearch/hermes-agent/pull/2194))
- Fix: reset token counters on new session for accurate usage display ([#2101](https://github.com/NousResearch/hermes-agent/pull/2101) by @InB4DevOps)
- Fix: prevent stale memory overwrites by flush agent ([#2687](https://github.com/NousResearch/hermes-agent/pull/2687))
- Fix: remove synthetic error message injection, fix session resume after repeated failures ([#2303](https://github.com/NousResearch/hermes-agent/pull/2303))
- Fix: quiet mode with `--resume` now passes conversation_history ([#2357](https://github.com/NousResearch/hermes-agent/pull/2357))
- Fix: unify resume logic in batch mode ([#2331](https://github.com/NousResearch/hermes-agent/pull/2331))

### Honcho Memory
- Honcho config fixes and @ context reference integration ([#2343](https://github.com/NousResearch/hermes-agent/pull/2343))
- Self-hosted / Docker configuration documentation ([#2475](https://github.com/NousResearch/hermes-agent/pull/2475))

---

## 📱 Messaging Platforms (Gateway)

### New Platform Adapters
- **Signal Messenger** — Full adapter with attachment handling, group message filtering, and Note to Self echo-back protection ([#2206](https://github.com/NousResearch/hermes-agent/pull/2206), [#2400](https://github.com/NousResearch/hermes-agent/pull/2400), [#2297](https://github.com/NousResearch/hermes-agent/pull/2297), [#2156](https://github.com/NousResearch/hermes-agent/pull/2156))
- **DingTalk** — Adapter with gateway wiring and setup docs ([#1685](https://github.com/NousResearch/hermes-agent/pull/1685), [#1690](https://github.com/NousResearch/hermes-agent/pull/1690), [#1692](https://github.com/NousResearch/hermes-agent/pull/1692))
- **SMS (Twilio)** ([#1688](https://github.com/NousResearch/hermes-agent/pull/1688))
- **Mattermost** — With @-mention-only channel filter ([#1683](https://github.com/NousResearch/hermes-agent/pull/1683), [#2443](https://github.com/NousResearch/hermes-agent/pull/2443))
- **Matrix** — With vision support and image caching ([#1683](https://github.com/NousResearch/hermes-agent/pull/1683), [#2520](https://github.com/NousResearch/hermes-agent/pull/2520))
- **Webhook** — Platform adapter for external event triggers ([#2166](https://github.com/NousResearch/hermes-agent/pull/2166))
- **OpenAI-compatible API server** — `/v1/chat/completions` endpoint with `/api/jobs` cron management ([#1756](https://github.com/NousResearch/hermes-agent/pull/1756), [#2450](https://github.com/NousResearch/hermes-agent/pull/2450), [#2456](https://github.com/NousResearch/hermes-agent/pull/2456))

### Telegram Improvements
- MarkdownV2 support — strikethrough, spoiler, blockquotes, escape parentheses/braces/backslashes/backticks ([#2199](https://github.com/NousResearch/hermes-agent/pull/2199), [#2200](https://github.com/NousResearch/hermes-agent/pull/2200) by @llbn, [#2386](https://github.com/NousResearch/hermes-agent/pull/2386))
- Auto-detect HTML tags and use `parse_mode=HTML` ([#1709](https://github.com/NousResearch/hermes-agent/pull/1709))
- Telegram group vision support + thread-based sessions ([#2153](https://github.com/NousResearch/hermes-agent/pull/2153))
- Auto-reconnect polling after network interruption ([#2517](https://github.com/NousResearch/hermes-agent/pull/2517))
- Aggregate split text messages before dispatching ([#1674](https://github.com/NousResearch/hermes-agent/pull/1674))
- Fix: streaming config bridge, not-modified, flood control ([#1782](https://github.com/NousResearch/hermes-agent/pull/1782), [#1783](https://github.com/NousResearch/hermes-agent/pull/1783))
- Fix: edited_message event crashes ([#2074](https://github.com/NousResearch/hermes-agent/pull/2074))
- Fix: retry 409 polling conflicts before giving up ([#2312](https://github.com/NousResearch/hermes-agent/pull/2312))
- Fix: topic delivery via `platform:chat_id:thread_id` format ([#2455](https://github.com/NousResearch/hermes-agent/pull/2455))

### Discord Improvements
- Document caching and text-file injection ([#2503](https://github.com/NousResearch/hermes-agent/pull/2503))
- Persistent typing indicator for DMs ([#2468](https://github.com/NousResearch/hermes-agent/pull/2468))
- Discord DM vision — inline images + attachment analysis ([#2186](https://github.com/NousResearch/hermes-agent/pull/2186))
- Persist thread participation across gateway restarts ([#1661](https://github.com/NousResearch/hermes-agent/pull/1661))
- Fix: gateway crash on non-ASCII guild names ([#2302](https://github.com/NousResearch/hermes-agent/pull/2302))
- Fix: thread permission errors ([#2073](https://github.com/NousResearch/hermes-agent/pull/2073))
- Fix: slash event routing in threads ([#2460](https://github.com/NousResearch/hermes-agent/pull/2460))
- Fix: remove bugged followup messages + `/ask` command ([#1836](https://github.com/NousResearch/hermes-agent/pull/1836))
- Fix: graceful WebSocket reconnection ([#2127](https://github.com/NousResearch/hermes-agent/pull/2127))
- Fix: voice channel TTS when streaming enabled ([#2322](https://github.com/NousResearch/hermes-agent/pull/2322))

### WhatsApp & Other Adapters
- WhatsApp: outbound `send_message` routing ([#1769](https://github.com/NousResearch/hermes-agent/pull/1769) by @sai-samarth), LID format self-chat ([#1667](https://github.com/NousResearch/hermes-agent/pull/1667)), `reply_prefix` config fix ([#1923](https://github.com/NousResearch/hermes-agent/pull/1923)), restart on bridge child exit ([#2334](https://github.com/NousResearch/hermes-agent/pull/2334)), image/bridge improvements ([#2181](https://github.com/NousResearch/hermes-agent/pull/2181))
- Matrix: correct `reply_to_message_id` parameter ([#1895](https://github.com/NousResearch/hermes-agent/pull/1895)), bare media types fix ([#1736](https://github.com/NousResearch/hermes-agent/pull/1736))
- Mattermost: MIME types for media attachments ([#2329](https://github.com/NousResearch/hermes-agent/pull/2329))

### Gateway Core
- **Auto-reconnect** failed platforms with exponential backoff ([#2584](https://github.com/NousResearch/hermes-agent/pull/2584))
- **Notify users when session auto-resets** ([#2519](https://github.com/NousResearch/hermes-agent/pull/2519))
- **Reply-to message context** for out-of-session replies ([#1662](https://github.com/NousResearch/hermes-agent/pull/1662))
- **Ignore unauthorized DMs** config option ([#1919](https://github.com/NousResearch/hermes-agent/pull/1919))
- Fix: `/reset` in thread-mode resets global session instead of thread ([#2254](https://github.com/NousResearch/hermes-agent/pull/2254))
- Fix: deliver MEDIA: files after streaming responses ([#2382](https://github.com/NousResearch/hermes-agent/pull/2382))
- Fix: cap interrupt recursion depth to prevent resource exhaustion ([#1659](https://github.com/NousResearch/hermes-agent/pull/1659))
- Fix: detect stopped processes and release stale locks on `--replace` ([#2406](https://github.com/NousResearch/hermes-agent/pull/2406), [#1908](https://github.com/NousResearch/hermes-agent/pull/1908))
- Fix: PID-based wait with force-kill for gateway restart ([#1902](https://github.com/NousResearch/hermes-agent/pull/1902))
- Fix: prevent `--replace` mode from killing the caller process ([#2185](https://github.com/NousResearch/hermes-agent/pull/2185))
- Fix: `/model` shows active fallback model instead of config default ([#1660](https://github.com/NousResearch/hermes-agent/pull/1660))
- Fix: `/title` command fails when session doesn't exist in SQLite yet ([#2379](https://github.com/NousResearch/hermes-agent/pull/2379) by @ten-jampa)
- Fix: process `/queue`'d messages after agent completion ([#2469](https://github.com/NousResearch/hermes-agent/pull/2469))
- Fix: strip orphaned `tool_results` + let `/reset` bypass running agent ([#2180](https://github.com/NousResearch/hermes-agent/pull/2180))
- Fix: prevent agents from starting gateway outside systemd management ([#2617](https://github.com/NousResearch/hermes-agent/pull/2617))
- Fix: prevent systemd restart storm on gateway connection failure ([#2327](https://github.com/NousResearch/hermes-agent/pull/2327))
- Fix: include resolved node path in systemd unit ([#1767](https://github.com/NousResearch/hermes-agent/pull/1767) by @sai-samarth)
- Fix: send error details to user in gateway outer exception handler ([#1966](https://github.com/NousResearch/hermes-agent/pull/1966))
- Fix: improve error handling for 429 usage limits and 500 context overflow ([#1839](https://github.com/NousResearch/hermes-agent/pull/1839))
- Fix: add all missing platform allowlist env vars to startup warning check ([#2628](https://github.com/NousResearch/hermes-agent/pull/2628))
- Fix: media delivery fails for file paths containing spaces ([#2621](https://github.com/NousResearch/hermes-agent/pull/2621))
- Fix: duplicate session-key collision in multi-platform gateway ([#2171](https://github.com/NousResearch/hermes-agent/pull/2171))
- Fix: Matrix and Mattermost never report as connected ([#1711](https://github.com/NousResearch/hermes-agent/pull/1711))
- Fix: PII redaction config never read — missing yaml import ([#1701](https://github.com/NousResearch/hermes-agent/pull/1701))
- Fix: NameError on skill slash commands ([#1697](https://github.com/NousResearch/hermes-agent/pull/1697))
- Fix: persist watcher metadata in checkpoint for crash recovery ([#1706](https://github.com/NousResearch/hermes-agent/pull/1706))
- Fix: pass `message_thread_id` in send_image_file, send_document, send_video ([#2339](https://github.com/NousResearch/hermes-agent/pull/2339))
- Fix: media-group aggregation on rapid successive photo messages ([#2160](https://github.com/NousResearch/hermes-agent/pull/2160))

---

## 🔧 Tool System

### MCP Enhancements
- **MCP server management CLI** + OAuth 2.1 PKCE auth ([#2465](https://github.com/NousResearch/hermes-agent/pull/2465))
- **Expose MCP servers as standalone toolsets** ([#1907](https://github.com/NousResearch/hermes-agent/pull/1907))
- **Interactive MCP tool configuration** in `hermes tools` ([#1694](https://github.com/NousResearch/hermes-agent/pull/1694))
- Fix: MCP-OAuth port mismatch, path traversal, and shared handler state ([#2552](https://github.com/NousResearch/hermes-agent/pull/2552))
- Fix: preserve MCP tool registrations across session resets ([#2124](https://github.com/NousResearch/hermes-agent/pull/2124))
- Fix: concurrent file access crash + duplicate MCP registration ([#2154](https://github.com/NousResearch/hermes-agent/pull/2154))
- Fix: normalise MCP schemas + expand session list columns ([#2102](https://github.com/NousResearch/hermes-agent/pull/2102))
- Fix: `tool_choice` `mcp_` prefix handling ([#1775](https://github.com/NousResearch/hermes-agent/pull/1775))

### Web Tool Backends
- **Tavily** as web search/extract/crawl backend ([#1731](https://github.com/NousResearch/hermes-agent/pull/1731))
- **Parallel** as alternative web search/extract backend ([#1696](https://github.com/NousResearch/hermes-agent/pull/1696))
- **Configurable web backend** — Firecrawl/BeautifulSoup/Playwright selection ([#2256](https://github.com/NousResearch/hermes-agent/pull/2256))
- Fix: whitespace-only env vars bypass web backend detection ([#2341](https://github.com/NousResearch/hermes-agent/pull/2341))

### New Tools
- **IMAP email** reading and sending ([#2173](https://github.com/NousResearch/hermes-agent/pull/2173))
- **STT (speech-to-text)** tool using Whisper API ([#2072](https://github.com/NousResearch/hermes-agent/pull/2072))
- **Route-aware pricing estimates** ([#1695](https://github.com/NousResearch/hermes-agent/pull/1695))

### Tool Improvements
- TTS: `base_url` support for OpenAI TTS provider ([#2064](https://github.com/NousResearch/hermes-agent/pull/2064) by @hanai)
- Vision: configurable timeout, tilde expansion in file paths, DM vision with multi-image and base64 fallback ([#2480](https://github.com/NousResearch/hermes-agent/pull/2480), [#2585](https://github.com/NousResearch/hermes-agent/pull/2585), [#2211](https://github.com/NousResearch/hermes-agent/pull/2211))
- Browser: race condition fix in session creation ([#1721](https://github.com/NousResearch/hermes-agent/pull/1721)), TypeError on unexpected LLM params ([#1735](https://github.com/NousResearch/hermes-agent/pull/1735))
- File tools: strip ANSI escape codes from write_file and patch content ([#2532](https://github.com/NousResearch/hermes-agent/pull/2532)), include pagination args in repeated search key ([#1824](https://github.com/NousResearch/hermes-agent/pull/1824) by @cutepawss), improve fuzzy matching accuracy + position calculation refactor ([#2096](https://github.com/NousResearch/hermes-agent/pull/2096), [#1681](https://github.com/NousResearch/hermes-agent/pull/1681))
- Code execution: resource leak and double socket close fix ([#2381](https://github.com/NousResearch/hermes-agent/pull/2381))
- Delegate: thread safety for concurrent subagent delegation ([#1672](https://github.com/NousResearch/hermes-agent/pull/1672)), preserve parent agent's tool list after delegation ([#1778](https://github.com/NousResearch/hermes-agent/pull/1778))
- Fix: make concurrent tool batching path-aware for file mutations ([#1914](https://github.com/NousResearch/hermes-agent/pull/1914))
- Fix: chunk long messages in `send_message_tool` before platform dispatch ([#1646](https://github.com/NousResearch/hermes-agent/pull/1646))
- Fix: add missing 'messaging' toolset ([#1718](https://github.com/NousResearch/hermes-agent/pull/1718))
- Fix: prevent unavailable tool names from leaking into model schemas ([#2072](https://github.com/NousResearch/hermes-agent/pull/2072))
- Fix: pass visited set by reference to prevent diamond dependency duplication ([#2311](https://github.com/NousResearch/hermes-agent/pull/2311))
- Fix: Daytona sandbox lookup migrated from `find_one` to `get/list` ([#2063](https://github.com/NousResearch/hermes-agent/pull/2063) by @rovle)

---

## 🧩 Skills Ecosystem

### Skills System Improvements
- **Agent-created skills** — Caution-level findings allowed, dangerous skills ask instead of block ([#1840](https://github.com/NousResearch/hermes-agent/pull/1840), [#2446](https://github.com/NousResearch/hermes-agent/pull/2446))
- **`--yes` flag** to bypass confirmation in `/skills install` and uninstall ([#1647](https://github.com/NousResearch/hermes-agent/pull/1647))
- **Disabled skills respected** across banner, system prompt, and slash commands ([#1897](https://github.com/NousResearch/hermes-agent/pull/1897))
- Fix: skills custom_tools import crash + sandbox file_tools integration ([#2239](https://github.com/NousResearch/hermes-agent/pull/2239))
- Fix: agent-created skills with pip requirements crash on install ([#2145](https://github.com/NousResearch/hermes-agent/pull/2145))
- Fix: race condition in `Skills.__init__` when `hub.yaml` missing ([#2242](https://github.com/NousResearch/hermes-agent/pull/2242))
- Fix: validate skill metadata before install and block duplicates ([#2241](https://github.com/NousResearch/hermes-agent/pull/2241))
- Fix: skills hub inspect/resolve — 4 bugs in inspect, redirects, discovery, tap list ([#2447](https://github.com/NousResearch/hermes-agent/pull/2447))
- Fix: agent-created skills keep working after session reset ([#2121](https://github.com/NousResearch/hermes-agent/pull/2121))

### New Skills
- **OCR-and-documents** — PDF/DOCX/XLS/PPTX/image OCR with optional GPU ([#2236](https://github.com/NousResearch/hermes-agent/pull/2236), [#2461](https://github.com/NousResearch/hermes-agent/pull/2461))
- **Huggingface-hub** bundled skill ([#1921](https://github.com/NousResearch/hermes-agent/pull/1921))
- **Sherlock OSINT** username search ([#1671](https://github.com/NousResearch/hermes-agent/pull/1671))
- **Meme-generation** — Image generator with Pillow ([#2344](https://github.com/NousResearch/hermes-agent/pull/2344))
- **Bioinformatics** gateway skill — index to 400+ bio skills ([#2387](https://github.com/NousResearch/hermes-agent/pull/2387))
- **Inference.sh** skill (terminal-based) ([#1686](https://github.com/NousResearch/hermes-agent/pull/1686))
- **Base blockchain** optional skill ([#1643](https://github.com/NousResearch/hermes-agent/pull/1643))
- **3D-model-viewer** optional skill ([#2226](https://github.com/NousResearch/hermes-agent/pull/2226))
- **FastMCP** optional skill ([#2113](https://github.com/NousResearch/hermes-agent/pull/2113))
- **Hermes-agent-setup** skill ([#1905](https://github.com/NousResearch/hermes-agent/pull/1905))

---

## 🔌 Plugin System Enhancements

- **TUI extension hooks** — Build custom CLIs on top of Hermes ([#2333](https://github.com/NousResearch/hermes-agent/pull/2333))
- **`hermes plugins install/remove/list`** commands ([#2337](https://github.com/NousResearch/hermes-agent/pull/2337))
- **Slash command registration** for plugins ([#2359](https://github.com/NousResearch/hermes-agent/pull/2359))
- **`session:end` lifecycle event** hook ([#1725](https://github.com/NousResearch/hermes-agent/pull/1725))
- Fix: require opt-in for project plugin discovery ([#2215](https://github.com/NousResearch/hermes-agent/pull/2215))

---

## 🔒 Security & Reliability

### Security
- **SSRF protection** for vision_tools and web_tools ([#2679](https://github.com/NousResearch/hermes-agent/pull/2679))
- **Shell injection prevention** in `_expand_path` via `~user` path suffix ([#2685](https://github.com/NousResearch/hermes-agent/pull/2685))
- **Block untrusted browser-origin** API server access ([#2451](https://github.com/NousResearch/hermes-agent/pull/2451))
- **Block sandbox backend creds** from subprocess env ([#1658](https://github.com/NousResearch/hermes-agent/pull/1658))
- **Block @ references** from reading secrets outside workspace ([#2601](https://github.com/NousResearch/hermes-agent/pull/2601) by @Gutslabs)
- **Malicious code pattern pre-exec scanner** for terminal_tool ([#2245](https://github.com/NousResearch/hermes-agent/pull/2245))
- **Harden terminal safety** and sandbox file writes ([#1653](https://github.com/NousResearch/hermes-agent/pull/1653))
- **PKCE verifier leak** fix + OAuth refresh Content-Type ([#1775](https://github.com/NousResearch/hermes-agent/pull/1775))
- **Eliminate SQL string formatting** in `execute()` calls ([#2061](https://github.com/NousResearch/hermes-agent/pull/2061) by @dusterbloom)
- **Harden jobs API** — input limits, field whitelist, startup check ([#2456](https://github.com/NousResearch/hermes-agent/pull/2456))

### Reliability
- Thread locks on 4 SessionDB methods ([#1704](https://github.com/NousResearch/hermes-agent/pull/1704))
- File locking for concurrent memory writes ([#1726](https://github.com/NousResearch/hermes-agent/pull/1726))
- Handle OpenRouter errors gracefully ([#2112](https://github.com/NousResearch/hermes-agent/pull/2112))
- Guard print() calls against OSError ([#1668](https://github.com/NousResearch/hermes-agent/pull/1668))
- Safely handle non-string inputs in redacting formatter ([#2392](https://github.com/NousResearch/hermes-agent/pull/2392), [#1700](https://github.com/NousResearch/hermes-agent/pull/1700))
- ACP: preserve session provider on model switch, persist sessions to disk ([#2380](https://github.com/NousResearch/hermes-agent/pull/2380), [#2071](https://github.com/NousResearch/hermes-agent/pull/2071))
- API server: persist ResponseStore to SQLite across restarts ([#2472](https://github.com/NousResearch/hermes-agent/pull/2472))
- Fix: `fetch_nous_models` always TypeError from positional args ([#1699](https://github.com/NousResearch/hermes-agent/pull/1699))
- Fix: resolve merge conflict markers in cli.py breaking startup ([#2347](https://github.com/NousResearch/hermes-agent/pull/2347))
- Fix: `minisweagent_path.py` missing from wheel ([#2098](https://github.com/NousResearch/hermes-agent/pull/2098) by @JiwaniZakir)

### Cron System
- **`[SILENT]` response** — cron agents can suppress delivery ([#1833](https://github.com/NousResearch/hermes-agent/pull/1833))
- **Scale missed-job grace window** with schedule frequency ([#2449](https://github.com/NousResearch/hermes-agent/pull/2449))
- **Recover recent one-shot jobs** ([#1918](https://github.com/NousResearch/hermes-agent/pull/1918))
- Fix: normalize `repeat<=0` to None — jobs deleted after first run when LLM passes -1 ([#2612](https://github.com/NousResearch/hermes-agent/pull/2612) by @Mibayy)
- Fix: Matrix added to scheduler delivery platform_map ([#2167](https://github.com/NousResearch/hermes-agent/pull/2167) by @buntingszn)
- Fix: naive ISO timestamps without timezone — jobs fire at wrong time ([#1729](https://github.com/NousResearch/hermes-agent/pull/1729))
- Fix: `get_due_jobs` reads `jobs.json` twice — race condition ([#1716](https://github.com/NousResearch/hermes-agent/pull/1716))
- Fix: silent jobs return empty response for delivery skip ([#2442](https://github.com/NousResearch/hermes-agent/pull/2442))
- Fix: stop injecting cron outputs into gateway session history ([#2313](https://github.com/NousResearch/hermes-agent/pull/2313))
- Fix: close abandoned coroutine when `asyncio.run()` raises RuntimeError ([#2317](https://github.com/NousResearch/hermes-agent/pull/2317))

---

## 🧪 Testing

- Resolve all consistently failing tests ([#2488](https://github.com/NousResearch/hermes-agent/pull/2488))
- Replace `FakePath` with `monkeypatch` for Python 3.12 compat ([#2444](https://github.com/NousResearch/hermes-agent/pull/2444))
- Align Hermes setup and full-suite expectations ([#1710](https://github.com/NousResearch/hermes-agent/pull/1710))

---

## 📚 Documentation

- Comprehensive docs update for recent features ([#1693](https://github.com/NousResearch/hermes-agent/pull/1693), [#2183](https://github.com/NousResearch/hermes-agent/pull/2183))
- Alibaba Cloud and DingTalk setup guides ([#1687](https://github.com/NousResearch/hermes-agent/pull/1687), [#1692](https://github.com/NousResearch/hermes-agent/pull/1692))
- Detailed skills documentation ([#2244](https://github.com/NousResearch/hermes-agent/pull/2244))
- Honcho self-hosted / Docker configuration ([#2475](https://github.com/NousResearch/hermes-agent/pull/2475))
- Context length detection FAQ and quickstart references ([#2179](https://github.com/NousResearch/hermes-agent/pull/2179))
- Fix docs inconsistencies across reference and user guides ([#1995](https://github.com/NousResearch/hermes-agent/pull/1995))
- Fix MCP install commands — use uv, not bare pip ([#1909](https://github.com/NousResearch/hermes-agent/pull/1909))
- Replace ASCII diagrams with Mermaid/lists ([#2402](https://github.com/NousResearch/hermes-agent/pull/2402))
- Gemini OAuth provider implementation plan ([#2467](https://github.com/NousResearch/hermes-agent/pull/2467))
- Discord Server Members Intent marked as required ([#2330](https://github.com/NousResearch/hermes-agent/pull/2330))
- Fix MDX build error in api-server.md ([#1787](https://github.com/NousResearch/hermes-agent/pull/1787))
- Align venv path to match installer ([#2114](https://github.com/NousResearch/hermes-agent/pull/2114))
- New skills added to hub index ([#2281](https://github.com/NousResearch/hermes-agent/pull/2281))

---

## 👥 Contributors

### Core
- **@teknium1** (Teknium) — 280 PRs

### Community Contributors
- **@mchzimm** (to_the_max) — GitHub Copilot provider integration ([#1879](https://github.com/NousResearch/hermes-agent/pull/1879))
- **@jquesnelle** (Jeffrey Quesnelle) — Per-thread persistent event loops fix ([#2214](https://github.com/NousResearch/hermes-agent/pull/2214))
- **@llbn** (lbn) — Telegram MarkdownV2 strikethrough, spoiler, blockquotes, and escape fixes ([#2199](https://github.com/NousResearch/hermes-agent/pull/2199), [#2200](https://github.com/NousResearch/hermes-agent/pull/2200))
- **@dusterbloom** — SQL injection prevention + local server context window querying ([#2061](https://github.com/NousResearch/hermes-agent/pull/2061), [#2091](https://github.com/NousResearch/hermes-agent/pull/2091))
- **@0xbyt4** — Anthropic tool_calls None guard + OpenCode-Go provider config fix ([#2209](https://github.com/NousResearch/hermes-agent/pull/2209), [#2393](https://github.com/NousResearch/hermes-agent/pull/2393))
- **@sai-samarth** (Saisamarth) — WhatsApp send_message routing + systemd node path ([#1769](https://github.com/NousResearch/hermes-agent/pull/1769), [#1767](https://github.com/NousResearch/hermes-agent/pull/1767))
- **@Gutslabs** (Guts) — Block @ references from reading secrets ([#2601](https://github.com/NousResearch/hermes-agent/pull/2601))
- **@Mibayy** (Mibay) — Cron job repeat normalization ([#2612](https://github.com/NousResearch/hermes-agent/pull/2612))
- **@ten-jampa** (Tenzin Jampa) — Gateway /title command fix ([#2379](https://github.com/NousResearch/hermes-agent/pull/2379))
- **@cutepawss** (lila) — File tools search pagination fix ([#1824](https://github.com/NousResearch/hermes-agent/pull/1824))
- **@hanai** (Hanai) — OpenAI TTS base_url support ([#2064](https://github.com/NousResearch/hermes-agent/pull/2064))
- **@rovle** (Lovre Pešut) — Daytona sandbox API migration ([#2063](https://github.com/NousResearch/hermes-agent/pull/2063))
- **@buntingszn** (bunting szn) — Matrix cron delivery support ([#2167](https://github.com/NousResearch/hermes-agent/pull/2167))
- **@InB4DevOps** — Token counter reset on new session ([#2101](https://github.com/NousResearch/hermes-agent/pull/2101))
- **@JiwaniZakir** (Zakir Jiwani) — Missing file in wheel fix ([#2098](https://github.com/NousResearch/hermes-agent/pull/2098))
- **@ygd58** (buray) — Delegate tool parent tool names fix ([#2083](https://github.com/NousResearch/hermes-agent/pull/2083))

---

**Full Changelog**: [v2026.3.17...v2026.3.23](https://github.com/NousResearch/hermes-agent/compare/v2026.3.17...v2026.3.23)

---

## Hermes Agent v0.3.0 (v2026.3.17)

- Tag: `v2026.3.17`
- Published: 2026-03-17T07:56:07Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.3.17
- Prerelease: False

# Hermes Agent v0.3.0 (v2026.3.17)

**Release Date:** March 17, 2026

> The streaming, plugins, and provider release — unified real-time token delivery, first-class plugin architecture, rebuilt provider system with Vercel AI Gateway, native Anthropic provider, smart approvals, live Chrome CDP browser connect, ACP IDE integration, Honcho memory, voice mode, persistent shell, and 50+ bug fixes across every platform.

---

## ✨ Highlights

- **Unified Streaming Infrastructure** — Real-time token-by-token delivery in CLI and all gateway platforms. Responses stream as they're generated instead of arriving as a block. ([#1538](https://github.com/NousResearch/hermes-agent/pull/1538))

- **First-Class Plugin Architecture** — Drop Python files into `~/.hermes/plugins/` to extend Hermes with custom tools, commands, and hooks. No forking required. ([#1544](https://github.com/NousResearch/hermes-agent/pull/1544), [#1555](https://github.com/NousResearch/hermes-agent/pull/1555))

- **Native Anthropic Provider** — Direct Anthropic API calls with Claude Code credential auto-discovery, OAuth PKCE flows, and native prompt caching. No OpenRouter middleman needed. ([#1097](https://github.com/NousResearch/hermes-agent/pull/1097))

- **Smart Approvals + /stop Command** — Codex-inspired approval system that learns which commands are safe and remembers your preferences. `/stop` kills the current agent run immediately. ([#1543](https://github.com/NousResearch/hermes-agent/pull/1543))

- **Honcho Memory Integration** — Async memory writes, configurable recall modes, session title integration, and multi-user isolation in gateway mode. By @erosika. ([#736](https://github.com/NousResearch/hermes-agent/pull/736))

- **Voice Mode** — Push-to-talk in CLI, voice notes in Telegram/Discord, Discord voice channel support, and local Whisper transcription via faster-whisper. ([#1299](https://github.com/NousResearch/hermes-agent/pull/1299), [#1185](https://github.com/NousResearch/hermes-agent/pull/1185), [#1429](https://github.com/NousResearch/hermes-agent/pull/1429))

- **Concurrent Tool Execution** — Multiple independent tool calls now run in parallel via ThreadPoolExecutor, significantly reducing latency for multi-tool turns. ([#1152](https://github.com/NousResearch/hermes-agent/pull/1152))

- **PII Redaction** — When `privacy.redact_pii` is enabled, personally identifiable information is automatically scrubbed before sending context to LLM providers. ([#1542](https://github.com/NousResearch/hermes-agent/pull/1542))

- **`/browser connect` via CDP** — Attach browser tools to a live Chrome instance through Chrome DevTools Protocol. Debug, inspect, and interact with pages you already have open. ([#1549](https://github.com/NousResearch/hermes-agent/pull/1549))

- **Vercel AI Gateway Provider** — Route Hermes through Vercel's AI Gateway for access to their model catalog and infrastructure. ([#1628](https://github.com/NousResearch/hermes-agent/pull/1628))

- **Centralized Provider Router** — Rebuilt provider system with `call_llm` API, unified `/model` command, auto-detect provider on model switch, and direct endpoint overrides for auxiliary/delegation clients. ([#1003](https://github.com/NousResearch/hermes-agent/pull/1003), [#1506](https://github.com/NousResearch/hermes-agent/pull/1506), [#1375](https://github.com/NousResearch/hermes-agent/pull/1375))

- **ACP Server (IDE Integration)** — VS Code, Zed, and JetBrains can now connect to Hermes as an agent backend, with full slash command support. ([#1254](https://github.com/NousResearch/hermes-agent/pull/1254), [#1532](https://github.com/NousResearch/hermes-agent/pull/1532))

- **Persistent Shell Mode** — Local and SSH terminal backends can maintain shell state across tool calls — cd, env vars, and aliases persist. By @alt-glitch. ([#1067](https://github.com/NousResearch/hermes-agent/pull/1067), [#1483](https://github.com/NousResearch/hermes-agent/pull/1483))

- **Agentic On-Policy Distillation (OPD)** — New RL training environment for distilling agent policies, expanding the Atropos training ecosystem. ([#1149](https://github.com/NousResearch/hermes-agent/pull/1149))

---

## 🏗️ Core Agent & Architecture

### Provider & Model Support
- **Centralized provider router** with `call_llm` API and unified `/model` command — switch models and providers seamlessly ([#1003](https://github.com/NousResearch/hermes-agent/pull/1003))
- **Vercel AI Gateway** provider support ([#1628](https://github.com/NousResearch/hermes-agent/pull/1628))
- **Auto-detect provider** when switching models via `/model` ([#1506](https://github.com/NousResearch/hermes-agent/pull/1506))
- **Direct endpoint overrides** for auxiliary and delegation clients — point vision/subagent calls at specific endpoints ([#1375](https://github.com/NousResearch/hermes-agent/pull/1375))
- **Native Anthropic auxiliary vision** — use Claude's native vision API instead of routing through OpenAI-compatible endpoints ([#1377](https://github.com/NousResearch/hermes-agent/pull/1377))
- Anthropic OAuth flow improvements — auto-run `claude setup-token`, reauthentication, PKCE state persistence, identity fingerprinting ([#1132](https://github.com/NousResearch/hermes-agent/pull/1132), [#1360](https://github.com/NousResearch/hermes-agent/pull/1360), [#1396](https://github.com/NousResearch/hermes-agent/pull/1396), [#1597](https://github.com/NousResearch/hermes-agent/pull/1597))
- Fix adaptive thinking without `budget_tokens` for Claude 4.6 models — by @ASRagab ([#1128](https://github.com/NousResearch/hermes-agent/pull/1128))
- Fix Anthropic cache markers through adapter — by @brandtcormorant ([#1216](https://github.com/NousResearch/hermes-agent/pull/1216))
- Retry Anthropic 429/529 errors and surface details to users — by @0xbyt4 ([#1585](https://github.com/NousResearch/hermes-agent/pull/1585))
- Fix Anthropic adapter max_tokens, fallback crash, proxy base_url — by @0xbyt4 ([#1121](https://github.com/NousResearch/hermes-agent/pull/1121))
- Fix DeepSeek V3 parser dropping multiple parallel tool calls — by @mr-emmett-one ([#1365](https://github.com/NousResearch/hermes-agent/pull/1365), [#1300](https://github.com/NousResearch/hermes-agent/pull/1300))
- Accept unlisted models with warning instead of rejecting ([#1047](https://github.com/NousResearch/hermes-agent/pull/1047), [#1102](https://github.com/NousResearch/hermes-agent/pull/1102))
- Skip reasoning params for unsupported OpenRouter models ([#1485](https://github.com/NousResearch/hermes-agent/pull/1485))
- MiniMax Anthropic API compatibility fix ([#1623](https://github.com/NousResearch/hermes-agent/pull/1623))
- Custom endpoint `/models` verification and `/v1` base URL suggestion ([#1480](https://github.com/NousResearch/hermes-agent/pull/1480))
- Resolve delegation providers from `custom_providers` config ([#1328](https://github.com/NousResearch/hermes-agent/pull/1328))
- Kimi model additions and User-Agent fix ([#1039](https://github.com/NousResearch/hermes-agent/pull/1039))
- Strip `call_id`/`response_item_id` for Mistral compatibility ([#1058](https://github.com/NousResearch/hermes-agent/pull/1058))

### Agent Loop & Conversation
- **Anthropic Context Editing API** support ([#1147](https://github.com/NousResearch/hermes-agent/pull/1147))
- Improved context compaction handoff summaries — compressor now preserves more actionable state ([#1273](https://github.com/NousResearch/hermes-agent/pull/1273))
- Sync session_id after mid-run context compression ([#1160](https://github.com/NousResearch/hermes-agent/pull/1160))
- Session hygiene threshold tuned to 50% for more proactive compression ([#1096](https://github.com/NousResearch/hermes-agent/pull/1096), [#1161](https://github.com/NousResearch/hermes-agent/pull/1161))
- Include session ID in system prompt via `--pass-session-id` flag ([#1040](https://github.com/NousResearch/hermes-agent/pull/1040))
- Prevent closed OpenAI client reuse across retries ([#1391](https://github.com/NousResearch/hermes-agent/pull/1391))
- Sanitize chat payloads and provider precedence ([#1253](https://github.com/NousResearch/hermes-agent/pull/1253))
- Handle dict tool call arguments from Codex and local backends ([#1393](https://github.com/NousResearch/hermes-agent/pull/1393), [#1440](https://github.com/NousResearch/hermes-agent/pull/1440))

### Memory & Sessions
- **Improve memory prioritization** — user preferences and corrections weighted above procedural knowledge ([#1548](https://github.com/NousResearch/hermes-agent/pull/1548))
- Tighter memory and session recall guidance in system prompts ([#1329](https://github.com/NousResearch/hermes-agent/pull/1329))
- Persist CLI token counts to session DB for `/insights` ([#1498](https://github.com/NousResearch/hermes-agent/pull/1498))
- Keep Honcho recall out of the cached system prefix ([#1201](https://github.com/NousResearch/hermes-agent/pull/1201))
- Correct `seed_ai_identity` to use `session.add_messages()` ([#1475](https://github.com/NousResearch/hermes-agent/pull/1475))
- Isolate Honcho session routing for multi-user gateway ([#1500](https://github.com/NousResearch/hermes-agent/pull/1500))

---

## 📱 Messaging Platforms (Gateway)

### Gateway Core
- **System gateway service mode** — run as a system-level systemd service, not just user-level ([#1371](https://github.com/NousResearch/hermes-agent/pull/1371))
- **Gateway install scope prompts** — choose user vs system scope during setup ([#1374](https://github.com/NousResearch/hermes-agent/pull/1374))
- **Reasoning hot reload** — change reasoning settings without restarting the gateway ([#1275](https://github.com/NousResearch/hermes-agent/pull/1275))
- Default group sessions to per-user isolation — no more shared state across users in group chats ([#1495](https://github.com/NousResearch/hermes-agent/pull/1495), [#1417](https://github.com/NousResearch/hermes-agent/pull/1417))
- Harden gateway restart recovery ([#1310](https://github.com/NousResearch/hermes-agent/pull/1310))
- Cancel active runs during shutdown ([#1427](https://github.com/NousResearch/hermes-agent/pull/1427))
- SSL certificate auto-detection for NixOS and non-standard systems ([#1494](https://github.com/NousResearch/hermes-agent/pull/1494))
- Auto-detect D-Bus session bus for `systemctl --user` on headless servers ([#1601](https://github.com/NousResearch/hermes-agent/pull/1601))
- Auto-enable systemd linger during gateway install on headless servers ([#1334](https://github.com/NousResearch/hermes-agent/pull/1334))
- Fall back to module entrypoint when `hermes` is not on PATH ([#1355](https://github.com/NousResearch/hermes-agent/pull/1355))
- Fix dual gateways on macOS launchd after `hermes update` ([#1567](https://github.com/NousResearch/hermes-agent/pull/1567))
- Remove recursive ExecStop from systemd units ([#1530](https://github.com/NousResearch/hermes-agent/pull/1530))
- Prevent logging handler accumulation in gateway mode ([#1251](https://github.com/NousResearch/hermes-agent/pull/1251))
- Restart on retryable startup failures — by @jplew ([#1517](https://github.com/NousResearch/hermes-agent/pull/1517))
- Backfill model on gateway sessions after agent runs ([#1306](https://github.com/NousResearch/hermes-agent/pull/1306))
- PID-based gateway kill and deferred config write ([#1499](https://github.com/NousResearch/hermes-agent/pull/1499))

### Telegram
- Buffer media groups to prevent self-interruption from photo bursts ([#1341](https://github.com/NousResearch/hermes-agent/pull/1341), [#1422](https://github.com/NousResearch/hermes-agent/pull/1422))
- Retry on transient TLS failures during connect and send ([#1535](https://github.com/NousResearch/hermes-agent/pull/1535))
- Harden polling conflict handling ([#1339](https://github.com/NousResearch/hermes-agent/pull/1339))
- Escape chunk indicators and inline code in MarkdownV2 ([#1478](https://github.com/NousResearch/hermes-agent/pull/1478), [#1626](https://github.com/NousResearch/hermes-agent/pull/1626))
- Check updater/app state before disconnect ([#1389](https://github.com/NousResearch/hermes-agent/pull/1389))

### Discord
- `/thread` command with `auto_thread` config and media metadata fixes ([#1178](https://github.com/NousResearch/hermes-agent/pull/1178))
- Auto-thread on @mention, skip mention text in bot threads ([#1438](https://github.com/NousResearch/hermes-agent/pull/1438))
- Retry without reply reference for system messages ([#1385](https://github.com/NousResearch/hermes-agent/pull/1385))
- Preserve native document and video attachment support ([#1392](https://github.com/NousResearch/hermes-agent/pull/1392))
- Defer discord adapter annotations to avoid optional import crashes ([#1314](https://github.com/NousResearch/hermes-agent/pull/1314))

### Slack
- Thread handling overhaul — progress messages, responses, and session isolation all respect threads ([#1103](https://github.com/NousResearch/hermes-agent/pull/1103))
- Formatting, reactions, user resolution, and command improvements ([#1106](https://github.com/NousResearch/hermes-agent/pull/1106))
- Fix MAX_MESSAGE_LENGTH 3900 → 39000 ([#1117](https://github.com/NousResearch/hermes-agent/pull/1117))
- File upload fallback preserves thread context — by @0xbyt4 ([#1122](https://github.com/NousResearch/hermes-agent/pull/1122))
- Improve setup guidance ([#1387](https://github.com/NousResearch/hermes-agent/pull/1387))

### Email
- Fix IMAP UID tracking and SMTP TLS verification ([#1305](https://github.com/NousResearch/hermes-agent/pull/1305))
- Add `skip_attachments` option via config.yaml ([#1536](https://github.com/NousResearch/hermes-agent/pull/1536))

### Home Assistant
- Event filtering closed by default ([#1169](https://github.com/NousResearch/hermes-agent/pull/1169))

---

## 🖥️ CLI & User Experience

### Interactive CLI
- **Persistent CLI status bar** — always-visible model, provider, and token counts ([#1522](https://github.com/NousResearch/hermes-agent/pull/1522))
- **File path autocomplete** in the input prompt ([#1545](https://github.com/NousResearch/hermes-agent/pull/1545))
- **`/plan` command** — generate implementation plans from specs ([#1372](https://github.com/NousResearch/hermes-agent/pull/1372), [#1381](https://github.com/NousResearch/hermes-agent/pull/1381))
- **Major `/rollback` improvements** — richer checkpoint history, clearer UX ([#1505](https://github.com/NousResearch/hermes-agent/pull/1505))
- **Preload CLI skills on launch** — skills are ready before the first prompt ([#1359](https://github.com/NousResearch/hermes-agent/pull/1359))
- **Centralized slash command registry** — all commands defined once, consumed everywhere ([#1603](https://github.com/NousResearch/hermes-agent/pull/1603))
- `/bg` alias for `/background` ([#1590](https://github.com/NousResearch/hermes-agent/pull/1590))
- Prefix matching for slash commands — `/mod` resolves to `/model` ([#1320](https://github.com/NousResearch/hermes-agent/pull/1320))
- `/new`, `/reset`, `/clear` now start genuinely fresh sessions ([#1237](https://github.com/NousResearch/hermes-agent/pull/1237))
- Accept session ID prefixes for session actions ([#1425](https://github.com/NousResearch/hermes-agent/pull/1425))
- TUI prompt and accent output now respect active skin ([#1282](https://github.com/NousResearch/hermes-agent/pull/1282))
- Centralize tool emoji metadata in registry + skin integration ([#1484](https://github.com/NousResearch/hermes-agent/pull/1484))
- "View full command" option added to dangerous command approval — by @teknium1 based on design by community ([#887](https://github.com/NousResearch/hermes-agent/pull/887))
- Non-blocking startup update check and banner deduplication ([#1386](https://github.com/NousResearch/hermes-agent/pull/1386))
- `/reasoning` command output ordering and inline think extraction fixes ([#1031](https://github.com/NousResearch/hermes-agent/pull/1031))
- Verbose mode shows full untruncated output ([#1472](https://github.com/NousResearch/hermes-agent/pull/1472))
- Fix `/status` to report live state and tokens ([#1476](https://github.com/NousResearch/hermes-agent/pull/1476))
- Seed a default global SOUL.md ([#1311](https://github.com/NousResearch/hermes-agent/pull/1311))

### Setup & Configuration
- **OpenClaw migration** during first-time setup — by @kshitijk4poor ([#981](https://github.com/NousResearch/hermes-agent/pull/981))
- `hermes claw migrate` command + migration docs ([#1059](https://github.com/NousResearch/hermes-agent/pull/1059))
- Smart vision setup that respects the user's chosen provider ([#1323](https://github.com/NousResearch/hermes-agent/pull/1323))
- Handle headless setup flows end-to-end ([#1274](https://github.com/NousResearch/hermes-agent/pull/1274))
- Prefer curses over `simple_term_menu` in setup.py ([#1487](https://github.com/NousResearch/hermes-agent/pull/1487))
- Show effective model and provider in `/status` ([#1284](https://github.com/NousResearch/hermes-agent/pull/1284))
- Config set examples use placeholder syntax ([#1322](https://github.com/NousResearch/hermes-agent/pull/1322))
- Reload .env over stale shell overrides ([#1434](https://github.com/NousResearch/hermes-agent/pull/1434))
- Fix is_coding_plan NameError crash — by @0xbyt4 ([#1123](https://github.com/NousResearch/hermes-agent/pull/1123))
- Add missing packages to setuptools config — by @alt-glitch ([#912](https://github.com/NousResearch/hermes-agent/pull/912))
- Installer: clarify why sudo is needed at every prompt ([#1602](https://github.com/NousResearch/hermes-agent/pull/1602))

---

## 🔧 Tool System

### Terminal & Execution
- **Persistent shell mode** for local and SSH backends — maintain shell state across tool calls — by @alt-glitch ([#1067](https://github.com/NousResearch/hermes-agent/pull/1067), [#1483](https://github.com/NousResearch/hermes-agent/pull/1483))
- **Tirith pre-exec command scanning** — security layer that analyzes commands before execution ([#1256](https://github.com/NousResearch/hermes-agent/pull/1256))
- Strip Hermes provider env vars from all subprocess environments ([#1157](https://github.com/NousResearch/hermes-agent/pull/1157), [#1172](https://github.com/NousResearch/hermes-agent/pull/1172), [#1399](https://github.com/NousResearch/hermes-agent/pull/1399), [#1419](https://github.com/NousResearch/hermes-agent/pull/1419)) — initial fix by @eren-karakus0
- SSH preflight check ([#1486](https://github.com/NousResearch/hermes-agent/pull/1486))
- Docker backend: make cwd workspace mount explicit opt-in ([#1534](https://github.com/NousResearch/hermes-agent/pull/1534))
- Add project root to PYTHONPATH in execute_code sandbox ([#1383](https://github.com/NousResearch/hermes-agent/pull/1383))
- Eliminate execute_code progress spam on gateway platforms ([#1098](https://github.com/NousResearch/hermes-agent/pull/1098))
- Clearer docker backend preflight errors ([#1276](https://github.com/NousResearch/hermes-agent/pull/1276))

### Browser
- **`/browser connect`** — attach browser tools to a live Chrome instance via CDP ([#1549](https://github.com/NousResearch/hermes-agent/pull/1549))
- Improve browser cleanup, local browser PATH setup, and screenshot recovery ([#1333](https://github.com/NousResearch/hermes-agent/pull/1333))

### MCP
- **Selective tool loading** with utility policies — filter which MCP tools are available ([#1302](https://github.com/NousResearch/hermes-agent/pull/1302))
- Auto-reload MCP tools when `mcp_servers` config changes without restart ([#1474](https://github.com/NousResearch/hermes-agent/pull/1474))
- Resolve npx stdio connection failures ([#1291](https://github.com/NousResearch/hermes-agent/pull/1291))
- Preserve MCP toolsets when saving platform tool config ([#1421](https://github.com/NousResearch/hermes-agent/pull/1421))

### Vision
- Unify vision backend gating ([#1367](https://github.com/NousResearch/hermes-agent/pull/1367))
- Surface actual error reason instead of generic message ([#1338](https://github.com/NousResearch/hermes-agent/pull/1338))
- Make Claude image handling work end-to-end ([#1408](https://github.com/NousResearch/hermes-agent/pull/1408))

### Cron
- **Compress cron management into one tool** — single `cronjob` tool replaces multiple commands ([#1343](https://github.com/NousResearch/hermes-agent/pull/1343))
- Suppress duplicate cron sends to auto-delivery targets ([#1357](https://github.com/NousResearch/hermes-agent/pull/1357))
- Persist cron sessions to SQLite ([#1255](https://github.com/NousResearch/hermes-agent/pull/1255))
- Per-job runtime overrides (provider, model, base_url) ([#1398](https://github.com/NousResearch/hermes-agent/pull/1398))
- Atomic write in `save_job_output` to prevent data loss on crash ([#1173](https://github.com/NousResearch/hermes-agent/pull/1173))
- Preserve thread context for `deliver=origin` ([#1437](https://github.com/NousResearch/hermes-agent/pull/1437))

### Patch Tool
- Avoid corrupting pipe chars in V4A patch apply ([#1286](https://github.com/NousResearch/hermes-agent/pull/1286))
- Permissive `block_anchor` thresholds and unicode normalization ([#1539](https://github.com/NousResearch/hermes-agent/pull/1539))

### Delegation
- Add observability metadata to subagent results (model, tokens, duration, tool trace) ([#1175](https://github.com/NousResearch/hermes-agent/pull/1175))

---

## 🧩 Skills Ecosystem

### Skills System
- **Integrate skills.sh** as a hub source alongside ClawHub ([#1303](https://github.com/NousResearch/hermes-agent/pull/1303))
- Secure skill env setup on load ([#1153](https://github.com/NousResearch/hermes-agent/pull/1153))
- Honor policy table for dangerous verdicts ([#1330](https://github.com/NousResearch/hermes-agent/pull/1330))
- Harden ClawHub skill search exact matches ([#1400](https://github.com/NousResearch/hermes-agent/pull/1400))
- Fix ClawHub skill install — use `/download` ZIP endpoint ([#1060](https://github.com/NousResearch/hermes-agent/pull/1060))
- Avoid mislabeling local skills as builtin — by @arceus77-7 ([#862](https://github.com/NousResearch/hermes-agent/pull/862))

### New Skills
- **Linear** project management ([#1230](https://github.com/NousResearch/hermes-agent/pull/1230))
- **X/Twitter** via x-cli ([#1285](https://github.com/NousResearch/hermes-agent/pull/1285))
- **Telephony** — Twilio, SMS, and AI calls ([#1289](https://github.com/NousResearch/hermes-agent/pull/1289))
- **1Password** — by @arceus77-7 ([#883](https://github.com/NousResearch/hermes-agent/pull/883), [#1179](https://github.com/NousResearch/hermes-agent/pull/1179))
- **NeuroSkill BCI** integration ([#1135](https://github.com/NousResearch/hermes-agent/pull/1135))
- **Blender MCP** for 3D modeling ([#1531](https://github.com/NousResearch/hermes-agent/pull/1531))
- **OSS Security Forensics** ([#1482](https://github.com/NousResearch/hermes-agent/pull/1482))
- **Parallel CLI** research skill ([#1301](https://github.com/NousResearch/hermes-agent/pull/1301))
- **OpenCode** CLI skill ([#1174](https://github.com/NousResearch/hermes-agent/pull/1174))
- **ASCII Video** skill refactored — by @SHL0MS ([#1213](https://github.com/NousResearch/hermes-agent/pull/1213), [#1598](https://github.com/NousResearch/hermes-agent/pull/1598))

---

## 🎙️ Voice Mode

- Voice mode foundation — push-to-talk CLI, Telegram/Discord voice notes ([#1299](https://github.com/NousResearch/hermes-agent/pull/1299))
- Free local Whisper transcription via faster-whisper ([#1185](https://github.com/NousResearch/hermes-agent/pull/1185))
- Discord voice channel reliability fixes ([#1429](https://github.com/NousResearch/hermes-agent/pull/1429))
- Restore local STT fallback for gateway voice notes ([#1490](https://github.com/NousResearch/hermes-agent/pull/1490))
- Honor `stt.enabled: false` across gateway transcription ([#1394](https://github.com/NousResearch/hermes-agent/pull/1394))
- Fix bogus incapability message on Telegram voice notes (Issue [#1033](https://github.com/NousResearch/hermes-agent/issues/1033))

---

## 🔌 ACP (IDE Integration)

- Restore ACP server implementation ([#1254](https://github.com/NousResearch/hermes-agent/pull/1254))
- Support slash commands in ACP adapter ([#1532](https://github.com/NousResearch/hermes-agent/pull/1532))

---

## 🧪 RL Training

- **Agentic On-Policy Distillation (OPD)** environment — new RL training environment for agent policy distillation ([#1149](https://github.com/NousResearch/hermes-agent/pull/1149))
- Make tinker-atropos RL training fully optional ([#1062](https://github.com/NousResearch/hermes-agent/pull/1062))

---

## 🔒 Security & Reliability

### Security Hardening
- **Tirith pre-exec command scanning** — static analysis of terminal commands before execution ([#1256](https://github.com/NousResearch/hermes-agent/pull/1256))
- **PII redaction** when `privacy.redact_pii` is enabled ([#1542](https://github.com/NousResearch/hermes-agent/pull/1542))
- Strip Hermes provider/gateway/tool env vars from all subprocess environments ([#1157](https://github.com/NousResearch/hermes-agent/pull/1157), [#1172](https://github.com/NousResearch/hermes-agent/pull/1172), [#1399](https://github.com/NousResearch/hermes-agent/pull/1399), [#1419](https://github.com/NousResearch/hermes-agent/pull/1419))
- Docker cwd workspace mount now explicit opt-in — never auto-mount host directories ([#1534](https://github.com/NousResearch/hermes-agent/pull/1534))
- Escape parens and braces in fork bomb regex pattern ([#1397](https://github.com/NousResearch/hermes-agent/pull/1397))
- Harden `.worktreeinclude` path containment ([#1388](https://github.com/NousResearch/hermes-agent/pull/1388))
- Use description as `pattern_key` to prevent approval collisions ([#1395](https://github.com/NousResearch/hermes-agent/pull/1395))

### Reliability
- Guard init-time stdio writes ([#1271](https://github.com/NousResearch/hermes-agent/pull/1271))
- Session log writes reuse shared atomic JSON helper ([#1280](https://github.com/NousResearch/hermes-agent/pull/1280))
- Atomic temp cleanup protected on interrupts ([#1401](https://github.com/NousResearch/hermes-agent/pull/1401))

---

## 🐛 Notable Bug Fixes

- **`/status` always showing 0 tokens** — now reports live state (Issue [#1465](https://github.com/NousResearch/hermes-agent/issues/1465), [#1476](https://github.com/NousResearch/hermes-agent/pull/1476))
- **Custom model endpoints not working** — restored config-saved endpoint resolution (Issue [#1460](https://github.com/NousResearch/hermes-agent/issues/1460), [#1373](https://github.com/NousResearch/hermes-agent/pull/1373))
- **MCP tools not visible until restart** — auto-reload on config change (Issue [#1036](https://github.com/NousResearch/hermes-agent/issues/1036), [#1474](https://github.com/NousResearch/hermes-agent/pull/1474))
- **`hermes tools` removing MCP tools** — preserve MCP toolsets when saving (Issue [#1247](https://github.com/NousResearch/hermes-agent/issues/1247), [#1421](https://github.com/NousResearch/hermes-agent/pull/1421))
- **Terminal subprocesses inheriting `OPENAI_BASE_URL`** breaking external tools (Issue [#1002](https://github.com/NousResearch/hermes-agent/issues/1002), [#1399](https://github.com/NousResearch/hermes-agent/pull/1399))
- **Background process lost on gateway restart** — improved recovery (Issue [#1144](https://github.com/NousResearch/hermes-agent/issues/1144))
- **Cron jobs not persisting state** — now stored in SQLite (Issue [#1416](https://github.com/NousResearch/hermes-agent/issues/1416), [#1255](https://github.com/NousResearch/hermes-agent/pull/1255))
- **Cronjob `deliver: origin` not preserving thread context** (Issue [#1219](https://github.com/NousResearch/hermes-agent/issues/1219), [#1437](https://github.com/NousResearch/hermes-agent/pull/1437))
- **Gateway systemd service failing to auto-restart** when browser processes orphaned (Issue [#1617](https://github.com/NousResearch/hermes-agent/issues/1617))
- **`/background` completion report cut off in Telegram** (Issue [#1443](https://github.com/NousResearch/hermes-agent/issues/1443))
- **Model switching not taking effect** (Issue [#1244](https://github.com/NousResearch/hermes-agent/issues/1244), [#1183](https://github.com/NousResearch/hermes-agent/pull/1183))
- **`hermes doctor` reporting cronjob as unavailable** (Issue [#878](https://github.com/NousResearch/hermes-agent/issues/878), [#1180](https://github.com/NousResearch/hermes-agent/pull/1180))
- **WhatsApp bridge messages not received** from mobile (Issue [#1142](https://github.com/NousResearch/hermes-agent/issues/1142))
- **Setup wizard hanging on headless SSH** (Issue [#905](https://github.com/NousResearch/hermes-agent/issues/905), [#1274](https://github.com/NousResearch/hermes-agent/pull/1274))
- **Log handler accumulation** degrading gateway performance (Issue [#990](https://github.com/NousResearch/hermes-agent/issues/990), [#1251](https://github.com/NousResearch/hermes-agent/pull/1251))
- **Gateway NULL model in DB** (Issue [#987](https://github.com/NousResearch/hermes-agent/issues/987), [#1306](https://github.com/NousResearch/hermes-agent/pull/1306))
- **Strict endpoints rejecting replayed tool_calls** (Issue [#893](https://github.com/NousResearch/hermes-agent/issues/893))
- **Remaining hardcoded `~/.hermes` paths** — all now respect `HERMES_HOME` (Issue [#892](https://github.com/NousResearch/hermes-agent/issues/892), [#1233](https://github.com/NousResearch/hermes-agent/pull/1233))
- **Delegate tool not working with custom inference providers** (Issue [#1011](https://github.com/NousResearch/hermes-agent/issues/1011), [#1328](https://github.com/NousResearch/hermes-agent/pull/1328))
- **Skills Guard blocking official skills** (Issue [#1006](https://github.com/NousResearch/hermes-agent/issues/1006), [#1330](https://github.com/NousResearch/hermes-agent/pull/1330))
- **Setup writing provider before model selection** (Issue [#1182](https://github.com/NousResearch/hermes-agent/issues/1182))
- **`GatewayConfig.get()` AttributeError** crashing all message handling (Issue [#1158](https://github.com/NousResearch/hermes-agent/issues/1158), [#1287](https://github.com/NousResearch/hermes-agent/pull/1287))
- **`/update` hard-failing with "command not found"** (Issue [#1049](https://github.com/NousResearch/hermes-agent/issues/1049))
- **Image analysis failing silently** (Issue [#1034](https://github.com/NousResearch/hermes-agent/issues/1034), [#1338](https://github.com/NousResearch/hermes-agent/pull/1338))
- **API `BadRequestError` from `'dict'` object has no attribute `'strip'`** (Issue [#1071](https://github.com/NousResearch/hermes-agent/issues/1071))
- **Slash commands requiring exact full name** — now uses prefix matching (Issue [#928](https://github.com/NousResearch/hermes-agent/issues/928), [#1320](https://github.com/NousResearch/hermes-agent/pull/1320))
- **Gateway stops responding when terminal is closed on headless** (Issue [#1005](https://github.com/NousResearch/hermes-agent/issues/1005))

---

## 🧪 Testing

- Cover empty cached Anthropic tool-call turns ([#1222](https://github.com/NousResearch/hermes-agent/pull/1222))
- Fix stale CI assumptions in parser and quick-command coverage ([#1236](https://github.com/NousResearch/hermes-agent/pull/1236))
- Fix gateway async tests without implicit event loop ([#1278](https://github.com/NousResearch/hermes-agent/pull/1278))
- Make gateway async tests xdist-safe ([#1281](https://github.com/NousResearch/hermes-agent/pull/1281))
- Cross-timezone naive timestamp regression for cron ([#1319](https://github.com/NousResearch/hermes-agent/pull/1319))
- Isolate codex provider tests from local env ([#1335](https://github.com/NousResearch/hermes-agent/pull/1335))
- Lock retry replacement semantics ([#1379](https://github.com/NousResearch/hermes-agent/pull/1379))
- Improve error logging in session search tool — by @aydnOktay ([#1533](https://github.com/NousResearch/hermes-agent/pull/1533))

---

## 📚 Documentation

- Comprehensive SOUL.md guide ([#1315](https://github.com/NousResearch/hermes-agent/pull/1315))
- Voice mode documentation ([#1316](https://github.com/NousResearch/hermes-agent/pull/1316), [#1362](https://github.com/NousResearch/hermes-agent/pull/1362))
- Provider contribution guide ([#1361](https://github.com/NousResearch/hermes-agent/pull/1361))
- ACP and internal systems implementation guides ([#1259](https://github.com/NousResearch/hermes-agent/pull/1259))
- Expand Docusaurus coverage across CLI, tools, skills, and skins ([#1232](https://github.com/NousResearch/hermes-agent/pull/1232))
- Terminal backend and Windows troubleshooting ([#1297](https://github.com/NousResearch/hermes-agent/pull/1297))
- Skills hub reference section ([#1317](https://github.com/NousResearch/hermes-agent/pull/1317))
- Checkpoint, /rollback, and git worktrees guide ([#1493](https://github.com/NousResearch/hermes-agent/pull/1493), [#1524](https://github.com/NousResearch/hermes-agent/pull/1524))
- CLI status bar and /usage reference ([#1523](https://github.com/NousResearch/hermes-agent/pull/1523))
- Fallback providers + /background command docs ([#1430](https://github.com/NousResearch/hermes-agent/pull/1430))
- Gateway service scopes docs ([#1378](https://github.com/NousResearch/hermes-agent/pull/1378))
- Slack thread reply behavior docs ([#1407](https://github.com/NousResearch/hermes-agent/pull/1407))
- Redesigned landing page with Nous blue palette — by @austinpickett ([#974](https://github.com/NousResearch/hermes-agent/pull/974))
- Fix several documentation typos — by @JackTheGit ([#953](https://github.com/NousResearch/hermes-agent/pull/953))
- Stabilize website diagrams ([#1405](https://github.com/NousResearch/hermes-agent/pull/1405))
- CLI vs messaging quick reference in README ([#1491](https://github.com/NousResearch/hermes-agent/pull/1491))
- Add search to Docusaurus ([#1053](https://github.com/NousResearch/hermes-agent/pull/1053))
- Home Assistant integration docs ([#1170](https://github.com/NousResearch/hermes-agent/pull/1170))

---

## 👥 Contributors

### Core
- **@teknium1** — 220+ PRs spanning every area of the codebase

### Top Community Contributors

- **@0xbyt4** (4 PRs) — Anthropic adapter fixes (max_tokens, fallback crash, 429/529 retry), Slack file upload thread context, setup NameError fix
- **@erosika** (1 PR) — Honcho memory integration: async writes, memory modes, session title integration
- **@SHL0MS** (2 PRs) — ASCII video skill design patterns and refactoring
- **@alt-glitch** (2 PRs) — Persistent shell mode for local/SSH backends, setuptools packaging fix
- **@arceus77-7** (2 PRs) — 1Password skill, fix skills list mislabeling
- **@kshitijk4poor** (1 PR) — OpenClaw migration during setup wizard
- **@ASRagab** (1 PR) — Fix adaptive thinking for Claude 4.6 models
- **@eren-karakus0** (1 PR) — Strip Hermes provider env vars from subprocess environment
- **@mr-emmett-one** (1 PR) — Fix DeepSeek V3 parser multi-tool call support
- **@jplew** (1 PR) — Gateway restart on retryable startup failures
- **@brandtcormorant** (1 PR) — Fix Anthropic cache control for empty text blocks
- **@aydnOktay** (1 PR) — Improve error logging in session search tool
- **@austinpickett** (1 PR) — Landing page redesign with Nous blue palette
- **@JackTheGit** (1 PR) — Documentation typo fixes

### All Contributors

@0xbyt4, @alt-glitch, @arceus77-7, @ASRagab, @austinpickett, @aydnOktay, @brandtcormorant, @eren-karakus0, @erosika, @JackTheGit, @jplew, @kshitijk4poor, @mr-emmett-one, @SHL0MS, @teknium1

---

**Full Changelog**: [v2026.3.12...v2026.3.17](https://github.com/NousResearch/hermes-agent/compare/v2026.3.12...v2026.3.17)

---

## Hermes Agent v0.2.0 (2026.3.12)

- Tag: `v2026.3.12`
- Published: 2026-03-12T10:07:34Z
- URL: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.3.12
- Prerelease: False

# Hermes Agent v0.2.0 (v2026.3.12)

**Release Date:** March 12, 2026

> First tagged release since v0.1.0 (the initial pre-public foundation). In just over two weeks, Hermes Agent went from a small internal project to a full-featured AI agent platform — thanks to an explosion of community contributions. This release covers **216 merged pull requests** from **63 contributors**, resolving **119 issues**.

---

## ✨ Highlights

- **Multi-Platform Messaging Gateway** — Telegram, Discord, Slack, WhatsApp, Signal, Email (IMAP/SMTP), and Home Assistant platforms with unified session management, media attachments, and per-platform tool configuration.

- **MCP (Model Context Protocol) Client** — Native MCP support with stdio and HTTP transports, reconnection, resource/prompt discovery, and sampling (server-initiated LLM requests). ([#291](https://github.com/NousResearch/hermes-agent/pull/291) — @0xbyt4, [#301](https://github.com/NousResearch/hermes-agent/pull/301), [#753](https://github.com/NousResearch/hermes-agent/pull/753))

- **Skills Ecosystem** — 70+ bundled and optional skills across 15+ categories with a Skills Hub for community discovery, per-platform enable/disable, conditional activation based on tool availability, and prerequisite validation. ([#743](https://github.com/NousResearch/hermes-agent/pull/743) — @teyrebaz33, [#785](https://github.com/NousResearch/hermes-agent/pull/785) — @teyrebaz33)

- **Centralized Provider Router** — Unified `call_llm()`/`async_call_llm()` API replaces scattered provider logic across vision, summarization, compression, and trajectory saving. All auxiliary consumers route through a single code path with automatic credential resolution. ([#1003](https://github.com/NousResearch/hermes-agent/pull/1003))

- **ACP Server** — VS Code, Zed, and JetBrains editor integration via the Agent Communication Protocol standard. ([#949](https://github.com/NousResearch/hermes-agent/pull/949))

- **CLI Skin/Theme Engine** — Data-driven visual customization: banners, spinners, colors, branding. 7 built-in skins + custom YAML skins.

- **Git Worktree Isolation** — `hermes -w` launches isolated agent sessions in git worktrees for safe parallel work on the same repo. ([#654](https://github.com/NousResearch/hermes-agent/pull/654))

- **Filesystem Checkpoints & Rollback** — Automatic snapshots before destructive operations with `/rollback` to restore. ([#824](https://github.com/NousResearch/hermes-agent/pull/824))

- **3,289 Tests** — From near-zero test coverage to a comprehensive test suite covering agent, gateway, tools, cron, and CLI.

---

## 🏗️ Core Agent & Architecture

### Provider & Model Support
- Centralized provider router with `resolve_provider_client()` + `call_llm()` API ([#1003](https://github.com/NousResearch/hermes-agent/pull/1003))
- Nous Portal as first-class provider in setup ([#644](https://github.com/NousResearch/hermes-agent/issues/644))
- OpenAI Codex (Responses API) with ChatGPT subscription support ([#43](https://github.com/NousResearch/hermes-agent/pull/43)) — @grp06
- Codex OAuth vision support + multimodal content adapter
- Validate `/model` against live API instead of hardcoded lists
- Self-hosted Firecrawl support ([#460](https://github.com/NousResearch/hermes-agent/pull/460)) — @caentzminger
- Kimi Code API support ([#635](https://github.com/NousResearch/hermes-agent/pull/635)) — @christomitov
- MiniMax model ID update ([#473](https://github.com/NousResearch/hermes-agent/pull/473)) — @tars90percent
- OpenRouter provider routing configuration (provider_preferences)
- Nous credential refresh on 401 errors ([#571](https://github.com/NousResearch/hermes-agent/pull/571), [#269](https://github.com/NousResearch/hermes-agent/pull/269)) — @rewbs
- z.ai/GLM, Kimi/Moonshot, MiniMax, Azure OpenAI as first-class providers
- Unified `/model` and `/provider` into single view

### Agent Loop & Conversation
- Simple fallback model for provider resilience ([#740](https://github.com/NousResearch/hermes-agent/pull/740))
- Shared iteration budget across parent + subagent delegation
- Iteration budget pressure via tool result injection
- Configurable subagent provider/model with full credential resolution
- Handle 413 payload-too-large via compression instead of aborting ([#153](https://github.com/NousResearch/hermes-agent/pull/153)) — @tekelala
- Retry with rebuilt payload after compression ([#616](https://github.com/NousResearch/hermes-agent/pull/616)) — @tripledoublev
- Auto-compress pathologically large gateway sessions ([#628](https://github.com/NousResearch/hermes-agent/issues/628))
- Tool call repair middleware — auto-lowercase and invalid tool handler
- Reasoning effort configuration and `/reasoning` command ([#921](https://github.com/NousResearch/hermes-agent/pull/921))
- Detect and block file re-read/search loops after context compression ([#705](https://github.com/NousResearch/hermes-agent/pull/705)) — @0xbyt4

### Session & Memory
- Session naming with unique titles, auto-lineage, rich listing, and resume by name ([#720](https://github.com/NousResearch/hermes-agent/pull/720))
- Interactive session browser with search filtering ([#733](https://github.com/NousResearch/hermes-agent/pull/733))
- Display previous messages when resuming a session ([#734](https://github.com/NousResearch/hermes-agent/pull/734))
- Honcho AI-native cross-session user modeling ([#38](https://github.com/NousResearch/hermes-agent/pull/38)) — @erosika
- Proactive async memory flush on session expiry
- Smart context length probing with persistent caching + banner display
- `/resume` command for switching to named sessions in gateway
- Session reset policy for messaging platforms

---

## 📱 Messaging Platforms (Gateway)

### Telegram
- Native file attachments: send_document + send_video
- Document file processing for PDF, text, and Office files — @tekelala
- Forum topic session isolation ([#766](https://github.com/NousResearch/hermes-agent/pull/766)) — @spanishflu-est1918
- Browser screenshot sharing via MEDIA: protocol ([#657](https://github.com/NousResearch/hermes-agent/pull/657))
- Location support for find-nearby skill
- TTS voice message accumulation fix ([#176](https://github.com/NousResearch/hermes-agent/pull/176)) — @Bartok9
- Improved error handling and logging ([#763](https://github.com/NousResearch/hermes-agent/pull/763)) — @aydnOktay
- Italic regex newline fix + 43 format tests ([#204](https://github.com/NousResearch/hermes-agent/pull/204)) — @0xbyt4

### Discord
- Channel topic included in session context ([#248](https://github.com/NousResearch/hermes-agent/pull/248)) — @Bartok9
- DISCORD_ALLOW_BOTS config for bot message filtering ([#758](https://github.com/NousResearch/hermes-agent/pull/758))
- Document and video support ([#784](https://github.com/NousResearch/hermes-agent/pull/784))
- Improved error handling and logging ([#761](https://github.com/NousResearch/hermes-agent/pull/761)) — @aydnOktay

### Slack
- App_mention 404 fix + document/video support ([#784](https://github.com/NousResearch/hermes-agent/pull/784))
- Structured logging replacing print statements — @aydnOktay

### WhatsApp
- Native media sending — images, videos, documents ([#292](https://github.com/NousResearch/hermes-agent/pull/292)) — @satelerd
- Multi-user session isolation ([#75](https://github.com/NousResearch/hermes-agent/pull/75)) — @satelerd
- Cross-platform port cleanup replacing Linux-only fuser ([#433](https://github.com/NousResearch/hermes-agent/pull/433)) — @Farukest
- DM interrupt key mismatch fix ([#350](https://github.com/NousResearch/hermes-agent/pull/350)) — @Farukest

### Signal
- Full Signal messenger gateway via signal-cli-rest-api ([#405](https://github.com/NousResearch/hermes-agent/issues/405))
- Media URL support in message events ([#871](https://github.com/NousResearch/hermes-agent/pull/871))

### Email (IMAP/SMTP)
- New email gateway platform — @0xbyt4

### Home Assistant
- REST tools + WebSocket gateway integration ([#184](https://github.com/NousResearch/hermes-agent/pull/184)) — @0xbyt4
- Service discovery and enhanced setup
- Toolset mapping fix ([#538](https://github.com/NousResearch/hermes-agent/pull/538)) — @Himess

### Gateway Core
- Expose subagent tool calls and thinking to users ([#186](https://github.com/NousResearch/hermes-agent/pull/186)) — @cutepawss
- Configurable background process watcher notifications ([#840](https://github.com/NousResearch/hermes-agent/pull/840))
- `edit_message()` for Telegram/Discord/Slack with fallback
- `/compress`, `/usage`, `/update` slash commands
- Eliminated 3x SQLite message duplication in gateway sessions ([#873](https://github.com/NousResearch/hermes-agent/pull/873))
- Stabilize system prompt across gateway turns for cache hits ([#754](https://github.com/NousResearch/hermes-agent/pull/754))
- MCP server shutdown on gateway exit ([#796](https://github.com/NousResearch/hermes-agent/pull/796)) — @0xbyt4
- Pass session_db to AIAgent, fixing session_search error ([#108](https://github.com/NousResearch/hermes-agent/pull/108)) — @Bartok9
- Persist transcript changes in /retry, /undo; fix /reset attribute ([#217](https://github.com/NousResearch/hermes-agent/pull/217)) — @Farukest
- UTF-8 encoding fix preventing Windows crashes ([#369](https://github.com/NousResearch/hermes-agent/pull/369)) — @ch3ronsa

---

## 🖥️ CLI & User Experience

### Interactive CLI
- Data-driven skin/theme engine — 7 built-in skins (default, ares, mono, slate, poseidon, sisyphus, charizard) + custom YAML skins
- `/personality` command with custom personality + disable support ([#773](https://github.com/NousResearch/hermes-agent/pull/773)) — @teyrebaz33
- User-defined quick commands that bypass the agent loop ([#746](https://github.com/NousResearch/hermes-agent/pull/746)) — @teyrebaz33
- `/reasoning` command for effort level and display toggle ([#921](https://github.com/NousResearch/hermes-agent/pull/921))
- `/verbose` slash command to toggle debug at runtime ([#94](https://github.com/NousResearch/hermes-agent/pull/94)) — @cesareth
- `/insights` command — usage analytics, cost estimation & activity patterns ([#552](https://github.com/NousResearch/hermes-agent/pull/552))
- `/background` command for managing background processes
- `/help` formatting with command categories
- Bell-on-complete — terminal bell when agent finishes ([#738](https://github.com/NousResearch/hermes-agent/pull/738))
- Up/down arrow history navigation
- Clipboard image paste (Alt+V / Ctrl+V)
- Loading indicators for slow slash commands ([#882](https://github.com/NousResearch/hermes-agent/pull/882))
- Spinner flickering fix under patch_stdout ([#91](https://github.com/NousResearch/hermes-agent/pull/91)) — @0xbyt4
- `--quiet/-Q` flag for programmatic single-query mode
- `--fuck-it-ship-it` flag to bypass all approval prompts ([#724](https://github.com/NousResearch/hermes-agent/pull/724)) — @dmahan93
- Tools summary flag ([#767](https://github.com/NousResearch/hermes-agent/pull/767)) — @luisv-1
- Terminal blinking fix on SSH ([#284](https://github.com/NousResearch/hermes-agent/pull/284)) — @ygd58
- Multi-line paste detection fix ([#84](https://github.com/NousResearch/hermes-agent/pull/84)) — @0xbyt4

### Setup & Configuration
- Modular setup wizard with section subcommands and tool-first UX
- Container resource configuration prompts
- Backend validation for required binaries
- Config migration system (currently v7)
- API keys properly routed to .env instead of config.yaml ([#469](https://github.com/NousResearch/hermes-agent/pull/469)) — @ygd58
- Atomic write for .env to prevent API key loss on crash ([#954](https://github.com/NousResearch/hermes-agent/pull/954))
- `hermes tools` — per-platform tool enable/disable with curses UI
- `hermes doctor` for health checks across all configured providers
- `hermes update` with auto-restart for gateway service
- Show update-available notice in CLI banner
- Multiple named custom providers
- Shell config detection improvement for PATH setup ([#317](https://github.com/NousResearch/hermes-agent/pull/317)) — @mehmetkr-31
- Consistent HERMES_HOME and .env path resolution ([#51](https://github.com/NousResearch/hermes-agent/pull/51), [#48](https://github.com/NousResearch/hermes-agent/pull/48)) — @deankerr
- Docker backend fix on macOS + subagent auth for Nous Portal ([#46](https://github.com/NousResearch/hermes-agent/pull/46)) — @rsavitt

---

## 🔧 Tool System

### MCP (Model Context Protocol)
- Native MCP client with stdio + HTTP transports ([#291](https://github.com/NousResearch/hermes-agent/pull/291) — @0xbyt4, [#301](https://github.com/NousResearch/hermes-agent/pull/301))
- Sampling support — server-initiated LLM requests ([#753](https://github.com/NousResearch/hermes-agent/pull/753))
- Resource and prompt discovery
- Automatic reconnection and security hardening
- Banner integration, `/reload-mcp` command
- `hermes tools` UI integration

### Browser
- Local browser backend — zero-cost headless Chromium (no Browserbase needed)
- Console/errors tool, annotated screenshots, auto-recording, dogfood QA skill ([#745](https://github.com/NousResearch/hermes-agent/pull/745))
- Screenshot sharing via MEDIA: on all messaging platforms ([#657](https://github.com/NousResearch/hermes-agent/pull/657))

### Terminal & Execution
- `execute_code` sandbox with json_parse, shell_quote, retry helpers
- Docker: custom volume mounts ([#158](https://github.com/NousResearch/hermes-agent/pull/158)) — @Indelwin
- Daytona cloud sandbox backend ([#451](https://github.com/NousResearch/hermes-agent/pull/451)) — @rovle
- SSH backend fix ([#59](https://github.com/NousResearch/hermes-agent/pull/59)) — @deankerr
- Shell noise filtering and login shell execution for environment consistency
- Head+tail truncation for execute_code stdout overflow
- Configurable background process notification modes

### File Operations
- Filesystem checkpoints and `/rollback` command ([#824](https://github.com/NousResearch/hermes-agent/pull/824))
- Structured tool result hints (next-action guidance) for patch and search_files ([#722](https://github.com/NousResearch/hermes-agent/issues/722))
- Docker volumes passed to sandbox container config ([#687](https://github.com/NousResearch/hermes-agent/pull/687)) — @manuelschipper

---

## 🧩 Skills Ecosystem

### Skills System
- Per-platform skill enable/disable ([#743](https://github.com/NousResearch/hermes-agent/pull/743)) — @teyrebaz33
- Conditional skill activation based on tool availability ([#785](https://github.com/NousResearch/hermes-agent/pull/785)) — @teyrebaz33
- Skill prerequisites — hide skills with unmet dependencies ([#659](https://github.com/NousResearch/hermes-agent/pull/659)) — @kshitijk4poor
- Optional skills — shipped but not activated by default
- `hermes skills browse` — paginated hub browsing
- Skills sub-category organization
- Platform-conditional skill loading
- Atomic skill file writes ([#551](https://github.com/NousResearch/hermes-agent/pull/551)) — @aydnOktay
- Skills sync data loss prevention ([#563](https://github.com/NousResearch/hermes-agent/pull/563)) — @0xbyt4
- Dynamic skill slash commands for CLI and gateway

### New Skills (selected)
- **ASCII Art** — pyfiglet (571 fonts), cowsay, image-to-ascii ([#209](https://github.com/NousResearch/hermes-agent/pull/209)) — @0xbyt4
- **ASCII Video** — Full production pipeline ([#854](https://github.com/NousResearch/hermes-agent/pull/854)) — @SHL0MS
- **DuckDuckGo Search** — Firecrawl fallback ([#267](https://github.com/NousResearch/hermes-agent/pull/267)) — @gamedevCloudy; DDGS API expansion ([#598](https://github.com/NousResearch/hermes-agent/pull/598)) — @areu01or00
- **Solana Blockchain** — Wallet balances, USD pricing, token names ([#212](https://github.com/NousResearch/hermes-agent/pull/212)) — @gizdusum
- **AgentMail** — Agent-owned email inboxes ([#330](https://github.com/NousResearch/hermes-agent/pull/330)) — @teyrebaz33
- **Polymarket** — Prediction market data (read-only) ([#629](https://github.com/NousResearch/hermes-agent/pull/629))
- **OpenClaw Migration** — Official migration tool ([#570](https://github.com/NousResearch/hermes-agent/pull/570)) — @unmodeled-tyler
- **Domain Intelligence** — Passive recon: subdomains, SSL, WHOIS, DNS ([#136](https://github.com/NousResearch/hermes-agent/pull/136)) — @FurkanL0
- **Superpowers** — Software development skills ([#137](https://github.com/NousResearch/hermes-agent/pull/137)) — @kaos35
- **Hermes-Atropos** — RL environment development skill ([#815](https://github.com/NousResearch/hermes-agent/pull/815))
- Plus: arXiv search, OCR/documents, Excalidraw diagrams, YouTube transcripts, GIF search, Pokémon player, Minecraft modpack server, OpenHue (Philips Hue), Google Workspace, Notion, PowerPoint, Obsidian, find-nearby, and 40+ MLOps skills

---

## 🔒 Security & Reliability

### Security Hardening
- Path traversal fix in skill_view — prevented reading arbitrary files ([#220](https://github.com/NousResearch/hermes-agent/issues/220)) — @Farukest
- Shell injection prevention in sudo password piping ([#65](https://github.com/NousResearch/hermes-agent/pull/65)) — @leonsgithub
- Dangerous command detection: multiline bypass fix ([#233](https://github.com/NousResearch/hermes-agent/pull/233)) — @Farukest; tee/process substitution patterns ([#280](https://github.com/NousResearch/hermes-agent/pull/280)) — @dogiladeveloper
- Symlink boundary check fix in skills_guard ([#386](https://github.com/NousResearch/hermes-agent/pull/386)) — @Farukest
- Symlink bypass fix in write deny list on macOS ([#61](https://github.com/NousResearch/hermes-agent/pull/61)) — @0xbyt4
- Multi-word prompt injection bypass prevention ([#192](https://github.com/NousResearch/hermes-agent/pull/192)) — @0xbyt4
- Cron prompt injection scanner bypass fix ([#63](https://github.com/NousResearch/hermes-agent/pull/63)) — @0xbyt4
- Enforce 0600/0700 file permissions on sensitive files ([#757](https://github.com/NousResearch/hermes-agent/pull/757))
- .env file permissions restricted to owner-only ([#529](https://github.com/NousResearch/hermes-agent/pull/529)) — @Himess
- `--force` flag properly blocked from overriding dangerous verdicts ([#388](https://github.com/NousResearch/hermes-agent/pull/388)) — @Farukest
- FTS5 query sanitization + DB connection leak fix ([#565](https://github.com/NousResearch/hermes-agent/pull/565)) — @0xbyt4
- Expand secret redaction patterns + config toggle to disable
- In-memory permanent allowlist to prevent data leak ([#600](https://github.com/NousResearch/hermes-agent/pull/600)) — @alireza78a

### Atomic Writes (data loss prevention)
- sessions.json ([#611](https://github.com/NousResearch/hermes-agent/pull/611)) — @alireza78a
- Cron jobs ([#146](https://github.com/NousResearch/hermes-agent/pull/146)) — @alireza78a
- .env config ([#954](https://github.com/NousResearch/hermes-agent/pull/954))
- Process checkpoints ([#298](https://github.com/NousResearch/hermes-agent/pull/298)) — @aydnOktay
- Batch runner ([#297](https://github.com/NousResearch/hermes-agent/pull/297)) — @aydnOktay
- Skill files ([#551](https://github.com/NousResearch/hermes-agent/pull/551)) — @aydnOktay

### Reliability
- Guard all print() against OSError for systemd/headless environments ([#963](https://github.com/NousResearch/hermes-agent/pull/963))
- Reset all retry counters at start of run_conversation ([#607](https://github.com/NousResearch/hermes-agent/pull/607)) — @0xbyt4
- Return deny on approval callback timeout instead of None ([#603](https://github.com/NousResearch/hermes-agent/pull/603)) — @0xbyt4
- Fix None message content crashes across codebase ([#277](https://github.com/NousResearch/hermes-agent/pull/277))
- Fix context overrun crash with local LLM backends ([#403](https://github.com/NousResearch/hermes-agent/pull/403)) — @ch3ronsa
- Prevent `_flush_sentinel` from leaking to external APIs ([#227](https://github.com/NousResearch/hermes-agent/pull/227)) — @Farukest
- Prevent conversation_history mutation in callers ([#229](https://github.com/NousResearch/hermes-agent/pull/229)) — @Farukest
- Fix systemd restart loop ([#614](https://github.com/NousResearch/hermes-agent/pull/614)) — @voidborne-d
- Close file handles and sockets to prevent fd leaks ([#568](https://github.com/NousResearch/hermes-agent/pull/568) — @alireza78a, [#296](https://github.com/NousResearch/hermes-agent/pull/296) — @alireza78a, [#709](https://github.com/NousResearch/hermes-agent/pull/709) — @memosr)
- Prevent data loss in clipboard PNG conversion ([#602](https://github.com/NousResearch/hermes-agent/pull/602)) — @0xbyt4
- Eliminate shell noise from terminal output ([#293](https://github.com/NousResearch/hermes-agent/pull/293)) — @0xbyt4
- Timezone-aware now() for prompt, cron, and execute_code ([#309](https://github.com/NousResearch/hermes-agent/pull/309)) — @areu01or00

### Windows Compatibility
- Guard POSIX-only process functions ([#219](https://github.com/NousResearch/hermes-agent/pull/219)) — @Farukest
- Windows native support via Git Bash + ZIP-based update fallback
- pywinpty for PTY support ([#457](https://github.com/NousResearch/hermes-agent/pull/457)) — @shitcoinsherpa
- Explicit UTF-8 encoding on all config/data file I/O ([#458](https://github.com/NousResearch/hermes-agent/pull/458)) — @shitcoinsherpa
- Windows-compatible path handling ([#354](https://github.com/NousResearch/hermes-agent/pull/354), [#390](https://github.com/NousResearch/hermes-agent/pull/390)) — @Farukest
- Regex-based search output parsing for drive-letter paths ([#533](https://github.com/NousResearch/hermes-agent/pull/533)) — @Himess
- Auth store file lock for Windows ([#455](https://github.com/NousResearch/hermes-agent/pull/455)) — @shitcoinsherpa

---

## 🐛 Notable Bug Fixes

- Fix DeepSeek V3 tool call parser silently dropping multi-line JSON arguments ([#444](https://github.com/NousResearch/hermes-agent/pull/444)) — @PercyDikec
- Fix gateway transcript losing 1 message per turn due to offset mismatch ([#395](https://github.com/NousResearch/hermes-agent/pull/395)) — @PercyDikec
- Fix /retry command silently discarding the agent's final response ([#441](https://github.com/NousResearch/hermes-agent/pull/441)) — @PercyDikec
- Fix max-iterations retry returning empty string after think-block stripping ([#438](https://github.com/NousResearch/hermes-agent/pull/438)) — @PercyDikec
- Fix max-iterations retry using hardcoded max_tokens ([#436](https://github.com/NousResearch/hermes-agent/pull/436)) — @Farukest
- Fix Codex status dict key mismatch ([#448](https://github.com/NousResearch/hermes-agent/pull/448)) and visibility filter ([#446](https://github.com/NousResearch/hermes-agent/pull/446)) — @PercyDikec
- Strip \<think\> blocks from final user-facing responses ([#174](https://github.com/NousResearch/hermes-agent/pull/174)) — @Bartok9
- Fix \<think\> block regex stripping visible content when model discusses tags literally ([#786](https://github.com/NousResearch/hermes-agent/issues/786))
- Fix Mistral 422 errors from leftover finish_reason in assistant messages ([#253](https://github.com/NousResearch/hermes-agent/pull/253)) — @Sertug17
- Fix OPENROUTER_API_KEY resolution order across all code paths ([#295](https://github.com/NousResearch/hermes-agent/pull/295)) — @0xbyt4
- Fix OPENAI_BASE_URL API key priority ([#420](https://github.com/NousResearch/hermes-agent/pull/420)) — @manuelschipper
- Fix Anthropic "prompt is too long" 400 error not detected as context length error ([#813](https://github.com/NousResearch/hermes-agent/issues/813))
- Fix SQLite session transcript accumulating duplicate messages — 3-4x token inflation ([#860](https://github.com/NousResearch/hermes-agent/issues/860))
- Fix setup wizard skipping API key prompts on first install ([#748](https://github.com/NousResearch/hermes-agent/pull/748))
- Fix setup wizard showing OpenRouter model list for Nous Portal ([#575](https://github.com/NousResearch/hermes-agent/pull/575)) — @PercyDikec
- Fix provider selection not persisting when switching via hermes model ([#881](https://github.com/NousResearch/hermes-agent/pull/881))
- Fix Docker backend failing when docker not in PATH on macOS ([#889](https://github.com/NousResearch/hermes-agent/pull/889))
- Fix ClawHub Skills Hub adapter for API endpoint changes ([#286](https://github.com/NousResearch/hermes-agent/pull/286)) — @BP602
- Fix Honcho auto-enable when API key is present ([#243](https://github.com/NousResearch/hermes-agent/pull/243)) — @Bartok9
- Fix duplicate 'skills' subparser crash on Python 3.11+ ([#898](https://github.com/NousResearch/hermes-agent/issues/898))
- Fix memory tool entry parsing when content contains section sign ([#162](https://github.com/NousResearch/hermes-agent/pull/162)) — @aydnOktay
- Fix piped install silently aborting when interactive prompts fail ([#72](https://github.com/NousResearch/hermes-agent/pull/72)) — @cutepawss
- Fix false positives in recursive delete detection ([#68](https://github.com/NousResearch/hermes-agent/pull/68)) — @cutepawss
- Fix Ruff lint warnings across codebase ([#608](https://github.com/NousResearch/hermes-agent/pull/608)) — @JackTheGit
- Fix Anthropic native base URL fail-fast ([#173](https://github.com/NousResearch/hermes-agent/pull/173)) — @adavyas
- Fix install.sh creating ~/.hermes before moving Node.js directory ([#53](https://github.com/NousResearch/hermes-agent/pull/53)) — @JoshuaMart
- Fix SystemExit traceback during atexit cleanup on Ctrl+C ([#55](https://github.com/NousResearch/hermes-agent/pull/55)) — @bierlingm
- Restore missing MIT license file ([#620](https://github.com/NousResearch/hermes-agent/pull/620)) — @stablegenius49

---

## 🧪 Testing

- **3,289 tests** across agent, gateway, tools, cron, and CLI
- Parallelized test suite with pytest-xdist ([#802](https://github.com/NousResearch/hermes-agent/pull/802)) — @OutThisLife
- Unit tests batch 1: 8 core modules ([#60](https://github.com/NousResearch/hermes-agent/pull/60)) — @0xbyt4
- Unit tests batch 2: 8 more modules ([#62](https://github.com/NousResearch/hermes-agent/pull/62)) — @0xbyt4
- Unit tests batch 3: 8 untested modules ([#191](https://github.com/NousResearch/hermes-agent/pull/191)) — @0xbyt4
- Unit tests batch 4: 5 security/logic-critical modules ([#193](https://github.com/NousResearch/hermes-agent/pull/193)) — @0xbyt4
- AIAgent (run_agent.py) unit tests ([#67](https://github.com/NousResearch/hermes-agent/pull/67)) — @0xbyt4
- Trajectory compressor tests ([#203](https://github.com/NousResearch/hermes-agent/pull/203)) — @0xbyt4
- Clarify tool tests ([#121](https://github.com/NousResearch/hermes-agent/pull/121)) — @Bartok9
- Telegram format tests — 43 tests for italic/bold/code rendering ([#204](https://github.com/NousResearch/hermes-agent/pull/204)) — @0xbyt4
- Vision tools type hints + 42 tests ([#792](https://github.com/NousResearch/hermes-agent/pull/792))
- Compressor tool-call boundary regression tests ([#648](https://github.com/NousResearch/hermes-agent/pull/648)) — @intertwine
- Test structure reorganization ([#34](https://github.com/NousResearch/hermes-agent/pull/34)) — @0xbyt4
- Shell noise elimination + fix 36 test failures ([#293](https://github.com/NousResearch/hermes-agent/pull/293)) — @0xbyt4

---

## 🔬 RL & Evaluation Environments

- WebResearchEnv — Multi-step web research RL environment ([#434](https://github.com/NousResearch/hermes-agent/pull/434)) — @jackx707
- Modal sandbox concurrency limits to avoid deadlocks ([#621](https://github.com/NousResearch/hermes-agent/pull/621)) — @voteblake
- Hermes-atropos-environments bundled skill ([#815](https://github.com/NousResearch/hermes-agent/pull/815))
- Local vLLM instance support for evaluation — @dmahan93
- YC-Bench long-horizon agent benchmark environment
- OpenThoughts-TBLite evaluation environment and scripts

---

## 📚 Documentation

- Full documentation website (Docusaurus) with 37+ pages
- Comprehensive platform setup guides for Telegram, Discord, Slack, WhatsApp, Signal, Email
- AGENTS.md — development guide for AI coding assistants
- CONTRIBUTING.md ([#117](https://github.com/NousResearch/hermes-agent/pull/117)) — @Bartok9
- Slash commands reference ([#142](https://github.com/NousResearch/hermes-agent/pull/142)) — @Bartok9
- Comprehensive AGENTS.md accuracy audit ([#732](https://github.com/NousResearch/hermes-agent/pull/732))
- Skin/theme system documentation
- MCP documentation and examples
- Docs accuracy audit — 35+ corrections
- Documentation typo fixes ([#825](https://github.com/NousResearch/hermes-agent/pull/825), [#439](https://github.com/NousResearch/hermes-agent/pull/439)) — @JackTheGit
- CLI config precedence and terminology standardization ([#166](https://github.com/NousResearch/hermes-agent/pull/166), [#167](https://github.com/NousResearch/hermes-agent/pull/167), [#168](https://github.com/NousResearch/hermes-agent/pull/168)) — @Jr-kenny
- Telegram token regex documentation ([#713](https://github.com/NousResearch/hermes-agent/pull/713)) — @VolodymyrBg

---

## 👥 Contributors

Thank you to the 63 contributors who made this release possible! In just over two weeks, the Hermes Agent community came together to ship an extraordinary amount of work.

### Core
- **@teknium1** — 43 PRs: Project lead, core architecture, provider router, sessions, skills, CLI, documentation

### Top Community Contributors
- **@0xbyt4** — 40 PRs: MCP client, Home Assistant, security fixes (symlink, prompt injection, cron), extensive test coverage (6 batches), ascii-art skill, shell noise elimination, skills sync, Telegram formatting, and dozens more
- **@Farukest** — 16 PRs: Security hardening (path traversal, dangerous command detection, symlink boundary), Windows compatibility (POSIX guards, path handling), WhatsApp fixes, max-iterations retry, gateway fixes
- **@aydnOktay** — 11 PRs: Atomic writes (process checkpoints, batch runner, skill files), error handling improvements across Telegram, Discord, code execution, transcription, TTS, and skills
- **@Bartok9** — 9 PRs: CONTRIBUTING.md, slash commands reference, Discord channel topics, think-block stripping, TTS fix, Honcho fix, session count fix, clarify tests
- **@PercyDikec** — 7 PRs: DeepSeek V3 parser fix, /retry response discard, gateway transcript offset, Codex status/visibility, max-iterations retry, setup wizard fix
- **@teyrebaz33** — 5 PRs: Skills enable/disable system, quick commands, personality customization, conditional skill activation
- **@alireza78a** — 5 PRs: Atomic writes (cron, sessions), fd leak prevention, security allowlist, code execution socket cleanup
- **@shitcoinsherpa** — 3 PRs: Windows support (pywinpty, UTF-8 encoding, auth store lock)
- **@Himess** — 3 PRs: Cron/HomeAssistant/Daytona fix, Windows drive-letter parsing, .env permissions
- **@satelerd** — 2 PRs: WhatsApp native media, multi-user session isolation
- **@rovle** — 1 PR: Daytona cloud sandbox backend (4 commits)
- **@erosika** — 1 PR: Honcho AI-native memory integration
- **@dmahan93** — 1 PR: --fuck-it-ship-it flag + RL environment work
- **@SHL0MS** — 1 PR: ASCII video skill

### All Contributors
@0xbyt4, @BP602, @Bartok9, @Farukest, @FurkanL0, @Himess, @Indelwin, @JackTheGit, @JoshuaMart, @Jr-kenny, @OutThisLife, @PercyDikec, @SHL0MS, @Sertug17, @VencentSoliman, @VolodymyrBg, @adavyas, @alireza78a, @areu01or00, @aydnOktay, @batuhankocyigit, @bierlingm, @caentzminger, @cesareth, @ch3ronsa, @christomitov, @cutepawss, @deankerr, @dmahan93, @dogiladeveloper, @dragonkhoi, @erosika, @gamedevCloudy, @gizdusum, @grp06, @intertwine, @jackx707, @jdblackstar, @johnh4098, @kaos35, @kshitijk4poor, @leonsgithub, @luisv-1, @manuelschipper, @mehmetkr-31, @memosr, @PeterFile, @rewbs, @rovle, @rsavitt, @satelerd, @spanishflu-est1918, @stablegenius49, @tars90percent, @tekelala, @teknium1, @teyrebaz33, @tripledoublev, @unmodeled-tyler, @voidborne-d, @voteblake, @ygd58

---

**Full Changelog**: [v0.1.0...v2026.3.12](https://github.com/NousResearch/hermes-agent/compare/v0.1.0...v2026.3.12)

---
