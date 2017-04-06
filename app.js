/**
 * Created by huhai on 17/4/1.
 */
var express = require('express')
var webpack = require('webpack')
var WebpackDevMiddleware = require('webpack-dev-middleware')
var WebpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.dev.js')
var compiler = webpack(config)

app = express()

// app.use(express.static('./dist'));

app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
}));
app.use(WebpackHotMiddleware(compiler));

var router = express.Router();
router.get('/', function (req, res, next) {
    res.sendFile('index.html',{root:config.output.publicPath});
})
app.use(router)

app.listen(8080, function () {
    console.log('Listening on 8080')
})