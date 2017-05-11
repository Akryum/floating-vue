var merge = require('webpack-merge')
var base = require('./webpack.config.base')

module.exports = merge(base, {
  output: {
    path: './dist',
    filename: 'v-tooltip.common.js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    'popper.js': 'popper.js',
    'tooltip.js': 'tooltip.js',
  },
  target: 'node',
  devtool: '#inline-source-map',
})
