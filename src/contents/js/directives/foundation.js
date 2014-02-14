require(['angular', 'lodash'], function (angular, _){

	angular.module('foundation', [])
		.directive('topbar', [function (){
				return {
					restrict: 'A',
					controller: function ($scope, $element, $attrs, $transclude) {
						$scope.open = false;
					}
				};
			}])

		.directive('topbarLink', ["$route", "$routeSegment",
			function ($route, $routeSegment){
				return {
					requires: '^topbar',
					restrict: 'A',
					replace: true,
					scope: {
						"url": "=url",
						"label": "=label"
					},
					template: "<li class='{{ active }}'><a href='#/{{ url }}'>{{ label }}</a></li>",
					link: function (scope, element, attrs) {
						// scope.active = $routeSegment.startsWith(scope.route);
						scope.url = attrs.route || attrs.url;
						scope.label = attrs.label;
						element.bind('click', function(){ scope.open = false; });
					}
				};
			}])

		.directive('topbarToggle', [function (){
				return {
					require: '^topbar',
					restrict: 'A',
					link: function ($scope, iElm, iAttrs, controller) {
						iElm.bind("mouseup touchend", function (event){
							$scope.open = !$scope.open;
						});
					}
				};
			}])

});