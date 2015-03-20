angular.module('listTitle', ['thumbTitle']).directive('listTitle', ['$templateCache',
function($templateCache) {
	return {
		restrict : 'EA',
		template : $templateCache.get("list-title/list-title-template.tpl.html"),
		link : 
		{
		pre: function($scope, element, attrs) {
		$scope.toggleFavorite = function($event){
		$($event.currentTarget).toggleClass("icon-heart-empty");
		};
		function LoadImages(noOfImgs) {
				var images = [];
				var temp = 1;
				for(var i = 1; i <= noOfImgs; i++) {
					if(i > 3) {
						if(i % 3 == 1) {
							temp = 1;
						} else if(i % 3 == 2) {
							temp = 2;
						} else if(i % 3 === 0) {
							temp = 3;
						}
					} else {
						temp = i;
					}
					images.push({
						id : (i),
						src : "../assets/Images/Image" + temp + ".jpg",
						TrackAndChannel : "Vilayadu Mankatha CH 56" + i,
						Album : "Mankatha",
						Singer : "SPB",
						name : "Yuvan "+i,
						audiosrc: "../assets/audio/s"+temp+".mp3"
					});
				}
				return images;
			}
			$scope.ListViewImages = new LoadImages(10);
			var audioSrc="";
			$scope.playSong = function($event){	
				audioSrc = $($event.currentTarget).attr("datasrc");			
				$("#audioPlayer")[0].src=audioSrc;
				$("#audioPlayer")[0].play();
			};			
		},
		post: function($scope, element, attrs) {
			//$(".list-title").scrollable({ vertical: true, mousewheel: true });
		}
		}
	};
}]);
