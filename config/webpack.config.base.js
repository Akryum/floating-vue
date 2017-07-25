var path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  entry: './src/index.js',
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
}
