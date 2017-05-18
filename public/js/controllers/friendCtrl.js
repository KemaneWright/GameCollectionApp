angular.module('gameCollection').controller('friendCtrl', function($scope, $state, $location, $stateParams, gameService, friendService) {

    $scope.getFriends = function() {
        friendService.getFriends().then(function(res) {
            $scope.friends = res.data
        })
    }
    $scope.getFriends();
})
