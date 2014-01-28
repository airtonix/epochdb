;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Browser support test for the HTML5 <ruby>, <rt> and <rp> elements
// http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-ruby-element
//
// by @alrra

Modernizr.addTest('ruby', function () {

    var ruby = document.createElement('ruby'),
        rt = document.createElement('rt'),
        rp = document.createElement('rp'),
        docElement = document.documentElement,
        displayStyleProperty = 'display',
        fontSizeStyleProperty = 'fontSize'; // 'fontSize' - because it`s only used for IE6 and IE7

    ruby.appendChild(rp);
    ruby.appendChild(rt);
    docElement.appendChild(ruby);

    // browsers that support <ruby> hide the <rp> via "display:none"
    if ( getStyle(rp, displayStyleProperty) == 'none' ||                                                       // for non-IE browsers
    // but in IE browsers <rp> has "display:inline" so, the test needs other conditions:
        getStyle(ruby, displayStyleProperty) == 'ruby' && getStyle(rt, displayStyleProperty) == 'ruby-text' || // for IE8 & IE9
        getStyle(rp, fontSizeStyleProperty) == '6pt' && getStyle(rt, fontSizeStyleProperty) == '6pt' ) {       // for IE6 & IE7

        cleanUp();
        return true;

    } else {
        cleanUp();
        return false;
    }

    function getStyle( element, styleProperty ) {
        var result;

        if ( window.getComputedStyle ) {     // for non-IE browsers
            result = document.defaultView.getComputedStyle(element,null).getPropertyValue(styleProperty);
        } else if ( element.currentStyle ) { // for IE
            result = element.currentStyle[styleProperty];
        }

        return result;
    }

    function cleanUp() {
        docElement.removeChild(ruby);
        // the removed child node still exists in memory, so ...
        ruby = null;
        rt = null;
        rp = null;
    }

});

},{}]},{},[1])
;