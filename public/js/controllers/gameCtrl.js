angular.module('gameCollection').controller('gameCtrl', function($scope, $stateParams, $state, gameService) {

$scope.getAllGames = function() {
  gameService.getAllGames().then(function(res) {
    $scope.games = res.data
  })
}
$scope.getAllGames();

  gameService.getDetails($stateParams.id).then(function(response){
    $scope.game = response[0];
    console.log('yo', response[0])
  })






})
