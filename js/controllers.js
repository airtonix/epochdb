require([
	'angular',
	'epochdb-controllers-home',
	'epochdb-controllers-search',
	'epochdb-controllers-list',
	'epochdb-controllers-detail',
	], function (angular){
		angular.module('epochdb.controllers', [
				'epochdb.controllers.home',
				'epochdb.controllers.search',
				'epochdb.controllers.list',
				'epochdb.controllers.detail'
			])
	})