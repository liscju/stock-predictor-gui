// public/js/controllers/WelcomeFinishCtrl.js
angular.module('WelcomeFinishCtrl', []).controller('WelcomeFinishController', ["$scope","$location","StockService",function($scope,$location,StockService) {

    $scope.finish = function() {
        console.log('Kliknal finish');
        console.log(StockService.getStocks(
            function (data) {
                console.log("Success");
                console.log(data);
            },function (data) {
                console.log("Failure");
                console.log(data);
            })
        );
        $location.path("/main");
    };

    $scope.gotoPrevPage = function() {
        $location.path("/welcome_choose_stocks")
    }
}]);