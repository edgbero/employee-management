angular
    .module('app')
    .controller("addController", function ($window) {

    var self = this;
    
    // initilize var
    self.form = {};
    self.employee = window.localStorage.getItem('data-employee') !== null ? JSON.parse(window.localStorage.getItem('data-employee')) : [];
    self.currentDate = new Date();
    self.currentDate = dateFormatter(self.currentDate)

    // initilize function
    self.submit = submit;

    function dateFormatter (date) {
        var day = '' + date.getDate(),
        month = '' + (date.getMonth() + 1),
        year = '' + date.getFullYear()
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    function submit () {
        self.form.username = self.username;
        self.form.password = self.password;
        self.form.firstName = self.firstName;
        self.form.lastName = self.lastName;
        self.form.email = self.email;
        self.form.birthDate = dateFormatter(self.dateOfBirth);
        self.form.basicSalary = self.salary;
        self.form.status = self.status
        self.form.group = self.group;
        self.form.description = self.currentDate;
        self.employee.push(self.form);

        window.localStorage.setItem('data-employee', JSON.stringify(self.employee));
        $window.location = "#/list";
    }

})
