require ['angular'], (angular) ->

		angular.module 'epochdb.routes', ['ngRoute',
										  'ngAnimate',
										  'route-segment',
										  'view-segment',
										  'epochdb.config'
										 ]

			.config ['$routeSegmentProvider',
					 '$routeProvider',
					 'AssetsProvider',
					($routeSegmentProvider, $routeProvider, AssetsProvider) ->
						templateHome = AssetsProvider.template 'home.html'
						templateList = AssetsProvider.template 'list.html'
						templateDetail = AssetsProvider.template 'detail.html'
						templateLoading = AssetsProvider.template 'partial/loading.html'

						$routeSegmentProvider.options.autoLoadTemplates = true
						$routeSegmentProvider.options.strictMode = true
						$routeSegmentProvider
							.when '/', 'home'
							.when '/items', 'item-list'
							.when '/items/:query', 'item-list'
							.when '/item/:klass/:id', 'item-detail'
							.when '/:slug', 'page', reloadOnSearch: false

							.segment 'home', templateUrl: templateHome

							.segment 'item-list',
								templateUrl: templateList
								controller: "ItemListController"

							.segment 'item-detail',
								templateUrl: templateDetail
								controller: "ItemDetailController"
								dependencies: ['klass', 'id']
								untilResolved:
									templateUrl: templateLoading

							.segment 'page',
								templateUrl: AssetsProvider.template "page.html"
								dependencies: ['slug', ]
								controller: [ "$scope", "$routeParams", ($scope, $routeParams) ->
									$scope.PageUrl = AssetsProvider.template "pages/#{$routeParams.slug}.html"
									false
								]


						$routeProvider.otherwise redirectTo: '/'
				]
