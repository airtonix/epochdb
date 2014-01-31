require(['angular'], function (angular){

	angular.module('epochdb.controllers.search', [
			'ui.router',
			'epochdb.resources.items'
		])

		.controller('SearchController', [
			'$scope',
			'$state',
			'$stateParams',
			'ItemResource',
			function ($scope, $state, $stateParams, ItemResource){
				var query = $stateParams;
				
				ItemResource.valueList('type').then(function (data){
					$scope.Filters = data;
				});

				$scope.$watch('Query', function (value){
					$scope.$emit('item-query', value)
				})				

			}])
});
