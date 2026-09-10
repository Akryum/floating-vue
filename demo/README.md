# demo

Playground app used to develop and end-to-end test floating-vue.

## Setup

```sh
pnpm install
```

### Start the dev server

```sh
pnpm dev
```

### Build for production

```sh
pnpm build
```

### Run the end-to-end tests

The e2e tests use [Playwright](https://playwright.dev/). Build the library once
so the demo can import it, install the browser, then run the tests:

```sh
pnpm --filter floating-vue build
pnpm exec playwright install chromium
pnpm test:e2e
```

Playwright starts the Vite dev server automatically. Use `pnpm test:e2e:ui` for
the interactive runner.
