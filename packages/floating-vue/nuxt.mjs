export default function () {
  const nuxt = this.nuxt
  nuxt.options.vue.compilerOptions.directiveTransforms = nuxt.options.vue.compilerOptions.directiveTransforms || {}
  nuxt.options.vue.compilerOptions.directiveTransforms.tooltip = () => ({
    props: [],
    needRuntime: true,
  })

  nuxt.options.css.push('floating-vue/dist/style.css')

  this.addPlugin({
    filename: 'floating-vue.mjs',
    getContents: () => `
      import { defineNuxtPlugin } from '#app'
      import FloatingVue from 'floating-vue'
      
      export default defineNuxtPlugin((nuxtApp) => {
        // @TODO cutomization
        nuxtApp.vueApp.use(FloatingVue)
      })
    `,
  })

  // @TODO remove when floating-ui supports native ESM
  nuxt.options.build.transpile.push('floating-vue', '@floating-ui/core', '@floating-ui/dom')
}
