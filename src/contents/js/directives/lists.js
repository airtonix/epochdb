require(['lodash', 'angular'], function(_, angular){

	angular.module("epochdb.directives.lists", [
			'epochdb.resources.craftables'
		])


		.directive('itemList', [
				'CraftableResource',
				'AssetManager',
				"$location",
				function(CraftableResource, AssetManager, $location){
					return {
						restrict: 'E',
						replace: true,
						templateUrl: AssetManager.template('partial/list.html'),
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
				'AssetManager',
			function($parse, AssetManager){

				return {
					restrict: 'A',
					scope: {
						Thing: "=itemSummary"
					},
					replace: true,
					templateUrl: AssetManager.template("partial/list-item.html"),
					controller: function($scope, $element, $attrs, $transclude) {
						var self = this;
						$scope.Panes = [];
						_.forEach($scope.Thing.depends, function(value, key){
							$scope.Panes.push({
								name: key,
								data: $scope.Thing.depends[key]
							})
						})
					}
				};
			}])

});

