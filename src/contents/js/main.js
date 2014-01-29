// Import all the dependancies
require('../vendor/angular/angular');
require('../vendor/angular-route/angular-route');
require('../vendor/angular-resource/angular-resource');
require('../vendor/underscore/underscore');

// import the application
require('./resources/items');
require('./controllers/search');
require('./directives/items');
require('./directives/assets');
require('./filters/string');

angular.module("epochdb", [
		'ngRoute',
		'ngResource',
		'epochdb.resources.items',
		'epochdb.controllers.search',
		'epochdb.directives.items',
		'epochdb.directives.assets',
		'epochdb.filters.string'
	])
	.config(['$routeProvider', '$locationProvider',
			function ($routeProvider, $locationProvider) {
				$locationProvider.html5Mode(true);
				$routeProvider
					.when('/item/:slug', {
						'templateUrl': 'item-detail.html',
						'controller': 'ItemDetailController'
					})
					.otherwise({redirectTo:'/'});
		}])

