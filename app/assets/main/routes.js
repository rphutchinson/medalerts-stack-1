angular.module('main.routes', [])
    .config(function ($routeProvider) {

      $routeProvider
          .when('/', {
            templateUrl: 'assets/main/partials/main-index.html',
            controller: 'IndexCtrl'
          })
          .when('/sub', {
            templateUrl: 'assets/main/partials/main-sub.html',
            controller: 'SubCtrl'
          });

    });
