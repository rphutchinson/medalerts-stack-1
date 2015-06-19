angular.module('main.controllers', [])
    .controller('IndexCtrl', function ($scope, $location, DrugService, API_URL) {

      $scope.endpoint = API_URL + "drugs";
      $scope.selectedDrug = undefined;

      DrugService.getTypeaheadDrugs().then(function(drugs) {
        $scope.drugs = drugs;
      });

      $scope.$watch('selectedDrug', function(){
        if($scope.selectedDrug) {
          $location.path('/drugdetail').search('name', $scope.selectedDrug);
        }
      });

    })
    .controller('DrugDetailsCtrl', function ($scope, $location, DrugService) {
      $scope.drug = $location.search().name;
      DrugService.getDrugByName($scope.drug).then(
          function(response){
            $scope.drugDetails = response;
          }
      );
    //@todo: remove CLs like this
      console.log('Hello main-sub.controller!');


    });


