require(['angular'], function (angular){

	angular.module('epochdb.controllers.detail', [
			'ui.router',
			'epochdb.resources.items'
		])

		.controller('ItemDetailController', [
			'$scope',
			'$stateParams',
			'ItemResource',
			function ($scope, $stateParams, ItemResource){
				console.log("item detail", $stateParams)
				ItemResource.get({id: $stateParams.id }).then(function (data){
					$scope.Item = data;
				});
			}])
});
