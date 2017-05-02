const path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/index.js'],
    vendor1: [
      "react",
      "react-dom"
    ],
    vendor2: [
      "axios",
      "redux",
      "redux-saga",
      "react-redux",
      "react-router",
      "react-tap-event-plugin"
    ]
  },
  output: {
    path: path.join(__dirname, "../dist/"),
    publicPath: '/',
    filename: 'js/[name].[chunkhash:6].js',
    chunkFilename: 'js/[name].[chunkhash:10].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ["css-loader"]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "react-hot-loader"
          },
          { 
            loader: "babel-loader",
            options: {
              presets: ["es2015", "stage-0", "react"],
              plugins: ["transform-decorators-legacy", "transform-runtime"]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)(\?\S*)?$/,
        use: "file-loader"
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          // loader: 'file-loader',
          options:{
            limit: '10240',
            name: 'images/[name].[hash:3].[ext]'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      ASSETS: path.join(process.cwd(), 'src/assets'),
      MATERIALUI: path.join(process.cwd(), 'node_modules/material-ui'),
      COMPONENTS: path.join(process.cwd(), 'src/components'),
      FEATURES: path.join(process.cwd(), 'src/features'),
      UTILS: path.join(process.cwd(), 'src/utils'),
      
      ROOTREDUCER: path.join(process.cwd(), 'src/redux/reducer'),
      ROOTSTORE: path.join(process.cwd(), 'src/redux/store'),
      ROOTSAGA: path.join(process.cwd(), 'src/redux/saga'),
    }
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor2', 'vendor1', 'manifest'],
      filename: 'vendor/js/[name].[hash:4].js'
    }),
    new ExtractTextPlugin({filename: "css/[name].[contenthash:5].css", allChunks: true}),
    new webpack.ProvidePlugin({
      $http: path.resolve(process.cwd(),'src/utils/http')
    }),
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV.trim() === 'development',
      __PROD__: process.env.NODE_ENV.trim() === 'production'
    })
  ]
};
