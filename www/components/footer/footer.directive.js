angular.module("myApp").directive('footDirective',function(){
        return{
        	  replace:true,
        	  templateUrl:'./components/footer/footer.html',
        	  controller:function($scope){
        	  	
        	  }
        }
})

