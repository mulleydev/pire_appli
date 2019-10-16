const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: __dirname + 'node_modules',
				use: {
					loader: 'babel-loader',
					options:{
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test : /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
			},
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: "file-loader"
      }
		]
	},
	plugins: [
    new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
}