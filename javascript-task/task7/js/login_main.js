angular.module("userApp", ["ngMessages", "ui.router"])

.controller("login", function(data, $scope, $http, $location, $state) {
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
            data.login(formData).then(function (data) {  //正确请求成功时处理  
                if(data.data.message == "success"){
                    var userData = {
                        iden: data.data.data.role.name,
                        name: data.data.data.manager.name
                    }
                    sessionStorage.setItem("userData",JSON.stringify(userData));
                    $state.go("main.tips");
                }else{
                    $scope.tips = data.data.message;
                }
            });
        }
    }
    $scope.clear = function(){
        $scope.tips = "";
    }
    $scope.tips = "初始账号：admin ，密码：123456";
    
});