require([
	'angular',
	'epochdb-directives-assets',
	'epochdb-directives-search',
	'epochdb-directives-lists',
	'epochdb-directives-tabs',
	'epochdb-directives-site',
	'epochdb-directives-foundation',
	'epochdb-directives-wintersmith'
	], function(angular){
		angular.module('epochdb.directives', [
				'epochdb.directives.assets',
				'epochdb.directives.search',
				'epochdb.directives.lists',
				'epochdb.directives.tabs',
				'epochdb.directives.site',
				'foundation',
				'wintersmith'
			])
	})