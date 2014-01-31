require([
	'angular',
	'epochdb-filters-string',
	], function(angular){
		angular.module('epochdb.filters', [
				'epochdb.filters.string',
			])
	})