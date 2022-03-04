(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService );
    

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var ToBuyController = this;

      ToBuyController.toBuyItems=ShoppingListCheckOffService.toBuyItems();
      

      ToBuyController.addToBoughtList=function(itemIndex){
        ShoppingListCheckOffService.addToBoughtList(itemIndex);
      }
      
    }
    
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var AlreadyBoughtController = this;

      AlreadyBoughtController.alreadyBoughtItems=ShoppingListCheckOffService.alreadyBoughtItems();
      
     
      }
    
    
    
    function ShoppingListCheckOffService () {
      var service = this;
    
     
      var arr1 = [
          { name: "cookies", quantity: 10 },
          { name: "bread", quantity: 3 },
          { name: "chips", quantity: 5 },
          { name: "eggs", quantity: 6 },
          { name: "drinks", quantity: 8 }
          ];

      var  arr2= [];
    
      service.addToBoughtList =function(itemIndex){
        var item=arr1[itemIndex];
        console.log("fefewf");
        arr1.splice(itemIndex,1);
        arr2.push(item);
      };
    
      service.toBuyItems = function () {
        
        return arr1;
      };
    
      service.alreadyBoughtItems = function () {
        return arr2;
      };
    }
    
    })();
    