require(['angular'], function (angular){

	angular.module('epochdb.directives.site', [])

		.directive('siteHeader', ['Assets', function(Assets){
			// Runs during compile
			return {
				restrict: 'E',
				templateUrl: Assets.template('partial/site-header.html'),
				replace: true,
				link: function($scope, iElm, iAttrs, controller) {}
			};
		}])


		.directive('containsToc', [function(){
			// Runs during compile
			return {
				restrict: 'A',
				controller: function($scope, $element, $attrs, $transclude) {
					$scope.Table = []
					this.addEntry = function(id, element){
						$scope.Table.push({
							"id": id,
							"label": element[0].innerText
						})

					}
				},
			};
		}])

		.directive('tocEntry', [function(){
			return {
				require: '^containsToc',
				restrict: 'A',
				link: function($scope, iElm, iAttrs, controller) {
					controller.addEntry(iAttrs.id, iElm)
				}
			};
		}])

		.directive("sticky", function($window) {
			return {
				link: function(scope, element, attrs) {

					var $win = angular.element($window);

					if (scope._stickyElements === undefined) {
						scope._stickyElements = [];

						$win.bind("scroll.sticky", function(e) {
							var pos = $win.scrollTop();
							for (var i = 0; i < scope._stickyElements.length; i++) {

								var item = scope._stickyElements[i];

								if (!item.isStuck && pos > item.start) {
									item.element.addClass("stuck");
									item.isStuck = true;

									if (item.placeholder) {
										item.placeholder = angular.element("<div></div>")
											.css({
												height: item.element.outerHeight() + "px"
											})
											.insertBefore(item.element);
									}
								} else if (item.isStuck && pos < item.start) {
									item.element.removeClass("stuck");
									item.isStuck = false;

									if (item.placeholder) {
										item.placeholder.remove();
										item.placeholder = true;
									}
								}
							}
						});

						var recheckPositions = function() {
							for (var i = 0; i < scope._stickyElements.length; i++) {
								var item = scope._stickyElements[i];
								if (!item.isStuck) {
									item.start = item.element.offset().top;
								} else if (item.placeholder) {
									item.start = item.placeholder.offset().top;
								}
							}
						};
						$win.bind("load", recheckPositions);
						$win.bind("resize", recheckPositions);
					}

					var item = {
						element: element,
						isStuck: false,
						placeholder: attrs.usePlaceholder !== undefined,
						start: element.offset().top
					};

					scope._stickyElements.push(item);

				}
			};
		});

		.directive("scrollTo", [
			"$window",
			"$location",
			function ($window, $location) {
				return {
					restrict: "AC",
					compile: function() {

						var document = $window.document;

						console.log($location)

						function scrollInto(idOrName, callback) { //find element with the give id of name and scroll to the first element it finds
							if (!idOrName)
								$window.scrollTo(0, 0);
							//check if an element can be found with id attribute
							var el = document.getElementById(idOrName);
							if (!el) { //check if an element can be found with name attribute if there is no such id
								el = document.getElementsByName(idOrName);

								if (el && el.length)
									el = el[0];
								else
									el = null;
							}

							if (el) //if an element is found, scroll to the element
								callback(el)
							callback(false)
							//otherwise, ignore
						}

						return function(scope, element, attr) {
							element.bind("click", function(event) {
								scrollInto(attr.scrollTo, function(target){
									if(!target) return;
									target.scrollIntoView();
									$window.location = "#"+$location.path() + "#" + attr.scrollTo
									$location.path($location.path()).hash("#"+attr.scrollTo)
								});
							});
						};
					}
				};
			}
		]);
})