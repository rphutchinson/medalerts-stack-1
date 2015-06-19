var app = angular.module('app', ['app.tpl', 'ngRoute', 'main', 'other']);
app.constant('API_URL', 'replace-with-api-base-loc')

app.config(function ($httpProvider, $locationProvider) {

  $httpProvider.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
  };

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

});



