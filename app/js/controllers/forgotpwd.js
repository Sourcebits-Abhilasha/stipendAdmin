/*================================================================
=>                  Controller = Forgotpwd
==================================================================*/
/*global app*/

app.controller('ForgotpwdCtrl', [ '$rootScope','$scope', 'loginAPI', 'ngProgress', 'ngDialog','usSpinnerService', function($rootScope, $scope, loginAPI, ngProgress, ngDialog, usSpinnerService) {
    'use strict';

    $rootScope.$on('$routeChangeSuccess', function () {
        debugger;
            console.log("i am here");
            // console.log($routeParams.type)
        });

    $scope.resetPassword = {
        visible: false
    };
    $scope.statusMsg = '';

    $scope.email = {
        emailId: ''
    }
    $scope.email = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    //2nd Form Data
    $scope.newAccessPasswordModel = '';
    $scope.newPasswordModel = '';
    $scope.newConfirmPasswordModel = '';
    $scope.passwordMatch = ($scope.newConfirmPasswordModel == $scope.newPasswordModel) ? true : false;


    $scope.$watch(function() {
        return $scope.newPasswordModel
    }, changePassword);
    $scope.$watch(function() {
        return $scope.newConfirmPasswordModel
    }, changePassword);

    function changePassword(newVal, oldVal) {
        if (newVal != '') {
            $scope.passwordMatch = ($scope.newConfirmPasswordModel == $scope.newPasswordModel) ? true : false;
        }
    }

    /* Call Rest Password API from here and pass data  */
    // $scope.newAccessPasswordModel = '';
    // $scope.newPasswordModel = '';
    // $scope.newConfirmPasswordModel = '';
    $scope.setNewPassword = function(userData) {


        var emailId = $scope.getParameterByName('emailId');
        var authCode = $scope.getParameterByName('authCode');
        console.log(emailId + '       ' + authCode);
   

        //debugger;
        var flag = (userData.newPassword === userData.confirmPassword);
        if(flag){
            //ngProgress.start();
            usSpinnerService.spin('spinner-1');
            var data = {
                'emailId': emailId,
                'authCode': authCode,
                'password': userData.newPassword
            }
            loginAPI.changePassword(data).then(
                function(data) {
                    if (data) {
                        console.log('success', data);
                        //console.log('success',data.statusMsg); not passing status message only passing string
                        //$location.url('/dashboard/home');
                        if (data == "Email doesn't Exixts") {
                            $scope.statusMsg = 'Email Address That you Entered is invalid';
                        } else {
                            $scope.statusMsg = 'Reset Password Link Sent to your Email Address';
                            //$scope.resetPassword.visible = true;
                        }
                        //ngProgress.complete();
                         usSpinnerService.stop('spinner-1');
                    };

                },
                function(err) {
                    console.log('err', err);
                });
           
        }else{
            ngDialog.open({
                template: '<p>Password and Confirm password does not match</p>',
                plain: true
            });
        }

    }

    $scope.getParameterByName = function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    $scope.getPassword = function(isValid) {

        if (!isValid) { //not valid
            //$scope.formValidations1 = true;
            //$scope.statusMsg = '';
            alert('Enter Correct Credentials !!');
        } else {
            console.log('$scope.email.emailId', $scope.email.emailId);

            ngProgress.start();
            var data = {
                "emailID": $scope.email.emailId
            }

            loginAPI.fgtPwd(data).then(
                function(data) {
                    if (data) {
                        console.log('success', data);
                        //console.log('success',data.statusMsg); not passing status message only passing string
                        //$location.url('/dashboard/home');
                        if (data == "Email doesn't Exixts") {
                            $scope.statusMsg = 'Email Address That you Entered is invalid';
                        } else {
                            $scope.statusMsg = 'Reset Password Link Sent to your Email Address';
                            //$scope.resetPassword.visible = true;
                        }
                        ngProgress.complete();
                    };
                },
                function(err) {
                    console.log('err', err);
                });
        }
    };
    console.log('Controller ===  ForgotpwdCtrl');

}]);


/*-----  End of Controller = Forgotpwd  ------*/
