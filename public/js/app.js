// public/js/app.js
angular.module('stock-predictor-gui',
              ['ngRoute', 'appRoutes',
               'WelcomePageCtrl','WelcomeStockCtrl','WelcomeFinishCtrl',
               'MainCtrl',
               'StockServiceModule']
);
