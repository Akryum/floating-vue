var webpack = require('webpack')
var merge = require('webpack-merge')
var base = require('./webpack.config.base')

module.exports = merge(base, {
  output: {
    path: './dist',
    filename: 'v-tooltip.browser.js',
    library: 'VTooltip',
    libraryTarget: 'umd',
  },
  externals: {
    'tether-drop': 'Drop',
    'tether-tooltip': 'Tooltip',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      mangle: false,
    }),
  ],
})
