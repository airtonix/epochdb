require ['angular', 'lodash', 'epochdb-resources-base'], (angular, _, Base) ->

  angular.module 'epochdb.resources.items', []
    .factory 'ItemModel', [
        '$http',
        ($http) ->
            class Item extends Base
                constructor: (data) ->
                    @prefix = "api/item"
                    @suffix = "/data.json"
                    @$http = $http
                    super data

                requires: (type) ->
                    if(_.has @, "depends")
                        if(!type)
                            @.depends
                        @.depends[type]

                usedby: ->
                    if (_.has @, "usedBy")
                        _.keys(@usedby).length > 0
                    false

            new Item

    ]