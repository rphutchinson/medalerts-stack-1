(function() {
	angular.module('main.services', [])

    /**
     * Factory for the list of available drugs and Drug details
     */
    .factory('DrugService', function(API_URL, $http, $q, $log) {

      return {
        getTypeaheadDrugs: function () {
          var deferred = $q.defer();
          $http({url: '/assets/datasets/meds.json'})
              .success(function (data) {
                deferred.resolve(data);
              })
              .error(function () {
                deferred.reject("Problem retrieving drug names for typeahead");
              });
          return deferred.promise;
        },
        getDrugs: function (str) {
          var deferred = $q.defer(),
              req = {
                method: 'GET',
                url: API_URL
              };

          str && (req.params.query = str );

          $http(req).success(function (drugs) {
            deferred.resolve(drugs);
          }).error(function (data) {
            deferred.reject("Problem retrieving medicines: " + data);
          });
          return deferred.promise;

        },
        getDrugByName: function (drugName) {
          return $http.get(API_URL + 'drugs/' + drugName).then(
              function (response) {
                return response.data;
              },
              function (err) {
                $log.error(err);
              }
          )
        }

      }
    })

    /**
     * Factory for the saved "followed" drugs. Currently uses localStorage for
     * persistence but this could be modified to use a database if desired with
     * minimal impact to client code.
     */
    .factory('DrugsList', function () {
      return {
        all: function () {
          var list = window.localStorage['drugslist'];
          if (list) {
            return angular.fromJson(list);
          }
          return [];
        },
        save: function (drugslist) {
          window.localStorage['drugslist'] = angular.toJson(drugslist);
        },
        add: function (item) {
          var list = this.all();

          // if list doesn't contain item
          if (!~list.indexOf(item)) list.push(item);
          this.save(list);
        },
        remove: function (item) {
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
