# ingest/

Connectors that pull source documents into `raw/`. Keep this layer dumb: it only moves bytes +
stamps provenance. All curation (summaries, entity/concept pages, cross-refs) is the LLM's job,
done by Hermes via the `brain-ingest` skill per [schema.md](../schema.md) §6.

## v1 — folder sync (works today, $0)
```bash
python3 ingest/sync_docs.py ~/exported-docs            # today's date
python3 ingest/sync_docs.py ~/exported-docs --date 2026-07-01
```
Export your Notion / Google Docs / Confluence pages to markdown into one folder, then run the
above. It copies them into `raw/` with a provenance header and skips unchanged files.

## Later — live connectors (all have free tiers)
- **Notion**: official API, export blocks → markdown.
- **Google Drive**: Drive API, export Docs → markdown.
- **Confluence**: REST API, storage format → markdown.
Each should write into `raw/` with the same `YYYY-MM-DD-<slug>.md` + provenance-header convention,
then trigger `brain-ingest`. Add one only after folder-sync ingestion quality is proven.
