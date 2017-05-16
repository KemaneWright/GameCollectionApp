angular.module('gameCollection').controller('authCtrl', function(authService, $scope, $state, $stateParams) {
  $scope.user = {
    email: '',
    password: ''
  }

  $scope.login = function(user) {
    // console.log('user ', user);
    authService.login(user).then(function(response) {
      if (!response.data) {
        alert('User does not exist');
        $scope.user.password = '';
      } else {
        $state.go('games');
      }
    }).catch(function(err) {
      alert('Unable to login');
    });
  };

  $scope.register = function(user) {
    authService.registerUser(user).then(function(response) {
      if (!response.data) {
        alert('Unable to create user');
      } else {
        alert('User Created');
        $scope.newUser = {};
      }
    }).catch(function(err) {
      alert('Unable to create user');
    });
  };
});
