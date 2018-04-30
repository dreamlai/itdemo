var add = angular.module("userApp", ["ui.bootstrap", "ng.ueditor", "ui.router", "ngMessages"]);

add.controller('add', function ($location, alerts, type, industry, $uibModal, data, $interval, $scope, $state){
    if($location.search().id){
        data.single($location.search().id).then(function(data){
            $scope.addTitle = data.data.data.article.title;
            $scope.addType = type[data.data.data.article.type];
            $scope.files = data.data.data.article.img;
            $scope.addContent = data.data.data.article.content;
            $scope.addUrl = data.data.data.article.url;
            $scope.createAt = data.data.data.article.createAt;
            if(data.data.data.article.type == 3){
                $scope.add_ind = industry[data.data.data.article.industry];
            }
        })
        $scope.online = function(state){
            var params = {
                id: $location.search().id,
                title: $scope.addTitle,
                type: $scope.addType.id,
                img: $scope.files,
                content: $scope.addContent,
                url:　$scope.addUrl,
                status: state,
                createAt: $scope.createAt
            }
            if($scope.addType == 3){
                params["industry"] = $scope.add_ind;
            }
            params["updateAt"] = (new Date()).valueOf();
            data.edit($location.search().id, params).then(function(data){
                if(data.data.message == "success"){
                    alerts.simple("修改成功！", function(){
                        $state.go("main.article");
                    })
                }
            })
        }
    }else{
        $scope.online = function(state){
            var params = {
                title: $scope.addTitle,
                type: $scope.addType,
                img: $scope.files,
                content: $scope.addContent,
                url:　$scope.addUrl,
                status: state,
            }
            if($scope.addType == 3){
                params["industry"] = $scope.add_ind;
            }
            data.article(params).then(function(data){
                if(data.data.message == "success"){
                    alerts.simple("新增成功", function(){
                        $state.go("main.article");
                    })
                }
            })
        }
    }
    $scope.allType = type;
    $scope.industry = industry;
    var i =0;
    var formData = new FormData();
    $scope.get_file = function(ele){
        if((ele.files[0].size / (1024 * 1024)).toFixed(2) > 1){
            alert("文件超出限制大小");
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(ele.files[0],"UTF-8")
        reader.addEventListener('load', function () {
            $scope.$apply(function(){
                // $scope.files = reader.result;
            });
        }, false)
        $scope.user_file = ele.files;
        formData.append("file",$scope.user_file[0])
        $scope.progress = i;
        $scope.state = "glyphicon-remove";
    }

    
    
    $scope.upload_img = function(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/carrots-admin-ajax/a/u/img/task");
        xhr.upload.onprogress = function(e){
            var timer = $interval(function(){
                i++;
                $scope.progress = Math.floor(i / (e.total/10000) * 100);
                if(i > (e.total/10000)){
                    $interval.cancel(timer);
                }
            }, 500)
        };
        xhr.send(formData);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    var data = JSON.parse(xhr.responseText);
                    $scope.$apply(function(){
                        $scope.files = data.data.url;
                        $scope.state = "glyphicon-ok";
                        $scope.success = true;
                        // $scope.files = reader.result;
                    });
                }
            }
        }
    }
    $scope.delete = function(){
        $scope.user_file = undefined;
        console.log($scope.user_file)
        formData.delete("file");
        $scope.files = " ";
        $scope.success = false;
        i =0;
    }
	
})

add.filter("file_size", function() { //可以注入依赖
    return function(size) {
        return (size / (1024 * 1024)).toFixed(2) + "MB";
    }
});

