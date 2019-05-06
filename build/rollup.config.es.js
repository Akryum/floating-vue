import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'v-tooltip',
    file: 'dist/v-tooltip.esm.js',
    format: 'es',
  },
  external: [
    'assign-deep',
    'popper.js',
    'vue-resize',
    'vue',
  ],
})

export default config
