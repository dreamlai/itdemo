var Ajax = {
        get: function(url, fn){
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304){
                    fn.call(this, xhr.responseText);
                }
            }
            xhr.send();
        }
    }
var username = document.querySelector(".username input");
var password = document.querySelector(".password input");
var tips = document.querySelector(".tips");
var btn = document.querySelector(".btn");
function check(){
    var _this;
    Ajax.get("http://www.dreamlai.com:888/carrots-admin-ajax?callback=user", function(){
        _this = JSON.parse(this.responseText);
        if(username.value == _this["name"] && password.value == _this["password"]){
            sessionStorage.setItem("name", username.value);
            window.location.href = "backstage.html";
        }else{
            tips.innerHTML = "用户或密码错误！";
            tips.style.display = "block";
        }
    })
}

btn.addEventListener("click", check)
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