(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
    var list1 = this;
    list1.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

    list1.addItem = function (index) {
        ShoppingListCheckOffService.addToBoughtList(index);
    };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var list2 = this;
    list2.alreadyBoughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;
    var buyItems = [
        { name: "cookies", quantity: 10 },
        { name: "chips", quantity: 5 },
        { name: "bismo", quantity: 2 },
        { name: "drink bottles", quantity: 5 },
        { name: "snacks", quantity: 10 }
    ];
    var boughtItems = [];

    service.addToBoughtList = function (itemIndex) {
        boughtItems.push(buyItems[itemIndex]);
        buyItems.splice(itemIndex, 1);
    };

    service.getToBuyItems = function() {
        return buyItems;
    }

    service.getBoughtItems = function() {
        return boughtItems;
    }
}

})();
