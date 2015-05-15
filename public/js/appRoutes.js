// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'WelcomePageController'
        })

        .when('/choose_stocks', {
            templateUrl: 'views/choose_stocks.html',
            controller: 'WelcomeStockController'
        })

        .when('/welcome_finish', {
            templateUrl: 'views/welcome_finish.html',
            controller: 'WelcomeFinishController'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        });

    $locationProvider.html5Mode(true);

}]);