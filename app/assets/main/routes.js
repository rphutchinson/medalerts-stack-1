angular.module('main.routes', [])
    .config(function ($routeProvider) {

      $routeProvider
          .when('/', {
            templateUrl: 'assets/main/partials/main-index.html',
            controller: 'IndexCtrl',
            controllerAs: 'vm'
          })
          .when('/drugs/:id', {
            templateUrl: 'assets/main/partials/drug-detail.html',
            controller: 'DrugDetailsCtrl'
          });

    });
