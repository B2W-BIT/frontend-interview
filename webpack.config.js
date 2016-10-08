var webpack = require("webpack");

module.exports = {
     entry: './public/src/app.js',
     output: {
         path: './public/dist/',
         filename: 'app.js'
     },
     module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
          query: {
            presets: ['es2015']
          }
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
      })
    ]
 };
