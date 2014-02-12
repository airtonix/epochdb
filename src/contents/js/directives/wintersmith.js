require(["angular"], function(angular){

	angular.module('wintersmith', [])
		.directive('wintersmithContext', ['$rootScope', '$parse', function($rootScope, $parse){
			return {
				restrict: "A",
				link: function($scope, iElm, iAttrs, controller) {
					var locals = $parse(iAttrs.wintersmithContext)();
					$rootScope.WinterSmith = locals;
				}
			};
		}]);
});