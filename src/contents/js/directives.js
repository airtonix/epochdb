require([
	'angular',
	'epochdb-directives-assets',
	'epochdb-directives-search',
	'epochdb-directives-calculator',
	'epochdb-directives-lists',
	'epochdb-directives-tabs',
	'epochdb-directives-site',
	'epochdb-directives-foundation',
	'epochdb-directives-wintersmith',
	'epochdb-directives-scrollspy'
	], function(angular){
		angular.module('epochdb.directives', [
				'epochdb.directives.assets',
				'epochdb.directives.calculator',
				'epochdb.directives.search',
				'epochdb.directives.lists',
				'epochdb.directives.tabs',
				'epochdb.directives.site',
				'foundation',
				'wintersmith',
				'scrollspy'
			])
	})