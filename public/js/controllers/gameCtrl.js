angular.module('gameCollection').controller('gameCtrl', function($scope, $stateParams, $state, gameService) {

    $scope.getAllGames = function() {
        gameService.getAllGames().then(function(res) {
            $scope.games = res.data
        })
    }
    $scope.getAllGames();

    $scope.addGame = function() {
        var game = $scope.game = [];

        $scope.game.push($scope.image, $scope.title, $scope.genre, $scope.released, $scope.summary)
        gameService.addGame(game).then(function() {
            $state.go('games');
        })
    }

    $scope.searchFilter = {
        genre: '',
        title: '',
        dateReleased: '',
        likes: ''
    }
    $scope.searchGames = function(searchFilter) {
        for (var obj in searchFilter) {
            if (searchFilter[obj] !== '') {
              var searchBy = obj + "=" + searchFilter[obj]
              gameService.searchGames(searchBy).then(function(res) {
                  $scope.games = res.data
              })
            }
        }

    }
})
