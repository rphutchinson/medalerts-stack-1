angular.module('main.controllers', [])
    .controller('IndexCtrl', function ($scope, DrugService, API_URL) {
      var self = this;

      this.endpoint = API_URL + "drugs";
      this.drugs = [];
      this.getTypeaheadDrugs = function() {
	      DrugService.getTypeaheadDrugs().then(function(drugs) {
	      	$scope.drugs = drugs;
	      	self.drugs = drugs;
	      });
      }

    })
    .controller('DrugDetailsCtrl', function ($scope) {

    //@todo: remove CLs like this
      console.log('Hello main-sub.controller!');


    });


