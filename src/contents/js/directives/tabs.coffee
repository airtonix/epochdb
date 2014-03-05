require ['angular', 'lodash', 'angular-touch'], (angular, _) ->

	angular.module "epochdb.directives.tabs", [
		'ngTouch'
	]

		.directive 'tabs', [
			($parse) ->
				restrict: 'AE',
				scope:
					'collection': '=collection'
				controller: [
					"$scope",
					"$element",
					"$attrs",
					"$transclude",
					($scope, $element, $attrs, $transclude) ->
						$scope.Panes = $scope.Panes || []
						$scope.Tabs = $scope.Tabs || []

						$scope.$watch "Visible", (value) ->
							if not value
								$scope.$broadcast 'close-panes'

						$scope.$watch "collection", (data) ->
							_.forEach data,  (value, key) ->
								$scope.Panes.push
									name: key
									data: value

						@addTab = (scope, data) ->
							$scope.Tabs.push
								name: data.name
								template: data.template

				]
		]

		.directive 'tabButton', [
			"$parse",
			($parse) ->
				require: '^tabs'
				restrict: 'EA'
				replace: true
				template: "<dd><a class='button'>{{ tab.name }}</a></dd>"
		]

		.directive 'tabPage', [
			"$parse",
			($parse) ->
				require: '^tabs'
				restrict: 'AE'
				replace: true
				replace: true
				template: "<li data-translude></li>"
				scope:
					Visible: "@"
					data: "=paneData"
				link: ($scope, iElm, iAttrs, controller) ->
					query = $parse(iAttrs.collection)()
					pane =  $parse(iAttrs.itemSummaryPane)()
					$scope.Visible = false

					$scope.$watch "data", (data) ->
						controller.addTab $scope, data

					$scope.$on "close-panes", ->
						$scope.Visible = false

		]


		.directive 'swipablePanes', [
			'$swipe',
			'Assets',
			($swipe, Assets) ->
				restrict: 'E'
				templateUrl: Assets.template 'partial/swipable-pane-container.html'
				replace: true
				transclude: true
				link: ($scope, iElm, iAttrs, controller) ->
					$scope.swipeTo = (vector) ->
						console.log vector
		]

