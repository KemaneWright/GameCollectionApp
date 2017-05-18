angular.module('gameCollection').controller('detailsCtrl', function($scope, $state, $location, $stateParams, gameService, friendService) {

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

////////// AUTO FIRING SERVICE FUNCTIONS //////////////
    friendService.getFriendProfile($stateParams.id).then(function(response) {
        $scope.friend = response.user
        $scope.friendsGames = response.games
    })
    gameService.getDetails($stateParams.id).then(function(response) {
        $scope.game = response[0];
        $scope.stateToPost = "http://localhost:2469/#!/" + $state.current.name + "/" + $stateParams.id
    })
////////////////////////////////////////////////////////

    $scope.removeGame = function(id) {
        gameService.removeGame(id).then(function(response) {
            alert(response.data)
            $state.go('games');
        })
    }

    $scope.refresh = function() {
        friendService.getFriendProfile($stateParams.id).then(function(response) {
            $scope.friendsGames = response.games
        })
    }

    $scope.detailRefresh = function() {
        gameService.getDetails($stateParams.id).then(function(response) {
            $scope.game = response[0];
            $scope.stateToPost = "http://localhost:2469/#!/" + $state.current.name + "/" + $stateParams.id
        })
    }

    $scope.like = function(id) {
        gameService.like(id).then(function(response) {
            var game = response.data[0]
            $scope.refresh()
            $scope.detailRefresh()
        })
    }
    $scope.dislike = function(id) {
        gameService.dislike(id).then(function(response) {
            var game = response.data[0]
            $scope.refresh()
            $scope.detailRefresh()
        })
    }
    $scope.back = function(id) {
        $location.path('/friends/' + id)
    }

})
