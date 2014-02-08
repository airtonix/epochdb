module.exports = (grunt) ->

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)
  path = require("path")

  @paths =
    build: "build"
    dist: "dist"
    src: "./"

  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'
    bower: grunt.file.readJSON 'bower.json'

    paths: @paths

    connect:
      options:
        port: 8000
        keepalive: true
        hostname: '*'

      dist:
        options:
          base: '.'

    wintersmith:
      production:
        options:
          action: "build"
          config: './config.production.json'

      test:
        options:
          action: "build"
          config: './config.test.json'

      preview:
        options:
          action: "preview"
          config: './config.development.json'


    copy:
      build:
        files: [
          expand: true,
          cwd: '<%= paths.build %>'
          dest: '<%= paths.dist %>/'
          src: [
            'index.html',
            'js/templates/**/*.html',
            'api/**/*.json',
            'img/**/*.{jpg,jpeg,gif,png,webp}',
            'fonts/**/*.{ttf,eot,otf,woff,svg}',
            'css/**/*.css',
            '!**/vendor/**/*.*'
          ]
        ]

    requirejs:
      compile:
        options:
          wrap: true
          almond: true
          optimize: "none"
          mainConfigFile: "<%= paths.build %>/js/main.js"
          name: 'main'
          out: "<%= paths.dist %>/js/application.js"
          replaceRequireScript: [
            files: ['<%= paths.dist %>/index.html']
            module: 'js/main',
            modulePath: './js/application'
          ]

    filerev:
      options:
        encoding: 'utf8',
        algorithm: 'md5',
        length: 8
        copy: false

      production:
        files: [
          expand: true
          cwd: '<%= paths.dist %>'
          dest: '<%= paths.dist %>'
          src: [
            'js/application.js'
            'img/**/*.{jpg,jpeg,gif,png,webp}',
            'css/**/*.css',
            'fonts/**/*.{ttf,eot,otf,woff,svg}',
            'api/**/*.json',
            'js/templates/**/*.html'
          ]
        ]

    userev:
      options:
        hash: /([a-f0-9]{8})\.[a-z]+$/

      tpl:
        src: '<%= paths.dist %>/js/*.js',
        options:
          patterns:
            'partials': /template\([\"\']([\w\d\-\/]*\.html)[\"\']\)/
            'json': /api\/([\w\d\-\/]*\.json)/

      styles:
        src: '<%= paths.dist %>/css/*.css',
        options:
          patterns:
            'Img': /(img\/[\w\d-]*\.png|jpg|jpeg|gif)/
            'Font': /(fonts\/[\w\d-]*\.(eot|ttf|otf|woff|svg))/

      index:
        src: '<%= paths.dist %>/index.html'
        options:
          patterns:
            'Css': /(css\/[\w\d-]*\.css)/
            'Js': /(js\/[\w\d-]*\.js)/


    clean:
      all:
        src: [
          "./*",
          "!./{src,node_modules}",
          "!./{package.json,.bowerrc,bower.json}",
          "!./config.*",
          "!./Gruntfile.coffee",
          "!./readme.md"
        ]

      build:
        src: ["<%= paths.build %>"]

      dist:
        src: ["<%= paths.dist %>"]

    bump:
      options:
        files: ['package.json', 'bower.json'],
        updateConfigs: ['pkg', 'bower'],
        commit: true,
        createTag: true,
        push: true
        pushTo: 'develop'

    "gh-pages":
      options:
        base: 'dist'
        message: "Release <%= pkg.version %>"
        tag: "<%= pkg.version %>"
      src: ['**']

  grunt.registerTask "default", ["wintersmith:preview"]

  grunt.registerTask "test", [
    'clean:all'
    'wintersmith:test'
    'compile'
    'bump:build'
    'connect:dist'
  ]

  grunt.registerTask "compile", [
    'copy'
    'requirejs'
    'filerev'
    'userev'
  ]

  grunt.registerTask 'build', [
    'clean:all'
    'wintersmith:production'
    'compile'
    'clean:build'
  ]

  grunt.registerTask "deploy", [
    'build',
    'bump:minor'
    'gh-pages',
    'clean'
  ]