require(['angular'], function(angular){

		angular.module('epochdb.config', [])
			// .config(function(RestangularProvider){
			// 		RestangularProvider.setBaseUrl('/api/');
			// 		RestangularProvider.setRequestSuffix('/data.json');
			// 	    RestangularProvider.setDefaultHttpFields({cache: true});
			// 		RestangularProvider.addFullRequestInterceptor(
			// 			function(element, operation, path, url, headers, params) {
			// 				if(operation == "get"){
			// 					console.log(element, operation, path, url, headers, params)
			// 				}
			// 				return false
			// 			});


			// 	})

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