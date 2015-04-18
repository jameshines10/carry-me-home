'use strict';

/**
 * @ngdoc function
 * @name carryMeHomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carryMeHomeApp
 */
angular.module('controllers', [])

  .controller('HomeController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .controller('AboutController', function () {

  })

  .controller('ContactController', function() {

  });
