/**
 * Created by oem on 2015-06-06.
 */


angular.module('ChartDataServiceModule', []).factory('ChartDataService', ['$http', function($http) {

    return {
        //use http get to retrieve chart data from REST service
        getData : function(onSuccess,onError,startDate,endDate,companyName) {
            $http.get('localhost:8080/StockPredictor/getCandlestickCharts?companyShortName='+companyName+'&dayFrom='+startDate+'&dayTo='+endDate)
                .success(function(data) {
                    onSuccess(data);
                }),error(function(data) {
                    onError(data);
            });
        }
    }

}]);