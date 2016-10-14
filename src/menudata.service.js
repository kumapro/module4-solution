(function(){
'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'categoryShortName'];
  function MenuDataService(){
    var service = this;

    service.getAllCategories = function (){
      var response = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
      });
      return response;
    }

    service.getItemsForCategory = function (categoryShortName){
      var response = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=")
      });
      return response;
    }
  }


})();
