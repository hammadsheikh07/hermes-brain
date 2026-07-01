/* Company Brain — POC web app (dependency-free).
 * Talks to the Query API contract (docs/web-ui-implementation.md §2), or serves canned
 * answers from the seed data in mock mode so the UI is demoable with no backend. */

const LS_KEY = "brain.settings";

function loadSettings() {
  const defaults = { endpoint: "", token: "", repoBaseUrl: "", mock: true };
  try { return { ...defaults, ...JSON.parse(localStorage.getItem(LS_KEY) || "{}") }; }
  catch { return defaults; }
}
function saveSettings(s) { localStorage.setItem(LS_KEY, JSON.stringify(s)); }

let settings = loadSettings();

/* ---- mock brain (mirrors the seed wiki + the "cite or say you don't know" rule) ---- */
const MOCK = [
  {
    match: /(remote|anchor day|async|work from|policy)/i,
    answer:
      "Acme is remote-first (effective 2026-01-01). Employees may work anywhere within ±3 hours " +
      "of US Central Time, work is async-by-default, and each team meets in person twice per " +
      "quarter on reimbursed 'anchor days'. Core overlap hours are 10:00–14:00 US Central; " +
      "non-urgent replies are expected within one business day. Engineering's on-call rotation " +
      "overrides the response-time rule during incidents.",
    citations: [
      { slug: "remote-work-policy", raw: "raw/2026-07-01-acme-remote-work-policy.md" },
      { slug: "engineering-team", raw: "raw/2026-07-01-acme-remote-work-policy.md" },
    ],
  },
  {
    match: /(what is acme|company|product|pulse|funding|series a|headcount)/i,
    answer:
      "Acme Co. is a Series A SaaS company (founded 2022) building analytics for logistics. Its " +
      "flagship product, Acme Pulse, gives mid-market freight and warehousing operators real-time " +
      "visibility into delays, cost anomalies, and SLA risk. ~40 people; raised $12M in Q1 2026 " +
      "led by Northwind Ventures; remote-first.",
    citations: [{ slug: "acme-co", raw: "raw/2026-07-01-acme-company-overview.md" }],
  },
];

function mockQuery(question) {
  const hit = MOCK.find((m) => m.match.test(question));
  if (hit) return { answer: hit.answer, citations: hit.citations, notInBrain: false };
  return {
    answer:
      "That's not in the brain yet. Ingest a source that covers this, then ask again. " +
      "(Mock mode only knows the seed 'Acme Co.' pages.)",
    citations: [],
    notInBrain: true,
  };
}

async function liveQuery(question) {
  if (!settings.endpoint) throw new Error("No endpoint set. Add one in Settings, or enable mock mode.");
  const res = await fetch(settings.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(settings.token ? { Authorization: `Bearer ${settings.token}` } : {}),
    },
    body: JSON.stringify({ question, audience: "management" }),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
  return res.json();
}

/* ---- rendering ---- */
function citationHtml(c) {
  const label = `[[${c.slug}]] · <code>${c.raw}</code>`;
  if (settings.repoBaseUrl) {
    const base = settings.repoBaseUrl.replace(/\/$/, "");
    return `<a href="${base}/${c.raw}" target="_blank" rel="noopener">[[${c.slug}]]</a> · <code>${c.raw}</code>`;
  }
  return label;
}

function renderAnswer(result) {
  const el = document.getElementById("answer");
  el.hidden = false;
  el.classList.toggle("notinbrain", !!result.notInBrain);
  const sources =
    result.citations && result.citations.length
      ? `<div class="sources"><strong>Sources:</strong> ${result.citations.map(citationHtml).join(" &nbsp;·&nbsp; ")}</div>`
      : result.notInBrain
      ? `<div class="sources">No sources — not in the brain yet.</div>`
      : "";
  el.innerHTML = `<h3>Answer</h3><div>${escapeHtml(result.answer)}</div>${sources}`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}

/* ---- events ---- */
document.getElementById("ask-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const q = document.getElementById("q").value.trim();
  if (!q) return;
  const el = document.getElementById("answer");
  el.hidden = false;
  el.classList.remove("notinbrain");
  el.innerHTML = `<h3>Answer</h3><div>Thinking…</div>`;
  try {
    const result = settings.mock ? mockQuery(q) : await liveQuery(q);
    renderAnswer(result);
  } catch (err) {
    el.innerHTML = `<h3>Error</h3><div>${escapeHtml(err.message)}</div>`;
  }
});

document.querySelectorAll(".tab").forEach((t) =>
  t.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((x) => x.classList.remove("active"));
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    t.classList.add("active");
    document.getElementById(t.dataset.view).classList.add("active");
    if (t.dataset.view === "dashboard") loadDashboard();
  })
);

document.getElementById("s-save").addEventListener("click", () => {
  settings = {
    endpoint: document.getElementById("s-endpoint").value.trim(),
    token: document.getElementById("s-token").value,
    repoBaseUrl: document.getElementById("s-repo").value.trim(),
    mock: document.getElementById("s-mock").checked,
  };
  saveSettings(settings);
  reflectMode();
  alert("Saved.");
});

/* ---- dashboard (mock reads static files; live uses the /index /log /lint endpoints) ---- */
async function loadDashboard() {
  const idx = document.getElementById("dash-index");
  const log = document.getElementById("dash-log");
  const lint = document.getElementById("dash-lint");
  if (settings.mock) {
    idx.textContent = await fetchText("../../index.md", "(index.md — serve the repo root to view)");
    log.textContent = await fetchText("../../log.md", "(log.md — serve the repo root to view)");
    lint.textContent = "Run bin/lint.sh or the brain-lint skill to generate lint/YYYY-MM-DD.md.";
    return;
  }
  idx.textContent = await apiText("/index");
  log.textContent = await apiText("/log?n=50");
  lint.textContent = await apiText("/lint/latest");
}

async function fetchText(url, fallback) {
  try { const r = await fetch(url); return r.ok ? await r.text() : fallback; }
  catch { return fallback; }
}
async function apiText(path) {
  try {
    const base = settings.endpoint.replace(/\/query$/, "");
    const r = await fetch(base + path, {
      headers: settings.token ? { Authorization: `Bearer ${settings.token}` } : {},
    });
    if (!r.ok) return `(${path} → ${r.status})`;
    const j = await r.json();
    return j.markdown || (j.lines ? j.lines.join("\n") : JSON.stringify(j, null, 2));
  } catch (e) { return `(${path} → ${e.message})`; }
}

/* ---- init ---- */
function reflectMode() {
  const tag = document.getElementById("mode-tag");
  tag.textContent = settings.mock ? "mock" : "live";
  tag.classList.toggle("live", !settings.mock);
}
function hydrateSettingsForm() {
  document.getElementById("s-endpoint").value = settings.endpoint;
  document.getElementById("s-token").value = settings.token;
  document.getElementById("s-repo").value = settings.repoBaseUrl;
  document.getElementById("s-mock").checked = settings.mock;
}
hydrateSettingsForm();
reflectMode();
