#!/usr/bin/env bash
# Retrieval primitive for the brain: search wiki/ the way the query op does (schema.md §7).
# Answers are built from wiki/ only, so we search there — not raw/.
set -eu
cd "$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"

if [ "$#" -eq 0 ]; then
  echo "usage: bin/query.sh \"<search terms>\"" >&2
  exit 2
fi
q="$*"

if command -v rg >/dev/null 2>&1; then
  hits=$(rg -l -i -- "$q" wiki | sort || true)
  echo "== wiki pages mentioning: $q =="
  [ -n "$hits" ] && printf '%s\n' "$hits" || echo "  (no matches — likely not in the brain yet)"
  echo
  echo "== matches with context =="
  rg -n -i -C1 --heading -- "$q" wiki || true
else
  hits=$(grep -rli -- "$q" wiki | sort || true)
  echo "(ripgrep not found — using grep) == wiki pages mentioning: $q =="
  [ -n "$hits" ] && printf '%s\n' "$hits" || echo "  (no matches — likely not in the brain yet)"
  echo
  echo "== matches with context =="
  grep -rni -C1 -- "$q" wiki || true
fi
