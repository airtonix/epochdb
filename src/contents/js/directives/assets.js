require(['angular', 'underscore'], function(angular, _){

	angular.module('epochdb.directives.assets', [])
		.provider('AssetManager', function (){
				var urls = _.extend({
						template: null,
						static: null,
						api: null
					}, window.assetUrls);

				this.setPath = function (name, path){
						urls[name] = path;
					};

				this.template = function(path){
					console.log(path)
					return urls.template+path }
				this.static = function(path){ return urls.static+path }
				this.api = function(path){ return urls.api+path }

				var service = {
						template: this.template,
						static: this.static,
						api: this.api
					};

				this.$get = [function(){ return service; }]
			})

		.run(['$rootScope', 'AssetManager', function ($rootScope, AssetManager){
				$rootScope.assets = AssetManager;
			}])

});