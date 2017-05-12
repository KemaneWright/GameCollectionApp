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
    .state('details', {
            url: '/details/:id',
            templateUrl: '/views/gameDetails.html',
            controller: 'gameCtrl'
        })










    $urlRouterProvider
      .otherwise('/friends');
})
