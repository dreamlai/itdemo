var Ajax = {
        post: function(user, fn){
            var xhr = new XMLHttpRequest();
            var url = "/carrots-admin-ajax/a/login/";
            xhr.open("POST", url, true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304){
                    fn.call(this, xhr.responseText);
                }
            }
            xhr.send(user);
        }
    }
var username = document.querySelector(".username input");
var password = document.querySelector(".password input");
var tips = document.querySelector(".tips");
var btn = document.querySelector(".btn");
function check(){
    var _this;
    Ajax.post("name=" + username.value + "&" + "pwd=" + password.value, function(){
        _this = JSON.parse(this.responseText);
        if(_this.message == "success"){
            sessionStorage.setItem("data", this.responseText);
            window.location.href = "backstage.html";
        }else{
            tips.innerHTML = _this.message;
            tips.style.display = "block";
        }
    })
}

btn.addEventListener("click", function(){
    if(!username.value.trim() || username.value.length < 4 || username.value.length > 18){
        clear();
        tips.innerHTML = "用户为空或长度错误！";
        tips.style.display = "block";
    }else if(!password.value || password.value.length < 4 || password.value.length > 18){
        clear();
        tips.innerHTML = "密码为空或长度错误！";
        tips.style.display = "block";
    }else{
        check();
    }
})

function clear(){
    tips.innerHTML = "";
}
username.addEventListener("focus", clear);
password.addEventListener("focus", clear);

window.addEventListener("keydown", function(event){
    if(event.keyCode == 13){
        check();
    }else{
        clear();
    }
})