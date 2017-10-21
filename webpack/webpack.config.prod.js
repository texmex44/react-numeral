require("babel-polyfill");
var path = require('path');
var webpack = require('webpack');
var WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  modulesDirectories: ["node_modules"],
  //devtool: 'source-map',
  //Pour le module facebook "fb"
  node: {
	fs: "empty",
	tls: "empty",
	net: "empty",
  },
  entry: ['babel-polyfill', './src/index.js'],
  output: {
	path: path.join(__dirname, '../lib/'),
	filename: 'react-numeral.js'
  },
  plugins: [
	new webpack.optimize.OccurrenceOrderPlugin(),
	new WebpackMd5Hash(),
	new webpack.DefinePlugin({
	  'process.env': {
		'NODE_ENV': JSON.stringify('production'),
		'BABEL_ENV': JSON.stringify('production')
	  }
	}),
	new webpack.optimize.UglifyJsPlugin({
	  sourceMap: true,
	  mangle: true,
	  compressor: {
		warnings: false
	  }
	})
  ],
  module: {
	loaders: [{
	  test: /\.js$/,
	  loaders: ['babel-loader'],
	  exclude: /(node_modules|bower_components)/,
	  include: path.resolve(__dirname, '../')
	}]
  }
};
