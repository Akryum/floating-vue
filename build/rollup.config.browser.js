import base from './rollup.config.base'
import { uglify } from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

const config = Object.assign({}, base, {
	output: {
		exports: 'named',
		file: 'dist/v-tooltip.min.js',
		format: 'iife',
		name: 'VTooltip'
	}
})

config.plugins.push(uglify({}, minify))

export default config
