

const path = require("path")

module.exports = {
	entry:'./src/app.jsx',
	output:{
		path:path.resolve(__dirname, 'dist'),
		filename:'js/bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js|jsx$/,
				exclude:/(node_modules|bower_components)/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['es2015','react','stage-1'],
						plugins:[['import', {libraryName:'antd', style:'css'}]]
					}
				}
			},
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			}
		]
	}



}