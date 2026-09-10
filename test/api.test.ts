import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { extractDts, extractRuntime } from 'tsnapi'
import { describe, expect, it } from 'vitest'

// Snapshot the ESM entry only: the UMD build is an IIFE global with no static
// exports, so its runtime surface is empty and its declarations just mirror the
// ESM ones.
const dist = resolve(import.meta.dirname, '../packages/floating-vue/dist')
const snapshots = resolve(import.meta.dirname, '__snapshots__/tsnapi/floating-vue')

describe('floating-vue public API', () => {
  it('runtime', async () => {
    const file = resolve(dist, 'floating-vue.mjs')
    const snapshot = await extractRuntime(file, await readFile(file, 'utf8'))
    await expect(snapshot).toMatchFileSnapshot(resolve(snapshots, 'index.snapshot.js'))
  })

  it('dts', async () => {
    const file = resolve(dist, 'floating-vue.d.mts')
    const snapshot = await extractDts(file, await readFile(file, 'utf8'))
    await expect(snapshot).toMatchFileSnapshot(resolve(snapshots, 'index.snapshot.d.ts'))
  })
})
