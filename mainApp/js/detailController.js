angular
    .module('app')
    .controller("detailController", function ($routeParams, $window) {

    var self = this;
    // initilize var
    self.data = {};
    self.username = $routeParams.username;
    self.employee = window.localStorage.getItem('data-employee') !== null ? JSON.parse(window.localStorage.getItem('data-employee')) : [];
    
    // initilize function
    self.getDetail = getDetail;
    
    getDetail();
    function getDetail() {
        var index = self.employee.map(function(x) {
            return x.username;
        }).indexOf(self.username)
        self.data = self.employee[index]
        self.data.name = self.data.firstName + ' ' + self.data.lastName;
    }

})
