angular.module( 'myApp' ).factory( "topicServer",function( httpServer ){
    return {
        topicTitle : function(opt,successCallback){
             httpServer.get("Question/GetQuestionCategory",{
                user_id : opt.user_id
            },function(data){
                successCallback(data.data.RetValue);
            })
        },
         nav : function(opt,successCallback){
             httpServer.get("Question/GetQuestionCategory",{
                parent_id : opt.parent_id,
                user_id : opt.user_id
            },function(data){
                successCallback(data.data.RetValue,data.data.RetValue[0].id);
            })
        },topicNums : function(opt,successCallback){
            httpServer.get("Question/GetQuestionCategoryList",{
                parent_id : opt.parent_id,
                user_id : opt.user_id
            },function(data){
                successCallback(data.data.RetValue);
            })
        }

    }
} )