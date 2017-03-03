angular.module('myApp').factory("indexServer",function(httpServer){
    return  {
    	// 获取菜单
    	getMenu:function(successCallback){
    		httpServer.get("Index/GetMenuList",{},
            function(data){
                successCallback(data.data)
            })
    	}
    }
})