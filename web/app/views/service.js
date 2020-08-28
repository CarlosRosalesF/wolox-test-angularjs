angularApp.service("service", [
  "$http",
  function($http) {
    this.getTech = function() {
      const url = `${api}/techs`;
      return $http.get(url, {
        headers: {
          Authorization: sessionStorage.getItem("Authorization"),
        },
      });
    };

    this.login = function(user) {
      const url = `${api}/login`;
      return $http.post(url, user);
    };
  },
]);
