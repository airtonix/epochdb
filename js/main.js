require.config({
	paths: {
		'angular': '../vendor/angular/angular',
		'angular-route': '../vendor/angular-route/angular-route',
		'angular-resource': '../vendor/angular-resource/angular-resource',
		'angular-ui-router': '../vendor/angular-ui-router/release/angular-ui-router.min',
		'underscore': '../vendor/underscore/underscore',
			'underscore.string': '../vendor/underscore.string/dist/underscore.string.min',

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
		'underscore': {
			exports: '_',
			deps: ['underscore.string'],
			init: function(UnderscoreString) {
				_.mixin(UnderscoreString);
			}
		},
		'angular': { exports: 'angular' },
		'angular-resource': { deps: ['angular']},
		'angular-ui-router': { deps: ['angular']},


		/* Crazy Dependancy Graph */
		'epochdb': { deps: [
				'angular',
				'underscore',
				'angular-ui-router',
				'angular-resource',

				'epochdb-resources',
				'epochdb-controllers',
				'epochdb-directives',
				'epochdb-filters'
			]},
		'epochdb-resources': { deps: [
				'epochdb-resources-items'
			]},
		'epochdb-resources-items': { deps: [
				'angular-resource'
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
		'underscore',
		'angular',
		'angular-resource',
		'angular-ui-router',

		'epochdb'

	]);
