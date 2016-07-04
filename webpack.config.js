var debug = process.env.NODE_ENV !== 'production';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    devtool: debug ? 'inline-sourcemap' : null,
    // entry: './js/client.js',
    entry: {
      web:[
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'src/js/client.js'),
      ],
      mobile:[
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'src/js/mobile-client.js'),
      ]
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['react','es2015', 'stage-0'],
            plugins: ['react-html-attrs','transform-class-properties','transform-decorators-legacy']
          }
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css!sass')
        },
        {
          test: /\.ttf$/,
          loader: require.resolve('file-loader') + '?name=[path][name].[ext]'
          // loader: 'file?name=src/fonts/[name].[ext]'
          // loader: 'file'
        }
      ]
    },
    // sassLoader: {
    //   includePaths: [path.resolve(__dirname, "./styles")]
    // },
    // output: {
    //     path: __dirname + '/src/',
    //     filename: 'client.min.js'
    // },
    output: {
      path: path.join(__dirname, '/src/'),
      filename: '[name].js',
      publicPath: '/'
    },
    plugins: debug ? [
      new HtmlWebpackPlugin({
        template: 'index.tpl.html',
        inject: false,
        filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        template: 'mobile.tpl.html',
        inject: false,
        filename: 'mobile.html'
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      new ExtractTextPlugin('css/[name].css', {
        allChunks: true
      }),
    ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ],
};
