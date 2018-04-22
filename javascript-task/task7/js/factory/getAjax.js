angular.module("userApp")
    .factory("gets", function($http, $stateParams, $httpParamSerializerJQLike){
        return {
            search: function(search_data){
                return $http.get('/carrots-admin-ajax/a/article/search', {  
                    params: search_data
                })
            }
        }
    })
    .factory("posts", function($http, $stateParams, $httpParamSerializerJQLike){
        return {
            article: function(params){
                console.log(params)
                return $http({
                    method: "POST",    
                    url: "/carrots-admin-ajax/a/u/article",    
                    data:  $httpParamSerializerJQLike(params),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
            },
            login: function(params){
                return $http({
                    method: "POST",    
                    url: "/carrots-admin-ajax/a/login",    
                    data:  $httpParamSerializerJQLike(params),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
            },
            logout: function(){
                return $http.post("/carrots-admin-ajax/a/logout")
            }
            
        }
    })