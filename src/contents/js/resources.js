require([
	'angular',
	'epochdb-resources-craftables'
	], function(angular){
		angular.module('epochdb.resources', [
				'epochdb.resources.craftables'
			])
	})