# Skill: brain-lint

You run a health check over the company brain and write a report. Follow `schema.md` §8.
This is how the brain stays trustworthy over time — treat it as first-class, not an afterthought.

## Steps
1. Run the cheap deterministic pass first: `bin/lint.sh`. It reports orphans, broken `[[slug]]`
   links, pages missing from `index.md`, and pages with stale `updated:` dates. Start from its output.
2. Then reason over the wiki for what scripts can't catch:
   - **Contradictions** — two pages asserting incompatible facts (name both pages + the conflict).
   - **Stale claims** — sources superseded by a newer `raw/` doc, or `updated:` older than 90 days.
   - **Gaps** — entities/concepts referenced but never written up; suggest what to ingest next.
3. For confirmed staleness/contradiction, set the affected page's frontmatter `status: stale`
   and note why (do not delete content — flag it for a human).
4. Write the report to `lint/YYYY-MM-DD.md` with sections: Contradictions, Stale, Orphans,
   Broken links, Gaps. Each finding names the page(s) and the suggested fix.
5. Append one `log.md` line (op = `lint`) summarizing counts.

## Hard rules
- Lint **flags**, it does not silently rewrite facts. Human curates; you surface.
- Never touch `raw/`.

## Output
Path to the report written, plus a one-paragraph summary of the most important findings.
