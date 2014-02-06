require(['angular'], function(angular){

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
								// $location.search = $stateParams;
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
					restrict: 'EAC',
					scope: {
						Thing: "=itemSummary"
					},
					replace: true,
					templateUrl: AssetManager.template("list-item.html"),
					controller: function($scope, $element, $attrs, $transclude) {
						var self = this;
						$scope.PanesSchema = {
								'requiredTools': 'tools',
								'requiredComponents': 'components',
								'requiredToCraftNear': 'areas',
								'requiredBy': 'used by',
							}

						angular.forEach($scope.PanesSchema, function(value, key){
							if(!$scope.Thing.hasOwnProperty(key)) return;
							$scope.Panes.push({
								name: value,
								slug: key,
								data: $scope.Thing[key]
							})
						})
					}
				};
			}])


});

