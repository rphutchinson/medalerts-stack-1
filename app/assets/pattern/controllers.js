angular.module('pattern.controllers', [])

    /**
     * Controller module for Pattern library
     */
    .controller('PatternCtrl', function ($scope) {
      $scope.options = [
        { "name": "Abilify" },
        { "name": "Namenda"},
        { "name": "Viagra"},
        { "name":"Zetia"},
        { "name": "Cialis"},
        { "name": "Nasonex"}
        ];
    });