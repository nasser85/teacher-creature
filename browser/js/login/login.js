app.config(function ($stateProvider) {

    $stateProvider.state('login', {
        url: '/login/:user',
        templateUrl: 'js/login/login.html',
        controller: 'LoginCtrl'
    });

});

app.controller('LoginCtrl', function ($scope, AuthService, $state, $stateParams) {
    $(document).ready(function() {
        
        $('.message a').click(function(){
           $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
        });
    });
    if ($stateParams.user == 'Teacher') {
            document.body.style.backgroundImage = "url('teacher.jpg')"
        } else {
            document.body.style.backgroundImage = "url('school.jpg')"
        }
    $scope.login = {};
    $scope.error = null;
    $scope.userName = $stateParams.user;

    $scope.sendLogin = function (loginInfo) {

        $scope.error = null;

        AuthService.login(loginInfo).then(function () {
            $state.go('home');
        }).catch(function () {
            $scope.error = 'Invalid login credentials.';
        });

    };

});