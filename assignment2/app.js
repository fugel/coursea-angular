(function() {
'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBroughtController', AlreadyBroughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    // Define ToBuyController
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var showList = this;

        showList.items = ShoppingListCheckOffService.getItemsToBuy()
        showList.BuyItem = function(itemIndex) {
            ShoppingListCheckOffService.BuyItem(itemIndex);
        };
    }

    // Define AlreadyBroughtController
    AlreadyBroughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBroughtController(ShoppingListCheckOffService) {
        var showList = this;

        showList.items = ShoppingListCheckOffService.getItemsBought()
    }

    // Define ShoppingListCheckOffService
    function ShoppingListCheckOffService() {
        var service = this;

        // Define list of items to buy
        var itemsToBuy = [
            { name: 'Apple', quantity: 1 },
            { name: 'Orange', quantity: 2 },
            { name: 'Pear', quantity: 3 },
            { name: 'Banana', quantity: 4 },
            { name: 'Kiwi', quantity: 5 },
            { name: 'Beer', quantity: 6 }
        ];

        // Define list of bought items
        var itemsBought = [];

        // Method to 'Buy' an item
        service.BuyItem = function (itemIndex) {
            var item = itemsToBuy[itemIndex];
            itemsBought.push(item);
            itemsToBuy.splice(itemIndex, 1);
        };

        // Method to return items to buy
        service.getItemsToBuy = function() {
            return itemsToBuy;
        };

        // Method to return bought items
        service.getItemsBought = function() {
            return itemsBought;
        };
    }
})();