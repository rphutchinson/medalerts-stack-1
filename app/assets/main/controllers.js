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
		$scope.removeDrug = function(drug) {
			DrugsList.remove(drug.name); //use the service to remove from stored values
			$scope.followedDrugs = _.reject($scope.followedDrugs, { name: drug.name })
		};

		/**
		 * handle hover state for button
		 */
		$scope.hoverFollow = function() {
			this.followHovered = true;
		};

		/**
		 * handle hover state for button
		 */
		$scope.leaveFollow = function() {
			this.followHovered = false;
		};

		/**
		 * select a drug outside of the ui-select control. Triggers the $watch
		 * function when a drug is selected
		 * @param drug the selected drug
		 */
		$scope.manuallySelectDrug = function(drug) {
			$scope.drug.selected = drug.name;
		};
		/**
		 * Provides the user with modal detailing the selected drug
		 */
		function openDetails() {
			if ($scope.drug && $scope.drug.selected) {
				var drugName = $scope.drug.selected,
					drug = _.findWhere($scope.followedDrugs, {name: drugName}) || {name: drugName};

        drug.following = _.includes(DrugsList.all(), drugName);

        /*clear the selected drug when opening the modal. we must do this because
        the opening of the drug details modal is triggered by a $watch on the
        selected drug. if we don't clear it, then if the next drug selected
        is the same one then the $watch won't fire*/
        $scope.drug.selected = undefined;

				var modalInstance = $modal.open({
					animation: $scope.animationsEnabled,
					templateUrl: "assets/main/partials/details-modal.html",
					controller: "DrugDetailsCtrl",
					resolve: {
						drug: function () {
							return drug;
						}
					}
				}).result;
			}
		}


		/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 Watches
		 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

		$scope.$watch('drug', function(){
			if($scope.drug && $scope.drug.selected) {
				openDetails();
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
			return {name: name, following: true}
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
	.controller('DrugDetailsCtrl', function ($scope, $log, $location, $modalInstance, DrugService,
											 DrugsList, drug) {

		/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 Controller Initialization
		 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


		$scope.drug = drug;

		//use the service to load detail information for the given drug if necessary
		if (!drug.details){
			DrugService.getDrugByName($scope.drug.name).then(
				function(response){
					$scope.drug.details = response;
				}
			);
		}

		/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		 Scope functions
		 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

		/**
		 * Allow the user to follow/unfollow a drug from the details view via the
		 * DrugsList service
		 */
		$scope.toggleFollow = function() {
			DrugsList[$scope.drug.following ? 'remove' : 'add']($scope.drug.name);
			drug.following = !drug.following;
		};

		$scope.done = function() {
			$modalInstance.close();
		};
	});


