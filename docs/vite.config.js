import { resolve } from 'path'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    Components({
      dirs: [
        './.vitepress/components',
      ],
      deep: false,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      transformer: 'vue3',
    }),
    Icons({
      compiler: 'vue3',
    }),
  ],
  resolve: {
    alias: {
      'floating-vue/style.css': resolve(__dirname, '../packages/floating-vue/dist/style.css'),
      'floating-vue': resolve(__dirname, '../packages/floating-vue/src/index.ts'),
    },
  },
  define: {
    VERSION: JSON.stringify(require('../package.json').version),
  },
})
