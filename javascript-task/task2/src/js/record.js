import "../css/record.scss";
import '../js/module/popup.js';
import "../js/module/get_player.js";

if(!sessionStorage.getItem("game")){
    window.location.href = "home.html";
}
var player_state = JSON.parse(sessionStorage.getItem("player_state"));

function end_game(){
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
    });
}
var close = document.querySelector(".close");
close.addEventListener("click", end_game)
var end = document.querySelector(".end-game");
end.addEventListener("click", end_game)

var game_config = JSON.parse(sessionStorage.getItem("game"));

var day_record = {
    "第一天":{
        night: "",
        day: ""
    }
};



// 法官日记弹出
var diary = document.querySelector(".judge-diary");
diary.addEventListener("click", function(){
    var diary_main = document.createElement("div");
    diary_main.classList.add("vote");

    var header = document.createElement("header");
    var title = document.createElement("p");
    title.classList.add("head-title");
    title.innerHTML = "法官日记";
    header.appendChild(title);

    var main = document.createElement("div");
    main.classList.add("main");
    var box = document.createElement("div");
    box.classList.add("all-player");
    main.appendChild(box);

    var foot = document.createElement("footer");

    diary_main.appendChild(header);
    diary_main.appendChild(main);
    diary_main.appendChild(foot);

    document.body.appendChild(diary_main);
    document.body.classList.add("on");

    get_player({
        main: diary_main,
        "buttons": {
                "返回": function(){
                    document.body.removeChild(diary_main);
            }
        }
    });
});

// 杀人和投死页面弹出
(function(window, document){

    var defaults = {};

    function vote(options) {
        Object.assign(defaults, options);
        if(!(this instanceof vote))return new vote(options);
        this.init();
    };

    vote.prototype = {
        init: function(){
            var vote_box = document.createElement("div");
            vote_box.classList.add("vote");

            var header = document.createElement("header");
            var title = document.createElement("p");
            title.classList.add("head-title");
            title.innerHTML = defaults.title;
            header.appendChild(title);

            var main = document.createElement("div");
            main.classList.add("main");
            main.classList.add("kill-vote");
            var tips_info = document.createElement("div");
            tips_info.classList.add("tips-info");
            var rule = document.createElement("p");
            rule.classList.add("rule");
            rule.innerHTML = defaults.rule;
            var tips = document.createElement("p");
            tips.classList.add("rule_tips");
            tips.innerHTML = defaults.tips;
            tips_info.appendChild(rule);
            tips_info.appendChild(tips);
            var all_player = document.createElement("div");
            all_player.classList.add("all-player");
            main.appendChild(tips_info);
            main.appendChild(all_player);

            var foot = document.createElement("footer");

            vote_box.appendChild(header);
            vote_box.appendChild(main);
            vote_box.appendChild(foot);

            document.body.appendChild(vote_box);

            get_player({
                main: vote_box,
                buttons: {
                        "确定": function(){
                            var choose = document.querySelector("input[type=radio]:checked");
                            var day_num = defaults.main.querySelector(".day-num").innerHTML;
                            var _killer = defaults.main.querySelector(".kill-record");
                            var _vote = defaults.main.querySelector(".vote-record");
                            if(!choose){
                                if(defaults.title == "杀手杀人"){
                                    _killer.innerHTML = "没有进行任何操作";
                                    _killer.style.display = "block";
                                    day_record[day_num] = {};
                                    day_record[day_num].night = _killer.innerHTML;
                                    document.body.removeChild(vote_box);
                                } else {
                                    popup({
                                        title: "警告",
                                        content: "请先选择要操作的玩家",
                                        buttons: {
                                            "关闭": {}
                                        }
                                    })
                                }
                            }else if(defaults.title == "杀手杀人" && player_state[choose.id].name == "杀手"){
                                popup({
                                    title: "警告",
                                    content: "你是杀手不能杀死本职业，请选择其他玩家杀死",
                                    buttons: {
                                        "关闭": {}
                                    }
                                })
                            }else {
                                player_state[choose.id].state = "die";         
                                if(defaults.title == "杀手杀人"){
                                    _killer.innerHTML = choose.id + "号被杀手杀死，真实身份是" + player_state[choose.id].name;
                                    _killer.style.display = "block";
                                    day_record[day_num] = {};
                                    day_record[day_num].night = _killer.innerHTML;
                                }else{
                                    _vote.innerHTML = choose.id + "号被投票投死了，真实身份是" + player_state[choose.id].name;
                                    _vote.style.display = "block";
                                    day_record[day_num].day = _vote.innerHTML;
                                }
                                player_state[choose.id].name == "杀手" ? game_config.killer-- : game_config.civilian--;
                                document.body.removeChild(vote_box);
                                sessionStorage.setItem("player_state",JSON.stringify(player_state));
                            }
                            console.log(day_record)
                            if(game_config.killer >= game_config.civilian || game_config.killer == 0){
                                sessionStorage.setItem("day_record",JSON.stringify(day_record));
                                sessionStorage.setItem("game",JSON.stringify(game_config));
                                window.location.href = "result.html";
                            }
                    }
                }
            });
        }
    }
    window.vote = vote;
}(window, document));

