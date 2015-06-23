angular.module('main.filters', [])
    .filter('encodeURIComponent', function () {
      return window.encodeURIComponent;
    })

    .filter('fdaDate', function ($filter) {
      return function(string){
        var parsed = string.substring(0,4) + '-' +
            string.substring(4,6) + '-' +
            string.substring(6,8);
        return $filter('date')(parsed);
      };
    });
