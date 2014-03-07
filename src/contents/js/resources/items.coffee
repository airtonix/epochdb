require ['angular', 'lodash', 'epochdb-resources-base'], (angular, _, Base) ->

	angular.module 'epochdb.resources.items', []
		.factory 'ItemModel', [
			'$http',
			($http) ->
				class Item extends Base
					constructor: (data) ->
						@type = 'item'
						@source = "api/item/data.json"
						@$http = $http
						super data

					requires: (type) ->
						if(_.has @, "depends")
							if(!type)
								@.depends
							@.depends[type]

				new Item

		]
