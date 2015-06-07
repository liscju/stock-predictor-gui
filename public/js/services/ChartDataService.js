/**
 * Created by oem on 2015-06-06.
 */

angular.module('ChartDataServiceModule', []).factory('ChartDataService', ['$http', function($http) {

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    return {
        //use http get to retrieve chart data from REST service
        getData : function(onSuccess,onError,startDate,endDate,companyName) {
            $http.get('http://localhost:8080/StockPredictor/getCandlestickCharts?companyShortName='+companyName+'&dayFrom='+formatDate(startDate)+'&dayTo='+formatDate(endDate))
                .success(function(data) {
                    onSuccess(data);
                }).error(function(data) {
                    onError(data);
            });
        }
    }

}]);