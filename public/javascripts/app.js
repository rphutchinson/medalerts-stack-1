angular.module('app', ['app.tpl', 'ngSanitize', 'ngCookies', 'ui.select', 'ui.bootstrap',
  'ngRoute', 'main', 'other', 'pattern'])

    .constant('API_URL', '/api/v1/')
    .config(["$httpProvider", "$locationProvider", function ($httpProvider, $locationProvider) {

      $httpProvider.defaults.headers.common = {
        'X-Requested-With': 'XMLHttpRequest'
      };

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }])

  /*Automatically obtain an access_token from the auth endpoint and store in
   a session cookie. In a production application this would likely require
   some form of user login but just using client credentials is sufficient
   to demonstrate the OAuth workflow for now.*/
    .run(["$http", "$cookieStore", "$log", "$window", function ($http, $cookieStore, $log, $window) {
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
    }])

  //if present automatically add the Bearer token to all $http requests
    .run(["$injector", "$cookieStore", function ($injector, $cookieStore) {

      $injector.get("$http").defaults.transformRequest = function (data, headersGetter) {
        var token = $cookieStore.get('access_token');
        if (token) {
          headersGetter().Authorization = "Bearer " + token;
        }
      };
    }]);






angular.module('main.controllers', [])
    .controller('IndexCtrl', ["$scope", "$location", "DrugService", "API_URL", function ($scope, $location, DrugService, API_URL) {

      $scope.endpoint = API_URL + "drugs";
      $scope.drug = {};

      DrugService.getTypeaheadDrugs().then(function(drugs) {
        $scope.drugs = drugs;
      });

      $scope.$watch('drug', function(){
        if($scope.drug && $scope.drug.selected) {
          $location.path('/drugdetail').search('name', $scope.drug.selected);
        }
      }, true);
    }])

    .controller('DrugDetailsCtrl', ["$scope", "$location", "DrugService", function ($scope, $location, DrugService) {
      $scope.drug = $location.search().name;
      DrugService.getDrugByName($scope.drug).then(
          function(response){
            $scope.drugDetails = response;
          }
      );

    }]);



angular.module('main.filters', [])
	.filter('encodeURIComponent', function() {
		return window.encodeURIComponent;
	});

angular.module('main', ['main.controllers', 'main.routes', 'main.services', 'main.filters']);

angular.module('main.routes', [])
    .config(["$routeProvider", function ($routeProvider) {

      $routeProvider
          .when('/', {
            templateUrl: 'assets/main/partials/main-index.html',
            controller: 'IndexCtrl'
          })
          .when('/drugdetail', {
            templateUrl: 'assets/main/partials/drug-detail.html',
            controller: 'DrugDetailsCtrl'
          });

    }]);

(function() {
	angular.module('main.services', [])
	.factory('DrugService', ["API_URL", "$http", "$q", "$log", function(API_URL, $http, $q, $log) {

		return {
			getTypeaheadDrugs: function() {
				var deferred = $q.defer();
				$http({url:'/assets/datasets/meds.json'})
					.success(function(data) {
						deferred.resolve(data);
					})
					.error(function() {
						deferred.reject("Problem retrieving drug names for typeahead");
					})
					return deferred.promise;
			},
			getDrugs: function(str) {
				var deferred = $q.defer(),
					req = {
						method: 'GET',
						url: API_URL
					};

				str && (req.params.query = str );

				$http(req).success(function(drugs) {
						deferred.resolve(drugs);
					}).error(function(data) {
						deferred.reject("Problem retrieving medicines: " + data);
					});
				return deferred.promise;

			},
			getDrugByName: function(drugName) {
        return $http.get(API_URL + 'drugs/' + drugName).then(
            function(response){
              return response.data;
            },
            function(err){
              $log.error(err);
            }
        )
			}

		}
	}])

	.factory('DrugsList', ["$log", function($log) {
		return {
			all: function() {
				var list = window.localStorage['drugslist'];
				if (list) {
					return angular.fromJSON(list);
				}
				return [];
			},
			save: function(drugslist) {
				window.localStorage['drugslist'] = angular.toJSON(drugslist);
			},
			add: function(item) {
				var list = this.all();

				// if list doesn't contain item
				if (!~list.indexOf(item)) list.push(item);
				this.save(list);
			},
			remove: function(item) {
				var list = this.all();

				// @todo: remove console.logs like this.
				// working - yes?
				$log("array: ", this.all());

				var index = list.indexOf(item);

				// if list doesn't contain item
				if (!~index) return;
				list.splice(index, 1);
				list.save();
			}
		}
	}])
})();

angular.module('pattern.controllers', [])
    .controller('PatternCtrl', ["$scope", function ($scope) {
      $scope.options = [{ "indy": "Aerospace" },
        { "indy": "Banking"},
        { "indy": "Commercial Contracts"},
        { "indy":"Construction"},
        { "indy": "Employment"},
        { "indy": "Energy"},
        { "indy": "Entertainment"},
        { "indy": "Finance"},
        { "indy": "Franchise Agreements"},
        { "indy": "Healthcare"},
        { "indy": "Hospitality"},
        { "indy": "Insurance / Reinsurance"},
        { "indy": "Intellectual Property"},
        { "indy": "Licensing Agreements"},
        { "indy": "Mass Claims / Class Actions"},
        { "indy": "Mergers & Acquisitions"},
        { "indy": "Oil & Gas"},
        { "indy": "Partnerships"},
        { "indy": "Pharmaceuticals"},
        { "indy": "Securities Investments"},
        { "indy": "Technology"},
        { "indy": "Telecommunications" }];
    }]);
angular.module('pattern', ['pattern.controllers', 'pattern.routes']);
angular.module('pattern.routes', [])
    .config(["$routeProvider", function ($routeProvider) {

      $routeProvider
          .when('/pattern', {
            templateUrl: 'assets/pattern/partials/main.html',
            controller: 'PatternCtrl'
          });
    }]);
angular.module('other.controllers', [])
    .controller('OtherCtrl', ["$scope", function ($scope) {
      console.log('Hello other controller!');
    }]);
angular.module('other', ['other.controllers', 'other.routes']);
angular.module('other.routes', [])
    .config(["$routeProvider", function ($routeProvider) {

      $routeProvider
          .when('/other', {
            templateUrl: 'assets/other/partials/main.html',
            controller: 'OtherCtrl'
          });

    }]);