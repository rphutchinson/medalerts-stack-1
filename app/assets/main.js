angular.module('app', ['app.tpl', 'ngSanitize', 'ui.select', 'ui.bootstrap',
  'ngRoute', 'main', 'other', 'pattern'])

    .constant('API_URL', 'replace-with-api-base-loc')
    .config(function ($httpProvider, $locationProvider) {

      $httpProvider.defaults.headers.common = {
        'X-Requested-With': 'XMLHttpRequest'
      };

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    });



