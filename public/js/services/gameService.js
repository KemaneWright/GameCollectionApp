angular.module('gameCollection').service('gameService', function($http, $state) {

  this.getAllGames = function() {
    return $http.get('/api/games')
  }

  this.getDetails = function(id){
    return $http ({
        method: 'GET',
        url: "/api/games/" + id
    }).then(function(response){
        return response.data;
    })
}
})
