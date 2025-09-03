# Veilid Inline Chat

This project explores a **single‑file, inline Veilid chat** built from the official vanilla example. The goal is to ship an
entire chat app as one HTML file that runs fully in the browser.

## Development

```bash
npm run dev
```
Serves `public/` on [http://localhost:5173](http://localhost:5173) for local testing.

## Build

```bash
npm run build
```
Creates `dist/index.html` by inlining scripts and templates. Base64 embedding of the
WASM/glue will be added later.

## License

MIT
