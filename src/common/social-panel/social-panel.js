angular.module('socialPanel', []).directive('socialPanel', ['$templateCache',
function($templateCache) {
	return {
		restrict : 'EA',
		template : $templateCache.get("social-panel/social-panel-template.tpl.html"),
		link : function(scope, element, attrs) {
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
							
			setClassForSocialPanel ('social-panel-landscape-left');
			setClassForSocialPanel ('social-panel-portrait-image');
			setClassForSocialPanel ('social-panel-portrait-video');
			setClassForSocialPanel ('social-panel-landscape-top');
			
			function setClassForSocialPanel (socialPanelId) {
				if(document.getElementById(socialPanelId).children != null && document.getElementById(socialPanelId).children[0] != null && document.getElementById(socialPanelId).children[0].children != null && document.getElementById(socialPanelId).children[0].children[0] != null) {
					document.getElementById(socialPanelId).children[0].children[0].className = $('#' + socialPanelId).attr('panelType');
				}  
			}
			
		}
	};
}]);
