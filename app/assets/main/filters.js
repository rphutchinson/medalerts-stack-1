angular.module('main.filters', [])
    /**
     * Wrapper for window.encodeURIComponent
     */
    .filter('encodeURIComponent', function () {
      return window.encodeURIComponent;
    })

    /**
     * Deals with the non-standard format used by the Open FDA api and uses the
     * default Angular date filter to format the date
     */
    .filter('fdaDate', function ($filter) {
      return function(string){
        var parsed = string.substring(0,4) + '-' +
            string.substring(4,6) + '-' +
            string.substring(6,8);
        return $filter('date')(parsed);
      };
    });
