'use strict';

const webpack = require('webpack');
const path = require('path');

const babelConfig = {
  presets: [
    ['env', {
      targets: {
        browsers: ['last 2 versions']
      },
      modules: false,
      debug: true
    }]
  ],
  plugins: ['ramda']
};

const config = {
  context: path.join(__dirname, 'lib'),
  entry: {
    'vuex-datatable': './vuex-datatable.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'vuex-datatable.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: babelConfig
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: `babel-loader?${JSON.stringify(babelConfig)}`
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true // enable tree-shaking
    })
  ]
};

module.exports = config;