function hideNode(){
   this.classList.toggle("hide");
}

// 游戏流程控制
(function(){
    // 游戏流程
    var _this;
    var _main;

    var game_flow = {

        currentDay: 1,

        // 当前状态
        currentState: 1,
    　　
        // 绑定事件
        addEvent: function() {
        　　_this = this;
    　　　　_main = arguments[0];
            self = _main.querySelectorAll(".step");
            for(var i = 0; i < self.length; i++){
    　　　　    self[i].addEventListener("click", _this.flow);
            }
        },
    　　
        // 状态转换
        flow: function(event){
            if(this.classList.contains("end")){
                tips({
                    "content": "请进行下一步骤！",
                });
            }else if(this !== self[_this.currentState - 1]){
                tips({
                    "content": "请按顺序操作！",
                });
            }else{
                switch(_this.currentState) {
                    case 1:
                        vote({
                            "title": "杀手杀人",
                            "rule": "杀手请睁眼，杀手请选择要杀的对象",
                            "tips": "点击下方玩家头像，对被杀的玩家进行标记",
                            "main": _main
                        });
                        self[_this.currentState - 1].classList.add("end");
                        _this.currentState = 2;
                        
                    　　break;
                    case 2:
                        popup({
                            "title": "温馨提示",
                            "content": "请死者亮明身份并且发表遗言",
                            "buttons": {
                                "关闭":function(){},
                                "确认":function(){
                                    self[_this.currentState - 1].classList.add("end");
                                    popup.prototype.close();
                                    _this.currentState = 3;
                                }
                            }
                        });
                    　　break;
                    case 3:
                        popup({
                            "content": "玩家依次发言讨论！",
                            "buttons": {
                                "关闭":function(){},
                                "确认":function(){
                                    self[_this.currentState - 1].classList.add("end");
                                    popup.prototype.close();
                                    _this.currentState = 4;
                                }
                            }
                        });
                    　　break;
                    case 4:
                        vote({
                            title: "投票",
                            rule: "发言讨论结束，大家请投票",
                            tips: "点击得票数最多的人的头像",
                            main: _main
                        })
                        self[_this.currentState - 1].classList.add("end");
                        _this.currentDay++;
                        setDay(_this.currentDay);
                        var day = document.querySelectorAll(".day-num");
                        day[_this.currentDay - 2].classList.add("hide");
                        
                        _this.currentState = 1;
                        
                    　　break;
                    default:
                        console.log("case错误！");
                    　　break;
                }
            }
        }
    }
    window.game_flow = game_flow;
}())

// 天数生成
function setDay(name){
    name = String(name);
    var newchar = "";
    for (var i = name.length - 1; i >= 0; i--) {
        var tmpnewchar = "";
        var perchar = name.charAt(i);
        switch (perchar) {
            case "0":  tmpnewchar = "零";break;
            case "1": tmpnewchar = "一"; break;
            case "2": tmpnewchar = "二"; break;
            case "3": tmpnewchar = "三"; break;
            case "4": tmpnewchar = "四"; break;
            case "5": tmpnewchar = "五"; break;
            case "6": tmpnewchar = "六"; break;
            case "7": tmpnewchar = "七"; break;
            case "8": tmpnewchar = "八"; break;
            case "9": tmpnewchar = "九"; break;
        }
        switch (name.length - i - 1) {
            case 0: tmpnewchar = tmpnewchar; break;
            case 1: if (perchar != 0) tmpnewchar += "十"; break;
            case 2: if (perchar != 0) tmpnewchar += "百"; break;
        }
        newchar = tmpnewchar + newchar;
    }
    var _process = document.createElement("div");
    _process.classList.add("process");

    var title = document.createElement("p");
    title.classList.add("day-num");
    title.innerHTML = "第" + newchar + "天";
    title.addEventListener("click", hideNode);

    var content = document.createElement("div");
    content.classList.add("content");
    var day = document.createElement("div");
    day.classList.add("day");
    var kill = document.createElement("button");
    kill.classList.add("step");
    kill.innerHTML = "杀手杀人";
    var kill_record = document.createElement("p");
    kill_record.classList.add("record");
    kill_record.classList.add("kill-record");
    day.appendChild(kill);
    day.appendChild(kill_record);
    var night = document.createElement("div");
    night.classList.add("night");
    var _Words = document.createElement("button");
    _Words.classList.add("step");
    _Words.innerHTML = "亡灵发表遗言";
    night.appendChild(_Words);
    var speak = document.createElement("button");
    speak.classList.add("step");
    speak.innerHTML = "玩家依次发言";
    night.appendChild(speak);
    var vote = document.createElement("button");
    vote.classList.add("step");
    vote.innerHTML = "投票";
    var vote_record = document.createElement("p");
    vote_record.classList.add("record");
    vote_record.classList.add("vote-record");
    night.appendChild(vote);
    night.appendChild(vote_record)

    content.appendChild(day);
    content.appendChild(night);

    _process.appendChild(title);
    _process.appendChild(content);

    game_flow.addEvent(_process);

    document.querySelector(".main").appendChild(_process);
}

setDay(1);
