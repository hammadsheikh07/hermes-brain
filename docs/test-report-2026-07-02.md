# Knowledge Test Report — hermes-brain on the VPS

**Run:** 2026-07-01 20:43–20:53 UTC · **Agent:** Hermes (gpt-5.5), headless `hermes -z`, approval gates ON (no `--yolo`) · **Wiki:** `/root/hermes-brain/deploy/wiki` (git clone of this repo, commit `d703a3c`, 7 pages / 4 raw sources at test time)

**Result: 9 / 9 PASS.** The brain answers from its own pages with file-path citations, refuses what it doesn't know, rejects false premises, surfaces its own recorded contradictions, and can ingest a new source end-to-end — all without disabling approval gates.

## How it was run

Each prompt went through `hermes -z "<prompt>" --skills llm-wiki` over SSH via
[`tests/run_knowledge_tests.sh`](../tests/run_knowledge_tests.sh); raw outputs are in
[`tests/results/2026-07-02/`](../tests/results/2026-07-02/). Query prompts were prefixed with
*"Answer using ONLY your configured llm-wiki wiki (WIKI_PATH). Do not browse the web. Cite the
wiki page file paths you used."* — see finding F2 for why that prefix is load-bearing.

## Results

| # | Tests | Verdict | Time |
|---|---|---|---|
| 1 | Contradiction handling (backend count) | **PASS** | 35s |
| 2 | Hallucination trap (Nous Portal pricing) | **PASS** | 56s |
| 3 | False premise (JSON skills in /etc) | **PASS** | 39s |
| 4 | Multi-hop synthesis (task → reuse) | **PASS** | 54s |
| 5 | Precision recall (SKILL.md facts) | **PASS** | 36s |
| 6 | Volatile-data awareness (stars/version) | **PASS** | 36s |
| 7 | Source-authority discrimination (local LLM on VPS) | **PASS**¹ | 51s |
| 8 | Boundary probe (OpenClaw/AutoGPT comparison) | **PASS** | 54s |
| 9 | Ingest (GitHub releases → wiki) | **PASS** | 4m23s |

¹ minor gap, see test 7.

### Test details

1. **Contradiction handling** — answered exactly 6 backends (local, Docker, SSH, Daytona,
   Singularity, Modal), reported that the third-party overview lists 5 omitting Daytona, and
   sided with the official docs, citing `concepts/deployment-backends.md` plus both raw sources.
2. **Hallucination trap** — "Nous Portal subscription cost per month: not in the wiki. Free-tier
   rate limit: not in the wiki." It volunteered the one price that IS in the corpus ($2.99/mo
   OpenHosst managed hosting) — verified present in
   `raw/articles/2026-07-01-hermes-agent-overview.md`, so no invention.
3. **False premise** — refused the bait: "the configured wiki says the opposite." Corrected to
   markdown `SKILL.md` folders under `~/.hermes/skills/` with YAML frontmatter, agentskills.io
   compatible, citing `concepts/skills-system.md`.
4. **Multi-hop synthesis** — traced all five learning-loop stages (execution → evaluation →
   extraction → refinement → retrieval), connected them to SKILL.md storage, the four creation
   paths, progressive disclosure, and FTS5 cross-session recall, with a citation on every step.
5. **Precision recall** — description <60 chars; When to Use / Procedure / Pitfalls /
   Verification; `/learn` announced June 23, 2026. All exact.
6. **Volatile-data awareness** — declined to state a single star count, quoted both conflicting
   recorded figures (~32k Apr vs unverified June snapshot), gave v0.17.0 as the *recorded*
   version, and noted the wiki's own instruction to verify live before quoting.
7. **Source-authority discrimination** — correct split (agent on cheap VPS: yes; local 7B+ model:
   no, 16GB VRAM recommended) and cited the overview raw source, but did not explicitly label
   that guidance as third-party rather than official docs. Minor.
8. **Boundary probe** — full Hermes column from the wiki; every OpenClaw/AutoGPT cell marked
   "Not in wiki," explicitly quoting the schema guardrail "Cite or say 'not in the wiki'."
9. **Ingest** — fetched the GitHub releases page, wrote
   `raw/articles/2026-07-01-hermes-agent-releases.md` (19 releases, v0.2.0→v0.18.0, sha256
   verified), created 5 concept pages, updated 6 pages + index (7→12) + log, and self-checked
   for broken wikilinks (none). The Hermes-authored changes are committed to this repo.

## Findings

- **F1 — `--yolo` is unnecessary.** Both reads *and* the full ingest write path worked headless
  with approval gates on. Runbooks should drop `--yolo`; nothing in the brain workflow needs it.
- **F2 — unconstrained prompts bypass the brain.** A probe run of test 1 *without* the wiki-only
  prefix produced a correct answer cited to live `hermes-agent.nousresearch.com` URLs — Hermes
  browsed the web instead of reading the wiki. Any query surface (web UI, wrapper API) must pin
  answers to `WIKI_PATH`, or the knowledge base is decorative.
- **F3 — cost profile.** Queries ran 35–56s each; the ingest (12 pages touched) took 4m23s.
  Consistent with the POC assumption that grep-retrieval keeps queries cheap and ingest is the
  token-heavy, infrequent step.
- **F4 — sync loop closed.** Post-ingest, the VPS clone was dirty; the changes were pulled into
  this repo, committed, and the clone reset to origin — demonstrating the git-based update flow
  in both directions (VPS-authored edits currently route through a machine with push access).
