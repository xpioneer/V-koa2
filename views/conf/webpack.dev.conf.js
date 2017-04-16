const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


const config = require('./webpack.base.conf'),
    SOURCE_MAP = false;

config.devtool = SOURCE_MAP ? 'eval-source-map' : false;

config.plugins = (config.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        title: 'VisualTech DEV',
        filename: 'index.html',
        template: 'src/index.html'
    })
]);

module.exports = config;