require ['angular'], (angular) ->

    angular.module 'epochdb.controllers.search', [
        'epochdb.resources'
    ]

    .controller 'SearchController', [
        '$scope',
        'Models',
        ($scope, Models) ->
            $scope.$watch 'Query', (value) ->
                $scope.$emit 'item-query', value

    ]
