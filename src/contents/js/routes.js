require(['angular'], function(angular){

		angular.module('epochdb.routes', ['ngRoute',
										  'ngAnimate',
										  'route-segment',
										  'view-segment',
										  'epochdb.config'
										 ])

			.config(['$routeSegmentProvider',
					 '$routeProvider',
					 'Assets',
					function ($routeSegmentProvider, $routeProvider, Assets) {
						var templateHome = Assets.template('home.html'),
							templateList = Assets.template('list.html'),
							templateDetail = Assets.template('detail.html');

						$routeSegmentProvider.options.autoLoadTemplates = true;
						$routeSegmentProvider.options.strictMode = true;
						$routeSegmentProvider
							.when('/', 'home')
							.when('/items', 'item-list')
							.when('/items/:query', 'item-list')
							.when('/item/:id', 'item-detail')
							.when('/:slug', 'page')
							.segment('home', {
									templateUrl: templateHome,
									controller: function ($scope){
										$scope.Test = true;
									}
								})
							.segment('item-list', {
									templateUrl: templateList,
									controller: "ItemListController"
								})
							.segment('item-detail', {
									templateUrl: templateDetail,
									controller: "ItemDetailController"
								})
							.segment('page', {
									templateUrl: Assets.template("page.html"),
									dependencies: ['slug', ],
									controller: ["$scope", "$routeParams", function ($scope, $routeParams){
										$scope.PageUrl = Assets.template("pages/"+$routeParams.slug+".html");
									}]
								});

						$routeProvider.otherwise({redirectTo: '/'}); 
				}])

})	