;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('services.breadcrumbs', [])
	.factory('breadcrumbs', [
		'$rootScope',
		'$location',
		function($rootScope, $location){

			var breadcrumbs = [];
			var breadcrumbsService = {};

			//we want to update breadcrumbs only when a route is actually changed
			//as $location.path() will get updated imediatelly (even if route change fails!)
			$rootScope.$on('$routeChangeSuccess', function(event, current){

				var pathElements = $location.path().split('/'), result = [], i;
				var breadcrumbPath = function (index) {
					return '/' + (pathElements.slice(0, index + 1)).join('/');
				};

				pathElements.shift();
				for (i=0; i<pathElements.length; i++) {
					result.push({name: pathElements[i], path: breadcrumbPath(i)});
				}

				breadcrumbs = result;
			});

			breadcrumbsService.getAll = function() {
				return breadcrumbs;
			};

			breadcrumbsService.getFirst = function() {
				return breadcrumbs[0] || {};
			};

			return breadcrumbsService;
		}]);
},{}]},{},[1])
;