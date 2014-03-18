require ['angular', 'lodash'], (angular, _) ->

	angular.module "epochdb.directives.search", [
		'epochdb.resources'
	]

	.directive 'searchForm', [
		'$location',
		'Assets',
		'Models',
		($location, Assets, Models) ->
			restrict: 'AE'
			replace: true
			templateUrl: Assets.template 'partial/search.html'
			controller: ($scope, $element, $attrs, $transclude) ->
				behaviour = 'submit'
				if $attrs.changeBehaviour
					behaviour = $attrs.changeBehaviour

				$scope.Filters = []
				_.map Models.models, (item) ->
					item.values(['tags', "type"]).then (data) ->
						$scope.Filters = _.flatten _.uniq $scope.Filters.concat data

				$scope.$watch 'Query', (value) ->
					if behaviour is "autocomplete"
						$scope.$emit 'item-query', value
					else
						if value and value.length > 0
							$scope.$emit 'item-query', value

				$scope.search = (value) ->
					$location.path "/items/"+value.toLowerCase()

				$scope.$on 'item-query', (event, data) ->
					# clearTimeout timeoutCode
					# delayedQueryFunc = () ->
						# if behaviour is "submit"
					$scope.search data
					# timeoutCode = setTimeout delayedQueryFunc, delayInMs
	]
