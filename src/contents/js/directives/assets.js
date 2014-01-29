angular.module('epochdb.directives.assets', [])
	.factory('AssetManager', [function (){
			var service = {
				urls: {
					template: null,
					static: null,
					api: null
				},
				template: function(path){ return service.urls.template+path },
				static: function(path){ return service.urls.static+path },
				api: function(path){ return service.urls.api+path }
			};
			service.urls = angular.extend(service.urls, window.assetUrls);
			return service;
		}])

	.run(['$rootScope', 'AssetManager', function ($rootScope, AssetManager){
			$rootScope.assets = AssetManager;
		}])