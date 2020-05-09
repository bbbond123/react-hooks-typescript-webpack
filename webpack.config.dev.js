process.env.NODE_ENV = 'development';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.config.base');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = Object.assign({}, webpackBaseConfig, {
  mode: 'development',
  cache: true,
  devtool: 'source-map',
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, './tsconfig.json')
    }),
    new LodashModuleReplacementPlugin({
      paths: true,
      currying: true,
      flattening: true,
      placeholders: true
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || ''),
      BUILD_NUMBER: JSON.stringify(process.env.BUILD_NUMBER || '#')
    }),
    new HtmlWebpackPlugin({
      title: '',
      template: path.resolve(__dirname, `public/index.ejs`),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ]
});
