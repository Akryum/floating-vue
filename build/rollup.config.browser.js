import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VTooltip',
    file: 'dist/v-tooltip.min.js',
    format: 'iife',
  },
  external: [
    'vue',
  ],
})

config.plugins.push(terser())

export default config
