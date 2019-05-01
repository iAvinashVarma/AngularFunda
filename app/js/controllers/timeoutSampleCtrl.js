'use strict'

eventsApp.controller('timeoutSampleCtrl',
    function timeoutSampleCtrl($scope, $timeout){
        var promise = $timeout(function(){
            $scope.name = "John Doe";
        }, 3000);

        $scope.cancel = function(){
            $timeout.cancel(promise);
        };
    }
);