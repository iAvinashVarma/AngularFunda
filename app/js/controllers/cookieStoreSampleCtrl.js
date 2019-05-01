'use strict'

eventsApp.controller('cookieStoreSampleCtrl',
    function cookieStoreSampleCtrl($scope, $cookieStore, $log){
        $scope.event = {id: 1, name: "My Event"};

        $scope.saveEventToCookie = function(event){
            $cookieStore.put('event', event);
        };

        $scope.getEventFromCookie = function(){
            var event = $cookieStore.get('event');
            if(event){
                $log.info($cookieStore.get('event'));
            } else {
                $log.warn('Event cookie is not available');
            }
        };

        $scope.removeEventCookie = function(){
            $cookieStore.remove('event');
        };
    }
);