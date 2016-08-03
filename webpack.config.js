var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './client/src/index.js'
  ],

  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'app.js',
    publicPath: '/client/static/'
  },

  devtool: 'source-map',

  eslint: {
    configFile: '.eslintrc'
  },

  module: {

    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],

    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|woff)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  quiet: true,
  noInfo: true
};
