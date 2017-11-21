const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
  output: {
    path: 'build',
    filename: '[name].bundle.js',
  },
      plugins: [
        new UglifyJSPlugin({
          sourceMap: true,
          compress: true
        }),
        new ExtractTextPlugin({
          filename: "./style/[name].css",
          allChunks: true
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('prod')
        })
      ]
 });