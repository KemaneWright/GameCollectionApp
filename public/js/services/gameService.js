angular.module('gameCollection').service('gameService', function($http, $state) {

  this.getAllGames = function() {
    return $http.get('/api/games')
  }
})
