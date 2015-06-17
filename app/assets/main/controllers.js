angular.module('main.controllers', [])
    .controller('IndexCtrl', function ($scope) {
      console.log('Hello main-index.controller!!!');
    })
    .controller('SubCtrl', function ($scope) {
      console.log('Hello main-sub.controller!');
    });
