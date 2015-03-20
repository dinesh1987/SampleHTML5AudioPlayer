angular.module('scrubberPlayer', [])
.directive('scrubberPlayer', ['$templateCache',function($templateCache) {

  return {
    restrict: 'EA',
    template: $templateCache.get("scrubber-player/scrubber-player-template.tpl.html"),
    link: {
    pre : function(scope, element, attrs) {
	scope.scrubbers = [];
    for (var i=0; i < 30; i++) {
    var obj = {};
    obj.name = "Thala";
    obj.info = "Four for one, Biggest Fan";
    obj.desc = "Sure there was a lot of stunning stunt shots in a upcoming movie.";
    scope.scrubbers.push(obj);
    }
    },
    post : function(scope, element, attrs) {
    $(".timeLine").scrollable({ vertical: true, mousewheel: true });
    //$(".timeLine").jScrollPane();
    }
    }
  };
  }]);