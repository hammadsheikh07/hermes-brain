#!/usr/bin/env bash
# Deterministic, LLM-free health check for the brain (schema.md §8).
# Catches the cheap-to-detect issues; the Hermes brain-lint skill is a superset that also
# reasons about contradictions and gaps. Portable to macOS's default bash (no assoc arrays).
set -eu
cd "$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

# slugs = wiki page filenames
find wiki -type f -name '*.md' 2>/dev/null | while IFS= read -r f; do
  basename "$f" .md
done | sort -u > "$tmp/slugs"

# refs = every [[slug]] used in wiki/ and index.md
grep -rhoE '\[\[[a-z0-9-]+\]\]' wiki index.md 2>/dev/null \
  | sed -E 's/^\[\[//; s/\]\]$//' | sort -u > "$tmp/refs"

comm -23 "$tmp/refs" "$tmp/slugs" > "$tmp/broken"    # referenced but no page
comm -23 "$tmp/slugs" "$tmp/refs" > "$tmp/orphans"   # page never referenced

# pages missing from index.md
: > "$tmp/noindex"
while IFS= read -r slug; do
  [ -z "$slug" ] && continue
  grep -qE "\[\[${slug}\]\]" index.md 2>/dev/null || echo "$slug" >> "$tmp/noindex"
done < "$tmp/slugs" || true

# frontmatter slug/filename mismatch + stale updated dates
: > "$tmp/mismatch"; : > "$tmp/stale"
now=$(date +%s)
find wiki -type f -name '*.md' 2>/dev/null | while IFS= read -r f; do
  fname=$(basename "$f" .md)
  fm=$(awk -F: '/^slug:/{gsub(/[ \t]/,"",$2); print $2; exit}' "$f")
  if [ -n "${fm:-}" ] && [ "$fm" != "$fname" ]; then
    echo "$f: frontmatter slug '$fm' != filename '$fname'" >> "$tmp/mismatch"
  fi
  d=$(awk -F: '/^updated:/{gsub(/[ \t]/,"",$2); print $2; exit}' "$f")
  [ -z "${d:-}" ] && continue
  if ts=$(date -j -f "%Y-%m-%d" "$d" +%s 2>/dev/null); then :
  elif ts=$(date -d "$d" +%s 2>/dev/null); then :
  else continue; fi
  age=$(( (now - ts) / 86400 ))
  [ "$age" -gt 90 ] && echo "$f: updated $d (${age}d ago)" >> "$tmp/stale"
  true
done || true

sec() { # title, file
  echo "## $1"
  if [ -s "$2" ]; then sed 's/^/  - /' "$2"; else echo "  (none) ✓"; fi
  echo
}

echo "# Brain lint — $(date +%Y-%m-%d)"
echo
echo "_Deterministic checks only. Run the Hermes brain-lint skill for contradictions & gaps._"
echo
sec "Broken links ([[slug]] with no page — 'to write')" "$tmp/broken"
sec "Orphans (page not referenced by any [[link]] in wiki/ or index.md)" "$tmp/orphans"
sec "Missing from index.md" "$tmp/noindex"
sec "Slug / filename mismatch" "$tmp/mismatch"
sec "Stale (updated > 90 days ago)" "$tmp/stale"
