module.exports = function(config, options){
  config.set({
    basePath:  '',
    frameworks: ['mocha', 'chai'],
    files: [{ pattern: 'spec.bundle.js', watched: false }],
    preprocessors: { 'spec.bundle.js': ['webpack'] },
    webpack: {
      resolve: {
        extensions: ["", ".js", ".jsx"]
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|source\/assets\/js\/angular|source\/assets\/js\/react)/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'stage-0']
            }
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
          { test: /\.html$/, loader: 'raw' }
        ]
      }
    },
    webpackMiddleware: {
      stats: {
        colors: true
      }
    },
    exclude: [
    ],
    reporters: ['mocha'],
    plugins: [
      "karma-chai",
      "karma-mocha",
      "karma-phantomjs-launcher",
      'karma-mocha-reporter',
      "karma-webpack"
    ],

    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: false
  });
};
