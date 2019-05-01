'use strict'

eventsApp.controller('logSampleCtrl',
    function logSampleCtrl($log){
        $log.log('Log some information.');
        $log.info('Here is some information.');
        $log.warn('Danger, never settle!');
        $log.error('Fatal.');
    }
);