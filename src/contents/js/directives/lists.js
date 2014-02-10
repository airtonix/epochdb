require(['lodash', 'angular'], function( _, angular){

	angular.module("epochdb.directives.lists", [
			'epochdb.resources.craftables'
		])

		.directive('recipe', [
				"$location",
				'Assets',
				'CraftableResource',
				function($location, Assets, CraftableResource){
					return {
						restrict: "E",
						replace: true,
						scope: {
							"Id": "=ref",
							"Count": "=value"
						},
						templateUrl: Assets.template('partial/list-item.html'),
						controller: ["$scope", "$element", "$attrs", "$transclude",
							function ($scope, $element, $attrs, $transclude){
								$scope.Item = null;
								var id = $scope.Id.replace("api/","");
								console.log(id)
								CraftableResource.get(id)
									.then(function(data){
										$scope.item = data;
									});
							}]
					}
				}])

		.directive('itemList', [
				"$location",
				'Assets',
				'CraftableResource',
				function($location, Assets, CraftableResource){
					return {
						restrict: 'AE',
						replace: true,
						templateUrl: Assets.template('partial/list.html'),
						link: function($scope, iElm, iAttrs, controller) {
							$scope.$watch('Query', function (value){
								CraftableResource.filter().then(function(data){
									$scope.Collection = data;
								})
							})
						}
					};
				}])

		.directive('itemSummary', [
				'$parse',
				'Assets',
			function($parse, Assets){

				return {
					restrict: 'A',
					replace: true,
					scope: true,
					templateUrl: Assets.template("partial/list-item.html")
				};
			}])

});