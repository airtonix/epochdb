require ['lodash', 'angular'], ( _, angular) ->

	angular.module 'epochdb.directives.lists', [
		'epochdb.resources'
	]

	.directive 'iconBubble', [
		'Assets',
		(Assets) ->
			restrict: 'E'
			replace: true
			scope:
				'Value': '=value'
				'Icon': '=icon'
			templateUrl: Assets.template 'partial/icon-bubble.html'
	]

	.directive 'item', [
		'$location',
		'Assets',
		'Models',
		($location, Assets, Models) ->
			restrict: 'E'
			replace: true
			scope:
				'Item': '=item'
				'ItemRef': '=itemRef'
				'ItemCount': '=itemCount'
			templateUrl: Assets.template 'partial/list-item.html'
			controller: [
				'$scope',
				'$element',
				'$attrs',
				'$transclude',
				($scope, $element, $attrs, $transclude) ->
					if $scope.Item
						$scope.ItemSummary = $scope.Item

					else if $scope.ItemRef and _.isString $scope.ItemRef
						ref = $scope.ItemRef.replace 'api', ''
						klass = Models.getModel ref
						klass.one(ref).then (data) ->
							$scope.ItemSummary = data

			]
	]

	.directive 'itemList', [
		'$location',
		'Assets',
		'Models',
		($location, Assets, Models) ->
			restrict: 'AE'
			templateUrl: Assets.template 'partial/list.html'
			replace: true
			link: ($scope, iElm, iAttrs, controller) ->

				$scope.Collection = []
				$scope.$watch 'Query', (query) ->
					Models.all query, (data) ->
						$scope.Collection = data


	]

