angular.module('gameCollection').service('gameService', function($http) {

    this.getAllGames = function() {
      return $http({
        method: 'GET',
        url: '/api/games',
      })
    }

    this.getDetails = function(id) {
        return $http({
            method: 'GET',
            url: "/api/games/" + id
        }).then(function(response) {
            return response.data;
        })
    }

    this.addGame = function(game) {
      // console.log('service', game)
        return $http({
            method: 'POST',
            url: '/api/games',
            data: {
                image: game[0],
                title: game[1],
                genre: game[2],
                released: game[3],
                summary: game[4]
            }
        })
    }

    this.removeGame = function(id) {
      return $http({
        method: 'DELETE',
        url: '/api/games/delete/' + id
      });
    }

    this.like = function(id) {
      return $http({
        method: 'PUT',
        url: '/api/games/like/' + id
      })
    }
    this.dislike = function(id) {
      return $http({
        method: 'PUT',
        url: '/api/games/dislike/' + id
      })
    }

    this.searchGames = function(searchFilter) {
      return $http({
        method: 'GET',
        url: '/api/gamez?' + searchFilter,
        data: {
          searchFilter
        }
      }).then(function(response) {
        return response;
      });
    }

})
