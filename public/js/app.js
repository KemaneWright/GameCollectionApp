angular.module('gameCollection', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('addGame', {
            url: '/addGame',
            templateUrl: './views/addGame.html',
            controller: 'gameCtrl',
            resolve: {
                user: function(authService, $state) {
                    return authService.getCurrentUser()
                        .then(function(response) {
                            if (!response.data)
                                $state.go('login');
                            return response.data;
                        })
                        .catch(function(err) {
                            $state.go('login');
                            alert('Please Login');
                        });
                }
            }
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
        .state('login', {
            url: '/login',
            templateUrl: '/views/login.html',
            controller: 'authCtrl'
        })
        .state('friends', {
          url: '/friends',
          templateUrl: '/views/friends.html',
          controller: 'friendCtrl'
        })








    $urlRouterProvider
        .otherwise('/login');
})
