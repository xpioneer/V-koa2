const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


const config = require('./webpack.base.conf'),
    SOURCE_MAP = false;

config.devtool = SOURCE_MAP ? 'eval-source-map' : false;

config.plugins = (config.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
        title: '前端汇聚网',
        filename: 'index.html',
        template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      "process.env": { 
        NODE_ENV: JSON.stringify("production") 
      }
    })
]);

module.exports = config;