require(['angular'], function(angular){

	angular.module("epochdb.directives.tabs", [])

		.directive('tabbedPages', ["$parse", function($parse){
			return {
				restrict: 'AE',
				controller: function($scope, iElm, iAttrs, controller){

					$scope.Visible = false;
					$scope.Panes = [];
					$scope.Tabs = [];

					$scope.$watch("Visible", function(value){
						// $scope.$parent.Visible = value;
						if(!value) $scope.$broadcast('close-panes')
					})

					self.addTab = function (data, scope){
						$scope.Tabs.push({ 
							name: data.name,
							toggle: function(){
								scope.Visible = !scope.Visible
								$scope.Visible = scope.Visible
							}
						})
					}

				}
			}
		}])

		.directive('tabButton', ["$parse", function($parse){
			return {
				require: '^tabbedPages',
				restrict: 'A',
				link: function($scope, iElm, iAttrs, controller){}
			}
		}])

		.directive('tabPage', ["$parse", function($parse){
			return {
				require: '^tabbedPages',
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
					})
					$scope.$on("close-panes", function(){
						$scope.Visible = false;
					})
				}
			};
		}])



});

