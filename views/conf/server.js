
const config = {
    host: 'http://127.0.0.1:',
    port: 9009
}
const url = config.host+config.port;

const webpackConfig = require("./webpack.dev.conf");
    webpackConfig.entry.app.unshift("webpack-dev-server/client?"+url, "webpack/hot/only-dev-server");
    webpackConfig.entry.admin.unshift("webpack-dev-server/client?"+url, "webpack/hot/only-dev-server");
    var path = require('path');

const Webpack = require("webpack");
const WebpackDevServer = require('webpack-dev-server');

var compiler = Webpack(webpackConfig)
var server = new WebpackDevServer(compiler, {
    hot: true,
    stats: {
        colors: true
    },
    historyApiFallback: true,
    compress: true
    // contentBase:path.join(__dirname, 'dist'),
    // publicPath: '/static'
});
server.listen(config.port, err=>{
    if(err){
        console.log(err);
        return ;
    }
    console.log(url)
});
