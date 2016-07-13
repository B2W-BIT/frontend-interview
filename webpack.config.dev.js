var webpack = require('webpack');
var config = require('./webpack.config.base.js');

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  }),
  new webpack.optimize.OccurenceOrderPlugin()
]);

// config.devServer: {
//   contentBase: path.resolve(__dirname, PATHS.build),
//   port: 8000,
//   historyApiFallback: true
// }


module.exports = config;

