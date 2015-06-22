angular.module('main.controllers', [])
    .controller('IndexCtrl', function ($scope, $location, DrugService, API_URL) {

      $scope.endpoint = API_URL + "drugs";
      $scope.drug = {};

      DrugService.getTypeaheadDrugs().then(function(drugs) {
        $scope.drugs = drugs;
      });

      $scope.$watch('drug', function(){
        if($scope.drug && $scope.drug.selected) {
          $location.path('/drugdetail').search('name', $scope.drug.selected);
        }
      }, true);
    })

    .controller('DrugDetailsCtrl', function ($scope, $location, DrugService) {
      $scope.drug = $location.search().name;
      DrugService.getDrugByName($scope.drug).then(
          function(response){
            $scope.drugDetails = response;
          }
      );

    });


