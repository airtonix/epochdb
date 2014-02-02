require(['angular'], function (angular){

	angular.module('epochdb.controllers.list', [
			'ui.router',
			'epochdb.resources.items'
		])

		.controller('ItemListController', [
			'$scope',
			'$location',
			'ItemResource',
			function ($scope, $location, ItemResource){
				var query = $location.search();
				// $scope.Collection = [];
				$scope.$on('item-query', function (scope, query){
					$scope.Query = query;
				})
			}])
});
