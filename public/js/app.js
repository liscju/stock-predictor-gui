// public/js/app.js
angular.module('stock-predictor-gui',
              ['ngRoute', 'appRoutes','ui.bootstrap',
               'WelcomePageCtrl','WelcomeStockCtrl','WelcomeFinishCtrl',
               'MainCtrl',
               'StockServiceModule','ChartDataServiceModule']
);
