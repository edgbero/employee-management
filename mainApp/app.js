var app = angular.module('app', ['ui.bootstrap', "ngRoute", "ngAnimate", "ngMaterial", "ngMessages", "ngAria"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/login", {
        templateUrl: "pages/login.html",
        controller: "loginController"
    })
    .when("/list", {
        templateUrl: "pages/list.html",
        controller: "listController"
    })
    .when("/add", {
        templateUrl: "pages/add.html",
        controller: "addController"
    })
    .when("/detail/:username", {
        templateUrl: "pages/detail.html",
        controller: "detailController"
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