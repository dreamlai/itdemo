var app = angular.module("userApp", ["ui.bootstrap","ui.router"]);

app.controller('mydata', function (type, state, gets, posts, $scope, $http, $location, $stateParams, $filter, $state) {
    $scope.jume_page = $stateParams.page;
    $scope.show_page = $stateParams.size;
    $scope.all_page =0;
    $scope.pages = [];
    $scope.isHide = true;
    var promise;
    
    if(JSON.stringify($location.search()) !== "{}"){
        $scope.rtime1 = new Date($filter('date')($location.search().startAt, 'yyyy-MM-dd'));
        $scope.rtime2 = new Date($filter('date')($location.search().endAt, 'yyyy-MM-dd'));
        $scope.searchTypes = $location.search().type;
        $scope.searchState = $location.search().status;
    }

    var search = function(){

        if($scope.rtime1){
            $scope.rtime1 = $scope.rtime1.valueOf()
        }

        if($scope.rtime2){
            $scope.rtime2 = $scope.rtime2.valueOf()
        }

        var page_num = {
            "page": $scope.jume_page,
            "size": $scope.show_page
        }

        var search_data = {
            "startAt": $scope.rtime1,
            "endAt": $scope.rtime2,
            "type": $scope.searchTypes,
            "status": $scope.searchState,
        }
        angular.forEach(search_data, function(value, key){
            if(!value && value !== 0){
               delete search_data[key];
            }else if(angular.isObject(value)){
                if(!value.id && value.id !== 0){
                    delete search_data[key];
                }else{
                    search_data[key] = value.id;
                }
            }
        })

        $location.url($location.path()+"?" + $.param(search_data))

        promise = gets.search($.extend(search_data, page_num));
    }
    var _get = function(){
        $scope.isHide = true;
        search();
        promise.then(function (Data) {  //正确请求成功时处理
            console.log(Data)
            if(!Data.data.data.articleList.length){
                alert("搜索结果为0");
                return;
            }
            $scope.datas = Data.data.data.articleList;
            $scope.all_page = Math.ceil(Data.data.data.total/$scope.show_page);
            reloadPno();
            $scope.isHide = false;
        });
    }

    _get();

    $scope.init_page = function(){
        $scope.rtime1 = "";
        $scope.rtime2 = "";
        $scope.searchTypes = "";
        $scope.searchState = "";
        $state.go("main.article",{page:1,size:10});
        _get();
    }

    $scope.jume = function(page){
        if (page == $scope.jume_page || page == "···") return;
        $location.url("/article/"+ page +"/"+$scope.show_page);
        _get()
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

    var calculateIndexes = function (current, length, displayLength) { 
        current = Number(current);
        length = Number(length);
        displayLength = Number(displayLength);
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

    $scope.custom_jume = function(){
        if($scope.jume_page > $scope.all_page){
            $scope.jume_page = 1;
        }
        if(!$scope.show_page){
            return false;
        }else if(!$scope.j_page){
            $location.url("/article/"+ 1 +"/"+$scope.show_page);
        }else{
            $location.url("/article/"+ $scope.j_page +"/"+$scope.show_page);
        }
        _get()
    }

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
    };

    $scope.search = function(){
        $location.url("/article/"+ 1 +"/"+$scope.show_page);
        _get();
    }

    $scope.rtime1;
    $scope.rtime2;
    $scope.datepickerOptions1={
        maxDate:$scope.dt2,
        showWeeks:false,
        startingDay:1
    };
    $scope.datepickerOptions2={
        minDate:$scope.dt1,
        showWeeks:false,
        startingDay:1
    };
    //打开popup
    $scope.pop1={
        opened:false
    };
    $scope.pop2={
        opened:false
    };
    $scope.openpop1=function(){
        $scope.pop1.opened=!$scope.pop1.opened;
    };
    $scope.openpop2=function(){
        $scope.pop2.opened=!$scope.pop2.opened;
    };

    //监听dt1 和dt2 如果dt1 变化就设置 datepickeroptions.mindate就变化

    $scope.$watch('rtime1',function(newValue,oldValue){
        $scope.datepickerOptions2.minDate=newValue;
    });
    $scope.$watch('rtime2',function(newValue,oldValue){
        $scope.datepickerOptions1.maxDate=newValue;
    });
    /*手动输入限制 使用表单验证
    *datepicker输入限制 使用maxDate minDate
    *startPopup   最小时间  没有限制 最大时间 endTime
    *endPopup 最小时间 startTime 最大时间 today
    */

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
