require(["angular", "lodash"], function(angular, _){
	angular.module('epochdb.directives.calculator', [ ])
		.directive('addToCalculator', [function(){
			return {
				restrict: 'A',
				scope: {
					Id: "=itemId"
				},
				link: function($scope, iElm, iAttrs, controller) {
					iElm.bind("touchend mouseup", function (event){
						$scope.$emit("calculator-add-item", {id: $scope.Id })
						event.preventDefault();
					})
				}
			};
		}]);
})