# Architecture — how the brain works

The brain is a plain-markdown wiki (Karpathy's LLM-Wiki pattern) that Hermes Agent maintains
and answers from. No vector DB, no embeddings: retrieval is grep + `index.md`, storage is git.
The live copy Hermes reads is `deploy/wiki/` on the VPS, addressed via `WIKI_PATH`.

## Knowledge flow — three layers, three operations

```mermaid
flowchart TB
    subgraph EXT[External sources]
        S1[Official docs site]
        S2[GitHub repo / releases]
        S3[Third-party articles]
    end

    subgraph WIKI["WIKI_PATH = /root/hermes-brain/deploy/wiki"]
        subgraph L1["Layer 1 — immutable evidence"]
            RAW["raw/articles/*.md<br/>frontmatter: source_url, ingested, sha256(body)"]
        end
        subgraph L2["Layer 2 — agent-owned pages"]
            ENT["entities/*.md<br/>(hermes-agent, nous-research, ...)"]
            CON["concepts/*.md<br/>(learning-loop, skills-system, ...)"]
            IDX["index.md — catalog, 1-line summaries"]
            LOG["log.md — append-only activity log"]
        end
        subgraph L3["Layer 3 — contract"]
            SCH["SCHEMA.md<br/>page templates · [[wikilink]] rules ·<br/>hard rule: cite or say 'not in the wiki'"]
        end
    end

    HERMES["Hermes Agent (gpt-5.5)<br/>llm-wiki skill, headless hermes -z"]

    S1 & S2 & S3 -- "ingest: fetch, hash, stage" --> RAW
    RAW -- "summarize + cross-link" --> ENT & CON
    ENT & CON -- "cataloged in" --> IDX
    HERMES -- "every write appends to" --> LOG
    SCH -. "governs all reads/writes" .-> HERMES
    HERMES <--> WIKI
```

Layer 1 is never edited after ingest — every claim in Layer 2 cites back into it. Layer 2 is
what queries read; pages cross-reference each other with `[[wikilinks]]` so one ingest can
update many related pages consistently. Layer 3 is the operating contract the skill loads.

## Query path

```mermaid
sequenceDiagram
    participant U as User (ssh / future web UI)
    participant H as Hermes (llm-wiki skill)
    participant W as deploy/wiki

    U->>H: hermes -z "…question…" --skills llm-wiki<br/>(prompt pinned: answer ONLY from WIKI_PATH)
    H->>W: read index.md, grep pages
    W-->>H: matching entities/concepts + raw evidence
    alt answer is in the brain
        H-->>U: answer + wiki file-path citations
    else not covered
        H-->>U: "not in the wiki" (no invention)
    end
```

Two facts proven by the [test suite](test-report-2026-07-02.md): approval gates can stay ON
(`--yolo` is unnecessary), and the wiki-only pin in the prompt is **load-bearing** — without
it Hermes browses the live web and the knowledge base is bypassed (finding F2).

## Ingest path

```mermaid
sequenceDiagram
    participant O as Operator
    participant H as Hermes (llm-wiki skill)
    participant W as deploy/wiki

    O->>H: hermes -z "Ingest <url> …" --skills llm-wiki
    H->>H: fetch source, compute sha256
    H->>W: write raw/articles/<date>-<slug>.md (immutable)
    H->>W: create/update entity + concept pages, refresh [[wikilinks]]
    H->>W: update index.md, append log.md entry
    H->>W: self-check: broken wikilinks, sha256, page count
    H-->>O: summary of created/updated pages
```

Measured cost: queries 35–56s each; a full ingest touching 12 pages took ~4.5 min. Ingest is
the token-heavy step but batch and infrequent.

## Sync topology — git is the transport

```mermaid
flowchart LR
    LOCAL["Local repo<br/>~/Documents/hermes-brain<br/>(has push access)"]
    GH[("GitHub<br/>hammadsheikh07/hermes-brain")]
    VPS["VPS clone<br/>/root/hermes-brain<br/>(anonymous HTTPS, pull-only)"]
    HW["Hermes writes<br/>(ingest, log)"]

    LOCAL -- "git push" --> GH
    GH -- "git pull --rebase --autostash" --> VPS
    HW -- "dirties the clone" --> VPS
    VPS -. "rsync dirty wiki files back,<br/>commit + push from local" .-> LOCAL
```

Curated edits flow left→right (edit locally → push → pull on VPS). Hermes-authored edits flow
right→left: the VPS clone has no push credential, so its dirty files are rsynced to the local
repo, committed there, pushed, and the clone is then reset to origin — content identical,
history clean. `--autostash` exists because the skill writes `log.md`/`index.md` between pulls.

## Repo map

| Path | Role |
|---|---|
| `deploy/wiki/` | **The live brain** — llm-wiki skill format, what the VPS serves |
| `wiki/`, `schema.md`, `index.md`, `log.md` | Project-native wiki format (original POC contract) |
| `bin/lint.sh`, `bin/query.sh` | Deterministic, LLM-free lint/search for the repo-format wiki |
| `ingest/sync_docs.py` | Stages exported markdown into `raw/` with provenance + dedup |
| `tests/` | Knowledge test runner + raw outputs (9/9 pass) |
| `docs/` | Implementation docs, test report, this file |
| `web/` | v2 web chat UI scaffold (mock mode; will call the query path above) |
