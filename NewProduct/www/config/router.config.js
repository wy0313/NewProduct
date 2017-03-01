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
	.state("bank.history",{
		url:"/bank/history",
		templateUrl:"./controllers/bank/history.html",
		controller:"historyCtrl"
	})
	.state("bank.branch",{
		url:"/bank/branch",
		templateUrl:"./controllers/bank/branch.html",
		controller:"branchCtrl"
	})
	.state("bank.main",{
		url:"/bank/main",
		templateUrl:"./controllers/bank/main.html",
		controller:"mainCtrl"
	})
	.state("bank.simulation",{
		url:"/bank/simulation",
		templateUrl:"./controllers/bank/simulation.html",
		controller:"simulationCtrl"
	})
	.state("bank.stream",{
		url:"/bank/stream",
		templateUrl:"./controllers/bank/stream.html",
		controller:"streamCtrl"
	})
	.state("know",{
		url:"/know",
		templateUrl:"./controllers/know/know.html",
		controller:"knowCtrl"
	})
	.state("myself",{
		url:"/myself",
		templateUrl:"./controllers/myself/myself.html",
		controller:"myselfCtrl"
	})


})