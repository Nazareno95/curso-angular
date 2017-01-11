angular.module("FinalApp",["lumx","ngRoute","ngResource"])
.config(function	($routeProvider){
	$routeProvider
	 .when("/",{
	 	controller: "MainController",
	 	templateUrl: "home.html"
	 })
});