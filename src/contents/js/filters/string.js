require(['angular', 'marked' ], function (angular, marked){

	angular.module('epochdb.filters.string', [])

		.filter("lower", function (){
			return function (value){
				return value.lower();
			}
		})
		.filter("length", function (){
			return function (value){
				if(value) return value.length;
				return value;
			}
		})
		.filter("slugify", function (){
			return function (value){
				return value?value.replace(".", "-"):""
			}
		})

		.directive('marked', [function () {
				return {
					restrict: 'AE',
					replace: true,
					scope: {
						opts: '=',
						marked: '='
					},
					link: function (scope, element, attrs) {
						function render(value) {
							output = marked(value || '', scope.opts || null);
							element.html(output);
						}
						render(scope.marked || element.text() || '');
						if (attrs.marked) {
							scope.$watch('marked', render);
						}

					}
				};
			}])
});