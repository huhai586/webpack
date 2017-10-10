/**
 * Created by huhai on 17/6/29.
 */
let path = require('path')
let webpack = require('webpack')

var HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('file location:----------------' +path.resolve(__dirname,"dist"))
module.exports = {
  entry: {
    main:'./main.js',
    other:'./other.js'
  },
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"[name].bundle.js"
  },
  module: {
    rules: [
      {
      test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use:[{
          loader: 'babel-loader',
          options: {
            presets: ['env']}
        }]
    }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:"测试babel"
    }),
    new webpack.optimize.CommonsChunkPlugin({
       name: 'xxx' // 指定公共 bundle 的名称。
    })
  ]
}