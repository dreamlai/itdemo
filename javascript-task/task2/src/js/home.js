import '../css/home.scss';

var item = document.querySelectorAll(".game-list .item"),

    a_target = document.querySelectorAll(".game-list a"),

    icon_btn = document.querySelectorAll(".icon-nav .item"),
    next = document.querySelector(".next-ver"),
    prev = document.querySelector(".prev-ver"),

    navbar_btn = document.querySelector(".navbar-toggle"),
    main_cont = document.querySelector(".content-wrap"),
    more_cont = document.querySelector(".content-more"),
    main = document.querySelector(".content"),

    historty_tips = document.querySelector(".ver-history .tips"),
    game_title = document.querySelector(".ver-title"),
    game_name = ["杀人游戏","捉鬼游戏","游戏3","游戏4"],
    i = 0,
    isOn = false,
    len = item.length;

// 判断是否有历史记录
if(sessionStorage.getItem("game_name")){
    historty_tips.innerHTML = "上次游戏：" + sessionStorage.getItem("game_name");
}

// 游戏项目切换
function slide(num) {
    for(var j = 0; j < len; j++) {
        item[j].className = "item";
        icon_btn[j].className = "item";
    }
    item[num].className += " active";
    icon_btn[num].className += " active";
    game_title.innerHTML = game_name[num];
}

// 下一个游戏项目
next.addEventListener("click", function(){
    i >= len - 1 ? i = 0 : i++;
    slide(i);
})

// 上一个游戏项目
prev.addEventListener("click", function(){
    i == 0 ? i = 3 : i--;
    slide(i);
})

// 游戏项目小图标切换
for(var x = 0; x < len; x++){
    icon_btn[i].index = x;
    (function(x){
        icon_btn[x].addEventListener("click", function(){
            slide(x);
        })
    })(x)
}

// 添加历史记录
for (var o = 0; o < a_target.length; o++){
    a_target[o].addEventListener("click", function(){
        sessionStorage.setItem("game_name", game_title.innerHTML);
    })
}

var mask = document.createElement("div");
mask.classList.add("mask");

// 更多内容展开收缩
function navToggle(){
    if(!isOn){
        main_cont.classList.add("on");
        more_cont.classList.add("show");
        main_cont.appendChild(mask);
        isOn = true;
    }else{
        main_cont.classList.remove("on");
        more_cont.classList.remove("show");
        isOn = false;
    }
}

navbar_btn.addEventListener("click", navToggle)

// 跟多内容展开后，点击主内容任何地方后收缩
mask.addEventListener("click", function(){
    main_cont.className = "content-wrap";
    main_cont.removeChild(mask);
    more_cont.className = "content-more";
    isOn = false;
})

