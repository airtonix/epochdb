require(['angular'], function(angular){

		angular.module('epochdb.config', [])

			.constant('Assets', (function ($window){
					var service = {
						paths: _.extend({
								template: null,
								static: null,
								api: null
							}, $window.assetUrls),
						template: function (path){ return service.paths.template+path },
						static: function (path){ return service.paths.static+path },
						api: function (path){ return service.paths.api+path }
					}
					return service;
				})(window))

})