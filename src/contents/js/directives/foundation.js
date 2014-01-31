require(['angular'], function (angular){

	angular.module('foundation', [])
		.directive('topbar', [function (){
				return {
					restrict: 'A',
					controller: function ($scope, $element, $attrs, $transclude) {
						$scope.open = false;
						// this.toggle = function (){
						// 	$scope.Expanded = !$scope.Expanded;
						// }
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
							// controller.toggle()
						});
					}
				};
			}])

});