import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  plugins: [
    createVuePlugin(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'FloatingVue',
    },
    rollupOptions: {
      external: [
        'vue',
        '@popperjs/core',
      ],
      output: {
        globals: {
          vue: 'Vue',
          '@popperjs/core': 'Popper',
        },
      },
    },
  },
  define: {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    VERSION: JSON.stringify(require('./package.json').version),
  },
})
