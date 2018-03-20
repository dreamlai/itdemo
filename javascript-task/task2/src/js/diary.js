import "../css/diary.scss";
import popup from '../js/module/popup.js';

if(!sessionStorage.getItem("all-player")){
    window.location.href = "identity.html";
}

var close = document.querySelector(".close");

var game_start = document.querySelector(".game-start");

var content = document.querySelector(".all-player");
var all_player = sessionStorage.getItem("all-player").split(",");

close.addEventListener("click", function(){
    popup({
        "title": "温馨提示",
        "content": "是否要结束本轮游戏？",
        "buttons": {
            "确认":function(){
                window.location.href = "identity.html";
            },
            "关闭":function(){
                
            }
        }
    });
});
function setNode(player_name,index){
    var player = document.createElement("div");
    player.className = "player";

    var detail = document.createElement("div");
    detail.className = "detail";

    var identity = document.createElement("p");
    identity.className = "identity";
    identity.innerHTML = player_name;

    var number = document.createElement("p");
    number.className = "number";
    number.innerHTML = index;

    detail.appendChild(identity);
    detail.appendChild(number);
    player.appendChild(detail)

    content.appendChild(player);
}

for(var name in all_player ){
    setNode(all_player[name], parseInt(name) + 1);
}

game_start.addEventListener("click", function(){
    window.location.href = "record.html";
});