// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', ["$scope","$location","StockService","ChartDataService",function($scope,$location,StockService,ChartDataService) {
    $scope.stock_list = [
    ];

    $scope.current_stock = "";

    $scope.chart_types = [
        "Zwykly",
        "Świece japonskie"
    ];

    $scope.current_chart_type=$scope.chart_types[0];

    $scope.chart_from_date = new Date();

    $scope.chart_to_date = new Date();

    $scope.chart_data=null;

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

        angular.element(document).ready(function () {
            $scope.fetch_data(chart_from_date,chart_to_date,current_stock);
            $scope.draw_simple_graph();
        });
    };

    $scope.choose_stock = function(stock) {
        $scope.current_stock = stock;
    };

    $scope.choose_chart_type = function(chart_type) {
        $scope.current_chart_type = chart_type;
        $scope.update_chart();
    };

    //retrieve data from the server
    $scope.fetch_data = function(startDate,endDate,company) {

        ChartDataService.getStocks(
            function (data) {
                console.log("Successfully fetched chart data.");
                var parsedObject=JSON.parse(data);
                $scope.chart_data=new Array(parsedObject.candles.length);
                for(var i=0;i<parsedObject.candles.length;i++) {
                    $scope.chart_data[i].date=parsedObject.candles[i].date;
                    $scope.chart_data[i].high=parsedObject.candles[i].minPrice;
                    $scope.chart_data[i].low=parsedObject.candles[i].maxPrice;
                    $scope.chart_data[i].open=parsedObject.candles[i].openingPrice;
                    $scope.chart_data[i].close=parsedObject.candles[i].closingPrice;
                }
            },function (data) {
                console.log("Failure while fetching chart data.");
                console.log(data);
            },startDate,endDate,company);
    };

    $scope.update_chart = function() {
        if($scope.current_chart_type == "Zwykly") {
            $scope.draw_simple_graph();
        } else {
            $scope.draw_candle_graph();
        }
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


    $scope.getDayClass = function(date, mode) {
        console.log("Date:",date);
        console.log("Mode:",mode);
    };


    $scope.draw_simple_graph = function() {
        var chart = AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "dark",
            "marginRight": 80,
            "autoMarginOffset": 20,
            "path": "http://www.amcharts.com/lib/3/",
            "dataDateFormat": "YYYY-MM-DD",
            "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "position": "left"
            }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [{
                "id": "g1",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "title": "red line",
                "useLineColorForBulletBorder": true,
                "valueField": "value",
                "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>"
            }],
            "chartScrollbar": {
                "graph": "g1",
                "scrollbarHeight": 80,
                "backgroundAlpha": 0,
                "selectedBackgroundAlpha": 0.1,
                "selectedBackgroundColor": "#888888",
                "graphFillAlpha": 0,
                "graphLineAlpha": 0.5,
                "selectedGraphFillAlpha": 0,
                "selectedGraphLineAlpha": 1,
                "autoGridCount":true,
                "color":"#AAAAAA"
            },
            "chartCursor": {
                "pan": true,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha":0,
                "valueLineAlpha":0.2
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true,
                "position": "top"
            },
            "export": {
                "enabled": true
            },
            "dataProvider": [{
                "date": "2012-07-27",
                "value": 13
            }, {
                "date": "2012-07-28",
                "value": 11
            }, {
                "date": "2012-07-29",
                "value": 15
            }, {
                "date": "2012-07-30",
                "value": 16
            }, {
                "date": "2012-07-31",
                "value": 18
            }, {
                "date": "2012-08-01",
                "value": 13
            }, {
                "date": "2012-08-02",
                "value": 22
            }]
        });

        chart.addListener("rendered", zoomChart);

        zoomChart();

        function zoomChart() {
            chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
        }
    };

    $scope.draw_candle_graph = function() {
        var chart = AmCharts.makeChart( "chartdiv", {
            "type": "serial",
            "theme": "dark",
            "dataDateFormat":"YYYY-MM-DD",
            "path": "http://www.amcharts.com/lib/3/",
            "valueAxes": [ {
                "position": "left"
            } ],
            "graphs": [ {
                "id": "g1",
                "balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
                "closeField": "close",
                "fillColors": "#7f8da9",
                "highField": "high",
                "lineColor": "#7f8da9",
                "lineAlpha": 1,
                "lowField": "low",
                "fillAlphas": 0.9,
                "negativeFillColors": "#db4c3c",
                "negativeLineColor": "#db4c3c",
                "openField": "open",
                "title": "Price:",
                "type": "candlestick",
                "valueField": "close"
            } ],
            "chartScrollbar": {
                "graph": "g1",
                "graphType": "line",
                "scrollbarHeight": 30
            },
            "chartCursor": {
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true
            },
            "dataProvider": $scope.chart_data,
            "export": {
                "enabled": true,
                "position": "bottom-right"
            }
        } );

        chart.addListener( "rendered", zoomChart );
        zoomChart();

        // this method is called when chart is first inited as we listen for "dataUpdated" event
        function zoomChart() {
            // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
            chart.zoomToIndexes( chart.dataProvider.length - 10, chart.dataProvider.length - 1 );
        }
    };
}]);












