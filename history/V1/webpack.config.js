//webpack.config.js

module.exports = {
  entry: './src/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx|js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};