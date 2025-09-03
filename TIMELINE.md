# Project Timeline

The project is organized into nine milestones building toward a single‑file Veilid chat.

1. **Scaffold** – repository structure, dev/build scripts.
2. **Load Veilid example** – initialize WASM and expose `veilid` global.
3. **Embed WASM** – Base64 embed of glue and WASM; dynamic loader.
4. **Connectivity** – bootstrap probing, attach lifecycle, peer stats.
5. **Persistence** – identity, contacts, rooms stored locally.
6. **Rooms via DHT** – multi‑writer room chat with watch/send.
7. **Private routes** – 1:1 routing with DHT fallback.
8. **Groups** – group membership, roles, and fanout messaging.
9. **Packaging** – produce hardened single‑file and hosted variants.
