angular.module('searchListTitle', ['thumbTitle']).directive('searchListTitle', ['$templateCache',
function($templateCache) {
	return {
		restrict : 'EA',
		template : $templateCache.get("search-list/search-list-title-template.tpl.html"),
		link : {
			pre : function($scope, element, attrs) {
				$scope.toggleFavorite = function($event) {
					if($($event.currentTarget).hasClass("icon-heart-empty")){
						$($event.currentTarget).removeClass("icon-heart-empty");
						$($event.currentTarget).addClass("icon-heart");
					}
					else{
						$($event.currentTarget).removeClass("icon-heart");
						$($event.currentTarget).addClass("icon-heart-empty");
					}
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
							TrackAndChannel : "Vilayadu Mankatha CH 01" + i,
							Album : "Mankatha",
							Singer : "SPB",
							name : "Yuvan " + i,
							audiosrc : "../assets/audio/s" + temp + ".mp3"
						});
					}
					return images;
				}


				$scope.ListViewImages = new LoadImages(10);

				var audioSrc = "";
				$scope.playSong = function($event) {
					audioSrc = $($event.currentTarget).attr("datasrc");
					$('#audioElement').remove();
					var audioElement = document.createElement('div');
					var loadProgress = document.createElement('div');
					var playProgress = document.createElement('div');
					audioElement.id="audioElement";
					audioElement.className="minProc";
					loadProgress.appendChild(playProgress);
					audioElement.appendChild(loadProgress);
					playProgress.className = "play-progress";
					loadProgress.className = "load-progress";
					$($event.currentTarget.parentNode.appendChild(audioElement));
					var aud = $('#jukebox .aud').get(0);
					aud.setAttribute('src', audioSrc);
					aud.play();
					
				};
				
			function setClassForSocialPanel (socialPanelId) {
				if(document.getElementById(socialPanelId).children != null && document.getElementById(socialPanelId).children[0] != null && document.getElementById(socialPanelId).children[0].children != null && document.getElementById(socialPanelId).children[0].children[0] != null) {
					document.getElementById(socialPanelId).children[0].children[0].className += " " + $('#' + socialPanelId).attr('listType');
				}  
			}
			setClassForSocialPanel ('list-title');
			setClassForSocialPanel ('list-title-more');			
			},
			post : function($scope, element, attrs) {
				//$(".list-title").scrollable({ vertical: true, mousewheel: true });
			}
		}
	};
}]);
