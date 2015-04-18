'use strict';

/**
 * @ngdoc function
 * @name carryMeHomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carryMeHomeApp
 */
angular.module('cmh')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
