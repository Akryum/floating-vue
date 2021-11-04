import { defineNuxtModule, addPluginTemplate } from '@nuxt/kit'
// import { name, version } from './package.json'

export default defineNuxtModule({
  name: 'v-tooltip',
  setup (_options, nuxt) {
    nuxt.options.vue.compilerOptions.directiveTransforms = nuxt.options.vue.compilerOptions.directiveTransforms || {}
    nuxt.options.vue.compilerOptions.directiveTransforms.tooltip = () => ({
      props: [],
      needRuntime: true,
    })

    nuxt.options.css.push('v-tooltip/dist/v-tooltip.css')

    addPluginTemplate({
      filename: 'v-tooltip.mjs',
      getContents: () => `
        import { defineNuxtPlugin } from '#app'
        import VTooltip from 'v-tooltip'
        
        export default defineNuxtPlugin((nuxtApp) => {
          nuxtApp.vueApp.use(VTooltip)
        })
        `,
    })

    // @TODO remove when popper supports native ESM
    nuxt.options.build.transpile.push('v-tooltip', '@popperjs/core')
  },
})
