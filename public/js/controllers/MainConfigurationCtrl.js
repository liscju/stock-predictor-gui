// public/js/controllers/MainConfigurationCtrl.js
angular.module('MainConfigurationCtrl', []).controller('MainConfigurationController', ["$scope","$location","StockService",function($scope,$location,StockService) {

    $scope.stock_list = [
    ];

    $scope.init = function() {
        StockService.getStocks(
            function (data) {
                console.log("Success");
                $scope.stock_list = data;
            },function (data) {
                console.log("Failure");
                console.log(data);
            });
    };

    $scope.addStock = function (stock) {
        $scope.stock_list.push(stock);
        $scope.stock_to_add = "";
        StockService.updateStocks($scope.stock_list);
    };

    $scope.delStock = function(stock) {
        var indexOfStockToRemove = $scope.stock_list.indexOf(stock);
        if (indexOfStockToRemove > -1) {
            $scope.stock_list.splice(indexOfStockToRemove,1);
        }
        StockService.updateStocks($scope.stock_list);
    };

}]);
