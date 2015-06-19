angular.module('app', ['app.tpl', 'ngSanitize', 'ui.select', 'ui.bootstrap',
  'ngRoute', 'main', 'other', 'pattern']);

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
