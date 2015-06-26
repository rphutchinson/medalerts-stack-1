describe("Working Unit Tests", function() {
	beforeEach(module('app'));

	it('is running tests', function() {
		var isTest = true;
		expect(isTest).toBe(true);
	});
});
