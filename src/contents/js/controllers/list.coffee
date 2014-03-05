require ['angular'], (angular) ->

    angular.module 'epochdb.controllers.list', [
    ]

    .controller 'ItemListController', [
        '$scope',
        '$location',
        '$routeParams',
        ($scope, $location, $routeParams) ->
            query = $location.search()
            $scope.Query = $routeParams.query
            $scope.$on 'item-query', (scope, query) ->
                $scope.Query = query
        ]
