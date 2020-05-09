angular
    .module("app")
    .factory("homeService", function ($http) {
    
    // var self = this;
    // self.getData = getData;

    // function getData () {
    //     // $http('GET', 'data/data.json')  
    //     //     .success(function(response) {
    //     //         return response;
    //     //     }).error(function(error) {
    //     //         console.log(error);
    //     //     });
        
    // };

    // return {
    //     getData: getData
    // }

    function getData() {
        return $http.get('data/data.json')  
    }

    return {
        getData: getData
    }

});
