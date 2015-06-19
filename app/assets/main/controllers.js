angular.module('main.controllers', [])
    .controller('IndexCtrl', function ($scope, DrugService, API_URL) {
      var self = this;

      this.endpoint = API_URL;
      this.drugs = [];
      this.selectedDrug = undefined;

      this.getTypeaheadDrugs = (function() {
	      DrugService.getTypeaheadDrugs().then(function(drugs) {
	      	self.drugs = drugs;
	      });
      })();

    })
    .controller('DrugDetailsCtrl', function ($scope) {

    //@todo: remove CLs like this
      console.log('Hello main-sub.controller!');


    });


