// public/js/services/StockService.js
angular.module('StockServiceModule', []).factory('StockService', ['$http', function($http) {

    return {
        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new stock
        create : function(stockData) {
            return $http.post('/api/stocks', stockData);
        }
    }

}]);
