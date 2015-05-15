// public/js/services/StockService.js
angular.module('StockServiceModule', []).factory('StockService', ['$http', function($http) {

    return {
        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new stock
        createStocks : function(stockList) {
            return $http.post('/api/stocks', stockList);
        },

        getStocks : function() {
            $http.get('/api/stocks')
                .success(function(data) {
                })
                .error(function(data) {
                });

        }
    }

}]);
