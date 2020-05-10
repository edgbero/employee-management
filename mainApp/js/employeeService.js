angular
    .module("app")
    .factory("employeeService", function ($http) {
    
    var self = this;
    self.getData = getData;

    function getData() {
        return $http.get('data/data.json')  
    }

    return {
        getData: getData
    }

});
