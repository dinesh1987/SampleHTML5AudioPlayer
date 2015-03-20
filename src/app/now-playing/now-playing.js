angular.module( 'ajith.nowPlaying', [
  'ui.state',
  'ui.bootstrap','headerPlayer','searchListTitle', 'socialPanel','sideContent'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'nowPlaying', {
    url: '/now-playing',
    views: {
      "main": {
        controller: 'nowPlayingCtrl',
        templateUrl: 'now-playing/now-playing.tpl.html'
      }
    }
  });
})

.controller( 'nowPlayingCtrl', function AboutCtrl( $scope ) { 
  
})

;
