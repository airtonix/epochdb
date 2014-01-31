require([
 		'lodash',
		'angular',
	],
	function (_, angular){

		angular.module("epochdb", [
				'ui.router',
				'epochdb.resources',
				'epochdb.controllers',
				'epochdb.directives',
				'epochdb.filters'
			])
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

			.config(['$stateProvider',
					 '$urlRouterProvider',
					 'Assets',

					function ($stateProvider, $urlRouterProvider, Assets) {
						$urlRouterProvider
							.otherwise('/');

						$stateProvider
							.state('app', {
								url:'/',
								templateUrl: Assets.template('home.html')
							})
							.state('app.items',{
								url: '/items',
								templateUrl : Assets.template('list.html')
							})

				}])

			.run(['$rootScope',
				  '$state',
				  '$stateParams',
				  'Assets',
				function ($rootScope, $state, $stateParams, Assets) {
					// It's very handy to add references to $state and $stateParams to the $rootScope
					// so that you can access them from any scope within your applications.For example,
					// <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
					// to active whenever 'contacts.list' or one of its decendents is active.
					$rootScope.$state = $state;
					$rootScope.$stateParams = $stateParams;
					$rootScope.assets = Assets;
				}]);

		angular.bootstrap(document, ['epochdb']);
})