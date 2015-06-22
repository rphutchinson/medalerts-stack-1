angular.module('main.controllers', [])
    .controller('IndexCtrl', function ($scope, $location, DrugService, DrugsList, API_URL) {

      $scope.endpoint = API_URL + "drugs";
      $scope.drug = {};

      DrugService.getTypeaheadDrugs().then(function(drugs) {
        $scope.drugs = drugs;
      });

      $scope.followedDrugs = DrugsList.all();

      $scope.$watch('drug', function(){
        if($scope.drug && $scope.drug.selected) {
          $location.path('/drugdetail').search('name', $scope.drug.selected);
        }
      }, true);
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


