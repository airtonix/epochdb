module.exports = (grunt) ->

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)
  path = require("path")

  @paths =
    build: "build"
    dist: "dist"
    src: "./"

  @releaseBranchConfig =
    releaseBranch: 'gh-pages'
    remoteRepository: 'origin'
    distDir: 'dist'
    commitMessage: 'RELEASE <%= pkg.version %>'
    commit: true
    push: true
    blacklist: ['.git']

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
          base: '<%= paths.dist %>'

      build:
        options:
          base: '<%= paths.build %>'

    wintersmith:
      production:
        options:
          action: "build"
          config: './config.production.json'

      preview:
        options:
          action: "preview"
          config: './config.development.json'

    jade:
      build:
        options:
          data:
            debug: false

        files: [
          expand: true
          cwd: "<%= paths.build %>/js/templates/"
          src: "**/*.jade"
          dest: "<%= paths.build %>/js/templates/"
          ext: ".html"
        ]

    filerev:
      options:
        encoding: 'utf8',
        algorithm: 'md5',
        length: 8

      production:
        files: [
          expand: true
          cwd: '<%= paths.build %>'
          src: [
            'js/application.js',
            'img/**/*.{jpg,jpeg,gif,png,webp}',
            'css/**/*.css',
            'fonts/**/*.{ttf,otf,woff,svg}',
            'api/**/*.json',
            'js/templates/**/*.html'
          ]
          dest: '<%= paths.dist %>'
        ]

    userev:
      options:
        hash: /(\.[a-f0-9]{8})\.[a-z]+$/

      assets:
        src: [
          '<%= paths.build %>js/application.js',
          '<%= paths.build %>js/templates/**/*.html'
          # '<%= paths.build %>img/**/*.{jpg,jpeg,gif,png,webp}',
          '<%= paths.build %>css/**/*.css',
          # '<%= paths.build %>fonts/**/*.{ttf,otf,woff,svg}',
          '<%= paths.build %>api/**/*.json',
          '!<%= paths.build %>**/*.map.css',
          '!<%= paths.build %>**/*.map.js'
        ]
        # options:
        #   patterns:
        #     'Linking versioned source maps': /sourceMappingURL=([a-z0-9.]*\.map)/

      index:
        src: '<%= paths.build %>/index.html'
        options:
          patterns:
            'Css': /(css\/[\w\d-]*\.css)/

    requirejs:
      compile:
        options:
          wrap: true
          almond: true
          optimize: "none"
          mainConfigFile: "<%= paths.build %>/js/main.js"
          include: 'main.js',
          name: '../vendor/almond/almond'
          out: "<%= paths.build %>/js/application.js"
          replaceRequireScript: [
            files: ['<%= paths.build %>/index.html']
            module: 'epochdb/js/main',
            modulePath: '<%= paths.build %>/js/application'
          ]

    copy:
      build:
        files: [
          expand: true,
          cwd: '<%= paths.build %>'
          dest: '<%= paths.dist %>/'
          src: ['index.html','**/api/**/*.json','!**/vendor/**/*.html']
        ]

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

    releaseBranchPre: @releaseBranchConfig
    releaseBranch: @releaseBranchConfig

    bump:
      options:
        files: ['package.json', 'bower.json'],
        updateConfigs: ['pkg', 'bower'],
        commit: false,
        createTag: false,
        push: false


    githubPages:
      production:
        options:
          commitMessage: 'push'
        src: '_site'

  grunt.registerTask "default", ["wintersmith:preview"]

  grunt.registerTask "test", [
    "build",
    "connect:dist"
  ]

  grunt.registerTask 'build', [
    'clean:all',
    'wintersmith:production',
    'copy',
    'requirejs',
    'filerev',
    'userev:assets',
    'userev:index'
  ]

  grunt.registerTask "deploy", [
    "build",
    "clean",
  ]