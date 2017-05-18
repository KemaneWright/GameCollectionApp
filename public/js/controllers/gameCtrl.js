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
        $scope.stateToPost = "http://localhost:2469/#!/" + $state.current.name + "/" + $stateParams.id
    })

    $scope.addGame = function() {
        var game = $scope.game = [];

        $scope.game.push($scope.image, $scope.title, $scope.genre, $scope.released, $scope.summary)
        gameService.addGame(game).then(function() {
            $state.go('games');
        })
    }

    $scope.removeGame = function(id) {
        gameService.removeGame(id).then(function(response) {
            alert(response.data)
            $state.go('games');
        })
    }

  $scope.searchFilter = {
    genre: null,
    title: null,
    dateReleased: null,
    likes: null
  }
    $scope.searchGames = function(searchFilter) {
      console.log('search ', searchFilter)
        gameService.searchGames(searchFilter).then(function(res) {
          console.log('res ', res)
            $scope.games = res.data
        })
    }
})
