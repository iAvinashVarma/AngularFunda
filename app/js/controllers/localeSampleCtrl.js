'use strict'

eventsApp.controller('localeSampleCtrl',
    function localeSampleCtrl($scope, $locale, $log){
        $log.info($locale);
        $scope.myDate = Date.now();
        $scope.fullDateFormat = $locale.DATETIME_FORMATS.fullDate;
        $scope.shortDateFormat = $locale.DATETIME_FORMATS.shortDate;
        throw { message: 'error message' };
    }
);