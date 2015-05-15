// public/js/controllers/WelcomeFinishCtrl.js
angular.module('WelcomeFinishCtrl', []).controller('WelcomeFinishController', function($scope,$location) {

    $scope.finish = function() {
        console.log('Kliknal finish');
    }
});