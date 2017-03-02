angular.module("myApp").controller("indexCtrl",function($scope,httpServer){

	   	$scope.ss='aaa'
	   	var swiper = new Swiper('.index-banner',{
		   	direction:"horizontal",
		    pagination: '.swiper-pagination',
		    paginationClickable: true,
		    autoplay : 3000,
		    loop:true,
	        centeredSlides: true,
	        autoplay: 2500,
	        autoplayDisableOnInteraction: false
		})

		

})