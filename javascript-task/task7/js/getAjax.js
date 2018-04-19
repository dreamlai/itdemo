angular.module("userApp")
    .factory("gets", function($http,$stateParams){
        return {
            article: function(){
                return $http.get('/carrots-admin-ajax/a/article/search', {  
                    params: {  
                        "page": $stateParams.page,
                        "size": $stateParams.size
                    }
                })
            },
            search: function(search_data){
                return $http.get('/carrots-admin-ajax/a/article/search', {  
                    params: search_data
                })
            }
        }
    })