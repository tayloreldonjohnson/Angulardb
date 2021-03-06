var myApp = angular.module("myApp",["ui.router"]);
myApp.controller("MainController", MainController);
myApp.controller("ProductController", ProductController);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider.state("main",{
        url:"/",
        templateUrl:"/ngApp/Views/main.html",
        controller: MainController,
        controllerAs: "controller" 
    }).state("details",{
        url:"/details/:id",
        templateUrl:"/ngApp/Views/details.html",
        controller: ProductController,
        controllerAs: "controller"
    });
    $urlRouterProvider.otherwise("/notFound");
    $locationProvider.html5Mode(true);
}); 
