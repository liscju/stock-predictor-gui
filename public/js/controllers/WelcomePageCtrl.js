// public/js/controllers/Welcome.js
angular.module('WelcomePageCtrl', []).controller('WelcomePageController', function($scope) {

    $scope.message= 'Witaj uzytkowniku!\n' +
                    'Zanim pierwszy raz uruchomisz aplikacje ( i zaczniesz zgarniac gruby hajs)\n' +
                    'niezbedne jest abyś dokonał podstawowej konfiguracji aplikacji i wybrał\n' +
                    'interesujące Cię akcję do obserwacji';

});