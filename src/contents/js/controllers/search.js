require(['angular'], function (angular){

	angular.module('epochdb.controllers.search', [
			'epochdb.resources.craftables'
		])

		.controller('SearchController', [
			'$scope',
			'CraftableResource',
			function ($scope, CraftableResource){
				
				CraftableResource.valueList('type').then(function (data){
					$scope.Filters = data;
				});

				$scope.$watch('Query', function (value){
					$scope.$emit('item-query', value)
				})				

			}])
});
