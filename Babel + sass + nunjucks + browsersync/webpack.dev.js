const common = require('./webpack.common.js')
const merge = require('webpack-merge')

module.exports = merge(common, {
  devtool: 'eval',
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  }
})
