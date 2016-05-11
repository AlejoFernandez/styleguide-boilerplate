'use strict';  // eslint-disable-line strict

const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './landing/index'
  ],
  output: {
    path:          path.join(__dirname, 'build'),
    filename:      'bundle.js',
    publicPath:    ''
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src'),
      query: {
        presets: ['es2015']
      }
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
