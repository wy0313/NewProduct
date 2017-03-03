<<<<<<< HEAD
angular.module( 'myApp' ).factory( 'knowledgeServer',function( getHttp ){
	
return {
		// 登录
		getTitleCategory : function( opt,successCallback ){
			getHttp.get( 'Knowledge/GetKnowledgeCategory',{
				user_id : opt.user_id
			},function(data){
				successCallback( data.data )
			})
		},
		// 渲染题库
		getMenuCategory:function( opt,successCallback ){
			getHttp.get( 'Knowledge/GetKnowledgeCategory',{
				user_id : opt.user_id,
				parent_id : opt.parent_id
			},function(data){
				successCallback( data.data )
			})
		},
		getSubMenuCategory : function( opt,successCallback ){
			getHttp.get( 'Knowledge/GetKnowledgeCategoryList',{
				user_id : opt.user_id,
				parent_id : opt.parent_id
			},function(data){
				successCallback( data.data )
			})
		}
		

	}


} )


=======
angular.module('myApp').factory('knowServer',function(httpServer){
    return {
        
        GetTitleCategory : function(opt,successCallback){
             httpServer.get('Knowledge/GetKnowledgeCategory',{
                   user_id:opt.user_id
             },function(data){
                     successCallback(data);
             })
        },

        GetMenuCategory : function(opt,successCallback){
             httpServer.get('Knowledge/GetKnowledgeCategory',{
             	   parent_id:opt.parent_id,
                   user_id:opt.user_id
             },function(data){
                     successCallback(data);
             })
        },

        GetSubMenuCategory : function(opt,successCallback){
             httpServer.get('Knowledge/GetKnowledgeCategoryList',{
             	   parent_id:opt.parent_id,
                   user_id:opt.user_id
             },function(data){
                    successCallback(data);
             })
        }

    }
})
>>>>>>> baf21e2bb691a363fcc2c639879b42304054f479
