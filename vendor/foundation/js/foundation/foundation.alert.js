;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.alert = {
    name : 'alert',

    version : '5.0.3',

    settings : {
      animation: 'fadeOut',
      speed: 300, // fade out speed
      callback: function (){}
    },

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function () {
      $(this.scope).off('.alert').on('click.fndtn.alert', '[data-alert] a.close', function (e) {
          var alertBox = $(this).closest("[data-alert]"),
              settings = alertBox.data('alert-init') || Foundation.libs.alert.settings;

        e.preventDefault();
        alertBox[settings.animation](settings.speed, function () {
          $(this).trigger('closed').remove();
          settings.callback();
        });
      });
    },

    reflow : function () {}
  };
}(jQuery, this, this.document));

},{}]},{},[1])
;