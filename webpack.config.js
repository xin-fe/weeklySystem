
const webpack  = require('webpack')
const path = require("path")
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');



module.exports = {
    devtool:false,
	entry:'./src/app.jsx',
	output:{
		path:path.resolve(__dirname, 'dist'),
		filename:'js/bundle.js'
	},
    //target:'node',
    //externals:[nodeExternals()],
	module:{
		loaders:[
			{
				test:/\.js|jsx$/,
				include:[path.resolve(__dirname, 'src')],
                exclude:'/node_modules/',
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
	},
    plugins:[
        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest:require('./dist/manifest.json')
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module', '_']
            },
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        }),
        new UnminifiedWebpackPlugin()
    ]
}