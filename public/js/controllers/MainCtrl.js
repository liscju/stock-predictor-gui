// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', ["$scope","$location","StockService",function($scope,$location,StockService) {
    $scope.stock_list = [
    ];

    $scope.current_stock = "";

    $scope.chart_types = [
        "Zwykly",
        "Świece japonskie"
    ];

    $scope.current_chart_type=$scope.chart_types[0];

    $scope.init = function() {
        StockService.getStocks(
            function (data) {
                console.log("Success");
                $scope.stock_list = data;
                if ($scope.stock_list.length > 0)
                    $scope.current_stock = $scope.stock_list[0];
            },function (data) {
                console.log("Failure");
                console.log(data);
            });
    };

    $scope.choose_stock = function(stock) {
        $scope.current_stock = stock;
    };

    $scope.choose_chart_type = function(chart_type) {
        $scope.current_chart_type = chart_type;
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

    $scope.chart_from_date = new Date();
    $scope.chart_to_date = new Date();
    $scope.getDayClass = function(date, mode) {
        console.log("Date:",date);
        console.log("Mode:",mode);
    };
}]);












