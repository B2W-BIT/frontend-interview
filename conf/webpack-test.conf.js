const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.html$/,
        loaders: [
          'html-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {},
      debug: true
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new CopyWebpackPlugin([
      {from: 'resources'}
    ])
  ],
  devtool: 'source-map'
};
