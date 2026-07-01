# web/ — management chat UI (v2)

**v2 of this project**: a self-hosted **web app** (management chat + interpretation dashboard)
built on top of the brain. Not a browser extension. Full design & build plan:
[../docs/web-ui-implementation.md](../docs/web-ui-implementation.md).

## What's here
- `app/` — a dependency-free static web app (HTML + vanilla JS). Runs with **mock mode** so it's
  demoable with **no backend**, then flips to a live query API when you have one.

## Try it now ($0, no backend)
```bash
cd web/app && python3 -m http.server 8080     # open http://localhost:8080
```
- **Ask** tab → type "what models does Hermes support?" → cited answer from the seed data.
  Ask "what is Hermes's enterprise SLA?" → honest *"not in the brain yet."*
- **Dashboard** tab → index / log / lint views (serve from repo root to see index.md & log.md).
- **Settings** tab → set the query API endpoint + token and untick *Mock mode* to go live.

## Going live
The app calls the **Query API contract** in
[../docs/web-ui-implementation.md](../docs/web-ui-implementation.md) §2. Stand that up (a Hermes
API proxy, or a ~100-line thin wrapper over `bin/query.sh` + the model), gate the app behind
auth (oauth2-proxy + management allowlist), and serve `app/` over HTTPS on the VPS.
