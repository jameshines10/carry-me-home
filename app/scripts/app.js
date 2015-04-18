'use strict';

/**
 * @ngdoc overview
 * @name carryMeHomeApp
 * @description
 * # carryMeHomeApp
 *
 * Main module of the application.
 */
angular
  .module('cmh', [
    'controllers',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
  ])

  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })

      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })

      .state('get-involved', {
        url: '/get-involved',
        templateUrl: 'views/get-involved.html',
        controller: 'GetInvolvedController'
      })

      .state('give', {
        url: '/give',
        templateUrl: 'views/give.html',
        controller: 'GiveController'
      })

      .state('give.donate', {
        url: '/donate',
        templateUrl: 'views/give/donate.html'
      })

      .state('give.info', {
        url: '/donate',
        templateUrl: 'views/give/info.html'
      })

      .state('give.love', {
        url: '/love',
        templateUrl: 'views/give/love.html'
      })

      .state('give.confirmation', {
        url: '/confirmation',
        templateUrl: 'views/give/confirmation.html'
      })

      .state('give.thankyou', {
        url: '/thankyou',
        templateUrl: 'views/give/thankyou.html'
      });
  });
