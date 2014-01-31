require(['angular'], function (angular){

	angular.module('epochdb.controllers.home', [])
		.controller("HomeController", [
			'$scope',
			'$state',
			'ItemResource',
			function ($scope, $state, ItemResource){
				$scope.Query = '';
				$scope.Collection = [];


				$scope.$on('item-query', function (scope, query){
					console.log("home.controller.watch.query", query)
					$scope.Query = query;

					ItemResource.filter().then(function (data){
						$scope.Collection = data;
					});	

				});


			}])
});
