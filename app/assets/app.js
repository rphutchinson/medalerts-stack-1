/**
 * Primary module for Single Page Application (SPA) declares application-wide
 * dependencies as well as sub-modules.
 *
 * Throughout the application we allow the
 * ng-annotate gulp task to insert all of the Angular dependency injection
 * annotations which allows us to define angular functions without using either
 * array notation or explicit dependency injection calls.
 */
angular.module('app', ['app.tpl', 'ngSanitize', 'ngRoute', 'ngCookies', 'ui.select',
  'ui.bootstrap', 'main', 'pattern'])

    /**
     * Base URL for internal API calls
     */
    .constant('API_URL', '/api/v1/')

    /**
     * Configuration block, use html5 mode (history.pushState()) for location
     * changes.
     */
    .config(function ($httpProvider, $locationProvider) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    })

    /**
     * Run block to automatically obtain an access_token from the auth endpoint
     * and store in a session cookie. In a production application this would
     * likely require some form of user login but just using client credentials
     * is sufficient to demonstrate the OAuth workflow for this demo application
     */
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

    /**
     * Additional Run block to automatically add Authorization header to all
     * http requests. Written as a separate run block for readability.
     */
    .run(function ($injector, $cookieStore) {

      $injector.get("$http").defaults.transformRequest = function (data, headers) {
        var token = $cookieStore.get('access_token');
        if (token) {
          headers().Authorization = "Bearer " + token;
        }
      };
    });





