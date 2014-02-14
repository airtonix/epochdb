require(['angular'], function(angular){

		angular.module('epochdb.routes', ['ngRoute',
										  'ngAnimate',
										  'route-segment',
										  'view-segment',
										  'epochdb.config'
										 ])

			.config(['$routeSegmentProvider',
					 '$routeProvider',
					 'AssetsProvider',
					function ($routeSegmentProvider, $routeProvider, AssetsProvider) {
						var templateHome = AssetsProvider.template('home.html'),
							templateList = AssetsProvider.template('list.html'),
							templateDetail = AssetsProvider.template('detail.html'),
							templateLoading = AssetsProvider.template('partial/loading.html');

						$routeSegmentProvider.options.autoLoadTemplates = true;
						$routeSegmentProvider.options.strictMode = true;
						$routeSegmentProvider
							.when('/', 'home')
							.when('/items', 'item-list')
							.when('/items/:query', 'item-list')
							.when('/item/:id', 'item-detail')
							.when('/:slug', 'page', {reloadOnSearch: false})
							.segment('home', {
									templateUrl: templateHome
								})
							.segment('item-list', {
									templateUrl: templateList,
									controller: "ItemListController"
								})
							.segment('item-detail', {
									templateUrl: templateDetail,
									controller: "ItemDetailController",
									dependencies: ['id', ],
									untilResolved: {
										templateUrl: templateLoading
									}
								})
							.segment('page', {
									templateUrl: AssetsProvider.template("page.html"),
									dependencies: ['slug', ],
									controller: ["$scope", "$routeParams", function ($scope, $routeParams){
										$scope.PageUrl = AssetsProvider.template("pages/"+$routeParams.slug+".html");
									}]
								});

						$routeProvider.otherwise({redirectTo: '/'}); 
				}])

})