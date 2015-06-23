angular.module('main.controllers', [])
    /**
     * Controller for main application page
     */
    .controller('IndexCtrl', function ($scope, $location, $log, $timeout,
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
    })

    /**
     * Controller for drug details
     */
    .controller('DrugDetailsCtrl', function ($scope, $location, DrugService,
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
    });


