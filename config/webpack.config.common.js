var webpack = require('webpack')
var merge = require('webpack-merge')
var base = require('./webpack.config.base')

module.exports = merge(base, {
  output: {
    path: './dist',
    filename: 'v-tooltip.common.js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    'tether-drop': 'tether-drop',
    'tether-tooltip': 'tether-tooltip',
  },
  target: 'node',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      mangle: false,
    }),
  ],
})
