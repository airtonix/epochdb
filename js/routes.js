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



			// .config(['$stateProvider',
			// 		 '$urlRouterProvider',
			// 		 'Assets',
			// 		function ($stateProvider, $urlRouterProvider, Assets) {
			// 			$urlRouterProvider.otherwise('/');

			// 			$stateProvider
			// 				.state('splash', {
			// 					url:'/',
			// 					template: "<div data-ui-view></div>"
			// 				})
			// 				.state('splash.home', {
			// 					url:'',
			// 					templateUrl: Assets.template('home.html')
			// 				})
			// 				.state('item-list',{
			// 					url: '/items/{query:[\w-]+}',
			// 					templateUrl : Assets.template('list.html')
			// 				})
			// 				.state('item-detail',{
			// 					url: '/item/{id:[\d]+}',
			// 					templateUrl : Assets.template('detail.html')
			// 				})
			// 				.state('page',{
			// 					url: '/{slug:[\w]+}',
			// 					templateUrl : function(stateParams){
			// 						return Assets.template('pages/'+stateParams.slug+'.html')
			// 					}
			// 				})
			// 	}])
})	