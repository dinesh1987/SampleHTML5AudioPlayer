angular.module('thumbTitle', []).directive('thumbTitle', ['$templateCache',
function($templateCache) {

	return {
		restrict : 'EA',
		scope : {
		title:"@name",
		imagesrc:"@imgsrc",
		audiosrc: "@audiosrc"
		},
		template : $templateCache.get("thumb-title/thumb-title-template.tpl.html"),
		link : function(scope, element, attrs) {
		scope.toggleFavorite = function(event){
		$(element).find(".toggle-favorite").toggleClass("icon-heart-empty");
		};
		scope.playSong = function(){
		$("#audioPlayer")[0].src=scope.audiosrc;
		$("#audioPlayer")[0].play();
		};
		}
	};
}]);
