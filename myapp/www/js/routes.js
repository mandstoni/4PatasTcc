angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page1', {
    url: '/login1',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('page2', {
    url: '/cadastro1',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page3', {
    url: '/cadastro2',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('page7', {
    url: '/raca',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('page8', {
    url: '/idade',
    templateUrl: 'templates/page8.html',
    controller: 'page8Ctrl'
  })

  .state('page10', {
    url: '/tamanho',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('page4', {
    url: '/login',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('page5', {
    url: '/cadastroSucesso',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

  .state('page11', {
    url: '/usuario1',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

  .state('page12', {
    url: '/usuario2',
    templateUrl: 'templates/page12.html',
    controller: 'page12Ctrl'
  })

  .state('page9', {
    url: '/page9',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

$urlRouterProvider.otherwise('/login1')


});