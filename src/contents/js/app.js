require([
 		'lodash',
		'angular',
		'underscore-query'
	],
	function (_, angular){

		angular.module("epochdb", [
				'epochdb.templates',
				'epochdb.resources',
				'epochdb.controllers',
				'epochdb.directives',
				'epochdb.filters',
				'epochdb.config',
				'epochdb.routes'
			])

		angular.bootstrap(document, ['epochdb']);
})
