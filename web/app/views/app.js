angularApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        controller: "mainCtrl",
        templateUrl: "/app/views/landing/landingView.html",
        controller: "landingController",
      })
      .when("/login", {
        templateUrl: "/app/views/login/loginView.html",
        controller: "loginController",
        data: {},
      })
      .when("/techs", {
        templateUrl: "/app/views/tech-list/techListView.html",
        controller: "techListController",
        data: {},
      })
      .when("/unauthorized", {
        templateUrl: "/app/shared/unauthorized.html",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);
