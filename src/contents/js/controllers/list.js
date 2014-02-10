require(['angular'], function (angular){

	angular.module('epochdb.controllers.list', [
			'epochdb.resources.craftables'
		])

		.controller('ItemListController', [
			'$scope',
			'$location',
			'$routeParams',
			'CraftableResource',
			function ($scope, $location, $routeParams, CraftableResource){
				var query = $location.search();
				$scope.Query = $routeParams.query;
				$scope.$on('item-query', function (scope, query){
					$scope.Query = query;
				})
			}])
});
