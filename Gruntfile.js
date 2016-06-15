const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');


module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  let extractSASS = new ExtractTextPlugin('[name].css');

  grunt.initConfig({
    php: {
      public: {
        options: {
          port: 3000,
          hostname: '0.0.0.0',
          keepalive: true,
          base: './'
        }
      }
    },
    watch: {
      options: {
        livereload: {
          host: 'localhost',
          port: 4000
        }
      },
      markup: {
        files: ['*.php', 'assets/*'],
        tasks: []
      }
    },
    concurrent: {
      dev: {
        options: {
          logConcurrentOutput: true
        },
        tasks: ['serve', 'webpack', 'watch']
      }
    },
    webpack: {
      dev: {
        watch: true,
        entry: {
          'app-scripts': path.join(__dirname, '/src/scripts/index.js'),
          'app-styles': path.join(__dirname, '/src/styles/index.scss')
        },
        output: {
          path: "assets/",
          filename: "[name].js"
        },
        module: {
          loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src/scripts'), loaders: ['babel']},
            {
              test: /\.scss/,
              include: path.join(__dirname, 'src/styles'),
              loader: extractSASS.extract(['css', 'postcss', 'sass'])
            }
          ]
        },
        plugins: [
          extractSASS
        ],
        postcss: function () {
          return [autoprefixer({browsers: 'last 2 versions'})];
        }
      }
    }
  });

  grunt.registerTask('serve', [
    'php'
  ]);

  grunt.registerTask('dev', [
    'build',
    'concurrent:dev'
  ]);

  grunt.registerTask('build', [
    'webpack'
  ]);


};