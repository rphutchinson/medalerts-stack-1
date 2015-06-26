// test file karma jasmine
describe("Master View Controller", function() {
	beforeEach(module('app'));

	var DrugsListService,
		scope;

	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		DrugsListService = $controller('indexCtrl', {
			$scope: scope
		});
	}));

	it('has a local variable "drug"', function() {
		var obj = {};
		expect(scope.drug).toEqual({});
	})
})
