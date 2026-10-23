# Contributing Guidelines

(WIP)

## Run the project

Install dependencies from the repository root:

```
pnpm install
```

Run the full test suite (builds the packages, then runs Vitest):

```
pnpm run test
```

Run Vitest in watch mode:

```
pnpm exec vitest --watch
```

Build the library in dev mode:

```
pnpm --filter floating-vue run dev
```

Build the library for production:

```
pnpm --filter floating-vue run build
```

### Demo

Run the demo:

```
cd demo-src
yarn
pnpm run dev
```

Build the demo:

```
pnpm run build
```
