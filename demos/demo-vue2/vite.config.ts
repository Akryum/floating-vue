import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'

export default defineConfig({
  plugins: [
    createVuePlugin({
      vueTemplateOptions: {
        compilerOptions: {
          whitespace: 'preserve',
        },
      },
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/imports.scss";',
      },
    },
  },

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') }
    ],
  },
})
