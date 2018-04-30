import "../css/result.scss";
import '../js/module/popup.js';


var game_config = JSON.parse(sessionStorage.getItem("game"));
var day_record = JSON.parse(sessionStorage.getItem("day_record"));
console.log(game_config)
console.log(day_record)


function setNode(name,num){
    var surplus = document.querySelector(".census-list");
    var li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = name + num + "人";
    surplus.appendChild(li);
}

setNode("杀手",game_config.killer);
setNode("平民",game_config.civilian);

function record(name){
    var detail = document.querySelector(".detail");
    
    var day_num = document.createElement("p");
    day_num.classList.add("day-num");
    day_num.innerHTML = name;

    var _process = document.createElement("div");
    _process.classList.add("process");

    var night = document.createElement("p");
    night.classList.add("night");
    night.innerHTML = "晚上：" + day_record[name].night;

    var day = document.createElement("p");
    day.classList.add("night");
    day.innerHTML = "白天：" + day_record[name].day;

    _process.appendChild(night);
    _process.appendChild(day);
    detail.appendChild(day_num);
    detail.appendChild(_process);
}

for(var name in day_record){
    record(name);
}

var close = document.querySelector(".close");
close.addEventListener("click", function(){
    popup({
        "title": "温馨提示",
        "content": "是否要结束本轮游戏？",
        "buttons": {
            "关闭":function(){
            },
            "确认":function(){
                window.location.href = "home.html";
            }
        }
    })
})