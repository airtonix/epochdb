;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// https://github.com/Modernizr/Modernizr/issues/615
// documentMode is needed for false positives in oldIE, please see issue above
Modernizr.addTest('cssfilters', function() {
    var el = document.createElement('div');
    el.style.cssText = Modernizr._prefixes.join('filter' + ':blur(2px); ');
    return !!el.style.length && ((document.documentMode === undefined || document.documentMode > 9));
});
},{}]},{},[1])
;