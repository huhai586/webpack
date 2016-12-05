module.exports={
	entry:"./main.js",
	output:{
		path:"./dist",
		filename:"bundle.js"
	},
	module:{
		loaders:[
	
			{
			test:/\.css$/,
			loader:"style-loader/useable"
		
		},
			{
			test:/\.css$/,
			loader:"css-loader"

		}

		]
	}
}