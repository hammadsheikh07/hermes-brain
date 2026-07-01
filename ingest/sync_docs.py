#!/usr/bin/env python3
"""Stage exported markdown docs into raw/ for ingestion.

Usage:
    python3 ingest/sync_docs.py <source_dir> [--date YYYY-MM-DD]

Copies every *.md under <source_dir> into raw/ as ``YYYY-MM-DD-<slug>.md``, prepending a
provenance header (source path + fetch date) if the file doesn't already have an HTML-comment
header. Files whose content already exists in raw/ (any date) are skipped, so re-running is
safe and idempotent. After staging, run the Hermes ``brain-ingest`` skill on the new files.

This is the free/offline half of ingestion: it only moves bytes into raw/. The LLM curation
(summaries, entity/concept pages, cross-refs) is done by Hermes per schema.md §6.
"""
import argparse
import datetime
import hashlib
import pathlib
import re
import sys

REPO = pathlib.Path(__file__).resolve().parent.parent
RAW = REPO / "raw"


def slugify(name: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    return s or "doc"


def digest(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8", "replace")).hexdigest()


def existing_digests() -> set:
    out = set()
    for p in RAW.glob("*.md"):
        out.add(digest(p.read_text(encoding="utf-8", errors="replace")))
    return out


def main() -> None:
    ap = argparse.ArgumentParser(description="Stage markdown docs into raw/.")
    ap.add_argument("source_dir", help="folder of exported .md files")
    ap.add_argument("--date", default=None, help="fetch date, default today (YYYY-MM-DD)")
    args = ap.parse_args()

    date = args.date or datetime.date.today().isoformat()
    src = pathlib.Path(args.source_dir).expanduser()
    if not src.is_dir():
        sys.exit(f"not a directory: {src}")

    RAW.mkdir(exist_ok=True)
    seen = existing_digests()
    staged, skipped = [], []

    for f in sorted(src.rglob("*.md")):
        body = f.read_text(encoding="utf-8", errors="replace")
        if not body.lstrip().startswith("<!--"):
            header = f"<!--\nsource: {f}\norigin: (fill in)\nfetched: {date}\n-->\n\n"
            body = header + body
        d = digest(body)
        if d in seen:
            skipped.append(f.name)
            continue
        dest = RAW / f"{date}-{slugify(f.stem)}.md"
        # avoid clobbering a different doc that happens to share the slug+date
        n = 1
        while dest.exists() and digest(dest.read_text(encoding="utf-8", errors="replace")) != d:
            dest = RAW / f"{date}-{slugify(f.stem)}-{n}.md"
            n += 1
        dest.write_text(body, encoding="utf-8")
        seen.add(d)
        staged.append(dest.name)

    print(f"staged {len(staged)} file(s) into raw/:")
    for name in staged:
        print(f"  + {name}")
    if skipped:
        print(f"skipped {len(skipped)} unchanged file(s).")
    print("\nnext: run the Hermes brain-ingest skill on the new raw/ files (schema.md §6).")


if __name__ == "__main__":
    main()
