/**
 * Created by huhai on 17/6/29.
 */
let path = require('path')


var HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('file location:----------------' +path.resolve(__dirname,"dist"))
module.exports = {
  entry: {
    main:'./main.js'
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
          loader: 'babel-loader'
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
      title:"测试commonJS 与 ES6 写法"
    }),
    new webpack.DefinePlugin({
      huhai:"sdf"
    })
  ]
}