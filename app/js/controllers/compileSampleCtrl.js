'use strict';

eventsApp.controller('compileSampleCtrl', 
    function compileSampleCtrl($scope, $compile){
       $scope.appendDivToElement = function(markup){
           return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
       }
    }
);