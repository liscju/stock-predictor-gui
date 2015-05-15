// public/js/controllers/WelcomeStockCtrl.js
angular.module('WelcomeStockCtrl', []).controller('WelcomeStockController', function($scope,$location) {
    $scope.stock_prompt = "Wybierz interesujace cię spółki";
    $scope.stock_to_add = "";

    $scope.stock_list = [
    ];

    $scope.addStock = function (stock) {
        $scope.stock_list.push(stock);
        $scope.stock_to_add = "";
    };
});
