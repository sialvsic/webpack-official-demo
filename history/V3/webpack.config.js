//webpack.config.js
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    jsx: './src/index.js',
    html: './src/index.html',
    vendor: ['jquery']       //Array
  },
  output: {
    path: __dirname + '/public',
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
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      {
        test: /\.(html)$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  ]
};

//将第三方依赖注入到vendor.js中
