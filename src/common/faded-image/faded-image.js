angular.module('fadedImage', [])
.directive('fadedImage', ['$templateCache',function($templateCache) {

  return {
    restrict: 'EA',
    template: $templateCache.get("faded-image/faded-image-template.tpl.html"),
    link: function(scope, element, attrs) {
    }
  };
  }]);