require.config
	paths:
		'angular': '../vendor/angular/angular'
		'angular-route': '../vendor/angular-route/angular-route.min'
		'angular-animate': '../vendor/angular-animate/angular-animate.min'
		'angular-route-segment': '../vendor/angular-route-segment/build/angular-route-segment.min'
		'angular-touch': '../vendor/angular-touch/angular-touch.min'
		'angular-sanitize': '../vendor/angular-sanitize/angular-sanitize'
		'angular-google-analytics': '../vendor/angular-google-analytics/src/angular-google-analytics'

		'lodash': '../vendor/lodash/dist/lodash.underscore.min'
		'marked': '../vendor/marked/lib/marked'
		'underscore-query': '../vendor/underscore-query/underscore-query'
		'epochdb': 'app'
		'epochdb-routes': 'routes'
		'epochdb-config': 'config'
		'epochdb-templates': 'templates'
		'epochdb-directives': 'directives'
		'epochdb-directives-assets': 'directives/assets'
		'epochdb-directives-search': 'directives/search'
		'epochdb-directives-calculator': 'directives/calculator'
		'epochdb-directives-lists': 'directives/lists'
		'epochdb-directives-tabs': 'directives/tabs'
		'epochdb-directives-site': 'directives/site'
		'epochdb-directives-foundation': 'directives/foundation'
		'epochdb-directives-wintersmith': 'directives/wintersmith'
		'epochdb-directives-scrollspy': 'directives/scrollspy'

		'epochdb-controllers': 'controllers'
		'epochdb-controllers-app': 'controllers/app'
		'epochdb-controllers-home': 'controllers/home'
		'epochdb-controllers-search': 'controllers/search'
		'epochdb-controllers-list': 'controllers/list'
		'epochdb-controllers-detail': 'controllers/detail'

		'epochdb-filters': 'filters'
		'epochdb-filters-string': 'filters/string'

		'epochdb-resources': 'resources'
		'epochdb-resources-base': 'resources/base'
		'epochdb-resources-areas': 'resources/areas'
		'epochdb-resources-items': 'resources/items'
		'epochdb-resources-recipes': 'resources/recipes'

	shim :
		'lodash': exports: '_'
		'underscore-query':  deps: [ 'lodash']
		'angular':  exports: 'angular'
		'angular-animate':  deps: ['angular']
		'angular-touch':  deps: ['angular']
		'angular-sanitize':  deps: ['angular']
		'angular-google-analytics':  deps: ['angular']
		'angular-route':  deps: ['angular']
		'angular-route-segment':  deps: [
				'angular'
				'angular-route'
				]
		'epochdb':  deps: [
				'lodash'
				'angular'
				'angular-route'
				'angular-touch'
				'angular-sanitize'
				'angular-route-segment'
				'angular-animate'
				'angular-google-analytics'

				'epochdb-templates'
				'epochdb-config'
				'epochdb-routes'
				'epochdb-resources'
				'epochdb-controllers'
				'epochdb-directives'
				'epochdb-filters'
			]
		'epochdb-resources':  deps: [
				'epochdb-resources-base'
				'epochdb-resources-areas'
				'epochdb-resources-items'
				'epochdb-resources-recipes'
			]

		'epochdb-controllers':  deps: [
				'epochdb-controllers-app'
				'epochdb-controllers-home'
				'epochdb-controllers-search'
				'epochdb-controllers-list'
				'epochdb-controllers-detail'
			]
		'epochdb-directives':  deps: [
				'epochdb-directives-search',
				'epochdb-directives-lists',
				'epochdb-directives-calculator',
				'epochdb-directives-tabs',
				'epochdb-directives-assets',
				'epochdb-directives-site',
				'epochdb-directives-foundation',
				'epochdb-directives-wintersmith'
			]
		'epochdb-filters':  deps: [
				'epochdb-filters-string',
				'marked'
			]



	urlArgs: "bust=" +  (new Date()).getTime()
	deps: [ 'epochdb' ]
