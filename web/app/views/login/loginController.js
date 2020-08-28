angularApp.controller("loginController", [
  "$scope",
  "$filter",
  "service",
  "$interval",
  function ($scope, $interval) {
    $interval.cancel(statisticsInterval);

    $scope.toLogin = function () {
      document.location = "/app/components/tech-list/techListView.html";
    };

    $scope.checkIfEnterKeyWasPressed = function (event) {
      if (event.keyCode === 13) {
        $scope.getUser();
      }
    };

    function login(user) {
      const url = `${urlInit}login`;
      const post = $http.post(url, user);
      return post;
    }
  },
]);
