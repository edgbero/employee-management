angular
    .module('app')
    .controller("homeController", function ($scope, homeService) {

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
        homeService.getData().then(function (response) {
            self.user = response.data;
            for(var i = 0; i < self.user.length ; i++) {
                if(self.user[i].username === self.username && self.user[i].password === self.password) {
                    self.error = false;
                    console.log('ok')
                    return true
                }
                else {
                    self.error = true;
                }
            }
        })
    }
    
});
