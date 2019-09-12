const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css?$/,
        use: 'css-loader'
      },
      {
        test: /\.html?$/,
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [nodeExternals()],
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      excludeChunks: ['app']
    })
  ]
}