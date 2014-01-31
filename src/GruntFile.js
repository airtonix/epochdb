module.exports = function(grunt) {

  grunt.initConfig({

    wintersmith: {
      production: {
        options: {
          action: "build",
          config: './config.production.json'
        }
      },
      preview: {
        options: {
          action: "preview",
          config: './config.development.json'
        }
      }
    },
    clean: {
      dev:{
        src:[
          "../*",
          "!../src",
          ]
      }
    }
  });

  // Load NPM Task
  grunt.loadNpmTasks('grunt-wintersmith');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('dev', ['wintersmith:preview']);
  grunt.registerTask('build', ['wintersmith:production']);

};