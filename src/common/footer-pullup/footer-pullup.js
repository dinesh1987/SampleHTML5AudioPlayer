angular.module('footerPullup', []).directive('footerPullup', ['$templateCache',
function($templateCache) {

	return {
		restrict : 'EA',
		template : $templateCache.get("footer-pullup/footer-pullup-template.tpl.html"),
		link : function(scope, element, attrs) {
			$('#scrollup').click(function() {
				if($(this).children().attr('class') == 'icon-angle-up') {
					$('#footerMenu').show(1000);
					$(this).children().removeClass('icon-angle-up').addClass('icon-angle-down');
				} else {
					$('#footerMenu').hide(1000);
					$(this).children().removeClass('icon-angle-down').addClass('icon-angle-up');
				}

			});
		}
	};
}]);
