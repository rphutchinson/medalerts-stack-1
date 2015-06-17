angular.module('app', ['app.tpl', 'ngRoute', 'main', 'other']);

angular.module('app').config(function ($httpProvider) {

  $httpProvider.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
  };

});

angular.module('app').config(function ($locationProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

});
