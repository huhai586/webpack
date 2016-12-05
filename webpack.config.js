module.exports={
	entry:"./main.js",
	output:{
		path:"./dist",
		filename:"bundle.js",
		publicPath:"./dist/"
	},
	module:{
		loaders:[
	
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
	}
}