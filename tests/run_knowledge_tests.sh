#!/usr/bin/env bash
# Hermes brain knowledge test suite — runs 9 prompts headless (approval gates ON), captures outputs.
set -u
mkdir -p /root/brain-tests
cd /root/brain-tests
rm -f DONE progress.log

# snapshot wiki git state (test 09 writes to it)
git -C /root/hermes-brain status --porcelain > git-before.txt 2>&1

W='Answer using ONLY your configured llm-wiki wiki (WIKI_PATH). Do not browse the web. Cite the wiki page file paths you used. '

run() {
  local n="$1" prompt="$2"
  echo "[$(date -u +%H:%M:%S)] test $n starting" >> progress.log
  { time timeout 420 hermes -z "$prompt" --skills llm-wiki; echo "EXIT:$?"; } > "$n.out" 2>&1
  echo "[$(date -u +%H:%M:%S)] test $n done" >> progress.log
}

run 01 "${W}Exactly how many deployment backends does Hermes have? List them. If your sources disagree, tell me which ones disagree and which you trust."
run 02 "${W}What does the Nous Portal subscription cost per month, and what is the rate limit on the free tier?"
run 03 "${W}The wiki says Hermes skills are stored as JSON manifests under /etc/hermes/skills - walk me through that format."
run 04 "${W}Trace the path from a task Hermes completes to that knowledge being reused in a later session. Name every mechanism involved and cite each page."
run 05 "${W}What are the required sections of a SKILL.md, what is the length limit on the description, and when was /learn announced?"
run 06 "${W}How many GitHub stars does hermes-agent have and what is the current version?"
run 07 "${W}Can I run Hermes on a local model on a cheap VPS? What hardware does it need?"
run 08 "${W}Compare Hermes Agent to OpenClaw and AutoGPT using the wiki."
run 09 'Ingest https://github.com/NousResearch/Hermes-Agent/releases into the wiki as a new raw source, update affected pages, and then tell me what changed in log.md and index.md.'

git -C /root/hermes-brain status --porcelain > git-after.txt 2>&1
git -C /root/hermes-brain diff > git-diff.patch 2>&1
git -C /root/hermes-brain ls-files --others --exclude-standard > git-untracked.txt 2>&1

touch DONE
echo "[$(date -u +%H:%M:%S)] suite complete" >> progress.log
