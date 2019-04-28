'use strict';

eventsApp.controller('eventCtrl', function EventController($scope, eventData){
    $scope.sortorder = 'name';
    eventData.getEvent(function(event){
        $scope.event = event;
    });
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    }
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    }
});