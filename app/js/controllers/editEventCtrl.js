'use strict';

eventsApp.controller('editEventCtrl', 
    function editEventCtrl($scope){
        $scope.saveEvent = function(event, newEventForm){
            console.log(newEventForm);
            if(newEventForm.$valid){
                window.alert('Saved ' + event.name);
            }
        }

        $scope.cancelEdit = function(){
             window.location = '/index.html';
        }
    }
);