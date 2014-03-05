require ['angular'], (angular) ->

	angular.module 'epochdb.controllers.app', [
		'ngRoute',
		'route-segment'
	]

	.value 'Loader', show: false

	.controller 'AppController', [
		'$scope',
		'Assets',
		'Loader',
		($scope, Assets, Loader) ->

			$scope.Assets = Assets

			$scope.$on '$routeChangeSuccess', (event, $toRoute, $fromRoute) ->
				route = $toRoute.$route or $toRoute.$$route
				if route and route.segment
					$scope.route = route

			$scope.Loader = Loader

			$scope.$on 'routeSegmentChange', (event) ->
				Loader.show = false

		]
