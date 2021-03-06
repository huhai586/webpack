/**
 * Created by huhai on 17/6/29.
 */
let path = require('path')

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

var HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('file location:----------------' +path.resolve(__dirname,"dist"))
module.exports = {
  entry: './main.js',
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"huhai.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new DashboardPlugin(dashboard.setData),
    new HtmlWebpackPlugin({
      title:"测试webpack-dashboard"
    })
  ]
}