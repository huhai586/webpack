/**
 * Created by huhai on 17/3/31.
 */
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.js')


var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});


app.use(devMiddleware);

app.listen(3000,function(){
    console.log("服务已经启动3000")
})