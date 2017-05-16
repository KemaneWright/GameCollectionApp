angular.module('gameCollection', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        //////////////// AUTH/LOGIN /////////////////////

        .state('login', {
            url: '/login',
            templateUrl: '/views/login.html',
            controller: 'authCtrl'
        })

        //////////////// GAMES /////////////////////

        .state('games', {
            url: '/games',
            templateUrl: './views/games.html',
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
        .state('details', {
            url: '/details/:id',
            templateUrl: '/views/gameDetails.html',
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

        //////////////// FRIENDS /////////////////////

        .state('friends', {
            url: '/friends',
            templateUrl: '/views/friends.html',
            controller: 'friendCtrl',
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
        .state('friendProfile', {
            url: '/friends/:id',
            templateUrl: '/views/friendProfile.html',
            controller: 'friendCtrl',
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
        .state('friendGame', {
            url: '/details/:id',
            templateUrl: '/views/friendGame.html',
            controller: 'friendCtrl',
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








    $urlRouterProvider
        .otherwise('/login');
})
