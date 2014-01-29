;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

angular.module("epochdb.directives.items", [
		'epochdb.resources.items'
	])

	.directive('itemSummary', ['$parse', 'AssetManager', function($parse, AssetManager){
		return {
			restrict: 'EAC',
			scope: {
				thing: "=itemSummary"
			},
			replace: true,
			templateUrl: AssetManager.template("item-summary.html"),
			controller: function($scope, $element, $attrs, $transclude) {
				this.Item = $scope.item;
				var itemRelatedCollectionNames = [
					'requiredTools',
					'requiredComponents',
					'requiredNearByToCraft',
					]
				$scope.Panes = [];
				this.addTabFromPane = function (data){
					$scope.Panes.push(data);
				}

				$scope.togglePane = function ($tabScope){
					$scope.detailsVisible = true;
					angular.forEach($scope.Panes, function(value, key){
						$scope.Panes[key].scope.selected = false;
					})
					$tabScope.selected = true;
				}

				$scope.toggleDetails = function (){

				}

				angular.forEach(itemRelatedCollectionNames, function(value, key){
					
				})
			}
		};
	}])

	.directive('tabPane', ["$parse", "ItemResource", function($parse, ItemResource){
		return {
			require: '^itemSummary',
			restrict: 'A',
			link: function($scope, iElm, iAttrs, controller) {

				controller.addTabFromPane({
					slug: iAttrs.tabPane,
					name: iAttrs.tabName,
					scope: $scope
				});

				$scope.Collection = [];

				var collectionFunc = $parse(iAttrs.collection);
				var collection = collectionFunc();

				$scope.$watch("selected", function(selected){
					if(!selected || $scope.Collection.length > 0) return;

					console.log(iAttrs.tabName)
					valueIsKey = _.isArray(collection);
					angular.forEach(collection, function(value, key){
						key = valueIsKey?value:key;
						itemId = key.replace("api/","");
						ItemResource.get(itemId).then(function(data){
							data = angular.extend(data, { count: valueIsKey?1:value });
							$scope.Collection.push(data);
						})
					})
				})

			}
		};
	}])


},{}]},{},[1])
;