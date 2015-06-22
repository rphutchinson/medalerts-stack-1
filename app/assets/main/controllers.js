angular.module('main.controllers', [])
    .controller('IndexCtrl', function ($scope, $location, DrugService, DrugsList, API_URL) {

      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       Controller Initialization
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

      $scope.endpoint = API_URL + "drugs";
      $scope.drug = {};

      DrugService.getTypeaheadDrugs().then(function(drugs) {
        $scope.drugs = drugs;
      });

      _loadFollowedDrugs();


      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       Scope functions
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

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

      function _loadFollowedDrugs(){
        $scope.followedDrugs = _.map(DrugsList.all(), function(name){
          return {name: name}
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

    .controller('DrugDetailsCtrl', function ($scope, $location, DrugService, DrugsList) {
      $scope.drug = $location.search().name;
      $scope.following = DrugsList.all().indexOf($scope.drug) > -1;

      DrugService.getDrugByName($scope.drug).then(
          function(response){
            $scope.drugDetails = response;
          }
      );
      // @todo: remove

      $scope.toggleFollow = function() {
      	DrugsList[!$scope.following ? 'add' : 'remove']($scope.drug);
      	$scope.following = !$scope.following;
      }
    });


