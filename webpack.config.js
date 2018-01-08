var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'js/app.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/',    // where the fonts will go
						publicPath: '../'       // override the default path
					}
				}]
			},
			{
				test: /\.pug$/,
				use: 'pug-loader'
			}
		]
	},
	devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,        
        hot: true,
        open: true
    },
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,			
			hash: true,
			template: './src/index.pug',
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			inject: true,			
			hash: true,
			template: './src/scheduler.pug',
			filename: 'scheduler.html'
		}),
		new ExtractTextPlugin({
			filename: 'css/app.css',	
			disable: true,
			allChunks: true
		}),
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
			'window.jQuery': 'jquery'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
}