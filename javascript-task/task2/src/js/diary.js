import "../css/diary.scss";
import "../js/module/popup.js";
import "../js/module/get_player.js";

if(!sessionStorage.getItem("player_state")){
    window.location.href = "home.html";
}

var content = document.body;
get_player({
    main: content,
    buttons: {
        "开始游戏": function(){
            window.location.href = "record.html";
        }
    }
});

var close = document.querySelector(".close");
close.addEventListener("click", function(){
    popup({
        "title": "温馨提示",
        "content": "是否要结束本轮游戏？",
        "buttons": {
            "确认":function(){
                window.location.href = "home.html";
            },
            "关闭":function(){}
        }
    });
})

