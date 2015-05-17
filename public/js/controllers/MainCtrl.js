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

    $scope.chart_from_date = new Date();

    $scope.chart_to_date = new Date();

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
            $scope.draw_simple_graph();
        });
    };

    $scope.choose_stock = function(stock) {
        $scope.current_stock = stock;
    };

    $scope.choose_chart_type = function(chart_type) {
        $scope.current_chart_type = chart_type;
        if (chart_type == "Zwykly") {
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
            "dataProvider": [ {
                "date": "2011-08-01",
                "open": "136.65",
                "high": "136.96",
                "low": "134.15",
                "close": "136.49"
            }, {
                "date": "2011-08-02",
                "open": "135.26",
                "high": "135.95",
                "low": "131.50",
                "close": "131.85"
            }, {
                "date": "2011-08-05",
                "open": "132.90",
                "high": "135.27",
                "low": "128.30",
                "close": "135.25"
            }, {
                "date": "2011-08-06",
                "open": "134.94",
                "high": "137.24",
                "low": "132.63",
                "close": "135.03"
            }],
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












