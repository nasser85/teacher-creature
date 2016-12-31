app.config(function ($stateProvider) {

    $stateProvider.state('login', {
        url: '/login/:user',
        templateUrl: 'js/login/login.html',
        controller: 'LoginCtrl'
    });

});

app.controller('LoginCtrl', function ($scope, AuthService, $state, $stateParams, UserFactory) {
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

    $scope.createUser = function(user) {
        UserFactory.create(user)
        .then(function(newUser) {
            return AuthService.login({email: newUser.email, password: user.password})
                .then(function () {
                    console.log("and here");
                    $state.go('home');
                })
                .catch(function () {
                    $scope.error = 'Invalid login credentials.';
                });
        })
    }
    $scope.sendLogin = function (loginInfo) {

        $scope.error = null;

        AuthService.login(loginInfo).then(function () {
            $state.go('home');
        }).catch(function () {
            $scope.error = 'Invalid login credentials.';
        });

    };

});