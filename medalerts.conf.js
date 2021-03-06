// Karma configuration
// Generated on Fri Jun 26 2015 14:05:51 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	  'target/web/public/main/lib/jquery/*.min.js',
	  'target/web/public/main/lib/lodash/*.min.js',
	  'target/web/public/main/lib/angularjs/angular.js',
	  'target/web/public/main/lib/angularjs/angular-route.js',
	  'target/web/public/main/lib/angularjs/angular-resource.js',
	  'target/web/public/main/lib/angularjs/angular-cookies.js',
	  'target/web/public/main/lib/angularjs/angular-sanitize.js',
	  'target/web/public/main/lib/angularjs/angular-mocks.js',
	  'target/web/public/main/lib/bootstrap/*.min.js',
	  'target/web/public/main/lib/angular-ui-bootstrap/*.min.js',
	  'target/web/public/main/lib/angular-ui-select/*.min.js',

      'public/javascripts/app.js',
      'public/javascripts/app.tpl.js',
      'app/assets/test/*.spec.js'
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
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
