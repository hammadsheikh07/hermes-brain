# Brain Activity Log

> Append-only. One line per action: `YYYY-MM-DD | op | target-slug | what changed | sources: raw/...`
> Never rewrite past lines. See [schema.md](./schema.md) §9. Newest at the bottom.

2026-07-01 | edit | schema | established brain schema + operating contract | sources: -
2026-07-01 | ingest | acme-company-overview | created summary + entity [[acme-co]] + entity [[engineering-team]] | sources: raw/2026-07-01-acme-company-overview.md
2026-07-01 | ingest | acme-remote-work-policy | created summary + concept [[remote-work-policy]]; linked from [[engineering-team]] | sources: raw/2026-07-01-acme-remote-work-policy.md
