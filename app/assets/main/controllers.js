angular.module('main.controllers', [])
    .controller('IndexCtrl', function ($scope, $location, $log, $timeout, DrugService, DrugsList, API_URL) {

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

      $scope.toggleItem = function(drug) {
      	DrugsList[drug.isFollowed ? 'remove' : 'add'](drug.name);
      	drug.isFollowed = !drug.isFollowed;
      };

      $scope.manuallySelectDrug = function(drug) {
      	$scope.drug.selected = drug.name;
      };

      /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       Private DEV functions
       @todo: delete
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

      function _populateDrugList() {
      	DrugsList.save([]);
      	["Namenda", "Nasonex", "Micardis"].forEach(function(drug, i) {
      		console.log(drug);
      		if (!~DrugsList.all().indexOf(drug)) DrugsList.add(drug);
      	})
      }

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
          return {name: name, isFollowed: true}
        });

        _.forEach($scope.followedDrugs, function(drug){

        	$timeout(function(){
	          DrugService.getDrugByName(drug.name).then(
	              function(response){
	                drug.details = response;
	              }
	          );
      		}, 10);

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

      $scope.toggleFollow = function() {
      	DrugsList[!$scope.following ? 'add' : 'remove']($scope.drug);
      	$scope.following = !$scope.following;
      }
    });


