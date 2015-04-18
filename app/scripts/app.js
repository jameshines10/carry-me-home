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

      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
      });
  });
