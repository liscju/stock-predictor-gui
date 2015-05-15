// public/js/controllers/Welcome.js
angular.module('WelcomePageCtrl', []).controller('WelcomePageController', function($scope) {

    $scope.page_title = "Witaj w StockPredictor";

    $scope.hello = 'Witaj uzytkowniku!';

    $scope.message= 'Zanim pierwszy raz uruchomisz aplikacje ( i zaczniesz zgarniac gruby hajs) ' +
                    'niezbedne jest abyś dokonał podstawowej konfiguracji aplikacji i wybrał ' +
                    'interesujące Cię akcję do obserwacji ';

    $scope.next_page = 'Następna';
});