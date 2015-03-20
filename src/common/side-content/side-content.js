angular.module('sideContent', []).directive('sideContent', ['$templateCache',
function($templateCache) {

	return {
		restrict : 'EA',
		template : $templateCache.get("side-content/side-content-template.tpl.html"),
		link : {
			pre : function($scope, element) {
                $scope.contentShow = false;
				$scope.toggle = function($event) {
					var ctrl = $event.currentTarget;
					if ($.trim(ctrl.innerText) == '+') {
						//$("#contentShow").show(1000);
						$scope.contentShow = true; 
						ctrl.innerText = '-';
						$(ctrl).attr('title','Collapse');
					} else {
						//$("#contentShow").hide(1000);
						$scope.contentShow = false; 
						ctrl.innerText = '+';
						$(ctrl).attr('title','Expand;');
					}
				};
				$scope.showSocialPanel = function($event){	
					//audioSrc = $($event.currentTarget).attr("datasrc");			
					var fullContainer = $(".maincontainer");					
					var sideContainer = $(".socialPanel");
					var centerContainer = $("#mainContent");
					var player = $("#jukebox");
					if($(".socialPanel").is(":visible")){
						fullContainer.css("margin-left","auto");
						fullContainer.css("width","940px");						
						centerContainer.css("width","57%");
						player.css("width","47.4%");
						sideContainer.hide(500);
					}
					else{						
						fullContainer.css("margin-left","50px");
						fullContainer.css("width","1350px");						
						sideContainer.show(500);
						centerContainer.css("width","41.3%");
						centerContainer.css("float","left");
						player.css("width","36.4%");
					}
				};	
				
				
				$scope.albums = loadAlbums(3);

				function loadAlbums(size) {
					var albums = [];
					for (var i = 0; i < size; i++) {
						albums.push({
							section : (i + 1),
							src : "../assets/Images/Image" + (i + 1) + ".jpg",
							TrackAndChannel : "Mankatha",
							ConceptName : "Vilayadu Mankatha",
							time : "Played 11:00PM"
						});
					}
					return albums;
				}


				$scope.moreAlbums = loadMoreAlbums(4);

				function loadMoreAlbums(size) {
					var albums = [];
					for (var i = 0; i < size; i++) {
						var j = i;
						if (j === 0) {
							j = 1;
						}
						albums.push({
							section : (i + 1),
							src : "../assets/Images/Image" + (j) + ".jpg",
							trackName : "Salla salla from Aegan ",
							ArtistName : "Ajith"
						});
					}
					return albums;
				}
				
				
				
							var myVideo;
			scope.playPause = function($event) {
				var divid = $event.currentTarget;
				myVideo = $(divid).prev().get(0);
				var hoverDiv = $(divid).get(0);
				if(myVideo !== undefined)
				{
					myVideo.addEventListener('ended', function(evt) {
						$(myVideo).next().children('i').removeClass('icon-pause').addClass('icon-play');
						$(myVideo).next().show();
						myVideo = undefined;
					});
					
					myVideo.addEventListener('progress', function(evt) {
						$(myVideo).next().children('i').removeClass('icon-pause');						
					});
				}
				if(myVideo.paused) {					
					myVideo.play();
					$(hoverDiv).children('i').removeClass("icon-play");
					$(hoverDiv).children('i').addClass("icon-pause");					
				} else {
					myVideo.pause();
					$(hoverDiv).children('i').addClass("icon-play");
					$(hoverDiv).children('i').removeClass("icon-pause");
				}				
			};

			scope.showicon = function($event)
			{
				var vid = $event.currentTarget;
				var mainDiv = $(vid).get(0);				
				$(mainDiv).children('div').show();
				if(myVideo.paused) {
					$(mainDiv).children('div').children('i').addClass("icon-play");
					$(mainDiv).children('div').children('i').removeClass("icon-pause");
				} else {
					$(mainDiv).children('div').children('i').addClass("icon-pause");
					$(mainDiv).children('div').children('i').removeClass("icon-play");
				}
			};
			
			scope.hideicon = function($event)
			{												
				if(myVideo !== undefined){
					var vid = $event.currentTarget;
					var hoverDiv = $(vid).get(0);
					$(hoverDiv).children('div').hide();
				}
			};
				
				
			},
			post : function($scope, element) {
			}
		}
	};
}]);
