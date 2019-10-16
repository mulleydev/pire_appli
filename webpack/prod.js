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
      {from : `${__dirname}/../src/images/`, to: `${__dirname}/../dist/images`},
      {from : `${__dirname}/../src/manifest.json`, to: `${__dirname}/../dist`},
      {from : `${__dirname}/../src/sw.js`, to: `${__dirname}/../dist`}
    ])
	]
});