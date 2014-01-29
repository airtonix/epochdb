require.config({
    paths: {
        'angular': '../vendor/angular/angular',
		'angular-route': '../vendor/angular-route/angular-route',
		'angular-resource': '../vendor/angular-resource/angular-resource',
		'angular-ui-router': '../vendor/angular-ui-router/angular-ui-router',
		'underscore': '../vendor/underscore/underscore'
    },
    shim : {
    	'underscore': { exports: '_' },
    	'angular': { exports: 'angular' },
    	'angular-route': { deps: ['angular', ]},
    	'angular-resource': { deps: ['angular', ]},
    	'angular-ui-router': { deps: ['angular', ]}
    }
  });

require([
		'angular',
		'angular-route',
		'angular-resource',
		'angular-ui-router',
		'underscore',

		'./resources/items',
		'./controllers/search',
		'./directives/items',
		'./directives/assets',
		'./filters/string'
	], function(angular) {

		angular.module("epochdb", [
				'ui.router',
				'ngResource',
				'epochdb.resources.items',
				'epochdb.controllers.search',
				'epochdb.directives.items',
				'epochdb.directives.assets',
				'epochdb.filters.string'
			])
			.constant('Assets', (function($window){
				var service = {
					paths: _.extend({
							template: null,
							static: null,
							api: null
						}, $window.assetUrls),
					template: function(path){ return service.paths.template+path },
					static: function(path){ return service.paths.static+path },
					api: function(path){ return service.paths.api+path }
				}
				console.log(service)
				return service;
			})(window))

			.config(['$stateProvider',
					 '$urlRouterProvider',
					 'Assets',
					function ($stateProvider, $urlRouterProvider, Assets) {
						$urlRouterProvider.otherwise('/');
						$stateProvider
							.state('list', {
								'url':'',
								'templateUrl': Assets.template('list.html'),
								'controller': 'SearchController'
							})
							.state('item-detail',{
								'url': '/item/:slug',
								'templateUrl': Assets.template('detail.html'),
								'controller': 'ItemDetailController'
							})
				}])

});
