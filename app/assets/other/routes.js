angular.module('other.routes', [])
    .config(function ($routeProvider) {

      $routeProvider
          .when('/other', {
            templateUrl: 'assets/other/partials/main.html',
            controller: 'OtherCtrl'
          });

    });