import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'v-tooltip',
    file: 'dist/v-tooltip.esm.js',
    format: 'es',
    sourcemap: true,
  },
  external: [
    ...base.external,
    /^@popperjs/,
    'vue-resize',
  ],
})

export default config
