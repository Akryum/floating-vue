import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'v-tooltip',
    file: 'dist/v-tooltip.esm.js',
    format: 'es',
  },
  external: [
    ...base.external,
    'lodash/merge',
    'lodash/isEqual',
    'popper.js',
    'vue-resize',
    /@babel\/runtime/,
  ],
})

export default config
