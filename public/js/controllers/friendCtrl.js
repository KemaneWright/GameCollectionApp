angular.module('gameCollection').controller('friendCtrl', function($scope, friendService) {


  $scope.getFriends = function() {
      friendService.getFriends().then(function(res) {
          $scope.friends = res.data
          console.log('friends ', $scope.friends)
      })
  }
  $scope.getFriends();



})
