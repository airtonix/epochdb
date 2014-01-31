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
				ItemResource.get({id: $stateParams.id }).then(function (data){
					$scope.Item = data;
				});
			}])
});
