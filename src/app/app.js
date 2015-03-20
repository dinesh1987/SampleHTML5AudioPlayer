angular.module( 'ajith', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ajith.nowPlaying',
  'ui.state',
  'ui.route','commonHeader'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | ngBoilerplate' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
	var gridObj = $("#grid-title");
	var listObj = $("#list-title");
	$("#showGrid").on("click", function(){
	$("#list-title").hide();
	$("#grid-title").show();
	$("#showGrid").addClass('changeColor');
	});
	$("#showList").on("click", function(){
	$("#grid-title").hide();
	$("#list-title").show();
	});
	$("#gridPhoto").on("click", function(){
		
	});
});

