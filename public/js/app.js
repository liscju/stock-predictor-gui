// public/js/app.js
angular.module('stock-predictor-gui',
              ['ngRoute', 'appRoutes',
               'MainCtrl', 'NerdCtrl',
               'WelcomePageCtrl','WelcomeStockCtrl',
               'NerdService']
);
