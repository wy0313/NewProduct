/**
 * Created by causal on 2016-11-13.
 */
'use strict';
angular.module('law.app').factory('httpClient',["$http",'$ionicLoading',function( $http,$ionicLoading ){
    var getApi = "http://119.10.11.121:8087/";

    var timest = function() {
        var tmp = Date.parse(new Date()).toString();
        tmp = tmp.substr(0, 10);
        return tmp;
    }
    var _sendRequest = function (options,successCallback,errorCallback) {
        var ts = timest();

        var sign = "" ;
        for( var key in options.sign ){
          sign += key.toLocaleLowerCase()+"="+options.sign[key]+"&";
        }
        sign += "ts=" + ts + "2D7E7K96-DAC5-4526-96Y3-C60CKEC4U120";

        if( options.method == "get"  ){
          var _options = {
            url: getApi + options.url,
            method : options.method,
            params : options.data,
            headers : {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Ts' : ts,
              "Sign": md5(sign)
            }
          };
        }else{
          var _options = {
            url: getApi + options.url,
            method : options.method,
            data : options.data,
            headers : {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Ts' : ts,
              "Sign": md5(sign)
            },
            transformRequest: function (obj) {
                if(!obj) return '';
                var str = [];
                for (var p in obj) {
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
                return str.join("&");
            } 
          };
        }

        $ionicLoading.show({
    	    content: 'Loading',
    	    animation: 'fade-in',
    	    showBackdrop: true,
    	    maxWidth: 200,
    	    showDelay: 0
    	  });

        $http(_options).success(function(data){
            successCallback(data)
            $ionicLoading.hide()
        }).error(function(data, status) {
            errorCallback(data)
            $ionicLoading.hide()
        });
    };

    return{
        get : function( url,data,sign,successCallback,errorCallback ){
            _sendRequest({
                url: url,
                method : "get",
                data : data,
                sign : sign
            },successCallback,errorCallback)
        },

        //读取单个属性
        post:function(  url,data,sign,successCallback,errorCallback  ){

            _sendRequest({
                url: url,
                method : "post",
                data : data,
                sign : sign
            },successCallback,errorCallback)
        }


    }
}])
