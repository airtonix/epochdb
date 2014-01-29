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
    } 
  });

  // Load NPM Task
  grunt.loadNpmTasks('grunt-wintersmith');

  grunt.registerTask('dev', ['wintersmith:preview']);
  grunt.registerTask('build', ['wintersmith:production']);

};