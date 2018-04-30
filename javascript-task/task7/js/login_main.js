angular.module("userApp", ["ngMessages", "ui.router"])

<<<<<<< HEAD
.controller("login", function(data, $scope, $http, $location, $state) {
=======
.controller("login", function(posts, $scope, $http, $location, $state) {
>>>>>>> bdc96a3a06821818e0e177bdd380418fb7066e64
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
<<<<<<< HEAD
            data.login(formData).then(function (data) {  //正确请求成功时处理  
=======
            posts.login(formData).then(function (data) {  //正确请求成功时处理  
>>>>>>> bdc96a3a06821818e0e177bdd380418fb7066e64
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
});