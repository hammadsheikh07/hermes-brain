---
source_url: https://www.marktechpost.com/2026/06/24/nous-research-adds-learn-to-hermes-agents-skills-system-capturing-workflows-as-slash-commands-without-hand-writing-skill-md/
ingested: 2026-07-01
sha256: f40254e200b770486c16f6a3191a79d75dd65056e93b87af995accf0d4c3362c
---

# Hermes Agent — the /learn skills feature (capture)

- **/learn** captures workflows as reusable skills without hand-writing docs: "You describe a
  source, and the agent does the sourcing with tools it already has."
- **Inputs:** local directories, online documentation URLs, past conversations, or pasted notes.
  Examples: `/learn the REST client in ~/projects/acme-sdk`, `/learn https://docs.example.com/api/quickstart`.
- **Storage/format:** skills are markdown files with YAML frontmatter in `~/.hermes/skills/`; each
  skill is "a folder containing a `SKILL.md` file with instructions." Uses a "progressive
  disclosure pattern to keep token usage low"; "compatible with the agentskills.io open standard."
- **SKILL.md sections:** description (under 60 characters), "When to Use," "Procedure," "Pitfalls,"
  "Verification."
- **Four ways to create a skill:** hand-write a SKILL.md; use `/learn` on existing material; agent
  auto-save after solving a complex workflow; install from the Skills Hub.
- **Loading:** the agent retrieves a ~3k-token index first, then full content only when needed.
- **Announced:** June 23, 2026 (Nous Research X post referenced by the article).
