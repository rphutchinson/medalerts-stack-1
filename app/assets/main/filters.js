angular.module('main.filters', [])
	.filter('encodeURIComponent', function() {
		return window.encodeURIComponent;
	});
