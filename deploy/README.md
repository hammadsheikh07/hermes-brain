# deploy/ — the live brain served to Hermes

`deploy/wiki/` is the knowledge base in the format the bundled `llm-wiki` Hermes skill
expects (`SCHEMA.md`, `index.md`, `log.md`, `entities/`, `concepts/`, `raw/articles/`).
It is what the VPS actually reads — distinct from the repo-root `wiki/`, which follows
this project's own `schema.md` contract.

## How the VPS stays in sync

The VPS holds a clone of this repo at `/root/hermes-brain`, and Hermes points at it via

```
WIKI_PATH=/root/hermes-brain/deploy/wiki   # in ~/.hermes/.env
```

Update flow:

1. Edit pages in `deploy/wiki/` locally (or let ingest scripts write them).
2. Commit and `git push`.
3. On the VPS: `cd /root/hermes-brain && git pull --rebase --autostash`.

`--autostash` matters: the `llm-wiki` skill writes to `log.md`/`index.md` during
ingest, so the clone may be dirty. If Hermes-authored changes on the VPS are worth
keeping, commit and push them back from the VPS before pulling locally.
