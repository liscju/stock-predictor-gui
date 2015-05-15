// public/js/controllers/WelcomePageCtrl.js
angular.module('WelcomePageCtrl', []).controller('WelcomePageController', function($scope,$location) {

    $scope.page_title = "Witamy w StockPredictor";

    $scope.hello = 'Witaj uzytkowniku!';

    $scope.message= 'Zanim pierwszy raz uruchomisz aplikacje ( i zaczniesz zgarniac gruby hajs) ' +
                    'niezbedne jest abyś dokonał podstawowej konfiguracji aplikacji i wybrał ' +
                    'interesujące Cię akcję do obserwacji ';

    $scope.next_page = 'Następna';

    $scope.gotoNextPage = function () {
        $location.path("/welcome_choose_stocks");
    };
});