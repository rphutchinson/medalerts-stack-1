angular.module('pattern.routes', [])
    .config(function ($routeProvider) {

      $routeProvider
          .when('/pattern', {
            templateUrl: 'assets/pattern/partials/main.html',
            controller: 'PatternCtrl'
          });
    });