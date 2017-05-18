angular.module('gameCollection').service('friendService', function($http) {

    this.getFriends = function() {
        return $http.get('/api/friends')
    }

    this.getFriendProfile = function(id) {
        return $http({
            method: 'GET',
            url: "/api/friends/" + id
        }).then(function(response) {
            return response.data;
        })
    }




})
