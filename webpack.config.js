const path = require('path');
module.exports = {
  entry: {
  	index: './client/index.js'
  },
  output: {
    path: path.resolve('dist/react'),
    filename: '[name]_bundle.js',
    publicPath: '/react'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
 }
};

