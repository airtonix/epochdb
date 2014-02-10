require(['angular', 'lodash'], function(angular, _){

	angular.module("epochdb.directives.tabs", [])

		.directive('tabs', [function($parse){
			return {
				restrict: 'AE',
				scope: {
					'collection': '=collection'
				},
				controller: ["$scope", "$element", "$attrs", "$transclude",
					function ($scope, $element, $attrs, $transclude){
						var self = this;
						$scope.Panes = $scope.Panes || [];
						$scope.Tabs = $scope.Tabs || [];

						$scope.$watch("Visible", function(value){
							if(!value) $scope.$broadcast('close-panes')
						})

						$scope.$watch("collection", function(data){
							_.forEach(data, function (value, key){
								$scope.Panes.push({
									name: key,
									data: value
								});
							});
						})

						self.addTab = function (scope, data){
							$scope.Tabs.push({
								name: data.name,
								template: data.template
							})
							// 	toggle: function(){
							// 		scope.Visible = !scope.Visible
							// 		$scope.Visible = scope.Visible
							// 	}
							// })
						}

					}]
			}
		}])

		.directive('tabButton', ["$parse", function($parse){
			return {
				require: '^tabs',
				restrict: 'EA',
				replace: true,
				template: "<dd><a class='button'>{{ tab.name }}</a></dd>",
				link: function($scope, iElm, iAttrs, controller){}
			}
		}])

		.directive('tabPage', ["$parse", function($parse){
			return {
				require: '^tabs',
				restrict: 'AE',
				replace: true,
				replace: true,
				template: "<li data-translude></li>",
				scope: {
					Visible: "@",
					data: "=paneData"
				},
				link: function($scope, iElm, iAttrs, controller) {
					var query = $parse(iAttrs.collection)();
					var pane =  $parse(iAttrs.itemSummaryPane)();
					$scope.Visible = false;

					$scope.$watch("data", function(data){
						controller.addTab($scope, data)
					})

					$scope.$watch("Visible", function(value){

					})

					$scope.$on("close-panes", function(){
						$scope.Visible = false;
					})
				}
			};
		}])



});

