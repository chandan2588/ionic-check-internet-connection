angular.module('alertsApp', ['ionic'])
    .controller('alertsCtrl', function ($scope, $ionicPopup, $timeout) {

        // An alert dialog
        $scope.checkInternet = function () {

            if (window.Connection) {
                if (navigator.connection.type == Connection.NONE) {
                    console.log('test controller1');

                    $ionicPopup.alert({
                        title: 'Internet Disconnected',
                        template: 'The internet is disconnected on your device.'
                    }).then(function (res) {
                        if (res) {
                            console.log('No internet.. Exit app');
                            ionic.Platform.exitApp();
                        }
                    });

                }
            }
        };
    });