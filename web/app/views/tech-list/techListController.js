angularApp.controller("techListController", [
  "$scope",
  "service",
  "$interval",
  function($scope, service, $interval) {
    $interval.cancel(statisticsInterval);

    function getInfo() {
      service.getTech().then((resp) => {
        $scope.techList = resp;
        console.log(resp);
      });
    }
    getInfo();
    $scope.logout = function() {
      sessionStorage.clear();
      document.location = "/";
    };
  },
]);
