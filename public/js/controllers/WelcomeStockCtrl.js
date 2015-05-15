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

    $scope.delStock = function(stock) {
        var indexOfStockToRemove = $scope.stock_list.indexOf(stock);
        if (indexOfStockToRemove > -1) {
            $scope.stock_list.splice(indexOfStockToRemove,1);
        }
    };

    $scope.gotoNextPage = function() {
        $location.path("/welcome_finish");
    };

    $scope.gotoPrevPage = function() {
        $location.path("/");
    };
});

angular.module('WelcomeStockCtrl').directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
});