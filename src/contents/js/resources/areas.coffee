require ['angular', 'lodash', 'epochdb-resources-base'], (angular, _, Base) ->

	angular.module 'epochdb.resources.areas', []
		.factory 'AreaModel', [
			'$http',
			($http) ->
				class Area extends Base
					constructor: (data) ->
						@type ='area'
						@source = "api/area/data.json"
						@$http = $http
						super data

					requires: (type) ->
						if _.has @, "depends"
							if !type
								@.depends
							@.depends[type]

				new Area

		]
