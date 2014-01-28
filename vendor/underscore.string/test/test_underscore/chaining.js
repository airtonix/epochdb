;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function() {

  module("Chaining");

  test("map/flatten/reduce", function() {
    var lyrics = [
      "I'm a lumberjack and I'm okay",
      "I sleep all night and I work all day",
      "He's a lumberjack and he's okay",
      "He sleeps all night and he works all day"
    ];
    var counts = _(lyrics).chain()
      .map(function(line) { return line.split(''); })
      .flatten()
      .reduce(function(hash, l) {
        hash[l] = hash[l] || 0;
        hash[l]++;
        return hash;
    }, {}).value();
    ok(counts['a'] == 16 && counts['e'] == 10, 'counted all the letters in the song');
  });

  test("select/reject/sortBy", function() {
    var numbers = [1,2,3,4,5,6,7,8,9,10];
    numbers = _(numbers).chain().select(function(n) {
      return n % 2 == 0;
    }).reject(function(n) {
      return n % 4 == 0;
    }).sortBy(function(n) {
      return -n;
    }).value();
    equal(numbers.join(', '), "10, 6, 2", "filtered and reversed the numbers");
  });

  test("select/reject/sortBy in functional style", function() {
    var numbers = [1,2,3,4,5,6,7,8,9,10];
    numbers = _.chain(numbers).select(function(n) {
      return n % 2 == 0;
    }).reject(function(n) {
      return n % 4 == 0;
    }).sortBy(function(n) {
      return -n;
    }).value();
    equal(numbers.join(', '), "10, 6, 2", "filtered and reversed the numbers");
  });

  test("reverse/concat/unshift/pop/map", function() {
    var numbers = [1,2,3,4,5];
    numbers = _(numbers).chain()
      .reverse()
      .concat([5, 5, 5])
      .unshift(17)
      .pop()
      .map(function(n){ return n * 2; })
      .value();
    equal(numbers.join(', '), "34, 10, 8, 6, 4, 2, 10, 10", 'can chain together array functions.');
  });

});

},{}]},{},[1])
;