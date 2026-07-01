# Skill: brain-ingest

You maintain the company brain in this repository. A new or changed document has appeared in
`raw/`. Integrate it into the wiki following `schema.md` (which is authoritative — read it first).

## Inputs
- One or more file paths under `raw/` (the new/changed sources).

## Steps
1. **Read `schema.md`**, then read each source file in full.
2. For each source, create or replace `wiki/summaries/<source-slug>.md` using the *summary*
   template (§5). Fill TL;DR, entities/concepts touched, and verbatim anchors.
3. Identify the **entities** (people, teams, products, customers, systems) and **concepts**
   (processes, policies, decisions, metrics) the source touches. For each:
   - If a `wiki/entities/<slug>.md` or `wiki/concepts/<slug>.md` exists, **update** it: add facts,
     add `(source: raw/...)` citations, bump `updated:` in frontmatter.
   - Otherwise **create** it from the template. Dedupe by slug first — never make a near-duplicate.
4. **Fix cross-references:** every entity/concept you mention should link via `[[slug]]`, and every
   new page must be linked from at least one existing page. Expect to touch ~10–15 pages.
5. Update `index.md` — add/move entries under the right `##` category with a fresh one-line summary.
6. Append **one** line to `log.md` in the §9 format describing what you created/updated.

## Hard rules
- Never edit files in `raw/`. If a source is wrong, note the discrepancy on the wiki page.
- Every wiki claim traces to a source, or is marked `> [!inferred]`.
- Prefer updating over duplicating. Keep frontmatter valid on every page you write.

## Output
A short report: which summary/entity/concept pages you created vs updated, and the `log.md` line you appended.
