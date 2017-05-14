angular.module('gameCollection').controller('gameCtrl', function($scope, $stateParams, $state, gameService) {


    $scope.getAllGames = function() {
        gameService.getAllGames().then(function(res) {
            $scope.games = res.data
        })
    }
    $scope.getAllGames();


    function FBfun() {
        setTimeout(function() { // I'm executing this just slightly after step 2 completes
            window.fbAsyncInit = function() {
                FB.init({
                    appId: '313285279091908',
                    xfbml: true,
                    version: 'v2.9'
                });
            };

            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

            FB.XFBML.parse(); // This is key for all this to work!
        }, 100);
    }
    FBfun()



    gameService.getDetails($stateParams.id).then(function(response) {
        $scope.game = response[0];
        // console.log('state', $state)
        // console.log('state', $stateParams)
        $scope.stateToPost = "http://localhost:2469/#!/" + $state.current.name + "/" + $stateParams.id
        console.log($scope.stateToPost)
        // console.log('yo', $scope.game)
    })

    $scope.refresh = function() {
        gameService.getDetails($stateParams.id).then(function(response) {
            $scope.game = response[0];
            // console.log('yo', $scope.game)
        })
    }


    $scope.addGame = function() {
        console.log('Creating new game')
        var game = $scope.game = [];

        $scope.game.push($scope.image, $scope.title, $scope.genre, $scope.released, $scope.summary)
        console.log('new game', game)
        gameService.addGame(game)
    }


    $scope.removeGame = function(id) {
        console.log('Removing game');
        gameService.removeGame(id).then(function(response) {
            console.log(response)
            $state.go('games');
        })
    }


    $scope.like = function(id) {
        gameService.like(id).then(function(response) {
            var game = response.data[0]
            // console.log('game', game)
            $scope.getAllGames();
            if ($state.current.name === 'details') {
                $scope.refresh()
            }
        })
    }
    $scope.dislike = function(id) {
        gameService.dislike(id).then(function(response) {
            var game = response.data[0]
            // console.log('game', game)
            $scope.getAllGames();
            if ($state.current.name === 'details') {
                $scope.refresh()
            }
        })
    }



})
