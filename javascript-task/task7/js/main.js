angular.module("userApp",["ui.router"])
<<<<<<< HEAD
.controller("main", function(data, sideMent,  $scope, $location, $state){
=======
.controller("main", function(posts, sideMent,  $scope, $location, $state){
>>>>>>> bdc96a3a06821818e0e177bdd380418fb7066e64
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
<<<<<<< HEAD
        data.logout().then(function(data){
=======
        posts.logout().then(function(data){
>>>>>>> bdc96a3a06821818e0e177bdd380418fb7066e64
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
