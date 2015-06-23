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
    .config(["$httpProvider", "$locationProvider", function ($httpProvider, $locationProvider) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }])

    /**
     * Run block to automatically obtain an access_token from the auth endpoint
     * and store in a session cookie. In a production application this would
     * likely require some form of user login but just using client credentials
     * is sufficient to demonstrate the OAuth workflow for this demo application
     */
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

    /**
     * Additional Run block to automatically add Authorization header to all
     * http requests. Written as a separate run block for readability.
     */
    .run(["$injector", "$cookieStore", function ($injector, $cookieStore) {

      $injector.get("$http").defaults.transformRequest = function (data, headers) {
        var token = $cookieStore.get('access_token');
        if (token) {
          headers().Authorization = "Bearer " + token;
        }
      };
    }]);






angular.module('main.controllers', [])
    /**
     * Controller for main application page
     */
    .controller('IndexCtrl', ["$scope", "$location", "$log", "$timeout", "DrugService", "DrugsList", "API_URL", function ($scope, $location, $log, $timeout,
                                       DrugService, DrugsList, API_URL) {

      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       Controller Initialization
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

      $scope.endpoint = API_URL + "drugs";
      $scope.drug = {};

      DrugService.getTypeaheadDrugs().then(function(drugs) {
        $scope.drugs = _.sortBy(drugs);
      });

      _loadFollowedDrugs();


      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       Scope functions
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

      /**
       * determines the class to use for a followed drug element. Indended to be
       * used as the input to an ng-class directive
       * @param drug The drug to inspect
       * @returns {string}
       */
      $scope.highlightClass = function(drug){
        if(!drug.details){
          return 'drug-status-loading';
        } else if(drug.details.recalls){
          return 'drug-status-recall'
        } else if(drug.details.labelChanges){
          return 'drug-status-label'
        } else {
          return 'drug-status-ok'
        }
      };

      /**
       * Adds or removes a drug from the DrugList
       * @param drug
       */
      $scope.toggleItem = function(drug) {
      	DrugsList[drug.isFollowed ? 'remove' : 'add'](drug.name);
      	drug.isFollowed = !drug.isFollowed;
      };

      /**
       * select a drug outside of the ui-select control. Triggers the $watch
       * function when a drug is selected
       * @param drug the selected drug
       */
      $scope.manuallySelectDrug = function(drug) {
      	$scope.drug.selected = drug.name;
      };


      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       Watches
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

      $scope.$watch('drug', function(){
        if($scope.drug && $scope.drug.selected) {
          $location.path('/drugdetail').search('name', $scope.drug.selected);
        }
      }, true);


      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       Private helper functions
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

      /**
       * Loads drugs using the DrugList service and for each one makes an
       * additional API call to populate the details for that drug
       * @private
       */
      function _loadFollowedDrugs(){
        $scope.followedDrugs = _.map(DrugsList.all(), function(name){
          return {name: name, isFollowed: true}
        });

        _.forEach($scope.followedDrugs, function(drug){
          DrugService.getDrugByName(drug.name).then(
              function(response){
                drug.details = response;
              }
          );
        });
      }
    }])

    /**
     * Controller for drug details
     */
    .controller('DrugDetailsCtrl', ["$scope", "$location", "DrugService", "DrugsList", function ($scope, $location, DrugService,
                                             DrugsList) {

      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       Controller Initialization
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

      $scope.drug = $location.search().name;
      $scope.following = _.includes(DrugsList.all(), $scope.drug);
      //use the service to load detail information for the given drug
      DrugService.getDrugByName($scope.drug).then(
          function(response){
            $scope.drugDetails = response;
          }
      );


      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       Scope functions
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

      /**
       * Allow the user to follow/unfollow a drug from the details view via the
       * DrugsList service
       */
      $scope.toggleFollow = function() {
      	DrugsList[!$scope.following ? 'add' : 'remove']($scope.drug);
      	$scope.following = !$scope.following;
      }
    }]);



angular.module('main.directives', [])
    .directive('drugSummary', function () {

      var controller = function($scope, $filter){
        $scope.$watch('drug', function(drug){
          $scope.description = _buildDescription(drug, $scope.type);
        }, true)

        function _buildDescription(drug, type){
          var description = '';

          if(!drug || !drug.details){
            return description;
          }

          if('recall' === type && drug.details.recalls){
            var recallCnt = drug.details.recallDetails.length;
            if(recallCnt === 1){
              description += 'There is an open recall on ' + drug.name;
            } else if(recallCnt > 1){
              description += 'There are ' + recallCnt + ' open recalls on ' + drug.name;
            }

          }

          if('label' === type && drug.details.labelChanges){
            //get the date of the most recent label change

            description += 'Label was last changed on ' +
                $filter('fdaDate')(_.first(drug.details.labelDetails).effective_time);
          }

          return description;
        }

      };
      controller.$inject = ["$scope", "$filter"];

      return {
        restrict: 'A',
        template: '{{description}}',
        scope: {
          drug: '=',
          type: '='
        },
        controller: controller
      }
    });
angular.module('main.filters', [])
    .filter('encodeURIComponent', function () {
      return window.encodeURIComponent;
    })

    .filter('fdaDate', ["$filter", function ($filter) {
      return function(string){
        var parsed = string.substring(0,4) + '-' +
            string.substring(4,6) + '-' +
            string.substring(6,8);
        return $filter('date')(parsed);
      };
    }]);

/**
 * Main application module supporting Drug search, following, etc.
 */
angular.module('main', [
  'main.controllers',
  'main.directives',
  'main.routes',
  'main.services',
  'main.filters']);

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

	.factory('DrugsList', function() {
		return {
			all: function() {
				var list = window.localStorage['drugslist'];
				if (list) {
					return angular.fromJson(list);
				}
				return [];
			},
			save: function(drugslist) {
				window.localStorage['drugslist'] = angular.toJson(drugslist);
			},
			add: function(item) {
				var list = this.all();

				// if list doesn't contain item
				if (!~list.indexOf(item)) list.push(item);
				this.save(list);
			},
			remove: function(item) {
				var list = this.all();

				var index = list.indexOf(item);

				// if list doesn't contain item
				if (!~index) return;
				list.splice(index, 1);
				this.save(list);
			}
		}
	})
})();

angular.module('pattern.controllers', [])

    /**
     * Controller module for Pattern library
     */
    .controller('PatternCtrl', ["$scope", function ($scope) {
      $scope.options = [
        { "name": "Abilify" },
        { "name": "Namenda"},
        { "name": "Viagra"},
        { "name":"Zetia"},
        { "name": "Cialis"},
        { "name": "Nasonex"}
        ];
    }]);
/**
 * Pattern library for the application. available at url /pattern. In a real
 * application this would be excluded from the production build and only made
 * available in development.
 */
angular.module('pattern', [
  'pattern.controllers',
  'pattern.routes']);
angular.module('pattern.routes', [])

    /**
     * Configure routes for pattern library
     */
    .config(["$routeProvider", function ($routeProvider) {

      $routeProvider
          .when('/pattern', {
            templateUrl: 'assets/pattern/partials/main.html',
            controller: 'PatternCtrl'
          });
    }]);