angular.module('commonHeader', [])
.directive('commonHeader', ['$templateCache',function($templateCache) {

  return {
    restrict: 'EA',
    template: $templateCache.get("common-header/common-header-template.tpl.html"),
    link: function(scope, element, attrs) {
    }
  };
  }]);