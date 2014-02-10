require(['angular', 'lodash'], function(angular, _){

	angular.module('epochdb.directives.assets', [])
		.provider('Assets', [
			function (){
				var self = this;
					self.paths = _.extend({
							template: null,
							static: null,
							api: null
						}, window.assetUrls);

				self.setPath = function (name, path){
						self.paths[name] = path;
					};

				self.template = function(path){
					return self.paths.template+path }
				self.static = function(path){ return self.paths.static+path }
				self.api = function(path){ return self.paths.api+path }

				var service = {
						template: self.template,
						static: self.static,
						api: self.api
					};

				self.$get = [function(){ return service; }]
			}])


});