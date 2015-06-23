angular.module('main.directives', [])
    .directive('drugSummary', function () {

      var controller = function($scope, $filter){
        $scope.$watch('drug', function(drug){
          $scope.description = _buildDescription(drug, $scope.type);
        }, true)

        function _buildDescription(drug, type){
          var description = '';

          if(!drug || !drug.details){
            return description;
          }

          if('recall' === type && drug.details.recalls){
            var recallCnt = drug.details.recallDetails.length;
            if(recallCnt === 1){
              description += 'There is an open recall on ' + drug.name;
            } else if(recallCnt > 1){
              description += 'There are ' + recallCnt + ' open recalls on ' + drug.name;
            }

          }

          if('label' === type && drug.details.labelChanges){
            //get the date of the most recent label change
            var effectiveTime =  _.first(drug.details.labelDetails).effective_time;
            effectiveTime = effectiveTime.substring(0,4) + '-' +
                            effectiveTime.substring(4,6) + '-' +
                            effectiveTime.substring(6,8);
            description += 'Label was last changed on ' + $filter('date')(effectiveTime);
          }

          return description;
        }

      };

      return {
        restrict: 'A',
        template: '{{description}}',
        scope: {
          drug: '=',
          type: '='
        },
        controller: controller
      }
    });