require(['angular', 'lodash'], function (angular, _){

	angular.module('epochdb.controllers.detail', [
			'epochdb.resources.craftables'
		])

		.controller('ItemDetailController', [
			'$scope',
			'$routeParams',
			'CraftableResource',
			function ($scope, $routeParams, CraftableResource){
				$scope.Item = null;

				CraftableResource.get($routeParams.id).then(function(data){
					$scope.Item = data;
				});

			}])
});
