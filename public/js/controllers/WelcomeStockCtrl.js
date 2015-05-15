// public/js/controllers/WelcomeStockCtrl.js
angular.module('WelcomeStockCtrl', []).controller('WelcomeStockController', function($scope,$location) {
    $scope.stock_prompt = "Wybierz interesujace cię spółki";

    $scope.stock_list = [
        "Cras justo odio",
        "Dapibus ac facilisis in",
        "Morbi leo risus",
        "Moje elementy"
    ];
});
