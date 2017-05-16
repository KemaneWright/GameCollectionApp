angular.module('gameCollection').service('friendService', function($http) {

  this.getFriends = function() {
      return $http.get('/api/friends')
  }






})
