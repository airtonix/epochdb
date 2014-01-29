require(['angular'], function(angular){

	angular.module('epochdb.resources.items', [])
		.factory('ItemResource', ['$http', function ($http){
				var json = $http.get('./api/data.json').then(function (response){
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

});
