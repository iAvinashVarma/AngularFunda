'use strict';

eventsApp.factory('$exceptionHandler', function($log){
    return function(exception){
        $log.error("Exception handled: " + exception.message);
    };
});