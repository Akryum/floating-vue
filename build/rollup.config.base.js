import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import cjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import postcss from 'rollup-plugin-postcss'
import analyze from 'rollup-plugin-analyzer'

const config = require('../package.json')

export default {
  input: 'src/index.js',
  plugins: [
    resolve({
      mainFields: ['module', 'jsnext:main', 'main', 'browser'],
    }),
    vue({
      css: true,
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      extensions: ['.js', '.vue'],
    }),
    cjs(),
    replace({
      VERSION: JSON.stringify(config.version),
      preventAssignment: false,
    }),
    postcss(),
    analyze(),
  ],
  watch: {
    include: 'src/**',
  },
  external: [],
}
