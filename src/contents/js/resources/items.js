require(['angular', 'lodash'], function (angular, _){


var Class = function(){ 

	var klass = function(){
		this.init.apply(this, arguments); 
	};

	klass.prototype.init = function(){};

	// Shortcut to access prototype 
	klass.fn = klass.prototype;

	// Shortcut to access class 
	klass.fn.parent = klass;
}

	angular.module('epochdb.resources.items', [])
		.factory('ItemResource', ['$http', function ($http){
			var json = $http.get('./api/data.json').then(function (response){
							return response.data;
						})

			var Model = function (data) {
				if(data) _.extend(this, data);
			}

			Model.filter = function (query){
				return json.then(function(data){
					if(!query) return data;
					return _.sortBy(_.filter(data, query), 'type');
				})
			}
			Model.get = function (id){
				return json.then(function(data){
					return _.find(json, { 'id': id })
				})
			}

			Model.valueList = function (key){
				return json.then(function (data) {
					var plucked = _.pluck(_.sortBy(data, 'name'), key)
					var flattened = _.flatten(plucked)
					var compacted = _.compact(flattened)
						return _.unique(compacted);
					})
			}

			return Model;

		}])
});
