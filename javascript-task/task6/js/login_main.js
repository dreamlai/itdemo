var check = angular.module("login", ["ngMessages"]);

check.controller("check", function($scope, $http) {
    $scope.check = function(){
        if(!$scope.name || $scope.name.length < 4 || $scope.name.length > 18){
            $scope.tips = "用户为空或长度错误！";
        }else if(!$scope.pwd || $scope.pwd.length < 4 || $scope.pwd.length > 18){
            $scope.tips = "密码为空或长度错误！";
        }else{
            var formData = {  
                name: $scope.name,
                pwd: $scope.pwd
            }
            $http({
                method: "POST",    
                url: "/carrots-admin-ajax/a/login",    
                data:  $.param(formData),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function (data) {  //正确请求成功时处理  
                if(data.data.message == "success"){
                    window.location.href = "backstage.html";
                }else{
                    $scope.tips = data.data.message;
                }
            });
        }
    }
    $scope.clear = function(){
        $scope.tips = "";
    }
});