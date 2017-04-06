var path=require("path");
var webpack=require("webpack");
var htmlWebpackPlugin=require("html-webpack-plugin");

module.exports={
	entry:['webpack-hot-middleware/client',"./main.js"],
	output:{
		path:path.resolve(__dirname, './dist'),
		filename:"bundle.js",
		publicPath:"/"
	},
	module:{
		rules:[
	
			{
			test:/\.css$/,
			loader:"style-loader"
		
		},
			{
			test:/\.css$/,
			loader:"css-loader",
			query:{
				modules:true,
				// localIdentName:"oooo[name]---[hash:5]",
				minimize:false,
				camelCase:true
			}

		},{
			test:/\.psd/,
			loader:"file"
			}

		]
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new htmlWebpackPlugin({
            filename:"index.html",
            template:"./index.html",
            inject:true
        })
    ]
}