const {
  resolve
} = require('path')

// const {
//   ProvidePlugin
// } = require('webpack')

const WebpackNotifierPlugin = require('webpack-notifier')

const config = require('./tasks/_config')

module.exports = {
  entry: config.src.js + '/app.js',
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      test: /\.js$/
    }]
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, config.dest.js)
  },
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: false,
      title: 'Webpack'
    })
    // new ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery'
    // }),
  ],
  resolve: {
    extensions: ['.js', '.json']
  }
}
