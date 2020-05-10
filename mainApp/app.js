var app = angular.module('app', ['ui.bootstrap', "ngRoute", "ngAnimate", "ngMaterial", "ngMessages", "ngAria"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/login", {
        templateUrl: "pages/login.html",
    })
    .when("/list", {
        templateUrl: "pages/list.html",
    })
    .when("/add", {
        templateUrl: "pages/add.html",
    })
    .when("/detail/:username", {
        templateUrl: "pages/detail.html",
    })
    .otherwise ({
        redirectTo: "/login"
    })
})

app.controller("appController", function ($scope) {

});

app.filter('startFrom', function() {
    return function(data, start) {
        return data.slice(start);
    }
})