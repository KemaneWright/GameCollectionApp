angular.module('gameCollection', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('friends', {
      url: '/friends',
      templateUrl: './views/friends.html'
    })
    .state('games', {
      url: '/games',
      templateUrl: './views/games.html',
      controller: 'gameCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/login.html'
    })
    $urlRouterProvider
      .otherwise('/friends');
})
