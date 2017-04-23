const path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/index.js'],
    vendor: [
      "react",
      "react-dom",
      "react-redux",
      "react-router",
      "redux"
    ],
    material: "material-ui"
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
            name: 'assets/images/[name].[hash:3].[ext]'
          }
        }]
        // use: 'file-loader?limit=202400000&name=assets/images/[name].[hash:6].[ext]'
        // use: 'file-loader?name=[md5:hash:base64:10].[ext]'
        // loader: 'url-loader?limit=100&name=./static/assets/[name].[hash:4].[ext]'
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
      name: ['vendor'],
      filename: 'vendor/js/[name].[hash:4].js'
    }),
    new ExtractTextPlugin({filename: "css/[name].[hash:5].css", allChunks: true}),
    new webpack.ProvidePlugin({
      $http: path.resolve(process.cwd(),'src/utils/http')
    }),
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV.trim() === 'development',
      __PROD__: process.env.NODE_ENV.trim() === 'production'
    })
  ]
};
