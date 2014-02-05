var grunt = require('grunt');

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		paths: {
			build: "./build",
			dist: "./dist",
			src: "./"
		},

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

		jade: {
			build: {
				options: {
					data: {
						debug: false
					}
				},
				files: [{
					expand: true,
					cwd: "<%= paths.build %>/js/templates/",
					src: "**/*.jade",
					dest: "<%= paths.build %>/js/templates/",
					ext: ".html"
				}]
			}
		},

		filerev: {
			options: {
				encoding: 'utf8',
				algorithm: 'md5',
				length: 8
			},
			production: {
				files: [{
					expand: true,
					cwd: '<%= paths.build %>/js/',
					src: '**/*.js',
					dest: '<%= paths.build %>/js/'
				},{
					expand: true,
					cwd: '<%= paths.build %>/img/',
					src: '**/*.{jpg,jpeg,gif,png,webp}',
					dest: '<%= paths.build %>/img/'
				},{
					expand: true,
					cwd: '<%= paths.build %>/fonts/',
					src: '**/*.{ttf,otf,woff,svg}',
					dest: '<%= paths.build %>/fonts/'
				},{
					expand: true,
					cwd: '<%= paths.build %>/api/',
					src: '**/*.json',
					dest: '<%= paths.dist %>/api/'
				},{
					expand: true,
					cwd: '<%= paths.build %>/js/templates/',
					src: '**/*.html',
					dest: '<%= paths.build %>/js/templates/'
				},{
					expand: true,
					flatten: true,
					cwd: '<%= paths.build %>/vendor/',
					src: [
						'**/requirejs/require.js',
						'**/modernizr/modernizr.js',
						'**/lodash/**/lodash.js',
						'**/angular-route-segment/**/angular-route-segment.js',
						'**/angular-route/**/angular-route.js',
						'**/angular-animate/**/angular-animate.js',
						'**/angular/**/angular.js'
						],
					dest: '<%= paths.build %>/vendor/'
				}]
			}
		},

		requirejs: {
			compile: {
				options: {
					mainConfigFile: "<%= paths.build %>/js/main.js",
					out: "<%= paths.build %>/js/app.min.js"
				}
			}
		},

		copy: {
			build: {
				files:[{
					expand: true,
					cwd: '<%= paths.build %>',
					src: [
						'**/*.html',
						'!<%= paths.build %>/js/templates/**/*.html'
					],
					dest: '<%= paths.build %>/'
				}]
			}
		},
		useminPrepare: {
				html: '<%= paths.build %>/index.html',
				options: {
						dest: '<%= paths.build %>/test',
						flow: {
								html: {
										steps: {
												js: ['uglifyjs'],
												css: ['cssmin']
										},
										post: {}
								}
						}
				}
		},
		usemin: {
				html: ['<%= paths.dist %>/{,*/}*.html'],
				css: ['<%= paths.dist %>/css/{,*/}*.css'],
				// js: ['<%= paths.dist %>/js/{,*/}*.js'],
				options: {
						assetsDirs: ['<%= paths.dist %>','<%= paths.dist%>/img/'],
				}
		},

		clean: {
			all:{
				src:[
					"./*",
					"!./src",
					"!./{.bowerrc,.gitignore,bower.*,config.*,GruntFile.*,package.*,readme.*}",
					]
			},
			build: {
				src: [
					"<%= paths.build %>"
				]
			},
			dist: {
				src: [
					"<%= paths.dist %>"
				]
			}
		}
	});

	// Load NPM Task
	grunt.registerTask('dev', ['wintersmith:preview']);
	grunt.registerTask('build', [
		'clean:all',
		'wintersmith:production',
		'jade:build',
		'useminPrepare',
		'requirejs',
		'filerev',
		'copy',
		'clean:build',
		'usemin',
		]);

};