angular.module("myApp")
    .directive('ngTab', function() {
    return {
        restrict: 'A',
        replace: true,
        link:function(scope,el,attr){
	       console.log(el.find("nav").html());
	     	$("nav").find("a").click(function(){
		        $("#duan").find('div').css("display",'none')
		        $("#duan").find('div').eq($(this).index()).css('display','block')
		    })
        }
    };
})