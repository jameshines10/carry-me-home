'use strict';

/**
 * @ngdoc function
 * @name carryMeHomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carryMeHomeApp
 */
angular.module('controllers', [])

  .controller('HomeController', function () {

  })

  .controller('AboutController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .controller('ContactController', function() {

  });
