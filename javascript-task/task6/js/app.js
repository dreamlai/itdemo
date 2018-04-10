angular.module("userApp", ["ui.bootstrap"]).controller("mydata", function ($scope) {
    console.log($scope);
    $scope.dat = new Date();
    $scope.format = "yyyy/MM/dd";
    $scope.altInputFormats = ['yyyy/M!/d!'];
    $scope.popup1 = {
        opened: false
    };
    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };
});

var app = angular.module("userApp", ["ngRoute"]);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: './modules/main.html'
    })
    .when('/article/:page/:size', {
        templateUrl: './modules/article.html?ver=8885.0'
    })
    .when('/addarticle', {
        templateUrl: './modules/addarticle.html'
    })
    .otherwise({redirectTo: '/'}); //表示没有匹配到正确路由时跳转到这里
}]);

app.controller('mydata', function ($scope, $http, $location) {
    $scope.jume_page = 1;
    $scope.show_page = 10;
    $scope.all_page =0;
    $scope.pages = [];
    $scope.isHide = true;
    var _get = function(page,size){
        $http.get('/carrots-admin-ajax/a/article/search', {  
        params: {  
            "page": page,
            "size": size
        }
        }).then(function (Data) {  //正确请求成功时处理  
            $location.url("/article/"+ page +"/"+ size);
            $scope.datas = Data.data.data.articleList;
            $scope.jume_page = page;
            $scope.all_page = Math.ceil(Data.data.data.total/$scope.show_page);
            reloadPno();
            console.info($scope.pages);
            $scope.isHide = false;
        });
    };

    $scope.init_page = function(){
        _get(1, 10);
    };

    var init = function(){
        var url = $location.path().split("/");
        for( i in url){
            if(!url[i]){
                url.splice(i,1);
            }
        }
        if(url[0] == "article"){
             _get(url[1], url[2]);
        }
    };

    init();

    $scope.jume = function(page){
        if (page == $scope.jume_page || page == "···") return;
        $scope.isHide = true;
        $location.url("/article/"+ page +"/"+$scope.show_page);
        _get(page,$scope.show_page);
    };

    $scope.j_index = function(){
        $scope.jume(1);
    };

    $scope.j_last = function(){
        $scope.jume($scope.all_page);
    };

    var reloadPno = function(){
        $scope.pages = calculateIndexes($scope.jume_page,$scope.all_page,5);
    };
    
    $scope.custom_jume = function(){
        $scope.isHide = true;
        if($scope.j_page){
            $scope.jume_page = Number($scope.j_page);
        }
        $location.url("/article/"+ $scope.jume_page +"/"+ $scope.show_page);
        _get($scope.jume_page,$scope.show_page);
    };

    var calculateIndexes = function (current, length, displayLength) { 
        var indexes = [];  
        var start = Math.round(current - displayLength / 2);  
        var end = Math.round(current + displayLength / 2);  
        if (start <= 1) { 
            start = 1;
            end = start + displayLength - 1;  
            if (end >= length - 1) {  
               end = length - 1;  
            }  
        }  
        if (end >= length - 1) {  
            end = length;
            start = end - displayLength + 1;  
            if (start <= 1) {  
               start = 1;  
            }  
        }  
        for (var i = start; i <= end; i++) {
            indexes.push(i);
        }
        if(end == $scope.all_page){
            indexes.unshift("···");
        }else{
            indexes.push("···");
        }
        return indexes; 
    }; 

    $scope.go = function(index){
        switch(index)
        {
            case "add":
                $location.url("/addarticle");
                break;
            case "article":
                $location.url("/article");
                break;
        }
    };

    $scope.isDisabled = function(num){
        if(num == $scope.page || num == "···"){
            return true;
        }else{
            return false;
        }
    };

    $scope.changeSize = function(){
        $scope.show_page = $scope.show_page.replace(/[^0-9]/g, '');
    };

    $scope.change = function(){
        $scope.j_page = $scope.j_page.replace(/[^0-9]/g, '');
        if($scope.j_page > $scope.all_page){
            $scope.j_page = $scope.all_page;
        }
    }
})



app.filter("typeSwitch", function() { //可以注入依赖
    return function(text) {
        switch (text)
            {
                case 0:
                    return "首页Banner";
                    break;
                case 1:
                    return "找职位Banner";
                    break;
                case 2:
                    return "找精英Banner";
                    break;
                case 3:
                    return "行业大图";
                    break;
            }
    }
});

app.filter("statusSwitch", function() { //可以注入依赖
    return function(text) {
        switch (text)
            {
                case 1:
                    return "草稿";
                    break;
                case 2:
                    return "上线";
                    break;
            }
    }
});

app.filter("statusChange", function() { //可以注入依赖
    return function(text) {
        if(text == 1){
            return "上线";
        }else{
            return "下线";
        }
    }
});
