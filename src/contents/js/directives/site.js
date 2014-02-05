require(['angular'], function (angular){

	angular.module('epochdb.directives.site', [])

		.directive('siteHeader', ['AssetManager', function(AssetManager){
			// Runs during compile
			return {
				restrict: 'E',
				templateUrl: AssetManager.template('partial/site-header.html'),
				replace: true,
				link: function($scope, iElm, iAttrs, controller) {}
			};
		}]);

})