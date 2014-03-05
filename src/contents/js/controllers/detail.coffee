require ['angular', 'lodash'], (angular, _) ->

	angular.module 'epochdb.controllers.detail', [
		'epochdb.resources'
	]

	.controller 'ItemDetailController', [
		'$scope',
		'$routeParams',
		'Models',
		($scope, $routeParams, Models) ->
			klass = Models.getModel $routeParams.klass
			klass.one($routeParams.klass + "/" + $routeParams.id).then (data) ->
				$scope.DetailedItem = data
	]