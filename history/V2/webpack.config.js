//webpack.config.js
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    jsx: './src/index.js',
    html: './src/index.html'
  },
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  resolve: {
    root: [path.resolve('./src')],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx|js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(html)$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
};


