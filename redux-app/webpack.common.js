const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
  filename: "./style/[name].css",
  allChunks: true
});
module.exports = {
   entry: [
     './src/index.js',
     './style.scss'
   ],
   module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
   plugins: [
     extractSass,
     new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
   ],
   output: {
    path: 'build',
    filename: '[name].bundle.js'
  },
  externals : {
    config: JSON.stringify(require('./env.json')), //eslint-disable-line
  }
 };