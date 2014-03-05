require [
		'angular',
		'lodash',
		'epochdb-resources-base',
		'epochdb-resources-recipes',
		'epochdb-resources-items',
		'epochdb-resources-areas',
	], (angular, _) ->
		angular.module 'epochdb.resources', [
			'epochdb.resources.recipes',
			'epochdb.resources.items',
			'epochdb.resources.areas',
		]
		.factory 'Models', [
			'$q', 'AreaModel', 'ItemModel', 'RecipeModel',
			($q, AreaModel, ItemModel, RecipeModel) ->
				class ModelManager
					models:
						area: AreaModel
						item: ItemModel
						recipe: RecipeModel

					getModel: (ref) ->
						if "/" in ref
							bits = ref.split("/")
							ref = bits[0]

						@models[ref]

					all: (query, callback) ->
						deferred = $q.defer()
						promises = []
						output = []
						_.forEach @models, (model) ->
							promises.push model.all()

						$q.all(promises).then (results) ->
							deferred.resolve _.flatten results

						deferred.promise.then (data)->
							callback data


				new ModelManager
		]
