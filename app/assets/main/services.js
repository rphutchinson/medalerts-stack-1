(function() {
	angular.module('main.services', [])
	.factory('DrugService', function(API_URL, $http, $q, $log) {

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
			getDrugById: function(medId) {
				var deferred = $q.defer();

				$http.get( API_URL + 'drug-info/' + medId )
					.success(function(meds) {
						deferred.resolve(meds);
					})
					.error(function(data) {
						deferred.reject("Problem retrieving medicines: " + data);
					});
				return deferred.promise;
			}

		}
	})
})();
