angular.module("myApp").config(function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.when("", "/index");
     
	$stateProvider
	.state("index",{
		url:"/index",
		templateUrl:"./controllers/index/index.html",
		controller:"indexCtrl"
	})
	.state("bank",{
		url:"/bank",
		templateUrl:"./controllers/bank/bank.html",
		controller:"bankCtrl"
	})
	.state("know",{
		url:"/know",
		templateUrl:"./controllers/know/know.html",
		controller:"knowCtrl"
	})
	.state("myself",{
		url:"myself",
		templateUrl:"./controllers/myself/myself.html",
		controller:"myselfCtrl"
	})
	.state("news",{
		url:"/news",
		templateUrl:"./controllers/myself/oneself/news.html",
		controller:"newsCtrl"
	})
	.state("notes",{
		url:"/notes",
		templateUrl:"./controllers/myself/oneself/notes.html",
		controller:"notesCtrl"
	})
	.state("comment",{
		url:"/comment",
		templateUrl:"./controllers/myself/oneself/comment.html",
		controller:"commentCtrl"
	})

})