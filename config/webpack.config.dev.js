var merge = require('webpack-merge')
var base = require('./webpack.config.base')

module.exports = merge(base, {
  output: {
    filename: 'v-tooltip.common.js',
    libraryTarget: 'commonjs2',
  },
  devtool: 'eval-source-map',
})
