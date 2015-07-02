angular.module('main.controllers', [])
/**
 * Controller for main application page
 */
    .controller('IndexCtrl', function ($scope, $location, $log, $timeout, $templateCache, $modal,
                                       DrugService, DrugsList, API_URL) {

      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       Controller Initialization
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

      $scope.endpoint = API_URL + "drugs";
      $scope.drug = {};

      DrugService.getTypeaheadDrugs().then(function (drugs) {
        $scope.drugs = _.sortBy(drugs);
      });

      _loadFollowedDrugs();

      $scope.supplemental = '/assets/main/partials/why.html';

      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       Scope functions
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

      /**
       * determines the class to use for a followed drug element. Indended to be
       * used as the input to an ng-class directive
       * @param drug The drug to inspect
       * @returns {string}
       */
      $scope.highlightClass = function (drug) {
        if (!drug.details) {
          return 'drug-status-loading';
        } else if (drug.details.recalls) {
          return 'drug-status-recall'
        } else if (drug.details.labelChanges) {
          return 'drug-status-label'
        } else {
          return 'drug-status-ok'
        }
      };

      $scope.highlightSelected = function(drug){
        if($scope.drug && $scope.drug.name === drug.name){
          return 'selected';
        }
      };

      /**
       * Removes drug from the DrugsList
       * @param drug
       */
      $scope.removeDrug = function (drug) {
        DrugsList.remove(drug.name); //use the service to remove from stored values
        $scope.followedDrugs = _.reject($scope.followedDrugs, {name: drug.name})
      };

      /**
       * Adds a drug to the DrugsList
       * @param drug
       */
      $scope.addDrug = function (drug) {
      	DrugsList.add(drug.name);
      	$scope.followedDrugs.push(drug);
      };

      /**
       * select a drug outside of the ui-select control. Triggers the $watch
       * function when a drug is selected
       * @param drug the selected drug
       */
      $scope.manuallySelectDrug = function (drug) {
        $scope.drug = drug;
      };

      /**
       * clear the details of the selected drug when selecting a new drug from
       * the list
       */
      $scope.clearDrugDetails = function(){
        if(!$scope.drug){
          return;
        }

        delete $scope.drug.details;
        delete $scope.drug.following;
      };

      $scope.updateSupplemental = function(which){
        $scope.drug = {};
        $scope.supplemental = '/assets/main/partials/' + which + '.html';
      };


      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       Watches
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

      $scope.$on('subscription-change', function(e, data) {
      	$scope[data.action + 'Drug'](data.drug);
      });
      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       Private helper functions
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

      /**
       * Loads drugs using the DrugList service and for each one makes an
       * additional API call to populate the details for that drug
       * @private
       */
      function _loadFollowedDrugs() {
        $scope.followedDrugs = _.map(DrugsList.all(), function (name) {
          return {name: name, following: true}
        });

        _.forEach($scope.followedDrugs, function (drug) {
          DrugService.getDrugByName(drug.name).then(
              function (response) {
                drug.details = response;
              }
          );
        });
      }
    });


