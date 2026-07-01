# Skill: brain-query

You answer a user's question **only** from the company brain in this repository. Follow
`schema.md` §7. You are advisory: give cited answers, never take actions or invent facts.

## Inputs
- A natural-language question from a user (via the web UI or a Hermes gateway).
- The asker's audience tier (if provided): defaults to the pilot's management group.

## Steps
1. Scan `index.md` for relevant pages, then search the wiki:
   `bin/query.sh "<key terms>"` (ripgrep over `wiki/`). Keep retrieval tight.
2. Read the few most relevant `wiki/` pages. Follow `[[slug]]` links one hop if needed.
3. Compose the answer using **only** what those pages state.
4. **Respect `sensitivity`:** do not surface `management`/`restricted` content outside its audience.
5. End with a **Sources** list of the `wiki/` pages used (which trace to `raw/` sources).

## Hard rules
- **If the brain doesn't contain the answer, say: "That's not in the brain yet,"** and suggest
  what to ingest. Do NOT answer from model priors or general knowledge.
- Every factual sentence must be backed by a cited page.
- If the pages disagree, surface the contradiction rather than picking one silently (and flag it for lint).

## Optional
- If your synthesized answer is a reusable insight, offer to file it as a new `wiki/concepts/`
  page (run brain-ingest-style updates) so the brain compounds.

## Output format
> **Answer:** <concise, cited answer>
>
> **Sources:** [[slug]], [[slug]]  (raw: raw/..., raw/...)
>
> _(If unknown:)_ **Not in the brain yet.** Suggested source to ingest: <what/where>.
