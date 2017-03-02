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
	.state("news",{
		url:"/myself/news",
		templateUrl:"./controllers/myself/oneself/news.html",
		controller:"newsCtrl"
	})
	.state("notes",{
		url:"/myself/notes",
		templateUrl:"./controllers/myself/oneself/notes.html",
		controller:"notesCtrl"
	})
	.state("notes.mynotes",{
		url:"/notes/mynotes",
		templateUrl:"./controllers/myself/oneself/mynotes.html",
		controller:"mynotesCtrl"
	})

	.state("comment",{
		url:"/myself/comment",
		templateUrl:"./controllers/myself/oneself/comment.html",
		controller:"commentCtrl"
	})
	.state("oneself",{
		url:"/myself/oneself",
		templateUrl:"./controllers/myself/oneself/oneself.html",
		controller:"oneselfCtrl"
	})
	.state("order",{
		url:"/myself/order",
		templateUrl:"./controllers/myself/order/order.html",
		controller:"orderCtrl"
	})
	.state("tuichu",{
		url:"/tuichu",
		templateUrl:"./controllers/myself/tuichu/tuichu.html",
		controller:"tuichuCtrl"
	})

	.state("course",{
		url:"/course",
		templateUrl:"./controllers/course/course.html",
		controller:"courseCtrl"
	})
		.state("content",{
			url:"/course/content",
			params:{"cateId":null},
			templateUrl:"./controllers/course/content/content.html",
			controller:"contentCtrl"
		})
	
	
	
})