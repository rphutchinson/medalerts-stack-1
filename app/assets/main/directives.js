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
    })


    .directive('drugDetail', function(){

      var controller = function($scope, DrugService, DrugsList, $rootScope, $anchorScroll){

        /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         Scope functions
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

        /**
         * Allow the user to follow/unfollow a drug from the details view via the
         * DrugsList service
         */
        $scope.toggleFollow = function () {
          var action = $scope.drug.following ? 'remove' : 'add';
          $rootScope.$broadcast('subscription-change', {action: action, drug: $scope.drug});
          $scope.drug.following = !$scope.drug.following;
        };

        $scope.interactionPairConcepts = function (interactionPair) {
          return _(interactionPair.interactionConcept).map(function (c) {
            return c.minConceptItem.name;
          }).join(", ")
        };

        /**
         * Determines whether or not to show interaction details. If the details
         * are not populated yet then return true. we don't want to show the
         * "no information" message if the details haven't had a chance to load yet
         * @returns {boolean}
         */
        $scope.showInteractionDetails = function () {
          return !$scope.drug || !$scope.drug.details || !_.isEmpty($scope.drug.details.interactionDetails);
        };

        $scope.done = function () {
          $scope.drug = {};
        };


        /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         Watches
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

        $scope.$watch('drug', function(drug){
          if(!$scope.drug || !$scope.drug.name){
            return;
          }

          $anchorScroll();

          $scope.drug.following = _.includes(DrugsList.all(), $scope.drug.name);
          //use the service to load detail information for the given drug if necessary
          if ($scope.drug.name && !$scope.drug.details) {
            DrugService.getDrugByName($scope.drug.name).then(
                function (response) {
                  $scope.drug.details = response;
                }
            );
          }
        }, true);
      };

      return {
        restrict: 'A',
        templateUrl: '/assets/main/partials/drug-details.html',
        controller: controller
      }
    });