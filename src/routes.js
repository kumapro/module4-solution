(function(){
  'use strict';

  angular.module('MenuApp').config(RoutersConfig);

  RoutersConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'src/home.html'
    })

    .state('categories', {
      url: '/categories/{shortName}',
      templateUrl: 'src/categories.html',
      controller: 'CategoriesCtrl as category',
      resolve: {
        recievedShortName: ['$stateParams',
                            function($stateParams){
                              return getDataBasedOn($stateParams.shortName);
                            }]
      }
    });

})();
