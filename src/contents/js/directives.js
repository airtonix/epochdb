require([
	'angular',
	'epochdb-directives-assets',
	'epochdb-directives-items',
	'epochdb-directives-foundation'
	], function(angular){
		angular.module('epochdb.directives', [
				'epochdb.directives.assets',
				'epochdb.directives.items',
				'foundation'
			])
	})