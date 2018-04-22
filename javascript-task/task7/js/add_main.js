var add = angular.module("userApp",["ui.bootstrap"]);

add.controller('add', function(type, industry, $uibModal, posts, $interval, $scope){
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
                $scope.files = reader.result;
            });
        }, false)
        $scope.user_file = ele.files;
        formData.append("file",$scope.user_file[0])
        $scope.progress = i;
        $scope.state = "glyphicon-remove";
    }

    $scope.online = function(state){
        var params = {
            title: $scope.addTitle,
            type: $scope.addType,
            img: $scope.files,
            content: $scope.addContent,
            status: state,
        }
        if($scope.addType == 3){
            params["industry"] = $scope.add_ind;
        }
        posts.article(params).then(function(data){
            if(data.data.message == "success"){
                $uibModal.open({  
                    templateUrl : "modules/popup.html",
                    controller: "modal"
                });
            }
        })
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
                    $scope.state = "glyphicon-ok";
                    $scope.success = true;
                }
            }, 100)
        };
        xhr.send(formData);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status == 200){
                    var data = JSON.parse(xhr.responseText);
                    $scope.files = data.data.url;
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

add.controller('modal', function($uibModalInstance, $scope, $state){
    $scope.ok = function(){
        $uibModalInstance.close();
        $state.go("main.article");
    }
})

add.filter("file_size", function() { //可以注入依赖
    return function(size) {
        return (size / (1024 * 1024)).toFixed(2) + "MB";
    }
});

