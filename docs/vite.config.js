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
})
