angular.module('gridTitle', ['thumbTitle']).directive('gridTitle', ['$templateCache',
function($templateCache) {

	return {
		restrict : 'EA',
		template : $templateCache.get("grid-title/grid-title-template.tpl.html"),
		link : {
			pre : function($scope, element, attrs) {
			// I flag the visibility of the big box.
			$scope.isBoxVisible = true;

			// Build up a large set of images, all with unique
			// SRC values so that the browser cannot cache them.
			$scope.photos = buildPhotoSet(76);

			// ---
			// PUBLIC METHODS.
			// ---

			// I change the SRC values of the existing photo set
			// in order to examine how changes to source will
			// affect rendered / non-rendered images.
			$scope.changeSource = function() {

				var now = (new Date()).getTime();

				// Update all SRC attribute to point to "1.jpg".
				for(var i = 0; i < $scope.photos.length; i++) {

					var photo = $scope.photos[i];

					photo.src = photo.src.replace(/\d\./i, "1.");

				}

			};
			
			// I clear the current photo set.
			$scope.clearPhotos = function() {

				$scope.photos = [];

			};
			// I hide the big box, allowing the document to change
			// its dimensions (and possibly show more images than
			// were visible beforehand).
			$scope.hideBox = function() {

				$scope.isBoxVisible = false;

			};
			// I rebuild the entire photo set.
			$scope.rebuildSet = function() {

				$scope.photos = buildPhotoSet(20);

			};
			// ---
			// PRIVATE METHODS.
			// ---

			// I return a photo set of the given size. Each photo
			// will have a unique SRC value.
			function buildPhotoSet(size) {

				var photos = [];
				var now = (new Date()).getTime();

				for(var i = 0; i < size; i++) {

					var index = i%5;
					//( ( i % 3 ) + 1 );
					var version = (now + i);

					photos.push({
						id : (i + 1),
						src : ("assets/Images/Img-" + index + ".jpg?v=" + version),
						name : "Yuvan Shankar "+i,
						audiosrc: "assets/audio/s"+index+".mp3"
					});

				}

				return (photos);

	}
		},
			post: function($scope, element, attrs) {
			$(".grid-title").scrollable({ vertical: true, mousewheel: true });
			}
			}
			};
}]);
