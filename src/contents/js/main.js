require.config({
	paths: {
		'angular': '../vendor/angular/angular.min',
			'angular-route': '../vendor/angular-route/angular-route',
			'angular-animate': '../vendor/angular-animate/angular-animate',
			'angular-route-segment': '../vendor/angular-route-segment/build/angular-route-segment',
		'lodash': '../vendor/lodash/dist/lodash.underscore',

		'epochdb': 'app',
			'epochdb-routes': 'routes',
			'epochdb-config': 'config',
			'epochdb-directives': 'directives',
				'epochdb-directives-assets': 'directives/assets',
				'epochdb-directives-search': 'directives/search',
				'epochdb-directives-lists': 'directives/lists',
				'epochdb-directives-tabs': 'directives/tabs',
				'epochdb-directives-site': 'directives/site',
				'epochdb-directives-foundation': 'directives/foundation',
				'epochdb-directives-wintersmith': 'directives/wintersmith',

			'epochdb-controllers': 'controllers',
				'epochdb-controllers-app': 'controllers/app',
				'epochdb-controllers-home': 'controllers/home',
				'epochdb-controllers-search': 'controllers/search',
				'epochdb-controllers-list': 'controllers/list',
				'epochdb-controllers-detail': 'controllers/detail',

			'epochdb-filters': 'filters',
				'epochdb-filters-string': 'filters/string',

			'epochdb-resources': 'resources',
				'epochdb-resources-craftables': 'resources/craftables'


	},

	shim : {
		'angular': { exports: 'angular' },
		'angular-animate': { deps: ['angular'] },
		'angular-route': { deps: ['angular'] },
		'angular-route-segment': { deps: [
				'angular',
				'angular-route'
				]},
		/* Crazy Dependancy Graph */
		'epochdb': { deps: [
				'lodash',
				'angular',
				'angular-route',
				'angular-route-segment',
				'angular-animate',

				'epochdb-config',
				'epochdb-routes',
				'epochdb-resources',
				'epochdb-controllers',
				'epochdb-directives',
				'epochdb-filters'
			]},
		'epochdb-resources': { deps: [
				'epochdb-resources-craftables'
			]},
		'epochdb-controllers': { deps: [
				'epochdb-controllers-app',
				'epochdb-controllers-home',
				'epochdb-controllers-search',
				'epochdb-controllers-list',
				'epochdb-controllers-detail'
			]},
		'epochdb-directives': { deps: [
				'epochdb-directives-search',
				'epochdb-directives-lists',
				'epochdb-directives-tabs',
				'epochdb-directives-assets',
				'epochdb-directives-site',
				'epochdb-directives-foundation',
				'epochdb-directives-wintersmith'
			]},
		'epochdb-filters': { deps: [
				'epochdb-filters-string'
			]}

	},

	urlArgs: "bust=" +  (new Date()).getTime(),
	deps: ['epochdb', ]

  });