define ['lodash'], (_) ->

    class Base
        @source = null
        @objects = null
        @$http = null

        constructor: (data) ->
            if data
                _.extend @, data

            else if @$http and @source
                @objects = @$http.get(@source).then (response) -> response.data

        all: (query) ->
            self = @
            @objects.then (data) ->
                if not query or _.isString query
                    output = data
                else if _.isObject query
                    output = _.query data, query
                else
                    output = data

                _.map output, (item) ->
                    item.type = self.type
                    item

        one: (ref) ->
            @all {id: ref }
                .then (data) ->
                    data[0]

        values: (key) ->
            @all().then (data) ->
                plucked = _.pluck(data, key)
                flattened = _.flatten plucked
                compacted = _.compact flattened
                _.unique compacted

