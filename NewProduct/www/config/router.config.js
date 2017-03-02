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
	.state("awser",{
		url:"/awser/:id",
		templateUrl:"./controllers/bank/awser.html",
		controller:"awserCtrl"
	})
	.state("score",{
		url:"/score/:id",
		templateUrl:"./controllers/bank/score.html",
		controller:"scoreCtrl"
	})
	.state("law",{
		url:"/law",
		templateUrl:"./controllers/bank/law.html",
		controller:"lawCtrl"
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
		url:"/news",
		templateUrl:"./controllers/myself/oneself/news.html",
		controller:"newsCtrl"
	})
		.state("notes",{
			url:"/notes",
			templateUrl:"./controllers/myself/oneself/notes.html",
			controller:"notesCtrl"
		})
			.state("mynotes",{
				url:"/mynotes",
				templateUrl:"./controllers/myself/oneself/mynotes.html",
				controller:"mynotesCtrl"
			})
	.state("comment",{
		url:"/comment",
		templateUrl:"./controllers/myself/oneself/comment.html",
		controller:"commentCtrl"
	})
	.state("oneself",{
		url:"/oneself",
		templateUrl:"./controllers/myself/oneself/oneself.html",
		controller:"oneselfCtrl"
	})
	// .state("order",{
	// 	url:"/order",
	// 	templateUrl:"./controllers/myself/order/order.html",
	// 	controller:"orderCtrl"
	// })
})