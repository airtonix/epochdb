require(['lodash', 'angular'], function( _, angular){

	angular.module("epochdb.directives.lists", [
			'epochdb.resources.craftables'
		])
		.directive('iconBubble', [
				'Assets',
				function(Assets){
					return {
						restrict: "E",
						replace: true,
						scope: {
							"Value": "=value",
							"Icon": "=icon"
						},
						templateUrl: Assets.template("partial/icon-bubble.html"),
						controller: function($scope, $element, $attrs, $transclude){
							// , data-value="_.keys(ItemSummary.requires('components')).length", title="Item is built using {{ value }} components"
						}
					}
				}])

		.directive('recipe', [
				"$location",
				'Assets',
				'CraftableResource',
				function($location, Assets, CraftableResource){
					return {
						restrict: "E",
						replace: true,
						scope: {
							"Item": "=item",
							"ItemRef": "=itemRef",
							"ItemCount": "=itemCount"
						},
						templateUrl: Assets.template('partial/list-item.html'),
						controller: ["$scope", "$element", "$attrs", "$transclude",
							function ($scope, $element, $attrs, $transclude){
								if($scope.Item){
									$scope.ItemSummary = $scope.Item;
								}
								else if($scope.ItemRef && _.isString($scope.ItemRef)){
									// in future we need to pull this apart with a pattern
									// so we can take one param and determin if it's an id
									// for a recipe, a trader, a location and so forth.
									// Right now, we only deal with recipes.
									var id = $scope.ItemRef.replace("api/recipe/","");
									CraftableResource.objects
										.get(id)
										.then(function(data){
											$scope.ItemSummary = new CraftableResource(data);
										});
								}
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
						templateUrl: Assets.template('partial/list.html'),
						replace: true,
						link: function($scope, iElm, iAttrs, controller) {
							$scope.$watch('Query', function (query){
								CraftableResource.objects.filter(query).then(function(data){
									$scope.Collection = data;
								})
							})
						}
					};
				}])

});