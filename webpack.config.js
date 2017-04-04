const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client?quiet=true',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src'),
      exclude: path.join(__dirname, 'node_modules'),
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }]
  },
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, 'utils/'),
      Containers: path.resolve(__dirname, 'src/containers/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Actions: path.resolve(__dirname, 'src/actions/')
    }
  }
}
