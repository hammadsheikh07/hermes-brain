# web/ — management chat UI (POC)

The access surface for the management-only pilot. Not built yet — this note fixes the intended
shape so it can be dropped in without re-litigating decisions.

## Approach (cheapest working thing first)
1. **Start** by reusing Hermes' built-in web UI / gateway pointed at the `brain-query` skill. If
   that's enough for the pilot, you may not need a custom app at all.
2. **Harden** into a small self-hosted Next.js app on the VPS when you want auth + dashboards:
   - **Auth**: email-allowlist / SSO restricted to the management pilot group. Keep the whole
     brain gated behind it (that's our access-control model for v1).
   - **Chat page**: send the question to the query path → stream a **cited** answer; render
     `[[slug]]` and `(source: raw/...)` as clickable links into the repo.
   - **Interpretation dashboard** (the "meaningful interpretations for management" ask):
     rendered `index.md` (browsable map), recent `log.md` ("what changed this week"), and the
     latest `lint/` report.
   - **Host on the VPS** (Docker) — keeps company data on our infra. Vercel is fine later for
     non-sensitive deployments, but not for the sensitive pilot.

## Query path — the one open decision
How does this UI reach Hermes? Check https://hermes-agent.nousresearch.com/docs/ for an HTTP
API/webhook. If present, call it. If not, add a thin service (FastAPI/Node) on the VPS that
shells out to the Hermes CLI or runs the query loop directly against this repo, reusing
`schema.md` §7. Keep **ingest/lint owned by Hermes** either way. See `../PLAN.md`.
