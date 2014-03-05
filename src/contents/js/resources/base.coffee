define ['lodash'], (_) ->

    class Base
        @prefix = null
        @suffix = null
        @objects = null
        @$http = null

        constructor: (data) ->
            if @$http and @prefix and @suffix
                @objects = @$http.get(@prefix + @suffix).then (response) -> response.data

            if data
                _.extend @, data



        all: (query) ->
            @objects.then (data) ->
                if not query or _.isString query
                    return data
                else if _.isObject query
                    return _.query data, query
                else
                    return data

        one: (ref) ->
            @all {id: ref }
                .then (data) ->
                    data[0]

        values: (key) ->
            @objects.then (data) ->
                plucked = _.pluck(data, key)
                flattened = _.flatten plucked
                compacted = _.compact flattened
                _.unique compacted

