export default function popup(json){

    const options = json;

    var pop, small_btn, large_btn, mask;

    // 创建弹出层元素
    var setNode = function(){
        // 主div
        pop = document.createElement("div");
        pop.className = "popup auto";
        // 头
        var header = document.createElement("div");
        header.className = "popup-header";
        var title = document.createElement("p");
        title.className = "popup-title";
        title.innerHTML = options.title;
        small_btn = document.createElement("a");
        small_btn.className = "small_btn";
        small_btn.innerHTML = "X";
        header.appendChild(title);
        header.appendChild(small_btn);
        // 主内容
        var main = document.createElement("div");
        main.className = "popup-main";
        var content = document.createElement("p");
        content.className = "popup-content";
        content.innerHTML = options.content;
        main.appendChild(content);
        // 脚
        var footer = document.createElement("div");
        footer.className = "popup-footer";
        for(var name in options.buttons){
            (function(name){
                large_btn = document.createElement("a");
                large_btn.className = "btn";
                large_btn.innerHTML = name;
                footer.appendChild(large_btn);
            })(name);
        };
        
        pop.appendChild(header);
        pop.appendChild(main);
        pop.appendChild(footer);

        // 遮罩层
        mask = document.createElement("div");
        mask.className = "mask";

        document.body.appendChild(mask);
        document.body.appendChild(pop);
    }
    setNode();

    // 计算弹出层的位置
    var resize = function(){
        pop.style.top = (document.documentElement.clientHeight - pop.offsetHeight)/2 + "px";
        pop.style.left = (document.documentElement.clientWidth - pop.offsetWidth)/2 + "px";
    }

    resize();

    // 弹出层关闭
    var close = function(){
        pop.classList.remove("auto");
        pop.classList.add("close-out");
        pop.addEventListener("animationend", function(){
            document.body.removeChild(mask);
            document.body.removeChild(pop);
        })
    }

    window.addEventListener("resize", resize)
    
    small_btn.addEventListener("click", close);

    var confirm = document.querySelectorAll(".popup .btn");
    confirm[0].addEventListener("click",options.buttons["确认"]);
    confirm[1].addEventListener("click", close);
    
}
