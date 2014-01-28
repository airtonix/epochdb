;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('')
  .factory('JsonDB', function($http) {
    // Create an internal promise that resolves to the data inside project.json;
    // we'll use this promise in our own API to get the data we need.
    var json = $http.get('project.json').then(function(response) {
      return response.data;
    });

    // A basic JavaScript constructor to create new projects;
    // passed in data gets copied directly to the object.
    // (This is not the best design, but works for this demo.)
    var Project = function(data) {
      if (data) angular.copy(data, this);
    };

    // The query function returns an promise that resolves to
    // an array of Projects, one for each in the JSON.
    Project.query = function() {
      return json.then(function(data) {
        return data.map(function(project) {
          return new Project(project);
        });
      })
    };

    // The get function returns a promise that resolves to a
    // specific project, found by ID. We find it by looping
    // over all of them and checking to see if the IDs match.
    Project.get = function(id) {
      return json.then(function(data) {
        var result = null;
        angular.forEach(data, function(project) {
          if (project.id == id) result = new Project(project);
        });
        return result;
      })
    };

    // Finally, the factory itself returns the entire
    // Project constructor (which has `query` and `get` attached).
    return Project;
  });
},{}]},{},[1])
;