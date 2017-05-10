const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


const config = require('./webpack.base.conf');

config.devtool = false ? 'eval-source-map' : false;

config.plugins = (config.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        title: 'VisualTech DEV',
        filename: 'index.html',
        template: 'src/template/index.html',
        excludeChunks: ['admin', 'editor']
    }),
    new HtmlWebpackPlugin({
        title: 'VisualTech-Admin DEV',
        filename: 'admin/index.html',
        template: 'src/template/index.html',
        excludeChunks: ['app']
    }),
]);

module.exports = config;