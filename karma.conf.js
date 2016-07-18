// Karma configuration
// Generated on Sat Jul 16 2016 18:49:27 GMT-0300 (BRT)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'lib/angular.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'lib/*.js',
            'bower_components/angular-css/angular-css.min.js',
            'node_modules/ng-infinite-scroll/build/ng-infinite-scroll.min.js',
            'node_modules/angularjs-toaster/toaster.min.js',
            'app/*.js',
            'app/**/*.js',
            'tests/filters.test.js',
            'tests/desktop.followers-box.test.js',
            'tests/desktop.home.test.js',
            'tests/desktop.media-box.test.js',
            'tests/desktop.trends-box.test.js',
            'tests/desktop.timeline.test.js'
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
