;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// GamePad API
// https://dvcs.w3.org/hg/gamepad/raw-file/default/gamepad.html
// By Eric Bidelman

// FF has Gamepad API support only in special builds, but not in any release (even behind a flag)
// Their current implementation has no way to feature detect, only events to bind to.
//   http://www.html5rocks.com/en/tutorials/doodles/gamepad/#toc-featuredetect

// but a patch will bring them up to date with the spec when it lands (and they'll pass this test)
//   https://bugzilla.mozilla.org/show_bug.cgi?id=690935

Modernizr.addTest('gamepads', !!Modernizr.prefixed('getGamepads', navigator));

},{}]},{},[1])
;