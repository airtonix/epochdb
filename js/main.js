require.config({
	paths: {
		'angular': '../vendor/angular/angular.min',
		'angular-ui-router': '../vendor/angular-ui-router/release/angular-ui-router.min',
		'lodash': '../vendor/lodash/dist/lodash.underscore.min',

		'epochdb': 'app',
		'epochdb-directives': 'directives',
			'epochdb-directives-assets': 'directives/assets',
			'epochdb-directives-items': 'directives/items',
			'epochdb-directives-foundation': 'directives/foundation',

		'epochdb-controllers': 'controllers',
			'epochdb-controllers-home': 'controllers/home',
			'epochdb-controllers-search': 'controllers/search',
			'epochdb-controllers-list': 'controllers/list',
			'epochdb-controllers-detail': 'controllers/detail',

		'epochdb-filters': 'filters',
			'epochdb-filters-string': 'filters/string',

		'epochdb-resources': 'resources',
			'epochdb-resources-items': 'resources/items'


	},

	shim : {
		'angular': { exports: 'angular' },
		'angular-ui-router': { deps: ['angular']},

		/* Crazy Dependancy Graph */
		'epochdb': { deps: [
				'lodash',
				'angular',
				'angular-ui-router',

				'epochdb-resources',
				'epochdb-controllers',
				'epochdb-directives',
				'epochdb-filters'
			]},
		'epochdb-resources': { deps: [
				'epochdb-resources-items'
			]},
		'epochdb-controllers': { deps: [
				'epochdb-controllers-home',
				'epochdb-controllers-search',
				'epochdb-controllers-list',
				'epochdb-controllers-detail'
			]},
		'epochdb-directives': { deps: [
				'epochdb-directives-items',
				'epochdb-directives-assets',
				'epochdb-directives-foundation'
			]},
		'epochdb-filters': { deps: [
				'epochdb-filters-string'
			]}

	}
  });


require([
		'lodash',
		'angular',
		'angular-ui-router',

		'epochdb'

	]);
