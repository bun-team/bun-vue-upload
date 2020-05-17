const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/index.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
}
