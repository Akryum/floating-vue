import base from './rollup.config.base'

const config = Object.assign({}, base, {
	output: {
		exports: 'name',
		file: 'dist/v-tooltip.umd.js',
		format: 'umd',
		exports: 'auto'
	}
})

export default config
