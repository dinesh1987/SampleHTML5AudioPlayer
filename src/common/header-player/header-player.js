angular.module('headerPlayer', []).directive('headerPlayer', ['$templateCache',
function($templateCache) {

	return {
		restrict : 'EA',
		template : $templateCache.get("header-player/header-player-template.tpl.html"),
		link : {
			pre : function($scope, element) {

				var aud = $('#jukebox .aud').get(0);
				aud.pos = -1;
				//hardcode value - replaced once updated from list view
				//$scope.display = true;
				//$scope.audiosrc = "assets/audio/s0.mp3";
				//if ($scope.display) {
				//	$('#jukebox .controls').show();
				//	aud.autoplay = false;
					var bar = $('#jukebox .loader').get(0);
					bar.addEventListener('click', setTrack, false);
				//} else {
				//	$('#jukebox .controls').hide();
				//	aud.autoplay = true;
				//	aud.setAttribute('src', $scope.audiosrc);
				//	aud.load();
				//	aud.play();
				//}
				var playlist = [{
					url : "../assets/audio/s0.mp3",
					title : "Holding Back"
				}, {
					url : "../assets/audio/s1.mp3",
					title : "Gravel Road Requiem"
				}, {
					url : "../assets/audio/s2.mp3",
					title : "More Good Days"
				}];

				$scope.play = function($event) {
					if (aud.src !== undefined && aud.src !== '') {
						var iconCap = $event.currentTarget;
						if ($(iconCap).children().attr('class') == 'play icon-play') {
							$(iconCap).children().removeClass('icon-play').addClass('icon-pause');
							$(iconCap).attr('title', 'Pause');
							if (aud.pos < 0) {
								//aud.pause();
								//aud.pos++;
								//if (aud.pos == playlist.length) {
								//	aud.pos = 0;
								//}
								//aud.setAttribute('src', $scope.audiosrc);
								//playlist[aud.pos].url);
								aud.play();
							} else {
								aud.play();
							}
						} else {
							$(iconCap).children().removeClass('icon-pause').addClass('icon-play');
							$(iconCap).attr('title', 'Play');
							aud.pause();
						}
					}
				};
				$scope.pause = function($event) {
					aud.pause();
				};
				$scope.mute = function($event) {
					var iconCap = $event.currentTarget;
					if ($(iconCap).children().attr('class') == 'icon-volume-up') {
						$(iconCap).children().removeClass('icon-volume-up').addClass('icon-volume-off');
						$(iconCap).attr('title', 'Unmute');
						aud.muted = true;
					} else {
						$(iconCap).children().removeClass('icon-volume-off').addClass('icon-volume-up');
						$(iconCap).attr('title', 'Mute');
						aud.muted = false;
					}
				};
				$scope.forward = function($event) {
					var defaultFwdValue = 15;
					var aud = $('#jukebox .aud').get(0);
					aud.currentTime = aud.currentTime + defaultFwdValue;

				};
				$scope.setTrackPosition = function($event) {
					var obj = $event;
					var songSliderWidth = getOffsetWidth(obj);
					var evtobj = window.event ? event : e;
					clickLocation = evtobj.layerX - obj.offset().left;
					var percentage = (clickLocation / songSliderWidth);
					//Sets the song location with the percentage.
					aud.currentTime = aud.duration * percentage;
				};
				// JQuery doesn't seem to like binding to these HTML 5
				// media events, but addEventListener does just fine

				aud.addEventListener('progress', function(evt) {
					var width = parseInt($('#jukebox').css('width'), 10);
					var percentLoaded = Math.round(evt.loaded / evt.total * 100);
					var barWidth = Math.ceil(percentLoaded * (width / 100));
					$('#jukebox .load-progress').css('width', barWidth);
					$("#jukebox .play").removeClass('icon-play').addClass('icon-pause');
					//individual progressbar
					var progWidth = parseInt($('#audioElement').css('width'), 10);
					var progBarWidth = Math.ceil(percentLoaded * (progWidth / 100));
					$('#audioElement .load-progress').css('width', progBarWidth);

				});
				aud.addEventListener('ended', function(evt) {
					$("#jukebox .play").removeClass('icon-pause').addClass('icon-play');
				});

				aud.addEventListener('timeupdate', function(evt) {
					var divWidth = $('#jukebox').css('width');
					var width = parseInt(divWidth, 10);
					var percentPlayed = Math.round(aud.currentTime / aud.duration * 100);
					var barWidth = Math.ceil(percentPlayed * (width / 100));
					var currTime = Math.floor(aud.currentTime);
					var duration = Math.floor(aud.duration);
					//$('#jukebox .curTime').html(formatSecondsAsTime(currTime));
					var vr1 = formatSecondsAsTime(currTime);
					var vr2 = '';
					if (isNaN(duration)) {
						//$('#jukebox .duration').html('00:00');
						vr2 = '00:00';
					} else {
						//$('#jukebox .duration').html(formatSecondsAsTime(duration));
						vr2 = formatSecondsAsTime(duration);
					}
					$('#jukebox .curTime').html(vr1 + '/' + vr2);
					$('#jukebox .play-progress').css('width', barWidth);
					//individual progressbar
					var progWidth = $('#audioElement').css('width');
					var pWidth = parseInt(progWidth, 10);
					var progBarWidth = Math.ceil(percentPlayed * (pWidth / 100));
					$('#audioElement .play-progress').css('width', progBarWidth);

				});

				function setTrack(e) {
					var aud = $('#jukebox .aud').get(0);
					var mouseX = e.pageX - $('#jukebox .loader').offset().left;
					var barSize = parseInt($('#jukebox').css('width'), 10);
					var newtime = mouseX * aud.duration / barSize;
					aud.currentTime = newtime;
					$('#jukebox .play-progress').css('width', mouseX);
					//aud.play();
				}

				function formatSecondsAsTime(secs, format) {
					var hr = Math.floor(secs / 3600);
					var min = Math.floor((secs - (hr * 3600)) / 60);
					var sec = Math.floor(secs - (hr * 3600) - (min * 60));

					if (min < 10) {
						min = "0" + min;
					}
					if (sec < 10) {
						sec = "0" + sec;
					}

					return min + ':' + sec;
				}

			},
			post : function($scope, element) {
			}
		}
	};
}]);
