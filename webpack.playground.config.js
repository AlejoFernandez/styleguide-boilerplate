'use strict';  // eslint-disable-line strict

const path    = require('path');
const webpack = require('webpack');
const pkg     = require('./package.json');

module.exports = {
  entry: [
    './landing/playground/index'
  ],
  output: {
    path:          path.join(__dirname, 'build'),
    filename:      pkg.name + '.playground.min.js',
    publicPath:    '',
    library:       'Auth0Components',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.styl$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader'
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
