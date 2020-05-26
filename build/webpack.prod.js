const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const path = require('path')

const prodConfig = {
  mode: 'production',
  entry: path.join(__dirname, '../src/index.ts')
}

module.exports = merge(commonConfig, prodConfig)