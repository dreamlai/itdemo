var app = angular.module("userApp", ["ui.bootstrap","ui.router"]);

<<<<<<< HEAD
app.controller('mydata', function (data, type, state, $scope, $http, $location, $stateParams, $filter, $state, alerts) {
=======
app.controller('mydata', function (type, state, gets, posts, $scope, $http, $location, $stateParams, $filter, $state) {
>>>>>>> bdc96a3a06821818e0e177bdd380418fb7066e64
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
<<<<<<< HEAD
=======

>>>>>>> bdc96a3a06821818e0e177bdd380418fb7066e64
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

<<<<<<< HEAD
        // $state.go($state.current+"?"+ $.param(search_data), {}, {reload: true});

        promise = data.search($.extend(search_data, page_num));
=======
        promise = gets.search($.extend(search_data, page_num));
>>>>>>> bdc96a3a06821818e0e177bdd380418fb7066e64
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
<<<<<<< HEAD
        $state.go($state.current, {page:1,size:10}, {reload: true});
=======
        $state.go("main.article",{page:1,size:10});
        _get();
>>>>>>> bdc96a3a06821818e0e177bdd380418fb7066e64
    }

    $scope.jume = function(page){
        if (page == $scope.jume_page || page == "···") return;
<<<<<<< HEAD
        $state.go($state.current, {"page":page,"size":$scope.show_page}, {reload: true});
=======
        $location.url("/article/"+ page +"/"+$scope.show_page);
        _get()
>>>>>>> bdc96a3a06821818e0e177bdd380418fb7066e64
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
<<<<<<< HEAD
            $state.go($state.current, {"page":1,"size":$scope.show_page}, {reload: true});
        }else{
            $state.go($state.current, {"page":$scope.j_page,"size":$scope.show_page}, {reload: true});
        }
        // _get()
=======
            $location.url("/article/"+ 1 +"/"+$scope.show_page);
        }else{
            $location.url("/article/"+ $scope.j_page +"/"+$scope.show_page);
        }
        _get()
>>>>>>> bdc96a3a06821818e0e177bdd380418fb7066e64
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
<<<<<<< HEAD
        _get();
        // $state.go($state.current, {"page": 1,"size": $scope.show_page}, {reload: true});
=======
        $location.url("/article/"+ 1 +"/"+$scope.show_page);
        _get();
>>>>>>> bdc96a3a06821818e0e177bdd380418fb7066e64
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
<<<<<<< HEAD
   
   $scope.stateChange = function(id, st){
        if(st == 1){
            alerts.complex("上线后该图片将在轮播banner中展示。", "是否执行上线操作？", function(){
                data.stateChange(id, 2).then(function(data){
                    if(data.data.code == 0) {
                        $state.go($state.current,{}, {reload: true});
                        alerts.simple("上线成功！",function(){

                        });
                    }else{
                        alerts.simple(data.data.message);
                    }
                })
            });
        }else{
            alerts.complex("下线后该图片将在轮播banner中展示。", "是否执行下线操作？", function(){
                data.stateChange(id, 1).then(function(data){
                    if(data.data.code == 0) {
                        $state.go($state.current,{}, {reload: true});
                        alerts.simple("下线成功！",function(){
                        });
                    }else{
                        alerts.simple(data.data.message,function(){
                        });
                    }
                })
            });
        }
        
   }

   $scope.dataDelete = function(id){
        alerts.simple("是否确认删除？", function(){
            data.delete(id).then(function(data){
                if(data.data.code == 0) {
                    $state.go($state.current,{}, {reload: true});
                    alerts.simple("删除成功！",function(){
                    });
                }else{
                    alerts.simple(data.data.message,function(){
                    });
                }
            })
        });
   }

   $scope.edit = {
   }

=======
>>>>>>> bdc96a3a06821818e0e177bdd380418fb7066e64

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
