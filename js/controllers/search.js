require(['angular'], function(angular){

	angular.module('epochdb.controllers.search', [
			'epochdb.resources.items'
		])

		.controller('SearchController', [
			'$scope',
			'ItemResource',
			function($scope, ItemResource){
				ItemResource.query().then(function(data){
					$scope.Query = '';
					$scope.Collection = data;
					$scope.Tags = _.uniq( _.flatten(_.pluck(data, 'tags')));

					$scope.$on('item-query', function(scope, query){
						$scope.Query = query;
					})
				});
			}])
});
