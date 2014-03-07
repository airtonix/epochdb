require ['angular', 'lodash', 'epochdb-resources-base'], (angular, _, Base) ->

	angular.module 'epochdb.resources.recipes', []
		.factory 'RecipeModel', [
			'$http',
			($http) ->
				class Recipe extends Base
					constructor: (data) ->
						@type = 'recipe'
						@source = "api/recipe/data.json"
						@$http = $http
						super data

					requires: (type) ->
						if _.has @, "depends"
							if !type
								@.depends
							@.depends[type]

				new Recipe

		]
