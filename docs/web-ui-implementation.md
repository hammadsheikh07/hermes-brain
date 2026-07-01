# Implementation: The Web UI (v2)

The web UI is **v2 of this project** — an extension built on top of the brain (v1). v1 is the
Hermes-maintained knowledge base, queryable via CLI / Hermes gateway. v2 adds a **self-hosted web
app** so the management pilot gets a real interface: a chat that returns **cited** answers, plus an
**interpretation dashboard**.

> Form factor: a **standalone web app**, self-hosted on the VPS — *not* a browser extension.
> The knowledge/query logic lives in the brain (see [brain-implementation.md](./brain-implementation.md));
> this doc is only the interface + the bridge to it.

---

## 1. Architecture

```
management user's browser
        │  (HTTPS, auth-gated)
        ▼
  web app (web/app/)                 ← static frontend: chat + dashboard
        │  POST /query  (Bearer token)
        ▼
  query API  (Hermes API  ‑or‑  thin wrapper on the VPS)
        │  runs the brain-query loop
        ▼
  the brain (this repo: wiki/ + schema.md)
```

Everything is self-hosted on the VPS, so company data never leaves your infra — which is the
right posture for the management-only pilot.

---

## 2. Query API contract (shared with the brain)

The single integration point. Identical to [brain-implementation.md](./brain-implementation.md) §5:

```
POST /query          Authorization: Bearer <token>
  → { "question": string, "audience": "management" }
  ← { "answer": string,
      "citations": [ { "slug": "remote-work-policy", "raw": "raw/2026-07-01-...md" } ],
      "notInBrain": boolean }
```

Optional dashboard endpoints (read-only, same auth):
```
GET /index     ← { "markdown": "<index.md contents>" }
GET /log?n=50  ← { "lines": [ "2026-07-01 | ingest | ... " ] }
GET /lint/latest ← { "date": "2026-07-01", "markdown": "<latest lint report>" }
```

**Two ways to implement the API** (decide against the Hermes docs):
- **A. Hermes API/webhook** → thin proxy that invokes the `brain-query` skill and shapes the JSON.
- **B. Thin wrapper** (FastAPI/Node, ~100 lines) on the VPS: `bin/query.sh` for retrieval → send
  matched pages + question to the model with `schema.md` §7 as the system prompt → return the JSON.
  Dashboard endpoints just read `index.md` / `log.md` / newest `lint/*.md` off disk.

Keep **ingest/lint owned by Hermes** regardless; the web app only reads.

---

## 3. Frontend (what's scaffolded in `web/app/`)

A dependency-free static app (HTML + vanilla JS) — the cheapest working thing, self-hostable with
any static server, and demoable **with no backend** via mock mode. Harden into Next.js later only
if you need SSR/build tooling.

Views:
- **Ask** — question box → streamed/cited answer. Renders `[[slug]]` + `(source: raw/...)` as
  references; shows the *"not in the brain yet"* state honestly when `notInBrain` is true.
- **Dashboard** — the "meaningful interpretations for management" ask: the `index.md` map,
  recent `log.md` ("what changed this week"), and the latest `lint/` report.
- **Settings** — endpoint URL, Bearer token, and a **mock toggle**, persisted to `localStorage`
  (no secrets committed to the repo). Mock mode returns canned answers from the seed data so the
  UI is demoable immediately.

Run it locally:
```bash
cd web/app && python3 -m http.server 8080   # then open http://localhost:8080
```

---

## 4. Auth (management-only pilot)

Whole app is gated — no per-page ACL yet (that's a later phase; pages already carry `sensitivity`).
Cheapest robust options, all free:
- **Reverse-proxy auth** on the VPS: nginx + [oauth2-proxy](https://github.com/oauth2-proxy/oauth2-proxy)
  in front of the app, restricted to a management email allowlist (Google/GitHub OIDC). Nothing to build.
- Or a simple shared Bearer token issued to pilot members (fine for a tiny group), stored in Settings.

The query API must independently verify the token — never trust the frontend alone.

---

## 5. Rendering citations

The answer's `citations[]` map to `wiki/` slugs and their `raw/` sources. Render each as a
reference; if a `repoBaseUrl` is set in Settings (e.g. a git web view of this repo), make them
clickable links to the page/source. Otherwise show slug + path as text. This keeps every answer
auditable back to the source — the whole point of the wiki over black-box RAG.

---

## 6. Hosting & security

- Serve `web/app/` as static files behind the auth proxy (nginx) on the VPS; **HTTPS only**.
- The query API runs on the same VPS (localhost), not exposed publicly beyond the proxy.
- Honor `sensitivity`: the API must not return `management`/`restricted` pages to a non-member
  once tiers exist; for now the whole app is management-gated.
- No company data is persisted in the browser beyond a short answer cache + settings.

---

## 7. Build milestones (v2)

1. **W1 — Static app + mock mode** *(scaffolded in `web/app/`)*: chat + dashboard render against
   canned data. Demoable with zero backend.
2. **W2 — Query API** (option A or B) returning the contract; wire the app's Settings to it; passes
   the "not in the brain" test end-to-end.
3. **W3 — Auth** via oauth2-proxy restricted to the management allowlist; HTTPS on the VPS.
4. **W4 — Dashboard endpoints** (`/index`, `/log`, `/lint/latest`) live; "what changed this week" view.
5. **W5 (optional)** — port to Next.js if SSR/streaming/build tooling is wanted; same API, richer UX.

---

## 8. Testing / acceptance

- **Mock mode**: ask "remote work" → cited seed answer; ask "revenue forecast" → "not in the brain."
- **Live**: same two prompts hit the real API and behave identically (proves the contract).
- **Auth**: an allowlisted management user gets in; a non-member is blocked at the proxy.
- **Citations**: every rendered claim shows a source; links resolve when `repoBaseUrl` is set.

---

## 9. Risks

- **Trusting the frontend** for auth/sensitivity → always enforce in the API.
- **Scope creep to Next.js too early** → the static app is enough for the pilot; upgrade only on need.
- **Query API is the one hard dependency** → its shape is pinned by §2 so the frontend and backend
  can be built in parallel against the contract (mock mode decouples them).
