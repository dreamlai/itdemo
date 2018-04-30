angular.module("userApp")
    .factory("data", function($http, $stateParams, $httpParamSerializerJQLike){
        return {
            search: function(search_data){
                return $http.get('/carrots-admin-ajax/a/article/search', {  
                    params: search_data
                })
            },
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
            },
            stateChange: function(id, state){
                var params = {
                    "id": id,
                    "status": state
                }
                return $http({
                    method: "PUT",
                    url: "/carrots-admin-ajax/a/u/article/status",    
                    params: params,
                })
            },
            delete: function(id){
                return $http({
                    method: "DELETE",
                    url: "/carrots-admin-ajax/a/u/article/"+ id
                })
            },
            single: function(id){
                return $http({
                    method: "GET",
                    url: "/carrots-admin-ajax/a/article/"+ id
                })
            },
            edit: function(id, params){
                return $http({
                    method: "PUT",    
                    url: "/carrots-admin-ajax/a/u/article/" + id,    
                    data:  $httpParamSerializerJQLike(params),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
            },
        }
    })
    .factory("alerts", function($uibModal, $rootScope){
        return {
            simple: function(content, func){
                return $uibModal.open({  
                    templateUrl : "modules/popup.html",
                    controller: function($scope, $uibModalInstance){
                        $scope.content = content;
                        $scope.ok = function(){
                            $uibModalInstance.close();
                            func();
                        }
                    }
                });
            },
            complex: function(tips, content, func){
                return $uibModal.open({  
                    templateUrl : "modules/popup.html",
                    controller: function($scope, $uibModalInstance){
                        $scope.tips = tips;
                        $scope.content = content;
                        $scope.ok = function(){
                            $uibModalInstance.close();
                            func();
                        }
                    }
                });
            }
        }
    })