var path = require('path');

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

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
        files: ['*.php'],
        tasks: []
      },
      styles: {
        files: ['src/styles/**/*.scss'],
        tasks: ['sass', 'postcss']
      }
    },
    sass: {
      styles: {
        options: {
          update: true,
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: './src/styles/',
          src: ['index.scss'],
          dest: './css/',
          ext: '.css'
        }]
      }
    },
    concurrent: {
      dev: {
        options: {
          logConcurrentOutput: true
        },
        tasks: ['serve', 'watch']
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 5 versions'})
        ]
      },
      dist: {
        src: 'css/*.css'
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
    'sass',
    'postcss'
  ]);


};