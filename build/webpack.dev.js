const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const devConfig = {
  mode: 'development',
  entry: path.join(__dirname, '../example/App.js'),
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../example/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 3000
  }
}

module.exports = merge(commonConfig, devConfig)
