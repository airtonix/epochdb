require(["angular"], function(angular){
  angular.module("scrollspy", [])
    .directive('scrollSpy', function($window) {
      return {
        restrict: 'A',
        controller: function($scope) {
          $scope.spies = [];
          $scope.test = 0;
          setTimeout(function() {
            console.log('$scope.test changed');
            $scope.test = 8
          }, 1000)
          this.addSpy = function(spyObj) {
            console.log('scroll added');
            $scope.spies.push(spyObj);
          };
        },
        link: function(scope, elem, attrs) {
          var spyElems = [];
          console.log(scope);
          scope.$watch('spies', function(spies) {
            console.log('$watch', spies);
            for (var _i = 0; _i < spies.length; _i++) {
              var spy = spies[_i];
              if (spyElems[spy.id] == null) {
                spyElems[spy.id] = (elem.find('#' + spy.id));
              }
            }
          }, true);

          $($window).scroll(function() {
            console.log(spyElems);
            var highlightSpy, pos, spy, _i, _len, _ref;
            highlightSpy = null;
            _ref = scope.spies;

            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              spy = _ref[_i];
              spy.out();
              console.log('spy', spy);
              spyElems[spy.id] = spyElems[spy.id].length === 0 ? elem.find('#' + spy.id) : spyElems[spy.id];
              if (spyElems[spy.id].length !== 0) {
                if ((pos = spyElems[spy.id].offset().top) - $window.scrollY <= 0) {
                  spy.pos = pos;
                  if (highlightSpy == null) {
                    highlightSpy = spy;
                  }
                  if (highlightSpy.pos < spy.pos) {
                    highlightSpy = spy;
                  }
                }
              }
            }
            return highlightSpy != null ? highlightSpy["in"]() : void 0;
          });
        }
      };
    })

    .directive('spy', function($location) {
      return {
        restrict: "A",
        require: "^scrollSpy",
        link: function(scope, elem, attrs, scrollSpy) {
          console.log("scrollSpy,", scrollSpy);
          if (attrs.spyClass == null) {
            attrs.spyClass = "active";
          }
          elem.click(function() {
            scope.$apply(function() {
              $location.hash(attrs.spy);
            });
          });
          scrollSpy.addSpy({
            id: attrs.spy,
            in : function() {
              elem.addClass(attrs.spyClass);
            },
            out: function() {
              elem.removeClass(attrs.spyClass);
            }
          });
        }
      };
    })

})
