'use strict';  // eslint-disable-line strict

const path    = require('path');
const webpack = require('webpack');
const pkg     = require('./package.json');
const poststylus = require('poststylus');

const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: [
    './src/components/index'
  ],
  output: {
    path:          path.join(__dirname, 'build'),
    filename:      pkg.name + '-' + pkg.version + '.standalone.min.js',
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
      loader: 'style-loader!' +
        `css-loader?${JSON.stringify({
          sourceMap: DEBUG,
          modules: true,
          localIdentName: DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
          minimize: !DEBUG,
          importLoaders: true
        })}` +
        '!stylus-loader'
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  stylus: {
    use: [
      poststylus(['autoprefixer'])
    ]
  }
};
