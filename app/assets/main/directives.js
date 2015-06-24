angular.module('main.directives', [])
    /**
     * Displays plain text summary information about a drug, taking the requested
     * type of information in context
     */
    .directive('drugSummary', function () {

      /**
       * Controller for the directive
       * @param $scope
       * @param $filter
       */
      var controller = function($scope, $filter){

        /**
         * Whenever any part of the drug changes rebuild the description.
         */
        $scope.$watch('drug', function(drug){
          $scope.description = _buildDescription(drug, $scope.type);
        }, true);

        /**
         * Private function to build a description
         * @param drug The drug to build the description for
         * @param type the type of description to build
         * @returns {string}
         * @private
         */
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
            description += 'Label was last changed on ' +
                $filter('fdaDate')(_.first(drug.details.labelDetails).effective_time);
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