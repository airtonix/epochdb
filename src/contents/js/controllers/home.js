require(['angular'], function (angular){

	angular.module('epochdb.controllers.home', [])
		.controller("HomeController", [
			'$scope',
			'ItemResource',
			function ($scope, ItemResource){
				$scope.Query = '';
				$scope.Collection = [];

				ItemResource.filter().then(function (data){
					$scope.Collection = data;
				});	


				$scope.$on('item-query', function (scope, query){
					$scope.Query = query;
				});


			}])
});
