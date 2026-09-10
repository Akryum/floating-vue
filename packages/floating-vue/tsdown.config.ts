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
})
