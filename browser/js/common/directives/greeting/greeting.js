app.directive('greeting', function (RandomGreetings) {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/greeting/greeting.html',
        link: function (scope) {
            scope.greeting = RandomGreetings.getRandomGreeting();
        }
    };

});
