/**
 * Created by huhai on 17/6/29.
 */
let path = require('path')
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

console.log('file location:' +path.resolve(__dirname,"dist"))
module.exports = {
  entry: './main.js',
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"huhai.js",
    publicPath:"/dist/app"
  },
  devtool : 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new DashboardPlugin(dashboard.setData)
  ]
}