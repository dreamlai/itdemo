import "../css/identity.scss";
import popup from '../js/module/popup.js';

// 判断是否有游戏配置
if(!sessionStorage.getItem("game")){
    window.location.href = "matching.html";
}

// 标签节点获取
var iden_card = document.querySelector(".iden-card"),
    enter_btn = document.querySelector(".enter-btn"),
    cover = document.querySelector(".cover"),
    content = document.querySelector(".content"),
    iden_name = document.querySelector(".iden-name"),
    num = document.querySelector(".order-num"),
    end = document.querySelector(".close"),
    i = 1;

// 提取游戏配置
var game_config = JSON.parse(sessionStorage.getItem("game"));

var rand = [];
var player_arr = [];
var len = game_config.player_num;

// 取玩家数量的随机数
function random(){
    rand = [];
    while(rand.length < len){
        var isSame = true;
        var num = Math.floor(Math.random()* len);
        if(rand.length == 0){
            rand.push(num);
        }
        for(var i in rand){
            if(num == rand[i]){
                isSame = false;
            }
        }
        if(isSame){
            rand.push(num);
        }
    }
}

// 将玩家按照随机数安插到数组
function matching(){
    var k_num = game_config.killer;
    var c_num = game_config.civilian;
    for (var i = 0; i < k_num; i++) {
        player_arr[rand[i]] = "杀手";
    }
    for (var i = 0; i < c_num; i++) {
        player_arr[rand[i + k_num]] = "村民";
    }
}

random();
matching();

var isSee = false;
// 进行身份传递
enter_btn.addEventListener("click", function(){
    if(i > len){
        sessionStorage.setItem("all-player", player_arr );
        window.location.href = "judge-diary.html";
    }else if(!isSee){
        iden_card.classList.add("rotate");
        cover.style.opacity = "0";
        content.style.opacity = "1";
        iden_name.innerHTML = player_arr[i-1];
        if(i == len){
            enter_btn.innerHTML = "法官查看";
        }else{
            enter_btn.innerHTML = "隐藏并传递给" + (i + 1) + "号";
        }
        isSee = true;
        i++;
    }else{
        iden_card.classList.add("rotate");
        cover.style.opacity = "1";
        content.style.opacity = "0";
        enter_btn.innerHTML = "查看" + i + "号身份";
        num.innerHTML = i;
        isSee = false;
    }
})

// 监听animation结束
iden_card.addEventListener("animationend", function(){
    iden_card.classList.remove("rotate");
})

// 退出提示
end.addEventListener("click", function(){
    popup({
        "title": "温馨提示",
        "content": "是否要结束本轮游戏？",
        "buttons": {
            "确认":function(){
                window.location.href = "home.html";
            },
            "关闭":function(){
                
            }
        }
    });
});


