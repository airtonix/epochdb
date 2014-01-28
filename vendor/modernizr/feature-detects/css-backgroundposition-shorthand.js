;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
    https://developer.mozilla.org/en/CSS/background-position
    http://www.w3.org/TR/css3-background/#background-position

    Example: http://jsfiddle.net/Blink/bBXvt/
*/

(function() {

    var elem = document.createElement('a'),
        eStyle = elem.style,
        val = "right 10px bottom 10px";

    Modernizr.addTest('bgpositionshorthand', function(){
        eStyle.cssText = "background-position: " + val + ";";
        return (eStyle.backgroundPosition === val);
    });

}());

},{}]},{},[1])
;