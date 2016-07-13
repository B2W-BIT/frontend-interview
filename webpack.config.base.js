var path = require('path');
var webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV;

var env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};

var PATHS = {
  app: path.resolve(__dirname, './source/assets/js'),
  build: path.resolve(__dirname, './public/js/')
};

module.exports = {
  env : NODE_ENV,
  entry: {
    vanilla: path.resolve(PATHS.app, 'vanilla/main.js'),
    angular: path.resolve(PATHS.app, 'angular/app.js'),
    react: path.resolve(PATHS.app, 'react/main.jsx')
  },
  output: {
    path: PATHS.build,
    filename: '[name]/[name].min.js',
    publicPath: '/'
  },
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.json', '.webpack.js', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|source\/assets\/js\/angular|source\/assets\/js\/react)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        },
        include: PATHS.app
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|source\/assets\/js\/angular|source\/assets\/js\/vanilla)/,
        loader: 'babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|source\/assets\/js\/react|source\/assets\/js\/vanilla)/,
        loader: 'ng-annotate!babel-loader?presets[]=es2015,presets[]=stage-0'
      },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.json$/, loaders: ['json-loader'] }
    ],
    noParse: /node_modules\/json-schema\/lib\/validate\.js/
  },
  plugins: [
    new webpack.DefinePlugin({
    __DEV__: env.development,
    __STAGING__: env.staging,
    __PRODUCTION__: env.production,
    __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
  })],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  devtool: 'eval'
};
