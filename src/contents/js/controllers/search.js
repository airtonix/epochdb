require(['angular'], function (angular){

	angular.module('epochdb.controllers.search', [
			'epochdb.resources.items'
		])

		.controller('SearchController', [
			'$scope',
			'ItemResource',
			function ($scope, ItemResource){
				
				ItemResource.valueList('type').then(function (data){
					$scope.Filters = data;
				});

				$scope.$watch('Query', function (value){
					$scope.$emit('item-query', value)
				})				

			}])
});
