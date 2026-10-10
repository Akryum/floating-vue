# Contributing Guidelines

## Set up the workspace

Use Node.js LTS and the pnpm version specified in the root `package.json`
(`packageManager`). Run the following commands from the repository root:

```sh
pnpm install --frozen-lockfile
pnpm run build
```

The repository is a pnpm workspace: the library is in `packages/floating-vue`,
the interactive demo is in `demo`, and the documentation is in `docs`.
Build the library before starting the demo or documentation, which import its
built output through the workspace dependency.

## Develop the library

Watch and rebuild the library as you edit it:

```sh
pnpm --filter floating-vue dev
```

In a separate terminal, start the interactive demo:

```sh
pnpm --filter demo dev
```

To build the library once for production, use `pnpm run build`. To build the
demo, use `pnpm --filter demo build`.

## Run checks

Build the library and run the unit and public API tests:

```sh
pnpm run test
```

For watch mode, first build the library, then run Vitest directly:

```sh
pnpm run build
pnpm exec vitest
```

Keep the library watch build running when changing code covered by the public
API tests, which import the built package.

Run lint and type checks:

```sh
pnpm run lint
pnpm run typecheck
```

Run the demo's browser tests with Chromium (as in the E2E workflow):

```sh
pnpm --filter floating-vue build
pnpm --filter demo exec playwright install --with-deps chromium
pnpm --filter demo test:e2e
```

Playwright starts the demo server on port 5173. Stop any unrelated server on that
port before running the tests.

## Documentation

After building the library, start the documentation site:

```sh
pnpm run docs
```

`pnpm run dev` also starts the documentation site; it is not the library watch
build. To build the library and documentation for production, run:

```sh
pnpm run docs:build
```
