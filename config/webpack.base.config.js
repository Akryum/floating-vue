module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'v-tooltip.js',
    library: 'VTooltip',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /.js$/,
        use: 'babel-loader',
      },
    ],
  },
  externals: {
    'tether-drop': 'Drop',
    'tether-tooltip': 'Tooltip',
  },
}
