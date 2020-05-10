angular
    .module('app')
    .controller("listController", function ($mdToast, employeeService) {

    var self = this;

    // initilize var
    self.employee = [];
    self.key = '';
    self.sort = 'firstName';
    self.pageSize = "5";
    self.currentPage = 1;
    // initilize function
    self.getEmployee = getEmployee;
    self.showNotif = showNotif;
    
    if(window.localStorage.getItem('data-employee') === null )
    {
        getEmployee();
    }
    else {
        self.employee = JSON.parse(window.localStorage.getItem('data-employee'));
        console.log(self.employee)
    }

    function getEmployee () {
        employeeService.getData().then(function (response) {
            self.employee = response.data
            window.localStorage.setItem('data-employee', JSON.stringify(self.employee));
        })
    }

    function showNotif (type, msg) {
        $mdToast.show({
            template: '<md-toast class="md-toast ' + type +'">' + msg + '</md-toast>',
            hideDelay: 26000,
            position: 'top right'
        });
    }

});
