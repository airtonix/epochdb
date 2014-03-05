require ['angular'], (angular) ->

	angular.module 'epochdb.controllers.home', [
			'epochdb.resources'
		]

	.controller 'HomeController', [
		'$scope',
		'Models',
		($scope, Models) ->
			$scope.Query = ''
			$scope.Collection = []

			$scope.$on 'item-query', (scope, query) ->
				$scope.Query = query
		]