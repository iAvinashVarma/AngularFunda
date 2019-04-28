'use strict';

eventsApp.controller('eventCtrl', function EventController($scope, $log, eventData){
    $scope.sortorder = 'name';
    eventData.getEvent()
    .success(function(event){
        $scope.event = event;
    })
    .error(function(data, status, headers, config){
        $log.warn(data, status, header(), config);
    });
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    }
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    }
});