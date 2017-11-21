const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

 module.exports = merge(common, {
   devtool: 'eval-source-map',
   devServer: {
    historyApiFallback: true,
    contentBase: './',
    disableHostCheck: true
   }
 });