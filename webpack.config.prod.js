var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [],
  module: {
    loaders: [
        {
          test: /\.js$/,
          loaders: ['babel'],
          include: path.join(__dirname, 'src')
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        },
        {
            test: /\.scss$/,
            loader: 'style!css!sass'
        },
        {
        test: /\.css$/,
            loaders: [
                'style',
                'css?importLoaders=1',
                'font?format[]=truetype&format[]=woff&format[]=embedded-opentype'
            ]
        }
    ]
  }
};
