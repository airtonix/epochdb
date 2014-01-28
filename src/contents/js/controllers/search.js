angular.module('epochdb.controllers.search', [
		'epochdb.resources.items'
	])

	.controller('SearchController', [
		'$scope',
		'ItemResource',
			function($scope, ItemResource){
				ItemResource.query().then(function(data){
					$scope.Collection = data;
				});
			}])

