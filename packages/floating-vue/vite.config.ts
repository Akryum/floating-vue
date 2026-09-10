import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'FloatingVue',
    },
    rollupOptions: {
      external: [
        'vue',
        '@floating-ui/dom',
      ],
      output: {
        globals: {
          vue: 'Vue',
          '@floating-ui/dom': 'FloatingUIDOM',
        },
      },
    },
  },
  define: {
    // eslint-disable-next-line ts/no-require-imports
    VERSION: JSON.stringify(require('./package.json').version),
  },
})
