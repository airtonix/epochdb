;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// binaryType is truthy if there is support.. returns "blob" in new-ish chrome.
// plus.google.com/115535723976198353696/posts/ERN6zYozENV

Modernizr.addTest('websocketsbinary', 
  !!(window.WebSocket && (new WebSocket('ws://.')).binaryType)
);

},{}]},{},[1])
;