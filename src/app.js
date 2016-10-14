(function () {

angular.module('RoutingApp',['ui.router']);

angular.module('RoutingApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/tab1');

  // Set up UI states
  $stateProvider
    .state('firstTab', {
      url: '/tab1',
      templateUrl: 'src/tab1.html'
    })

    .state('secondTab', {
      url: '/tab2',
      templateUrl: 'src/tab2.html'
    });
}


})();
