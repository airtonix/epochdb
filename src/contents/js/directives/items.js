require(['angular'], function(angular){

	angular.module("epochdb.directives.items", [
			'epochdb.resources.items'
		])

		.directive('queryFilter', [function(){
			return {
				// controller: function($scope, $element, $attrs, $transclude) {},
				restrict: 'A',
				link: function($scope, iElm, iAttrs, controller) {
					iElm.bind('mouseup touchend', function(event){
						$scope.$emit("item-query", $scope.tag)
					});
				}
			};
		}])
		
		.directive('itemSummary', ['$parse', 'AssetManager', function($parse, AssetManager){
			return {
				restrict: 'EAC',
				scope: {
					Thing: "=itemSummary"
				},
				replace: true,
				templateUrl: AssetManager.template("list-item.html"),
				controller: function($scope, $element, $attrs, $transclude) {
					var self = this;
					var itemRelatedCollectionNames = {
							'requiredTools': 'tools',
							'requiredComponents': 'components',
							'requiredToCraftNear': 'areas',
							'requiredBy': 'used by',
						}

					self.addTab = function (data, scope){
						$scope.Tabs.push({ 
							name: data.name,
							toggle: function(){
								scope.Visible = !scope.Visible
								$scope.Visible = scope.Visible
							}
						})
					}

					$scope.Visible = false;
					$scope.Panes = [];
					$scope.Tabs = [];
					$scope.$watch("Visible", function(value){
						if(!value) $scope.$broadcast('close-panes')
					})

					angular.forEach(itemRelatedCollectionNames, function(value, key){
						if(!$scope.Thing.hasOwnProperty(key)) return;
						$scope.Panes.push({ name: value, slug: key, data: $scope.Thing[key] })
					})
				}
			};
		}])

		.directive('itemSummaryTab', ["$parse", function($parse){
			return {
				require: '^itemSummary',
				restrict: 'A',
				link: function($scope, iElm, iAttrs, controller){
					
				}
			}
		}])

		.directive('itemSummaryPane', ["$parse", "ItemResource", function($parse, ItemResource){
			return {
				require: '^itemSummary',
				restrict: 'A',
				scope: {
					Visible: "@"
				},
				link: function($scope, iElm, iAttrs, controller) {
					var query = $parse(iAttrs.collection)();
					var pane =  $parse(iAttrs.itemSummaryPane)();

					$scope.Collection = [];
					$scope.Visible = false;
					controller.addTab(pane, $scope)
					$scope.$watch("Visible", function(value){
						console.log("toggled", value)
					})
					$scope.$on("close-panes", function(){
						$scope.Visible = false;
					})
					// $scope.$on("toggle-pane", function(slug){

					// 	$scope.Visible = !$scope.Visible;
					// 	if($scope.Collection.length > 0 ) return;

					// 	angular.forEach(query, function(value, key){
					// 		console.log(key, value)
					// 	// 	itemId = key.replace("api/","");
					// 	// 	ItemResource.get(itemId).then(function(data){
					// 	// 		data = angular.extend(data, { count: valueIsKey?1:value });
					// 	// 		$scope.Collection.push(data);
					// 	// 	})
					// 	})
					// })

				}
			};
		}])

});

