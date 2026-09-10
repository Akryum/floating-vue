import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: { 'floating-vue': './src/index.ts' },
  format: ['es', 'umd'],
  globalName: 'FloatingVue',
  platform: 'neutral',
  target: 'es2018',
  dts: true,
  clean: true,
  copy: ['./src/style.css'],
  outExtensions: () => ({ dts: '.d.ts' }),
  outputOptions: {
    globals: {
      'vue': 'Vue',
      '@floating-ui/dom': 'FloatingUIDOM',
    },
  },
  hooks: {
    // Mirror the declarations as .d.mts for the ESM `import` condition.
    'build:done': async ({ options }) => {
      const dir = resolve(options.cwd, options.outDir)
      await copyFile(resolve(dir, 'floating-vue.d.ts'), resolve(dir, 'floating-vue.d.mts'))
    },
  },
})
