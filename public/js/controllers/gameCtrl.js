angular.module('gameCollection').controller('gameCtrl', function($scope, $stateParams, $state, gameService) {

$scope.getAllGames = function() {
  gameService.getAllGames().then(function(res) {
    $scope.games = res.data
  })
}
$scope.getAllGames();

})
