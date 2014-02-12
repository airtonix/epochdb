require(['angular', 'lodash'], function (angular, _){

	angular.module('epochdb.controllers.detail', [
			'epochdb.resources.craftables'
		])

		.controller('ItemDetailController', [
			'$scope',
			'$routeParams',
			'CraftableResource',
			function ($scope, $routeParams, CraftableResource){
				$scope.DetailedItem = null;

				CraftableResource.objects.get($routeParams.id).then(function(data){
					$scope.DetailedItem = new CraftableResource(data);
				});

			}])
});
