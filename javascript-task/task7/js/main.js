angular.module("userApp",["ui.router"])
.controller("main", function(posts, sideMent,  $scope, $location, $state){
    var url = $location.url().split("/")[1];
    if(url == "article" || url == "add"){
        $scope.active = 1;
        $scope.subActive = 3;
    }
    $scope.sideMent = sideMent;
    var data = JSON.parse(sessionStorage.getItem("userData"));
    if(!data){
        $state.go("login");
    }else{
        $scope.iden = data.iden;
        $scope.name = data.name;
    }
    $scope.logout = function(){
        posts.logout().then(function(data){
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
