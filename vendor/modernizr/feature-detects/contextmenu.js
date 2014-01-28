;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// http://www.w3.org/TR/html5/interactive-elements.html#context-menus
// Demo at http://thewebrocks.com/demos/context-menu/
Modernizr.addTest(
  'contextmenu', 
  ('contextMenu' in document.documentElement && 'HTMLMenuItemElement' in window) 
);






},{}]},{},[1])
;