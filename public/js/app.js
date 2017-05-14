angular.module('gameCollection', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('addGame', {
      url: '/addGame',
      templateUrl: './views/addGame.html',
      controller: 'gameCtrl'
    })
    .state('games', {
      url: '/games',
      templateUrl: './views/games.html',
      controller: 'gameCtrl'
    })
    .state('details', {
            url: '/details/:id',
            templateUrl: '/views/gameDetails.html',
            controller: 'gameCtrl'
        })










    $urlRouterProvider
      .otherwise('/games');
})
