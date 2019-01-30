const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'rete-react-render-plugin.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: "commonjs2",
    libraryExport: "default"
  },
  module: {
  	rules: [
  	  {
  	  	test: /\.(js|jsx)$/,
  	  	use: {
  	  	  loader: 'babel-loader',
  	  	  options: {
  	  	  	presets: [
              "@babel/preset-env",
              "@babel/preset-react"
  	  	  	]
  	  	  }
  	  	},
  	  	exclude: /node_modules/
  	  }
  	]
  },
  mode: 'development'
};