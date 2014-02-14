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

	angular.module('epochdb.resources.craftables', [])
		.factory('CraftableResource', ['$http', function ($http){
			var Model = function (data) {
				if(data) _.extend(this, data);
			}
			Model.objects = $http.get('./api/recipe/data.json').then(function (response){
							return response.data;
						})
			Model.objects.filter = function (query){
				return Model.objects.then(function(data){
					if(_.isString(query)){ return data; }
					else if(_.isObject(query)){ return _.query(data, query); }
					else{
						return data
					}
				})
			}
			Model.objects.get = function (id){
				return Model.objects.then(function(data){
					var result = _.find(data, function(item){ return item.id == id })
					return result
				})
			}

			Model.objects.valueList = function (key){
				return Model.objects.then(function (data) {
					var plucked = _.pluck(_.sortBy(data, 'name'), key)
					var flattened = _.flatten(plucked)
					var compacted = _.compact(flattened)
						return _.unique(compacted);
					})
			}

			Model.prototype.typeSlug = function(type){
				return this.type.toLowerCase();
			}


			Model.prototype.requires = function(type){
				if (_.has(this, "depends")){
					if(!type) return this.depends;
					return this.depends[type];
				}
			}

			Model.prototype.usedby = function(){
				if (_.has(this, "usedBy")){ return _.keys(this.usedby).length > 0;}
				return false
			}

			return Model;

		}])
});
