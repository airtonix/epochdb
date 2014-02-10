require(['angular'], function (angular){

	angular.module('epochdb.directives.site', [])

		.directive('siteHeader', ['Assets', function(Assets){
			// Runs during compile
			return {
				restrict: 'E',
				templateUrl: Assets.template('partial/site-header.html'),
				replace: true,
				link: function($scope, iElm, iAttrs, controller) {}
			};
		}]);

})