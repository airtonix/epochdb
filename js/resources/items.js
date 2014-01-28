;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('epochdb.resources.items', [])
	.factory('ItemResource', ['$http', function ($http){
			var json = $http.get('/api/data.json').then(function (response){
					return response.data;
				});

			var Item = function(data) {
					if (data) angular.copy(data, this);
				};

			/*
				Factory methods
			 */
			
			// The query function returns an promise that resolves to
			// an array of Items, one for each in the JSON.
			Item.query = function(attr, value) {
				return json.then(function(data) {
					var operator = null;
					var attribute = "id";

					if(attr){
						bits = attr.indexOf("__")>0?attr.split("__"):[attr];
						attribute = bits[0];
						if(bits.length>1) operator = bits[1];
					}


					return data.map(function(item) {
						if(!operator && item[attribute] == value){
							
						}else if(operator == "startswith" ){

						}
						return new Item(item);
						});
					});

				};

			// The get function returns a promise that resolves to a
			// specific item, found by ID. We find it by looping
			// over all of them and checking to see if the IDs match.
			Item.get = function(id) {
				return json.then(function(data) {
						var result = null;
						angular.forEach(data, function(item) {
							if (item.id == id) result = new Item(item);
						});
						return result;
					})
				};

		// Finally, the factory itself returns the entire contructor
		return Item;

	}]);

},{}]},{},[1])
;