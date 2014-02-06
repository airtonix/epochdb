require(['angular'], function (angular){

	angular.module('epochdb.controllers.home', [
			'epochdb.resources.craftables'
		])
		.controller("HomeController", [
			'$scope',
			'CraftableResource',
			function ($scope, CraftableResource){
				$scope.Query = '';
				$scope.Collection = [];

				CraftableResource.filter().then(function (data){
					$scope.Collection = data;
				});	


				$scope.$on('item-query', function (scope, query){
					$scope.Query = query;
				});


			}])
});
