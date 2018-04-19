var app = angular.module("userApp", ["ui.bootstrap"]);

app.controller('mydata', function (gets,$scope, $http, $location, $stateParams, $filter) {
    $scope.jume_page = $stateParams.page;
    $scope.show_page = $stateParams.size;
    $scope.all_page =0;
    $scope.pages = [];
    $scope.isHide = true;
    var promise;

    if($location.search() !== ""){
        $scope.rtime1 = new Date($filter('date')($location.search().startAt, 'yyyy-MM-dd'));
        $scope.rtime2 = new Date($filter('date')($location.search().endAt, 'yyyy-MM-dd'));
        $scope.type = $location.search().type;
        $scope.status = $location.search().status;
        promise = gets.search($location.search());
    }else{
        promise = gets.article();
    }


    var _get = function(){
        promise.then(function (Data) {  //正确请求成功时处理  
            $scope.datas = Data.data.data.articleList;
            $scope.all_page = Math.ceil(Data.data.data.total/$scope.show_page);
            reloadPno();
            console.info(Data);
            $scope.isHide = false;
        });
    }

    _get();

    $scope.init_page = function(){
        $scope.rtime1 = "";
        $scope.rtime2 = "";
        $scope.type = "";
        $scope.status = "";
        $scope.isHide = true;
        promise = gets.article();
        _get();
    }

    $scope.jume = function(page){
        if (page == $scope.jume_page || page == "···") return;
        $scope.isHide = true;
        $location.url("/article/"+ page +"/"+$scope.show_page);
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
        if(!$scope.show_page){
            return false;
        }else if(!$scope.j_page){
            $location.url("/article/"+ $scope.jume_page +"/"+$scope.show_page);
        }else{
            $location.url("/article/"+ $scope.j_page +"/"+$scope.show_page);
        }
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
        $scope.isHide = true;
        if($scope.rtime1){
            $scope.rtime1 = $scope.rtime1.valueOf()
        }
        
        if($scope.rtime2){
            $scope.rtime2 = $scope.rtime2.valueOf()
            console.log($scope.rtime1.valueOf())
        }

        var search_data = {
            "startAt": $scope.rtime1,
            "endAt": $scope.rtime2,
            "type": $scope.type,
            "status": $scope.status,
        }

        angular.forEach(search_data, function(value, key){
            if(!value){
               delete search_data[key];
            }
        })

        $location.url($location.path()+"?" + $.param(search_data))

        promise = gets.search(search_data);

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

app.filter("Formats", function() { //可以注入依赖
    return 1
});

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
