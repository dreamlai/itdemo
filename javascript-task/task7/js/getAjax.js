var get_data = angular.module("userApp")
    get_data.factory("gets", function($http,$stateParams){
        return {
            search: function(search_data){
                return $http.get('/carrots-admin-ajax/a/article/search', {  
                    params: search_data
                })
            }
        }
    })
    get_data.factory("posts", function($http,$stateParams){
        return {
            imgFile: function(file){
                return $http.post('/carrots-admin-ajax/a/u/img/task', {  
                    data: {
                        "file": file
                    },
                    headers: {'Content-Type': "multipart/form-data"}
                })
            },
            
        }
    })