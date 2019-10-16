const merge = require('webpack-merge');
const path = require('path');
const base = require('./development');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(base, {
	mode: "production",
	output: {
		filename: "bundle.min.js"
	},
	devtool:false,
	performance: {
		maxEntrypointSize: 900000,
		maxAssetSize: 900000 
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					output: {
						comments: false
					}
				}
			})
		]
	},
	plugins:[
		new CopyWebpackPlugin([
      {from : `${__dirname}/../pwa-images/`, to: `${__dirname}/../dist/pwa-images`},
      {from : `${__dirname}/../manifest.json`, to: `${__dirname}/../dist`},
      {from : `${__dirname}/../sw.js`, to: `${__dirname}/../dist`}
    ])
	]
});