require ['angular'], (angular) ->

	angular.module 'epochdb.controllers.app', [
		'ngRoute',
		'route-segment'
	]

	.value 'Loader', show: false

	.controller 'AppController', [
		'$rootScope',
		'$scope',
		'$location',
		'Assets',
		'Loader',
		'Analytics'
		($rootScope, $scope, $location, Assets, Loader, Analytics) ->
			$scope.Assets = Assets

			$scope.$on '$routeChangeSuccess', (event, $toRoute, $fromRoute) ->
				route = $toRoute.$route or $toRoute.$$route
				if route and route.segment
					$scope.route = route

			$scope.Loader = Loader

			$rootScope.$on 'routeSegmentChange', (Event, RouteSegment) ->
				Analytics.trackPage("#{$location.$$host}#{$location.$$url}")
				Loader.show = false

		]
