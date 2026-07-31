# Demo

Vite playground for `floating-vue`. It imports the workspace package directly, so it doubles
as the manual playground while developing the library and as the fixture the Playwright e2e
suite drives.

Run every command from the repo root or from this folder with `pnpm -C demo`.

## Development

```bash
pnpm -C demo run dev
```

Served on <http://localhost:5173>. Run `pnpm -C packages/floating-vue run dev` alongside it to
rebuild the library on save.

## Build

```bash
pnpm -C demo run build
```

## Lint

```bash
pnpm -C demo run lint
```

## End-to-end tests

Specs live in `e2e/*.spec.ts` and drive the routes served by this app (`/directive/*`,
`/component/*`). See [CONTRIBUTING.md](../CONTRIBUTING.md) for the one-time browser install.

```bash
pnpm test:e2e      # headless, Chromium only
pnpm test:e2e:ui   # Playwright UI runner
```

Set `E2E_ALL_BROWSERS=1` to also run the Firefox and WebKit projects.
