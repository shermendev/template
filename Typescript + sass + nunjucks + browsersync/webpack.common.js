const {
  resolve
} = require('path')

// const {
//   ProvidePlugin
// } = require('webpack')

const WebpackNotifierPlugin = require('webpack-notifier')

const config = require('./tasks/_config')

module.exports = {
  entry: config.src.ts,
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.(tsx?)|(js)|(d.ts)$/,
      use: 'ts-loader',
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
    }),
    // new ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery'
    // }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json']
  },
}
