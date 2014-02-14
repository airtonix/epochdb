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
		}])


		.directive('containsToc', [function(){
			// Runs during compile
			return {
				restrict: 'A',
				controller: function($scope, $element, $attrs, $transclude) {
					$scope.Table = {}
					this.addEntry = function(id, element){
						$scope.Table["#"+id] = element[0].innerText
					}
				},
			};
		}])

		.directive('tocEntry', [function(){
			return {
				require: '^containsToc',
				restrict: 'A',
				link: function($scope, iElm, iAttrs, controller) {
					controller.addEntry(iAttrs.id, iElm)
				}
			};
		}])

		.directive('tocMenu', [function(){
			return {
				require: '^containsToc',
				restrict: 'A',
				template: '<ul class="side-nav" data-transclude></ul>',
				replace: true,
				transclude: true,
				link: function($scope, iElm, iAttrs, controller) {
					$scope.$on("render-toc-menu", function(data){
						console.log("rendering table of contents", data)
					})
				}
			};
		}]);

})