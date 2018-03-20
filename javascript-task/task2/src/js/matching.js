import "../css/matching.scss";
import popup from '../js/module/popup.js';

 "use strict";

var input_num = document.querySelector(".input-num"),
    enter_watch = document.querySelector(".enter-watch"),
    killer_num = document.querySelector(".killer .num"),
    civilian_num = document.querySelector(".civilian .num");

// 默认游戏配置
const game_config = {
    game_name: sessionStorage.getItem("game_name"),
    player_num: 8,
    killer: 2,
    civilian: 6,
}

function defa(){
    popup({
        "title": "温馨提示",
        "content": "请输入正确的玩家数量！",
        "buttons": {
            "关闭": function(){
            }
        }
    });
    input_num.value = "8";
}

// 验证输入数字
function check(){
    var value = parseInt(input_num.value);
    if(isNaN(value)){
       defa()
    }else if(value > 18 || value < 4){
       defa()
    }else{
        var i = Math.round(value * 0.3);
        killer_num.innerHTML = i;
        civilian_num.innerHTML = value - i;
        game_config.player_num = value;
        game_config.killer = i;
        game_config.civilian = value - i;
    }
}

input_num.addEventListener("blur", check)

input_num.addEventListener("focus", function(){
    this.select();

    window.addEventListener("keydown", function(event){
        if(event.keyCode == 13 ){
            input_num.blur();
        }
    })
    
})

// 确认输入完成，传值
enter_watch.addEventListener("click",function(){
    check();
    sessionStorage.setItem("game", JSON.stringify(game_config));
    window.location.href = "identity.html";
})


