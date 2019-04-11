import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'v-tooltip',
    file: 'dist/v-tooltip.umd.js',
    format: 'umd',
  },
})

export default config
