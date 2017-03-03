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