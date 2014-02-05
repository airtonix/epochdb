require(['angular'], function (angular){

	angular.module('epochdb.controllers.app', [
					'ngRoute',
					'route-segment'
				])

		.value('Loader', {show: false})

		.controller('AppController', [
			'$scope',
			'Assets',
			'Loader',
			function ($scope, Assets, Loader){

				$scope.Assets = Assets;

				$scope.$on('$routeChangeSuccess', function(event, args) {
					var route = args.$route || args.$$route; 
					if(route && route.segment) {
						$scope.route = route;
					}
				})

				$scope.Loader = Loader;

				$scope.$on('routeSegmentChange', function() {
					Loader.show = false;
				})

			}])
});
