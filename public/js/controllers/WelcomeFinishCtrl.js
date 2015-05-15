// public/js/controllers/WelcomeFinishCtrl.js
angular.module('WelcomeFinishCtrl', []).controller('WelcomeFinishController', ["$scope","$location","StockService",function($scope,$location,StockService) {

    $scope.finish = function() {
        console.log('Kliknal finish');
        console.log(StockService.getStocks() );
    };

    $scope.gotoPrevPage = function() {
        $location.path("/welcome_choose_stocks")
    }
}]);