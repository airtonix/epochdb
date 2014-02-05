require([
 		'lodash',
		'angular'
	],
	function (_, angular){

		angular.module("epochdb", [
				'epochdb.resources',
				'epochdb.controllers',
				'epochdb.directives',
				'epochdb.filters',
				'epochdb.config',
				'epochdb.routes'
			])

		angular.bootstrap(document, ['epochdb']);
})