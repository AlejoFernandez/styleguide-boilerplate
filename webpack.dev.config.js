'use strict';  // eslint-disable-line strict

const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg     = require('./package.json');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    landing: './landing/index.js'
  },
  output: {
    path:          path.join(__dirname, 'build'),
    filename:      'bundle.js',
    publicPath:    ''
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
    },
    {
      test: /\.styl$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader'
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title:    'Styleguide Boilerplate',
      template: './landing/index.ejs',
      inject:   'body'
    })
  ]
};
