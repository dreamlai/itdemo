var add = angular.module("userApp",[]);
add.controller('add', function(posts, $scope){
    var formData = new FormData();
    $scope.get_file = function(ele){
        var reader = new FileReader();
        reader.readAsDataURL(ele.files[0],"UTF-8")
        reader.addEventListener('load', function () {
            console.log(ele.files)
            $scope.$apply(function(){
                $scope.files = reader.result;
            });
        }, false)

        $scope.user_file = ele.files;
        formData.append("img",ele.files[0])
    }

    $scope.online = function(){
        console.log($scope.form_data)
    }

    $scope.upload_img = function(){
        console.log($scope.user_file)
        posts.imgFile(formData).then(function(data){
            console.log(data)
        })
    }
})

add.filter("file_size", function() { //可以注入依赖
    return function(size) {
        return (size / (1024 * 1024)).toFixed(2) + "MB";
    }
});

