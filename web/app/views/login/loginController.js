angularApp.controller("loginController", [
  "$scope",
  "service",
  function ($scope, service) {
    $scope.onLogin = function () {
      service.login($scope.user).then(
        (token) => {
          if ($scope.user.stayConnected) {
            localStorage.setItem("authorization", token);
          }
          document.location = "#!techs";
        },
        (error) => {}
      );
    };
  },
]);
