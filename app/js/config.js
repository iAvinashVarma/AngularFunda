'use strict';

eventsApp.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
});