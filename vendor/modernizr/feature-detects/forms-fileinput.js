;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


// Detects whether input type="file" is available on the platform
// E.g. iOS < 6 and some android version don't support this

//  It's useful if you want to hide the upload feature of your app on devices that
//  don't support it (iphone, ipad, etc).

Modernizr.addTest('fileinput', function() {
    var elem = document.createElement('input');
    elem.type = 'file';
    return !elem.disabled;
});

},{}]},{},[1])
;