angular
    .module('app')
    .controller("loginController", function ($scope, $window, employeeService) {

    var self = this;

    // initilize var
    self.user = [];
    self.username = "";
    self.password = "";
    self.error = false;

    // initilize function
    self.login = login;

    // hardcore login system
    function login() {
        employeeService.getData().then(function (response) {
            self.user = response.data;
            for(var i = 0; i < self.user.length ; i++) {
                if(self.user[i].username === self.username && self.user[i].password === self.password) {
                    self.error = false;
                    $window.location = "#/list"
                    return true
                }
                else {
                    self.error = true;
                }
            }
        })
    }
    
});
