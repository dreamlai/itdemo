angular.module("userApp",["ui.router"])
.controller("main", function(data, sideMent,  $scope, $location, $state){
    var url = $location.url().split("/")[1];
    if(url == "article" || url == "add"){
        $scope.active = 1;
        $scope.subActive = 3;
    }
    $scope.sideMent = sideMent;
    var user = JSON.parse(sessionStorage.getItem("userData"));
    if(!user){
        $state.go("login");
    }else{
        $scope.iden = user.iden;
        $scope.name = user.name;
    }
    $scope.logout = function(){
        data.logout().then(function(data){
            if(data.data.message == "success"){
                sessionStorage.removeItem("userData");
                $state.go("login");
            }
        })
    }
    $scope.toggle = function(num){
        $scope.active = num;
    }
    $scope.click = function(num){
        $scope.subActive = num;
    }
})
