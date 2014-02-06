require(['angular'], function (angular){

	angular.module('epochdb.controllers.detail', [
			'epochdb.resources.craftables'
		])

		.controller('ItemDetailController', [
			'$scope',
			'CraftableResource',
			function ($scope, CraftableResource){
			}])
});
