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

/* ---- mock brain (mirrors the real Hermes-Agent seed wiki + "cite or say you don't know") ---- */
const MOCK = [
  {
    match: /(model|provider|ollama|openrouter|openai|nous portal|gpt|claude|gemini|switch)/i,
    answer:
      "Hermes is model-agnostic — you switch providers with `hermes model`, no code changes. " +
      "Official routes: Nous Portal (recommended, one-account, 300+ models), OpenRouter, OpenAI, " +
      "or any custom endpoint. Reachable models include Claude, GPT-4, and Gemini, plus local " +
      "Ollama (Llama 3, Mistral, Qwen 2.5) — though local 7B+ models want >=16GB VRAM, so a small " +
      "VPS usually can't run them well.",
    citations: [
      { slug: "model-providers", raw: "raw/2026-07-01-hermes-agent-github.md" },
      { slug: "model-providers", raw: "raw/2026-07-01-hermes-agent-overview.md" },
    ],
  },
  {
    match: /(deploy|backend|docker|ssh|modal|daytona|singularity|install|vps|self-host|run)/i,
    answer:
      "Hermes runs on 6 backends: local, Docker, SSH, Daytona, Singularity, and Modal. Daytona " +
      "and Modal hibernate when idle, costing nearly nothing. Install on Linux/macOS/WSL2 with " +
      "`curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash`, then run `hermes`.",
    citations: [
      { slug: "deployment-backends", raw: "raw/2026-07-01-hermes-agent-docs.md" },
    ],
  },
  {
    match: /(what is hermes|hermes agent|learning loop|skill|memory|nous|learn|self-improv)/i,
    answer:
      "Hermes Agent is an open-source (MIT) self-improving AI agent by Nous Research — the only " +
      "agent with a built-in learning loop: it turns task experience into reusable SKILL.md skills " +
      "(five stages: execute -> evaluate -> extract -> refine -> retrieve) and builds a model of " +
      "you across sessions. The /learn command (announced 2026-06-23) captures a directory, URL, " +
      "or past conversation into a skill automatically.",
    citations: [
      { slug: "hermes-agent", raw: "raw/2026-07-01-hermes-agent-docs.md" },
      { slug: "learning-loop", raw: "raw/2026-07-01-hermes-agent-overview.md" },
      { slug: "skills-system", raw: "raw/2026-07-01-hermes-learn-skills.md" },
    ],
  },
];

function mockQuery(question) {
  const hit = MOCK.find((m) => m.match.test(question));
  if (hit) return { answer: hit.answer, citations: hit.citations, notInBrain: false };
  return {
    answer:
      "That's not in the brain yet. Ingest a source that covers this, then ask again. " +
      "(Mock mode only knows the seed Hermes-Agent pages.)",
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
