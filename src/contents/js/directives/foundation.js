require(['angular', 'lodash'], function (angular, _){

	angular.module('foundation', [])
		.directive('topBar', [function (){
				return {
					replace: true,
					transclude: true,
					restrict: 'ACE',
					scope: {},
					template: '<nav data-ng-class="{expanded: open}" data-ng-transclude></nav>',
					controller: function ($scope, $element, $attrs, $transclude) {
						$scope.open = false;
						set = function(value){
							$scope.open = value
							$scope.$apply();
							console.log("top-bar.expanded", $scope.open)
						}
						this.toggle = function() {
							set(!$scope.open)
						}
						this.open = function() {
							set(true)
						}
						this.close = function() {
							set(false)
						}
					}
				};
			}])

		.directive('topbarLink', ["$route", "$routeSegment",
			function ($route, $routeSegment){
				return {
					require: '^topBar',
					restrict: 'A',
					replace: true,
					scope: {
						"url": "=url",
						"label": "=label"
					},
					template: "<li class='{{ active }}'><a href='#/{{ url }}'>{{ label }}</a></li>",
					link: function (scope, element, attrs, controller) {
						scope.active = $routeSegment.startsWith(scope.route);
						scope.url = attrs.route || attrs.url;
						scope.label = attrs.label;
						element.bind('click', function(){
							controller.close();
						});
					}
				};
			}])

		.directive('toggleTopbar', [function (){
				return {
					require: '^topBar',
					restrict: 'ACE',
					link: function ($scope, iElm, iAttrs, controller) {
						iElm.bind("mouseup touchend", function (event){
							controller.toggle();
						});
					}
				};
			}])

});