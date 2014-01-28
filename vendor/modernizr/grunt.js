;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*global module */
module.exports = function( grunt ) {
    'use strict';

    grunt.initConfig({
        meta: {
          version: '2.7.1',
          banner: '/*!\n' +
            ' * Modernizr v<%= meta.version %>\n' +
            ' * www.modernizr.com\n *\n' +
            ' * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton\n' +
            ' * Available under the BSD and MIT licenses: www.modernizr.com/license/\n */'
        },
        qunit: {
            files: ['test/index.html']
        },
        lint: {
            files: [
                'grunt.js',
                'modernizr.js',
                'feature-detects/*.js'
            ]
        },
        min: {
            dist: {
                src: [
                    '<banner:meta.banner>',
                    'modernizr.js'
                ],
                dest: 'modernizr.min.js'
            }
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'lint'
        },
        jshint: {
            options: {
                boss: true,
                browser: true,
                curly: false,
                devel: true,
                eqeqeq: false,
                eqnull: true,
                expr: true,
                evil: true,
                immed: false,
                laxcomma: true,
                newcap: false,
                noarg: true,
                smarttabs: true,
                sub: true,
                undef: true
            },
            globals: {
                Modernizr: true,
                DocumentTouch: true,
                TEST: true,
                SVGFEColorMatrixElement : true,
                Blob: true
            }
        }
    });

    grunt.registerTask('default', 'min');

    // Travis CI task.
    grunt.registerTask('travis', 'qunit');
};

},{}]},{},[1])
;