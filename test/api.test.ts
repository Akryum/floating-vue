import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { extractRuntime } from 'tsnapi'
import { describe, expect, it } from 'vitest'

// Snapshot the ESM runtime exports only. The type declarations are skipped for
// now because TypeScript emits the inferred component prop types in a
// non-deterministic order, which would make a `.d.ts` snapshot flaky.
const dist = resolve(import.meta.dirname, '../packages/floating-vue/dist')
const snapshots = resolve(import.meta.dirname, '__snapshots__/tsnapi/floating-vue')

describe('floating-vue public API', () => {
  it('runtime', async () => {
    const file = resolve(dist, 'floating-vue.mjs')
    const snapshot = await extractRuntime(file, await readFile(file, 'utf8'))
    await expect(snapshot).toMatchFileSnapshot(resolve(snapshots, 'index.snapshot.js'))
  })
})
