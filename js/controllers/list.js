require(['angular'], function (angular){

	angular.module('epochdb.controllers.list', [
			'epochdb.resources.items'
		])

		.controller('ItemListController', [
			'$scope',
			'$location',
			'$routeParams',
			'ItemResource',
			function ($scope, $location, $routeParams, ItemResource){
				var query = $location.search();
				console.log($location, $routeParams)
				// $scope.Collection = [];
				$scope.Query = $routeParams.query;
				$scope.$on('item-query', function (scope, query){
					$scope.Query = query;
				})
			}])
});
