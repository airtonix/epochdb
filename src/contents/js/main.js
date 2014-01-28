// Import all the dependancies
// require('../vendor/jquery/jquery');
	// _.str = require('../vendor/underscore.string/lib/underscore.string');
require('../vendor/angular/angular');
require('../vendor/angular-route/angular-route');
require('../vendor/angular-resource/angular-resource');

require('./resources/items');
require('./controllers/search');
require('./directives/items');
require('./filters/string');

angular.module("epochdb", [
		'ngRoute',
		'ngResource',
		'epochdb.resources.items',
		'epochdb.controllers.search',
		'epochdb.directives.items',
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

