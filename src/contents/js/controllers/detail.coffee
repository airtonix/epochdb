require ['angular', 'lodash'], (angular, _) ->

	angular.module 'epochdb.controllers.detail', [
		'epochdb.resources',
	]

	.controller 'ItemDetailController', [
		'$q',
		'$scope',
		'$routeParams',
		'Models',
		($q, $scope, $routeParams, Models) ->
			klass = Models.getModel $routeParams.klass
			recipeClass = Models.getModel 'recipe'
			itemClass = Models.getModel 'item'

			klass.one($routeParams.klass + "/" + $routeParams.id).then (data) ->

				$scope.DetailedItem = data
				deferred = $q.defer()
				intermediate = $q.defer()

				generic = recipeClass.usedIn(data.id)
				specific = itemClass.usedIn(data.id)

				success = (data) ->
					intermediate.resolve data
				failure = (data) ->
					intermediate.resolve {}
				specific.then success, failure

				$q.all([generic, intermediate.promise])
					.then (results) ->
						$scope.DetailedItem.requiredFor = _.flatten results

	]