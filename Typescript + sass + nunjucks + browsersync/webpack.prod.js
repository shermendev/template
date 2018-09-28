const common = require('./webpack.common.js')
const merge = require('webpack-merge')

module.exports = merge(common, {
  devtool: 'hidden-source-map',
  mode: 'production'
})