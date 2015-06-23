angular.module('pattern.routes', [])

    /**
     * Configure routes for pattern library
     */
    .config(function ($routeProvider) {

      $routeProvider
          .when('/pattern', {
            templateUrl: 'assets/pattern/partials/main.html',
            controller: 'PatternCtrl'
          });
    });