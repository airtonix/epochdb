require(['angular'], function(angular){

	angular.module("epochdb.directives.search", [
			'epochdb.resources.craftables'
		])

		.directive('searchForm', [
				'$location',
				'CraftableResource',
				'AssetManager',
				function($location, CraftableResource, AssetManager){
					// Runs during compile
					return {
						// scope: {}, // {} = isolate, true = child, false/undefined = no change
						restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
						replace: true,
						templateUrl: AssetManager.template('partial/search.html'),
						controller: function($scope, $element, $attrs, $transclude) {
							var behaviour = $attrs.changeBehaviour?$attrs.changeBehaviour:'submit'

							CraftableResource.valueList('type').then(function (data){
								$scope.Filters = data;
							});

							$scope.$watch('Query', function (value){
								if(behaviour == "autocomplete"){
									$scope.$emit('item-query', value)
								}else{
									if(value && value.length > 0) $scope.$emit('item-query', value);
								}
							})

							$scope.search = function(value){
								$location.path("/items/"+value.toLowerCase())
							}

							$scope.$on('item-query', function(event, data){
								if(behaviour == "submit"){
									$scope.search(data)
								}
							})

						}
					};
				}])


});

