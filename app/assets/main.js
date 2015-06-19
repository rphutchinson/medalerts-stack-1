angular.module('app', ['app.tpl', 'ngSanitize', 'ngCookies', 'ui.select', 'ui.bootstrap',
  'ngRoute', 'main', 'other', 'pattern'])

    .constant('API_URL', '/api/v1/')
    .config(function ($httpProvider, $locationProvider) {

      $httpProvider.defaults.headers.common = {
        'X-Requested-With': 'XMLHttpRequest'
      };

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    })

  /*Automatically obtain an access_token from the auth endpoint and store in
   a session cookie. In a production application this would likely require
   some form of user login but just using client credentials is sufficient
   to demonstrate the OAuth workflow for now.*/
    .run(function ($http, $cookieStore, $log, $window) {
      $http.post('/api/v1/access_token', {
        grant_type: "client_credentials",
        "client_id": $window.Conf.clientId
      }).then(
          function (response) {
            $cookieStore.put('access_token', response.data.access_token);
          },
          function (err) {
            $log.error(err);
          });
    })

  //if present automatically add the Bearer token to all $http requests
    .run(function ($injector, $cookieStore) {

      $injector.get("$http").defaults.transformRequest = function (data, headersGetter) {
        var token = $cookieStore.get('access_token');
        if (token) {
          headersGetter().Authorization = "Bearer " + token;
        }
      };
    });





