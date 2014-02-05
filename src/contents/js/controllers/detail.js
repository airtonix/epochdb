require(['angular'], function (angular){

	angular.module('epochdb.controllers.detail', [
			'epochdb.resources.items'
		])

		.controller('ItemDetailController', [
			'$scope',
			'ItemResource',
			function ($scope, ItemResource){
			}])
});
