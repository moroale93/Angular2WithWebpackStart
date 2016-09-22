var path = require('path');
var webpack = require("webpack");

var debug = global.process.argv.reduce(function(result, arg) {
  return arg.indexOf('debug') !== -1 || result;
}, false);

var env = process.env.ENVIRONMENT || "DEV";

// enable coverage only if we're not debugging
var hasCoverage = !debug;

var reporters = hasCoverage ? ['progress', 'coverage', 'junit'] : ['progress', 'junit'];

var preLoaders = hasCoverage ? [

  // Process test code with Babel
  {
    test: /_spec\.js$/,
    loader: 'babel',
    include: path.resolve('./src')
  },

  // Process all non-test code with Isparta
  {
    test: /\.js$/,
    loader: 'isparta',
    include: path.resolve('./src'),
    exclude: [/libs.*/, /_spec\.js$/]
  }
] : [{
  test: /\.js$/,
  loader: 'babel',
  include: './src'
}];
var loaders = [{
    test: /\.css$/,
    loader: 'css?sourceMap'
  }, {
    test: /\.png$/,
    loader: 'null'
  }, {
    test: /\.jpg$/,
    loader: 'null'
  },

  // Loader for JSON, may be used in some tests
  {
    test: /\.json$/,
    loader: 'json'
  },
  {
    test: /\.xml$/,
    loader: "raw"
  },

  // Need some real loaders for HTML, because angular directives are coupled with templates
 {
    test: /\.html$/,
    loader: 'ng-cache?prefix=[dir]/[dir]'
  }
];


module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'spec.js'
    ],
    webpack: {
      devtool: 'eval',
      module: {
        loaders: loaders,
        preLoaders: preLoaders
      },
      cache: true,
      plugins: [
        new webpack.DefinePlugin({
          __ENV__: JSON.stringify(env)
        })
      ]
    },
    webpackMiddleware: {
      stats: {
        chunkModules: false,
        colors: true
      }
    },
    preprocessors: {
      'spec.js': ['webpack']
    },
    reporters: reporters,
    coverageReporter: {
      dir: 'coverage/',
      subdir: '.',
      reporters: [{
        type: 'cobertura',
        file: 'cobertura.xml'
      }, {
        type: 'text',
        file: 'text.txt'
      }, {
        type: 'text-summary',
        file: 'text-summary.txt'
      }, {
        type: 'html'
      }]
    },
    junitReporter: {
      outputDir: 'test_results',
      outputFile: 'test-results.xml',
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
