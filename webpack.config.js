var webpack = require("webpack");

module.exports = {
     entry: ['babel-polyfill', './src/app.jsx'],
     output: {
         path: './public/dist/',
         filename: 'app.js'
     },
     module: {
      loaders: [
        {
          test: /\.jsx?/,
          exclude: /(node_modules|bower_components)/,
          loader : 'babel'
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ]
 };
