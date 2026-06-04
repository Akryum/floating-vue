# Contributing Guidelines

Thanks for considering a contribution! This guide covers how to set up the
repo, run the local checks, and ship a change.

## Prerequisites

- Node.js 18 or 20 (matrix used by CI)
- pnpm 10 — installed automatically via `corepack` if you have a recent Node

The required pnpm version is pinned in `packageManager` in the root
`package.json`. Run `corepack enable` once to let your Node bootstrap it.

## Initial setup

```bash
pnpm install
```

This installs every workspace package (`packages/floating-vue`, `demo`, `docs`).

## Daily workflow

The repo is a single primary package (`packages/floating-vue`) plus a Vite
demo and a VitePress docs site. Most commands run from the repo root.

Run the unit tests in watch mode while iterating:

```bash
pnpm -C packages/floating-vue run test:unit --watch
```

Run the full local check suite (matches CI):

```bash
pnpm lint        # eslint across .js, .ts, .vue
pnpm typecheck   # vue-tsc against tests/types fixture
pnpm test        # vitest unit tests
pnpm build       # vite build + .d.ts emit
pnpm test:e2e    # Playwright suite against the demo SPA
```

Build the library in watch mode:

```bash
pnpm -C packages/floating-vue run dev
```

## Demo

Visual regression check / playground while editing the library:

```bash
pnpm -C demo run dev
```

The demo imports the workspace package directly, so source edits are picked up
on save once `pnpm -C packages/floating-vue run dev` is also running, or after
a fresh `pnpm build`.

## Docs

```bash
pnpm docs        # alias for `pnpm -C docs run dev`
pnpm docs:build  # full library + docs production build
```

## Tests

The library uses [Vitest](https://vitest.dev/) with a happy-dom runtime. Spec files
sit next to the source they cover — for example
`src/composable/popper/positioning.ts` is paired with
`src/composable/popper/positioning.spec.ts`.

Add tests with the same flavor: small DOM mounts, focused assertions, no
real timers unless the behavior under test is timer-driven. Component tests
go in `src/components/*.spec.ts` and use `@vue/test-utils`.

## End-to-end tests

The demo SPA doubles as a Playwright e2e fixture. Specs live in
`demo/e2e/*.spec.ts` and drive a real Chromium against the existing
demo routes (`/directive/*`, `/component/*`).

First run installs the Chromium browser binary:

```bash
pnpm build                                       # demo resolves floating-vue/dist
pnpm -C demo exec playwright install chromium    # one-time
pnpm test:e2e
```

Day-to-day:

```bash
pnpm test:e2e            # headless, list reporter
pnpm test:e2e:ui         # Playwright UI runner for debugging
```

Set `E2E_ALL_BROWSERS=1` to also run Firefox and WebKit projects.
CI runs the suite on Chromium only and uploads the HTML report and
traces as artifacts on failure.

## Code style

- Files stay under ~300 LOC where possible. Split early; small, named
  modules are preferred.
- Public functions, classes, and exported types carry JSDoc. Internal helpers
  carry a one-line JSDoc when their role is non-obvious.
- TypeScript runs in strict mode. Don't add `any` to keep the tree green —
  type the value, even if it takes a small refactor.
- Vue components use `<script setup lang="ts">` with `defineProps<>()` and
  `defineEmits<>()`. No Options API.

ESLint enforces formatting. There is no Prettier; rely on `pnpm lint --fix`.

## Pull requests

- Open against `main` (or the active development branch — check the README).
- CI runs lint, typecheck, tests, and build on Node 18 and 20.
- Use semantic commit messages (`feat:`, `fix:`, `chore:`, `test:`, `docs:`).
- Describe the user-facing change and the testing you ran in the PR body.

## Releasing

Maintainers only. Releases are cut from `main`:

```bash
pnpm run release
```

This runs lint, builds the library, and invokes the `sheep` release tool. The
release-notes workflow then publishes a GitHub Release for the new tag.
