;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// By @mathias, based on http://mths.be/axh
Modernizr.addTest('details', function() {
    var doc = document,
        el = doc.createElement('details'),
        fake,
        root,
        diff;
    if (!('open' in el)) { // return early if possible; thanks @aFarkas!
        return false;
    }
    root = doc.body || (function() {
        var de = doc.documentElement;
        fake = true;
        return de.insertBefore(doc.createElement('body'), de.firstElementChild || de.firstChild);
    }());
    el.innerHTML = '<summary>a</summary>b';
    el.style.display = 'block';
    root.appendChild(el);
    diff = el.offsetHeight;
    el.open = true;
    diff = diff != el.offsetHeight;
    root.removeChild(el);
    fake && root.parentNode.removeChild(root);
    return diff;
});
},{}]},{},[1])
;