var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var dir_js = path.resolve(__dirname, 'js');
var dir_sass = path.resolve(__dirname, 'sass');
var dir_img = path.resolve(__dirname, 'img');
var dir_html = path.resolve(__dirname, 'html');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.resolve(dir_js, 'app.js'),
  output: {
    path: dir_build,
    filename: '[hash:6].app.js'
  },
  devServer: {
    contentBase: dir_build
  },
  module: {
    loaders: [
      {
        loader: 'react-hot',
        test: dir_js
      },
      {
        loader: 'babel-loader',
        test: dir_js
      },
      {
        loader: 'eslint-loader',
        test: dir_js
      },
      {
        loader: ExtractTextPlugin.extract('css!sass'),
        test: dir_sass
      },
      {
        loader: 'file?name=img/[hash:6].[name].[ext]',
        test: dir_img
      },
      {
        loader: 'file?name=fonts/[hash:6].[name].[ext]',
        test: /\.eot$/
      },
      {
        loader: 'file?name=fonts/[hash:6].[name].[ext]',
        test: /\.woff$/
      },
      {
        loader: 'file?name=fonts/[hash:6].[name].[ext]',
        test: /\.woff2$/
      },
      {
        loader: 'file?name=fonts/[hash:6].[name].[ext]',
        test: /\.ttf$/
      },
      {
        loader: 'file?name=fonts/[hash:6].[name].[ext]',
        test: /\.svg$/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules')
    ]
  },
  eslint: {
    failOnWarning: true,
    configFile: '.eslintrc'
  },
  plugins: [
    new Clean([dir_build]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Todos',
      template: path.resolve(dir_html, 'index.html'),
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin('[chunkhash:6].app.css', {
      allChunks: true
    })
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
