# Veilid Browser Chat (single‑file)

A self‑contained **browser demo** for bringing up the Veilid runtime (WASM + JS glue), probing bootstrap peers, starting and attaching to the network over **WS/WSS**, and joining a **DHT “room”** (record) for basic interoperability checks. It’s designed as a **connectivity and debugging harness** first; the UI shows attach state and peer counts and can open a DHT record derived from a shared *namespace/kind/name* tuple. If your runtime build exposes **private route export/import**, the UI will enable that path too; otherwise it falls back to DHT rooms.

curl -L -o veilid_wasm.js https://unpkg.com/@bmv437/veilid-wasm@0.4.6/veilid_wasm.js
curl -L -o veilid_wasm_bg.wasm https://unpkg.com/@bmv437/veilid-wasm@0.4.6/veilid_wasm_bg.wasm

Grab and save these in the same directory as the html page.

## Table of contents

* [What this is](#what-this-is)
* [Features](#features)
* [What it is not (yet)](#what-it-is-not-yet)
* [Requirements](#requirements)
* [Quick start](#quick-start)

  * [1) Open the HTML](#1-open-the-html)
  * [2) Load the runtime](#2-load-the-runtime)
  * [3) Seed / probe bootstraps](#3-seed--probe-bootstraps)
  * [4) Start and attach](#4-start-and-attach)
  * [5) Join a DHT room](#5-join-a-dht-room)
  * [6) (Optional) Private route](#6-optional-private-route)
* [UI guide](#ui-guide)
* [Configuration details](#configuration-details)
* [Content Security Policy (CSP)](#content-security-policy-csp)
* [Attachment states & peer counts](#attachment-states--peer-counts)
* [Troubleshooting](#troubleshooting)
* [How DHT room keys are derived](#how-dht-room-keys-are-derived)
* [Serving from a web server (optional)](#serving-from-a-web-server-optional)
* [Building your own runtime](#building-your-own-runtime)
* [Security notes](#security-notes)
* [License](#license)

---

## What this is

A single HTML file that runs entirely in the browser. It expects a **wasm‑bindgen** generated **JS glue** file and its matching **`.wasm`** to load the Veilid core. The page:

* Loads the runtime safely under a browser‑compatible **CSP**.
* Lets you **probe** a list of WS/WSS **bootstrap** endpoints.
* Starts and **attaches** to the Veilid network (WS/WSS).
* Shows **attachment state** and live **peer counts**.
* Derives and opens a **DHT record** (a “room”) using a schema‑compat layer.
* Enables **private routes** *if your runtime build exposes route export/import*. Otherwise it tells you route export isn’t available.

---

## Features

* **Three runtime sources**

  * Pick files (recommended for dev): glue `.js` + `.wasm`
  * Embedded Base64 (make the HTML fully self‑contained)
  * Paste Base64 (quick testing)
* **wasm‑bindgen init (deprecation fixed)**

  * Uses the modern `mod.default({ module_or_path, module })` signature
  * Falls back to the legacy `mod.default(wasmBytes)` if needed
* **CSP that permits WebAssembly during development**

  * Adds `wasm-unsafe-eval` (Chromium/Edge) and `unsafe-eval` (older Firefox)
  * Allows blob/data script sources for in‑page module loading
* **Bootstrap tools**

  * Sensible default list (both WSS hostnames and WS hosts)
  * “Probe bootstraps” with timing and a **Use only reachables** toggle
  * **Force WSS** and **Allow WSS to IPs** toggles (for SNI/cert behavior)
* **Attach lifecycle**

  * Start → Attach → show state transitions and peer counts
  * Detach safely
* **DHT room join**

  * Namespace/kind/name → derives the **same record key** across participants
  * **Schema auto‑detection** avoids enum/tagging mismatches
  * **Live message watch/send** via `setDhtValue` / `watchDhtValues`
* **Route export/import (if available)**

  * UI auto‑detects route APIs (camelCase or snake_case) and enables the panel only when supported

---

## What it is **not** (yet)

* A feature-complete chat app. It demonstrates basic DHT and private route messaging for debugging.
* A persistence demo. Browser stores in this page are configured for **in‑memory** use.

---

## Requirements

* A recent desktop browser:

  * **Firefox 102+** or **Firefox ESR** (older Firefox requires `unsafe-eval` for WASM)
  * **Chrome/Edge 119+** (needs `wasm-unsafe-eval`)
  * Safari’s WebAssembly + CSP behavior varies; use Chrome/Firefox for dev
* A matching **wasm‑bindgen** pair: **glue JS + WASM** from the same build.
* Network access to at least one **reachable** bootstrap (WSS or WS).

---

## Quick start

### 1) Open the HTML

Open the file directly (you’ll see `protocol=file:` in the header) **or** serve it from a simple web server. For local dev, `file://` is fine and avoids server CSP overrides.

### 2) Load the runtime

1. In “(−1) Load runtime”, choose **Pick files** (default).
2. Select your **glue `.js`** and **`.wasm`**.
3. Click **Load runtime**.
   You should see:

   * `wasm-bindgen init OK via options object (deprecation warning avoided)`
   * Glue/WASM sizes and export count
   * “Export route not supported …” if your build doesn’t expose route APIs (that’s normal for some builds)

> If you prefer, use “Embedded Base64” (bake both into this file) or “Paste Base64”.

### 3) Seed / probe bootstraps

1. Click **Seed defaults** (a mix of WSS hostnames and WS hosts).
2. Click **Probe bootstraps**.
   The log will show OK/TIMEOUT/ERROR per endpoint with timings.
3. (Optional) Tick **Use only reachables** so the config includes only the hosts the browser could preflight.

**Toggles worth knowing**

* **Force WSS** — Disables `ws://` in the config (some environments block plain WS).
* **Allow WSS to IPs** — Keeps `wss://<IP>` entries. Many IPs will still fail due to TLS SNI/cert mismatch; hostnames are safer.

### 4) Start and attach

1. Click **Start core**. The effective JSON config appears.
2. Click **Attach**.
   You should see states like `Attaching → AttachedWeak → AttachedGood → AttachedStrong → FullyAttached / OverAttached` with growing peer counts.

> If attach stalls at “Network started but no peers yet”, re‑probe bootstraps or toggle Force WSS / Allow WSS to IPs.

### 5) Join a DHT room

1. Keep **Namespace** = `chat`, **Kind** = `room` (defaults).
2. Enter a **Room key** (e.g., `testroom`). Share this exact triplet (namespace/kind/name) with peers.
3. Click **Join room**. The log shows:

   * DHT schema mode chosen automatically (prevents `DHTSchema` tag errors)
   * Derived record key preview
   * `createDhtRecord` (no‑op if it exists) and `openDhtRecord` results

> This confirms all parties will derive and open the **same** DHT record. The demo wires basic messaging using `setDhtValue` and `watchDhtValues` so peers can chat immediately.

### 6) (Optional) Private route

If your runtime exposes route export/import (functions such as `export_remote_private_route`/`import_remote_private_route` or camelCase variants like `exportRemotePrivateRoute`/`importRemotePrivateRoute`), the **Private Route** panel is enabled. Otherwise you’ll see a note that it’s unavailable in this build; use DHT rooms instead.

---

## UI guide

* **Load runtime**: picks/embeds/pastes the wasm‑bindgen glue + WASM and performs the modern initialization.
* **Probe bootstraps**: uses plain WebSocket preflight to measure reachability/latency; the result can be applied via **Use only reachables**.
* **Start core**: calls `startup_veilid_core(updateCb, configJSON)`.
* **Attach / Detach**: attaches to the network and streams updates to the log.
* **DHT Room**:

  * Namespace / Kind / Room key → derive key → `createDhtRecord` → `openDhtRecord`.
  * The `schemaMode` pill indicates which enum/tagging style matched your runtime.
* **Private Route**: auto‑hidden if route APIs are not exported by your build.

---

## Configuration details

* **Transports**

  * `ws.connect` and `wss.connect` toggles reflect the UI switches.
  * `udp`/`tcp` are disabled in this browser harness.
* **Routing table**

  * Limits: over‑attached `64`, fully attached `32`, strong `16`, good `8`, weak `4`.
  * Attachment states in logs come from these thresholds.
* **DHT**

  * Conservative timeouts, small fanout, minimal record caches suitable for browser.
  * `max_watch_expiration_ms` = 600000 (10 minutes).
* **Stores**

  * `protected_store`, `table_store`, and `block_store` are configured for **in‑memory** browser usage (directory fields are placeholders).

The current config is always printed to **Effective config** as JSON for quick inspection.

---

## Content Security Policy (CSP)

This page **must** allow WebAssembly to compile and run. For **development**, the inline `<meta>` sets:

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self' data: blob:;
  connect-src *;
  img-src 'self' data: blob:;
  style-src 'self' 'unsafe-inline';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' blob: data:;
  worker-src 'self' blob: data:;
">
```

* Chromium/Edge require **`'wasm-unsafe-eval'`** for WASM.
* Older Firefox also needs **`'unsafe-eval'`**.
* We allow **blob:** and **data:** so the glue can be dynamically imported from in‑page bytes.

> If you serve this file from a web server: the **HTTP CSP header overrides this meta tag**. Ensure the server CSP also includes `wasm-unsafe-eval` (and `unsafe-eval` for older Firefox) during development.

**Production hardening**
When you deploy a static, pre‑hosted glue/WASM pair, you can tighten CSP by removing `unsafe-eval`/`wasm-unsafe-eval` and `blob:`/`data:`, and using nonces or hashes with `<script src="…">` from the same origin. The single‑file demo is optimized for dev flexibility.

---

## Attachment states & peer counts

You’ll see transitions like:

* `Attaching` → network starting
* `AttachedWeak` → a few peers (≥4)
* `AttachedGood` → ≥8
* `AttachedStrong` → ≥16
* `FullyAttached` → ≥32
* `OverAttached` → >32 (cap at 64 in this config)

Transient console lines like **“connection was interrupted while the page was loading”** are normal for some WS hosts during churn or when you keep unreachable endpoints in the list; they don’t indicate a fatal error if attachment proceeds.

---

## Troubleshooting

**CSP blocks WebAssembly**

* Console:
  *“The page’s settings blocked WebAssembly … Missing 'wasm-unsafe-eval' or 'unsafe-eval'”*
  Fix: ensure the CSP includes **`'wasm-unsafe-eval'`** (Chromium/Edge) and **`'unsafe-eval'`** (older Firefox).

**“wasm is undefined” or `initialize_veilid_wasm` missing**

* Usually a glue/WASM mismatch, or the glue failed to load under CSP.
* Re‑load the correct matching pair and confirm the deprecation‑free init is logged.

**“using deprecated parameters for the initialization function”**

* The single‑file uses the **new** options‑object init; if you still see this, you likely imported an older glue that doesn’t accept the object form. It falls back to the legacy call automatically.

**Attach says “Network started but no peers yet”**

* Preflight **Probe bootstraps** and tick **Use only reachables**.
* Try **Force WSS** if `ws://` is blocked in your environment.
* If using WSS to IPs, expect failures unless the certificate matches (SNI).

**“invalid type: string 'chat', expected internally tagged enum DHTSchema”**

* This demo auto‑detects the DHT enum style and uses the one your runtime expects. If you still see this, click **Join room** again after **Attach** completes, with defaults `namespace=chat` and `kind=room`.

**“Already attached”**

* Harmless; you clicked **Attach** more than once.

**No Private Route panel**

* Your runtime build doesn’t export route APIs in the browser target. Use **DHT rooms** in this build, or rebuild the runtime with route export enabled.

---

## How DHT room keys are derived

Different runtime builds expect different **internally‑tagged enum** formats for DHT schemas. This page tries several strategies and picks the first that succeeds, including:

* Plain strings: `getDhtRecordKey(ns, kind, name)`
* Tagged forms such as:

  * `{type:"namespace", namespace: ns}`
  * `{schema:"namespace", namespace: ns}`
  * `{type:"app", app: ns}`
  * And case variants (`Namespace`, `App`)

Once a strategy works, it’s reused (shown as **Schema mode**). The derived key is displayed so you can verify both sides compute the same key for the same `(namespace, kind, name)` triplet.

> The demo uses `setDhtValue` and `watchDhtValues` around the derived key for basic DHT chat.

---

## Serving from a web server (optional)

When you move from `file://` to `https://`:

1. Ensure your **server CSP header** allows WebAssembly during development (see the meta tag values above).
2. Consider **hosting** the glue `.js` and `.wasm` as static files and importing by URL instead of blob/data.
3. Keep **`connect-src`** open to any bootstrap hosts you need (or to `*` during dev).

---

## Building your own runtime

This page expects a **matching** wasm‑bindgen pair:

* `veilid_*_bg.wasm` (WebAssembly)
* `veilid_*.js` (wasm‑bindgen glue)

**Important**

* Glue and WASM **must** come from the **same build**; mixing versions can cause undefined symbols or memory errors.
* If you want **private route export/import** in the browser, ensure your build exposes the relevant APIs (look for exports like `export_remote_private_route` / `import_remote_private_route` or camelCase variants) or an equivalent to/from‑string representation. If not present, the UI hides the route panel and recommends DHT rooms.

---

## Security notes

* The included CSP is **development‑friendly**, not production‑hardened.
* `connect-src *` is permissive to make bootstrap probing easy.
* Remove `unsafe-eval`/`wasm-unsafe-eval` and `blob:`/`data:` allowances for production and use static hosting with nonces/hashes instead.
* This demo config uses **in‑memory stores**; nothing sensitive is persisted.

---

## License

MIT License

---
