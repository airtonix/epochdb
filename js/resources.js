require([
	'angular',
	'epochdb-resources-items'
	], function(angular){
		angular.module('epochdb.resources', [
				'epochdb.resources.items'
			])
	})