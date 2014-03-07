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

		values: (keys) ->
			@all().then (data) ->
				values = _.flatten _.map keys, (key) ->
					_.pluck data, key
				_.unique _.map _.compact(values), (word) ->
					word.toLowerCase()

		usedIn: (ref)->
			@all().then (data) ->
				result = _.map data, (item) ->
					deps = _.flatten _.map _.values(item.depends), (keys) ->
						_.keys keys
					if _.contains deps, ref
						item.id
				_.compact _.uniq result